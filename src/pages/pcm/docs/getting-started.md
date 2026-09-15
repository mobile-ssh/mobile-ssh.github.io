---
layout: ../../../layouts/DocLayout.astro
title: "Getting started"
description: "Install Mobile SSH, check server identities, set jump hosts and keys, and back up servers, credentials and settings."
---

# Getting started

Mobile SSH na SSH client for Android and iOS wey you fit use connect to your own Linux, Unix, network, IoT, or development servers. You go provide di server address and credentials; di app go open one interactive SSH terminal.

## Wetin you need

- Android 8.0 or newer, or iOS 16 or newer (iPhone or iPad).
- Network access from di device go your SSH server.
- SSH server hostname or IP address, port, username, and either password or private key.
- For local file transfer, choose folder or files through system picker. Neither platform needs blanket storage access.

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

## Check server identities

Both apps check di SSH server identity before dem send credentials. Keys wey change stop di connection, including alternate addresses and jump hosts.

- **Android:** **Automatically accept new SSH identities** dey on by default. Di first raw host key saves automatically; later connections must match am. Turn this off for **Settings → General → Security** so you fit compare each new SHA-256 fingerprint with your administrator before accepting and reconnecting.
- **iOS:** unknown host key needs confirmation. Compare its SHA-256 fingerprint through trusted channel, then choose **Trust and reconnect**.

Review saved identities for Settings. Both platforms support host-key revocations wey administrator provides; Android still supports host certificate authorities. For iOS, use **Settings → Server identities → Import revoked keys** for OpenSSH `@revoked` Ed25519/ECDSA entries wey get specific scope. Revoked keys dey blocked for new connections and reconnects, even keys wey you don trust before; importing revocation no close connections wey already dey run. iOS no support host certificates or CA imports. Host trust dey stay for each device and no dey imported from backup. No remove changed or revoked key until you check why dem block am.

## Choose di transport

Wen you dey add or edit server, di **Transport** selector na im dey decide how Mobile SSH go connect:

- **SSH** -- ordinary SSH connection (na di default).
- **Eternal Terminal** -- session wey strong: e dey survive network drop, sleep, and IP change. If di host no get `etserver`, Mobile SSH fit install one over SSH for you. Check di **Terminal** guide for di full gist.

Android still get experimental **Teleport** proxy connections. Saved SSH jump-host routes need SSH transport; you no fit combine dem with Eternal Terminal.

## Save servers

Saved servers dey keep di connection target and optional tunnel configuration. One saved server fit include:

- Hostname or IP address.
- SSH port.
- Username.
- Password or private key details.
- Optional local port-forwarding rules.
- Optional extra addresses for di same machine (see below).
- Optional saved jump hosts and **Attach on connect** choice: Auto, Nothing, tmux, herdr or Zellij.

Use saved servers for hosts wey you dey access plenty times. If one saved server dey point to different host pass your current active session, Mobile SSH go start fresh connection for di selected target.

### Multiple addresses (LAN/VPN roaming)

Di same machine fit dey reachable for different addresses depending on where you dey — home Wi-Fi IP versus VPN IP. Add di alternates for di server edit dialog, each one wit im own port if e need. Wen you connect, Mobile SSH go try di addresses in order until one answer, and e go remember di address wey last work and dial am first next time. Network change (for example wen you comot for di VPN) go trigger immediate reconnect to whichever address dey reachable now, instead of waiting make di dead route time out.

### Jump hosts

Save your bastion servers first, then select dem in order for di destination server jump-host settings. Both platforms support up to eight expanded SSH hops. Each hop uses its own credentials and identity checks; di destination only needs to dey reachable from di hop before am. Missing servers, loops and failed hops stop di route instead of silently connecting direct. Terminals, SFTP, local forwards and supported SSH workflows use di saved route.

## Save credentials

Di **Credentials** screen dey store username/password or username/private-key records wey you fit reuse. You fit select saved credentials from di server setup dialog so you no go need enter di same login material for every host again.

Credential records dey store local for di device — for iOS, di secrets dey stay inside di system Keychain. Protect di device wit screen lock if you save passwords, passphrases, or private keys.

## Use private keys

Mobile SSH dey support pasted private keys and key import through di system file picker. For Android di app dey support Ed25519, ECDSA (P-256/384/521), and RSA keys; for iOS e dey support Ed25519 and ECDSA (P-256/384/521) keys. DSA (`ssh-dss`) no dey supported for any of di two platforms. Di two platforms fit open key wey passphrase don encrypt — enter di passphrase for di password/passphrase field.

To use private key:

1. Open **Credentials** or di server edit dialog.
2. Paste di private key text, or choose **Import from file**.
3. Enter di key passphrase for di password/passphrase field if di key dey encrypted.
4. Save di credential or server.

Private key import uses system file picker. E no grant access to di rest of your storage; file transfer get its own folder and file selections.

Android still supports **FIDO2 security keys** through USB and NFC: enroll key or import OpenSSH security-key credential, then follow touch and PIN prompts. Di physical key still dey required after you export or restore that credential. **SSH agent forwarding** na separate opt-in for each server on Android: saved credentials fit answer signing requests, with optional approval before each use. Enable am only for servers wey you trust to request signatures. iOS no support security-key login or agent forwarding.

## Di home screen

