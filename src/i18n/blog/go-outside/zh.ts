import { defineGoOutside } from "./define";

export const zh = defineGoOutside({
  metaTitle: "出门走走。智能体还在干活。 | Mobile SSH",
  metaDescription:
    "你的编程智能体运行在服务器上，而不是手机上。在 tmux 里启动它，然后出门，让提醒在真正需要人的时候找到你。",
  back: "博客", eyebrow: "现场手记",
  title: "出门走走。智能体还在干活。",
  standfirst:
    "让智能体活着的从来不是手机，而是服务器。一旦你真的相信这一点，在户外待一个下午就不再有任何代价——你离开，工作继续，唯一会打断你的，是一个确实需要回答的问题。",
  author: "Mobile SSH 编辑委员会", date: "2026年9月7日", readingTime: "阅读约 7 分钟",

  board: {
    ariaLabel:
      "一块状况板，把四个正在运行的会话当作浪点来读：三个在稳定推进，另一个名为 claude 的会话正在等人。",
    heading: "浪况",
    timeLabel: "06:14 HST",
    breakHeading: "浪点",
    swellHeading: "浪高",
    stateHeading: "状态",
    rows: [
      { name: "api-prod", swell: "2-3 ft", state: "上涨中", needsYou: false },
      { name: "nightly-tests", swell: "6-8 ft", state: "持稳", needsYou: false },
      { name: "claude", swell: "10+ ft", state: "需要你", needsYou: true },
      { name: "web-api", swell: "1-2 ft", state: "持稳", needsYou: false }
    ],
    statusLine: "4 个会话 · 1 个等待中 · 上次检查 06:14",
    caption:
      "你自己那台机器上的四个会话。其中三个根本不在乎你人在哪里。第四个才是把手机从口袋里掏出来的唯一理由。"
  },

  body: [
    `无论构建有没有跑完，一天的工作都会结束。<em>Pau hana</em>——一天工作的结束——按它自己的节奏到来，而通常的应对是无视它：让笔记本继续开在桌上，半盯着进度条，把一个晚上交给一个全程都不需要你的进程。`,
    `只有当工作确实发生在你随身携带的那台机器上时，这笔交易才说得通。通常并非如此。智能体是服务器上的一个进程，编辑的是那台服务器磁盘上的文件，跑的是那台服务器的测试。你的手机只是一扇看向它的窗。关上窗，房间还在。`,
    `服务器才是持久的那一层`,
    `在 <code>tmux</code>、<code>herdr</code> 或 Zellij 里启动 Claude Code 或 Codex，会话就属于服务器，而不属于你的连接。信号掉到一格、走进熔岩隧道、把手机收起来两个小时——智能体照样在读代码、改文件、跑测试，因为它从一开始就没有依附于你。`,
    `这就是全部的诀窍，值得说得精确一些，因为功劳很容易被记到错误的组件上。撑着这个进程的不是应用，而是另一端的多路复用器。Mobile SSH 的职责，是干净地离开，再干净地回来。`,
    `你不是电源。别再像电源那样行事。`,
    `定时查看，不要全程盯守`,
    `一个运行一小时的智能体，大约只有九十秒需要人。问题从来不是等待，而是不知道那九十秒<em>什么时候</em>到来——这正是让人一直盯着一块无话可说的屏幕的原因。`,
    `Agent Alerts 回答的就是这个问题。它的检测方式刻意保持笨拙，因此值得信赖：终端响铃、<code>OSC 9</code> 或 <code>OSC 777</code> 通知，以及你在服务器上安装一次的 agent hook。它不会去读你的输出再猜测意图，也没有灵敏度可以调——它只报告另一端的程序真正宣告过的事。`,
    `于是手机一直待在口袋里，直到真的出现一个需要回答的问题。然后它震动，你读一下提示，点一下作答，再把它收起来。整个交互就这么多，而且在海滩上、步道口，或者排队买刨冰时都行得通。`,
    `这座岛也修不好的事`,
    `两条诚实的局限，因为一篇只罗列优点的文章就是广告。`,
    `平台差异是真实存在的，值得提前规划。在 Android 上，应用退到后台时由前台服务保持连接——那条常驻通知<em>就是</em>会话。iOS 完全没有后台执行；当你回来时，它会重新连接并重新挂载到你的多路复用器上。无论哪种情况，服务器上的智能体都不曾停下，这才是关键。关上的只是那扇窗。`,
    `Aloha 不是马虎的借口`,
    `好好地离开是一门小小的纪律。任何你不放心让它无人看管跑上两个小时的事情，都不该在出门前才启动——一个进行到一半的迁移，不会因为你走远而变好。给它一个有自然停止点的任务，让它在编辑前先检查，然后把 diff 留到回来时再审。`,
    `对待通知，也要像对待寻呼机一样克制。如果什么都提醒，就等于什么都没提醒。hook 只在值得打断一个人的状态上触发；保持这样，那一次震动才有意义。`,
    `构建不需要观众。去外面待着吧。`,
  ],

  checklist: {
    heading: "出门之前",
    steps: [
      {
        heading: "在多路复用器里启动它",
        body: "在 <code>tmux</code>、<code>herdr</code> 或 Zellij 里运行智能体，让会话不依赖你的连接，而是比连接活得更久。"
      },
      {
        heading: "安装 agent hook",
        body: "每台服务器一次，在应用内完成。它只是一个任何智能体都能调用的小 shell 脚本——不是某家厂商的集成，也不绑定某一个 CLI。"
      },
      {
        heading: "先确认有一条提醒真的送达",
        body: "触发一次提示，确认手机确实震动，再去依赖它。从没见过它生效的提醒，算不上计划。"
      },
      {
        heading: "给它一个停止点",
        body: "有合理终点的任务胜过开放式任务，因为你已经选择不去盯着它了。"
      }
    ],
    promptLabel: "一个值得放手不管的任务",
    prompt:
      "阅读 AGENTS.md，然后修复失败的 handler 测试。编辑前先检查 diff，运行针对性测试，测试通过后就停下——不要提交。"
  },

  truth: {
    heading: "你走开之后，什么还在继续",
    itemHeading: "当手机进了口袋",
    resultHeading: "还在继续吗？",
    yes: "是",
    no: "否",
    rows: [
      { item: "服务器上的智能体进程", value: "由 tmux、herdr 或 Zellij 托管", survives: true },
      { item: "文件、diff 和测试输出", value: "都在服务器的磁盘上", survives: true },
      { item: "你在会话中的位置", value: "回来时重新挂载", survives: true },
      { item: "Android 上的连接", value: "由前台服务保持", survives: true },
      { item: "iOS 上的连接", value: "没有后台执行——它会重新连接", survives: false },
      { item: "没有信号可以投递的提醒", value: "等手机重新可达时才送到", survives: false }
    ],
    note: "每一行里，智能体都在继续运行。有区别的只是你的手机有没有让那扇窗一直开着。"
  },

  cta: {
    ariaLabel: "获取 Mobile SSH",
    heading: "把笔记本留下，把终端带走。",
    body: "直连你自己的机器，在 tmux、herdr 或 Zellij 里运行你喜欢的任意智能体，让 Agent Alerts 在需要人的时候告诉你——同一个应用里还有 SFTP、隧道和一个真正的终端。",
    tags: ["任意智能体", "直连 SSH", "Agent Alerts", "Apache-2.0"],
    playButton: "在 Google Play 参与测试",
    iosButton: "加入 iOS 测试版",
    note: `Android 正在封闭测试：请用准备参加测试的 Google 账户加入，然后在手机浏览器中打开加入链接。已经加入？直接前往 <a href="{playUrl}" rel="noopener">Play 商品页</a>。`
  }
});
