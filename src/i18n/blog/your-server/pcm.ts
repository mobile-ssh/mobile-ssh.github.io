import { defineYourServer } from "./define";

export const pcm = defineYourServer({
  "metaTitle": "Na your agent. Na your server. Na your rules. | Mobile SSH",
  "metaDescription": "Choose where your coding agent go run: workspace wey provider manages, your own cloud account, or hardware wey you own. Keep access, backups and how to leave for your hand.",
  "back": "Blog",
  "eyebrow": "Ownership",
  "title": "Na your agent. Na your server. Na your rules.",
  "standfirst": "Agent workspace wey don ready fit save setup time. Before you give am your repository, decide who suppose hold di machine, di credentials and di way to leave. Mobile SSH lets you bring your own host, from di computer under your desk to VM inside your own cloud account.",
  "author": "Di Mobile SSH Editorial Board",
  "date": "5 October 2026",
  "readingTime": "7 minutes to read",
  "figure": {
    "heading": "Choose di host. Check di route to di model.",
    "phone": "Your phone · Mobile SSH",
    "connection": "SSH to di host wey you choose",
    "hosts": [
      {
        "id": "owned",
        "title": "Your own physical machine",
        "detail": "For house, office or your own server room"
      },
      {
        "id": "cloud",
        "title": "VM inside your own cloud account",
        "detail": "Na you manage di guest system; provider runs di hardware"
      }
    ],
    "workspace": "Files, tools and di agent process dey stay for di host wey you choose",
    "modelConnection": "If na cloud model you use, prompts and selected context dey leave di host",
    "model": "Di model service wey you choose",
    "caption": "Na three separate decisions: how you connect, where code dey run, and where model dey process am. If you control di first two, e no mean say di third one dey local."
  },
  "body": [
    "Di invitation sweet: open workspace and see Codex, Claude Code or Gemini CLI already dey wait. No machine to prepare, no package to install. Connect repository, explain di task, and let cloud VM do di work. For experiment or project wey you no plan keep, dat convenience fit be exactly wetin you want.",
    "Then di experiment turn your everyday workspace. Private code enter. Test data, internal documents and any credentials wey you supply follow am enter. Before dat handover turn normal routine, ask question wey go matter for long: who controls di place where this work dey live?",
    "Workspace wey don ready get person wey dey run am",
    "For agent environment wey provider manages, na another person dey operate di execution host. Dem fit clone your repository there, upload data, and get permissions to reach other systems. Isolation, administrator access, how long dem keep things, and export options depend on di service. Tools wey dem don install tell you how fast you fit start; dem no tell you much about those arrangements.",
    "You fit make dat choice with your eyes open. Managed environments fit reduce maintenance and give useful isolation. Read wetin happens to workspace disks, transcripts, snapshots and credentials, even after session ends or account closes. You no need assume bad intention before you ask for clear answers about your private work.",
    "Keep di keys. Keep backup. Keep di chance to leave.",
    "Three places to run di same agent",
    "VM inside your own cloud account gives another arrangement. Na you choose di guest operating system, install tools, give access and manage di instance from start to finish. Di cloud company still dey operate di physical infrastructure. When you call am your server, na administrative control you mean, no be say di hardware under am belongs to you. <a href=\"#source-cloud\">[1]</a>",
    "Physical machine wey you own goes further: na you choose di hardware and decide where e go stay. Desktop wey you already get, small home server or office machine fit hold di workspace. You still inherit di practical jobs: power, connection, repairs, patches and recovery. Ownership gives you decisions to make; e no go make dem for you.",
    "Bring your server come your phone",
    "Mobile SSH works with either option wey you operate yourself. Connect to SSH host wey you fit reach for your local network, through network path wey you configure, or inside your cloud account. Normal SSH sessions no need session relay wey Mobile SSH operates or Mobile SSH account. Na you choose di destination and supply im credentials.",
    "Install di agent wey you want for dat host. Open im working directory, run Codex, Claude Code or Gemini CLI, and use di terminal wey you already sabi. You fit keep session under tmux, herdr or Zellij and return to am from your phone as long as di host and process still dey run. Di work belongs to dat environment; changing your phone no mean say you must move di repository.",
    "Dat one leaves useful choices for your hand. Keep sensitive test data for local machine. Use cloud VM when im resources fit di task. Change agents without rebuilding your mobile workflow. Mobile SSH gives terminal access, SFTP and tunnels; e no force you to rent one particular agent workspace.",
    "Your server and your model na separate choices",
    "This difference matters pass when we dey talk about private data. If you run agent for hardware wey you own, e no mean say im model still dey run there. Agent wey uses cloud fit send prompts, selected repository context and tool results to di model service. Di agent process and working tree fit stay for your server while inference dey happen somewhere else. <a href=\"#source-claude\">[2]</a> <a href=\"#source-gemini\">[3]</a>",
    "SSH dey encrypt di connection between your phone and where e connects to. E no stop software for di host from reading files wey e get permission to read or making im own network requests. Decide which model service di agent uses, wetin e fit read, and which tools or integrations fit send data comot. Check di policies for di actual account and setup wey you dey use.",
    "If di work needs local inference, choose agent and model setup wey fit work together and verify wetin dem dey do for network. No assume dat guarantee just because installer write local. Mobile SSH optional analytics and plugin downloads still get their own data flows; di app privacy settings and policy explain dem.",
    "Make control something wey you fit use",
    "Root password na only di beginning. Real control means you fit restrict access, recover from mistake, inspect wetin change and move di workspace without begging agent platform to preserve am for you. Give those abilities di same attention wey you give model choice.",
    "None of this makes home server automatically safer than managed service. Machine wey nobody maintains and wey get credentials with too much access fit be bad place for private data. Choose di level of responsibility wey you fit sustain. Di advantage na say you fit make dat choice, inspect am, and change am when your needs change.",
    "Own di machine when you fit. Keep control of di workspace anywhere e dey run.",
    "Next time ready-made agent environment asks for your repository, pause small before you connect am. Decide where di files suppose stay, who suppose manage dat host, and how you go carry di work with you. Then pick up your phone. Mobile SSH fit connect you to di server wey you choose."
  ],
  "comparison": {
    "heading": "Who controls wetin?",
    "dimension": "Decision",
    "models": [
      {
        "id": "managed",
        "title": "Agent workspace wey provider manages"
      },
      {
        "id": "cloud",
        "title": "VM inside your own cloud account"
      },
      {
        "id": "owned",
        "title": "Hardware wey you own"
      }
    ],
    "rows": [
      {
        "id": "hardware",
        "label": "Physical hardware",
        "managed": "Service or infrastructure provider",
        "cloud": "Cloud provider",
        "owned": "Na you own di machine"
      },
      {
        "id": "admin",
        "label": "Administrator control",
        "managed": "Na di service defines am",
        "cloud": "Na you manage di guest operating system",
        "owned": "Na you manage di host"
      },
      {
        "id": "storage",
        "label": "Workspace and storage",
        "managed": "Na service manages disks and how long data stays",
        "cloud": "Volumes and lifecycle wey you configure",
        "owned": "Storage wey you choose and maintain"
      },
      {
        "id": "access",
        "label": "Credentials and network policy",
        "managed": "Service controls plus permissions wey you give",
        "cloud": "Your OS, identity and network setup",
        "owned": "Your OS, identity and network setup"
      },
      {
        "id": "portability",
        "label": "Backups and how to leave",
        "managed": "Check export and delete options",
        "cloud": "Manage copies outside di instance",
        "owned": "Manage copies outside di machine"
      },
      {
        "id": "maintenance",
        "label": "Work to keep am running",
        "managed": "Provider runs di environment; you configure how to use am",
        "cloud": "You maintain di guest; provider maintains infrastructure",
        "owned": "You maintain hardware, OS and connection"
      }
    ],
    "note": "Na common arrangements, no be guarantee for every service. For every column, di data wey goes to model provider depends on di agent and setup wey you choose."
  },
  "checklist": {
    "heading": "Six ways to keep control",
    "steps": [
      {
        "heading": "Give credentials small job",
        "body": "Use separate credentials wey you fit revoke for di workspace. Give only di repository and service permissions wey di task needs."
      },
      {
        "heading": "Limit di workspace",
        "body": "Where e practical, run di agent as separate user wey no get special privileges. Keep other private files and production secrets where e no fit reach dem."
      },
      {
        "heading": "Verify di SSH destination",
        "body": "Check host fingerprints wey you no know through trusted channel. Investigate keys wey change before you replace saved identity."
      },
      {
        "heading": "Keep independent backup",
        "body": "Keep encrypted copies under accounts wey you control, separate from di working host. Test restore, including work wey you never commit but need preserve."
      },
      {
        "heading": "Review wetin leaves di host",
        "body": "Check model endpoints, plugins, external tools and telemetry settings. Share only di context wey di task needs and review di changes wey come out."
      },
      {
        "heading": "Practise how to move",
        "body": "Restore di workspace for another host, connect again and run im tests. Di ability to leave suppose be something wey you don try."
      }
    ]
  },
  "sources": {
    "heading": "Sources and where di claims stop",
    "aws": "AWS: how cloud infrastructure and guest-system responsibility dey shared",
    "anthropic": "Claude Code: local execution, cloud connections and how dem use data",
    "google": "Gemini CLI: model services and privacy notices wey apply",
    "checked": "We check source documentation on 5 October 2026. Account terms and wetin services fit do fit change."
  },
  "cta": {
    "heading": "Connect to di server wey you choose.",
    "body": "Use Mobile SSH for Android or iOS to reach your own machines, run your tools and keep your workspace close to hand.",
    "playButton": "Get am for Google Play",
    "iosButton": "Join di iOS beta",
    "docsLink": "Set up your first connection",
    "privacyLink": "Read di privacy policy"
  }
});
