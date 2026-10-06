import type { YourServerPost } from "./types";

export const en: YourServerPost = {
  metaTitle: "Your agent. Your server. Your rules. | Mobile SSH",
  metaDescription: "Choose where your coding agent runs: a managed workspace, your own cloud account, or hardware you own. Keep control of access, backups and the way out.",
  back: "Blog",
  eyebrow: "Ownership",
  title: "Your agent. Your server. Your rules.",
  standfirst: "A ready-made agent workspace saves setup time. Before you give it your repository, decide who should hold the machine, the credentials and the way out. Mobile SSH lets you bring your own host — from the box under your desk to a VM in your cloud account.",
  author: "The Mobile SSH Editorial Board",
  date: "October 5, 2026",
  readingTime: "7 min read",
  figure: {
    heading: "Choose the host. Check the model route.",
    phone: "Your phone · Mobile SSH",
    connection: "SSH to the host you choose",
    hosts: [
      { id: "owned", title: "Your physical machine", detail: "Home, office or your own server room" },
      { id: "cloud", title: "Your cloud-account VM", detail: "You administer the guest; the provider runs the hardware" }
    ],
    workspace: "Files, tools and the agent process live on the selected host",
    modelConnection: "If using a cloud model: prompts and selected context leave the host",
    model: "Your selected model service",
    caption: "Three separate decisions: how you connect, where code runs, and where the model processes it. Owning the first two does not make the third local."
  },
  body: [
    { kind: "lead", html: "The invitation is appealing: open a workspace and find Codex, Claude Code or Gemini CLI already waiting. No machine to prepare, no packages to install. Connect a repository, describe the task, and let a cloud VM do the work. For an experiment or a disposable project, that convenience can be exactly what you want." },
    { kind: "p", html: "Then the experiment becomes your daily workspace. Private code arrives. So do test fixtures, internal documentation and whatever credentials you supply. Before that handover becomes routine, ask a more durable question: who controls the place where this work lives?" },
    { kind: "h2", html: "A ready-made workspace has an operator" },
    { kind: "p", html: "In a provider-managed agent environment, someone else operates the execution host. Your repository may be cloned there, data uploaded, and permissions granted to reach other systems. Isolation, administrator access, retention and export options depend on the service. Preinstalled tools tell you how quickly you can start; they tell you little about those arrangements." },
    { kind: "p", html: "That is a choice you can make deliberately. Managed environments can reduce maintenance and provide useful isolation. Read what happens to workspace disks, transcripts, snapshots and credentials, including after a session ends or an account closes. You do not have to assume bad intentions to want clear answers about your private work." },
    { kind: "pull", html: "Keep the keys. Keep a backup. Keep the ability to leave." },
    { kind: "h2", html: "Three places to run the same agent" },
    { kind: "p", html: "A VM in your own cloud account gives you another arrangement. You choose the guest operating system, install the tools, issue access and manage the instance's lifecycle. The cloud company still operates the physical infrastructure. Calling it your server describes administrative control, not ownership of the underlying hardware. <a href=\"#source-cloud\">[1]</a>" },
    { kind: "p", html: "A physical machine you own goes further: you choose the hardware and decide where it sits. An existing desktop, a small home server or an office machine can hold the workspace. You also inherit the practical jobs: power, connectivity, repairs, patches and recovery. Ownership gives you decisions to make; it does not make them for you." },
    { kind: "comparison" },
    { kind: "h2", html: "Bring your server to your phone" },
    { kind: "p", html: "Mobile SSH works with either user-operated option. Connect to a reachable SSH host on your local network, through a network path you configure, or in your cloud account. Ordinary SSH sessions do not require a Mobile SSH-operated session relay or a Mobile SSH account. You choose the destination and provide its credentials." },
    { kind: "p", html: "Install the agent you want on that host. Open its working directory, run Codex, Claude Code or Gemini CLI, and use the terminal you already understand. You can keep a session under tmux, herdr or Zellij and return to it from your phone while the host and process remain running. The work belongs to that environment; changing your phone does not require moving the repository." },
    { kind: "p", html: "That leaves useful choices in your hands. Keep sensitive fixtures on a local machine. Use a cloud VM when its resources suit the task. Change agents without rebuilding the mobile workflow. Mobile SSH provides terminal access, SFTP and tunnels; it does not require you to rent a particular agent workspace." },
    { kind: "h2", html: "Your server and your model are separate choices" },
    { kind: "p", html: "This distinction matters most when discussing private data. Running an agent on hardware you own does not necessarily run its model there. A cloud-backed agent can send prompts, selected repository context and tool results to the model service. The agent process and working tree can stay on your server while inference happens elsewhere. <a href=\"#source-claude\">[2]</a> <a href=\"#source-gemini\">[3]</a>" },
    { kind: "p", html: "SSH encrypts the connection between your phone and its endpoint. It does not prevent software on the host from reading permitted files or making its own network requests. Decide which model service the agent uses, what it may read, and which tools or integrations may send data out. Check the policies for your actual account and configuration." },
    { kind: "p", html: "If the work requires local inference, choose a compatible agent and model setup and verify its network behavior. Do not infer that guarantee from the word local on an installer. Mobile SSH's optional analytics and plugin downloads also have their own data flows; the app's privacy settings and policy explain them." },
    { kind: "h2", html: "Make control something you can exercise" },
    { kind: "p", html: "A root password is only the beginning. Practical control means you can restrict access, recover from a mistake, inspect what changed and move the workspace without asking an agent platform to preserve it for you. Give those abilities the same attention as the choice of model." },
    { kind: "checklist" },
    { kind: "p", html: "None of this makes a home server automatically safer than a managed service. A neglected machine with broad credentials can be a poor place for private data. Choose the level of responsibility you can maintain. The advantage is being able to make that choice, inspect it, and change it when your needs change." },
    { kind: "pull", html: "Own the machine when you can. Keep control of the workspace wherever it runs." },
    { kind: "p", html: "The next time a ready-made agent environment asks for your repository, take a moment before connecting it. Decide where the files should live, who should administer that host, and how you will take the work with you. Then pick up your phone. Mobile SSH can meet you at the server you chose." }
  ],
  comparison: {
    heading: "Who controls what?",
    dimension: "Decision",
    models: [
      { id: "managed", title: "Managed agent workspace" },
      { id: "cloud", title: "VM in your cloud account" },
      { id: "owned", title: "Hardware you own" }
    ],
    rows: [
      { id: "hardware", label: "Physical hardware", managed: "Service or infrastructure provider", cloud: "Cloud provider", owned: "You own the machine" },
      { id: "admin", label: "Administrative control", managed: "Defined by the service", cloud: "You administer the guest OS", owned: "You administer the host" },
      { id: "storage", label: "Workspace and storage", managed: "Service-managed disks and retention", cloud: "Volumes and lifecycle you configure", owned: "Storage you choose and maintain" },
      { id: "access", label: "Credentials and network policy", managed: "Service controls plus permissions you grant", cloud: "Your OS, identity and network configuration", owned: "Your OS, identity and network configuration" },
      { id: "portability", label: "Backups and the way out", managed: "Check export and deletion options", cloud: "Manage copies outside the instance", owned: "Manage copies outside the machine" },
      { id: "maintenance", label: "Operational work", managed: "Provider runs the environment; you configure its use", cloud: "You maintain the guest; provider maintains infrastructure", owned: "You maintain hardware, OS and connectivity" }
    ],
    note: "Typical arrangements, not guarantees about every service. In every column, model-provider data flows depend on the agent and configuration you choose."
  },
  checklist: {
    heading: "Six ways to keep control",
    steps: [
      { heading: "Give credentials a small job", body: "Use separate, revocable credentials for the workspace. Grant only the repository and service permissions the task needs." },
      { heading: "Limit the workspace", body: "Run the agent as a dedicated, unprivileged user where practical. Keep unrelated private files and production secrets outside its reach." },
      { heading: "Verify the SSH destination", body: "Check unfamiliar host fingerprints through a trusted channel. Investigate changed keys before replacing a saved identity." },
      { heading: "Keep an independent backup", body: "Keep encrypted copies under accounts you control, separate from the working host. Test a restore, including uncommitted work you need to preserve." },
      { heading: "Review what leaves the host", body: "Check model endpoints, plugins, external tools and telemetry settings. Share the minimum context needed and review the resulting changes." },
      { heading: "Practice moving", body: "Restore the workspace on another host, reconnect and run its tests. The ability to leave should be something you have tried." }
    ]
  },
  sources: {
    heading: "Sources and boundaries",
    aws: "AWS: shared responsibility for cloud infrastructure and guest systems",
    anthropic: "Claude Code: local execution, cloud connections and data usage",
    google: "Gemini CLI: model services and applicable privacy notices",
    checked: "Source documentation checked October 5, 2026. Account terms and service capabilities can change."
  },
  cta: {
    heading: "Connect to the server you chose.",
    body: "Use Mobile SSH on Android or iOS to reach your own machines, run your tools and keep your workspace within reach.",
    playButton: "Get it on Google Play",
    iosButton: "Join the iOS beta",
    docsLink: "Set up your first connection",
    privacyLink: "Read the privacy policy"
  }
};
