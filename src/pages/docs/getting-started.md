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

- **Android:** install Mobile SSH from Google Play.
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

Mobile SSH supports pasted private keys and key import through the system file picker. On Android the app supports Ed25519, RSA, ECDSA, and DSA keys; on iOS it supports Ed25519 and ECDSA (P-256/384/521) keys.

To use a private key:

1. Open **Credentials** or the server edit dialog.
2. Paste the private key text, or choose **Import from file**.
3. Enter the key passphrase in the password/passphrase field if the key is encrypted.
4. Save the credential or server.

Private key import uses the system file picker for key files. On Android, file transfer uses a separate local file browser and may request broader storage access on newer Android versions; on iOS, files come in through the system document and photo pickers.

## Recent sessions

The start screen shows recent sessions at the top for quick access. A recent session can reconnect to the same server set. If the previous session is still active, Mobile SSH returns to it instead of starting a duplicate connection.

## Search saved servers

Tap the search field on the **Saved Servers** page to filter by name or host. The **+ Add Session** screen also opens with search so you can find and connect to a saved server in one step.

## Active sessions

When sessions are running, the start screen shows **Active Sessions** with a count. Tap it to return to the terminal grid. An ongoing notification also lists active hosts — tap a host in the notification to jump straight to that terminal.

Going back to the start screen does not disconnect active SSH sessions; closing panes or finishing the terminal activity disconnects them.

## First useful settings

Open **Settings** from the start screen (it has its own page):

- Enable tap-to-show-keyboard if you prefer the keyboard to appear when tapping the terminal.
- Enable **Agent alerts** if you run long background tasks (Claude Code, Codex, shell scripts) and want a sound or vibration notification when the agent needs your input.
- Turn off anonymous usage analytics if you prefer no data to be sent.

## Plugins

Plugins extend Mobile SSH with extra workflows. Open **Plugins** from the start screen to:

- Browse a catalog of available plugins.
- Install the ones you want -- each plugin is downloaded on demand and verified by SHA-256 checksum into the app's private storage.
- Run installed plugins from the same screen.

Plugins are fetched from a public catalog by default. If you maintain your own, you can point Mobile SSH at a custom or private catalog source. Only install plugins from sources you trust.

## Languages

Mobile SSH follows the system language. The app ships with translations for Arabic, Bengali, Chinese (Simplified and Traditional), English, French, German, Hindi, Indonesian, Japanese, Marathi, Nigerian Pidgin, Portuguese, Russian, Spanish, Tamil, Telugu, Turkish, and Urdu. Change languages from Android **Settings → System → Languages**, or on iOS from **Settings → General → Language & Region**, rather than from inside the app.

## Security note

Only connect to servers you trust. The current app stores saved connection data locally and does not provide a cloud vault or cross-device sync. The current implementation also does not present a known-host confirmation prompt, so avoid connecting over untrusted networks when host identity matters.
