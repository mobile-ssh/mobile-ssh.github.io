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
    tagline: "为 Android 设备打造的专注 SSH、SFTP 与终端工作流。",
    documentation: "文档",
    comparison: "对比",
    privacy: "隐私",
    contact: "联系"
  },
  home: {
    metaTitle: "Mobile SSH — Android SSH 客户端",
    metaDescription:
      "Mobile SSH 是一款专注的 Android SSH 客户端，支持多会话终端、SFTP 传输、私钥认证、端口转发以及 tmux 友好的工作流。",
    eyebrow: "Android SSH 客户端",
    h1: "Mobile SSH",
    intro:
      "一款专注的 Android SSH 客户端：多会话终端、私钥认证、SFTP 文件传输、本地端口转发，以及为手机和平板量身打造的 tmux 友好控制。",
    versionLine: "支持 {count} 种语言 · 版本 {version}",
    ctaDocs: "阅读文档",
    ctaPlay: "即将上架 Google Play",
    sectionAHead: "围绕 Android 上的 SSH 工作而设计",
    sectionAIntro:
      "Mobile SSH 缩短了常见的运维路径：保存服务器、连接、保持会话存活、必要时移动文件，并快速回到正在使用的终端。",
    features: [
      { title: "SSH 终端", text: "VT100/xterm-256color 终端仿真，支持彩色、光标键、回滚、复制以及 Android 键盘。" },
      { title: "多会话网格", text: "同时运行多达八个会话；点击切换面板，双击进入面板的全屏模式。" },
      { title: "私钥", text: "支持密码或导入/粘贴的私钥，包括应用支持的 Ed25519、RSA、ECDSA 与 DSA。" },
      { title: "SFTP 传输", text: "通过本地与远程浏览面板，在手机存储与远程服务器之间传输文件。" },
      { title: "端口转发", text: "在服务器档案中保存本地隧道描述，或在已连接的会话中动态添加隧道。" },
      { title: "重连流程", text: "前台服务、wake lock、keepalive 与重连尝试帮助会话在移动网络变化中存活。" },
      { title: "终端选择", text: "选择终端文本进行复制、分享或全选可见缓冲；复制内容会进入 Android 剪贴板。" },
      { title: "对移动键盘友好", text: "Gboard 候选词与语音输入与拓展按键栏并存；输入文本会在词界之前被缓存。" }
    ],
    multiHead: "一屏多个活跃 Shell",
    multiP1:
      "终端视图可在网格中容纳多个活跃的 SSH 会话。点击面板进行输入，使用拓展按键栏进行终端控制，捏合手势调整文字大小，双击面板进入全屏聚焦。",
    multiP2:
      "会话历史与活跃会话恢复，帮助你在切换应用、锁屏或 Android Activity 重建后回到当前的工作。",
    multiAlt:
      "10 英寸 Android 平板上的 Mobile SSH，并排显示四个活跃的 SSH 终端面板。",
    sftpHead: "终端不够用时的 SFTP",
    sftpBody:
      "从已连接的会话打开文件传输，浏览手机存储与远程目录；将上传与下载放入队列，对文件排序，按主机记忆最近路径，并在移动文件前检查远程文件权限。",
    sftpCtaGuide: "文件传输指南",
    sftpCtaAll: "全部功能",
    sftpAlt: "手机上的 Mobile SSH 文件传输界面，包含本地与远程面板。",
    galleryHead: "在真实设备上的实际效果",
    galleryIntro:
      "来自 Android 手机的截图——你将用于添加服务器、在终端中工作、运行多个会话以及通过 SFTP 移动文件的相同界面。",
    galleryAlts: [
      "手机上的 Mobile SSH 起始界面，包含服务器、凭据、日志、设置、调试与关于等磁贴。",
      "手机上的「添加服务器」对话框，显示主机、端口、凭据、私钥与端口转发字段。",
      "手机上的单会话 SSH 终端，底部有拓展按键栏。",
      "手机上两个堆叠的 SSH 会话，活跃面板被高亮。",
      "手机上的 SFTP 文件传输界面，包含「我的手机」与「远程主机」面板。",
      "手机上的「关于」对话框，显示版本、作者、许可与网站字段。"
    ],
    compareHead: "在 Termux 与 Termius 之外的定位",
    compareIntro:
      "Mobile SSH 有意保持范围狭窄：它既不是完整的 Linux 环境，也不是跨平台的团队保险库。它是一款本地的 Android SSH/SFTP 工具，专注于移动用户最常用的会话操作。",
    compareGuideTitle: "对比指南",
    compareGuideText: "在 Android 设备上，何时选择 Mobile SSH、Termux 或 Termius。",
    privacyTitle: "隐私政策",
    privacyText: "查看哪些连接数据保存在本地，哪些会发往你的服务器。"
  },
  features: {
    metaTitle: "功能 | Mobile SSH",
    metaDescription:
      "Mobile SSH 在 Android 上的核心功能：SSH、终端、SFTP、私钥、tmux 与端口转发工作流。",
    eyebrow: "功能清单",
    h1: "Mobile SSH 功能",
    intro:
      "Mobile SSH 为 Android 上直接进行 SSH 操作而构建：打开终端、保持运行、移动文件、保存服务器、并在被中断后快速恢复。",
    groups: [
      {
        title: "连接",
        items: [
          "密码认证与私钥认证",
          "当前实现支持的 Ed25519、RSA、ECDSA 与 DSA 私钥",
          "保存的服务器档案，包含主机、端口、用户、凭据、私钥与可选的隧道描述",
          "可在服务器配置中选择的可复用凭据记录",
          "用于重新连接常见服务器集的最近会话历史",
          "成功与失败的登录日志"
        ]
      },
      {
        title: "终端",
        items: [
          "VT100/xterm-256color 风格的终端行为",
          "5000 行的回滚缓冲",
          "用于 ESC、TAB、CTRL、Shift、方向键、Home、End、PgUp、PgDn 与键盘切换的拓展按键栏",
          "点击聚焦、可选的「点击显示键盘」、复制与全部复制",
          "捏合缩放文字大小并触发远程终端 resize",
          "面板双击全屏",
          "终端文本选择：复制、分享与全选",
          "支持 Gboard 候选词／自动更正与语音输入，带终端输入缓存"
        ]
      },
      {
        title: "会话",
        items: [
          "最多八个并发 SSH 会话",
          "活跃会话的网格布局",
          "前台服务，提升后台与锁屏期间的稳定性",
          "Keepalive 与带指数退避的重连尝试",
          "起始界面的「活跃会话」入口",
          "tmux 命令跟踪与中断作业的 reattach 提示"
        ]
      },
      {
        title: "文件与隧道",
        items: [
          "本地与远程双面板 SFTP 浏览器",
          "上传与下载的队列操作",
          "远程重命名、删除、创建、编辑与详情",
          "按名称或日期排序，并按主机持久化",
          "随服务器档案保存的本地端口转发",
          "已连接会话的运行时隧道添加／移除视图"
        ]
      },
      {
        title: "本地化",
        items: [
          "应用 UI 翻译：阿拉伯语、孟加拉语、中文（简体与繁体）、英语、法语、德语、印地语、印度尼西亚语、日语、马拉地语、尼日利亚皮钦语、葡萄牙语、俄语、西班牙语、泰米尔语、泰卢固语、土耳其语、乌尔都语",
          "跟随 Android 系统语言；无需在应用内单独选择"
        ]
      }
    ],
    security:
      "安全提示：当前应用将保存的服务器与凭据记录存储在 Android 设备本地，不提供云同步。请使用强锁屏保护设备，避免在共享设备上保存凭据。"
  },
  compare: {
    metaTitle: "Android 上的 Mobile SSH、Termux 与 Termius",
    metaDescription:
      "针对 Android SSH 工作流的 Mobile SSH、Termux 与 Termius 的均衡对比。",
    eyebrow: "Android SSH 选择",
    h1: "Mobile SSH、Termux 与 Termius",
    intro:
      "这些工具围绕 SSH 有重叠，但目标不同。Mobile SSH 是专注的 Android SSH/SFTP 客户端，Termux 是 Linux 环境，Termius 是带账户驱动生产力功能的跨平台 SSH 客户端。",
    columns: {
      need: "需求",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "主要定位",
        mobileSsh: "面向 Android 的专用 SSH、SFTP、本地隧道与终端客户端。",
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
        need: "Android 终端控制",
        mobileSsh: "内置拓展按键栏、网格会话、面板全屏、捏合缩放、带复制／分享的文本选择、Gboard 候选词、语音输入与 tmux 友好滚动。",
        termux: "强大的终端环境；行为取决于已安装的工具与配置。",
        termius: "移动键盘扩展、手势、标签页、自动补全、片段与打磨过的终端 UX。"
      },
      {
        need: "文件传输",
        mobileSsh: "绑定到活跃 SSH 会话的内置双面板 SFTP 传输。",
        termux: "使用 scp、sftp、rsync 等命令行工具或已安装的文件工具。",
        termius: "内置 SFTP 以及主机／密钥管理功能。"
      },
      {
        need: "多会话工作",
        mobileSsh: "在 Android 网格中同时运行最多八个 SSH 会话。",
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
        mobileSsh: "想要一款简单的 Android 应用，用来连接服务器、传输文件并保持会话存活。",
        termux: "想要在 Android 上拥有完整的命令行环境，并乐于自行安装与配置软件包。",
        termius: "想要跨设备同步、精致的生产力功能、保险库与协作。"
      }
    ],
    cards: [
      {
        title: "何时选择 Mobile SSH",
        body: "你希望直接从 Android 进行 SSH 访问，而不必搭建完整的 Linux 环境或采用云端同步的账户模型。尤其适合保存服务器、SFTP、tmux 会话以及快速的本地隧道工作流。"
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
    sources:
      "出处：Termux 在 [termux.dev](https://termux.dev/en/) 自称是带 APT 包与 OpenSSH 支持的 Android 终端模拟器与 Linux 环境。Termius 在其 [Android 页面](https://www.termius.com/free-ssh-client-for-android) 与 [保险库文档](https://termius.com/documentation/set-up-vaults) 中描述了 SSH、SFTP、Mosh、Telnet、Serial、键盘扩展、SFTP、加密保险库与密钥管理。"
  },
  privacy: {
    metaTitle: "隐私政策 | Mobile SSH",
    metaDescription:
      "Mobile SSH 的隐私政策，包括本地存储、SSH 数据传输、文件传输、日志以及 Android 权限。",
    eyebrow: "隐私",
    h1: "隐私政策",
    intro:
      "Mobile SSH 被设计为本地的 Android SSH 客户端。它不需要 Mobile SSH 账户，也不提供 Mobile SSH 云同步服务。",
    sections: [
      {
        heading: "存储在你设备上的信息",
        body: "如果你选择保存应用数据，Mobile SSH 会将其本地保存在 Android 设备上。这可能包括保存的服务器档案、用户名、端口、密码、私钥、密钥口令、端口转发规则、最近会话、登录尝试历史、文件传输路径、文件排序偏好、tmux reattach 提示、应用设置，以及在启用调试录制时的调试日志。"
      },
      {
        heading: "通过网络发送的信息",
        body: "Mobile SSH 仅向你配置并连接的服务器发送 SSH 认证数据。终端的输入/输出、SFTP 文件内容以及本地转发的端口流量与你选择的服务器和远端交换。Mobile SSH 不会将这些数据发送到 Mobile SSH 的分析、广告、遥测或云同步服务。"
      },
      {
        heading: "文件传输与存储访问",
        body: "文件传输功能会浏览本地手机存储与远程 SFTP 目录以便上传与下载文件。在需要的 Android 版本上，应用可能请求存储访问，以便本地文件浏览器能够读取与写入选定的文件。"
      },
      {
        heading: "日志与故障排查",
        body: "登录历史与可选的调试日志会在本地保存以便排错。调试日志可能包括终端事件、SSH 数据大小、触摸输入诊断、resize 事件以及隧道生命周期事件。将调试存档分享给支持人员或他人之前，请先检查内容。"
      }
    ],
    permissionsHeading: "权限",
    permissions: [
      { label: "互联网", body: "用于连接 SSH 服务器。" },
      { label: "Wake lock 与 Wi-Fi lock", body: "用于在设备休眠时保持活跃的 SSH 会话。" },
      { label: "前台服务与通知", body: "用于在后台处理活跃连接。" },
      { label: "存储访问", body: "用于文件传输与密钥导入流程。" }
    ],
    securityHeading: "安全责任",
    securityBody:
      "如果保存凭据或私钥，请使用强锁屏保护 Android 设备；仅连接可信的服务器。当前实现使用应用本地存储，而非单独的加密云保险库。",
    contactHeading: "联系",
    contactBody: "支持联系方式：[mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)。"
  },
  docsIndex: {
    metaTitle: "文档 | Mobile SSH",
    metaDescription: "Android 上 Mobile SSH 的终端用户文档。",
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
    metaDescription: "关于 Mobile SSH：Android SSH 客户端的版本、作者、许可证以及开源声明。",
    eyebrow: "关于",
    h1: "关于 Mobile SSH",
    intro: "支持 tmux、端口转发与 SFTP 的多会话 SSH 客户端。",
    appHeading: "关于应用",
    versionLabel: "版本",
    authorLabel: "作者",
    authorValue: "Dmitry Kozlov",
    licenseLabel: "许可证",
    licenseValue: "MIT",
    websiteLabel: "网站",
    privacyLabel: "隐私政策",
    privacyLinkText: "隐私政策",
    noticesHeading: "开源声明",
    noticesIntro: "Mobile SSH 基于以下开源库构建，每一个均按其相应许可证使用。",
    notices: [
      { name: "JSch (mwiede fork)",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch" },
      { name: "JZlib (bundled in JSch)",   license: "BSD 3-clause" },
      { name: "jBCrypt (bundled in JSch)", license: "ISC" },
      { name: "Ed25519 / Ed448 Java",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java" },
      { name: "StringFog",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog" }
    ],
    contactHeading: "联系",
    contactBody: "支持联系方式：[mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)。"
  }
};
