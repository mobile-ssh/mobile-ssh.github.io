---
layout: ../../layouts/DocLayout.astro
title: Getting started
description: First steps for installing Mobile SSH, connecting to a server, saving profiles, credentials, and sessions.
---

# Getting started

Mobile SSH is an SSH client for Android and iOS for connecting to your own Linux, Unix, network, IoT, or development servers. You provide the server address and credentials; the app opens an interactive SSH terminal.

## Requirements

- Android 8.0 or newer, or iOS 16 or newer (iPhone or iPad).
- Network access from the device to your SSH server.
- SSH server hostname or IP address, port, username, and either a password or private key.
- On Android, storage access if you want to use SFTP file transfer with the local phone file browser; iOS uses the system file and photo pickers instead.

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

## Choose a transport

When adding or editing a server, the **Transport** selector chooses how Mobile SSH connects:

- **SSH** -- a standard SSH connection (the default).
- **Eternal Terminal** -- a resilient session that survives network drops, sleep, and IP changes. If the host has no `etserver`, Mobile SSH can install one over SSH for you. See the **Terminal** guide for details.

## Save servers

Saved servers keep the connection target and optional tunnel configuration. A saved server can include:

- Hostname or IP address.
- SSH port.
- Username.
- Password or private key details.
- Optional local port-forwarding rules.
- Optional additional addresses for the same machine (see below).

Use saved servers for hosts you access repeatedly. If a saved server points to a different host than your current active session, Mobile SSH starts a fresh connection for the selected target.

### Multiple addresses (LAN/VPN roaming)

The same machine is often reachable at different addresses depending on where you are — a home Wi-Fi IP versus a VPN IP. Add the alternates in the server's edit dialog, each with its own port if needed. When you connect, Mobile SSH tries the addresses in order until one answers, and it remembers the address that last worked and dials it first next time. A network change (for example leaving the VPN) triggers an immediate reconnect to whichever address is now reachable, instead of waiting for the dead route to time out.

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

Private key import uses the system file picker for key files. On Android, file transfer uses a separate local file browser and may request broader storage access on newer Android versions; on iOS, files come in through the system document and photo pickers.

## The home screen

The home screen is built to answer "what can I get back into?" rather than to open a blank connection form:

- **Continue** lists the connections that are live right now, with a pane count when a connection has more than one. Tapping a row takes you back to it.
- **Tmux sessions** lists what is running on your saved servers. It is drawn from a snapshot the app already stored, so it appears instantly with no network at all — each row is stamped with the snapshot's age, and tapping one connects and attaches that session. Snapshots dim after a few hours and are dropped after a week.
- On iOS a **Recent** list sits below these; the Android app dropped it, because "what can I get back into?" turned out to be the more useful question than "when did I last connect?".

If nothing is live and nothing is cached, the screen says so and points you at **Servers**.

## Name and search saved servers

A saved server can carry a name — "Home NAS", "Prod web" — and the list shows that instead of the address. The address comes back on its own whenever the name would be ambiguous: two rows sharing a name, or a search in progress, so you can always tell rows apart.

Tap the search field on the **Saved Servers** page to filter. Search matches the name, the user, the host, the port, the credential, and any alternate addresses. The **+ Add Session** screen also opens with search so you can find and connect to a saved server in one step.

Servers can be filed into folders. A folder collapses, remembers that it was collapsed, and can be reordered or renamed; deleting one moves its servers to **Ungrouped** rather than deleting them.

## Export part of your setup

**Export selected…** on the Servers and Credentials screens turns the list into a tick-box picker, so you can hand over three servers without exporting everything. Tapping a folder header takes the whole folder. Exports are encrypted if you give them a passphrase — without one, the file holds passwords and private keys in plain text, and the app says so before it writes.

## Active sessions

When sessions are running, the start screen shows **Active Sessions** with a count. Tap it to return to the terminal grid. An ongoing notification also lists active hosts — tap a host in the notification to jump straight to that terminal.

Going back to the start screen does not disconnect active SSH sessions; closing panes or finishing the terminal activity disconnects them.

## First useful settings

Open **Settings** from the start screen (it has its own page):

- Decide whether tapping the terminal raises the keyboard. The two platforms ship opposite defaults: on Android the keyboard appears only from the ⌨ button, on iOS a tap raises it.
- Set the terminal **text size**, **font**, **color scheme**, and **scrollback** size, and pick an app **theme** (System, Light, or Dark).
- Enable **Agent alerts** if you run long background tasks (Claude Code, Codex, shell scripts) and want to be told when the agent needs your input. See the **Terminal** guide for how agents report themselves.
- On Android, **Keep sessions running in background** is on by default, so shells and agents survive swiping the app away.
- On Android, turn off anonymous usage analytics if you prefer no data to be sent. The iOS app does not have that switch yet.

## Plugins

Plugins extend Mobile SSH with extra workflows. Open **Plugins** from the start screen to:

- Browse a catalog of available plugins.
- Install the ones you want -- each plugin is downloaded on demand and verified by SHA-256 checksum into the app's private storage.
- Run installed plugins from the same screen.

Plugins are fetched from a public catalog by default. If you maintain your own, you can point Mobile SSH at a custom or private catalog source. Only install plugins from sources you trust.

## Languages

Mobile SSH follows the system language by default. The app ships with translations for Arabic, Bengali, Chinese (Simplified and Traditional), English, French, German, Hindi, Indonesian, Japanese, Marathi, Portuguese, Russian, Spanish, Tamil, Telugu, Turkish, and Urdu — twenty languages on Android, which adds Nigerian Pidgin and Egyptian Arabic, and eighteen on iOS.

If you want the app in a language other than the phone's, **Settings → Language** has a picker with a "System default" option. You can also still change it from Android **Settings → System → Languages** or iOS **Settings → General → Language & Region**.

## Security note

Only connect to servers you trust. The current app stores saved connection data locally and does not provide a cloud vault or cross-device sync. The current implementation also does not present a known-host confirmation prompt, so avoid connecting over untrusted networks when host identity matters.
