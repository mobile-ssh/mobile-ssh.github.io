---
layout: ../../../layouts/DocLayout.astro
title: "File transfer"
description: "Mobile SSH SFTP file transfer guide for local files, remote files, upload, download, sorting, and permissions."
---

# File transfer

Mobile SSH get one SFTP file transfer screen wey dey tie to di active SSH connection. E na for quick server maintenance from Android: upload config, download log, rename remote file, or check permissions without leaving di app.

## Open file transfer

1. Connect to one SSH server.
2. Select di connected terminal pane.
3. Open **Transfer** from di terminal toolbar, or long-press di pane header wen di current screen support am.
4. Di file transfer screen go open with local pane and remote pane.

If no active SSH session dey, file transfer no fit open.

## Local and remote panes

Di file transfer screen get two browser panes:

- **Local pane:** phone storage.
- **Remote pane:** server files over SFTP.

Di app dey remember recent local and remote paths per host. Sort settings too dey remembered per host for both panes.

## Android storage permission

For Android versions wey restrict direct file browsing, Mobile SSH fit ask for storage access before di local pane fit browse phone files. If you skip or deny dis permission, remote browsing fit still work, but local upload and download paths fit be limited.

Private key import dey separate from file transfer and e dey use di Android file picker.

## Upload files

1. Open di local pane.
2. Navigate to di file wey you wan upload.
3. Choose upload.
4. Confirm di remote destination.
5. Watch di transfer queue for progress and completion.

Uploads dey use di existing SSH/SFTP connection. If di connection drop, retry after you reconnect.

## Download files

1. Open di remote pane.
2. Navigate to di file wey you wan download.
3. Choose download.
4. Confirm di local destination.
5. Watch di transfer queue for progress and completion.

Make you do big downloads for stable network if possible.

## Remote file actions

Depending on di selected remote item, Mobile SSH fit show actions like:

- Download.
- Rename.
- Delete.
- Create file or directory.
- Edit text file.
- View file details.

Remote file details fit include permission bits, owner, group, and octal permission values. Use dis details before you change server files wey anoda process or deployment tool dey manage.

## Sorting and recent paths

Each pane fit sort by name or date for ascending or descending order. Mobile SSH dey store di selected local and remote sort modes per host, along with recent paths, so repeated transfers to di same server dey start from familiar locations.

## Transfer queue

Transfers dey queued and displayed by status. Di log area dey separate queued, failed, and successful transfers. Failed transfers dey include reason wen di underlying SFTP operation provide one.

## Practical tips

- Use SFTP for targeted file moves; use command-line tools like `rsync` on di server for large directory synchronization.
- Avoid editing live production files unless you get backup or deployment rollback path.
- If file no appear after upload, refresh di remote pane or verify di destination path.
- If Android storage access dey block local browsing, grant di permission from Android Settings and reopen file transfer.
