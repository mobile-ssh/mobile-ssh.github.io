import { defineGoOutside } from "./define";

export const yue = defineGoOutside({
  metaTitle: "出去行下啦。代理仲做緊嘢。 | Mobile SSH",
  metaDescription:
    "你嘅 coding 代理係喺你部伺服器度行，唔係喺部手機。用 tmux 開起佢，行出門口，等真係要人嗰陣先由提示搵返你。",
  back: "網誌", eyebrow: "現場筆記",
  title: "出去行下啦。代理仲做緊嘢。",
  standfirst:
    "令你個代理生存落去嘅，從來都唔係部手機，係部伺服器。信咗呢樣嘢之後，喺出面過一個下晝就冇任何代價——你走你嘅，工作照做，唯一會打斷你嘅，係一條真係要人答嘅問題。",
  author: "Mobile SSH 編輯委員會", date: "2026年9月7日", readingTime: "閱讀約 7 分鐘",

  board: {
    ariaLabel:
      "一塊狀況板，將四個行緊嘅 session 當浪點咁讀：三個穩定推進，另一個叫 claude 嘅喺度等人。",
    heading: "浪況",
    timeLabel: "06:14 HST",
    breakHeading: "浪點",
    swellHeading: "浪高",
    stateHeading: "狀態",
    rows: [
      { name: "api-prod", swell: "2-3 ft", state: "升緊", needsYou: false },
      { name: "nightly-tests", swell: "6-8 ft", state: "持穩", needsYou: false },
      { name: "claude", swell: "10+ ft", state: "要你出手", needsYou: true },
      { name: "web-api", swell: "1-2 ft", state: "持穩", needsYou: false }
    ],
    statusLine: "4 個 session · 1 個等緊 · 上次檢查 06:14",
    caption:
      "喺你自己部機上面嘅四個 session。其中三個根本唔理你人喺邊。第四個先係你要摷部手機出褲袋嘅唯一理由。"
  },

  body: [
    `個 build 完唔完，都一樣要收工。<em>Pau hana</em>——一日工作嘅終結——按佢自己嘅時間到，而一般人嘅應對就係當睇唔到：部手提電腦繼續攤喺枱面開住，半隻眼望住條進度條，將成個夜晚交畀一個全程都唔需要你嘅 process。`,
    `呢單交易淨係喺工作真係喺你隨身嗰部機上面發生嗰陣先講得通。通常都唔係。個代理係伺服器上面嘅一個 process，改嘅係嗰部伺服器磁碟上面嘅檔案，行嘅係嗰部伺服器嘅測試。你部手機只係一扇望入去嘅窗。閂咗扇窗，間房都仲喺度。`,
    `伺服器先係捱得耐嗰層`,
    `喺 <code>tmux</code>、<code>herdr</code> 或者 Zellij 入面開 Claude Code 或者 Codex，個 session 就屬於部伺服器，唔係屬於你條連線。訊號跌到得一格、行入熔岩洞、部手機收埋兩個鐘——個代理照讀、照改、照行測試，因為佢由頭到尾都冇黐住你。`,
    `呢個就係全部訣竅，值得講得精準啲，因為好易將功勞記錯咗喺邊個組件度。撐住個 process 嘅唔係個 app，係另一頭嗰個 multiplexer。Mobile SSH 嘅職責，係走得乾淨，返嚟又接得返。`,
    `你唔係電源。唔好再當自己係電源。`,
    `定時睇下，唔使湊住佢`,
    `一個行足一個鐘嘅代理，大概只得九十秒係要人。問題從來都唔係等，而係唔知<em>幾時</em>先輪到嗰九十秒——正正就係咁，先搞到啲人一直望住個乜都冇得講嘅螢幕。`,
    `Agent Alerts 答嘅就係呢條問題。佢嘅偵測方式刻意做到笨，所以先信得過：terminal 響鈴、<code>OSC 9</code> 或者 <code>OSC 777</code> 通知，加埋你喺伺服器上面裝一次嘅 agent hook。佢唔會讀你嘅輸出再估你想點，亦冇靈敏度可以校——佢只係報告另一頭嗰個程式真係宣告過嘅嘢。`,
    `所以部手機一直擺喺褲袋，直到真係有一條問題出現。跟住佢震，你睇一睇個提示，㩒一下答完，再收返埋。成個互動就係咁多，而且喺沙灘、行山入口，甚至排隊買刨冰嗰陣都用得。`,
    `呢個島都醫唔到嘅嘢`,
    `兩個老實嘅限制，因為一篇淨係數優點嘅文，其實係廣告。`,
    `平台差異係真嘅，值得預先計劃。喺 Android，個 app 退到背景嗰陣由一個前景服務保持住條連線——嗰條常駐通知<em>就係</em>個 session。iOS 完全冇背景執行；你返嚟嗰陣佢會重新連線，再 re-attach 返你個 multiplexer。無論邊種情況，伺服器上面個代理都冇停過，呢樣先係重點。閂咗嘅只係扇窗。`,
    `Aloha 唔係求其做嘢嘅藉口`,
    `走得好，係一種細細嘅紀律。任何你唔放心冇人睇住行兩個鐘嘅嘢，都唔應該行出門口先開——一個做到一半嘅 migration，唔會因為你行遠咗而變好。畀佢一個有自然停止點嘅任務，叫佢改之前先檢查，再將個 diff 留返你返嚟先審。`,
    `對待個通知，要好似對待 pager 咁有分寸。乜都提示，即係等於乜都冇提示。個 hook 只會喺真係值得打斷一個人嘅狀態先觸發；保持咁樣，嗰下震先有意義。`,
    `個 build 唔需要觀眾。出去，搵個地方待下。`,
  ],

  checklist: {
    heading: "行出門口之前",
    steps: [
      {
        heading: "喺 multiplexer 入面開佢",
        body: "喺 <code>tmux</code>、<code>herdr</code> 或者 Zellij 入面行個代理，令個 session 捱得過你條連線，而唔係靠住佢。"
      },
      {
        heading: "裝好 agent hook",
        body: "每部伺服器裝一次，喺 app 入面搞掂。佢只係一個好細嘅 shell script，任何代理都叫得郁——唔係邊間供應商嘅整合，亦唔綁死一個 CLI。"
      },
      {
        heading: "確認真係收到一次提示",
        body: "觸發一次提示，親眼見到部手機震先好靠佢。一個你從來未見過生效嘅提示，唔算係計劃。"
      },
      {
        heading: "畀佢一個停止點",
        body: "有合理終點嘅任務好過開放式任務，因為你已經揀咗唔望住佢。"
      }
    ],
    promptLabel: "一個值得放手唔理嘅任務",
    prompt:
      "讀 AGENTS.md，然後修好失敗嘅 handler 測試。改之前先檢查 diff，行針對性測試，過晒就停——唔好 commit。"
  },

  truth: {
    heading: "你行開之後仲有咩繼續",
    itemHeading: "當部手機入咗褲袋",
    resultHeading: "會唔會繼續？",
    yes: "會",
    no: "唔會",
    rows: [
      { item: "伺服器上面嘅代理 process", value: "由 tmux、herdr 或者 Zellij 揸住", survives: true },
      { item: "檔案、diff 同測試輸出", value: "喺伺服器隻磁碟度", survives: true },
      { item: "你喺 session 入面嘅位置", value: "返嚟就 re-attach 返", survives: true },
      { item: "Android 上面條連線", value: "由前景服務保持住", survives: true },
      { item: "iOS 上面條連線", value: "冇背景執行——佢會重新連線", survives: false },
      { item: "冇訊號送出嘅提示", value: "等部手機再連得返先送到", survives: false }
    ],
    note: "每一行入面，個代理都繼續行緊。唔同嘅只係你部手機有冇繼續開住扇窗。"
  },

  cta: {
    ariaLabel: "取得 Mobile SSH",
    heading: "留低部手提電腦，帶走個 terminal。",
    body: "直接連自己部機，喺 tmux、herdr 或者 Zellij 入面行你鍾意嘅任何代理，等 Agent Alerts 喺要人嗰陣話你知——同一個 app 仲有 SFTP、tunnel 同一個真正嘅 terminal。",
    tags: ["任何代理", "直接 SSH", "Agent Alerts", "Apache-2.0"],
    playButton: "參加 Google Play 測試",
    iosButton: "加入 iOS beta",
    note: `Android 正進行封閉測試：請用會用嚟測試嘅 Google 帳戶參加，再喺手機瀏覽器開參加連結。已經參加？直接去 <a href="{playUrl}" rel="noopener">Play 頁面</a>。`
  }
});
