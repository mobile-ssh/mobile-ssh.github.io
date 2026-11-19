---
layout: ../../../layouts/DocLayout.astro
title: "雲端虛擬機同 wg-easy"
description: "建立有公網 IP 嘅雲端虛擬機，喺 Mobile SSH 儲存 SSH 連線，再獨立安裝 wg-easy，並說明供應商憑證、網絡同資源清理。"
---

# 雲端虛擬機同 wg-easy

喺自己嘅雲端帳戶建立 Linux VM，用 wg-easy 運行 WireGuard VPN。喺兼容嘅 Android 版本，已發佈嘅 **VPN Setup** 外掛可以喺同一設定流程建立 VM、安裝 wg-easy 同匯入用戶端。你亦可以喺供應商控制台建立 VM，再用 Mobile SSH 安裝，或者用現有公網伺服器。

**供應情況 — 2026 年 11 月 19 日：** **VPN Setup 1.0.7** 已發佈到[預設外掛目錄](https://github.com/mobile-ssh/mobile-ssh-plugins/tree/main/plugins/vpnsetup)。基本設定要外掛橋接版本 **1.3.0**，伺服器更新要 **1.4.0**，移除符合條件嘅已結束項目要 **1.5.0**。能否使用取決於已安裝嘅 Android 版本同發佈渠道；外掛發佈唔代表某個應用程式版本已經向你提供。未確認 iOS 有同等自動化。外掛未能使用時，請跟下面嘅控制台同手動指引。

## 揀設定精靈或手動流程

- **用雲端 API 建立：**VPN Setup 用你嘅供應商帳戶建立 VM 同網絡資源，儲存 SSH 連線、安裝 wg-easy 同匯入用戶端。佢會保留資源 ID 同擁有權記錄，方便之後清理。
- **喺雲端控制台建立或用現有伺服器：**自己建立 VM，再將公網 IPv4、SSH 使用者名稱同金鑰交畀 VPN Setup，或者跟下面手動安裝。外掛喺你嘅伺服器安裝，唔需要雲端 API 憑證。

已發佈外掛將資源建立同安裝合埋一齊；分開建立器同安裝器外掛仍然係計劃中架構。API 建立嘅資源同自備伺服器有唔同刪除行為，下面會解釋。有記錄嘅 Hetzner 實際測試喺 Android 模擬器通過設定、VPN 流量、用戶端管理、私人管理存取同清理。呢個唔代表每個供應商、帳戶政策或實體手機都通過實測驗收。

## 準備帳戶同伺服器設定

1. 啟用雲端帳戶同計費，揀區域，並檢查虛擬機、磁碟同公網 IP 配額。睇清楚供應商目前嘅虛擬機、IPv4、儲存同流量收費；本指南唔假設有免費額度。
2. 本指南選用獨立 **Ubuntu 24.04 LTS** 虛擬機，至少有 **1 GB 記憶體同 20 GB 磁碟**，架構用 **amd64 或 arm64**。呢啲係今次設定嘅基準選擇，唔係 wg-easy 通用最低要求。用有 root 或 sudo 權限嘅登入帳戶；無人值守安裝需要非互動式提權。
3. 揀選或產生 SSH 金鑰，將私鑰留喺 Mobile SSH。只上載公鑰去雲端。Lightsail 嘅匯入流程要求 RSA SSH 金鑰。其他供應商同映像各有接受嘅金鑰類型。 目前 iOS SSH 用戶端支援 Ed25519/ECDSA 私鑰，唔支援 RSA 私鑰。喺 iOS 用 Lightsail，先用供應商嘅瀏覽器 SSH 控制台，將應用程式支援嘅公鑰加入 `authorized_keys`，再用嗰條金鑰連線。
4. 揀**公網 IPv4**；供應商有提供嘅話，優先用預留／靜態地址。私人地址、只有 IPv6 嘅實例，或者只供出站嘅 NAT 閘道，都唔符合本指南嘅端點要求。
5. 明確設定 SSH 來源 CIDR，例如你而家嘅公網 IPv4 後面加 `/32`。唔好以為插件預設已經限制存取。轉換流動數據同 Wi-Fi 之後，可能要喺雲端控制台更新規則。

手動流程支援上面嘅架構。VPN Setup 目前選用 **amd64/x86-64 上嘅 Ubuntu 24.04**，經 **SSH 連接埠 22** 連接，接受 **Ed25519 或 RSA** SSH 金鑰；Lightsail 流程一定要 RSA。呢個流程唔支援 ECDSA 金鑰、只有私人地址嘅主機或純 IPv6 端點。現有伺服器要有公網 IPv4，並容許非互動式管理存取。

雲端 API 憑證授權管理資源，SSH 金鑰授權登入伺服器。API 秘密只可以填喺受保護嘅原生憑證表格，唔好放入語音提示詞、終端指令或原始碼檔案。原生程式碼會向獲准嘅供應商端點認證；秘密唔會交畀 VM 或外掛工作程序。記住嘅憑證用 Android Keystore 加密；如果揀唔記住，就只留喺記憶體，應用程式程序結束後可能要再填。

語音控制可以回答支援嘅非機密問題同回報進度，但填憑證同批准要用螢幕。受保護憑證表格會暫停咪高峰錄音，要有明確操作先會恢復。語音設定要主動啟用、下載本機模型同授予咪高峰權限。離線語音模型唔會令雲端 API、下載或者 SSH 喺冇互聯網時照樣運作。

## 揀雲端平台同取得公網地址

用**控制台設定**時，請自己登入供應商；Mobile SSH 唔需要佢嘅 API 憑證。用 **VPN Setup API 建立資源**時，準備下面嘅憑證，授予所需建立、讀取、網絡同刪除權限。外掛實作咗表內十個供應商；AWS EC2 係獨立嘅控制台選項。支援嘅話，將權限限喺專用專案或部署。兩種方法都要遵守帳戶政策。

用 SSH 公鑰建立所選 Ubuntu 虛擬機，再套用下一節嘅 SSH 規則。連結解釋各供應商嘅地址同認證步驟。

<div class="doc-table" tabindex="0" role="region" aria-label="雲端供應商同公網地址">

| 供應商 | API 建立資源所需憑證 | 控制台嘅公網 IPv4 設定 |
| --- | --- | --- |
| [AWS Lightsail](./aws-lightsail/) | 存取金鑰 ID 同秘密；臨時憑證要加工作階段權杖。授予所需 [Lightsail 操作權限](https://docs.aws.amazon.com/service-authorization/latest/reference/list_lightsail.html)。 | 建立雙協定棧 Ubuntu 實例，揀 RSA SSH 金鑰，再分配同附加[同區域嘅靜態 IPv4](https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-create-static-ip.html)。Ubuntu 映像用 `ubuntu`。 |
| [Google Cloud Compute Engine](./google-cloud/) | 服務帳戶 JSON 金鑰加專案 ID。權限要包括 VM／磁碟、網絡、地址同防火牆操作；只有 Compute Network Admin 寫唔到防火牆規則。請查閱 [IAM 權限](https://docs.cloud.google.com/compute/docs/access/iam)。 | 啟用 Compute Engine API，揀有互聯網路由嘅 VPC／子網，保留[區域外部 IPv4](https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address)，再綁定 VM。設定匹配嘅 SSH 使用者名稱同金鑰；OS Login 要另外設定身份。VPN Setup 用中繼資料 SSH 金鑰，並喺佢嘅 VM 關閉 OS Login；如果組織規定用 OS Login，請改用獲准嘅控制台配置。 |
| [Microsoft Azure](./azure/) | 租用戶 ID、應用程式／用戶端 ID、用戶端秘密嘅**值**同訂閱 ID。VPN Setup 會建立自己嘅部署資源群組：要喺訂閱或父層範圍授予群組建立／刪除同運算／網絡操作權限。只限現有群組嘅權限唔夠。請睇[服務主體設定](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal)。 | 建立專用資源群組同 VNet／子網，將 [Standard 靜態 IPv4 公用 IP](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses) 綁定 VM NIC 並關聯 NSG。用建立時揀嘅管理員使用者名稱。 |
| [DigitalOcean](./digitalocean/) | 個人存取權杖，要有所需 Droplet、SSH 金鑰、Reserved IP、防火牆及相關[權限範圍](https://docs.digitalocean.com/reference/api/create-personal-access-token/)。 | 用 SSH 公鑰建立 Ubuntu Droplet，分配 [Reserved IPv4](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/)，再附加 Cloud Firewall。Ubuntu 初始登入通常係 `root`。 |
| [Hetzner Cloud](./hetzner/) | 專案專用嘅 [Read & Write API 權杖](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/)。 | 建立 Ubuntu 伺服器，配備 [Primary IPv4](https://docs.hetzner.com/cloud/servers/primary-ips/overview/)、SSH 金鑰同 Cloud Firewall。用 `root`。檢查刪除伺服器時，獨立嘅 Primary IP 會唔會保留。 |
| [Akamai / Linode](./linode/) | 個人存取權杖，要有 Linodes 同 Firewalls 讀寫權限，以及所需[讀取範圍](https://techdocs.akamai.com/linode-api/reference/get-started)。 | 建立有公網 IPv4 同 SSH 金鑰嘅 Ubuntu Linode，再附加 [Cloud Firewall](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-cloud-firewalls)。用 `root`。實例存在期間保留佢獲分配嘅地址。 |
| [Vultr](./vultr/) | 啟用咗 API 存取嘅 API 金鑰；[來源 IP 允許清單](https://docs.vultr.com/support/platform/users/how-can-i-manage-api-access-for-users)要容許手機而家嘅連線。 | 建立 Ubuntu Cloud Compute 實例，配備公網主要 IPv4、SSH 金鑰同 Firewall Group。用 `root`。[分配地址喺實例存在期間有效](https://docs.vultr.com/support/products/compute/how-do-i-get-a-vultr-compute-instance-dedicated-ip-address)；Reserved IP 係另外嘅選擇。 |
| [Oracle Cloud Infrastructure](./oracle-cloud/) | 租用戶／用戶 OCID、API 金鑰指紋同 [RSA 簽署私鑰](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm)，並登記相符嘅簽署公鑰。呢組同 SSH 金鑰分開。 | 建立 VCN、互聯網閘道，同有閘道路由嘅公用子網。將 [Reserved Public IPv4](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm) 分配去虛擬機 VNIC 嘅私人 IP。Canonical Ubuntu 用 `ubuntu`；設定安全清單／NSG。 |
| [OVHcloud Public Cloud](./ovhcloud/) | 對應 EU／CA／US API 端點嘅應用程式金鑰、應用程式秘密同已驗證用戶金鑰。將 [API 權限](https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps)限於所選專案操作。 | 建立 Ubuntu [Public Cloud 實例](https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started)，透過 Ext-Net 用 Basic Public IP，並配置 SSH 金鑰同安全群組。用 `ubuntu`。Floating／Additional IP 係獨立資源。 |
| [Scaleway Instances](./scaleway/) | IAM 應用程式嘅 API 秘密金鑰同專案 UUID，要有實例、儲存卷、IP、安全群組同 SSH 金鑰權限。睇 [API 金鑰建立](https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/)。 | 建立 Ubuntu 實例，附加[同一可用區嘅彈性路由 IPv4](https://www.scaleway.com/en/docs/instances/how-to/use-flexips/)，設定安全群組，再開機。用映像嘅 SSH 登入名，通常係 `root`。 |

</div>

**[AWS EC2](./aws-ec2/) 替代方案：**喺有 [internet gateway 同 `0.0.0.0/0` 閘道路由](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html)嘅公共子網啟動 Ubuntu，揀 SSH 金鑰同安全群組，再關聯 [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html)。用 `ubuntu` 登入。VPN Setup 嘅 AWS 自動配接器針對 Lightsail；EC2 要用控制台流程。單靠 Elastic IP 唔會令私人子網變得可連接。

如果機構禁止服務帳戶金鑰、外部 IP 或者你揀嘅 SSH 認證方式，要取得管理員批准嘅設定。控制台設定唔會繞過呢啲限制。

## 建立資源並儲存 SSH 連線

開啟**外掛**，由預設目錄安裝 **VPN Setup**，再開佢嘅獨立頁面。揀**設定 VPN**、揀供應商，再揀**用雲端 API 建立**或**喺雲端控制台建立**。已有伺服器就揀現有公網伺服器選項。喺原生表格填憑證，選擇或產生 SSH 金鑰，再檢視位置、規格、映像同 SSH 來源 CIDR。按帳戶取得嘅選項同預先檢查有助揀支援嘅配置，但唔會預留容量或保證配額。睇清供應商現價，再喺螢幕批准建立。

繼續跟進現有操作，直到 VM 同 SSH 準備好。如果請求逾時，或者 Android 暫停背景工作，請恢復或檢視原本操作，唔好再建立另一部收費 VM。建立回覆遺失可能要查詢雲端或檢查控制台。保留 VM、磁碟、地址同防火牆資源 ID；停止咗嘅流程仍然可能已建立資源。

VPN Setup 會要求批准 SSH 主機金鑰、儲存連線、安裝 wg-easy 同匯入第一個用戶端。請用供應商可信控制台比對指紋。手動設定時，喺**伺服器**加入公網 IPv4、SSH 連接埠 `22`、映像使用者名稱同匹配私鑰。Google Cloud 同 Azure 自動配接器用 `ubuntu`；控制台指南用你喺嗰度設定嘅使用者名稱。身份檢查同已儲存憑證請睇[入門指南](../getting-started/)。

## 設定兩層網絡

公網地址需要路由、雲端防火牆許可、客體防火牆許可，同正在監聽嘅服務。喺供應商防火牆／安全群組用以下規則；保留客體上必需嘅原有規則。

- **TCP 22：**容許所選管理 CIDR 透過 SSH 連接。建立資源時設定。
- **UDP 51820：**容許會用 VPN 嘅網絡。漫遊用戶端可能需要 `0.0.0.0/0`。VPN Setup 會為 API 建立嘅部署設定；自備伺服器請喺雲端控制台設定。
- **TCP 51821：**唔好向公網開放。wg-easy 管理介面只綁定伺服器回環地址，透過 SSH 隧道存取。
- **出站流量：**容許套件／容器下載、DNS 同 VPN 要承載嘅互聯網流量。

檢查 Docker 嘅[防火牆行為](https://docs.docker.com/engine/install/ubuntu/#firewall-limitations)：發佈咗嘅容器連接埠可能繞過 UFW 規則。唔好淨靠 UFW 隱藏管理介面，亦唔好清空供應商防火牆鏈，尤其係 OCI 嘅儲存／iSCSI 規則。

<a id="wg-easy-install"></a>

## 喺所選虛擬機安裝 wg-easy

批准後，VPN Setup 經 SSH 安裝以摘要固定嘅 wg-easy 版本，喺 Ubuntu 24.04 按需要裝 Docker，並建立第一個用戶端。管理介面會留喺伺服器回環地址，供應商防火牆鏈會保留。控制台建立或現有伺服器要自己設定雲端防火牆；安裝器需要 SSH 存取同管理權限，唔需要雲端 API 秘密。請用全新專用伺服器，唔好假定佢可以接管無關嘅 VPN 安裝。

舊嘅 **WireGuard (wg-easy)** 目錄外掛需要活躍 SSH 工作階段同 Docker。佢同 **VPN Setup** 係分開嘅，亦冇承諾原生用戶端匯入。喺兼容 Android 版本用 VPN Setup，或者喺全新專用 VM，用 Mobile SSH 終端跟下面手動流程。

### 透過 SSH 手動安裝

跟官方 [Ubuntu 說明](https://docs.docker.com/engine/install/ubuntu/)安裝 Docker Engine 同 Compose 插件，再下載指定版本嘅上游設定：

```sh
sudo mkdir -p /opt/wg-easy
sudo curl -fL https://raw.githubusercontent.com/wg-easy/wg-easy/v15.5.0/docker-compose.yml -o /opt/wg-easy/compose.yaml
```

啟動前，用有權限嘅終端編輯器編輯 `/opt/wg-easy/compose.yaml`。喺 `services.wg-easy` 下面替換映像，取消註解／設定環境區塊，再將連接埠映射換成以下值。保留上游檔案其餘部分，包括持久儲存卷、模組掛載、能力、網絡同 sysctls：

```yaml
image: ghcr.io/wg-easy/wg-easy:15.5.0@sha256:071f79a639e9361123a5e57733107320207b844ddbbd92dfa6962f541fe8aac8
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

每部裝置建立一個用戶端，下載 WireGuard `.conf`。如果你嘅 Mobile SSH 版本有提供，開啟 **VPN → WireGuard**，加入設定檔、匯入檔案再儲存。目前 Android 同 iOS 原始碼支援檔案匯入；請檢查已安裝版本。VPN Setup 會喺兼容 Android 版本直接匯入第一個用戶端。佢嘅頁面亦有**加入用戶端**、**撤銷用戶端**、**匯出用戶端／QR**，同透過私人 SSH 隧道**開啟管理介面**。呢個唔代表舊外掛或者 iOS 有同等自動化功能。設定檔同 QR 碼有私鑰，請保密。

## 驗證 VPN 同處理故障

啟動設定檔，批准作業系統嘅 VPN 請求。檢查近期對等端握手同增加中嘅流量計數，再測試 DNS 同預期互聯網或私人網絡路由。匯入咗設定檔或者容器行緊，唔等於 VPN 用得。

- **VM 建立被拒：**檢查帳單、配額、區域容量、憑證到期日同確切 IAM 權限。Google Cloud 寫入防火牆要超出 Compute Network Admin 嘅權限；組織強制 OS Login 就要用獲准嘅控制台配置。
- **SSH 逾時：**檢查公網地址、子網路由、TCP 22 規則同手機目前來源 IP。認證失敗通常要檢查映像使用者名稱同 SSH 金鑰。
- **管理介面開唔到：**保持 SSH 轉發連接，檢查容器狀態同回環連接埠映射，確認 HTTP 只供隧道使用。
- **冇 WireGuard 握手：**檢查用戶端端點、兩層防火牆嘅 UDP 51820、用戶端金鑰同伺服器有冇監聽。
- **握手成功但冇流量：**檢查轉發/NAT、DNS、重疊路由同 `AllowedIPs`。IPv4 全隧道用 `0.0.0.0/0`；IPv6 要另外評估。冇上游 IPv6 嘅 VM 提供唔到 IPv6 互聯網出口，而純 IPv4 路由可能令 IPv6 繞過 VPN。

## 更新外掛同 VPN 伺服器

喺**外掛**用提供嘅**更新**操作，取得同一目錄較新嘅兼容版本。檢視新要求嘅能力。設定、憑證同部署記錄會保留；未完成操作會繼續用開始嗰陣嘅外掛版本。淨係更新外掛唔會更新伺服器嘅 wg-easy 容器。

喺外掛橋接版本 1.4.0 或更新版本，**檢查伺服器**會報告運行中嘅 wg-easy 版本，**更新 WireGuard**會提供外掛固定嘅版本。喺螢幕批准更新。佢會先下載映像再改服務，保留伺服器金鑰、用戶端同本機設定檔。如果呢部手機用緊嗰個 VPN，應用程式會喺更新前斷開佢；更新完請重新連接。呢個更新受管理容器，唔係主機作業系統。

更新失敗會分清映像下載失敗、成功回復舊版，同回復失敗導致 VPN 停機。請跟恢復檢查或重試指示，唔好假定服務已恢復。手動安裝要自行審查更換固定映像同備份；上面嘅全新安裝步驟唔係遷移指南。

## 移除用戶端同停止雲端收費

丟棄本機設定檔之前，先喺 wg-easy 撤銷用戶端。喺 Mobile SSH 刪除設定檔唔會撤銷伺服器對等端金鑰。移除 VPN 容器或者持久資料前，安全備份所需設定。

API 建立嘅部署可以用**刪除部署**，先檢視再經供應商 API 刪除屬於佢嘅雲端資源，就算 SSH 用唔到都可以。如果刪除暫停或失敗，檢查報告中剩低嘅資源，繼續清理或睇控制台。唔好將無關資源放入外掛管理嘅部署，尤其係佢專用嘅 Azure 資源群組。

對於控制台建立或現有伺服器，外掛刪除只會移除佢管理嘅 VPN 安裝，**唔會**刪除你嘅 VM 或公網 IP。唔再需要時，要喺供應商控制台刪除，再檢查保留嘅磁碟、快照、地址同網絡資源。如果恢復期間改過帳戶或位置設定，亦要檢查之前嘅帳戶同位置，包括之前嘅 Scaleway 專案或 Oracle Cloud compartment。

**停止流程**只會停止操作，唔會刪資源。喺橋接版本 1.5.0 或更新版本，只有應用程式能確認項目已符合忘記條件、冇未完成操作或未處理受管資源，先會提供**從清單移除**。佢清除本機歷史，唔係雲端資源。停止 VM 或移除外掛亦唔保證停止收費。確認刪除之前，請保留資源 ID。
