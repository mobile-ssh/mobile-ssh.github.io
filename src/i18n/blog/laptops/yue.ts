import type { LaptopsPost } from "./types";

// Cantonese (Traditional) translation of /yue/blog/laptops-are-dead/.
// Mirrors en.ts key-for-key. Inline markup (<strong>, <em>, <code>, <a>,
// &nbsp;, curly quotes) is carried over verbatim; only the words change.
// Register: written Cantonese, with the formal 訃聞 flourishes kept formal —
// that mismatch is the joke in the original too.

export const yue: LaptopsPost = {
  metaTitle: "手提電腦已死，但 SSH 同 TCP/IP 仲喺度 | Mobile SSH",
  metaDescription:
    "一篇寫俾手提電腦（1981–2026）嘅深情悼文。TCP/IP 1974 年設計，SSH 1995 年寫成；兩樣都活得過硬件，一路行入你手上嗰部機。呢個就係 Mobile SSH 嘅理由 —— 一款為 Android、iPhone 同 iPad 而設嘅 SSH、SFTP 同終端機客戶端。免費、原生、開源。",

  back: "網誌",
  eyebrow: "觀點",
  titleLead: "手提電腦已死。",
  titleSoft: "你個褲袋萬歲。",
  standfirst: `<b>但 SSH 同 TCP/IP 仲喺度。</b>謹以此文送別一位沉甸甸、暖笠笠嘅老友 ——
順便講吓嗰個靜靜雞搬咗入你手上部機嘅終端機。`,
  author: "Mobile SSH 編輯部",
  date: "2026 年 7 月 27 日",
  readingTime: "閱讀約 7 分鐘",

  leadFigure: {
    terminal: {
      title: "ssh · prod-01 · tmux",
      prompt: "you@prod-01",
      path: "~/app",
      command: `claude "整返好嗰個 fail 咗嘅測試"`,
      reading: "正在讀取 src/api/auth.ts",
      patching: "正在修補 token 更新邏輯 …",
      result: "改咗 3 個檔案，測試全綠",
      needsInput: "Agent 等緊你回覆",
      push: "git push origin main"
    },
    toast: {
      title: "Agent 提示",
      host: "prod-01",
      body: "Claude Code 等緊你過目"
    },
    caption:
      "證物 A：一次真實嘅 SSH 會話、一個 coding agent，仲有一條 Agent 提示 —— 全部喺你褲袋嗰部機度跑，四圍都見唔到充電器。"
  },

  body: [
    {
      kind: "lead",
      html: `手提電腦 —— 全世界開發者、寫作人同旅人嘅摯愛拍檔 —— 本星期喺一間咖啡店入面安詳離世，
享年四十五歲，走嗰陣仲剩返 6% 電，身邊冇充電器。一如以往，佢俾一大堆應承過會睇嘅分頁圍住。`
    },
    {
      kind: "p",
      html: `冇乜戲劇性。佢只係暗咗落去，經把風扇嘆咗最後一口氣，然後 —— 喺最唔啱嘅時候，最後一次 ——
問你：而家裝個更新係咪啱啱好。`
    },
    {
      kind: "pull",
      html: `“每次你終於諗到啲嘢，佢就要求重啟固件。佢一路都係咁。”`
    },
    { kind: "h2", html: `沉甸甸嘅一生，一路有人孭住` },
    {
      kind: "p",
      html: `佢 1981 年生於 Osborne&nbsp;1 門下 —— 十一公斤嘅「搬得郁」野心，冇電池，一塊五吋螢幕 ——
之後四十五年一直喺度減磅，但始終冇真係輕得起。佢走嗰陣大約一公斤半，呢個數字喺佢老豆眼中係妖術嚟嘅。
我哋記得嗰副鍵盤。記得暖笠笠嘅機底。記得每一次思考都由風扇嘅呼呼聲宣告。記得個袋永遠塞多咗少少，
記得嗰嚿厚過本小說嘅火牛，仲有嗰場永恆而又滿懷希望嘅搜尋 —— 窗邊一個冇人用嘅插蘇。`
    },
    {
      kind: "p",
      html: `佢對我哋要求好多，我哋照樣一路孭住佢，由書枱去到登機閘口再去到 24B 位，因為好長一段時間，
得佢一個裝得落一個真正嘅終端機。呢樣嘢，而家已經唔成立。`
    },
    { kind: "h2", html: `身後仍在嘅，係佢啲長輩` },
    {
      kind: "p",
      html: `手提電腦冇留低仔女。當年應承過佢嘅接班人 —— 平板、Chromebook、嗰啲鍵盤拆得出嚟嘅嘢 ——
都嚟齊咗，坐咗喺後排，最後發現不過係接口少啲嘅手提電腦。真正活得過佢嘅，
係兩位親戚：佢出世嗰陣佢哋已經喺度做嘢，今朝佢哋一樣喺度做嘢。`
    },
    {
      kind: "p",
      html: `<strong>TCP/IP</strong> 係長輩。Vint Cerf、Bob Kahn 同一大隊合作者喺 1974 年 5 月發表咗呢套
設計；同年 12 月嘅 RFC&nbsp;675 寫到一清二楚，仲順手造咗「internet」呢個字出嚟。ARPANET 由 1983 年
1 月 1 日開始搬過嚟，到嗰年 6 月搬完 —— 嗰陣手提電腦仲係個孭住軟碟機嘅學行仔。`
    },
    {
      kind: "p",
      html: `<strong>SSH</strong> 係姪仔，三十一歲，一眾扶靈者之中最後生嗰個。1995 年春天，Tatu
Ylönen 喺 Helsinki University of Technology 寫低咗佢 —— 之前校園網上面有個 sniffer 靜靜雞收埋咗
成千上萬個密碼。嗰年 7 月佢放出 <code>ssh-1.0.0</code>；22 號端口係佢自己揀嘅：21 上面嘅 FTP 同 23
上面嘅 telnet 之間唯一仲空住嗰個號碼，佢嘅盤算係，坐喺自己打算取代嗰兩個協議中間，「或者正正就係嗰啲
畀到少少可信光環嘅小事」。佢禮拜一去問 IANA。佢哋禮拜二點頭。佢禮拜三就出咗貨。`
    },
    { kind: "ledger" },
    { kind: "h2", html: `協議從來冇假設過嘅嘢` },
    {
      kind: "p",
      html: `佢哋長命唔係乜嘢謎。佢哋捱得咁耐，係因為佢哋幾乎乜都冇假設。TCP 假設有封包，其中有啲會唔見咗、
會重複、會亂咗次序先到。SSH 假設有一條靠得住嘅位元組流同一對密鑰。兩張清單上面都搵唔到嘅係：螢幕尺寸、
鍵盤佈局、機殼、鉸位、牆上嗰個插蘇，同埋一間仲未執笠嘅廠商。`
    },
    {
      kind: "p",
      html: `SSH 連你個終端機幾大都唔假設。佢會問 —— 而且容許你遲啲畀個唔同嘅答案。呢份體貼當年係為咗嗰啲
用滑鼠拖桌面視窗角仔嘅人而發明。佢同時亦都係點解部電話打橫打掂都唔會斷會話。`
    },
    {
      kind: "pull",
      html: `“硬件係一副身體。協議係一種習慣。得其中一樣會俾人由樓梯間掟落去。”`
    },
    {
      kind: "p",
      html: `凡係綁死喺機殼上面嘅嘢都行先，而佢哋冇一個係死於做工差。軟碟機、PC Card 插槽、擴充座接口 ——
每一樣都係為一組特定條件而精心製造，而要命嘅偏偏就係嗰組條件。協議連自己個主人都唔綁。當 Ylönen
後期版本嘅授權收緊，OpenBSD 項目就退返去 <code>ssh 1.2.12</code>，即係最後一個自由到可以攞嚟再用嘅
版本，再喺 1999 年 12 月 1 日隨 OpenBSD&nbsp;2.6 出咗 OpenSSH。協議照樣行落去。
佢從來都唔屬於邊個，而呢樣嘢正正就係佢今日仲喺度嘅原因。`
    },
    { kind: "h2", html: `唯一一個要打補丁嘅假設` },
    {
      kind: "p",
      html: `憑良心講，要更正一句。TCP 的確做過一個假設，而且錯咗：佢假設部機唔會郁。一條連線由四個
數字命名 —— 兩個地址、兩個端口 —— 喺 1981 年，咁樣命名一件嘢啱到不得了，因為嗰件嘢係用螺絲釘死喺
一間架空地板嘅機房入面。但當你揸住部電話行出咖啡店，呢四個數字入面就有一個靜靜雞變咗大話。`
    },
    {
      kind: "p",
      html: `冇第二場喪禮。協議留低咗，個假設就喺周圍打補丁補返。啲功夫搬咗去遠端，搬到一個行緊出門口嘅
客戶端掂唔到嘅地方：先係 <code>screen</code>，跟住 <code>tmux</code>，喺終端機來來去去嘅時候將個
shell 一直開住。Eternal Terminal 行多一步，改為命名會話而唔係命名地址，於是底下個地址點變，
會話都照樣生存。`
    },
    {
      kind: "pull",
      html: `“你啲伺服器從來冇忠於過部手提電腦。佢哋忠於嘅係嗰個端口。”`
    },
    {
      kind: "p",
      html: `呢啲嘢全部都唔係為電話而發明，電話只係繼承咗佢哋。一個帶住 Eternal Terminal 傳輸、tmux
管理器、指數退避重連嘅保活機制，同埋每部已儲存伺服器可以有幾個地址嘅客戶端，可以喺指令跑到一半嗰陣
俾人帶出座樓，然後喺行人路上面接返落去。遠端知道嘅，得你客戶端嘅版本字串同你個終端機幾大。
從來冇人話畀佢聽嗰邊有冇一個鉸位。`
    },
    { kind: "h2", html: `啲功夫靜靜雞搬咗入褲袋` },
    {
      kind: "p",
      html: `最後嗰幾年，手提電腦開始為自己仲有冇存在價值而焦慮。佢焦慮得有道理。佢當年當成自己嗰啲功夫
—— 真正嘅終端機、真正嘅檔案傳輸、真正嘅密鑰、真正嘅隧道 —— 已經靜靜雞溜咗入你手上嗰部機。`
    },
    {
      kind: "p",
      html: `嗰部機跑緊 <strong>Mobile SSH</strong>：一款為 Android、iPhone 同 iPad 而設嘅原生 SSH、SFTP
同終端機客戶端。唔係玩具 shell，亦唔係扮終端機嘅遠端桌面。係一個完整嘅
<span class="nowrap">xterm-256color</span> 終端機 —— 正貨嚟㗎 —— 大細啱啱好塞得入手提電腦
部火牛以前佔嗰個位。`
    },
    {
      kind: "pull",
      html: `“佢當年當成自己嗰啲功夫搬咗入褲袋 —— 而且一次都冇開口問人攞插蘇。”`
    },
    { kind: "h2", html: `身後遺下：你部電話 —— 同 Mobile SSH` },
    {
      kind: "p",
      html: `遺產清單如下。懇辭花圈，家屬只求你將下面呢篇悼文睇完，並且記住：入面每一行都係你今日就裝得到
嘅真實軟件。`
    },
    { kind: "estate" },
    {
      kind: "pull",
      html: `“「手提電腦已死」係一篇悼文，唔係一份驗屍報告。守夜嗰晚，手提電腦照樣歡迎。”`
    },
    {
      kind: "p",
      html: `我哋講呢句話係帶住愛嘅。手提電腦服役光榮，守夜嗰晚隨時歡迎佢嚟 —— 揭開擺喺邊几上面，
風扇輕輕咁轉，終於插得成電。但日頭嗰份工已經執輕咗行李，離開咗座樓。佢而家袋得落褲袋。
第一下鈴響就聽。`
    },
    {
      kind: "p",
      html: `SSH 同 TCP/IP 冇送花。佢哋喺度做緊嘢。`
    }
  ],

  ledger: {
    entries: [
      {
        year: "1974",
        event: "Cerf、Kahn 同同事發表咗後來變成 TCP/IP 嘅設計",
        status: "仲行緊",
        on: true
      },
      {
        year: "1978",
        event: "DEC 推出 VT100，佢第一部相容 ANSI 嘅終端機",
        status: "跳脫序列仲用緊",
        on: true
      },
      {
        year: "1981",
        event: "Osborne&nbsp;1 上市：11&nbsp;公斤，1,795 美元，淨係食市電",
        status: "1983 年停產",
        on: false
      },
      {
        year: "1983",
        event: "ARPANET 完成由 NCP 搬去 TCP/IP",
        status: "仲行緊",
        on: true
      },
      {
        year: "1995",
        event: "SSH 喺赫爾辛基寫成；IANA 7 月 11 日批出 22 號端口",
        status: "仲行緊",
        on: true
      },
      {
        year: "2026",
        event: "手提電腦，享年 45 歲，咖啡店，6% 電，冇充電器",
        status: "上述各位送佢一程",
        on: false
      }
    ],
    caption: "追思會上宣讀嘅出場次序。最年長嗰位弔唁者五十二歲。"
  },

  estate: [
    {
      heading: "褲袋入面一個真終端機",
      body: "完整嘅 <code>xterm-256color</code> 模擬，最多八個會話同時擺喺可調大細嘅格仔入面，內建 tmux 會話管理器，仲有 Eternal Terminal，令連線捱得過斷網、休眠同 IP 轉變。"
    },
    {
      heading: "檔案同隧道，內建即用",
      body: "雙面板 SFTP 瀏覽器，喺電話同伺服器之間搬檔案；本機端口轉發同隧道就儲喺各自嘅主機隔籬 —— 一連線就自動起返。"
    },
    {
      heading: "密鑰喺裝置上面產生",
      body: "喺裝置上面產生 SSH 密鑰 —— Ed25519 同 ECDSA —— 支援密碼或者私鑰驗證。乜都唔會離開部電話。"
    },
    {
      heading: "Coding agent，配 Agent 提示",
      body: "喺你<em>自己</em>嘅伺服器上面跑 Claude Code、Codex 同其他 agent，直接喺電話度操作。Agent 一需要你回覆，Agent 提示就即刻推送通知 —— 有聲有震 —— 等你行得開之餘，又照樣跟得住進度。"
    },
    {
      heading: "為呢個場合盛裝出席",
      body: "字型同配色可以自己設定，支援 Nerd Font 嘅 powerline 同圖示字形，仲有插件系統再擴充落去 —— 一路調到個終端機似返自己嘅為止。"
    },
    {
      heading: "真係免費，講真",
      body: "冇廣告。冇 Pro 付費牆。唔使開帳號。你嘅資料留喺部機度，成個項目按 Apache-2.0 授權開源。"
    }
  ],

  cta: {
    ariaLabel: "取得 Mobile SSH",
    heading: "懇辭花圈，請閂咗幾個分頁。",
    body: "裝返個 Mobile SSH，畀部手提電腦好好抖一抖 —— 呢個係佢應得嘅 —— 然後喺褲袋度袋住一個真正嘅終端機：免費、原生、開源。",
    tags: ["冇廣告", "唔使開帳號", "資料留喺部機", "Apache-2.0"],
    playButton: "喺 Google Play 加入測試",
    iosButton: "加入 iOS 公測",
    note: `Android 而家係封閉測試：請用你打算攞嚟測試嗰個 Google 帳號加入，並且喺手機瀏覽器度打開加入
連結 —— 封閉測試喺 Google Play App 入面可能睇唔到。已經加入咗？直接去
<a href="{playUrl}" rel="noopener">Play 商店頁面</a>。`
  }
};
