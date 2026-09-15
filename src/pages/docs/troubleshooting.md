---
layout: ../../layouts/DocLayout.astro
title: Troubleshooting
description: Troubleshoot Mobile SSH connections, server identities, security keys, terminals, file transfers, VPNs, backups and remote desktops.
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

## Server identity needs attention

Both platforms check SSH server identity before sending credentials. On iOS, a new host key requires fingerprint confirmation and **Trust and reconnect**. On Android, **Settings → General → Security → Automatically accept new SSH identities** is on by default: the first raw key is saved automatically, and later connections must match it. Turn it off to review new fingerprints before connecting.

Compare a new or changed key's SHA-256 fingerprint with your administrator through a trusted channel. A changed key can reflect a server replacement or an unexpected server; do not remove the old identity until you have verified the change. Review saved identities in Settings. Alternate addresses and jump hosts do not bypass verification.

Android also supports scoped host certificate authorities and revocations. Unknown authorities, expired or invalid certificates, and revoked keys remain blocked even with automatic first-use acceptance enabled. On iOS, **Settings → Server identities → Import revoked keys** accepts scoped OpenSSH `@revoked` Ed25519/ECDSA entries. A mixed paste containing unsupported entries is rejected in full; CA entries, certificates, RSA keys and hashed hostnames are unsupported. Revocations override previous trust on new connections and reconnects but do not close existing connections. Host identities and revocations are excluded from backups. On iOS, verify an unknown server in the main app before uploading through the Share Extension.

## Cannot connect through a jump host

Check every saved bastion's address and credentials, and make sure the phone can reach the first hop. Each later host must be reachable from the preceding server. Bastions must allow onward TCP forwarding, including any `permitopen` restrictions. The route must use SSH, contain no loops and expand to at most eight hops.

A deleted or unresolved bastion does not fall back to a direct connection. Fix the saved route, then reconnect. Android's connection status and login log identify a failed hop separately from the final server.

## Authentication failed

Check:

- Username spelling.
- Password or key passphrase.
- Whether the server allows password login, key login, or both.
- Whether the private key matches a public key in the server user's `authorized_keys`.
- Whether the key file was imported fully, including the header and footer lines.

For encrypted private keys, enter the passphrase in the password/passphrase field.

On Android, remote `ssh` or `git` needs **Forward SSH agent** enabled for that saved server and agent forwarding allowed by the server. Only saved, usable key credentials are offered. A pending Allow/Deny or security-key prompt can pause that connection's terminal, file transfers and tunnels for up to 30 seconds; answer it in the app or through its notification.

## Private key import failed

Private key import uses the system file picker. If import fails:

- Confirm the selected file is a private key, not a public `.pub` file.
- Open the file in a trusted text editor and verify it contains the full key block.
- Try pasting the key manually into the private key field.
- Confirm the key type is supported: Ed25519, ECDSA (P-256/384/521), or RSA on Android; Ed25519 or ECDSA on iOS. DSA (`ssh-dss`) works on neither, and iOS does not support RSA — generate an Ed25519 key instead.

## Security key does not respond on Android

Android supports CTAP2/FIDO2 `ed25519-sk` and `ecdsa-sk` credentials over USB or NFC. Use the same physical key that created the imported credential file. USB needs host support and permission; NFC must be enabled, and the key must stay against the phone until the operation finishes. Enter a PIN when requested, then touch the key.

The server needs OpenSSH 8.2 or newer with the selected `sk-*` algorithm allowed. U2F-only keys and resident credential discovery are unsupported. A server's login timeout can expire while you find the key; have it ready before connecting. For background requests, open the security-key notification or return to the app. iOS does not support hardware security-key authentication.

## Keyboard input is delayed or changed

Android sends keyboard input directly with autocorrect and predictive suggestions disabled. On iOS, **Dictation and suggestions** is enabled by default; it supports voice input and corrections to the current line. If it changes shell input unexpectedly, disable it in Settings and review **Keyboard suggestions**, then open a new pane for the change to apply.

Use the extra key row for terminal keys such as `ESC`, `TAB`, `CTRL`, arrows, `HOME`, `END`, `PGUP` and `PGDN`. A stalled network can also delay input. Android's pane header shows **no reply** or **not sent**; input typed during reconnect is dropped rather than replayed into a new shell. Wait for the connection, inspect the prompt, and retype only what is needed.

## tmux scrolling is not what you expect

Mobile SSH changes scroll behavior based on terminal state. In tmux or other alternate-screen programs, scroll gestures may send tmux copy-mode commands rather than scrolling local history. If tmux mouse mode is enabled, the app sends mouse-wheel escape sequences.

If scrolling feels wrong:

- Try enabling or disabling tmux mouse mode on the remote server.
- Use `PGUP` and `PGDN` from the extra key row.
- Double-tap the pane for fullscreen before scrolling dense output.
- Detach and reattach to tmux if the remote terminal size looks stale.

On Android, scrolling to the bottom automatically leaves app-managed tmux copy mode when the standard copy-mode indicator is visible. Custom or split layouts without that indicator may still need a manual exit. When switching sessions, check the manager's selected server and tmux socket as well as the session name.

