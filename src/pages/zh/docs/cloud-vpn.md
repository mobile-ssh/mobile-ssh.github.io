---
layout: ../../../layouts/DocLayout.astro
title: "云端虚拟机与 wg-easy"
description: "创建具有公网 IP 的云端虚拟机，在 Mobile SSH 中保存其 SSH 连接，并单独安装 wg-easy；同时说明提供商凭据、网络和资源清理。"
---

# 云端虚拟机与 wg-easy

在自己的云账户中创建 Linux 虚拟机，用 Mobile SSH 连接，再安装 wg-easy 来运行 WireGuard VPN。将资源创建与安装分开，可以让同一台虚拟机用于其他服务，也可以在已有服务器上安装 VPN。

**可用情况——2026年11月8日：**下文描述的是计划中的独立虚拟机创建插件工作流。我们审阅的本地 Android **VPN Setup** 实现将资源创建、安装和客户端导入合在一起；其插件和目录更改尚未发布，真实云部署也尚未测试。独立的 AWS、Google Cloud 和 Azure 条目目前只是清单和设置占位实现；虚拟机列表与控制操作尚未实现，也不能创建虚拟机。若你的插件目录没有创建工作流，请使用下方的控制台与手动安装说明。新的原生工作流需要兼容的 Android 构建；尚未确认 iOS 有同等自动化功能。

## 两个插件，各负其责

- **云资源创建插件：**使用提供商 API 创建虚拟机、公网地址及所需网络资源，再保存 SSH 连接。它保留云资源 ID，以便日后管理或删除。
- **wg-easy 安装插件：**通过 SSH 连接所选已保存服务器，安装 VPN 服务并帮助创建客户端配置。它需要服务器访问权和管理员权限，不需要云 API 凭据。手动创建的虚拟机也可以使用。

交接信息应包含已保存服务器的引用、公网地址、SSH 端口、用户名、SSH 凭据引用，以及部署和资源 ID。云端密钥与 SSH 私钥不应复制到插件输出或虚拟机上。移除 VPN 和删除云端虚拟机是两个不同操作。

## 准备账户和服务器设置

1. 激活云账户和计费，选择区域，并检查虚拟机、磁盘和公网 IP 配额。查看提供商当前的虚拟机、IPv4、存储和流量费用；本指南不假定有免费额度可用。
2. 本指南选用独立的 **Ubuntu 24.04 LTS** 虚拟机，至少配备 **1 GB 内存和 20 GB 磁盘**，采用 **amd64 或 arm64**。这些是本次配置的基准选择，并非 wg-easy 通用的最低要求。使用具有 root 或 sudo 权限的登录账户；无人值守安装需要非交互式提权。
3. 选择或生成 SSH 密钥，将私钥留在 Mobile SSH 中。只把公钥上传到云端。Lightsail 的密钥导入流程要求 RSA SSH 密钥。其他提供商和镜像接受的密钥类型各不相同。 目前 iOS SSH 客户端支持 Ed25519/ECDSA 私钥，不支持 RSA 私钥。在 iOS 上使用 Lightsail 时，先通过提供商的浏览器 SSH 控制台，将应用支持的公钥加入 `authorized_keys`，再用该密钥连接。
4. 选择**公网 IPv4**；提供商支持时，优先使用预留或静态地址。私有地址、仅有 IPv6 的实例或仅供出站的 NAT 网关，都不符合本指南的端点要求。
5. 明确设置 SSH 来源 CIDR，例如在当前公网 IPv4 后加上 `/32`。不要假定插件默认值已经限制了访问范围。移动数据和 Wi-Fi 切换后，可能需要通过云控制台更新此规则。

云 API 凭据授权资源管理，SSH 密钥授权服务器登录，两者不同。只在提供商的受保护凭据表单中输入 API 密钥，绝不要放入语音提示、终端命令或源文件。本地 Android 工作流由原生代码处理提供商认证和加密凭据存储；需要时，凭据发往对应提供商，不会发送到虚拟机或插件工作进程。离线语音模型并不能让云 API 调用、下载或 SSH 在没有网络时工作。

## 选择云平台并获取公网地址

使用**控制台设置**时，请自行登录提供商；Mobile SSH 不需要该提供商的 API 凭据。对于将来的**插件创建流程**，请准备下表所列凭据，并授予所需的创建、读取、网络和删除权限。支持时，将访问范围限制在专用项目或部署内。两种方式都仍须遵守账户策略。

