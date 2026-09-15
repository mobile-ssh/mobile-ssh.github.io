---
layout: ../../layouts/DocLayout.astro
title: Terminal
description: Mobile SSH terminal controls, keyboard settings, tmux, herdr and Zellij managers, agent alerts, clipboard, inline images, and remote desktops.
---

# Terminal

The Mobile SSH terminal is built for phone and tablet operation. It combines a terminal canvas, an extra key row, multi-session panes, scroll handling, and reconnection behavior.

## Terminal basics

- The terminal uses xterm-style behavior with color support and cursor-key handling.
- The scrollback buffer keeps 5000 lines by default, and can be set to 1,000, 10,000, or 50,000 in Settings.
- Tap a pane to select it before typing.
- Pinch a terminal pane to change text size. Mobile SSH resizes the remote PTY after the gesture settles.
- Double-tap a pane (or use its expand control) to enter fullscreen mode. Use Back on Android, or the collapse control on iOS, to return to the grid.

## Multi-session grid

Mobile SSH can run up to eight SSH sessions at the same time. Each session appears as a pane in the terminal grid. Tap a pane to select it, or use **+ Add Session** to start another connection.

The pane header names where you are. On Android it shows the pane's real working directory, asked from tmux or reported by the shell over OSC 7 and refreshed while the app is open; on iOS it shows the title the remote sets, falling back to `user@host:port`.

Closing a pane disconnects that SSH session. Returning to the start screen keeps live sessions available through **Active Sessions**. The header reports stalled connections; Settings offers transfer rates and optional dimming or vibration when the link stops answering.

## Eternal Terminal (ET)

Both platforms offer these transports in the **Transport** selector when you add or edit a server:

- **SSH** -- a standard SSH connection (the default).
- **Eternal Terminal** -- an ET session that survives network drops, device sleep, and IP address changes without restarting your shell.

ET keeps the session alive on the server, so when your phone changes networks or wakes from sleep, Mobile SSH reattaches to the same running shell instead of opening a new one. This makes it a good fit for mobile data, Wi-Fi/cellular hand-offs, and long-running commands.

ET needs an `etserver` process on the host. If it is missing, Mobile SSH can offer to install and start it over SSH. Review and approve the setup commands, then connect with **Eternal Terminal** selected. SSH jump-host routes require the **SSH** transport.

## Extra key row

Both platforms put a row of thirteen terminal keys within reach — the ones that are awkward or missing on a touch keyboard. On Android it is a strip at the bottom of the session (which hides itself when a hardware keyboard is attached); on iOS it rides above the software keyboard.

The two default sets are the same size but not identical:

| | Android | iOS |
|---|---|---|
| Defaults | `ESC` `TAB` `CTRL` arrows `HOME` `PGUP` `END` `PGDN` `⌫` `⌨` | `ESC` `TAB` `CTRL` `⇧` arrows `HOME` `END` `PGUP` `PGDN` `⌨` |
| Difference | has backspace, no Shift | has sticky Shift, no backspace |

**The row never scrolls.** When the keys stop fitting the width they divide the space evenly and wrap to a second row; anything still left over folds into a `⋯` overflow menu. Nothing is hidden behind a swipe or clipped at the screen edge, and an armed modifier still applies to a key you pick out of the overflow.

`CTRL` acts as a sticky modifier: tap `CTRL`, then type `C` to send Ctrl-C. `Shift` is stickier on iOS than on Android — on iOS it also uppercases the next character you type on the software keyboard, while on Android it applies only to the bar's own keys (`Shift`+`Tab`, `Shift`+arrows).

Hold a key like an arrow or `PGDN` and it repeats.

## Keyboard behavior

On Android, ordinary terminal typing passes directly to the remote shell, with autocorrect and predictive suggestions off by default. Voice dictation can still commit text through the keyboard.

On iOS, **Settings → Terminal → Dictation and suggestions** is on by default. It enables dictation, predictive text, and corrections while you compose a line. For raw keystrokes, turn it off, leave **Keyboard suggestions** off, and open a new pane.

