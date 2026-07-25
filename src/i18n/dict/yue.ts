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
    tagline: "為 Android 同 iOS 裝置而設嘅集中式 SSH、SFTP 同終端機工作流程。",
    documentation: "文檔",
    comparison: "對比",
    privacy: "私隱",
    contact: "聯絡",
    feedback: "意見回饋"
  },
  home: {
    metaTitle: "Mobile SSH — Android 同 iOS 嘅 SSH 客戶端",
    metaDescription:
      "Mobile SSH 係一款為 Android 同 iOS 而設嘅集中式 SSH 客戶端，支援多會話終端機、Eternal Terminal 彈性會話、tmux 管理器、SFTP 傳輸、私鑰、端口轉發，同埋插件。",
    eyebrow: "Android 同 iOS 嘅 SSH 客戶端",
    h1: "Mobile SSH",
    intro:
      "為 Android 同 iOS 而設嘅集中式 SSH 客戶端：多會話終端機、網絡中斷都頂得住嘅 Eternal Terminal 會話、內建 tmux 管理器、SFTP 檔案傳輸、本機端口轉發，同埋插件 —— 專為電話同平板而設。",
    versionLine: "支援 {count} 種語言 · Android {version} · iOS {iosVersion} 公測版",
    ctaDocs: "睇文檔",
    ctaPlay: "喺 Google Play 下載",
    ctaIos: "喺 TestFlight 下載 iOS 公測版",
    platformAndroid: "Android",
    platformIos: "iOS — iPhone 同 iPad",
    advantagesHead: "點解揀 Mobile SSH",
    advantagesIntro: "針對手機 SSH 客戶端慣常出嘅問題嚟設計。",
    advantages: [
      { title: "冇 Pro 級數，冇廣告", text: "所有功能都喺同一個 App 入面。冇 paywall 將主要功能擺喺 Pro 升級後面，終端機上面亦冇廣告 banner。" },
      { title: "資料全部留喺手機", text: "儲存嘅伺服器、憑證、密鑰都喺裝置上面。冇雲端帳號，唔會有人關咗佢。" },
      { title: "儲存主機，一㩒就連", text: "主機加一次，下次搜索㩒一下就再連 —— 連密鑰、端口同已配置嘅 tunnel 都齊。" },
      { title: "Agent 提示", text: "當 Claude Code、Codex 或者其他遠端 agent 需要你輸入時，即刻收到通知 —— 有聲音同震動。就算係播緊視頻都會響耳機。" },
      { title: "鍵盤上面嘅終端機按鍵", text: "ESC、TAB、CTRL、ALT、FN、方向鍵、Home、End、PgUp/PgDn 專屬一行，Android 同 iOS 都有 —— 終端機按鍵唔會同自動更正打交。" },
      { title: "唔使打指令嘅端口轉發", text: "Tunnel 黐喺伺服器 profile 度，連線即自動開。" },
      { title: "熄屏漫遊都頂得住", text: "俾一個已儲存嘅伺服器設幾個地址 —— 譬如屋企 LAN IP 同 VPN IP —— Mobile SSH 會撥邊個有回應就用邊個，仲會優先試上次連得通嗰個，網絡一變就即刻重連。喺 Android，前景服務同 wake lock 令 shell 喺熄屏時都唔斷；喺 iOS，自動重連加 tmux 自動 attach 令你返返去頭先停低嘅位置。" },
      { title: "Eternal Terminal", text: "可選嘅 ET 傳輸令遠端 shell 喺斷網、休眠同 IP 轉變之間都唔斷。主機上冇 etserver？Mobile SSH 可以經 SSH 幫你裝好。" },
      { title: "用插件擴充", text: "瀏覽公開目錄，按需要安裝插件嚟加入新工作流。每個插件都會下載並經 SHA-256 驗證後放入 App 專屬儲存。" }
    ],
    sectionAHead: "為流動裝置上嘅 SSH 工作而設計",
    sectionAIntro:
      "Mobile SSH 幫你縮短常見嘅管理路徑：儲存伺服器、連線、保持會話、需要嗰陣搬檔案、然後快速返去仲開緊嘅終端機。",
    features: [
      { title: "SSH 終端機", text: "xterm-256color 終端機，支援 24-bit 真彩色、斜體、終端機內搜索、OSC 133 shell 整合，仲有揑住調文字大細 —— Android 上仲有可設定嘅字型同配色，以及 Nerd Font powerline／圖示字形。" },
      { title: "多會話格", text: "同時最多八個 SSH 會話喺可調大小嘅格仔入面 —— 點面板聚焦、雙擊入全螢幕、揑住調文字大細。" },
      { title: "可點擊連結", text: "終端機輸出裡面嘅 URL 會有底線，㩒一下就喺瀏覽器打開 —— 唔使複製或者切換 App。" },
      { title: "伺服器資料夾", text: "將已儲存嘅伺服器整理入可摺疊嘅群組。㩒群組標題收起；資料夾結構亦會帶入快速連線選擇器。" },
      { title: "Agent 提示", text: "當遠端 agent（Claude Code、Codex 等）需要你輸入時，有聲音同震動嘅通知。就算視頻通話期間都會響耳機。" },
      { title: "私鑰", text: "密碼或私鑰驗證。可喺裝置上產生 Ed25519 或 ECDSA 密鑰（Android 仲支援 RSA）；亦可匯入或貼上現有密鑰。" },
      { title: "SFTP 傳輸", text: "與活躍 SSH 會話綁定嘅雙面板檔案瀏覽器。將上載同下載排隊，重新命名、刪除，並查看遠端權限。" },
      { title: "端口轉發", text: "將本機隧道規格同伺服器設定檔一齊儲存 —— 連線時自動開，或者連線期間隨時加／刪。" },
      { title: "重連工作流", text: "Keepalive 同指數退避重連等住會話喺熄屏同漫遊之間都唔斷 —— Android 靠前景服務，iOS 靠 tmux 自動 attach。" },
      { title: "備份與還原", text: "將已儲存嘅伺服器同憑證匯出做加密備份檔案；匯入時可合併或取代，方便跨裝置搬移 —— 備份喺 Android 同 iOS 之間可以互通。" },
      { title: "Eternal Terminal", text: "用 Eternal Terminal（ET）連線，令會話喺斷網、休眠同 IP 轉變之間都唔斷 —— 仲可以選擇經 SSH 自動裝好 etserver。" },
      { title: "Tmux 管理器", text: "列出並切換 tmux 會話、視窗同面板 —— attach、重新命名、新建、分割、放大或者 kill。可按名稱或日期排序；🔔 標示等緊輸入嘅 agent。" },
      { title: "插件", text: "瀏覽、安裝同運行插件嚟擴充 Mobile SSH。插件由公開目錄按需下載，經 SHA-256 驗證後放入 App 專屬儲存。" }
    ],
    multiHead: "一個畫面，幾個活躍 Shell",
    multiP1:
      "終端機畫面可以喺格仔入面同時擺幾個活躍嘅 SSH 會話。揀面板嚟打字，用附加按鍵列做終端機控制，揑住調文字大細，需要全螢幕聚焦嗰陣就雙擊面板。",
    multiP2:
      "會話歷史同活躍會話復原幫你喺切 App、鎖屏，或者系統收返 App 之後返到正在做緊嘅嘢。",
    multiAlt:
      "Mobile SSH 喺電話上顯示兩個活躍 SSH 終端機會話並排分屏嘅畫面。",
    sftpHead: "當終端機唔夠用 — SFTP",
    sftpBody:
      "由已連線嘅會話打開檔案傳輸，去瀏覽電話儲存同遠端目錄。將上載同下載排隊，排序檔案，每個 host 記得最近用嘅路徑，搬之前查吓遠端權限。",
    sftpCtaGuide: "檔案傳輸指南",
    sftpCtaAll: "所有功能",
    sftpAlt: "電話上嘅 Mobile SSH 檔案傳輸畫面，包含本機同遠端面板。",
    galleryHead: "睇吓真機效果",
    galleryIntro:
      "Android 電話同 iPhone 嘅截圖 — 你會用嚟新增伺服器、喺終端機做嘢、跑多個會話，同埋用 SFTP 搬檔案嘅同一啲畫面。",
    carouselPrev: "上一張截圖",
    carouselNext: "下一張截圖",
    carouselDot: "去第 {n} 個位置",
    videoHead: "睇佢實際運作",
    videoIntro: "兩個平台嘅短片示範。Android：tmux 切換視窗、SFTP 檔案傳輸、安裝同使用 AI Chat 插件、Eternal Terminal，仲有一㩒就連嘅最近會話。iOS：分咗組嘅已儲存伺服器、帶 tmux 自動 attach 嘅連線選項、運行中嘅終端機會話，同埋 Tmux 管理器。",
    videoAlt: "Android 示範：tmux 切換視窗、SFTP 下載檔案、安裝同使用 AI Chat 插件、Eternal Terminal 傳輸，同埋最近會話",
    videoIosAlt: "iOS 示範：分咗組嘅已儲存伺服器、帶 tmux 自動 attach 同端口轉發嘅連線選項、運行中嘅 SSH 終端機會話，同埋 Tmux 管理器切換視窗",
    lightboxClose: "關閉",
    lightboxPrev: "上一張",
    lightboxNext: "下一張",
    betaJoin: "加入公測",
    betaOr: "或傳送電郵至",
    betaRequest: "申請私人測試資格",
    galleryAlts: [
      "電話上嘅 Mobile SSH 啟動畫面，包括伺服器、憑證、日誌、設定、除錯、關於等磚。",
      "電話上嘅新增伺服器對話框，顯示 host、port、憑證、私鑰同端口轉發欄位。",
      "電話上嘅單會話 SSH 終端機，下面係附加按鍵列。",
      "電話上兩個並排嘅 SSH 會話，並排分屏顯示。",
      "電話上兩個上下疊住嘅 SSH 會話，活躍嘅面板有 highlight。",
      "電話上嘅 SFTP 檔案傳輸畫面，包括「我嘅電話」同「遠端主機」面板。",
      "電話上嘅關於對話框，顯示版本、作者、授權同網站。",
      "電話上嘅「產生 SSH 密鑰」對話框，有標籤、用戶、密鑰類型同密碼短語欄位。",
      "電話上嘅「公鑰」對話框，顯示產生咗嘅密鑰，連同複製、分享同儲存嘅選項。",
      "已儲存伺服器畫面，顯示伺服器整理入可摺疊嘅「工作」同「個人」資料夾群組。",
      "電話上嘅 SSH 終端機，https:// URL 帶底線成為可點擊嘅連結。",
      "電話上嘅 Mobile SSH 啟動畫面，顯示 Recent Sessions 清單，一㩒就可以續返之前嘅 SSH 連線。",
      "電話上嘅 tmux 管理器，列出 tmux 會話、視窗同面板，仲有附加、重新命名同切換嘅按鈕。",
      "電話上嘅插件畫面，顯示可安裝嘅插件目錄，包括 Tailscale、WireGuard 同 VS Code。",
      "電話上嘅 AI Chat 插件，正經 SSH 串流播放遠端伺服器上跑緊嘅本機 llama3.2 模型嘅回覆。",
      "電話上嘅新增伺服器對話框，傳輸方式設定為 Eternal Terminal，等會話喺斷網之後都唔斷。"
    ],
    galleryIosAlts: [
      "iPhone 上嘅 Mobile SSH 連線表單，包含伺服器、驗證、資料夾同傳輸方式欄位。",
      "iPhone 上嘅已儲存伺服器，整理入 Production 同 Staging 群組，仲有伺服器搜索。",
      "iPhone 上運行中嘅 SSH 終端機，有 tmux 狀態列，下面係附加按鍵列。",
      "iPhone 上兩個 SSH 會話並排喺格仔入面，㩒一下面板就聚焦。",
      "iPhone 上嘅檔案傳輸，有「我嘅電話」同「遠端主機」面板，仲有已完成嘅傳輸日誌。",
      "iPhone 上嘅密鑰驗證，顯示裝置上產生嘅 Ed25519 密鑰同可以複製嘅公鑰。",
      "iPhone 上嘅 tmux 管理器，列出會話同視窗，有 attach、重新命名同 kill 操作 —— 響鈴標示等緊輸入嘅 agent。",
      "iPhone 上嘅 SSH 終端機，attach 咗一個 tmux 視窗，顯示遠端編輯器入面嘅代碼。",
      "iPhone 上嘅插件目錄，有 Tailscale、WireGuard、VS Code、AI Chat 同 Open WebUI 可以安裝。",
      "iPhone 上嘅連線表單，傳輸方式設定為 Eternal Terminal，等會話喺斷網之後都唔斷。",
      "iPhone 上嘅 agent 提示設定，有震動、聲音同「淨係耳機」開關。",
      "iPhone 上嘅 Mobile SSH 連線畫面，有「最近」一欄，一㩒就重新連線。"
    ],
    compareHead: "同 Termux、Termius 之間嘅定位",
    compareIntro:
      "Mobile SSH 故意保持窄範圍：佢唔係完整嘅 Linux 環境，亦唔係跨平台嘅團隊保險庫。佢係一個為 Android 同 iOS 而設嘅本機 SSH/SFTP 工具，俾你快速用到流動用家最常用嘅會話控制。",
    compareGuideTitle: "對比指南",
    compareGuideText: "喺你嘅電話或者平板上幾時揀 Mobile SSH、Termux 定 Termius。",
    privacyTitle: "私隱政策",
    privacyText: "睇吓邊啲連線資料留喺本機，邊啲會送去你嘅伺服器。"
  },
  features: {
    metaTitle: "功能 | Mobile SSH",
    metaDescription:
      "Mobile SSH 喺 Android 同 iOS 上做 SSH 嘅核心功能：終端機、Eternal Terminal、tmux 管理器、SFTP、私鑰、端口轉發，同埋插件。",
    eyebrow: "功能清單",
    h1: "Mobile SSH 功能",
    intro:
      "Mobile SSH 為直接喺 Android 同 iOS 裝置上做 SSH 而設：開終端機、保持活躍、搬檔案、儲存伺服器，仲幫你由流動中斷快速返到正常。",
    groups: [
      {
        title: "平台",
        items: [
          "Android 8.0 或以上 —— 喺 Google Play 安裝",
          "iPhone 同 iPad 上嘅 iOS 16 或以上 —— 喺 TestFlight 加入公測",
          "加密備份可以互通：喺一個平台匯出，喺另一個平台匯入"
        ]
      },
      {
        title: "連線",
        items: [
          "密碼驗證同私鑰驗證",
          "Android 支援 Ed25519、RSA、ECDSA 同 DSA 私鑰；iOS 支援 Ed25519 同 ECDSA（P-256/384/521）",
          "儲存嘅伺服器設定檔，包括 host、port、用戶、憑證、私鑰同可選隧道規格",
          "按名稱或 host 搜索已儲存嘅伺服器",
          "搜索優先嘅「新增會話」流程：喺專屬搜索頁揀已儲存嘅伺服器，一㩒就連",
          "每個已儲存伺服器可設多個地址，方便 LAN/VPN 漫遊 —— 按次序逐個撥，優先試上次連得通嗰個，網絡一變就自動重連",
          "可由伺服器設定畫面揀返用嘅可重用憑證紀錄",
          "用嚟重連常見伺服器組合嘅最近會話歷史",
          "成功同失敗嘅登入嘗試日誌，仲會記低實際撥咗嘅地址"
        ]
      },
      {
        title: "終端機",
        items: [
          "VT100/xterm-256color 終端機行為，支援 24-bit 真彩色同斜體",
          "回滾緩衝有 5000 行，喺 Android 可以設定大細",
          "終端機內尋找 —— 搜索回滾緩衝同可見畫面，並喺各個匹配之間跳轉（Android 同 iOS）",
          "Shell 整合（OSC 133）：喺各個提示符之間跳轉、複製單一指令嘅輸出，並喺長時間指令完成時收到提示（Android 同 iOS）",
          "終端機內經 Kitty graphics protocol 內嵌顯示圖片（Android 同 iOS）",
          "ESC、TAB、CTRL、Shift、方向鍵、Home、End、PgUp、PgDn 同鍵盤切換嘅附加按鍵列 —— 喺 Android 可自訂：新增、移除、重新排序，並可自訂你自己嘅跳脫序列按鍵，仲可重設做預設",
          "點擊聚焦、可選嘅「點擊顯示鍵盤」、複製同全部複製",
          "揑住調文字大細，連同遠端終端機重設大細",
          "雙擊面板入全螢幕模式",
          "終端機文字選擇連 Copy、Share、Select all —— 長撳選取詞語，Copy 之後仍會保留選取，方便分享或者重新複製",
          "OSC 52 剪貼簿 —— 由遠端 tmux 或者 vim 會話直接將文字複製到電話剪貼簿",
          "原生直通鍵盤輸入 —— 冇自動更正同 shell 打交；螢幕鍵盤嘅語音聽寫照樣用得",
          "Android 同 iOS 都支援外接同 Bluetooth 鍵盤，包括方向鍵、功能鍵同 Ctrl/Alt 組合鍵",
          "括號貼上（bracketed paste），令多行剪貼簿內容唔會被自動執行",
          "內置嘅 Nerd Font 喺 Android 上顯示 powerline、starship、devicon 同 Material Design 圖示字形 —— 系統字型本來會將佢哋顯示成空白方格",
          "寬 CJK、emoji 同組合字元喺 Android 同 iOS 上會正確量度同繪製，包括字素叢集（grapheme clusters）同零寬連接符（zero-width joiners）",
          "可設定嘅終端機字型（系統等寬字型、JetBrains Mono 或 Source Code Pro）同 ANSI 配色（Solarized、Gruvbox、Dracula、Nord），喺 Android 上即時套用到開住嘅面板"
        ]
      },
      {
        title: "會話",
        items: [
          "同時最多八個 SSH 會話",
          "活躍會話採用格仔佈局",
          "背景同鎖屏都頂得住：Android 用前景服務；iOS 用 tmux 自動 attach 幫你將個 shell 駁返",
          "Keepalive 同帶指數退避嘅重連嘗試",
          "啟動畫面入面有「活躍會話」入口；持續通知列出會話 —— 㩒就開",
          "追蹤 tmux 指令，俾被中斷嘅工作 reattach 提示",
          "Agent 提示：當遠端 agent（Claude Code、Codex 等）需要輸入時，有可選聲音同震動嘅通知 —— 經 OSC 9/777 通知帶埋 agent 本身嘅標題同訊息；就算播緊視頻都會響耳機",
          "Eternal Terminal（ET）傳輸令會話喺斷網、休眠同 IP 轉變之間都唔斷，仲可以選擇經 SSH 自動裝好 etserver",
          "Tmux 管理器：列出並切換會話、視窗同面板 —— attach、重新命名、新建、分割、放大或者 kill，可按名稱／日期排序，🔔 標示等緊輸入嘅 agent"
        ]
      },
      {
        title: "檔案同隧道",
        items: [
          "本機同遠端雙面板 SFTP 瀏覽器",
          "上載同下載排隊操作",
          "喺手機同遠端主機之間遞迴上載同下載成個資料夾",
          "遠端重新命名、刪除、新增、編輯同詳細資料",
          "喺 Android 可以直接由本機面板用另一個 App 開啟已下載嘅檔案",
          "每個 host 個別記住按名或日期排序",
          "本機端口轉發隨伺服器設定檔一齊儲存",
          "已連線會話可即時加／刪隧道",
          "檔案傳輸跟隨系統嘅淺色或者深色主題"
        ]
      },
      {
        title: "本地化",
        items: [
          "App UI 翻譯：阿拉伯文、孟加拉文、中文（簡體同繁體）、英文、法文、德文、印地文、印尼文、日文、馬拉地文、奈及利亞皮欽語、葡萄牙文、俄文、西班牙文、坦米爾文、泰盧固文、土耳其文、烏爾都文",
          "跟住 Android 同 iOS 嘅系統語言；唔需要喺 App 入面額外揀"
        ]
      },
      {
        title: "金鑰與備份",
        items: [
          "喺裝置上產生新嘅 Ed25519 或 ECDSA 金鑰（Android 仲支援 RSA），可選密碼短語",
          "複製、分享或儲存產生嘅公開金鑰，以加入伺服器嘅 authorized_keys",
          "將已儲存嘅伺服器同憑證匯出做備份檔案",
          "可選密碼短語會加密備份；匯入時可合併或取代",
          "未加密嘅備份會以明文儲存密碼同金鑰——請保護或刪除個檔案"
        ]
      },
      {
        title: "保安",
        items: [
          "Secure screen（Android）：阻止截圖同螢幕錄影，並喺最近應用程式縮圖入面收埋個 App —— 當畫面上有密碼、密鑰或者 token 嗰陣用嘅可選設定",
          "已儲存嘅伺服器、憑證同密鑰都留喺裝置上 —— 秘密存放喺 Android Keystore 同 iOS Keychain，冇雲端帳號亦冇同步",
          "淨係匿名、可退出嘅使用分析 —— 絕不包括你嘅伺服器、憑證、指令或者檔案內容"
        ]
      },
      {
        title: "插件",
        items: [
          "瀏覽、安裝同運行插件嚟擴充 Mobile SSH",
          "插件由公開目錄按需下載，經 SHA-256 驗證後放入 App 專屬儲存",
          "需要嗰陣可以配置自訂或者私人目錄來源"
        ]
      }
    ],
    security:
      "保安提示：而家嘅 App 將儲存嘅伺服器同憑證紀錄擺喺裝置本機（iOS 上嘅秘密會放入系統 Keychain），並無雲端同步。請用強力螢幕鎖保護裝置，唔好喺共用裝置上儲憑證。"
  },
  compare: {
    metaTitle: "流動裝置上嘅 Mobile SSH、Termux 同 Termius",
    metaDescription:
      "針對 Android 同 iOS 嘅 SSH 工作流程，對 Mobile SSH、Termux 同 Termius 嘅均衡對比。",
    eyebrow: "流動 SSH 選擇",
    h1: "Mobile SSH、Termux 同 Termius",
    intro:
      "呢啲工具圍住 SSH 有重疊，但係用途唔同。Mobile SSH 係為 Android 同 iOS 而設嘅專注 SSH/SFTP 客戶端，Termux 係淨係 Android 先有嘅 Linux 環境，Termius 係跨平台、用帳戶提供生產力功能嘅 SSH 客戶端。",
    columns: {
      need: "需要",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "主要用途",
        mobileSsh: "為 Android 同 iOS 而設嘅專用 SSH、SFTP、本機隧道同終端機客戶端。",
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
        need: "流動終端機控制",
        mobileSsh: "內建附加按鍵列、格仔會話、全螢幕面板、揑捏縮放、帶複製／分享嘅文字選擇，仲有識 tmux 嘅滾動 —— 兩個平台都有原生直通輸入同外接鍵盤支援。",
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
        mobileSsh: "喺格仔入面同時最多八個 SSH 會話。",
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
        mobileSsh: "你想喺 Android 或者 iOS 上用一個簡單 App 連伺服器、傳檔案、保持會話。",
        termux: "你想喺 Android 上有完整命令列環境，又識自己裝同配置套件。",
        termius: "你想要跨裝置同步、打磨過嘅生產力功能、保險庫同團隊協作。"
      }
    ],
    cards: [
      {
        title: "幾時揀 Mobile SSH",
        body: "你想直接由你部電話或者平板 —— Android 或者 iOS —— 用 SSH，又唔想搞完整 Linux 環境或者雲端同步帳戶。對儲存咗嘅伺服器、SFTP、tmux 會話同快速本機隧道工作流尤其啱用。"
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
    featureHeading: "逐項功能對比",
    featureRows: [
      { category: "連線", feature: "喺 Android 同 iOS 上運行",             mobile: "yes",    termux: "淨係 Android", termius: "yes" },
      { category: "連線", feature: "已儲存嘅伺服器設定檔",               mobile: "yes",    termux: "經由 ssh config", termius: "yes" },
      { category: "連線", feature: "搜索已儲存嘅伺服器",                  mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "連線", feature: "伺服器資料夾／群組",                  mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "連線", feature: "搜索優先嘅「新增會話」選擇器",        mobile: "Android", termux: "no",          termius: "no" },
      { category: "連線", feature: "每個伺服器多個位址（LAN／VPN 漫遊）", mobile: "yes", termux: "no",     termius: "no" },
      { category: "連線", feature: "可重用憑證紀錄",                      mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "連線", feature: "最近會話歷史",                        mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "連線", feature: "登入日誌",                            mobile: "yes",    termux: "no",           termius: "no" },
      { category: "終端機", feature: "SSH 終端機",                        mobile: "yes",    termux: "經由 OpenSSH",  termius: "yes" },
      { category: "終端機", feature: "xterm-256color 模擬",               mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "終端機", feature: "5 000 行回滾緩衝",                  mobile: "yes",    termux: "可設定",       termius: "yes" },
      { category: "終端機", feature: "終端機內搜索（回滾）",              mobile: "yes",    termux: "no",           termius: "no" },
      { category: "終端機", feature: "附加按鍵列（ESC/TAB/CTRL/…）",     mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "終端機", feature: "揑住調文字大細",                    mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "終端機", feature: "雙擊面板入全螢幕",                  mobile: "yes",    termux: "no",           termius: "no" },
      { category: "終端機", feature: "終端機輸出入面嘅可點擊 URL",        mobile: "yes",    termux: "部分",         termius: "yes" },
      { category: "終端機", feature: "文字選擇：複製／分享／全選",        mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "終端機", feature: "硬件／Bluetooth 鍵盤支援",         mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "終端機", feature: "Shell 整合（OSC 133）",             mobile: "yes",    termux: "no",           termius: "no" },
      { category: "終端機", feature: "內嵌圖片（Kitty graphics）",        mobile: "yes",    termux: "no",           termius: "no" },
      { category: "終端機", feature: "Nerd Font／powerline 字形顯示",     mobile: "Android", termux: "可設定",      termius: "部分" },
      { category: "會話", feature: "多個同時 SSH 會話",                   mobile: "最多 8 個", termux: "最多 8 個",  termius: "yes" },
      { category: "會話", feature: "格仔面板佈局",                        mobile: "yes",    termux: "經由 tmux",    termius: "標籤頁" },
      { category: "會話", feature: "識 tmux 嘅滾動",                      mobile: "yes",    termux: "yes",          termius: "no" },
      { category: "會話", feature: "重連時嘅 tmux reattach 提示",         mobile: "yes",    termux: "no",           termius: "no" },
      { category: "會話", feature: "Agent 提示（Claude Code / Codex）",   mobile: "yes",    termux: "no",           termius: "no" },
      { category: "會話", feature: "持續通知列出會話清單",                mobile: "Android", termux: "部分",        termius: "no" },
      { category: "會話", feature: "前景服務同 wake lock",                mobile: "Android", termux: "yes",         termius: "部分" },
      { category: "會話", feature: "帶退避嘅自動重連",                    mobile: "yes",    termux: "經由 autossh", termius: "yes" },
      { category: "檔案", feature: "內建 SFTP 檔案傳輸介面",              mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "檔案", feature: "本機加遠端雙面板瀏覽器",              mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "檔案", feature: "上載／下載排隊",                      mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "檔案", feature: "遠端重新命名／刪除／新增",            mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "檔案", feature: "遠端檔案權限查看",                    mobile: "yes",    termux: "no",           termius: "no" },
      { category: "檔案", feature: "每個 host 個別按名或日期排序",        mobile: "yes",    termux: "no",           termius: "部分" },
      { category: "隧道", feature: "本機端口轉發",                        mobile: "yes",    termux: "經由 CLI",      termius: "yes" },
      { category: "隧道", feature: "隧道隨伺服器設定檔儲存",              mobile: "yes",    termux: "經由 ssh config", termius: "yes" },
      { category: "隧道", feature: "執行時加／刪隧道",                    mobile: "Android", termux: "no",          termius: "yes" },
      { category: "密鑰", feature: "密碼驗證",                            mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "密鑰", feature: "私鑰驗證",                            mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "密鑰", feature: "裝置上產生密鑰",                      mobile: "yes",    termux: "經由 ssh-keygen", termius: "yes" },
      { category: "密鑰", feature: "分享／儲存產生嘅公鑰",                mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "備份", feature: "匯出／匯入伺服器備份",                mobile: "yes",    termux: "經由 termux-backup", termius: "Pro 雲端保險庫" },
      { category: "備份", feature: "加密本機備份檔案",                    mobile: "yes",    termux: "no",           termius: "no" },
      { category: "備份", feature: "唔需要帳號",                          mobile: "yes",    termux: "yes",          termius: "部分" },
      { category: "私隱與費用", feature: "冇 Pro paywall",                mobile: "yes",    termux: "yes",          termius: "部分" },
      { category: "私隱與費用", feature: "冇廣告",                        mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "私隱與費用", feature: "可選退出分析",                  mobile: "Android", termux: "冇分析",      termius: "no" },
      { category: "私隱與費用", feature: "只係本機資料（冇雲端同步）",    mobile: "yes",    termux: "yes",          termius: "部分" },
      { category: "私隱與費用", feature: "Secure screen（阻止截圖）",       mobile: "Android", termux: "no",          termius: "no" },
      { category: "會話", feature: "Eternal Terminal（彈性會話）",         mobile: "yes",    termux: "經由 CLI",      termius: "no" },
      { category: "會話", feature: "經 SSH 自動安裝 etserver",             mobile: "yes",    termux: "no",           termius: "no" },
      { category: "會話", feature: "tmux 會話管理器",                      mobile: "yes",    termux: "經由 CLI",      termius: "no" },
      { category: "插件", feature: "插件支援",                             mobile: "yes",    termux: "經由套件",      termius: "no" },
      { category: "插件", feature: "按需安裝嘅插件目錄",                   mobile: "yes",    termux: "no",           termius: "no" }
    ],
    agentAppsHeading: "Mobile SSH 同遠端 AI agent App 嘅對比",
    agentAppsIntro:
      "有一類較新嘅 App，專門用嚟由你部電話喺遠端機器上運行 Claude Code、Codex 同類似嘅編碼 agent。Mobile SSH 同佢哋有重疊 —— 你可以經 SSH 運行呢啲 agent，喺佢哋需要你嗰陣收到提示 —— 但佢係由另一邊入手：佢首先係一個通用、直連嘅 SSH 客戶端，其次先至係 agent 夥伴。",
    agentAppsRows: [
      { feature: "喺遠端伺服器上運行 Claude Code 同 Codex", mobile: "yes",    onepilot: "yes",      happy: "yes",   omnara: "yes" },
      { feature: "通用 SSH 終端機（運行任何命令）",         mobile: "yes",    onepilot: "yes",      happy: "no",    omnara: "部分" },
      { feature: "直連 SSH —— 冇雲端中繼",                  mobile: "yes",    onepilot: "yes",      happy: "no",    omnara: "no" },
      { feature: "SFTP 檔案傳輸",                           mobile: "yes",    onepilot: "部分",     happy: "no",    omnara: "no" },
      { feature: "本機端口轉發",                            mobile: "yes",    onepilot: "yes",      happy: "no",    omnara: "no" },
      { feature: "tmux 會話管理器",                         mobile: "yes",    onepilot: "部分",     happy: "no",    omnara: "no" },
      { feature: "Agent 提示（agent 需要輸入時推送通知）",  mobile: "yes",    onepilot: "yes",      happy: "yes",   omnara: "yes" },
      { feature: "一撳批准／拒絕 agent 提示",               mobile: "no",     onepilot: "yes",      happy: "yes",   omnara: "yes" },
      { feature: "Android 同 iOS",                          mobile: "yes",    onepilot: "淨係 iOS", happy: "yes",   omnara: "yes" },
      { feature: "唔需要帳號",                              mobile: "yes",    onepilot: "yes",      happy: "yes",   omnara: "no" },
      { feature: "冇 Pro paywall（所有功能免費）",          mobile: "yes",    onepilot: "no",       happy: "no",    omnara: "no" },
      { feature: "開源",                                    mobile: "no",     onepilot: "no",       happy: "MIT",   omnara: "Apache" }
    ],
    agentAppsNote:
      "取捨係實在嘅：專門嘅 agent App 為權限提示加咗一個一撳批准／拒絕嘅畫面，而 Mobile SSH 就要你喺終端機入面回覆 agent。作為回報，Mobile SSH 係一個完整嘅 SSH／SFTP／隧道客戶端，直接連去你自己嘅伺服器，唔使帳號亦冇供應商中繼，而且每個功能都免費。Happy 同 Omnara 係開源，但會經雲端中繼路由（Omnara 仲要帳號）；Onepilot 最接近 —— 喺 iOS 上直連 SSH —— 但淨係 iOS 又要俾錢。",
  },
  privacy: {
    metaTitle: "私隱政策 | Mobile SSH",
    metaDescription:
      "Mobile SSH 私隱政策，包括本機儲存、SSH 資料傳輸、檔案傳輸、日誌，同埋 Android 同 iOS 上嘅 App 權限。",
    eyebrow: "私隱",
    h1: "私隱政策",
    intro:
      "Mobile SSH 設計成為 Android 同 iOS 而設嘅本機 SSH 客戶端。唔需要 Mobile SSH 帳戶，亦無 Mobile SSH 雲端同步服務。",
    sections: [
      {
        heading: "儲喺你裝置上嘅資料",
        body: "如果你揀儲存 App 資料，Mobile SSH 會擺喺裝置本機 —— iOS 上嘅秘密會放入系統 Keychain。當中可以包括儲存嘅伺服器設定檔、用戶名、port、密碼、私鑰、key 通行碼、端口轉發規則、最近會話、登入嘗試歷史、檔案傳輸路徑、檔案排序偏好、tmux reattach 提示、App 設定，同埋當開咗除錯記錄時嘅除錯日誌。"
      },
      {
        heading: "經網絡送出嘅資料",
        body: "Mobile SSH 只會將 SSH 驗證資料送俾你設定過、又連緊嘅伺服器。終端機輸入／輸出、SFTP 檔案內容同本機端口轉發流量會同你選嘅伺服器同遠端端點交換。Mobile SSH 唔會將呢啲資料送俾任何 Mobile SSH 分析、廣告、遙測或者雲端同步服務。"
      },
      {
        heading: "檔案傳輸同儲存權限",
        body: "檔案傳輸功能會瀏覽本機電話儲存同遠端 SFTP 目錄，俾你上載同下載檔案。喺需要嘅 Android 版本，App 可能會請求儲存權限，等本機瀏覽器可以讀寫所揀嘅檔案。喺 iOS，本機檔案同相片會經系統嘅文件同相片選擇器存取。"
      },
      {
        heading: "日誌同疑難排解",
        body: "登入歷史同可選嘅除錯日誌會擺喺本機，俾你做疑難排解。除錯日誌可能包括終端機事件、SSH 資料大細、觸控輸入診斷、重設大細事件、隧道生命週期事件。將除錯封存檔分享俾客服或其他人之前，請先檢查。"
      },
      { heading: "匿名使用分析", body: "為咗了解應用程式點樣被使用並加以改善，Mobile SSH 會向 Aptabase（一間注重私隱、代表我哋處理資料嘅分析服務商）傳送匿名使用分析。僅限匿名事件（例如應用程式開啟同所用功能），連同應用程式版本、作業系統版本、裝置型號同語言。佢使用會定期重設嘅隨機工作階段識別碼，唔會同你或你嘅裝置關聯。當中絕不包含你嘅 SSH 伺服器、主機名稱、用戶名、密碼、金鑰、指令或檔案內容。資料透過加密（HTTPS）連線傳送。分析預設開啟，可隨時喺「設定」入面關閉；關閉後唔會傳送任何嘢。" }
    ],
    permissionsHeading: "權限",
    permissions: [
      { label: "互聯網", body: "連接 SSH 伺服器需要。" },
      { label: "Wake lock 同 Wi-Fi lock", body: "喺 Android 上用嚟喺裝置瞓覺時保持活躍 SSH 會話。" },
      { label: "前景服務同通知", body: "喺 Android 上用嚟喺背景處理活躍連線；喺 iOS，通知用嚟做 agent 提示。" },
      { label: "儲存權限", body: "畀檔案傳輸同 key 匯入用；喺 iOS 會經系統嘅文件同相片選擇器。" }
    ],
    securityHeading: "保安責任",
    securityBody:
      "如果儲咗憑證或私鑰，請用強力螢幕鎖保護你嘅裝置；只連你信任嘅伺服器。而家嘅版本用 App 本機儲存（加埋 iOS 嘅 Keychain），唔係另外加密嘅雲端保險庫。喺 Android，可選嘅 Secure screen 設定會阻止截圖同螢幕錄影，並喺最近應用程式檢視入面收埋個 App。",
    contactHeading: "聯絡",
    contactBody: "客服聯絡：[mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)。"
  },
  docsIndex: {
    metaTitle: "文檔 | Mobile SSH",
    metaDescription: "Android 同 iOS 上 Mobile SSH 嘅終端用戶文檔。",
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
    metaDescription: "關於 Mobile SSH：Android 同 iOS SSH 客戶端嘅版本、作者、授權同開源聲明。",
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
      { name: "JSch (mwiede fork) — Android",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch" },
      { name: "JZlib (bundled in JSch) — Android",   license: "BSD 3-clause" },
      { name: "jBCrypt (bundled in JSch) — Android", license: "ISC" },
      { name: "Ed25519 / Ed448 Java — Android",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java" },
      { name: "StringFog — Android",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog" },
      { name: "SwiftNIO & SwiftNIO SSH — iOS",       license: "Apache 2.0", url: "https://github.com/apple/swift-nio-ssh" },
      { name: "Swift Crypto — iOS",                  license: "Apache 2.0", url: "https://github.com/apple/swift-crypto" }
    ],
    contactHeading: "聯絡",
    contactBody: "客服聯絡：[mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)。"
  }
};
