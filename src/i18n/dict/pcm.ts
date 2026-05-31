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
      { title: "Saved hosts, one-tap connect", text: "Add host once, then reconnect wit one tap — wit key, port, and any tunnel wey you don set." },
      { title: "Terminal keys for top di keyboard", text: "Dedicated row wit ESC, TAB, CTRL, ALT, FN, arrows, Home, End, PgUp/PgDn — without fighting Gboard suggestion." },
      { title: "Port forwarding without command", text: "Tunnels dey attach to di server profile and dey come up automatic when you connect." },
      { title: "E dey survive lock and network change", text: "Foreground service, wake locks and auto-reconnect dey keep di shell alive across screen-off, app switch and network change." }
    ],
    sectionAHead: "Make for Android SSH work",
    sectionAIntro:
      "Mobile SSH dey keep di admin road short: save server, connect, keep session dey alive, move file when you need am, and quick return to live terminal.",
    features: [
      { title: "SSH terminal", text: "VT100/xterm-256color terminal wit colour, cursor keys, scrollback, copy, and Android keyboard support." },
      { title: "Multi-session grid", text: "Run up to eight session same time, switch by tap, double-tap pane for fullscreen focus." },
      { title: "Private keys", text: "Use password or imported/pasted private keys; Ed25519, RSA, ECDSA and DSA dey supported." },
      { title: "SFTP transfer", text: "Carry file between phone storage and remote server wit local and remote browser panes." },
      { title: "Port forwarding", text: "Save local tunnel spec for server profile, abi add tunnel while you dey connect." },
      { title: "Reconnect workflow", text: "Foreground service, wake locks, keepalive and reconnect try dey help session survive mobile network change." },
      { title: "Terminal selection", text: "Pick terminal text to copy, share, or select di full visible buffer; di copy go enta Android clipboard." },
      { title: "Mobile keyboard friendly", text: "Gboard suggestion and voice input dey work with di extra key row; composing text dey buffer until word boundary." }
    ],
    multiHead: "One screen, plenty live shell",
    multiP1:
      "Terminal view fit hold many active SSH session for grid. Pick pane to type, use di extra key row for terminal controls, pinch to adjust text size, double-tap pane when you need fullscreen focus.",
    multiP2:
      "Session history and active-session recovery dey help you return to wetin you dey do after app switch, screen lock or Android activity recreation.",
    multiAlt:
      "Mobile SSH for 10-inch Android tablet, dey show four live SSH terminal panes side by side.",
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
      "Two stacked SSH session for phone, di active pane dey highlight.",
      "SFTP file transfer screen for phone, wit My Phone and Remote Host panes.",
      "About dialog for phone, dey show version, author, license and website fields."
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
          "Password and private key login",
          "Ed25519, RSA, ECDSA and DSA private keys wey di current app dey support",
          "Saved server profile wit host, port, user, credential, private key and optional tunnel spec",
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
          "Tap to focus, optional «tap to show keyboard», copy and copy-all action",
          "Pinch zoom to change text size, with remote terminal resize",
          "Double-tap pane fullscreen mode",
          "Terminal text selection wit Copy, Share and Select all",
          "Gboard suggestion/autocorrect and voice input support, wit composing text buffer"
        ]
      },
      {
        title: "Sessions",
        items: [
          "Up to eight SSH session same time",
          "Grid layout for active session",
          "Foreground service to help background and screen-lock survive",
          "Keepalive and reconnect try wit exponential backoff",
          "Active Sessions entry from start screen",
          "tmux command tracking and reattach hint when work break"
        ]
      },
      {
        title: "File and tunnel",
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
      }
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
