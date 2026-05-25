---
layout: ../../layouts/DocLayout.astro
title: Terminal
description: Mobile SSH terminal controls, extra keys, panes, scrolling, tmux behavior, copy actions, and keyboard settings.
---

# Terminal

The Mobile SSH terminal is built for phone and tablet operation. It combines a terminal canvas, an extra key row, multi-session panes, scroll handling, and reconnection behavior.

## Terminal basics

- The terminal uses xterm-style behavior with color support and cursor-key handling.
- The scrollback buffer keeps up to 5000 lines.
- Tap a pane to select it before typing.
- Pinch a terminal pane to change text size. Mobile SSH resizes the remote PTY after the gesture settles.
- Double-tap a pane to enter fullscreen mode. Use Back to return to the grid.

## Multi-session grid

Mobile SSH can run up to eight SSH sessions at the same time. Each session appears as a pane in the terminal grid. The pane header shows the current target or title. Tap a pane to select it, or use **+ Add Session** to start another connection.

Closing a pane disconnects that SSH session. Returning to the start screen keeps live sessions available through **Active Sessions**.

## Extra key row

The extra key row appears above the Android keyboard and provides terminal keys that are awkward on touch keyboards:

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

`CTRL` and `Shift` act as sticky modifiers for the next compatible input. For example, tap `CTRL`, then type `C` to send Ctrl-C.

## Keyboard behavior

Mobile SSH has two keyboard-related settings:

- **Tap terminal to show keyboard:** when enabled, tapping the terminal asks Android to show the input method.
- **Keyboard suggestions:** when enabled, compatible keyboards can show suggestions at shell prompts. Disable this if suggestions interfere with terminal programs.

When suggestions are enabled, Mobile SSH buffers composing text until a word boundary so keyboard correction can replace the current word before it is sent to the remote shell. Control keys and terminal chords bypass that buffer so shortcuts such as tmux prefix commands still arrive promptly.

Voice input (the Gboard microphone button) is routed through the same composing-text buffer, so dictated text is sent once it resolves rather than character by character.

## Select, copy, share

Long-press inside the terminal to enter selection mode. The selection toolbar offers three actions:

- **Copy** -- place the selected text on the Android clipboard.
- **Share** -- pass the selected text to the Android share sheet (mail, notes, messaging, etc.).
- **Select all** -- expand the selection to the full visible terminal buffer, then Copy or Share.

## Scrolling

Mobile SSH routes scroll gestures based on terminal state:

- In normal shell output, swiping scrolls the local scrollback buffer.
- In mouse-mode terminal apps, scrolling sends mouse-wheel escape sequences.
- In alternate-screen apps without mouse mode, such as many tmux sessions, scrolling enters tmux copy mode and sends line scroll commands.

If you type while scrolled back, Mobile SSH returns to the live terminal view.

## tmux behavior

Mobile SSH observes outgoing tmux attach and new-session commands such as:

```bash
tmux attach -t work
tmux a -t work
tmux new -A -s work
```

When a connection drops while you were in tmux, the app can remember the last tmux session name for that server and attempt to reattach after reconnect. If no explicit session name was observed but the app knows you were in an alternate-screen tmux-like session, it may try a generic `tmux attach`.

This behavior is best-effort. If the remote tmux session no longer exists, the remote shell remains available.

## Full-screen terminal programs

For programs such as Vim, less, htop, ncurses tools, and tmux panes:

- Disable keyboard suggestions if the keyboard starts buffering input in a way the program does not expect.
- Use the extra key row for `ESC`, arrows, `PGUP`, and `PGDN`.
- Use pinch zoom if text is too small, then wait briefly for the remote terminal size to settle.