使用 SSH 公钥创建所选 Ubuntu 虚拟机，并应用下一节的 SSH 规则。链接介绍各提供商的地址和认证设置步骤。

<div class="doc-table" tabindex="0" role="region" aria-label="云提供商与公网地址">

| 提供商 | API 创建所需凭据 | 控制台中的公网 IPv4 设置 |
| --- | --- | --- |
| AWS Lightsail | 访问密钥 ID 和密钥；临时凭据还须包含会话令牌。授予所需的 [Lightsail 操作权限](https://docs.aws.amazon.com/service-authorization/latest/reference/list_lightsail.html)。 | 创建双栈 Ubuntu 实例，选择 RSA SSH 密钥，再分配并关联[同一区域的静态 IPv4](https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-create-static-ip.html)。Ubuntu 镜像使用 `ubuntu` 登录。 |
| Google Cloud Compute Engine | 服务账户 JSON 密钥及项目 ID。权限必须包含虚拟机/磁盘、网络、地址和防火墙操作；仅有 Network Admin 无法写入防火墙规则。检查 [IAM 权限](https://docs.cloud.google.com/compute/docs/access/iam)。 | 启用 Compute Engine API，选择具有互联网路由的 VPC/子网，预留[区域性外部 IPv4](https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address)，并关联到虚拟机。配置匹配的 SSH 用户名和密钥；OS Login 需要另行设置身份。 |
| Microsoft Azure | 租户 ID、应用/客户端 ID、客户端密钥的**值**及订阅 ID。授予计算/网络权限；创建资源组还需要在上级范围拥有权限。参阅[服务主体设置](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal)。 | 创建专用资源组和 VNet/子网。将 [Standard 静态 IPv4 Public IP](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses) 关联到虚拟机 NIC，并关联 NSG。使用创建时指定的管理员用户名。 |
| DigitalOcean | 个人访问令牌，包含所需的 Droplet、SSH 密钥、Reserved IP、防火墙及相关[权限范围](https://docs.digitalocean.com/reference/api/create-personal-access-token/)。 | 使用 SSH 公钥创建 Ubuntu Droplet，分配 [Reserved IPv4](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/)，并关联 Cloud Firewall。Ubuntu 初始登录名通常是 `root`。 |
| Hetzner Cloud | 项目专用的 [Read & Write API 令牌](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/)。 | 创建 Ubuntu 服务器，配置 [Primary IPv4](https://docs.hetzner.com/cloud/servers/primary-ips/overview/)、SSH 密钥和 Cloud Firewall。使用 `root`。检查删除服务器后，独立的 Primary IP 是否会保留。 |
| Akamai / Linode | 个人访问令牌，包含 Linodes 和 Firewalls 读写权限，以及所需的[读取权限范围](https://techdocs.akamai.com/linode-api/reference/get-started)。 | 创建具有公网 IPv4 和 SSH 密钥的 Ubuntu Linode，再关联 [Cloud Firewall](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-cloud-firewalls)。使用 `root`。在实例存续期间保留其分配的地址。 |
| Vultr | 已启用 API 访问的 API 密钥；其[来源 IP 允许列表](https://docs.vultr.com/support/platform/users/how-can-i-manage-api-access-for-users)必须允许手机当前的连接。 | 创建 Ubuntu Cloud Compute 实例，配备公网主 IPv4、SSH 密钥和 Firewall Group。使用 `root`。[分配的地址在实例存续期间有效](https://docs.vultr.com/support/products/compute/how-do-i-get-a-vultr-compute-instance-dedicated-ip-address)；Reserved IP 是另外的选项。 |
| Oracle Cloud Infrastructure | 租户/用户 OCID、API 密钥指纹及 [RSA 签名私钥](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm)，并登记匹配的签名公钥。这与 SSH 密钥不同。 | 创建 VCN、互联网网关，以及具有网关路由的公共子网。将 [Reserved Public IPv4](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm) 分配给虚拟机 VNIC 的私有 IP。Canonical Ubuntu 使用 `ubuntu`；配置安全列表/NSG。 |
| OVHcloud Public Cloud | 对应 EU/CA/US API 端点的应用密钥、应用密钥机密和已验证的消费者密钥。将 [API 权限](https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps)限制为所选项目的操作。 | 创建 Ubuntu [Public Cloud 实例](https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started)，通过 Ext-Net 使用 Basic Public IP，并配置 SSH 密钥和安全组。使用 `ubuntu`。Floating/Additional IP 是独立资源。 |
| Scaleway Instances | IAM 应用的 API 密钥机密和项目 UUID，具有实例、卷、IP、安全组和 SSH 密钥权限。参阅 [API 密钥创建](https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/)。 | 创建 Ubuntu 实例，关联[同一可用区中的灵活路由 IPv4](https://www.scaleway.com/en/docs/instances/how-to/use-flexips/)，配置安全组并开机。使用镜像指定的 SSH 登录名，通常为 `root`。 |

</div>

**AWS EC2 替代方案：**在公共子网中启动 Ubuntu，配置[互联网网关和 `0.0.0.0/0` 网关路由](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html)，选择 SSH 密钥和安全组，再关联 [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html)。使用 `ubuntu`。本地自动适配器面向 Lightsail；EC2 走控制台流程。仅添加 Elastic IP，并不能让私有子网变得可访问。

如果组织禁止服务账户密钥、外部 IP 或你选择的 SSH 认证方式，请获取管理员批准的配置。控制台设置不能绕过这些限制。

## 创建资源并保存 SSH 连接

在计划中的分离工作流里，打开**插件**，从可信目录安装对应提供商的资源创建插件，选择账户和区域，再选择虚拟机规格、镜像、公网地址及 SSH 密钥。确认创建前，检查资源和费用。只有管理功能、没有创建操作的插件无法完成这一步；请改用提供商控制台。

等提供商报告虚拟机正在运行，且 SSH 已可访问。保留虚拟机、磁盘、地址和防火墙的资源 ID。如果请求超时，先检查或恢复现有操作，再考虑重试创建，以免创建第二台计费虚拟机。

将返回的连接保存到 Mobile SSH，或在**服务器**下手动添加：公网 IPv4、SSH 端口 `22`、镜像用户名及匹配的私钥凭据。连接前，通过提供商可信的控制台核对 SSH 主机密钥指纹。身份检查和已保存凭据的说明见[快速开始](../getting-started/)。

## 配置两层网络

公网地址还需要路由、云防火墙许可、客户机防火墙许可和正在监听的服务。在提供商防火墙/安全组中使用以下规则，并保留客户机上必需的现有规则。

- **TCP 22：**允许所选管理 CIDR 访问 SSH。在创建资源时配置。
- **UDP 51820：**允许需要使用 VPN 的网络访问。对于漫游客户端，可能需要 `0.0.0.0/0`。设置 WireGuard 时，通过云资源插件或控制台添加。
- **TCP 51821：**不要向公网开放。wg-easy 管理界面只发布到服务器回环地址，并通过 SSH 隧道访问。
- **出站流量：**允许软件包/容器下载、DNS，以及 VPN 要承载的互联网流量。

检查 Docker 的[防火墙行为](https://docs.docker.com/engine/install/ubuntu/#firewall-limitations)：发布的容器端口可能绕过 UFW 规则。不要仅靠 UFW 隐藏管理界面，也不要清空提供商的防火墙链，尤其是 OCI 的存储/iSCSI 规则。

## 在所选虚拟机上安装 wg-easy

独立安装插件应接收已保存的 SSH 服务器，并请求批准服务器更改。它应检查操作系统、权限、已有 Docker/VPN 安装和端口冲突，保留持久数据，并报告安装版本。它不需要云账户密钥；云防火墙更改应使用资源创建插件或控制台完成。

较早的 **WireGuard (wg-easy)** 目录插件需要活动 SSH 会话和 Docker。它并非新的自动化安装插件，也不保证原生客户端导入。请使用兼容的更新版安装插件，或在全新的专用虚拟机上，从 Mobile SSH 终端按以下方式手动安装。

### 通过 SSH 手动安装

按照官方 [Ubuntu 说明](https://docs.docker.com/engine/install/ubuntu/)安装 Docker Engine 及其 Compose 插件。然后下载指定版本的上游配置：

```sh
sudo mkdir -p /opt/wg-easy
sudo curl -fL https://raw.githubusercontent.com/wg-easy/wg-easy/v15.4.0/docker-compose.yml -o /opt/wg-easy/compose.yaml
```

启动前，用具有权限的终端编辑器编辑 `/opt/wg-easy/compose.yaml`。在 `services.wg-easy` 下替换镜像，取消注释或设置环境块，并将端口映射替换为下列值。保留上游文件的其余部分，包括持久卷、模块挂载、能力、网络和 sysctls：

```yaml
image: ghcr.io/wg-easy/wg-easy:15.4.0@sha256:0e7bc9d34e86ddcaa92bc700d4d7dc9b33291dbc07ac8d13382f7c2095f949ec
environment:
  - INSECURE=true
ports:
  - "51820:51820/udp"
  - "127.0.0.1:51821:51821/tcp"
```

这是替换片段，不是完整 Compose 文件；请保留服务下的 YAML 缩进。`INSECURE=true` 仅用于允许回环 SSH 隧道上的 HTTP。不要将管理端口发布到互联网。容器内部监听与主机侧回环映射不同。参阅上游的 [HTTP 配置](https://wg-easy.github.io/wg-easy/latest/examples/tutorials/reverse-proxyless/)。

```sh
cd /opt/wg-easy
sudo docker compose -f compose.yaml config --quiet
sudo docker compose -f compose.yaml up -d
sudo docker compose -f compose.yaml ps
```

将容器的 `/etc/wireguard` 数据保留在持久卷内。不要将旧版 `PASSWORD`、`PASSWORD_HASH` 或 `WG_HOST` 安装方法用于 v15；请使用其设置向导。镜像是刻意固定的：升级需要审查新版本并修改固定引用，仅运行 `pull` 不会升级。

## 打开管理界面并添加客户端

在 Mobile SSH 中创建[本地端口转发](../port-forwarding/)，本地端口设为 `51821`、远程主机设为 `127.0.0.1`、远程端口设为 `51821`。保持 SSH 连接，在同一手机打开 `http://127.0.0.1:51821`。若该本地端口已被占用，请选择另一个本地端口，并在浏览器 URL 中使用它。

在 wg-easy 的[首次运行向导](https://wg-easy.github.io/wg-easy/latest/guides/setup/)中创建管理员账户，选择全新安装，并将 VPN 端点设为虚拟机的公网 IPv4 或 DNS 名称，端口为 `51820`。VPN 端点不是网页管理界面的回环地址，也不是端口 `51821`。

每台设备创建一个客户端，并下载其 WireGuard `.conf`。如果所用 Mobile SSH 构建提供相应功能，打开 **VPN → WireGuard**，添加配置、导入文件并保存。当前 Android 和 iOS 源码均支持文件导入；请检查已安装的构建。本地 Android 组合工作流可直接导入，但这并不保证旧版插件或 iOS 自动化也能做到。配置文件和二维码包含私钥，请妥善保密。

## 验证 VPN 并处理故障

启动配置，并批准操作系统的 VPN 请求。检查近期的对端握手和增长的流量计数，再测试 DNS 及预期互联网或私有网络路由。仅有已导入配置或运行中的容器，不代表 VPN 已经可用。

- **虚拟机创建被拒绝：**检查计费、配额、区域容量、凭据有效期及准确的 IAM 权限。Google Cloud 防火墙写入需要 Network Admin 以外的权限。
- **SSH 超时：**检查公网地址、子网路由、TCP 22 规则和手机当前的来源 IP。认证失败通常需要核对镜像用户名和 SSH 密钥。
- **管理界面不可用：**保持 SSH 转发连接，检查容器状态与回环端口映射，并确认 HTTP 仅用于隧道。
- **没有 WireGuard 握手：**检查客户端端点、两层防火墙的 UDP 51820、客户端密钥，以及服务器是否正在监听。
- **已握手但没有流量：**检查转发/NAT、DNS、路由重叠及 `AllowedIPs`。IPv4 全隧道使用 `0.0.0.0/0`；IPv6 需单独评估。没有上游 IPv6 的虚拟机无法提供 IPv6 互联网出口，且仅有 IPv4 路由可能让 IPv6 流量留在 VPN 外。

## 移除客户端并停止云费用

丢弃本地配置前，先在 wg-easy 中撤销客户端。在 Mobile SSH 删除配置不会撤销服务器上的对端密钥。移除 VPN 容器或其持久数据前，安全备份所需配置。

使用拥有该资源的创建插件或提供商控制台，删除不再需要的虚拟机，再检查保留的磁盘、快照、预留/公网地址及网络资源。删除专用 Azure 资源组前，先审查其中内容。不要把无关资源放入由插件管理的部署。

停止虚拟机、取消设置任务或卸载插件，都不保证资源已删除或费用已停止。通过控制台创建的资源仍需你自行清理；在确认删除前，请保留提供商资源 ID。
