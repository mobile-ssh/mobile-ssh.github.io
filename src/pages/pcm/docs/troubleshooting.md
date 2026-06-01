---
layout: ../../../layouts/DocLayout.astro
title: "Troubleshooting"
description: "Troubleshooting guide for Mobile SSH connection, authentication, keyboard, tmux, file transfer, and tunnel issues."
---

# Troubleshooting

Dis page dey cover common Mobile SSH issues and di first checks wey you go run before you change server-side SSH settings.

## You no fit connect

Check:

- Di Android device get network access.
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
- Whether di private key match public key for di server user `authorized_keys`.
- Whether di key file enter fully, including di header and footer lines.

For encrypted private keys, enter di passphrase for di password/passphrase field.

## Private key import fail

Private key import dey use Android file picker. If import fail:

- Confirm say di selected file na private key, no be public `.pub` file.
- Open di file for trusted text editor and verify say e get di full key block.
- Try paste di key by hand for di private key field.
- Confirm say di key type na one wey di app implementation support: Ed25519, RSA, ECDSA, or DSA.

## Keyboard input dey delay or dey change

If your Android keyboard dey change text before e reach di shell, disable keyboard suggestions for Mobile SSH settings. Dis dey useful for Vim, tmux, htop, less, shells wey dey use unusual key chords, and remote password prompts.

Use di extra key row for terminal keys like `ESC`, `TAB`, `CTRL`, arrows, `HOME`, `END`, `PGUP`, and `PGDN`.

## tmux scrolling no be wetin you expect

Mobile SSH dey change scroll behavior based on terminal state. For tmux or other alternate-screen programs, scroll gestures fit send tmux copy-mode commands instead of scrolling local history. If tmux mouse mode dey enabled, di app dey send mouse-wheel escape sequences.

If scrolling feel wrong:

- Try enable or disable tmux mouse mode on di remote server.
- Use `PGUP` and `PGDN` from di extra key row.
- Double-tap di pane for fullscreen before you scroll dense output.
- Detach and reattach to tmux if di remote terminal size look stale.

## Session drop after screen lock

Mobile SSH dey use keepalives, foreground service, wake lock, Wi-Fi lock, and reconnect attempts to reduce disconnects. Android battery policies fit still stop background work.

Check:

- Disable battery optimization for Mobile SSH if your device dey aggressively stop background apps.
- Keep Wi-Fi or mobile data stable during long sessions.
- Reopen Mobile SSH and tap **Active Sessions** after you unlock.
- If di server disconnect di SSH session, reconnect from recent sessions.

## File transfer no fit browse phone files

For newer Android versions, local file browsing fit require storage access. Grant storage access for Android Settings for Mobile SSH, then reopen di file transfer screen.

If remote files load but local files no load, di SSH connection probably dey fine and di issue na local Android storage access.

## Upload or download fail

Check:

- Di SSH session still dey connected.
- Di remote directory dey exist.
- Di remote user get permission to read or write di path.
- Di local destination dey writable.
- Enough free space dey on di Android device.
- Di network stable for large transfers.

## Port forward fail

Check:

- Di local port dey between `1` and `65535`.
- Di local port no dey already used.
- Di tunnel string na `PORT` or `LOCAL:REMOTEHOST:REMOTE`.
- Di remote host and remote port dey reachable from di SSH server.
- Di SSH server dey allow TCP forwarding.

## Debug logs

Di start screen get one **Debug** button. Wen e dey enabled, Mobile SSH dey record diagnostic information for terminal events, SSH data sizes, touch input, resize behavior, and tunnel lifecycle. Stop recording to save debug archive local.

Review debug archives before you share dem. Dem na for troubleshooting and dem fit reveal server names, timing, terminal behavior, or other environment details.
