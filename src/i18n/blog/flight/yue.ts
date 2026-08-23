import type { FlightPost } from "./types";

// Cantonese (Traditional) translation of "Eleven hours over the Atlantic".
// Mirrors en.ts key-for-key. Inline markup and HTML entities are carried over
// verbatim; every measured figure (703 ms, 477 ms, 62 ms, 44 ms, 35,786 km …)
// is fact-checked and must not drift.
//
// The split-flap tiles stay English in every locale, so masthead.headline and
// masthead.headlineTranslated carry the real Cantonese headline.

export const yue: FlightPost = {
  meta: {
    title: "大西洋上空十一個鐘 | Mobile SSH",
    description:
      "喺 35,786 km 嘅高度，單係光行一個來回就已經要 477 ms。喺飛機上面做嘢，真正頂唔順嘅係乜、點解同你諗嘅唔一樣，同埋點樣將一程長途航班用嚟出貨而唔係翻睇舊戲。來自 Mobile SSH —— 為 Android、iPhone 同 iPad 而設嘅 SSH、SFTP 同終端機客戶端。"
  },

  backLabel: "網誌",

  masthead: {
    eyebrow: "現場報告",
    boardTitle: "離港",
    legend: {
      time: "時間",
      flight: "航班",
      destination: "目的地",
      remarks: "備註"
    },
    headline: "大西洋上空十一個鐘",
    headlineTranslated: "大西洋上空十一個鐘",
    deck: `24B 位喺度睇緊一齣佢睇過三次嘅戲。24C 位喺同一個 Wi-Fi 上面
      <span class="hl">審查緊四部伺服器</span>。分別唔喺條線度 ——
      而係喺佢哋各自喺條線嗰一頭擺咗啲乜。`,
    byline: [
      { key: "作者：", value: "Mobile SSH 編輯部" },
      { key: "日期：", value: "2026 年 8 月 10 日" },
      { key: "閱讀：", value: "8 分鐘" },
      { key: "線路：", value: "703 ms，GEO" }
    ]
  },

  sections: {
    twoSeats: {
      heading: "兩個位，一粒衛星",
      intro: [
        `十一個鐘，紐約飛去東邊某處。客艙燈轉成琥珀色。24B 位打開椅背個螢幕，碌完四百齣戲嘅目錄，
          揀咗一齣佢已經睇過三次嘅戲。呢句唔係批評。喺一支加壓鋁管入面消磨十一個鐘，
          呢個係最合情合理嘅一種做法，我哋大部分人都做過。`,
        `24C 位攞咗部電話出嚟。`
      ],
      outro: [
        `兩個位連嘅係同一個 Wi-Fi，離地一樣咁高。等到起落架落地嗰陣，其中一個睇完咗一齣連對白都背得出
          嘅戲，另一個就合併咗三條分支、清咗一整套跑唔過嘅測試，仲喺四千英里外一部機上面重啟咗一個
          卡住嘅工作。`,
        `有趣嘅唔係呢件事做得到，而係佢<em>點解</em>做得到 —— 同埋點解嗰個顯而易見嘅做法，
          即係大部分人試過一次、然後喺格陵蘭上空某處放棄咗嗰個做法，根本行唔通。`
      ]
    },

    aboveYou: {
      heading: "你頭頂上面究竟係乜",
      intro: [
        `航空公司講「Wi-Fi」嘅時候，可以係兩樣完全唔同嘅嘢，而你架飛機個機身上面裝咗邊一樣，
          就決定咗之後嘅一切。`,
        `舊嗰套係一粒地球同步靜止軌道衛星，泊咗喺 <strong>35,786 km</strong>。
          嗰個高度唔係邊個為咗你方便而揀嘅；佢啱啱就係繞一圈要二十四個鐘嘅距離，所以粒衛星望落好似
          定咗喺度。後果係一條任何工程預算都拗唔贏嘅算術題：上去再落返嚟，兩個來回，
          <strong>單係光本身就要 477 ms</strong>，呢個仲未計任何一部路由器。`,
        `新嗰套係一大群低地球軌道衛星，大約喺 <strong>550 km</strong>
          —— 近咗大約六十五倍，來回傳播時間 <strong>7.3 ms</strong>。`
      ],
      afterDiagram: [
        `空中實測同物理夾得返。有人分析咗 Ookla 2025 年第一季嘅機上測速數據，發現
          <strong>Starlink 嘅來回時間中位數係 44 ms，而 Hughes、Intelsat 同 Viasat 就係 703–757
          ms</strong> —— 差距大約十六倍。另一隊人為咗 ACM IMC 2025，喺 <strong>7 間航空公司嘅 25
          班機</strong>上面用真實裝置做量度，獨立量到同一個形狀：LEO 低過 40 ms，GEO 高過 550 ms。`
      ],
      afterChart: [
        `對一程跨洋長途嚟講，誠實嘅數字比個標題差少少。同一份研究量到
          <strong>太平洋上空中位數 62 ms，範圍 19–86 ms</strong>。呢個先係你應該記喺個腦度嗰個數。
          佢依然出色。但佢唔係 44。`
      ]
    },

    rollout: {
      heading: "掃興嗰部分",
      intro: [
        `照計，產品網站上面篇網誌寫到呢度，就應該話畀你聽未來已經嚟咗。`,
        `佢嚟得唔平均，而最後先輪到嗰批飛機，正正就係<em>你坐嗰批</em>。`,
        `窄體機先改裝 —— 數量多、周轉快，飛嘅係國內短途，冇人打算喺上面連續做十一個鐘嘅任何嘢。
          真正跨洋嗰啲廣體機排喺隊尾。截至 2026 年年中，United 已經有 <strong>超過 400
          架飛機裝咗 Starlink</strong>，預計年底會去到差唔多一千架 —— 但當中只得大約 <strong>六十架係
          廣體機</strong>，佢第一班裝咗 Starlink 嘅廣體跨大西洋航班（紐華克—希斯路）遲至
          <strong>2026 年 6 月</strong>先開，成隊廣體機隊要等到
          <strong>2027 年夏天</strong>先做得完。Virgin Atlantic 就已經做完佢嗰 <strong>十二架
          A350</strong> —— 大約係<strong>佢廣體機隊嘅 28%</strong> —— 787 排喺 2026 年下半年，
          A330neo 排到 2027 年。`
      ],
      afterFigure: [
        `所以：如果你係喺 2026 年一程洲際航班上面睇緊呢篇嘢，機會率仲係唔企喺你嗰邊。
          你多數連緊嗰條 700 ms 嘅線，唔係 62 ms 嗰條。`,
        `而呢點令篇文餘下嘅部分更加有用，唔係更加冇用。`
      ]
    },

    filmVsShell: {
      heading: "點解套戲冇事，個終端機唔得",
      cmdComment: "搬一個字元，要起成個會話",
      prose: [
        `一齣戲同一個 shell 係喺相反嘅方向上面失敗，而機上 Wi-Fi 啱啱就係其中一樣最唔應該撞上嘅網絡。`,
        `一齣戲係<em>頻寬</em>問題，佢唔理延遲。佢識緩衝。第一幀遲 700 ms 先到，冇人會為意，
          因為成個體驗入面冇任何嘢係要套戲對你有反應。㩒播放，等一陣，睇。個來回只發生一次。`,
        `互動式 shell 啱啱相反。佢幾乎唔使頻寬 —— 一個終端機會話係以千位元計，唔係兆位元 ——
          但<strong>你每㩒一個指望佢回顯返出嚟嘅鍵，都要付一個來回</strong>。喺 700 ms 之下，
          呢個唔叫連線慢。呢個叫每打一個字就停三分二秒嘅對話。`,
        `呢度就係大家搞錯嘅地方。佢哋喺機上入口頁見到「50 Mbps」，就判定條線冇問題，開個終端機，
          然後先發現「冇問題」同呢件事完全無關。呢度嘅貨幣唔係頻寬。<strong>係來回次數。</strong>`
      ]
    },

    whatBreaks: {
      heading: "真正頂唔順嘅係乜（唔係打字）",
      intro: [
        `個失敗比「覺得慢」具體好多，而研究對於個痛點落喺邊度，講得異常清楚。`,
        `喺一項 31 名參與者、對比端到端輸入延遲 20 ms 同 200 ms 嘅對照研究入面，
          <strong>大段打字幾乎冇郁過</strong>：每字元 290.9 ms 對 302.7，作者話呢個差異算唔上顯著。
          錯誤率一模一樣。`
      ],
      afterTable: [
        `但<em>改錯</em>任務 —— 用方向鍵將游標移返去改文字，即係你喺編輯器入面真正會做嗰件事 ——
          就由 <strong>38.9 秒變成 46.5 秒，慢咗大約 20%，效應量非常大</strong>（p &lt; 0.001，
          d = 1.673）。作者將個機制講得好白：喺移動游標嘅過程入面，你唔等個螢幕都唔得，
          因為游標落喺邊，決定咗你下一步做乜。`,
        `就算速度冇變，主觀負擔一樣變差。喺打字任務上面，成績喺統計上冇分別，
          但自評<strong>挫敗感照樣由 20.9 升到 31.3</strong>。`,
        `將呢啲換算返落終端機，佢就準確咁講出咗喺高空散架嘅係乜：唔係打一條指令出嚟。係
          <code>vim</code> 入面嘅移動、Tab 補全、喺 <code>less</code> 度碌，仲有 REPL 嗰種篤一下、
          睇一眼嘅節奏。呢度每一樣都係一個循環：你下一步做乜，取決於啱啱返嚟咗啲乜。`
      ]
    },

    moveTheWork: {
      heading: "搬嘅係啲功夫，唔係啲按鍵",
      intro: [
        `一旦你接受咗來回次數先係稀缺資源，個解法就唔再係「換架快啲嘅飛機」，而變成一條架構問題：
          <strong>少行幾個來回，同埋令每一個來回運多啲嘢。</strong>`,
        `有件出名嘅工具正面硬撼呢件事。Mosh 會預測你㩒嘅鍵會出乜結果，趕喺伺服器確認之前就喺本機
          回顯出嚟。實測效果好誇張：喺一條來回時間大約半秒嘅線路上面，按鍵回應中位數由
          <strong>503 ms 跌到 5 ms 以內</strong>。喺一條由 MIT 去新加坡嘅跨洋路徑上面，
          <strong>由 273 ms 跌到 5 ms 以內</strong>。`,
        `但要睇埋啲細字，因為細字先係重點。Mosh 大約預測到 <strong>70% 嘅按鍵</strong>。預測唔到
          嗰大約 30%，用作者自己嘅講法，<em>主要係導航</em> —— 對呢部分嚟講，佢嘅延遲曲線又變返做
          普通 SSH 個樣。即係話：俾高延遲罰得最重嗰種互動，正正就係本機回顯救唔到嗰種。`
      ],
      chartHeading: "預測到 vs 預測唔到",
      afterChart: [
        `所以預測有幫助，但救唔到你。真正救到你嘅，係唔好咁頻密留喺個循環裡面。`,
        `<strong>唔好再對住個延遲打字。將跑得耐嘅嘢擺去遠端，然後定時去睇一眼。</strong>
          一次 build、一套測試、一次遷移、一個 coding agent —— 呢啲都唔需要你陪住行完個來回。
          佢哋只需要你喺開頭出現，同埋喺要落決定嗰陣出現。中間嘅一切係部機嘅事，
          而部機喺地面，條線好靚。`,
        `呢個亦都係點解喺高空<em>並行</em>贏<em>互動</em>。你冇可能喺 700 ms 度打字打得快。
          但你完全可以同時睇住四部伺服器，因為睇場唔受延遲限制 —— 佢受注意力限制，
          而你有成十一個鐘嘅注意力，仲要冇第二樣嘢好花。`
      ]
    },

    seat24c: {
      heading: "24C 位到底喺度做緊乜",
      lead: `具體嚟講，喺一部電話上面，喺一條差劣嘅線路上面：`,
      outro: [
        `呢啲全部都唔係為飛機而發明。喺一條惡劣線路上面遙距做嘢，一直以嚟就係咁嘅樣，
          而飛機只不過係一條格外誠實嘅惡劣線路。`
      ]
    },

    caveat: {
      heading: "一個要老實講嘅保留",
      prose: [
        `有兩件事我哋核實唔到，亦唔會扮核實過：`,
        `<strong>你間航空公司個網絡究竟畀唔畀 SSH 出去。</strong>關於各家機上 Wi-Fi 供應商嘅端口封鎖、
          VPN 政策同閒置逾時，我哋搵唔到可靠嘅公開證據 —— 反而有一大堆語氣好肯定、一查就散嘅論壇
          講法。佢因航空公司而異、因供應商而異、因機型而異。喺你打算靠住佢去安排一程長途之前，
          先喺短途航班上面試吓。`,
        `<strong>客艙裡面啲時間實際上花咗喺邊。</strong>俾人引用得最多嗰啲機上娛樂統計數字，
          追落去竟然係出自冇任何方法學嘅廣告刊例，我哋掉咗佢哋。我哋搵到最好嗰份問卷證據 ——
          Inmarsat/Censuswide，十個國家 11,231 名乘客，雖然係 2022 年做，問嘅又係意向而唔係實際
          量度時間 —— 顯示娛樂大幅拋離工作：<strong>41% 想睇已下載嘅電影，35% 想串流，
          想做嘢嘅佔 26%。</strong>`,
        `所以，請當 24B 位係一個人物，唔係一個統計數字。重點從來都唔係話睇戲有乜唔啱，
          而係另一個選擇已經唔再係「冇得揀」。`
      ]
    },

    descent: {
      heading: "下降",
      prose: [
        `套戲喺佢前三次完結嘅地方完結。飛機開始下降。24B 位度過咗一程幾好嘅飛行，
          落地嗰陣精神爽利，呢樣嘢都值錢。`,
        `24C 位落地嗰陣啲功夫已經做完 —— 因為啲功夫從來都唔喺個位度。佢由頭到尾都喺地面一部機上面，
          部電話只不過係望住佢嘅一扇窗。`,
        `十一個鐘，用嚟捱 700 ms 係好長嘅一段時間；用嚟睇住四部完全唔理嗰粒衛星嘅伺服器，
          就短得交關。`
      ]
    }
  },

  seat24b: {
    tag: "24b 位",
    lines: [
      { time: "19:04", verb: "播放", text: "— 電影，118 分鐘" },
      { time: "21:02", verb: "播放", text: "— 電影，再嚟一次" },
      { time: "23:10", verb: "閒置", text: "— 客艙熄燈" },
      { time: "05:41", verb: "瞓醒", text: "— 下降" }
    ]
  },

  seat24c: {
    tag: "24c 位",
    lines: [
      { time: "19:04", verb: "接入", text: "— 4 個會話，1 個格" },
      { time: "21:02", verb: "合併", text: "— 三條分支" },
      { time: "23:10", verb: "轉綠", text: "— 跑唔過嘅測試清晒" },
      { time: "05:41", verb: "踢醒", text: "— 卡住嘅工作重啟咗" }
    ]
  },

  quotes: [
    `同一架飛機，同一副天線，同樣咁差嘅 Wi-Fi。分別完全喺於
        你喺條線嗰一頭擺咗啲乜。`,
    `你坐嗰架，係佢哋最後先會升級嗰架。當 700 ms 嚟計劃，
        撞到 62 ms 就當賺咗。`,
    `延遲唔會向你打字抽稅。佢向每一個等緊個螢幕嘅決定抽稅。`
  ],

  orbit: {
    alt: "示意圖：喺 35,786 km 嘅地球同步靜止軌道衛星，單係光行一個來回就要 477 ms；喺 550 km 嘅低地球軌道衛星就只要 7.3 ms。",
    geoLabel: "GEO 35,786 km",
    geoValue: "光 477 ms",
    leoLabel: "LEO 550 km",
    leoValue: "光 7.3 ms",
    aircraft: "24C 位，11,000 m",
    caption: "非按比例 —— 凡係畫得入 35,786 km 嘅圖，從來都冇按過比例。"
  },

  latencyChart: {
    rows: [
      { label: "GEO — Hughes / Intelsat / Viasat，中位數", value: "703 ms" },
      { label: "太平洋上空嘅 LEO — 長途中位數", value: "62 ms" },
      { label: "LEO — Starlink 機上，整體中位數", value: "44 ms" }
    ],
    note: "各柱用同一個線性刻度。來源 1。"
  },

  rolloutFigure: {
    items: [
      {
        name: "United",
        value: "≈60",
        text: `架廣體機飛緊 Starlink，而已改裝嘅飛機超過 400 架。餘下嘅廣體機隊
            要等到 2027 年夏天。`
      },
      {
        name: "Virgin Atlantic",
        value: "約 43 架之中 12 架",
        text: `廣體機做完 —— 大約 28%。787 貫穿 2026 年下半年，
            A330neo 排到 2027 年。`
      }
    ],
    note: `來源 5 同 6。United 餘下嘅廣體機預計 2027 年夏天完成；Virgin 嘅 787
          貫穿 2026 年下半年，A330neo 排到 2027 年。`
  },

  latencyTable: {
    caption: "Schmid 等，MUM '23 — n = 31，輸入延遲 20 ms 對 200 ms",
    head: ["任務", "20 ms", "200 ms", "結論"],
    rows: [
      { task: "打字 / 每字元", low: "290.9", high: "302.7", verdict: "唔顯著" },
      { task: "改錯任務", low: "38.9 s", high: "46.5 s", verdict: "+20%" },
      { task: "挫敗感", low: "20.9", high: "31.3", verdict: "p=0.004" }
    ]
  },

  moshChart: {
    rows: [
      { label: "mosh 即刻回顯到嘅按鍵", value: "≈70%" },
      { label: "預測唔到 —— “主要係導航”", value: "≈30%" }
    ],
    note: "來源 4。"
  },

  windows: [
    {
      title: "捱得過斷線嘅會話",
      body: `飛機切換波束，入口頁重新認證，條連線斷咗。<code>tmux</code> 照樣令個 shell 喺伺服器度
            跑住；會話係遠端嗰邊嘅一樣嘢，唔係你手上嘅一樣嘢。Eternal Terminal 將同一個諗法推多一步，
            令會話連 TCP 連線本身都捱得過，仲會緩衝同重播你錯過咗嘅嘢。
            <span style="color:var(--dim)">（喺有過濾嘅網絡上面提提你：ET 要有自己嘅端口 —— 預設
            2022 —— 呢個係喺 SSH 嘅 22 <em>之外</em>再加嘅。）</span>`
    },
    {
      title: "一次過處理唔止一個問題",
      body: `幾個會話擺喺個格入面，幾部已儲存嘅伺服器，每個都跑緊一件喺兩次決定之間唔使人睇住嘅嘢。`
    },
    {
      title: "打字交畀 agent",
      body: `Coding agent 跑喺<em>你自己</em>嘅伺服器上面，用地面嘅延遲，就喺啲代碼所在嘅地方。
            佢哋唔使畀衛星稅；淨係你答佢哋嗰陣，你先要畀。`
    },
    {
      title: "有事先響",
      bellLabel: "（響鈴）",
      body: `真係需要人嗰陣，Agent 提示先會響 —— 於是呢程機就花咗喺審查同落決定上面，
            而唔係望住個提示符等回顯。`
    }
  ],

  cta: {
    cmdComment: "免費 · 開源 · Apache-2.0",
    heading: "你下一程長途，就係十一個鐘嘅伺服器時間。",
    prose: [
      `Mobile SSH 係一款為 Android、iPhone 同 iPad 而設嘅原生 SSH、SFTP 同終端機客戶端。多會話、
          內建 tmux 管理器、Eternal Terminal，仲有 agent 需要你嗰陣嘅推送提示。
          免費，唔使開帳號，冇廣告，開源。`
    ],
    tags: ["冇廣告", "唔使開帳號", "資料留喺部機", "Apache-2.0"],
    playButton: "喺 Google Play 加入測試",
    iosButton: "加入 iOS 公測",
    note: `Android 而家係封閉測試 —— 請用你打算攞嚟測試嗰個 Google 帳號加入，
      並且喺手機瀏覽器度打開條連結；封閉測試喺 Google Play App 入面可能睇唔到。`
  },

  sources: {
    heading: "來源",
    items: [
      `Ookla 2025 年第一季機上數據，分析見 <em>A First Look at Starlink In-Flight Performance</em> — arXiv:2508.09839，同行評審版見 IEEE Xplore doc 11353148。（44 ms 對 703–757 ms；太平洋中位數 62 ms，範圍 19–86 ms。）`,
      `<em>From GEO to LEO: First Look Into Starlink In-Flight Connectivity</em>，ACM IMC 2025 — Jang、Varvello、Raman、Zaki。25 班機，7 間航空公司。（LEO &lt;40 ms 對 GEO 550 ms 以上。）`,
      `Schmid 等，MUM '23，<em>Effects of Text Input Latency</em> — n=31，20 ms 對 200 ms。（290.9 對 302.7 ms/字元，唔顯著；改錯 38.9 s → 46.5 s，p&lt;0.001，d=1.673；挫敗感 20.9 → 31.3，p=0.004。）`,
      `Winstein &amp; Balakrishnan，<em>Mosh: An Interactive Remote Shell for Mobile Clients</em>，USENIX ATC 2012。（503 ms → &lt;5 ms；273 ms → &lt;5 ms；約 70% 按鍵預測得到；預測唔到嘅餘下部分「主要係導航」。）`,
      `United Airlines 新聞室，2026 年 6 月 22 日，<em>United Accelerates Starlink Wi-Fi Rollout with First Widebody Transatlantic Flight</em>。（400 多架飛機；約 60 架廣體機；成隊廣體機隊 2027 年夏天完成。）`,
      `Virgin Atlantic 新聞稿，2026 年 4 月 12 日。（A350 已完成；787 喺 2026 年下半年；A330neo 喺 2027 年。）`,
      `Eternal Terminal 文檔 — eternalterminal.dev/howitworks、github.com/MisterTea/EternalTerminal。（緩衝同重播；除咗 SSH 之外預設仲要端口 2022。）`,
      `Inmarsat/Censuswide 乘客體驗調查 2022，n=11,231，覆蓋 10 個國家。（已下載電影 41%，串流 35%，工作 26% —— 屬陳述意向，可多選，2022 年進行。）`
    ],
    quitHint: "—— 㩒 q 離開"
  },

  colophon: [
    "Mobile SSH —— 為 Android、iPhone 同 iPad 而設嘅免費開源 SSH / SFTP / 終端機。",
    "Apache-2.0。冇廣告，唔使開帳號，冇 Pro 版。"
  ]
};
