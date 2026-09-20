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
    discordCommunity: "Mobile SSH community on Discord",
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
      "Mobile SSH for Android and iOS: SSH terminals, jump hosts, tmux, herdr, Zellij, SFTP, VNC desktops and backups. Android also includes VPN clients and security keys.",
    eyebrow: "SSH client for Android & iOS",
    h1: "Mobile SSH",
    intro:
      "SSH terminals, tmux, herdr and Zellij managers, SFTP, VNC desktops, jump hosts and local tunnels — built for phones and tablets. Eternal Terminal keeps remote shells alive across interruptions. Android also includes VPN clients and USB/NFC security-key authentication.",
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
      { title: "Private keys", text: "Use passwords or private keys, and generate Ed25519 or ECDSA keys on device (RSA too on Android). Android also supports USB/NFC FIDO2 security keys and per-server SSH agent forwarding." },
      { title: "SFTP transfer", text: "Dual-pane file browser tied to an active SSH session. Queue uploads and downloads, rename, delete, and inspect remote permissions." },
      { title: "Port forwarding", text: "Save local tunnel specs with a server profile and they open automatically on connect — including after a reconnect on a new network, without rebuilding them by hand." },
      { title: "Reconnect workflow", text: "Change network and sessions re-dial at once instead of waiting out a dead route, and a session in backoff wakes the moment a usable network appears. On iOS a server that has silently stopped answering is noticed and reconnected." },
      { title: "Backup & restore", text: "Back up servers, credentials and app settings, with optional passphrase encryption and Merge/Replace previews. Android includes VPN profiles; current Android and iOS backups share a format, with platform-specific settings preserved where supported." },
      { title: "Eternal Terminal", text: "Connect over Eternal Terminal (ET) for sessions that survive network drops, sleep, and IP changes — with optional automatic etserver setup over SSH." },
      { title: "Multiplexer managers", text: "Attach, rename, create, split, zoom or kill sessions through the tmux, herdr and Zellij managers on both platforms. A shared multiplexer toolbar button opens the available managers; saved servers choose what to attach on connect." },
      { title: "Plugins", text: "Browse, search and filter plugins by category, then install the workflows you need. Downloads are SHA-256 verified into app-private storage." },
      { title: "Server identity and jump hosts", text: "Reach servers through saved bastions on either platform. Host-key checks run before authentication and block changed keys. Android can automatically pin new keys or ask first; iOS asks you to confirm unknown keys." },
      { title: "Remote desktops", text: "Open a VNC desktop through SSH on Android and iOS, with touch controls, keyboard input, clipboard support and remote screen sizing when the server supports it." },
      { title: "VPN clients on Android", text: "Manage SSH VPN, a local SOCKS5 proxy, WireGuard, Shadowsocks and OpenVPN from the home screen. Choose a profile, start routing, and use the Mobile SSH VPN Quick Settings tile to stop or resume it." }
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
      "Browse local and remote folders, queue transfers, remember each tmux session's remote directory, and open remote files in other apps. Both platforms accept shared files into a terminal session; iOS can remember a folder chosen in Files.",
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
    videoIosAlt: "iOS demo of opening Mobile SSH into a live SSH terminal session and returning to the home screen, with the tmux manager, Settings and the app's other screens",
    muxHead: "One video per session manager",
    muxIntro:
      "The overview demos introduce tmux, herdr and Zellij. These longer recordings show their session, window, tab and pane controls on both platforms against a live server.",
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
    demoHead: "Three more, filmed on Android",
    demoIntro:
      "There is no iOS take of these yet. Same live server as the demos above: a session that survives leaving the app, a key made on the phone instead of typed into it, and servers grouped the way you think about them.",
    demoItems: [
      {
        title: "The session outlives the app",
        text: "Android keeps the connection in a foreground service, and the ongoing notification names the server and offers Disconnect all. Leave while a log is streaming and return to the running session. iOS allows only brief background time, then reconnects and reattaches to your multiplexer.",
        androidAlt:
          "Android demo of a session that keeps running in the background: a live HTTP log streaming in the terminal, the notification permission prompt, the ongoing notification naming the connected server with Disconnect all, then leaving for the home screen and returning to the same stream still arriving."
      },
      {
        title: "Keys are made here, not typed",
        text: "Generate an Ed25519 key on the phone: a label, a username, an optional passphrase. The sheet that follows shows the public half to add to a server's authorized_keys, and can share or save either half.",
        androidAlt:
          "Android demo of key generation: the Generate SSH Key dialog with a label, a username, the Ed25519 key type and a passphrase, then the public key sheet offering to share or save the key."
      },
      {
        title: "Servers live in folders you name",
        text: "Group saved servers into folders and collapse the ones you are not using. The same take ends in the terminal, where a URL printed by a command is underlined and tappable rather than something to select by hand.",
        androidAlt:
          "Android demo of server folders: saved servers grouped into named folders that expand and collapse, then a terminal where URLs in command output are underlined and can be tapped."
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
    galleryAlts: [
      "Mobile SSH home screen on an Android phone with an Active Sessions banner and a Continue list of saved servers to resume, above buttons for Servers, Credentials, Settings, About, and Plugins.",
      "Add Server dialog on a phone with fields for a server name, host and port, additional addresses, credentials, private key, and port forwards.",
      "Single-session SSH terminal on a phone showing a coding agent's patch and passing test run, under the session toolbar.",
      "Two SSH sessions in a side-by-side split view on a phone.",
      "Four SSH sessions in a grid on a phone, each on a different server, with the active pane highlighted.",
      "SFTP file transfer screen on a phone with local My Phone and Remote Host panes.",
      "About dialog on a phone showing version, author, license, and website fields.",
      "Generate SSH Key dialog on a phone with label, user, key type, and passphrase fields.",
      "Public Key dialog on a phone showing the generated key with copy, share, and save options.",
      "Saved Servers screen showing servers organized into collapsible Work and Personal folder groups.",
      "SSH terminal on a phone with https:// URLs underlined as tappable clickable links.",
      "Zellij manager on an Android phone listing sessions, tabs, and panes with buttons to attach, rename, kill, and focus them.",
      "Tmux manager on a phone listing tmux sessions, windows, and panes with buttons to attach, rename, and switch.",
      "Plugins screen on a phone showing an installable plugin catalog with Tailscale, WireGuard, and Claude Code CLI.",
      "AI Chat plugin on a phone streaming a reply from a local llama3.2 model running on the remote server over SSH.",
      "Add Server dialog on a phone with the transport set to Eternal Terminal so sessions survive network drops."
    ],
    galleryIosAlts: [
      "Mobile SSH connect form on an iPhone with server, authentication, folder, and transport fields.",
      "Saved Servers on an iPhone organized into Production and Staging groups with server search.",
      "Live SSH terminal on an iPhone with a tmux status bar and the extra key row at the bottom.",
      "Two SSH sessions stacked in a grid on an iPhone with tap-to-focus panes.",
      "File Transfer on an iPhone with My Phone and Remote Host panes and a completed transfer log.",
      "Key authentication on an iPhone with an Ed25519 key generated on device and a copyable public key.",
      "Tmux manager on an iPhone listing sessions and windows with open, rename, and kill actions — a bell flags an agent awaiting input.",
      "SSH terminal on an iPhone attached to a tmux window showing code in a remote editor.",
      "Plugins catalog on an iPhone with Tailscale, WireGuard, Claude Code CLI, VS Code, and AI Chat available to install.",
      "Connect form on an iPhone with the transport set to Eternal Terminal so sessions survive network drops.",
      "Agent alert settings on an iPhone with vibration, sound, and headphones-only toggles.",
      "Mobile SSH home screen on an iPhone with an Active sessions banner and a Continue row to return to a live session, above tiles for Servers, Credentials, Logs, Settings, About, and Plugins."
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
      "Explore Mobile SSH terminals, jump hosts, server verification, SFTP, VNC, backups and multiplexer managers on Android and iOS, plus Android VPN and security keys.",
    eyebrow: "Feature list",
    h1: "Mobile SSH features",
    intro:
      "Connect to your servers from Android and iOS with SSH terminals, verified server identities, jump hosts, SFTP, VNC and session managers. Android adds built-in VPN routing and hardware security keys; platform-specific features are marked below.",
    groups: [
      {
        title: "Platforms",
        items: [
          "Android 8.0 or newer — currently a Google Play closed test: open the opt-in link in a mobile browser, then install from Play",
          "iOS 16 or newer on iPhone and iPad — join the public beta on TestFlight",
          "Current Android and iOS versions share backup format 2 for inventory and settings; unsupported platform features do not become available by importing a backup"
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
          "A home screen built around resuming: the connections live right now, and the tmux sessions waiting on your servers — drawn from a stored snapshot, so they list with no network and each row is stamped with its age. On iOS the Recent list moved into the New connection sheet, where a tap prefills the form",
          "IPv6 end to end: bracketed literals with an optional port in the address fields, and bracketed IPv6 destinations in port-forward rules",
          "Login log for successful and failed attempts, recording the exact dialed address and, on failure, the reason",
          "Teleport proxy transport (experimental, Android): log in with username, password, and OTP or import a Teleport config or identity file, browse cluster nodes, then run terminals, SFTP, tmux, and plugins over the proxy tunnel",
          "Saved SSH jump hosts on both platforms, including ordered chains of up to eight expanded hops; each hop uses its own credentials and server identity checks",
          "Android SSH agent forwarding: opt in per server to let remote programs request signatures from saved keys, with optional approval before use; private keys stay on the phone",
          "Android FIDO2 security keys over USB or NFC: enroll or import OpenSSH security-key credentials, then respond to touch and PIN prompts"
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
          "Block, braille, and sextant mosaic glyphs drawn by the app itself, so chafa, timg, and ANSI art tile correctly on Android and iOS",
          "Touch sends mouse clicks to mouse-tracking terminal programs on both platforms, with optional dragging; iOS also offers a setting to place the cursor instead",
          "The pane header names the pane's real working directory, asked from tmux or reported by the shell over OSC 7 (Android)",
          "Extra key row of thirteen keys — ESC, TAB, CTRL, arrows, Home, End, PgUp, PgDn, keyboard toggle — that wraps to a second row rather than scrolling, folding any remainder into an overflow menu so no key is off-screen",
          "Customize the row on Android and iOS: add from a palette of about 45 presets including F1–F12, Ctrl combos, and symbols; remove, reorder, hide, define your own escape-sequence keys, and reset to defaults, with a live preview",
          "Tap-to-focus, optional tap-to-show-keyboard setting, copy and copy-all actions",
          "Pinch-to-zoom text sizing with remote terminal resize",
          "Double-tap pane fullscreen mode",
          "Terminal text selection with Copy, Share, and Select all — long-press selects the word, and Copy keeps the selection to share or re-copy",
          "OSC 52 clipboard — copy text from a remote tmux or vim session straight to the phone clipboard (Android and iOS)",
          "Hardware keyboards and voice dictation on both platforms; iOS enables Dictation & suggestions by default, including autocorrection. Turn it off for direct terminal input",
          "External and Bluetooth keyboard support on Android and iOS, including arrows, function keys, and Ctrl/Alt chords",
          "Bracketed paste so multi-line clipboard content is not auto-executed",
          "Bundled Nerd Font renders powerline, starship, devicon, and Material Design icon glyphs on Android and iOS that the system font would otherwise show as empty boxes",
          "Wide CJK, emoji, and combining characters are measured and drawn correctly on Android and iOS, including grapheme clusters and zero-width joiners",
          "Configurable terminal font (system monospace, JetBrains Mono, or Source Code Pro) and ANSI color scheme (Solarized, Gruvbox, Dracula, Nord) on Android and iOS, applied live to open panes",
          "A terminal text-size slider in Settings alongside pinch-to-zoom, and an app theme set to System, Light, or Dark",
          "Connection throughput and stalled-link indicators help distinguish a busy remote command from an unresponsive connection; optional dimming and vibration",
          "Settings control remote notifications, command-finished alerts and remote clipboard reads; these permissions are off by default"
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
          "Unanswered keepalive probes detect a server that has stopped responding and trigger reconnects on Android and iOS",
          "Active Sessions entry point from the start screen; ongoing notification lists sessions — tap to open",
          "tmux command tracking and reattach hints, with per-server choices of Auto, Nothing, tmux, herdr or Zellij on Android and iOS; session identity is retained across tmux socket switches",
          "Agents report themselves through the terminal, so the app knows the agent, the tool it is running, and whether it is blocked on you — the pane turns amber, its header reads \"claude · needs you\", and a toolbar badge counts who is waiting",
          "Answer an agent's question with one tap from the Agents list; the reply goes over a separate channel, so it never types into what is on screen",
          "Install the agent hook onto a server from inside the app — a small shell script that any agent can call, not a vendor integration",
          "Eternal Terminal (ET) transport for sessions that survive network drops, sleep, and IP changes, with optional automatic etserver setup over SSH",
          "Tmux manager: list and switch sessions, windows, and panes — attach, rename, create, split, zoom, or kill, with name/date sorting and a 🔔 for agents awaiting input",
          "One multiplexer toolbar button opens the tmux, herdr and Zellij managers; Herdr supports pane previews, focus and replies, and Zellij supports live and exited sessions"
        ]
      },
      {
        title: "Files and tunnels",
        items: [
          "Dual-pane SFTP browser for local and remote files, with a transfer log that shows every transfer and scrolls",
          "Queued uploads and downloads; share files into Mobile SSH on Android or through the iOS Share Extension, then upload them into a connected session and insert their remote paths",
          "Recursive folder upload and download between phone and remote host",
          "Remote rename, delete, create, edit, compress to .tar.gz, permissions (chmod/chown), and details flows",
          "Open a downloaded file in another app on both platforms — on iOS downloads also appear in the Files app under \"On My iPhone\"",
          "File Transfer remembers remote directories by host and tmux session on both platforms; iOS also remembers an external local folder chosen through Files",
          "Sort by name or date with per-host persistence, and jump back to recent remote paths",
          "File sizes in binary units, matching what ls -h shows in the terminal one tab away",
          "Local port forwarding saved with server profiles and brought up automatically on connect",
          "Follows the system light or dark theme across the app and file browser — choose System, Light, or Dark on Android and iOS"
        ]
      },
      {
        title: "Localization",
        items: [
          "Twenty app languages on both platforms: Arabic, Egyptian Arabic, Bengali, Chinese (Simplified and Traditional), English, French, German, Hindi, Indonesian, Japanese, Marathi, Nigerian Pidgin, Portuguese, Russian, Spanish, Tamil, Telugu, Turkish and Urdu",
          "Follows the system language by default, and Settings has a language picker if you want the app in something other than the phone's language"
        ]
      },
      {
        title: "Keys and backup",
        items: [
          "Generate new Ed25519 or ECDSA keys on the device (RSA too on Android), with an optional passphrase",
          "Copy, share, or save a generated public key to add to the server's authorized_keys",
          "Full backups include servers, credentials, app settings, language and multiplexer sorting; Android also includes SSH VPN, SOCKS5, WireGuard, Shadowsocks and OpenVPN profiles",
          "Use selected or inventory-only exports for a smaller scope; preview a full backup and choose Merge or Replace, with optional passphrase encryption",
          "Unencrypted backups contain passwords and private keys. SSH host trust, active sessions, system permissions and local folder grants are not portable; security-key credentials still need the physical key"
        ]
      },
      {
        title: "Security",
        items: [
          "Secure screen: on Android, block screenshots and screen recording and hide the app from the recents thumbnail; on iOS, blank the app-switcher preview and block screen recording and mirroring (a manual screenshot cannot be blocked on iOS) — an opt-in setting for when passwords, keys, or tokens are on screen",
          "Saved servers, credentials and keys are stored on the device, with no required cloud account or sync; see the privacy page for storage protections and their limits",
          "Anonymous usage analytics are on by default, with an opt-out in Settings on Android and iOS; events do not include servers, credentials, commands or file contents",
          "SSH host identities are verified before authentication. Android automatically pins new raw keys by default, with a setting to require approval; iOS asks before trusting an unknown key. Both reject changed keys",
          "Both platforms import scoped OpenSSH host-key revocations. iOS accepts @revoked Ed25519/ECDSA keys; Android also supports host certificate authorities. iOS does not support host certificates or CA imports. SSH trust stays on each device and is excluded from backups"
        ]
      },
      {
        title: "Plugins",
        items: [
          "Browse plugins by category and search, install and run them; catalogs are refreshed when you change sources",
          "Plugins download on demand from a public catalog and are SHA-256 verified into app-private storage",
          "A plugin declares what it needs — SSH commands, a tunnel, storage — and the app refuses anything it did not ask for",
          "When a plugin sets something up on your server, you see the exact commands first and approve them before they run",
          "Configure a custom or private catalog source, or install from a folder on your own server"
        ]
      },
      {
        title: "Remote desktops",
        items: [
          "VNC desktops through an SSH tunnel on Android and iOS, without exposing a VNC port to the public internet",
          "Touch pointer controls, hardware and on-screen keyboard input, clipboard exchange and desktop bell support",
          "Choose a remote screen-size preset or custom dimensions when the VNC server supports resizing; unsupported resize requests are reported"
        ]
      },
      {
        title: "VPN clients (Android)",
        items: [
          "Open VPN from the home screen to manage SSH VPN, SOCKS5 proxy, WireGuard, Shadowsocks and OpenVPN profiles",
          "SSH VPN routes TCP and DNS through a saved SSH server for all or selected apps and domains; other UDP assigned to SSH is blocked",
          "The authenticated local SOCKS5 proxy works alongside another VPN; participating apps must use the proxy and remote DNS",
          "Import WireGuard .conf files, supported Shadowsocks ss:// links, or self-contained OpenVPN .ovpn profiles with verified server certificates",
          "Start a profile to switch VPNs, and use the Mobile SSH VPN Quick Settings tile to stop or start the remembered VPN profile; the tile excludes SOCKS proxies",
          "Android allows one device VPN at a time. Tailscale uses its separate app; IKEv2/IPsec is managed in Android Settings. Mobile SSH does not promise always-on or lockdown protection"
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
      "Mobile SSH combines SSH, SFTP, VNC and multiplexer managers on Android and iOS, with built-in VPN clients and security-key authentication on Android. Termux is an Android Linux environment, and Termius is a cross-platform SSH client with account-based productivity features.",
    columns: {
      need: "Need",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "Primary purpose",
        mobileSsh: "SSH, SFTP, VNC, jump hosts and multiplexer managers on both platforms; VPN clients and FIDO2 security keys on Android.",
        termux: "Android terminal emulator and Linux environment with APT packages.",
        termius: "Modern SSH client across Android, iOS, desktop, and web-oriented team workflows."
      },
      {
        need: "Setup style",
        mobileSsh: "Save a server and its credentials, optionally select jump hosts, then connect with server identity checks before authentication.",
        termux: "Install packages such as OpenSSH, configure shell tools, and work from a Linux-like command line.",
        termius: "Create or sync hosts, keys, snippets, and vault items through the Termius app/account model."
      },
      {
        need: "Mobile terminal controls",
        mobileSsh: "Extra keys, grid sessions, fullscreen panes, pinch zoom, copy/share, mouse support and external keyboards. iOS Dictation & suggestions can be turned off for direct terminal input.",
        termux: "Powerful terminal environment; terminal behavior depends on installed tools and configuration.",
        termius: "Mobile keyboard add-on, gestures, tabs, autocomplete, snippets, and polished terminal UX."
      },
      {
        need: "File transfer",
        mobileSsh: "Dual-pane SFTP, tmux-aware folder history, remote file sharing and incoming shared files on both platforms; iOS can remember an external Files folder.",
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
        mobileSsh: "On-device profiles, credentials, host trust and settings; optional portable backups of inventory and settings. Android backups also include VPN profiles; SSH trust stays on each device.",
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
      { category: "Terminal",   feature: "App-drawn mosaic glyphs (chafa, ANSI art)", mobile: "yes", termux: "font-dependent", termius: "no" },
      { category: "Terminal",   feature: "Tap acts as a click in mouse-mode TUIs", mobile: "yes", termux: "yes",       termius: "no" },
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
      { category: "Privacy & cost", feature: "Analytics opt-out",              mobile: "yes", termux: "no analytics", termius: "no" },
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
      "A fast-growing category of apps exists just to drive coding agents — Claude Code, Codex, and friends — from your phone. Some are third-party SSH or relay apps (Onepilot, Happy, Omnara, Moshi, Orca); OpenAI and Anthropic now ship this natively too, with Codex inside the ChatGPT app and Claude Code inside the Claude app, both running in the vendor's own cloud. Mobile SSH overlaps with all of them — you can run those agents over SSH and get alerted when they need you — but it comes at the job from the other side: it is a general, direct SSH client first, and an agent companion second.",
    agentAppsRows: [
      { feature: "Runs coding agents from your phone",             mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "Works with any coding agent (not one vendor)",   mobile: "yes", onepilot: "yes",      happy: "Claude Code", omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "Codex only",   claude: "Claude Code only" },
      { feature: "Runs on your own machine (not a vendor cloud)",  mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "no",           claude: "partial" },
      { feature: "Direct SSH — no cloud relay",                    mobile: "yes", onepilot: "yes",      happy: "no",         omnara: "no", moshi: "yes", orca: "no",      chatgpt: "no",           claude: "no" },
      { feature: "General SSH terminal (run any command)",         mobile: "yes", onepilot: "yes",      happy: "no",         omnara: "partial", moshi: "yes", orca: "Paired desktop terminal", chatgpt: "no",           claude: "no" },
      { feature: "SFTP file transfer",                             mobile: "yes", onepilot: "partial",  happy: "no",         omnara: "no", moshi: "Conflicting docs", orca: "Desktop only",      chatgpt: "no",           claude: "no" },
      { feature: "Local port forwarding",                          mobile: "yes", onepilot: "yes",      happy: "no",         omnara: "no", moshi: "Dev previews (Pro)", orca: "Desktop only",      chatgpt: "no",           claude: "no" },
      { feature: "tmux session manager",                           mobile: "yes", onepilot: "partial",  happy: "no",         omnara: "no", moshi: "Pro", orca: "Not documented",      chatgpt: "no",           claude: "no" },
      { feature: "Works with an agent you installed yourself",     mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "no",           claude: "no" },
      { feature: "Agent alerts (when a connected agent needs input)", mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "One-tap approve/deny of agent prompts",          mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes", moshi: "Pro after trial", orca: "Supported agents",     chatgpt: "yes",          claude: "yes" },
      { feature: "Zero server or SSH setup",                       mobile: "no",  onepilot: "no",       happy: "partial",    omnara: "partial", moshi: "no", orca: "Desktop pairing", chatgpt: "yes",          claude: "yes" },
      { feature: "Android and iOS",                                mobile: "yes", onepilot: "iOS only", happy: "yes",        omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "No account required",                            mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "no", moshi: "yes", orca: "LAN/Tailscale; Relay needs an account",      chatgpt: "no",           claude: "no" },
      { feature: "No Pro paywall (all features free)",             mobile: "yes", onepilot: "no",       happy: "no",         omnara: "no", moshi: "no", orca: "yes",      chatgpt: "free tier",    claude: "no" },
      { feature: "Open source",                                    mobile: "Apache 2.0",  onepilot: "no",       happy: "MIT",        omnara: "Apache", moshi: "no", orca: "MIT",  chatgpt: "no",           claude: "no" }
    ],
    agentAppsNote:
      "The native ChatGPT and Claude apps are the smoothest way to run one vendor's agent with zero setup — no server, just an account — and they add a polished one-tap approve/deny screen. The catch: they run only their own model in their own cloud, with no general terminal, no SFTP or tunnels, and no bring-your-own machine, and they are paid or account-gated. Onepilot, Happy, and Omnara keep the agent on hardware you control (Onepilot via direct SSH; Happy and Omnara via a cloud relay, and Omnara needs an account). Mobile SSH connects straight to your own server with no account or vendor relay, runs any agent alongside a full terminal, SFTP, and port forwarding, and every feature is free. It now answers agent prompts the same way they do — an Agents list showing every agent across every connection, with a button per choice — the difference being that the agent runs on your machine and the reply travels over your own SSH connection. The trade-off is the one it has always been: you bring the server, and the agent's hook has to be installed on it once.",
    agentAppsSourcesNote: "Checked 2026-09-19. Moshi's direct SSH terminal is separate from its optional backend for agent events and approvals. Its Android listing advertises SFTP, but its detailed docs describe SCP uploads and dev-server previews; those cells are qualified accordingly. Orca's mobile app pairs with Orca on a computer: LAN/Tailscale can work without an Orca account, while Relay requires one. Desktop-only and undocumented features are marked in the table. Official sources:",
  },
  privacy: {
    metaTitle: "Privacy Policy | Mobile SSH",
    metaDescription:
      "How Mobile SSH handles saved data, server identities, backups, SSH and VPN traffic, files, analytics and permissions on Android and iOS.",
    eyebrow: "Privacy",
    h1: "Privacy Policy",
    intro:
      "Mobile SSH stores its configuration on your device and connects to the servers and services you choose. It requires no Mobile SSH account or cloud sync. Android's optional VPN clients also route selected device traffic through your configured servers.",
    sections: [
      {
        heading: "Information stored on your device",
        body: "Saved data includes server profiles, credentials, private keys, host identities, jump hosts, tunnel rules, session snapshots, login history, file paths, folder-access grants and app settings. Android also stores VPN/proxy configurations and their secrets. iOS secrets use Keychain. Android encrypts inventory with a Keystore-backed key, but can save it in plain text if encryption is unavailable; WireGuard, Shadowsocks and OpenVPN profile storage requires encryption. Android cloud backup is disabled. Optional debug logs are stored locally."
      },
      {
        heading: "Information sent over the network",
        body: "SSH authentication goes to your configured servers and jump hosts after their identity checks. Terminal, SFTP, VNC and forwarded traffic goes to the endpoints you choose. Plugin catalogs and downloads contact their configured sources. Android VPN/proxy profiles can send other apps' traffic and DNS through your SSH, WireGuard, Shadowsocks or OpenVPN servers, according to the selected routes. This traffic is not sent to Mobile SSH analytics or cloud storage."
      },
      {
        heading: "File transfer and storage access",
        body: "File transfer uses folders and files you select, without broad storage permission. Android retains access to the folder you grant. iOS can use the app's folder or remember a folder chosen in Files, and imports documents, photos and shared files through system interfaces. A selected file provider may store data in its own cloud service. Opening or sharing a file sends it to the app or destination you choose."
      },
      {
        heading: "Logs and troubleshooting",
        body: "Login attempts are recorded locally as you connect. Debug recording is optional: Android's recorder warns that terminal diagnostics include every key you type, including passwords, and exports an archive. iOS debug logs record connection addresses, failures, reconnects, network changes and tmux diagnostics. Review logs before sharing them; they can reveal server details and, on Android, typed secrets."
      },
      { heading: "Usage analytics", body: "When enabled, Mobile SSH sends Aptabase feature interactions (including VPN/proxy use and terminal multiplexer type), connection diagnostics, app/OS versions, device model, language and a temporary session ID over HTTPS to improve the app. Aptabase processes the request IP address and User-Agent to derive country/region and a daily pseudonymous identifier; it does not store the original IP address or User-Agent with analytics. Events exclude browsing traffic, DNS queries, server addresses, usernames, credentials, commands and file contents. Android builds with the analytics consent prompt require opt-in; older Android builds and iOS enable analytics by default. All features work without analytics. Settings can stop collection; previously queued events may still be delivered on iOS. Android consent is device-local and is not restored from backups. See [Aptabase's data processing agreement](https://aptabase.com/legal/dpa)." },
      { heading: "Backups you export", body: "Full backups include inventory and app settings, plus VPN/proxy profiles on Android. A passphrase encrypts the file; without one, it contains passwords and private keys in plain text. You choose where it is saved or shared. SSH host trust, active sessions and system folder grants are excluded. Import previews show which sections and security preferences will be applied." },
      { heading: "VPN routing on Android", body: "Device VPN routing requires Android's consent and continues until stopped or ended by the system. Only one device VPN can run at a time; a local SOCKS proxy can coexist with another VPN. SSH routing carries TCP and DNS, while other UDP assigned to SSH is blocked. Stopping, switching or terminating the app ends the old VPN's protection; Mobile SSH does not provide always-on or lockdown guarantees." }
    ],
    permissionsHeading: "Permissions",
    permissions: [
      { label: "Internet", body: "used for your SSH, file-transfer, desktop, VPN and plugin connections, and enabled analytics." },
      { label: "Wake lock and Wi-Fi lock", body: "used on Android to keep active SSH sessions alive while the device sleeps." },
      { label: "Foreground service and notifications", body: "used on Android for active connection handling in the background; on iOS, notifications are used for agent alerts." },
      { label: "File access", body: "granted through system folder, document and photo pickers; iOS can remember an external Files folder. Neither platform requests blanket storage permission." },
      { label: "VPN consent (Android)", body: "required before a built-in VPN client can route device traffic. A SOCKS-only proxy does not occupy the device VPN slot." },
      { label: "USB and NFC (Android)", body: "used to communicate with a physical FIDO2 security key for enrollment or SSH signing, with USB access and touch/PIN confirmation as required." }
    ],
    securityHeading: "Security responsibilities",
    securityBody:
      "Protect your device and exported backups. Compare unknown SSH fingerprints through a trusted channel: disable Android's automatic acceptance of new identities if you want to approve first use; iOS asks by default. Investigate changed-key failures before replacing a saved identity. Secure screen blocks screenshots and recording on Android; iOS hides the app-switcher preview and recording/mirroring, but cannot block manual screenshots.",
    contactHeading: "Contact",
    contactBody: "Support contact: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  },
  docsIndex: {
    metaTitle: "Documentation | Mobile SSH",
    metaDescription: "End-user documentation for Mobile SSH on Android and iOS.",
    eyebrow: "User guide",
    h1: "Mobile SSH documentation",
    intro:
      "Guides to SSH identity checks and jump hosts, terminals and VNC, multiplexer managers, SFTP, backups, local tunnels and Android VPN clients, with platform differences explained.",
    cards: [
      { slug: "getting-started",  title: "Getting started",    text: "Install, verify server identities, configure jump hosts and keys, and back up your setup." },
      { slug: "terminal",         title: "Terminal",           text: "Use terminal controls, tmux, herdr, Zellij, agent alerts and VNC desktops." },
      { slug: "file-transfer",    title: "File transfer",      text: "Transfer files, remember folders, and share files into sessions or other apps." },
      { slug: "port-forwarding",  title: "Port forwarding",    text: "Configure local tunnels and Android SSH VPN, SOCKS5, WireGuard, Shadowsocks and OpenVPN." },
      { slug: "troubleshooting",  title: "Troubleshooting",    text: "Diagnose identity, jump-host, terminal, transfer, backup and VPN problems." }
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
    intro: "SSH, SFTP, VNC and multiplexer managers for Android and iOS, with local backups, verified server identities and jump hosts. Android also includes VPN clients and hardware security-key support.",
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
    openvpnSourceBody: "OpenVPN 3 Core is used under MPL 2.0. Download the exact covered source and dependency versions, license texts and native build information.",
    openvpnSourceLabel: "Download source archive",
    certificatesHeading: "Certificates",
    apkCertificateLabel: "Sideload APK signing certificate (PEM)",
    apkCertificateBody: "This public certificate identifies Mobile SSH's sideload APK signer. Google Play may sign downloads with a different certificate.",
    serverCertificateBody: "SSH and VPN server certificates must come from your server administrator or VPN provider. Verify their fingerprints through a trusted channel; this signing certificate is not a VPN CA.",
    signingHelpLabel: "Android signing documentation",
    contactHeading: "Contact",
    contactBody: "Support contact: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  }
};
