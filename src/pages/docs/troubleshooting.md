---
layout: ../../layouts/DocLayout.astro
title: Troubleshooting
description: Troubleshooting guide for Mobile SSH connection, authentication, keyboard, tmux, file transfer, and tunnel issues.
---

# Troubleshooting

This page covers common Mobile SSH issues and the first checks to run before changing server-side SSH settings.

## Cannot connect

Check:

- The device has network access.
- The server hostname or IP address is correct.
- The SSH port is correct, usually `22`.
- A firewall, VPN, carrier network, or Wi-Fi network is not blocking the port.
- The SSH server is running and accepts connections from the network you are using.

If the same host works from another device, compare the exact host, port, username, key, and network path.

## Authentication failed

Check:

- Username spelling.
- Password or key passphrase.
- Whether the server allows password login, key login, or both.
- Whether the private key matches a public key in the server user's `authorized_keys`.
- Whether the key file was imported fully, including the header and footer lines.

For encrypted private keys, enter the passphrase in the password/passphrase field.

## Private key import failed

Private key import uses the system file picker. If import fails:

- Confirm the selected file is a private key, not a public `.pub` file.
- Open the file in a trusted text editor and verify it contains the full key block.
- Try pasting the key manually into the private key field.
- Confirm the key type is supported: Ed25519, ECDSA (P-256/384/521), or RSA on Android; Ed25519 or ECDSA on iOS. DSA (`ssh-dss`) works on neither, and iOS does not support RSA — generate an Ed25519 key instead.

## Keyboard input is delayed or changed

Mobile SSH sends keystrokes straight to the shell with autocorrect and predictive suggestions turned off, so the keyboard should not rewrite text before it reaches the remote side. If your keyboard still alters input, confirm no system-level replacement or clipboard tool is intercepting it, and use the extra key row for terminal keys such as `ESC`, `TAB`, `CTRL`, arrows, `HOME`, `END`, `PGUP`, and `PGDN`.

## tmux scrolling is not what you expect

Mobile SSH changes scroll behavior based on terminal state. In tmux or other alternate-screen programs, scroll gestures may send tmux copy-mode commands rather than scrolling local history. If tmux mouse mode is enabled, the app sends mouse-wheel escape sequences.

If scrolling feels wrong:

- Try enabling or disabling tmux mouse mode on the remote server.
- Use `PGUP` and `PGDN` from the extra key row.
- Double-tap the pane for fullscreen before scrolling dense output.
- Detach and reattach to tmux if the remote terminal size looks stale.

## Session dropped after screen lock

On Android, Mobile SSH uses keepalives, a foreground service, wake lock, Wi-Fi lock, and reconnect attempts to reduce disconnects. Android battery policies can still stop background work.

Check:

- Disable battery optimization for Mobile SSH if your device aggressively stops background apps.
- Keep Wi-Fi or mobile data stable during long sessions.
- Reopen Mobile SSH and tap **Active Sessions** after unlocking.
- Check that **Keep sessions running in background** is on in Settings if you want shells to survive swiping the app away.
- If the server disconnected the SSH session, reconnect from the home screen — **Continue** lists what is still live, and **Tmux sessions** lists what is waiting on the server.

On iOS, the system suspends apps in the background, so a raw SSH connection cannot be kept open indefinitely once you switch away or lock the screen. A short grace period covers quick app switches; for anything longer, enable **Auto-attach tmux session** on the server profile (or use the **Eternal Terminal** transport) so reconnecting drops you back into the same shell where you left off.

## File transfer cannot browse phone files

Mobile SSH asks for no storage permission on Android. Instead, the local pane shows one folder that you grant with the system folder picker — if it is empty, use **Pick folder** to choose one. The grant persists, so this is a one-time step.

If remote files load but local files do not, the SSH connection is fine and you simply have no folder granted yet.

On iOS the local pane shows the app's documents area, and you add files through the system document and photo pickers. Downloads there are also visible in the Files app under **On My iPhone**.

## Upload or download failed

Check:

- The SSH session is still connected.
- The remote directory exists.
- The remote user has permission to read or write the path.
- The local destination is writable.
- There is enough free space on the device.
- The network is stable for large transfers.

## Port forward failed

Check:

- The local port is between `1` and `65535`.
- The local port is not already used.
- The tunnel string is `PORT` or `LOCAL:REMOTEHOST:REMOTE`.
- The remote host and remote port are reachable from the SSH server.
- The SSH server allows TCP forwarding.

## Debug logs

The two platforms record different things, so pick the one that matches your problem.

**Android — terminal and rendering.** Enable **Settings → Debugging → Show Debug and Logs buttons**, then use the **Debug** button that appears on the start screen. It records terminal events, SSH data sizes, touch input, resize behaviour, and tunnel lifecycle. Starting a recording warns you first that it captures every key you type, passwords included. Stopping it writes an archive to your Downloads folder.

**iOS — connections and reconnects.** Turn on **Settings → Diagnostics → Record debug log**. It records each address dialled and why it failed, reconnect attempts and their backoff, dropped connections, "peer stopped answering keepalives", network changes, and tmux commands with their errors. Settings shows a live line count so you can confirm it is recording, and **Export Debug Log** shares it as a text file. It is held in memory and covers the current app session only.

Review any debug log or archive before sharing it. They are intended for troubleshooting and may reveal server names, addresses, timing, or other environment details — and on Android, anything you typed.
