---
layout: ../../../layouts/DocLayout.astro
title: "File transfer"
description: "Mobile SSH SFTP file transfer guide for local files, remote files, upload, download, sorting, and permissions."
---

# File transfer

Mobile SSH get SFTP file transfer screen wey dey connected to di active SSH session. E dey useful for quick server maintenance from your phone or tablet: upload config file, download log, rename remote file, or check permissions — all without leaving di app.

## Open file transfer

1. Connect to one SSH server.
2. Select di connected terminal pane.
3. Open **Transfer** from di terminal toolbar, or long-press di pane header if di current screen support am.
4. Di file transfer screen go open with one local pane and one remote pane.

If no active SSH session dey, file transfer no go fit open.

## Local and remote panes

Di file transfer screen get two browser panes:

- **Local pane:** phone storage.
- **Remote pane:** server files over SFTP.

Di app dey remember di last ten remote path for each host — open dem from di remote pane header for Android, or di clock icon for iOS. Sort settings dey saved per host for both panes. No local path history dey: for Android, di local pane na di folder wey you grant, and for iOS na di app own documents area.

Di file transfer screen dey follow your system light or dark theme, so e dey match di rest of Mobile SSH.

### Where each session dey open (Android)

If you open File Transfer from pane wey attach to tmux session, e go put di remote pane back where **dat session** last dey work, wit di session name for di pane header. Session wey you never open am from before dey start from di directories wey you dey use pass for dat host, then di host last directory, then your home directory.

If dem don delete one directory wey e remember, di app dey step down dat list until one actually list, instead of leaving you for error — and e no dey write di broken path back. For iOS, na one remote directory e dey remember for each host.

## Storage access

Mobile SSH no dey ask for blanket storage permission for any of di two platforms.

For Android you go grant **one folder** wit di system folder picker, and download dey write go dia — place wey every oda app fit already read. Di grant dey persist across launch.

For iOS, di local pane na di app documents area, and files dey enter through di system document and photo pickers.

For iOS, di local pane dey work with di app own documents area, and you dey bring files in through di system document and photo pickers — including multi-select import of photos and documents. You no need any separate storage permission.

Private key import dey separate from file transfer and e dey use di system file picker.

## Upload files

1. Open di local pane.
2. Navigate go di file wey you wan upload.
3. Choose upload.
4. Confirm di remote destination.
5. Watch di transfer queue to see progress and when e finish.

Uploads dey use di existing SSH/SFTP connection. If di connection cut, reconnect first then try again.

## Download files

1. Open di remote pane.
2. Navigate go di file wey you wan download.
3. Choose download.
4. Confirm di local destination.
5. Watch di transfer queue to see progress and when e finish.

Make you do big downloads on stable network when e possible.

## Copy whole folders

Upload and download no dey limited to single file. Choose one folder and Mobile SSH go copy di whole subtree for both directions — phone to remote and remote to phone — e go first create di destination directories, then queue each file. Subdirectory wey e no fit read no dey stop di rest of di copy; for Android e dey report am as failed row wey read "Can't list directory", while iOS dey continue witout listing wetin e skip.

## Remote file actions

Depending on di remote item wey you select, Mobile SSH fit show actions like:

- Download, or **Copy to phone** for Android.
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

Each pane fit sort by name or date, for ascending or descending order. Mobile SSH dey store di local and remote sort modes wey you choose per host, together with recent paths — so when you transfer to di same server again, e go start from familiar location.

## Transfer queue

Transfers dey queued and e show by status, and di log dey show every transfer and e dey scroll — Android dey tab dem as Queued / Failed / Successful, iOS as Active / Failed / Done. Failed transfers go show reason wen di underlying SFTP operation provide one. For iOS, di file wey dey transfer right now dey stay for di top of di Active tab, and you fit cancel one row for middle of di work.

## How to comot file from di app

- **Android:** download dey land inside di folder wey you grant, so every oda app fit already see am. **Open inside anoda app** dey for di two panes; e go first download remote file, then hand am over.
- **iOS:** Mobile SSH dey show inside di Files app under **On My iPhone**, so anything wey dey di My Phone pane dey reachable from Mail, pickers, and oda app. Long-press file wey you don download and choose **Open inside anoda app** to hand am over, AirDrop am, or save am somewhere else.

## Send file enter session (Android)

Android dey accept file wey you share enter am from any oda app: share go Mobile SSH and e go upload di file go `~/.cache/mobile-ssh` for di pane host, and e go type im remote path for di prompt so you fit use am one time. Di 📎 button for di terminal toolbar dey do di same thing from di system file picker, and di two dey accept plenty file at once.

For iOS, bring file enter di local pane wit di ＋ button and upload dem from dia.

## Practical tips

- Use SFTP for targeted file moves; use command-line tools like `rsync` on di server for large directory synchronization.
- Avoid editing live production files unless you get backup or deployment rollback path.
- If file no appear after upload, refresh di remote pane or verify di destination path.
- If di Android local pane empty, pick folder wit **Pick folder** — na only di folder wey you grant di app get access to. For iOS, use di pickers instead to add files go di local pane.
