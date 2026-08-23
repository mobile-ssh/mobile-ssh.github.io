import type { LaptopsPost } from "./types";

// English source of truth for /blog/laptops-are-dead/.
// Line breaks inside the prose strings are cosmetic (HTML collapses them);
// the inline markup is not — keep <strong>, <em>, <code>, <a>, &nbsp; and the
// curly quotes exactly as they are.

export const en: LaptopsPost = {
  metaTitle: "Laptops are dead, but SSH and TCP/IP survived | Mobile SSH",
  metaDescription:
    "An affectionate eulogy for the laptop (1981–2026). TCP/IP was designed in 1974 and SSH written in 1995; both outlived the hardware and carried on into the device already in your hand. The case for Mobile SSH — the SSH, SFTP and terminal client for Android, iPhone and iPad. Free, native and open source.",

  back: "Blog",
  eyebrow: "Opinion",
  titleLead: "Laptops are dead.",
  titleSoft: "Long live your pocket.",
  standfirst: `<b>But SSH and TCP/IP survived.</b> An affectionate eulogy for a heavy, warm-bellied friend —
and the case for the terminal that quietly moved into the device already in your hand.`,
  author: "The Mobile SSH Editorial Board",
  date: "July 27, 2026",
  readingTime: "7 min read",

  leadFigure: {
    terminal: {
      title: "ssh · prod-01 · tmux",
      prompt: "you@prod-01",
      path: "~/app",
      command: `claude "fix the failing test"`,
      reading: "reading src/api/auth.ts",
      patching: "patching token refresh …",
      result: "3 files changed, tests green",
      needsInput: "agent needs input",
      push: "git push origin main"
    },
    toast: {
      title: "Agent Alerts",
      host: "prod-01",
      body: "Claude Code is waiting for your review"
    },
    caption:
      "Exhibit A: a real SSH session, a coding agent, and an Agent Alert — running on the thing in your pocket, no charger in sight."
  },

  body: [
    {
      kind: "lead",
      html: `The Laptop — beloved companion to developers, writers and travelers the world over — passed
peacefully this week at the age of 45, in a café, with 6% battery and no charger in sight. It was
surrounded, as ever, by tabs it had promised to read.`
    },
    {
      kind: "p",
      html: `There was no drama. It simply dimmed, sighed once through the fan, and asked — for the last time,
at the worst possible moment — whether now might be a good time to install an update.`
    },
    {
      kind: "pull",
      html: `“It demanded a firmware restart at precisely the moment you finally had an idea. It always did.”`
    },
    { kind: "h2", html: `A heavy life, faithfully carried` },
    {
      kind: "p",
      html: `Born in 1981 to the Osborne&nbsp;1 — eleven kilograms of luggable ambition, no battery, a five-inch
screen — the Laptop spent forty-five years getting lighter and never quite getting light. It died at
about a kilo and a half, which its parent would have considered witchcraft. We remember the keyboard.
The warm underside. The whirring fans that announced every act of thinking. The bag that was always a
little too full, the charger brick the size of a small novel, and the search — eternal, hopeful — for a
free wall socket near the window.`
    },
    {
      kind: "p",
      html: `It asked a lot of us, and we carried it anyway, from desk to gate to seat 24B, because for a long time
it was the only thing that could hold a real terminal. That is no longer true.`
    },
    { kind: "h2", html: `Survived by its elders` },
    {
      kind: "p",
      html: `The Laptop leaves no children. The successors it was promised — the tablet, the Chromebook, the thing
with the detachable keyboard — arrived, took a seat at the back, and turned out to be laptops with
fewer ports. It is survived
instead by two relatives who were already working when it was born, and who were working this morning.`
    },
    {
      kind: "p",
      html: `<strong>TCP/IP</strong> is the elder. Vint Cerf, Bob Kahn and a long cast of collaborators published
the design in May 1974; RFC&nbsp;675 spelled it out that December and coined the word “internet” along
the way. The ARPANET began crossing over to it on 1 January 1983 and had finished by that June — by
which point the Laptop was a toddler with a floppy drive.`
    },
    {
      kind: "p",
      html: `<strong>SSH</strong> is the nephew, thirty-one years old and the youngest of the pallbearers. Tatu
Ylönen wrote it at Helsinki University of Technology in the spring of 1995, after a sniffer on the
university network quietly collected thousands of passwords. He released <code>ssh-1.0.0</code> that
July, and he chose port 22 himself: the one free number between FTP on 21 and telnet on 23, on the
theory that sitting between the two protocols he intended to replace “might be one of those small
things that would give some aura of credibility.” He asked IANA on the Monday. They said yes on the
Tuesday. He shipped on the Wednesday.`
    },
    { kind: "ledger" },
    { kind: "h2", html: `What the protocols never assumed` },
    {
      kind: "p",
      html: `Their longevity is not mysterious. They lasted because they assumed almost nothing. TCP assumes
packets, some of which will be lost, duplicated, or turn up in the wrong order. SSH assumes a reliable
byte stream and a keypair. Absent from both lists: screen size, keyboard layout, chassis, hinge, wall
socket, and a vendor still in business.`
    },
    {
      kind: "p",
      html: `SSH does not even assume how large your terminal is. It asks — and it will accept a different answer
later. That was a courtesy invented for people dragging the corner of a desktop window. It is also the
reason rotating a phone does not end a session.`
    },
    {
      kind: "pull",
      html: `“Hardware is a body. A protocol is a habit. Only one of them can be dropped down a stairwell.”`
    },
    {
      kind: "p",
      html: `Everything bound to a chassis went first, and none of it died of bad engineering. The floppy drive, the
PC Card slot, the dock connector — each was well made for a set of conditions, and the conditions were
the mortal part. A protocol is not even bound to its owner. When the license on Ylönen’s later releases
tightened, the OpenBSD project went back to <code>ssh 1.2.12</code>, the last version free enough to
reuse, and shipped OpenSSH with OpenBSD&nbsp;2.6 on 1 December 1999. The protocol carried on regardless.
It had never belonged to anyone in particular, which is precisely why it is still here.`
    },
    { kind: "h2", html: `The one assumption that had to be patched` },
    {
      kind: "p",
      html: `Honesty compels a correction. TCP did make one assumption, and it was wrong: it assumed the machine
stays put. A connection is named by four numbers — two addresses, two ports — which was a perfectly
sensible way to name a thing in 1981, when the thing was bolted to a room with a raised floor. Walk out
of a café holding a phone and one of those four numbers quietly becomes a lie.`
    },
    {
      kind: "p",
      html: `There was no second funeral. The protocol was kept and the assumption was patched around it. The work
moved to the far end, out of reach of a client walking through a door: <code>screen</code>, then
<code>tmux</code>, holding the shell open while the terminal comes and goes. Eternal Terminal went
further and named the session rather than the address, so the session survives the address changing
underneath it.`
    },
    {
      kind: "pull",
      html: `“Your servers were never loyal to the laptop. They were loyal to the port.”`
    },
    {
      kind: "p",
      html: `None of that was invented for phones. It was inherited by them. A client that carries an Eternal
Terminal transport, a tmux manager, keepalives with exponential-backoff reconnect and several addresses
per saved server can be walked out of a building mid-command and pick the thread back up on the
pavement. The far end is told your client’s version string and the size of your terminal. It is never
told whether there is a hinge.`
    },
    { kind: "h2", html: `The work quietly moved into a pocket` },
    {
      kind: "p",
      html: `In its final years the Laptop grew anxious about its relevance. It had reason to be. The work it once
claimed as its own — a real terminal, real file transfer, real keys, real tunnels — had quietly slipped
into the device already in your hand.`
    },
    {
      kind: "p",
      html: `That device runs <strong>Mobile SSH</strong>: a native SSH, SFTP and terminal client for Android, iPhone
and iPad. Not a toy shell. Not a remote desktop pretending to be one. A full
<span class="nowrap">xterm-256color</span> terminal — the real thing — that fits in the space the
Laptop’s charger used to occupy.`
    },
    {
      kind: "pull",
      html: `“The work it once called its own moved into a pocket — and never once asked for an outlet.”`
    },
    { kind: "h2", html: `Survived by: your phone — and Mobile SSH` },
    {
      kind: "p",
      html: `The estate, itemized. In lieu of flowers, the family asks only that you read the eulogy below and note
that every line of it is real software you can install today.`
    },
    { kind: "estate" },
    {
      kind: "pull",
      html: `“‘Laptops are dead’ is a eulogy, not a coroner’s report. Laptops remain welcome at the wake.”`
    },
    {
      kind: "p",
      html: `We say this with love. The Laptop served honorably, and it is welcome at the wake — propped open on a
side table, fan spinning gently, plugged in at last. But the day’s work has packed lighter and left the
building. It fits in a pocket now. It answers on the first ring.`
    },
    {
      kind: "p",
      html: `SSH and TCP/IP sent no flowers. They were working.`
    }
  ],

  ledger: {
    entries: [
      {
        year: "1974",
        event: "Cerf, Kahn and colleagues publish the design that becomes TCP/IP",
        status: "still running",
        on: true
      },
      {
        year: "1978",
        event: "DEC ships the VT100, its first ANSI-compatible terminal",
        status: "sequences still in use",
        on: true
      },
      {
        year: "1981",
        event: "The Osborne&nbsp;1 goes on sale: 11&nbsp;kg, $1,795, mains power only",
        status: "discontinued 1983",
        on: false
      },
      {
        year: "1983",
        event: "The ARPANET finishes crossing from NCP to TCP/IP",
        status: "still running",
        on: true
      },
      {
        year: "1995",
        event: "SSH is written in Helsinki; IANA grants port 22 on 11 July",
        status: "still running",
        on: true
      },
      {
        year: "2026",
        event: "The Laptop, aged 45, in a café, at 6% and no charger",
        status: "survived by the above",
        on: false
      }
    ],
    caption: "Order of precedence, as read at the service. The oldest mourner is fifty-two."
  },

  estate: [
    {
      heading: "A real terminal, in your pocket",
      body: "Full <code>xterm-256color</code> emulation, up to eight concurrent sessions in a resizable grid, a built-in tmux session manager, and Eternal Terminal for connections that survive network drops, sleep and IP changes."
    },
    {
      heading: "Files and tunnels, built in",
      body: "A dual-pane SFTP browser for moving files between phone and server, with local port forwards and tunnels saved right alongside each host — up automatically when you connect."
    },
    {
      heading: "Keys generated on the device",
      body: "On-device SSH key generation — Ed25519 and ECDSA — with password or private-key authentication. Nothing leaves the phone."
    },
    {
      heading: "Coding agents, with Agent Alerts",
      body: "Run Claude Code, Codex and other agents on your <em>own</em> servers, straight from your phone. Agent Alerts fire a push notification — sound and vibration — the moment an agent needs your input, so you can step away and stay in the loop."
    },
    {
      heading: "Dressed for the occasion",
      body: "Configurable fonts and color schemes, Nerd Font powerline and icon glyphs, and a plugin system to extend it further — tune the terminal until it feels like yours."
    },
    {
      heading: "Genuinely free, honestly",
      body: "No ads. No Pro paywall. No account required. Your data stays on the device, and the whole thing is open source under the Apache-2.0 license."
    }
  ],

  cta: {
    ariaLabel: "Get Mobile SSH",
    heading: "In lieu of flowers, close a few tabs.",
    body: "Install Mobile SSH, give your laptop the rest it has earned, and carry a real terminal in your pocket — free, native, and open source.",
    tags: ["No ads", "No account", "On-device data", "Apache-2.0"],
    playButton: "Opt in on Google Play",
    iosButton: "Join the iOS beta",
    note: `Android is in closed testing: opt in with the Google account you’ll test with, and open the
opt-in link in your mobile browser — the closed test may not be visible inside the Google Play
app. Already opted in? Go straight to the <a href="{playUrl}" rel="noopener">Play listing</a>.`
  }
};
