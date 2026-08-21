---
layout: ../../../layouts/DocLayout.astro
title: "Terminal"
description: "Mobile SSH terminal control, extra key, pane, scrolling, tmux, herdr and Zellij manager, agent alert, copy action, and keyboard setting."
---

# Terminal

Di Mobile SSH terminal na for phone and tablet operation. E dey combine terminal canvas, extra key row, multi-session panes, scroll handling, and reconnection behavior.

## Terminal basics

- Di terminal dey use xterm-style behavior with color support and cursor-key handling.
- Di scrollback buffer dey keep 5000 lines by default, and you fit set am to 1,000, 10,000, or 50,000 for Settings.
- Tap one pane make you select am before you type.
- Pinch terminal pane to change text size. Mobile SSH go resize di remote PTY after di gesture settle.
- Double-tap one pane (or use im expand control) to enter fullscreen mode. Use Back on Android, or di collapse control on iOS, to return to di grid.

## Multi-session grid

Mobile SSH fit run up to eight SSH sessions at di same time. Each session dey show as pane for di terminal grid. Tap one pane make you select am, or use **+ Add Session** to start anoda connection.

Di pane header dey name where you dey. For Android e dey show di real working directory of di pane, wey e ask tmux or wey di shell report over OSC 7, and e dey refresh am while di app dey open; for iOS e dey show di title wey di remote set, and e go fall back to `user@host:port`.

Closing one pane dey disconnect dat SSH session. Returning to di start screen dey keep live sessions available through **Active Sessions**.

## Extra key row

Di two platforms dey put row of thirteen terminal key within reach — di ones wey hard or wey no dey for touch keyboard. For Android na strip wey dey for di bottom of di session (and e dey hide imsef wen hardware keyboard dey attached); for iOS e dey ride on top di software keyboard.

Di two default sets get di same size but dem no be di same:

| | Android | iOS |
|---|---|---|
| Default dem | `ESC` `TAB` `CTRL` arrow dem `HOME` `PGUP` `END` `PGDN` `⌫` `⌨` | `ESC` `TAB` `CTRL` `⇧` arrow dem `HOME` `END` `PGUP` `PGDN` `⌨` |
| Wetin different | e get backspace, but Shift no dey | e get sticky Shift, but backspace no dey |

**Di row no dey scroll at all.** Wen di keys no fit enter di width again, dem dey divide di space evenly and wrap go second row; anything wey still remain dey fold enter `⋯` overflow menu. Nothing dey hide behind swipe or clip for di screen edge, and modifier wey you don arm still dey apply to key wey you pick from di overflow.

`CTRL` dey act as sticky modifier: tap `CTRL`, then type `C` to send Ctrl-C. `Shift` sticky pass for iOS than for Android — for iOS e dey also make di next character wey you type for di software keyboard capital, while for Android e dey apply only to di bar own keys (`Shift`+`Tab`, `Shift`+arrows).

If you hold key like arrow or `PGDN`, e dey repeat.

## Keyboard behavior

Di terminal dey use native pass-through connection to di on-screen keyboard: every character dey go di remote shell as you dey type, wit autocorrect and predictive suggestions off so di keyboard no go rewrite input before e reach di shell. Dis dey keep Vim, tmux, htop, less, shells wit strange key chords, and remote password prompts predictable — no suggestion buffer dey to disable.

- **Tap terminal to show keyboard:** wen e dey enabled, tapping di terminal dey ask di system to show di on-screen keyboard.

Soft-keyboard voice dictation still dey work: di dictated text dey commit straight to di shell like any other typed input.

## Hardware keyboards

External and Bluetooth keyboards dey drive di terminal directly for both Android and iOS. Pass ordinary characters, Mobile SSH dey map arrow keys, `Home`/`End`, `PgUp`/`PgDn`, `Insert`, `Delete`, `Esc`, function keys `F1`–`F12`, `Ctrl`+key and `Alt`/`Option`-as-Meta chords, and `Shift`+`Tab`. Modifier keys dey combine wit di extra key row sticky modifiers.

## Paste

Wen you paste enter program wey request am (bash, Vim, and other bracketed-paste apps), e dey wrap inside bracketed-paste markers, so multi-line clipboard content dey enter as text instead of make e run line by line by itself. Na only real paste dem dey wrap; typed and dictated text no dey touched.

## Select, copy, share

Long-press inside di terminal to select di word wey dey under your finger, then drag di handles to adjust am. Di selection toolbar dey offer three actions:

- **Copy** -- put di selected text for di system clipboard. Di selection dey stay highlighted afterward, so you fit share am, re-copy, or extend am.
- **Share** -- pass di selected text to di system share sheet (mail, notes, messaging, etc.).
- **Select all** -- expand di selection to di full visible terminal buffer, then Copy or Share.

