---
layout: ../../../layouts/DocLayout.astro
title: "File transfer"
description: "Mobile SSH SFTP transfers, folders wey e remember, tmux session directories, transfer queue, permissions and files wey you share into terminal."
---

# File transfer

Mobile SSH get SFTP file transfer screen wey dey connected to di active SSH session. E dey useful for quick server maintenance from your phone or tablet: upload config file, download log, rename remote file, or check permissions — all witout leaving di app.

## Open file transfer

1. Connect to one SSH server.
2. Select di connected terminal pane.
3. Open **Transfer** from di terminal toolbar, or long-press di pane header if di current screen support am.
4. Di file transfer screen go open wit one local pane and one remote pane.

If no active SSH session dey, file transfer no go fit open.

## Local and remote panes

Di file transfer screen get two browser panes:

- **Local pane:** phone storage.
- **Remote pane:** server files over SFTP.

Di app remember recent remote paths and sort settings per host. Open dem from remote pane header for Android or clock icon for iOS. Local pane show folder wey you choose; iOS use app Documents until you choose another.

Di file transfer screen dey follow your system light or dark theme, so e dey match di rest of Mobile SSH.

### Where each session dey open

For both platforms, File Transfer wey you open from tmux return to directory wey e remember for **dat session and socket**. New session try frequent host directories, then other saved or login directories.

If remembered directory no dey or you no fit access am, browser try di next usable place. E report connection failure, e no mistake am for missing folder. Refresh no count as new visit.

## Storage access

Mobile SSH no dey ask for blanket storage permission for any of di two platforms.

For Android you go grant **one folder** wit di system folder picker, and download dey write go dia — place wey every oda app fit already read. Di grant dey persist across launch.

For iOS, **My Phone → Choose local folder** grant access to folder inside Files, including supported iCloud Drive and other providers. Di choice remain after you reopen app. **Use app folder** return to Mobile SSH Documents. If folder no dey available, choose am again or deliberately switch to app folder; downloads no change destination quietly. Folder access for this device no dey inside backup.

iOS document and photo pickers fit import many items. If names clash, choose **Replace**, **Keep Both** or **Cancel**. File wey already dey di destination remain intact when you import am.

Private key import dey separate from file transfer and e dey use di system file picker.

## Upload files

1. Open di local pane.
2. Navigate go di file wey you wan upload.
3. Choose upload.
4. Confirm di remote destination.
5. Watch di transfer queue to see progress and wen e finish.

Uploads follow di chosen server SSH route, including saved jump hosts. If connection drop, reconnect then try again.

## Download files

1. Open di remote pane.
2. Navigate go di file wey you wan download.
3. Choose download.
4. Confirm di local destination.
5. Watch di transfer queue to see progress and wen e finish.

Make you do big downloads on stable network wen e possible.

## Copy whole folders

Upload and download no dey limited to single file. Choose one folder and Mobile SSH go copy di whole subtree for both directions — phone to remote and remote to phone — e go first create di destination directories, then queue each file. Subdirectory wey e no fit read no dey stop di rest of di copy; for Android e dey report am as failed row wey read "Can't list directory", while iOS dey continue witout listing wetin e skip.

## Remote file actions

Depending on di remote item wey you select, Mobile SSH fit show actions like:

- **Copy to Phone** to download.
- Copy or move **for di server** — `cp -r` / `mv` dey run for di host witout di bytes touching your phone.
- Rename.
- Delete.
- Create file or directory.
- Edit text file.
- Compress go `.tar.gz`.
- Permissions — change mode and owner, wit option to apply am to whole folder.
- Open inside anoda app.
- View file details.

Remote file details fit include permission bits, owner, group, and octal permission values. Check dis details before you change server files wey anoda process or deployment tool dey manage.

Dem dey show file size for binary units, so e go match wetin `ls -h` dey print for di terminal wey dey one tab away.

## Sorting and recent paths

Each pane fit sort by name or date, for ascending or descending order. Mobile SSH dey store di local and remote sort modes wey you choose per host, together wit recent paths — so wen you transfer to di same server again, e go start from familiar location.

## Transfer queue

Transfers dey queue by status: Queued / Failed / Successful for Android, Active / Failed / Done for iOS. Failed ones show di reason wey dey available. For iOS, current transfer stay top of Active and you fit cancel am.

For iOS, queued transfers keep their original folder even if you browse elsewhere. Downloads finish for temporary storage before dem replace destination; cancel or failure preserve old file. If destination change after you approve overwrite, app stop.

## How to comot file from di app

- **Android:** download dey land inside di folder wey you grant, so every oda app fit already see am. **Open inside anoda app** dey for di two panes; e go first download remote file, then hand am over.
- **iOS:** **Open in another app** dey for local and remote files. Remote file download first before share sheet open. App folder dey under **On My iPhone → Mobile SSH**; external folder remain for im original Files location.

## Send file into session

Both platforms accept files wey other apps share and get 📎 **Attach a file** for terminal. Files upload to `~/.cache/mobile-ssh` for selected host, and their paths fit enter prompt without Enter. You fit send many files.

For Android, sharing target di running session. For iOS, paperclip offer **Photo Library** or **Files**. iOS Share Extension fit upload to saved SSH server even when Mobile SSH close; Eternal Terminal profiles no dey. Verify unknown server identity for main app first.

After iOS Share Extension upload, paths enter clipboard and wait to insert when pane wey connect to dat server dey available. Dem no enter pane wey connect to another host.

## Practical tips

- Use SFTP for targeted file moves; use command-line tools like `rsync` on di server for large directory synchronization.
- Avoid editing live production files unless you get backup or deployment rollback path.
- If file no appear after upload, refresh di remote pane or verify di destination path.
- If Android local pane empty, use **Pick folder**. For iOS, use **Choose local folder**, **Use app folder** or import pickers, depending on where you want files.