## Session dropped after screen lock

On Android, Mobile SSH uses keepalives, a foreground service, wake lock, Wi-Fi lock, and reconnect attempts to reduce disconnects. Android battery policies can still stop background work.

Check:

- Disable battery optimization for Mobile SSH if your device aggressively stops background apps.
- Keep Wi-Fi or mobile data stable during long sessions.
- Reopen Mobile SSH and tap **Active Sessions** after unlocking.
- Check that **Keep sessions running in background** is on in Settings if you want shells to survive swiping the app away.
- If the server disconnected the SSH session, reconnect from the home screen — **Continue** lists what is still live, and **Tmux sessions** lists what is waiting on the server.

On iOS, the system suspends apps in the background, so a raw SSH connection cannot be kept open indefinitely once you switch away or lock the screen. A short grace period covers quick app switches. Set the server's **Attach on connect** choice to tmux, Herdr or Zellij, or use **Eternal Terminal**, to resume remote work after reconnecting. The multiplexer must still be running on the server; Eternal Terminal cannot use a jump-host route.

## File transfer cannot browse phone files

Mobile SSH asks for no storage permission on Android. Instead, the local pane shows one folder that you grant with the system folder picker — if it is empty, use **Pick folder** to choose one. The grant persists, so this is a one-time step.

If remote files load but local files do not, the SSH connection is fine and you simply have no folder granted yet.

On iOS, the local pane starts in the app's documents area. **My Phone → Choose local folder** can select and remember another Files folder. If its provider or access grant is unavailable, choose the folder again or switch to the app folder. App-folder downloads appear under **On My iPhone**; files in an external folder remain in that provider's location. Folder permissions are not transferred by backups.

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

## VPN or proxy does not carry traffic on Android

- Start the intended profile from **VPN** and approve Android's VPN request. Starting a device VPN replaces the previous VPN; use the local SOCKS5 proxy if another VPN must remain connected.
- For SSH VPN, check the saved SSH server, its jump hosts, server identity and TCP-forwarding permission. Verify app and website selections. SSH carries TCP and DNS, not general UDP.
- For SOCKS5, configure the client with the loopback address, port, password and remote DNS. A running proxy does not automatically redirect every app.
- For WireGuard, check the peer handshake, keys, `AllowedIPs` and DNS. For Shadowsocks, match the server's cipher/password and confirm UDP relay for DNS.
- For OpenVPN, use a supported self-contained profile, verify its CA/server identity and credentials, and provide VPN DNS for a full tunnel. Correct authentication or certificate errors, then stop and start the profile again.

SSH VPN, Shadowsocks and OpenVPN can keep captured traffic blocked during reconnects instead of falling back to a direct connection. Stopping ends that protection. A VPN cannot bypass internet restrictions imposed on its server by its provider or administrator.

## Backup did not restore everything

Review the import preview and the chosen **Merge** or **Replace** behavior. Missing sections in an older or partial backup leave those areas unchanged. Full backups include supported app preferences; Android also includes its VPN and proxy profiles. Platform-specific items are not all portable to iOS, and older app versions may reject newer full-backup formats.

Host identities, operating-system permissions and selected folder access remain device-local. Verify hosts and grant folder/VPN access on the new device. Hardware-key credentials still require the physical key. Importing profiles does not start a VPN; review restored profiles before starting them.

## Remote desktop is unavailable or cannot resize

Open the desktop viewer from a connected SSH session. Check that the server permits local TCP forwarding. On Linux, follow the missing-package message to install the required desktop/VNC software. Android cannot mirror a Wayland console; use a supported virtual desktop instead.

On macOS, enable Screen Sharing in the Mac's settings. Android supports Mac account authentication; iOS requires classic VNC password access enabled in Screen Sharing, using the screen-sharing password rather than a Mac account password. The viewer shows the Mac's existing screen. Its resolution may need to be changed on the Mac. A virtual desktop can resize live only if its server supports it; restarting an app-created desktop requires confirmation and closes its running programs. Leaving the viewer keeps the remote desktop running.

## Debug logs

The two platforms record different things, so pick the one that matches your problem.

**Android — terminal and rendering.** Enable **Settings → Debugging → Show Debug and Logs buttons**, then use the **Debug** button that appears on the start screen. It records terminal events, SSH data sizes, touch input, resize behaviour, and tunnel lifecycle. Starting a recording warns you first that it captures every key you type, passwords included. Stopping it writes an archive to your Downloads folder.

**iOS — connections and reconnects.** Turn on **Settings → Diagnostics → Record debug log**. It records each address dialled and why it failed, reconnect attempts and their backoff, dropped connections, "peer stopped answering keepalives", network changes, and tmux commands with their errors. Settings shows a live line count so you can confirm it is recording, and **Export Debug Log** shares it as a text file. It is held in memory and covers the current app session only.

Review any debug log or archive before sharing it. They are intended for troubleshooting and may reveal server names, addresses, timing, or other environment details — and on Android, anything you typed.
