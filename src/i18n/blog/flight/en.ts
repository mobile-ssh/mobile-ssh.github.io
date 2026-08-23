import type { FlightPost } from "./types";

// English source of truth for "Eleven hours over the Atlantic".
//
// Prose strings are rendered with set:html, so their inline markup and HTML
// entities must survive translation verbatim. The line breaks inside the
// template literals are the ones the page shipped with; keep paragraphs as one
// unit of meaning and translate around the markup, never inside a tag name.

export const en: FlightPost = {
  meta: {
    title: "Eleven hours over the Atlantic | Mobile SSH",
    description:
      "At 35,786 km, light alone costs 477 ms round trip. What actually breaks when you work from a plane, why it is not what you think, and how to spend a long-haul flight shipping instead of rewatching. From Mobile SSH — the SSH, SFTP and terminal client for Android, iPhone and iPad."
  },

  backLabel: "Blog",

  masthead: {
    eyebrow: "Field report",
    boardTitle: "Departures",
    legend: {
      time: "Time",
      flight: "Flight",
      destination: "Destination",
      remarks: "Remarks"
    },
    headline: "Eleven hours over the Atlantic",
    // headlineTranslated is intentionally absent: English reads the flap tiles.
    deck: `Seat 24B is watching a film it has seen three times. Seat 24C is reviewing
      <span class="hl">four servers</span> on the same Wi-Fi. The difference is not the connection —
      it is what each of them put on the other end of it.`,
    byline: [
      { key: "author:", value: "The Mobile SSH Editorial Board" },
      { key: "date:", value: "August 10, 2026" },
      { key: "read:", value: "8 min" },
      { key: "link:", value: "703 ms, GEO" }
    ]
  },

  sections: {
    twoSeats: {
      heading: "Two seats, one satellite",
      intro: [
        `Eleven hours, New York to somewhere east. The cabin lights go amber. Seat 24B opens the
          seat-back screen, scrolls a catalogue of four hundred titles, and selects a film it has
          already seen three times. This is not a criticism. It is the single most reasonable thing
          to do with eleven hours in a pressurised aluminium tube, and most of us have done it.`,
        `Seat 24C takes out a phone.`
      ],
      outro: [
        `Both seats are on the same Wi-Fi. Both are the same distance from the ground. By the time
          the wheels touch down, one of them will have watched a film it could already quote, and the
          other will have merged three branches, cleared a failing test suite and restarted a stuck
          job on a machine four thousand miles away.`,
        `The interesting part is not that this is possible. It is <em>why</em> it is possible — and
          why the obvious approach, the one most people try once and abandon somewhere over
          Greenland, does not work at all.`
      ]
    },

    aboveYou: {
      heading: "What is actually above you",
      intro: [
        `There are two radically different things an airline can mean by "Wi-Fi," and which one is
          bolted to your particular fuselage decides everything that follows.`,
        `The old arrangement is a geostationary satellite, parked at <strong>35,786 km</strong>.
          That altitude is not a design choice anyone made for your benefit; it is the exact distance
          at which an orbit takes twenty-four hours, so the satellite appears to hang still. The
          consequence is arithmetic that no engineering budget can argue with: up and back down,
          twice, is <strong>477 ms of round trip for light itself</strong>, before a single router is
          involved.`,
        `The new arrangement is a low-Earth-orbit constellation at roughly <strong>550 km</strong>
          — about sixty-five times closer, and <strong>7.3 ms</strong> of propagation round trip.`
      ],
      afterDiagram: [
        `Measurements from the air match the physics. Analysis of Ookla's Q1 2025 in-flight speed
          tests found a <strong>median round-trip time of 44 ms on Starlink versus 703–757 ms on
          Hughes, Intelsat and Viasat</strong> — a gap of roughly sixteen times. A separate team,
          instrumenting real devices across <strong>25 flights on 7 airlines</strong> for ACM IMC
          2025, measured the same shape independently: under 40 ms on LEO, above 550 ms on GEO.`
      ],
      afterChart: [
        `For a long-haul ocean crossing the honest number is a little worse than the headline. The
          same research measured a <strong>median of 62 ms over the Pacific, ranging 19–86 ms</strong>.
          That is the figure to carry in your head. It is still excellent. It is not 44.`
      ]
    },

    rollout: {
      heading: "The deflating part",
      intro: [
        `Here is where a blog post on a product site is supposed to tell you the future has arrived.`,
        `It has not arrived evenly, and the aircraft it has reached last is <em>yours</em>.`,
        `Narrowbodies get refitted first — they are numerous, they turn around quickly, and they fly
          short domestic hops where nobody is trying to do eleven hours of anything. The widebodies
          that actually cross oceans are last in the queue. As of mid-2026, United had
          <strong>more than 400 aircraft on Starlink</strong> and expected to approach a thousand by
          year end — but only about <strong>sixty of those were widebodies</strong>, its first
          Starlink widebody transatlantic flight (Newark–Heathrow) operated only in
          <strong>June 2026</strong>, and the full widebody fleet is not due until
          <strong>summer 2027</strong>. Virgin Atlantic had finished its <strong>twelve A350s</strong>
          — around <strong>28% of its widebody fleet</strong> — with 787s scheduled through the second
          half of 2026 and A330neos into 2027.`
      ],
      afterFigure: [
        `So: if you are reading this on an intercontinental flight in 2026, the odds are still
          against you. You are probably on the 700 ms link, not the 62 ms one.`,
        `Which makes the rest of this post more useful, not less.`
      ]
    },

    filmVsShell: {
      heading: "Why the film works and the terminal does not",
      cmdComment: "a whole session to move one character",
      prose: [
        `A film and a shell fail in opposite directions, and in-flight Wi-Fi is precisely the wrong
          network for one of them.`,
        `A film is a <em>bandwidth</em> problem that does not care about latency. It buffers. If the
          first frame arrives 700 ms late, nobody notices, because nothing about the experience
          depends on the film reacting to you. Press play, wait, watch. The round trip happens once.`,
        `An interactive shell is the mirror image. It needs almost no bandwidth — a terminal session
          is measured in kilobits, not megabits — but it pays the round trip <strong>on every single
          keystroke you expect to see echoed back</strong>. At 700 ms, that is not a slow connection.
          That is a conversation with a two-thirds-of-a-second pause after every character.`,
        `This is the thing people get wrong. They see "50 Mbps" on the in-flight portal, conclude
          the connection is fine, open a terminal, and discover that fine has nothing to do with it.
          Bandwidth is not the currency here. <strong>Round trips are.</strong>`
      ]
    },

    whatBreaks: {
      heading: "What actually breaks (it is not typing)",
      intro: [
        `The failure is more specific than "it feels slow," and the research is unusually clear
          about where the pain lands.`,
        `In a controlled study of 31 participants comparing 20 ms against 200 ms of end-to-end input
          latency, <strong>bulk typing barely moved</strong>: 290.9 ms per character versus 302.7, a
          difference the authors could not call significant. Error rates were identical.`
      ],
      afterTable: [
        `But the <em>correction</em> task — repositioning a cursor with arrow keys and fixing text,
          the thing you actually do in an editor — went from <strong>38.9 seconds to 46.5 seconds,
          about 20% slower, with a very large effect size</strong> (p &lt; 0.001, d = 1.673). The
          authors put the mechanism plainly: during navigation, you have to keep waiting for the
          screen, because where the cursor landed determines what you do next.`,
        `Subjective load got worse even where speed did not. On the typing task, where performance
          was statistically unchanged, self-reported <strong>frustration still rose from 20.9 to
          31.3</strong>.`,
        `Translate that to a terminal and it names exactly what falls apart at altitude: not typing
          out a command. It is <code>vim</code> navigation, tab completion, scrolling through
          <code>less</code>, and the poke-and-look rhythm of a REPL. Every one of those is a loop
          where the next thing you do depends on what just came back.`
      ]
    },

    moveTheWork: {
      heading: "Move the work, not the keystrokes",
      intro: [
        `Once you accept that round trips are the scarce resource, the fix stops being "get a faster
          plane" and becomes an architecture question: <strong>take fewer round trips, and make each
          one carry more.</strong>`,
        `There is a well-known tool that attacks this head-on. Mosh predicts what your keystrokes
          will do and echoes them locally before the server confirms. The measured effect is dramatic:
          on a link with roughly half a second of round-trip time, median keystroke response fell from
          <strong>503 ms to under 5 ms</strong>. On a trans-oceanic path from MIT to Singapore,
          <strong>273 ms to under 5 ms</strong>.`,
        `But read the fine print, because it is the whole point. Mosh predicts about
          <strong>70% of keystrokes</strong>. The roughly 30% it cannot predict is, in the authors'
          own word, <em>principally navigation</em> — and for those, its latency profile looks like
          plain SSH again. Which is to say: the one interaction that high latency punishes hardest is
          precisely the one local echo cannot rescue.`
      ],
      chartHeading: "predicted vs not",
      afterChart: [
        `So prediction helps, and it does not save you. The thing that actually saves you is refusing
          to be in the loop that often.`,
        `<strong>Stop typing into the latency. Put long-running work on the far end and check on
          it.</strong> A build, a test suite, a migration, a coding agent — none of these need you
          present for the round trip. They need you present at the beginning and at the decision.
          Everything between is the machine's problem, and the machine is on the ground with a good
          connection.`,
        `That is also why <em>parallelism</em> beats <em>interactivity</em> at altitude. You cannot
          type quickly through 700 ms. You can absolutely supervise four servers at once, because
          supervision is not latency-bound — it is attention-bound, and you have eleven hours of
          attention and nothing else to spend it on.`
      ]
    },

    seat24c: {
      heading: "What seat 24C is actually doing",
      lead: `Concretely, on a phone, on a bad link:`,
      outro: [
        `None of this was invented for aircraft. It is simply what remote work over a hostile link
          has always looked like, and a plane is just an unusually honest hostile link.`
      ]
    },

    caveat: {
      heading: "One honest caveat",
      prose: [
        `Two things we could not verify, and will not pretend to:`,
        `<strong>Whether your airline's network will let SSH out at all.</strong> We found no
          reliable public evidence on port blocking, VPN policy or idle timeouts across airline Wi-Fi
          providers — and plenty of confident forum claims that do not survive checking. It varies by
          carrier, by provider and by aircraft. Test it on a short flight before you plan a long one
          around it.`,
        `<strong>How the cabin actually spends its time.</strong> The most-quoted in-flight
          entertainment statistics turn out to trace back to advertising rate cards with no
          methodology, and we binned them. The best survey evidence we found — Inmarsat/Censuswide,
          11,231 passengers across ten countries, though fielded back in 2022 and asking about intent
          rather than measuring time — has entertainment ahead of work by a wide margin:
          <strong>41% wanted to watch downloaded films and 35% to stream, against 26% who wanted to do
          work.</strong>`,
        `So treat seat 24B as a character, not a statistic. The point was never that watching a film
          is wrong. It is that the alternative is no longer unavailable.`
      ]
    },

    descent: {
      heading: "Descent",
      prose: [
        `The film ends where it ended the last three times. The descent begins. Seat 24B has had a
          perfectly good flight, and will land rested, which is worth something.`,
        `Seat 24C lands with the work done — because the work was never in the seat. It was on a
          machine on the ground the whole time, and the phone was only ever a window onto it.`,
        `Eleven hours is a long time to spend at 700 ms. It is a very short time to spend supervising
          four servers that do not care about the satellite at all.`
      ]
    }
  },

  seat24b: {
    tag: "seat 24b",
    lines: [
      { time: "19:04", verb: "play", text: "— film, 118 min" },
      { time: "21:02", verb: "play", text: "— film, again" },
      { time: "23:10", verb: "idle", text: "— cabin dark" },
      { time: "05:41", verb: "wake", text: "— descent" }
    ]
  },

  seat24c: {
    tag: "seat 24c",
    lines: [
      { time: "19:04", verb: "attach", text: "— 4 sessions, 1 grid" },
      { time: "21:02", verb: "merge", text: "— three branches" },
      { time: "23:10", verb: "green", text: "— failing suite cleared" },
      { time: "05:41", verb: "kick", text: "— stuck job restarted" }
    ]
  },

  quotes: [
    `Same aircraft, same antenna, same bad Wi-Fi. The difference is
        entirely in what you put on the far end of it.`,
    `The plane you are on is the last one they will upgrade. Plan for
        700 ms and be delighted by 62.`,
    `Latency does not tax your typing. It taxes every decision that
        waits on the screen.`
  ],

  orbit: {
    alt: "Diagram: a geostationary satellite at 35,786 km costs 477 ms of light-time round trip; a low-Earth-orbit satellite at 550 km costs 7.3 ms.",
    geoLabel: "GEO 35,786 km",
    geoValue: "477 ms light",
    leoLabel: "LEO 550 km",
    leoValue: "7.3 ms light",
    aircraft: "seat 24C, 11,000 m",
    caption: "Not to scale — nothing that includes 35,786 km ever is."
  },

  latencyChart: {
    rows: [
      { label: "GEO — Hughes / Intelsat / Viasat, median", value: "703 ms" },
      { label: "LEO over the Pacific — long-haul median", value: "62 ms" },
      { label: "LEO — Starlink in-flight, overall median", value: "44 ms" }
    ],
    note: "Bars to a common linear scale. Source 1."
  },

  rolloutFigure: {
    items: [
      {
        name: "United",
        value: "≈60",
        text: `widebodies flying Starlink, out of 400+ aircraft fitted. The rest of the
            widebody fleet is not due until summer 2027.`
      },
      {
        name: "Virgin Atlantic",
        value: "12 of ~43",
        text: `widebodies done — about 28 per cent. 787s run through H2 2026 and
            A330neos into 2027.`
      }
    ],
    note: `Sources 5 and 6. Remaining United widebodies due by summer 2027; Virgin
          787s through H2 2026 and A330neos into 2027.`
  },

  latencyTable: {
    caption: "Schmid et al., MUM '23 — n = 31, 20 ms vs 200 ms input latency",
    head: ["task", "20 ms", "200 ms", "verdict"],
    rows: [
      { task: "typing / char", low: "290.9", high: "302.7", verdict: "n.s." },
      { task: "correction task", low: "38.9 s", high: "46.5 s", verdict: "+20%" },
      { task: "frustration", low: "20.9", high: "31.3", verdict: "p=0.004" }
    ]
  },

  moshChart: {
    rows: [
      { label: "keystrokes mosh echoes instantly", value: "≈70%" },
      { label: "unpredicted — “principally navigation”", value: "≈30%" }
    ],
    note: "Source 4."
  },

  windows: [
    {
      title: "sessions-that-outlive-the-connection",
      body: `The aircraft hands off, the portal re-authenticates, the connection drops.
            <code>tmux</code> keeps the shell running on the server regardless; the session is a thing
            on the far end, not a thing in your hand. Eternal Terminal takes the same idea further and
            lets the session survive the TCP connection itself, buffering and replaying what you
            missed. <span style="color:var(--dim)">(Fair warning for a filtered network: ET needs its
            own port — 2022 by default — <em>in addition</em> to SSH's 22.)</span>`
    },
    {
      title: "more-than-one-problem-at-a-time",
      body: `Several sessions in a grid, several saved servers, each running something that does not
            need supervision between decisions.`
    },
    {
      title: "agents-doing-the-typing",
      body: `Coding agents run on <em>your</em> servers, at ground latency, where the code is. They
            are not paying the satellite tax; you are only paying it when you answer them.`
    },
    {
      title: "push-when-it-matters",
      bellLabel: " (bell)",
      body: `Agent Alerts fire when something actually needs a human — so the flight is spent reviewing
            and deciding, not staring at a prompt waiting for an echo.`
    }
  ],

  cta: {
    cmdComment: "free · open source · Apache-2.0",
    heading: "Your next long-haul is eleven hours of server time.",
    prose: [
      `Mobile SSH is a native SSH, SFTP and terminal client for Android, iPhone and iPad. Multiple
          sessions, a built-in tmux manager, Eternal Terminal, and push alerts when an agent needs you.
          Free, no account, no ads, open source.`
    ],
    tags: ["No ads", "No account", "On-device data", "Apache-2.0"],
    playButton: "Opt in on Google Play",
    iosButton: "Join the iOS beta",
    note: `Android is in closed testing — opt in with the Google account you'll test
      with, and open the link in your mobile browser; the closed test may not be visible inside the
      Google Play app.`
  },

  sources: {
    heading: "Sources",
    items: [
      `Ookla Q1 2025 in-flight data, analysed in <em>A First Look at Starlink In-Flight Performance</em> — arXiv:2508.09839, peer-reviewed at IEEE Xplore doc 11353148. (44 ms vs 703–757 ms; 62 ms Pacific median, 19–86 ms range.)`,
      `<em>From GEO to LEO: First Look Into Starlink In-Flight Connectivity</em>, ACM IMC 2025 — Jang, Varvello, Raman, Zaki. 25 flights, 7 airlines. (&lt;40 ms LEO vs 550 ms+ GEO.)`,
      `Schmid et al., MUM '23, <em>Effects of Text Input Latency</em> — n=31, 20 ms vs 200 ms. (290.9 vs 302.7 ms/char, n.s.; correction 38.9 s → 46.5 s, p&lt;0.001, d=1.673; frustration 20.9 → 31.3, p=0.004.)`,
      `Winstein &amp; Balakrishnan, <em>Mosh: An Interactive Remote Shell for Mobile Clients</em>, USENIX ATC 2012. (503 ms → &lt;5 ms; 273 ms → &lt;5 ms; ~70% of keystrokes predicted; unpredicted remainder "principally navigation".)`,
      `United Airlines newsroom, 22 June 2026, <em>United Accelerates Starlink Wi-Fi Rollout with First Widebody Transatlantic Flight</em>. (400+ aircraft; ~60 widebodies; full widebody fleet summer 2027.)`,
      `Virgin Atlantic press release, 12 April 2026. (A350s complete; 787s H2 2026; A330neos 2027.)`,
      `Eternal Terminal documentation — eternalterminal.dev/howitworks, github.com/MisterTea/EternalTerminal. (Buffer-and-replay; default port 2022 in addition to SSH.)`,
      `Inmarsat/Censuswide Passenger Experience Survey 2022, n=11,231 across 10 countries. (Downloaded films 41%, streaming 35%, work 26% — stated intent, multi-select, fielded 2022.)`
    ],
    quitHint: "— press q to quit"
  },

  colophon: [
    "Mobile SSH — free, open-source SSH / SFTP / terminal for Android, iPhone and iPad.",
    "Apache-2.0. No ads, no account, no Pro tier."
  ]
};
