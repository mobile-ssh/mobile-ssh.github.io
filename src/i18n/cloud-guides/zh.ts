import type { CloudGuides } from "./types";

export const zh: CloudGuides = {
  "title": "在 {provider} 上创建虚拟机",
  "description": "逐步介绍在 {provider} 创建虚拟机、配置公网 IPv4 和防火墙、从 Mobile SSH 连接，以及可选的 API 凭据与资源清理。",
  "intro": "在你自己的 {provider} 账户中创建一台具有公网 IPv4 的 Ubuntu 服务器。按控制台步骤操作，通过 Mobile SSH 连接，然后单独安装 wg-easy。",
  "back": "云端虚拟机与 wg-easy",
  "indexHeading": "各云服务商的分步指南",
  "indexIntro": "选择服务商，查看其控制台页面、公网 IP 设置、SSH 登录方式、可选 API 凭据与清理步骤。AWS Lightsail 和 EC2 各有独立教程。",
  "cardAction": "创建虚拟机并通过 Mobile SSH 连接",
  "navLabel": "选择云服务商",
  "openConsole": "打开服务商控制台",
  "availability": "这些说明使用服务商的控制台。独立的虚拟机创建插件仍在规划中；Android 综合 VPN Setup 实现仅存在于本地，尚未发布。API 部分用于准备未来的访问权限，手动操作无需此步骤。",
  "availabilityLink": "查看插件可用情况",
  "checked": "控制台文档核对日期：2026 年 11 月 8 日。",
  "beforeHeading": "开始之前",
  "before": [
    "启用计费，并检查目标区域的虚拟机、磁盘和公网 IP 配额。创建资源前查看显示的价格；不要假设一定有免费额度或某个套餐可用。",
    "本教程使用 Ubuntu 24.04 LTS、至少 1 GB 内存和 20 GB 存储空间；若服务商最低配置更高，则以其为准。CPU 架构必须与镜像匹配。这是本指南的基准配置，并非 wg-easy 的通用最低要求。",
    "将 SSH 私钥保留在 Mobile SSH 中，只上传公钥。当前 Android 和 iOS 客户端均支持 Ed25519；Lightsail 的 RSA 导入及 iOS 解决方法见其具体步骤。记录你当前的公网 IPv4，并在后面加上 <code>/32</code> 作为 SSH 来源，或使用经批准的管理 CIDR。"
  ],
  "networkHeading": "本方案的网络规则",
  "networkRules": [
    "允许管理 CIDR 通过入站 <code>TCP 22</code> 访问。如果不需要更宽泛的 SSH 放行规则，请删除它们；添加严格规则并不会自动取消原有的宽泛规则。手机公网地址变化后，请更新来源。",
    "为后续 VPN 步骤，允许 VPN 客户端网络通过入站 <code>UDP 51820</code> 访问；漫游客户端可能需要 <code>0.0.0.0/0</code>。若启用 IPv6，请明确配置其规则。",
    "不要向公网开放 <code>TCP 51821</code>。wg-easy 管理界面将绑定到服务器回环地址，并通过 SSH 转发访问。",
    "允许必要的出站 DNS、软件包和容器下载，以及 VPN 流量。同时检查云端与虚拟机内部的防火墙；保留服务商存储及必要的 ICMP 规则。"
  ],
  "stepsHeading": "创建服务器并连接",
  "sourceLink": "服务商说明",
  "connectHeading": "在 Mobile SSH 中保存服务器",
  "connectText": "打开服务器列表，添加服务器并填写以下值。选择包含匹配私钥的凭据。如果你配置的用户名与本指南示例不同，请使用自己的用户名。",
  "hostLabel": "主机",
  "hostValue": "服务商控制台中显示的虚拟机公网 IPv4",
  "portLabel": "端口",
  "userLabel": "用户名",
  "credentialLabel": "身份验证",
  "credentialValue": "匹配的 SSH 私钥凭据",
  "identityText": "通过服务商可信的控制台或启动日志获取 SSH 主机密钥指纹，并在信任连接前进行比对。在 Android 上，如需在首次连接时检查，请关闭自动接受新身份。替换已保存的身份之前，应先调查密钥变更警告。",
  "connectionGuide": "SSH 密钥与身份检查",
  "vpnHeading": "单独安装 wg-easy",
  "vpnText": "先确认保存的服务器能够打开终端，且登录账户具有 root 或 sudo 权限。然后按照通用 wg-easy 安装指南操作：安装 Docker、使用固定版本的容器、通过 SSH 私密管理、创建客户端并验证 VPN。安装程序需要 SSH 访问权限，不需要云 API 密钥。",
  "vpnLink": "继续查看 wg-easy 安装步骤",
  "apiHeading": "为未来插件准备的可选 API 凭据",
  "apiIntro": "使用控制台设置时请跳过此部分。仅在兼容的资源创建插件需要时创建凭据。下列权限清单是准备工作的指导，并非针对已发布插件测试过的最小权限策略。",
  "apiSecretNote": "仅在受支持的受保护表单中输入凭据。不要将云端密钥放入语音提示、终端命令或虚拟机中。使用受支持的最小权限范围，记录到期时间，并撤销不再需要的凭据。",
  "cleanupHeading": "删除不再需要的资源",
  "cleanupWarning": "停止虚拟机、取消设置任务或删除 Mobile SSH 配置，并不会删除云资源，也不保证停止计费。在确认删除之前保留资源 ID，且不要删除无关资源。",
  "providers": {
    "aws-lightsail": {
      "consoleSteps": [
        "登录 AWS 账户，打开 Lightsail，然后选择<strong>创建实例</strong>。选择最接近预期 VPN 位置的区域。",
        "选择 <strong>Linux/Unix → 仅操作系统 → Ubuntu 24.04 LTS</strong>。选择至少具有 1 GB 内存和 20 GB 存储的 IPv4/IPv6 双栈套餐，并核对显示的价格。",
        "选择该区域的 SSH 密钥对，或上传你的 RSA 公钥。安全保管私钥，为实例命名，然后选择<strong>创建实例</strong>。iOS 还需要完成下方的额外密钥设置。",
        "打开<strong>联网 → 创建静态 IP</strong>。选择相同区域，将地址附加到此实例，命名后创建。记录静态 IPv4。",
        "在实例的<strong>联网</strong>选项卡中，将 SSH 限制为手机的公网 IPv4，同时保留<strong>允许 Lightsail 浏览器 SSH/RDP</strong>。添加通用的 UDP 51820 规则；单独检查 IPv6 规则，并保持 TCP 51821 关闭。",
        "对于 iOS，选择<strong>连接 → 使用 SSH 连接</strong>。将应用的 Ed25519 公钥作为新的一行加入 <code>/home/ubuntu/.ssh/authorized_keys</code>，保留现有密钥。浏览器 SSH 使用服务商的独立密钥；现在静态 IPv4 已准备就绪。"
      ],
      "apiSteps": [
        "仅为未来的资源创建插件准备：创建专用 IAM 身份，授予所需的 Lightsail 实例、SSH 密钥、静态 IP 和防火墙操作权限，包括清理操作。在支持的情况下限制区域和资源；这不是经过测试的最小权限策略。",
        "在 <strong>IAM → 用户 → 安全凭据</strong>下，仅当受支持的自动化功能需要时才创建访问密钥。通过受保护的原生表单提供其 ID 和密钥；临时凭据还需提供会话令牌。切勿使用 root 密钥。"
      ],
      "cleanupSteps": [
        "使用完毕后删除实例。分别检查保留的快照和磁盘；停止实例不会终止所有费用。",
        "解除关联后，单独释放静态 IP。删除实例并不会删除该地址。"
      ]
    },
    "aws-ec2": {
      "consoleSteps": [
        "在所需 AWS 区域打开 EC2，选择<strong>启动实例</strong>。为服务器命名，选择 Canonical 官方 <strong>Ubuntu Server 24.04 LTS</strong> AMI，并检查发布者和架构。",
        "选择至少具有 1 GB 内存且架构匹配的实例类型。在<strong>配置存储</strong>下，为启动卷选择至少 20 GB，并查看预计资源费用。",
        "在<strong>密钥对</strong>下，选择现有密钥，或为 Linux 创建或导入 Ed25519 密钥对。确保应用中有匹配的私钥；AWS 会将公钥安装到实例上。",
        "在<strong>网络设置</strong>中选择公有子网。其 VPC 必须附加互联网网关，并有一条指向该网关的 <code>0.0.0.0/0</code> 路由。启用公网 IPv4；静态地址将在下方设置。",
        "创建或选择包含通用 TCP 22 和 UDP 51820 规则的安全组。将 SSH 限制为手机的公网 IPv4，保持 TCP 51821 关闭，然后选择<strong>启动实例</strong>并等待运行。",
        "打开<strong>网络与安全 → 弹性 IP → 分配弹性 IP 地址</strong>。随后选择<strong>操作 → 关联弹性 IP 地址</strong>，选中此实例及其主私有 IP。记录静态 IPv4；公网 IPv4 地址会产生费用。"
      ],
      "apiSteps": [
        "仅为未来的资源创建插件准备：创建专用 IAM 身份，涵盖实例创建、相关 AMI、网络、磁盘和密钥资源、标签、弹性 IP 及清理操作。现有的读取、启动和停止权限并不足够。仅在附加实例配置文件时添加 <code>iam:PassRole</code>。",
        "创建或获取该身份的凭据，并仅通过受支持的受保护原生设置提供。在支持的情况下优先使用临时凭据，并包含会话令牌；切勿使用 root 访问密钥。此控制台流程不需要在 Mobile SSH 中提供 API 密钥。"
      ],
      "cleanupSteps": [
        "终止实例。检查<strong>终止时删除</strong>设置，并单独删除不需要的保留 EBS 卷或快照。",
        "单独释放弹性 IP。终止实例会解除地址关联，但不会释放地址或停止其计费。"
      ]
    },
    "google-cloud": {
      "consoleSteps": [
        "选择或创建 Google Cloud 项目，启用计费，并启用 <strong>Compute Engine API</strong>。打开 <strong>Compute Engine → 虚拟机实例 → 创建实例</strong>。",
        "为虚拟机命名，选择区域、可用区及至少具有 1 GB 内存的机器。在<strong>操作系统和存储 → 更改</strong>下，选择 <strong>Ubuntu → Ubuntu 24.04 LTS</strong> 及至少 20 GB 存储。",
        "在虚拟机所在区域预留一个区域性静态外部 IPv4。在虚拟机的<strong>网络</strong>设置中，选择所需 VPC 和子网，并将该地址指定为网络接口的外部 IPv4。VPC 必须具有默认互联网路由；如果项目中没有网络和子网，请创建合适的配置。",
        "在虚拟机的 SSH 密钥设置中添加应用公钥，使用 <code>mobileuser</code> 作为用户名注释：<code>ssh-ed25519 AAAA… mobileuser</code>。如果项目强制使用 OS Login，请改用该流程及其分配的 POSIX 用户名；元数据密钥无法覆盖此要求。",
        "添加网络标签，例如 <code>wg-vpn</code>。创建针对该标签的入站防火墙规则，允许通用的 TCP 22 和 UDP 51820 访问。将 SSH 限制为手机的公网 IPv4，并保持 TCP 51821 关闭。",
        "检查完虚拟机配置后选择<strong>创建</strong>。等待实例运行，然后记录其外部 IPv4 和上方选定的 SSH 用户名。不要假设用户名是 <code>ubuntu</code>。"
      ],
      "apiSteps": [
        "仅为未来的资源创建插件准备：使用专用服务账户，并在项目范围内授予 Compute Instance Admin (v1)、Compute Network Admin 和 Compute Security Admin 角色，或权限更窄的等效角色。Compute Network Admin 无法创建防火墙。如果附加虚拟机服务账户，还需授予对该账户的 Service Account User 角色。",
        "如果受支持的自动化功能需要 JSON 密钥且组织政策允许，打开 <strong>IAM 和管理 → 服务账户 → 密钥 → 添加密钥 → 创建新密钥 → JSON</strong>。通过受保护的原生设置提供项目 ID 和 JSON；切勿绕过密钥限制。"
      ],
      "cleanupSteps": [
        "删除虚拟机，并检查其启动磁盘和数据磁盘是否被删除或保留；移除不需要的保留磁盘和快照。",
        "单独释放预留的外部 IPv4。删除虚拟机不会释放预留地址。"
      ]
    },
    "azure": {
      "consoleSteps": [
        "使用有效订阅打开 Azure 门户。创建专用资源组，然后打开<strong>虚拟机 → 创建 → Azure 虚拟机</strong>，选择该订阅和资源组。",
        "输入名称和区域。选择 <strong>Ubuntu Server 24.04 LTS – x64 Gen2</strong>，以及至少具有 1 GB 内存的兼容规格。操作系统磁盘至少保留 20 GB，并查看显示的费用。",
        "选择 <strong>SSH 公钥</strong>身份验证，将管理员用户名设为 <code>azureuser</code>，并选择现有公钥。粘贴应用的 Ed25519 公钥，将私钥保留在应用中。",
        "在<strong>网络</strong>下，选择或创建 VNet 和子网。在适当区域创建或选择 Standard 静态公网 IPv4，并将其附加到此虚拟机的网络接口 IP 配置。",
        "为适用的网络安全组配置通用 TCP 22 和 UDP 51820 规则。将 SSH 限制为手机公网 IPv4，保持 TCP 51821 关闭。如果子网和接口都配置了安全组，两者都必须允许该流量。",
        "选择<strong>查看并创建 → 创建</strong>。等待部署完成，然后打开虚拟机<strong>概述</strong>，记录公网 IPv4。虚拟机现已配置好 <code>azureuser</code> 账户及你选择的 SSH 密钥。"
      ],
      "apiSteps": [
        "仅为未来的资源创建插件准备：在 <strong>Microsoft Entra ID → 应用注册</strong>下创建专用的单租户应用。记录租户、客户端和订阅 ID。如有需要，在<strong>证书和密码</strong>下创建客户端密码，并复制其值，而不是密码 ID。",
        "在资源组的<strong>访问控制 (IAM)</strong>中，为该主体分配适当的计算和网络权限。此专用资源组的 Contributor 角色权限较宽，但可用；应优先选择经过测试的更窄角色。先创建资源组，因为资源组范围的权限无法创建资源组。使用受保护的原生凭据设置。"
      ],
      "cleanupSteps": [
        "如果资源组中仅包含此次部署，检查其内容，并在完成后删除整个资源组。",
        "如果保留资源组，请删除虚拟机并检查附属资源的删除选项。分别删除不需要的保留磁盘、网络接口和公网 IP。"
      ]
    },
    "digitalocean": {
      "consoleSteps": [
        "在控制面板中打开<strong>创建 → Droplet</strong>。选择附近且有可用容量的<strong>区域</strong>。使用能标识此服务器的项目和主机名；不同区域的套餐可用性和价格可能不同。",
        "在<strong>选择镜像 → 操作系统</strong>下选择 <strong>Ubuntu 24.04 LTS</strong>。如果出现配置类型选择器，选择<strong>捆绑配置</strong>，然后选择<strong>共享 CPU → 基本</strong>。选择至少 <strong>1 GB 内存</strong>和 <strong>20 GB 磁盘</strong>；若服务商最低配置更高，则以其为准。",
        "在<strong>选择身份验证方式 → SSH 密钥 → 添加 SSH 密钥</strong>下，粘贴并命名公钥，然后选中它。将匹配的私钥保留在设备上；之后添加到账户的密钥不会自动安装到现有 Droplet。",
        "在<strong>网络</strong>下，保持选中<strong>公网 IPv4 地址</strong>。将数量设为 <strong>1</strong>，确认主机名和项目，然后点击<strong>创建 Droplet</strong>。取消两个公网地址选项会创建仅支持私有网络的服务器。",
        "打开<strong>创建 → 防火墙</strong>并命名。将默认允许任意来源 SSH 的规则改为仅允许管理 CIDR 访问 <strong>TCP 22</strong>；可按通用指南添加 <strong>UDP 51820</strong> 规则。保留合适的出站规则，在<strong>应用到 Droplet</strong>下选择服务器，然后创建防火墙。",
        "如果需要在更换实例后保留地址，打开<strong>网络 → 预留 IP → 添加预留 IP</strong>。选择 <strong>IPv4 地址 → 分配到 Droplet</strong>，选中此 Droplet 并确认。资源创建完成后，记录分配的公网 IPv4。"
      ],
      "apiSteps": [
        "仅适用于未来的兼容插件：打开<strong>账户 → API → 令牌 → 生成新令牌</strong>。输入说明性名称和到期时间。",
        "选择<strong>自定义范围</strong>，授予已实现流程所需的 Droplet、SSH 密钥、防火墙和预留 IP 操作及依赖权限。不要默认选择完全访问权限；令牌显示时保存它。"
      ],
      "cleanupSteps": [
        "保存需要的数据后，打开<strong>设置 → 销毁</strong>，检查相关资源，输入 Droplet 名称并确认。未选中的卷和快照将保留；自动备份保持原有到期时间。",
        "对于不需要的地址，打开<strong>网络 → 预留 IP → … → 删除</strong>，然后确认<strong>删除预留 IP</strong>。保留的地址及其他资源可能继续计费。"
      ]
    },
    "hetzner": {
      "consoleSteps": [
        "打开目标项目，然后选择<strong>防火墙 → 创建防火墙</strong>。为防火墙命名，允许管理 CIDR 通过入站 <strong>TCP 22</strong> 访问。可添加通用指南中的 <strong>UDP 51820</strong> 规则。出站规则留空表示允许出站流量。",
        "打开<strong>服务器 → 添加服务器</strong>。选择附近且有所选服务器类型可用的<strong>位置</strong>。防火墙和服务器应在同一项目中；可用性取决于位置及当前容量。",
        "选择可用的<strong>类型</strong>，至少具有 <strong>1 GB 内存</strong>和 <strong>20 GB 磁盘</strong>；若服务商最低配置更高，则以其为准。在<strong>镜像 → 操作系统镜像</strong>下，选择与服务器架构匹配的 <strong>Ubuntu 24.04</strong>。",
        "在<strong>网络</strong>下启用公网 <strong>IPv4</strong>。选择同一项目和位置中未分配的<strong>主 IPv4</strong>，或让 Hetzner 创建一个。仅使用私有网络或 IPv6 的服务器不符合本指南的公网 IPv4 要求。",
        "在 <strong>SSH 密钥</strong>下添加或选择公钥。在<strong>防火墙</strong>下选择之前创建的防火墙。这里选中的账户密钥会在创建服务器时安装；之后再向账户添加密钥不会更新此服务器。",
        "输入易于识别的<strong>名称</strong>，检查可选备份及总费用，然后点击<strong>立即创建并购买</strong>。等待服务器就绪，记录其主 IPv4。如果需要重用地址，请保留此 IP 资源。"
      ],
      "apiSteps": [
        "仅适用于未来的兼容插件：打开目标项目的<strong>安全 → API 令牌 → 生成 API 令牌</strong>，输入描述。",
        "为资源创建选择<strong>读写</strong>，并在关闭窗口前复制令牌。这会授予整个项目的写入权限，而非仅限此服务器的权限。"
      ],
      "cleanupSteps": [
        "保存需要的数据，然后删除目标服务器。如需保留地址用于替换服务器，请先关闭主 IP 的<strong>自动删除</strong>设置。",
        "单独删除不需要的保留主 IP、卷和快照。只要保留 IPv4 地址就会继续计费；启用<strong>自动删除</strong>会随服务器一起移除未受保护的主 IP。"
      ]
    },
    "linode": {
      "consoleSteps": [
        "打开<strong>防火墙 → 创建防火墙 → 自定义防火墙</strong>。输入标签。保持<strong>默认入站策略：丢弃</strong>及<strong>默认出站策略：接受</strong>；这样允许出站流量，同时要求为入站连接设置明确规则。",
        "添加入站规则，设置<strong>协议：TCP</strong>、<strong>端口：22</strong>、包含管理 CIDR 的<strong>来源：IP/网络掩码</strong>，以及<strong>操作：接受</strong>。可添加通用指南中的 <strong>UDP 51820</strong> 规则。点击<strong>保存更改</strong>以启用规则。",
        "打开<strong>创建 → Linode</strong>。选择附近的核心计算区域，然后选择<strong>发行版 → Ubuntu 24.04</strong>。选择可用套餐，至少具有 <strong>1 GB 内存</strong>和 <strong>20 GB 磁盘</strong>；若服务商最低配置更高，则以其为准。",
        "设置<strong>标签</strong>。在安全设置中选择现有 SSH 密钥，或点击<strong>添加 SSH 密钥</strong>并粘贴公钥。使用 SSH 密钥创建实例时，<strong>Root 密码</strong>为可选项；将私钥保留在设备上。",
        "在网络设置中，选择<strong>公共互联网</strong>和 <strong>Linode 接口</strong>。为此公网接口选择防火墙。在 <strong>IP 地址</strong>下选择<strong>预留</strong>及同一区域的地址，或点击<strong>预留 IP</strong>以获取地址。",
        "在 <strong>Linode 摘要</strong>中检查可选备份和其他费用，然后点击<strong>创建 Linode</strong>。等待初始化完成，记录公网 IPv4。删除服务器后，预留地址仍保留在账户中，且无法移至其他区域。"
      ],
      "apiSteps": [
        "仅适用于未来的兼容插件：打开用户名菜单 → <strong>API 令牌 → 创建个人访问令牌</strong>。设置标签和到期时间。",
        "仅授予必要范围：创建资源通常需要 Linodes 和 Firewalls 的读写权限；预留或释放地址还需要 <code>ips:read_write</code>。安全保存令牌。"
      ],
      "cleanupSteps": [
        "保存需要的数据，然后打开 <strong>Linodes → … → 删除 → 删除 Linode</strong>。另行检查保留的卷和镜像。",
        "对于不需要的地址，打开<strong>预留 IP → … → 取消预留</strong>并确认。预留 IP 在删除服务器后仍会保留，并持续计费直到释放。"
      ]
    },
    "vultr": {
      "consoleSteps": [
        "打开<strong>账户 → SSH 密钥 → 添加 SSH 密钥</strong>。粘贴公钥并命名，然后保存。将对应私钥保留在设备上；配置实例时选择此已保存的公钥。",
        "打开<strong>网络 → 防火墙组 → 创建防火墙组</strong>并命名。添加允许管理 CIDR 访问 <strong>TCP 22</strong> 的入站 IPv4 规则，以及可选的 <strong>UDP 51820</strong> 规则。确认至少有一条已保存的规则：空组不会执行过滤。",
        "打开<strong>计算 → 实例 → 创建实例 + → 共享 CPU</strong>。选择可用套餐，至少具有 <strong>1 GB 内存</strong>和 <strong>20 GB 磁盘</strong>；若服务商最低配置更高，则以其为准。选择附近位置，然后点击<strong>配置</strong>。",
        "在<strong>镜像选择和配置 → 操作系统</strong>下选择 <strong>Ubuntu 24.04</strong>。在<strong>服务器设置</strong>下，选择你的 <strong>SSH 密钥</strong>条目和已包含规则的<strong>防火墙组</strong>。输入<strong>服务器 1 主机名</strong>和<strong>服务器 1 标签</strong>。",
        "在<strong>实例连接</strong>下，选择<strong>具有公网 IP 的实例</strong>并保持启用<strong>公网 IPv4</strong>。检查自动备份及其他可选费用。<strong>受限用户登录</strong>会将登录用户从 <code>root</code> 改为具有 sudo 权限的 <code>linuxuser</code>。检查<strong>摘要</strong>并点击<strong>部署</strong>。",
        "等待实例就绪，记录公网 IPv4。普通地址在该实例存在期间保持不变；如果需要在替换实例后继续使用，请选择同一区域的预留 IP。"
      ],
      "apiSteps": [
        "仅适用于未来的兼容插件：打开<strong>账户 → API</strong>，然后在<strong>个人访问令牌</strong>下选择<strong>启用 API</strong>。安全保管凭据。",
        "在<strong>访问控制</strong>下，允许发起 API 请求的 IP 或 CIDR。移动网络改变后需更新；这限制的是请求来源，而非对特定资源的权限。"
      ],
      "cleanupSteps": [
        "保存需要的数据，打开实例并点击<strong>销毁服务器</strong>。选中<strong>是，销毁此服务器</strong>，然后点击<strong>销毁服务器</strong>。",
        "通过<strong>网络 → 预留 IP → 移除预留 IP</strong>删除不需要的保留地址。还要检查独立存储和快照；删除服务器并不等于清理整个账户。"
      ]
    },
    "oracle-cloud": {
      "consoleSteps": [
        "选择 OCI 区域及专用区间。确认计算、卷和公网 IP 配额；容量和免费套餐资格取决于所选资源。",
        "打开<strong>网络 → 虚拟云网络 → 启动 VCN 向导 → 创建具有互联网连接的 VCN</strong>。使用其公有子网，并确认存在通过互联网网关的 <code>0.0.0.0/0</code> 路由。",
        "检查公有子网的安全列表及附加的网络安全组。将 TCP <code>22</code> 限制为管理 CIDR，允许 UDP <code>51820</code>，并保留必要的出站及 ICMP 规则。",
        "打开<strong>计算 → 实例 → 创建实例</strong>。设置名称、区间及可用性域。选择<strong>更改镜像 → Ubuntu → 24.04</strong>、兼容的虚拟机规格，以及足够的内存和启动存储。",
        "选择公有子网，并启用公网 IPv4 分配。在<strong>添加 SSH 密钥</strong>下粘贴或上传 Ed25519/ECDSA 公钥；控制台生成的密钥为 RSA。将匹配的私钥保留在设备上。",
        "检查并创建虚拟机。进入运行状态后，记录公网 IPv4。如果需要在替换虚拟机后保留地址，可将临时 IP 换成分配到其主私有 IP 的预留公网 IP，并记录新地址。"
      ],
      "apiSteps": [
        "仅适用于未来的资源创建插件：请管理员为专用 IAM 用户或组授予此区间中所需的计算、网络和卷权限。",
        "打开<strong>用户设置 → API 密钥 → 添加 API 密钥</strong>。保存 RSA PEM 签名私钥、指纹、租户和用户 OCID 及区域；记录区间 OCID。这与 SSH 密钥是分开的。"
      ],
      "cleanupSteps": [
        "终止实例，并明确删除不再需要的启动卷；OCI 默认保留该卷。先备份需要的数据。",
        "删除不需要的预留公网 IP 和保留卷。移除专用 VCN 中闲置的子网、网关及其他网络资源，包括向导创建的私有网络资源。"
      ]
    },
    "ovhcloud": {
      "consoleSteps": [
        "启用 Public Cloud 项目和付款方式。检查<strong>项目管理 → 配额</strong>。在 <strong>SSH 密钥 → 创建 SSH 密钥</strong>下，为公钥命名并粘贴，然后选择<strong>添加</strong>。",
        "打开<strong>计算 → 实例 → 创建实例</strong>。为虚拟机命名，选择区域及合适型号，选择 Ubuntu <code>24.04</code>，并选中保存的 SSH 密钥。",
        "在网络设置中启用<strong>分配公网 IP → 基本公网 IP</strong>；默认不启用公网连接。基本 IP 使用 <code>Ext-Net</code>，无法与网关兼容。检查自动快照和费用，选择按小时计费，然后选择<strong>创建我的实例</strong>。",
        "要配置过滤规则，打开<strong>项目管理 → 用户</strong>。如有需要，创建具备适当网络及实例权限的 OpenStack 用户，保存密码，并选择其<strong>… → 启动 OpenStack Horizon</strong>操作。",
        "在 Horizon 中选择虚拟机区域，然后打开<strong>网络 → 安全组 → 创建安全组</strong>。创建专用组。在<strong>管理规则</strong>下，允许管理 CIDR 访问 TCP <code>22</code>，并允许 UDP <code>51820</code>；保留出站规则。",
        "打开 Horizon 的<strong>计算 → 实例 → 编辑安全组</strong>。应用专用组，仅从此虚拟机移除宽松的默认组；切勿编辑或删除共享的默认组。状态变为 Active 后，从概述中记录公网 IPv4。"
      ],
      "apiSteps": [
        "仅适用于未来的资源创建插件：打开账户 API 区域对应的令牌创建页面。为应用命名，设置到期时间，并将权限限制为文档规定的项目路径和操作。",
        "安全保存应用密钥、应用密码和消费者密钥。这些签名 API 凭据与 Horizon 使用的 OpenStack 用户名和密码不同。"
      ],
      "cleanupSteps": [
        "备份需要的数据，然后选择实例的<strong>… → 删除 → 删除实例</strong>。按小时计费会持续到删除完成。",
        "分别移除不需要的卷、快照或备份，以及独立创建的浮动 IP、附加 IP 或网关。删除虚拟机不会移除所有相关资源。"
      ]
    },
    "scaleway": {
      "consoleSteps": [
        "选择正确的组织和项目，启用计费并检查配额。在<strong>项目仪表板 → 添加 SSH 密钥</strong>中，为公钥命名并粘贴。SSH 密钥的作用范围仅限此项目。",
        "在所选可用区中打开<strong>计算 → CPU 与 GPU 实例 → 安全组</strong>。在该可用区创建专用组。启用有状态过滤，将入站设为<strong>丢弃</strong>，出站设为<strong>接受</strong>。",
        "在组的<strong>规则</strong>选项卡中，允许管理 CIDR 访问 TCP <code>22</code>，并允许 VPN 客户端访问 UDP <code>51820</code>。保持 TCP <code>51821</code> 关闭。自动创建的默认组是无状态的，因此必须明确选择专用组。",
        "选择<strong>创建实例 → 创建 CPU 实例</strong>，选择合适的 CPU 配置及相同可用区，然后选择<strong>配置实例</strong>。为其命名，选择 Ubuntu <code>24.04</code>/Noble，并配置至少 20 GB 的系统卷。",
        "保持启用<strong>公网 IPv4</strong>，分配新地址或选择可用的现有地址。选择专用安全组，并确认显示的 SSH 密钥。如果启用了 IPv6，请单独检查其设置。",
        "选择<strong>检查</strong>，查看预计费用，然后选择<strong>创建实例</strong>。等待资源创建完成，并从<strong>概述</strong>复制公网 IPv4。此弹性 IP 是独立资源，需要自行管理其生命周期。"
      ],
      "apiSteps": [
        "仅适用于未来的资源创建插件：创建 IAM 应用，并授予目标项目中所需的实例、网络和存储权限。",
        "打开 <strong>IAM 与 API 密钥 → API 密钥 → 生成 API 密钥</strong>。选择应用和到期时间。保存访问密钥及仅显示一次的密码；另行记录项目 UUID 和可用区。"
      ],
      "cleanupSteps": [
        "备份需要的数据。在正确的可用区中，选择实例的<strong>… → 删除</strong>，输入 <code>DELETE</code>，并选中删除不再需要的关联 IP 和 Block Storage 卷。",
        "确认<strong>删除实例</strong>。检查是否仍有不需要的弹性 IP、卷和快照；仅关机不会移除这些资源。"
      ]
    }
  }
};
