---
layout: ../../../layouts/DocLayout.astro
title: "How to Start"
description: "First steps to install Mobile SSH, connect to server, save profiles, credentials, and sessions."
---

# How to Start

Mobile SSH na SSH client for Android and iOS wey you fit use connect to your own Linux, Unix, network, IoT, or development servers. You go provide di server address and credentials; di app go open one interactive SSH terminal.

## Wetin you need

- Android 8.0 or newer, or iOS 16 or newer (iPhone or iPad).
- Network access from di device go your SSH server.
- SSH server hostname or IP address, port, username, and either password or private key.
- For Android, storage access if you wan use SFTP file transfer with di local phone file browser; iOS dey use di system file and photo pickers instead.

## Install di app

- **Android:** install Mobile SSH from Google Play.
- **iOS:** di iOS app dey come as public beta for TestFlight. Install Apple TestFlight app, then open di Mobile SSH invite link from di site home page to install am and dey receive updates.

## Connect to one server

1. Open Mobile SSH.
2. Tap **+ Add Session** make you search for saved server, or add new one from dat screen.
3. Enter di host, port, username, and authentication details if you dey add new server.
4. Tap di server make e open terminal session.
5. Use **Active Sessions** for di start screen to go back to sessions wey still dey run.

Di default SSH port na `22`. If your server dey use anoda port, enter dat port for di server profile.

## Save servers

Saved servers dey keep di connection target and optional tunnel configuration. One saved server fit include:

- Hostname or IP address.
- SSH port.
- Username.
- Password or private key details.
- Optional local port-forwarding rules.

Use saved servers for hosts wey you dey access plenty times. If one saved server dey point to different host pass your current active session, Mobile SSH go start fresh connection for di selected target.

## Save credentials

Di **Credentials** screen dey store username/password or username/private-key records wey you fit reuse. You fit select saved credentials from di server setup dialog so you no go need enter di same login material for every host again.

Credential records dey store local for di device — for iOS, di secrets dey stay inside di system Keychain. Protect di device with screen lock if you save passwords, passphrases, or private keys.

## Use private keys

Mobile SSH dey support pasted private keys and key import through di system file picker. For Android di app dey support Ed25519, RSA, ECDSA, and DSA keys; for iOS e dey support Ed25519 and ECDSA (P-256/384/521) keys.

To use private key:

1. Open **Credentials** or di server edit dialog.
2. Paste di private key text, or choose **Import from file**.
3. Enter di key passphrase for di password/passphrase field if di key dey encrypted.
4. Save di credential or server.

Private key import dey use di system file picker for key files. For Android, file transfer dey use separate local file browser and fit request wider storage access for newer Android versions; for iOS, files dey enter through di system document and photo pickers.

## Recent sessions

Di start screen dey show recent sessions. One recent session fit reconnect to di same server set. If di previous session still dey active, Mobile SSH go return to am instead of starting duplicate connection.

## Search saved servers

Tap di search field for di **Saved Servers** page to filter by name or host. Di **+ Add Session** screen also dey open with search so you fit find and connect to one saved server in one step.

## Active sessions

Wen sessions dey run, di start screen go show **Active Sessions** with di number. Tap am to return to di terminal grid. One notification wey dey ongoing go also list active hosts — tap any host for di notification to jump straight to dat terminal.

Going back to di start screen no go disconnect active SSH sessions; na only wen you close panes or finish di terminal activity e go disconnect dem.

## First useful settings

Open **Settings** from di start screen (e get im own page):

- Enable tap-to-show-keyboard if you prefer make di keyboard show wen you tap di terminal.
- Disable IME suggestions if your keyboard suggestions dey disturb terminal programs like Vim, less, htop, or full-screen tmux apps.
- Enable **Agent alerts** if you dey run long background tasks (Claude Code, Codex, shell scripts) and you wan receive sound or vibration notification wen di agent need your input.
- Turn off anonymous usage analytics if you prefer say no data go dey sent.

## Languages

Mobile SSH dey follow di system language. Di app dey ship with translations for Arabic, Bengali, Chinese (Simplified and Traditional), English, French, German, Hindi, Indonesian, Japanese, Marathi, Nigerian Pidgin, Portuguese, Russian, Spanish, Tamil, Telugu, Turkish, and Urdu. Change languages from Android **Settings → System → Languages**, or for iOS from **Settings → General → Language & Region**, instead of from inside di app.

## Security note

Only connect to servers wey you trust. Di current app dey store saved connection data local and e no dey provide cloud vault or cross-device sync. Di current implementation also no dey show known-host confirmation prompt, so avoid connecting over networks wey you no trust wen host identity matter.
