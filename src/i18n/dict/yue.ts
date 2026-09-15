import type { Dict } from "../types";

export const yue: Dict = {
  meta: {
    siteName: "Mobile SSH",
    languageLabel: "語言",
    languageSwitcher: "切換語言"
  },
  nav: {
    blog: "網誌",
    home: "首頁",
    features: "功能",
    docs: "說明文件",
    compare: "對比",
    about: "關於",
    privacy: "私隱"
  },
  footer: {
    discordCommunity: "Discord 上嘅 Mobile SSH 社群",
    beta: "參與測試",
    tagline: "為 Android 同 iOS 裝置而設嘅集中式 SSH、SFTP 同終端機工作流程。",
    documentation: "說明文件",
    comparison: "對比",
    privacy: "私隱",
    contact: "聯絡",
    feedback: "意見回饋"
  },
  home: {
    metaTitle: "Mobile SSH — Android 同 iOS 嘅 SSH 用戶端",
    metaDescription:
      "Android 同 iOS 嘅 Mobile SSH：SSH 終端、跳板機、tmux、herdr、Zellij、SFTP、VNC 桌面同備份。Android 仲有 VPN 客戶端同安全金鑰。",
    eyebrow: "Android 同 iOS 嘅 SSH 用戶端",
    h1: "Mobile SSH",
    intro:
      "為手機同平板而設嘅 SSH 終端、tmux、herdr、Zellij 管理器、SFTP、VNC 桌面、跳板機同本機隧道。Eternal Terminal 喺斷線時保留遠端 shell。Android 仲有 VPN 客戶端同 USB/NFC 安全金鑰認證。",
    versionLine: "支援 {count} 種語言 · Android {version} · iOS {iosVersion} 公測版",
    ctaDocs: "睇說明文件",
    ctaPlay: "喺 Google Play 下載",
    ctaIos: "喺 TestFlight 下載 iOS 公測版",
    platformAndroid: "Android",
    platformIos: "iOS — iPhone 同 iPad",
    advantagesHead: "點解揀 Mobile SSH",
    advantagesIntro: "針對手機 SSH 用戶端慣常出嘅問題嚟設計。",
    advantages: [
      { title: "冇 Pro 級數，冇廣告", text: "所有功能都喺同一個 App 入面。冇 paywall 將主要功能擺喺 Pro 升級後面，終端機上面亦冇廣告 banner。" },
      { title: "資料全部留喺手機", text: "儲存嘅伺服器、憑證、金鑰都喺裝置上面。冇雲端帳號，唔會有人關咗佢。" },
      { title: "儲存主機，一撳就連", text: "主機加一次，下次搜尋撳一下就再連 —— 連金鑰、連接埠同已設定好嘅通道都齊。" },
      { title: "代理提示，一撳就答到", text: "Claude Code、Codex 或者其他代理一需要你，你即刻知：個窗格會變琥珀色，工具列個徽章會數住有幾多個等緊你，喺 Agents 清單一撳就答到個提問 —— 唔使喺終端機度打字。" },
      { title: "鍵盤上面嘅終端機按鍵", text: "十三個鍵嘅一行 —— ESC、TAB、CTRL、方向鍵、Home、End、PgUp、PgDn —— 唔夠位嗰陣會換去第二行，而唔係要滑動，所以冇按鍵會匿埋喺畫面外。仲可以由預設面板加入 F1–F12、Ctrl 組合鍵，或者你自己嘅跳脫序列。" },
      { title: "唔使打指令嘅連接埠轉發", text: "通道黐喺伺服器設定檔度，連線即自動開。" },
      { title: "熄屏漫遊都頂得住", text: "俾一個已儲存嘅伺服器設幾個位址 —— 譬如屋企 LAN IP 同 VPN IP —— Mobile SSH 會撥邊個有回應就用邊個，仲會優先試上次連得通嗰個，網絡一變就即刻重連。喺 Android，前景服務同 wake lock 令 shell 喺熄屏時都唔斷；喺 iOS，自動重連加 tmux 自動 attach 令你返返去頭先停低嘅位置。" },
      { title: "Eternal Terminal", text: "可選嘅 ET 傳輸令遠端 shell 喺斷網、休眠同 IP 轉變之間都唔斷。主機上冇 etserver？Mobile SSH 可以經 SSH 幫你裝好。" },
      { title: "用插件擴充", text: "瀏覽公開目錄，按需要安裝插件嚟加入新工作流。每個插件都會下載並經 SHA-256 驗證後放入 App 專屬儲存。" }
    ],
    sectionAHead: "為流動裝置上嘅 SSH 工作而設計",
    sectionAIntro:
      "Mobile SSH 幫你縮短常見嘅管理路徑：儲存伺服器、連線、保持工作階段、需要嗰陣搬檔案、然後快速返去仲開緊嘅終端機。",
    features: [
      { title: "SSH 終端機", text: "xterm-256color 終端機，支援 24-bit 真彩色、斜體、終端機內搜尋、OSC 133 shell 整合，仲有捏住調文字大細 —— Android 同 iOS 上仲有可設定嘅字型同配色，以及 Nerd Font powerline／圖示字形。" },
      { title: "多工作階段格網", text: "同時最多八個 SSH 工作階段喺可調大小嘅格網入面 —— 撳窗格聚焦、雙撳入全螢幕、捏住調文字大細。" },
      { title: "撳得嘅連結", text: "終端機輸出裡面嘅 URL 會有底線，撳一下就喺瀏覽器打開 —— 唔使複製或者切換 App。" },
      { title: "伺服器資料夾同名稱", text: "將已儲存嘅伺服器整理入可摺疊嘅群組，仲可以幫伺服器改個名，清單就顯示個名而唔係位址。一旦個名會有歧義，位址就會自動走返出嚟，所以每一行都唔會撈亂。" },
      { title: "代理提示", text: "代理會經終端機報告自己，所以個 App 知道邊個卡住咗、卡喺乜嘢。喺 Agents 清單一撳就答到；提示係取代而唔會疊埋一堆，撳一下就會打開響嗰個窗格。" },
      { title: "私鑰", text: "用密碼或者私鑰登入，喺裝置產生 Ed25519 或 ECDSA（Android 亦有 RSA）。Android 仲支援 USB/NFC FIDO2 金鑰同按伺服器開啟嘅 SSH 代理轉發。" },
      { title: "SFTP 傳輸", text: "同使用中 SSH 工作階段綁定嘅雙窗格檔案瀏覽器。將上載同下載排隊，重新命名、刪除，並查看遠端權限。" },
      { title: "連接埠轉發", text: "將本機通道規格同伺服器設定檔一齊儲存，連線時就會自動開 —— 就算喺新網絡上重連之後都會返嚟，唔使你自己再手動起過。" },
      { title: "重連工作流", text: "一轉網絡，工作階段就即刻重撥，唔使等死咗嘅路由逾時；正喺退避等候嘅工作階段，一有可用網絡就即刻醒返。喺 iOS，靜靜雞停咗回應嘅伺服器都會俾偵測到並重新連線。" },
      { title: "備份與還原", text: "備份伺服器、憑證同設定，可揀密碼加密並預覽合併／取代。Android 包括 VPN 設定；目前兩個平台共用格式，支援嘅平台專用設定都會保留。" },
      { title: "Eternal Terminal", text: "用 Eternal Terminal（ET）連線，令工作階段喺斷網、休眠同 IP 轉變之間都唔斷 —— 仲可以選擇經 SSH 自動裝好 etserver。" },
      { title: "多工器管理器", text: "兩個平台用 tmux、herdr 同 Zellij 管理器附加、改名、建立、分割、縮放或結束工作階段。共用工具列掣開可用管理器，儲存伺服器可揀連線時附加邊個。" },
      { title: "插件", text: "按類別瀏覽、搜尋同篩選插件，再安裝需要嘅流程。下載經 SHA-256 驗證後放喺應用程式私有空間。" },
      {
        "title": "伺服器身份同跳板機",
        "text": "兩個平台都可經儲存堡壘機連伺服器。認證前檢查金鑰，變咗就擋。Android 可自動固定新金鑰或先問；iOS 要確認未知金鑰。"
      },
      {
        "title": "遠端桌面",
        "text": "Android 同 iOS 經 SSH 開 VNC 桌面，支援觸控、鍵盤、剪貼簿同伺服器支援嘅遠端尺寸調整。"
      },
      {
        "title": "Android VPN 客戶端",
        "text": "由主畫面管理 SSH VPN、本機 SOCKS5、WireGuard、Shadowsocks 同 OpenVPN。揀設定開始路由，用 Mobile SSH VPN 快速設定磚塊停低或恢復。"
      }
    ],
    multiHead: "一個畫面，幾個使用中嘅 Shell",
    multiP1:
      "終端機畫面可以喺格網入面同時擺幾個使用中嘅 SSH 工作階段。揀窗格嚟打字，用額外按鍵列做終端機控制，捏住調文字大細，需要全螢幕聚焦嗰陣就雙撳窗格。",
    multiP2:
      "主畫面答嘅係「我可以返返去邊度？」—— 而家仲連緊嘅連線，同埋喺你已儲存伺服器上面等緊你嘅 tmux 工作階段；佢哋由已儲存嘅快照重建，所以完全冇網絡都照樣顯示得到。",
    multiAlt:
      "Mobile SSH 喺電話上顯示兩個使用中 SSH 終端機工作階段並排分屏嘅畫面。",
    sftpHead: "當終端機唔夠用 — SFTP",
    sftpBody:
      "瀏覽本機同遠端資料夾、排隊傳檔、記住各 tmux 工作階段目錄，同用其他應用程式開遠端檔案。兩個平台都可分享檔案入終端；iOS 可記住「檔案」揀嘅資料夾。",
    sftpCtaGuide: "檔案傳輸指南",
    sftpCtaAll: "所有功能",
    sftpAlt: "電話上嘅 Mobile SSH 檔案傳輸畫面，包含本機同遠端窗格。",
    galleryHead: "睇吓真機效果",
    galleryIntro:
      "Android 電話同 iPhone 嘅截圖 — 你會用嚟新增伺服器、喺終端機做嘢、跑多個工作階段，同埋用 SFTP 搬檔案嘅同一啲畫面。",
    carouselPrev: "上一張截圖",
    carouselNext: "下一張截圖",
    carouselDot: "去第 {n} 個位置",
    videoHead: "睇佢實際運作",
    videoIntro: "兩個平台嘅短片示範。Android：主畫面話你知有咩工作階段可以續返、工作階段工具列淨係顯示嗰部伺服器真係有嘅功能、將檔案直接送入提示符，仲有 tmux、herdr 同 Zellij 管理器。iOS：一開 app 就入到運行中嘅終端機，同埋你之後返返去嘅主畫面。",
    videoAlt: "Android 示範：主畫面列出可以續返嘅 tmux 工作階段、工作階段工具列、將檔案附加入提示符，同埋 tmux、herdr 同 Zellij 工作階段管理器",
    videoIosAlt: "iOS 示範：打開 Mobile SSH 直接入到運行中嘅 SSH 終端機工作階段，跟住返去主畫面，睇到 tmux 管理器、設定同 app 其他畫面",
    muxHead: "每個工作階段管理器一段片",
    muxIntro:
      "概覽介紹 tmux、herdr 同 Zellij，較長錄影展示兩個平台連真實伺服器時嘅工作階段、視窗、分頁同窗格操作。",
    muxItems: [
        {
          text: "由主畫面直接去到工作階段、視窗同窗格，其中一個工作階段有個鈴，因為嗰度有嘢等緊人應。附加一個視窗，行緊嘅終端就跟住過去；開一個視窗再改名——全程唔使撳任何前綴組合鍵。",
          androidAlt: "Android tmux 管理器示範：主畫面快取嘅工作階段清單，跟住係工作階段、視窗同窗格，附加一個視窗令終端跟住行，同埋開一個有名嘅視窗。",
          iosAlt: "iOS tmux 管理器示範：有建立時間嘅 tmux 工作階段，其中一個用鈴標住等緊輸入，跟住係視窗同窗格，每行都有開啟、改名同終止。"
        },
        {
          text: "工作區、分頁同窗格帶住真實嘅代理狀態——一個做緊嘢，一個被阻塞緊等人答。預覽被阻塞嗰個，喺電話度回覆佢，然後睇住 herdr 將佢改為做緊，再改為完成。",
          androidAlt: "Android herdr 管理器示範：標住代理狀態嘅工作階段同工作區，一個標住 needs you 嘅代理，喺電話度回覆佢，同埋新建再改名一個工作區。",
          iosAlt: "iOS herdr 管理器示範：帶代理狀態嘅工作區，同埋一張回覆表，將打好嘅內容連 Enter 一齊送畀被阻塞嘅代理。"
        },
        {
          text: "有建立時間嘅工作階段，跟住係分頁同窗格。唔使附加都預覽到某個窗格嘅輸出，加一個有名嘅分頁，將重要嗰個擺去前面，然後附加——喺提示符度乜都唔使打。",
          androidAlt: "Android Zellij 管理器示範：有建立時間嘅工作階段、分頁同窗格，預覽窗格輸出，開一個有名嘅分頁，同埋附加一個工作階段。",
          iosAlt: "iOS Zellij 管理器示範：一個可以附加、改名、終止同刪除嘅工作階段，佢嘅分頁，同埋一個有預覽同兩個分割方向嘅窗格。"
        }
    ],
    demoHead: "再多三段，喺 Android 上面拍",
    demoIntro:
      "呢三段暫時仲未有 iOS 版本。同上面啲示範用同一部真實伺服器：一個就算你撥走個 App 都仲行緊嘅工作階段、一條喺電話上面產生而唔係打入去嘅金鑰，同埋按你自己諗嘢嗰個分法歸類好嘅伺服器。",
    demoItems: [
      {
        title: "撥走個 App，工作階段照樣行",
        text: "Android 用前景服務維持連線，常駐通知寫明伺服器並提供全部斷開。日誌串流緊時離開，再返嚟會話仲喺度跑。iOS 只准短暫背景時間，之後重連同重新附加多工器。",
        androidAlt:
          "Android 示範一個喺背景繼續行嘅工作階段：終端機入面串流緊嘅即時 HTTP 日誌、通知權限提示、寫住已連線伺服器名同「全部中斷連線」嘅持續通知，跟住返去電話主畫面，返嚟見到同一條串流仲喺度到緊。"
      },
      {
        title: "金鑰喺呢度產生，唔係打入去",
        text: "喺電話上面產生一條 Ed25519 金鑰：一個標籤、一個用戶名、一個可選嘅密碼短語。跟住彈出嘅面板會顯示公鑰嗰半，畀你加入伺服器嘅 authorized_keys；公鑰同私鑰兩半都可以分享或者儲存。",
        androidAlt:
          "Android 示範產生金鑰：「產生 SSH 金鑰」對話框有標籤、用戶名、Ed25519 金鑰類型同密碼短語，跟住係公鑰面板，可以分享或者儲存條金鑰。"
      },
      {
        title: "伺服器擺喺你自己改名嘅資料夾入面",
        text: "將已儲存嘅伺服器整理入資料夾，唔用嗰啲就摺埋佢。同一段片最後去到終端機：指令印出嚟嘅 URL 會有底線，撳一下就得，唔使自己用手揀。",
        androidAlt:
          "Android 示範伺服器資料夾：已儲存嘅伺服器分入有名嘅資料夾，可以展開同摺埋，跟住係終端機，指令輸出入面嘅 URL 有底線，可以撳。"
      }
    ],
    graphicsHead: "終端機入面郁緊嘅圖表",
    graphicsBody:
      "一段 36 格嘅 GIF，經 Kitty 圖形協定串流入去，由 App 按檔案本身嘅格速解碼——唔係由外面逐格推。跟住係考驗一個終端機嘅轉義序列：OSC 8 將建置編號同儀表板名變成撳得嘅嘢，OSC 52 畀遠端寫入電話嘅剪貼簿，OSC 777 彈出一個真正嘅 Android 通知。",
    graphicsAlt:
      "Android 示範：經 Kitty 圖形協定串流入終端機嘅動態延遲圖表，跟住係 OSC 8 連結、OSC 52 寫入剪貼簿同一個 OSC 777 通知。",
    lightboxClose: "關閉",
    lightboxPrev: "上一張",
    lightboxNext: "下一張",
    galleryAlts: [
      "Android 電話上嘅 Mobile SSH 主畫面，有「使用中工作階段」橫幅同可以繼續嘅已儲存伺服器清單，下面係伺服器、憑證、設定、關於同插件嘅掣。",
      "電話上嘅新增伺服器對話框，有伺服器名稱、主機同連接埠、額外位址、憑證、私鑰同連接埠轉發欄位。",
      "電話上嘅單工作階段 SSH 終端機，工作階段工具列下面顯示編程代理嘅修補同埋通過咗嘅測試。",
      "電話上兩個並排嘅 SSH 工作階段，並排分屏顯示。",
      "電話上四個 SSH 工作階段喺格網入面，每個連住唔同嘅伺服器，使用中嘅窗格有 highlight。",
      "電話上嘅 SFTP 檔案傳輸畫面，包括「我嘅電話」同「遠端主機」窗格。",
      "電話上嘅關於對話框，顯示版本、作者、授權同網站。",
      "電話上嘅「產生 SSH 金鑰」對話框，有標籤、用戶、金鑰類型同密碼短語欄位。",
      "電話上嘅「公鑰」對話框，顯示產生咗嘅金鑰，連同複製、分享同儲存嘅選項。",
      "已儲存伺服器畫面，顯示伺服器整理入可摺疊嘅「工作」同「個人」資料夾群組。",
      "電話上嘅 SSH 終端機，https:// URL 帶底線成為撳得嘅連結。",
      "Android 電話上嘅 Zellij 管理器，列出工作階段、分頁同窗格，仲有 attach、重新命名、kill 同聚焦嘅掣。",
      "電話上嘅 tmux 管理器，列出 tmux 工作階段、視窗同窗格，仲有附加、重新命名同切換嘅掣。",
      "電話上嘅插件畫面，顯示可安裝嘅插件目錄，包括 Tailscale、WireGuard 同 Claude Code CLI。",
      "電話上嘅 AI Chat 插件，正經 SSH 串流播放遠端伺服器上跑緊嘅本機 llama3.2 模型嘅回覆。",
      "電話上嘅新增伺服器對話框，傳輸方式設定為 Eternal Terminal，等工作階段喺斷網之後都唔斷。"
    ],
    galleryIosAlts: [
      "iPhone 上嘅 Mobile SSH 連線表單，包含伺服器、驗證、資料夾同傳輸方式欄位。",
      "iPhone 上嘅已儲存伺服器，整理入 Production 同 Staging 群組，仲有伺服器搜尋。",
      "iPhone 上運行中嘅 SSH 終端機，有 tmux 狀態列，下面係額外按鍵列。",
      "iPhone 上兩個 SSH 工作階段上下排列喺格網入面，撳一下窗格就聚焦。",
      "iPhone 上嘅檔案傳輸，有「我嘅電話」同「遠端主機」窗格，仲有已完成嘅傳輸日誌。",
      "iPhone 上嘅金鑰驗證，顯示裝置上產生嘅 Ed25519 金鑰同可以複製嘅公鑰。",
      "iPhone 上嘅 tmux 管理器，列出工作階段同視窗，有開啟、重新命名同 kill 操作 —— 響鈴標示等緊輸入嘅代理。",
      "iPhone 上嘅 SSH 終端機，attach 咗一個 tmux 視窗，顯示遠端編輯器入面嘅代碼。",
      "iPhone 上嘅插件目錄，有 Tailscale、WireGuard、Claude Code CLI、VS Code 同 AI Chat 可以安裝。",
      "iPhone 上嘅連線表單，傳輸方式設定為 Eternal Terminal，等工作階段喺斷網之後都唔斷。",
      "iPhone 上嘅代理提示設定，有震動、聲音同「淨係耳機」開關。",
      "iPhone 上嘅 Mobile SSH 主畫面，有「使用中工作階段」橫幅同一行「繼續」可以返返去運行中嘅工作階段，下面係伺服器、憑證、日誌、設定、關於同插件嘅磚。"
    ],
    compareHead: "同 Termux、Termius 之間嘅定位",
    compareIntro:
      "Mobile SSH 故意保持窄範圍：佢唔係完整嘅 Linux 環境，亦唔係跨平台嘅團隊保險庫。佢係一個為 Android 同 iOS 而設嘅本機 SSH/SFTP 工具，俾你快速用到流動用家最常用嘅工作階段控制。",
    compareGuideTitle: "對比指南",
    compareGuideText: "喺你嘅電話或者平板上幾時揀 Mobile SSH、Termux 定 Termius。",
    privacyTitle: "私隱政策",
    privacyText: "睇吓邊啲連線資料留喺本機，邊啲會送去你嘅伺服器。"
  },
  features: {
    metaTitle: "功能 | Mobile SSH",
    metaDescription:
      "睇吓 Android 同 iOS 嘅 Mobile SSH 終端、跳板機、身份驗證、SFTP、VNC、備份同多工器，以及 Android VPN 同安全金鑰。",
    eyebrow: "功能清單",
    h1: "Mobile SSH 功能",
    intro:
      "用 SSH 終端、已驗證身份、跳板機、SFTP、VNC 同管理器，由 Android 或 iOS 連伺服器。Android 仲有內置 VPN 路由同硬件安全金鑰；下面標明各平台專用功能。",
    groups: [
      {
        title: "平台",
        items: [
          "Android 8.0 或以上 —— 而家係 Google Play 嘅封閉測試：喺手機瀏覽器打開加入連結，之後再喺 Play 安裝",
          "iPhone 同 iPad 上嘅 iOS 16 或以上 —— 喺 TestFlight 加入公測",
          "目前 Android 同 iOS 共用清單同設定備份格式 2；匯入唔會令目標平台原本唔支援嘅功能變成可用"
        ]
      },
      {
        title: "連線",
        items: [
          "密碼驗證同私鑰驗證",
          "Android 支援 Ed25519、ECDSA（P-256/384/521）同 RSA 私鑰；iOS 支援 Ed25519 同 ECDSA。兩個平台都開得到有密碼短語加密嘅金鑰",
          "儲存嘅伺服器設定檔，包括主機、連接埠、用戶、憑證、私鑰同可選通道規格 —— 複製一個設定檔，就可以將佢嘅設定複製到一個新伺服器",
          "幫伺服器改個名，清單就會顯示個名而唔係位址 —— 一旦兩行會撈亂，位址就會自動走返出嚟",
          "可以按名稱、主機、連接埠、憑證，或者任何一個備用位址嚟搜尋已儲存嘅伺服器",
          "如果你用兩行唔同嘅已儲存項目連咗同一部機，個 App 會察覺到 —— 佢會計主機金鑰嘅指紋，然後建議你將兩者合併做一個多位址伺服器",
          "搜尋優先嘅「新增工作階段」流程：喺專屬搜尋頁揀已儲存嘅伺服器，一撳就連",
          "每個已儲存伺服器可設多個位址，方便 LAN/VPN 漫遊 —— 按次序逐個撥，優先試上次連得通嗰個，網絡一變就自動重連",
          "可由伺服器設定畫面揀返用嘅可重用憑證紀錄",
          "以「續返之前嘅嘢」為中心嘅主畫面：而家仲連緊嘅連線，同埋喺你伺服器上面等緊嘅 tmux 工作階段 —— 佢哋由已儲存嘅快照嚟，所以冇網絡都列得出，每一行仲會標明個快照幾耐之前。喺 iOS，「最近」清單搬咗入「新連線」面板，撳一下就會預先填好表單",
          "由頭到尾支援 IPv6：位址欄位可以用方括號寫字面位址，後面仲可以加連接埠，連接埠轉發規則入面亦可以用方括號寫 IPv6 目標",
          "成功同失敗嘅登入嘗試日誌，會記低實際撥咗嘅位址，失敗嗰陣仲會記低原因",
          "Teleport 代理伺服器傳輸（實驗性，Android）：用用戶名、密碼同 OTP 登入，或者匯入 Teleport 設定檔或身分檔案，瀏覽叢集節點，然後經代理伺服器嘅通道運行終端機、SFTP、tmux 同插件",
          "兩個平台有儲存 SSH 跳板機，展開有序鏈最多八跳，每跳用自己憑證同身份檢查",
          "Android SSH 代理轉發按伺服器開，遠端程式可要求保存金鑰簽署，可設每次先批准；私鑰留喺手機",
          "Android 經 USB 或 NFC 用 FIDO2，註冊或匯入 OpenSSH 安全金鑰憑證，再按提示觸摸同輸入 PIN"
        ]
      },
      {
        title: "終端機",
        items: [
          "VT100/xterm-256color 終端機行為，支援 24-bit 真彩色同斜體 —— 會向 shell 報 TERM=xterm-256color 同 COLORTERM=truecolor",
          "捲動緩衝區喺 Android 同 iOS 可以設做 1,000、5,000、10,000 或者 50,000 行（預設 5,000）",
          "終端機內尋找 —— 搜尋捲動緩衝區同可見畫面，並喺各個匹配之間跳轉（Android 同 iOS）",
          "Shell 整合（OSC 133）：喺各個提示符之間逐個跳、揀選成段指令輸出 —— 譬如 300 行之前嗰個 build 錯誤，唔止係最後嗰個 —— 仲會喺長時間指令完成時提示你（Android 同 iOS）",
          "終端機內經 Kitty graphics protocol 內嵌顯示圖片，捏住縮放同重新換行之後圖片都仲喺度，唔會消失（Android 同 iOS）",
          "應用程式自己畫方塊、點字同六分格，令 chafa、timg 同 ANSI 字符畫喺 Android 同 iOS 都準確鋪格",
          "兩個平台都可用觸控向追蹤滑鼠嘅終端程式發送單擊，亦可選拖曳；iOS 仲有改為放置游標嘅設定",
          "窗格標題會顯示嗰個窗格真正嘅工作目錄，由 tmux 問返嚟或者由 shell 經 OSC 7 報上嚟（Android）",
          "十三個鍵嘅額外按鍵列 —— ESC、TAB、CTRL、方向鍵、Home、End、PgUp、PgDn、鍵盤切換 —— 唔夠位嗰陣會換去第二行而唔係要滑動，仲擺唔落嘅會收入溢出選單，所以冇一個鍵會走出畫面外",
          "喺 Android 同 iOS 都可以自訂呢一列：由大約 45 個預設按鍵嘅面板加入，包括 F1–F12、Ctrl 組合鍵同符號；亦可以移除、重新排序、隱藏、自訂你自己嘅跳脫序列按鍵，同埋重設做預設，仲有即時預覽",
          "撳一下聚焦、可選嘅「撳一下顯示鍵盤」、複製同全部複製",
          "捏住調文字大細，連同遠端終端機重設大細",
          "雙撳窗格入全螢幕模式",
          "終端機文字選擇連 Copy、Share、Select all —— 長撳選取詞語，Copy 之後仍會保留選取，方便分享或者重新複製",
          "OSC 52 剪貼簿 —— 由遠端 tmux 或者 vim 工作階段直接將文字複製到電話剪貼簿（Android 同 iOS）",
          "兩個平台支援實體鍵盤同聽寫；iOS 預設開聽寫同建議，連自動更正。關閉可用直接終端輸入",
          "Android 同 iOS 都支援外接同 Bluetooth 鍵盤，包括方向鍵、功能鍵同 Ctrl/Alt 組合鍵",
          "括號貼上（bracketed paste），令多行剪貼簿內容唔會被自動執行",
          "內置嘅 Nerd Font 喺 Android 同 iOS 上顯示 powerline、starship、devicon 同 Material Design 圖示字形 —— 系統字型本來會將佢哋顯示成空白方格",
          "寬 CJK、emoji 同組合字元喺 Android 同 iOS 上會正確量度同繪製，包括字素叢集（grapheme clusters）同零寬連接符（zero-width joiners）",
          "可設定嘅終端機字型（系統等寬字型、JetBrains Mono 或 Source Code Pro）同 ANSI 配色（Solarized、Gruvbox、Dracula、Nord），喺 Android 同 iOS 上即時套用到開住嘅窗格",
          "設定入面除咗捏住縮放，仲有終端機文字大細滑桿，App 主題亦可以設做 System、Light 或者 Dark",
          "連線速度同停頓標記分清繁忙指令同冇回應連線，可選調暗同震動",
          "設定控制遠端通知、完成提示同讀取剪貼簿，呢啲權限預設關閉"
        ]
      },
      {
        title: "工作階段",
        items: [
          "同時最多八個 SSH 工作階段",
          "使用中工作階段採用格網佈局",
          "背景同鎖屏都頂得住：喺 Android，前景服務令你就算撥走咗個 App，shell 同代理都照樣跑落去；喺 iOS，tmux 自動 attach 幫你將個 shell 駁返",
          "Keepalive 同帶指數退避嘅重連嘗試 —— 最多試十次，而喺你已經離開咗嘅網絡上失敗嗰啲唔會計入呢個上限",
          "轉 Wi-Fi、流動數據或者 VPN 會即刻重撥，唔使等死咗嘅路由逾時；已經喺退避等候嘅工作階段，一有可用網絡就即刻再試",
          "Android 同 iOS 用冇回應嘅保活探測發現伺服器停止回應並重連",
          "起始畫面入面有「使用中工作階段」入口；持續通知列出工作階段 —— 撳就開",
          "兩個平台追蹤 tmux 指令同提供重新附加提示，每台可揀自動、唔附加、tmux、herdr 或 Zellij；轉 tmux socket 會保留工作階段身份",
          "代理會經終端機報告自己，所以個 App 知道係邊個代理、佢跑緊咩工具、又係咪卡住等緊你 —— 個窗格會變琥珀色，標題會寫住「claude · needs you」，工具列個徽章會數住有幾多個等緊你",
          "喺 Agents 清單一撳就答到代理嘅問題；回覆行另一條通道，所以永遠唔會打落你畫面上面嗰啲嘢度",
          "可以喺 App 入面將 agent hook 裝落伺服器 —— 佢係一個任何代理都調用得到嘅細細 shell 腳本，唔係綁死某個供應商嘅整合",
          "Eternal Terminal（ET）傳輸令工作階段喺斷網、休眠同 IP 轉變之間都唔斷，仲可以選擇經 SSH 自動裝好 etserver",
          "Tmux 管理器：列出並切換工作階段、視窗同窗格 —— attach、重新命名、新建、分割、放大或者 kill，可按名稱／日期排序，🔔 標示等緊輸入嘅代理",
          "一個多工器工具列掣開 tmux、herdr 同 Zellij；Herdr 有窗格預覽、聚焦同回覆，Zellij 支援執行緊同已退出工作階段"
        ]
      },
      {
        title: "檔案同通道",
        items: [
          "本機同遠端雙窗格 SFTP 瀏覽器，仲有一個會列出每一次傳輸、可以捲動嘅傳輸日誌",
          "排隊上載同下載；Android 或 iOS 分享擴充將檔案分享去 Mobile SSH，再上載入已連線工作階段並插入遠端路徑",
          "喺手機同遠端主機之間遞迴上載同下載成個資料夾",
          "遠端重新命名、刪除、新增、編輯、壓縮做 .tar.gz、權限（chmod/chown）同詳細資料",
          "兩個平台都可以用另一個 App 開啟已下載嘅檔案 —— 喺 iOS，下載嘅檔案仲會喺「檔案」App 嘅 On My iPhone 入面見到",
          "兩個平台按主機同 tmux 工作階段記住遠端目錄；iOS 仲記住經「檔案」揀嘅外部本機資料夾",
          "每部主機個別記住按名或日期排序，仲可以一撳返去最近用過嘅遠端路徑",
          "檔案大細用二進位單位顯示，同你隔籬個分頁終端機入面 ls -h 見到嘅一樣",
          "本機連接埠轉發隨伺服器設定檔一齊儲存，連線時自動開起",
          "整個 App 同檔案瀏覽器都會跟隨系統嘅淺色或者深色主題 —— 喺 Android 同 iOS 都可以揀 System、Light 或者 Dark"
        ]
      },
      {
        title: "本地化",
        items: [
          "兩個平台都有二十種語言：阿拉伯文、埃及阿拉伯文、孟加拉文、簡繁中文、英文、法文、德文、印地文、印尼文、日文、馬拉地文、尼日利亞皮欽文、葡萄牙文、俄文、西班牙文、泰米爾文、泰盧固文、土耳其文同烏爾都文",
          "預設跟住系統語言；如果你想個 App 用電話語言以外嘅語言，設定入面有語言選擇器"
        ]
      },
      {
        title: "金鑰與備份",
        items: [
          "喺裝置上產生新嘅 Ed25519 或 ECDSA 金鑰（Android 仲支援 RSA），可選密碼短語",
          "複製、分享或儲存產生嘅公鑰，以加入伺服器嘅 authorized_keys",
          "完整備份有伺服器、憑證、設定、語言同多工器排序；Android 仲有 SSH VPN、SOCKS5、WireGuard、Shadowsocks 同 OpenVPN 設定",
          "可只匯出選取項目或清單；完整備份有合併／取代預覽，可用密碼加密",
          "冇加密備份含密碼同私鑰。SSH 主機信任、活動工作階段、系統權限同資料夾授權唔可以搬；安全金鑰憑證仍要實體金鑰"
        ]
      },
      {
        title: "保安",
        items: [
          "Secure screen：喺 Android，阻止截圖同螢幕錄影，並喺最近應用程式縮圖入面收埋個 App；喺 iOS，將 App 切換器嘅預覽變空白，並阻止螢幕錄影同鏡像輸出（喺 iOS 冇辦法阻止手動截圖）—— 當畫面上有密碼、金鑰或者 token 嗰陣用嘅可選設定",
          "儲存嘅伺服器、憑證同金鑰留喺裝置，唔使雲端帳戶或同步；儲存保護同限制請睇私隱頁面",
          "匿名使用分析預設開啟，兩個平台都可喺設定退出；事件唔包括伺服器、憑證、指令或檔案內容",
          "SSH 認證前驗證身份。Android 預設自動固定新原始金鑰，可改為先批准；iOS 先問未知金鑰。兩者都拒絕變咗嘅金鑰",
          "兩個平台都可匯入限定範圍嘅 OpenSSH 主機金鑰撤銷。iOS 接受 @revoked Ed25519/ECDSA 金鑰；Android 仲支援主機憑證機構。iOS 唔支援主機憑證或 CA 匯入。SSH 信任留喺各裝置，唔會備份"
        ]
      },
      {
        title: "插件",
        items: [
          "按類別瀏覽同搜尋、安裝、執行插件；轉來源會刷新目錄",
          "插件由公開目錄按需下載，經 SHA-256 驗證後放入 App 專屬儲存",
          "插件要聲明佢需要乜嘢 —— SSH 指令、通道、儲存空間 —— 冇聲明過嘅嘢，個 App 一律唔畀",
          "當插件要喺你部伺服器上面裝嘢，你會先見到確實嘅指令，你批准咗佢先會執行",
          "可以配置自訂或者私人目錄來源，亦可以由你自己伺服器上面嘅資料夾安裝"
        ]
      },
      {
        "title": "遠端桌面",
        "items": [
          "兩個平台用 SSH 隧道連 VNC 桌面，唔使向公網暴露 VNC 連接埠",
          "觸控指標、實體及螢幕鍵盤、剪貼簿交換同桌面響鈴",
          "VNC 伺服器支援時揀螢幕預設或自訂尺寸；唔支援嘅請求會顯示錯誤"
        ]
      },
      {
        "title": "VPN 客戶端（Android）",
        "items": [
          "由主畫面開 VPN，管理 SSH VPN、SOCKS5、WireGuard、Shadowsocks 同 OpenVPN 設定",
          "SSH VPN 為所有或指定應用程式同網域，經儲存 SSH 伺服器傳 TCP 同 DNS；其他交畀 SSH 嘅 UDP 被擋",
          "有認證嘅本機 SOCKS5 可同另一個 VPN 一齊用；參與應用程式要設代理同遠端 DNS",
          "匯入 WireGuard .conf、支援嘅 Shadowsocks ss://，或者自包含且驗證伺服器憑證嘅 OpenVPN .ovpn",
          "啟動設定就切換 VPN，用 Mobile SSH VPN 磚塊停止或開始記住嘅設定；唔控制 SOCKS 代理",
          "Android 同時只准一個裝置 VPN。Tailscale 用自己應用程式；IKEv2/IPsec 喺 Android 設定管理。Mobile SSH 唔保證永久開啟或鎖定保護"
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
      "Mobile SSH 喺 Android 同 iOS 結合 SSH、SFTP、VNC 同多工器，Android 仲有內置 VPN 同安全金鑰。Termux 係 Android Linux 環境，Termius 係有帳戶式生產力功能嘅跨平台 SSH 客戶端。",
    columns: {
      need: "需要",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "主要用途",
        mobileSsh: "兩個平台有 SSH、SFTP、VNC、跳板機同多工器；Android 有 VPN 客戶端同 FIDO2 安全金鑰。",
        termux: "帶 APT 套件嘅 Android 終端機模擬器同 Linux 環境。",
        termius: "面向 Android、iOS、桌面同網頁化團隊工作流程嘅現代 SSH 用戶端。"
      },
      {
        need: "設定方式",
        mobileSsh: "儲存伺服器同憑證，可選跳板機，認證前先檢查身份再連線。",
        termux: "裝 OpenSSH 等套件，配置 shell 工具，喺類 Linux 命令列上做嘢。",
        termius: "透過 Termius 嘅 App／帳戶模型建立或同步主機、金鑰、snippet 同保險庫。"
      },
      {
        need: "流動終端機控制",
        mobileSsh: "額外按鍵、網格工作階段、全螢幕窗格、捏合縮放、複製分享、滑鼠同外接鍵盤。iOS 可關聽寫同建議，用直接輸入。",
        termux: "終端機環境好強大；行為睇你裝咗咩工具同點配置。",
        termius: "手機鍵盤插件、手勢、分頁、自動完成、snippet，仲有打磨過嘅終端機 UX。"
      },
      {
        need: "檔案傳輸",
        mobileSsh: "兩個平台有雙窗格 SFTP、tmux 資料夾歷史、遠端分享同接收分享檔案；iOS 可記住外部 Files 資料夾。",
        termux: "用 scp、sftp、rsync 等命令列或者裝咗嘅檔案工具。",
        termius: "內建 SFTP 同主機／金鑰管理。"
      },
      {
        need: "多工作階段工作",
        mobileSsh: "喺格網入面同時最多八個 SSH 工作階段。",
        termux: "喺 Termux 內或者遠端 shell 用 tmux 等多工器。",
        termius: "視乎平台同 plan 提供分頁同分屏工作流。"
      },
      {
        need: "資料模型",
        mobileSsh: "設定、憑證、主機信任留喺裝置，可做便攜清單同設定備份。Android 備份仲有 VPN；SSH 信任留喺各裝置。",
        termux: "Termux App 環境入面嘅類 Linux 檔案系統同套件。",
        termius: "為主機、金鑰、snippet、轉發規則、known hosts 同團隊分享提供加密保險庫。"
      },
      {
        need: "最啱嘅場合",
        mobileSsh: "你想喺 Android 或者 iOS 上用一個簡單 App 連伺服器、傳檔案、保持工作階段。",
        termux: "你想喺 Android 上有完整命令列環境，又識自己裝同配置套件。",
        termius: "你想要跨裝置同步、打磨過嘅生產力功能、保險庫同團隊協作。"
      }
    ],
    cards: [
      {
        title: "幾時揀 Mobile SSH",
        body: "你想直接由你部電話或者平板 —— Android 或者 iOS —— 用 SSH，又唔想搞完整 Linux 環境或者雲端同步帳戶。對儲存咗嘅伺服器、SFTP、tmux 工作階段同快速本機通道工作流尤其啱用。"
      },
      {
        title: "幾時揀 Termux",
        body: "你需要喺 Android 裝置上直接用套件管理、shell、編譯器、scripting、rsync、curl、Git、Python、Node.js 或者其他 Linux 風格工具。"
      },
      {
        title: "幾時揀 Termius",
        body: "你想要一個商業、跨平台嘅 SSH 工作空間，有加密保險庫同步、團隊分享、金鑰管理、snippet，同埋多裝置上一致嘅 App。"
      }
    ],
    featureHeading: "逐項功能對比",
    featureRows: [
      { category: "連線", feature: "喺 Android 同 iOS 上運行",             mobile: "yes",    termux: "淨係 Android", termius: "yes" },
      { category: "連線", feature: "已儲存嘅伺服器設定檔",               mobile: "yes",    termux: "經由 ssh config", termius: "yes" },
      { category: "連線", feature: "搜尋已儲存嘅伺服器",                  mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "連線", feature: "伺服器資料夾／群組",                  mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "連線", feature: "搜尋優先嘅「新增工作階段」選擇器",        mobile: "Android", termux: "no",          termius: "no" },
      { category: "連線", feature: "每個伺服器多個位址（LAN／VPN 漫遊）", mobile: "yes", termux: "no",     termius: "no" },
      { category: "連線", feature: "可重用憑證紀錄",                      mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "連線", feature: "主畫面列出可以續返嘅嘢",              mobile: "yes",    termux: "no",           termius: "部分" },
      { category: "連線", feature: "離線 tmux 工作階段清單（唔使連線）",      mobile: "yes",    termux: "no",           termius: "no" },
      { category: "連線", feature: "顯示伺服器名稱而唔係位址",            mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "連線", feature: "登入日誌",                            mobile: "yes",    termux: "no",           termius: "no" },
      { category: "連線", feature: "Teleport 代理伺服器傳輸（實驗性）",          mobile: "Android", termux: "no",          termius: "no" },
      { category: "連線", feature: "IPv6 主機同轉發目標",                  mobile: "yes",    termux: "yes",          termius: "部分" },
      { category: "終端機", feature: "SSH 終端機",                        mobile: "yes",    termux: "經由 OpenSSH",  termius: "yes" },
      { category: "終端機", feature: "xterm-256color 模擬",               mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "終端機", feature: "可設定嘅捲動緩衝區（1k–50k 行）",     mobile: "yes",    termux: "可設定",       termius: "部分" },
      { category: "終端機", feature: "終端機內搜尋（捲動緩衝區）",              mobile: "yes",    termux: "no",           termius: "no" },
      { category: "終端機", feature: "額外按鍵列（ESC/TAB/CTRL/…）",     mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "終端機", feature: "捏住調文字大細",                    mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "終端機", feature: "雙撳窗格入全螢幕",                  mobile: "yes",    termux: "no",           termius: "no" },
      { category: "終端機", feature: "終端機輸出入面撳得嘅 URL",        mobile: "yes",    termux: "部分",         termius: "yes" },
      { category: "終端機", feature: "文字選擇：複製／分享／全選",        mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "終端機", feature: "硬件／Bluetooth 鍵盤支援",         mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "終端機", feature: "Shell 整合（OSC 133）",             mobile: "yes",    termux: "no",           termius: "no" },
      { category: "終端機", feature: "內嵌圖片（Kitty graphics）",        mobile: "yes",    termux: "no",           termius: "no" },
      { category: "終端機", feature: "App 自繪嘅馬賽克字形（chafa、ANSI art）", mobile: "yes", termux: "睇字型",  termius: "no" },
      { category: "終端機", feature: "喺滑鼠模式 TUI 入面撳一下即係撳滑鼠", mobile: "yes", termux: "yes",       termius: "no" },
      { category: "終端機", feature: "Nerd Font／powerline 字形顯示",     mobile: "yes",     termux: "可設定",      termius: "部分" },
      { category: "工作階段", feature: "多個同時 SSH 工作階段",                   mobile: "最多 8 個", termux: "最多 8 個",  termius: "yes" },
      { category: "工作階段", feature: "格網窗格佈局",                        mobile: "yes",    termux: "經由 tmux",    termius: "標籤頁" },
      { category: "工作階段", feature: "識 tmux 嘅捲動",                      mobile: "yes",    termux: "yes",          termius: "no" },
      { category: "工作階段", feature: "重連時嘅 tmux reattach 提示",         mobile: "yes",    termux: "no",           termius: "no" },
      { category: "工作階段", feature: "代理提示（Claude Code / Codex）",   mobile: "yes",    termux: "no",           termius: "no" },
      { category: "工作階段", feature: "持續通知列出工作階段清單",                mobile: "Android", termux: "部分",        termius: "no" },
      { category: "工作階段", feature: "前景服務同 wake lock",                mobile: "Android", termux: "yes",         termius: "部分" },
      { category: "工作階段", feature: "帶退避嘅自動重連",                    mobile: "yes",    termux: "經由 autossh", termius: "yes" },
      { category: "檔案", feature: "內建 SFTP 檔案傳輸介面",              mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "檔案", feature: "本機加遠端雙窗格瀏覽器",              mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "檔案", feature: "上載／下載排隊",                      mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "檔案", feature: "遠端重新命名／刪除／新增",            mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "檔案", feature: "遠端檔案權限查看",                    mobile: "yes",    termux: "no",           termius: "no" },
      { category: "檔案", feature: "每部主機個別按名或日期排序",        mobile: "yes",    termux: "no",           termius: "部分" },
      { category: "通道", feature: "本機連接埠轉發",                        mobile: "yes",    termux: "經由 CLI",      termius: "yes" },
      { category: "通道", feature: "通道隨伺服器設定檔儲存",              mobile: "yes",    termux: "經由 ssh config", termius: "yes" },
      { category: "通道", feature: "執行時加／刪通道",                    mobile: "no",     termux: "no",           termius: "yes" },
      { category: "金鑰", feature: "密碼驗證",                            mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "金鑰", feature: "私鑰驗證",                            mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "金鑰", feature: "裝置上產生金鑰",                      mobile: "yes",    termux: "經由 ssh-keygen", termius: "yes" },
      { category: "金鑰", feature: "分享／儲存產生嘅公鑰",                mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "備份", feature: "匯出／匯入伺服器備份",                mobile: "yes",    termux: "經由 termux-backup", termius: "Pro 雲端保險庫" },
      { category: "備份", feature: "加密本機備份檔案",                    mobile: "yes",    termux: "no",           termius: "no" },
      { category: "備份", feature: "唔需要帳號",                          mobile: "yes",    termux: "yes",          termius: "部分" },
      { category: "私隱與費用", feature: "冇 Pro paywall",                mobile: "yes",    termux: "yes",          termius: "部分" },
      { category: "私隱與費用", feature: "冇廣告",                        mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "私隱與費用", feature: "可選退出分析",                  mobile: "yes", termux: "冇分析",      termius: "no" },
      { category: "私隱與費用", feature: "只係本機資料（冇雲端同步）",    mobile: "yes",    termux: "yes",          termius: "部分" },
      { category: "私隱與費用", feature: "Secure screen（阻止螢幕擷取）",   mobile: "yes",     termux: "no",          termius: "no" },
      { category: "工作階段", feature: "Eternal Terminal（彈性工作階段）",         mobile: "yes",    termux: "經由 CLI",      termius: "no" },
      { category: "工作階段", feature: "經 SSH 自動安裝 etserver",             mobile: "yes",    termux: "no",           termius: "no" },
      { category: "工作階段", feature: "tmux 工作階段管理器",                      mobile: "yes",    termux: "經由 CLI",      termius: "no" },
      { category: "工作階段", feature: "herdr 同 Zellij 工作階段管理器",           mobile: "yes"    , termux: "經由 CLI",     termius: "no" },
      { category: "工作階段", feature: "一撳回覆卡住咗嘅代理",               mobile: "yes",    termux: "no",           termius: "no" },
      { category: "插件", feature: "插件支援",                             mobile: "yes",    termux: "經由套件",      termius: "no" },
      { category: "插件", feature: "按需安裝嘅插件目錄",                   mobile: "yes",    termux: "no",           termius: "no" }
    ],
    agentAppsHeading: "Mobile SSH 同 AI 編碼代理 App 嘅對比",
    agentAppsIntro:
      "有一類快速增長嘅 App，專門用嚟由你部電話驅動編碼代理 —— Claude Code、Codex 之類。有啲係第三方 SSH 或者中繼 App（Onepilot、Happy、Omnara）；而家 OpenAI 同 Anthropic 都原生內建咗呢個功能，ChatGPT App 入面有 Codex，Claude App 入面有 Claude Code，兩者都喺供應商自己嘅雲端運行。Mobile SSH 同佢哋全部都有重疊 —— 你可以經 SSH 運行呢啲代理，喺佢哋需要你嗰陣收到提示 —— 但佢係由另一邊入手：佢首先係一個通用、直連嘅 SSH 用戶端，其次先至係代理夥伴。",
    agentAppsRows: [
      { feature: "由你部電話運行編碼代理",                mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes",     chatgpt: "yes",         claude: "yes" },
      { feature: "適用於任何編碼代理（唔限於單一供應商）", mobile: "yes", onepilot: "yes",      happy: "Claude Code", omnara: "yes",     chatgpt: "淨係 Codex",  claude: "淨係 Claude Code" },
      { feature: "喺你自己嘅機器上運行（唔係供應商雲端）",   mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes",     chatgpt: "no",          claude: "部分" },
      { feature: "直連 SSH —— 冇雲端中繼",                  mobile: "yes", onepilot: "yes",      happy: "no",          omnara: "no",      chatgpt: "no",          claude: "no" },
      { feature: "通用 SSH 終端機（運行任何命令）",         mobile: "yes", onepilot: "yes",      happy: "no",          omnara: "部分",    chatgpt: "no",          claude: "no" },
      { feature: "SFTP 檔案傳輸",                           mobile: "yes", onepilot: "部分",     happy: "no",          omnara: "no",      chatgpt: "no",          claude: "no" },
      { feature: "本機連接埠轉發",                            mobile: "yes", onepilot: "yes",      happy: "no",          omnara: "no",      chatgpt: "no",          claude: "no" },
      { feature: "tmux 工作階段管理器",                         mobile: "yes", onepilot: "部分",     happy: "no",          omnara: "no",      chatgpt: "no",          claude: "no" },
      { feature: "適用於你自己裝嘅代理",                  mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes",     chatgpt: "no",          claude: "no" },
      { feature: "代理通知（已連線嘅代理需要你輸入時）",  mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes",     chatgpt: "yes",         claude: "yes" },
      { feature: "一撳批准／拒絕代理提示",               mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes",     chatgpt: "yes",         claude: "yes" },
      { feature: "零伺服器或 SSH 設定",                     mobile: "no",  onepilot: "no",       happy: "部分",        omnara: "部分",    chatgpt: "yes",         claude: "yes" },
      { feature: "Android 同 iOS",                          mobile: "yes", onepilot: "淨係 iOS", happy: "yes",         omnara: "yes",     chatgpt: "yes",         claude: "yes" },
      { feature: "唔需要帳號",                              mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "no",      chatgpt: "no",          claude: "no" },
      { feature: "冇 Pro paywall（所有功能免費）",          mobile: "yes", onepilot: "no",       happy: "no",          omnara: "no",      chatgpt: "免費版",      claude: "no" },
      { feature: "開源",                                    mobile: "Apache 2.0",  onepilot: "no",       happy: "MIT",         omnara: "Apache",  chatgpt: "no",          claude: "no" }
    ],
    agentAppsNote:
      "原生嘅 ChatGPT 同 Claude App 係零設定運行單一供應商代理最順滑嘅方法 —— 唔使伺服器，淨係要個帳號 —— 而且佢哋加咗一個精緻嘅一撳批准／拒絕畫面。但問題係：佢哋淨係喺自己嘅雲端運行自己嘅模型，冇通用終端機、冇 SFTP 或者通道，亦唔可以用你自己嘅機器，而且要俾錢或者要帳號。Onepilot、Happy 同 Omnara 就將代理保留喺你控制嘅硬件上（Onepilot 經直連 SSH；Happy 同 Omnara 經雲端中繼，而 Omnara 仲要帳號）。Mobile SSH 直接連去你自己嘅伺服器，唔使帳號亦冇供應商中繼，可以喺完整終端機、SFTP 同連接埠轉發旁邊運行任何代理，而且每個功能都免費。而家佢回覆代理提示嘅方式同佢哋一樣 —— 有個 Agents 清單列出每條連線上面嘅每個代理，每個選項一個掣 —— 分別在於個代理係喺你自己部機上面跑，而回覆係行你自己條 SSH 連線。取捨仍然係一路以嚟嗰個：伺服器要你自己提供，而 agent hook 要喺上面裝一次。",
  },
  privacy: {
    metaTitle: "私隱政策 | Mobile SSH",
    metaDescription:
      "Mobile SSH 喺 Android 同 iOS 點處理儲存資料、身份、備份、SSH 同 VPN 流量、檔案、分析同權限。",
    eyebrow: "私隱",
    h1: "私隱政策",
    intro:
      "Mobile SSH 將設定存喺裝置，連你揀嘅伺服器同服務，唔使帳戶或雲端同步。Android 可選 VPN 仲會經設定伺服器傳送指定裝置流量。",
    sections: [
      {
        heading: "儲喺你裝置上嘅資料",
        body: "儲存資料有伺服器設定、憑證、私鑰、主機身份、跳板機、隧道規則、工作階段快照、登入記錄、路徑、資料夾授權同偏好。Android 仲儲 VPN／代理設定同秘密。iOS 用 Keychain 保護秘密。Android 用 Keystore 支援嘅金鑰加密清單，但加密用唔到時可能改用明文；WireGuard、Shadowsocks 同 OpenVPN 設定就一定要加密先儲存。Android 雲端備份關閉，可選除錯日誌留喺本機。"
      },
      {
        heading: "經網絡送出嘅資料",
        body: "SSH 先查身份，再將認證送去設定嘅伺服器同跳板機。終端、SFTP、VNC 同轉發流量送去所選目的地。插件目錄同下載聯絡所設來源。Android VPN／代理可按路由將其他應用程式流量同 DNS 經你嘅 SSH、WireGuard、Shadowsocks 或 OpenVPN 伺服器傳送，唔會交畀 Mobile SSH 分析或雲端儲存。"
      },
      {
        heading: "檔案傳輸同儲存權限",
        body: "傳檔只用所選資料夾同檔案，唔要全面儲存權限。Android 保留授權資料夾；iOS 可用應用程式資料夾或記住 Files 選擇，經系統介面匯入文件、相片同分享檔案。所選供應商可能用自己雲端。開啟或分享就將檔案交畀你揀嘅應用程式或目的地。"
      },
      {
        heading: "日誌同疑難排解",
        body: "登入嘗試喺連線時記錄喺本機。除錯錄製可選；Android 會先警告包含每個輸入按鍵，包括密碼，再匯出歸檔。iOS 記錄地址、失敗、重連、網絡變化同 tmux 診斷。分享前檢查日誌，因為可能洩露伺服器資料，Android 仲可能有輸入秘密。"
      },
      { heading: "匿名使用分析", body: "Mobile SSH 經 HTTPS 向 Aptabase 發送匿名應用程式及功能使用事件，含應用程式／系統版本、型號同語言。用定期更換嘅隨機工作階段識別，唔含伺服器地址、用戶名、憑證、指令或檔案內容。分析預設開啟，兩個平台都可喺設定停止收集新事件；iOS 之前排隊嘅事件仍可能送出。" },
      {
        "heading": "你匯出嘅備份",
        "body": "完整備份有清單同偏好，Android 仲有 VPN／代理。密碼會加密，冇密碼就明文含登入密碼同私鑰。你揀儲存或分享位置。不含 SSH 信任、活動工作階段同系統資料夾授權。預覽會顯示套用嘅區域同安全偏好。"
      },
      {
        "heading": "Android VPN 路由",
        "body": "裝置 VPN 要 Android 同意，直到你停止或系統結束。同時得一個裝置 VPN，本機 SOCKS 可同其他 VPN 並存。SSH 承載 TCP 同 DNS，其他分配畀佢嘅 UDP 被擋。停止、切換或結束應用程式會終止舊 VPN 保護；Mobile SSH 唔保證永久開啟或鎖定模式。"
      }
    ],
    permissionsHeading: "權限",
    permissions: [
      { label: "互聯網", body: "用於 SSH、傳檔、桌面、VPN、插件連線同已開啟嘅分析。" },
      { label: "Wake lock 同 Wi-Fi lock", body: "喺 Android 上用嚟喺裝置瞓覺時維持使用中嘅 SSH 工作階段。" },
      { label: "前景服務同通知", body: "喺 Android 上用嚟喺背景處理使用中嘅連線；喺 iOS，通知用嚟做代理提示。" },
      { label: "檔案存取", body: "經系統資料夾、文件同相片選擇器授權；iOS 可記住外部 Files 資料夾。兩個平台都唔要求全面儲存權限。" },
      {
        "label": "VPN 同意（Android）",
        "body": "內置 VPN 路由裝置流量前必需；純 SOCKS 代理唔佔裝置 VPN 位。"
      },
      {
        "label": "USB 同 NFC（Android）",
        "body": "用嚟同實體 FIDO2 金鑰通訊，做註冊或 SSH 簽署，按需要取得 USB 權限同觸摸／PIN 確認。"
      }
    ],
    securityHeading: "保安責任",
    securityBody:
      "保護裝置同匯出備份。經可信渠道核對陌生 SSH 指紋；想第一次先批准就關 Android 自動接受，iOS 預設會問。換儲存身份之前查清金鑰點解變。安全螢幕喺 Android 阻止截圖同錄影；iOS 隱藏切換預覽同錄影／鏡像，但擋唔到手動截圖。",
    contactHeading: "聯絡",
    contactBody: "客服聯絡：[mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)。"
  },
  docsIndex: {
    metaTitle: "說明文件 | Mobile SSH",
    metaDescription: "Android 同 iOS 上 Mobile SSH 嘅終端用戶說明文件。",
    eyebrow: "用戶指南",
    h1: "Mobile SSH 說明文件",
    intro:
      "SSH 身份、跳板機、終端、VNC、多工器、SFTP、備份、本機隧道同 Android VPN 指南，會解釋平台差異。",
    cards: [
      { slug: "getting-started",  title: "開始使用",       text: "安裝、驗證身份、設定跳板機同金鑰，並備份設定。" },
      { slug: "terminal",         title: "終端機",         text: "用終端控制、tmux、herdr、Zellij、智能體提示同 VNC 桌面。" },
      { slug: "file-transfer",    title: "檔案傳輸",       text: "傳檔、記住資料夾，同分享檔案去工作階段或其他應用程式。" },
      { slug: "port-forwarding",  title: "連接埠轉發",      text: "設定本機隧道同 Android SSH VPN、SOCKS5、WireGuard、Shadowsocks 同 OpenVPN。" },
      { slug: "troubleshooting",  title: "疑難排解",       text: "排查身份、跳板機、終端、傳檔、備份同 VPN 問題。" }
    ]
  },
  docsNav: {
    home: "說明文件主頁",
    gettingStarted: "開始使用",
    terminal: "終端機",
    fileTransfer: "檔案傳輸",
    portForwarding: "連接埠轉發",
    troubleshooting: "疑難排解"
  },
  about: {
    metaTitle: "關於 | Mobile SSH",
    metaDescription: "關於 Mobile SSH：Android 同 iOS SSH 用戶端嘅版本、作者、授權同開源聲明。",
    eyebrow: "關於",
    h1: "關於 Mobile SSH",
    intro: "Android 同 iOS 嘅 SSH、SFTP、VNC 同多工器，含本機備份、身份驗證同跳板機。Android 仲有 VPN 客戶端同硬件安全金鑰。",
    appHeading: "關於應用程式",
    versionLabel: "版本",
    authorLabel: "作者",
    authorValue: "Dmitry Kozlov",
    licenseLabel: "授權",
    licenseValue: "Apache 2.0",
    websiteLabel: "網站",
    privacyLabel: "私隱政策",
    privacyLinkText: "私隱政策",
    noticesHeading: "開源軟件聲明",
    noticesIntro: "Mobile SSH 用咗以下嘅開源庫，每個都係按各自嘅授權使用。",
    notices: [
      { name: "JSch (mwiede fork) — Android",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "JZlib (bundled in JSch) — Android",   license: "BSD 3-clause", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "jBCrypt (bundled in JSch) — Android", license: "ISC", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "Ed25519 / Ed448 Java — Android",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "StringFog — Android",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "SwiftNIO & SwiftNIO SSH — iOS",       license: "Apache 2.0", url: "https://github.com/apple/swift-nio-ssh", licenseUrl: "https://github.com/apple/swift-nio-ssh/blob/main/LICENSE.txt" },
      { name: "Swift Crypto — iOS",                  license: "Apache 2.0", url: "https://github.com/apple/swift-crypto", licenseUrl: "https://github.com/apple/swift-crypto/blob/main/LICENSE.txt" },
      { name: "WireGuard Android — Android", license: "Apache-2.0", url: "https://github.com/WireGuard/wireguard-android", licenseUrl: "/licenses/wireguard-android-APACHE-2.0.txt" },
      { name: "wireguard-go — Android", license: "MIT", url: "https://github.com/WireGuard/wireguard-go", licenseUrl: "/licenses/wireguard-go-MIT.txt" },
      { name: "Go / golang.org/x/crypto / golang.org/x/net / golang.org/x/sys — Android", license: "BSD-3-Clause", licenseUrl: "/licenses/wireguard-third-party-notices.txt" },
      { name: "hev-socks5-tunnel / hev-socks5-core / hev-task-system — Android", license: "MIT", url: "https://github.com/heiher/hev-socks5-tunnel", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "lwIP — Android", license: "BSD-3-Clause", url: "https://savannah.nongnu.org/projects/lwip/", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "shadowsocks-rust — Android", license: "MIT / Apache-2.0 / BSD / ISC / Unicode-3.0", url: "https://github.com/shadowsocks/shadowsocks-rust", licenseUrl: "/licenses/shadowsocks-NOTICES.txt" },
      { name: "OpenVPN 3 Core — Android", license: "MPL-2.0", url: "https://github.com/OpenVPN/openvpn3", licenseUrl: "/licenses/openvpn3-MPL-2.0.txt" },
      { name: "mbed TLS — Android", license: "Apache-2.0", url: "https://github.com/Mbed-TLS/mbedtls", licenseUrl: "/licenses/openvpn-NOTICES.txt" },
      { name: "Asio — Android", license: "BSL-1.0", url: "https://github.com/chriskohlhoff/asio", licenseUrl: "/licenses/openvpn-NOTICES.txt" },
      { name: "LZ4 / xxHash — Android", license: "BSD-2-Clause", licenseUrl: "/licenses/openvpn-NOTICES.txt" },
    ],
    openvpnSourceHeading: "OpenVPN 原始碼",
    openvpnSourceBody: "OpenVPN 3 Core 係按 MPL 2.0 使用。你可以下載所涵蓋嘅確切原始碼同相依套件版本、授權條款同原生建置資料。",
    openvpnSourceLabel: "下載原始碼壓縮檔",
    certificatesHeading: "憑證",
    apkCertificateLabel: "直接安裝 APK 嘅簽署憑證（PEM）",
    apkCertificateBody: "呢個公開憑證用嚟識別直接安裝嘅 Mobile SSH APK 簽署者。Google Play 可能會用另一個憑證簽署下載嘅應用程式。",
    serverCertificateBody: "SSH 同 VPN 伺服器憑證要由你嘅伺服器管理員或者 VPN 供應商提供。請透過可信嘅渠道核對指紋；呢個簽署憑證唔係 VPN 憑證授權單位。",
    signingHelpLabel: "Android 應用程式簽署文件",
    contactHeading: "聯絡",
    contactBody: "客服聯絡：[mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)。"
  }
};
