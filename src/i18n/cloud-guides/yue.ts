import type { CloudGuides } from "./types";

export const yue: CloudGuides = {
  "title": "喺 {provider} 建立虛擬機",
  "description": "逐步介紹喺 {provider} 建立虛擬機、設定公網 IPv4 同防火牆、用 Mobile SSH 連線，以及可選嘅 API 憑證同資源清理。",
  "intro": "喺你自己嘅 {provider} 帳戶建立一部有公網 IPv4 嘅 Ubuntu 伺服器。跟住控制台步驟做，用 Mobile SSH 連線，再另外安裝 wg-easy。",
  "back": "雲端虛擬機同 wg-easy",
  "indexHeading": "各雲端供應商嘅逐步指南",
  "indexIntro": "揀選供應商，睇佢嘅控制台畫面、公網 IP 設定、SSH 登入方法、可選 API 憑證同清理步驟。AWS Lightsail 同 EC2 各自有獨立教學。",
  "cardAction": "建立虛擬機並用 Mobile SSH 連線",
  "navLabel": "揀選雲端供應商",
  "openConsole": "開啟供應商控制台",
  "availability": "呢啲說明用供應商嘅控制台操作。獨立嘅虛擬機建立插件仲喺規劃中；Android 綜合 VPN Setup 實作只喺本機有，未正式發佈。API 部分係為將來存取做準備，手動流程唔使做。",
  "availabilityLink": "查看插件可用情況",
  "checked": "控制台文件核對日期：2026 年 11 月 8 日。",
  "beforeHeading": "開始之前",
  "before": [
    "啟用計費，並檢查目標地區嘅虛擬機、磁碟同公網 IP 配額。建立資源前睇清楚顯示嘅價錢；唔好假設一定有免費額度或者某個方案可用。",
    "呢個設定用 Ubuntu 24.04 LTS、最少 1 GB 記憶體同 20 GB 儲存空間；如果供應商最低配置更高，就跟供應商要求。CPU 架構要同映像相配。呢個係本指南嘅基準，唔係 wg-easy 通用嘅最低要求。",
    "將 SSH 私密金鑰留喺 Mobile SSH 入面，只上載公開金鑰。目前 Android 同 iOS 客戶端都支援 Ed25519；Lightsail 嘅 RSA 匯入同 iOS 解決方法會喺佢嘅步驟講解。記低你目前嘅公網 IPv4，後面加 <code>/32</code> 作為 SSH 來源，或者用獲批准嘅管理 CIDR。"
  ],
  "networkHeading": "呢個設定嘅網絡規則",
  "networkRules": [
    "允許管理 CIDR 經入站 <code>TCP 22</code> 連入。唔需要嘅寬鬆 SSH 放行規則要移除；新增嚴格規則唔會自動取消原本較寬鬆嘅規則。手機公網地址改咗，就要更新來源。",
    "為之後嘅 VPN 步驟，允許 VPN 客戶端網絡經入站 <code>UDP 51820</code> 連入；漫遊客戶端可能需要 <code>0.0.0.0/0</code>。如果啟用 IPv6，要明確設定佢嘅規則。",
    "保持公網 <code>TCP 51821</code> 關閉。wg-easy 管理介面會綁定伺服器回環地址，經 SSH 轉發存取。",
    "允許必要嘅出站 DNS、套件同容器下載，以及 VPN 流量。雲端同虛擬機內部嘅防火牆都要檢查；保留供應商儲存服務同必要嘅 ICMP 規則。"
  ],
  "stepsHeading": "建立伺服器並連線",
  "sourceLink": "供應商說明",
  "connectHeading": "喺 Mobile SSH 儲存伺服器",
  "connectText": "開啟伺服器列表，新增伺服器並填入以下資料。揀選包含相配私密金鑰嘅憑證。如果你設定嘅用戶名稱同指南例子唔同，就用你自己嗰個。",
  "hostLabel": "主機",
  "hostValue": "供應商控制台顯示嘅虛擬機公網 IPv4",
  "portLabel": "連接埠",
  "userLabel": "用戶名稱",
  "credentialLabel": "身分驗證",
  "credentialValue": "相配嘅 SSH 私密金鑰憑證",
  "identityText": "經供應商可信嘅控制台或者開機記錄取得 SSH 主機金鑰指紋，信任連線之前先比對。喺 Android，如果想首次連線時先檢查，就關閉自動接受新身分。更換已儲存身分之前，先查清楚金鑰變更警告。",
  "connectionGuide": "SSH 金鑰同身分檢查",
  "vpnHeading": "另外安裝 wg-easy",
  "vpnText": "先確認已儲存嘅伺服器開到終端機，而且登入帳戶有 root 或 sudo 權限。再跟通用 wg-easy 安裝指南做：安裝 Docker、用固定版本容器、經 SSH 私密管理、建立客戶端同驗證 VPN。安裝程式需要 SSH 存取，唔需要你嘅雲端 API 密鑰。",
  "vpnLink": "繼續睇 wg-easy 安裝步驟",
  "apiHeading": "為將來插件準備嘅可選 API 憑證",
  "apiIntro": "用控制台設定就跳過呢部分。只有相容嘅資源建立插件需要時先建立憑證。下面權限清單係準備工作嘅指引，唔係針對已發佈插件測試過嘅最低權限政策。",
  "apiSecretNote": "只喺受支援、受保護嘅表單輸入憑證。唔好將雲端密鑰放入語音提示、終端機指令或者虛擬機。用受支援嘅最窄權限範圍，記低到期時間，並撤銷唔再需要嘅憑證。",
  "cleanupHeading": "刪除唔再需要嘅資源",
  "cleanupWarning": "停止虛擬機、取消設定工作或者刪除 Mobile SSH 設定檔，都唔會刪除雲端資源，亦唔保證停止收費。確認刪除之前保留資源 ID，唔好刪走無關資源。",
  "providers": {
    "aws-lightsail": {
      "consoleSteps": [
        "登入 AWS 帳戶，開啟 Lightsail，揀<strong>建立執行個體</strong>。揀最接近預期 VPN 位置嘅地區。",
        "揀 <strong>Linux/Unix → 只限作業系統 → Ubuntu 24.04 LTS</strong>。選用最少有 1 GB 記憶體同 20 GB 儲存空間嘅 IPv4/IPv6 雙協定方案，睇清楚顯示嘅價錢。",
        "揀該地區嘅 SSH 金鑰對，或者上載你嘅 RSA 公開金鑰。安全保管私密金鑰，為執行個體命名，再揀<strong>建立執行個體</strong>。iOS 仲要做下面額外嘅金鑰設定。",
        "開啟<strong>網絡 → 建立靜態 IP</strong>。揀同一地區，將地址附加到呢個執行個體，命名再建立。記低靜態 IPv4。",
        "喺執行個體嘅<strong>網絡</strong>分頁，將 SSH 限制為手機公網 IPv4，同時保留<strong>允許 Lightsail 瀏覽器 SSH/RDP</strong>。加入通用 UDP 51820 規則；另外檢查 IPv6 規則，並保持 TCP 51821 關閉。",
        "iOS 用戶要揀<strong>連線 → 使用 SSH 連線</strong>。將 app 嘅 Ed25519 公開金鑰加成 <code>/home/ubuntu/.ssh/authorized_keys</code> 新一行，保留現有金鑰。瀏覽器 SSH 用供應商另一把金鑰；而家靜態 IPv4 已經準備好。"
      ],
      "apiSteps": [
        "只為將來嘅資源建立插件準備：建立專用 IAM 身分，授予所需嘅 Lightsail 執行個體、SSH 金鑰、靜態 IP 同防火牆操作權限，包括清理。支援嘅話要限制地區同資源；呢個唔係測試過嘅最低權限政策。",
        "喺 <strong>IAM → 用戶 → 安全憑證</strong>，只有受支援嘅自動化需要時先建立存取金鑰。經受保護嘅原生表單提供 ID 同密鑰；臨時憑證仲需要工作階段權杖。絕對唔好用 root 金鑰。"
      ],
      "cleanupSteps": [
        "用完就刪除執行個體。分開檢查保留嘅快照同磁碟；停止執行個體唔會終止所有收費。",
        "解除關聯之後，另外釋放靜態 IP。刪除執行個體唔會刪除個地址。"
      ]
    },
    "aws-ec2": {
      "consoleSteps": [
        "喺所需 AWS 地區開啟 EC2，揀<strong>啟動執行個體</strong>。為伺服器命名，揀 Canonical 官方 <strong>Ubuntu Server 24.04 LTS</strong> AMI，並檢查發行者同架構。",
        "揀最少有 1 GB 記憶體、架構相配嘅執行個體類型。喺<strong>設定儲存空間</strong>，為開機磁碟區揀最少 20 GB，並睇預計資源費用。",
        "喺<strong>金鑰對</strong>揀現有金鑰，或者為 Linux 建立或匯入 Ed25519 金鑰對。確保 app 有相配嘅私密金鑰；AWS 會將公開金鑰裝到執行個體。",
        "喺<strong>網絡設定</strong>揀公用子網絡。VPC 要附加互聯網閘道，並有指向該閘道嘅 <code>0.0.0.0/0</code> 路由。啟用公網 IPv4；下面再設定靜態地址。",
        "建立或揀選有通用 TCP 22 同 UDP 51820 規則嘅安全群組。將 SSH 限制為手機公網 IPv4，保持 TCP 51821 關閉，再揀<strong>啟動執行個體</strong>並等佢運行。",
        "開啟<strong>網絡與安全 → 彈性 IP → 分配彈性 IP 地址</strong>。再揀<strong>動作 → 關聯彈性 IP 地址</strong>，選中呢個執行個體同佢嘅主要私人 IP。記低靜態 IPv4；公網 IPv4 地址會收費。"
      ],
      "apiSteps": [
        "只為將來嘅資源建立插件準備：建立專用 IAM 身分，涵蓋建立執行個體、相關 AMI、網絡、磁碟同金鑰資源、標籤、彈性 IP 同清理。現有讀取、啟動同停止權限唔夠。只有附加執行個體設定檔時先加入 <code>iam:PassRole</code>。",
        "建立或取得該身分嘅憑證，只經受支援、受保護嘅原生設定提供。支援嘅話優先用臨時憑證，連同工作階段權杖；絕對唔好用 root 存取金鑰。呢個控制台流程唔使喺 Mobile SSH 提供 API 金鑰。"
      ],
      "cleanupSteps": [
        "終止執行個體。檢查<strong>終止時刪除</strong>設定，並另外刪除唔需要嘅保留 EBS 磁碟區或快照。",
        "另外釋放彈性 IP。終止執行個體會解除地址關聯，但唔會釋放地址或者停止收費。"
      ]
    },
    "google-cloud": {
      "consoleSteps": [
        "揀選或建立 Google Cloud 專案，啟用計費同 <strong>Compute Engine API</strong>。開啟 <strong>Compute Engine → VM 執行個體 → 建立執行個體</strong>。",
        "為虛擬機命名，揀地區、可用區同最少有 1 GB 記憶體嘅機器。喺<strong>作業系統與儲存空間 → 變更</strong>，揀 <strong>Ubuntu → Ubuntu 24.04 LTS</strong> 同最少 20 GB 儲存空間。",
        "喺虛擬機所在地區預留區域性靜態外部 IPv4。喺虛擬機嘅<strong>網絡</strong>設定揀所需 VPC 同子網絡，並揀該地址做網絡介面嘅外部 IPv4。VPC 必須有預設互聯網路由；如果專案冇網絡同子網絡，就建立合適嘅設定。",
        "喺虛擬機 SSH 金鑰設定加入 app 嘅公開金鑰，用 <code>mobileuser</code> 作為用戶名稱註解：<code>ssh-ed25519 AAAA… mobileuser</code>。如果專案強制用 OS Login，就改用嗰個流程同分配嘅 POSIX 用戶名稱；中繼資料金鑰唔可以覆蓋呢個要求。",
        "加入網絡標籤，例如 <code>wg-vpn</code>。為呢個標籤建立入站防火牆規則，允許通用 TCP 22 同 UDP 51820 存取。將 SSH 限制為手機公網 IPv4，保持 TCP 51821 關閉。",
        "檢查完虛擬機設定就揀<strong>建立</strong>。等執行個體運行，再記低外部 IPv4 同上面選定嘅 SSH 用戶名稱。唔好假設用戶名稱一定係 <code>ubuntu</code>。"
      ],
      "apiSteps": [
        "只為將來嘅資源建立插件準備：用專用服務帳戶，喺專案範圍授予 Compute Instance Admin (v1)、Compute Network Admin 同 Compute Security Admin 角色，或者更窄嘅等效權限。Compute Network Admin 唔可以建立防火牆。如果附加虛擬機服務帳戶，仲要授予對該帳戶嘅 Service Account User 角色。",
        "如果受支援自動化需要 JSON 金鑰，而且機構政策允許，就開啟 <strong>IAM 與管理 → 服務帳戶 → 金鑰 → 新增金鑰 → 建立新金鑰 → JSON</strong>。經受保護嘅原生設定提供專案 ID 同 JSON；絕對唔好繞過金鑰限制。"
      ],
      "cleanupSteps": [
        "刪除虛擬機，檢查開機同資料磁碟係刪除定保留；移除唔需要嘅保留磁碟同快照。",
        "另外釋放預留外部 IPv4。刪除虛擬機唔會釋放預留地址。"
      ]
    },
    "azure": {
      "consoleSteps": [
        "用有效訂閱開啟 Azure 入口網站。建立專用資源群組，再開啟<strong>虛擬機器 → 建立 → Azure 虛擬機器</strong>，揀返該訂閱同群組。",
        "輸入名稱同地區。揀 <strong>Ubuntu Server 24.04 LTS – x64 Gen2</strong> 同最少有 1 GB 記憶體嘅相容規格。作業系統磁碟最少保留 20 GB，並睇清楚顯示費用。",
        "揀 <strong>SSH 公開金鑰</strong>驗證，將管理員用戶名稱設為 <code>azureuser</code>，並揀現有公開金鑰。貼上 app 嘅 Ed25519 公開金鑰，將私密金鑰留喺 app。",
        "喺<strong>網絡</strong>揀選或建立 VNet 同子網絡。喺適當地區建立或揀選 Standard 靜態公網 IPv4，附加到呢部虛擬機嘅網絡介面 IP 設定。",
        "喺適用嘅網絡安全群組設定通用 TCP 22 同 UDP 51820 規則。將 SSH 限制為手機公網 IPv4，保持 TCP 51821 關閉。如果子網絡同介面都有安全群組，兩邊都要允許流量。",
        "揀<strong>檢閱 + 建立 → 建立</strong>。等部署完成，開啟虛擬機嘅<strong>概觀</strong>，記低公網 IPv4。虛擬機已經準備好 <code>azureuser</code> 帳戶同你揀嘅 SSH 金鑰。"
      ],
      "apiSteps": [
        "只為將來嘅資源建立插件準備：喺 <strong>Microsoft Entra ID → 應用程式註冊</strong>建立專用單一租用戶 app。記低租用戶、用戶端同訂閱 ID。有需要就喺<strong>憑證與祕密</strong>建立用戶端密碼，並複製佢嘅值，唔係密碼 ID。",
        "喺資源群組嘅<strong>存取控制 (IAM)</strong>，授予該主體合適嘅運算同網絡權限。專用群組嘅 Contributor 角色權限較廣但可用；應優先揀經測試嘅較窄角色。先建立資源群組，因為群組範圍嘅權限唔可以建立群組。用受保護嘅原生憑證設定。"
      ],
      "cleanupSteps": [
        "如果資源群組只得今次部署，檢查內容，用完就刪除群組。",
        "如果保留群組，刪除虛擬機並檢查附加資源嘅刪除選項。分開刪除唔需要嘅保留磁碟、網絡介面同公網 IP。"
      ]
    },
    "digitalocean": {
      "consoleSteps": [
        "喺控制台開啟<strong>建立 → Droplet</strong>。揀附近而且有可用容量嘅<strong>地區</strong>。用可以識別呢部伺服器嘅專案同主機名稱；唔同地區嘅方案供應同價錢可以唔同。",
        "喺<strong>揀選映像 → 作業系統</strong>揀 <strong>Ubuntu 24.04 LTS</strong>。如果出現設定類型選項，就揀<strong>組合配置</strong>，再揀<strong>共享 CPU → 基本</strong>。選用最少 <strong>1 GB 記憶體</strong>同 <strong>20 GB 磁碟</strong>；如果供應商最低配置更高，就跟佢要求。",
        "喺<strong>揀選驗證方法 → SSH 金鑰 → 新增 SSH 金鑰</strong>，貼上公開金鑰並命名，再揀選佢。將相配私密金鑰留喺裝置；之後加入帳戶嘅金鑰唔會自動裝到現有 Droplet。",
        "喺<strong>網絡</strong>保持選中<strong>公網 IPv4 地址</strong>。將數量設為 <strong>1</strong>，確認主機名稱同專案，再按<strong>建立 Droplet</strong>。取消兩個公網地址選項會建立只有私人網絡嘅伺服器。",
        "開啟<strong>建立 → 防火牆</strong>並命名。將預設任何來源 SSH 改為只允許管理 CIDR 存取 <strong>TCP 22</strong>；可以加埋通用指南嘅 <strong>UDP 51820</strong> 規則。保留合適出站規則，喺<strong>套用到 Droplet</strong>揀伺服器，再建立防火牆。",
        "如果要喺換機後保留地址，開啟<strong>網絡 → 預留 IP → 新增預留 IP</strong>。揀 <strong>IPv4 地址 → 分配到 Droplet</strong>，選中呢個 Droplet 並確認。建立完成後，記低分配嘅公網 IPv4。"
      ],
      "apiSteps": [
        "只適用於將來相容嘅插件：開啟<strong>帳戶 → API → 權杖 → 產生新權杖</strong>。輸入清楚嘅名稱同到期時間。",
        "揀<strong>自訂範圍</strong>，授予已實作流程所需嘅 Droplet、SSH 金鑰、防火牆同預留 IP 操作及相依權限。唔好預設就用完整存取；權杖顯示時要儲存。"
      ],
      "cleanupSteps": [
        "儲存需要嘅資料後，開啟<strong>設定 → 銷毀</strong>，檢查關聯資源，輸入 Droplet 名稱並確認。冇選中嘅磁碟區同快照會保留；自動備份會保留原本到期時間。",
        "對每個唔需要嘅地址，開啟<strong>網絡 → 預留 IP → … → 刪除</strong>，再確認<strong>刪除預留 IP</strong>。保留地址同其他資源可能繼續收費。"
      ]
    },
    "hetzner": {
      "consoleSteps": [
        "開啟目標專案，再揀<strong>防火牆 → 建立防火牆</strong>。命名防火牆，允許管理 CIDR 經入站 <strong>TCP 22</strong> 連入。可以加入通用指南嘅 <strong>UDP 51820</strong> 規則。出站規則留空即係允許出站流量。",
        "開啟<strong>伺服器 → 新增伺服器</strong>。揀附近有你選定伺服器類型可用嘅<strong>位置</strong>。防火牆同伺服器要喺同一專案；供應情況會隨位置同當前容量改變。",
        "揀可用嘅<strong>類型</strong>，最少有 <strong>1 GB 記憶體</strong>同 <strong>20 GB 磁碟</strong>；如果供應商最低配置更高，就跟佢要求。喺<strong>映像 → 作業系統映像</strong>，揀同伺服器架構相配嘅 <strong>Ubuntu 24.04</strong>。",
        "喺<strong>網絡</strong>啟用公網 <strong>IPv4</strong>。揀同一專案同位置中未分配嘅<strong>主要 IPv4</strong>，或者畀 Hetzner 建立一個。只有私人網絡或者 IPv6 嘅伺服器唔符合本指南公網 IPv4 要求。",
        "喺 <strong>SSH 金鑰</strong>加入或揀選公開金鑰。喺<strong>防火牆</strong>揀之前建立嗰個。呢度選中嘅帳戶金鑰會喺建立時安裝；之後再加帳戶金鑰唔會更新呢部伺服器。",
        "輸入易認嘅<strong>名稱</strong>，檢查可選備份同總費用，再按<strong>立即建立並購買</strong>。等伺服器準備好，記低主要 IPv4。如果要重用地址，就保留該 IP 資源。"
      ],
      "apiSteps": [
        "只適用於將來相容嘅插件：開啟目標專案嘅<strong>安全 → API 權杖 → 產生 API 權杖</strong>，輸入描述。",
        "為資源建立揀<strong>讀寫</strong>，並喺關閉視窗前複製權杖。呢個會授予成個專案嘅寫入權限，唔係只限呢部伺服器。"
      ],
      "cleanupSteps": [
        "儲存需要嘅資料，再刪除目標伺服器。如果想保留地址換機用，先關閉主要 IP 嘅<strong>自動刪除</strong>設定。",
        "另外刪除唔需要嘅保留主要 IP、磁碟區同快照。保留 IPv4 地址會繼續收費；啟用<strong>自動刪除</strong>會跟伺服器一齊移除未受保護嘅主要 IP。"
      ]
    },
    "linode": {
      "consoleSteps": [
        "開啟<strong>防火牆 → 建立防火牆 → 自訂防火牆</strong>。輸入標籤。保持<strong>預設入站政策：丟棄</strong>同<strong>預設出站政策：接受</strong>；咁樣會允許出站流量，但入站連線需要明確規則。",
        "加入入站規則，設定<strong>協定：TCP</strong>、<strong>連接埠：22</strong>、填有管理 CIDR 嘅<strong>來源：IP/網絡遮罩</strong>，以及<strong>動作：接受</strong>。可以加入通用指南嘅 <strong>UDP 51820</strong> 規則。按<strong>儲存變更</strong>啟用規則。",
        "開啟<strong>建立 → Linode</strong>。揀附近嘅核心運算地區，再揀<strong>發行版 → Ubuntu 24.04</strong>。選用最少有 <strong>1 GB 記憶體</strong>同 <strong>20 GB 磁碟</strong>嘅可用方案；如果供應商最低配置更高，就跟佢要求。",
        "設定<strong>標籤</strong>。喺安全設定揀現有 SSH 金鑰，或者按<strong>新增 SSH 金鑰</strong>並貼上公開金鑰。用 SSH 金鑰建立時，<strong>Root 密碼</strong>係可選項；將私密金鑰留喺裝置。",
        "喺網絡設定揀<strong>公共互聯網</strong>同 <strong>Linode 介面</strong>。為呢個公網介面揀選防火牆。喺 <strong>IP 地址</strong>揀<strong>預留</strong>同一個同區地址，或者按<strong>預留 IP</strong>取得地址。",
        "喺 <strong>Linode 摘要</strong>檢查可選備份同其他費用，再按<strong>建立 Linode</strong>。等初始化完成，記低公網 IPv4。刪除伺服器後，預留地址仍然喺你帳戶，唔可以搬去另一地區。"
      ],
      "apiSteps": [
        "只適用於將來相容嘅插件：開啟用戶名稱選單 → <strong>API 權杖 → 建立個人存取權杖</strong>。設定標籤同到期時間。",
        "只授予必要範圍：建立資源通常需要 Linodes 同 Firewalls 讀寫權限；預留或釋放地址仲需要 <code>ips:read_write</code>。安全儲存權杖。"
      ],
      "cleanupSteps": [
        "儲存需要嘅資料，再開啟 <strong>Linodes → … → 刪除 → 刪除 Linode</strong>。另外檢查保留嘅磁碟區同映像。",
        "唔需要嘅地址可以喺<strong>預留 IP → … → 取消預留</strong>處理並確認。預留 IP 喺刪除伺服器後仍會保留，一直收費到釋放為止。"
      ]
    },
    "vultr": {
      "consoleSteps": [
        "開啟<strong>帳戶 → SSH 金鑰 → 新增 SSH 金鑰</strong>。貼上公開金鑰並命名，再儲存。將對應私密金鑰留喺裝置；設定執行個體時揀呢把已儲存公開金鑰。",
        "開啟<strong>網絡 → 防火牆群組 → 建立防火牆群組</strong>並命名。加入允許管理 CIDR 存取 <strong>TCP 22</strong> 嘅入站 IPv4 規則，同可選嘅 <strong>UDP 51820</strong> 規則。確認有已儲存規則：空群組唔會執行過濾。",
        "開啟<strong>運算 → 執行個體 → 建立執行個體 + → 共享 CPU</strong>。揀最少有 <strong>1 GB 記憶體</strong>同 <strong>20 GB 磁碟</strong>嘅可用方案；如果供應商最低配置更高，就跟佢要求。揀附近位置，再按<strong>設定</strong>。",
        "喺<strong>映像選擇與設定 → 作業系統</strong>揀 <strong>Ubuntu 24.04</strong>。喺<strong>伺服器設定</strong>揀你嘅 <strong>SSH 金鑰</strong>項目同已有規則嘅<strong>防火牆群組</strong>。輸入<strong>伺服器 1 主機名稱</strong>同<strong>伺服器 1 標籤</strong>。",
        "喺<strong>執行個體連線</strong>揀<strong>有公網 IP 嘅執行個體</strong>，保持啟用<strong>公網 IPv4</strong>。檢查自動備份同其他可選費用。<strong>受限用戶登入</strong>會將登入帳戶由 <code>root</code> 改為有 sudo 權限嘅 <code>linuxuser</code>。檢查<strong>摘要</strong>再按<strong>部署</strong>。",
        "等執行個體準備好，記低公網 IPv4。普通地址喺呢個執行個體存在期間會固定；如果要換機後保留，就用同區預留 IP。"
      ],
      "apiSteps": [
        "只適用於將來相容嘅插件：開啟<strong>帳戶 → API</strong>，喺個人存取權杖部分揀<strong>啟用 API</strong>；該部分標示為<strong>個人存取權杖</strong>。安全保管憑證。",
        "喺<strong>存取控制</strong>允許發起 API 請求嘅 IP 或 CIDR。轉咗流動網絡之後要更新；呢個限制請求來源，唔係特定資源嘅權限。"
      ],
      "cleanupSteps": [
        "儲存需要嘅資料，開啟執行個體並按<strong>銷毀伺服器</strong>。揀<strong>係，銷毀呢部伺服器</strong>，再按<strong>銷毀伺服器</strong>。",
        "經<strong>網絡 → 預留 IP → 移除預留 IP</strong>刪除唔需要嘅保留地址。仲要檢查獨立儲存同快照；刪除伺服器唔等於清理晒成個帳戶。"
      ]
    },
    "oracle-cloud": {
      "consoleSteps": [
        "揀 OCI 地區同專用區間。確認運算、磁碟區同公網 IP 配額；可用容量同免費方案資格視乎所選資源。",
        "開啟<strong>網絡 → 虛擬雲端網絡 → 啟動 VCN 精靈 → 建立有互聯網連線嘅 VCN</strong>。用佢嘅公用子網絡，並確認有經互聯網閘道嘅 <code>0.0.0.0/0</code> 路由。",
        "檢查公用子網絡嘅安全清單同已附加網絡安全群組。將 TCP <code>22</code> 限制為管理 CIDR，允許 UDP <code>51820</code>，並保留必要嘅出站同 ICMP 規則。",
        "開啟<strong>運算 → 執行個體 → 建立執行個體</strong>。設定名稱、區間同可用性網域。揀<strong>變更映像 → Ubuntu → 24.04</strong>、相容虛擬機規格，同足夠記憶體及開機儲存。",
        "揀公用子網絡，啟用公網 IPv4 分配。喺<strong>新增 SSH 金鑰</strong>貼上或上載 Ed25519/ECDSA 公開金鑰；控制台產生嘅金鑰係 RSA。將相配私密金鑰留喺裝置。",
        "檢查並建立虛擬機。進入 Running 狀態後，記低公網 IPv4。如果要換虛擬機後保留地址，可以將臨時 IP 換成分配到主要私人 IP 嘅預留公網 IP，並記低新地址。"
      ],
      "apiSteps": [
        "只適用於將來嘅資源建立插件：請管理員為專用 IAM 用戶或群組授予呢個區間所需嘅運算、網絡同磁碟區權限。",
        "開啟<strong>用戶設定 → API 金鑰 → 新增 API 金鑰</strong>。儲存 RSA PEM 簽署私密金鑰、指紋、租用戶及用戶 OCID 同地區；記低區間 OCID。呢個同 SSH 金鑰係分開嘅。"
      ],
      "cleanupSteps": [
        "終止執行個體，如果唔需要開機磁碟區就明確刪除；OCI 預設會保留。先備份需要嘅資料。",
        "刪除唔需要嘅預留公網 IP 同保留磁碟區。移除專用 VCN 閒置嘅子網絡、閘道同其他網絡資源，包括精靈建立嘅私人網絡資源。"
      ]
    },
    "ovhcloud": {
      "consoleSteps": [
        "啟用 Public Cloud 專案同付款方式。檢查<strong>專案管理 → 配額</strong>。喺 <strong>SSH 金鑰 → 建立 SSH 金鑰</strong>命名並貼上公開金鑰，再揀<strong>新增</strong>。",
        "開啟<strong>運算 → 執行個體 → 建立執行個體</strong>。為虛擬機命名，揀地區同合適型號，揀 Ubuntu <code>24.04</code>，並選中已儲存 SSH 金鑰。",
        "喺網絡設定啟用<strong>分配公網 IP → 基本公網 IP</strong>；公網連線預設關閉。基本 IP 用 <code>Ext-Net</code>，唔可以同閘道並用。檢查自動快照同費用，揀按小時計費，再揀<strong>建立我嘅執行個體</strong>。",
        "要設定過濾，開啟<strong>專案管理 → 用戶</strong>。有需要就建立有合適網絡同執行個體權限嘅 OpenStack 用戶，儲存密碼，再揀佢嘅<strong>… → 啟動 OpenStack Horizon</strong>動作。",
        "喺 Horizon 揀虛擬機所在地區，再開啟<strong>網絡 → 安全群組 → 建立安全群組</strong>。建立專用群組。喺<strong>管理規則</strong>允許管理 CIDR 存取 TCP <code>22</code> 同允許 UDP <code>51820</code>；保留出站規則。",
        "開啟 Horizon 嘅<strong>運算 → 執行個體 → 編輯安全群組</strong>。套用專用群組，只喺呢部虛擬機移除寬鬆嘅預設群組；唔好修改或刪除共用預設群組。狀態變成 Active 後，喺概觀記低公網 IPv4。"
      ],
      "apiSteps": [
        "只適用於將來嘅資源建立插件：開啟你帳戶 API 地區嘅權杖建立頁面。為應用程式命名，設定到期時間，將權限限制喺文件列明嘅專案路徑同動作。",
        "安全儲存應用程式金鑰、應用程式密鑰同消費者金鑰。呢啲簽署 API 憑證唔同於 Horizon 用嘅 OpenStack 用戶名稱同密碼。"
      ],
      "cleanupSteps": [
        "備份需要嘅資料，再揀執行個體嘅<strong>… → 刪除 → 刪除執行個體</strong>。按小時計費會一直持續到刪除。",
        "分開移除唔需要嘅磁碟區、快照或備份，同獨立建立嘅浮動 IP、附加 IP 或閘道。刪除虛擬機唔會移除所有關聯資源。"
      ]
    },
    "scaleway": {
      "consoleSteps": [
        "揀正確組織同專案，啟用計費並檢查配額。喺<strong>專案儀表板 → 新增 SSH 金鑰</strong>命名並貼上公開金鑰。SSH 金鑰只適用於呢個專案。",
        "喺所選可用區開啟<strong>運算 → CPU 與 GPU 執行個體 → 安全群組</strong>。喺該區建立專用群組。啟用有狀態過濾，將入站設為<strong>丟棄</strong>，出站設為<strong>接受</strong>。",
        "喺群組嘅<strong>規則</strong>分頁允許管理 CIDR 存取 TCP <code>22</code>，允許 VPN 客戶端存取 UDP <code>51820</code>。保持 TCP <code>51821</code> 關閉。自動建立嘅預設群組係無狀態，所以要明確揀選專用群組。",
        "揀<strong>建立執行個體 → 建立 CPU 執行個體</strong>，揀合適 CPU 配置同同一可用區，再揀<strong>設定執行個體</strong>。為佢命名，揀 Ubuntu <code>24.04</code>/Noble，並設定最少 20 GB 系統磁碟區。",
        "保持啟用<strong>公網 IPv4</strong>，分配地址或者揀可用現有地址。揀專用安全群組，確認顯示嘅 SSH 金鑰。如果啟用 IPv6，就另外檢查設定。",
        "揀<strong>檢閱</strong>，睇預計費用，再揀<strong>建立執行個體</strong>。等資源建立完成，喺<strong>概觀</strong>複製公網 IPv4。呢個彈性 IP 係獨立資源，生命週期要由你管理。"
      ],
      "apiSteps": [
        "只適用於將來嘅資源建立插件：建立 IAM 應用程式，授予目標專案所需嘅執行個體、網絡同儲存權限。",
        "開啟 <strong>IAM 與 API 金鑰 → API 金鑰 → 產生 API 金鑰</strong>。揀應用程式同到期時間。儲存存取金鑰同只顯示一次嘅密鑰；另外記低專案 UUID 同可用區。"
      ],
      "cleanupSteps": [
        "備份需要嘅資料。喺正確可用區揀執行個體嘅<strong>… → 刪除</strong>，輸入 <code>DELETE</code>，並選中刪除唔再需要嘅關聯 IP 同 Block Storage 磁碟區。",
        "確認<strong>刪除執行個體</strong>。檢查有冇唔需要嘅保留彈性 IP、磁碟區同快照；淨係關機唔會移除呢啲資源。"
      ]
    }
  }
};
