import type { Dict } from "../types";

export const pcm: Dict = {
  meta: {
    siteName: "Mobile SSH",
    languageLabel: "Language",
    languageSwitcher: "Change language"
  },
  nav: {
    home: "Home",
    features: "Features",
    docs: "Docs",
    compare: "Compare",
    about: "About",
    privacy: "Privacy"
  },
  footer: {
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
      "Mobile SSH na focused SSH client for Android and iOS wey carry multi-session terminals, Eternal Terminal resilient sessions, tmux manager, SFTP transfer, private keys, port forwarding, and plugins.",
    eyebrow: "SSH client for Android & iOS",
    h1: "Mobile SSH",
    intro:
      "Na one focused SSH client for Android and iOS: multi-session terminals, Eternal Terminal sessions wey dey survive network drop, built-in tmux manager, SFTP file transfer, local port forwarding, and plugins — dem build am for phone and tablet use.",
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
      { title: "Agent alerts", text: "You go get notification — wit sound and vibration — di moment Claude Code, Codex, or another remote agent need your input. E dey play for headphones even when video dey run." },
      { title: "Terminal keys for top di keyboard", text: "Dedicated row wit ESC, TAB, CTRL, ALT, FN, arrows, Home, End, PgUp/PgDn for Android and iOS — terminal keys wey no dey fight autocorrect." },
      { title: "Port forwarding without command", text: "Tunnels dey attach to di server profile and dey come up automatic when you connect." },
      { title: "E dey survive lock and roaming", text: "Give one saved server plenty address — home LAN IP and VPN IP — and Mobile SSH go dial whichever one answer, e go first try di last one wey work, and e go reconnect di moment di network change. For Android, foreground service and wake locks dey hold di shell across screen-off; for iOS, auto-reconnect plus tmux auto-attach go carry you back where you stop." },
      { title: "Eternal Terminal", text: "Optional ET transport dey keep di remote shell alive across network drop, sleep, and IP change. Di host no get etserver? Mobile SSH fit install am over SSH for you." },
      { title: "Extend am wit plugins", text: "Browse public catalog and install plugins as you need dem to add new workflow. Each plugin dey download and SHA-256 verified enter app-private storage." }
    ],
    sectionAHead: "Make for mobile SSH work",
    sectionAIntro:
      "Mobile SSH dey keep di admin road short: save server, connect, keep session dey alive, move file when you need am, and quick return to live terminal.",
    features: [
      { title: "SSH terminal", text: "xterm-256color terminal wit 24-bit true color, italics, in-terminal search, OSC 133 shell integration, and pinch-to-zoom text sizing — plus font and color scheme wey you fit configure and Nerd Font powerline/icon glyphs for Android." },
      { title: "Multi-session grid", text: "Up to eight SSH session for resizable grid — tap pane to focus, double-tap for fullscreen, pinch to resize text." },
      { title: "Clickable links", text: "URLs wey dey inside di terminal dey underline and go open for browser with one tap — no need to copy or switch app." },
      { title: "Server folders", text: "Arrange saved servers for collapsible groups. Tap group header to collapse am; di folder structure dey carry enter di quick-connect picker." },
      { title: "Agent alerts", text: "Notification wit sound and vibration when remote agent (Claude Code, Codex, etc.) need your input. E dey play for headphones even during video call." },
      { title: "Private keys", text: "Password or private key login. Generate Ed25519 or ECDSA keys on device (RSA too for Android); import or paste existing keys." },
      { title: "SFTP transfer", text: "Dual-pane file browser wey dey tie to active SSH session. Queue uploads and downloads, rename, delete, and check remote permissions." },
      { title: "Port forwarding", text: "Save local tunnel spec wit server profile — tunnels dey open automatic on connect, or add/remove dem while you dey connect." },
      { title: "Reconnect workflow", text: "Keepalives and exponential-backoff reconnect dey keep session alive through screen-off and roaming — foreground service dey back am for Android, and tmux auto-attach for iOS." },
      { title: "Backup & restore", text: "Export saved servers and credentials to encrypted backup file; import with merge or replace to move between devices — di backups dey work between Android and iOS." },
      { title: "Eternal Terminal", text: "Connect over Eternal Terminal (ET) for sessions wey dey survive network drop, sleep, and IP change — wit optional automatic etserver setup over SSH." },
      { title: "Tmux manager", text: "List and switch tmux sessions, windows, and panes — attach, rename, create, split, zoom, or kill. Sort by name or date; 🔔 dey show agents wey dey wait for input." },
      { title: "Plugins", text: "Browse, install, and run plugins to extend Mobile SSH. Plugins dey download as you need dem from public catalog and dem dey SHA-256 verified enter app-private storage." }
    ],
    multiHead: "One screen, plenty live shell",
    multiP1:
      "Terminal view fit hold many active SSH session for grid. Pick pane to type, use di extra key row for terminal controls, pinch to adjust text size, double-tap pane when you need fullscreen focus.",
    multiP2:
      "Session history and active-session recovery dey help you return to wetin you dey do after app switch, screen lock or when di system collect di app back.",
    multiAlt:
      "Mobile SSH for phone wey dey show two live SSH terminal session for side-by-side split view.",
    sftpHead: "SFTP when terminal no reach",
    sftpBody:
      "Open file transfer from connected session to browse phone storage and remote folder. Queue upload and download, sort file, remember recent path for each host, and check remote permission before you move anything.",
    sftpCtaGuide: "File transfer guide",
    sftpCtaAll: "All features",
    sftpAlt: "Mobile SSH file transfer screen for phone, wit local and remote panes.",
    galleryHead: "See am for real device",
    galleryIntro:
      "Screenshots from Android phone and iPhone — di same screens wey you go use to add server, work for terminal, run plenty session, and move file with SFTP.",
    carouselPrev: "Di screenshot wey dey before",
    carouselNext: "Di next screenshot",
    carouselDot: "Go position {n}",
    videoHead: "See am as e dey work",
    videoIntro: "Short demos for di two platforms. Android: tmux wey dey switch go another window, SFTP file transfer, install and chat wit di AI Chat plugin, Eternal Terminal, and Recent Sessions wey you fit open with one tap. iOS: saved servers wey dem group, connect options wit tmux auto-attach, live terminal session, and di Tmux manager.",
    videoAlt: "Android demo of tmux wey dey switch go another window, SFTP file download, install and use di AI Chat plugin, di Eternal Terminal transport, and Recent Sessions",
    videoIosAlt: "iOS demo of saved servers wey dem group, connect options wit tmux auto-attach and port forwarding, live SSH terminal session, and di Tmux manager wey dey switch windows",
    lightboxClose: "Close am",
    lightboxPrev: "Di one before",
    lightboxNext: "Di next one",
    betaJoin: "Join di beta",
    betaOr: "or email",
    betaRequest: "to request private beta access",
    galleryAlts: [
      "Mobile SSH start screen for phone, wit Servers, Credentials, Logs, Settings, Debug and About tiles.",
      "Add Server dialog for phone, dey show host, port, credentials, private key and port forward fields.",
      "Single-session SSH terminal for phone, wit di extra key row down.",
      "Two SSH session for side-by-side split view for phone.",
      "Two SSH session wey stack vertical for phone wit di active pane highlighted.",
      "SFTP file transfer screen for phone, wit My Phone and Remote Host panes.",
      "About dialog for phone, dey show version, author, license and website fields.",
      "Generate SSH Key dialog for phone wit label, user, key type, and passphrase fields.",
      "Public Key dialog for phone wey dey show di key wey dem make wit copy, share, and save options.",
      "Saved Servers screen wey dey show servers wey dem arrange enter collapsible Work and Personal folder groups.",
      "SSH terminal for phone wit https:// URLs wey dey underline as tappable clickable links.",
      "Mobile SSH home screen for phone wey dey show Recent Sessions list to resume SSH connection wit one tap.",
      "Tmux manager for phone wey dey list tmux sessions, windows, and panes wit buttons to attach, rename, and switch.",
      "Plugins screen for phone wey dey show plugin catalog wey you fit install, wit Tailscale, WireGuard, and VS Code.",
      "AI Chat plugin for phone wey dey stream reply from local llama3.2 model wey dey run on di remote server over SSH.",
      "Add Server dialog for phone wit di transport set to Eternal Terminal so session go survive network drop."
    ],
    galleryIosAlts: [
      "Mobile SSH connect form for iPhone wit server, authentication, folder, and transport fields.",
      "Saved Servers for iPhone wey dem arrange enter Production and Staging groups wit server search.",
      "Live SSH terminal for iPhone wit tmux status bar and di extra key row down.",
      "Two SSH session side by side for grid for iPhone wit tap-to-focus panes.",
      "File Transfer for iPhone wit My Phone and Remote Host panes and log of transfer wey don finish.",
      "Key authentication for iPhone wit Ed25519 key wey dem generate on device and public key wey you fit copy.",
      "Tmux manager for iPhone wey dey list sessions and windows wit attach, rename, and kill actions — bell dey show agent wey dey wait for input.",
      "SSH terminal for iPhone wey attach to tmux window dey show code for remote editor.",
      "Plugins catalog for iPhone wit Tailscale, WireGuard, VS Code, AI Chat, and Open WebUI wey you fit install.",
      "Connect form for iPhone wit di transport set to Eternal Terminal so session go survive network drop.",
      "Agent alert settings for iPhone wit vibration, sound, and headphones-only toggles.",
      "Mobile SSH connect screen for iPhone wit Recent section to reconnect wit one tap."
    ],
    compareHead: "Where e stand next to Termux and Termius",
    compareIntro:
      "Mobile SSH na intentionally narrow tool: e no be full Linux environment, e no be cross-platform team vault. Na local SSH/SFTP tool for Android and iOS wey give fast access to di session controls wey mobile user dey need pass.",
    compareGuideTitle: "Comparison guide",
    compareGuideText: "When to choose Mobile SSH, Termux, or Termius for your phone or tablet.",
    privacyTitle: "Privacy policy",
    privacyText: "Check wetin connection data dey stay local and wetin dem send go your server."
  },
  features: {
    metaTitle: "Features | Mobile SSH",
    metaDescription:
      "Top Mobile SSH features for SSH on Android and iOS: terminal, Eternal Terminal, tmux manager, SFTP, private keys, port forwarding, and plugins.",
    eyebrow: "Feature list",
    h1: "Mobile SSH features",
    intro:
      "Mobile SSH dey build for direct SSH use from Android and iOS devices: open terminal, keep am alive, move file, save server, and recover quick when mobile wahala interrupt you.",
    groups: [
      {
        title: "Platforms",
        items: [
          "Android 8.0 or newer — install am from Google Play",
          "iOS 16 or newer for iPhone and iPad — join di public beta for TestFlight",
          "Encrypted backups dey work for both sides: export for one platform, import for di other one"
        ]
      },
      {
        title: "Connections",
        items: [
          "Password login and private key login",
          "Ed25519, RSA, ECDSA and DSA private keys for Android; Ed25519 and ECDSA (P-256/384/521) for iOS",
          "Saved server profile wit host, port, username, credential, private key and optional tunnel spec",
          "Search saved servers by name or host",
          "Search-first Add Session flow: pick saved server from dedicated search page and connect with one tap",
          "Plenty address for one saved server for LAN/VPN roaming — dem dey dial dem in order, di last address wey work go first, and reconnect go kick in when network change",
          "Reusable credential record wey you fit pick for server setup",
          "Recent session history to reconnect to common server set",
          "Login log for successful and failed try, wey dey record di exact address wey dem dial"
        ]
      },
      {
        title: "Terminal",
        items: [
          "VT100/xterm-256color style terminal behaviour wit 24-bit true color and italics",
          "Scrollback buffer of 5000 lines, wit size wey you fit configure for Android",
          "Find for di terminal — search di scrollback and di visible screen and jump between di matches (Android and iOS)",
          "Shell integration (OSC 133): jump between prompts, copy di output of one command, and get alert wen long-running command finish (Android and iOS)",
          "Inline images for di terminal via di Kitty graphics protocol (Android and iOS)",
          "Extra key row for ESC, TAB, CTRL, Shift, arrows, Home, End, PgUp, PgDn and keyboard toggle — you fit customize am for Android: add, remove, reorder, and define your own escape-sequence keys, wit reset-to-defaults",
          "Tap to focus, optional tap-to-show-keyboard setting, copy and copy-all action",
          "Pinch-to-zoom text sizing wit remote terminal resize",
          "Double-tap pane fullscreen mode",
          "Terminal text selection wit Copy, Share and Select all — long-press dey select di word, and Copy dey keep di selection so you fit share or re-copy am",
          "OSC 52 clipboard — copy text from remote tmux or vim session straight go di phone clipboard",
          "Native pass-through keyboard input — no autocorrect dey fight di shell; soft-keyboard voice dictation still dey work",
          "External and Bluetooth keyboard support for Android and iOS, including arrows, function keys, and Ctrl/Alt chords",
          "Bracketed paste so multi-line clipboard content no go run by itself",
          "Bundled Nerd Font dey render powerline, starship, devicon, and Material Design icon glyphs for Android wey di system font for don show as empty boxes",
          "Wide CJK, emoji, and combining characters dey measured and drawn correctly for Android and iOS, including grapheme clusters and zero-width joiners",
          "Terminal font wey you fit configure (system monospace, JetBrains Mono, or Source Code Pro) and ANSI color scheme (Solarized, Gruvbox, Dracula, Nord) for Android, wey dey apply live to open panes"
        ]
      },
      {
        title: "Sessions",
        items: [
          "Up to eight SSH session same time",
          "Grid layout for active session",
          "Background and screen-lock survival: foreground service for Android; tmux auto-attach dey reattach your shell for iOS",
          "Keepalive and reconnect try wit exponential backoff",
          "Active Sessions entry from start screen; ongoing notification wey dey list session — tap to open",
          "tmux command tracking and reattach hint when work break",
          "Agent alerts: notification wit optional sound and vibration when remote agent (Claude Code, Codex, etc.) need input — e dey carry di agent im own title and message via OSC 9/777 notifications; e dey play for headphones over video",
          "Eternal Terminal (ET) transport for sessions wey dey survive network drop, sleep, and IP change, wit optional automatic etserver setup over SSH",
          "Tmux manager: list and switch sessions, windows, and panes — attach, rename, create, split, zoom, or kill, wit name/date sorting and 🔔 for agents wey dey wait for input"
        ]
      },
      {
        title: "Files and tunnels",
        items: [
          "Dual-pane SFTP browser for local and remote file",
          "Upload and download queue",
          "Recursive folder upload and download between phone and remote host",
          "Remote rename, delete, create, edit and details",
          "Open file wey you don download for another app for Android straight from di local pane",
          "Sort by name or date wit per-host memory",
          "Local port forwarding wey dey save with server profile",
          "Runtime tunnel add/remove view for connected session",
          "File transfer dey follow di system light or dark theme"
        ]
      },
      {
        title: "Localisation",
        items: [
          "App UI translations: Arabic, Bengali, Chinese (Simplified and Traditional), English, French, German, Hindi, Indonesian, Japanese, Marathi, Nigerian Pidgin, Portuguese, Russian, Spanish, Tamil, Telugu, Turkish, Urdu",
          "E dey follow di system language for Android and iOS; no need for separate picker inside di app"
        ]
      },
      {
        title: "Keys and backup",
        items: [
          "Generate new Ed25519 or ECDSA keys for di device (RSA too for Android), with optional passphrase",
          "Copy, share, or save di public key wey you generate to add am to di server authorized_keys",
          "Export saved servers and credentials to backup file",
          "Optional passphrase dey encrypt di backup; import with merge or replace",
          "Backup wey no get encryption dey store passwords and keys as plain text — protect or delete di file"
        ]
      },
      {
        title: "Security",
        items: [
          "Secure screen (Android): block screenshots and screen recording and hide di app from di recents thumbnail — na opt-in setting for wen password, key, or token dey for screen",
          "Saved servers, credentials, and keys dey stay for di device — secrets dey live for di Android Keystore and di iOS Keychain, no cloud account or sync",
          "Na anonymous, opt-out usage analytics only — e no dey ever touch your servers, credentials, commands, or file content"
        ]
      },
      {
        title: "Plugins",
        items: [
          "Browse, install, and run plugins to extend Mobile SSH",
          "Plugins dey download as you need dem from public catalog and dem dey SHA-256 verified enter app-private storage",
          "Configure your own custom or private catalog source when you need am"
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
      "Di three tools dey overlap around SSH, but dem build for different job. Mobile SSH na focused SSH/SFTP client for Android and iOS, Termux na Linux environment wey dey only for Android, and Termius na cross-platform SSH client wit account-based productivity feature.",
    columns: {
      need: "Need",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "Main purpose",
        mobileSsh: "Dedicated SSH, SFTP, local tunnel and terminal client for Android and iOS.",
        termux: "Android terminal emulator and Linux environment wit APT packages.",
        termius: "Modern SSH client for Android, iOS, desktop and web-oriented team workflow."
      },
      {
        need: "Setup style",
        mobileSsh: "Enter host or save server profile, then connect direct.",
        termux: "Install packages like OpenSSH, set up shell tools, work from Linux-like command line.",
        termius: "Create or sync host, key, snippet and vault through Termius app/account model."
      },
      {
        need: "Mobile terminal control",
        mobileSsh: "Built-in extra key row, grid session, fullscreen pane, pinch zoom, text selection wit copy/share, and tmux-friendly scroll — wit native pass-through typing and external-keyboard support for both platform.",
        termux: "Powerful terminal environment; behaviour depend on di tool and config wey you install.",
        termius: "Mobile keyboard add-on, gesture, tab, autocomplete, snippet and polished terminal UX."
      },
      {
        need: "File transfer",
        mobileSsh: "Built-in SFTP dual-pane transfer tied to di active SSH session.",
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
        mobileSsh: "Local only saved server, credential, history, settings and log.",
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
        title: "Pick Mobile SSH when",
        body: "You want direct SSH access from your phone or tablet — Android or iOS — without setting up full Linux environment or cloud-synced account model. E good well well for saved server, SFTP, tmux session, and fast local tunnel workflow."
      },
      {
        title: "Pick Termux when",
        body: "You need package management, shell, compiler, scripting, rsync, curl, Git, Python, Node.js or other Linux-style tool direct on di Android device."
      },
      {
        title: "Pick Termius when",
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
      { category: "Connection",       feature: "Recent session history",                      mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Connection",       feature: "Login log",                                   mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",         feature: "SSH terminal",                                mobile: "yes",     termux: "via OpenSSH",   termius: "yes" },
      { category: "Terminal",         feature: "xterm-256color emulation",                    mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "5 000-line scrollback buffer",                mobile: "yes",     termux: "you fit configure am", termius: "yes" },
      { category: "Terminal",         feature: "Search inside terminal (scrollback)",         mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",         feature: "Extra key row (ESC/TAB/CTRL/…)",              mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "Pinch-to-zoom text sizing",                   mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "Double-tap pane to fullscreen",               mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",         feature: "URL wey fit tap for terminal output",         mobile: "yes",     termux: "partial",       termius: "yes" },
      { category: "Terminal",         feature: "Text selection: copy / share / select all",   mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "Hardware / Bluetooth keyboard support",       mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "Shell integration (OSC 133)",                 mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",         feature: "Inline images (Kitty graphics)",              mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",         feature: "Nerd Font / powerline glyph rendering",       mobile: "Android", termux: "you fit configure am", termius: "partial" },
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
      { category: "Tunnels",          feature: "Runtime add / remove tunnels",                mobile: "Android", termux: "no",            termius: "yes" },
      { category: "Keys",             feature: "Password login",                              mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Keys",             feature: "Private key login",                           mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Keys",             feature: "Key generation on device",                    mobile: "yes",     termux: "via ssh-keygen", termius: "yes" },
      { category: "Keys",             feature: "Share / save generated public key",           mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Backup",           feature: "Export / import server backup",               mobile: "yes",     termux: "via termux-backup", termius: "Pro cloud vault" },
      { category: "Backup",           feature: "Encrypted local backup file",                 mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Backup",           feature: "No account needed",                           mobile: "yes",     termux: "yes",           termius: "partial" },
      { category: "Privacy & cost",   feature: "No Pro paywall",                              mobile: "yes",     termux: "yes",           termius: "partial" },
      { category: "Privacy & cost",   feature: "No ads",                                      mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Privacy & cost",   feature: "Analytics opt-out",                           mobile: "Android", termux: "no analytics",  termius: "no" },
      { category: "Privacy & cost",   feature: "Local-only data (no cloud sync)",             mobile: "yes",     termux: "yes",           termius: "partial" },
      { category: "Privacy & cost",   feature: "Secure screen (block screenshots)",           mobile: "Android", termux: "no",            termius: "no" },
      { category: "Sessions",         feature: "Eternal Terminal (sessions wey no dey die)",  mobile: "yes",     termux: "via CLI",       termius: "no" },
      { category: "Sessions",         feature: "Auto-install etserver over SSH",              mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sessions",         feature: "tmux session manager",                        mobile: "yes",     termux: "via CLI",       termius: "no" },
      { category: "Plugins",          feature: "Plugin support",                              mobile: "yes",     termux: "via packages",  termius: "no" },
      { category: "Plugins",          feature: "Plugin catalog wey dey install on demand",    mobile: "yes",     termux: "no",            termius: "no" }
    ],
    agentAppsHeading: "Mobile SSH vs AI coding-agent app dem",
    agentAppsIntro:
      "One kind app dey grow fast now wey dem build just to drive coding agent — Claude Code, Codex, and dem friend — from your phone. Some na third-party SSH or relay app (Onepilot, Happy, Omnara); OpenAI and Anthropic don begin ship am natively too, wit Codex inside di ChatGPT app and Claude Code inside di Claude app, di two of dem dey run for di vendor own cloud. Mobile SSH dey overlap wit all of dem — you fit run those agent over SSH and get alert when dem need you — but e dey approach di work from di oda side: e be general, direct SSH client first, and agent companion second.",
    agentAppsRows: [
      { feature: "E dey run coding agent from your phone",          mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "E dey work wit any coding agent (no be one vendor)", mobile: "yes", onepilot: "yes",   happy: "Claude Code", omnara: "yes",     chatgpt: "Codex just",   claude: "Claude Code just" },
      { feature: "E dey run for your own machine (no be vendor cloud)", mobile: "yes", onepilot: "yes",  happy: "yes",         omnara: "yes",     chatgpt: "no",           claude: "partial" },
      { feature: "Direct SSH — no cloud relay",                     mobile: "yes", onepilot: "yes",      happy: "no",          omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "General SSH terminal (run any command)",          mobile: "yes", onepilot: "yes",      happy: "no",          omnara: "partial", chatgpt: "no",           claude: "no" },
      { feature: "SFTP file transfer",                              mobile: "yes", onepilot: "partial",  happy: "no",          omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "Local port forwarding",                           mobile: "yes", onepilot: "yes",      happy: "no",          omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "tmux session manager",                            mobile: "yes", onepilot: "partial",  happy: "no",          omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "Agent alert (push when di agent need input)",     mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "One-tap approve/deny for agent prompt",           mobile: "no",  onepilot: "yes",      happy: "yes",         omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "No server or SSH setup at all",                   mobile: "no",  onepilot: "no",       happy: "partial",     omnara: "partial", chatgpt: "yes",          claude: "yes" },
      { feature: "Android and iOS",                                 mobile: "yes", onepilot: "iOS just", happy: "yes",         omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "No need account",                                 mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "No Pro paywall (all feature free)",               mobile: "yes", onepilot: "no",       happy: "no",          omnara: "no",      chatgpt: "free level",   claude: "no" },
      { feature: "Open source",                                     mobile: "Apache 2.0",  onepilot: "no",       happy: "MIT",         omnara: "Apache",  chatgpt: "no",           claude: "no" }
    ],
    agentAppsNote:
      "Di native ChatGPT and Claude app dem na di smoothest way to run one vendor own agent witout any setup — no server, na just account — and dem dey add polished one-tap approve/deny screen. Di catch be say: dem dey run only dem own model for dem own cloud, witout general terminal, no SFTP or tunnel, and you no fit bring your own machine, and dem dey charge money or lock am for account. Onepilot, Happy, and Omnara dey keep di agent for hardware wey you control (Onepilot na direct SSH; Happy and Omnara na cloud relay, and Omnara need account). Mobile SSH dey connect straight to your own server witout account or vendor relay, e dey run any agent along wit full terminal, SFTP, and port forwarding, and every feature dey free — di trade-off be say you go answer agent prompt inside di terminal instead of dedicated approve/deny screen.",
  },
  privacy: {
    metaTitle: "Privacy Policy | Mobile SSH",
    metaDescription:
      "Privacy policy for Mobile SSH, including local storage, SSH data transmission, file transfer, log and app permission for Android and iOS.",
    eyebrow: "Privacy",
    h1: "Privacy Policy",
    intro:
      "Mobile SSH na local SSH client for Android and iOS. E no need Mobile SSH account, and e no provide Mobile SSH cloud sync service.",
    sections: [
      {
        heading: "Information wey dey store on your device",
        body: "If you choose to save app data, Mobile SSH go store am local on di device — for iOS, secrets dey stay inside di system Keychain. E fit include saved server profile, username, port, password, private key, key passphrase, port-forwarding rule, recent session, login attempt history, file-transfer path, file-sort preference, tmux reattach hint, app setting, and debug log when you turn on debug recording."
      },
      {
        heading: "Information wey dey send over network",
        body: "Mobile SSH dey send SSH authentication data only to di server wey you configure and connect. Terminal input/output, SFTP file content and local port-forwarded traffic dey exchange between di server and remote endpoint wey you choose. Mobile SSH no dey send dis data to any Mobile SSH analytics, advertising, telemetry or cloud sync service."
      },
      {
        heading: "File transfer and storage access",
        body: "Di file transfer feature dey browse local phone storage and remote SFTP folder so you fit upload and download file. For Android version wey require am, di app fit ask for storage access so di local browser fit read and write di file wey you choose. For iOS, di app dey reach local files and photos through di system document and photo pickers."
      },
      {
        heading: "Log and troubleshooting",
        body: "Login history and optional debug log dey store local for troubleshooting. Debug log fit include terminal event, SSH data size, touch input diagnostic, resize event and tunnel lifecycle event. Check any debug archive before you share am with support or anybody else."
      },
      { heading: "Anonymous usage analytics", body: "To understand how people dey use di app and make am better, Mobile SSH dey send anonymous usage analytics go Aptabase, a privacy-focused analytics provider wey dey work for our behalf. Na only anonymous events (like app opens and which features dem use) plus your app version, operating-system version, device model, and language. E dey use random session ID wey dey reset regularly and no dey tie to you or your device. E no dey ever include your SSH servers, hostnames, usernames, passwords, keys, commands, or file content. Dem dey send di data through encrypted (HTTPS) connection. Analytics dey on by default and you fit off am anytime for Settings; wen e off, nothing dey go out." }
    ],
    permissionsHeading: "Permissions",
    permissions: [
      { label: "Internet", body: "needed to connect to SSH server." },
      { label: "Wake lock and Wi-Fi lock", body: "use for Android to keep active SSH session alive while device dey sleep." },
      { label: "Foreground service and notifications", body: "use for Android to handle active connection for background; for iOS, notifications na for agent alerts." },
      { label: "Storage access", body: "use by file transfer and key import workflow; for iOS e dey pass through di system document and photo pickers." }
    ],
    securityHeading: "Security responsibilities",
    securityBody:
      "Protect your device wit strong screen lock if you dey save credential or private key. Only connect to server wey you trust. Di current version use local app storage (and di iOS Keychain), no be separate encrypted cloud vault. For Android, optional Secure screen setting dey block screenshots and screen recording and e dey hide di app from di recents view.",
    contactHeading: "Contact",
    contactBody: "Support contact: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  },
  docsIndex: {
    metaTitle: "Documentation | Mobile SSH",
    metaDescription: "End-user documentation for Mobile SSH on Android and iOS.",
    eyebrow: "User guide",
    h1: "Mobile SSH documentation",
    intro:
      "Use dis pages as di public guide to install Mobile SSH, connect, manage session, transfer file, do port forwarding, and troubleshoot.",
    cards: [
      { slug: "getting-started",  title: "Getting started",   text: "Install, open di app, connect to your first server and save common host." },
      { slug: "terminal",         title: "Terminal",          text: "Pane, extra key row, scroll, copy action, tmux behaviour and keyboard setting." },
      { slug: "file-transfer",    title: "File transfer",     text: "Browse phone and server file, upload, download, sort, and check remote detail." },
      { slug: "port-forwarding",  title: "Port forwarding",   text: "Configure local tunnel string and manage active forward while you dey connect." },
      { slug: "troubleshooting",  title: "Troubleshooting",   text: "Fix connection, authentication, keyboard, storage and reconnect issue." }
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
    intro: "Multi-session SSH client wit tmux, port forwarding, and SFTP.",
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
      { name: "JSch (mwiede fork) — Android",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch" },
      { name: "JZlib (bundled in JSch) — Android",   license: "BSD 3-clause" },
      { name: "jBCrypt (bundled in JSch) — Android", license: "ISC" },
      { name: "Ed25519 / Ed448 Java — Android",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java" },
      { name: "StringFog — Android",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog" },
      { name: "SwiftNIO & SwiftNIO SSH — iOS",       license: "Apache 2.0", url: "https://github.com/apple/swift-nio-ssh" },
      { name: "Swift Crypto — iOS",                  license: "Apache 2.0", url: "https://github.com/apple/swift-crypto" }
    ],
    contactHeading: "Contact",
    contactBody: "Support contact: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  }
};
