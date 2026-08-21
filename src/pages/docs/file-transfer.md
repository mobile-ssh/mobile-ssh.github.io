---
layout: ../../layouts/DocLayout.astro
title: File transfer
description: Mobile SSH SFTP file transfer guide for local files, remote files, upload, download, sorting, and permissions.
---

# File transfer

Mobile SSH includes an SFTP file transfer screen tied to the active SSH connection. It is meant for quick server maintenance from your phone or tablet: upload a config, download a log, rename a remote file, or inspect permissions without leaving the app.

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

The app remembers the last ten remote paths per host — open them from the remote pane's header on Android, or the clock icon on iOS. Sort settings are remembered per host for both panes. There is no local path history: on Android the local pane is the folder you granted, and on iOS it is the app's own documents area.

The file transfer screen follows your system light or dark theme, so it matches the rest of Mobile SSH.

### Where each session opens (Android)

Opening File Transfer from a pane attached to a tmux session puts the remote pane back where **that session** was last working, with the session named in the pane header. A session you have not opened it from before starts at the directories you use most on that host, then the host's last directory, then your home directory.

If a remembered directory has since been deleted, the app steps down that list until one actually lists, instead of leaving you on an error — and it does not write the broken path back. On iOS one remote directory is remembered per host.

## Storage access

Mobile SSH does not ask for blanket storage permission on either platform.

On Android you grant **one folder** with the system folder picker, and downloads are written there — somewhere every other app can already read. The grant persists across launches.

On iOS the local pane is the app's documents area, and files come in through the system document and photo pickers.

On iOS, the local pane works with the app's own documents area, and you bring files in through the system document and photo pickers — including multi-select import of photos and documents. No separate storage permission is needed.

Private key import is separate from file transfer and uses the system file picker.

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

## Copy whole folders

Uploads and downloads are not limited to single files. Choose a folder and Mobile SSH copies the entire subtree in both directions — phone to remote and remote to phone — creating the destination directories first and then queuing each file. An unreadable subdirectory does not stop the rest of the copy; on Android it is reported as a failed row reading "Can't list directory", while iOS continues without listing what it skipped.

## Remote file actions

Depending on the selected remote item, Mobile SSH can show actions such as:

- Download, or **Copy to phone** on Android.
- Copy or move **on the server** — `cp -r` / `mv` run on the host without the bytes touching your phone.
- Rename.
- Delete.
- Create file or directory.
- Edit text file.
- Compress to `.tar.gz`.
- Permissions — change mode and owner, with an option to apply to a whole folder.
- Open in another app.
- View file details.

Remote file details can include permission bits, owner, group, and octal permission values. Use these details before changing server files that are managed by another process or deployment tool.

File sizes are shown in binary units, so they match what `ls -h` prints in the terminal one tab away.

## Sorting and recent paths

Each pane can sort by name or date in ascending or descending order. Mobile SSH stores the selected local and remote sort modes per host, along with recent paths, so repeated transfers to the same server start from familiar locations.

## Transfer queue

Transfers are queued and displayed by status, and the log shows every transfer and scrolls — Android tabs them as Queued / Failed / Successful, iOS as Active / Failed / Done. Failed transfers include a reason when the underlying SFTP operation provides one. On iOS the file currently transferring stays at the top of the Active tab, and a row can be cancelled mid-flight.

## Getting files out of the app

- **Android:** downloads land in the folder you granted, so they are already visible to every other app. **Open in another app** is on both panes; a remote file is downloaded first, then handed over.
- **iOS:** Mobile SSH appears in the Files app under **On My iPhone**, so anything in the My Phone pane is reachable from Mail, pickers, and other apps. Long-press a downloaded file and choose **Open in another app** to hand it over, AirDrop it, or save it elsewhere.

## Sending a file into a session (Android)

Android accepts files shared into it from any other app: share to Mobile SSH and the file is uploaded to `~/.cache/mobile-ssh` on the pane's host, with its remote path typed at the prompt so you can use it immediately. The 📎 button in the terminal toolbar does the same from the system file picker, and both accept several files at once.

On iOS, bring files into the local pane with the ＋ button and upload them from there.

## Practical tips

- Use SFTP for targeted file moves; use command-line tools such as `rsync` on the server for large directory synchronization.
- Avoid editing live production files unless you have a backup or deployment rollback path.
- If a file does not appear after upload, refresh the remote pane or verify the destination path.
- If the Android local pane is empty, pick a folder with **Pick folder** — the app has access only to the folder you grant it. On iOS, use the pickers to add files to the local pane instead.
