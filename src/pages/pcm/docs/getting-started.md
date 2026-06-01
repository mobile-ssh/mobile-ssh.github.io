---
layout: ../../../layouts/DocLayout.astro
title: "How to Start"
description: "First steps to install Mobile SSH, connect to a server, and save profiles, credentials, and sessions."
---

# How to Start

Mobile SSH na Android SSH client wey you fit use connect to your own Linux, Unix, network, IoT, or development servers. You go provide di server address and credentials; di app go open one interactive SSH terminal.

## Wetin you need

- Android 8.0 or newer.
- Network access from di Android device go your SSH server.
- SSH server hostname or IP address, port, username, and password or private key.
- Storage access if you wan use SFTP file transfer with di local phone file browser.

## Connect to one server

1. Open Mobile SSH.
2. Tap **Saved Servers** if you don already create profile, or add server from di connection flow.
3. Enter di host, port, username, and authentication details.
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

Use saved servers for hosts wey you dey access plenty times. If saved server dey point to a different host pass your current active session, Mobile SSH go start fresh connection for di selected target.

## Save credentials

Di **Credentials** screen dey store username/password or username/private-key records wey you fit reuse. You fit select saved credentials from di server setup dialog so you no go enter di same login material for every host.

Credential records dey store local for di Android device. Protect di device with screen lock if you save passwords, passphrases, or private keys.

## Use private keys

Mobile SSH dey support pasted private keys and key import through di Android file picker. Di app implementation dey support Ed25519, RSA, ECDSA, and DSA keys.

To use private key:

1. Open **Credentials** or di server edit dialog.
2. Paste di private key text, or choose **Import from file**.
3. Enter di key passphrase for di password/passphrase field if di key dey encrypted.
4. Save di credential or server.

Private key import dey use Android file picker for key files. File transfer dey use anoda local file browser and fit request wider storage access for newer Android versions.

## Recent sessions

Di start screen dey show recent sessions. Recent session fit reconnect to di same server set. If di previous session still dey active, Mobile SSH go return to am instead of starting duplicate connection.

## Active sessions

Wen sessions dey run, di start screen go show **Active Sessions** with count. Tap am to go back to di terminal grid. Going back to di start screen no necessarily dey disconnect active SSH sessions; closing panes or finishing di terminal activity dey disconnect dem.

## First useful settings

Open **Settings** from di start screen:

- Enable tap-to-show-keyboard if you prefer make di keyboard show wen you tap di terminal.
- Disable IME suggestions if your keyboard suggestions dey disturb terminal programs like Vim, less, htop, or full-screen tmux apps.

## Languages

Mobile SSH dey follow di Android system language. Di app dey ship with translations for Arabic, Bengali, Chinese (Simplified and Traditional), English, French, German, Hindi, Indonesian, Japanese, Marathi, Nigerian Pidgin, Portuguese, Russian, Spanish, Tamil, Telugu, Turkish, and Urdu. Change languages from Android **Settings → System → Languages** instead of from inside di app.

## Security note

Only connect to servers wey you trust. Di current app dey store saved connection data local and e no dey provide cloud vault or cross-device sync. Di current implementation also no dey show known-host confirmation prompt, so avoid connecting over networks wey you no trust wen host identity matter.
