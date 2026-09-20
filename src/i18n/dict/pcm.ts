import type { Dict } from "../types";

export const pcm: Dict = {
  meta: {
    siteName: "Mobile SSH",
    languageLabel: "Language",
    languageSwitcher: "Change language"
  },
  nav: {
    blog: "Blog",
    home: "Home",
    features: "Features",
    docs: "Docs",
    compare: "Compare",
    about: "About",
    privacy: "Privacy"
  },
  footer: {
    discordCommunity: "Mobile SSH community wey dey Discord",
    beta: "Join di beta",
    tagline: "Focused SSH, SFTP and terminal workflow wey dey work on Android and iOS.",
    documentation: "Documentation",
    comparison: "Comparison",
    privacy: "Privacy",
    contact: "Contact",
    feedback: "Feedback"
  },
  home: {
    metaTitle: "Mobile SSH — SSH client for Android & iOS",
    metaDescription:
      "Mobile SSH for Android and iOS: SSH terminals, jump hosts, tmux, herdr, Zellij, SFTP, VNC desktop and backup. Android still get VPN clients and security keys.",
    eyebrow: "SSH client for Android & iOS",
    h1: "Mobile SSH",
    intro:
      "SSH terminals, tmux, herdr and Zellij managers, SFTP, VNC desktop, jump hosts and local tunnels — all built for phone and tablet. Eternal Terminal dey keep remote shells alive when network cut. Android still get VPN clients and login with USB/NFC security key.",
    versionLine: "Dey for {count} language · Android {version} · iOS {iosVersion} beta",
    ctaDocs: "Read di docs",
    ctaPlay: "Get am for Google Play",
    ctaIos: "Get di iOS beta for TestFlight",
    platformAndroid: "Android",
    platformIos: "iOS — iPhone & iPad",
    advantagesHead: "Why Mobile SSH",
    advantagesIntro: "We build am wit di tins wey mobile SSH apps dey miss for mind.",
    advantages: [
      { title: "No Pro level, no ads", text: "All di features dey for di same app. No paywall wey go hide important work behind Pro upgrade, no ad banner for di terminal." },
      { title: "Your data dey for your phone", text: "Saved servers, credentials and keys dey stay for di device. No cloud account; nothing wey dem fit shut down." },
      { title: "Saved hosts, search to connect", text: "Add host once, then search and tap to connect — wit key, port, and any tunnel wey you don set." },
      { title: "Agent alerts, and one tap to answer am", text: "Sabi di moment wey Claude Code, Codex, or anoda agent need you: di pane go turn amber, badge for di toolbar dey count who dey wait, and di Agents list dey answer di prompt wit one tap — you no go type anything inside di terminal." },
      { title: "Terminal keys for top di keyboard", text: "Row of thirteen key — ESC, TAB, CTRL, arrows, Home, End, PgUp, PgDn — wey dey wrap go second row instead of scroll, so nothing dey hide comot for screen. Add F1–F12, Ctrl combos, or your own escape sequences from preset palette." },
      { title: "Port forwarding witout command", text: "Tunnels dey attach to di server profile and dey come up automatic wen you connect." },
      { title: "E dey survive lock and roaming", text: "Give one saved server plenty address — home LAN IP and VPN IP — and Mobile SSH go dial whichever one answer, e go first try di last one wey work, and e go reconnect di moment di network change. For Android, foreground service and wake locks dey hold di shell across screen-off; for iOS, auto-reconnect plus tmux auto-attach go carry you back where you stop." },
      { title: "Eternal Terminal", text: "Optional ET transport dey keep di remote shell alive across network drop, sleep, and IP change. Di host no get etserver? Mobile SSH fit install am over SSH for you." },
      { title: "Extend am wit plugins", text: "Browse public catalog and install plugins as you need dem to add new workflow. Each plugin dey download and SHA-256 verified enter app-private storage." }
    ],
    sectionAHead: "Make for mobile SSH work",
    sectionAIntro:
      "Mobile SSH dey keep di admin road short: save server, connect, keep session dey alive, move file wen you need am, and quick return to live terminal.",
    features: [
      { title: "SSH terminal", text: "xterm-256color terminal wit 24-bit true color, italics, in-terminal search, OSC 133 shell integration, and pinch-to-zoom text sizing — plus font and color scheme wey you fit configure and Nerd Font powerline/icon glyphs for Android and iOS." },
      { title: "Multi-session grid", text: "Up to eight SSH session for resizable grid — tap pane to focus, double-tap for fullscreen, pinch to resize text." },
      { title: "Clickable links", text: "URLs wey dey inside di terminal dey underline and go open for browser wit one tap — no need to copy or switch app." },
      { title: "Server folders and name", text: "Arrange saved servers for collapsible groups, and give server name wey go show instead of im address. Di address dey come back wenever name go confuse person, so di rows no dey blur together." },
      { title: "Agent alerts", text: "Agents dey report demsef through di terminal, so di app sabi which one block and na for wetin. Answer from di Agents list wit one tap; alerts dey replace demsef instead of stack, and wen you tap one e dey open di pane wey ring." },
      { title: "Private keys", text: "Use password or private key, and create Ed25519 or ECDSA key for your device (Android fit create RSA too). Android still support FIDO2 security keys through USB/NFC and SSH agent forwarding wey you fit enable for each server." },
      { title: "SFTP transfer", text: "Dual-pane file browser wey dey tie to active SSH session. Queue uploads and downloads, rename, delete, and check remote permissions." },
      { title: "Port forwarding", text: "Save local tunnel spec wit server profile and dem dey open automatic wen you connect — including after reconnect on new network, witout you rebuilding dem by hand." },
      { title: "Reconnect workflow", text: "Change network and di sessions go re-dial one time instead of waiting make di dead route timeout, and session wey dey backoff go wake di moment usable network show. For iOS, wen server quietly stop to answer, di app go notice am and reconnect." },
      { title: "Backup & restore", text: "Back up servers, credentials and app settings; you fit encrypt am with passphrase and preview Merge or Replace. Android backup include VPN profiles. Current Android and iOS backups use di same format, with platform settings kept where dem support am." },
      { title: "Eternal Terminal", text: "Connect over Eternal Terminal (ET) for sessions wey dey survive network drop, sleep, and IP change — wit optional automatic etserver setup over SSH." },
      { title: "Multiplexer managers", text: "Attach, rename, create, split, zoom or kill sessions with tmux, herdr and Zellij managers for both platforms. One multiplexer toolbar button opens di managers wey dey available; saved servers let you choose wetin go attach when you connect." },
      { title: "Plugins", text: "Browse, search and filter plugins by category, then install di workflows wey you need. Downloads pass SHA-256 check before dem enter storage wey na only di app fit access." },
      {
        "title": "Server identity and jump hosts",
        "text": "Reach servers through saved bastions for either platform. Host-key checks happen before login and block keys wey change. Android fit pin new keys automatically or ask first; iOS asks you to confirm unknown keys."
      },
      {
        "title": "Remote desktops",
        "text": "Open VNC desktop through SSH for Android and iOS, with touch controls, keyboard input, clipboard and remote screen sizing if di server supports am."
      },
      {
        "title": "VPN clients for Android",
        "text": "Manage SSH VPN, local SOCKS5 proxy, WireGuard, Shadowsocks and OpenVPN from home screen. Choose profile, start routing, then use Mobile SSH VPN Quick Settings tile to stop or resume am."
      }
    ],
    multiHead: "One screen, plenty live shell",
    multiP1:
      "Terminal view fit hold plenty active SSH session for grid. Pick pane to type, use di extra key row for terminal controls, pinch to adjust text size, double-tap pane wen you need fullscreen focus.",
    multiP2:
      "Di home screen dey answer di question \"wetin I fit enter back?\" — di connections wey dey live right now, and di tmux sessions wey dey wait for your saved servers, wey e rebuild from stored snapshot so dem dey show even wen no network dey at all.",
    multiAlt:
      "Mobile SSH for phone wey dey show two live SSH terminal session for side-by-side split view.",
    sftpHead: "SFTP wen terminal no reach",
    sftpBody:
      "Browse local and remote folders, queue transfers, remember each tmux session remote folder, and open remote files for other apps. Both platforms fit collect shared files into terminal session; iOS fit remember folder wey you choose for Files.",
    sftpCtaGuide: "File transfer guide",
    sftpCtaAll: "All features",
    sftpAlt: "Mobile SSH file transfer screen for phone, wit local and remote panes.",
    galleryHead: "See am for real device",
    galleryIntro:
      "Screenshots from Android phone and iPhone — di same screens wey you go use to add server, work for terminal, run plenty session, and move file wit SFTP.",
    carouselPrev: "Di screenshot wey dey before",
    carouselNext: "Di next screenshot",
    carouselDot: "Go position {n}",
    videoHead: "See am as e dey work",
    videoIntro: "Short demos for di two platforms. Android: di home screen wey dey answer wetin you fit go back inside, session toolbar wey dey show only wetin dat server get, sending file straight enter di prompt, and di tmux, herdr and Zellij managers. iOS: opening straight enter live terminal, and di home screen wey you dey come back to.",
    videoAlt: "Android demo of di home screen wey dey list tmux sessions wey you fit resume, di session toolbar, attaching file enter di prompt, and di tmux, herdr and Zellij session managers",
    videoIosAlt: "iOS demo of opening Mobile SSH straight enter live SSH terminal session and going back to di home screen, wit di tmux manager, Settings and di oda screens wey di app get",
    muxHead: "One video for each session manager",
    muxIntro:
      "Di overview demos introduce tmux, herdr and Zellij. These longer recordings show how to control sessions, windows, tabs and panes for both platforms against live server.",
    muxItems: [
        {
          text: "Sessions, windows and panes wey you fit reach from di home screen, wit one session wey bell mark because something for inside dey wait make person answer am. Attach one window and di terminal wey dey run go follow am; create window and give am name — you no go type any prefix chord at all.",
          androidAlt: "Android demo of di tmux manager: di session list wey di home screen keep, then sessions, windows and panes, attaching one window make di terminal follow am, and creating window wey get name.",
          iosAlt: "iOS demo of di tmux manager: tmux sessions wit how old dem be and bell for di one wey dey wait input, then windows and panes, every row get Open, Rename and Kill."
        },
        {
          text: "Workspaces, tabs and panes wey carry real agent state — one agent dey work, anoda one block dey wait for person. Preview di one wey block, answer am from di phone, and watch as herdr go mark am working, then done.",
          androidAlt: "Android demo of di herdr manager: sessions and workspaces wey dem label wit agent state, one agent wey dem mark needs you, answering am from di phone, and new workspace wey dem create and rename.",
          iosAlt: "iOS demo of di herdr manager: workspaces wey carry agent state and one reply sheet wey dey send wetin you type go meet agent wey block, wit Enter follow am."
        },
        {
          text: "Sessions wit how old dem be, then tabs and panes. Preview wetin one pane dey show witout attaching, add tab wey get name, bring di one wey matter come front, and attach — you no type anything for di prompt.",
          androidAlt: "Android demo of di Zellij manager: sessions wit how old dem be, tabs and panes, previewing wetin one pane dey show, creating tab wey get name, and attaching one session.",
          iosAlt: "iOS demo of di Zellij manager: one session wey get attach, rename, kill and delete, im tabs, and one pane wey give preview and di two split directions."
        }
    ],
    demoHead: "Three more wey we film for Android",
    demoIntro:
      "No iOS take dey for dis ones yet. Na di same live server wey di demos wey dey up there use: session wey dey survive even wen you comot for di app, key wey di phone make instead of one wey you type enter am, and servers wey dem group di way wey you dey think about dem.",
    demoItems: [
      {
        title: "Di session dey run even wen you comot for di app",
        text: "Android keeps di connection for foreground service; di ongoing notification names di server and get Disconnect all. Leave while log dey stream and return to di session wey still dey run. iOS only allows short time for background, then reconnects and attaches to your multiplexer again.",
        androidAlt:
          "Android demo of session wey dey keep running for background: live HTTP log wey dey stream for di terminal, di notification permission prompt, di ongoing notification wey dey call di server wey connect wit Disconnect all, then comot go home screen and come back meet di same stream wey still dey enter."
      },
      {
        title: "Na here dem dey make keys, no be type you dey type am",
        text: "Generate Ed25519 key for di phone: label, username, and passphrase wey you fit add or leave. Di sheet wey follow dey show di public half wey you go put inside server im authorized_keys, and e fit share or save any of di two halves.",
        androidAlt:
          "Android demo of key generation: di Generate SSH Key dialog wit label, username, di Ed25519 key type and passphrase, then di public key sheet wey dey offer make you share or save di key."
      },
      {
        title: "Servers dey live inside folders wey you name",
        text: "Arrange servers wey you save enter folders and fold di ones wey you no dey use. Di same take dey end for di terminal, where URL wey command print get underline and you fit tap am instead of say you go dey select am by hand.",
        androidAlt:
          "Android demo of server folders: servers wey you save wey dem arrange enter folders wey get name, wey dey open and fold, then terminal where URLs wey dey command output get underline and you fit tap dem."
      }
    ],
    graphicsHead: "Chart wey dey move, inside di terminal",
    graphicsBody:
      "One GIF wey get 36 frames, wey dem stream over di Kitty graphics protocol and di app decode am for di file im own frame timing — na no be say person dey push am from outside. Then di escape sequences wey dem dey take judge terminal: OSC 8 dey turn build numbers and dashboard names into something wey you fit tap, OSC 52 dey let di remote write your phone clipboard, and OSC 777 dey raise real Android notification.",
    graphicsAlt:
      "Android demo of latency chart wey dey move, wey dem stream enter di terminal over di Kitty graphics protocol, then OSC 8 links, OSC 52 clipboard write, and OSC 777 notification.",
    lightboxClose: "Close am",
    lightboxPrev: "Di one before",
    lightboxNext: "Di next one",
    galleryAlts: [
      "Mobile SSH home screen for Android phone wit one Active Sessions banner and one Continue list of servers wey you save and fit go back to, on top di Servers, Credentials, Settings, About and Plugins buttons.",
      "Add Server dialog for phone wit fields for server name, host and port, extra addresses, credentials, private key and port forwards.",
      "Single-session SSH terminal for phone wey dey show one coding agent patch and test run wey pass, under di session toolbar.",
      "Two SSH session for side-by-side split view for phone.",
      "Four SSH session for grid for phone, each one on different server, wit di active pane highlighted.",
      "SFTP file transfer screen for phone, wit My Phone and Remote Host panes.",
      "About dialog for phone, dey show version, author, license and website fields.",
      "Generate SSH Key dialog for phone wit label, user, key type, and passphrase fields.",
      "Public Key dialog for phone wey dey show di key wey dem make wit copy, share, and save options.",
      "Saved Servers screen wey dey show servers wey dem arrange enter collapsible Work and Personal folder groups.",
      "SSH terminal for phone wit https:// URLs wey dey underline as tappable clickable links.",
      "Zellij manager for Android phone wey dey list sessions, tabs, and panes wit buttons to attach, rename, kill, and focus dem.",
      "Tmux manager for phone wey dey list tmux sessions, windows, and panes wit buttons to attach, rename, and switch.",
      "Plugins screen for phone wey dey show plugin catalog wey you fit install, wit Tailscale, WireGuard, and Claude Code CLI.",
      "AI Chat plugin for phone wey dey stream reply from local llama3.2 model wey dey run on di remote server over SSH.",
      "Add Server dialog for phone wit di transport set to Eternal Terminal so session go survive network drop."
    ],
    galleryIosAlts: [
      "Mobile SSH connect form for iPhone wit server, authentication, folder, and transport fields.",
      "Saved Servers for iPhone wey dem arrange enter Production and Staging groups wit server search.",
      "Live SSH terminal for iPhone wit tmux status bar and di extra key row down.",
      "Two SSH session wey stack one on top di oda for grid for iPhone wit tap-to-focus panes.",
      "File Transfer for iPhone wit My Phone and Remote Host panes and log of transfer wey don finish.",
      "Key authentication for iPhone wit Ed25519 key wey dem generate on device and public key wey you fit copy.",
      "Tmux manager for iPhone wey dey list sessions and windows wit open, rename, and kill actions — bell dey show agent wey dey wait for input.",
      "SSH terminal for iPhone wey attach to tmux window dey show code for remote editor.",
      "Plugins catalog for iPhone wit Tailscale, WireGuard, Claude Code CLI, VS Code, and AI Chat wey you fit install.",
      "Connect form for iPhone wit di transport set to Eternal Terminal so session go survive network drop.",
      "Agent alert settings for iPhone wit vibration, sound, and headphones-only toggles.",
      "Mobile SSH home screen for iPhone wit one Active Sessions banner and one Continue row wey you fit take go back to session wey dey run, wit tiles for Servers, Credentials, Logs, Settings, About and Plugins under am."
    ],
    compareHead: "Where e stand next to Termux and Termius",
    compareIntro:
      "Mobile SSH na intentionally narrow tool: e no be full Linux environment, e no be cross-platform team vault. Na local SSH/SFTP tool for Android and iOS wey give fast access to di session controls wey mobile user dey need pass.",
    compareGuideTitle: "Comparison guide",
    compareGuideText: "Wen to choose Mobile SSH, Termux, or Termius for your phone or tablet.",
    privacyTitle: "Privacy policy",
    privacyText: "Check wetin connection data dey stay local and wetin dem send go your server."
  },
  features: {
    metaTitle: "Features | Mobile SSH",
    metaDescription:
      "See Mobile SSH terminals, jump hosts, server identity checks, SFTP, VNC, backups and multiplexer managers for Android and iOS, plus Android VPN and security keys.",
    eyebrow: "Feature list",
    h1: "Mobile SSH features",
    intro:
      "Connect to your servers from Android and iOS with SSH terminals, checked server identities, jump hosts, SFTP, VNC and session managers. Android adds built-in VPN routing and hardware security keys; we mark features wey depend on platform below.",
    groups: [
      {
        title: "Platforms",
        items: [
          "Android 8.0 or newer — right now na Google Play closed test: open di opt-in link inside mobile browser, then install am from Play",
          "iOS 16 or newer for iPhone and iPad — join di public beta for TestFlight",
          "Current Android and iOS versions use backup format 2 for inventory and settings; importing backup no go make unsupported platform features begin work"
        ]
      },
      {
        title: "Connections",
        items: [
          "Password login and private key login",
          "Ed25519, ECDSA (P-256/384/521), and RSA private keys for Android; Ed25519 and ECDSA for iOS. Di two platforms fit open key wey passphrase don encrypt",
          "Saved server profile wit host, port, username, credential, private key and optional tunnel spec — clone one profile to copy im settings enter new server",
          "Give server name and di list go show dat one instead of im address — di address dey come back wenever two rows go resemble each oda",
          "Search saved servers by name, host, port, credential, or any of dem alternate address",
          "If you connect twice to di same machine under two saved rows, di app go notice — e dey fingerprint di host key and offer make e merge dem enter one multi-address server",
          "Search-first Add Session flow: pick saved server from dedicated search page and connect wit one tap",
          "Plenty address for one saved server for LAN/VPN roaming — dem dey dial dem in order, di last address wey work go first, and reconnect go kick in wen network change",
          "Reusable credential record wey you fit pick for server setup",
          "Home screen wey dem build around resuming: di connections wey dey live right now, and di tmux sessions wey dey wait for your servers — dem come from stored snapshot, so dem dey list even wen no network dey and each row carry di age of di snapshot. For iOS di Recent list don move enter di New connection sheet, where one tap go fill di form for you",
          "IPv6 from end to end: bracketed literal wit optional port for di address fields, and bracketed IPv6 destination inside port-forward rules",
          "Login log for successful and failed try, wey dey record di exact address wey dem dial and, wen e fail, di reason",
          "Teleport proxy transport (experimental, Android): log in wit username, password, and OTP or import Teleport config or identity file, browse cluster nodes, then run terminals, SFTP, tmux, and plugins over di proxy tunnel",
          "Both platforms get saved SSH jump hosts, including ordered chains up to eight expanded hops; each hop uses its own credentials and server identity checks",
          "Android SSH agent forwarding: enable am for each server so remote programs fit request signatures from saved keys, with optional approval before use; private keys stay for phone",
          "Android FIDO2 security keys work through USB or NFC: enroll or import OpenSSH security-key credentials, then follow touch and PIN prompts"
        ]
      },
      {
        title: "Terminal",
        items: [
          "VT100/xterm-256color style terminal behavior wit 24-bit true color and italics — di app dey tell di shell say TERM=xterm-256color and COLORTERM=truecolor",
          "Scrollback buffer wey you fit set to 1,000, 5,000, 10,000, or 50,000 lines for Android and iOS (5,000 na di default)",
          "Find for di terminal — search di scrollback and di visible screen and jump between di matches (Android and iOS)",
          "Shell integration (OSC 133): step between prompts, select di whole output of one command — di build error wey happen 300 lines back, no be just di last one — and get alert wen long-running command finish (Android and iOS)",
          "Inline images for di terminal via di Kitty graphics protocol, wey dey survive pinch-zoom and re-wrap instead of make dem just disappear (Android and iOS)",
          "Di app itself draws block, braille and sextant mosaic symbols, so chafa, timg and ANSI art fit tile correctly for Android and iOS",
          "Touch dey send mouse clicks to terminal programs wey track mouse for both platforms, and you fit enable dragging; iOS still get setting to place cursor instead",
          "Di pane header dey name di real working directory of di pane, wey e ask tmux or wey di shell report over OSC 7 (Android)",
          "Extra key row of thirteen key — ESC, TAB, CTRL, arrows, Home, End, PgUp, PgDn, keyboard toggle — wey dey wrap go second row instead of scroll, and any remainder dey fold enter overflow menu so no key dey comot for screen",
          "Customize di row for Android and iOS: add from palette of about 45 preset wey include F1–F12, Ctrl combos, and symbols; remove, reorder, hide, define your own escape-sequence keys, and reset to defaults, wit live preview",
          "Tap to focus, optional tap-to-show-keyboard setting, copy and copy-all action",
          "Pinch-to-zoom text sizing wit remote terminal resize",
          "Double-tap pane fullscreen mode",
          "Terminal text selection wit Copy, Share and Select all — long-press dey select di word, and Copy dey keep di selection so you fit share or re-copy am",
          "OSC 52 clipboard — copy text from remote tmux or vim session straight go di phone clipboard (Android and iOS)",
          "Hardware keyboards and voice dictation work for both platforms; iOS enables Dictation & suggestions by default, including autocorrection. Turn am off if you want direct terminal input",
          "External and Bluetooth keyboard support for Android and iOS, including arrows, function keys, and Ctrl/Alt chords",
          "Bracketed paste so multi-line clipboard content no go run by itself",
          "Bundled Nerd Font dey render powerline, starship, devicon, and Material Design icon glyphs for Android and iOS wey di system font for don show as empty boxes",
          "Wide CJK, emoji, and combining characters dey measured and drawn correctly for Android and iOS, including grapheme clusters and zero-width joiners",
          "Terminal font wey you fit configure (system monospace, JetBrains Mono, or Source Code Pro) and ANSI color scheme (Solarized, Gruvbox, Dracula, Nord) for Android and iOS, wey dey apply live to open panes",
          "Terminal text-size slider for Settings, along wit pinch-to-zoom, plus app theme wey you fit set to System, Light, or Dark",
          "Connection speed and stalled-link indicators help you know whether remote command dey busy or connection no dey answer; dimming and vibration na optional",
          "Settings controls remote notifications, command-finished alerts and remote clipboard reads; these permissions dey off by default"
        ]
      },
      {
        title: "Sessions",
        items: [
          "Up to eight SSH session same time",
          "Grid layout for active session",
          "Background and screen-lock survival: for Android, foreground service dey keep shell and agent dey run even after you swipe di app comot; for iOS, tmux auto-attach dey reattach your shell",
          "Keepalive and reconnect try wit exponential backoff — up to ten try, and failure against network wey you don already comot no dey count for di limit",
          "Wen you switch Wi-Fi, cellular, or VPN e dey re-dial one time instead of waiting make di dead route timeout, and session wey don dey backoff dey retry di moment usable network show",
          "When server no answer keepalive checks, di app detects am and starts reconnect for Android and iOS",
          "Active Sessions entry from start screen; ongoing notification wey dey list session — tap to open",
          "tmux command tracking and reattach hints, with Auto, Nothing, tmux, herdr or Zellij choice for each server on Android and iOS; session identity stays correct when you switch tmux sockets",
          "Agents dey report demsef through di terminal, so di app sabi di agent, di tool wey e dey run, and whether e block dey wait for you — di pane go turn amber, im header go read \"claude · needs you\", and badge for di toolbar dey count who dey wait",
          "Answer agent question wit one tap from di Agents list; di reply dey pass separate channel, so e no dey type anything inside wetin dey for screen",
          "Install di agent hook go server from inside di app — small shell script wey any agent fit call, no be vendor integration",
          "Eternal Terminal (ET) transport for sessions wey dey survive network drop, sleep, and IP change, wit optional automatic etserver setup over SSH",
          "Tmux manager: list and switch sessions, windows, and panes — attach, rename, create, split, zoom, or kill, wit name/date sorting and 🔔 for agents wey dey wait for input",
          "One multiplexer toolbar button opens tmux, herdr and Zellij managers; Herdr get pane preview, focus and replies, while Zellij handles sessions wey dey live or don exit"
        ]
      },
      {
        title: "Files and tunnels",
        items: [
          "Dual-pane SFTP browser for local and remote file, wit transfer log wey dey show every transfer and dey scroll",
          "Uploads and downloads fit enter queue; share files into Mobile SSH for Android or through iOS Share Extension, then upload dem into connected session and insert their remote paths",
          "Recursive folder upload and download between phone and remote host",
          "Remote rename, delete, create, edit, compress go .tar.gz, permissions (chmod/chown), and details",
          "Open file wey you don download inside anoda app for di two platforms — for iOS, download dey also show inside di Files app under \"On My iPhone\"",
          "File Transfer remembers remote folders by host and tmux session for both platforms; iOS still remembers external local folder wey you choose through Files",
          "Sort by name or date wit per-host memory, and jump back go recent remote path",
          "File size for binary units, wey match wetin ls -h dey show for di terminal wey dey one tab away",
          "Local port forwarding wey dey save wit server profile and dey come up automatic wen you connect",
          "Di whole app and file browser dey follow di system light or dark theme — choose System, Light, or Dark for Android and iOS"
        ]
      },
      {
        title: "Localization",
        items: [
          "Both platforms get twenty app languages: Arabic, Egyptian Arabic, Bengali, Chinese (Simplified and Traditional), English, French, German, Hindi, Indonesian, Japanese, Marathi, Nigerian Pidgin, Portuguese, Russian, Spanish, Tamil, Telugu, Turkish and Urdu",
          "E dey follow di system language by default, and Settings get language picker if you want di app for language wey no be di phone own"
        ]
      },
      {
        title: "Keys and backup",
        items: [
          "Generate new Ed25519 or ECDSA keys for di device (RSA too for Android), wit optional passphrase",
          "Copy, share, or save di public key wey you generate to add am to di server authorized_keys",
          "Full backups include servers, credentials, app settings, language and multiplexer sorting; Android still includes SSH VPN, SOCKS5, WireGuard, Shadowsocks and OpenVPN profiles",
          "Use selected or inventory-only exports if you want smaller scope; preview full backup and choose Merge or Replace, with passphrase encryption if you want",
          "Backup wey no get encryption contains passwords and private keys. SSH host trust, active sessions, system permissions and local folder access no dey portable; security-key credentials still need di physical key"
        ]
      },
      {
        title: "Security",
        items: [
          "Secure screen: for Android, block screenshots and screen recording and hide di app from di recents thumbnail; for iOS, blank di app-switcher preview and block screen recording and mirroring (you no fit block manual screenshot for iOS) — na opt-in setting for wen password, key, or token dey for screen",
          "Saved servers, credentials and keys dey stay for di device; cloud account or sync no dey compulsory. Check di privacy page for how storage protection dey work and where e get limits",
          "Anonymous usage analytics dey on by default, but you fit turn am off for Settings on Android and iOS; events no include servers, credentials, commands or file contents",
          "SSH host identity checks happen before login. Android pins new raw keys automatically by default, with setting to require approval; iOS asks before trusting unknown key. Both reject changed keys",
          "Both platforms fit import OpenSSH host-key revocations wey get specific scope. iOS accepts Ed25519/ECDSA keys wey carry @revoked; Android still supports host certificate authorities. iOS no support host certificates or CA imports. SSH trust dey stay for each device and no enter backups"
        ]
      },
      {
        title: "Plugins",
        items: [
          "Browse plugins by category, search, install and run dem; catalogs refresh when you change sources",
          "Plugins dey download as you need dem from public catalog and dem dey SHA-256 verified enter app-private storage",
          "Plugin dey declare wetin e need — SSH commands, tunnel, storage — and di app dey refuse anything wey e no ask for",
          "Wen plugin wan set up something for your server, you go first see di exact commands and approve dem before dem run",
          "Configure your own custom or private catalog source, or install from folder wey dey your own server"
        ]
      },
      {
        "title": "Remote desktops",
        "items": [
          "VNC desktop through SSH tunnel for Android and iOS, without exposing VNC port to public internet",
          "Touch pointer controls, hardware and on-screen keyboard input, clipboard exchange and desktop bell support dey available",
          "Choose remote screen-size preset or custom dimensions if di VNC server supports resize; di app reports resize requests wey no dey supported"
        ]
      },
      {
        "title": "VPN clients (Android)",
        "items": [
          "Open VPN from home screen to manage SSH VPN, SOCKS5 proxy, WireGuard, Shadowsocks and OpenVPN profiles",
          "SSH VPN routes TCP and DNS through saved SSH server for all or selected apps and domains; other UDP wey dey assigned to SSH gets blocked",
          "Di authenticated local SOCKS5 proxy works alongside another VPN; apps wey join must use di proxy and remote DNS",
          "Import WireGuard .conf files, supported Shadowsocks ss:// links, or self-contained OpenVPN .ovpn profiles with checked server certificates",
          "Start profile to switch VPNs; use Mobile SSH VPN Quick Settings tile to stop or start di remembered VPN profile. Di tile no include SOCKS proxies",
          "Android allows one device VPN at a time. Tailscale uses its separate app; IKEv2/IPsec stays for Android Settings. Mobile SSH no promise always-on or lockdown protection"
        ]
      }
    ],
    security:
      "Security note: di current app dey store saved server and credential record local for di device (secrets dey stay inside di system Keychain for iOS). No cloud sync. Use strong screen lock to protect device, and no save credential on shared device."
  },
  compare: {
    metaTitle: "Mobile SSH vs Termux vs Termius for mobile",
    metaDescription:
      "Balanced comparison of Mobile SSH, Termux and Termius for SSH workflow on Android and iOS.",
    eyebrow: "Mobile SSH options",
    h1: "Mobile SSH vs Termux vs Termius",
    intro:
      "Mobile SSH joins SSH, SFTP, VNC and multiplexer managers for Android and iOS, with built-in VPN clients and security-key login for Android. Termux na Linux environment for Android, while Termius na SSH client for different platforms with productivity features wey use account.",
    columns: {
      need: "Need",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "Main purpose",
        mobileSsh: "SSH, SFTP, VNC, jump hosts and multiplexer managers for both platforms; Android still get VPN clients and FIDO2 security keys.",
        termux: "Android terminal emulator and Linux environment wit APT packages.",
        termius: "Modern SSH client for Android, iOS, desktop and web-oriented team workflow."
      },
      {
        need: "Setup style",
        mobileSsh: "Save server and credentials, choose jump hosts if you need dem, then connect with server identity checks before login.",
        termux: "Install packages like OpenSSH, set up shell tools, work from Linux-like command line.",
        termius: "Create or sync host, key, snippet and vault through Termius app/account model."
      },
      {
        need: "Mobile terminal control",
        mobileSsh: "Extra keys, grid sessions, fullscreen panes, pinch zoom, copy/share, mouse support and external keyboards. You fit turn iOS Dictation & suggestions off for direct terminal input.",
        termux: "Powerful terminal environment; behavior depend on di tool and config wey you install.",
        termius: "Mobile keyboard add-on, gesture, tab, autocomplete, snippet and polished terminal UX."
      },
      {
        need: "File transfer",
        mobileSsh: "Dual-pane SFTP, folder history wey knows tmux, remote file sharing and incoming shared files for both platforms; iOS fit remember external Files folder.",
        termux: "Use command-line tool like scp, sftp, rsync, or installed file utility.",
        termius: "Built-in SFTP and host/key management."
      },
      {
        need: "Multi-session work",
        mobileSsh: "Up to eight SSH session same time for grid.",
        termux: "Use multiplexer like tmux inside Termux or remote shell.",
        termius: "Tab and split-view workflow, depending on platform and plan."
      },
      {
        need: "Data model",
        mobileSsh: "Profiles, credentials, host trust and settings stay for device; you fit export portable inventory/settings backups. Android backups include VPN profiles too; SSH trust stays for each device.",
        termux: "Linux-like file system and package inside di Termux app environment.",
        termius: "Encrypted vault for host, key, snippet, forwarding rule, known hosts and team sharing."
      },
      {
        need: "Best fit",
        mobileSsh: "You want simple app for Android or iOS to connect server, transfer file and keep session alive.",
        termux: "You want full command-line environment for Android, and you comfortable to install and config package.",
        termius: "You want cross-device sync, polished productivity, vault and collaboration."
      }
    ],
    cards: [
      {
        title: "Pick Mobile SSH wen",
        body: "You want direct SSH access from your phone or tablet — Android or iOS — witout setting up full Linux environment or cloud-synced account model. E good well well for saved server, SFTP, tmux session, and fast local tunnel workflow."
      },
      {
        title: "Pick Termux wen",
        body: "You need package management, shell, compiler, scripting, rsync, curl, Git, Python, Node.js or oda Linux-style tool direct on di Android device."
      },
      {
        title: "Pick Termius wen",
        body: "You want commercial, cross-platform SSH workspace wit encrypted vault sync, team sharing, keychain management, snippet, and one consistent app on plenty device."
      }
    ],
    featureHeading: "Feature by feature",
    featureRows: [
      { category: "Connection",       feature: "E dey run on Android and iOS",                mobile: "yes",     termux: "Android just",  termius: "yes" },
      { category: "Connection",       feature: "Saved server profile",                       mobile: "yes",     termux: "via ssh config", termius: "yes" },
      { category: "Connection",       feature: "Search saved servers",                        mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Connection",       feature: "Server folders / groups",                     mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Connection",       feature: "Search-first Add Session picker",             mobile: "Android", termux: "no",            termius: "no" },
      { category: "Connection",       feature: "Plenty address per server (LAN/VPN roaming)", mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Connection",       feature: "Reusable credential record",                  mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Connection",       feature: "Home screen dey list wetin you fit resume",   mobile: "yes",     termux: "no",            termius: "partial" },
      { category: "Connection",       feature: "Offline tmux session list (no need connection)", mobile: "yes",  termux: "no",            termius: "no" },
      { category: "Connection",       feature: "Server name wey dey show instead of address", mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Connection",       feature: "Login log",                                   mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Connection",       feature: "Teleport proxy transport (experimental)",     mobile: "Android", termux: "no",            termius: "no" },
      { category: "Connection",       feature: "IPv6 host and forward destination",           mobile: "yes",     termux: "yes",           termius: "partial" },
      { category: "Terminal",         feature: "SSH terminal",                                mobile: "yes",     termux: "via OpenSSH",   termius: "yes" },
      { category: "Terminal",         feature: "xterm-256color emulation",                    mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "Scrollback wey you fit set (1k–50k lines)",   mobile: "yes",     termux: "you fit configure am", termius: "partial" },
      { category: "Terminal",         feature: "Search inside terminal (scrollback)",         mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",         feature: "Extra key row (ESC/TAB/CTRL/…)",              mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "Pinch-to-zoom text sizing",                   mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "Double-tap pane to fullscreen",               mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",         feature: "URL wey fit tap for terminal output",         mobile: "yes",     termux: "partial",       termius: "yes" },
      { category: "Terminal",         feature: "Text selection: copy / share / select all",   mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "Hardware / Bluetooth keyboard support",       mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "Shell integration (OSC 133)",                 mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",         feature: "Inline images (Kitty graphics)",              mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",         feature: "Mosaic glyphs wey di app dey draw (chafa, ANSI art)", mobile: "yes", termux: "e depend on font", termius: "no" },
      { category: "Terminal",         feature: "Tap dey act like click for mouse-mode TUI",   mobile: "yes", termux: "yes",           termius: "no" },
      { category: "Terminal",         feature: "Nerd Font / powerline glyph rendering",       mobile: "yes",     termux: "you fit configure am", termius: "partial" },
      { category: "Sessions",         feature: "Plenty SSH session same time",                mobile: "up to 8", termux: "up to 8",       termius: "yes" },
      { category: "Sessions",         feature: "Grid pane layout",                            mobile: "yes",     termux: "via tmux",      termius: "tabs" },
      { category: "Sessions",         feature: "tmux-friendly scroll",                        mobile: "yes",     termux: "yes",           termius: "no" },
      { category: "Sessions",         feature: "tmux reattach hint on reconnect",             mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sessions",         feature: "Agent alerts (Claude Code / Codex)",          mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sessions",         feature: "Ongoing notification wit session list",       mobile: "Android", termux: "partial",       termius: "no" },
      { category: "Sessions",         feature: "Foreground service & wake lock",              mobile: "Android", termux: "yes",           termius: "partial" },
      { category: "Sessions",         feature: "Auto-reconnect wit backoff",                  mobile: "yes",     termux: "via autossh",   termius: "yes" },
      { category: "Files",            feature: "Built-in SFTP file transfer UI",              mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Files",            feature: "Dual-pane local + remote browser",            mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Files",            feature: "Upload / download queue",                     mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Files",            feature: "Remote rename / delete / create",             mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Files",            feature: "Remote file permissions view",                mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Files",            feature: "Sort by name or date per host",               mobile: "yes",     termux: "no",            termius: "partial" },
      { category: "Tunnels",          feature: "Local port forwarding",                       mobile: "yes",     termux: "via CLI",       termius: "yes" },
      { category: "Tunnels",          feature: "Saved tunnels wit server profile",            mobile: "yes",     termux: "via ssh config", termius: "yes" },
      { category: "Tunnels",          feature: "Runtime add / remove tunnels",                mobile: "no",      termux: "no",            termius: "yes" },
      { category: "Keys",             feature: "Password login",                              mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Keys",             feature: "Private key login",                           mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Keys",             feature: "Key generation on device",                    mobile: "yes",     termux: "via ssh-keygen", termius: "yes" },
      { category: "Keys",             feature: "Share / save generated public key",           mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Backup",           feature: "Export / import server backup",               mobile: "yes",     termux: "via termux-backup", termius: "Pro cloud vault" },
      { category: "Backup",           feature: "Encrypted local backup file",                 mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Backup",           feature: "No account needed",                           mobile: "yes",     termux: "yes",           termius: "partial" },
      { category: "Privacy & cost",   feature: "No Pro paywall",                              mobile: "yes",     termux: "yes",           termius: "partial" },
      { category: "Privacy & cost",   feature: "No ads",                                      mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Privacy & cost",   feature: "Analytics opt-out",                           mobile: "yes", termux: "no analytics",  termius: "no" },
      { category: "Privacy & cost",   feature: "Local-only data (no cloud sync)",             mobile: "yes",     termux: "yes",           termius: "partial" },
      { category: "Privacy & cost",   feature: "Secure screen (block screen capture)",        mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sessions",         feature: "Eternal Terminal (sessions wey no dey die)",  mobile: "yes",     termux: "via CLI",       termius: "no" },
      { category: "Sessions",         feature: "Auto-install etserver over SSH",              mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sessions",         feature: "tmux session manager",                        mobile: "yes",     termux: "via CLI",       termius: "no" },
      { category: "Sessions",         feature: "herdr and Zellij session manager",            mobile: "yes"    , termux: "via CLI",       termius: "no" },
      { category: "Sessions",         feature: "One-tap reply to agent wey block",            mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Plugins",          feature: "Plugin support",                              mobile: "yes",     termux: "via packages",  termius: "no" },
      { category: "Plugins",          feature: "Plugin catalog wey dey install on demand",    mobile: "yes",     termux: "no",            termius: "no" }
    ],
    agentAppsHeading: "Mobile SSH vs AI coding-agent app dem",
    agentAppsIntro:
      "One kind app dey grow fast now wey dem build just to drive coding agent — Claude Code, Codex, and dem friend — from your phone. Some na third-party SSH or relay app (Onepilot, Happy, Omnara, Moshi, Orca); OpenAI and Anthropic don begin ship am natively too, wit Codex inside di ChatGPT app and Claude Code inside di Claude app, di two of dem dey run for di vendor own cloud. Mobile SSH dey overlap wit all of dem — you fit run dem agent over SSH and get alert wen dem need you — but e dey approach di work from di oda side: e be general, direct SSH client first, and agent companion second.",
    agentAppsRows: [
      { feature: "E dey run coding agent from your phone",          mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "E dey work wit any coding agent (no be one vendor)", mobile: "yes", onepilot: "yes",   happy: "Claude Code", omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "Codex just",   claude: "Claude Code just" },
      { feature: "E dey run for your own machine (no be vendor cloud)", mobile: "yes", onepilot: "yes",  happy: "yes",         omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "no",           claude: "partial" },
      { feature: "Direct SSH — no cloud relay",                     mobile: "yes", onepilot: "yes",      happy: "no",          omnara: "no", moshi: "yes", orca: "no",      chatgpt: "no",           claude: "no" },
      { feature: "General SSH terminal (run any command)",          mobile: "yes", onepilot: "yes",      happy: "no",          omnara: "partial", moshi: "yes", orca: "Terminal for computer wey you pair", chatgpt: "no",           claude: "no" },
      { feature: "SFTP file transfer",                              mobile: "yes", onepilot: "partial",  happy: "no",          omnara: "no", moshi: "Docs no agree", orca: "Only for computer",      chatgpt: "no",           claude: "no" },
      { feature: "Local port forwarding",                           mobile: "yes", onepilot: "yes",      happy: "no",          omnara: "no", moshi: "Dev previews (Pro)", orca: "Only for computer",      chatgpt: "no",           claude: "no" },
      { feature: "tmux session manager",                            mobile: "yes", onepilot: "partial",  happy: "no",          omnara: "no", moshi: "Pro", orca: "Docs no talk am",      chatgpt: "no",           claude: "no" },
      { feature: "E dey work wit agent wey you install yourself",   mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "no",           claude: "no" },
      { feature: "Agent alerts (when agent wey connect need your input)",      mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "One-tap approve/deny for agent prompt",           mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes", moshi: "Pro after trial finish", orca: "Agents wey e supports",     chatgpt: "yes",          claude: "yes" },
      { feature: "No server or SSH setup at all",                   mobile: "no",  onepilot: "no",       happy: "partial",     omnara: "partial", moshi: "no", orca: "Pair with computer", chatgpt: "yes",          claude: "yes" },
      { feature: "Android and iOS",                                 mobile: "yes", onepilot: "iOS just", happy: "yes",         omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "No need account",                                 mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "no", moshi: "yes", orca: "LAN/Tailscale; Relay need account",      chatgpt: "no",           claude: "no" },
      { feature: "No Pro paywall (all feature free)",               mobile: "yes", onepilot: "no",       happy: "no",          omnara: "no", moshi: "no", orca: "yes",      chatgpt: "free level",   claude: "no" },
      { feature: "Open source",                                     mobile: "Apache 2.0",  onepilot: "no",       happy: "MIT",         omnara: "Apache", moshi: "no", orca: "MIT",  chatgpt: "no",           claude: "no" }
    ],
    agentAppsNote:
      "Di native ChatGPT and Claude app dem na di smoothest way to run one vendor own agent witout any setup — no server, na just account — and dem dey add polished one-tap approve/deny screen. Di catch be say: dem dey run only dem own model for dem own cloud, witout general terminal, no SFTP or tunnel, and you no fit bring your own machine, and dem dey charge money or lock am for account. Onepilot, Happy, and Omnara dey keep di agent for hardware wey you control (Onepilot na direct SSH; Happy and Omnara na cloud relay, and Omnara need account). Mobile SSH dey connect straight to your own server witout account or vendor relay, e dey run any agent along wit full terminal, SFTP, and port forwarding, and every feature dey free. Now e dey answer agent prompt di same way dem dey do am — Agents list wey dey show every agent across every connection, wit button for each choice — di difference be say di agent dey run for your own machine and di reply dey travel over your own SSH connection. Di trade-off na di same one wey e always be: you go bring di server, and dem go install di agent hook on am once.",
    agentAppsSourcesNote: "We check am on 2026-09-19. Moshi direct SSH terminal dey separate from im optional backend for agent events and approvals. Im Android listing dey advertise SFTP, but im detailed docs describe SCP uploads and dev-server previews; we add di matching explanations for those cells. Orca mobile app dey pair with Orca for computer: LAN/Tailscale fit work without Orca account, but Relay need one. Di table mark features wey dey only for computer and features wey docs no explain.",
  },
  privacy: {
    metaTitle: "Privacy Policy | Mobile SSH",
    metaDescription:
      "How Mobile SSH handles saved data, server identities, backups, SSH and VPN traffic, files, analytics and permissions for Android and iOS.",
    eyebrow: "Privacy",
    h1: "Privacy Policy",
    intro:
      "Mobile SSH stores its setup for your device and connects to servers and services wey you choose. E no need Mobile SSH account or cloud sync. Android optional VPN clients still route selected device traffic through di servers wey you configure.",
    sections: [
      {
        heading: "Information wey dey store on your device",
        body: "Saved data include server profiles, credentials, private keys, host identities, jump hosts, tunnel rules, session snapshots, login history, file paths, folder-access grants and app settings. Android still stores VPN/proxy setup and their secrets. iOS dey use Keychain for secrets. Android dey encrypt inventory with key wey Keystore protects, but e fit save am as plain text if encryption no dey available; WireGuard, Shadowsocks and OpenVPN profile storage must use encryption. Android cloud backup dey disabled. Optional debug logs dey stay local."
      },
      {
        heading: "Information wey dey send over network",
        body: "SSH login goes to your configured servers and jump hosts after their identity checks. Terminal, SFTP, VNC and forwarded traffic go to endpoints wey you choose. Plugin catalogs and downloads contact their configured sources. Android VPN/proxy profiles fit send other apps traffic and DNS through your SSH, WireGuard, Shadowsocks or OpenVPN servers, based on di routes wey you choose. This traffic no dey go to Mobile SSH analytics or cloud storage."
      },
      {
        heading: "File transfer and storage access",
        body: "File transfer uses folders and files wey you select, without broad storage permission. Android keeps access to di folder wey you grant. iOS fit use app folder or remember folder wey you choose for Files, and imports documents, photos and shared files through system controls. File provider wey you select fit store data for its own cloud. Opening or sharing file sends am to di app or destination wey you choose."
      },
      {
        heading: "Log and troubleshooting",
        body: "Di app records login attempts locally as you connect. Debug recording na optional: Android recorder warns say terminal diagnostics include every key wey you type, passwords too, and exports archive. iOS debug logs record connection addresses, failures, reconnects, network changes and tmux diagnostics. Check logs before you share dem; dem fit reveal server details and, for Android, secrets wey you type."
      },
      { heading: "Usage analytics", body: "When you enable am, Mobile SSH dey send feature interactions (including VPN/proxy use and terminal multiplexer type), connection diagnostics, app/OS versions, device model, language and temporary session ID through HTTPS to Aptabase to improve the app. Aptabase dey process the request IP address and User-Agent to get country/region and daily identifier wey use alias; e no dey store the original IP address or User-Agent with analytics. Events no include browsing traffic, DNS queries, server addresses, usernames, login credentials, commands or file contents. Android builds wey get analytics consent prompt need you to agree first; older Android builds and iOS dey enable analytics by default. All features dey work without analytics. Settings fit stop collection; events wey don enter queue before fit still send for iOS. Android consent dey stay only for that device, and backup restore no dey bring am back. See [Aptabase data processing agreement](https://aptabase.com/legal/dpa)." },
      {
        "heading": "Backups wey you export",
        "body": "Full backups include inventory and app settings, plus VPN/proxy profiles for Android. Passphrase encrypts di file; without am, passwords and private keys dey plain text. You choose where to save or share am. SSH host trust, active sessions and system folder grants no dey included. Import preview shows di sections and security preferences wey go apply."
      },
      {
        "heading": "VPN routing for Android",
        "body": "Device VPN routing needs Android consent and continues until you stop am or system ends am. Only one device VPN fit run at a time; local SOCKS proxy fit work with another VPN. SSH routing carries TCP and DNS, while other UDP assigned to SSH gets blocked. Stopping, switching or terminating di app ends di old VPN protection; Mobile SSH no provide always-on or lockdown guarantees."
      }
    ],
    permissionsHeading: "Permissions",
    permissions: [
      { label: "Internet", body: "e dey work for your SSH, file-transfer, desktop, VPN and plugin connections, plus analytics if enabled." },
      { label: "Wake lock and Wi-Fi lock", body: "use for Android to keep active SSH session alive while device dey sleep." },
      { label: "Foreground service and notifications", body: "use for Android to handle active connection for background; for iOS, notifications na for agent alerts." },
      { label: "File access", body: "you grant am through system folder, document and photo pickers; iOS fit remember external Files folder. Neither platform asks for blanket storage access." },
      {
        "label": "VPN consent (Android)",
        "body": "Android must grant am before built-in VPN client fit route device traffic. SOCKS-only proxy no occupy di device VPN slot."
      },
      {
        "label": "USB and NFC (Android)",
        "body": "dem dey communicate with physical FIDO2 security key for enrollment or SSH signing, with USB access and touch/PIN confirmation when needed."
      }
    ],
    securityHeading: "Security responsibilities",
    securityBody:
      "Protect your device and exported backups. Compare unknown SSH fingerprints through trusted channel: disable Android automatic acceptance of new identities if you want approve first use; iOS asks by default. Find why key change before you replace saved identity. Secure screen blocks screenshots and recording for Android; iOS hides app-switcher preview and recording/mirroring, but e no fit block manual screenshots.",
    contactHeading: "Contact",
    contactBody: "Support contact: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  },
  docsIndex: {
    metaTitle: "Documentation | Mobile SSH",
    metaDescription: "End-user documentation for Mobile SSH on Android and iOS.",
    eyebrow: "User guide",
    h1: "Mobile SSH documentation",
    intro:
      "Guides for SSH identity checks and jump hosts, terminals and VNC, multiplexer managers, SFTP, backups, local tunnels and Android VPN clients, with explanation of platform differences.",
    cards: [
      { slug: "getting-started",  title: "Getting started",   text: "Install, check server identities, set jump hosts and keys, and back up your setup." },
      { slug: "terminal",         title: "Terminal",          text: "Use terminal controls, tmux, herdr, Zellij, agent alerts and VNC desktops." },
      { slug: "file-transfer",    title: "File transfer",     text: "Transfer files, remember folders, and share files into sessions or other apps." },
      { slug: "port-forwarding",  title: "Port forwarding",   text: "Set up local tunnels and Android SSH VPN, SOCKS5, WireGuard, Shadowsocks and OpenVPN." },
      { slug: "troubleshooting",  title: "Troubleshooting",   text: "Find causes of identity, jump-host, terminal, transfer, backup and VPN problems." }
    ]
  },
  docsNav: {
    home: "Docs home",
    gettingStarted: "Getting started",
    terminal: "Terminal",
    fileTransfer: "File transfer",
    portForwarding: "Port forwarding",
    troubleshooting: "Troubleshooting"
  },
  about: {
    metaTitle: "About | Mobile SSH",
    metaDescription: "About Mobile SSH: version, author, license, and open-source notice for di Android and iOS SSH client.",
    eyebrow: "About",
    h1: "About Mobile SSH",
    intro: "SSH, SFTP, VNC and multiplexer managers for Android and iOS, with local backups, checked server identities and jump hosts. Android still get VPN clients and hardware security-key support.",
    appHeading: "About di app",
    versionLabel: "Version",
    authorLabel: "Author",
    authorValue: "Dmitry Kozlov",
    licenseLabel: "License",
    licenseValue: "Apache 2.0",
    websiteLabel: "Website",
    privacyLabel: "Privacy policy",
    privacyLinkText: "Privacy policy",
    noticesHeading: "Open source notice",
    noticesIntro: "Mobile SSH dey use di open-source libraries below; each one dey under im own license.",
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
    openvpnSourceHeading: "OpenVPN source code",
    openvpnSourceBody: "We use OpenVPN 3 Core under MPL 2.0. Download the exact source code wey the licence cover, the dependency versions, licence texts and native build information.",
    openvpnSourceLabel: "Download source code archive",
    certificatesHeading: "Certificates",
    apkCertificateLabel: "Signing certificate for APK wey you install directly (PEM)",
    apkCertificateBody: "This public certificate show who sign the Mobile SSH APK wey you install directly. Google Play fit use another certificate sign downloads.",
    serverCertificateBody: "Get SSH and VPN server certificates from your server administrator or VPN provider. Check their fingerprints through channel wey you trust; this signing certificate no be VPN certificate authority.",
    signingHelpLabel: "Android app signing documentation",
    contactHeading: "Contact",
    contactBody: "Support contact: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  }
};
