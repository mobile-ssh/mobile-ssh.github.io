import type { FlightPost } from "./types";

// Nigerian Pidgin (pcm) translation of "Eleven hours over the Atlantic".
//
// Same shape as en.ts. The split-flap board tiles stay English in every locale,
// so masthead.headlineTranslated carries the visible Pidgin headline.
// Every measured figure (703 ms, 477 ms, 35,786 km, 62 ms, 44 ms …) is kept
// exactly as it was fact-checked in English.

export const pcm: FlightPost = {
  meta: {
    title: "Eleven hours for on top di Atlantic | Mobile SSH",
    description:
      "For 35,786 km, na light alone dey cost 477 ms round trip. Wetin actually dey spoil wen you dey work from plane, why e no be wetin you dey tink, and how you fit take use long-haul flight ship work instead of watching di same film again. From Mobile SSH — di SSH, SFTP and terminal client for Android, iPhone and iPad."
  },

  backLabel: "Blog",

  masthead: {
    eyebrow: "Report from ground",
    boardTitle: "Flight wey dey comot",
    legend: {
      time: "Time",
      flight: "Flight",
      destination: "Where e dey go",
      remarks: "Wetin dey happen"
    },
    headline: "Eleven hours for on top di Atlantic",
    headlineTranslated: "Eleven hours for on top di Atlantic",
    deck: `Seat 24B dey watch film wey e don see three times. Seat 24C dey review
      <span class="hl">four servers</span> for di same Wi-Fi. Di difference no be di connection —
      na wetin each of dem put for di odda end of am.`,
    byline: [
      { key: "who write am:", value: "Di Mobile SSH Editorial Board" },
      { key: "date:", value: "10 August, 2026" },
      { key: "read:", value: "8 min" },
      { key: "link:", value: "703 ms, GEO" }
    ]
  },

  sections: {
    twoSeats: {
      heading: "Two seat, one satellite",
      intro: [
        `Eleven hours, from New York go somewhere for east. Di cabin light turn amber. Seat 24B open
          di screen wey dey behind di seat for im front, scroll four hundred titles, and pick film wey
          e don already see three times. We no dey criticise am. Na di most sensible thing person fit
          do wit eleven hours inside aluminium tube wey dem pump air enter, and most of us don do am.`,
        `Seat 24C bring out phone.`
      ],
      outro: [
        `Di two seat dey on top di same Wi-Fi. Di two of dem dey di same distance from ground. By di
          time wey di wheel go touch ground, one of dem go don watch film wey e fit already quote, and
          di odda one go don merge three branches, clear test suite wey dey fail, and restart job wey
          jam for machine wey dey four thousand miles away.`,
        `Di interesting part no be say e possible. Na <em>why</em> e possible — and why di obvious
          approach, di one wey most people dey try once and abandon somewhere on top Greenland, no dey
          work at all.`
      ]
    },

    aboveYou: {
      heading: "Wetin actually dey on top your head",
      intro: [
        `Two different different tins dey wey airline fit mean wen dem talk "Wi-Fi," and na which one
          dem bolt for your own fuselage go decide everything wey go follow.`,
        `Di old arrangement na geostationary satellite wey dem park for <strong>35,786 km</strong>.
          Dat altitude no be design choice wey person make for your sake; na di exact distance wey
          orbit go take twenty-four hours, so di satellite go look like say e just hang for one place.
          Di result na arithmetic wey no engineering budget fit argue wit: go up and come back down,
          two times, na <strong>477 ms round trip for light isef</strong>, before even one router enter
          di matter.`,
        `Di new arrangement na low-Earth-orbit constellation wey dey around <strong>550 km</strong>
          — like sixty-five times closer, and <strong>7.3 ms</strong> propagation round trip.`
      ],
      afterDiagram: [
        `Wetin dem measure for air match di physics. Wen dem analyse Ookla im Q1 2025 in-flight speed
          tests, dem find <strong>median round-trip time of 44 ms for Starlink against 703–757 ms for
          Hughes, Intelsat and Viasat</strong> — gap wey be like sixteen times. Anoda team put
          instrument for real devices across <strong>25 flights on 7 airlines</strong> for ACM IMC
          2025, and dem measure di same shape by demsef: under 40 ms for LEO, above 550 ms for GEO.`
      ],
      afterChart: [
        `For long-haul ocean crossing, di honest number small worse pass di headline. Di same research
          measure <strong>median of 62 ms on top di Pacific, wey dey range from 19–86 ms</strong>.
          Na dat figure you suppose carry for head. E still correct well well. But e no be 44.`
      ]
    },

    rollout: {
      heading: "Di part wey go pain you",
      intro: [
        `Na here blog post for product site suppose tell you say di future don land.`,
        `E never land for everybody di same way, and di aircraft wey e reach last na <em>your own</em>.`,
        `Na narrowbody dem dey refit first — dem plenty, dem dey turn around quick, and dem dey fly
          short domestic hop where nobody dey try do eleven hours of anything. Di widebody wey actually
          dey cross ocean na dem dey last for di queue. As of mid-2026, United get <strong>pass 400
          aircraft on Starlink</strong> and dem expect say e go near one thousand by year end — but na
          only around <strong>sixty of dem be widebody</strong>, dia first Starlink widebody
          transatlantic flight (Newark–Heathrow) fly only for <strong>June 2026</strong>, and di full
          widebody fleet no go ready until <strong>summer 2027</strong>. Virgin Atlantic don finish dia
          <strong>twelve A350s</strong> — around <strong>28% of dia widebody fleet</strong> — wit 787s
          wey dem schedule through di second half of 2026 and A330neos wey go enter 2027.`
      ],
      afterFigure: [
        `So: if na inside intercontinental flight you dey read dis one for 2026, di odds still dey
          against you. Na probably di 700 ms link you dey on top, no be di 62 ms one.`,
        `Wey make di rest of dis post more useful, no be less.`
      ]
    },

    filmVsShell: {
      heading: "Why di film dey work but di terminal no dey work",
      cmdComment: "whole session just to move one character",
      prose: [
        `Film and shell dey fail for opposite direction, and in-flight Wi-Fi na exactly di wrong
          network for one of dem.`,
        `Film na <em>bandwidth</em> problem wey no send latency. E dey buffer. If di first frame land
          700 ms late, nobody go notice, because nothing about di experience depend on say di film go
          react to you. Press play, wait, watch. Di round trip happen once.`,
        `Interactive shell na di opposite of am. E no need bandwidth at all — dem dey measure terminal
          session for kilobits, no be megabits — but e dey pay di round trip <strong>for every single
          keystroke wey you expect make e echo back</strong>. For 700 ms, dat one no be slow
          connection. Na conversation wey get two-third-of-a-second pause afta every character.`,
        `Na dis one people dey get wrong. Dem go see "50 Mbps" for di in-flight portal, conclude say
          di connection correct, open terminal, and discover say "correct" no get anything to do wit
          am. Bandwidth no be di currency here. <strong>Na round trips be am.</strong>`
      ]
    },

    whatBreaks: {
      heading: "Wetin actually dey spoil (no be typing)",
      intro: [
        `Di failure specific pass "e dey feel slow," and di research clear well well about where di
          pain dey land.`,
        `For one controlled study of 31 participants wey compare 20 ms against 200 ms end-to-end input
          latency, <strong>bulk typing barely move</strong>: 290.9 ms per character against 302.7,
          difference wey di authors no fit call significant. Error rate be di same.`
      ],
      afterTable: [
        `But di <em>correction</em> task — to reposition cursor wit arrow keys and fix text, di thing
          wey you actually dey do inside editor — jump from <strong>38.9 seconds go 46.5 seconds, like
          20% slower, wit very big effect size</strong> (p &lt; 0.001, d = 1.673). Di authors talk di
          mechanism plain: wen you dey navigate, you must dey wait for di screen, because where di
          cursor land na im dey decide wetin you go do next.`,
        `Di load wey person dey feel worse even where speed no change. For di typing task, where
          performance no change statistically, di <strong>vex wey dem report demsef still rise from
          20.9 go 31.3</strong>.`,
        `Carry dat one enter terminal and e go name exactly wetin dey scatter for up there: no be to
          type command comot. Na <code>vim</code> navigation, tab completion, to scroll through
          <code>less</code>, and di poke-and-look rhythm of REPL. Every single one of dem na loop where
          di next thing wey you go do depend on wetin just come back.`
      ]
    },

    moveTheWork: {
      heading: "Move di work, no be di keystrokes",
      intro: [
        `Once you accept say na round trips be di resource wey scarce, di fix stop to be "find faster
          plane" and e turn architecture question: <strong>take fewer round trips, and make each one
          carry more.</strong>`,
        `One well-known tool dey wey face dis matter head-on. Mosh dey predict wetin your keystrokes go
          do and e dey echo dem locally before di server confirm am. Di effect wey dem measure big well
          well: for link wey get like half second round-trip time, median keystroke response fall from
          <strong>503 ms go under 5 ms</strong>. For trans-oceanic path from MIT go Singapore,
          <strong>273 ms go under 5 ms</strong>.`,
        `But read di small print, because na im be di whole point. Mosh dey predict like
          <strong>70% of keystrokes</strong>. Di around 30% wey e no fit predict na, for di authors dia
          own word, <em>principally navigation</em> — and for dose ones, im latency profile go look
          like plain SSH again. Wetin dat mean be say: di one interaction wey high latency dey punish
          pass na exactly di one wey local echo no fit save.`
      ],
      chartHeading: "wey e predict vs wey e no predict",
      afterChart: [
        `So prediction dey help, but e no dey save you. Di thing wey actually dey save you na to refuse
          to dey inside di loop dat often.`,
        `<strong>Stop to dey type enter latency. Put work wey go run long for di far end and just dey
          check am.</strong> Build, test suite, migration, coding agent — none of dem need make you dey
          present for di round trip. Dem need you for di beginning and for di decision. Everything wey
          dey between na di machine im own problem, and di machine dey for ground wit good connection.`,
        `Na also why <em>parallelism</em> dey beat <em>interactivity</em> for up there. You no fit type
          quick through 700 ms. But you fit supervise four servers at once well well, because
          supervision no be latency-bound — na attention-bound, and you get eleven hours of attention
          and nothing else to spend am on.`
      ]
    },

    seat24c: {
      heading: "Wetin seat 24C dey actually do",
      lead: `To talk am concrete, for phone, on top bad link:`,
      outro: [
        `Dem no invent any of dis one for aircraft. Na just how remote work over hostile link dey
          always look, and plane na just hostile link wey honest pass di rest.`
      ]
    },

    caveat: {
      heading: "One true talk wey we must add",
      prose: [
        `Two things dey wey we no fit verify, and we no go form say we verify dem:`,
        `<strong>Whether your airline im network go even allow SSH comot at all.</strong> We no see any
          reliable public evidence about port blocking, VPN policy or idle timeout across airline Wi-Fi
          providers — and plenty confident forum claim dey wey no dey survive checking. E dey vary by
          carrier, by provider and by aircraft. Test am for short flight before you plan long one
          around am.`,
        `<strong>How di cabin dey actually spend im time.</strong> Di in-flight entertainment
          statistics wey people dey quote pass turn out say na advertising rate card dem trace back to,
          wey no get methodology, so we throw dem comot. Di best survey evidence wey we see —
          Inmarsat/Censuswide, 11,231 passengers across ten countries, even though na 2022 dem field am
          and na intent dem ask about instead of measuring time — put entertainment way ahead of work:
          <strong>41% wan watch film wey dem don download and 35% wan stream, against 26% wey wan do
          work.</strong>`,
        `So treat seat 24B as character, no be statistic. Di point no be say to watch film bad. Na say
          di alternative no dey unavailable again.`
      ]
    },

    descent: {
      heading: "Di plane dey come down",
      prose: [
        `Di film end for di same place wey e end di last three times. Di plane don start to dey come
          down. Seat 24B don get
          flight wey correct well well, and e go land wit rest, wey get value.`,
        `Seat 24C land wit di work don finish — because di work never dey inside di seat. E dey for
          machine wey dey ground di whole time, and na window to look am di phone be from start to
          finish.`,
        `Eleven hours na long time to spend for 700 ms. But e na very short time to spend supervising
          four servers wey no send di satellite at all.`
      ]
    }
  },

  seat24b: {
    tag: "seat 24b",
    lines: [
      { time: "19:04", verb: "play", text: "— film, 118 min" },
      { time: "21:02", verb: "play", text: "— di same film again" },
      { time: "23:10", verb: "idle", text: "— cabin don dark" },
      { time: "05:41", verb: "wake", text: "— plane dey come down" }
    ]
  },

  seat24c: {
    tag: "seat 24c",
    lines: [
      { time: "19:04", verb: "attach", text: "— 4 session, 1 grid" },
      { time: "21:02", verb: "merge", text: "— three branches" },
      { time: "23:10", verb: "green", text: "— suite wey dey fail don clear" },
      { time: "05:41", verb: "kick", text: "— job wey jam don restart" }
    ]
  },

  quotes: [
    `Same aircraft, same antenna, same bad Wi-Fi. Di difference dey
        completely inside wetin you put for di far end of am.`,
    `Di plane wey you dey na di last one wey dem go upgrade. Plan for
        700 ms make 62 come sweet you.`,
    `Latency no dey tax your typing. E dey tax every decision wey dey
        wait for screen.`
  ],

  orbit: {
    alt: "Diagram: geostationary satellite wey dey 35,786 km dey cost 477 ms of light-time round trip; low-Earth-orbit satellite wey dey 550 km dey cost 7.3 ms.",
    geoLabel: "GEO 35,786 km",
    geoValue: "477 ms light",
    leoLabel: "LEO 550 km",
    leoValue: "7.3 ms light",
    aircraft: "seat 24C, 11,000 m",
    caption: "E no dey to scale — nothing wey get 35,786 km inside am dey ever be to scale."
  },

  latencyChart: {
    rows: [
      { label: "GEO — Hughes / Intelsat / Viasat, median", value: "703 ms" },
      { label: "LEO on top di Pacific — long-haul median", value: "62 ms" },
      { label: "LEO — Starlink in-flight, overall median", value: "44 ms" }
    ],
    note: "Di bars dey use di same linear scale. Source 1."
  },

  rolloutFigure: {
    items: [
      {
        name: "United",
        value: "≈60",
        text: `widebody dey fly Starlink, out of 400+ aircraft wey dem don fit. Di rest of di
            widebody fleet no go ready until summer 2027.`
      },
      {
        name: "Virgin Atlantic",
        value: "12 out of ~43",
        text: `widebody don finish — around 28 per cent. 787s dey run through H2 2026 and
            A330neos go enter 2027.`
      }
    ],
    note: `Sources 5 and 6. Di United widebody wey remain suppose ready by summer 2027; Virgin
          787s through H2 2026 and A330neos enter 2027.`
  },

  latencyTable: {
    caption: "Schmid et al., MUM '23 — n = 31, 20 ms against 200 ms input latency",
    head: ["wetin dem test", "20 ms", "200 ms", "verdict"],
    rows: [
      { task: "to type / char", low: "290.9", high: "302.7", verdict: "n.s." },
      { task: "to correct text", low: "38.9 s", high: "46.5 s", verdict: "+20%" },
      { task: "vex level", low: "20.9", high: "31.3", verdict: "p=0.004" }
    ]
  },

  moshChart: {
    rows: [
      { label: "keystrokes wey mosh dey echo one time", value: "≈70%" },
      { label: "wey e no fit predict — “principally navigation”", value: "≈30%" }
    ],
    note: "Source 4."
  },

  windows: [
    {
      title: "session-wey-dey-outlive-di-connection",
      body: `Di aircraft dey hand off, di portal dey re-authenticate, di connection dey drop.
            <code>tmux</code> still dey keep di shell dey run for di server regardless; di session na
            thing wey dey di far end, no be thing wey dey your hand. Eternal Terminal carry di same
            idea go further and e dey let di session survive di TCP connection isef, dey buffer and dey
            replay wetin you miss. <span style="color:var(--dim)">(Fair warning for network wey dem dey
            filter: ET need im own port — 2022 by default — <em>on top</em> SSH im own 22.)</span>`
    },
    {
      title: "pass-one-problem-at-a-time",
      body: `Plenty session for grid, plenty saved server, each one dey run something wey no need
            supervision between decision.`
    },
    {
      title: "agents-wey-dey-do-di-typing",
      body: `Coding agents dey run for <em>your own</em> servers, at ground latency, where di code dey.
            No be dem dey pay di satellite tax; na only wen you dey answer dem you dey pay am.`
    },
    {
      title: "push-wen-e-matter",
      bellLabel: " (bell)",
      body: `Agent Alerts dey fire wen something actually need human — so di flight go be time to
            review and decide, no be to dey look prompt dey wait for echo.`
    }
  ],

  cta: {
    cmdComment: "free · open source · Apache-2.0",
    heading: "Your next long-haul na eleven hours of server time.",
    prose: [
      `Mobile SSH na native SSH, SFTP and terminal client for Android, iPhone and iPad. Plenty
          session, tmux manager wey dey inside, Eternal Terminal, and push alert wen agent need you.
          E free, no account, no ads, open source.`
    ],
    tags: ["No ads", "No account", "Data dey for di device", "Apache-2.0"],
    playButton: "Opt in for Google Play",
    iosButton: "Join di iOS beta",
    note: `Android dey closed testing — opt in wit di Google account wey you go take test,
      and open di link inside your mobile browser; di closed test fit no show inside di Google Play
      app.`
  },

  sources: {
    heading: "Where di info comot",
    items: [
      `Ookla Q1 2025 in-flight data, wey dem analyse for <em>A First Look at Starlink In-Flight Performance</em> — arXiv:2508.09839, peer-reviewed for IEEE Xplore doc 11353148. (44 ms against 703–757 ms; 62 ms Pacific median, 19–86 ms range.)`,
      `<em>From GEO to LEO: First Look Into Starlink In-Flight Connectivity</em>, ACM IMC 2025 — Jang, Varvello, Raman, Zaki. 25 flights, 7 airlines. (&lt;40 ms LEO against 550 ms+ GEO.)`,
      `Schmid et al., MUM '23, <em>Effects of Text Input Latency</em> — n=31, 20 ms against 200 ms. (290.9 against 302.7 ms/char, n.s.; correction 38.9 s → 46.5 s, p&lt;0.001, d=1.673; vex 20.9 → 31.3, p=0.004.)`,
      `Winstein &amp; Balakrishnan, <em>Mosh: An Interactive Remote Shell for Mobile Clients</em>, USENIX ATC 2012. (503 ms → &lt;5 ms; 273 ms → &lt;5 ms; e dey predict ~70% of keystrokes; di remainder wey e no predict na "principally navigation".)`,
      `United Airlines newsroom, 22 June 2026, <em>United Accelerates Starlink Wi-Fi Rollout with First Widebody Transatlantic Flight</em>. (400+ aircraft; ~60 widebody; full widebody fleet summer 2027.)`,
      `Virgin Atlantic press release, 12 April 2026. (A350s don complete; 787s H2 2026; A330neos 2027.)`,
      `Eternal Terminal documentation — eternalterminal.dev/howitworks, github.com/MisterTea/EternalTerminal. (Buffer-and-replay; default port 2022 on top SSH own.)`,
      `Inmarsat/Censuswide Passenger Experience Survey 2022, n=11,231 across 10 countries. (Film wey dem download 41%, streaming 35%, work 26% — na intent dem talk, multi-select, dem field am for 2022.)`
    ],
    quitHint: "— press q to comot"
  },

  colophon: [
    "Mobile SSH — free, open-source SSH / SFTP / terminal for Android, iPhone and iPad.",
    "Apache-2.0. No ads, no account, no Pro level."
  ]
};
