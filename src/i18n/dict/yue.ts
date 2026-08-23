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
      { title: "Agent 提示，一㩒就答到", text: "Claude Code、Codex 或者其他 agent 一需要你，你即刻知：個面板會變琥珀色，工具列個徽章會數住有幾多個等緊你，喺 Agents 清單一㩒就答到個提問 —— 唔使喺終端機度打字。" },
      { title: "鍵盤上面嘅終端機按鍵", text: "十三個鍵嘅一行 —— ESC、TAB、CTRL、方向鍵、Home、End、PgUp、PgDn —— 唔夠位嗰陣會換去第二行，而唔係要滑動，所以冇按鍵會匿埋喺畫面外。仲可以由預設面板加入 F1–F12、Ctrl 組合鍵，或者你自己嘅跳脫序列。" },
      { title: "唔使打指令嘅端口轉發", text: "Tunnel 黐喺伺服器 profile 度，連線即自動開。" },
      { title: "熄屏漫遊都頂得住", text: "俾一個已儲存嘅伺服器設幾個地址 —— 譬如屋企 LAN IP 同 VPN IP —— Mobile SSH 會撥邊個有回應就用邊個，仲會優先試上次連得通嗰個，網絡一變就即刻重連。喺 Android，前景服務同 wake lock 令 shell 喺熄屏時都唔斷；喺 iOS，自動重連加 tmux 自動 attach 令你返返去頭先停低嘅位置。" },
      { title: "Eternal Terminal", text: "可選嘅 ET 傳輸令遠端 shell 喺斷網、休眠同 IP 轉變之間都唔斷。主機上冇 etserver？Mobile SSH 可以經 SSH 幫你裝好。" },
      { title: "用插件擴充", text: "瀏覽公開目錄，按需要安裝插件嚟加入新工作流。每個插件都會下載並經 SHA-256 驗證後放入 App 專屬儲存。" }
    ],
    sectionAHead: "為流動裝置上嘅 SSH 工作而設計",
    sectionAIntro:
      "Mobile SSH 幫你縮短常見嘅管理路徑：儲存伺服器、連線、保持會話、需要嗰陣搬檔案、然後快速返去仲開緊嘅終端機。",
    features: [
      { title: "SSH 終端機", text: "xterm-256color 終端機，支援 24-bit 真彩色、斜體、終端機內搜索、OSC 133 shell 整合，仲有揑住調文字大細 —— Android 同 iOS 上仲有可設定嘅字型同配色，以及 Nerd Font powerline／圖示字形。" },
      { title: "多會話格", text: "同時最多八個 SSH 會話喺可調大小嘅格仔入面 —— 點面板聚焦、雙擊入全螢幕、揑住調文字大細。" },
      { title: "可點擊連結", text: "終端機輸出裡面嘅 URL 會有底線，㩒一下就喺瀏覽器打開 —— 唔使複製或者切換 App。" },
      { title: "伺服器資料夾同名稱", text: "將已儲存嘅伺服器整理入可摺疊嘅群組，仲可以幫伺服器改個名，清單就顯示個名而唔係地址。一旦個名會有歧義，地址就會自動走返出嚟，所以每一行都唔會撈亂。" },
      { title: "Agent 提示", text: "Agent 會經終端機報告自己，所以個 App 知道邊個卡住咗、卡喺乜嘢。喺 Agents 清單一㩒就答到；提示係取代而唔會疊埋一堆，㩒一下就會打開響嗰個面板。" },
      { title: "私鑰", text: "密碼或私鑰驗證。可喺裝置上產生 Ed25519 或 ECDSA 密鑰（Android 仲支援 RSA）；亦可匯入或貼上現有密鑰。" },
      { title: "SFTP 傳輸", text: "與活躍 SSH 會話綁定嘅雙面板檔案瀏覽器。將上載同下載排隊，重新命名、刪除，並查看遠端權限。" },
      { title: "端口轉發", text: "將本機隧道規格同伺服器設定檔一齊儲存，連線時就會自動開 —— 就算喺新網絡上重連之後都會返嚟，唔使你自己再手動起過。" },
      { title: "重連工作流", text: "一轉網絡，會話就即刻重撥，唔使等死咗嘅路由逾時；正喺退避等候嘅會話，一有可用網絡就即刻醒返。喺 iOS，靜靜雞停咗回應嘅伺服器都會俾偵測到並重新連線。" },
      { title: "備份與還原", text: "將已儲存嘅伺服器同憑證匯出做加密備份檔案；匯入時可合併或取代，方便跨裝置搬移 —— 備份喺 Android 同 iOS 之間可以互通。" },
      { title: "Eternal Terminal", text: "用 Eternal Terminal（ET）連線，令會話喺斷網、休眠同 IP 轉變之間都唔斷 —— 仲可以選擇經 SSH 自動裝好 etserver。" },
      { title: "多工器管理器", text: "唔使㩒 prefix 組合鍵都操控到 tmux —— attach、重新命名、新建、分割、放大或者 kill。兩個平台都對 herdr 同 Zellij 有同樣嘅管理器，而工具列嘅圖示要喺伺服器搵到嗰個程式之後先會出現。" },
      { title: "插件", text: "瀏覽、安裝同運行插件嚟擴充 Mobile SSH。插件由公開目錄按需下載，經 SHA-256 驗證後放入 App 專屬儲存。" }
    ],
    multiHead: "一個畫面，幾個活躍 Shell",
    multiP1:
      "終端機畫面可以喺格仔入面同時擺幾個活躍嘅 SSH 會話。揀面板嚟打字，用附加按鍵列做終端機控制，揑住調文字大細，需要全螢幕聚焦嗰陣就雙擊面板。",
    multiP2:
      "主畫面答嘅係「我可以返返去邊度？」—— 而家仲連緊嘅連線，同埋喺你已儲存伺服器上面等緊你嘅 tmux 會話；佢哋由已儲存嘅快照重建，所以完全冇網絡都照樣顯示得到。",
    multiAlt:
      "Mobile SSH 喺電話上顯示兩個活躍 SSH 終端機會話並排分屏嘅畫面。",
    sftpHead: "當終端機唔夠用 — SFTP",
    sftpBody:
      "由已連線嘅會話打開檔案傳輸，去瀏覽電話儲存同遠端目錄。將上載同下載排隊，排序檔案，一㩒返去最近用過嘅遠端路徑，搬之前仲可以查睇或者更改遠端權限。",
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
    videoIntro: "兩個平台嘅短片示範。Android：主畫面話你知有咩會話可以續返、會話工具列淨係顯示嗰部伺服器真係有嘅功能、將檔案直接送入提示符，仲有 tmux、herdr 同 Zellij 管理器。iOS：一開 app 就入到運行中嘅終端機，同埋你之後返返去嘅主畫面。",
    videoAlt: "Android 示範：主畫面列出可以續返嘅 tmux 會話、會話工具列、將檔案附加入提示符，同埋 tmux、herdr 同 Zellij 會話管理器",
    videoIosAlt: "iOS 示範：打開 Mobile SSH 直接入到運行中嘅 SSH 終端機會話，跟住返去主畫面，睇到「最近」同 app 其他畫面",
    muxHead: "每個會話管理器一段片",
    muxIntro:
      "上面嘅示範入面，tmux、herdr 同 Zellij 加埋先得大約三十秒——夠睇到工具列為每個都畫咗個圖示，但唔夠睇到佢哋各自做到啲乜。呢啲係長版，喺兩個平台對住真實伺服器拍。",
    muxItems: [
        {
          text: "由主畫面直接去到會話、視窗同窗格，其中一個會話有個鈴，因為嗰度有嘢等緊人應。附加一個視窗，行緊嘅終端就跟住過去；開一個視窗再改名——全程唔使撳任何前綴組合鍵。",
          androidAlt: "Android tmux 管理器示範：主畫面快取嘅會話清單，跟住係會話、視窗同窗格，附加一個視窗令終端跟住行，同埋開一個有名嘅視窗。",
          iosAlt: "iOS tmux 管理器示範：有建立時間嘅 tmux 會話，其中一個用鈴標住等緊輸入，跟住係視窗同窗格，每行都有開啟、改名同終止。"
        },
        {
          text: "工作區、分頁同窗格帶住真實嘅代理狀態——一個做緊嘢，一個被阻塞緊等人答。預覽被阻塞嗰個，喺電話度回覆佢，然後睇住 herdr 將佢改為做緊，再改為完成。",
          androidAlt: "Android herdr 管理器示範：標住代理狀態嘅會話同工作區，一個標住 needs you 嘅代理，喺電話度回覆佢，同埋新建再改名一個工作區。",
          iosAlt: "iOS herdr 管理器示範：帶代理狀態嘅工作區，同埋一張回覆表，將打好嘅內容連 Enter 一齊送畀被阻塞嘅代理。"
        },
        {
          text: "有建立時間嘅會話，跟住係分頁同窗格。唔使附加都預覽到某個窗格嘅輸出，加一個有名嘅分頁，將重要嗰個擺去前面，然後附加——喺提示符度乜都唔使打。",
          androidAlt: "Android Zellij 管理器示範：有建立時間嘅會話、分頁同窗格，預覽窗格輸出，開一個有名嘅分頁，同埋附加一個會話。",
          iosAlt: "iOS Zellij 管理器示範：一個可以附加、改名、終止同刪除嘅會話，佢嘅分頁，同埋一個有預覽同兩個分割方向嘅窗格。"
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
    betaJoin: "加入公測",
    betaOr: "或傳送電郵至",
    betaRequest: "申請私人測試資格",
    galleryAlts: [
      "Android 電話上嘅 Mobile SSH 主畫面，有「活躍會話」橫幅同可以繼續嘅已儲存伺服器清單，下面係伺服器、憑證、設定、關於同插件嘅按鈕。",
      "電話上嘅新增伺服器對話框，有伺服器名稱、host 同 port、額外位址、憑證、私鑰同端口轉發欄位。",
      "電話上嘅單會話 SSH 終端機，會話工具列下面顯示編程代理嘅修補同埋通過咗嘅測試。",
      "電話上兩個並排嘅 SSH 會話，並排分屏顯示。",
      "電話上兩個上下疊住嘅 SSH 會話，活躍嘅面板有 highlight。",
      "電話上嘅 SFTP 檔案傳輸畫面，包括「我嘅電話」同「遠端主機」面板。",
      "電話上嘅關於對話框，顯示版本、作者、授權同網站。",
      "電話上嘅「產生 SSH 密鑰」對話框，有標籤、用戶、密鑰類型同密碼短語欄位。",
      "電話上嘅「公鑰」對話框，顯示產生咗嘅密鑰，連同複製、分享同儲存嘅選項。",
      "已儲存伺服器畫面，顯示伺服器整理入可摺疊嘅「工作」同「個人」資料夾群組。",
      "電話上嘅 SSH 終端機，https:// URL 帶底線成為可點擊嘅連結。",
      "Android 電話上嘅 Zellij 管理器，列出會話、分頁同面板，仲有 attach、重新命名、kill 同聚焦嘅按鈕。",
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
      "iPhone 上嘅 Mobile SSH 主畫面，有「最近」清單一㩒就重新連線，下面係伺服器、憑證、日誌、設定、關於同插件嘅磚。"
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
          "Android 8.0 或以上 —— 而家係 Google Play 嘅封閉測試：喺手機瀏覽器打開加入連結，之後再喺 Play 安裝",
          "iPhone 同 iPad 上嘅 iOS 16 或以上 —— 喺 TestFlight 加入公測",
          "加密備份可以互通：喺一個平台匯出，喺另一個平台匯入"
        ]
      },
      {
        title: "連線",
        items: [
          "密碼驗證同私鑰驗證",
          "Android 支援 Ed25519、ECDSA（P-256/384/521）同 RSA 私鑰；iOS 支援 Ed25519 同 ECDSA。兩個平台都開得到有密碼短語加密嘅密鑰",
          "儲存嘅伺服器設定檔，包括 host、port、用戶、憑證、私鑰同可選隧道規格 —— 複製一個設定檔，就可以將佢嘅設定複製到一個新伺服器",
          "幫伺服器改個名，清單就會顯示個名而唔係地址 —— 一旦兩行會撈亂，地址就會自動走返出嚟",
          "可以按名稱、host、port、憑證，或者任何一個備用地址嚟搜索已儲存嘅伺服器",
          "如果你用兩行唔同嘅已儲存項目連咗同一部機，個 App 會察覺到 —— 佢會計 host key 嘅指紋，然後建議你將兩者合併做一個多地址伺服器",
          "搜索優先嘅「新增會話」流程：喺專屬搜索頁揀已儲存嘅伺服器，一㩒就連",
          "每個已儲存伺服器可設多個地址，方便 LAN/VPN 漫遊 —— 按次序逐個撥，優先試上次連得通嗰個，網絡一變就自動重連",
          "可由伺服器設定畫面揀返用嘅可重用憑證紀錄",
          "以「續返之前嘅嘢」為中心嘅主畫面：而家仲連緊嘅連線，同埋喺你伺服器上面等緊嘅 tmux 會話 —— 佢哋由已儲存嘅快照嚟，所以冇網絡都列得出，每一行仲會標明個快照幾耐之前。iOS 仲會保留一個「最近」清單",
          "由頭到尾支援 IPv6：地址欄位可以用方括號寫字面地址，後面仲可以加 port，端口轉發規則入面亦可以用方括號寫 IPv6 目標",
          "成功同失敗嘅登入嘗試日誌，會記低實際撥咗嘅地址，失敗嗰陣仲會記低原因",
          "Teleport 代理傳輸（實驗性，Android）：用用戶名、密碼同 OTP 登入，或者匯入 Teleport 設定檔或身分檔案，瀏覽叢集節點，然後經代理隧道運行終端機、SFTP、tmux 同插件"
        ]
      },
      {
        title: "終端機",
        items: [
          "VT100/xterm-256color 終端機行為，支援 24-bit 真彩色同斜體 —— 會向 shell 報 TERM=xterm-256color 同 COLORTERM=truecolor",
          "回滾緩衝喺 Android 同 iOS 可以設做 1,000、5,000、10,000 或者 50,000 行（預設 5,000）",
          "終端機內尋找 —— 搜索回滾緩衝同可見畫面，並喺各個匹配之間跳轉（Android 同 iOS）",
          "Shell 整合（OSC 133）：喺各個提示符之間逐個跳、揀選成段指令輸出 —— 譬如 300 行之前嗰個 build 錯誤，唔止係最後嗰個 —— 仲會喺長時間指令完成時提示你（Android 同 iOS）",
          "終端機內經 Kitty graphics protocol 內嵌顯示圖片，揑住縮放同重新換行之後圖片都仲喺度，唔會消失（Android 同 iOS）",
          "方塊、點字同六分格馬賽克字形由 App 自己畫，所以 chafa、timg 同 ANSI art 可以完美貼合，唔會變成空白方格（Android）",
          "喺追蹤滑鼠嘅 TUI 入面，㩒一下就等於㩒一下滑鼠 —— htop、vim 同揀面板都可以用手指做（Android）",
          "面板標題會顯示嗰個面板真正嘅工作目錄，由 tmux 問返嚟或者由 shell 經 OSC 7 報上嚟（Android）",
          "十三個鍵嘅附加按鍵列 —— ESC、TAB、CTRL、方向鍵、Home、End、PgUp、PgDn、鍵盤切換 —— 唔夠位嗰陣會換去第二行而唔係要滑動，仲擺唔落嘅會收入溢出選單，所以冇一個鍵會走出畫面外",
          "喺 Android 同 iOS 都可以自訂呢一列：由大約 45 個預設按鍵嘅面板加入，包括 F1–F12、Ctrl 組合鍵同符號；亦可以移除、重新排序、隱藏、自訂你自己嘅跳脫序列按鍵，同埋重設做預設，仲有即時預覽",
          "點擊聚焦、可選嘅「點擊顯示鍵盤」、複製同全部複製",
          "揑住調文字大細，連同遠端終端機重設大細",
          "雙擊面板入全螢幕模式",
          "終端機文字選擇連 Copy、Share、Select all —— 長撳選取詞語，Copy 之後仍會保留選取，方便分享或者重新複製",
          "OSC 52 剪貼簿 —— 由遠端 tmux 或者 vim 會話直接將文字複製到電話剪貼簿（Android 同 iOS）",
          "原生直通鍵盤輸入 —— 冇自動更正同 shell 打交；螢幕鍵盤嘅語音聽寫照樣用得",
          "Android 同 iOS 都支援外接同 Bluetooth 鍵盤，包括方向鍵、功能鍵同 Ctrl/Alt 組合鍵",
          "括號貼上（bracketed paste），令多行剪貼簿內容唔會被自動執行",
          "內置嘅 Nerd Font 喺 Android 同 iOS 上顯示 powerline、starship、devicon 同 Material Design 圖示字形 —— 系統字型本來會將佢哋顯示成空白方格",
          "寬 CJK、emoji 同組合字元喺 Android 同 iOS 上會正確量度同繪製，包括字素叢集（grapheme clusters）同零寬連接符（zero-width joiners）",
          "可設定嘅終端機字型（系統等寬字型、JetBrains Mono 或 Source Code Pro）同 ANSI 配色（Solarized、Gruvbox、Dracula、Nord），喺 Android 同 iOS 上即時套用到開住嘅面板",
          "設定入面除咗揑住縮放，仲有終端機文字大細滑桿，App 主題亦可以設做 System、Light 或者 Dark"
        ]
      },
      {
        title: "會話",
        items: [
          "同時最多八個 SSH 會話",
          "活躍會話採用格仔佈局",
          "背景同鎖屏都頂得住：喺 Android，前景服務令你就算撥走咗個 App，shell 同 agent 都照樣跑落去；喺 iOS，tmux 自動 attach 幫你將個 shell 駁返",
          "Keepalive 同帶指數退避嘅重連嘗試 —— 最多試十次，而喺你已經離開咗嘅網絡上失敗嗰啲唔會計入呢個上限",
          "轉 Wi-Fi、流動數據或者 VPN 會即刻重撥，唔使等死咗嘅路由逾時；已經喺退避等候嘅會話，一有可用網絡就即刻再試",
          "靜靜雞停咗回應嘅伺服器 —— 例如被暫停嘅 VM、卡死咗嘅跳板機 —— 會靠冇回應嘅 keepalive 探測偵測到並重新連線，而唔會靜雞雞食晒你打嘅嘢（iOS）",
          "啟動畫面入面有「活躍會話」入口；持續通知列出會話 —— 㩒就開",
          "追蹤 tmux 指令，俾被中斷嘅工作 reattach 提示，仲可以逐部伺服器揀連線時 attach 咩：自動偵測、乜都唔 attach、tmux、herdr 或者 Zellij（Android）",
          "Agent 會經終端機報告自己，所以個 App 知道係邊個 agent、佢跑緊咩工具、又係咪卡住等緊你 —— 個面板會變琥珀色，標題會寫住「claude · needs you」，工具列個徽章會數住有幾多個等緊你",
          "喺 Agents 清單一㩒就答到 agent 嘅問題；回覆行另一條通道，所以永遠唔會打落你畫面上面嗰啲嘢度",
          "可以喺 App 入面將 agent hook 裝落伺服器 —— 佢係一個任何 agent 都調用得到嘅細細 shell 腳本，唔係綁死某個供應商嘅整合",
          "Eternal Terminal（ET）傳輸令會話喺斷網、休眠同 IP 轉變之間都唔斷，仲可以選擇經 SSH 自動裝好 etserver",
          "Tmux 管理器：列出並切換會話、視窗同面板 —— attach、重新命名、新建、分割、放大或者 kill，可按名稱／日期排序，🔔 標示等緊輸入嘅 agent",
          "Android 同 iOS 都有 herdr 同 Zellij 管理器，各自對自己嘅會話、分頁同面板有同樣嘅操控 —— 工具列要喺伺服器搵到嗰個程式之後先會顯示個圖示"
        ]
      },
      {
        title: "檔案同隧道",
        items: [
          "本機同遠端雙面板 SFTP 瀏覽器，仲有一個會列出每一次傳輸、可以捲動嘅傳輸日誌",
          "上載同下載排隊操作；喺 Android，由另一個 App 將任何檔案分享入運行緊嘅會話，佢嘅遠端路徑就會幫你打咗喺提示符度",
          "喺手機同遠端主機之間遞迴上載同下載成個資料夾",
          "遠端重新命名、刪除、新增、編輯、壓縮做 .tar.gz、權限（chmod/chown）同詳細資料",
          "兩個平台都可以用另一個 App 開啟已下載嘅檔案 —— 喺 iOS，下載嘅檔案仲會喺「檔案」App 嘅「我的 iPhone」入面見到",
          "喺 Android，檔案傳輸會返返去嗰個 tmux 會話上次做嘢嘅位置，仲會喺面板標題寫低個會話名；如果冇嘢好記，就會退返去你喺嗰部主機最常用嘅目錄",
          "每個 host 個別記住按名或日期排序，仲可以一㩒返去最近用過嘅遠端路徑",
          "檔案大細用二進位單位顯示，同你隔籬個分頁終端機入面 ls -h 見到嘅一樣",
          "本機端口轉發隨伺服器設定檔一齊儲存，連線時自動開起",
          "整個 App 同檔案瀏覽器都會跟隨系統嘅淺色或者深色主題 —— 喺 Android 同 iOS 都可以揀 System、Light 或者 Dark"
        ]
      },
      {
        title: "本地化",
        items: [
          "App UI 翻譯：阿拉伯文、孟加拉文、中文（簡體同繁體）、英文、法文、德文、印地文、印尼文、日文、馬拉地文、葡萄牙文、俄文、西班牙文、坦米爾文、泰盧固文、土耳其文同烏爾都文 —— Android 有二十種語言，仲多咗奈及利亞皮欽語同埃及阿拉伯文，iOS 就有十八種",
          "預設跟住系統語言；如果你想個 App 用電話語言以外嘅語言，設定入面有語言選擇器"
        ]
      },
      {
        title: "金鑰與備份",
        items: [
          "喺裝置上產生新嘅 Ed25519 或 ECDSA 金鑰（Android 仲支援 RSA），可選密碼短語",
          "複製、分享或儲存產生嘅公開金鑰，以加入伺服器嘅 authorized_keys",
          "將已儲存嘅伺服器同憑證匯出做備份檔案 —— 可以全部匯出，亦可以剔返你要嗰幾行；㩒一下資料夾標題就會揀晒成個資料夾",
          "可選密碼短語會加密備份；匯入時可合併或取代",
          "未加密嘅備份會以明文儲存密碼同金鑰——請保護或刪除個檔案"
        ]
      },
      {
        title: "保安",
        items: [
          "Secure screen：喺 Android，阻止截圖同螢幕錄影，並喺最近應用程式縮圖入面收埋個 App；喺 iOS，將 App 切換器嘅預覽變空白，並阻止螢幕錄影同鏡像輸出（喺 iOS 冇辦法阻止手動截圖）—— 當畫面上有密碼、密鑰或者 token 嗰陣用嘅可選設定",
          "已儲存嘅伺服器、憑證同密鑰都留喺裝置上 —— 秘密存放喺 Android Keystore 同 iOS Keychain，冇雲端帳號亦冇同步",
          "淨係匿名使用分析 —— 絕不包括你嘅伺服器、憑證、指令或者檔案內容。Android 喺設定入面有開關可以熄咗佢；iOS 暫時仲未有呢個開關"
        ]
      },
      {
        title: "插件",
        items: [
          "瀏覽、安裝同運行插件嚟擴充 Mobile SSH",
          "插件由公開目錄按需下載，經 SHA-256 驗證後放入 App 專屬儲存",
          "插件要聲明佢需要乜嘢 —— SSH 指令、隧道、儲存空間 —— 冇聲明過嘅嘢，個 App 一律唔畀",
          "當插件要喺你部伺服器上面裝嘢，你會先見到確實嘅指令，你批准咗佢先會執行",
          "可以配置自訂或者私人目錄來源，亦可以由你自己伺服器上面嘅資料夾安裝"
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
      { category: "連線", feature: "主畫面列出可以續返嘅嘢",              mobile: "yes",    termux: "no",           termius: "部分" },
      { category: "連線", feature: "離線 tmux 會話清單（唔使連線）",      mobile: "yes",    termux: "no",           termius: "no" },
      { category: "連線", feature: "顯示伺服器名稱而唔係地址",            mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "連線", feature: "登入日誌",                            mobile: "yes",    termux: "no",           termius: "no" },
      { category: "連線", feature: "Teleport 代理傳輸（實驗性）",          mobile: "Android", termux: "no",          termius: "no" },
      { category: "連線", feature: "IPv6 主機同轉發目標",                  mobile: "yes",    termux: "yes",          termius: "部分" },
      { category: "終端機", feature: "SSH 終端機",                        mobile: "yes",    termux: "經由 OpenSSH",  termius: "yes" },
      { category: "終端機", feature: "xterm-256color 模擬",               mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "終端機", feature: "可設定嘅回滾緩衝（1k–50k 行）",     mobile: "yes",    termux: "可設定",       termius: "部分" },
      { category: "終端機", feature: "終端機內搜索（回滾）",              mobile: "yes",    termux: "no",           termius: "no" },
      { category: "終端機", feature: "附加按鍵列（ESC/TAB/CTRL/…）",     mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "終端機", feature: "揑住調文字大細",                    mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "終端機", feature: "雙擊面板入全螢幕",                  mobile: "yes",    termux: "no",           termius: "no" },
      { category: "終端機", feature: "終端機輸出入面嘅可點擊 URL",        mobile: "yes",    termux: "部分",         termius: "yes" },
      { category: "終端機", feature: "文字選擇：複製／分享／全選",        mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "終端機", feature: "硬件／Bluetooth 鍵盤支援",         mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "終端機", feature: "Shell 整合（OSC 133）",             mobile: "yes",    termux: "no",           termius: "no" },
      { category: "終端機", feature: "內嵌圖片（Kitty graphics）",        mobile: "yes",    termux: "no",           termius: "no" },
      { category: "終端機", feature: "App 自繪嘅馬賽克字形（chafa、ANSI art）", mobile: "Android", termux: "睇字型",  termius: "no" },
      { category: "終端機", feature: "喺滑鼠模式 TUI 入面㩒一下即係㩒滑鼠", mobile: "Android", termux: "yes",       termius: "no" },
      { category: "終端機", feature: "Nerd Font／powerline 字形顯示",     mobile: "yes",     termux: "可設定",      termius: "部分" },
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
      { category: "隧道", feature: "執行時加／刪隧道",                    mobile: "no",     termux: "no",           termius: "yes" },
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
      { category: "私隱與費用", feature: "Secure screen（阻止螢幕擷取）",   mobile: "yes",     termux: "no",          termius: "no" },
      { category: "會話", feature: "Eternal Terminal（彈性會話）",         mobile: "yes",    termux: "經由 CLI",      termius: "no" },
      { category: "會話", feature: "經 SSH 自動安裝 etserver",             mobile: "yes",    termux: "no",           termius: "no" },
      { category: "會話", feature: "tmux 會話管理器",                      mobile: "yes",    termux: "經由 CLI",      termius: "no" },
      { category: "會話", feature: "herdr 同 Zellij 會話管理器",           mobile: "yes"    , termux: "經由 CLI",     termius: "no" },
      { category: "會話", feature: "一㩒回覆卡住咗嘅 agent",               mobile: "yes",    termux: "no",           termius: "no" },
      { category: "插件", feature: "插件支援",                             mobile: "yes",    termux: "經由套件",      termius: "no" },
      { category: "插件", feature: "按需安裝嘅插件目錄",                   mobile: "yes",    termux: "no",           termius: "no" }
    ],
    agentAppsHeading: "Mobile SSH 同 AI 編碼 agent App 嘅對比",
    agentAppsIntro:
      "有一類快速增長嘅 App，專門用嚟由你部電話驅動編碼 agent —— Claude Code、Codex 之類。有啲係第三方 SSH 或者中繼 App（Onepilot、Happy、Omnara）；而家 OpenAI 同 Anthropic 都原生內建咗呢個功能，ChatGPT App 入面有 Codex，Claude App 入面有 Claude Code，兩者都喺供應商自己嘅雲端運行。Mobile SSH 同佢哋全部都有重疊 —— 你可以經 SSH 運行呢啲 agent，喺佢哋需要你嗰陣收到提示 —— 但佢係由另一邊入手：佢首先係一個通用、直連嘅 SSH 客戶端，其次先至係 agent 夥伴。",
    agentAppsRows: [
      { feature: "由你部電話運行編碼 agent",                mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes",     chatgpt: "yes",         claude: "yes" },
      { feature: "適用於任何編碼 agent（唔限於單一供應商）", mobile: "yes", onepilot: "yes",      happy: "Claude Code", omnara: "yes",     chatgpt: "淨係 Codex",  claude: "淨係 Claude Code" },
      { feature: "喺你自己嘅機器上運行（唔係供應商雲端）",   mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes",     chatgpt: "no",          claude: "部分" },
      { feature: "直連 SSH —— 冇雲端中繼",                  mobile: "yes", onepilot: "yes",      happy: "no",          omnara: "no",      chatgpt: "no",          claude: "no" },
      { feature: "通用 SSH 終端機（運行任何命令）",         mobile: "yes", onepilot: "yes",      happy: "no",          omnara: "部分",    chatgpt: "no",          claude: "no" },
      { feature: "SFTP 檔案傳輸",                           mobile: "yes", onepilot: "部分",     happy: "no",          omnara: "no",      chatgpt: "no",          claude: "no" },
      { feature: "本機端口轉發",                            mobile: "yes", onepilot: "yes",      happy: "no",          omnara: "no",      chatgpt: "no",          claude: "no" },
      { feature: "tmux 會話管理器",                         mobile: "yes", onepilot: "部分",     happy: "no",          omnara: "no",      chatgpt: "no",          claude: "no" },
      { feature: "適用於你自己裝嘅 agent",                  mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes",     chatgpt: "no",          claude: "no" },
      { feature: "Agent 提示（agent 需要輸入時推送通知）",  mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes",     chatgpt: "yes",         claude: "yes" },
      { feature: "一撳批准／拒絕 agent 提示",               mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "yes",     chatgpt: "yes",         claude: "yes" },
      { feature: "零伺服器或 SSH 設定",                     mobile: "no",  onepilot: "no",       happy: "部分",        omnara: "部分",    chatgpt: "yes",         claude: "yes" },
      { feature: "Android 同 iOS",                          mobile: "yes", onepilot: "淨係 iOS", happy: "yes",         omnara: "yes",     chatgpt: "yes",         claude: "yes" },
      { feature: "唔需要帳號",                              mobile: "yes", onepilot: "yes",      happy: "yes",         omnara: "no",      chatgpt: "no",          claude: "no" },
      { feature: "冇 Pro paywall（所有功能免費）",          mobile: "yes", onepilot: "no",       happy: "no",          omnara: "no",      chatgpt: "免費版",      claude: "no" },
      { feature: "開源",                                    mobile: "Apache 2.0",  onepilot: "no",       happy: "MIT",         omnara: "Apache",  chatgpt: "no",          claude: "no" }
    ],
    agentAppsNote:
      "原生嘅 ChatGPT 同 Claude App 係零設定運行單一供應商 agent 最順滑嘅方法 —— 唔使伺服器，淨係要個帳號 —— 而且佢哋加咗一個精緻嘅一撳批准／拒絕畫面。但問題係：佢哋淨係喺自己嘅雲端運行自己嘅模型，冇通用終端機、冇 SFTP 或者隧道，亦唔可以用你自己嘅機器，而且要俾錢或者要帳號。Onepilot、Happy 同 Omnara 就將 agent 保留喺你控制嘅硬件上（Onepilot 經直連 SSH；Happy 同 Omnara 經雲端中繼，而 Omnara 仲要帳號）。Mobile SSH 直接連去你自己嘅伺服器，唔使帳號亦冇供應商中繼，可以喺完整終端機、SFTP 同端口轉發旁邊運行任何 agent，而且每個功能都免費。而家佢回覆 agent 提示嘅方式同佢哋一樣 —— 有個 Agents 清單列出每條連線上面嘅每個 agent，每個選項一個按鈕 —— 分別在於個 agent 係喺你自己部機上面跑，而回覆係行你自己條 SSH 連線。取捨仍然係一路以嚟嗰個：伺服器要你自己提供，而 agent 嘅 hook 要喺上面裝一次。",
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
        body: "如果你揀儲存 App 資料，Mobile SSH 會擺喺裝置本機。喺 iOS，秘密會放入系統 Keychain；喺 Android，佢哋會用一條擺喺 Android Keystore、匯出唔到離開部機嘅密鑰加密，而個 App 亦已經選擇唔用 Android 雲端備份。當中可以包括儲存嘅伺服器設定檔、用戶名、port、密碼、私鑰、key 通行碼、端口轉發規則、最近會話、登入嘗試歷史、檔案傳輸路徑、檔案排序偏好、tmux 會話快照同 reattach 提示、App 設定，同埋當開咗除錯記錄時嘅除錯日誌。"
      },
      {
        heading: "經網絡送出嘅資料",
        body: "Mobile SSH 只會將 SSH 驗證資料送俾你設定過、又連緊嘅伺服器。終端機輸入／輸出、SFTP 檔案內容同本機端口轉發流量會同你選嘅伺服器同遠端端點交換。Mobile SSH 唔會將呢啲資料送俾任何 Mobile SSH 分析、廣告、遙測或者雲端同步服務。"
      },
      {
        heading: "檔案傳輸同儲存權限",
        body: "檔案傳輸功能會瀏覽本機電話儲存同遠端 SFTP 目錄，俾你上載同下載檔案。Mobile SSH 唔會向 Android 攞廣泛嘅儲存權限：你用系統嘅資料夾選擇器揀一個資料夾，個 App 就只可以喺嗰個資料夾入面讀寫。喺 iOS，本機檔案同相片會經系統嘅文件同相片選擇器存取。"
      },
      {
        heading: "日誌同疑難排解",
        body: "登入歷史同可選嘅除錯日誌會擺喺本機，俾你做疑難排解，而喺你未開之前兩樣都係關咗或者空嘅。Android 嘅除錯記錄器會擷取終端機事件、SSH 資料大細、觸控輸入診斷、重設大細事件同隧道生命週期事件 —— 開始之前佢會警告你，話明呢個包括你打嘅每一個字，連密碼都計埋，而且會將封存檔寫入你嘅「下載」資料夾。iOS 記嘅係另一份範圍窄啲嘅日誌：撥過嘅地址同每次失敗嘅原因、重連同退避、斷咗嘅連線、網絡轉變，以及 tmux 指令同佢哋嘅錯誤。將任何除錯日誌或封存檔分享俾客服或其他人之前，請先檢查。"
      },
      { heading: "匿名使用分析", body: "為咗了解應用程式點樣被使用並加以改善，Mobile SSH 會向 Aptabase（一間注重私隱、代表我哋處理資料嘅分析服務商）傳送匿名使用分析。僅限匿名事件（例如應用程式開啟同所用功能），連同應用程式版本、作業系統版本、裝置型號同語言。佢使用會定期重設嘅隨機工作階段識別碼，唔會同你或你嘅裝置關聯。當中絕不包含你嘅 SSH 伺服器、主機名稱、用戶名、密碼、金鑰、指令或檔案內容。資料透過加密（HTTPS）連線傳送。分析預設開啟。喺 Android，你可以隨時喺「設定」入面關閉，關閉之後唔會傳送任何嘢；iOS App 暫時仲未有呢個開關，所以喺 iOS，只要個 App 仲裝住，呢啲匿名事件就會繼續傳送。我哋打算加返 iOS 嗰個開關 —— 喺加到之前，呢一頁如實講返實際情況。" }
    ],
    permissionsHeading: "權限",
    permissions: [
      { label: "互聯網", body: "連接 SSH 伺服器需要。" },
      { label: "Wake lock 同 Wi-Fi lock", body: "喺 Android 上用嚟喺裝置瞓覺時保持活躍 SSH 會話。" },
      { label: "前景服務同通知", body: "喺 Android 上用嚟喺背景處理活躍連線；喺 iOS，通知用嚟做 agent 提示。" },
      { label: "檔案存取", body: "喺 Android 係逐個資料夾經系統選擇器授予，喺 iOS 就經系統嘅文件同相片選擇器。Mobile SSH 喺兩個平台都唔會攞全面嘅儲存權限。" }
    ],
    securityHeading: "保安責任",
    securityBody:
      "如果儲咗憑證或私鑰，請用強力螢幕鎖保護你嘅裝置；只連你信任嘅伺服器。而家嘅版本用 App 本機儲存（加埋 iOS 嘅 Keychain），唔係另外加密嘅雲端保險庫。當畫面上有秘密嗰陣，可選嘅 Secure screen 設定會加多一重保護：喺 Android 會阻止截圖同螢幕錄影，並喺最近應用程式檢視入面收埋個 App；喺 iOS 會將 App 切換器嘅預覽變空白，並阻止螢幕錄影同鏡像輸出（喺 iOS 冇辦法阻止手動截圖）。",
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
      { slug: "port-forwarding",  title: "端口轉發",       text: "寫本機隧道字串、轉發去 IPv6 目標，仲有點樣一連線就自動開起。" },
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
    licenseValue: "Apache 2.0",
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
