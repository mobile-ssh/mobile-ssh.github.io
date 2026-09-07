import type { GoOutsidePost } from "./types";

export const en: GoOutsidePost = {
  metaTitle: "Go outside. The agent is still working. | Mobile SSH",
  metaDescription:
    "Your coding agent runs on your server, not on your phone. Start it under tmux, walk out, and let the alerts find you when it actually needs a person.",
  back: "Blog",
  eyebrow: "Field note",
  title: "Go outside. The agent is still working.",
  standfirst:
    "The phone was never the thing keeping your agent alive. The server is. Once you believe that, an afternoon outdoors costs you nothing — you leave, the work continues, and the only thing that interrupts you is a question that genuinely needs answering.",
  author: "The Mobile SSH Editorial Board",
  date: "September 7, 2026",
  readingTime: "7 min read",

  board: {
    ariaLabel:
      "A conditions board reading four running sessions like surf breaks: three working steadily and one, named claude, waiting on a person.",
    heading: "CONDITIONS",
    timeLabel: "06:14 HST",
    breakHeading: "Break",
    swellHeading: "Swell",
    stateHeading: "State",
    rows: [
      { name: "api-prod", swell: "2-3 ft", state: "rising", needsYou: false },
      { name: "nightly-tests", swell: "6-8 ft", state: "holding", needsYou: false },
      { name: "claude", swell: "10+ ft", state: "needs you", needsYou: true },
      { name: "web-api", swell: "1-2 ft", state: "holding", needsYou: false }
    ],
    statusLine: "4 sessions · 1 waiting · last check 06:14",
    caption:
      "Four sessions on a machine you own. Three of them do not care where you are. The fourth is the only reason to take the phone out of your pocket."
  },

  body: [
    {
      kind: "lead",
      html: `Work ends whether or not the build has. <em>Pau hana</em> — the end of the working day — arrives on its own schedule, and the usual answer is to ignore it: keep the laptop open on the table, half-watch a progress bar, and give up the evening to a process that does not need you for any of it.`
    },
    {
      kind: "p",
      html: `That trade only makes sense if the work is happening on the machine you are carrying. Usually it is not. The agent is a process on a server, editing files on that server's disk, running that server's tests. Your phone is a window onto it. Close the window and the room is still there.`
    },
    { kind: "h2", html: "The server is the durable layer" },
    {
      kind: "p",
      html: `Start Claude Code or Codex inside <code>tmux</code>, <code>herdr</code> or Zellij and the session belongs to the server, not to your connection. Drop to one bar of signal, walk into a lava tube, put the phone away for two hours — the agent keeps reading, editing and running tests, because nothing about it was ever attached to you.`
    },
    {
      kind: "p",
      html: `This is the whole trick, and it is worth being precise about it, because it is easy to credit the wrong component. The app is not holding the process up. The multiplexer on the far end is. Mobile SSH's job is to leave and come back cleanly.`
    },
    { kind: "pull", html: `You are not the power supply. Stop behaving like one.` },
    { kind: "h2", html: "Check in, don't babysit" },
    {
      kind: "p",
      html: `An agent that runs for an hour needs a person for about ninety seconds of it. The problem has never been the waiting; it is not knowing <em>when</em> the ninety seconds arrive, which is what keeps people staring at a screen that has nothing to say.`
    },
    {
      kind: "p",
      html: `Agent Alerts answer that. The detection is deliberately dumb and therefore trustworthy: a terminal bell, an <code>OSC 9</code> or <code>OSC 777</code> notification, and the agent hook you install on the server once. It does not read your output and guess at intent, and there is no sensitivity dial to tune — it reports what the program on the other end actually announced.`
    },
    {
      kind: "p",
      html: `So the phone stays in your pocket until a real question exists. Then it buzzes, you read the prompt, tap an answer, and put it away. That is the entire interaction, and it works from a beach, a trailhead, or the queue for shave ice.`
    },
    { kind: "checklist" },
    { kind: "h2", html: "What the island cannot fix" },
    {
      kind: "p",
      html: `Two honest limits, because a post that only lists strengths is an advertisement.`
    },
    { kind: "truth" },
    {
      kind: "p",
      html: `The platform difference is real and worth planning around. On Android a foreground service holds the connection while the app is in the background — the ongoing notification <em>is</em> the session. iOS has no background execution at all; it reconnects and re-attaches to your multiplexer when you come back. Either way the agent on the server never stopped, which is the point. Only the window closed.`
    },
    { kind: "h2", html: "Aloha is not an excuse to be careless" },
    {
      kind: "p",
      html: `Leaving well is a small discipline. Anything you would not want to run unattended for two hours should not be started as you walk out the door — an agent midway through a migration is not improved by distance. Give it a task with a natural stopping point, ask it to inspect before it edits, and let the diff be the thing you review when you get back.`
    },
    {
      kind: "p",
      html: `And take the same care with the notification as you would with a pager. If everything alerts, nothing does. The hook fires on the states worth interrupting a person for; leave it that way and the buzz stays meaningful.`
    },
    { kind: "pull", html: `The build does not need an audience. Go and be somewhere.` }
  ],

  checklist: {
    heading: "Before you walk out",
    steps: [
      {
        heading: "Start it under a multiplexer",
        body: "Run the agent inside <code>tmux</code>, <code>herdr</code> or Zellij so the session survives your connection rather than depending on it."
      },
      {
        heading: "Install the agent hook",
        body: "Once per server, from inside the app. It is a small shell script any agent can call — not a vendor integration, and not tied to one CLI."
      },
      {
        heading: "Prove one alert arrives",
        body: "Trigger a prompt and confirm the phone buzzes before you rely on it. An alert you have never seen work is not a plan."
      },
      {
        heading: "Give it a stopping point",
        body: "A task that ends somewhere sensible beats an open-ended one, because you are choosing not to watch it."
      }
    ],
    promptLabel: "A task worth leaving alone",
    prompt:
      "Read AGENTS.md, then fix the failing handler tests. Inspect the diff before editing, run the focused tests, and stop after they pass — do not commit."
  },

  truth: {
    heading: "What survives you walking away",
    itemHeading: "When the phone goes in your pocket",
    resultHeading: "Keeps going?",
    yes: "Yes",
    no: "No",
    rows: [
      { item: "The agent process on the server", value: "Owned by tmux, herdr or Zellij", survives: true },
      { item: "Files, diffs and test output", value: "On the server's disk", survives: true },
      { item: "Your place in the session", value: "Re-attached when you return", survives: true },
      { item: "The connection, on Android", value: "Held by a foreground service", survives: true },
      { item: "The connection, on iOS", value: "No background execution — it reconnects", survives: false },
      { item: "An alert with no signal to deliver it", value: "Arrives when the phone is reachable again", survives: false }
    ],
    note: "The agent keeps running in every row. What varies is only whether your phone was still holding the window open."
  },

  cta: {
    ariaLabel: "Get Mobile SSH",
    heading: "Leave the laptop. Take the terminal.",
    body: "Connect straight to your own machine, run whichever agent you like inside tmux, herdr or Zellij, and let Agent Alerts tell you when it needs a person — with SFTP, tunnels and a real terminal in the same app.",
    tags: ["Any agent", "Direct SSH", "Agent Alerts", "Apache-2.0"],
    playButton: "Opt in on Google Play",
    iosButton: "Join the iOS beta",
    note: `Android is in closed testing: opt in with the Google account you'll test with, then open the
opt-in link in your mobile browser. Already opted in? Go straight to the <a href="{playUrl}" rel="noopener">Play listing</a>.`
  }
};
