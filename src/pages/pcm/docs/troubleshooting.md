---
layout: ../../../layouts/DocLayout.astro
title: "Troubleshooting"
description: "Fix Mobile SSH connection, server identity, security key, terminal, file transfer, VPN, backup and remote desktop wahala."
---

# Troubleshooting

Dis page dey cover common Mobile SSH wahala and di first things wey you go check before you begin change server-side SSH settings.

## You no fit connect

Check:

- Di device get network access.
- Di server hostname or IP address correct.
- Di SSH port correct, usually `22`.
- Firewall, VPN, carrier network, or Wi-Fi network no dey block di port.
- Di SSH server dey run and e dey accept connections from di network wey you dey use.

If di same host dey work from anoda device, compare di exact host, port, username, key, and network path.

## Server identity need your attention

Both platforms check SSH identity before dem send credentials. For iOS, unknown key need fingerprint confirmation and **Trust and reconnect**. For Android, **Settings → General → Security → Automatically accept new SSH identities** dey on by default: e save di first raw key and later connections must match am. Turn am off to check new fingerprints before connect.

Compare new or changed SHA-256 fingerprint with your administrator through trusted channel. Change fit mean replacement server or unexpected server; no remove old identity until you verify wetin change. Review identities for Settings. Alternate addresses and bastions no bypass di check.

Android still supports host certificate authorities and revocations wey get specific scope. Unknown authorities, expired or invalid certificates and revoked keys still dey blocked even when automatic first-use acceptance dey on. For iOS, **Settings → Server identities → Import revoked keys** accepts OpenSSH `@revoked` Ed25519/ECDSA entries wey get specific scope. If pasted text mix entries wey no dey supported, di whole paste go fail; CA entries, certificates, RSA keys and hashed hostnames no dey supported. Revocations override trust wey dey before for new connections and reconnects, but dem no close connections wey already dey run. Host identities and revocations no enter backups. For iOS, verify unknown server for di main app before you upload through Share Extension.

## Connection through jump host no work

Check every bastion address and credentials and make sure phone fit reach first hop. Each later host must dey reachable from previous server. Bastions must allow onward TCP including `permitopen` restrictions. Route must use SSH, no loops, at most eight expanded hops.

Deleted or unresolved bastion no fall back to direct connection. Fix di route then reconnect. Android status and login log separate failed hop from final server.

## Authentication fail

Check:

- Username spelling.
- Password or key passphrase.
- Whether di server allow password login, key login, or both.
- Whether di private key match public key wey dey for di server user `authorized_keys`.
- Whether di key file enter fully, including di header and footer lines.

For encrypted private keys, enter di passphrase for di password/passphrase field.

For Android, remote `ssh` or `git` need **Forward SSH agent** for dat saved server plus permission from di server. Only usable saved keys dey offered. Allow/Deny or security-key prompt fit pause terminal, transfers and tunnels up to 30 seconds; answer from app or notification.

## Private key import fail

Private key import dey use di system file picker. If import fail:

- Confirm say di file wey you select na private key, no be public `.pub` file.
- Open di file for trusted text editor and verify say e get di full key block.
- Try paste di key by hand inside di private key field.
- Confirm say di key type dey supported: Ed25519, ECDSA (P-256/384/521), or RSA for Android; Ed25519 or ECDSA for iOS. DSA (`ssh-dss`) no dey work for any of dem, and iOS no dey support RSA — generate Ed25519 key instead.

## Security key no answer for Android

Android support CTAP2/FIDO2 `ed25519-sk` and `ecdsa-sk` through USB/NFC. Use di same physical key wey create imported file. USB need host mode and permission; turn NFC on and keep key against phone until e finish. Enter PIN when asked, then touch key.

Server need OpenSSH 8.2 or newer with selected `sk-*` allowed. U2F-only keys and resident-credential discovery no get support. Login time fit finish as you dey find key; prepare am before connect. For background requests, open security-key notification or return to app. iOS no support hardware-key authentication.

## Keyboard input dey delay or dey change

Android send keyboard input directly without autocorrect or prediction. For iOS, **Dictation and suggestions** dey on by default for voice and current-line corrections. If e change shell input unexpectedly, turn am off, check **Keyboard suggestions**, then open new pane.

Use extra key row for `ESC`, `TAB`, `CTRL`, arrows, `HOME`, `END`, `PGUP` and `PGDN`. Network wey hang fit delay input. Android header show **no reply** or **not sent**; wetin you type during reconnect get dropped, e no replay for fresh shell. Wait, inspect prompt, retype only wetin necessary.

## tmux scrolling no be wetin you expect

Mobile SSH dey change scroll behavior based on terminal state. For tmux or oda alternate-screen programs, scroll gestures fit send tmux copy-mode commands instead of scrolling local history. If tmux mouse mode dey enabled, di app dey send mouse-wheel escape sequences.

If scrolling feel wrong:

- Try enable or disable tmux mouse mode on di remote server.
- Use `PGUP` and `PGDN` from di extra key row.
- Double-tap di pane to enter fullscreen before you scroll dense output.
- Detach and reattach to tmux if di remote terminal size look stale.

For Android, scrolling reach bottom automatically leave app-managed tmux copy mode when standard indicator dey visible. Custom or split layouts without indicator fit still need manual exit. When you change session, check manager server, tmux socket and session name.