**Show keyboard on tap** controls whether a tap raises the software keyboard. It defaults to off on Android and on on iOS; the toolbar keyboard button remains available.

## Hardware keyboards

External and Bluetooth keyboards drive the terminal directly on both Android and iOS. Beyond ordinary characters, Mobile SSH maps arrow keys, `Home`/`End`, `PgUp`/`PgDn`, `Insert`, `Delete`, `Esc`, function keys `F1`–`F12`, `Ctrl`+key and `Alt`/`Option`-as-Meta chords, and `Shift`+`Tab`. Modifier keys combine with the extra key row's sticky modifiers.

## Paste

Pasting into a program that requests it (bash, Vim, and other bracketed-paste apps) is wrapped in bracketed-paste markers, so multi-line clipboard content is inserted as text instead of being auto-executed line by line. Only real pastes are wrapped; typed and dictated text is untouched.

## Select, copy, share

Long-press inside the terminal to select the word under your finger, then drag the handles to adjust. The selection toolbar includes:

- **Copy** -- place the selected text on the system clipboard. The selection stays highlighted afterward, so you can share it, re-copy, or extend it.
- **Share** -- pass the selected text to the system share sheet (mail, notes, messaging, etc.).
- **Select all** -- expand the selection to the full visible terminal buffer, then Copy or Share.
- **Paste** -- insert clipboard text into the terminal.

## Find in the terminal

Search the whole terminal buffer — scrollback and the visible screen — and jump between matches. Open search from the terminal controls, type a query, and step through hits. This works on both Android and iOS.

## Color, italics, and remote clipboard

- The terminal renders **24-bit true color** and **italics**, so themed prompts, syntax highlighting, and TUIs look the way they do on the desktop.
- **OSC 52 clipboard:** remote programs can copy text to the phone clipboard. Reading the phone clipboard from a remote program requires a separate opt-in setting and is off by default.
- On both Android and iOS, wide CJK, emoji, and combining characters (grapheme clusters and zero-width joiners) are measured and drawn correctly, and a bundled **Nerd Font** draws powerline, starship, devicon, and Material Design icon glyphs that the system font would otherwise show as empty boxes.

## Shell integration and inline images

- **Shell integration (OSC 133):** when your shell emits OSC 133 prompt markers, Mobile SSH can step between prompts and alert you when a long-running command finishes. Works on Android and iOS. Neither app injects the markers — your shell has to emit them (a `PROMPT_COMMAND`/`precmd` hook, or starship). On Android, prompt navigation is off until you enable it under **Settings → Shell integration**; on iOS the menu appears by itself once marks start arriving.
- **Select output:** touch anywhere inside a command's output and select that whole block — the build error from 300 lines ago, not just the last command — then copy, share, or extend it.
- **Inline images:** programs that use the Kitty graphics protocol draw images directly in the terminal, on Android and iOS. Images survive pinch-zoom and re-wrap: they are measured in cells and follow their line, instead of being dropped and leaving a gap. They also render in full-screen applications, with placements kept separate from normal scrollback.
- **Mosaic glyphs:** block, braille, sextant, and octant characters are drawn by the app itself rather than requested from a font, so `chafa`, `timg`, and ANSI art tile the grid exactly — no seams, no empty boxes, whatever font you picked.
- **Image resolution:** the Images setting can report Full, Half, or A third of the display resolution to terminal image programs, reducing the pixels sent over a mobile connection.
- **Real working directory (Android):** the pane header shows where the pane actually is, asked from tmux or reported by the shell over OSC 7, rather than whatever the last prompt happened to print.

## Appearance and keys

On both Android and iOS, Settings lets you tailor the terminal:

