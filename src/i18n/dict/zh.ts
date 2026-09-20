import type { Dict } from "../types";

export const zh: Dict = {
  meta: {
    siteName: "Mobile SSH",
    languageLabel: "语言",
    languageSwitcher: "切换语言"
  },
  nav: {
    blog: "博客",
    home: "首页",
    features: "功能",
    docs: "文档",
    compare: "对比",
    about: "关于",
    privacy: "隐私"
  },
  footer: {
    discordCommunity: "Discord 上的 Mobile SSH 社区",
    beta: "参与测试",
    tagline: "为 Android 和 iOS 设备打造的专注 SSH、SFTP 与终端工作流。",
    documentation: "文档",
    comparison: "对比",
    privacy: "隐私",
    contact: "联系",
    feedback: "反馈"
  },
  home: {
    metaTitle: "Mobile SSH — 适用于 Android 和 iOS 的 SSH 客户端",
    metaDescription:
      "Android 和 iOS 的 Mobile SSH：SSH 终端、跳板机、tmux、herdr、Zellij、SFTP、VNC 桌面与备份。Android 另含 VPN 客户端和安全密钥。",
    eyebrow: "适用于 Android 和 iOS 的 SSH 客户端",
    h1: "Mobile SSH",
    intro:
      "为手机和平板打造的 SSH 终端、tmux、herdr、Zellij 管理器、SFTP、VNC 桌面、跳板机和本地隧道。Eternal Terminal 在连接中断时保留远程 shell。Android 另含 VPN 客户端及 USB/NFC 安全密钥认证。",
    versionLine: "支持 {count} 种语言 · Android {version} · iOS {iosVersion} 测试版",
    ctaDocs: "阅读文档",
    ctaPlay: "在 Google Play 上获取",
    ctaIos: "在 TestFlight 上获取 iOS 测试版",
    platformAndroid: "Android",
    platformIos: "iOS — iPhone 和 iPad",
    advantagesHead: "为什么选择 Mobile SSH",
    advantagesIntro: "针对手机 SSH 客户端常见的痛点而设计。",
    advantages: [
      { title: "无 Pro 版本，无广告", text: "所有功能都在同一个应用里。没有把核心工作流锁在 Pro 升级背后的付费墙，终端上也不会出现广告横幅。" },
      { title: "数据完全本地", text: "保存的服务器、凭据和密钥都存在设备上。无云端账号，也不会被关停。" },
      { title: "保存主机，搜索连接", text: "添加一次主机后，搜索并点按即可连接——密钥、端口和隧道一并带上。" },
      { title: "智能体提醒，一键作答", text: "Claude Code、Codex 或其他智能体一需要你，你立刻就会知道：窗格变为琥珀色，工具栏角标统计有多少个正在等待，在「智能体」列表里一键即可回答提示——无需在终端里打字。" },
      { title: "键盘上方的终端键", text: "一排十三个按键——ESC、TAB、CTRL、方向键、Home、End、PgUp、PgDn——放不下时会换到第二行而不是横向滚动，因此不会有按键被挤出屏幕。还可以从预设面板中添加 F1–F12、Ctrl 组合键或你自己的转义序列。" },
      { title: "无需命令的端口转发", text: "隧道附加在服务器配置上，连接时自动建立。" },
      { title: "锁屏和切网仍在线", text: "为一个已保存的服务器设置多个地址——家庭 LAN IP 和 VPN IP——Mobile SSH 会连上其中能响应的那个，优先尝试上次成功的地址，并在网络变化的瞬间重连。在 Android 上，前台服务和唤醒锁让会话穿过锁屏；在 iOS 上，自动重连加上 tmux 自动附加让你回到离开时的位置。" },
      { title: "Eternal Terminal", text: "可选的 ET 传输让远程 shell 在网络中断、休眠和 IP 变化后仍然存活。主机上没有 etserver？Mobile SSH 可以通过 SSH 为你安装。" },
      { title: "用插件扩展", text: "浏览公开目录并按需安装插件，添加新的工作流。每个插件下载后都会经 SHA-256 校验并存入应用私有存储。" }
    ],
    sectionAHead: "围绕移动端 SSH 工作而设计",
    sectionAIntro:
      "Mobile SSH 缩短了常见的运维路径：保存服务器、连接、保持会话存活、必要时移动文件，并快速回到正在使用的终端。",
    features: [
      { title: "SSH 终端", text: "xterm-256color 终端，支持 24-bit 真彩色、斜体、终端内查找、OSC 133 shell 集成以及捏合缩放文字大小——此外在 Android 和 iOS 上还提供可配置的字体与配色方案，以及 Nerd Font powerline/图标字形。" },
      { title: "多会话网格", text: "在可调整大小的网格中同时运行多达八个 SSH 会话——点按窗格聚焦，双击进入全屏，捏合调整文字大小。" },
      { title: "可点击链接", text: "终端输出中的 URL 会带下划线，点击即可在浏览器中打开——无需复制或切换应用。" },
      { title: "服务器文件夹与名称", text: "将保存的服务器整理到可折叠的分组中，还可以给服务器起一个名称，列表里显示名称而不是地址。一旦名称可能产生歧义，地址就会自动出现，各行不会混作一团。" },
      { title: "智能体提醒", text: "智能体通过终端主动上报，因此应用知道是哪一个被阻塞、卡在什么事情上。在「智能体」列表里一键即可作答；提醒会相互替换而不是层层堆积，点按提醒即可打开发出提醒的那个窗格。" },
      { title: "私钥", text: "使用密码或私钥，并在设备生成 Ed25519、ECDSA 密钥（Android 也支持 RSA）。Android 还支持 USB/NFC FIDO2 安全密钥及按服务器启用的 SSH 代理转发。" },
      { title: "SFTP 传输", text: "绑定到活动 SSH 会话的双窗格文件浏览器。将上传和下载放入队列，重命名、删除，并查看远程文件权限。" },
      { title: "端口转发", text: "在服务器配置中保存本地隧道描述，它们会在连接时自动建立——包括在新网络上重连之后，也无需你再手动搭一遍。" },
      { title: "重连流程", text: "切换网络后会话会立刻重新连接，而不是干等一条已经失效的链路；处于退避等待中的会话，一旦出现可用网络就会被唤醒。在 iOS 上，如果服务器已经悄无声息地停止响应，应用会察觉并重新连接。" },
      { title: "备份与恢复", text: "备份服务器、凭据和应用设置，可选密码加密并预览合并／替换结果。Android 包含 VPN 配置；当前两个平台共用备份格式，在受支持时保留平台专属设置。" },
      { title: "Eternal Terminal", text: "通过 Eternal Terminal（ET）连接，会话可在网络中断、休眠和 IP 变化后存活——还可选择通过 SSH 自动部署 etserver。" },
      { title: "复用器管理器", text: "两个平台均可通过 tmux、herdr、Zellij 管理器附加、改名、创建、分割、缩放或结束会话。共用工具栏按钮打开可用管理器，保存服务器可指定连接时附加的程序。" },
      { title: "插件", text: "按类别浏览、搜索和筛选插件，安装所需工作流程。下载经 SHA-256 验证后存入应用私有空间。" },
      {
        "title": "服务器身份与跳板机",
        "text": "两个平台均可通过保存的堡垒机访问服务器。认证前检查主机密钥并阻止改变的密钥。Android 可自动固定新密钥或先询问；iOS 要求确认未知密钥。"
      },
      {
        "title": "远程桌面",
        "text": "Android 和 iOS 通过 SSH 打开 VNC 桌面，支持触摸、键盘、剪贴板，并在服务器支持时调整远程屏幕大小。"
      },
      {
        "title": "Android VPN 客户端",
        "text": "从主页管理 SSH VPN、本地 SOCKS5、WireGuard、Shadowsocks 和 OpenVPN。选择配置并开始路由，用 Mobile SSH VPN 快捷磁贴停止或恢复。"
      }
    ],
    multiHead: "一屏多个活动 Shell",
    multiP1:
      "终端视图可在网格中容纳多个活动的 SSH 会话。点按窗格进行输入，使用扩展按键栏进行终端控制，捏合手势调整文字大小，双击窗格进入全屏聚焦。",
    multiP2:
      "主界面回答的是「我可以回到哪里继续」——当前仍然活动的连接，以及在你保存的服务器上等待的 tmux 会话；后者由本地保存的快照重建，因此完全没有网络时也能列出来。",
    multiAlt:
      "手机上的 Mobile SSH，以左右分屏视图并排显示两个活动的 SSH 终端会话。",
    sftpHead: "终端不够用时的 SFTP",
    sftpBody:
      "浏览本地和远程文件夹、排队传输、记忆各 tmux 会话目录，并用其他应用打开远程文件。两个平台均可分享文件到终端会话；iOS 可记住“文件”中选择的文件夹。",
    sftpCtaGuide: "文件传输指南",
    sftpCtaAll: "全部功能",
    sftpAlt: "手机上的 Mobile SSH 文件传输界面，包含本地与远程窗格。",
    galleryHead: "在真实设备上的实际效果",
    galleryIntro:
      "来自 Android 手机和 iPhone 的截图——你将用于添加服务器、在终端中工作、运行多个会话以及通过 SFTP 移动文件的相同界面。",
    carouselPrev: "上一张截图",
    carouselNext: "下一张截图",
    carouselDot: "跳到第 {n} 张",
    videoHead: "观看实际效果",
    videoIntro: "两个平台上的简短演示。Android：主界面直接告诉你可以回到哪些会话、会话工具栏只显示这台服务器实际支持的功能、把文件直接发送到提示符里，以及 tmux、herdr 与 Zellij 管理器。iOS：启动后直接进入实时终端，以及随后返回的主界面。",
    videoAlt: "Android 演示：主界面列出可恢复的 tmux 会话、会话工具栏、将文件附加到提示符中，以及 tmux、herdr 与 Zellij 会话管理器",
    videoIosAlt: "iOS 演示：打开 Mobile SSH 直接进入实时 SSH 终端会话，再返回主界面，展示 tmux 管理器、设置与应用的其他界面",
    muxHead: "每个会话管理器一段视频",
    muxIntro:
      "概览演示介绍 tmux、herdr 和 Zellij。较长录像展示两个平台连接真实服务器时的会话、窗口、标签页和窗格操作。",
    muxItems: [
        {
          text: "从主界面直达会话、窗口和窗格，其中一个会话带着铃铛，因为那里有东西在等人回应。附加一个窗口，正在运行的终端就跟过去；新建一个窗口并命名——全程不必敲任何前缀组合键。",
          androidAlt: "Android 上 tmux 管理器的演示：主界面缓存的会话列表，然后是会话、窗口和窗格，附加一个窗口让终端跟随，以及创建一个命名窗口。",
          iosAlt: "iOS 上 tmux 管理器的演示：带创建时长的 tmux 会话，其中一个用铃铛标出正在等待输入，然后是窗口和窗格，每行都有打开、重命名和终止。"
        },
        {
          text: "工作区、标签页和窗格承载着真实的智能体状态——一个在工作，一个被阻塞、正等着人回答。预览被阻塞的那个，从手机上回复它，然后看着 herdr 把它重新标为工作中，再标为完成。",
          androidAlt: "Android 上 herdr 管理器的演示：标注了智能体状态的会话与工作区，一个被标为 needs you 的智能体，从手机上回复它，以及新建并重命名一个工作区。",
          iosAlt: "iOS 上 herdr 管理器的演示：承载智能体状态的工作区，以及一张回复表单，把输入的内容连同回车发给被阻塞的智能体。"
        },
        {
          text: "带创建时长的会话，然后是标签页和窗格。不附加就能预览某个窗格的输出，添加一个命名标签页，把要紧的那个调到前面，然后附加——提示符上什么都不用敲。",
          androidAlt: "Android 上 Zellij 管理器的演示：带创建时长的会话、标签页和窗格，预览窗格输出，创建命名标签页，以及附加会话。",
          iosAlt: "iOS 上 Zellij 管理器的演示：一个可附加、重命名、终止和删除的会话，它的标签页，以及一个提供预览和两个分割方向的窗格。"
        }
    ],
    demoHead: "还有三段，在 Android 上拍摄",
    demoIntro:
      "这三段目前还没有 iOS 版本。和上面的演示用的是同一台真实服务器：一个离开应用后依然活着的会话、一把在手机上生成而不是敲进去的密钥，以及按你自己的思路分好组的服务器。",
    demoItems: [
      {
        title: "会话比应用活得更久",
        text: "Android 用前台服务保持连接，常驻通知显示服务器并提供全部断开。离开日志流后再回来，会话仍在运行。iOS 仅允许短暂后台运行，随后通过重连并重新附加多路复用器恢复。",
        androidAlt:
          "Android 演示：会话在后台持续运行——终端里实时滚动的 HTTP 日志、通知权限提示、写着已连接服务器名字并带「全部断开」的常驻通知，然后切回主界面再返回，同一条日志流仍在源源不断地到达。"
      },
      {
        title: "密钥在这里生成，而不是敲进来",
        text: "在手机上生成一把 Ed25519 密钥：一个标签、一个用户名、一个可选的口令。随后弹出的表单会显示公钥部分，供你添加到服务器的 authorized_keys；公钥和私钥都可以分享或保存。",
        androidAlt:
          "Android 演示：生成密钥——「生成 SSH 密钥」对话框里的标签、用户名、Ed25519 密钥类型和口令，然后是提供分享或保存密钥的公钥表单。"
      },
      {
        title: "服务器住在你自己命名的文件夹里",
        text: "把保存的服务器分组放进文件夹，把当下用不到的折叠起来。同一段视频最后进到终端里：命令打印出的 URL 带着下划线、可以直接点，而不必用手去选。",
        androidAlt:
          "Android 演示：服务器文件夹——保存的服务器按命名的文件夹分组，可展开也可折叠，然后是终端里命令输出中的 URL 带下划线并且可以点击。"
      }
    ],
    graphicsHead: "终端里的动态图表",
    graphicsBody:
      "一段 36 帧的 GIF，通过 Kitty 图形协议流式传入，由应用按文件自身的帧时序解码——不是从外部一帧帧推的。接着是衡量一个终端的那些转义序列：OSC 8 把构建号和仪表盘名字变成可以点的东西，OSC 52 让远端写入手机的剪贴板，OSC 777 弹出一条真正的 Android 通知。",
    graphicsAlt:
      "Android 演示：通过 Kitty 图形协议流入终端的动态延迟图表，随后是 OSC 8 链接、OSC 52 写入剪贴板和一条 OSC 777 通知。",
    lightboxClose: "关闭",
    lightboxPrev: "上一张",
    lightboxNext: "下一张",
    galleryAlts: [
      "Android 手机上的 Mobile SSH 主界面，顶部是「活动会话」提示条和可继续的已保存服务器列表，下方是服务器、凭据、设置、关于与插件按钮。",
      "手机上的「添加服务器」对话框，包含服务器名称、主机与端口、附加地址、凭据、私钥与端口转发字段。",
      "手机上的单会话 SSH 终端，会话工具栏下方显示编程智能体的补丁和一次通过的测试运行。",
      "手机上以左右分屏视图显示的两个 SSH 会话。",
      "手机上以网格显示的四个 SSH 会话，每个连接到不同的服务器，活动窗格被高亮。",
      "手机上的 SFTP 文件传输界面，包含「我的手机」与「远程主机」窗格。",
      "手机上的「关于」对话框，显示版本、作者、许可与网站字段。",
      "手机上的「生成 SSH 密钥」对话框，包含标签、用户、密钥类型和口令字段。",
      "手机上的「公钥」对话框，显示生成的密钥以及复制、分享和保存选项。",
      "「已保存服务器」界面，显示整理到可折叠的「工作」与「个人」文件夹分组中的服务器。",
      "手机上的 SSH 终端，https:// 网址带下划线，可点击打开链接。",
      "Android 手机上的 Zellij 管理器，列出会话、标签页与窗格，并带有附加、重命名、结束与聚焦按钮。",
      "手机上的 tmux 管理器，列出 tmux 会话、窗口与窗格，并带有附加、重命名与切换按钮。",
      "手机上的插件界面，显示包含 Tailscale、WireGuard 与 Claude Code CLI 的可安装插件目录。",
      "手机上的 AI Chat 插件，通过 SSH 从远程服务器上运行的本地 llama3.2 模型流式输出回复。",
      "手机上的「添加服务器」对话框，传输方式设为 Eternal Terminal，使会话在网络中断后仍能存活。"
    ],
    galleryIosAlts: [
      "iPhone 上的 Mobile SSH 连接表单，包含服务器、认证、文件夹与传输方式字段。",
      "iPhone 上的「已保存服务器」，按 Production 与 Staging 分组整理，并带服务器搜索。",
      "iPhone 上的实时 SSH 终端，带 tmux 状态栏，底部有扩展按键栏。",
      "iPhone 上网格中上下排列的两个 SSH 会话，点按窗格即可聚焦。",
      "iPhone 上的文件传输，包含「我的手机」与「远程主机」窗格以及已完成的传输日志。",
      "iPhone 上的密钥认证，显示在设备上生成的 Ed25519 密钥与可复制的公钥。",
      "iPhone 上的 tmux 管理器，列出会话与窗口，带打开、重命名与结束操作——铃铛标记等待输入的智能体。",
      "iPhone 上的 SSH 终端，已附加到 tmux 窗口，显示远程编辑器中的代码。",
      "iPhone 上的插件目录，可安装 Tailscale、WireGuard、Claude Code CLI、VS Code 与 AI Chat。",
      "iPhone 上的连接表单，传输方式设为 Eternal Terminal，使会话在网络中断后仍能存活。",
      "iPhone 上的智能体提醒设置，包含振动、声音与仅耳机播放开关。",
      "iPhone 上的 Mobile SSH 主界面，带「活动会话」提示条和可返回实时会话的「继续」一行，下方是服务器、凭据、日志、设置、关于与插件磁贴。"
    ],
    compareHead: "在 Termux 与 Termius 之外的定位",
    compareIntro:
      "Mobile SSH 有意保持范围狭窄：它既不是完整的 Linux 环境，也不是跨平台的团队保险库。它是一款面向 Android 和 iOS 的本地 SSH/SFTP 工具，专注于移动用户最常用的会话操作。",
    compareGuideTitle: "对比指南",
    compareGuideText: "在手机或平板上，何时选择 Mobile SSH、Termux 或 Termius。",
    privacyTitle: "隐私政策",
    privacyText: "查看哪些连接数据保存在本地，哪些会发往你的服务器。"
  },
  features: {
    metaTitle: "功能 | Mobile SSH",
    metaDescription:
      "探索 Android 和 iOS 上的 Mobile SSH 终端、跳板机、身份验证、SFTP、VNC、备份与多路复用器，以及 Android VPN 和安全密钥。",
    eyebrow: "功能清单",
    h1: "Mobile SSH 功能",
    intro:
      "通过 SSH 终端、已验证身份、跳板机、SFTP、VNC 和会话管理器，从 Android 或 iOS 连接服务器。Android 另含内置 VPN 路由和硬件安全密钥；下文标明平台专属功能。",
    groups: [
      {
        title: "平台",
        items: [
          "Android 8.0 或更高版本——目前是 Google Play 上的封闭测试：在手机浏览器中打开加入链接，然后从 Play 安装",
          "iPhone 和 iPad 上的 iOS 16 或更高版本——在 TestFlight 上加入公测",
          "当前 Android 和 iOS 共用版本 2 清单及设置备份格式；导入备份不会启用目标平台不支持的功能"
        ]
      },
      {
        title: "连接",
        items: [
          "密码认证与私钥认证",
          "Android 上支持 Ed25519、ECDSA（P-256/384/521）与 RSA 私钥；iOS 上支持 Ed25519 与 ECDSA。两个平台都能打开带口令加密的密钥",
          "保存的服务器配置，包含主机、端口、用户名、凭据、私钥与可选的隧道描述——克隆某个配置即可将其设置复制到新服务器",
          "给服务器起个名称，列表就会显示名称而不是地址——一旦两行看起来会难以区分，地址便会自动回到列表中",
          "可按名称、主机、端口、凭据或任意备用地址搜索已保存的服务器",
          "如果你用两条不同的记录连到了同一台机器，应用会察觉——它会比对主机密钥指纹，并提议把它们合并成一个多地址服务器",
          "搜索优先的添加会话流程：从专用搜索页面选择已保存的服务器，一键连接",
          "每个已保存的服务器可设置多个地址，用于 LAN/VPN 漫游——按顺序尝试，优先使用上次成功的地址，网络变化时自动重连",
          "可在服务器配置中选择的可复用凭据记录",
          "围绕「继续未完成的工作」设计的主界面：当前活动的连接，以及在你的服务器上等待的 tmux 会话——后者取自本地保存的快照，因此没有网络也能列出，每一行都标注了快照的新旧程度。iOS 上「最近」列表已经移进「新建连接」面板，点一下就把内容预先填进表单",
          "端到端的 IPv6 支持：地址字段可填写方括号包裹的字面地址并附带可选端口，端口转发规则中也可使用方括号包裹的 IPv6 目标",
          "成功与失败的登录日志，记录实际连通的地址；失败时还会记录原因",
          "Teleport 代理传输（实验性，Android）：使用用户名、密码和 OTP 登录，或导入 Teleport 配置或身份文件，浏览集群节点，然后通过代理隧道运行终端、SFTP、tmux 与插件",
          "两个平台支持保存 SSH 跳板机，展开有序链最多八跳；每跳使用自己的凭据并检查服务器身份",
          "Android SSH 代理转发按服务器启用，让远程程序请求保存密钥签名，可设每次先批准；私钥留在手机",
          "Android 通过 USB 或 NFC 支持 FIDO2：注册或导入 OpenSSH 安全密钥凭据，再按提示触摸及输入 PIN"
        ]
      },
      {
        title: "终端",
        items: [
          "VT100/xterm-256color 风格的终端行为，支持 24-bit 真彩色与斜体——会向 shell 声明 TERM=xterm-256color 与 COLORTERM=truecolor",
          "回滚缓冲区在 Android 和 iOS 上可设为 1,000、5,000、10,000 或 50,000 行（默认 5,000 行）",
          "在终端中查找——搜索回滚缓冲区与可见屏幕，并在匹配项之间跳转（Android 与 iOS）",
          "Shell 集成（OSC 133）：在提示符之间逐个跳转、选中某条命令的整段输出——包括 300 行之前那次构建的报错，而不只是最后一条命令——并在长时间运行的命令完成时收到提醒（Android 与 iOS）",
          "通过 Kitty graphics 协议在终端中内嵌显示图像，捏合缩放与重新换行后依然保留，而不会凭空消失（Android 与 iOS）",
          "应用自行绘制方块、盲文和六分格，使 chafa、timg 和 ANSI 字符画在 Android 与 iOS 上准确显示",
          "两个平台的触摸操作可向跟踪鼠标的终端程序发送单击，并可选拖动；iOS 还提供改为放置光标的设置",
          "窗格标题显示该窗格真实的工作目录，来源是向 tmux 查询或 shell 通过 OSC 7 上报（Android）",
          "由十三个按键组成的扩展按键栏——ESC、TAB、CTRL、方向键、Home、End、PgUp、PgDn 与键盘切换——放不下时换到第二行而不是横向滚动，仍然多出来的按键会收进溢出菜单，因此不会有按键跑到屏幕外",
          "在 Android 和 iOS 上均可自定义这一按键栏：从约 45 个预设（含 F1–F12、Ctrl 组合键与符号）中添加；也可移除、重新排序、隐藏、定义你自己的转义序列按键并恢复默认，全程带实时预览",
          "点按聚焦、可选的「点按显示键盘」设置、复制与全部复制操作",
          "捏合缩放文字大小，并同步调整远程终端尺寸",
          "窗格双击全屏",
          "终端文本选择：复制、分享与全选操作——长按选中单词，复制后仍保留所选内容，方便分享或再次复制",
          "OSC 52 剪贴板——将远程 tmux 或 vim 会话中的文本直接复制到手机剪贴板（Android 与 iOS）",
          "两个平台支持硬件键盘与语音听写；iOS 默认开启听写和建议，含自动更正。关闭可使用直接终端输入",
          "Android 和 iOS 上支持外接与 Bluetooth 键盘，包括方向键、功能键以及 Ctrl/Alt 组合键",
          "括号粘贴（bracketed paste），使多行剪贴板内容不会被自动执行",
          "内置的 Nerd Font 可在 Android 和 iOS 上渲染 powerline、starship、devicon 与 Material Design 图标字形，否则系统字体只会将其显示为空白方框",
          "宽 CJK、emoji 与组合字符在 Android 与 iOS 上都能被正确测量和绘制，包括字素簇（grapheme cluster）与零宽连接符（zero-width joiner）",
          "在 Android 和 iOS 上可配置终端字体（系统等宽字体、JetBrains Mono 或 Source Code Pro）与 ANSI 配色方案（Solarized、Gruvbox、Dracula、Nord），并实时应用到已打开的窗格",
          "「设置」中除捏合缩放外还提供终端字号滑块，应用主题可设为「跟随系统」、「浅色」或「深色」",
          "连接速度与停滞标记区分繁忙命令和无响应连接，可选调暗及振动",
          "远程通知、命令完成提醒和远程读取剪贴板由设置控制，默认关闭"
        ]
      },
      {
        title: "会话",
        items: [
          "最多八个并发 SSH 会话",
          "活动会话的网格布局",
          "后台与锁屏期间的稳定性：在 Android 上，前台服务让 shell 与智能体在你把应用从最近任务中划掉之后继续运行；在 iOS 上，tmux 自动附加会重新接回你的 shell",
          "Keepalive 与带指数退避的重连尝试——最多十次，而针对你已经离开的那个网络所产生的失败不计入次数上限",
          "切换 Wi-Fi、移动数据或 VPN 时会立刻重新连接，而不是干等已经失效的链路；已处于退避等待中的会话，一旦出现可用网络就会立即重试",
          "Android 和 iOS 通过无回应的保活探测识别停止响应的服务器并重连",
          "主界面的「活动会话」入口；常驻通知列出会话——点按即可打开",
          "两个平台跟踪 tmux 命令并提供重连提示，每台服务器可选自动、不附加、tmux、herdr 或 Zellij；切换 tmux 套接字保留会话身份",
          "智能体通过终端主动上报，因此应用知道是哪个智能体、它正在运行什么工具，以及它是否正卡在你这里——窗格会变为琥珀色，标题显示「claude · needs you」，工具栏角标统计有多少个正在等待",
          "在「智能体」列表中一键回答智能体的提问；回复通过单独的通道送达，绝不会往屏幕上正在显示的内容里打字",
          "可在应用内把智能体钩子安装到服务器上——那是一个任何智能体都能调用的小 shell 脚本，而不是绑定某个厂商的集成",
          "Eternal Terminal（ET）传输，使会话在网络中断、休眠和 IP 变化后仍能存活，可选择通过 SSH 自动部署 etserver",
          "Tmux 管理器：列出并切换会话、窗口与窗格——附加、重命名、创建、拆分、缩放或结束，支持按名称/日期排序，🔔 标记等待输入的智能体",
          "一个多路复用器按钮打开 tmux、herdr 和 Zellij 管理器；Herdr 支持窗格预览、聚焦及回复，Zellij 支持运行中与已退出会话"
        ]
      },
      {
        title: "文件与隧道",
        items: [
          "本地与远程双窗格 SFTP 浏览器，并带有可滚动、逐条显示每一次传输的传输日志",
          "排队上传与下载；Android 或 iOS 分享扩展将文件分享至 Mobile SSH，再上传至已连接会话并插入远程路径",
          "在手机与远程主机之间递归上传和下载文件夹",
          "远程重命名、删除、创建、编辑、压缩为 .tar.gz、权限（chmod/chown）与详情等操作",
          "两个平台都可以用其他应用打开已下载的文件——在 iOS 上，下载内容还会出现在「文件」应用的「我的 iPhone」下",
          "两个平台按主机和 tmux 会话记忆远程目录；iOS 还可记住通过“文件”选择的外部本地文件夹",
          "按名称或日期排序并按主机持久化，还可快速跳回最近访问过的远程路径",
          "文件大小以二进制单位显示，与隔壁标签页终端里 ls -h 的输出保持一致",
          "随服务器配置保存的本地端口转发，连接时自动建立",
          "整个应用与文件浏览器都跟随系统的浅色或深色主题——在 Android 和 iOS 上均可选择「跟随系统」、「浅色」或「深色」"
        ]
      },
      {
        title: "本地化",
        items: [
          "两个平台都有二十种语言：阿拉伯语、埃及阿拉伯语、孟加拉语、简繁中文、英语、法语、德语、印地语、印度尼西亚语、日语、马拉地语、尼日利亚皮钦语、葡萄牙语、俄语、西班牙语、泰米尔语、泰卢固语、土耳其语和乌尔都语",
          "默认跟随系统语言；如果你希望应用使用与手机不同的语言，「设置」中也提供了语言选择器"
        ]
      },
      {
        title: "密钥与备份",
        items: [
          "在设备上生成新的 Ed25519 或 ECDSA 密钥（Android 上还支持 RSA），可选口令",
          "复制、分享或保存生成的公钥，以添加到服务器的 authorized_keys",
          "完整备份包含服务器、凭据、应用设置、语言和多路复用器排序；Android 另含 SSH VPN、SOCKS5、WireGuard、Shadowsocks 和 OpenVPN 配置",
          "可只导出所选项目或清单；完整备份有预览及合并／替换选择，并可用密码加密",
          "未加密备份含密码和私钥。SSH 主机信任、活动会话、系统权限和本地文件夹授权不可移植；安全密钥凭据仍需实体密钥"
        ]
      },
      {
        title: "安全",
        items: [
          "安全屏幕：在 Android 上，阻止截图与屏幕录制，并在最近任务缩略图中隐藏应用；在 iOS 上，遮盖应用切换器的预览并阻止屏幕录制与镜像（iOS 上无法阻止手动截图）——在密码、密钥或令牌显示在屏幕上时可选择开启的设置",
          "已保存服务器、凭据和密钥存储在设备，无需云账户或同步；存储保护及其限制请参阅隐私页面",
          "匿名使用分析默认开启，Android 和 iOS 均可在设置退出；事件不含服务器、凭据、命令或文件内容",
          "SSH 认证前验证主机。Android 默认自动固定新原始密钥，可改为必须批准；iOS 先询问未知密钥。两者都拒绝改变的密钥",
          "两个平台均可导入限定范围的 OpenSSH 主机密钥吊销记录。iOS 接受 @revoked Ed25519/ECDSA 密钥；Android 还支持主机证书颁发机构。iOS 不支持主机证书或 CA 导入。SSH 信任保留在各设备，不纳入备份"
        ]
      },
      {
        title: "插件",
        items: [
          "按类别浏览并搜索、安装和运行插件；切换来源会刷新目录",
          "插件从公开目录按需下载，经 SHA-256 校验后存入应用私有存储",
          "插件必须声明自己需要什么——SSH 命令、隧道、存储——应用会拒绝一切它没有申请过的能力",
          "当插件要在你的服务器上做配置时，会先把将要执行的具体命令展示给你，经你批准后才会运行",
          "可配置自定义或私有的目录源，也可以从你自己服务器上的某个文件夹安装"
        ]
      },
      {
        "title": "远程桌面",
        "items": [
          "两个平台通过 SSH 隧道使用 VNC 桌面，无需向公网暴露 VNC 端口",
          "触摸指针、硬件与软键盘输入、剪贴板交换和桌面响铃",
          "VNC 服务器支持时选择屏幕预设或自定义尺寸；不支持的调整请求会报告"
        ]
      },
      {
        "title": "VPN 客户端（Android）",
        "items": [
          "从主页打开 VPN，管理 SSH VPN、SOCKS5、WireGuard、Shadowsocks 和 OpenVPN 配置",
          "SSH VPN 为全部或指定应用及域名通过保存的 SSH 服务器传送 TCP 和 DNS；分配给 SSH 的其他 UDP 被阻止",
          "带认证的本地 SOCKS5 可与其他 VPN 同用；参与应用须配置代理和远程 DNS",
          "导入 WireGuard .conf、支持的 Shadowsocks ss://，或内含已验证服务器证书的自包含 OpenVPN .ovpn",
          "启动配置切换 VPN，并用 Mobile SSH VPN 快捷磁贴停止或启动记住的配置；磁贴不控制 SOCKS 代理",
          "Android 同时仅允许一个设备 VPN。Tailscale 使用独立应用；IKEv2/IPsec 在系统设置管理。Mobile SSH 不保证始终开启或锁定保护"
        ]
      }
    ],
    security:
      "安全提示：当前应用将保存的服务器与凭据记录存储在设备本地（iOS 上的机密保存在系统 Keychain 中），不提供云同步。请使用强锁屏保护设备，避免在共享设备上保存凭据。"
  },
  compare: {
    metaTitle: "移动端的 Mobile SSH、Termux 与 Termius",
    metaDescription:
      "针对 Android 和 iOS 上 SSH 工作流的 Mobile SSH、Termux 与 Termius 的均衡对比。",
    eyebrow: "移动端 SSH 选择",
    h1: "Mobile SSH、Termux 与 Termius",
    intro:
      "Mobile SSH 在 Android 与 iOS 结合 SSH、SFTP、VNC 和多路复用器，Android 另含 VPN 客户端及安全密钥认证。Termux 是 Android Linux 环境，Termius 是带账户型效率功能的跨平台 SSH 客户端。",
    columns: {
      need: "需求",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "主要定位",
        mobileSsh: "两个平台均有 SSH、SFTP、VNC、跳板机和多路复用器；Android 另有 VPN 客户端和 FIDO2 安全密钥。",
        termux: "带 APT 包管理的 Android 终端模拟器与 Linux 环境。",
        termius: "面向 Android、iOS、桌面与偏 Web 团队工作流的现代 SSH 客户端。"
      },
      {
        need: "配置方式",
        mobileSsh: "保存服务器和凭据，可选跳板机；认证前检查服务器身份再连接。",
        termux: "安装 OpenSSH 等软件包，配置 shell 工具，并在类 Linux 命令行中工作。",
        termius: "通过 Termius 的应用/账户模型创建或同步主机、密钥、片段与保险库。"
      },
      {
        need: "移动端终端控制",
        mobileSsh: "扩展按键、网格会话、全屏窗格、捏合缩放、复制分享、鼠标与外接键盘。iOS 可关闭听写和建议以直接输入。",
        termux: "强大的终端环境；终端行为取决于已安装的工具与配置。",
        termius: "移动键盘扩展、手势、标签页、自动补全、片段与打磨过的终端 UX。"
      },
      {
        need: "文件传输",
        mobileSsh: "两个平台有双窗格 SFTP、tmux 文件夹历史、远程分享及接收分享文件；iOS 可记住外部 Files 文件夹。",
        termux: "使用 scp、sftp、rsync 等命令行工具或已安装的文件工具。",
        termius: "内置 SFTP 以及主机/密钥管理功能。"
      },
      {
        need: "多会话工作",
        mobileSsh: "在网格中同时运行最多八个 SSH 会话。",
        termux: "在 Termux 内或远程 shell 中使用 tmux 等终端复用器。",
        termius: "根据平台与套餐提供标签页与分屏样式的工作流。"
      },
      {
        need: "数据模型",
        mobileSsh: "配置、凭据、主机信任和设置保存在设备，可选择便携清单与设置备份。Android 备份还含 VPN 配置；SSH 信任留在各设备。",
        termux: "Termux 应用环境内的类 Linux 文件系统与包。",
        termius: "用于主机、密钥、片段、转发规则、known hosts 与团队共享的加密保险库。"
      },
      {
        need: "最佳场景",
        mobileSsh: "想要一款 Android 或 iOS 上的简单应用，用来连接服务器、传输文件并保持会话存活。",
        termux: "想要在 Android 上拥有完整的命令行环境，并乐于自行安装与配置软件包。",
        termius: "想要跨设备同步、精致的生产力功能、保险库与协作。"
      }
    ],
    cards: [
      {
        title: "何时选择 Mobile SSH",
        body: "你希望直接从手机或平板（Android 或 iOS）进行 SSH 访问，而不必搭建完整的 Linux 环境或采用云端同步的账户模型。尤其适合保存服务器、SFTP、tmux 会话以及快速的本地隧道工作流。"
      },
      {
        title: "何时选择 Termux",
        body: "你需要在 Android 设备上直接获得包管理、shell、编译器、脚本、rsync、curl、Git、Python、Node.js 等类 Linux 工具。"
      },
      {
        title: "何时选择 Termius",
        body: "你需要一款商业化的跨平台 SSH 工作空间，具备加密保险库同步、团队共享、密钥串管理、片段以及在多设备上一致的应用体验。"
      }
    ],
    featureHeading: "功能逐项对比",
    featureRows: [
      { category: "连接", feature: "在 Android 和 iOS 上运行",       mobile: "yes",    termux: "仅 Android",   termius: "yes" },
      { category: "连接", feature: "保存的服务器配置",               mobile: "yes",    termux: "通过 ssh config", termius: "yes" },
      { category: "连接", feature: "搜索已保存的服务器",             mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "连接", feature: "服务器文件夹/分组",              mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "连接", feature: "搜索优先的添加会话选择器",       mobile: "Android", termux: "no",          termius: "no" },
      { category: "连接", feature: "每个服务器多个地址（LAN/VPN 漫游）", mobile: "yes", termux: "no",           termius: "no" },
      { category: "连接", feature: "可复用凭据记录",                  mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "连接", feature: "主界面列出可继续的内容",          mobile: "yes",    termux: "no",           termius: "部分" },
      { category: "连接", feature: "离线的 tmux 会话列表（无需连接）", mobile: "yes",   termux: "no",           termius: "no" },
      { category: "连接", feature: "显示服务器名称而非地址",          mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "连接", feature: "登录日志",                        mobile: "yes",    termux: "no",           termius: "no" },
      { category: "连接", feature: "Teleport 代理传输（实验性）",      mobile: "Android", termux: "no",          termius: "no" },
      { category: "连接", feature: "IPv6 主机与转发目标",             mobile: "yes",    termux: "yes",          termius: "部分" },
      { category: "终端", feature: "SSH 终端",                        mobile: "yes",    termux: "通过 OpenSSH",  termius: "yes" },
      { category: "终端", feature: "xterm-256color 仿真",             mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "终端", feature: "可配置回滚缓冲区（1 千–5 万行）", mobile: "yes",    termux: "可配置",       termius: "部分" },
      { category: "终端", feature: "终端内搜索（回滚缓冲区）",        mobile: "yes",    termux: "no",           termius: "no" },
      { category: "终端", feature: "扩展按键栏（ESC/TAB/CTRL/…）",   mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "终端", feature: "捏合缩放文字大小",                mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "终端", feature: "双击窗格全屏",                    mobile: "yes",    termux: "no",           termius: "no" },
      { category: "终端", feature: "终端输出中的可点击 URL",          mobile: "yes",    termux: "部分",         termius: "yes" },
      { category: "终端", feature: "文本选择：复制/分享/全选",        mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "终端", feature: "硬件 / Bluetooth 键盘支持",       mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "终端", feature: "Shell 集成（OSC 133）",            mobile: "yes",    termux: "no",           termius: "no" },
      { category: "终端", feature: "内嵌图像（Kitty graphics）",       mobile: "yes",    termux: "no",           termius: "no" },
      { category: "终端", feature: "应用自绘马赛克字形（chafa、ANSI 字符画）", mobile: "yes", termux: "取决于字体", termius: "no" },
      { category: "终端", feature: "鼠标模式 TUI 中轻点即点击",       mobile: "yes", termux: "yes",         termius: "no" },
      { category: "终端", feature: "Nerd Font / powerline 字形渲染",   mobile: "yes",     termux: "可配置",      termius: "部分" },
      { category: "会话", feature: "多个并发 SSH 会话",               mobile: "最多 8 个", termux: "最多 8 个",  termius: "yes" },
      { category: "会话", feature: "网格窗格布局",                    mobile: "yes",    termux: "通过 tmux",    termius: "标签页" },
      { category: "会话", feature: "tmux 友好滚动",                   mobile: "yes",    termux: "yes",          termius: "no" },
      { category: "会话", feature: "重连时的 tmux 重新附加提示",     mobile: "yes",    termux: "no",           termius: "no" },
      { category: "会话", feature: "智能体提醒（Claude Code / Codex）", mobile: "yes", termux: "no",           termius: "no" },
      { category: "会话", feature: "带会话列表的常驻通知",            mobile: "Android", termux: "部分",        termius: "no" },
      { category: "会话", feature: "前台服务与唤醒锁",                mobile: "Android", termux: "yes",         termius: "部分" },
      { category: "会话", feature: "带退避的自动重连",                mobile: "yes",    termux: "通过 autossh", termius: "yes" },
      { category: "文件", feature: "内置 SFTP 文件传输界面",          mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "文件", feature: "本地+远程双窗格浏览器",           mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "文件", feature: "上传/下载队列",                   mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "文件", feature: "远程重命名/删除/创建",            mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "文件", feature: "远程文件权限查看",                mobile: "yes",    termux: "no",           termius: "no" },
      { category: "文件", feature: "按名称或日期排序（按主机保存）",  mobile: "yes",    termux: "no",           termius: "部分" },
      { category: "隧道", feature: "本地端口转发",                    mobile: "yes",    termux: "通过 CLI",      termius: "yes" },
      { category: "隧道", feature: "随服务器配置保存的隧道",          mobile: "yes",    termux: "通过 ssh config", termius: "yes" },
      { category: "隧道", feature: "运行时添加/移除隧道",             mobile: "no",     termux: "no",           termius: "yes" },
      { category: "密钥", feature: "密码认证",                        mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "密钥", feature: "私钥认证",                        mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "密钥", feature: "设备上生成密钥",                  mobile: "yes",    termux: "通过 ssh-keygen", termius: "yes" },
      { category: "密钥", feature: "分享/保存生成的公钥",             mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "备份", feature: "导出/导入服务器备份",             mobile: "yes",    termux: "通过 termux-backup", termius: "Pro 云端保险库" },
      { category: "备份", feature: "加密本地备份文件",                mobile: "yes",    termux: "no",           termius: "no" },
      { category: "备份", feature: "无需账户",                        mobile: "yes",    termux: "yes",          termius: "部分" },
      { category: "隐私与费用", feature: "无 Pro 付费墙",             mobile: "yes",    termux: "yes",          termius: "部分" },
      { category: "隐私与费用", feature: "无广告",                    mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "隐私与费用", feature: "分析数据退出选项",          mobile: "yes", termux: "无分析",      termius: "no" },
      { category: "隐私与费用", feature: "仅本地数据（无云同步）",    mobile: "yes",    termux: "yes",          termius: "部分" },
      { category: "隐私与费用", feature: "安全屏幕（阻止屏幕捕获）",  mobile: "yes",     termux: "no",          termius: "no" },
      { category: "会话", feature: "Eternal Terminal（抗断线会话）",  mobile: "yes",    termux: "通过 CLI",      termius: "no" },
      { category: "会话", feature: "通过 SSH 自动安装 etserver",      mobile: "yes",    termux: "no",           termius: "no" },
      { category: "会话", feature: "tmux 会话管理器",                 mobile: "yes",    termux: "通过 CLI",      termius: "no" },
      { category: "会话", feature: "herdr 与 Zellij 会话管理器",      mobile: "yes"    , termux: "通过 CLI",     termius: "no" },
      { category: "会话", feature: "一键回复被阻塞的智能体",          mobile: "yes",    termux: "no",           termius: "no" },
      { category: "插件", feature: "插件支持",                        mobile: "yes",    termux: "通过软件包",    termius: "no" },
      { category: "插件", feature: "按需安装的插件目录",              mobile: "yes",    termux: "no",           termius: "no" }
    ],
    agentAppsHeading: "Mobile SSH 与 AI 编码智能体应用对比",
    agentAppsIntro:
      "有一类快速增长的应用专门用来从手机驱动编码智能体——Claude Code、Codex 及同类产品。其中一些是第三方 SSH 或中继应用（Onepilot、Happy、Omnara、Moshi、Orca）；OpenAI 和 Anthropic 现在也原生提供这类功能，Codex 内置于 ChatGPT 应用，Claude Code 内置于 Claude 应用，两者都运行在厂商自己的云端。Mobile SSH 与它们全都有重叠——你可以通过 SSH 运行这些智能体，并在它们需要你时收到提醒——但它从另一个方向切入：它首先是一款通用的直连 SSH 客户端，其次才是智能体伴侣。",
    agentAppsRows: [
      { feature: "从手机运行编码智能体",                     mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "支持任意编码智能体（不限单一厂商）",       mobile: "yes", onepilot: "yes",      happy: "Claude Code", omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "仅 Codex",     claude: "仅 Claude Code" },
      { feature: "在你自己的机器上运行（而非厂商云端）",     mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "no",           claude: "部分" },
      { feature: "直连 SSH——无云端中继",                   mobile: "yes", onepilot: "yes",      happy: "no",          omnara: "no", moshi: "yes", orca: "no",      chatgpt: "no",           claude: "no" },
      { feature: "通用 SSH 终端（运行任意命令）",           mobile: "yes", onepilot: "yes",      happy: "no",          omnara: "部分", moshi: "yes", orca: "已配对电脑的终端",    chatgpt: "no",           claude: "no" },
      { feature: "SFTP 文件传输",                          mobile: "yes", onepilot: "部分",     happy: "no",          omnara: "no", moshi: "文档说法不一致", orca: "仅桌面端",      chatgpt: "no",           claude: "no" },
      { feature: "本地端口转发",                            mobile: "yes", onepilot: "yes",      happy: "no",          omnara: "no", moshi: "开发预览（Pro）", orca: "仅桌面端",      chatgpt: "no",           claude: "no" },
      { feature: "tmux 会话管理器",                         mobile: "yes", onepilot: "部分",     happy: "no",          omnara: "no", moshi: "Pro", orca: "文档未说明",      chatgpt: "no",           claude: "no" },
      { feature: "支持你自行安装的智能体",                   mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "no",           claude: "no" },
      { feature: "代理提醒（已连接的代理需要输入时）",       mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "一键批准/拒绝智能体提示",                 mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes", moshi: "试用后需 Pro", orca: "支持的智能体",     chatgpt: "yes",          claude: "yes" },
      { feature: "无需服务器或 SSH 配置",                   mobile: "no",  onepilot: "no",       happy: "部分",        omnara: "部分", moshi: "no", orca: "需与电脑配对",    chatgpt: "yes",          claude: "yes" },
      { feature: "Android 和 iOS",                         mobile: "yes", onepilot: "仅 iOS",   happy: "yes",         omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "无需账户",                                mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "no", moshi: "yes", orca: "LAN/Tailscale；Relay 需要账户",      chatgpt: "no",           claude: "no" },
      { feature: "无 Pro 付费墙（所有功能免费）",           mobile: "yes", onepilot: "no",       happy: "no",          omnara: "no", moshi: "no", orca: "yes",      chatgpt: "免费套餐",     claude: "no" },
      { feature: "开源",                                    mobile: "Apache 2.0",  onepilot: "no",       happy: "MIT",         omnara: "Apache", moshi: "no", orca: "MIT",  chatgpt: "no",           claude: "no" }
    ],
    agentAppsNote:
      "原生的 ChatGPT 和 Claude 应用是零配置运行单一厂商智能体的最顺畅方式——无需服务器，只需一个账户——并且它们提供了精致的一键批准/拒绝界面。代价在于：它们只在自己的云端运行自家模型，没有通用终端，没有 SFTP 或隧道，也无法自带机器，而且需付费或需登录账户。Onepilot、Happy 和 Omnara 让智能体保留在你掌控的硬件上（Onepilot 通过直连 SSH；Happy 和 Omnara 通过云端中继，Omnara 还需要账户）。Mobile SSH 直接连接到你自己的服务器，无需账户或厂商中继，可运行任意智能体，同时提供完整的终端、SFTP 和端口转发，并且每一项功能都免费。如今它回应智能体提示的方式与它们一致——「智能体」列表汇总了所有连接上的每一个智能体，每个选项对应一个按钮——区别在于智能体运行在你自己的机器上，回复也经由你自己的 SSH 连接传回。取舍还是一直以来的那一条：服务器由你自备，而且智能体的钩子需要在上面安装一次。",
    agentAppsSourcesNote: "核查日期：2026-09-19。Moshi 的直连 SSH 终端与其可选的智能体事件及审批后端是分开的。其 Android 商店页面宣称支持 SFTP，但详细文档描述的是 SCP 上传和开发服务器预览，因此表格中的相关单元格注明了限制。Orca 移动应用与电脑上的 Orca 配对：通过 LAN/Tailscale 连接可以不使用 Orca 账户，而 Relay 需要账户。仅限桌面端以及文档未说明的功能已在表格中标出。官方来源：",
  },
  privacy: {
    metaTitle: "隐私政策 | Mobile SSH",
    metaDescription:
      "Mobile SSH 如何在 Android 与 iOS 处理保存数据、服务器身份、备份、SSH 和 VPN 流量、文件、分析与权限。",
    eyebrow: "隐私",
    h1: "隐私政策",
    intro:
      "Mobile SSH 把配置保存在设备，连接你选择的服务器和服务，无需账户或云同步。Android 可选 VPN 客户端还通过配置的服务器传送选定设备流量。",
    sections: [
      {
        heading: "存储在你设备上的信息",
        body: "保存的数据包括服务器配置、凭据、私钥、主机身份、跳板机、隧道规则、会话快照、登录历史、文件路径、文件夹授权和应用设置。Android 另存 VPN／代理配置及机密。iOS 使用 Keychain 保存机密。Android 使用 Keystore 支持的密钥加密清单，但加密不可用时可能以明文保存；WireGuard、Shadowsocks 和 OpenVPN 配置存储则必须加密。Android 云备份已关闭，可选调试日志保存在本地。"
      },
      {
        heading: "通过网络发送的信息",
        body: "SSH 认证先检查身份，再发送至配置的服务器和跳板机。终端、SFTP、VNC 和转发流量发送至所选端点；插件目录及下载访问各自来源。Android VPN／代理可按路由把其他应用流量及 DNS 传至你的 SSH、WireGuard、Shadowsocks 或 OpenVPN 服务器。这些流量不发送至 Mobile SSH 分析或云存储。"
      },
      {
        heading: "文件传输与存储访问",
        body: "文件传输只用所选文件夹和文件，不要求全面存储权限。Android 保留授权文件夹访问。iOS 使用应用文件夹或记住 Files 中所选位置，并通过系统界面导入文档、照片和分享文件。文件提供方可能使用自己的云服务。打开或分享会把文件交给你选择的应用或目的地。"
      },
      {
        heading: "日志与故障排查",
        body: "连接时登录尝试记录在本地。调试记录可选；Android 会警告诊断包含每个输入按键（含密码），并导出归档。iOS 记录连接地址、失败、重连、网络变化和 tmux 诊断。分享前检查日志，因为可能暴露服务器细节，Android 还可能暴露输入的机密。"
      },
      { heading: "使用情况分析", body: "启用分析后，Mobile SSH 会通过 HTTPS 向 Aptabase 发送功能交互（包括 VPN/代理使用情况和终端复用器类型）、连接诊断数据、应用和操作系统版本、设备型号、语言以及临时会话 ID，以改进应用。Aptabase 会处理请求的 IP 地址和 User-Agent，以推导国家或地区以及每日假名标识符；它不会将原始 IP 地址或 User-Agent 与分析数据一起存储。事件不包含浏览流量、DNS 查询、服务器地址、用户名、凭据、命令或文件内容。带有分析同意提示的 Android 版本需要用户主动同意；较旧的 Android 版本和 iOS 默认启用分析。关闭分析后所有功能仍然可用。您可以在设置中停止收集；iOS 上此前已排队的事件仍可能被发送。Android 上的同意仅存储在本机，不会从备份中恢复。请参阅 [Aptabase 的数据处理协议](https://aptabase.com/legal/dpa)。" },
      {
        "heading": "导出的备份",
        "body": "完整备份含清单与应用设置，Android 另含 VPN／代理配置。密码可加密文件；不设则明文包含密码和私钥。保存或分享位置由你选择。不含 SSH 信任、活动会话和系统文件夹授权。导入预览显示将应用的区域及安全偏好。"
      },
      {
        "heading": "Android VPN 路由",
        "body": "设备 VPN 需 Android 同意，运行至手动停止或系统结束。同一时间仅一个设备 VPN，本地 SOCKS 可与其他 VPN 共存。SSH 承载 TCP 和 DNS，分配给 SSH 的其他 UDP 被阻止。停止、切换或终止应用会结束原 VPN 保护；Mobile SSH 不保证始终开启或锁定模式。"
      }
    ],
    permissionsHeading: "权限",
    permissions: [
      { label: "互联网", body: "用于 SSH、文件传输、桌面、VPN、插件连接和已启用的分析。" },
      { label: "Wake lock 与 Wi-Fi lock", body: "在 Android 上用于在设备休眠时保持活动的 SSH 会话。" },
      { label: "前台服务与通知", body: "在 Android 上用于在后台处理活动连接；在 iOS 上，通知用于智能体提醒。" },
      { label: "文件访问", body: "通过系统文件夹、文档和照片选择器授权；iOS 可记住外部 Files 文件夹。两个平台均不请求全面存储权限。" },
      {
        "label": "VPN 同意（Android）",
        "body": "内置 VPN 为设备路由前必需；仅 SOCKS 代理不占设备 VPN 位置。"
      },
      {
        "label": "USB 和 NFC（Android）",
        "body": "用于与实体 FIDO2 密钥通信以注册或 SSH 签名，并按需请求 USB 权限、触摸及 PIN 确认。"
      }
    ],
    securityHeading: "安全责任",
    securityBody:
      "保护设备和导出备份。通过可信渠道核对未知 SSH 指纹；若要首次连接先批准，请关闭 Android 自动接受身份，iOS 默认询问。替换已保存身份前查明密钥变化原因。安全屏幕在 Android 阻止截图和录屏；iOS 隐藏应用切换预览和录屏／镜像，但不能阻止手动截图。",
    contactHeading: "联系",
    contactBody: "支持联系方式：[mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)。"
  },
  docsIndex: {
    metaTitle: "文档 | Mobile SSH",
    metaDescription: "Android 和 iOS 上 Mobile SSH 的终端用户文档。",
    eyebrow: "用户指南",
    h1: "Mobile SSH 文档",
    intro:
      "涵盖 SSH 身份、跳板机、终端、VNC、多路复用器、SFTP、备份、本地隧道和 Android VPN 的指南，并说明平台差异。",
    cards: [
      { slug: "getting-started",  title: "快速开始",       text: "安装、验证服务器身份、配置跳板机与密钥，并备份设置。" },
      { slug: "terminal",         title: "终端",           text: "使用终端控件、tmux、herdr、Zellij、智能体提醒和 VNC 桌面。" },
      { slug: "file-transfer",    title: "文件传输",       text: "传输文件、记忆文件夹，并向会话或其他应用分享。" },
      { slug: "port-forwarding",  title: "端口转发",       text: "配置本地隧道及 Android SSH VPN、SOCKS5、WireGuard、Shadowsocks 和 OpenVPN。" },
      { slug: "troubleshooting",  title: "故障排查",       text: "排查身份、跳板机、终端、传输、备份及 VPN 问题。" }
    ]
  },
  docsNav: {
    home: "文档主页",
    gettingStarted: "快速开始",
    terminal: "终端",
    fileTransfer: "文件传输",
    portForwarding: "端口转发",
    troubleshooting: "故障排查"
  },
  about: {
    metaTitle: "关于 | Mobile SSH",
    metaDescription: "关于 Mobile SSH：Android 和 iOS SSH 客户端的版本、作者、许可证以及开源声明。",
    eyebrow: "关于",
    h1: "关于 Mobile SSH",
    intro: "Android 与 iOS 的 SSH、SFTP、VNC 和多路复用器管理器，含本地备份、身份验证与跳板机。Android 另有 VPN 客户端和硬件安全密钥。",
    appHeading: "关于应用",
    versionLabel: "版本",
    authorLabel: "作者",
    authorValue: "Dmitry Kozlov",
    licenseLabel: "许可证",
    licenseValue: "Apache 2.0",
    websiteLabel: "网站",
    privacyLabel: "隐私政策",
    privacyLinkText: "隐私政策",
    noticesHeading: "开源声明",
    noticesIntro: "Mobile SSH 基于以下开源库构建，每一个均按其相应许可证使用。",
    notices: [
      { name: "JSch (mwiede fork) — Android",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "JZlib (bundled in JSch) — Android",   license: "BSD 3-clause", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "jBCrypt (bundled in JSch) — Android", license: "ISC", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "Ed25519 / Ed448 Java — Android",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "StringFog — Android",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "SwiftNIO & SwiftNIO SSH — iOS",       license: "Apache 2.0", url: "https://github.com/apple/swift-nio-ssh", licenseUrl: "https://github.com/apple/swift-nio-ssh/blob/main/LICENSE.txt" },
      { name: "Swift Crypto — iOS",                  license: "Apache 2.0", url: "https://github.com/apple/swift-crypto", licenseUrl: "https://github.com/apple/swift-crypto/blob/main/LICENSE.txt" },
      { name: "WireGuard Android — Android", license: "Apache-2.0", url: "https://github.com/WireGuard/wireguard-android", licenseUrl: "/licenses/wireguard-android-APACHE-2.0.txt" },
      { name: "wireguard-go — Android", license: "MIT", url: "https://github.com/WireGuard/wireguard-go", licenseUrl: "/licenses/wireguard-go-MIT.txt" },
      { name: "Go / golang.org/x/crypto / golang.org/x/net / golang.org/x/sys — Android", license: "BSD-3-Clause", licenseUrl: "/licenses/wireguard-third-party-notices.txt" },
      { name: "hev-socks5-tunnel / hev-socks5-core / hev-task-system — Android", license: "MIT", url: "https://github.com/heiher/hev-socks5-tunnel", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "lwIP — Android", license: "BSD-3-Clause", url: "https://savannah.nongnu.org/projects/lwip/", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "shadowsocks-rust — Android", license: "MIT / Apache-2.0 / BSD / ISC / Unicode-3.0", url: "https://github.com/shadowsocks/shadowsocks-rust", licenseUrl: "/licenses/shadowsocks-NOTICES.txt" },
      { name: "OpenVPN 3 Core — Android", license: "MPL-2.0", url: "https://github.com/OpenVPN/openvpn3", licenseUrl: "/licenses/openvpn3-MPL-2.0.txt" },
      { name: "mbed TLS — Android", license: "Apache-2.0", url: "https://github.com/Mbed-TLS/mbedtls", licenseUrl: "/licenses/openvpn-NOTICES.txt" },
      { name: "Asio — Android", license: "BSL-1.0", url: "https://github.com/chriskohlhoff/asio", licenseUrl: "/licenses/openvpn-NOTICES.txt" },
      { name: "LZ4 / xxHash — Android", license: "BSD-2-Clause", licenseUrl: "/licenses/openvpn-NOTICES.txt" },
    ],
    openvpnSourceHeading: "OpenVPN 源代码",
    openvpnSourceBody: "OpenVPN 3 Core 按 MPL 2.0 使用。下载所涵盖的确切源代码及依赖版本、许可证文本和原生构建信息。",
    openvpnSourceLabel: "下载源代码归档",
    certificatesHeading: "证书",
    apkCertificateLabel: "直接安装的 APK 签名证书（PEM）",
    apkCertificateBody: "此公开证书用于识别直接安装的 Mobile SSH APK 的签名者。Google Play 可能使用其他证书对下载的应用签名。",
    serverCertificateBody: "SSH 和 VPN 服务器证书应由您的服务器管理员或 VPN 提供商提供。请通过可信渠道验证其指纹；此签名证书不是 VPN 证书颁发机构。",
    signingHelpLabel: "Android 应用签名文档",
    contactHeading: "联系",
    contactBody: "支持联系方式：[mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)。"
  }
};
