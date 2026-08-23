import type { Dict } from "../types";

export const en: Dict = {
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
      { title: "Agent alerts, and one tap to answer", text: "Know the moment Claude Code, Codex, or another agent needs you: the pane turns amber, a toolbar badge counts who is waiting, and the Agents list answers the prompt with one tap — no typing into the terminal." },
      { title: "Terminal keys above the keyboard", text: "A thirteen-key row — ESC, TAB, CTRL, arrows, Home, End, PgUp, PgDn — that wraps to a second row instead of scrolling, so nothing is hidden off-screen. Add F1–F12, Ctrl combos, or your own escape sequences from a preset palette." },
      { title: "Port forwarding without commands", text: "Tunnels attach to the server profile and come up automatically when you connect." },
      { title: "Survives lock and roaming", text: "Give a saved server several addresses — a home LAN IP and a VPN IP — and Mobile SSH dials whichever answers, trying the last one that worked first, and reconnects the moment the network changes. On Android a foreground service and wake locks hold shells through screen-off; on iOS auto-reconnect plus tmux auto-attach put you back where you left off." },
      { title: "Eternal Terminal", text: "An optional ET transport keeps the remote shell alive across network drops, sleep, and IP changes. No etserver on the host? Mobile SSH can install it over SSH for you." },
      { title: "Extend it with plugins", text: "Browse a public catalog and install plugins on demand to add new workflows. Each plugin is downloaded and SHA-256 verified into app-private storage." }
    ],
    sectionAHead: "Built around mobile SSH work",
    sectionAIntro:
      "Mobile SSH keeps the common admin path short: save a server, connect, keep sessions alive, move files when needed, and get back to active terminals quickly.",
    features: [
      { title: "SSH terminal", text: "xterm-256color terminal with 24-bit true color, italics, in-terminal search, OSC 133 shell integration, and pinch-to-zoom text sizing — plus a configurable font and color scheme and Nerd Font powerline/icon glyphs on Android and iOS." },
      { title: "Multi-session grid", text: "Up to eight SSH sessions in a resizable grid — tap a pane to focus, double-tap for fullscreen, pinch to resize text." },
      { title: "Clickable links", text: "URLs in the terminal are underlined and open in the browser with a tap — no copying or switching apps needed." },
      { title: "Server folders and names", text: "Organize saved servers into collapsible groups, and give a server a name that shows instead of its address. The address comes back whenever a name would be ambiguous, so rows never blur together." },
      { title: "Agent alerts", text: "Agents report through the terminal, so the app knows which one is blocked and on what. Answer from the Agents list with one tap; alerts replace rather than stack, and tapping one opens the pane that rang." },
      { title: "Private keys", text: "Password or private key auth. Generate Ed25519 or ECDSA keys on device (RSA too on Android); import or paste existing keys." },
      { title: "SFTP transfer", text: "Dual-pane file browser tied to an active SSH session. Queue uploads and downloads, rename, delete, and inspect remote permissions." },
      { title: "Port forwarding", text: "Save local tunnel specs with a server profile and they open automatically on connect — including after a reconnect on a new network, without rebuilding them by hand." },
      { title: "Reconnect workflow", text: "Change network and sessions re-dial at once instead of waiting out a dead route, and a session in backoff wakes the moment a usable network appears. On iOS a server that has silently stopped answering is noticed and reconnected." },
      { title: "Backup & restore", text: "Export saved servers and credentials to an encrypted backup file; import with merge or replace to move between devices — backups are interoperable between Android and iOS." },
      { title: "Eternal Terminal", text: "Connect over Eternal Terminal (ET) for sessions that survive network drops, sleep, and IP changes — with optional automatic etserver setup over SSH." },
      { title: "Multiplexer managers", text: "Drive tmux without prefix chords — attach, rename, create, split, zoom, or kill. Both platforms give herdr and Zellij the same reach, and a toolbar icon appears only once that program is found on the server." },
      { title: "Plugins", text: "Browse, install, and run plugins to extend Mobile SSH. Plugins download on demand from a public catalog and are SHA-256 verified into app-private storage." }
    ],
    multiHead: "One screen, several live shells",
    multiP1:
      "The terminal view can hold multiple active SSH sessions in a grid. Select a pane to type, use the extra key row for terminal controls, pinch to adjust text size, and double-tap a pane when you need fullscreen focus.",
    multiP2:
      "The home screen answers \"what can I get back into?\" — the connections live right now, and the tmux sessions waiting on your saved servers, rebuilt from a stored snapshot so they appear with no network at all.",
    multiAlt:
      "Mobile SSH on a phone showing two live SSH terminal sessions in a side-by-side split view.",
    sftpHead: "SFTP when the terminal is not enough",
    sftpBody:
      "Open file transfer from a connected session to browse phone storage and remote directories. Queue uploads and downloads, sort files, jump back to recent remote paths, and inspect or change remote permissions when deciding what to move.",
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
    videoIntro: "Short demos on both platforms. Android: the home screen answering what you can get back into, a session toolbar showing only what that server has, sending a file straight into the prompt, and the tmux, herdr, and Zellij managers. iOS: launching into a live terminal and the home screen you come back to.",
    videoAlt: "Android demo of the home screen listing tmux sessions to resume, the session toolbar, attaching a file into the prompt, and the tmux, herdr, and Zellij session managers",
    videoIosAlt: "iOS demo of opening Mobile SSH into a live SSH terminal session and returning to the home screen, with Recent and the app's other screens",
    muxHead: "One video per session manager",
    muxIntro:
      "The demos above give tmux, herdr and Zellij about thirty seconds between them — enough to show the toolbar draws an icon for each, not enough to show what any of them does. These are the long versions, filmed on both platforms against a live server.",
    muxItems: [
      {
        text: "Sessions, windows and panes reached from the home screen, one session flagged by a bell because something on it is asking for attention. Attach a window and the live terminal follows it; create a window and name it — no prefix chord typed at any point.",
        androidAlt:
          "Android demo of the tmux manager: the home screen's cached session list, then sessions, windows and panes, attaching a window so the terminal follows, and creating a named window.",
        iosAlt:
          "iOS demo of the tmux manager: tmux sessions with their age and a bell on one awaiting input, then windows and panes, each row offering Open, Rename and Kill."
      },
      {
        text: "Workspaces, tabs and panes carrying real agent state — one agent working, one blocked and waiting on a person. Preview the blocked one, answer it from the phone, and watch herdr reclassify it working, then done.",
        androidAlt:
          "Android demo of the herdr manager: sessions and workspaces labelled with agent state, one agent marked needs you, answering it from the phone, and a new workspace being created and renamed.",
        iosAlt:
          "iOS demo of the herdr manager: workspaces carrying agent state and a reply sheet that sends typed input to a blocked agent, followed by Enter."
      },
      {
        text: "Sessions with their age, then tabs and panes. Preview a pane's output, add a named tab, focus the one that matters, and attach — with nothing typed at the prompt.",
        androidAlt:
          "Android demo of the Zellij manager: sessions with their age, tabs and panes, previewing a pane's output, creating a named tab, and attaching a session.",
        iosAlt:
          "iOS demo of the Zellij manager: a session with attach, rename, kill and delete actions, its tabs, and a pane offering preview and both split directions."
      }
    ],
    graphicsHead: "An animated chart, inside the terminal",
    graphicsBody:
      "A 36-frame GIF streamed over the Kitty graphics protocol and decoded by the app at the file's own frame timing — not stepped from outside. Then the escape sequences a terminal is judged by: OSC 8 turns build numbers and dashboard names into things you can tap, OSC 52 lets the remote write your phone's clipboard, and OSC 777 raises a real Android notification.",
    graphicsAlt:
      "Android demo of an animated latency chart streamed into the terminal over the Kitty graphics protocol, followed by OSC 8 links, an OSC 52 clipboard write, and an OSC 777 notification.",
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
      "Mobile SSH home screen on an Android phone with an Active Sessions banner and a Continue list of saved servers to resume, above buttons for Servers, Credentials, Settings, About, and Plugins.",
      "Add Server dialog on a phone with fields for a server name, host and port, additional addresses, credentials, private key, and port forwards.",
      "Single-session SSH terminal on a phone showing a coding agent's patch and passing test run, under the session toolbar.",
      "Two SSH sessions in a side-by-side split view on a phone.",
      "Two SSH sessions stacked vertically on a phone with the active pane highlighted.",
      "SFTP file transfer screen on a phone with local My Phone and Remote Host panes.",
      "About dialog on a phone showing version, author, license, and website fields.",
      "Generate SSH Key dialog on a phone with label, user, key type, and passphrase fields.",
      "Public Key dialog on a phone showing the generated key with copy, share, and save options.",
      "Saved Servers screen showing servers organized into collapsible Work and Personal folder groups.",
      "SSH terminal on a phone with https:// URLs underlined as tappable clickable links.",
      "Zellij manager on an Android phone listing sessions, tabs, and panes with buttons to attach, rename, kill, and focus them.",
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
      "Mobile SSH home screen on an iPhone with a Recent list to reconnect with one tap, above tiles for Servers, Credentials, Logs, Settings, About, and Plugins."
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
          "Android 8.0 or newer — currently a Google Play closed test: open the opt-in link in a mobile browser, then install from Play",
          "iOS 16 or newer on iPhone and iPad — join the public beta on TestFlight",
          "Encrypted backups are interoperable: export on one platform, import on the other"
        ]
      },
      {
        title: "Connections",
        items: [
          "Password authentication and private key authentication",
          "Ed25519, ECDSA (P-256/384/521), and RSA private keys on Android; Ed25519 and ECDSA on iOS. Both platforms open passphrase-encrypted keys",
          "Saved server profiles with host, port, username, credential, private key, and optional tunnel specs — clone a profile to duplicate its settings into a new server",
          "Give a server a name and the list shows that instead of its address — the address returns whenever two rows would otherwise look alike",
          "Search saved servers by name, host, port, credential, or any of their alternate addresses",
          "Connect twice to the same machine under two saved rows and the app notices — it fingerprints the host key and offers to merge them into one multi-address server",
          "Search-first Add Session flow: pick a saved server from a dedicated search page and connect with one tap",
          "Multiple addresses per saved server for LAN/VPN roaming — dialed in order with the last working address tried first, and reconnection kicks in on network change",
          "Reusable credential records that can be selected from server setup",
          "A home screen built around resuming: the connections live right now, and the tmux sessions waiting on your servers — drawn from a stored snapshot, so they list with no network and each row is stamped with its age. iOS also keeps a Recent list",
          "IPv6 end to end: bracketed literals with an optional port in the address fields, and bracketed IPv6 destinations in port-forward rules",
          "Login log for successful and failed attempts, recording the exact dialed address and, on failure, the reason",
          "Teleport proxy transport (experimental, Android): log in with username, password, and OTP or import a Teleport config or identity file, browse cluster nodes, then run terminals, SFTP, tmux, and plugins over the proxy tunnel"
        ]
      },
      {
        title: "Terminal",
        items: [
          "VT100/xterm-256color terminal behavior with 24-bit true color and italics — the shell is told TERM=xterm-256color and COLORTERM=truecolor",
          "Scrollback buffer set to 1,000, 5,000, 10,000, or 50,000 lines on Android and iOS (5,000 by default)",
          "Find in the terminal — search the scrollback and visible screen and jump between matches (Android and iOS)",
          "Shell integration (OSC 133): step between prompts, select a whole command's output — the build error from 300 lines back, not just the last one — and get alerted when a long-running command finishes (Android and iOS)",
          "Inline images in the terminal via the Kitty graphics protocol, surviving pinch-zoom and re-wrap instead of vanishing (Android and iOS)",
          "Block, braille, and sextant mosaic glyphs drawn by the app itself, so chafa, timg, and ANSI art tile exactly instead of showing empty boxes (Android)",
          "In a mouse-tracking TUI, a tap is a click — htop, vim, and pane selection work by touch (Android)",
          "The pane header names the pane's real working directory, asked from tmux or reported by the shell over OSC 7 (Android)",
          "Extra key row of thirteen keys — ESC, TAB, CTRL, arrows, Home, End, PgUp, PgDn, keyboard toggle — that wraps to a second row rather than scrolling, folding any remainder into an overflow menu so no key is off-screen",
          "Customize the row on Android and iOS: add from a palette of about 45 presets including F1–F12, Ctrl combos, and symbols; remove, reorder, hide, define your own escape-sequence keys, and reset to defaults, with a live preview",
          "Tap-to-focus, optional tap-to-show-keyboard setting, copy and copy-all actions",
          "Pinch-to-zoom text sizing with remote terminal resize",
          "Double-tap pane fullscreen mode",
          "Terminal text selection with Copy, Share, and Select all — long-press selects the word, and Copy keeps the selection to share or re-copy",
          "OSC 52 clipboard — copy text from a remote tmux or vim session straight to the phone clipboard (Android and iOS)",
          "Native pass-through keyboard input — no autocorrect fighting the shell; soft-keyboard voice dictation still works",
          "External and Bluetooth keyboard support on Android and iOS, including arrows, function keys, and Ctrl/Alt chords",
          "Bracketed paste so multi-line clipboard content is not auto-executed",
          "Bundled Nerd Font renders powerline, starship, devicon, and Material Design icon glyphs on Android and iOS that the system font would otherwise show as empty boxes",
          "Wide CJK, emoji, and combining characters are measured and drawn correctly on Android and iOS, including grapheme clusters and zero-width joiners",
          "Configurable terminal font (system monospace, JetBrains Mono, or Source Code Pro) and ANSI color scheme (Solarized, Gruvbox, Dracula, Nord) on Android and iOS, applied live to open panes",
          "A terminal text-size slider in Settings alongside pinch-to-zoom, and an app theme set to System, Light, or Dark"
        ]
      },
      {
        title: "Sessions",
        items: [
          "Up to eight concurrent SSH sessions",
          "Grid layout for active sessions",
          "Background and screen-lock resilience: on Android a foreground service keeps shells and agents running after you swipe the app away; on iOS tmux auto-attach re-attaches your shell",
          "Keepalive and reconnect attempts with exponential backoff — up to ten tries, and failures against a network you have already left do not count toward the limit",
          "Switching Wi-Fi, cellular, or VPN re-dials at once rather than waiting out the dead route, and a session already in backoff retries the moment a usable network appears",
          "A server that has silently stopped answering — a suspended VM, a wedged jump host — is noticed through unanswered keepalive probes and reconnected instead of quietly eating your keystrokes (iOS)",
          "Active Sessions entry point from the start screen; ongoing notification lists sessions — tap to open",
          "tmux command tracking and reattach hints for interrupted work, with a per-server choice of what to attach on connect: auto-detect, nothing, tmux, herdr, or Zellij (Android)",
          "Agents report themselves through the terminal, so the app knows the agent, the tool it is running, and whether it is blocked on you — the pane turns amber, its header reads \"claude · needs you\", and a toolbar badge counts who is waiting",
          "Answer an agent's question with one tap from the Agents list; the reply goes over a separate channel, so it never types into what is on screen",
          "Install the agent hook onto a server from inside the app — a small shell script that any agent can call, not a vendor integration",
          "Eternal Terminal (ET) transport for sessions that survive network drops, sleep, and IP changes, with optional automatic etserver setup over SSH",
          "Tmux manager: list and switch sessions, windows, and panes — attach, rename, create, split, zoom, or kill, with name/date sorting and a 🔔 for agents awaiting input",
          "Herdr and Zellij managers on Android and iOS, each with the same reach over its own sessions, tabs, and panes — the toolbar shows an icon only once that program is found on the server"
        ]
      },
      {
        title: "Files and tunnels",
        items: [
          "Dual-pane SFTP browser for local and remote files, with a transfer log that shows every transfer and scrolls",
          "Queued upload and download operations; on Android, share any file from another app into the running session and its remote path is typed at the prompt",
          "Recursive folder upload and download between phone and remote host",
          "Remote rename, delete, create, edit, compress to .tar.gz, permissions (chmod/chown), and details flows",
          "Open a downloaded file in another app on both platforms — on iOS downloads also appear in the Files app under \"On My iPhone\"",
          "On Android, File Transfer reopens where that tmux session left off, naming the session in the pane header, and falls back to the directories you use most on that host when there is nothing to remember",
          "Sort by name or date with per-host persistence, and jump back to recent remote paths",
          "File sizes in binary units, matching what ls -h shows in the terminal one tab away",
          "Local port forwarding saved with server profiles and brought up automatically on connect",
          "Follows the system light or dark theme across the app and file browser — choose System, Light, or Dark on Android and iOS"
        ]
      },
      {
        title: "Localization",
        items: [
          "App UI translations: Arabic, Bengali, Chinese (Simplified and Traditional), English, French, German, Hindi, Indonesian, Japanese, Marathi, Portuguese, Russian, Spanish, Tamil, Telugu, Turkish, and Urdu — twenty languages on Android, which adds Nigerian Pidgin and Egyptian Arabic, and eighteen on iOS",
          "Follows the system language by default, and Settings has a language picker if you want the app in something other than the phone's language"
        ]
      },
      {
        title: "Keys and backup",
        items: [
          "Generate new Ed25519 or ECDSA keys on the device (RSA too on Android), with an optional passphrase",
          "Copy, share, or save a generated public key to add to the server's authorized_keys",
          "Export saved servers and credentials to a backup file — all of them, or tick just the rows you want, where tapping a folder header takes the whole folder",
          "Optional passphrase encrypts the backup; import with merge or replace",
          "An unencrypted backup stores passwords and keys in plain text — protect or delete the file"
        ]
      },
      {
        title: "Security",
        items: [
          "Secure screen: on Android, block screenshots and screen recording and hide the app from the recents thumbnail; on iOS, blank the app-switcher preview and block screen recording and mirroring (a manual screenshot cannot be blocked on iOS) — an opt-in setting for when passwords, keys, or tokens are on screen",
          "Saved servers, credentials, and keys stay on the device — secrets live in the Android Keystore and the iOS Keychain, with no cloud account or sync",
          "Anonymous usage analytics only — never your servers, credentials, commands, or file contents. Android has a switch to turn it off in Settings; iOS does not have one yet"
        ]
      },
      {
        title: "Plugins",
        items: [
          "Browse, install, and run plugins to extend Mobile SSH",
          "Plugins download on demand from a public catalog and are SHA-256 verified into app-private storage",
          "A plugin declares what it needs — SSH commands, a tunnel, storage — and the app refuses anything it did not ask for",
          "When a plugin sets something up on your server, you see the exact commands first and approve them before they run",
          "Configure a custom or private catalog source, or install from a folder on your own server"
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
      { category: "Connection", feature: "Home screen lists what to resume",    mobile: "yes",    termux: "no",           termius: "partial" },
      { category: "Connection", feature: "Offline tmux session list (no connection needed)", mobile: "yes", termux: "no",  termius: "no" },
      { category: "Connection", feature: "Named servers shown instead of the address", mobile: "yes", termux: "no",       termius: "yes" },
      { category: "Connection", feature: "Login log",                           mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Connection", feature: "Teleport proxy transport (experimental)", mobile: "Android", termux: "no",      termius: "no" },
      { category: "Connection", feature: "IPv6 hosts and forward destinations", mobile: "yes",    termux: "yes",          termius: "partial" },
      { category: "Terminal",   feature: "SSH terminal",                        mobile: "yes",    termux: "via OpenSSH",  termius: "yes" },
      { category: "Terminal",   feature: "xterm-256color emulation",            mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "Terminal",   feature: "Configurable scrollback (1k–50k lines)", mobile: "yes", termux: "configurable", termius: "partial" },
      { category: "Terminal",   feature: "In-terminal search (scrollback)",    mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Terminal",   feature: "Extra key row (ESC/TAB/CTRL/…)",      mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "Terminal",   feature: "Pinch-to-zoom text sizing",           mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "Terminal",   feature: "Double-tap pane to fullscreen",       mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Terminal",   feature: "Tappable URLs in terminal output",    mobile: "yes",    termux: "partial",      termius: "yes" },
      { category: "Terminal",   feature: "Text selection: copy / share / select all", mobile: "yes", termux: "yes",      termius: "yes" },
      { category: "Terminal",   feature: "Hardware / Bluetooth keyboard support", mobile: "yes",   termux: "yes",         termius: "yes" },
      { category: "Terminal",   feature: "Shell integration (OSC 133)",          mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Terminal",   feature: "Inline images (Kitty graphics)",       mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Terminal",   feature: "App-drawn mosaic glyphs (chafa, ANSI art)", mobile: "Android", termux: "font-dependent", termius: "no" },
      { category: "Terminal",   feature: "Tap acts as a click in mouse-mode TUIs", mobile: "Android", termux: "yes",       termius: "no" },
      { category: "Terminal",   feature: "Nerd Font / powerline glyph rendering", mobile: "yes",     termux: "configurable", termius: "partial" },
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
      { category: "Tunnels",    feature: "Runtime add / remove tunnels",       mobile: "no",     termux: "no",           termius: "yes" },
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
      { category: "Privacy & cost", feature: "Secure screen (block screen capture)", mobile: "yes",  termux: "no",         termius: "no" },
      { category: "Sessions",   feature: "Eternal Terminal (resilient sessions)", mobile: "yes", termux: "via CLI",   termius: "no" },
      { category: "Sessions",   feature: "Auto-install etserver over SSH",     mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Sessions",   feature: "tmux session manager",               mobile: "yes",    termux: "via CLI",      termius: "no" },
      { category: "Sessions",   feature: "herdr and Zellij session managers",  mobile: "yes",     termux: "via CLI",     termius: "no" },
      { category: "Sessions",   feature: "One-tap replies to a blocked agent", mobile: "yes",    termux: "no",           termius: "no" },
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
      { feature: "Works with an agent you installed yourself",     mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes",     chatgpt: "no",           claude: "no" },
      { feature: "Agent alerts (push when the agent needs input)", mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "One-tap approve/deny of agent prompts",          mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "Zero server or SSH setup",                       mobile: "no",  onepilot: "no",       happy: "partial",    omnara: "partial", chatgpt: "yes",          claude: "yes" },
      { feature: "Android and iOS",                                mobile: "yes", onepilot: "iOS only", happy: "yes",        omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "No account required",                            mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "No Pro paywall (all features free)",             mobile: "yes", onepilot: "no",       happy: "no",         omnara: "no",      chatgpt: "free tier",    claude: "no" },
      { feature: "Open source",                                    mobile: "Apache 2.0",  onepilot: "no",       happy: "MIT",        omnara: "Apache",  chatgpt: "no",           claude: "no" }
    ],
    agentAppsNote:
      "The native ChatGPT and Claude apps are the smoothest way to run one vendor's agent with zero setup — no server, just an account — and they add a polished one-tap approve/deny screen. The catch: they run only their own model in their own cloud, with no general terminal, no SFTP or tunnels, and no bring-your-own machine, and they are paid or account-gated. Onepilot, Happy, and Omnara keep the agent on hardware you control (Onepilot via direct SSH; Happy and Omnara via a cloud relay, and Omnara needs an account). Mobile SSH connects straight to your own server with no account or vendor relay, runs any agent alongside a full terminal, SFTP, and port forwarding, and every feature is free. It now answers agent prompts the same way they do — an Agents list showing every agent across every connection, with a button per choice — the difference being that the agent runs on your machine and the reply travels over your own SSH connection. The trade-off is the one it has always been: you bring the server, and the agent's hook has to be installed on it once.",
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
        body: "If you choose to save app data, Mobile SSH stores it locally on the device. Secrets are kept in the system Keychain on iOS; on Android they are encrypted with a key held in the Android Keystore that cannot be exported off the device, and the app opts out of Android cloud backup. This may include saved server profiles, usernames, ports, passwords, private keys, key passphrases, port-forwarding rules, recent sessions, login attempt history, file-transfer paths, file-sort preferences, tmux session snapshots and reattach hints, app settings, and debug logs when debug recording is enabled."
      },
      {
        heading: "Information sent over the network",
        body: "Mobile SSH sends SSH authentication data only to servers that you configure and connect to. Terminal input/output, SFTP file contents, and local port-forwarded traffic are exchanged with the servers and remote endpoints you choose. Mobile SSH does not send this data to a Mobile SSH analytics, advertising, telemetry, or cloud sync service."
      },
      {
        heading: "File transfer and storage access",
        body: "The file transfer feature browses local phone storage and remote SFTP directories so you can upload and download files. Mobile SSH does not ask Android for broad storage permission: you pick one folder with the system folder picker and the app can read and write only inside it. On iOS, local files and photos are reached through the system document and photo pickers."
      },
      {
        heading: "Logs and troubleshooting",
        body: "Login history and optional debug logs are stored locally for troubleshooting, and both are off or empty until you turn them on. Android's debug recorder captures terminal events, SSH data sizes, touch input diagnostics, resize events, and tunnel lifecycle events — it warns you before it starts that this includes every key you type, passwords included, and it writes an archive to your Downloads folder. iOS records a different, narrower log: the addresses it dialled and why each failed, reconnects and backoff, dropped connections, network changes, and tmux commands with their errors. Review any debug log or archive before sharing it with support or another person."
      },
      { heading: "Anonymous usage analytics", body: "To understand how the app is used and improve it, Mobile SSH sends anonymous usage analytics to Aptabase, a privacy-focused analytics provider acting on our behalf. This is limited to anonymous events (such as app launches and which features are used) together with your app version, operating-system version, device model, and language. It uses a random session identifier that resets regularly and is not tied to you or your device. It never includes your SSH servers, hostnames, usernames, passwords, keys, commands, or file contents. Data is sent over an encrypted (HTTPS) connection. Analytics is on by default. On Android you can turn it off at any time in Settings, and when off nothing is sent; the iOS app does not offer that switch yet, so on iOS these anonymous events are sent for as long as the app is installed. We intend to add the iOS switch — until then this page states the position as it actually is." }
    ],
    permissionsHeading: "Permissions",
    permissions: [
      { label: "Internet", body: "required to connect to SSH servers." },
      { label: "Wake lock and Wi-Fi lock", body: "used on Android to keep active SSH sessions alive while the device sleeps." },
      { label: "Foreground service and notifications", body: "used on Android for active connection handling in the background; on iOS, notifications are used for agent alerts." },
      { label: "File access", body: "granted per folder through the system picker on Android, and through the system document and photo pickers on iOS. Mobile SSH does not request blanket storage permission on either platform." }
    ],
    securityHeading: "Security responsibilities",
    securityBody:
      "Protect your device with a strong screen lock if you save credentials or private keys. Only connect to servers you trust. The current implementation uses local app storage (and the iOS Keychain) rather than a separate encrypted cloud vault. An optional Secure screen setting adds protection when secrets are on screen: on Android it blocks screenshots and screen recording and hides the app from the recents view; on iOS it blanks the app-switcher preview and blocks screen recording and mirroring (a manual screenshot cannot be blocked on iOS).",
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
      { slug: "port-forwarding",  title: "Port forwarding",    text: "Write local tunnel strings, forward to IPv6 destinations, and have them come up on connect." },
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
