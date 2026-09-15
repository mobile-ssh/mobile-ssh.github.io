---
layout: ../../layouts/DocLayout.astro
title: File transfer
description: Mobile SSH SFTP file transfer, remembered phone folders, tmux session directories, queued transfers, permissions, and sharing files into a terminal.
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

The app remembers recent remote paths and sort settings per host. Open recent paths from the remote pane's header on Android or the clock icon on iOS. The local pane shows the folder you selected; iOS uses the app's Documents folder until you choose another.

The file transfer screen follows your system light or dark theme, so it matches the rest of Mobile SSH.

### Where each session opens

On both platforms, opening File Transfer from tmux restores the remote directory remembered for **that session and socket**. A new session tries frequently used directories on the host, then other remembered or login directories.

If a remembered directory is missing or inaccessible, the browser tries the next usable location. Connection failures are reported rather than mistaken for a missing folder. Refreshing does not make a directory count as a new visit.

## Storage access

Mobile SSH does not ask for blanket storage permission on either platform.

On Android you grant **one folder** with the system folder picker, and downloads are written there — somewhere every other app can already read. The grant persists across launches.

On iOS, **My Phone → Choose local folder** grants access to a folder in Files, including supported iCloud Drive and other file providers. The choice persists across launches. **Use app folder** returns to Mobile SSH's Documents folder. If a selected folder becomes unavailable, reselect it or explicitly switch to the app folder; downloads are not silently redirected. This device's folder access is not included in backups.

The iOS document and photo pickers also import multiple items. Filename conflicts offer **Replace**, **Keep Both**, or **Cancel**. Importing a file already in the destination leaves it intact.

Private key import is separate from file transfer and uses the system file picker.

## Upload files

1. Open the local pane.
2. Navigate to the file you want to upload.
3. Choose upload.
4. Confirm the remote destination.
5. Watch the transfer queue for progress and completion.

Uploads follow the selected server's SSH route, including any saved jump hosts. If the connection drops, retry after reconnecting.

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

- **Copy to Phone** to download.
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

Transfers are queued and displayed by status — Android tabs them as Queued / Failed / Successful, iOS as Active / Failed / Done. Failed transfers include the available error reason. On iOS the current transfer stays at the top of Active and can be cancelled.

On iOS, queued transfers keep their original folder even if you browse elsewhere. Downloads finish in temporary storage before replacing a destination; cancellation or failure preserves an existing file. If the destination changed since overwrite approval, the app stops rather than replacing the changed file.

## Getting files out of the app

- **Android:** downloads land in the folder you granted, so they are already visible to every other app. **Open in another app** is on both panes; a remote file is downloaded first, then handed over.
- **iOS:** **Open in another app** is available for local and remote files. A remote file downloads first, then opens the share sheet. Files in the app folder appear under **On My iPhone → Mobile SSH**; a chosen external folder remains at its original Files location.

## Sending a file into a session

Both platforms accept files shared from other apps and offer a 📎 **Attach a file** control in the terminal. Files upload to `~/.cache/mobile-ssh` on the selected host, and their paths can be inserted at the prompt without pressing Enter. Multiple files are supported.

On Android, sharing targets the running session. On iOS, the paperclip offers **Photo Library** or **Files**. The iOS Share Extension can also upload to a saved SSH server while Mobile SSH is closed; Eternal Terminal profiles are not offered. Verify any unknown server identity in the main app first.

After an iOS Share Extension upload, paths are copied to the clipboard and queued for insertion when a connected pane for that server is available in the app. They are not inserted into a pane connected to a different host.

## Practical tips

- Use SFTP for targeted file moves; use command-line tools such as `rsync` on the server for large directory synchronization.
- Avoid editing live production files unless you have a backup or deployment rollback path.
- If a file does not appear after upload, refresh the remote pane or verify the destination path.
- If the Android local pane is empty, use **Pick folder**. On iOS, use **Choose local folder**, **Use app folder**, or the import pickers, depending on where you want the files.
