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
- Confirm the key type is supported: Ed25519, RSA, ECDSA, or DSA on Android; Ed25519 or ECDSA (P-256/384/521) on iOS.

## Keyboard input is delayed or changed

If your on-screen keyboard changes text before it reaches the shell, disable keyboard suggestions in Mobile SSH settings. This is useful for Vim, tmux, htop, less, shells using unusual key chords, and remote password prompts.

Use the extra key row for terminal keys such as `ESC`, `TAB`, `CTRL`, arrows, `HOME`, `END`, `PGUP`, and `PGDN`.

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
- If the server disconnected the SSH session, reconnect from recent sessions.

On iOS, the system suspends apps in the background, so a raw SSH connection cannot be kept open indefinitely once you switch away or lock the screen. A short grace period covers quick app switches; for anything longer, enable **Auto-attach tmux session** on the server profile (or use the **Eternal Terminal** transport) so reconnecting drops you back into the same shell where you left off.

## File transfer cannot browse phone files

On newer Android versions, local file browsing may require storage access. Grant storage access in Android Settings for Mobile SSH, then reopen the file transfer screen.

If remote files load but local files do not, the SSH connection is probably fine and the issue is local Android storage access.

On iOS there is no storage permission: the local pane shows the app's documents area, and you add files through the system document and photo pickers.

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

The start screen includes a **Debug** button. When enabled, Mobile SSH records diagnostic information for terminal events, SSH data sizes, touch input, resize behavior, and tunnel lifecycle. Stop recording to save a debug archive locally.

Review debug archives before sharing them. They are intended for troubleshooting and may reveal server names, timing, terminal behavior, or other environment details.
