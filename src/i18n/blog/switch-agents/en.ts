import type { SwitchAgentsPost } from "./types";

export const en: SwitchAgentsPost = {
  metaTitle: "Switch agents, not apps | Mobile SSH",
  metaDescription:
    "When Claude Code or Codex reaches a usage or spend limit, keep the same server, repository, terminal and mobile workflow. Switch agents without switching apps.",
  back: "Blog",
  eyebrow: "Workflow",
  title: "Switch agents, not apps.",
  standfirst:
    "A coding agent can run out of allowance in the middle of a task. Your repository has not run out of anything. Keep the work where it is, open the other agent, and carry on in the same terminal.",
  author: "The Mobile SSH Editorial Board",
  date: "August 30, 2026",
  readingTime: "6 min read",

  figure: {
    ariaLabel:
      "Two panes on the same SSH host. Claude Code has reached an individual spend limit; the adjacent Codex pane reads the same working tree and is ready to continue.",
    claudePane: "Claude Code · limit reached",
    codexPane: "Codex · same host",
    sameHost: "same SSH host · prod-01",
    carriedWork: "reading AGENTS.md and the current worktree",
    ready: "ready to continue",
    caption:
      "The agent changed. The host, repository, working tree and mobile interface did not.",
  },

  body: [
    {
      kind: "lead",
      html: `It usually happens after the useful part has begun. The agent has read the repository, found the failing path and changed two files. Then the terminal stops with a sentence that has nothing to do with the code: <strong>you have reached a usage or spend limit.</strong>`,
    },
    {
      kind: "p",
      html: `One real Claude Code message is blunt: <code>You've hit your individual spend limit · run /usage-credits to ask your admin for a higher limit</code>. Codex has its own limit notices and account-specific options. The wording differs; the interruption is the same. A vendor boundary has appeared in the middle of your working tree.`,
    },
    { kind: "h2", html: "First: which limit did you hit?" },
    {
      kind: "p",
      html: `People call all of these a “token limit,” but that phrase collapses three different problems. A conversation can fill its context, a plan can exhaust an allowance, or an account can reach a credit or spend cap. The next action depends on which one the product actually reports.`,
    },
    { kind: "limits" },
    {
      kind: "p",
      html: `Read the notice in front of you. Check the vendor's usage page for the reset, credit or administrator options available to <em>that account</em>. Limits and remedies vary by plan and can change; a blog post should not pretend otherwise. But paying, waiting or asking an administrator are not the only ways to keep the engineering task moving.`,
    },
    { kind: "pull", html: `The subscription stopped. The repository did not.` },
    { kind: "h2", html: "The obvious fallback has an app-shaped cost" },
    {
      kind: "p",
      html: `On a phone, the obvious fallback is to leave the Claude app and open ChatGPT for Codex, or leave ChatGPT and open Claude. That works, in the narrow sense that another agent is available. It also replaces the whole cockpit at the exact moment you need continuity.`,
    },
    {
      kind: "p",
      html: `Navigation moves. Approval controls look different. Session history is organized differently. One app may expose a workflow the other does not, and neither is a general SSH terminal with your usual tmux sessions, SFTP browser and tunnels beside the agent. You spend the first minutes learning where the new app put the controls instead of learning what the previous agent changed.`,
    },
    { kind: "h2", html: "Make the terminal the stable layer" },
    {
      kind: "p",
      html: `Run Claude Code and Codex where the work already lives: on the same machine, reached through the same SSH client. In Mobile SSH, changing vendors can be as small as opening another tmux pane and running the other command. The phone interface stays familiar because it is the interface to <em>your server</em>, not to one model vendor.`,
    },
    { kind: "carry" },
    {
      kind: "p",
      html: `This is the useful kind of portability. The next agent can inspect the files, diffs, test output and project instructions left on disk. Mobile SSH still knows the connection. The tmux manager still knows the session. SFTP and port forwards are still where you left them. Agent Alerts work for either agent because the hook reports terminal state rather than pledging allegiance to one vendor.`,
    },
    {
      kind: "pull",
      html: `Vendor-neutral does not mean context magically transfers. It means the evidence survives the switch.`,
    },
    { kind: "h2", html: "The honest handoff" },
    {
      kind: "p",
      html: `Claude's conversation does not become Codex's conversation, and the reverse is not true either. Do not tell the replacement agent “continue” and hope it can see a chat owned by another service. Give it the durable state: repository rules, the working-tree diff, commands already run, and the result you still need.`,
    },
    { kind: "handoff" },
    {
      kind: "p",
      html: `If the first agent stopped before it could write a summary, the diff is the summary of record. Ask the replacement to inspect before editing. That protects partial work, catches assumptions embedded in the patch, and gives you a clean point to decide whether to continue, revise or revert.`,
    },
    { kind: "h2", html: "One interface for whichever agent is useful today" },
    {
      kind: "p",
      html: `This is not an argument that Codex and Claude Code are interchangeable. They have different strengths, models, tools, limits and account rules. That is precisely why the interface should not force a permanent choice. Pick the agent that fits the task, the allowance you have and the policies of the repository.`,
    },
    {
      kind: "p",
      html: `A native vendor app is often the quickest zero-setup route to that vendor's cloud agent. Keep it when that is what you need. But when the work is on a machine you control, a general terminal gives you a more durable home: one app to reach the server, any agent installed there, and the rest of the SSH toolbox when the job stops being an agent prompt and becomes ordinary engineering again.`,
    },
    { kind: "pull", html: `Choose the agent on its merits. Keep the workspace on yours.` },
  ],

  limits: {
    ariaLabel: "Three kinds of limits and what to do next",
    actionLabel: "What to do",
    items: [
      {
        heading: "Context or length",
        body: "One conversation has reached the amount of material the model can actively carry.",
        action: "Compact or summarize if supported, or start a fresh session with a focused handoff.",
      },
      {
        heading: "Usage allowance",
        body: "Your plan has used its allowance for the product's current time window.",
        action: "Check the displayed reset and the upgrade or credit choices offered to your account.",
      },
      {
        heading: "Spend or credit cap",
        body: "Paid continuation has reached a personal, workspace or organization budget boundary.",
        action: "Add funds, change the cap, ask an administrator, wait—or move the task to another agent.",
      },
    ],
  },

  carry: {
    heading: "What survives an agent switch",
    itemHeading: "Working state",
    resultHeading: "Carries over?",
    yes: "Yes",
    no: "No",
    rows: [
      { item: "Repository files and uncommitted edits", value: "On the same disk", shared: true },
      { item: "Git status, diff and test output", value: "Inspectable by either CLI", shared: true },
      { item: "SSH host, shell and working directory", value: "The same session", shared: true },
      { item: "tmux, SFTP, tunnels and Agent Alerts", value: "The same mobile tools", shared: true },
      { item: "The other vendor's conversation history", value: "Needs a fresh handoff", shared: false },
    ],
    note: "Files are shared state. Chat history is vendor state. Treat the repository as the source of truth.",
  },

  handoff: {
    heading: "A four-step handoff",
    steps: [
      {
        heading: "Freeze the evidence",
        body: "Do not clean or overwrite the tree. Capture <code>git status --short</code> and inspect <code>git diff --stat</code>.",
      },
      {
        heading: "Read the local rules",
        body: "Have the new agent read <code>AGENTS.md</code> and the relevant project documentation before it edits.",
      },
      {
        heading: "Re-establish the baseline",
        body: "Run the smallest relevant test or check and record what passes, fails or was never tried.",
      },
      {
        heading: "Continue in a new pane",
        body: "Start the other CLI beside the old pane, give it the goal and constraints, and ask it to inspect the existing diff first.",
      },
    ],
    promptLabel: "A useful first prompt",
    prompt:
      "Read AGENTS.md, git status and the current diff. Preserve the existing work. Run the focused tests, explain what remains, then continue the task.",
  },

  sources: {
    heading: "Sources and limits note",
    intro:
      "Product limits and billing options change. These official pages were used for the distinction above; the notice shown in your account remains authoritative.",
    openai: "OpenAI: Codex usage limits and account options",
    anthropic: "Anthropic: usage credits and individual spend limits",
    checked: "Checked August 30, 2026.",
  },

  cta: {
    ariaLabel: "Get Mobile SSH",
    heading: "Put both agents in one pocket.",
    body: "Connect to your own machine, run Claude Code, Codex or another CLI, and keep the same terminal, tmux sessions, files, tunnels and Agent Alerts when you switch.",
    tags: ["Any agent", "Direct SSH", "Agent Alerts", "Apache-2.0"],
    playButton: "Opt in on Google Play",
    iosButton: "Join the iOS beta",
    note: `Android is in closed testing: opt in with the Google account you'll test with, then open the
opt-in link in your mobile browser. Already opted in? Go straight to the <a href="{playUrl}" rel="noopener">Play listing</a>.`,
  },
};
