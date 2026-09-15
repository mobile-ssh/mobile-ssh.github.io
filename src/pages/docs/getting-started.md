---
layout: ../../layouts/DocLayout.astro
title: Getting started
description: Install Mobile SSH, verify server identities, configure jump hosts and keys, and back up servers, credentials and settings.
---

# Getting started

Mobile SSH is an SSH client for Android and iOS for connecting to your own Linux, Unix, network, IoT, or development servers. You provide the server address and credentials; the app opens an interactive SSH terminal.

## Requirements

- Android 8.0 or newer, or iOS 16 or newer (iPhone or iPad).
- Network access from the device to your SSH server.
- SSH server hostname or IP address, port, username, and either a password or private key.
- For local file transfer, choose a folder or files through the system picker. Neither platform needs blanket storage access.

## Install the app

- **Android:** Mobile SSH is currently a closed test on Google Play. Open the opt-in link in a mobile browser on the device — not inside the Google Play app, where the test may not be visible — and join with the Google account you will use. After that it installs and updates from Play like any other app.
- **iOS:** the iOS app ships as a public beta on TestFlight. Install Apple's TestFlight app, then open the Mobile SSH invite link from the site's home page to install and receive updates.

## Connect to a server

1. Open Mobile SSH.
2. Tap **+ Add Session** and search for a saved server, or add a new one from that screen.
3. Enter the host, port, username, and authentication details if adding a new server.
4. Tap the server to open a terminal session.
5. Use **Active Sessions** on the start screen to return to sessions that are still running.

The default SSH port is `22`. If your server uses another port, enter that port in the server profile.

## Verify server identities

Both apps check the SSH server's identity before sending credentials. Changed keys stop the connection, including on alternate addresses and jump hosts.

- **Android:** **Automatically accept new SSH identities** is on by default. The first raw host key is saved automatically; later connections must match it. Turn this off under **Settings → General → Security** to compare each new SHA-256 fingerprint with your administrator before accepting and reconnecting.
- **iOS:** an unknown host key requires confirmation. Compare its SHA-256 fingerprint through a trusted channel, then choose **Trust and reconnect**.

Review saved identities in Settings. Both platforms support administrator-supplied host-key revocations; Android also supports host certificate authorities. On iOS, use **Settings → Server identities → Import revoked keys** for scoped OpenSSH `@revoked` Ed25519/ECDSA entries. Revoked keys are blocked on new connections and reconnects, including previously trusted keys; importing a revocation does not close existing connections. iOS does not support host certificates or CA imports. Host trust stays on each device and is not imported from a backup. Do not remove a changed or revoked key until you have checked why it was blocked.

## Choose a transport

When adding or editing a server, the **Transport** selector chooses how Mobile SSH connects:

- **SSH** -- a standard SSH connection (the default).
- **Eternal Terminal** -- a resilient session that survives network drops, sleep, and IP changes. If the host has no `etserver`, Mobile SSH can install one over SSH for you. See the **Terminal** guide for details.

Android also offers experimental **Teleport** proxy connections. Saved SSH jump-host routes require SSH transport; they cannot be combined with Eternal Terminal.

## Save servers

Saved servers keep the connection target and optional tunnel configuration. A saved server can include:

- Hostname or IP address.
- SSH port.
- Username.
- Password or private key details.
- Optional local port-forwarding rules.
- Optional additional addresses for the same machine (see below).
- Optional saved jump hosts and an **Attach on connect** choice: Auto, Nothing, tmux, herdr or Zellij.

Use saved servers for hosts you access repeatedly. If a saved server points to a different host than your current active session, Mobile SSH starts a fresh connection for the selected target.

### Multiple addresses (LAN/VPN roaming)

The same machine is often reachable at different addresses depending on where you are — a home Wi-Fi IP versus a VPN IP. Add the alternates in the server's edit dialog, each with its own port if needed. When you connect, Mobile SSH tries the addresses in order until one answers, and it remembers the address that last worked and dials it first next time. A network change (for example leaving the VPN) triggers an immediate reconnect to whichever address is now reachable, instead of waiting for the dead route to time out.

### Jump hosts

Save your bastion servers first, then select them in order in the destination server's jump-host settings. Both platforms support up to eight expanded SSH hops. Each hop uses its own credentials and identity checks; the destination need only be reachable from the preceding hop. Missing servers, loops and failed hops stop the route instead of silently connecting directly. Terminals, SFTP, local forwards and supported SSH workflows use the saved route.

## Save credentials

The **Credentials** screen stores reusable username/password or username/private-key records. Saved credentials can be selected from the server setup dialog so you do not re-enter the same login material for every host.

Credential records are stored locally on the device — on iOS, secrets are kept in the system Keychain. Protect the device with a screen lock if you save passwords, passphrases, or private keys.

## Use private keys

Mobile SSH supports pasted private keys and key import through the system file picker. On Android the app supports Ed25519, ECDSA (P-256/384/521), and RSA keys; on iOS it supports Ed25519 and ECDSA (P-256/384/521) keys. DSA (`ssh-dss`) is not supported on either platform. Both platforms can open a passphrase-encrypted key — enter the passphrase in the password/passphrase field.

To use a private key:

1. Open **Credentials** or the server edit dialog.
2. Paste the private key text, or choose **Import from file**.
3. Enter the key passphrase in the password/passphrase field if the key is encrypted.
4. Save the credential or server.

Private key import uses the system file picker. It does not grant access to the rest of your storage; file transfer has its own folder and file selections.

