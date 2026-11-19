---
layout: ../../../layouts/DocLayout.astro
title: "云端虚拟机与 wg-easy"
description: "创建具有公网 IP 的云端虚拟机，在 Mobile SSH 中保存其 SSH 连接，并单独安装 wg-easy；同时说明提供商凭据、网络和资源清理。"
---

# 云端虚拟机与 wg-easy

在自己的云账户中创建 Linux VM，并用 wg-easy 运行 WireGuard VPN。在兼容的 Android 版本上，已发布的 **VPN Setup** 插件可在同一向导中创建 VM、安装 wg-easy 并导入客户端。你也可以在服务商控制台创建 VM，再通过 Mobile SSH 安装，或使用现有公网服务器。

**可用情况 — 2026 年 11 月 19 日：** **VPN Setup 1.0.7** 已发布到[默认插件目录](https://github.com/mobile-ssh/mobile-ssh-plugins/tree/main/plugins/vpnsetup)。基本设置需要插件桥接版本 **1.3.0**，服务器更新需要 **1.4.0**，移除符合条件的已结束条目需要 **1.5.0**。是否可用取决于已安装的 Android 版本和发布渠道；插件发布不代表某个应用版本已向你开放。尚未确认 iOS 有同等自动化功能。插件不可用时，请使用下方控制台和手动操作指南。

## 选择向导或手动流程

- **通过云 API 创建：**VPN Setup 使用你的服务商账户创建 VM 和网络资源，保存 SSH 连接，安装 wg-easy 并导入客户端。它保留资源 ID 和所有权记录，以便后续清理。
- **在云控制台创建或使用现有服务器：**自行创建 VM，然后向 VPN Setup 提供公网 IPv4、SSH 用户名和密钥，或按下方手动安装。插件在你的服务器上安装时不需要云 API 凭据。

已发布插件将资源创建和安装合并；拆分为独立创建器和安装器插件仍是计划中的架构。通过 API 创建的资源与自备服务器的删除行为不同，详见下文。已有记录的 Hetzner 实际测试在 Android 模拟器上通过了设置、VPN 流量、客户端管理、私有管理访问及清理。这不代表每家服务商、每种账户策略或每部实体手机都已通过实测验收。

## 准备账户和服务器设置

1. 激活云账户和计费，选择区域，并检查虚拟机、磁盘和公网 IP 配额。查看提供商当前的虚拟机、IPv4、存储和流量费用；本指南不假定有免费额度可用。
2. 本指南选用独立的 **Ubuntu 24.04 LTS** 虚拟机，至少配备 **1 GB 内存和 20 GB 磁盘**，采用 **amd64 或 arm64**。这些是本次配置的基准选择，并非 wg-easy 通用的最低要求。使用具有 root 或 sudo 权限的登录账户；无人值守安装需要非交互式提权。
3. 选择或生成 SSH 密钥，将私钥留在 Mobile SSH 中。只把公钥上传到云端。Lightsail 的密钥导入流程要求 RSA SSH 密钥。其他提供商和镜像接受的密钥类型各不相同。 目前 iOS SSH 客户端支持 Ed25519/ECDSA 私钥，不支持 RSA 私钥。在 iOS 上使用 Lightsail 时，先通过提供商的浏览器 SSH 控制台，将应用支持的公钥加入 `authorized_keys`，再用该密钥连接。
4. 选择**公网 IPv4**；提供商支持时，优先使用预留或静态地址。私有地址、仅有 IPv6 的实例或仅供出站的 NAT 网关，都不符合本指南的端点要求。
5. 明确设置 SSH 来源 CIDR，例如在当前公网 IPv4 后加上 `/32`。不要假定插件默认值已经限制了访问范围。移动数据和 Wi-Fi 切换后，可能需要通过云控制台更新此规则。

手动流程支持上文所列架构。VPN Setup 当前选择 **amd64/x86-64 上的 Ubuntu 24.04**，通过 **SSH 端口 22** 连接，并接受 **Ed25519 或 RSA** SSH 密钥；Lightsail 流程要求 RSA。该流程不支持 ECDSA 密钥、仅有私有地址的主机或仅 IPv6 的端点。现有服务器必须有公网 IPv4，并允许非交互式管理访问。

云 API 凭据授权管理资源，SSH 密钥授权登录服务器。API 秘密只能填入受保护的原生凭据表单，不要放入语音提示词、终端命令或源文件。原生代码向允许的服务商端点认证；秘密不会传给 VM 或插件工作程序。记住的凭据使用 Android Keystore 加密；若选择不记住，则仅保存在内存中，应用进程结束后可能需要重新填写。

语音控制可回答支持的非秘密问题并报告进度，但填写凭据和批准操作需要使用屏幕。受保护的凭据表单会暂停麦克风采集，恢复时需要明确操作。语音设置需主动启用、下载本地模型并授予麦克风权限。离线语音模型并不能让云 API 调用、下载或 SSH 在没有互联网时工作。

## 选择云平台并获取公网地址

使用**控制台设置**时，请自行登录服务商；Mobile SSH 不需要其 API 凭据。使用 **VPN Setup API 创建资源**时，请准备下表所列凭据，并授予所需的创建、读取、网络和删除权限。插件实现了表中的十家服务商；AWS EC2 是独立的控制台选项。在支持的情况下，将权限限制到专用项目或部署。两种方式都须遵守账户策略。

使用 SSH 公钥创建所选 Ubuntu 虚拟机，并应用下一节的 SSH 规则。链接介绍各提供商的地址和认证设置步骤。

<div class="doc-table" tabindex="0" role="region" aria-label="云提供商与公网地址">

| 提供商 | API 创建所需凭据 | 控制台中的公网 IPv4 设置 |
| --- | --- | --- |
| [AWS Lightsail](./aws-lightsail/) | 访问密钥 ID 和密钥；临时凭据还须包含会话令牌。授予所需的 [Lightsail 操作权限](https://docs.aws.amazon.com/service-authorization/latest/reference/list_lightsail.html)。 | 创建双栈 Ubuntu 实例，选择 RSA SSH 密钥，再分配并关联[同一区域的静态 IPv4](https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-create-static-ip.html)。Ubuntu 镜像使用 `ubuntu` 登录。 |
| [Google Cloud Compute Engine](./google-cloud/) | 服务账户 JSON 密钥及项目 ID。权限需涵盖 VM/磁盘、网络、地址和防火墙操作；仅 Compute Network Admin 无法写入防火墙规则。请检查 [IAM 权限](https://docs.cloud.google.com/compute/docs/access/iam)。 | 启用 Compute Engine API，选择具有互联网路由的 VPC/子网，预留[区域外部 IPv4](https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address)，并关联到 VM。配置匹配的 SSH 用户名和密钥；OS Login 需要单独设置身份。VPN Setup 使用元数据 SSH 密钥，并在其 VM 上关闭 OS Login；若组织要求 OS Login，请改用获批的控制台配置。 |
| [Microsoft Azure](./azure/) | 租户 ID、应用/客户端 ID、客户端秘密的**值**和订阅 ID。VPN Setup 会创建自己的部署资源组：需在订阅或父级范围授予资源组创建/删除及计算/网络操作权限。仅限现有资源组的访问权限不够。参阅[服务主体设置](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal)。 | 创建专用资源组及 VNet/子网。将 [Standard 静态 IPv4 公网 IP](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses) 关联到 VM NIC 并关联 NSG。使用创建时选择的管理员用户名。 |
| [DigitalOcean](./digitalocean/) | 个人访问令牌，包含所需的 Droplet、SSH 密钥、Reserved IP、防火墙及相关[权限范围](https://docs.digitalocean.com/reference/api/create-personal-access-token/)。 | 使用 SSH 公钥创建 Ubuntu Droplet，分配 [Reserved IPv4](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/)，并关联 Cloud Firewall。Ubuntu 初始登录名通常是 `root`。 |
| [Hetzner Cloud](./hetzner/) | 项目专用的 [Read & Write API 令牌](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/)。 | 创建 Ubuntu 服务器，配置 [Primary IPv4](https://docs.hetzner.com/cloud/servers/primary-ips/overview/)、SSH 密钥和 Cloud Firewall。使用 `root`。检查删除服务器后，独立的 Primary IP 是否会保留。 |
| [Akamai / Linode](./linode/) | 个人访问令牌，包含 Linodes 和 Firewalls 读写权限，以及所需的[读取权限范围](https://techdocs.akamai.com/linode-api/reference/get-started)。 | 创建具有公网 IPv4 和 SSH 密钥的 Ubuntu Linode，再关联 [Cloud Firewall](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-cloud-firewalls)。使用 `root`。在实例存续期间保留其分配的地址。 |
| [Vultr](./vultr/) | 已启用 API 访问的 API 密钥；其[来源 IP 允许列表](https://docs.vultr.com/support/platform/users/how-can-i-manage-api-access-for-users)必须允许手机当前的连接。 | 创建 Ubuntu Cloud Compute 实例，配备公网主 IPv4、SSH 密钥和 Firewall Group。使用 `root`。[分配的地址在实例存续期间有效](https://docs.vultr.com/support/products/compute/how-do-i-get-a-vultr-compute-instance-dedicated-ip-address)；Reserved IP 是另外的选项。 |
| [Oracle Cloud Infrastructure](./oracle-cloud/) | 租户/用户 OCID、API 密钥指纹及 [RSA 签名私钥](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm)，并登记匹配的签名公钥。这与 SSH 密钥不同。 | 创建 VCN、互联网网关，以及具有网关路由的公共子网。将 [Reserved Public IPv4](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm) 分配给虚拟机 VNIC 的私有 IP。Canonical Ubuntu 使用 `ubuntu`；配置安全列表/NSG。 |
| [OVHcloud Public Cloud](./ovhcloud/) | 对应 EU/CA/US API 端点的应用密钥、应用密钥机密和已验证的消费者密钥。将 [API 权限](https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps)限制为所选项目的操作。 | 创建 Ubuntu [Public Cloud 实例](https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started)，通过 Ext-Net 使用 Basic Public IP，并配置 SSH 密钥和安全组。使用 `ubuntu`。Floating/Additional IP 是独立资源。 |
| [Scaleway Instances](./scaleway/) | IAM 应用的 API 密钥机密和项目 UUID，具有实例、卷、IP、安全组和 SSH 密钥权限。参阅 [API 密钥创建](https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/)。 | 创建 Ubuntu 实例，关联[同一可用区中的灵活路由 IPv4](https://www.scaleway.com/en/docs/instances/how-to/use-flexips/)，配置安全组并开机。使用镜像指定的 SSH 登录名，通常为 `root`。 |

</div>

**[AWS EC2](./aws-ec2/) 替代方案：**在具备 [internet gateway 和 `0.0.0.0/0` 网关路由](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html)的公共子网启动 Ubuntu，选择 SSH 密钥和安全组，再关联 [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html)。使用 `ubuntu` 登录。VPN Setup 的 AWS 自动适配器针对 Lightsail；EC2 采用控制台流程。仅有 Elastic IP 不会让私有子网变得可访问。

如果组织禁止服务账户密钥、外部 IP 或你选择的 SSH 认证方式，请获取管理员批准的配置。控制台设置不能绕过这些限制。

## 创建资源并保存 SSH 连接

打开**插件**，从默认目录安装 **VPN Setup**，再打开其独立页面。选择**设置 VPN**、选择服务商，再选择**通过云 API 创建**或**在云控制台创建**。已有服务器则选择现有公网服务器选项。在原生表单填写凭据，选择或生成 SSH 密钥，并检查位置、规格、镜像和 SSH 来源 CIDR。依据账户获取的选项和预检可帮助选择受支持配置，但不会预留容量或保证配额。查看服务商当前价格，并在屏幕上批准创建。

继续跟进现有操作，直至 VM 和 SSH 就绪。如果请求超时或 Android 暂停后台工作，请恢复或检查该操作，不要再创建一台收费 VM。创建响应丢失时，可能需要查询云端或检查控制台。保留 VM、磁盘、地址和防火墙资源 ID；已停止的工作流仍可能创建过资源。

VPN Setup 会请求批准 SSH 主机密钥，保存连接，安装 wg-easy 并导入第一个客户端。请对照服务商可信控制台核验指纹。手动设置时，在**服务器**中添加公网 IPv4、SSH 端口 `22`、镜像用户名和匹配私钥。Google Cloud 和 Azure 自动适配器使用 `ubuntu`；控制台指南使用你在其中配置的用户名。身份检查和已保存凭据请参阅[入门指南](../getting-started/)。

## 配置两层网络

公网地址还需要路由、云防火墙许可、客户机防火墙许可和正在监听的服务。在提供商防火墙/安全组中使用以下规则，并保留客户机上必需的现有规则。

- **TCP 22：**允许所选管理 CIDR 通过 SSH 访问。创建资源时配置此规则。
- **UDP 51820：**允许使用 VPN 的网络访问。漫游客户端可能需要 `0.0.0.0/0`。VPN Setup 会为 API 创建的部署配置此规则；自备服务器请使用云控制台配置。
- **TCP 51821：**禁止公网访问。wg-easy 管理界面只映射到服务器回环地址，通过 SSH 隧道访问。
- **出站流量：**允许软件包和容器下载、DNS，以及 VPN 需要承载的互联网流量。

检查 Docker 的[防火墙行为](https://docs.docker.com/engine/install/ubuntu/#firewall-limitations)：发布的容器端口可能绕过 UFW 规则。不要仅靠 UFW 隐藏管理界面，也不要清空提供商的防火墙链，尤其是 OCI 的存储/iSCSI 规则。

<a id="wg-easy-install"></a>

## 在所选虚拟机上安装 wg-easy

批准后，VPN Setup 通过 SSH 安装用摘要固定的 wg-easy 版本，在 Ubuntu 24.04 上按需安装 Docker，并创建第一个客户端。它让管理界面保持在服务器回环地址，并保留服务商防火墙链。对于控制台创建或现有服务器，请自行配置云防火墙；安装器需要 SSH 访问和管理权限，不需要云 API 秘密。请使用全新专用服务器，不要假定它能接管其他 VPN 安装。

旧版 **WireGuard (wg-easy)** 目录插件需要活动 SSH 会话和 Docker。它与 **VPN Setup** 是不同插件，并不承诺原生客户端导入。请在兼容 Android 版本上使用 VPN Setup，或在全新专用 VM 上通过 Mobile SSH 终端执行下方手动流程。

### 通过 SSH 手动安装

按照官方 [Ubuntu 说明](https://docs.docker.com/engine/install/ubuntu/)安装 Docker Engine 及其 Compose 插件。然后下载指定版本的上游配置：

```sh
sudo mkdir -p /opt/wg-easy
sudo curl -fL https://raw.githubusercontent.com/wg-easy/wg-easy/v15.5.0/docker-compose.yml -o /opt/wg-easy/compose.yaml
```

启动前，用具有权限的终端编辑器编辑 `/opt/wg-easy/compose.yaml`。在 `services.wg-easy` 下替换镜像，取消注释或设置环境块，并将端口映射替换为下列值。保留上游文件的其余部分，包括持久卷、模块挂载、能力、网络和 sysctls：

```yaml
image: ghcr.io/wg-easy/wg-easy:15.5.0@sha256:071f79a639e9361123a5e57733107320207b844ddbbd92dfa6962f541fe8aac8
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

为每台设备创建独立客户端，并下载其 WireGuard `.conf`。如果你的 Mobile SSH 版本支持，请打开 **VPN → WireGuard**，添加配置、导入文件并保存。当前 Android 和 iOS 源码均支持文件导入，请检查已安装版本。VPN Setup 在兼容 Android 版本上直接导入第一个客户端。其页面还提供**添加客户端**、**撤销客户端**、**导出客户端/二维码**，以及通过私有 SSH 隧道**打开管理界面**。这并不代表旧插件或 iOS 有同等自动化能力。配置文件和二维码含私钥，请妥善保密。

## 验证 VPN 并处理故障

启动配置，并批准操作系统的 VPN 请求。检查近期的对端握手和增长的流量计数，再测试 DNS 及预期互联网或私有网络路由。仅有已导入配置或运行中的容器，不代表 VPN 已经可用。

- **VM 创建被拒绝：**检查计费、配额、区域容量、凭据有效期和具体 IAM 权限。Google Cloud 写入防火墙需要超出 Compute Network Admin 的权限；组织强制 OS Login 时需采用获批的控制台配置。
- **SSH 超时：**检查公网地址、子网路由、TCP 22 规则和手机当前来源 IP。认证失败通常需要检查镜像用户名和 SSH 密钥。
- **管理界面不可用：**保持 SSH 转发连接，检查容器状态和回环端口映射，确认 HTTP 只用于该隧道。
- **没有 WireGuard 握手：**检查客户端端点、两层防火墙中的 UDP 51820、客户端密钥和服务器是否监听。
- **已握手但无流量：**检查转发/NAT、DNS、路由重叠和 `AllowedIPs`。IPv4 全隧道使用 `0.0.0.0/0`；IPv6 需单独评估。没有上游 IPv6 的 VM 无法提供 IPv6 互联网出口，仅 IPv4 路由还可能让 IPv6 绕过 VPN。

## 更新插件和 VPN 服务器

在**插件**中，使用可用的**更新**操作安装同一目录中的较新兼容版本。检查新请求的能力。设置、凭据和部署记录会保留；未完成的操作继续使用启动它的插件版本。仅更新插件不会更新服务器上的 wg-easy 容器。

在插件桥接版本 1.4.0 或更新版本上，**检查服务器**会报告运行中的 wg-easy 版本，**更新 WireGuard**会提供插件固定的版本。在屏幕上批准更新。它先下载镜像再更改服务，并保留服务器密钥、客户端和本地配置。如果此手机正在使用该 VPN，应用会在更新前断开它；完成后请重新连接。这更新的是受管理容器，不是主机操作系统。

更新失败会区分镜像下载失败、成功回滚，以及导致 VPN 停机的回滚失败。请按恢复检查或重试指引操作，不要假定服务已恢复。手动安装需自行审查并更换固定镜像和备份；上方全新安装流程不是迁移指南。

## 移除客户端并停止云费用

丢弃本地配置前，先在 wg-easy 中撤销客户端。在 Mobile SSH 删除配置不会撤销服务器上的对端密钥。移除 VPN 容器或其持久数据前，安全备份所需配置。

对于 API 创建的部署，**删除部署**会先审查，再通过服务商 API 删除它拥有的云资源，即使 SSH 不可用也能进行。如果删除暂停或失败，请检查报告中仍存在的资源，恢复清理或查看控制台。不要将无关资源放入插件管理的部署，尤其是其专用 Azure 资源组。

对于控制台创建或现有服务器，插件删除操作会移除其管理的 VPN 安装，但**不会**删除你的 VM 或公网 IP。不再需要时请在服务商控制台删除，再检查保留的磁盘、快照、地址和网络资源。如果恢复时改过账户或位置设置，也要检查之前的账户和位置，包括之前的 Scaleway 项目或 Oracle Cloud compartment。

**停止工作流**只停止操作，不会删除资源。在桥接版本 1.5.0 或更新版本上，只有应用能确认没有未结束操作或待处理受管资源、符合遗忘条件时，才会提供**从列表移除**。它清除的是本地历史，不是云资源。停止 VM 或卸载插件也不保证费用停止。请保留资源 ID，直到确认删除。
