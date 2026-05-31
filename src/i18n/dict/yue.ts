import type { Dict } from "../types";

export const yue: Dict = {
  meta: {
    siteName: "Mobile SSH",
    languageLabel: "語言",
    languageSwitcher: "切換語言"
  },
  nav: {
    home: "首頁",
    features: "功能",
    docs: "文檔",
    compare: "對比",
    about: "關於",
    privacy: "私隱"
  },
  footer: {
    tagline: "為 Android 裝置而設嘅集中式 SSH、SFTP 同終端機工作流程。",
    documentation: "文檔",
    comparison: "對比",
    privacy: "私隱",
    contact: "聯絡",
    feedback: "意見回饋"
  },
  home: {
    metaTitle: "Mobile SSH — Android SSH 客戶端",
    metaDescription:
      "Mobile SSH 係一款集中式嘅 Android SSH 客戶端，支援多會話終端機、SFTP 傳輸、私鑰、端口轉發，同埋識 tmux 嘅工作流程。",
    eyebrow: "Android SSH 客戶端",
    h1: "Mobile SSH",
    intro:
      "為 Android 而設嘅集中式 SSH 客戶端：多會話終端機、私鑰驗證、SFTP 檔案傳輸、本機端口轉發，仲有專為電話同平板而設嘅 tmux 友好控制。",
    versionLine: "支援 {count} 種語言 · 版本 {version}",
    ctaDocs: "睇文檔",
    ctaPlay: "喺 Google Play 下載",
    advantagesHead: "點解揀 Mobile SSH",
    advantagesIntro: "針對手機 SSH 客戶端慣常出嘅問題嚟設計。",
    advantages: [
      { title: "冇 Pro 級數，冇廣告", text: "所有功能都喺同一個 app 入面。冇 paywall 將主要功能擺喺 Pro 升級後面，終端機上面亦冇廣告 banner。" },
      { title: "資料全部留喺手機", text: "儲存嘅伺服器、憑證、密鑰都喺裝置上面。冇雲端帳號，唔會有人關咗佢。" },
      { title: "儲存主機，一㩒就連", text: "主機加一次，下次㩒一下就再連 —— 連密鑰、端口同已配置嘅 tunnel 都齊。" },
      { title: "鍵盤上面嘅終端機按鍵", text: "ESC、TAB、CTRL、ALT、FN、方向鍵、Home、End、PgUp/PgDn 專屬一行 —— 唔影響 Gboard 嘅輸入建議。" },
      { title: "唔使打指令嘅端口轉發", text: "Tunnel 黐喺伺服器 profile 度，連線即自動開。" },
      { title: "熄屏漫遊都頂得住", text: "前景服務、wake lock、自動重連等住 session 喺熄屏、轉 app、轉網絡之間都唔斷。" }
    ],
    sectionAHead: "為 Android 上嘅 SSH 工作而設計",
    sectionAIntro:
      "Mobile SSH 幫你縮短常見嘅管理路徑：儲存伺服器、連線、保持會話、需要嗰陣搬檔案、然後快速返去仲開緊嘅終端機。",
    features: [
      { title: "SSH 終端機", text: "VT100/xterm-256color 終端機模擬：色彩、游標鍵、回滾、複製，仲支援 Android 鍵盤。" },
      { title: "多會話格", text: "同時最多八個會話；點面板就轉去，雙擊面板就全螢幕聚焦。" },
      { title: "私鑰", text: "用密碼，或者匯入／貼上嘅私鑰，包括 App 支援嘅 Ed25519、RSA、ECDSA 同 DSA。" },
      { title: "SFTP 傳輸", text: "用本機同遠端兩個瀏覽面板，喺電話儲存同遠端伺服器之間搬檔案。" },
      { title: "端口轉發", text: "將本機隧道規格同伺服器設定檔一齊儲存，或者連線期間加新隧道。" },
      { title: "重連工作流", text: "前景服務、wake lock、keepalive 同重連嘗試幫會話頂住流動網絡轉變。" },
      { title: "終端機選擇", text: "揀選終端機文字嚟複製、分享，或者揀齊可見緩衝；複製會去到 Android 剪貼簿。" },
      { title: "啱手機鍵盤用", text: "Gboard 建議同語音輸入同附加按鍵列共存；輸入緊嘅字會緩衝到字界先送出。" }
    ],
    multiHead: "一個畫面，幾個活躍 Shell",
    multiP1:
      "終端機畫面可以喺格仔入面同時擺幾個活躍嘅 SSH 會話。揀面板嚟打字，用附加按鍵列做終端機控制，揑住調文字大細，需要全螢幕聚焦嗰陣就雙擊面板。",
    multiP2:
      "會話歷史同活躍會話復原幫你喺切 App、鎖屏，或者 Android 活動重建之後返到正在做緊嘅嘢。",
    multiAlt:
      "10 吋 Android 平板上 Mobile SSH，並排顯示四個活躍 SSH 終端機面板。",
    sftpHead: "當終端機唔夠用 — SFTP",
    sftpBody:
      "由已連線嘅會話打開檔案傳輸，去瀏覽電話儲存同遠端目錄。將上載同下載排隊，排序檔案，每個 host 記得最近用嘅路徑，搬之前查吓遠端權限。",
    sftpCtaGuide: "檔案傳輸指南",
    sftpCtaAll: "所有功能",
    sftpAlt: "電話上嘅 Mobile SSH 檔案傳輸畫面，包含本機同遠端面板。",
    galleryHead: "睇吓真機效果",
    galleryIntro:
      "Android 電話嘅截圖 — 你會用嚟新增伺服器、喺終端機做嘢、跑多個會話，同埋用 SFTP 搬檔案嘅同一啲畫面。",
    galleryAlts: [
      "電話上嘅 Mobile SSH 啟動畫面，包括伺服器、憑證、日誌、設定、除錯、關於等磚。",
      "電話上嘅新增伺服器對話框，顯示 host、port、憑證、私鑰同端口轉發欄位。",
      "電話上嘅單會話 SSH 終端機，下面係附加按鍵列。",
      "電話上兩個疊住嘅 SSH 會話，活躍嘅面板有 highlight。",
      "電話上嘅 SFTP 檔案傳輸畫面，包括「我嘅電話」同「遠端主機」面板。",
      "電話上嘅關於對話框，顯示版本、作者、授權同網站。"
    ],
    compareHead: "同 Termux、Termius 之間嘅定位",
    compareIntro:
      "Mobile SSH 故意保持窄範圍：佢唔係完整嘅 Linux 環境，亦唔係跨平台嘅團隊保險庫。佢係一個本機 Android SSH/SFTP 工具，俾你快速用到流動用家最常用嘅會話控制。",
    compareGuideTitle: "對比指南",
    compareGuideText: "喺 Android 裝置上幾時揀 Mobile SSH、Termux 定 Termius。",
    privacyTitle: "私隱政策",
    privacyText: "睇吓邊啲連線資料留喺本機，邊啲會送去你嘅伺服器。"
  },
  features: {
    metaTitle: "功能 | Mobile SSH",
    metaDescription:
      "Mobile SSH 喺 Android 上嘅核心功能：SSH、終端機、SFTP、私鑰、tmux 同端口轉發。",
    eyebrow: "功能清單",
    h1: "Mobile SSH 功能",
    intro:
      "Mobile SSH 為直接喺 Android 上做 SSH 而設：開終端機、保持活躍、搬檔案、儲存伺服器，仲幫你由流動中斷快速返到正常。",
    groups: [
      {
        title: "連線",
        items: [
          "密碼驗證同私鑰驗證",
          "現時版本支援嘅 Ed25519、RSA、ECDSA 同 DSA 私鑰",
          "儲存嘅伺服器設定檔，包括 host、port、用戶、憑證、私鑰同可選隧道規格",
          "可由伺服器設定畫面揀返用嘅可重用憑證紀錄",
          "用嚟重連常見伺服器組合嘅最近會話歷史",
          "成功同失敗嘅登入嘗試日誌"
        ]
      },
      {
        title: "終端機",
        items: [
          "VT100/xterm-256color 風格嘅終端機行為",
          "5000 行嘅回滾緩衝",
          "ESC、TAB、CTRL、Shift、方向鍵、Home、End、PgUp、PgDn 同鍵盤切換嘅附加按鍵列",
          "點擊聚焦、可選嘅「點擊顯示鍵盤」、複製同全部複製",
          "揑住調文字大細，連同遠端終端機重設大細",
          "雙擊面板入全螢幕模式",
          "終端機文字選擇連 Copy、Share、Select all",
          "支援 Gboard 建議／自動更正同語音輸入，加埋輸入文字緩衝"
        ]
      },
      {
        title: "會話",
        items: [
          "同時最多八個 SSH 會話",
          "活躍會話採用格仔佈局",
          "用前景服務頂住背景同鎖屏",
          "Keepalive 同帶指數退避嘅重連嘗試",
          "啟動畫面入面有「活躍會話」入口",
          "追蹤 tmux 指令，俾被中斷嘅工作 reattach 提示"
        ]
      },
      {
        title: "檔案同隧道",
        items: [
          "本機同遠端雙面板 SFTP 瀏覽器",
          "上載同下載排隊操作",
          "遠端重新命名、刪除、新增、編輯同詳細資料",
          "每個 host 個別記住按名或日期排序",
          "本機端口轉發隨伺服器設定檔一齊儲存",
          "已連線會話可即時加／刪隧道"
        ]
      },
      {
        title: "本地化",
        items: [
          "App UI 翻譯：阿拉伯文、孟加拉文、中文（簡體同繁體）、英文、法文、德文、印地文、印尼文、日文、馬拉地文、奈及利亞皮欽語、葡萄牙文、俄文、西班牙文、坦米爾文、泰盧固文、土耳其文、烏爾都文",
          "跟住 Android 系統語言；唔需要喺 App 入面額外揀"
        ]
      }
    ],
    security:
      "保安提示：而家嘅 App 將儲存嘅伺服器同憑證紀錄擺喺 Android 裝置本機，並無雲端同步。請用強力螢幕鎖保護裝置，唔好喺共用裝置上儲憑證。"
  },
  compare: {
    metaTitle: "Android 上嘅 Mobile SSH、Termux 同 Termius",
    metaDescription:
      "針對 Android SSH 工作流程，對 Mobile SSH、Termux 同 Termius 嘅均衡對比。",
    eyebrow: "Android SSH 選擇",
    h1: "Mobile SSH、Termux 同 Termius",
    intro:
      "呢啲工具圍住 SSH 有重疊，但係用途唔同。Mobile SSH 係專做 Android 嘅 SSH/SFTP 客戶端，Termux 係 Linux 環境，Termius 係跨平台、用帳戶提供生產力功能嘅 SSH 客戶端。",
    columns: {
      need: "需要",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "主要用途",
        mobileSsh: "為 Android 而設嘅專用 SSH、SFTP、本機隧道同終端機客戶端。",
        termux: "帶 APT 套件嘅 Android 終端機模擬器同 Linux 環境。",
        termius: "面向 Android、iOS、桌面同網頁化團隊工作流程嘅現代 SSH 客戶端。"
      },
      {
        need: "設定方式",
        mobileSsh: "輸入 host 或者儲存伺服器設定檔，然後直接連線。",
        termux: "裝 OpenSSH 等套件，配置 shell 工具，喺類 Linux 命令列上做嘢。",
        termius: "透過 Termius 嘅 App／帳戶模型建立或同步 host、key、snippet 同保險庫。"
      },
      {
        need: "Android 終端機控制",
        mobileSsh: "內建附加按鍵列、格仔會話、全螢幕面板、揑捏縮放、帶複製／分享嘅文字選擇、Gboard 建議、語音輸入，仲有識 tmux 嘅滾動。",
        termux: "終端機環境好強大；行為睇你裝咗咩工具同點配置。",
        termius: "手機鍵盤插件、手勢、分頁、自動完成、snippet，仲有打磨過嘅終端機 UX。"
      },
      {
        need: "檔案傳輸",
        mobileSsh: "綁住活躍 SSH 會話嘅內建雙面板 SFTP 傳輸。",
        termux: "用 scp、sftp、rsync 等命令列或者裝咗嘅檔案工具。",
        termius: "內建 SFTP 同 host／key 管理。"
      },
      {
        need: "多會話工作",
        mobileSsh: "喺 Android 格仔入面同時最多八個 SSH 會話。",
        termux: "喺 Termux 內或者遠端 shell 用 tmux 等多工器。",
        termius: "視乎平台同 plan 提供分頁同分屏工作流。"
      },
      {
        need: "資料模型",
        mobileSsh: "伺服器、憑證、歷史、設定同日誌全部只係喺本機。",
        termux: "Termux App 環境入面嘅類 Linux 檔案系統同套件。",
        termius: "為 host、key、snippet、轉發規則、known hosts 同團隊分享提供加密保險庫。"
      },
      {
        need: "最啱嘅場合",
        mobileSsh: "你想喺 Android 上用一個簡單 App 連伺服器、傳檔案、保持會話。",
        termux: "你想喺 Android 上有完整命令列環境，又識自己裝同配置套件。",
        termius: "你想要跨裝置同步、打磨過嘅生產力功能、保險庫同團隊協作。"
      }
    ],
    cards: [
      {
        title: "幾時揀 Mobile SSH",
        body: "你想直接由 Android 用 SSH，又唔想搞完整 Linux 環境或者雲端同步帳戶。對儲存咗嘅伺服器、SFTP、tmux 會話同快速本機隧道工作流尤其啱用。"
      },
      {
        title: "幾時揀 Termux",
        body: "你需要喺 Android 裝置上直接用套件管理、shell、編譯器、scripting、rsync、curl、Git、Python、Node.js 或者其他 Linux 風格工具。"
      },
      {
        title: "幾時揀 Termius",
        body: "你想要一個商業、跨平台嘅 SSH 工作空間，有加密保險庫同步、團隊分享、key chain 管理、snippet，同埋多裝置上一致嘅 App。"
      }
    ],
    sources:
      "來源：Termux 喺 [termux.dev](https://termux.dev/en/) 形容自己係帶 APT 套件同 OpenSSH 支援嘅 Android 終端機模擬器同 Linux 環境。Termius 喺其 [Android 頁面](https://www.termius.com/free-ssh-client-for-android) 同 [保險庫文檔](https://termius.com/documentation/set-up-vaults) 描述 SSH、SFTP、Mosh、Telnet、Serial、鍵盤插件、SFTP、加密保險庫同 key 管理。"
  },
  privacy: {
    metaTitle: "私隱政策 | Mobile SSH",
    metaDescription:
      "Mobile SSH 私隱政策，包括本機儲存、SSH 資料傳輸、檔案傳輸、日誌同 Android 權限。",
    eyebrow: "私隱",
    h1: "私隱政策",
    intro:
      "Mobile SSH 設計成本機嘅 Android SSH 客戶端。唔需要 Mobile SSH 帳戶，亦無 Mobile SSH 雲端同步服務。",
    sections: [
      {
        heading: "儲喺你裝置上嘅資料",
        body: "如果你揀儲存 App 資料，Mobile SSH 會擺喺 Android 裝置本機。當中可以包括儲存嘅伺服器設定檔、用戶名、port、密碼、私鑰、key 通行碼、端口轉發規則、最近會話、登入嘗試歷史、檔案傳輸路徑、檔案排序偏好、tmux reattach 提示、App 設定，同埋當開咗除錯記錄時嘅除錯日誌。"
      },
      {
        heading: "經網絡送出嘅資料",
        body: "Mobile SSH 只會將 SSH 驗證資料送俾你設定過、又連緊嘅伺服器。終端機輸入／輸出、SFTP 檔案內容同本機端口轉發流量會同你選嘅伺服器同遠端端點交換。Mobile SSH 唔會將呢啲資料送俾任何 Mobile SSH 分析、廣告、遙測或者雲端同步服務。"
      },
      {
        heading: "檔案傳輸同儲存權限",
        body: "檔案傳輸功能會瀏覽本機電話儲存同遠端 SFTP 目錄，俾你上載同下載檔案。喺需要嘅 Android 版本，App 可能會請求儲存權限，等本機瀏覽器可以讀寫所揀嘅檔案。"
      },
      {
        heading: "日誌同疑難排解",
        body: "登入歷史同可選嘅除錯日誌會擺喺本機，俾你做疑難排解。除錯日誌可能包括終端機事件、SSH 資料大細、觸控輸入診斷、重設大細事件、隧道生命週期事件。將除錯封存檔分享俾客服或其他人之前，請先檢查。"
      }
    ],
    permissionsHeading: "權限",
    permissions: [
      { label: "互聯網", body: "連接 SSH 伺服器需要。" },
      { label: "Wake lock 同 Wi-Fi lock", body: "喺裝置瞓覺時保持活躍 SSH 會話。" },
      { label: "前景服務同通知", body: "喺背景處理活躍連線。" },
      { label: "儲存權限", body: "畀檔案傳輸同 key 匯入用。" }
    ],
    securityHeading: "保安責任",
    securityBody:
      "如果儲咗憑證或私鑰，請用強力螢幕鎖保護 Android 裝置；只連你信任嘅伺服器。而家嘅版本用 App 本機儲存，唔係另外加密嘅雲端保險庫。",
    contactHeading: "聯絡",
    contactBody: "客服聯絡：[mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)。"
  },
  docsIndex: {
    metaTitle: "文檔 | Mobile SSH",
    metaDescription: "Android 上 Mobile SSH 嘅終端用戶文檔。",
    eyebrow: "用戶指南",
    h1: "Mobile SSH 文檔",
    intro:
      "用呢啲頁面做 Mobile SSH 嘅公開指南，包括安裝、連線、會話管理、檔案傳輸、端口轉發同疑難排解。",
    cards: [
      { slug: "getting-started",  title: "快速上手",       text: "安裝、開 App、連你第一部伺服器，同儲常用嘅 host。" },
      { slug: "terminal",         title: "終端機",         text: "面板、附加按鍵列、滾動、複製動作、tmux 行為同鍵盤設定。" },
      { slug: "file-transfer",    title: "檔案傳輸",       text: "瀏覽電話同伺服器檔案，上載、下載、排序，仲可以睇遠端檔案詳情。" },
      { slug: "port-forwarding",  title: "端口轉發",       text: "設定本機隧道字串，連線期間管理活躍嘅轉發。" },
      { slug: "troubleshooting",  title: "疑難排解",       text: "解決連線、驗證、鍵盤、儲存同重連問題。" }
    ]
  },
  docsNav: {
    home: "文檔主頁",
    gettingStarted: "快速上手",
    terminal: "終端機",
    fileTransfer: "檔案傳輸",
    portForwarding: "端口轉發",
    troubleshooting: "疑難排解"
  },
  about: {
    metaTitle: "關於 | Mobile SSH",
    metaDescription: "關於 Mobile SSH：Android SSH 客戶端嘅版本、作者、授權同開源聲明。",
    eyebrow: "關於",
    h1: "關於 Mobile SSH",
    intro: "支援 tmux、端口轉發同 SFTP 嘅多會話 SSH 客戶端。",
    appHeading: "關於應用程式",
    versionLabel: "版本",
    authorLabel: "作者",
    authorValue: "Dmitry Kozlov",
    licenseLabel: "授權",
    licenseValue: "MIT",
    websiteLabel: "網站",
    privacyLabel: "私隱政策",
    privacyLinkText: "私隱政策",
    noticesHeading: "開源軟件聲明",
    noticesIntro: "Mobile SSH 用咗以下嘅開源庫，每個都係按各自嘅授權使用。",
    notices: [
      { name: "JSch (mwiede fork)",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch" },
      { name: "JZlib (bundled in JSch)",   license: "BSD 3-clause" },
      { name: "jBCrypt (bundled in JSch)", license: "ISC" },
      { name: "Ed25519 / Ed448 Java",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java" },
      { name: "StringFog",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog" }
    ],
    contactHeading: "聯絡",
    contactBody: "客服聯絡：[mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)。"
  }
};
