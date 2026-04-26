---
layout: ../../layouts/DocLayout.astro
title: File transfer
description: Mobile SSH SFTP file transfer guide for local files, remote files, upload, download, sorting, and permissions.
---

# File transfer

Mobile SSH includes an SFTP file transfer screen tied to the active SSH connection. It is meant for quick server maintenance from Android: upload a config, download a log, rename a remote file, or inspect permissions without leaving the app.

## Open file transfer

1. Connect to an SSH server.
2. Select the connected terminal pane.
3. Open **Transfer** from the terminal toolbar, or long-press the pane header when supported by the current screen.
4. The file transfer screen opens with a local pane and a remote pane.

If there is no active SSH session, file transfer cannot open.

## Local and remote panes

The file transfer screen has two browser panes:

- **Local pane:** phone storage.
- **Remote pane:** server files over SFTP.

The app remembers recent local and remote paths per host. Sort settings are also remembered per host for both panes.

## Android storage permission

On Android versions that restrict direct file browsing, Mobile SSH may ask for storage access before the local pane can browse phone files. If you skip or deny this permission, remote browsing may still work, but local upload and download paths can be limited.

Private key import is separate from file transfer and uses the Android file picker.

## Upload files

1. Open the local pane.
2. Navigate to the file you want to upload.
3. Choose upload.
4. Confirm the remote destination.
5. Watch the transfer queue for progress and completion.

Uploads use the existing SSH/SFTP connection. If the connection drops, retry after reconnecting.

## Download files

1. Open the remote pane.
2. Navigate to the file you want to download.
3. Choose download.
4. Confirm the local destination.
5. Watch the transfer queue for progress and completion.

Large downloads should be done on a stable network when possible.

## Remote file actions

Depending on the selected remote item, Mobile SSH can show actions such as:

- Download.
- Rename.
- Delete.
- Create file or directory.
- Edit text file.
- View file details.

Remote file details can include permission bits, owner, group, and octal permission values. Use these details before changing server files that are managed by another process or deployment tool.

## Sorting and recent paths

Each pane can sort by name or date in ascending or descending order. Mobile SSH stores the selected local and remote sort modes per host, along with recent paths, so repeated transfers to the same server start from familiar locations.

## Transfer queue

Transfers are queued and displayed by status. The log area separates queued, failed, and successful transfers. Failed transfers include a reason when the underlying SFTP operation provides one.

## Practical tips

- Use SFTP for targeted file moves; use command-line tools such as `rsync` on the server for large directory synchronization.
- Avoid editing live production files unless you have a backup or deployment rollback path.
- If a file does not appear after upload, refresh the remote pane or verify the destination path.
- If Android storage access blocks local browsing, grant the permission from Android Settings and reopen file transfer.
