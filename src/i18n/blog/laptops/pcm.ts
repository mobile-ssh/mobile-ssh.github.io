import type { LaptopsPost } from "./types";

// Nigerian Pidgin (pcm) translation of /blog/laptops-are-dead/.
// Same shape as en.ts: same keys, same block order, same array lengths.
// Inline markup, HTML entities and the {playUrl} placeholder are kept verbatim.

export const pcm: LaptopsPost = {
  metaTitle: "Laptop don die, but SSH and TCP/IP survive | Mobile SSH",
  metaDescription:
    "Tribute wey we write wit love for di laptop (1981–2026). Dem design TCP/IP for 1974 and dem write SSH for 1995; di two of dem outlive di hardware and carry di work enter di device wey dey your hand already. Why Mobile SSH make sense — di SSH, SFTP and terminal client for Android, iPhone and iPad. E free, e native, and e open source.",

  back: "Blog",
  eyebrow: "Our talk",
  titleLead: "Laptop don die.",
  titleSoft: "Na your pocket dey reign now.",
  standfirst: `<b>But SSH and TCP/IP no die.</b> Tribute wey we write wit love for one heavy padi wey im belle dey warm —
and why di terminal wey quietly pack enter di device wey dey your hand na di correct thing now.`,
  author: "Di Mobile SSH Editorial Board",
  date: "27 July, 2026",
  readingTime: "7 min to read",

  leadFigure: {
    terminal: {
      title: "ssh · prod-01 · tmux",
      prompt: "you@prod-01",
      path: "~/app",
      command: `claude "fix the failing test"`,
      reading: "dey read src/api/auth.ts",
      patching: "dey patch token refresh …",
      result: "3 files change, tests green",
      needsInput: "agent need your input",
      push: "git push origin main"
    },
    toast: {
      title: "Agent Alerts",
      host: "prod-01",
      body: "Claude Code dey wait make you review am"
    },
    caption:
      "Exhibit A: real SSH session, coding agent, and Agent Alert — everything dey run for di thing wey dey your pocket, no charger anywhere near."
  },

  body: [
    {
      kind: "lead",
      html: `Di Laptop — padi wey developers, writers and travelers all over di world love well well — don
go rest quietly dis week wen e reach 45 years, for one café, wit 6% battery and no charger anywhere near.
As e dey always be, na di tabs wey e promise say e go read surround am for im last moment.`
    },
    {
      kind: "p",
      html: `No wahala happen. E just dim, e sigh one time through di fan, and e ask — for di last time, and
na di worst moment — whether now go be better time to install update.`
    },
    {
      kind: "pull",
      html: `“E go demand firmware restart di exact moment wey idea finally enter your head. Na so e dey always do.”`
    },
    { kind: "h2", html: `Heavy life wey we carry wit loyalty` },
    {
      kind: "p",
      html: `Dem born am for 1981 through di Osborne&nbsp;1 — eleven kilogram of luggage wey get ambition, no
battery, five-inch screen — and for forty-five years di Laptop dey light small small but e never really
light. E die around one kilo and half, wey im papa for call juju. We remember di keyboard. Di belle wey
dey warm under. Di fans wey dey whirr to announce every single tinking wey e do. Di bag wey full small
pass wetin e suppose be, di charger brick wey big like small novel, and di search — wey no dey end, wey
hope no dey finish — for free wall socket near window.`
    },
    {
      kind: "p",
      html: `E ask us plenty, and we still carry am all di same, from desk go boarding gate go seat 24B, because
for long time na only am fit hold real terminal. Dat one no be true again.`
    },
    { kind: "h2", html: `Na im elders survive am` },
    {
      kind: "p",
      html: `Di Laptop no born any pikin. Di successors wey dem promise am — di tablet, di Chromebook, di thing
wey im keyboard fit comot — come, sidon for back, and dem turn out to be laptop wey get fewer port. Na
two relatives wey don dey work before dem born am, and wey still dey work dis morning, survive am.`
    },
    {
      kind: "p",
      html: `<strong>TCP/IP</strong> na di elder. Vint Cerf, Bob Kahn and plenty odda collaborators publish di
design for May 1974; RFC&nbsp;675 spell am out well well dat December and na for dia di word “internet”
first comot. Di ARPANET start to cross go meet am for 1 January 1983 and e finish by dat June — di time
wey di Laptop still be small pikin wey get floppy drive.`
    },
    {
      kind: "p",
      html: `<strong>SSH</strong> na di nephew, thirty-one years old and di last-born among di people wey carry
di casket. Tatu Ylönen write am for Helsinki University of Technology for spring 1995, afta one sniffer
for di university network quietly gada thousands of password. E release <code>ssh-1.0.0</code> dat July,
and na imsef choose port 22: di only free number wey dey between FTP for 21 and telnet for 23, because e
tink say to sidon between di two protocols wey e wan replace “fit be one of dose small tins wey go give
am small aura of credibility.” E ask IANA for Monday. Dem talk yes for Tuesday. E ship am for Wednesday.`
    },
    { kind: "ledger" },
    { kind: "h2", html: `Wetin di protocols never assume` },
    {
      kind: "p",
      html: `How dem take last no be mystery. Dem last because dem assume almost nothing. TCP assume packets,
and some go loss, some go double, some go land for wrong order. SSH assume byte stream wey you fit trust,
plus keypair. Wetin no dey di two lists: screen size, keyboard layout, chassis, hinge, wall socket, and
vendor wey still dey business.`
    },
    {
      kind: "p",
      html: `SSH no even assume how big your terminal be. E dey ask — and e go accept different answer later.
Dat courtesy na for people wey dey drag di corner of desktop window dem invent am. Na di same reason wey
make say if you turn your phone di session no dey die.`
    },
    {
      kind: "pull",
      html: `“Hardware na body. Protocol na habit. Na only one of dem you fit throw comot for staircase.”`
    },
    {
      kind: "p",
      html: `Everything wey tie to chassis waka first, and no be bad engineering kill any of dem. Di floppy
drive, di PC Card slot, di dock connector — dem build each one well for one set of conditions, and na di
conditions be di part wey dey die. Protocol no even tie to im owner. Wen di license for Ylönen im later
releases tight, di OpenBSD project go back to <code>ssh 1.2.12</code>, di last version wey free enough
make dem reuse, and dem ship OpenSSH wit OpenBSD&nbsp;2.6 for 1 December 1999. Di protocol just carry on
like say nothing happen. E never belong to any particular person, and na exactly why e still dey here.`
    },
    { kind: "h2", html: `Di one assumption wey dem must patch` },
    {
      kind: "p",
      html: `Make we talk true small. TCP make one assumption, and e wrong: e assume say di machine no go move.
Dem dey name connection wit four numbers — two address, two port — wey be sensible way to name thing for
1981, wen di thing bolt for room wey get raised floor. Waka comot for café wit phone for hand and one of
dose four numbers go quietly turn lie.`
    },
    {
      kind: "p",
      html: `Second funeral no happen. Dem keep di protocol and dem patch di assumption around am. Di work move
go di far end, where client wey dey waka pass door no fit touch am: <code>screen</code>, den
<code>tmux</code>, dey hold di shell open while di terminal dey come and dey go. Eternal Terminal go
further — e name di session instead of di address, so di session dey survive even wen di address change
under am.`
    },
    {
      kind: "pull",
      html: `“Your servers never dey loyal to di laptop. Na di port dem dey loyal to.”`
    },
    {
      kind: "p",
      html: `Dem no invent any of dat one for phone. Na phone inherit am. Client wey carry Eternal Terminal
transport, tmux manager, keepalives wit exponential-backoff reconnect and plenty address for one saved
server fit comot from inside building wen command still dey run, and e go pick di same thread back for
road. Dem dey tell di far end your client im version string and di size of your terminal. Dem never tell
am whether hinge dey.`
    },
    { kind: "h2", html: `Di work quietly pack enter pocket` },
    {
      kind: "p",
      html: `For im last years, di Laptop start to fear whether e still relevant. E get reason to fear. Di work
wey e once call im own — real terminal, real file transfer, real keys, real tunnels — don quietly slip
enter di device wey dey your hand already.`
    },
    {
      kind: "p",
      html: `Dat device dey run <strong>Mobile SSH</strong>: native SSH, SFTP and terminal client for Android,
iPhone and iPad. No be toy shell. No be remote desktop wey dey form terminal. Na full
<span class="nowrap">xterm-256color</span> terminal — di real thing — wey dey fit inside di space wey di
Laptop im charger dey take before.`
    },
    {
      kind: "pull",
      html: `“Di work wey e once call im own don pack enter pocket — and e never ask for socket even once.”`
    },
    { kind: "h2", html: `Wetin survive am: your phone — and Mobile SSH` },
    {
      kind: "p",
      html: `Di estate, one by one. Instead of wreath, di family dey beg say make you read di tribute wey dey
below and note say every line of am na real software wey you fit install today.`
    },
    { kind: "estate" },
    {
      kind: "pull",
      html: `“‘Laptop don die’ na tribute, no be doctor im report. Laptop still welcome for di wake-keep.”`
    },
    {
      kind: "p",
      html: `We dey talk dis one wit love. Di Laptop serve well well, and e welcome for di wake-keep — dem go
prop am open for side table, fan dey turn softly, and at last e dey plugged in. But di work of today don
pack light and don comot for di building. E dey fit inside pocket now. E dey answer di first time wey you
ring.`
    },
    {
      kind: "p",
      html: `SSH and TCP/IP no send any flower. Dem dey work.`
    }
  ],

  ledger: {
    entries: [
      {
        year: "1974",
        event: "Cerf, Kahn and dia colleagues publish di design wey come turn TCP/IP",
        status: "e still dey run",
        on: true
      },
      {
        year: "1978",
        event: "DEC ship di VT100, dia first terminal wey follow ANSI",
        status: "dem still dey use di sequences",
        on: true
      },
      {
        year: "1981",
        event: "Di Osborne&nbsp;1 enter market: 11&nbsp;kg, $1,795, na only wall socket power",
        status: "dem stop am for 1983",
        on: false
      },
      {
        year: "1983",
        event: "ARPANET finish di crossing from NCP go TCP/IP",
        status: "e still dey run",
        on: true
      },
      {
        year: "1995",
        event: "Dem write SSH for Helsinki; IANA give port 22 for 11 July",
        status: "e still dey run",
        on: true
      },
      {
        year: "2026",
        event: "Di Laptop, 45 years, for café, 6% battery and no charger",
        status: "di ones for up survive am",
        on: false
      }
    ],
    caption: "Order of service, as dem read am for di ceremony. Di oldest mourner na fifty-two years."
  },

  estate: [
    {
      heading: "Real terminal, inside your pocket",
      body: "Full <code>xterm-256color</code> emulation, up to eight session at di same time for grid wey you fit resize, tmux session manager wey dey inside, and Eternal Terminal for connection wey dey survive network drop, sleep and IP change."
    },
    {
      heading: "Files and tunnels, dem dey inside already",
      body: "Dual-pane SFTP browser to move file between phone and server, wit local port forwards and tunnels wey you save right beside each host — dem dey come up automatic wen you connect."
    },
    {
      heading: "Keys wey di device isef make",
      body: "SSH key generation for di device — Ed25519 and ECDSA — wit password or private-key authentication. Nothing dey comot for di phone."
    },
    {
      heading: "Coding agents, wit Agent Alerts",
      body: "Run Claude Code, Codex and odda agents for your <em>own</em> servers, straight from your phone. Agent Alerts go fire push notification — sound and vibration — di moment wey agent need your input, so you fit waka comot and still dey inside di matter."
    },
    {
      heading: "E dress well for di occasion",
      body: "Fonts and color schemes wey you fit configure, Nerd Font powerline and icon glyphs, and plugin system to extend am further — tune di terminal until e go feel like your own."
    },
    {
      heading: "E free for real, no lie",
      body: "No ads. No Pro paywall. No account. Your data dey stay for di device, and di whole thing na open source under di Apache-2.0 license."
    }
  ],

  cta: {
    ariaLabel: "Get Mobile SSH",
    heading: "Instead of wreath, close some tabs.",
    body: "Install Mobile SSH, give your laptop di rest wey e don work for, and carry real terminal for your pocket — e free, e native, and e open source.",
    tags: ["No ads", "No account", "Data dey for di device", "Apache-2.0"],
    playButton: "Opt in for Google Play",
    iosButton: "Join di iOS beta",
    note: `Android dey closed testing: opt in wit di Google account wey you go take test, and open di
opt-in link inside your mobile browser — di closed test fit no show inside di Google Play app. You don
already opt in? Waka straight go di <a href="{playUrl}" rel="noopener">Play listing</a>.`
  }
};
