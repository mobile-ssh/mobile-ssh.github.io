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
    tagline: "Focused SSH, SFTP, and terminal workflows for Android and iOS devices.",
    documentation: "Documentation",
    comparison: "Comparison",
    privacy: "Privacy",
    contact: "Contact",
    feedback: "Feedback",
    beta: "Beta testing"
  },
  home: {
    metaTitle: "Mobile SSH - SSH client for Android & iOS",
    metaDescription:
      "Mobile SSH is a focused SSH client for Android and iOS with multi-session terminals, Eternal Terminal resilient sessions, a tmux manager, SFTP transfer, private keys, port forwarding, and plugins.",
    eyebrow: "SSH client for Android & iOS",
    h1: "Mobile SSH",
    intro:
      "A focused SSH client for Android and iOS with multi-session terminals, Eternal Terminal sessions that survive network drops, a built-in tmux manager, SFTP file transfer, local port forwarding, and plugins — built for phone and tablet use.",
    versionLine: "Available in {count} languages · Android {version} · iOS {iosVersion} beta",
    ctaDocs: "Read the docs",
    ctaPlay: "Get it on Google Play",
    ctaIos: "Get the iOS beta on TestFlight",
    platformAndroid: "Android",
    platformIos: "iOS — iPhone & iPad",
    advantagesHead: "Why Mobile SSH",
    advantagesIntro: "Built around the things mobile SSH clients tend to get wrong.",
    advantages: [
      { title: "No Pro tier, no ads", text: "Every feature is in the same app. No paywall splitting essential workflows behind a Pro upgrade, no ad banners on the terminal." },
      { title: "Your data stays local", text: "Saved servers, credentials, and keys live on the device. No cloud account; nothing to be sunset." },
      { title: "Saved hosts, search to connect", text: "Add a host once, then search and tap to connect — keys, ports, and tunnels come with it." },
      { title: "Agent alerts", text: "Get a notification — with sound and vibration — the moment Claude Code, Codex, or another remote agent needs your input. Plays in headphones even over video." },
      { title: "Terminal keys above the keyboard", text: "Dedicated row with ESC, TAB, CTRL, ALT, FN, arrows, Home, End, PgUp/PgDn on Android and iOS — terminal keys without fighting autocorrect." },
      { title: "Port forwarding without commands", text: "Tunnels attach to the server profile and come up automatically when you connect." },
      { title: "Survives lock and roaming", text: "Give a saved server several addresses — a home LAN IP and a VPN IP — and Mobile SSH dials whichever answers, trying the last one that worked first, and reconnects the moment the network changes. On Android a foreground service and wake locks hold shells through screen-off; on iOS auto-reconnect plus tmux auto-attach put you back where you left off." },
      { title: "Eternal Terminal", text: "An optional ET transport keeps the remote shell alive across network drops, sleep, and IP changes. No etserver on the host? Mobile SSH can install it over SSH for you." },
      { title: "Extend it with plugins", text: "Browse a public catalog and install plugins on demand to add new workflows. Each plugin is downloaded and SHA-256 verified into app-private storage." }
    ],
    sectionAHead: "Built around mobile SSH work",
    sectionAIntro:
      "Mobile SSH keeps the common admin path short: save a server, connect, keep sessions alive, move files when needed, and get back to active terminals quickly.",
    features: [
      { title: "SSH terminal", text: "xterm-256color terminal with 24-bit true color, italics, in-terminal search, OSC 133 shell integration, and pinch-to-zoom text sizing — plus a configurable font and color scheme and Nerd Font powerline/icon glyphs on Android." },
      { title: "Multi-session grid", text: "Up to eight SSH sessions in a resizable grid — tap a pane to focus, double-tap for fullscreen, pinch to resize text." },
      { title: "Clickable links", text: "URLs in the terminal are underlined and open in the browser with a tap — no copying or switching apps needed." },
      { title: "Server folders", text: "Organize saved servers into collapsible groups. Tap a group header to collapse it; the folder structure carries into the quick-connect picker." },
      { title: "Agent alerts", text: "Notification with sound and vibration when a remote agent (Claude Code, Codex, etc.) needs your input. Plays in headphones even during video calls." },
      { title: "Private keys", text: "Password or private key auth. Generate Ed25519 or ECDSA keys on device (RSA too on Android); import or paste existing keys." },
      { title: "SFTP transfer", text: "Dual-pane file browser tied to an active SSH session. Queue uploads and downloads, rename, delete, and inspect remote permissions." },
      { title: "Port forwarding", text: "Save local tunnel specs with a server profile — tunnels open automatically on connect, or add/remove them while connected." },
      { title: "Reconnect workflow", text: "Keepalives and exponential-backoff reconnect keep sessions alive through screen-off and roaming — backed by a foreground service on Android and tmux auto-attach on iOS." },
      { title: "Backup & restore", text: "Export saved servers and credentials to an encrypted backup file; import with merge or replace to move between devices — backups are interoperable between Android and iOS." },
      { title: "Eternal Terminal", text: "Connect over Eternal Terminal (ET) for sessions that survive network drops, sleep, and IP changes — with optional automatic etserver setup over SSH." },
      { title: "Tmux manager", text: "List and switch tmux sessions, windows, and panes — attach, rename, create, split, zoom, or kill. Sort by name or date; a 🔔 flags agents awaiting input." },
      { title: "Plugins", text: "Browse, install, and run plugins to extend Mobile SSH. Plugins download on demand from a public catalog and are SHA-256 verified into app-private storage." }
    ],
    multiHead: "One screen, several live shells",
    multiP1:
      "The terminal view can hold multiple active SSH sessions in a grid. Select a pane to type, use the extra key row for terminal controls, pinch to adjust text size, and double-tap a pane when you need fullscreen focus.",
    multiP2:
      "Session history and active-session recovery help you return to current work after app switches, screen lock, or the system reclaiming the app.",
    multiAlt:
      "Mobile SSH on a phone showing two live SSH terminal sessions in a side-by-side split view.",
    sftpHead: "SFTP when the terminal is not enough",
    sftpBody:
      "Open file transfer from a connected session to browse phone storage and remote directories. Queue uploads and downloads, sort files, remember recent paths per host, and inspect remote file permissions when deciding what to move.",
    sftpCtaGuide: "File transfer guide",
    sftpCtaAll: "All features",
    sftpAlt:
      "Mobile SSH file transfer screen on a phone with local and remote file panes.",
    galleryHead: "See it on a real device",
    galleryIntro:
      "Screenshots from Android phones and iPhones — the same screens you'll use to add servers, work in terminals, run multiple sessions, and move files over SFTP.",
    carouselPrev: "Previous screenshot",
    carouselNext: "Next screenshot",
    carouselDot: "Go to position {n}",
    videoHead: "See it in action",
    videoIntro: "Short demos on both platforms. Android: a tmux window switch, an SFTP file transfer, installing and chatting with the AI Chat plugin, Eternal Terminal, and one-tap Recent Sessions. iOS: grouped saved servers, connect options with tmux auto-attach, a live terminal session, and the Tmux manager.",
    videoAlt: "Android demo of a tmux window switch, an SFTP file download, installing and using the AI Chat plugin, the Eternal Terminal transport, and Recent Sessions",
    videoIosAlt: "iOS demo of grouped saved servers, connect options with tmux auto-attach and port forwarding, a live SSH terminal session, and the Tmux manager switching windows",
    lightboxClose: "Close",
    lightboxPrev: "Previous",
    lightboxNext: "Next",
    betaJoin: "Join the beta",
    betaOr: "or email",
    betaRequest: "to request private beta access",
    betaWantedTitle: "Android & iOS SSH users wanted",
    betaWantedText: "Join the closed beta and help shape Mobile SSH.",
    betaWantedCta: "See how to join →",
    betaPlayNote: "Open the Google Play link in your mobile browser, not the Google Play app — the closed test may not be visible inside the app.",
    galleryAlts: [
      "Mobile SSH start screen on a phone with Servers, Credentials, Logs, Settings, Debug, and About tiles.",
      "Add Server dialog on a phone showing host, port, credentials, private key, and port forward fields.",
      "Single-session SSH terminal on a phone with the extra key row at the bottom.",
      "Two SSH sessions in a side-by-side split view on a phone.",
      "Two SSH sessions stacked vertically on a phone with the active pane highlighted.",
      "SFTP file transfer screen on a phone with local My Phone and Remote Host panes.",
      "About dialog on a phone showing version, author, license, and website fields.",
      "Generate SSH Key dialog on a phone with label, user, key type, and passphrase fields.",
      "Public Key dialog on a phone showing the generated key with copy, share, and save options.",
      "Saved Servers screen showing servers organized into collapsible Work and Personal folder groups.",
      "SSH terminal on a phone with https:// URLs underlined as tappable clickable links.",
      "Mobile SSH home screen on a phone showing a Recent Sessions list to resume an SSH connection with one tap.",
      "Tmux manager on a phone listing tmux sessions, windows, and panes with buttons to attach, rename, and switch.",
      "Plugins screen on a phone showing an installable plugin catalog with Tailscale, WireGuard, and VS Code.",
      "AI Chat plugin on a phone streaming a reply from a local llama3.2 model running on the remote server over SSH.",
      "Add Server dialog on a phone with the transport set to Eternal Terminal so sessions survive network drops."
    ],
    galleryIosAlts: [
      "Mobile SSH connect form on an iPhone with server, authentication, folder, and transport fields.",
      "Saved Servers on an iPhone organized into Production and Staging groups with server search.",
      "Live SSH terminal on an iPhone with a tmux status bar and the extra key row at the bottom.",
      "Two SSH sessions side by side in a grid on an iPhone with tap-to-focus panes.",
      "File Transfer on an iPhone with My Phone and Remote Host panes and a completed transfer log.",
      "Key authentication on an iPhone with an Ed25519 key generated on device and a copyable public key.",
      "Tmux manager on an iPhone listing sessions and windows with attach, rename, and kill actions — a bell flags an agent awaiting input.",
      "SSH terminal on an iPhone attached to a tmux window showing code in a remote editor.",
      "Plugins catalog on an iPhone with Tailscale, WireGuard, VS Code, AI Chat, and Open WebUI available to install.",
      "Connect form on an iPhone with the transport set to Eternal Terminal so sessions survive network drops.",
      "Agent alert settings on an iPhone with vibration, sound, and headphones-only toggles.",
      "Mobile SSH connect screen on an iPhone with a Recent section to reconnect with one tap."
    ],
    compareHead: "How it fits beside Termux and Termius",
    compareIntro:
      "Mobile SSH is intentionally narrow: it is not a full Linux environment and it is not a cross-platform team vault. It is a local SSH/SFTP tool for Android and iOS with fast access to the session controls mobile users need most.",
    compareGuideTitle: "Comparison guide",
    compareGuideText: "See when to choose Mobile SSH, Termux, or Termius on your phone or tablet.",
    privacyTitle: "Privacy policy",
    privacyText: "Review what connection data is stored locally and what is sent to your servers."
  },
  features: {
    metaTitle: "Features | Mobile SSH",
    metaDescription:
      "Key Mobile SSH features for SSH on Android and iOS: terminal, Eternal Terminal, tmux manager, SFTP, private keys, port forwarding, and plugins.",
    eyebrow: "Feature list",
    h1: "Mobile SSH features",
    intro:
      "Mobile SSH is built for direct SSH usage from Android and iOS devices: open terminals, keep them alive, move files, save servers, and recover quickly from mobile interruptions.",
    groups: [
      {
        title: "Platforms",
        items: [
          "Android 8.0 or newer — install from Google Play",
          "iOS 16 or newer on iPhone and iPad — join the public beta on TestFlight",
          "Encrypted backups are interoperable: export on one platform, import on the other"
        ]
      },
      {
        title: "Connections",
        items: [
          "Password authentication and private key authentication",
          "Ed25519, RSA, ECDSA, and DSA private keys on Android; Ed25519 and ECDSA (P-256/384/521) on iOS",
          "Saved server profiles with host, port, username, credential, private key, and optional tunnel specs",
          "Search saved servers by name or host",
          "Search-first Add Session flow: pick a saved server from a dedicated search page and connect with one tap",
          "Multiple addresses per saved server for LAN/VPN roaming — dialed in order with the last working address tried first, and reconnection kicks in on network change",
          "Reusable credential records that can be selected from server setup",
          "Recent session history for reconnecting to common server sets",
          "Login log for successful and failed attempts, recording the exact dialed address"
        ]
      },
      {
        title: "Terminal",
        items: [
          "VT100/xterm-256color terminal behavior with 24-bit true color and italics",
          "Scrollback buffer of 5000 lines, with configurable size on Android",
          "Find in the terminal — search the scrollback and visible screen and jump between matches (Android and iOS)",
          "Shell integration (OSC 133): jump between prompts, copy a command's output, and get alerted when a long-running command finishes (Android and iOS)",
          "Inline images in the terminal via the Kitty graphics protocol (Android and iOS)",
          "Extra key row for ESC, TAB, CTRL, Shift, arrows, Home, End, PgUp, PgDn, and keyboard toggle — customizable on Android: add, remove, reorder, and define your own escape-sequence keys, with reset-to-defaults",
          "Tap-to-focus, optional tap-to-show-keyboard setting, copy and copy-all actions",
          "Pinch-to-zoom text sizing with remote terminal resize",
          "Double-tap pane fullscreen mode",
          "Terminal text selection with Copy, Share, and Select all — long-press selects the word, and Copy keeps the selection to share or re-copy",
          "OSC 52 clipboard — copy text from a remote tmux or vim session straight to the phone clipboard",
          "Native pass-through keyboard input — no autocorrect fighting the shell; soft-keyboard voice dictation still works",
          "External and Bluetooth keyboard support on Android and iOS, including arrows, function keys, and Ctrl/Alt chords",
          "Bracketed paste so multi-line clipboard content is not auto-executed",
          "Bundled Nerd Font renders powerline, starship, devicon, and Material Design icon glyphs on Android that the system font would otherwise show as empty boxes",
          "Wide CJK, emoji, and combining characters are measured and drawn correctly on Android and iOS, including grapheme clusters and zero-width joiners",
          "Configurable terminal font (system monospace, JetBrains Mono, or Source Code Pro) and ANSI color scheme (Solarized, Gruvbox, Dracula, Nord) on Android, applied live to open panes"
        ]
      },
      {
        title: "Sessions",
        items: [
          "Up to eight concurrent SSH sessions",
          "Grid layout for active sessions",
          "Background and screen-lock resilience: a foreground service on Android; tmux auto-attach re-attaches your shell on iOS",
          "Keepalive and reconnect attempts with exponential backoff",
          "Active Sessions entry point from the start screen; ongoing notification lists sessions — tap to open",
          "tmux command tracking and reattach hints for interrupted work",
          "Agent alerts: notification with optional sound and vibration when a remote agent (Claude Code, Codex, etc.) needs input — carrying the agent's own title and message via OSC 9/777 notifications; plays in headphones over video",
          "Eternal Terminal (ET) transport for sessions that survive network drops, sleep, and IP changes, with optional automatic etserver setup over SSH",
          "Tmux manager: list and switch sessions, windows, and panes — attach, rename, create, split, zoom, or kill, with name/date sorting and a 🔔 for agents awaiting input"
        ]
      },
      {
        title: "Files and tunnels",
        items: [
          "Dual-pane SFTP browser for local and remote files",
          "Queued upload and download operations",
          "Recursive folder upload and download between phone and remote host",
          "Remote rename, delete, create, edit, and details flows",
          "Open a downloaded file in another app on Android straight from the local pane",
          "Sort by name or date with per-host persistence",
          "Local port forwarding saved with server profiles",
          "Runtime tunnel add/remove view for connected sessions",
          "File transfer follows the system light or dark theme"
        ]
      },
      {
        title: "Localization",
        items: [
          "App UI translations: Arabic, Bengali, Chinese (Simplified and Traditional), English, French, German, Hindi, Indonesian, Japanese, Marathi, Nigerian Pidgin, Portuguese, Russian, Spanish, Tamil, Telugu, Turkish, Urdu",
          "Follows the system language on Android and iOS; no per-app picker required"
        ]
      },
      {
        title: "Keys and backup",
        items: [
          "Generate new Ed25519 or ECDSA keys on the device (RSA too on Android), with an optional passphrase",
          "Copy, share, or save a generated public key to add to the server's authorized_keys",
          "Export saved servers and credentials to a backup file",
          "Optional passphrase encrypts the backup; import with merge or replace",
          "An unencrypted backup stores passwords and keys in plain text — protect or delete the file"
        ]
      },
      {
        title: "Security",
        items: [
          "Secure screen (Android): block screenshots and screen recording and hide the app from the recents thumbnail — an opt-in setting for when passwords, keys, or tokens are on screen",
          "Saved servers, credentials, and keys stay on the device — secrets live in the Android Keystore and the iOS Keychain, with no cloud account or sync",
          "Anonymous, opt-out usage analytics only — never your servers, credentials, commands, or file contents"
        ]
      },
      {
        title: "Plugins",
        items: [
          "Browse, install, and run plugins to extend Mobile SSH",
          "Plugins download on demand from a public catalog and are SHA-256 verified into app-private storage",
          "Configure a custom or private catalog source when you need one"
        ]
      }
    ],
    security:
      "Security note: The current app stores saved server and credential records locally on the device (secrets live in the system Keychain on iOS). It does not provide cloud sync. Protect the device with a strong screen lock and avoid saving credentials on shared devices."
  },
  compare: {
    metaTitle: "Mobile SSH vs Termux vs Termius on mobile",
    metaDescription:
      "Balanced comparison of Mobile SSH, Termux, and Termius for SSH workflows on Android and iOS.",
    eyebrow: "Mobile SSH options",
    h1: "Mobile SSH vs Termux vs Termius",
    intro:
      "These tools overlap around SSH, but they are built for different jobs. Mobile SSH is a focused SSH/SFTP client for Android and iOS, Termux is an Android-only Linux environment, and Termius is a cross-platform SSH client with account-based productivity features.",
    columns: {
      need: "Need",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "Primary purpose",
        mobileSsh: "Dedicated SSH, SFTP, local tunnel, and terminal client for Android and iOS.",
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
        need: "Mobile terminal controls",
        mobileSsh: "Built-in extra key row, grid sessions, fullscreen panes, pinch zoom, text selection with copy/share, and tmux-aware scrolling — with native pass-through typing and external-keyboard support on both platforms.",
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
        mobileSsh: "Up to eight concurrent SSH sessions in a grid.",
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
        mobileSsh: "You want a simple app on Android or iOS for connecting to servers, transferring files, and keeping sessions alive.",
        termux: "You want a full command-line environment on Android and are comfortable installing/configuring packages.",
        termius: "You want cross-device sync, polished productivity features, vaults, and collaboration."
      }
    ],
    cards: [
      {
        title: "Choose Mobile SSH when",
        body: "You want direct SSH access from your phone or tablet — Android or iOS — without setting up a full Linux environment or a cloud-synced account model. It is especially suited to saved servers, SFTP, tmux sessions, and quick local tunnel workflows."
      },
      {
        title: "Choose Termux when",
        body: "You need package management, shells, compilers, scripting, rsync, curl, Git, Python, Node.js, or other Linux-style tools directly on the Android device."
      },
      {
        title: "Choose Termius when",
        body: "You want a commercial, cross-platform SSH workspace with encrypted vault sync, team sharing, keychain management, snippets, and a consistent app on multiple devices."
      }
    ],
    featureHeading: "Feature by feature",
    featureRows: [
      { category: "Connection", feature: "Runs on Android and iOS",             mobile: "yes",    termux: "Android only", termius: "yes" },
      { category: "Connection", feature: "Saved server profiles",               mobile: "yes",    termux: "via ssh config", termius: "yes" },
      { category: "Connection", feature: "Search saved servers",                mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "Connection", feature: "Server folders / groups",             mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "Connection", feature: "Search-first Add Session picker",     mobile: "Android", termux: "no",          termius: "no" },
      { category: "Connection", feature: "Multiple addresses per server (LAN/VPN roaming)", mobile: "yes", termux: "no",     termius: "no" },
      { category: "Connection", feature: "Reusable credential records",         mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "Connection", feature: "Recent session history",              mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "Connection", feature: "Login log",                           mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Terminal",   feature: "SSH terminal",                        mobile: "yes",    termux: "via OpenSSH",  termius: "yes" },
      { category: "Terminal",   feature: "xterm-256color emulation",            mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "Terminal",   feature: "5 000-line scrollback buffer",        mobile: "yes",    termux: "configurable", termius: "yes" },
      { category: "Terminal",   feature: "In-terminal search (scrollback)",    mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Terminal",   feature: "Extra key row (ESC/TAB/CTRL/…)",      mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "Terminal",   feature: "Pinch-to-zoom text sizing",           mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "Terminal",   feature: "Double-tap pane to fullscreen",       mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Terminal",   feature: "Tappable URLs in terminal output",    mobile: "yes",    termux: "partial",      termius: "yes" },
      { category: "Terminal",   feature: "Text selection: copy / share / select all", mobile: "yes", termux: "yes",      termius: "yes" },
      { category: "Terminal",   feature: "Hardware / Bluetooth keyboard support", mobile: "yes",   termux: "yes",         termius: "yes" },
      { category: "Terminal",   feature: "Shell integration (OSC 133)",          mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Terminal",   feature: "Inline images (Kitty graphics)",       mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Terminal",   feature: "Nerd Font / powerline glyph rendering", mobile: "Android", termux: "configurable", termius: "partial" },
      { category: "Sessions",   feature: "Multiple concurrent SSH sessions",    mobile: "up to 8", termux: "up to 8",    termius: "yes" },
      { category: "Sessions",   feature: "Grid pane layout",                    mobile: "yes",    termux: "via tmux",     termius: "tabs" },
      { category: "Sessions",   feature: "tmux-aware scrolling",               mobile: "yes",    termux: "yes",          termius: "no" },
      { category: "Sessions",   feature: "tmux reattach hints on reconnect",   mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Sessions",   feature: "Agent alerts (Claude Code / Codex)", mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Sessions",   feature: "Ongoing notification with session list", mobile: "Android", termux: "partial", termius: "no" },
      { category: "Sessions",   feature: "Foreground service & wake lock",     mobile: "Android", termux: "yes",         termius: "partial" },
      { category: "Sessions",   feature: "Auto-reconnect with backoff",        mobile: "yes",    termux: "via autossh",  termius: "yes" },
      { category: "Files",      feature: "Built-in SFTP file transfer UI",     mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "Files",      feature: "Dual-pane local + remote browser",   mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "Files",      feature: "Upload / download queue",            mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "Files",      feature: "Remote rename / delete / create",    mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "Files",      feature: "Remote file permissions view",       mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Files",      feature: "Sort by name or date per host",      mobile: "yes",    termux: "no",           termius: "partial" },
      { category: "Tunnels",    feature: "Local port forwarding",              mobile: "yes",    termux: "via CLI",      termius: "yes" },
      { category: "Tunnels",    feature: "Saved tunnels with server profile",  mobile: "yes",    termux: "via ssh config", termius: "yes" },
      { category: "Tunnels",    feature: "Runtime add / remove tunnels",       mobile: "Android", termux: "no",          termius: "yes" },
      { category: "Keys",       feature: "Password authentication",            mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "Keys",       feature: "Private key authentication",         mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "Keys",       feature: "On-device key generation",           mobile: "yes",    termux: "via ssh-keygen", termius: "yes" },
      { category: "Keys",       feature: "Share / save generated public key",  mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "Backup",     feature: "Export / import server backup",      mobile: "yes",    termux: "via termux-backup", termius: "Pro cloud vault" },
      { category: "Backup",     feature: "Encrypted local backup file",        mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Backup",     feature: "No account required",               mobile: "yes",    termux: "yes",          termius: "partial" },
      { category: "Privacy & cost", feature: "No Pro paywall",                 mobile: "yes",    termux: "yes",          termius: "partial" },
      { category: "Privacy & cost", feature: "No ads",                         mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "Privacy & cost", feature: "Analytics opt-out",              mobile: "Android", termux: "no analytics", termius: "no" },
      { category: "Privacy & cost", feature: "Local-only data (no cloud sync)", mobile: "yes",  termux: "yes",          termius: "partial" },
      { category: "Privacy & cost", feature: "Secure screen (block screenshots)", mobile: "Android", termux: "no",         termius: "no" },
      { category: "Sessions",   feature: "Eternal Terminal (resilient sessions)", mobile: "yes", termux: "via CLI",   termius: "no" },
      { category: "Sessions",   feature: "Auto-install etserver over SSH",     mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Sessions",   feature: "tmux session manager",               mobile: "yes",    termux: "via CLI",      termius: "no" },
      { category: "Plugins",    feature: "Plugin support",                     mobile: "yes",    termux: "via packages", termius: "no" },
      { category: "Plugins",    feature: "Install-on-demand plugin catalog",   mobile: "yes",    termux: "no",           termius: "no" }
    ],
    agentAppsHeading: "Mobile SSH vs AI coding-agent apps",
    agentAppsIntro:
      "A fast-growing category of apps exists just to drive coding agents — Claude Code, Codex, and friends — from your phone. Some are third-party SSH or relay apps (Onepilot, Happy, Omnara); OpenAI and Anthropic now ship this natively too, with Codex inside the ChatGPT app and Claude Code inside the Claude app, both running in the vendor's own cloud. Mobile SSH overlaps with all of them — you can run those agents over SSH and get alerted when they need you — but it comes at the job from the other side: it is a general, direct SSH client first, and an agent companion second.",
    agentAppsRows: [
      { feature: "Runs coding agents from your phone",             mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "Works with any coding agent (not one vendor)",   mobile: "yes", onepilot: "yes",      happy: "Claude Code", omnara: "yes",     chatgpt: "Codex only",   claude: "Claude Code only" },
      { feature: "Runs on your own machine (not a vendor cloud)",  mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes",     chatgpt: "no",           claude: "partial" },
      { feature: "Direct SSH — no cloud relay",                    mobile: "yes", onepilot: "yes",      happy: "no",         omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "General SSH terminal (run any command)",         mobile: "yes", onepilot: "yes",      happy: "no",         omnara: "partial", chatgpt: "no",           claude: "no" },
      { feature: "SFTP file transfer",                             mobile: "yes", onepilot: "partial",  happy: "no",         omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "Local port forwarding",                          mobile: "yes", onepilot: "yes",      happy: "no",         omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "tmux session manager",                           mobile: "yes", onepilot: "partial",  happy: "no",         omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "Agent alerts (push when the agent needs input)", mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "One-tap approve/deny of agent prompts",          mobile: "no",  onepilot: "yes",      happy: "yes",        omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "Zero server or SSH setup",                       mobile: "no",  onepilot: "no",       happy: "partial",    omnara: "partial", chatgpt: "yes",          claude: "yes" },
      { feature: "Android and iOS",                                mobile: "yes", onepilot: "iOS only", happy: "yes",        omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "No account required",                            mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "No Pro paywall (all features free)",             mobile: "yes", onepilot: "no",       happy: "no",         omnara: "no",      chatgpt: "free tier",    claude: "no" },
      { feature: "Open source",                                    mobile: "Apache 2.0",  onepilot: "no",       happy: "MIT",        omnara: "Apache",  chatgpt: "no",           claude: "no" }
    ],
    agentAppsNote:
      "The native ChatGPT and Claude apps are the smoothest way to run one vendor's agent with zero setup — no server, just an account — and they add a polished one-tap approve/deny screen. The catch: they run only their own model in their own cloud, with no general terminal, no SFTP or tunnels, and no bring-your-own machine, and they are paid or account-gated. Onepilot, Happy, and Omnara keep the agent on hardware you control (Onepilot via direct SSH; Happy and Omnara via a cloud relay, and Omnara needs an account). Mobile SSH connects straight to your own server with no account or vendor relay, runs any agent alongside a full terminal, SFTP, and port forwarding, and every feature is free — the trade-off is that you answer agent prompts in the terminal instead of on a dedicated approve/deny screen.",
  },
  privacy: {
    metaTitle: "Privacy Policy | Mobile SSH",
    metaDescription:
      "Privacy policy for Mobile SSH, including local storage, SSH data transmission, file transfer, logs, and app permissions on Android and iOS.",
    eyebrow: "Privacy",
    h1: "Privacy Policy",
    intro:
      "Mobile SSH is designed as a local SSH client for Android and iOS. It does not require a Mobile SSH account and does not provide a Mobile SSH cloud sync service.",
    sections: [
      {
        heading: "Information stored on your device",
        body: "If you choose to save app data, Mobile SSH stores it locally on the device — on iOS, secrets are kept in the system Keychain. This may include saved server profiles, usernames, ports, passwords, private keys, key passphrases, port-forwarding rules, recent sessions, login attempt history, file-transfer paths, file-sort preferences, tmux reattach hints, app settings, and debug logs when debug recording is enabled."
      },
      {
        heading: "Information sent over the network",
        body: "Mobile SSH sends SSH authentication data only to servers that you configure and connect to. Terminal input/output, SFTP file contents, and local port-forwarded traffic are exchanged with the servers and remote endpoints you choose. Mobile SSH does not send this data to a Mobile SSH analytics, advertising, telemetry, or cloud sync service."
      },
      {
        heading: "File transfer and storage access",
        body: "The file transfer feature browses local phone storage and remote SFTP directories so you can upload and download files. On Android versions that require it, the app may ask for storage access so the local file browser can read and write selected files. On iOS, local files and photos are reached through the system document and photo pickers."
      },
      {
        heading: "Logs and troubleshooting",
        body: "Login history and optional debug logs are stored locally for troubleshooting. Debug logs can include terminal events, SSH data sizes, touch input diagnostics, resize events, and tunnel lifecycle events. Review any debug archive before sharing it with support or another person."
      },
      { heading: "Anonymous usage analytics", body: "To understand how the app is used and improve it, Mobile SSH sends anonymous usage analytics to Aptabase, a privacy-focused analytics provider acting on our behalf. This is limited to anonymous events (such as app launches and which features are used) together with your app version, operating-system version, device model, and language. It uses a random session identifier that resets regularly and is not tied to you or your device. It never includes your SSH servers, hostnames, usernames, passwords, keys, commands, or file contents. Data is sent over an encrypted (HTTPS) connection. Analytics is on by default and can be turned off at any time in Settings; when off, nothing is sent." }
    ],
    permissionsHeading: "Permissions",
    permissions: [
      { label: "Internet", body: "required to connect to SSH servers." },
      { label: "Wake lock and Wi-Fi lock", body: "used on Android to keep active SSH sessions alive while the device sleeps." },
      { label: "Foreground service and notifications", body: "used on Android for active connection handling in the background; on iOS, notifications are used for agent alerts." },
      { label: "Storage access", body: "used by file transfer and key import workflows; on iOS this goes through the system document and photo pickers." }
    ],
    securityHeading: "Security responsibilities",
    securityBody:
      "Protect your device with a strong screen lock if you save credentials or private keys. Only connect to servers you trust. The current implementation uses local app storage (and the iOS Keychain) rather than a separate encrypted cloud vault. On Android, an optional Secure screen setting blocks screenshots and screen recording and hides the app from the recents view.",
    contactHeading: "Contact",
    contactBody: "Support contact: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  },
  docsIndex: {
    metaTitle: "Documentation | Mobile SSH",
    metaDescription: "End-user documentation for Mobile SSH on Android and iOS.",
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
      "About Mobile SSH: version, author, license, and open-source notices for the Android and iOS SSH client.",
    eyebrow: "About",
    h1: "About Mobile SSH",
    intro: "Multi-session SSH client with tmux, port forwards, and SFTP.",
    appHeading: "About the app",
    versionLabel: "Version",
    authorLabel: "Author",
    authorValue: "Dmitry Kozlov",
    licenseLabel: "License",
    licenseValue: "Apache 2.0",
    websiteLabel: "Website",
    privacyLabel: "Privacy policy",
    privacyLinkText: "Privacy policy",
    noticesHeading: "Open source notices",
    noticesIntro:
      "Mobile SSH is built on the following open-source libraries. Each is used under its respective license.",
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
