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
- Confirm say di key type dey supported: Ed25519, RSA, ECDSA, or DSA for Android; Ed25519 or ECDSA (P-256/384/521) for iOS.

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
- If di server don already disconnect di SSH session, reconnect from recent sessions.

For iOS, di system dey suspend apps for background, so raw SSH connection no fit stay open forever once you switch comot or lock di screen. Short grace period dey cover quick app switches; for anything wey long pass dat, enable **Auto-attach tmux session** for di server profile (or use di **Eternal Terminal** transport) so when you reconnect, e go drop you back inside di same shell where you stop.

## File transfer no fit browse phone files

For newer Android versions, local file browsing fit require storage access. Grant storage access for Android Settings for Mobile SSH, then reopen di file transfer screen.

If remote files dey load but local files no dey load, di SSH connection probably dey fine and di problem na local Android storage access.

For iOS, storage permission no dey: di local pane dey show di app own documents area, and you dey add files through di system document and photo pickers.

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

Di start screen get **Debug** button. When e dey enabled, Mobile SSH dey record diagnostic information for terminal events, SSH data sizes, touch input, resize behavior, and tunnel lifecycle. Stop recording to save di debug archive for your device.

Review debug archives before you share dem. Dem na for troubleshooting and dem fit reveal server names, timing, terminal behavior, or other environment details.