## Find for di terminal

Search di whole terminal buffer — scrollback and di visible screen — and jump between di matches. Open search from di terminal controls, type wetin you dey find, and step through di hits. Dis one dey work for both Android and iOS.

## Color, italics, and remote clipboard

- Di terminal dey render **24-bit true color** and **italics**, so themed prompts, syntax highlighting, and TUIs go look di way dem dey for desktop.
- **OSC 52 clipboard:** wen remote program copy text (tmux `set-clipboard`, Vim/Neovim OSC 52 yank), e dey land for your phone clipboard — so you fit copy from di server and paste am enter local app.
- For both Android and iOS, wide CJK, emoji, and combining characters (grapheme clusters and zero-width joiners) dey measured and drawn correctly, and bundled **Nerd Font** dey draw powerline, starship, devicon, and Material Design icon glyphs wey di system font for don show as empty boxes.

## Shell integration and inline images

- **Shell integration (OSC 133):** wen your shell dey emit OSC 133 prompt markers, Mobile SSH fit step between prompts and alert you wen long-running command finish. E dey work for Android and iOS. Neither app dey inject di markers — na your shell go emit dem (`PROMPT_COMMAND`/`precmd` hook, or starship). For Android, prompt navigation dey off until you enable am under **Settings → Shell integration**; for iOS di menu dey show by imsef once marks begin land.
- **Select output:** touch anywhere inside di output of one command and select dat whole block — di build error wey happen 300 lines back, no be just di last command — then copy, share, or extend am.
- **Inline images:** programs wey dey use di Kitty graphics protocol dey draw images straight for di terminal, for Android and iOS. Di images dey survive pinch-zoom and re-wrap: dem dey measure dem for cells and dem dey follow dia line, instead of make dem drop and leave gap. Na main-screen feature, and e dey clear wen full-screen TUI take over.
- **Mosaic glyphs (Android):** block, braille, sextant, and octant characters na di app imsef dey draw dem instead of asking font for dem, so `chafa`, `timg`, and ANSI art dey tile di grid exact — no seam, no empty box, no matter di font wey you pick.
- **Real working directory (Android):** di pane header dey show where di pane really dey, wey e ask tmux or wey di shell report over OSC 7, instead of whatever di last prompt just print.

## Appearance and keys

For both Android and iOS, Settings dey let you tailor di terminal:

- **Font:** choose di system monospace font, JetBrains Mono, or Source Code Pro.
- **Color scheme:** Default, Solarized Dark or Light, Gruvbox, Dracula, or Nord — dem dey apply live to open panes.
- **Extra key row:** add, remove, reorder, and hide keys, define your own escape-sequence keys, and reset to defaults, wit live preview wey dey show di exact row split wey you go get. Android put dis one for **Keys** tab; iOS put am under **Extra keys → Customize keys**.
- **Add from presets:** palette of about 45 key for six group — `F1`–`F12`, Ctrl combination like `^C` `^D` `^Z` `^R` `^L`, symbol like `|` `~` `/` `_` `:`, and modifiers. Dem dey send `F1`–`F12` as ordinary escape sequence, so dem no need `FN` chord. Android also get 📎 **Attach a file** key wey dey open di file picker and upload enter di live session; iOS get `INS`, `DEL`, and `FN` key wey dey reveal digit row.
- **Scrollback size:** 1,000, 5,000, 10,000, or 50,000 lines (5,000 na di default). E dey apply to new panes.
- **Text size:** slider, along wit pinch-to-zoom.
- **Theme:** System, Light, or Dark for di whole app.

Reset dey restore di defaults wey di app ship wit instead of freezing today list, so improvement wey later release bring go still reach you. Any edit dey apply live to panes wey don already open.

## Scrolling

Mobile SSH dey route scroll gestures based on terminal state:

- For normal shell output, swiping dey scroll di local scrollback buffer.
- For mouse-mode terminal apps, scrolling dey send mouse-wheel escape sequences.
- For alternate-screen apps without mouse mode, like plenty tmux sessions, scrolling dey enter tmux copy mode and send line scroll commands.

For Android, tap wey you do inside program wey dey track mouse dey deliver as left click for dat cell, so htop, vim, and click-to-focus panes dey answer touch. For iOS, tap inside di same program dey raise di keyboard instead of click; na only wheel scrolling e dey report.

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

## Tmux manager

Mobile SSH get tmux manager so you fit browse and control tmux witout typing prefix chords. Open am wit di **Tmux** button from connected session. E dey list three section:

- **Sessions** -- every tmux session wey dey di server.
- **Windows** -- windows wey dey inside di session wey you select.
- **Panes** -- panes wey dey inside di window wey you select.