Android also supports **FIDO2 security keys** over USB and NFC: enroll a key or import an OpenSSH security-key credential, then follow the touch and PIN prompts. The physical key is still required after exporting or restoring that credential. **SSH agent forwarding** is a separate per-server opt-in on Android: saved credentials can answer signing requests, with optional approval before each use. Enable it only on servers you trust to request signatures. iOS does not support security-key authentication or agent forwarding.

## The home screen

The home screen is built to answer "what can I get back into?" rather than to open a blank connection form:

- **Continue** lists the connections that are live right now, with a pane count when a connection has more than one. Tapping a row takes you back to it.
- **Tmux sessions** lists what is running on your saved servers. It is drawn from a snapshot the app already stored, so it appears instantly with no network at all — each row is stamped with the snapshot's age, and tapping one connects and attaches that session. Snapshots dim after a few hours and are dropped after a week.
- On iOS, **Recent** is in the **New connection** sheet, where selecting an entry fills the connection form.

Android's **VPN** tile opens its built-in routing clients; **About** is under Settings. The VPN guide is part of **Port forwarding** on this site.

If nothing is live and nothing is cached, the screen says so and points you at **Servers**.

## Name and search saved servers

A saved server can carry a name — "Home NAS", "Prod web" — and the list shows that instead of the address. The address comes back on its own whenever the name would be ambiguous: two rows sharing a name, or a search in progress, so you can always tell rows apart.

Tap the search field on the **Saved Servers** page to filter. Search matches the name, the user, the host, the port, the credential, and any alternate addresses. The **+ Add Session** screen also opens with search so you can find and connect to a saved server in one step.

Servers can be filed into folders. A folder collapses, remembers that it was collapsed, and can be reordered or renamed; deleting one moves its servers to **Ungrouped** rather than deleting them.

## Export part of your setup

**Export selected…** on the Servers and Credentials screens turns the list into a tick-box picker, so you can hand over three servers without exporting everything. Tapping a folder header takes the whole folder. Exports are encrypted if you give them a passphrase — without one, the file holds passwords and private keys in plain text, and the app says so before it writes.

For a full backup, choose **Export all (backup)** on Android or **Backup & Restore** on iOS. Current versions include servers, credentials and app preferences such as language, extra keys and multiplexer sorting. Android also includes its VPN and SOCKS profiles. Use a passphrase to protect the whole file.

Both apps read current backup format 2 and older inventory backups. Review the import preview: **Merge** applies supplied sections while keeping existing items; **Replace** replaces sections present in the file, and a supplied settings section resets omitted preferences to defaults. Missing sections remain untouched. Unsupported platform settings are identified rather than becoming usable features on the other app. Importing a backup does not start a VPN.

Host identities, active sessions, system permissions and selected-folder access are not restored. Verify hosts and grant local folder access on the destination device. Older app versions cannot read the new full-backup format.

## Active sessions

When sessions are running, the start screen shows **Active Sessions** with a count. Tap it to return to the terminal grid. On Android, an ongoing notification also lists active hosts and opens the active connection controls.

Going back to the start screen does not disconnect active SSH sessions; closing panes or finishing the terminal activity disconnects them.

## First useful settings

Open **Settings** from the start screen (it has its own page):

- Decide whether tapping the terminal raises the keyboard. The two platforms ship opposite defaults: on Android the keyboard appears only from the ⌨ button, on iOS a tap raises it.
- Set the terminal **text size**, **font**, **color scheme**, and **scrollback** size, and pick an app **theme** (System, Light, or Dark).
- Enable **Agent alerts** if you run long background tasks (Claude Code, Codex, shell scripts) and want to be told when the agent needs your input. See the **Terminal** guide for how agents report themselves.
- On Android, **Keep sessions running in background** is on by default, so shells and agents survive swiping the app away.
- Both platforms have an anonymous usage analytics switch in Settings. Turning it off stops collecting new events.
- On iOS, **Dictation & suggestions** is enabled by default. Turn it off and open a new pane if you prefer direct terminal input without dictation or autocorrection.
- Remote notifications, command-finished alerts and remote clipboard reads are separate opt-in settings. Enable only the remote actions you want.

## Plugins

Plugins extend Mobile SSH with extra workflows. Open **Plugins** from the start screen to:

- Browse by category and search a catalog of available plugins.
- Install the ones you want -- each plugin is downloaded on demand and verified by SHA-256 checksum into the app's private storage.
- Run installed plugins from the same screen.

Plugins are fetched from a public catalog by default. If you maintain your own, you can point Mobile SSH at a custom or private catalog source. Only install plugins from sources you trust.

## Languages

Mobile SSH follows the system language by default. Both apps now ship twenty languages: Arabic, Egyptian Arabic, Bengali, Chinese (Simplified and Traditional), English, French, German, Hindi, Indonesian, Japanese, Marathi, Nigerian Pidgin, Portuguese, Russian, Spanish, Tamil, Telugu, Turkish and Urdu.

If you want the app in a language other than the phone's, **Settings → Language** has a picker with a "System default" option. You can also still change it from Android **Settings → System → Languages** or iOS **Settings → General → Language & Region**.

## Security note

Only connect to servers you trust. Saved connection data stays on the device unless you export or share it; Mobile SSH provides no cloud vault or automatic cross-device sync. Protect the device and backups, verify unfamiliar host fingerprints, and review changed-key failures before reconnecting.
