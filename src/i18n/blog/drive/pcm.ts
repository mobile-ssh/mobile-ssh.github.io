import { defineDrive } from "./define";

export const pcm = defineDrive({
  "metaTitle": "Di blog post wey start as you dey drive go house | Mobile SSH",
  "metaDescription": "One voice writing session wey we imagine compare T3 Code, Moshi, Mobile SSH and paseo.sh: write draft, edit files, write code, stage changes and handle noise.",
  "back": "Blog",
  "eyebrow": "Work wey you fit do with voice",
  "title": "Di blog post wey start as you dey drive go house",
  "standfirst": "Idea come before journey finish. You fit turn am to draft, source code change and diff wey you carefully stage, without say you dey face touchscreen all di time? Four products offer different parts of that conversation.",
  "author": "Di Mobile SSH Editorial Board",
  "date": "11 October 2026",
  "readingTime": "7 minutes to read",
  "evidence": "Na journey wey we imagine, no be driving test. We check di features against official documentation and current source code on 11 October 2026. We no do any test to compare microphone or road noise. Set everything up when you park; driving come first, and screen review or approvals go wait till you stop for safe place.",
  "body": [
    "Di post start inside car wey park. You get repository for computer wey you fit reach, coding agent wey ready, and one idea wey fit disappear if you promise say you go remember am after dinner. Before you move, you choose di project and connect. Na normal talk you use make di first request.",
    "Write blog post draft about our new search feature. Start with di reader problem. Save draft for di blog directory, and no commit am.",
    "Di drive give us di setting, but di useful question na wetin happen after microphone hear you. Na only text box di talk dey fill? Person still need press Send? You fit hear answer and ask follow-up question? T3 Code, Moshi, Mobile SSH and paseo.sh no give di same answer.",
    "One request, four different conversations",
    "T3 Code put di coding agent and di work wey e dey do for repository inside mobile interface. Di built-in voice input wey dem document dey turn talk to text locally on supported iPhones wey dey run iOS 26 or newer. Di main thing be say di transcription dey change di draft for message box; e no send di request go di agent. That one fit work when you park, talk detailed writing instructions, check dem, then send. E no establish say continuous conversation with spoken replies dey. Di work fit continue for di host after you send, but dictation alone no complete di whole hands-free exchange. <a href=\"#source-t3-voice\">[1]</a>",
    "Moshi follow di terminal route. Di voice documentation explain how talk dey become terminal input, with optional Enter to send am, or text wey you fit edit for message box. Moshi own comparison with Paseo call am one-way dictation, instead of conversation wey dey talk back. Coding agent wey already dey run for that terminal fit receive di writing instructions. Di step wey miss for our imagined drive na to hear di result and discuss how to adjust am through documented two-way voice mode. Microphone button and automatic Enter useful, but none of dem prove say spoken feedback or voice approvals dey. <a href=\"#source-moshi-voice\">[3]</a> <a href=\"#source-moshi-conversation\">[4]</a>",
    "paseo.sh document both dictation and voice conversations: speech recognition carry your request go agent, and speech synthesis supply spoken replies. Di voice workflow fit launch and control coding agents, so e be direct candidate for di exchange wey we imagine. Na interaction design wey documentation show, no be result from this journey. Lifecycle limits still dey: di Android implementation wey we review dey pause audio when e enter background. No assume say voice conversation mean say session go continue without break when phone lock. <a href=\"#source-paseo-voice\">[5]</a> <a href=\"#source-paseo-background\">[7]</a>",
    "Mobile SSH experimental Android assistant bring another attraction: voice fit work with di SSH sessions wey you already dey use. Di Live mode support spoken interaction; di controls fit discover hosts and multiplexer resources, read output from di terminal wey you select and, after separate permission wey you choose to allow, send terminal input or run commands wey e support. For person wey dey move between editor, coding agent and test pane, to call existing target by name useful. Na this advantage we get evidence to stress: voice wey join general SSH work, with clear permissions for control. E no be evidence say di speech recognition better pass di other three. <a href=\"#source-mobile-voice\">[8]</a>",
    "Di platform condition matter. Mobile SSH new iOS voice implementation na foreground dictation, review and explicit Send, with spoken replies and read-only access to di terminal wey you select. Di release notes describe private test build. E no give di terminal-writing control wey Android assistant get, and e no dey listen continuously. Di Android Auto development adapter no be car integration wey dem don release either. Di story must follow di build wey you actually get. <a href=\"#source-mobile-ios\">[11]</a> <a href=\"#source-mobile-car\">[12]</a>",
    "Di draft become file, then source code change",
    "Imagine say di outline don ready when you reach di next safe stop. Now di task become more specific. You want make di introduction shorter, correct one example and change small thing for di site source code. You still fit talk those changes with voice; you no need dictate every brace and semicolon.",
    "Make di draft introduction shorter. Then add reading-time label to di article component, follow this project conventions. Run di relevant tests and tell me which files change.",
    "For here, na di coding agent dey write. Di voice interface carry di instruction; repository access, tools wey dey available and permissions decide whether e fit edit di files and implement di component. To use those abilities for this particular blog na workflow we dey propose, no be verified demonstration say all four products complete am. T3 Code provide agent editing and Git actions; Moshi supply real terminal; Paseo document development workflows with agents; Mobile SSH for Android fit address terminal or command target wey get permission. Di agent wey you choose still need understand di task.",
    "Mobile SSH still useful when di voice session finish: di same app get SSH terminal, SFTP text editing and access to remote lazygit. That one give you practical place to inspect di actual files and diff when you park. Na interactive review tools dem be, no be proof say voice fit operate all their buttons. <a href=\"#source-mobile-voice\">[8]</a>",
    "Staging deserve im own sentence",
    "Stage only di blog draft and di article component wey we just review. No touch any other change. No commit or push.",
    "Staging dey select content for di next Git commit; e different from saving, committing and publishing. T3 Code mobile commit workflow select files and stage dem as part of committing. That one no be di same as documentation for separate spoken staging action. For Moshi, Paseo or Mobile SSH Android session wey writing dey enabled, to ask capable agent make e stage specific files na reasonable use of im shell tools, as permissions allow. None of that prove say voice alone fit reliably approve any kind of diff. Check di staged diff when you stop for safe place. <a href=\"#source-t3-git\">[2]</a> <a href=\"#source-paseo-work\">[6]</a>",
    "Then di road noise increase",
    "For our imagined drive, rain start, fan speed increase and passenger begin talk. Na here polished demo stop to answer di important question. We no find controlled road-noise results wey person fit compare for these four products. No evidence dey here to pick recognition winner, reliable distance from microphone, or promise say background conversation no go ever turn to command.",
    "T3 Code on-device transcription describe where recognition happen, no be how accurate e be inside noisy car. Moshi offer several recognition engines for iOS and suggest hosted transcription when local recognition dey struggle with noise; that suggestion no be benchmark. Paseo offer local speech services and cloud alternatives wey you fit configure, but provider choice alone no establish how e go perform for your car. Road noise, other people talk, microphone position and di recognition model wey you select all need evaluation for di actual setup. <a href=\"#source-t3-voice\">[1]</a> <a href=\"#source-moshi-voice\">[3]</a> <a href=\"#source-paseo-voice\">[5]</a>",
    "Mobile SSH offer useful controls wey you fit evaluate for Android: di phone audio path enable platform noise suppression and echo cancellation when dem available, and di voice host get optional RNNoise filtering and gate wey check for speaker wey you don register. Na implementation choices wey we verify, no be proof say e better pass others. Input protection dey off by default, e need setup, and e fit reject di speaker wey you want or accept unwanted talk. Di documentation talk am clearly say di recorded synthetic checks no measure accuracy for human beings wey dey use headset or for car noise. <a href=\"#source-mobile-noise\">[10]</a>",
    "For Mobile SSH Android server-recognition path, di headset controls wey dem document fit start or resume conversation wey you don configure and control active session for background, depending on Android routing and other apps wey take priority. That one matter for reducing how much you touch screen. You still need test am with your phone and headset when you park; e no guarantee steering-wheel buttons, wake words or every car. If di conversation need correction or attention, pause am. <a href=\"#source-mobile-headset\">[9]</a>",
    "Arrive with something wey worth review",
    "Di useful finish na draft and small change wey easy to inspect, wey dey wait when di journey end. T3 Code and Moshi offer different ways to talk instructions into coding workflow wey already dey. Paseo offer documented conversation alternative. Mobile SSH especially worth evaluation for Android users wey want voice beside existing SSH terminals and multiplexer sessions, then full terminal and file tools to review di work. That judgment follow di capabilities, no be noise competition wey we never run.",
    "All four suppose dey for di comparison. Choose di interaction wey match your device and di work, make your requests specific, and give di road your attention. Di draft fit wait. Di final diff deserve your attention."
  ],
  "comparison": {
    "heading": "Wetin this imagined journey fit reasonably ask from each product",
    "productHeading": "Product",
    "voiceHeading": "Voice path wey we verify",
    "fitHeading": "Where e fit and where e stop",
    "rows": [
      {
        "id": "t3",
        "voice": "Supported iOS devices: dictate into draft; sending na separate step.",
        "fit": "Agent editing and mobile Git actions; continuous spoken dialogue never establish."
      },
      {
        "id": "moshi",
        "voice": "Dictate into terminal or message box; Enter na optional.",
        "fit": "Use terminal agent wey already dey; di documented voice na one-way."
      },
      {
        "id": "mobile",
        "voice": "Experimental Android Live conversation and terminal control wey you choose to allow.",
        "fit": "Existing SSH and multiplexer targets; di new iOS assistant na read-only and e need Send."
      },
      {
        "id": "paseo",
        "voice": "Dictation plus speech recognition and spoken replies for voice mode.",
        "fit": "Control agent through conversation; background audio depend on platform and build."
      }
    ],
    "note": "Documentation and source code establish di mechanisms, no be say this scenario finish successfully. No comparative road-noise performance don establish for any of di four."
  },
  "sources": {
    "heading": "Sources for this comparison",
    "t3Voice": "T3 Code: voice input and di limit wey keep am for draft until you send",
    "t3Ios": "T3 Code: where voice dey available for iOS",
    "t3Git": "T3 Code: choose files for commits from mobile",
    "t3Stage": "T3 Code: stage selected files for server",
    "moshiVoice": "Moshi: voice engines, terminal input and how di message box dey work",
    "moshiConversation": "Moshi: how dem describe dictation versus conversation",
    "paseoVoice": "paseo.sh: dictation and voice conversations",
    "paseoWork": "paseo.sh: workflows to develop inside repository",
    "paseoBackground": "Paseo: Android audio lifecycle for v0.11.2",
    "mobileVoice": "Mobile SSH: Android voice controls and normal terminal/file workflows",
    "mobileHeadset": "Mobile SSH: headset controls and their limits",
    "mobileNoise": "Mobile SSH: optional input protection and how audio dey implemented",
    "mobileAudio": "Mobile SSH: how di platform dey process audio",
    "mobileIos": "Mobile SSH: iOS voice implementation and private-build limits",
    "mobileCar": "Mobile SSH: Android Auto adapter wey be for development only",
    "mobileAudit": "Di Mobile SSH references record how we review di private Android and iOS repositories for di revisions wey dem show. Na findings from source code dem be, no be confirmation of public releases or results from tests inside car."
  },
  "cta": {
    "heading": "Keep di conversation close to di work.",
    "body": "Explore Mobile SSH workflows wey documentation cover, and check wetin your platform and build fit do before you set up voice session.",
    "docsLink": "Read di documentation",
    "featuresLink": "Check platform features"
  }
});
