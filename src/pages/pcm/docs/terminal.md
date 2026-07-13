---
layout: ../../../layouts/DocLayout.astro
title: "Terminal"
description: "Mobile SSH terminal controls, extra keys, panes, scrolling, tmux behavior, copy actions, and keyboard settings."
---

# Terminal

Di Mobile SSH terminal na for phone and tablet operation. E dey combine terminal canvas, extra key row, multi-session panes, scroll handling, and reconnection behavior.

## Terminal basics

- Di terminal dey use xterm-style behavior with color support and cursor-key handling.
- Di scrollback buffer dey keep up to 5000 lines.
- Tap one pane make you select am before you type.
- Pinch terminal pane to change text size. Mobile SSH go resize di remote PTY after di gesture settle.
- Double-tap one pane (or use im expand control) to enter fullscreen mode. Use Back on Android, or di collapse control on iOS, to return to di grid.

## Multi-session grid

Mobile SSH fit run up to eight SSH sessions at di same time. Each session dey show as pane for di terminal grid. Di pane header dey show di current target or title. Tap one pane make you select am, or use **+ Add Session** to start anoda connection.

Closing one pane dey disconnect dat SSH session. Returning to di start screen dey keep live sessions available through **Active Sessions**.

## Extra key row

For both Android and iOS, di extra key row dey show on top di on-screen keyboard and e dey provide terminal keys wey hard to use on touch keyboards:

- `ESC`
- `TAB`
- `CTRL`
- `Shift`
- Arrow keys
- `HOME`
- `END`
- `PGUP`
- `PGDN`
- Keyboard toggle

`CTRL` and `Shift` dey act as sticky modifiers for di next compatible input. For example, tap `CTRL`, then type `C` to send Ctrl-C.

## Keyboard behavior

Di terminal dey use native pass-through connection to di on-screen keyboard: every character dey go di remote shell as you dey type, wit autocorrect and predictive suggestions off so di keyboard no go rewrite input before e reach di shell. Dis dey keep Vim, tmux, htop, less, shells wit strange key chords, and remote password prompts predictable — no suggestion buffer dey to disable.

- **Tap terminal to show keyboard:** wen e dey enabled, tapping di terminal dey ask di system to show di on-screen keyboard.

Soft-keyboard voice dictation still dey work: di dictated text dey commit straight to di shell like any other typed input.

## Hardware keyboards

External and Bluetooth keyboards dey drive di terminal directly for both Android and iOS. Pass ordinary characters, Mobile SSH dey map arrow keys, `Home`/`End`, `PgUp`/`PgDn`, `Insert`, `Delete`, `Esc`, function keys `F1`–`F12`, `Ctrl`+key and `Alt`/`Option`-as-Meta chords, and `Shift`+`Tab`. Modifier keys dey combine wit di extra key row sticky modifiers.

## Paste

Wen you paste enter program wey request am (bash, Vim, and other bracketed-paste apps), e dey wrap inside bracketed-paste markers, so multi-line clipboard content dey enter as text instead of make e run line by line by itself. Na only real paste dem dey wrap; typed and dictated text no dey touched.

## Select, copy, share

Long-press inside di terminal to enter selection mode. Di selection toolbar dey offer three actions:

- **Copy** -- put di selected text for di system clipboard.
- **Share** -- pass di selected text to di system share sheet (mail, notes, messaging, etc.).
- **Select all** -- expand di selection to di full visible terminal buffer, then Copy or Share.

## Scrolling

Mobile SSH dey route scroll gestures based on terminal state:

- For normal shell output, swiping dey scroll di local scrollback buffer.
- For mouse-mode terminal apps, scrolling dey send mouse-wheel escape sequences.
- For alternate-screen apps without mouse mode, like plenty tmux sessions, scrolling dey enter tmux copy mode and send line scroll commands.

If you type while you don scroll back, Mobile SSH go return to di live terminal view.

## tmux behavior

Mobile SSH dey observe outgoing tmux attach and new-session commands like:

```bash
tmux attach -t work
tmux a -t work
tmux new -A -s work
```

Wen connection drop while you dey for tmux, di app fit remember di last tmux session name for dat server and try reattach after reconnect. If e no observe explicit session name but di app sabi say you dey for alternate-screen tmux-like session, e fit try generic `tmux attach`.

Dis behavior na best-effort. If di remote tmux session no dey again, di remote shell still dey available.

## Agent alerts

Mobile SSH fit dey watch di terminal output of di active session for patterns wey show say remote agent dey wait for input. Wen e detect match — for example, Claude Code or Codex wey pause to wait for prompt — di app go send notification with optional sound and vibration.

To configure am:

1. Open **Settings** from di start screen.
2. Enable **Agent alerts**.
3. Choose notification sound and vibration pattern.

Di alert go play through any audio output wey dey active, including headphones, so you fit hear am while you dey watch video or wen phone don lock. Di notification go show even wen Mobile SSH dey background.

Agent alert patterns dey match against visible terminal output. If your remote tool dey output recognizable prompt line (username, `?`, or bracketed question), di app fit pick am up automatically. If alerts dey fire too often or e no dey fire at all, adjust di sensitivity for Settings.

## Full-screen terminal programs

For programs like Vim, less, htop, ncurses tools, and tmux panes:

- Input dey pass straight to di program — no autocorrect or suggestion buffer dey to disturb.
- Use di extra key row for `ESC`, arrows, `PGUP`, and `PGDN`.
- Use pinch zoom if text too small, then wait small make di remote terminal size settle.