- **Font:** choose the system monospace font, JetBrains Mono, or Source Code Pro.
- **Color scheme:** Default, Solarized Dark or Light, Gruvbox, Dracula, or Nord — applied live to open panes.
- **Extra key row:** add, remove, reorder, and hide keys, define your own escape-sequence keys, and reset to defaults, with a live preview that shows the exact row split you will get. Android puts this on a **Keys** tab; iOS under **Extra keys → Customize keys**.
- **Add from presets:** a palette of roughly 45 keys in six groups — `F1`–`F12`, Ctrl combinations such as `^C` `^D` `^Z` `^R` `^L`, symbols like `|` `~` `/` `_` `:`, and modifiers. `F1`–`F12` are sent as ordinary escape sequences, so they need no `FN` chord. Android also offers a 📎 **Attach a file** key that opens the file picker and uploads into the live session; iOS offers `INS`, `DEL`, and an `FN` key that reveals a digit row.
- **Scrollback size:** 1,000, 5,000, 10,000, or 50,000 lines (5,000 by default). Applies to new panes.
- **Text size:** a slider, alongside pinch-to-zoom.
- **Theme:** System, Light, or Dark for the whole app.

Reset restores the shipped defaults rather than freezing today's list, so a later release's improvements still reach you. Edits apply live to panes that are already open.

## Scrolling

Mobile SSH routes scroll gestures based on terminal state:

- In normal shell output, swiping scrolls the local scrollback buffer.
- In mouse-mode terminal apps, scrolling sends mouse-wheel escape sequences.
- In alternate-screen apps without mouse mode, such as many tmux sessions, scrolling enters tmux copy mode and sends line scroll commands.

On both platforms, a tap inside a mouse-tracking program normally sends a left click. On iOS, **Tap places the cursor** swaps this with cursor movement; Shift-tap performs the other action. Optional hold-then-drag mouse input is off by default, so an ordinary swipe scrolls.

If you type while scrolled back, Mobile SSH returns to the live terminal view.

## tmux behavior

Mobile SSH observes outgoing tmux attach and new-session commands such as:

```bash
tmux attach -t work
tmux a -t work
tmux new -A -s work
```

When a connection drops, the app remembers the attached tmux session and socket so reconnecting can return the terminal to that target. Separate panes on the same host retain their own attachment. If the session no longer exists, the shell remains available.

On iOS, changing sockets reads the current tmux prefix rather than assuming Ctrl+B. Unsupported prefixes or failed lookups stop with a message. Typing, closing the pane, or disconnecting cancels pending attachment steps; an unidentified full-screen program is not sent attach commands.

## Tmux manager

Mobile SSH includes a tmux manager so you can browse and control tmux without typing prefix chords. Open it from the multiplexer control in a connected session; long-press that control to choose tmux when several managers are available. It lists, in three sections:

- **Sessions** -- every tmux session on the server.
- **Windows** -- windows in the selected session.
- **Panes** -- panes in the selected window.

From the manager you can:

- **Attach** a session to the current terminal.
- **Create** a new session or window, and **rename** them.
- **Split** a pane horizontally or vertically, **zoom** a pane, and **kill** sessions, windows, or panes.
- **Sort** sessions by Recent (the default), name, or creation date.

A 🔔 marks any session whose agent is awaiting input, so you can spot a paused Claude Code or Codex run at a glance and attach to it. This complements the reattach hints above: the reattach logic restores your last session automatically on reconnect, while the manager gives you full manual control.

Both platforms can manage more than one tmux server (socket) on the same host. Manager attachment indicators refer to the terminal you are using, not another client on the server.

## Herdr and Zellij

Android and iOS also manage Herdr and Zellij. One toolbar control opens the primary detected multiplexer; long-press it to choose another. Only programs found on that server are offered. Inside a manager, the server title changes servers and the multiplexer selector switches managers.

- **Herdr** shows sessions, workspaces, tabs, and panes with agent status. Preview or answer a blocked agent from the list. Replies stay with the selected pane and named session; **Send** submits the text and **Just Enter** sends a bare confirmation. Exact pane focus is offered where supported; otherwise use the parent tab's Focus action. Herdr supplies agent state without an additional hook.
- **Zellij** lists sessions, tabs, and panes with attach, rename, kill, and split. Killed sessions stay listed so attaching resurrects them, while delete forgets them for good. Tab and pane detail needs Zellij 0.44 or newer; on an older version the page shows tab names and says why. Splits need a client attached to the session, and the page explains that instead of offering a button that would fail.