Dem build di home screen make e answer "wetin I fit enter back?" instead of opening empty connection form:

- **Continue** dey list di connections wey dey live right now, wit pane count wen one connection get pass one. If you tap one row e go carry you back go dia.
- **Tmux sessions** dey list wetin dey run for your saved servers. E dey come from snapshot wey di app don already store, so e dey show sharp-sharp even wen no network dey at all — each row carry di age of di snapshot, and if you tap one e go connect and attach dat session. Snapshot dey dim after some hours and dem dey drop am after one week.
- For iOS, **Recent** dey inside **New connection** sheet; selecting entry fills di connection form.

Android **VPN** tile opens its built-in routing clients; **About** dey under Settings. Di VPN guide dey inside **Port forwarding** for this site.

If nothing dey live and nothing dey cached, di screen go tell you so and point you go **Servers**.

## Name and search saved servers

Saved server fit carry name — "Home NAS", "Prod web" — and di list go show dat one instead of di address. Di address dey come back by imsef wenever di name go confuse person: two rows wey share di same name, or search wey dey go on, so you fit always tell di rows apart.

Tap di search field for di **Saved Servers** page to filter. Search dey match di name, di user, di host, di port, di credential, and any alternate address. Di **+ Add Session** screen also dey open wit search so you fit find and connect to one saved server in one step.

You fit file servers enter folder. Folder fit collapse, e dey remember say e collapse, and you fit reorder or rename am; if you delete one, im servers dey move go **Ungrouped**, dem no dey delete dem.

## Export part of your setup

**Export selected…** for di Servers and Credentials screens dey turn di list to tick-box picker, so you fit hand over three servers witout exporting everything. Wen you tap folder header e go carry di whole folder. Export dey encrypted if you give am passphrase — witout one, di file dey hold password and private key as plain text, and di app go tell you so before e write am.

For full backup, choose **Export all (backup)** on Android or **Backup & Restore** on iOS. Current versions include servers, credentials and app preferences like language, extra keys and multiplexer sorting. Android still includes its VPN and SOCKS profiles. Use passphrase to protect di whole file.

Both apps fit read current backup format 2 and older inventory backups. Review di import preview: **Merge** applies supplied sections while keeping existing items; **Replace** replaces sections wey dey inside di file, and supplied settings section resets omitted preferences to defaults. Sections wey no dey present remain untouched. Unsupported platform settings dey identified; dem no go become usable features for di other app. Importing backup no start VPN.

Host identities, active sessions, system permissions and selected-folder access no dey restored. Verify hosts and grant local folder access for di destination device. Older app versions no fit read di new full-backup format.

## Active sessions

When sessions dey run, di start screen shows **Active Sessions** with count. Tap am to return to terminal grid. For Android, ongoing notification still lists active hosts and opens di active connection controls.

Going back to di start screen no go disconnect active SSH sessions; na only wen you close panes or finish di terminal activity e go disconnect dem.

## First useful settings

Open **Settings** from di start screen (e get im own page):

- Decide whether tapping di terminal go raise di keyboard. Di two platforms ship opposite default: for Android di keyboard dey show only from di ⌨ button, for iOS one tap dey raise am.
- Set di terminal **text size**, **font**, **color scheme**, and **scrollback** size, and pick app **theme** (System, Light, or Dark).
- Enable **Agent alerts** if you dey run long background tasks (Claude Code, Codex, shell scripts) and you wan make dem tell you wen di agent need your input. Check di **Terminal** guide to see how agents dey report demsef.
- For Android, **Keep sessions running in background** dey on by default, so shell and agent dey survive wen you swipe di app comot.
- Both platforms get anonymous usage analytics switch for Settings. Turning am off stops collecting new events.
- For iOS, **Dictation & suggestions** dey enabled by default. Turn am off and open new pane if you prefer direct terminal input without dictation or autocorrection.
- Remote notifications, command-finished alerts and remote clipboard reads na separate opt-in settings. Enable only di remote actions wey you want.

## Plugins

Plugins dey add extra workflow give Mobile SSH. Open **Plugins** from di start screen make you:

- Browse by category and search catalog of plugins wey dey available.
- Install di ones wey you want -- each plugin dey download as you need am and dem dey verify am wit SHA-256 checksum enter di app private storage.
- Run plugins wey you don install from di same screen.

By default, na public catalog dem dey pull plugins from. If you dey run your own, you fit point Mobile SSH go custom or private catalog source. Na only plugins wey come from source wey you trust you suppose install.

## Languages

Mobile SSH follows system language by default. Both apps now ship twenty languages: Arabic, Egyptian Arabic, Bengali, Chinese (Simplified and Traditional), English, French, German, Hindi, Indonesian, Japanese, Marathi, Nigerian Pidgin, Portuguese, Russian, Spanish, Tamil, Telugu, Turkish and Urdu.

If you want di app for language wey no be di phone own, **Settings → Language** get picker wit "System default" option. You fit still change am from Android **Settings → System → Languages** or iOS **Settings → General → Language & Region**.

## Security note

Connect only to servers wey you trust. Saved connection data stays for device unless you export or share am; Mobile SSH no provide cloud vault or automatic cross-device sync. Protect your device and backups, verify host fingerprints wey you no know, and review changed-key failures before reconnecting.
