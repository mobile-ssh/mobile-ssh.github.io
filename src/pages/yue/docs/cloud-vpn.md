---
layout: ../../../layouts/DocLayout.astro
title: "雲端虛擬機同 wg-easy"
description: "建立有公網 IP 嘅雲端虛擬機，喺 Mobile SSH 儲存 SSH 連線，再獨立安裝 wg-easy，並說明供應商憑證、網絡同資源清理。"
---

# 雲端虛擬機同 wg-easy

喺自己嘅雲端帳戶建立 Linux 虛擬機，用 Mobile SSH 連線，再安裝 wg-easy 行 WireGuard VPN。將資源建立同安裝分開，你就可以用同一部虛擬機行其他服務，或者喺已有伺服器安裝 VPN。

**供應情況——2026年11月8日：**下面描述嘅係計劃中嘅獨立虛擬機建立插件流程。我哋審查過嘅本機 Android **VPN Setup** 實作，將資源建立、安裝同用戶端匯入合埋一齊；插件同目錄改動未發佈，亦未測試過真實雲端部署。獨立嘅 AWS、Google Cloud 同 Azure 項目目前只有清單同設定骨架；虛擬機列表同控制操作未實作，亦唔會建立虛擬機。如果你嘅插件目錄冇建立流程，請用下面嘅控制台同手動安裝說明。新原生流程需要相容嘅 Android 組建；未確認 iOS 有同等自動化功能。

## 兩個插件，各有職責

- **雲端資源建立插件：**用供應商 API 建立虛擬機、公網地址同所需網絡資源，再儲存 SSH 連線。佢保留雲端資源 ID，方便日後管理或刪除。
- **wg-easy 安裝插件：**用 SSH 連去所選已儲存伺服器，安裝 VPN 服務，並幫你建立用戶端設定。佢需要伺服器存取權同管理員權限，唔需要雲端 API 憑證。手動建立嘅虛擬機一樣用得。

交接資料應該包含已儲存伺服器參照、公網地址、SSH 連接埠、用戶名、SSH 憑證參照，同部署／資源 ID。雲端秘密同 SSH 私鑰唔應該複製去插件輸出或者虛擬機。移除 VPN 同刪除雲端虛擬機係兩個獨立操作。

## 準備帳戶同伺服器設定

1. 啟用雲端帳戶同計費，揀區域，並檢查虛擬機、磁碟同公網 IP 配額。睇清楚供應商目前嘅虛擬機、IPv4、儲存同流量收費；本指南唔假設有免費額度。
2. 本指南選用獨立 **Ubuntu 24.04 LTS** 虛擬機，至少有 **1 GB 記憶體同 20 GB 磁碟**，架構用 **amd64 或 arm64**。呢啲係今次設定嘅基準選擇，唔係 wg-easy 通用最低要求。用有 root 或 sudo 權限嘅登入帳戶；無人值守安裝需要非互動式提權。
3. 揀選或產生 SSH 金鑰，將私鑰留喺 Mobile SSH。只上載公鑰去雲端。Lightsail 嘅匯入流程要求 RSA SSH 金鑰。其他供應商同映像各有接受嘅金鑰類型。 目前 iOS SSH 用戶端支援 Ed25519/ECDSA 私鑰，唔支援 RSA 私鑰。喺 iOS 用 Lightsail，先用供應商嘅瀏覽器 SSH 控制台，將應用程式支援嘅公鑰加入 `authorized_keys`，再用嗰條金鑰連線。
4. 揀**公網 IPv4**；供應商有提供嘅話，優先用預留／靜態地址。私人地址、只有 IPv6 嘅實例，或者只供出站嘅 NAT 閘道，都唔符合本指南嘅端點要求。
5. 明確設定 SSH 來源 CIDR，例如你而家嘅公網 IPv4 後面加 `/32`。唔好以為插件預設已經限制存取。轉換流動數據同 Wi-Fi 之後，可能要喺雲端控制台更新規則。

雲端 API 憑證授權管理資源，SSH 金鑰授權登入伺服器，兩者唔同。API 秘密只可以輸入供應商嘅受保護憑證表單，唔好放入語音提示、終端指令或者原始檔。本機 Android 流程由原生程式碼處理供應商認證同加密憑證儲存；有需要時憑證會傳去對應供應商，唔會傳去虛擬機或者插件工作程序。離線語音模型唔會令雲端 API 呼叫、下載或者 SSH 喺冇網絡時照用。

## 揀雲端平台同取得公網地址

用**控制台設定**時，自己登入供應商；Mobile SSH 唔需要佢嘅 API 憑證。對於將來嘅**插件資源建立流程**，準備下表憑證，同所需嘅建立、讀取、網絡及刪除權限。支援嘅話，將存取範圍限於專用專案或部署。兩種方法都要遵守帳戶政策。

