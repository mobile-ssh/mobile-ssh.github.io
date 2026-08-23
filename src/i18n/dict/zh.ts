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
      "Mobile SSH 是一款专注的 Android 和 iOS SSH 客户端，支持多会话终端、抗断线的 Eternal Terminal 会话、tmux 管理器、SFTP 传输、私钥认证、端口转发与插件。",
    eyebrow: "适用于 Android 和 iOS 的 SSH 客户端",
    h1: "Mobile SSH",
    intro:
      "一款专注的 Android 和 iOS SSH 客户端：多会话终端、可在网络中断后存活的 Eternal Terminal 会话、内置 tmux 管理器、SFTP 文件传输、本地端口转发与插件——为手机和平板量身打造。",
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
      { title: "保存主机，搜索连接", text: "添加一次主机后，搜索并点击即可连接——密钥、端口和隧道一并带上。" },
      { title: "智能体提醒，一键作答", text: "Claude Code、Codex 或其他智能体一需要你，你立刻就会知道：面板变为琥珀色，工具栏角标统计有多少个正在等待，在「智能体」列表里一键即可回答提示——无需在终端里打字。" },
      { title: "键盘上方的终端键", text: "一排十三个按键——ESC、TAB、CTRL、方向键、Home、End、PgUp、PgDn——放不下时会换到第二行而不是横向滚动，因此不会有按键被挤出屏幕。还可以从预设面板中添加 F1–F12、Ctrl 组合键或你自己的转义序列。" },
      { title: "无需命令的端口转发", text: "隧道附加在服务器配置上，连接时自动建立。" },
      { title: "锁屏和切网仍在线", text: "为一个已保存的服务器设置多个地址——家庭 LAN IP 和 VPN IP——Mobile SSH 会拨通其中能响应的那个，优先尝试上次成功的地址，并在网络变化的瞬间重连。在 Android 上，前台服务和唤醒锁让会话穿过锁屏；在 iOS 上，自动重连加上 tmux 自动附加让你回到离开时的位置。" },
      { title: "Eternal Terminal", text: "可选的 ET 传输让远程 shell 在网络中断、休眠和 IP 变化后仍然存活。主机上没有 etserver？Mobile SSH 可以通过 SSH 为你安装。" },
      { title: "用插件扩展", text: "浏览公开目录并按需安装插件，添加新的工作流。每个插件下载后都会经 SHA-256 校验并存入应用私有存储。" }
    ],
    sectionAHead: "围绕移动端 SSH 工作而设计",
    sectionAIntro:
      "Mobile SSH 缩短了常见的运维路径：保存服务器、连接、保持会话存活、必要时移动文件，并快速回到正在使用的终端。",
    features: [
      { title: "SSH 终端", text: "xterm-256color 终端，支持 24-bit 真彩色、斜体、终端内查找、OSC 133 shell 集成以及捏合缩放文字大小——此外在 Android 和 iOS 上还提供可配置的字体与配色方案，以及 Nerd Font powerline/图标字形。" },
      { title: "多会话网格", text: "在可调整大小的网格中同时运行多达八个 SSH 会话——点击面板聚焦，双击进入全屏，捏合调整文字大小。" },
      { title: "可点击链接", text: "终端输出中的 URL 会带下划线，点击即可在浏览器中打开——无需复制或切换应用。" },
      { title: "服务器文件夹与名称", text: "将保存的服务器整理到可折叠的分组中，还可以给服务器起一个名称，列表里显示名称而不是地址。一旦名称可能产生歧义，地址就会自动出现，各行不会混作一团。" },
      { title: "智能体提醒", text: "智能体通过终端主动上报，因此应用知道是哪一个被阻塞、卡在什么事情上。在「智能体」列表里一键即可作答；提醒会相互替换而不是层层堆积，点击提醒即可打开发出提醒的那个面板。" },
      { title: "私钥", text: "支持密码或私钥认证。在设备上生成 Ed25519 或 ECDSA 密钥（Android 上还支持 RSA）；导入或粘贴现有密钥。" },
      { title: "SFTP 传输", text: "绑定到活跃 SSH 会话的双面板文件浏览器。将上传和下载放入队列，重命名、删除，并查看远程文件权限。" },
      { title: "端口转发", text: "在服务器档案中保存本地隧道描述，它们会在连接时自动建立——包括在新网络上重连之后，也无需你再手动搭一遍。" },
      { title: "重连流程", text: "切换网络后会话会立刻重新拨号，而不是干等一条已经失效的链路；处于退避等待中的会话，一旦出现可用网络就会被唤醒。在 iOS 上，如果服务器已经悄无声息地停止响应，应用会察觉并重新连接。" },
      { title: "备份与恢复", text: "将保存的服务器和凭据导出为加密备份文件；以合并或替换方式导入，轻松在设备间迁移——备份可在 Android 和 iOS 之间互通。" },
      { title: "Eternal Terminal", text: "通过 Eternal Terminal（ET）连接，会话可在网络中断、休眠和 IP 变化后存活——还可选择通过 SSH 自动部署 etserver。" },
      { title: "复用器管理器", text: "无需前缀组合键即可驱动 tmux——附加、重命名、创建、拆分、缩放或结束。两个平台都为 herdr 与 Zellij 提供同样的能力，只有在服务器上确实找到该程序后，工具栏才会出现对应图标。" },
      { title: "插件", text: "浏览、安装并运行插件来扩展 Mobile SSH。插件从公开目录按需下载，经 SHA-256 校验后存入应用私有存储。" }
    ],
    multiHead: "一屏多个活跃 Shell",
    multiP1:
      "终端视图可在网格中容纳多个活跃的 SSH 会话。点击面板进行输入，使用拓展按键栏进行终端控制，捏合手势调整文字大小，双击面板进入全屏聚焦。",
    multiP2:
      "主界面回答的是「我可以回到哪里继续」——当前仍然活跃的连接，以及在你保存的服务器上等待的 tmux 会话；后者由本地保存的快照重建，因此完全没有网络时也能列出来。",
    multiAlt:
      "手机上的 Mobile SSH，以左右分屏视图并排显示两个活跃的 SSH 终端会话。",
    sftpHead: "终端不够用时的 SFTP",
    sftpBody:
      "从已连接的会话打开文件传输，浏览手机存储与远程目录；将上传与下载放入队列，对文件排序，快速跳回最近访问过的远程路径，并在决定移动哪些文件时查看或修改远程权限。",
    sftpCtaGuide: "文件传输指南",
    sftpCtaAll: "全部功能",
    sftpAlt: "手机上的 Mobile SSH 文件传输界面，包含本地与远程面板。",
    galleryHead: "在真实设备上的实际效果",
    galleryIntro:
      "来自 Android 手机和 iPhone 的截图——你将用于添加服务器、在终端中工作、运行多个会话以及通过 SFTP 移动文件的相同界面。",
    carouselPrev: "上一张截图",
    carouselNext: "下一张截图",
    carouselDot: "跳到第 {n} 张",
    videoHead: "观看实际效果",
    videoIntro: "两个平台上的简短演示。Android：主界面直接告诉你可以回到哪些会话、会话工具栏只显示这台服务器实际支持的功能、把文件直接发送到提示符里，以及 tmux、herdr 与 Zellij 管理器。iOS：启动后直接进入实时终端，以及随后返回的主界面。",
    videoAlt: "Android 演示：主界面列出可恢复的 tmux 会话、会话工具栏、将文件附加到提示符中，以及 tmux、herdr 与 Zellij 会话管理器",
    videoIosAlt: "iOS 演示：打开 Mobile SSH 直接进入实时 SSH 终端会话，再返回主界面，展示「最近」列表与应用的其他界面",
    muxHead: "每个会话管理器一段视频",
    muxIntro:
      "上面的演示里，tmux、herdr 和 Zellij 一共只分到约三十秒——足够看出工具栏为每一个都画了图标，却不足以看出它们各自能做什么。这些是长版本，在两个平台上对着真实服务器拍摄。",
    muxItems: [
        {
          text: "从主屏幕直达会话、窗口和窗格，其中一个会话带着铃铛，因为那里有东西在等人回应。附加一个窗口，正在运行的终端就跟过去；新建一个窗口并命名——全程不必敲任何前缀组合键。",
          androidAlt: "Android 上 tmux 管理器的演示：主屏幕缓存的会话列表，然后是会话、窗口和窗格，附加一个窗口让终端跟随，以及创建一个命名窗口。",
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
    graphicsHead: "终端里的动态图表",
    graphicsBody:
      "一段 36 帧的 GIF，通过 Kitty 图形协议流式传入，由应用按文件自身的帧时序解码——不是从外部一帧帧推的。接着是衡量一个终端的那些转义序列：OSC 8 把构建号和仪表盘名字变成可以点的东西，OSC 52 让远端写入手机的剪贴板，OSC 777 弹出一条真正的 Android 通知。",
    graphicsAlt:
      "Android 演示：通过 Kitty 图形协议流入终端的动态延迟图表，随后是 OSC 8 链接、OSC 52 写入剪贴板和一条 OSC 777 通知。",
    lightboxClose: "关闭",
    lightboxPrev: "上一张",
    lightboxNext: "下一张",
    betaJoin: "加入公测",
    betaOr: "或发送邮件至",
    betaRequest: "申请私人测试资格",
    galleryAlts: [
      "Android 手机上的 Mobile SSH 主界面，列出某台已保存服务器上正在等待的 tmux 会话，下方是服务器、凭据、设置、关于与插件按钮。",
      "手机上的「添加服务器」对话框，显示主机、端口、凭据、私钥与端口转发字段。",
      "手机上的单会话 SSH 终端，底部有拓展按键栏。",
      "手机上以左右分屏视图显示的两个 SSH 会话。",
      "手机上两个垂直堆叠的 SSH 会话，活跃面板被高亮。",
      "手机上的 SFTP 文件传输界面，包含「我的手机」与「远程主机」面板。",
      "手机上的「关于」对话框，显示版本、作者、许可与网站字段。",
      "手机上的「生成 SSH 密钥」对话框，包含标签、用户、密钥类型和口令字段。",
      "手机上的「公钥」对话框，显示生成的密钥以及复制、分享和保存选项。",
      "「已保存服务器」界面，显示整理到可折叠的「工作」与「个人」文件夹分组中的服务器。",
      "手机上的 SSH 终端，https:// 网址带下划线，可点击打开链接。",
      "Android 手机上的 Zellij 管理器，列出会话、标签页与窗格，并带有附加、重命名、结束与聚焦按钮。",
      "手机上的 tmux 管理器，列出 tmux 会话、窗口与窗格，并带有附加、重命名与切换按钮。",
      "手机上的插件界面，显示包含 Tailscale、WireGuard 与 VS Code 的可安装插件目录。",
      "手机上的 AI Chat 插件，通过 SSH 从远程服务器上运行的本地 llama3.2 模型流式输出回复。",
      "手机上的「添加服务器」对话框，传输方式设为 Eternal Terminal，使会话在网络中断后仍能存活。"
    ],
    galleryIosAlts: [
      "iPhone 上的 Mobile SSH 连接表单，包含服务器、认证、文件夹与传输方式字段。",
      "iPhone 上的「已保存服务器」，按 Production 与 Staging 分组整理，并带服务器搜索。",
      "iPhone 上的实时 SSH 终端，带 tmux 状态栏，底部有拓展按键栏。",
      "iPhone 上网格中左右并排的两个 SSH 会话，点击面板即可聚焦。",
      "iPhone 上的文件传输，包含「我的手机」与「远程主机」面板以及已完成的传输日志。",
      "iPhone 上的密钥认证，显示在设备上生成的 Ed25519 密钥与可复制的公钥。",
      "iPhone 上的 tmux 管理器，列出会话与窗口，带附加、重命名与结束操作——铃铛标记等待输入的智能体。",
      "iPhone 上的 SSH 终端，已附加到 tmux 窗口，显示远程编辑器中的代码。",
      "iPhone 上的插件目录，可安装 Tailscale、WireGuard、VS Code、AI Chat 与 Open WebUI。",
      "iPhone 上的连接表单，传输方式设为 Eternal Terminal，使会话在网络中断后仍能存活。",
      "iPhone 上的智能体提醒设置，包含振动、声音与仅耳机播放开关。",
      "iPhone 上的 Mobile SSH 主界面，带「最近」列表可一键重新连接，下方是服务器、凭据、日志、设置、关于与插件磁贴。"
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
      "Mobile SSH 在 Android 和 iOS 上的核心 SSH 功能：终端、Eternal Terminal、tmux 管理器、SFTP、私钥、端口转发与插件。",
    eyebrow: "功能清单",
    h1: "Mobile SSH 功能",
    intro:
      "Mobile SSH 为在 Android 和 iOS 设备上直接进行 SSH 操作而构建：打开终端、保持运行、移动文件、保存服务器，并在被中断后快速恢复。",
    groups: [
      {
        title: "平台",
        items: [
          "Android 8.0 或更高版本——目前是 Google Play 上的封闭测试：在手机浏览器中打开加入链接，然后从 Play 安装",
          "iPhone 和 iPad 上的 iOS 16 或更高版本——在 TestFlight 上加入公测",
          "加密备份可互通：在一个平台导出，在另一个平台导入"
        ]
      },
      {
        title: "连接",
        items: [
          "密码认证与私钥认证",
          "Android 上支持 Ed25519、ECDSA（P-256/384/521）与 RSA 私钥；iOS 上支持 Ed25519 与 ECDSA。两个平台都能打开带密码短语加密的密钥",
          "保存的服务器档案，包含主机、端口、用户名、凭据、私钥与可选的隧道描述——克隆某个档案即可将其设置复制到新服务器",
          "给服务器起个名称，列表就会显示名称而不是地址——一旦两行看起来会难以区分，地址便会自动回到列表中",
          "可按名称、主机、端口、凭据或任意备用地址搜索已保存的服务器",
          "如果你用两条不同的记录连到了同一台机器，应用会察觉——它会比对主机密钥指纹，并提议把它们合并成一个多地址服务器",
          "搜索优先的添加会话流程：从专用搜索页面选择已保存的服务器，一键连接",
          "每个已保存的服务器可设置多个地址，用于 LAN/VPN 漫游——按顺序拨号，优先尝试上次成功的地址，网络变化时自动重连",
          "可在服务器配置中选择的可复用凭据记录",
          "围绕「继续未完成的工作」设计的主界面：当前活跃的连接，以及在你的服务器上等待的 tmux 会话——后者取自本地保存的快照，因此没有网络也能列出，每一行都标注了快照的新旧程度。iOS 上还保留「最近」列表",
          "端到端的 IPv6 支持：地址字段可填写方括号包裹的字面地址并附带可选端口，端口转发规则中也可使用方括号包裹的 IPv6 目标",
          "成功与失败的登录日志，记录实际拨通的地址；失败时还会记录原因",
          "Teleport 代理传输（实验性，Android）：使用用户名、密码和 OTP 登录，或导入 Teleport 配置或身份文件，浏览集群节点，然后通过代理隧道运行终端、SFTP、tmux 与插件"
        ]
      },
      {
        title: "终端",
        items: [
          "VT100/xterm-256color 风格的终端行为，支持 24-bit 真彩色与斜体——会向 shell 声明 TERM=xterm-256color 与 COLORTERM=truecolor",
          "回滚缓冲在 Android 和 iOS 上可设为 1,000、5,000、10,000 或 50,000 行（默认 5,000 行）",
          "在终端中查找——搜索回滚缓冲与可见屏幕，并在匹配项之间跳转（Android 与 iOS）",
          "Shell 集成（OSC 133）：在提示符之间逐个跳转、选中某条命令的整段输出——包括 300 行之前那次构建的报错，而不只是最后一条命令——并在长时间运行的命令完成时收到提醒（Android 与 iOS）",
          "通过 Kitty graphics 协议在终端中内嵌显示图像，捏合缩放与重新换行后依然保留，而不会凭空消失（Android 与 iOS）",
          "方块、盲文与六分格马赛克字形由应用自行绘制，因此 chafa、timg 与 ANSI 字符画能严丝合缝地拼接，而不是显示成空白方框（Android）",
          "在启用鼠标跟踪的 TUI 中，轻点就等于点击——htop、vim 以及窗格选择都可以用触摸完成（Android）",
          "面板标题显示该面板真实的工作目录，来源是向 tmux 查询或 shell 通过 OSC 7 上报（Android）",
          "由十三个按键组成的拓展按键栏——ESC、TAB、CTRL、方向键、Home、End、PgUp、PgDn 与键盘切换——放不下时换到第二行而不是横向滚动，仍然多出来的按键会收进溢出菜单，因此不会有按键跑到屏幕外",
          "在 Android 和 iOS 上均可自定义这一按键栏：从约 45 个预设（含 F1–F12、Ctrl 组合键与符号）中添加；也可移除、重新排序、隐藏、定义你自己的转义序列按键并恢复默认，全程带实时预览",
          "点击聚焦、可选的「点击显示键盘」设置、复制与全部复制操作",
          "捏合缩放文字大小并触发远程终端 resize",
          "面板双击全屏",
          "终端文本选择：复制、分享与全选操作——长按选中单词，复制后仍保留所选内容，方便分享或再次复制",
          "OSC 52 剪贴板——将远程 tmux 或 vim 会话中的文本直接复制到手机剪贴板（Android 与 iOS）",
          "原生直通键盘输入——自动更正不会再与 shell 冲突；软键盘语音听写仍然可用",
          "Android 和 iOS 上支持外接与 Bluetooth 键盘，包括方向键、功能键以及 Ctrl/Alt 组合键",
          "括号粘贴（bracketed paste），使多行剪贴板内容不会被自动执行",
          "内置的 Nerd Font 可在 Android 和 iOS 上渲染 powerline、starship、devicon 与 Material Design 图标字形，否则系统字体只会将其显示为空白方框",
          "宽 CJK、emoji 与组合字符在 Android 与 iOS 上都能被正确测量和绘制，包括字素簇（grapheme cluster）与零宽连接符（zero-width joiner）",
          "在 Android 和 iOS 上可配置终端字体（系统等宽字体、JetBrains Mono 或 Source Code Pro）与 ANSI 配色方案（Solarized、Gruvbox、Dracula、Nord），并实时应用到已打开的面板",
          "「设置」中除捏合缩放外还提供终端字号滑块，应用主题可设为「跟随系统」、「浅色」或「深色」"
        ]
      },
      {
        title: "会话",
        items: [
          "最多八个并发 SSH 会话",
          "活跃会话的网格布局",
          "后台与锁屏期间的稳定性：在 Android 上，前台服务让 shell 与智能体在你把应用从最近任务中划掉之后继续运行；在 iOS 上，tmux 自动附加会重新接回你的 shell",
          "Keepalive 与带指数退避的重连尝试——最多十次，而针对你已经离开的那个网络所产生的失败不计入次数上限",
          "切换 Wi-Fi、移动数据或 VPN 时会立刻重新拨号，而不是干等已经失效的链路；已处于退避等待中的会话，一旦出现可用网络就会立即重试",
          "如果服务器悄无声息地停止响应——比如被挂起的虚拟机或卡死的跳板机——应用会通过无人应答的 keepalive 探测发现它并重新连接，而不是默默吞掉你敲下的按键（iOS）",
          "起始界面的「活跃会话」入口；持续通知列出会话——点击即可打开",
          "tmux 命令跟踪与中断作业的 reattach 提示，并可按服务器选择连接时附加什么：自动检测、不附加、tmux、herdr 或 Zellij（Android）",
          "智能体通过终端主动上报，因此应用知道是哪个智能体、它正在运行什么工具，以及它是否正卡在你这里——面板会变为琥珀色，标题显示「claude · needs you」，工具栏角标统计有多少个正在等待",
          "在「智能体」列表中一键回答智能体的提问；回复通过单独的通道送达，绝不会往屏幕上正在显示的内容里打字",
          "可在应用内把智能体钩子安装到服务器上——那是一个任何智能体都能调用的小 shell 脚本，而不是绑定某个厂商的集成",
          "Eternal Terminal（ET）传输，使会话在网络中断、休眠和 IP 变化后仍能存活，可选择通过 SSH 自动部署 etserver",
          "Tmux 管理器：列出并切换会话、窗口与窗格——附加、重命名、创建、拆分、缩放或结束，支持按名称/日期排序，🔔 标记等待输入的智能体",
          "Android 与 iOS 上都有 herdr 与 Zellij 管理器，各自对自己的会话、标签页与窗格拥有同样的控制力——只有在服务器上找到该程序后，工具栏才会显示对应图标"
        ]
      },
      {
        title: "文件与隧道",
        items: [
          "本地与远程双面板 SFTP 浏览器，并带有可滚动、逐条显示每一次传输的传输日志",
          "上传与下载的队列操作；在 Android 上，可以把任意文件从其他应用分享进正在运行的会话，其远程路径会自动输入到提示符处",
          "在手机与远程主机之间递归上传和下载文件夹",
          "远程重命名、删除、创建、编辑、压缩为 .tar.gz、权限（chmod/chown）与详情等操作",
          "两个平台都可以用其他应用打开已下载的文件——在 iOS 上，下载内容还会出现在「文件」应用的「我的 iPhone」下",
          "在 Android 上，文件传输会回到该 tmux 会话上次所在的目录，并在面板标题中标出会话名；没有可记忆的位置时，则退回到你在该主机上最常用的目录",
          "按名称或日期排序并按主机持久化，还可快速跳回最近访问过的远程路径",
          "文件大小以二进制单位显示，与隔壁标签页终端里 ls -h 的输出保持一致",
          "随服务器档案保存的本地端口转发，连接时自动建立",
          "整个应用与文件浏览器都跟随系统的浅色或深色主题——在 Android 和 iOS 上均可选择「跟随系统」、「浅色」或「深色」"
        ]
      },
      {
        title: "本地化",
        items: [
          "应用 UI 翻译：阿拉伯语、孟加拉语、中文（简体与繁体）、英语、法语、德语、印地语、印度尼西亚语、日语、马拉地语、葡萄牙语、俄语、西班牙语、泰米尔语、泰卢固语、土耳其语与乌尔都语——Android 上共二十种语言，另外还包含尼日利亚皮钦语与埃及阿拉伯语，iOS 上为十八种",
          "默认跟随系统语言；如果你希望应用使用与手机不同的语言，「设置」中也提供了语言选择器"
        ]
      },
      {
        title: "密钥与备份",
        items: [
          "在设备上生成新的 Ed25519 或 ECDSA 密钥（Android 上还支持 RSA），可选密码短语",
          "复制、分享或保存生成的公钥，以添加到服务器的 authorized_keys",
          "将已保存的服务器和凭据导出为备份文件——可以全部导出，也可以只勾选你需要的条目；点击文件夹标题即可选中整个文件夹",
          "可选密码短语会加密备份；导入时可合并或替换",
          "未加密的备份以明文存储密码和密钥——请保护或删除该文件"
        ]
      },
      {
        title: "安全",
        items: [
          "安全屏幕：在 Android 上，阻止截图与屏幕录制，并在最近任务缩略图中隐藏应用；在 iOS 上，遮盖应用切换器的预览并阻止屏幕录制与镜像（iOS 上无法阻止手动截图）——在密码、密钥或令牌显示在屏幕上时可选择开启的设置",
          "保存的服务器、凭据和密钥都留在设备上——机密保存在 Android Keystore 和 iOS Keychain 中，没有云端账户或同步",
          "仅收集匿名使用分析——绝不包含你的服务器、凭据、命令或文件内容。Android 在「设置」中提供关闭开关；iOS 目前还没有这个开关"
        ]
      },
      {
        title: "插件",
        items: [
          "浏览、安装并运行插件来扩展 Mobile SSH",
          "插件从公开目录按需下载，经 SHA-256 校验后存入应用私有存储",
          "插件必须声明自己需要什么——SSH 命令、隧道、存储——应用会拒绝一切它没有申请过的能力",
          "当插件要在你的服务器上做配置时，会先把将要执行的具体命令展示给你，经你批准后才会运行",
          "可配置自定义或私有的目录源，也可以从你自己服务器上的某个文件夹安装"
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
      "这些工具围绕 SSH 有重叠，但目标不同。Mobile SSH 是面向 Android 和 iOS 的专注 SSH/SFTP 客户端，Termux 是仅限 Android 的 Linux 环境，Termius 是带账户驱动生产力功能的跨平台 SSH 客户端。",
    columns: {
      need: "需求",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "主要定位",
        mobileSsh: "面向 Android 和 iOS 的专用 SSH、SFTP、本地隧道与终端客户端。",
        termux: "带 APT 包管理的 Android 终端模拟器与 Linux 环境。",
        termius: "面向 Android、iOS、桌面与偏 Web 团队工作流的现代 SSH 客户端。"
      },
      {
        need: "配置方式",
        mobileSsh: "输入主机或保存服务器档案，然后直接连接。",
        termux: "安装 OpenSSH 等软件包，配置 shell 工具，并在类 Linux 命令行中工作。",
        termius: "通过 Termius 的应用/账户模型创建或同步主机、密钥、片段与保险库。"
      },
      {
        need: "移动端终端控制",
        mobileSsh: "内置拓展按键栏、网格会话、面板全屏、捏合缩放、带复制/分享的文本选择与 tmux 友好滚动——两个平台上都支持原生直通输入与外接键盘。",
        termux: "强大的终端环境；终端行为取决于已安装的工具与配置。",
        termius: "移动键盘扩展、手势、标签页、自动补全、片段与打磨过的终端 UX。"
      },
      {
        need: "文件传输",
        mobileSsh: "绑定到活跃 SSH 会话的内置双面板 SFTP 传输。",
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
        mobileSsh: "仅本地保存的服务器、凭据、历史、设置与日志。",
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
      { category: "连接", feature: "保存的服务器档案",               mobile: "yes",    termux: "通过 ssh config", termius: "yes" },
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
      { category: "终端", feature: "可配置回滚缓冲（1 千–5 万行）",   mobile: "yes",    termux: "可配置",       termius: "部分" },
      { category: "终端", feature: "终端内搜索（回滚缓冲）",          mobile: "yes",    termux: "no",           termius: "no" },
      { category: "终端", feature: "拓展按键栏（ESC/TAB/CTRL/…）",   mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "终端", feature: "捏合缩放文字大小",                mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "终端", feature: "双击面板全屏",                    mobile: "yes",    termux: "no",           termius: "no" },
      { category: "终端", feature: "终端输出中的可点击 URL",          mobile: "yes",    termux: "部分",         termius: "yes" },
      { category: "终端", feature: "文本选择：复制/分享/全选",        mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "终端", feature: "硬件 / Bluetooth 键盘支持",       mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "终端", feature: "Shell 集成（OSC 133）",            mobile: "yes",    termux: "no",           termius: "no" },
      { category: "终端", feature: "内嵌图像（Kitty graphics）",       mobile: "yes",    termux: "no",           termius: "no" },
      { category: "终端", feature: "应用自绘马赛克字形（chafa、ANSI 字符画）", mobile: "Android", termux: "取决于字体", termius: "no" },
      { category: "终端", feature: "鼠标模式 TUI 中轻点即点击",       mobile: "Android", termux: "yes",         termius: "no" },
      { category: "终端", feature: "Nerd Font / powerline 字形渲染",   mobile: "yes",     termux: "可配置",      termius: "部分" },
      { category: "会话", feature: "多个并发 SSH 会话",               mobile: "最多 8 个", termux: "最多 8 个",  termius: "yes" },
      { category: "会话", feature: "网格面板布局",                    mobile: "yes",    termux: "通过 tmux",    termius: "标签页" },
      { category: "会话", feature: "tmux 友好滚动",                   mobile: "yes",    termux: "yes",          termius: "no" },
      { category: "会话", feature: "重连时的 tmux reattach 提示",     mobile: "yes",    termux: "no",           termius: "no" },
      { category: "会话", feature: "智能体提醒（Claude Code / Codex）", mobile: "yes", termux: "no",           termius: "no" },
      { category: "会话", feature: "带会话列表的持续通知",            mobile: "Android", termux: "部分",        termius: "no" },
      { category: "会话", feature: "前台服务与唤醒锁",                mobile: "Android", termux: "yes",         termius: "部分" },
      { category: "会话", feature: "带退避的自动重连",                mobile: "yes",    termux: "通过 autossh", termius: "yes" },
      { category: "文件", feature: "内置 SFTP 文件传输界面",          mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "文件", feature: "本地+远程双面板浏览器",           mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "文件", feature: "上传/下载队列",                   mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "文件", feature: "远程重命名/删除/创建",            mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "文件", feature: "远程文件权限查看",                mobile: "yes",    termux: "no",           termius: "no" },
      { category: "文件", feature: "按名称或日期排序（按主机保存）",  mobile: "yes",    termux: "no",           termius: "部分" },
      { category: "隧道", feature: "本地端口转发",                    mobile: "yes",    termux: "通过 CLI",      termius: "yes" },
      { category: "隧道", feature: "随服务器档案保存的隧道",          mobile: "yes",    termux: "通过 ssh config", termius: "yes" },
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
      { category: "隐私与费用", feature: "分析数据退出选项",          mobile: "Android", termux: "无分析",      termius: "no" },
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
      "有一类快速增长的应用专门用来从手机驱动编码智能体——Claude Code、Codex 及同类产品。其中一些是第三方 SSH 或中继应用（Onepilot、Happy、Omnara）；OpenAI 和 Anthropic 现在也原生提供这类功能，Codex 内置于 ChatGPT 应用，Claude Code 内置于 Claude 应用，两者都运行在厂商自己的云端。Mobile SSH 与它们全都有重叠——你可以通过 SSH 运行这些智能体，并在它们需要你时收到提醒——但它从另一个方向切入：它首先是一款通用的直连 SSH 客户端，其次才是智能体伴侣。",
    agentAppsRows: [
      { feature: "从手机运行编码智能体",                     mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "支持任意编码智能体（不限单一厂商）",       mobile: "yes", onepilot: "yes",      happy: "Claude Code", omnara: "yes",     chatgpt: "仅 Codex",     claude: "仅 Claude Code" },
      { feature: "在你自己的机器上运行（而非厂商云端）",     mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes",     chatgpt: "no",           claude: "部分" },
      { feature: "直连 SSH——无云端中继",                   mobile: "yes", onepilot: "yes",      happy: "no",          omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "通用 SSH 终端（运行任意命令）",           mobile: "yes", onepilot: "yes",      happy: "no",          omnara: "部分",    chatgpt: "no",           claude: "no" },
      { feature: "SFTP 文件传输",                          mobile: "yes", onepilot: "部分",     happy: "no",          omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "本地端口转发",                            mobile: "yes", onepilot: "yes",      happy: "no",          omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "tmux 会话管理器",                         mobile: "yes", onepilot: "部分",     happy: "no",          omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "支持你自行安装的智能体",                   mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes",     chatgpt: "no",           claude: "no" },
      { feature: "智能体提醒（智能体需要输入时推送）",       mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "一键批准/拒绝智能体提示",                 mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "无需服务器或 SSH 配置",                   mobile: "no",  onepilot: "no",       happy: "部分",        omnara: "部分",    chatgpt: "yes",          claude: "yes" },
      { feature: "Android 和 iOS",                         mobile: "yes", onepilot: "仅 iOS",   happy: "yes",         omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "无需账户",                                mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "无 Pro 付费墙（所有功能免费）",           mobile: "yes", onepilot: "no",       happy: "no",          omnara: "no",      chatgpt: "免费套餐",     claude: "no" },
      { feature: "开源",                                    mobile: "Apache 2.0",  onepilot: "no",       happy: "MIT",         omnara: "Apache",  chatgpt: "no",           claude: "no" }
    ],
    agentAppsNote:
      "原生的 ChatGPT 和 Claude 应用是零配置运行单一厂商智能体的最顺畅方式——无需服务器，只需一个账户——并且它们提供了精致的一键批准/拒绝界面。代价在于：它们只在自己的云端运行自家模型，没有通用终端，没有 SFTP 或隧道，也无法自带机器，而且需付费或需登录账户。Onepilot、Happy 和 Omnara 让智能体保留在你掌控的硬件上（Onepilot 通过直连 SSH；Happy 和 Omnara 通过云端中继，Omnara 还需要账户）。Mobile SSH 直接连接到你自己的服务器，无需账户或厂商中继，可运行任意智能体，同时提供完整的终端、SFTP 和端口转发，并且每一项功能都免费。如今它回应智能体提示的方式与它们一致——「智能体」列表汇总了所有连接上的每一个智能体，每个选项对应一个按钮——区别在于智能体运行在你自己的机器上，回复也经由你自己的 SSH 连接传回。取舍还是一直以来的那一条：服务器由你自备，而且智能体的钩子需要在上面安装一次。",
  },
  privacy: {
    metaTitle: "隐私政策 | Mobile SSH",
    metaDescription:
      "Mobile SSH 的隐私政策，包括本地存储、SSH 数据传输、文件传输、日志以及 Android 和 iOS 上的应用权限。",
    eyebrow: "隐私",
    h1: "隐私政策",
    intro:
      "Mobile SSH 被设计为 Android 和 iOS 上的本地 SSH 客户端。它不需要 Mobile SSH 账户，也不提供 Mobile SSH 云同步服务。",
    sections: [
      {
        heading: "存储在你设备上的信息",
        body: "如果你选择保存应用数据，Mobile SSH 会将其保存在设备本地。在 iOS 上，机密保存在系统 Keychain 中；在 Android 上，机密由一把存放在 Android Keystore、无法导出到设备之外的密钥加密，并且应用已选择退出 Android 云备份。这可能包括保存的服务器档案、用户名、端口、密码、私钥、密钥口令、端口转发规则、最近会话、登录尝试历史、文件传输路径、文件排序偏好、tmux 会话快照与 reattach 提示、应用设置，以及在启用调试录制时的调试日志。"
      },
      {
        heading: "通过网络发送的信息",
        body: "Mobile SSH 仅向你配置并连接的服务器发送 SSH 认证数据。终端的输入/输出、SFTP 文件内容以及本地转发的端口流量与你选择的服务器和远端交换。Mobile SSH 不会将这些数据发送到 Mobile SSH 的分析、广告、遥测或云同步服务。"
      },
      {
        heading: "文件传输与存储访问",
        body: "文件传输功能会浏览本地手机存储与远程 SFTP 目录以便上传与下载文件。Mobile SSH 不会向 Android 申请宽泛的存储权限：你用系统的文件夹选择器授权一个文件夹，应用只能在该文件夹内读写。在 iOS 上，本地文件和照片通过系统的文档与照片选择器访问。"
      },
      {
        heading: "日志与故障排查",
        body: "登录历史与可选的调试日志会在本地保存以便排错，两者在你主动开启之前都处于关闭或为空的状态。Android 的调试录制会记录终端事件、SSH 数据大小、触摸输入诊断、resize 事件以及隧道生命周期事件——开始录制前它会先警告你，这将包含你敲下的每一个按键（密码也在内），并会把存档写入你的「下载」文件夹。iOS 记录的是另一份范围更窄的日志：拨过的地址与各自失败的原因、重连与退避、连接断开、网络变化，以及 tmux 命令及其错误。将任何调试日志或存档分享给支持人员或他人之前，请先检查内容。"
      },
      { heading: "匿名使用分析", body: "为了了解应用的使用情况并加以改进，Mobile SSH 会向 Aptabase（一家注重隐私、代表我们处理数据的分析服务商）发送匿名使用分析。仅限匿名事件（如应用启动和所用功能），以及应用版本、操作系统版本、设备型号和语言。使用会定期重置的随机会话标识符，不与你或你的设备关联。绝不包含你的 SSH 服务器、主机名、用户名、密码、密钥、命令或文件内容。数据通过加密（HTTPS）连接发送。分析默认开启。在 Android 上，你可以随时在「设置」中关闭，关闭后不会发送任何内容；iOS 应用目前还没有这个开关，因此在 iOS 上，只要应用还装着，这些匿名事件就会持续发送。我们打算加上 iOS 的开关——在此之前，本页面如实说明现状。" }
    ],
    permissionsHeading: "权限",
    permissions: [
      { label: "互联网", body: "用于连接 SSH 服务器。" },
      { label: "Wake lock 与 Wi-Fi lock", body: "在 Android 上用于在设备休眠时保持活跃的 SSH 会话。" },
      { label: "前台服务与通知", body: "在 Android 上用于在后台处理活跃连接；在 iOS 上，通知用于智能体提醒。" },
      { label: "文件访问", body: "在 Android 上通过系统选择器按文件夹逐个授权，在 iOS 上通过系统的文档与照片选择器完成。Mobile SSH 在两个平台上都不会申请笼统的存储权限。" }
    ],
    securityHeading: "安全责任",
    securityBody:
      "如果保存凭据或私钥，请使用强锁屏保护设备；仅连接可信的服务器。当前实现使用应用本地存储（以及 iOS Keychain），而非单独的加密云保险库。可选的安全屏幕设置会在机密显示在屏幕上时提供额外保护：在 Android 上，它会阻止截图与屏幕录制，并在最近任务视图中隐藏应用；在 iOS 上，它会遮盖应用切换器的预览并阻止屏幕录制与镜像（iOS 上无法阻止手动截图）。",
    contactHeading: "联系",
    contactBody: "支持联系方式：[mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)。"
  },
  docsIndex: {
    metaTitle: "文档 | Mobile SSH",
    metaDescription: "Android 和 iOS 上 Mobile SSH 的终端用户文档。",
    eyebrow: "用户指南",
    h1: "Mobile SSH 文档",
    intro:
      "将这些页面用作 Mobile SSH 的公开指南，涵盖安装、连接、会话管理、文件传输、端口转发与故障排查。",
    cards: [
      { slug: "getting-started",  title: "快速开始",       text: "安装、打开应用、连接到首个服务器并保存常用主机。" },
      { slug: "terminal",         title: "终端",           text: "面板、拓展按键栏、滚动、复制操作、tmux 行为与键盘设置。" },
      { slug: "file-transfer",    title: "文件传输",       text: "浏览手机与服务器文件，上传、下载、排序，并查看远程文件详情。" },
      { slug: "port-forwarding",  title: "端口转发",       text: "编写本地隧道字符串、转发到 IPv6 目标地址，并让它们在连接时自动建立。" },
      { slug: "troubleshooting",  title: "故障排查",       text: "解决连接、认证、键盘、存储与重连问题。" }
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
    intro: "支持 tmux、端口转发与 SFTP 的多会话 SSH 客户端。",
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
      { name: "JSch (mwiede fork) — Android",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch" },
      { name: "JZlib (bundled in JSch) — Android",   license: "BSD 3-clause" },
      { name: "jBCrypt (bundled in JSch) — Android", license: "ISC" },
      { name: "Ed25519 / Ed448 Java — Android",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java" },
      { name: "StringFog — Android",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog" },
      { name: "SwiftNIO & SwiftNIO SSH — iOS",       license: "Apache 2.0", url: "https://github.com/apple/swift-nio-ssh" },
      { name: "Swift Crypto — iOS",                  license: "Apache 2.0", url: "https://github.com/apple/swift-crypto" }
    ],
    contactHeading: "联系",
    contactBody: "支持联系方式：[mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)。"
  }
};