## Session drop after screen lock

For Android, Mobile SSH dey use keepalives, foreground service, wake lock, Wi-Fi lock, and reconnect attempts to reduce disconnects. Android battery policies fit still stop background work.

Check:

- Disable battery optimization for Mobile SSH if your device dey aggressively kill background apps.
- Keep Wi-Fi or mobile data stable during long sessions.
- Reopen Mobile SSH and tap **Active Sessions** after you unlock di screen.
- Check say **Keep sessions running in background** dey on for Settings if you want make shell survive wen you swipe di app comot.
- If di server don already disconnect di SSH session, reconnect from di home screen — **Continue** dey list wetin still dey live, and **Tmux sessions** dey list wetin dey wait for di server.

iOS suspend background apps, so raw SSH no fit stay open forever after app switch or screen lock. Short grace time cover quick switches. Choose tmux, Herdr or Zellij under **Attach on connect**, or use **Eternal Terminal**, to resume after reconnect. Multiplexer must still dey run for server; Eternal Terminal no use jump-host route.

## File transfer no fit browse phone files

Mobile SSH no dey ask for any storage permission for Android. Instead, di local pane dey show one folder wey you grant wit di system folder picker — if e empty, use **Pick folder** to choose one. Di grant dey persist, so na one-time step.

If remote files dey load but local files no dey load, di SSH connection dey fine and na say you never grant any folder.

For iOS, local pane start for app Documents. **My Phone → Choose local folder** remember another Files folder. If provider or permission no dey, choose folder again or switch to app folder. App-folder downloads show under **On My iPhone**; external files remain with their provider. Folder permissions no follow backups.

## Upload or download fail

Check:

- Di SSH session still dey connected.
- Di remote directory dey exist.
- Di remote user get permission to read or write di path.
- Di local destination dey writable.
- Enough free space dey on di device.
- Di network stable for large transfers.

## Port forward fail

Check:

- Di local port dey between `1` and `65535`.
- Di local port no dey already used.
- Di tunnel string na `PORT` or `LOCAL:REMOTEHOST:REMOTE`.
- Di remote host and remote port dey reachable from di SSH server.
- Di SSH server dey allow TCP forwarding.

## VPN or proxy no carry traffic for Android

- Start di profile from **VPN** and approve Android request. Device VPN replace previous one; use local SOCKS5 if another VPN must stay connected.
- For SSH VPN, check server, bastions, identity, TCP permission and app/site selections. SSH carry TCP/DNS, no general UDP.
- For SOCKS5, configure local address, port, password and remote DNS for client. Running proxy no redirect every app automatically.
- For WireGuard, check handshake, keys, `AllowedIPs` and DNS. For Shadowsocks, match cipher/password and check UDP relay for DNS.
- For OpenVPN, use supported self-contained profile, verify CA/identity and credentials, provide VPN DNS for full tunnel. Fix authentication/certificate errors, then stop and start profile again.

SSH VPN, Shadowsocks and OpenVPN fit keep captured traffic blocked during reconnect instead of direct fallback. Stopping end protection. VPN no bypass internet restrictions wey provider or administrator put on server.

## Backup no restore everything

Check import preview and **Merge** or **Replace**. Sections wey missing for old/partial backup remain unchanged. Full backup include supported settings; Android also include VPN/proxy profiles. Platform-only things no all fit move to iOS; older apps fit reject new full-backup format.

Host identities, system permissions and folder access stay local. Verify hosts and grant folder/VPN access for new device. Hardware-key credentials still need physical key. Import no start VPN; review profiles before you start dem.

## Remote desktop no dey or e no fit resize

Open viewer from connected SSH session and check local TCP-forward permission. For Linux, follow missing-package message to install desktop/VNC. Android no mirror Wayland console; use supported virtual desktop.

For macOS, enable Screen Sharing for di Mac settings. Android supports Mac account authentication; iOS needs classic VNC password access wey you enable for Screen Sharing, and e dey use di screen-sharing password instead of Mac account password. Di viewer dey show di Mac screen wey already dey. You fit need change di resolution for di Mac itself. Virtual desktop fit resize live only if im server supports am; restarting desktop wey di app create needs confirmation and go close im running programs. If you leave di viewer, di remote desktop still dey run.

## Debug logs

Di two platforms dey record different thing, so pick di one wey match your problem.

**Android — terminal and rendering.** Enable **Settings → Debugging → Show Debug and Logs buttons**, then use di **Debug** button wey go show for di start screen. E dey record terminal event, SSH data size, touch input, resize behavior, and tunnel lifecycle. Wen you start recording e go first warn you say e dey capture every key wey you type, password join. Wen you stop am, e dey write archive enter your Downloads folder.

**iOS — connection and reconnect.** Turn on **Settings → Diagnostics → Record debug log**. E dey record each address wey e dial and why e fail, reconnect try and dem backoff, connection wey drop, "peer stopped answering keepalives", network change, and tmux command wit dem error. Settings dey show live line count so you fit confirm say e dey record, and **Export Debug Log** dey share am as text file. E dey hold am for memory and e dey cover only di current app session.

Review any debug log or archive before you share am. Dem na for troubleshooting and dem fit reveal server names, addresses, timing, or oda environment details — and for Android, anything wey you type.