用 SSH 公鑰建立所選 Ubuntu 虛擬機，再套用下一節嘅 SSH 規則。連結解釋各供應商嘅地址同認證步驟。

<div class="doc-table" tabindex="0" role="region" aria-label="雲端供應商同公網地址">

| 供應商 | API 建立資源所需憑證 | 控制台嘅公網 IPv4 設定 |
| --- | --- | --- |
| AWS Lightsail | 存取金鑰 ID 同秘密；臨時憑證要加工作階段權杖。授予所需 [Lightsail 操作權限](https://docs.aws.amazon.com/service-authorization/latest/reference/list_lightsail.html)。 | 建立雙協定棧 Ubuntu 實例，揀 RSA SSH 金鑰，再分配同附加[同區域嘅靜態 IPv4](https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-create-static-ip.html)。Ubuntu 映像用 `ubuntu`。 |
| Google Cloud Compute Engine | 服務帳戶 JSON 金鑰加專案 ID。權限要包括虛擬機／磁碟、網絡、地址同防火牆操作；淨係 Network Admin 寫唔到防火牆規則。檢查 [IAM 權限](https://docs.cloud.google.com/compute/docs/access/iam)。 | 啟用 Compute Engine API，揀有互聯網路由嘅 VPC／子網，預留[區域性外部 IPv4](https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address)，再附加去虛擬機。設定相符嘅 SSH 用戶名／金鑰；OS Login 要另外設定身份。 |
| Microsoft Azure | 租戶 ID、應用程式／用戶端 ID、用戶端秘密嘅**值**同訂閱 ID。授予運算／網絡權限；建立資源群組仲要有上級範圍權限。睇[服務主體設定](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal)。 | 建立專用資源群組同 VNet／子網。將 [Standard 靜態 IPv4 Public IP](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses) 附加去虛擬機 NIC，再關聯 NSG。用建立時揀嘅管理員用戶名。 |
| DigitalOcean | 個人存取權杖，要有所需 Droplet、SSH 金鑰、Reserved IP、防火牆及相關[權限範圍](https://docs.digitalocean.com/reference/api/create-personal-access-token/)。 | 用 SSH 公鑰建立 Ubuntu Droplet，分配 [Reserved IPv4](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/)，再附加 Cloud Firewall。Ubuntu 初始登入通常係 `root`。 |
| Hetzner Cloud | 專案專用嘅 [Read & Write API 權杖](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/)。 | 建立 Ubuntu 伺服器，配備 [Primary IPv4](https://docs.hetzner.com/cloud/servers/primary-ips/overview/)、SSH 金鑰同 Cloud Firewall。用 `root`。檢查刪除伺服器時，獨立嘅 Primary IP 會唔會保留。 |
| Akamai / Linode | 個人存取權杖，要有 Linodes 同 Firewalls 讀寫權限，以及所需[讀取範圍](https://techdocs.akamai.com/linode-api/reference/get-started)。 | 建立有公網 IPv4 同 SSH 金鑰嘅 Ubuntu Linode，再附加 [Cloud Firewall](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-cloud-firewalls)。用 `root`。實例存在期間保留佢獲分配嘅地址。 |
| Vultr | 啟用咗 API 存取嘅 API 金鑰；[來源 IP 允許清單](https://docs.vultr.com/support/platform/users/how-can-i-manage-api-access-for-users)要容許手機而家嘅連線。 | 建立 Ubuntu Cloud Compute 實例，配備公網主要 IPv4、SSH 金鑰同 Firewall Group。用 `root`。[分配地址喺實例存在期間有效](https://docs.vultr.com/support/products/compute/how-do-i-get-a-vultr-compute-instance-dedicated-ip-address)；Reserved IP 係另外嘅選擇。 |
| Oracle Cloud Infrastructure | 租用戶／用戶 OCID、API 金鑰指紋同 [RSA 簽署私鑰](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm)，並登記相符嘅簽署公鑰。呢組同 SSH 金鑰分開。 | 建立 VCN、互聯網閘道，同有閘道路由嘅公用子網。將 [Reserved Public IPv4](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm) 分配去虛擬機 VNIC 嘅私人 IP。Canonical Ubuntu 用 `ubuntu`；設定安全清單／NSG。 |
| OVHcloud Public Cloud | 對應 EU／CA／US API 端點嘅應用程式金鑰、應用程式秘密同已驗證用戶金鑰。將 [API 權限](https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps)限於所選專案操作。 | 建立 Ubuntu [Public Cloud 實例](https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started)，透過 Ext-Net 用 Basic Public IP，並配置 SSH 金鑰同安全群組。用 `ubuntu`。Floating／Additional IP 係獨立資源。 |
| Scaleway Instances | IAM 應用程式嘅 API 秘密金鑰同專案 UUID，要有實例、儲存卷、IP、安全群組同 SSH 金鑰權限。睇 [API 金鑰建立](https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/)。 | 建立 Ubuntu 實例，附加[同一可用區嘅彈性路由 IPv4](https://www.scaleway.com/en/docs/instances/how-to/use-flexips/)，設定安全群組，再開機。用映像嘅 SSH 登入名，通常係 `root`。 |

</div>

**AWS EC2 替代方法：**喺公用子網啟動 Ubuntu，設有[互聯網閘道同 `0.0.0.0/0` 閘道路由](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html)，揀 SSH 金鑰同安全群組，再關聯 [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html)。用 `ubuntu`。本機自動適配器針對 Lightsail；EC2 要用控制台。淨係有 Elastic IP 唔會令私人子網連得到。

如果機構禁止服務帳戶金鑰、外部 IP 或者你揀嘅 SSH 認證方式，要取得管理員批准嘅設定。控制台設定唔會繞過呢啲限制。

## 建立資源並儲存 SSH 連線

喺計劃中嘅分開流程，開**插件**，由可信目錄安裝供應商嘅資源建立插件，揀帳戶同區域，再揀虛擬機規格、映像、公網地址同 SSH 金鑰。確認建立前，睇清楚資源同費用。只有管理功能、冇建立操作嘅插件做唔到呢一步；改用供應商控制台。

等供應商顯示虛擬機行緊，同 SSH 連得到。保留虛擬機、磁碟、地址同防火牆資源 ID。如果請求逾時，重試建立前先檢查或者恢復原有操作，避免整多一部要計錢嘅虛擬機。

將回傳連線儲存喺 Mobile SSH，或者喺**伺服器**手動加入：公網 IPv4、SSH 連接埠 `22`、映像用戶名，同相符私鑰憑證。連線前，透過供應商可信控制台核對 SSH 主機金鑰指紋。身份檢查同已儲存憑證可睇[快速開始](../getting-started/)。

## 設定兩層網絡

公網地址需要路由、雲端防火牆許可、客體防火牆許可，同正在監聽嘅服務。喺供應商防火牆／安全群組用以下規則；保留客體上必需嘅原有規則。

- **TCP 22：**容許所選管理 CIDR 存取 SSH。建立資源時設定。
- **UDP 51820：**容許會用 VPN 嘅網絡。漫遊用戶端可能需要 `0.0.0.0/0`。設定 WireGuard 時，用雲端資源插件或者控制台加入。
- **TCP 51821：**唔好向公網開放。wg-easy 管理介面只發佈到伺服器回環地址，再經 SSH 隧道存取。
- **出站流量：**容許套件／容器下載、DNS，同 VPN 要承載嘅互聯網流量。

檢查 Docker 嘅[防火牆行為](https://docs.docker.com/engine/install/ubuntu/#firewall-limitations)：發佈咗嘅容器連接埠可能繞過 UFW 規則。唔好淨靠 UFW 隱藏管理介面，亦唔好清空供應商防火牆鏈，尤其係 OCI 嘅儲存／iSCSI 規則。

## 喺所選虛擬機安裝 wg-easy

獨立安裝插件應該接收已儲存嘅 SSH 伺服器，並要求批准伺服器改動。佢應該檢查作業系統、權限、已有 Docker／VPN 安裝同連接埠衝突，保留持久資料，再報告安裝版本。佢唔需要雲端帳戶秘密；雲端防火牆改動交畀資源建立插件或者控制台。

舊啲嘅 **WireGuard (wg-easy)** 目錄插件需要活動 SSH 工作階段同 Docker。佢唔係新自動安裝插件，亦冇保證原生用戶端匯入。用相容嘅更新安裝插件，或者喺全新專用虛擬機上，用 Mobile SSH 終端行下面嘅手動流程。

### 透過 SSH 手動安裝

跟官方 [Ubuntu 說明](https://docs.docker.com/engine/install/ubuntu/)安裝 Docker Engine 同 Compose 插件，再下載指定版本嘅上游設定：

```sh
sudo mkdir -p /opt/wg-easy
sudo curl -fL https://raw.githubusercontent.com/wg-easy/wg-easy/v15.4.0/docker-compose.yml -o /opt/wg-easy/compose.yaml
```

啟動前，用有權限嘅終端編輯器編輯 `/opt/wg-easy/compose.yaml`。喺 `services.wg-easy` 下面替換映像，取消註解／設定環境區塊，再將連接埠映射換成以下值。保留上游檔案其餘部分，包括持久儲存卷、模組掛載、能力、網絡同 sysctls：

```yaml
image: ghcr.io/wg-easy/wg-easy:15.4.0@sha256:0e7bc9d34e86ddcaa92bc700d4d7dc9b33291dbc07ac8d13382f7c2095f949ec
environment:
  - INSECURE=true
ports:
  - "51820:51820/udp"
  - "127.0.0.1:51821:51821/tcp"
```

呢個係替換片段，唔係完整 Compose 檔案；保留服務下面嘅 YAML 縮排。`INSECURE=true` 只係容許回環 SSH 隧道使用 HTTP。唔好將管理連接埠發佈去互聯網。容器監聽同主機側回環映射唔同。睇上游 [HTTP 設定](https://wg-easy.github.io/wg-easy/latest/examples/tutorials/reverse-proxyless/)。

```sh
cd /opt/wg-easy
sudo docker compose -f compose.yaml config --quiet
sudo docker compose -f compose.yaml up -d
sudo docker compose -f compose.yaml ps
```

將容器嘅 `/etc/wireguard` 資料留喺持久儲存卷。唔好將舊 `PASSWORD`、`PASSWORD_HASH` 或 `WG_HOST` 安裝方法套落 v15；用佢嘅設定精靈。映像係刻意固定嘅：升級要審查新版本，再修改固定引用，唔係淨係行 `pull`。

## 開管理介面並加入用戶端

喺 Mobile SSH 建立[本機連接埠轉發](../port-forwarding/)，本機連接埠 `51821`、遠端主機 `127.0.0.1`、遠端連接埠 `51821`。保持 SSH 連線，喺同一部手機開 `http://127.0.0.1:51821`。如果本機連接埠有人用緊，揀另一個，並喺瀏覽器 URL 用返嗰個。

喺 wg-easy 嘅[首次啟動精靈](https://wg-easy.github.io/wg-easy/latest/guides/setup/)建立管理員帳戶，揀全新安裝，將 VPN 端點設為虛擬機公網 IPv4 或 DNS 名稱，連接埠用 `51820`。VPN 端點唔係網頁介面嘅回環地址或者連接埠 `51821`。

每部裝置建立一個用戶端，下載佢嘅 WireGuard `.conf`。如果你嘅 Mobile SSH 組建有提供，開 **VPN → WireGuard**，加入設定檔、匯入檔案並儲存。目前 Android 同 iOS 原始碼支援檔案匯入；請檢查已安裝組建。本機 Android 合併流程可以直接匯入，但唔代表舊插件或者 iOS 自動化都有。設定檔同 QR 碼有私鑰，記得保密。

## 驗證 VPN 同處理故障

啟動設定檔，批准作業系統嘅 VPN 請求。檢查近期對等端握手同增加中嘅流量計數，再測試 DNS 同預期互聯網或私人網絡路由。匯入咗設定檔或者容器行緊，唔等於 VPN 用得。

- **虛擬機建立被拒：**檢查計費、配額、區域容量、憑證到期同準確 IAM 權限。Google Cloud 防火牆寫入要有 Network Admin 以外嘅權限。
- **SSH 逾時：**檢查公網地址、子網路由、TCP 22 規則同手機而家嘅來源 IP。認證失敗通常要核對映像用戶名同 SSH 金鑰。
- **管理介面用唔到：**保持 SSH 轉發連線，檢查容器狀態同回環連接埠映射，確認 HTTP 只用喺隧道。
- **冇 WireGuard 握手：**檢查用戶端端點、兩層防火牆嘅 UDP 51820、用戶端金鑰，同伺服器有冇監聽。
- **有握手但冇流量：**檢查轉發／NAT、DNS、路由重疊同 `AllowedIPs`。IPv4 全隧道用 `0.0.0.0/0`；IPv6 要另外評估。冇上游 IPv6 嘅虛擬機提供唔到 IPv6 互聯網出口，而只有 IPv4 路由可能令 IPv6 留喺 VPN 外面。

## 移除用戶端同停止雲端收費

丟棄本機設定檔之前，先喺 wg-easy 撤銷用戶端。喺 Mobile SSH 刪除設定檔唔會撤銷伺服器對等端金鑰。移除 VPN 容器或者持久資料前，安全備份所需設定。

用擁有資源嘅建立插件或者供應商控制台，刪除唔再需要嘅虛擬機，再檢查保留嘅磁碟、快照、預留／公網地址同網絡資源。刪除專用 Azure 資源群組前，審查入面嘅內容。唔好將無關資源放入插件管理嘅部署。

停止虛擬機、取消設定工作或者移除插件，都唔保證資源刪咗或者唔再計費。控制台建立嘅資源仍然要自己清理；確認刪除之前，保留供應商資源 ID。
