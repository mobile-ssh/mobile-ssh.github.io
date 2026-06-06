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
    tagline: "Focused SSH, SFTP and terminal workflow wey dey work on Android.",
    documentation: "Documentation",
    comparison: "Comparison",
    privacy: "Privacy",
    contact: "Contact",
    feedback: "Feedback"
  },
  home: {
    metaTitle: "Mobile SSH — SSH client for Android",
    metaDescription:
      "Mobile SSH na focused Android SSH client wey carry multi-session terminals, SFTP transfer, private keys, port forwarding, and tmux-friendly workflow.",
    eyebrow: "Android SSH client",
    h1: "Mobile SSH",
    intro:
      "Na one focused SSH client for Android: multi-session terminals, private key login, SFTP file transfer, local port forwarding, and tmux-friendly controls wey dem build for phone and tablet.",
    versionLine: "Dey for {count} language · version {version}",
    ctaDocs: "Read di docs",
    ctaPlay: "Get am for Google Play",
    advantagesHead: "Why Mobile SSH",
    advantagesIntro: "We build am wit di tins wey mobile SSH apps dey miss for mind.",
    advantages: [
      { title: "No Pro level, no ads", text: "All di features dey for di same app. No paywall wey go hide important work behind Pro upgrade, no ad banner for di terminal." },
      { title: "Your data dey for your phone", text: "Saved servers, credentials and keys dey stay for di device. No cloud account; nothing wey dem fit shut down." },
      { title: "Saved hosts, search to connect", text: "Add host once, then search and tap to connect — wit key, port, and any tunnel wey you don set." },
      { title: "Agent alerts", text: "You go get notification — wit sound and vibration — di moment Claude Code, Codex, or another remote agent need your input. E dey play for headphones even when video dey run." },
      { title: "Terminal keys for top di keyboard", text: "Dedicated row wit ESC, TAB, CTRL, ALT, FN, arrows, Home, End, PgUp/PgDn — without fighting Gboard suggestion." },
      { title: "Port forwarding without command", text: "Tunnels dey attach to di server profile and dey come up automatic when you connect." },
      { title: "E dey survive lock and roaming", text: "Foreground service, wake locks and auto-reconnect dey keep di shell alive across screen-off, app switch and network change." }
    ],
    sectionAHead: "Make for Android SSH work",
    sectionAIntro:
      "Mobile SSH dey keep di admin road short: save server, connect, keep session dey alive, move file when you need am, and quick return to live terminal.",
    features: [
      { title: "SSH terminal", text: "xterm-256color terminal emulation wit 5000-line scrollback, colour, cursor keys, copy/share, and pinch-to-zoom text sizing." },
      { title: "Multi-session grid", text: "Up to eight SSH session for resizable grid — tap pane to focus, double-tap for fullscreen, pinch to resize text." },
      { title: "Clickable links", text: "URLs wey dey inside di terminal dey underline and go open for browser with one tap — no need to copy or switch app." },
      { title: "Server folders", text: "Arrange saved servers for collapsible groups. Tap group header to collapse am; di folder structure dey carry enter di quick-connect picker." },
      { title: "Agent alerts", text: "Notification wit sound and vibration when remote agent (Claude Code, Codex, etc.) need your input. E dey play for headphones even during video call." },
      { title: "Private keys", text: "Password or private key login. Generate Ed25519, ECDSA, or RSA keys on device; import or paste existing keys." },
      { title: "SFTP transfer", text: "Dual-pane file browser wey dey tie to active SSH session. Queue uploads and downloads, rename, delete, and check remote permissions." },
      { title: "Port forwarding", text: "Save local tunnel spec wit server profile — tunnels dey open automatic on connect, or add/remove dem while you dey connect." },
      { title: "Reconnect workflow", text: "Foreground service, wake locks, keepalives, and exponential-backoff reconnect dey keep session alive through screen-off and roaming." },
      { title: "Backup & restore", text: "Export saved servers and credentials to encrypted backup file; import with merge or replace to move between devices." }
    ],
    multiHead: "One screen, plenty live shell",
    multiP1:
      "Terminal view fit hold many active SSH session for grid. Pick pane to type, use di extra key row for terminal controls, pinch to adjust text size, double-tap pane when you need fullscreen focus.",
    multiP2:
      "Session history and active-session recovery dey help you return to wetin you dey do after app switch, screen lock or Android activity recreation.",
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
      "Screenshots from Android phone — di same screens wey you go use to add server, work for terminal, run plenty session, and move file with SFTP.",
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
      "SSH terminal for phone wit https:// URLs wey dey underline as tappable clickable links."
    ],
    compareHead: "Where e stand next to Termux and Termius",
    compareIntro:
      "Mobile SSH na intentionally narrow tool: e no be full Linux environment, e no be cross-platform team vault. Na local Android SSH/SFTP tool wey give fast access to di session controls wey mobile user dey need pass.",
    compareGuideTitle: "Comparison guide",
    compareGuideText: "When to choose Mobile SSH, Termux, or Termius for Android device.",
    privacyTitle: "Privacy policy",
    privacyText: "Check wetin connection data dey stay local and wetin dem send go your server."
  },
  features: {
    metaTitle: "Features | Mobile SSH",
    metaDescription:
      "Top Mobile SSH features for Android SSH, terminal, SFTP, private key, tmux and port forwarding workflow.",
    eyebrow: "Feature list",
    h1: "Mobile SSH features",
    intro:
      "Mobile SSH dey build for direct Android SSH use: open terminal, keep am alive, move file, save server, and recover quick when mobile network mess up.",
    groups: [
      {
        title: "Connections",
        items: [
          "Password login and private key login",
          "Ed25519, RSA, ECDSA and DSA private keys wey di current app dey support",
          "Saved server profile wit host, port, username, credential, private key and optional tunnel spec",
          "Search saved servers by name or host",
          "Search-first Add Session flow: pick saved server from dedicated search page and connect with one tap",
          "Reusable credential record wey you fit pick for server setup",
          "Recent session history to reconnect to common server set",
          "Login log for successful and failed try"
        ]
      },
      {
        title: "Terminal",
        items: [
          "VT100/xterm-256color style terminal behaviour",
          "5000-line scrollback buffer",
          "Extra key row for ESC, TAB, CTRL, Shift, arrows, Home, End, PgUp, PgDn and keyboard toggle",
          "Tap to focus, optional tap-to-show-keyboard setting, copy and copy-all action",
          "Pinch-to-zoom text sizing wit remote terminal resize",
          "Double-tap pane fullscreen mode",
          "Terminal text selection wit Copy, Share and Select all action",
          "Gboard suggestion/autocorrect and voice input support, wit composing-text buffer for terminals"
        ]
      },
      {
        title: "Sessions",
        items: [
          "Up to eight SSH session same time",
          "Grid layout for active session",
          "Foreground service to help background and screen-lock survive",
          "Keepalive and reconnect try wit exponential backoff",
          "Active Sessions entry from start screen; ongoing notification wey dey list session — tap to open",
          "tmux command tracking and reattach hint when work break",
          "Agent alerts: notification wit optional sound and vibration when remote agent (Claude Code, Codex, etc.) need input; e dey play for headphones over video"
        ]
      },
      {
        title: "Files and tunnels",
        items: [
          "Dual-pane SFTP browser for local and remote file",
          "Upload and download queue",
          "Remote rename, delete, create, edit and details",
          "Sort by name or date wit per-host memory",
          "Local port forwarding wey dey save with server profile",
          "Runtime tunnel add/remove view for connected session"
        ]
      },
      {
        title: "Localisation",
        items: [
          "App UI translations: Arabic, Bengali, Chinese (Simplified and Traditional), English, French, German, Hindi, Indonesian, Japanese, Marathi, Nigerian Pidgin, Portuguese, Russian, Spanish, Tamil, Telugu, Turkish, Urdu",
          "E dey follow Android system language; no need for separate picker inside di app"
        ]
      },
      {
        title: "Keys and backup",
        items: [
          "Generate new Ed25519, ECDSA, or RSA keys for di device, with optional passphrase",
          "Copy, share, or save di public key wey you generate to add am to di server authorized_keys",
          "Export saved servers and credentials to backup file",
          "Optional passphrase dey encrypt di backup; import with merge or replace",
          "Backup wey no get encryption dey store passwords and keys as plain text — protect or delete di file"
        ]
      }
    ],
    security:
      "Security note: di current app dey store saved server and credential record local for Android device. No cloud sync. Use strong screen lock to protect device, and no save credential on shared device."
  },
  compare: {
    metaTitle: "Mobile SSH vs Termux vs Termius on Android",
    metaDescription:
      "Balanced comparison of Mobile SSH, Termux and Termius for Android SSH workflow.",
    eyebrow: "Android SSH options",
    h1: "Mobile SSH vs Termux vs Termius",
    intro:
      "Di three tools dey overlap around SSH, but dem build for different job. Mobile SSH na focused Android SSH/SFTP client, Termux na Linux environment, and Termius na cross-platform SSH client wit account-based productivity feature.",
    columns: {
      need: "Need",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "Main purpose",
        mobileSsh: "Dedicated SSH, SFTP, local tunnel and terminal client for Android.",
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
        need: "Android terminal control",
        mobileSsh: "Built-in extra key row, grid session, fullscreen pane, pinch zoom, text selection wit copy/share, Gboard suggestion, voice input and tmux-friendly scroll.",
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
        mobileSsh: "Up to eight SSH session same time for Android grid.",
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
        mobileSsh: "You want simple Android app to connect server, transfer file and keep session alive.",
        termux: "You want full command-line environment for Android, and you comfortable to install and config package.",
        termius: "You want cross-device sync, polished productivity, vault and collaboration."
      }
    ],
    cards: [
      {
        title: "Pick Mobile SSH when",
        body: "You want direct SSH access from Android without setting up full Linux environment or cloud-synced account model. E good well well for saved server, SFTP, tmux session, and fast local tunnel workflow."
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
      { category: "Connection",       feature: "Saved server profile",                       mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Connection",       feature: "Search saved servers",                        mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Connection",       feature: "Server folders / groups",                     mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Connection",       feature: "Search-first Add Session picker",             mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Connection",       feature: "Reusable credential record",                  mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Connection",       feature: "Recent session history",                      mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Connection",       feature: "Login log",                                   mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",         feature: "SSH terminal",                                mobile: "yes",     termux: "via OpenSSH",   termius: "yes" },
      { category: "Terminal",         feature: "xterm-256color emulation",                    mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "5 000-line scrollback buffer",                mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "Extra key row (ESC/TAB/CTRL/…)",              mobile: "yes",     termux: "partial",       termius: "yes" },
      { category: "Terminal",         feature: "Pinch-to-zoom text sizing",                   mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "Double-tap pane to fullscreen",               mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",         feature: "URL wey fit tap for terminal output",         mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Terminal",         feature: "Text selection: copy / share / select all",   mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "Gboard suggestion & voice input",             mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Sessions",         feature: "Plenty SSH session same time",                mobile: "up to 8", termux: "via tmux",      termius: "yes" },
      { category: "Sessions",         feature: "Grid pane layout",                            mobile: "yes",     termux: "no",            termius: "tabs" },
      { category: "Sessions",         feature: "tmux-friendly scroll",                        mobile: "yes",     termux: "yes",           termius: "no" },
      { category: "Sessions",         feature: "tmux reattach hint on reconnect",             mobile: "yes",     termux: "yes",           termius: "no" },
      { category: "Sessions",         feature: "Agent alerts (Claude Code / Codex)",          mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sessions",         feature: "Ongoing notification wit session list",       mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sessions",         feature: "Foreground service & wake lock",              mobile: "yes",     termux: "partial",       termius: "yes" },
      { category: "Sessions",         feature: "Auto-reconnect wit backoff",                  mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Files",            feature: "Built-in SFTP file transfer UI",              mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Files",            feature: "Dual-pane local + remote browser",            mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Files",            feature: "Upload / download queue",                     mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Files",            feature: "Remote rename / delete / create",             mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Files",            feature: "Remote file permissions view",                mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Files",            feature: "Sort by name or date per host",               mobile: "yes",     termux: "no",            termius: "partial" },
      { category: "Tunnels",          feature: "Local port forwarding",                       mobile: "yes",     termux: "via CLI",       termius: "yes" },
      { category: "Tunnels",          feature: "Saved tunnels wit server profile",            mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Tunnels",          feature: "Runtime add / remove tunnels",                mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Keys",             feature: "Password login",                              mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Keys",             feature: "Private key login",                           mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Keys",             feature: "Key generation on device",                    mobile: "yes",     termux: "via ssh-keygen", termius: "yes" },
      { category: "Keys",             feature: "Share / save generated public key",           mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Backup",           feature: "Export / import server backup",               mobile: "yes",     termux: "no",            termius: "cloud vault" },
      { category: "Backup",           feature: "Encrypted local backup file",                 mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Backup",           feature: "No account needed",                           mobile: "yes",     termux: "yes",           termius: "no" },
      { category: "Privacy & cost",   feature: "No Pro paywall",                              mobile: "yes",     termux: "yes",           termius: "partial" },
      { category: "Privacy & cost",   feature: "No ads",                                      mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Privacy & cost",   feature: "Analytics opt-out",                           mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Privacy & cost",   feature: "Local-only data (no cloud sync)",             mobile: "yes",     termux: "yes",           termius: "no" }
    ]
  },
  privacy: {
    metaTitle: "Privacy Policy | Mobile SSH",
    metaDescription:
      "Privacy policy for Mobile SSH, including local storage, SSH data transmission, file transfer, log and Android permission.",
    eyebrow: "Privacy",
    h1: "Privacy Policy",
    intro:
      "Mobile SSH na local Android SSH client. E no need Mobile SSH account, and e no provide Mobile SSH cloud sync service.",
    sections: [
      {
        heading: "Information wey dey store on your device",
        body: "If you choose to save app data, Mobile SSH go store am local on di Android device. E fit include saved server profile, username, port, password, private key, key passphrase, port-forwarding rule, recent session, login attempt history, file-transfer path, file-sort preference, tmux reattach hint, app setting, and debug log when you turn on debug recording."
      },
      {
        heading: "Information wey dey send over network",
        body: "Mobile SSH dey send SSH authentication data only to di server wey you configure and connect. Terminal input/output, SFTP file content and local port-forwarded traffic dey exchange between di server and remote endpoint wey you choose. Mobile SSH no dey send dis data to any Mobile SSH analytics, advertising, telemetry or cloud sync service."
      },
      {
        heading: "File transfer and storage access",
        body: "Di file transfer feature dey browse local phone storage and remote SFTP folder so you fit upload and download file. For Android version wey require am, di app fit ask for storage access so di local browser fit read and write di file wey you choose."
      },
      {
        heading: "Log and troubleshooting",
        body: "Login history and optional debug log dey store local for troubleshooting. Debug log fit include terminal event, SSH data size, touch input diagnostic, resize event and tunnel lifecycle event. Check any debug archive before you share am with support or anybody else."
      },
      { heading: "Anonymous usage analytics", body: "To understand how people dey use di app and make am better, Mobile SSH dey send anonymous usage analytics go Aptabase, a privacy-focused analytics provider wey dey work for our behalf. Na only anonymous events (like app opens and which features dem use) plus your app version, Android version, device model, and language. E dey use random session ID wey dey reset regularly and no dey tie to you or your device. E no dey ever include your SSH servers, hostnames, usernames, passwords, keys, commands, or file content. Dem dey send di data through encrypted (HTTPS) connection. Analytics dey on by default and you fit off am anytime for Settings; wen e off, nothing dey go out." }
    ],
    permissionsHeading: "Permissions",
    permissions: [
      { label: "Internet", body: "needed to connect to SSH server." },
      { label: "Wake lock and Wi-Fi lock", body: "use to keep active SSH session alive while device dey sleep." },
      { label: "Foreground service and notifications", body: "use to handle active connection for background." },
      { label: "Storage access", body: "use by file transfer and key import workflow." }
    ],
    securityHeading: "Security responsibilities",
    securityBody:
      "Protect your Android device wit strong screen lock if you dey save credential or private key. Only connect to server wey you trust. Di current version use local app storage, no be separate encrypted cloud vault.",
    contactHeading: "Contact",
    contactBody: "Support contact: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  },
  docsIndex: {
    metaTitle: "Documentation | Mobile SSH",
    metaDescription: "End-user documentation for Mobile SSH on Android.",
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
    metaDescription: "About Mobile SSH: version, author, license, and open-source notice for di Android SSH client.",
    eyebrow: "About",
    h1: "About Mobile SSH",
    intro: "Multi-session SSH client wit tmux, port forwarding, and SFTP.",
    appHeading: "About di app",
    versionLabel: "Version",
    authorLabel: "Author",
    authorValue: "Dmitry Kozlov",
    licenseLabel: "License",
    licenseValue: "MIT",
    websiteLabel: "Website",
    privacyLabel: "Privacy policy",
    privacyLinkText: "Privacy policy",
    noticesHeading: "Open source notice",
    noticesIntro: "Mobile SSH dey use di open-source libraries below; each one dey under im own license.",
    notices: [
      { name: "JSch (mwiede fork)",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch" },
      { name: "JZlib (bundled in JSch)",   license: "BSD 3-clause" },
      { name: "jBCrypt (bundled in JSch)", license: "ISC" },
      { name: "Ed25519 / Ed448 Java",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java" },
      { name: "StringFog",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog" }
    ],
    contactHeading: "Contact",
    contactBody: "Support contact: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  }
};
