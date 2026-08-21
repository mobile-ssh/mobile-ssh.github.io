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

- **Android:** Mobile SSH na closed test for Google Play right now. Open di opt-in link inside mobile browser for di device — no be inside di Google Play app, where di test fit no dey visible — and join wit di Google account wey you go use. After dat, e go install and dey update from Play like any oda app.
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
- Optional extra addresses for di same machine (see below).

Use saved servers for hosts wey you dey access plenty times. If one saved server dey point to different host pass your current active session, Mobile SSH go start fresh connection for di selected target.

### Multiple addresses (LAN/VPN roaming)

Di same machine fit dey reachable for different addresses depending on where you dey — home Wi-Fi IP versus VPN IP. Add di alternates for di server edit dialog, each one wit im own port if e need. Wen you connect, Mobile SSH go try di addresses in order until one answer, and e go remember di address wey last work and dial am first next time. Network change (for example wen you comot for di VPN) go trigger immediate reconnect to whichever address dey reachable now, instead of waiting make di dead route time out.

## Save credentials

Di **Credentials** screen dey store username/password or username/private-key records wey you fit reuse. You fit select saved credentials from di server setup dialog so you no go need enter di same login material for every host again.

Credential records dey store local for di device — for iOS, di secrets dey stay inside di system Keychain. Protect di device with screen lock if you save passwords, passphrases, or private keys.

## Use private keys

Mobile SSH dey support pasted private keys and key import through di system file picker. For Android di app dey support Ed25519, ECDSA (P-256/384/521), and RSA keys; for iOS e dey support Ed25519 and ECDSA (P-256/384/521) keys. DSA (`ssh-dss`) no dey supported for any of di two platforms. Di two platforms fit open key wey passphrase don encrypt — enter di passphrase for di password/passphrase field.

To use private key:

1. Open **Credentials** or di server edit dialog.
2. Paste di private key text, or choose **Import from file**.
3. Enter di key passphrase for di password/passphrase field if di key dey encrypted.
4. Save di credential or server.

Private key import dey use di system file picker for key files. For Android, file transfer dey use separate local file browser and fit request wider storage access for newer Android versions; for iOS, files dey enter through di system document and photo pickers.

## Di home screen

Dem build di home screen make e answer "wetin I fit enter back?" instead of opening empty connection form:

- **Continue** dey list di connections wey dey live right now, wit pane count wen one connection get pass one. If you tap one row e go carry you back go dia.
- **Tmux sessions** dey list wetin dey run for your saved servers. E dey come from snapshot wey di app don already store, so e dey show sharp-sharp even wen no network dey at all — each row carry di age of di snapshot, and if you tap one e go connect and attach dat session. Snapshot dey dim after some hours and dem dey drop am after one week.
- For iOS, **Recent** list dey sit under dis two; di Android app comot am, because "wetin I fit enter back?" na di question wey helep pass "wen I last connect?".

If nothing dey live and nothing dey cached, di screen go tell you so and point you go **Servers**.

## Name and search saved servers

Saved server fit carry name — "Home NAS", "Prod web" — and di list go show dat one instead of di address. Di address dey come back by imsef wenever di name go confuse person: two rows wey share di same name, or search wey dey go on, so you fit always tell di rows apart.

Tap di search field for di **Saved Servers** page to filter. Search dey match di name, di user, di host, di port, di credential, and any alternate address. Di **+ Add Session** screen also dey open with search so you fit find and connect to one saved server in one step.

You fit file servers enter folder. Folder fit collapse, e dey remember say e collapse, and you fit reorder or rename am; if you delete one, im servers dey move go **Ungrouped**, dem no dey delete dem.

## Export part of your setup

**Export selected…** for di Servers and Credentials screens dey turn di list to tick-box picker, so you fit hand over three servers witout exporting everything. Wen you tap folder header e go carry di whole folder. Export dey encrypted if you give am passphrase — witout one, di file dey hold password and private key as plain text, and di app go tell you so before e write am.

## Active sessions

Wen sessions dey run, di start screen go show **Active Sessions** with di number. Tap am to return to di terminal grid. One notification wey dey ongoing go also list active hosts — tap any host for di notification to jump straight to dat terminal.

Going back to di start screen no go disconnect active SSH sessions; na only wen you close panes or finish di terminal activity e go disconnect dem.

## First useful settings

Open **Settings** from di start screen (e get im own page):

- Decide whether tapping di terminal go raise di keyboard. Di two platforms ship opposite default: for Android di keyboard dey show only from di ⌨ button, for iOS one tap dey raise am.
- Set di terminal **text size**, **font**, **color scheme**, and **scrollback** size, and pick app **theme** (System, Light, or Dark).
- Enable **Agent alerts** if you dey run long background tasks (Claude Code, Codex, shell scripts) and you wan make dem tell you wen di agent need your input. Check di **Terminal** guide to see how agents dey report demsef.
- For Android, **Keep sessions running in background** dey on by default, so shell and agent dey survive wen you swipe di app comot.
- For Android, turn off anonymous usage analytics if you prefer say no data go dey sent. Di iOS app never get dat switch yet.

## Languages

Mobile SSH dey follow di system language by default. Di app dey ship with translations for Arabic, Bengali, Chinese (Simplified and Traditional), English, French, German, Hindi, Indonesian, Japanese, Marathi, Portuguese, Russian, Spanish, Tamil, Telugu, Turkish, and Urdu — twenty language for Android, wey add Nigerian Pidgin and Egyptian Arabic, and eighteen for iOS.

If you want di app for language wey no be di phone own, **Settings → Language** get picker wit "System default" option. You fit still change am from Android **Settings → System → Languages** or iOS **Settings → General → Language & Region**.

## Security note

Only connect to servers wey you trust. Di current app dey store saved connection data local and e no dey provide cloud vault or cross-device sync. Di current implementation also no dey show known-host confirmation prompt, so avoid connecting over networks wey you no trust wen host identity matter.