From di manager you fit:

- **Attach** one session to di current terminal.
- **Create** new session or window, and **rename** dem.
- **Split** pane horizontal or vertical, **zoom** pane, and **kill** session, window, or pane.
- **Sort** sessions by name or creation date.

🔔 dey mark any session wey im agent dey wait for input, so you fit spot Claude Code or Codex wey pause wit one eye and attach to am. Dis one dey complement di reattach hints on top: di reattach logic dey restore your last session automatic wen you reconnect, while di manager dey give you full manual control.

Di two platforms fit also manage pass one tmux server (socket) for di same host, and sort sessions by name or creation date.

## Herdr and Zellij (Android)

Android ship di same idea for two oda multiplexer. Each one get im own toolbar icon, and **di icon dey show only wen di app don actually find dat program for di server** — so di toolbar dey tell you wetin dey installed dia witout you running `which`.

- **Herdr** get im own vocabulary: sessions, workspaces, tabs, panes. Each pane dey show im agent status — working, needs you, idle — and you fit answer agent wey block straight from di list. Herdr own status dey feed di app agent badge, so dis one dey work even wen no hook dey installed for di server.
- **Zellij** dey list sessions, tabs, and panes wit attach, rename, kill, and split. Session wey dem kill still dey listed so attach dey resurrect am, while delete dey forget am for good. Tab and pane detail need Zellij 0.44 or newer; for older version di page dey show tab name and talk why. Split need client wey attach to di session, and di page dey explain dat instead of offering button wey go fail.

If herdr or Zellij dey installed but e no dey di login shell `PATH`, di page go offer to add am.

Each saved server get **Attach on connect** setting: **Auto (detect)**, **Nothing**, **tmux**, **herdr**, or **Zellij**. Auto dey pick whichever one you last use for dat server, then whichever one get live session, then whichever one dey installed — and e go attach to nothing instead of guessing wen e never probe di server.

Di iOS app na tmux only for now.

## Agent alerts

Mobile SSH dey tell you wen remote AI coding agent — Claude Code, Codex, Gemini — block dey wait for you. E no dey guess by reading your terminal output. Two road dey, and dem dey work for different level of detail.

### Di bell

Out of di box, terminal bell from session wey you no dey watch dey raise alert, and di desktop-notification escape sequences (OSC 9, OSC 777) wey plenty tool dey already emit dey do di same. Bell wey land immediately after you type dey ignored, so ordinary shell completion noise no go page you.

Dis one no need any setup, but di app only sabi say *something* ring.

### Di agent hook

For di app to sabi *which* agent dey wait and *wetin* e dey do, install di agent hook for di server:

- **iOS:** Settings → **Agent alerts** → **Install Agent Hook**. If pass one server dey connected, e go ask you which one.
- **Android:** long-press di pane header of one session and choose **Install agent hooks**.

Dis one dey write small shell script go `~/.mobile-ssh/agent-hook.sh` for dat server. E no tie to any agent — e dey take command-line argument instead of parsing one vendor own format — so anything wey fit run command fit report through am. If you delete di file, na clean uninstall.

Once agent report through di hook:

- Di pane header go read `claude · needs you`, or e go name di tool wey e dey run.
- Pane wey im agent block dey get amber border. Di pane wey you dey look already dem no dey touch am — di prompt dey right dia.
- Badge for di toolbar dey count di agents wey dey wait across every connection, and e dey cap for `9+`.
- Di **Agents** screen dey list every agent for every connection, wit wetin e dey do and how long e don dey wait.

### Answer witout typing

Wen agent ask question wey get fixed set of answer, di app dey show button for each option — up to six — inside di Agents list. For Android you fit also tap di agent chip for pane header.

Dem no dey type your answer inside di session. Dem dey write am go file over separate channel and di hook dey pick am, so reply no fit spoil wetin dey for screen. Di app dey refuse to send option wey di prompt no actually offer, and e dey tell you plain if di connection don drop, instead of failing quietly.

### Settings

Alerts dey on by default for di two platforms, wit separate switch for di notification, sound, vibration, and whether di session wey you dey look right now suppose alert too.

One default dey wey e good make you sabi: **sound dey limited to headphones**. If nothing plug or pair, alert go notify and vibrate but e no go play any tone. Off dat one if you want make di alert loud for di phone speaker.

No sensitivity setting dey and no sound picker dey — na on/off di controls be.

## Full-screen terminal programs

For programs like Vim, less, htop, ncurses tools, and tmux panes:

- Input dey pass straight to di program — no autocorrect or suggestion buffer dey to disturb.
- Use di extra key row for `ESC`, arrows, `PGUP`, and `PGDN`.
- Use pinch zoom if text too small, then wait small make di remote terminal size settle.
