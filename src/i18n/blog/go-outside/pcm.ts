import { defineGoOutside } from "./define";

// Nigerian Pidgin (pcm). English-lexified, so shared vocabulary is expected —
// but the register below is Pidgin, not untranslated English.

export const pcm = defineGoOutside({
  metaTitle: "Comot go outside. Agent still dey work. | Mobile SSH",
  metaDescription:
    "Your coding agent dey run for your server, no be for your phone. Start am under tmux, waka comot, and make the alerts find you when e really need person.",
  back: "Blog",
  eyebrow: "Note from ground",
  title: "Comot go outside. Agent still dey work.",
  standfirst:
    "No be phone been dey keep your agent alive. Na the server. Once you believe that one, afternoon for outside no go cost you anything — you comot, the work continue, and na only question wey really need answer go disturb you.",
  author: "Mobile SSH Editorial Board",
  date: "7 September 2026",
  readingTime: "7 min read",

  board: {
    ariaLabel:
      "Conditions board wey dey read four running sessions like surf breaks: three dey work steady and one, wey dem name claude, dey wait for person.",
    heading: "AS E DEY BE",
    timeLabel: "06:14 HST",
    breakHeading: "Break",
    swellHeading: "Swell",
    stateHeading: "How e dey",
    rows: [
      { name: "api-prod", swell: "2-3 ft", state: "e dey rise", needsYou: false },
      { name: "nightly-tests", swell: "6-8 ft", state: "e dey hold", needsYou: false },
      { name: "claude", swell: "10+ ft", state: "e need you", needsYou: true },
      { name: "web-api", swell: "1-2 ft", state: "e dey hold", needsYou: false }
    ],
    statusLine: "4 sessions · 1 dey wait · last check 06:14",
    caption:
      "Four sessions for machine wey be your own. Three of dem no send where you dey. Na the fourth one be the only reason to bring phone comot for pocket."
  },

  body: [
    `Work dey end whether build don end or e never end. <em>Pau hana</em> — the end of the work day — dey come with im own time, and the usual answer na to ignore am: leave laptop open for table, dey half-watch progress bar, and give the evening give process wey no need you for any of am.`,
    `That trade only make sense if the work dey happen for the machine wey you dey carry. Most times e no be so. The agent na process for server, e dey edit files for that server disk, e dey run that server tests. Your phone na window wey dey look am. Close the window, the room still dey there.`,
    `Na the server be the layer wey dey last`,
    `Start Claude Code or Codex inside <code>tmux</code>, <code>herdr</code> or Zellij and the session belong to the server, no be to your connection. Fall reach one bar of signal, waka enter lava tube, keep phone for two hours — the agent go continue to read, edit and run tests, because nothing about am ever tie to you.`,
    `Na this be the whole trick, and e good make we talk am well well, because e easy to praise the wrong part. No be the app dey hold the process up. Na the multiplexer for the other end dey hold am. Mobile SSH own work na to comot and come back clean.`,
    `No be you be the power supply. Stop to dey behave like one.`,
    `Check am small, no dey nurse am`,
    `Agent wey dey run for one hour need person for around ninety seconds out of the whole thing. Waiting never be the problem; the problem na say you no sabi <em>when</em> the ninety seconds go land, and na that one dey make people dey stare screen wey no get anything to talk.`,
    `Agent Alerts answer that one. The detection dey deliberately dull, na why person fit trust am: terminal bell, <code>OSC 9</code> or <code>OSC 777</code> notification, and the agent hook wey you install for the server once. E no dey read your output take guess wetin you mean, and no sensitivity knob dey to tune — e dey report wetin the program for the other end really announce.`,
    `So phone go stay for your pocket until real question show. Then e go buzz, you read the prompt, tap answer, and put am back. Na the whole interaction be that, and e dey work from beach, from trail head, or from the queue wey you dey stand buy shave ice.`,
    `Wetin the island no fit fix`,
    `Two honest limits, because post wey only list strength na advert.`,
    `The platform difference dey real and e worth to plan for am. For Android, foreground service dey hold the connection while the app dey background — that notification wey no dey comot <em>na</em> the session. iOS no get background execution at all; e dey reconnect and re-attach to your multiplexer when you come back. Either way, the agent for the server never stop, na that be the point. Na only the window close.`,
    `Aloha no be excuse to careless`,
    `To comot well na small discipline. Anything wey you no go gree make e run alone for two hours no suppose start as you dey waka comot door — agent wey dey middle of migration no dey better because you far. Give am task wey get natural stopping point, tell am make e inspect before e edit, and make the diff be the thing wey you go review when you come back.`,
    `And take the same care for the notification like say na pager. If everything dey alert, nothing dey alert. The hook dey fire for the states wey worth to disturb person; leave am like that and the buzz go still mean something.`,
    `The build no need audience. Comot go dey somewhere.`
  ],

  checklist: {
    heading: "Before you waka comot",
    steps: [
      {
        heading: "Start am under multiplexer",
        body: "Run the agent inside <code>tmux</code>, <code>herdr</code> or Zellij so that the session go survive your connection instead of to depend on am."
      },
      {
        heading: "Install the agent hook",
        body: "Once for every server, from inside the app. Na small shell script wey any agent fit call — no be vendor integration, and e no tie to one CLI."
      },
      {
        heading: "Prove say one alert dey land",
        body: "Trigger prompt and confirm say the phone buzz before you go depend on am. Alert wey you never see work no be plan."
      },
      {
        heading: "Give am stopping point",
        body: "Task wey dey end for sensible place better pass one wey no get end, because na you choose not to watch am."
      }
    ],
    promptLabel: "Task wey you fit leave alone",
    prompt:
      "Read AGENTS.md, then fix the handler tests wey dey fail. Inspect the diff before you edit, run the focused tests, and stop after dem pass — no commit."
  },

  truth: {
    heading: "Wetin survive when you waka comot",
    itemHeading: "When phone enter your pocket",
    resultHeading: "E dey continue?",
    yes: "Yes",
    no: "No",
    rows: [
      { item: "The agent process for the server", value: "Na tmux, herdr or Zellij own am", survives: true },
      { item: "Files, diffs and test output", value: "For the server disk", survives: true },
      { item: "Your place inside the session", value: "E re-attach when you come back", survives: true },
      { item: "The connection, for Android", value: "Foreground service dey hold am", survives: true },
      { item: "The connection, for iOS", value: "No background execution — e dey reconnect", survives: false },
      { item: "Alert wey no get signal to carry am", value: "E go land when the phone fit reach network again", survives: false }
    ],
    note: "The agent dey run for every row. Na only whether your phone still hold the window open dey change."
  },

  cta: {
    ariaLabel: "Get Mobile SSH",
    heading: "Leave the laptop. Carry the terminal.",
    body: "Connect straight to your own machine, run any agent wey you like inside tmux, herdr or Zellij, and make Agent Alerts tell you when e need person — with SFTP, tunnels and real terminal for the same app.",
    tags: ["Any agent", "Direct SSH", "Agent Alerts", "Apache-2.0"],
    playButton: "Opt in for Google Play",
    iosButton: "Join iOS beta",
    note: `Android dey closed testing: opt in with the Google account wey you go take test, then open the
opt-in link for your mobile browser. You don opt in? Go straight to the <a href="{playUrl}" rel="noopener">Play listing</a>.`
  }
});
