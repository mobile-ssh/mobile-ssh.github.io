import type { FlightPost } from "./types";

// Simplified Chinese translation of "Eleven hours over the Atlantic".
// Mirrors en.ts key-for-key. Inline markup and HTML entities are carried over
// verbatim; every measured figure (703 ms, 477 ms, 62 ms, 44 ms, 35,786 km …)
// is fact-checked and must not drift.

export const zh: FlightPost = {
  meta: {
    title: "大西洋上空的十一个小时 | Mobile SSH",
    description:
      "在 35,786 km 的高度，光本身往返一趟就要 477 ms。在飞机上干活，真正会崩的到底是什么、为什么和你想的不一样，以及怎样把一趟长途航班用来交付而不是重刷老电影。来自 Mobile SSH——面向 Android、iPhone 和 iPad 的 SSH、SFTP 与终端客户端。"
  },

  backLabel: "博客",

  masthead: {
    eyebrow: "现场报告",
    boardTitle: "出发",
    legend: {
      time: "时刻",
      flight: "航班",
      destination: "目的地",
      remarks: "备注"
    },
    headline: "大西洋上空的十一个小时",
    headlineTranslated: "大西洋上空的十一个小时",
    deck: `24B 座在看一部他看过三遍的电影。24C 座正在同一个 Wi-Fi 上审查
      <span class="hl">四台服务器</span>。差别不在连接——
      而在于两人各自把什么放在了连接的另一端。`,
    byline: [
      { key: "作者：", value: "Mobile SSH 编辑部" },
      { key: "日期：", value: "2026 年 8 月 10 日" },
      { key: "阅读：", value: "8 分钟" },
      { key: "链路：", value: "703 ms，GEO" }
    ]
  },

  sections: {
    twoSeats: {
      heading: "两个座位，一颗卫星",
      intro: [
        `十一个小时，从纽约飞往东边的某处。客舱灯光转成琥珀色。24B 座打开椅背屏幕，翻过四百部片子的
          目录，选中了一部他已经看过三遍的电影。这不是批评。在一根加压的铝管里消磨十一个小时，
          这是最合情合理的一种做法，我们大多数人都这么干过。`,
        `24C 座掏出一部手机。`
      ],
      outro: [
        `两个座位连的是同一个 Wi-Fi，离地面一样远。等到起落架接地时，其中一个看完了一部台词都能背下来的
          电影，另一个合并了三个分支、清掉了一整套失败的测试，还把四千英里外一台机器上卡住的任务重启了。`,
        `有意思的不是这件事做得到，而是它<em>为什么</em>做得到——以及为什么那个显而易见的做法，
          就是大多数人试过一次、然后在格陵兰上空某处放弃的那个做法，根本行不通。`
      ]
    },

    aboveYou: {
      heading: "你头顶上到底是什么",
      intro: [
        `航空公司说「Wi-Fi」的时候，可能指的是两种截然不同的东西，而你这架飞机的机身上焊着的是哪一种，
          决定了后面的一切。`,
        `老一套是一颗地球静止轨道卫星，停在 <strong>35,786 km</strong> 的高度。那个高度不是谁为了你的
          方便挑的；它恰好是绕一圈需要二十四小时的距离，于是卫星看上去悬着不动。后果是一道任何工程预算
          都吵不赢的算术题：上去再下来，来回两趟，<strong>光本身就要 477 ms 的往返</strong>，
          这还没算上任何一台路由器。`,
        `新一套是一整群低地球轨道卫星，大约在 <strong>550 km</strong>
          ——近了大约六十五倍，往返传播时延 <strong>7.3 ms</strong>。`
      ],
      afterDiagram: [
        `空中实测和物理对得上。对 Ookla 2025 年第一季度机上测速数据的分析发现，
          <strong>Starlink 的往返时延中位数是 44 ms，而 Hughes、Intelsat 和 Viasat 是 703–757 ms</strong>
          ——差距大约十六倍。另一支团队为 ACM IMC 2025 在 <strong>7 家航司的 25 个航班</strong>上给真实设备
          装了探针，独立测出了同样的形状：LEO 低于 40 ms，GEO 高于 550 ms。`
      ],
      afterChart: [
        `对一次跨洋长途来说，诚实的数字比标题稍差一点。同一项研究测得
          <strong>太平洋上空的中位数是 62 ms，区间 19–86 ms</strong>。这才是该记在脑子里的那个数。
          它依然出色。但它不是 44。`
      ]
    },

    rollout: {
      heading: "扫兴的部分",
      intro: [
        `按惯例，产品站上的博客文章写到这里，该告诉你未来已经到了。`,
        `它到得并不均匀，而最后轮到的那批飞机，正是<em>你坐的</em>这批。`,
        `窄体机先改装——数量多、周转快，飞的是国内短途，没人打算在上面连着干十一个小时的任何事。
          真正跨洋的宽体机排在队尾。截至 2026 年年中，United 已有 <strong>400 多架飞机装上 Starlink</strong>，
          并预计年底接近一千架——但其中只有大约 <strong>六十架是宽体机</strong>，它第一班装了 Starlink 的
          宽体跨大西洋航班（纽瓦克—希思罗）迟至 <strong>2026 年 6 月</strong>才执飞，整个宽体机队要等到
          <strong>2027 年夏天</strong>才完工。Virgin Atlantic 已经做完了它的 <strong>十二架 A350</strong>
          ——大约是<strong>宽体机队的 28%</strong>——787 排在 2026 年下半年，A330neo 排到 2027 年。`
      ],
      afterFigure: [
        `所以：如果你是在 2026 年的一趟洲际航班上读到这篇文章，概率仍然不站在你这边。
          你多半连的是那条 700 ms 的链路，而不是 62 ms 的那条。`,
        `而这让本文余下的部分更有用，不是更没用。`
      ]
    },

    filmVsShell: {
      heading: "为什么电影没事，终端不行",
      cmdComment: "搬一个字符，起一整个会话",
      prose: [
        `电影和 shell 在相反的方向上失败，而机上 Wi-Fi 恰好是其中一个最不该碰上的网络。`,
        `电影是<em>带宽</em>问题，它不在乎时延。它会缓冲。第一帧晚到 700 ms 谁也不会察觉，
          因为这段体验里没有任何东西取决于电影对你的反应。按下播放，等一会儿，看。往返只发生一次。`,
        `交互式 shell 正好是它的镜像。它几乎不需要带宽——一个终端会话的量级是千比特，不是兆比特——
          但<strong>你每敲一个指望回显出来的键，都要付一趟往返</strong>。在 700 ms 下，这不叫连接慢，
          这叫每打一个字都要停顿三分之二秒的对话。`,
        `这就是大家想错的地方。他们在机上门户页面看到「50 Mbps」，断定连接没问题，打开一个终端，
          然后发现「没问题」跟这事毫无关系。这里的货币不是带宽。<strong>是往返次数。</strong>`
      ]
    },

    whatBreaks: {
      heading: "真正会崩的是什么（不是打字）",
      intro: [
        `这个失败比「感觉很慢」要具体得多，而研究对痛点落在哪里说得异常清楚。`,
        `在一项 31 名被试、对比端到端输入时延 20 ms 与 200 ms 的对照实验里，
          <strong>成段打字几乎没动</strong>：每字符 290.9 ms 对 302.7 ms，作者认为这个差异称不上显著。
          错误率完全一样。`
      ],
      afterTable: [
        `但<em>纠错</em>任务——用方向键把光标挪回去改文字，也就是你在编辑器里真正在做的那件事——
          从 <strong>38.9 秒变成 46.5 秒，慢了大约 20%，效应量非常大</strong>（p &lt; 0.001，d = 1.673）。
          作者把机制说得很直白：在移动光标的过程中，你不得不一直等屏幕，
          因为光标落在哪里决定了你下一步做什么。`,
        `即使速度没变，主观负担也在变糟。在打字任务上，尽管成绩在统计上没有差别，
          自评<strong>挫败感仍然从 20.9 升到了 31.3</strong>。`,
        `把这些换算到终端上，它精确点出了在高空散架的是什么：不是把一条命令敲出来。是
          <code>vim</code> 里的移动、Tab 补全、在 <code>less</code> 里翻页，还有 REPL 那种戳一下、
          看一眼的节奏。这里每一样都是一个循环：你下一步做什么，取决于刚刚返回了什么。`
      ]
    },

    moveTheWork: {
      heading: "搬动工作，而不是搬动按键",
      intro: [
        `一旦你接受往返次数才是稀缺资源，解法就不再是「换一架更快的飞机」，而变成一个架构问题：
          <strong>少走几趟往返，并让每一趟运得更多。</strong>`,
        `有个众所周知的工具正面硬刚这件事。Mosh 会预测你的按键将产生什么效果，抢在服务器确认之前就在
          本地回显出来。实测效果相当惊人：在往返时延约半秒的链路上，按键响应中位数从
          <strong>503 ms 降到 5 ms 以内</strong>。在一条从 MIT 到新加坡的跨洋路径上，
          <strong>从 273 ms 降到 5 ms 以内</strong>。`,
        `但要读小字，因为小字才是重点。Mosh 能预测大约 <strong>70% 的按键</strong>。剩下大约 30%
          预测不了的部分，用作者自己的话说，<em>主要是导航</em>——对这部分而言，它的时延曲线又变回了
          普通 SSH 的样子。也就是说：被高时延罚得最狠的那种交互，恰恰是本地回显救不了的那一种。`
      ],
      chartHeading: "能预测的与不能预测的",
      afterChart: [
        `所以预测有帮助，但救不了你。真正能救你的，是拒绝那么频繁地待在循环里。`,
        `<strong>别再对着时延打字。把耗时的活儿放到远端，然后去看它一眼。</strong>
          一次构建、一套测试、一次数据迁移、一个编程智能体——这些都不需要你陪着走完往返。
          它们只需要你在开头出现，在要做决定的时候出现。中间的一切是机器的事，
          而机器在地面上，连着一条好网。`,
        `这也是为什么在高空里<em>并行</em>胜过<em>交互</em>。你没法在 700 ms 里打字如飞，
          但你完全可以同时盯着四台服务器，因为盯梢不受时延约束——它受注意力约束，
          而你有整整十一个小时的注意力，且无处可花。`
      ]
    },

    seat24c: {
      heading: "24C 座到底在做什么",
      lead: `具体到一部手机、一条糟糕的链路上：`,
      outro: [
        `这些都不是为飞机发明的。在一条恶劣链路上远程干活，向来就是这个样子，
          而飞机只是一条格外诚实的恶劣链路。`
      ]
    },

    caveat: {
      heading: "一处诚实的保留",
      prose: [
        `有两件事我们没能核实，也不打算假装核实过：`,
        `<strong>你所在航司的网络到底放不放 SSH 出去。</strong>关于各家机上 Wi-Fi 服务商的端口封锁、
          VPN 政策和空闲超时，我们找不到可靠的公开证据——倒是有一大堆语气笃定、一查就站不住的论坛说法。
          它因承运人而异、因服务商而异、因机型而异。在你围着它安排一趟长途之前，先在短途航班上试一试。`,
        `<strong>客舱里的时间实际花在了哪儿。</strong>被引用最多的那些机上娱乐统计数字，
          追下去竟然出自没有任何方法论的广告刊例，我们把它们扔了。我们找到的最好的问卷证据——
          Inmarsat/Censuswide，十个国家 11,231 名乘客，尽管调查是 2022 年做的，问的又是意愿而不是实测
          时间——显示娱乐大幅领先于工作：<strong>41% 想看已下载的电影，35% 想在线看，
          想干活的占 26%。</strong>`,
        `所以，请把 24B 座当成一个人物，而不是一个统计量。重点从来不是看电影有什么不对，
          而是另一个选项已经不再是「没得选」了。`
      ]
    },

    descent: {
      heading: "下降",
      prose: [
        `电影在它前三次结束的地方结束了。飞机开始下降。24B 座度过了一趟相当不错的飞行，
          落地时精神饱满，这也值点什么。`,
        `24C 座落地时活儿已经干完了——因为活儿从来就不在座位上。它自始至终都在地面的一台机器上，
          手机不过是望向它的一扇窗。`,
        `十一个小时，耗在 700 ms 上是很长的一段时间；用来盯着四台压根不在乎那颗卫星的服务器，
          则短得很。`
      ]
    }
  },

  seat24b: {
    tag: "24b 座",
    lines: [
      { time: "19:04", verb: "播放", text: "— 电影，118 分钟" },
      { time: "21:02", verb: "播放", text: "— 电影，再来一遍" },
      { time: "23:10", verb: "闲置", text: "— 客舱熄灯" },
      { time: "05:41", verb: "醒来", text: "— 下降" }
    ]
  },

  seat24c: {
    tag: "24c 座",
    lines: [
      { time: "19:04", verb: "接入", text: "— 4 个会话，1 个网格" },
      { time: "21:02", verb: "合并", text: "— 三个分支" },
      { time: "23:10", verb: "转绿", text: "— 失败的测试套件已清干净" },
      { time: "05:41", verb: "重启", text: "— 卡住的任务跑起来了" }
    ]
  },

  quotes: [
    `同一架飞机，同一副天线，同样糟糕的 Wi-Fi。差别完全在于
        你把什么放在了它的另一端。`,
    `你坐的这架，是他们最后才会升级的那一架。按 700 ms 做打算，
        遇上 62 ms 就当惊喜。`,
    `时延不向你的打字征税。它向每一个等着看屏幕的决定征税。`
  ],

  orbit: {
    alt: "示意图：位于 35,786 km 的地球静止轨道卫星，光的往返就要 477 ms；位于 550 km 的低地球轨道卫星只要 7.3 ms。",
    geoLabel: "GEO 35,786 km",
    geoValue: "光 477 ms",
    leoLabel: "LEO 550 km",
    leoValue: "光 7.3 ms",
    aircraft: "24C 座，11,000 m",
    caption: "非等比例——凡是画进 35,786 km 的图，从来就没等比例过。"
  },

  latencyChart: {
    rows: [
      { label: "GEO — Hughes / Intelsat / Viasat，中位数", value: "703 ms" },
      { label: "太平洋上空的 LEO — 长途中位数", value: "62 ms" },
      { label: "LEO — Starlink 机上，总体中位数", value: "44 ms" }
    ],
    note: "各柱采用同一线性刻度。来源 1。"
  },

  rolloutFigure: {
    items: [
      {
        name: "United",
        value: "≈60",
        text: `架宽体机在飞 Starlink，而已改装的飞机超过 400 架。其余宽体机队
            要到 2027 年夏天才完工。`
      },
      {
        name: "Virgin Atlantic",
        value: "约 43 架中的 12 架",
        text: `宽体机已完工——大约 28%。787 贯穿 2026 年下半年，
            A330neo 排到 2027 年。`
      }
    ],
    note: `来源 5 和 6。United 其余宽体机预计 2027 年夏天完成；Virgin 的 787
          贯穿 2026 年下半年，A330neo 排到 2027 年。`
  },

  latencyTable: {
    caption: "Schmid 等，MUM '23 — n = 31，输入时延 20 ms 对 200 ms",
    head: ["任务", "20 ms", "200 ms", "结论"],
    rows: [
      { task: "打字 / 每字符", low: "290.9", high: "302.7", verdict: "不显著" },
      { task: "纠错任务", low: "38.9 s", high: "46.5 s", verdict: "+20%" },
      { task: "挫败感", low: "20.9", high: "31.3", verdict: "p=0.004" }
    ]
  },

  moshChart: {
    rows: [
      { label: "mosh 能即时回显的按键", value: "≈70%" },
      { label: "预测不了的——“主要是导航”", value: "≈30%" }
    ],
    note: "来源 4。"
  },

  windows: [
    {
      title: "比连接活得更久的会话",
      body: `飞机切换波束，门户重新认证，连接断了。<code>tmux</code> 照样让 shell 在服务器上跑着；
            会话是远端的一样东西，不是你手里的一样东西。Eternal Terminal 把同一个想法再推一步，
            让会话连 TCP 连接本身都能挺过去，缓冲并回放你错过的内容。
            <span style="color:var(--dim)">（在有过滤的网络上要提醒一句：ET 需要一个自己的端口——默认
            2022——这是在 SSH 的 22 <em>之外</em>另加的。）</span>`
    },
    {
      title: "一次不止处理一个问题",
      body: `网格里放几个会话，几台已保存的服务器，每个都跑着一件在两次决策之间不需要人盯着的事。`
    },
    {
      title: "让智能体去打字",
      body: `编程智能体跑在<em>你自己的</em>服务器上，用地面的时延，就在代码所在的地方。
            它们不交卫星税；只有你回答它们的时候你才交。`
    },
    {
      title: "该响的时候才响",
      bellLabel: "（响铃）",
      body: `真正需要人的时候，智能体提醒才会响——于是这趟飞行花在审查和决策上，
            而不是盯着提示符等回显。`
    }
  ],

  cta: {
    cmdComment: "免费 · 开源 · Apache-2.0",
    heading: "你的下一趟长途，是十一个小时的服务器时间。",
    prose: [
      `Mobile SSH 是面向 Android、iPhone 和 iPad 的原生 SSH、SFTP 与终端客户端。多会话、
          内置 tmux 管理器、Eternal Terminal，还有智能体需要你时的推送提醒。
          免费，无需账号，没有广告，开源。`
    ],
    tags: ["无广告", "无需账号", "数据留在设备上", "Apache-2.0"],
    playButton: "在 Google Play 上加入测试",
    iosButton: "加入 iOS 测试版",
    note: `Android 目前处于封闭测试——请用你打算用来测试的 Google 账号加入，
      并在手机浏览器里打开链接；封闭测试在 Google Play 应用内可能看不到。`
  },

  sources: {
    heading: "来源",
    items: [
      `Ookla 2025 年第一季度机上数据，分析见 <em>A First Look at Starlink In-Flight Performance</em> — arXiv:2508.09839，同行评审版见 IEEE Xplore doc 11353148。（44 ms 对 703–757 ms；太平洋中位数 62 ms，区间 19–86 ms。）`,
      `<em>From GEO to LEO: First Look Into Starlink In-Flight Connectivity</em>，ACM IMC 2025 — Jang、Varvello、Raman、Zaki。25 个航班，7 家航司。（LEO &lt;40 ms 对 GEO 550 ms 以上。）`,
      `Schmid 等，MUM '23，<em>Effects of Text Input Latency</em> — n=31，20 ms 对 200 ms。（290.9 对 302.7 ms/字符，不显著；纠错 38.9 s → 46.5 s，p&lt;0.001，d=1.673；挫败感 20.9 → 31.3，p=0.004。）`,
      `Winstein &amp; Balakrishnan，<em>Mosh: An Interactive Remote Shell for Mobile Clients</em>，USENIX ATC 2012。（503 ms → &lt;5 ms；273 ms → &lt;5 ms；约 70% 的按键可预测；预测不了的余下部分「主要是导航」。）`,
      `United Airlines 新闻中心，2026 年 6 月 22 日，<em>United Accelerates Starlink Wi-Fi Rollout with First Widebody Transatlantic Flight</em>。（400 多架飞机；约 60 架宽体机；宽体机队全部完成于 2027 年夏天。）`,
      `Virgin Atlantic 新闻稿，2026 年 4 月 12 日。（A350 已完成；787 在 2026 年下半年；A330neo 在 2027 年。）`,
      `Eternal Terminal 文档 — eternalterminal.dev/howitworks、github.com/MisterTea/EternalTerminal。（缓冲与回放；除 SSH 之外默认还需端口 2022。）`,
      `Inmarsat/Censuswide 乘客体验调查 2022，n=11,231，覆盖 10 个国家。（已下载电影 41%，在线观看 35%，工作 26% — 为陈述意愿，可多选，2022 年实施。）`
    ],
    quitHint: "— 按 q 退出"
  },

  colophon: [
    "Mobile SSH — 面向 Android、iPhone 和 iPad 的免费开源 SSH / SFTP / 终端。",
    "Apache-2.0。没有广告，无需账号，没有 Pro 版本。"
  ]
};
