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

Mobile SSH get two keyboard-related settings:

- **Tap terminal to show keyboard:** wen e dey enabled, tapping di terminal dey ask di system to show di on-screen keyboard.
- **Keyboard suggestions:** wen e dey enabled, compatible keyboards fit show suggestions for shell prompts. Disable am if suggestions dey disturb terminal programs.

Wen suggestions dey enabled, Mobile SSH dey buffer composing text until word boundary so keyboard correction fit replace di current word before e reach di remote shell. Control keys and terminal chords dey bypass dat buffer, so shortcuts like tmux prefix commands still dey arrive sharp-sharp.

For Android, voice input (di Gboard microphone button) dey pass through di same composing-text buffer, so dictated text dey go once e resolve instead of character by character.

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

- Disable keyboard suggestions if di keyboard start to buffer input for way wey di program no expect.
- Use di extra key row for `ESC`, arrows, `PGUP`, and `PGDN`.
- Use pinch zoom if text too small, then wait small make di remote terminal size settle.