If herdr or Zellij is installed but not on the login shell's `PATH`, the page offers to add it.

Each saved server has an **Attach on connect** setting: **Auto (detect)**, **Nothing**, **tmux**, **herdr**, or **Zellij**. Auto uses the available detection and attachment history, preferring a previously used multiplexer, then one with live sessions, then one installed. Without cached detection it opens a plain shell. A later probe affects future connections; it does not launch over your current input.

## Agent alerts

Mobile SSH tells you when a remote AI coding agent — Claude Code, Codex, Gemini — is blocked waiting on you. It does not guess by reading your terminal output. There are two paths, and they work at different levels of detail.

### The bell

Terminal bells can raise an agent-attention alert. Bells immediately after typing are ignored by default. Remote desktop-notification sequences (OSC 9, OSC 777) and OSC 133 command-finished alerts have separate settings; on iOS both are off until enabled.

This needs no setup, but the app only knows that *something* rang.

### The agent hook

For the app to know *which* agent is waiting and *what* it is doing, install the agent hook on the server:

- **iOS:** Settings → **Agent alerts** → **Install Agent Hook**. If more than one server is connected, it asks which.
- **Android:** long-press a session's pane header and choose **Install agent hooks**.

This writes a small shell script to `~/.mobile-ssh/agent-hook.sh` on that server. It is agent-agnostic — it takes command-line arguments rather than parsing any one vendor's format — so anything that can run a command can report through it. Deleting the file is a clean uninstall.

Once an agent reports through the hook:

- The pane's header reads `claude · needs you`, or names the tool it is running.
- A pane whose agent is blocked gets an amber border. The pane you are already looking at is left alone — the prompt is right there.
- A toolbar badge counts the agents waiting across every connection, capped at `9+`.
- The **Agents** screen lists every agent on every connection, with what it is doing and how long it has been waiting.

### Answering without typing

When an agent asks a question with a fixed set of answers, the app shows a button per option — up to six — in the Agents list. On Android you can also tap the agent chip in a pane header.

Your answer does not get typed into the session. It is written to a file over a separate channel and picked up by the hook, so replying cannot corrupt whatever is on screen. The app refuses to send an option the prompt did not actually offer, and tells you plainly if the connection has since dropped rather than failing quietly.

### Settings

Agent alerts are on by default on both platforms, with individual switches for notifications, sound, vibration, and alerts for the active pane. On iOS active-pane alerts are on by default, and Settings also offers background-only delivery. iOS can deliver these only while the app is allowed to run; long background suspension interrupts live SSH alerts.

One default is worth knowing: **sound is limited to headphones**. With nothing plugged in or paired, an alert notifies and vibrates but plays no tone. Turn that off if you want the alert audible on the phone speaker.

There is no sensitivity setting and no sound picker — the controls are on/off.

## Full-screen terminal programs

For programs such as Vim, less, htop, ncurses tools, and tmux panes:

- For raw terminal input on iOS, turn off **Dictation and suggestions** and **Keyboard suggestions**, then open a new pane.
- Use the extra key row for `ESC`, arrows, `PGUP`, and `PGDN`.
- Use pinch zoom if text is too small, then wait briefly for the remote terminal size to settle.

## Remote desktops

Both platforms can open a remote desktop over a VNC connection carried through SSH. Reuse an existing shared screen, including macOS Screen Sharing, or approve setup of a supported Linux desktop. The remote server must provide the desktop; SSH access alone does not create a graphical session. Linux screen mirroring requires X11 rather than Wayland, and macOS uses an existing shared screen rather than creating a private desktop.

Use touch to click, drag, and zoom, and the on-screen or hardware keyboard to type. Clipboard controls let you paste phone text into the desktop. The desktop can also copy text back to the phone.

**Screen Size** offers presets and custom dimensions, remembered per server. On iOS each edge must be between 320 and 5120 pixels. Live resizing preserves applications when the server supports it. A restart fallback requires confirmation and is offered only for a private desktop created by the app. Reused desktops and shared console screens are not restarted to resize them; change a Mac's resolution in its Displays settings when live resizing is unavailable.
