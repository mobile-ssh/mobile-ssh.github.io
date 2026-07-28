import type { Dict } from "../types";

export const zh: Dict = {
  meta: {
    siteName: "Mobile SSH",
    languageLabel: "语言",
    languageSwitcher: "切换语言"
  },
  nav: {
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
      { title: "智能体提醒", text: "当 Claude Code、Codex 或其他远程智能体需要你的输入时，立即收到带声音和振动的通知。即使在播放视频时也会通过耳机播放。" },
      { title: "键盘上方的终端键", text: "专用按键栏包含 ESC、TAB、CTRL、ALT、FN、方向键、Home、End、PgUp/PgDn，Android 和 iOS 均可用——终端按键不再与自动更正冲突。" },
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
      { title: "服务器文件夹", text: "将保存的服务器整理到可折叠的分组中。点击分组标题折叠；文件夹结构同步显示在快速连接选择器中。" },
      { title: "智能体提醒", text: "当远程智能体（Claude Code、Codex 等）需要你的输入时，发出带声音和振动的通知。即使在视频通话期间也会通过耳机播放。" },
      { title: "私钥", text: "支持密码或私钥认证。在设备上生成 Ed25519 或 ECDSA 密钥（Android 上还支持 RSA）；导入或粘贴现有密钥。" },
      { title: "SFTP 传输", text: "绑定到活跃 SSH 会话的双面板文件浏览器。将上传和下载放入队列，重命名、删除，并查看远程文件权限。" },
      { title: "端口转发", text: "在服务器档案中保存本地隧道描述——连接时自动打开，也可在连接期间动态添加/移除。" },
      { title: "重连流程", text: "Keepalive 与指数退避重连使会话在锁屏和漫游期间保持存活——Android 上由前台服务支撑，iOS 上由 tmux 自动附加接续。" },
      { title: "备份与恢复", text: "将保存的服务器和凭据导出为加密备份文件；以合并或替换方式导入，轻松在设备间迁移——备份可在 Android 和 iOS 之间互通。" },
      { title: "Eternal Terminal", text: "通过 Eternal Terminal（ET）连接，会话可在网络中断、休眠和 IP 变化后存活——还可选择通过 SSH 自动部署 etserver。" },
      { title: "Tmux 管理器", text: "列出并切换 tmux 会话、窗口与窗格——附加、重命名、创建、拆分、缩放或结束。可按名称或日期排序；🔔 标记等待输入的智能体。" },
      { title: "插件", text: "浏览、安装并运行插件来扩展 Mobile SSH。插件从公开目录按需下载，经 SHA-256 校验后存入应用私有存储。" }
    ],
    multiHead: "一屏多个活跃 Shell",
    multiP1:
      "终端视图可在网格中容纳多个活跃的 SSH 会话。点击面板进行输入，使用拓展按键栏进行终端控制，捏合手势调整文字大小，双击面板进入全屏聚焦。",
    multiP2:
      "会话历史与活跃会话恢复，帮助你在切换应用、锁屏或系统回收应用后回到当前的工作。",
    multiAlt:
      "手机上的 Mobile SSH，以左右分屏视图并排显示两个活跃的 SSH 终端会话。",
    sftpHead: "终端不够用时的 SFTP",
    sftpBody:
      "从已连接的会话打开文件传输，浏览手机存储与远程目录；将上传与下载放入队列，对文件排序，按主机记忆最近路径，并在移动文件前检查远程文件权限。",
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
    videoIntro: "两个平台上的简短演示。Android：tmux 窗口切换、SFTP 文件传输、安装并与 AI Chat 插件对话、Eternal Terminal，以及一键直达的最近会话。iOS：分组的已保存服务器、带 tmux 自动附加的连接选项、实时终端会话，以及 Tmux 管理器。",
    videoAlt: "Android 演示：tmux 窗口切换、SFTP 文件下载、安装并使用 AI Chat 插件、Eternal Terminal 传输，以及最近会话",
    videoIosAlt: "iOS 演示：分组的已保存服务器、带 tmux 自动附加与端口转发的连接选项、实时 SSH 终端会话，以及 Tmux 管理器切换窗口",
    lightboxClose: "关闭",
    lightboxPrev: "上一张",
    lightboxNext: "下一张",
    betaJoin: "加入公测",
    betaOr: "或发送邮件至",
    betaRequest: "申请私人测试资格",
    galleryAlts: [
      "手机上的 Mobile SSH 起始界面，包含服务器、凭据、日志、设置、调试与关于等磁贴。",
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
      "手机上的 Mobile SSH 起始界面，显示用于一键恢复 SSH 连接的 Recent Sessions 列表。",
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
      "iPhone 上的 Mobile SSH 连接界面，带「最近」区域，一键即可重新连接。"
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
          "Android 8.0 或更高版本——从 Google Play 安装",
          "iPhone 和 iPad 上的 iOS 16 或更高版本——在 TestFlight 上加入公测",
          "加密备份可互通：在一个平台导出，在另一个平台导入"
        ]
      },
      {
        title: "连接",
        items: [
          "密码认证与私钥认证",
          "Android 上支持 Ed25519、RSA、ECDSA 与 DSA 私钥；iOS 上支持 Ed25519 与 ECDSA（P-256/384/521）",
          "保存的服务器档案，包含主机、端口、用户名、凭据、私钥与可选的隧道描述——克隆某个档案即可将其设置复制到新服务器",
          "按名称或主机搜索已保存的服务器",
          "搜索优先的添加会话流程：从专用搜索页面选择已保存的服务器，一键连接",
          "每个已保存的服务器可设置多个地址，用于 LAN/VPN 漫游——按顺序拨号，优先尝试上次成功的地址，网络变化时自动重连",
          "可在服务器配置中选择的可复用凭据记录",
          "用于重新连接常见服务器集的最近会话历史",
          "成功与失败的登录日志，并记录实际拨通的地址",
          "Teleport 代理传输（测试版，Android）：使用用户名、密码和 OTP 登录，或导入 Teleport 配置或身份文件，浏览集群节点，然后通过代理隧道运行终端、SFTP、tmux 与插件"
        ]
      },
      {
        title: "终端",
        items: [
          "VT100/xterm-256color 风格的终端行为，支持 24-bit 真彩色与斜体",
          "5000 行的回滚缓冲，在 Android 和 iOS 上大小可配置",
          "在终端中查找——搜索回滚缓冲与可见屏幕，并在匹配项之间跳转（Android 与 iOS）",
          "Shell 集成（OSC 133）：在提示符之间跳转、复制某条命令的输出，并在长时间运行的命令完成时收到提醒（Android 与 iOS）",
          "通过 Kitty graphics 协议在终端中内嵌显示图像（Android 与 iOS）",
          "用于 ESC、TAB、CTRL、Shift、方向键、Home、End、PgUp、PgDn 与键盘切换的拓展按键栏——在 Android 和 iOS 上可自定义：添加、移除、重新排序，并定义你自己的转义序列按键，还可恢复默认",
          "点击聚焦、可选的「点击显示键盘」设置、复制与全部复制操作",
          "捏合缩放文字大小并触发远程终端 resize",
          "面板双击全屏",
          "终端文本选择：复制、分享与全选操作——长按选中单词，复制后仍保留所选内容，方便分享或再次复制",
          "OSC 52 剪贴板——将远程 tmux 或 vim 会话中的文本直接复制到手机剪贴板",
          "原生直通键盘输入——自动更正不会再与 shell 冲突；软键盘语音听写仍然可用",
          "Android 和 iOS 上支持外接与 Bluetooth 键盘，包括方向键、功能键以及 Ctrl/Alt 组合键",
          "括号粘贴（bracketed paste），使多行剪贴板内容不会被自动执行",
          "内置的 Nerd Font 可在 Android 和 iOS 上渲染 powerline、starship、devicon 与 Material Design 图标字形，否则系统字体只会将其显示为空白方框",
          "宽 CJK、emoji 与组合字符在 Android 与 iOS 上都能被正确测量和绘制，包括字素簇（grapheme cluster）与零宽连接符（zero-width joiner）",
          "在 Android 和 iOS 上可配置终端字体（系统等宽字体、JetBrains Mono 或 Source Code Pro）与 ANSI 配色方案（Solarized、Gruvbox、Dracula、Nord），并实时应用到已打开的面板"
        ]
      },
      {
        title: "会话",
        items: [
          "最多八个并发 SSH 会话",
          "活跃会话的网格布局",
          "后台与锁屏期间的稳定性：Android 上使用前台服务；iOS 上通过 tmux 自动附加重新接回你的 shell",
          "Keepalive 与带指数退避的重连尝试",
          "起始界面的「活跃会话」入口；持续通知列出会话——点击即可打开",
          "tmux 命令跟踪与中断作业的 reattach 提示",
          "智能体提醒：当远程智能体（Claude Code、Codex 等）需要输入时发出通知（可选声音和振动）——通过 OSC 9/777 通知携带智能体自己的标题和消息；播放视频时也会通过耳机播放",
          "Eternal Terminal（ET）传输，使会话在网络中断、休眠和 IP 变化后仍能存活，可选择通过 SSH 自动部署 etserver",
          "Tmux 管理器：列出并切换会话、窗口与窗格——附加、重命名、创建、拆分、缩放或结束，支持按名称/日期排序，🔔 标记等待输入的智能体"
        ]
      },
      {
        title: "文件与隧道",
        items: [
          "本地与远程双面板 SFTP 浏览器",
          "上传与下载的队列操作，包括在 Android 上将其他应用中的任意类型文件直接分享到远程文件夹",
          "在手机与远程主机之间递归上传和下载文件夹",
          "远程重命名、删除、创建、编辑与详情",
          "在 Android 上直接从本地面板用其他应用打开已下载的文件",
          "按名称或日期排序，并按主机持久化",
          "随服务器档案保存的本地端口转发",
          "已连接会话的运行时隧道添加/移除视图",
          "整个应用与文件浏览器都跟随系统的浅色或深色主题——在 Android 上可选择「跟随系统」、「浅色」或「深色」"
        ]
      },
      {
        title: "本地化",
        items: [
          "应用 UI 翻译：阿拉伯语、孟加拉语、中文（简体与繁体）、英语、法语、德语、印地语、印度尼西亚语、日语、马拉地语、尼日利亚皮钦语、葡萄牙语、俄语、西班牙语、泰米尔语、泰卢固语、土耳其语、乌尔都语",
          "跟随 Android 和 iOS 的系统语言；无需在应用内单独选择"
        ]
      },
      {
        title: "密钥与备份",
        items: [
          "在设备上生成新的 Ed25519 或 ECDSA 密钥（Android 上还支持 RSA），可选密码短语",
          "复制、分享或保存生成的公钥，以添加到服务器的 authorized_keys",
          "将已保存的服务器和凭据导出为备份文件",
          "可选密码短语会加密备份；导入时可合并或替换",
          "未加密的备份以明文存储密码和密钥——请保护或删除该文件"
        ]
      },
      {
        title: "安全",
        items: [
          "安全屏幕：在 Android 上，阻止截图与屏幕录制，并在最近任务缩略图中隐藏应用；在 iOS 上，遮盖应用切换器的预览并阻止屏幕录制与镜像（iOS 上无法阻止手动截图）——在密码、密钥或令牌显示在屏幕上时可选择开启的设置",
          "保存的服务器、凭据和密钥都留在设备上——机密保存在 Android Keystore 和 iOS Keychain 中，没有云端账户或同步",
          "仅收集匿名、可退出的使用分析——绝不包含你的服务器、凭据、命令或文件内容"
        ]
      },
      {
        title: "插件",
        items: [
          "浏览、安装并运行插件来扩展 Mobile SSH",
          "插件从公开目录按需下载，经 SHA-256 校验后存入应用私有存储",
          "需要时可配置自定义或私有的目录源"
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
      { category: "连接", feature: "最近会话历史",                    mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "连接", feature: "登录日志",                        mobile: "yes",    termux: "no",           termius: "no" },
      { category: "连接", feature: "Teleport 代理传输（测试版）",      mobile: "Android", termux: "no",          termius: "no" },
      { category: "终端", feature: "SSH 终端",                        mobile: "yes",    termux: "通过 OpenSSH",  termius: "yes" },
      { category: "终端", feature: "xterm-256color 仿真",             mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "终端", feature: "5000 行回滚缓冲",                 mobile: "yes",    termux: "可配置",       termius: "yes" },
      { category: "终端", feature: "终端内搜索（回滚缓冲）",          mobile: "yes",    termux: "no",           termius: "no" },
      { category: "终端", feature: "拓展按键栏（ESC/TAB/CTRL/…）",   mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "终端", feature: "捏合缩放文字大小",                mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "终端", feature: "双击面板全屏",                    mobile: "yes",    termux: "no",           termius: "no" },
      { category: "终端", feature: "终端输出中的可点击 URL",          mobile: "yes",    termux: "部分",         termius: "yes" },
      { category: "终端", feature: "文本选择：复制/分享/全选",        mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "终端", feature: "硬件 / Bluetooth 键盘支持",       mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "终端", feature: "Shell 集成（OSC 133）",            mobile: "yes",    termux: "no",           termius: "no" },
      { category: "终端", feature: "内嵌图像（Kitty graphics）",       mobile: "yes",    termux: "no",           termius: "no" },
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
      { category: "隧道", feature: "运行时添加/移除隧道",             mobile: "Android", termux: "no",          termius: "yes" },
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
      { feature: "智能体提醒（智能体需要输入时推送）",       mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "一键批准/拒绝智能体提示",                 mobile: "no",  onepilot: "yes",      happy: "yes",         omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "无需服务器或 SSH 配置",                   mobile: "no",  onepilot: "no",       happy: "部分",        omnara: "部分",    chatgpt: "yes",          claude: "yes" },
      { feature: "Android 和 iOS",                         mobile: "yes", onepilot: "仅 iOS",   happy: "yes",         omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "无需账户",                                mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "无 Pro 付费墙（所有功能免费）",           mobile: "yes", onepilot: "no",       happy: "no",          omnara: "no",      chatgpt: "免费套餐",     claude: "no" },
      { feature: "开源",                                    mobile: "Apache 2.0",  onepilot: "no",       happy: "MIT",         omnara: "Apache",  chatgpt: "no",           claude: "no" }
    ],
    agentAppsNote:
      "原生的 ChatGPT 和 Claude 应用是零配置运行单一厂商智能体的最顺畅方式——无需服务器，只需一个账户——并且它们提供了精致的一键批准/拒绝界面。代价在于：它们只在自己的云端运行自家模型，没有通用终端，没有 SFTP 或隧道，也无法自带机器，而且需付费或需登录账户。Onepilot、Happy 和 Omnara 让智能体保留在你掌控的硬件上（Onepilot 通过直连 SSH；Happy 和 Omnara 通过云端中继，Omnara 还需要账户）。Mobile SSH 直接连接到你自己的服务器，无需账户或厂商中继，可运行任意智能体，同时提供完整的终端、SFTP 和端口转发，并且每一项功能都免费——取舍在于你需要在终端里回应智能体提示，而不是在专用的批准/拒绝界面上。",
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
        body: "如果你选择保存应用数据，Mobile SSH 会将其保存在设备本地——在 iOS 上，机密保存在系统 Keychain 中。这可能包括保存的服务器档案、用户名、端口、密码、私钥、密钥口令、端口转发规则、最近会话、登录尝试历史、文件传输路径、文件排序偏好、tmux reattach 提示、应用设置，以及在启用调试录制时的调试日志。"
      },
      {
        heading: "通过网络发送的信息",
        body: "Mobile SSH 仅向你配置并连接的服务器发送 SSH 认证数据。终端的输入/输出、SFTP 文件内容以及本地转发的端口流量与你选择的服务器和远端交换。Mobile SSH 不会将这些数据发送到 Mobile SSH 的分析、广告、遥测或云同步服务。"
      },
      {
        heading: "文件传输与存储访问",
        body: "文件传输功能会浏览本地手机存储与远程 SFTP 目录以便上传与下载文件。在需要的 Android 版本上，应用可能请求存储访问，以便本地文件浏览器能够读取与写入选定的文件。在 iOS 上，本地文件和照片通过系统的文档与照片选择器访问。"
      },
      {
        heading: "日志与故障排查",
        body: "登录历史与可选的调试日志会在本地保存以便排错。调试日志可能包括终端事件、SSH 数据大小、触摸输入诊断、resize 事件以及隧道生命周期事件。将调试存档分享给支持人员或他人之前，请先检查内容。"
      },
      { heading: "匿名使用分析", body: "为了了解应用的使用情况并加以改进，Mobile SSH 会向 Aptabase（一家注重隐私、代表我们处理数据的分析服务商）发送匿名使用分析。仅限匿名事件（如应用启动和所用功能），以及应用版本、操作系统版本、设备型号和语言。使用会定期重置的随机会话标识符，不与你或你的设备关联。绝不包含你的 SSH 服务器、主机名、用户名、密码、密钥、命令或文件内容。数据通过加密（HTTPS）连接发送。分析默认开启，可随时在「设置」中关闭；关闭后不会发送任何内容。" }
    ],
    permissionsHeading: "权限",
    permissions: [
      { label: "互联网", body: "用于连接 SSH 服务器。" },
      { label: "Wake lock 与 Wi-Fi lock", body: "在 Android 上用于在设备休眠时保持活跃的 SSH 会话。" },
      { label: "前台服务与通知", body: "在 Android 上用于在后台处理活跃连接；在 iOS 上，通知用于智能体提醒。" },
      { label: "存储访问", body: "用于文件传输与密钥导入流程；在 iOS 上通过系统的文档与照片选择器完成。" }
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
      { slug: "port-forwarding",  title: "端口转发",       text: "配置本地隧道字符串并在连接期间管理活跃转发。" },
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
