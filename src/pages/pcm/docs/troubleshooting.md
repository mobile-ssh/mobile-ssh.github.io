---
layout: ../../../layouts/DocLayout.astro
title: "Troubleshooting"
description: "Troubleshooting guide for Mobile SSH connection, authentication, keyboard, tmux, file transfer, and tunnel wahala."
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

## Authentication fail

Check:

- Username spelling.
- Password or key passphrase.
- Whether di server allow password login, key login, or both.
- Whether di private key match public key wey dey for di server user `authorized_keys`.
- Whether di key file enter fully, including di header and footer lines.

For encrypted private keys, enter di passphrase for di password/passphrase field.

## Private key import fail

Private key import dey use di system file picker. If import fail:

- Confirm say di file wey you select na private key, no be public `.pub` file.
- Open di file for trusted text editor and verify say e get di full key block.
- Try paste di key by hand inside di private key field.
- Confirm say di key type dey supported: Ed25519, ECDSA (P-256/384/521), or RSA for Android; Ed25519 or ECDSA for iOS. DSA (`ssh-dss`) no dey work for any of dem, and iOS no dey support RSA — generate Ed25519 key instead.

## Keyboard input dey delay or dey change

Mobile SSH dey send keystrokes straight to di shell wit autocorrect and predictive suggestions off, so di keyboard no suppose rewrite text before e reach di remote side. If your keyboard still dey change input, confirm say no system-level replacement or clipboard tool dey intercept am, and use di extra key row for terminal keys like `ESC`, `TAB`, `CTRL`, arrows, `HOME`, `END`, `PGUP`, and `PGDN`.

## tmux scrolling no be wetin you expect

Mobile SSH dey change scroll behavior based on terminal state. For tmux or other alternate-screen programs, scroll gestures fit send tmux copy-mode commands instead of scrolling local history. If tmux mouse mode dey enabled, di app dey send mouse-wheel escape sequences.

If scrolling feel wrong:

- Try enable or disable tmux mouse mode on di remote server.
- Use `PGUP` and `PGDN` from di extra key row.
- Double-tap di pane to enter fullscreen before you scroll dense output.
- Detach and reattach to tmux if di remote terminal size look stale.

## Session drop after screen lock

For Android, Mobile SSH dey use keepalives, foreground service, wake lock, Wi-Fi lock, and reconnect attempts to reduce disconnects. Android battery policies fit still stop background work.

Check:

- Disable battery optimization for Mobile SSH if your device dey aggressively kill background apps.
- Keep Wi-Fi or mobile data stable during long sessions.
- Reopen Mobile SSH and tap **Active Sessions** after you unlock di screen.
- Check say **Keep sessions running in background** dey on for Settings if you want make shell survive wen you swipe di app comot.
- If di server don already disconnect di SSH session, reconnect from di home screen — **Continue** dey list wetin still dey live, and **Tmux sessions** dey list wetin dey wait for di server.

For iOS, di system dey suspend apps for background, so raw SSH connection no fit stay open forever once you switch comot or lock di screen. Short grace period dey cover quick app switches; for anything wey long pass dat, enable **Auto-attach tmux session** for di server profile (or use di **Eternal Terminal** transport) so when you reconnect, e go drop you back inside di same shell where you stop.

## File transfer no fit browse phone files

Mobile SSH no dey ask for any storage permission for Android. Instead, di local pane dey show one folder wey you grant wit di system folder picker — if e empty, use **Pick folder** to choose one. Di grant dey persist, so na one-time step.

If remote files dey load but local files no dey load, di SSH connection dey fine and na say you never grant any folder.

For iOS, di local pane dey show di app own documents area, and you dey add files through di system document and photo pickers. Download wey dey dia dey also show inside di Files app under **On My iPhone**.

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

## Debug logs

Di two platforms dey record different thing, so pick di one wey match your problem.

**Android — terminal and rendering.** Enable **Settings → Debugging → Show Debug and Logs buttons**, then use di **Debug** button wey go show for di start screen. E dey record terminal event, SSH data size, touch input, resize behaviour, and tunnel lifecycle. Wen you start recording e go first warn you say e dey capture every key wey you type, password join. Wen you stop am, e dey write archive enter your Downloads folder.

**iOS — connection and reconnect.** Turn on **Settings → Diagnostics → Record debug log**. E dey record each address wey e dial and why e fail, reconnect try and dem backoff, connection wey drop, "peer stopped answering keepalives", network change, and tmux command wit dem error. Settings dey show live line count so you fit confirm say e dey record, and **Export Debug Log** dey share am as text file. E dey hold am for memory and e dey cover only di current app session.

Review any debug log or archive before you share am. Dem na for troubleshooting and dem fit reveal server names, addresses, timing, or other environment details — and for Android, anything wey you type.
