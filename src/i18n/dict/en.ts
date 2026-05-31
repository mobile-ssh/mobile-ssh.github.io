import type { Dict } from "../types";

export const en: Dict = {
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
    tagline: "Focused SSH, SFTP, and terminal workflows for Android devices.",
    documentation: "Documentation",
    comparison: "Comparison",
    privacy: "Privacy",
    contact: "Contact",
    feedback: "Feedback"
  },
  home: {
    metaTitle: "Mobile SSH - Android SSH client",
    metaDescription:
      "Mobile SSH is a focused Android SSH client with multi-session terminals, SFTP transfer, private keys, port forwarding, and tmux-aware workflows.",
    eyebrow: "Android SSH client",
    h1: "Mobile SSH",
    intro:
      "A focused SSH client for Android with multi-session terminals, private key authentication, SFTP file transfer, local port forwarding, and tmux-aware controls built for phone and tablet use.",
    versionLine: "Available in {count} languages · version {version}",
    ctaDocs: "Read the docs",
    ctaPlay: "Get it on Google Play",
    advantagesHead: "Why Mobile SSH",
    advantagesIntro: "Built around the things mobile SSH clients tend to get wrong.",
    advantages: [
      { title: "No Pro tier, no ads", text: "Every feature is in the same app. No paywall splitting essential workflows behind a Pro upgrade, no ad banners on the terminal." },
      { title: "Your data stays local", text: "Saved servers, credentials, and keys live on the device. No cloud account; nothing to be sunset." },
      { title: "Saved hosts, one-tap connect", text: "Add a host once and reconnect with a tap, including key, port, and any tunnels you have configured." },
      { title: "Terminal keys above the IME", text: "Dedicated row with ESC, TAB, CTRL, ALT, FN, arrows, Home, End, PgUp/PgDn — without fighting Gboard suggestions." },
      { title: "Port forwarding without commands", text: "Tunnels attach to the server profile and come up automatically when you connect." },
      { title: "Survives lock and roaming", text: "Foreground service, wake locks, and auto-reconnect keep shells alive through screen-off, app switches, and network changes." }
    ],
    sectionAHead: "Built around Android SSH work",
    sectionAIntro:
      "Mobile SSH keeps the common admin path short: save a server, connect, keep sessions alive, move files when needed, and get back to active terminals quickly.",
    features: [
      { title: "SSH terminal", text: "VT100/xterm-256color terminal emulation with color, cursor keys, scrollback, copy, and Android keyboard support." },
      { title: "Multi-session grid", text: "Run up to eight sessions at once, switch by tapping panes, and double-tap a pane for fullscreen focus." },
      { title: "Private keys", text: "Use passwords or imported/pasted private keys, including Ed25519, RSA, ECDSA, and DSA keys supported by the app." },
      { title: "SFTP transfer", text: "Move files between phone storage and a remote server with local and remote browser panes." },
      { title: "Port forwarding", text: "Save local tunnel specs with a server profile or add tunnels while connected." },
      { title: "Reconnect workflow", text: "Foreground service, wake locks, keepalives, and reconnect attempts help sessions survive mobile network changes." },
      { title: "Terminal selection", text: "Select terminal text to copy, share, or select all visible buffer output; copies go to the Android clipboard." },
      { title: "Mobile keyboard friendly", text: "Gboard suggestions and voice input work alongside the extra key row; composing text buffers cleanly until a word boundary." }
    ],
    multiHead: "One screen, several live shells",
    multiP1:
      "The terminal view can hold multiple active SSH sessions in a grid. Select a pane to type, use the extra key row for terminal controls, pinch to adjust text size, and double-tap a pane when you need fullscreen focus.",
    multiP2:
      "Session history and active-session recovery help you return to current work after app switches, screen lock, or Android activity recreation.",
    multiAlt:
      "Mobile SSH on a 10-inch Android tablet showing four live SSH terminal panes side by side.",
    sftpHead: "SFTP when the terminal is not enough",
    sftpBody:
      "Open file transfer from a connected session to browse phone storage and remote directories. Queue uploads and downloads, sort files, remember recent paths per host, and inspect remote file permissions when deciding what to move.",
    sftpCtaGuide: "File transfer guide",
    sftpCtaAll: "All features",
    sftpAlt:
      "Mobile SSH file transfer screen on a phone with local and remote file panes.",
    galleryHead: "See it on a real device",
    galleryIntro:
      "Screenshots from Android phones — the same screens you'll use to add servers, work in terminals, run multiple sessions, and move files over SFTP.",
    galleryAlts: [
      "Mobile SSH start screen on a phone with Servers, Credentials, Logs, Settings, Debug, and About tiles.",
      "Add Server dialog on a phone showing host, port, credentials, private key, and port forward fields.",
      "Single-session SSH terminal on a phone with the extra key row at the bottom.",
      "Two stacked SSH sessions on a phone with the active pane highlighted.",
      "SFTP file transfer screen on a phone with local My Phone and Remote Host panes.",
      "About dialog on a phone showing version, author, license, and website fields."
    ],
    compareHead: "How it fits beside Termux and Termius",
    compareIntro:
      "Mobile SSH is intentionally narrow: it is not a full Linux environment and it is not a cross-platform team vault. It is a local Android SSH/SFTP tool with fast access to the session controls mobile users need most.",
    compareGuideTitle: "Comparison guide",
    compareGuideText: "See when to choose Mobile SSH, Termux, or Termius on Android devices.",
    privacyTitle: "Privacy policy",
    privacyText: "Review what connection data is stored locally and what is sent to your servers."
  },
  features: {
    metaTitle: "Features | Mobile SSH",
    metaDescription:
      "Key Mobile SSH features for Android SSH, terminal, SFTP, private key, tmux, and port forwarding workflows.",
    eyebrow: "Feature list",
    h1: "Mobile SSH features",
    intro:
      "Mobile SSH is built for direct Android SSH usage: open terminals, keep them alive, move files, save servers, and recover quickly from mobile interruptions.",
    groups: [
      {
        title: "Connections",
        items: [
          "Password authentication and private key authentication",
          "Ed25519, RSA, ECDSA, and DSA private keys supported by the current app implementation",
          "Saved server profiles with host, port, username, credential, private key, and optional tunnel specs",
          "Reusable credential records that can be selected from server setup",
          "Recent session history for reconnecting to common server sets",
          "Login log for successful and failed attempts"
        ]
      },
      {
        title: "Terminal",
        items: [
          "VT100/xterm-256color style terminal behavior",
          "5000-line scrollback buffer",
          "Extra key row for ESC, TAB, CTRL, Shift, arrows, Home, End, PgUp, PgDn, and keyboard toggle",
          "Tap-to-focus, optional tap-to-show-keyboard setting, copy and copy-all actions",
          "Pinch-to-zoom text sizing with remote terminal resize",
          "Double-tap pane fullscreen mode",
          "Terminal text selection with Copy, Share, and Select all actions",
          "Gboard suggestions/autocorrect and voice input support, with composing-text buffering for terminals"
        ]
      },
      {
        title: "Sessions",
        items: [
          "Up to eight concurrent SSH sessions",
          "Grid layout for active sessions",
          "Foreground service support for background and screen-lock resilience",
          "Keepalive and reconnect attempts with exponential backoff",
          "Active Sessions entry point from the start screen",
          "tmux command tracking and reattach hints for interrupted work"
        ]
      },
      {
        title: "Files and tunnels",
        items: [
          "Dual-pane SFTP browser for local and remote files",
          "Queued upload and download operations",
          "Remote rename, delete, create, edit, and details flows",
          "Sort by name or date with per-host persistence",
          "Local port forwarding saved with server profiles",
          "Runtime tunnel add/remove view for connected sessions"
        ]
      },
      {
        title: "Localization",
        items: [
          "App UI translations: Arabic, Bengali, Chinese (Simplified and Traditional), English, French, German, Hindi, Indonesian, Japanese, Marathi, Nigerian Pidgin, Portuguese, Russian, Spanish, Tamil, Telugu, Turkish, Urdu",
          "Follows the Android system language; no per-app picker required"
        ]
      }
    ],
    security:
      "Security note: The current app stores saved server and credential records locally on the Android device. It does not provide cloud sync. Protect the device with a strong screen lock and avoid saving credentials on shared devices."
  },
  compare: {
    metaTitle: "Mobile SSH vs Termux vs Termius on Android",
    metaDescription:
      "Balanced comparison of Mobile SSH, Termux, and Termius for Android SSH workflows.",
    eyebrow: "Android SSH options",
    h1: "Mobile SSH vs Termux vs Termius",
    intro:
      "These tools overlap around SSH, but they are built for different jobs. Mobile SSH is a focused Android SSH/SFTP client, Termux is a Linux environment, and Termius is a cross-platform SSH client with account-based productivity features.",
    columns: {
      need: "Need",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "Primary purpose",
        mobileSsh: "Dedicated SSH, SFTP, local tunnel, and terminal client for Android.",
        termux: "Android terminal emulator and Linux environment with APT packages.",
        termius: "Modern SSH client across Android, iOS, desktop, and web-oriented team workflows."
      },
      {
        need: "Setup style",
        mobileSsh: "Enter a host or save a server profile, then connect directly.",
        termux: "Install packages such as OpenSSH, configure shell tools, and work from a Linux-like command line.",
        termius: "Create or sync hosts, keys, snippets, and vault items through the Termius app/account model."
      },
      {
        need: "Android terminal controls",
        mobileSsh: "Built-in extra key row, grid sessions, fullscreen panes, pinch zoom, text selection with copy/share, Gboard suggestions, voice input, and tmux-aware scrolling.",
        termux: "Powerful terminal environment; terminal behavior depends on installed tools and configuration.",
        termius: "Mobile keyboard add-on, gestures, tabs, autocomplete, snippets, and polished terminal UX."
      },
      {
        need: "File transfer",
        mobileSsh: "Built-in SFTP dual-pane transfer tied to the active SSH session.",
        termux: "Use command-line tools such as scp, sftp, rsync, or installed file utilities.",
        termius: "Built-in SFTP and host/key management features."
      },
      {
        need: "Multi-session work",
        mobileSsh: "Up to eight concurrent SSH sessions in an Android grid.",
        termux: "Use terminal multiplexers such as tmux inside Termux or remote shells.",
        termius: "Tabs and split-view style workflows, depending on platform and plan."
      },
      {
        need: "Data model",
        mobileSsh: "Local-only saved servers, credentials, history, settings, and logs.",
        termux: "Local Linux-like filesystem and packages inside the Termux app environment.",
        termius: "Encrypted vaults for hosts, keys, snippets, forwarding rules, known hosts, and team sharing."
      },
      {
        need: "Best fit",
        mobileSsh: "You want a simple Android app for connecting to servers, transferring files, and keeping sessions alive.",
        termux: "You want a full command-line environment on Android and are comfortable installing/configuring packages.",
        termius: "You want cross-device sync, polished productivity features, vaults, and collaboration."
      }
    ],
    cards: [
      {
        title: "Choose Mobile SSH when",
        body: "You want direct SSH access from Android without setting up a full Linux environment or a cloud-synced account model. It is especially suited to saved servers, SFTP, tmux sessions, and quick local tunnel workflows."
      },
      {
        title: "Choose Termux when",
        body: "You need package management, shells, compilers, scripting, rsync, curl, Git, Python, Node.js, or other Linux-style tools directly on the Android device."
      },
      {
        title: "Choose Termius when",
        body: "You want a commercial, cross-platform SSH workspace with encrypted vault sync, team sharing, keychain management, snippets, and a consistent app on multiple devices."
      }
    ]
  },
  privacy: {
    metaTitle: "Privacy Policy | Mobile SSH",
    metaDescription:
      "Privacy policy for Mobile SSH, including local storage, SSH data transmission, file transfer, logs, and Android permissions.",
    eyebrow: "Privacy",
    h1: "Privacy Policy",
    intro:
      "Mobile SSH is designed as a local Android SSH client. It does not require a Mobile SSH account and does not provide a Mobile SSH cloud sync service.",
    sections: [
      {
        heading: "Information stored on your device",
        body: "If you choose to save app data, Mobile SSH stores it locally on the Android device. This may include saved server profiles, usernames, ports, passwords, private keys, key passphrases, port-forwarding rules, recent sessions, login attempt history, file-transfer paths, file-sort preferences, tmux reattach hints, app settings, and debug logs when debug recording is enabled."
      },
      {
        heading: "Information sent over the network",
        body: "Mobile SSH sends SSH authentication data only to servers that you configure and connect to. Terminal input/output, SFTP file contents, and local port-forwarded traffic are exchanged with the servers and remote endpoints you choose. Mobile SSH does not send this data to a Mobile SSH analytics, advertising, telemetry, or cloud sync service."
      },
      {
        heading: "File transfer and storage access",
        body: "The file transfer feature browses local phone storage and remote SFTP directories so you can upload and download files. On Android versions that require it, the app may ask for storage access so the local file browser can read and write selected files."
      },
      {
        heading: "Logs and troubleshooting",
        body: "Login history and optional debug logs are stored locally for troubleshooting. Debug logs can include terminal events, SSH data sizes, touch input diagnostics, resize events, and tunnel lifecycle events. Review any debug archive before sharing it with support or another person."
      },
      { heading: "Anonymous usage analytics", body: "To understand how the app is used and improve it, Mobile SSH sends anonymous usage analytics to Aptabase, a privacy-focused analytics provider acting on our behalf. This is limited to anonymous events (such as app launches and which features are used) together with your app version, Android version, device model, and language. It uses a random session identifier that resets regularly and is not tied to you or your device. It never includes your SSH servers, hostnames, usernames, passwords, keys, commands, or file contents. Data is sent over an encrypted (HTTPS) connection. Analytics is on by default and can be turned off at any time in Settings; when off, nothing is sent." }
    ],
    permissionsHeading: "Permissions",
    permissions: [
      { label: "Internet", body: "required to connect to SSH servers." },
      { label: "Wake lock and Wi-Fi lock", body: "used to keep active SSH sessions alive while the device sleeps." },
      { label: "Foreground service and notifications", body: "used for active connection handling in the background." },
      { label: "Storage access", body: "used by file transfer and key import workflows." }
    ],
    securityHeading: "Security responsibilities",
    securityBody:
      "Protect your Android device with a strong screen lock if you save credentials or private keys. Only connect to servers you trust. The current implementation uses local app storage rather than a separate encrypted cloud vault.",
    contactHeading: "Contact",
    contactBody: "Support contact: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  },
  docsIndex: {
    metaTitle: "Documentation | Mobile SSH",
    metaDescription: "End-user documentation for Mobile SSH on Android.",
    eyebrow: "User guide",
    h1: "Mobile SSH documentation",
    intro:
      "Use these pages as the public guide for installing, connecting, managing sessions, transferring files, forwarding ports, and troubleshooting Mobile SSH.",
    cards: [
      { slug: "getting-started",  title: "Getting started",    text: "Install, open the app, connect to your first server, and save common hosts." },
      { slug: "terminal",         title: "Terminal",           text: "Use panes, the extra key row, scrolling, copy actions, tmux behavior, and keyboard settings." },
      { slug: "file-transfer",    title: "File transfer",      text: "Browse phone and server files, upload, download, sort, and inspect remote file details." },
      { slug: "port-forwarding",  title: "Port forwarding",    text: "Configure local tunnel strings and manage active forwards while connected." },
      { slug: "troubleshooting",  title: "Troubleshooting",    text: "Fix connection, authentication, keyboard, storage, and reconnect issues." }
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
    metaDescription:
      "About Mobile SSH: version, author, license, and open-source notices for the Android SSH client.",
    eyebrow: "About",
    h1: "About Mobile SSH",
    intro: "Multi-session SSH client with tmux, port forwards, and SFTP.",
    appHeading: "About the app",
    versionLabel: "Version",
    authorLabel: "Author",
    authorValue: "Dmitry Kozlov",
    licenseLabel: "License",
    licenseValue: "MIT",
    websiteLabel: "Website",
    privacyLabel: "Privacy policy",
    privacyLinkText: "Privacy policy",
    noticesHeading: "Open source notices",
    noticesIntro:
      "Mobile SSH is built on the following open-source libraries. Each is used under its respective license.",
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
