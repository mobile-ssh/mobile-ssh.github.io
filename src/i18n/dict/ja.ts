import type { Dict } from "../types";

export const ja: Dict = {
  meta: {
    siteName: "Mobile SSH",
    languageLabel: "言語",
    languageSwitcher: "言語を切り替える"
  },
  nav: {
    blog: "ブログ",
    home: "ホーム",
    features: "機能",
    docs: "ドキュメント",
    compare: "比較",
    about: "情報",
    privacy: "プライバシー"
  },
  footer: {
    tagline: "Android と iOS の端末向けに絞り込んだ SSH／SFTP／ターミナル ワークフロー。",
    documentation: "ドキュメント",
    comparison: "比較",
    privacy: "プライバシー",
    contact: "お問い合わせ",
    feedback: "フィードバック"
  },
  home: {
    metaTitle: "Mobile SSH — Android・iOS 用 SSH クライアント",
    metaDescription:
      "Mobile SSH は、マルチセッション端末、Eternal Terminal の耐障害性セッション、tmux マネージャー、SFTP 転送、秘密鍵、ポートフォワード、プラグインを備えた、Android と iOS 向けの絞り込まれた SSH クライアントです。",
    eyebrow: "Android・iOS 用 SSH クライアント",
    h1: "Mobile SSH",
    intro:
      "Android と iOS 向けの絞り込まれた SSH クライアント。マルチセッション端末、ネットワーク切断を乗り越える Eternal Terminal セッション、内蔵 tmux マネージャー、SFTP ファイル転送、ローカル ポートフォワード、プラグインをスマホとタブレットのために用意しました。",
    versionLine: "{count} 言語に対応 · Android {version} · iOS {iosVersion} ベータ",
    ctaDocs: "ドキュメントを読む",
    ctaPlay: "Google Play で手に入れよう",
    ctaIos: "TestFlight で iOS ベータを手に入れよう",
    platformAndroid: "Android",
    platformIos: "iOS — iPhone & iPad",
    advantagesHead: "Mobile SSH を選ぶ理由",
    advantagesIntro: "モバイル SSH クライアントが取りこぼしがちなポイントに合わせて作られています。",
    advantages: [
      { title: "Pro 版なし、広告なし", text: "すべての機能が同じアプリの中にあります。基本機能を Pro アップグレードの裏に隠すペイウォールはなく、ターミナルに広告バナーも出ません。" },
      { title: "データは端末内に留まる", text: "保存したサーバー、認証情報、鍵はすべて端末内。クラウドアカウント不要、停止される心配なし。" },
      { title: "保存ホストにワンタップ接続", text: "一度ホストを登録すれば、検索してタップするだけで再接続。鍵・ポート・設定済みトンネルも一緒に。" },
      { title: "エージェント アラートとワンタップ応答", text: "Claude Code、Codex、その他のエージェントがあなたを必要とした瞬間にわかります。該当ペインが琥珀色に変わり、ツールバーのバッジが待機中の数を数え、「エージェント」一覧からワンタップでプロンプトに答えられます — ターミナルに打ち込む必要はありません。" },
      { title: "キーボードの上のターミナル キー", text: "ESC、TAB、CTRL、矢印、Home、End、PgUp、PgDn を並べた 13 キーの列。横スクロールではなく 2 段目に折り返すので、画面外に隠れるキーはありません。プリセット パレットから F1〜F12、Ctrl の組み合わせ、独自のエスケープ シーケンスを追加できます。" },
      { title: "コマンド不要のポート転送", text: "トンネルはサーバープロファイルに紐づき、接続と同時に自動で立ち上がります。" },
      { title: "ロックや回線切替に強い", text: "保存済みサーバーに複数のアドレス（自宅 LAN の IP と VPN の IP など）を登録しておくと、Mobile SSH は応答するアドレスへ接続し、前回つながったアドレスを最初に試し、ネットワークが変わった瞬間に再接続します。Android ではフォアグラウンドサービスとウェイクロックが画面オフ中もシェルを維持し、iOS では自動再接続と tmux 自動アタッチで中断したまさにその場所に戻れます。" },
      { title: "Eternal Terminal", text: "オプションの ET トランスポートがネットワーク切断、スリープ、IP 変更をまたいでリモートシェルを生き続けさせます。ホストに etserver がなくても、Mobile SSH が SSH 経由でインストールできます。" },
      { title: "プラグインで拡張", text: "公開カタログを閲覧し、必要なプラグインをオンデマンドでインストールして新しいワークフローを追加できます。各プラグインはダウンロード後に SHA-256 で検証され、アプリ専用ストレージに保存されます。" }
    ],
    sectionAHead: "モバイルでの SSH 作業を中心に設計",
    sectionAIntro:
      "Mobile SSH は管理者の定番ルートを短くします。サーバーを保存し、つなぎ、セッションを維持し、必要なときにファイルを動かし、すばやくアクティブな端末に戻れます。",
    features: [
      { title: "SSH ターミナル", text: "xterm-256color 端末。24-bit トゥルーカラー、イタリック、ターミナル内検索、OSC 133 シェル統合、ピンチで文字サイズ変更に対応。加えて Android と iOS では、設定可能なフォントとカラースキーム、Nerd Font の powerline／アイコン グリフに対応。" },
      { title: "マルチセッション グリッド", text: "リサイズ可能なグリッドで最大 8 つの SSH セッション。ペインをタップしてフォーカス、ダブルタップでフルスクリーン、ピンチで文字サイズ変更。" },
      { title: "タップ可能なリンク", text: "ターミナル出力内の URL に下線が引かれ、タップするだけでブラウザで開きます。コピーやアプリ切替は不要。" },
      { title: "サーバーのフォルダーと名前", text: "保存済みサーバーを折りたたみ可能なグループに整理でき、アドレスの代わりに表示される名前も付けられます。名前だけでは区別がつかないときはアドレスが戻るので、行が紛らわしくなりません。" },
      { title: "エージェント アラート", text: "エージェントはターミナル経由で自ら報告するため、どのエージェントが何で止まっているかをアプリが把握します。「エージェント」一覧からワンタップで応答でき、アラートは積み重ならず置き換わり、タップすれば鳴ったペインが開きます。" },
      { title: "秘密鍵", text: "パスワードまたは秘密鍵認証。端末上で Ed25519 または ECDSA 鍵を生成（Android では RSA も）、または既存の鍵をインポート・貼り付け。" },
      { title: "SFTP 転送", text: "アクティブな SSH セッションに紐づく二画面ファイルブラウザ。アップロード・ダウンロードをキューに入れ、名前変更、削除、リモート権限の確認が可能。" },
      { title: "ポートフォワード", text: "ローカル トンネル設定をサーバープロファイルと一緒に保存すれば、接続時に自動で開きます — 新しいネットワークで再接続したあとも、手で組み直す必要はありません。" },
      { title: "再接続ワークフロー", text: "ネットワークが切り替わると、死んだ経路のタイムアウトを待たずにセッションが一斉に接続し直し、バックオフ中のセッションも使えるネットワークが現れた瞬間に目を覚まします。iOS では、応答が静かに途絶えたサーバーを検知して再接続します。" },
      { title: "バックアップと復元", text: "保存済みサーバーと認証情報を暗号化バックアップ ファイルに書き出し。マージまたは置換でインポートして端末間で移行 — バックアップは Android と iOS の間で相互に利用できます。" },
      { title: "Eternal Terminal", text: "Eternal Terminal (ET) 経由で接続すると、ネットワーク切断、スリープ、IP 変更を乗り越えるセッションが実現します — SSH 経由のオプション自動 etserver セットアップ付き。" },
      { title: "マルチプレクサー マネージャー", text: "プレフィックス キーを押さずに tmux を操作 — アタッチ、名前変更、作成、分割、ズーム、強制終了。herdr と Zellij にも両プラットフォームで同じ操作が使え、ツールバーのアイコンはそのプログラムがサーバー上で見つかったときだけ現れます。" },
      { title: "プラグイン", text: "プラグインを閲覧・インストール・実行して Mobile SSH を拡張できます。プラグインは公開カタログからオンデマンドでダウンロードされ、SHA-256 で検証されてアプリ専用ストレージに保存されます。" }
    ],
    multiHead: "ひとつの画面で複数のシェル",
    multiP1:
      "端末ビューはグリッドで複数のアクティブな SSH セッションを保持できます。ペインをタップして入力、拡張キーバーで端末操作、ピンチで文字サイズ調整、ダブルタップでフルスクリーン フォーカス。",
    multiP2:
      "ホーム画面は「どこに戻れるか」に答えます — いま生きている接続と、保存済みサーバーで待っている tmux セッション。後者は保存済みのスナップショットから再構築されるため、ネットワークがまったくなくても一覧に現れます。",
    multiAlt:
      "スマートフォン上の Mobile SSH が 2 つのアクティブな SSH 端末セッションを横並びのスプリット ビューで表示。",
    sftpHead: "端末だけでは足りないときの SFTP",
    sftpBody:
      "接続済みセッションからファイル転送を開いて、端末ストレージとリモートディレクトリを参照できます。アップロードとダウンロードをキューに入れ、並べ替え、最近使ったリモート パスへ戻り、何を移すか決める際にリモートの権限を確認・変更できます。",
    sftpCtaGuide: "ファイル転送ガイド",
    sftpCtaAll: "すべての機能",
    sftpAlt: "スマートフォンの Mobile SSH ファイル転送画面（ローカルとリモートのパネル付き）。",
    galleryHead: "実機でのスクリーンショット",
    galleryIntro:
      "Android スマートフォンと iPhone のスクリーンショット — サーバー追加、端末作業、複数セッション、SFTP でのファイル移動などで実際に使う画面です。",
    carouselPrev: "前のスクリーンショット",
    carouselNext: "次のスクリーンショット",
    carouselDot: "位置 {n} へ移動",
    videoHead: "実際の動きを見る",
    videoIntro: "両プラットフォームでの短いデモ。Android：どのセッションに戻れるかがひと目で分かるホーム画面、そのサーバーで使える機能だけを表示するセッション ツールバー、ファイルをそのままプロンプトへ送る操作、そして tmux・herdr・Zellij の各マネージャー。iOS：起動してそのままライブの端末に入り、作業を終えて戻ってくるホーム画面。",
    videoAlt: "Android のデモ：再開できる tmux セッションを一覧表示するホーム画面、セッション ツールバー、ファイルをプロンプトに添付する操作、tmux・herdr・Zellij のセッション マネージャー",
    videoIosAlt: "iOS のデモ：Mobile SSH を開いてライブの SSH 端末セッションに入り、「最近」やその他の画面があるホーム画面に戻るまで",
    muxHead: "セッションマネージャーごとに 1 本の動画",
    muxIntro:
      "上のデモでは tmux、herdr、Zellij の 3 つで合わせて約 30 秒しかありません。ツールバーがそれぞれにアイコンを描くことは分かっても、各々が何をするのかまでは分かりません。こちらは長尺版で、実際のサーバーに接続して両プラットフォームで撮影しました。",
    muxItems: [
        {
          text: "ホーム画面からセッション、ウィンドウ、ペインへ。何かが応答を待っているセッションにはベルが付きます。ウィンドウにアタッチすれば動作中のターミナルがそれに追従し、ウィンドウを作って名前を付けることもできます。プレフィックスキーは一度も打ちません。",
          androidAlt: "Android 版 tmux マネージャーのデモ: ホーム画面のキャッシュされたセッション一覧、続いてセッション・ウィンドウ・ペイン、ターミナルが追従するウィンドウのアタッチ、そして名前付きウィンドウの作成。",
          iosAlt: "iOS 版 tmux マネージャーのデモ: 経過時間付きの tmux セッションと入力待ちを示すベル、続いてウィンドウとペイン、各行に「開く」「名前変更」「終了」。"
        },
        {
          text: "ワークスペース、タブ、ペインが実際のエージェントの状態を持ちます。片方は作業中、もう片方はブロックされて人の返事を待っています。ブロック中のものをプレビューし、スマートフォンから返答すると、herdr がそれを作業中、そして完了へと分類し直します。",
          androidAlt: "Android 版 herdr マネージャーのデモ: エージェントの状態が付いたセッションとワークスペース、「needs you」と表示されたエージェント、スマートフォンからの返答、そして新しいワークスペースの作成と名前変更。",
          iosAlt: "iOS 版 herdr マネージャーのデモ: エージェントの状態を持つワークスペースと、入力した内容を Enter とともにブロック中のエージェントへ送る返信シート。"
        },
        {
          text: "経過時間付きのセッション、続いてタブとペイン。ペインの出力をアタッチせずに読み、名前付きのタブを追加し、目的のタブを前面に出してアタッチします。プロンプトには何も打ち込みません。",
          androidAlt: "Android 版 Zellij マネージャーのデモ: 経過時間付きのセッション、タブとペイン、ペイン出力のプレビュー、名前付きタブの作成、そしてセッションへのアタッチ。",
          iosAlt: "iOS 版 Zellij マネージャーのデモ: アタッチ・名前変更・終了・削除ができるセッション、そのタブ、そしてプレビューと縦横両方の分割を備えたペイン。"
        }
    ],
    graphicsHead: "ターミナルの中で動くグラフ",
    graphicsBody:
      "36 フレームの GIF を Kitty グラフィックスプロトコルで流し込み、アプリがファイル自身のフレームタイミングでデコードします。外部から 1 コマずつ送っているのではありません。続いて、ターミナルの真価が問われるエスケープシーケンス群: OSC 8 はビルド番号やダッシュボード名をタップできるものに変え、OSC 52 はリモート側からスマートフォンのクリップボードに書き込み、OSC 777 は本物の Android 通知を上げます。",
    graphicsAlt:
      "Android のデモ: Kitty グラフィックスプロトコルでターミナルに流し込まれた動くレイテンシグラフ、続いて OSC 8 のリンク、OSC 52 によるクリップボード書き込み、OSC 777 の通知。",
    lightboxClose: "閉じる",
    lightboxPrev: "前へ",
    lightboxNext: "次へ",
    betaJoin: "ベータに参加する",
    betaOr: "またはメールで",
    betaRequest: "プライベートベータへのアクセスをリクエストする",
    galleryAlts: [
      "Android スマートフォン上の Mobile SSH ホーム画面。保存済みサーバーで待機中の tmux セッションの一覧が、サーバー、認証情報、設定、バージョン情報、プラグインのボタンの上に表示されている。",
      "サーバー追加ダイアログ（ホスト、ポート、認証情報、秘密鍵、ポート転送のフィールド）。",
      "単一セッションの SSH 端末（下部に拡張キーバー付き）。",
      "スマートフォン上で 2 つの SSH セッションを横並びのスプリット ビューで表示。",
      "スマートフォン上で 2 つの SSH セッションを縦に積み重ねて表示（アクティブ ペインを強調）。",
      "SFTP ファイル転送画面（マイフォンとリモートホストのパネル）。",
      "バージョン情報ダイアログ（バージョン、作者、ライセンス、サイト）。",
      "スマートフォンの「SSH キーを生成」ダイアログ。ラベル、ユーザー、キーの種類、パスフレーズの各フィールドを表示。",
      "スマートフォンの「公開鍵」ダイアログ。生成された鍵とコピー・共有・保存のオプションを表示。",
      "保存済みサーバー画面。折りたたみ可能な「仕事」と「個人」のフォルダー グループにサーバーが整理されて表示。",
      "スマートフォンの SSH 端末。https:// の URL がタップ可能なリンクとして下線付きで表示。",
      "Android スマートフォン上の Zellij マネージャー。セッション、タブ、ペインを一覧表示し、アタッチ、名前変更、強制終了、フォーカスのボタンを備える。",
      "スマートフォンの tmux マネージャー。tmux のセッション、ウィンドウ、ペインを一覧表示し、アタッチ、名前変更、切り替えのボタンを備える。",
      "スマートフォンのプラグイン画面。Tailscale、WireGuard、VS Code を含むインストール可能なプラグイン カタログを表示。",
      "スマートフォンの AI Chat プラグイン。リモートサーバー上でローカル稼働する llama3.2 モデルからの返信を SSH 経由でストリーミング表示。",
      "スマートフォンのサーバー追加ダイアログ。トランスポートを Eternal Terminal に設定し、ネットワーク切断を乗り越えてセッションを維持。"
    ],
    galleryIosAlts: [
      "iPhone 上の Mobile SSH 接続フォーム。サーバー、認証、フォルダー、トランスポートの各フィールドを表示。",
      "iPhone 上の保存済みサーバー画面。Production と Staging のグループに整理され、サーバー検索付き。",
      "iPhone 上のライブ SSH 端末。tmux ステータスバーと下部の拡張キーバー付き。",
      "iPhone 上のグリッドで 2 つの SSH セッションを横並びに表示。タップでフォーカスできるペイン付き。",
      "iPhone 上のファイル転送画面。マイフォンとリモートホストのパネルと、完了した転送ログを表示。",
      "iPhone 上の鍵認証画面。端末上で生成した Ed25519 鍵とコピー可能な公開鍵を表示。",
      "iPhone 上の tmux マネージャー。セッションとウィンドウを一覧表示し、アタッチ、名前変更、強制終了の操作を備える — ベルが入力待ちのエージェントを示す。",
      "iPhone 上の SSH 端末。tmux ウィンドウにアタッチし、リモート エディター内のコードを表示。",
      "iPhone 上のプラグイン カタログ。Tailscale、WireGuard、VS Code、AI Chat、Open WebUI をインストール可能。",
      "iPhone 上の接続フォーム。トランスポートを Eternal Terminal に設定し、ネットワーク切断を乗り越えてセッションを維持。",
      "iPhone 上のエージェント アラート設定。バイブレーション、音、イヤホンのみの各トグルを表示。",
      "iPhone 上の Mobile SSH ホーム画面。ワンタップで再接続できる「最近」の一覧が、サーバー、認証情報、ログ、設定、バージョン情報、プラグインのタイルの上に表示されている。"
    ],
    compareHead: "Termux や Termius の中での立ち位置",
    compareIntro:
      "Mobile SSH は意図的に狭い範囲に絞られています。完全な Linux 環境でも、クロスプラットフォームのチーム用ボルトでもありません。モバイル ユーザーが最もよく使うセッション操作にすばやくアクセスできる、Android と iOS 向けのローカルな SSH／SFTP ツールです。",
    compareGuideTitle: "比較ガイド",
    compareGuideText: "スマホやタブレットで Mobile SSH、Termux、Termius のどれを選ぶか。",
    privacyTitle: "プライバシーポリシー",
    privacyText: "接続データのうちどれが端末にローカル保存され、何がサーバーに送られるかを確認します。"
  },
  features: {
    metaTitle: "機能 | Mobile SSH",
    metaDescription:
      "Android と iOS の SSH：ターミナル、Eternal Terminal、tmux マネージャー、SFTP、秘密鍵、ポート転送、プラグインに関する Mobile SSH の主な機能。",
    eyebrow: "機能一覧",
    h1: "Mobile SSH の機能",
    intro:
      "Mobile SSH は Android と iOS の端末から直接 SSH を使うために作られています。端末を開き、生かし続け、ファイルを動かし、サーバーを保存し、モバイルの中断からすばやく復帰します。",
    groups: [
      {
        title: "プラットフォーム",
        items: [
          "Android 8.0 以降 — 現在は Google Play のクローズド テストです。参加リンクをモバイル ブラウザーで開いてから、Play でインストールしてください",
          "iPhone と iPad の iOS 16 以降 — TestFlight のパブリック ベータに参加",
          "暗号化バックアップは相互に利用可能：一方のプラットフォームで書き出し、もう一方で取り込み"
        ]
      },
      {
        title: "接続",
        items: [
          "パスワード認証と秘密鍵認証",
          "Android では Ed25519、ECDSA（P-256/384/521）、RSA の秘密鍵に対応。iOS では Ed25519 と ECDSA。どちらのプラットフォームもパスフレーズで暗号化された鍵を開けます",
          "ホスト、ポート、ユーザー名、認証情報、秘密鍵、トンネル設定を含む保存済みサーバープロファイル — プロファイルを複製すると、その設定を新しいサーバーに引き継げる",
          "サーバーに名前を付けると、一覧にはアドレスの代わりにその名前が表示される — 2 つの行が見分けにくくなるときはアドレスが戻ってくる",
          "名前、ホスト、ポート、認証情報、あるいは代替アドレスのいずれでも保存済みサーバーを検索",
          "同じマシンに 2 つの保存行から接続するとアプリが気づく — ホスト鍵のフィンガープリントを照合し、複数アドレスを持つ 1 つのサーバーへの統合を提案する",
          "検索優先の「セッション追加」フロー：専用の検索ページで保存済みサーバーを選んでワンタップ接続",
          "保存済みサーバーごとに複数のアドレスを登録して LAN／VPN のローミングに対応 — 順番に接続を試み、前回つながったアドレスを最初に試行。ネットワーク変更時には再接続が働く",
          "サーバー設定で選べる再利用可能な認証情報レコード",
          "作業の再開を軸にしたホーム画面：いま生きている接続と、サーバーで待っている tmux セッション — 後者は保存済みスナップショットから描かれるためネットワークがなくても一覧でき、各行には取得からの経過時間が付く。iOS には「最近」一覧もある",
          "IPv6 に一貫対応：アドレス欄では角かっこ付きリテラル（ポートは任意で付加可能）、ポート転送ルールでは角かっこ付きの IPv6 宛先を使える",
          "成功と失敗のログイン履歴。実際に接続したアドレスと、失敗時はその理由も記録",
          "Teleport プロキシ トランスポート（実験的、Android）：ユーザー名、パスワード、OTP でログインするか、Teleport の設定または identity ファイルをインポートし、クラスターのノードを閲覧して、ターミナル、SFTP、tmux、プラグインをプロキシ トンネル経由で実行"
        ]
      },
      {
        title: "ターミナル",
        items: [
          "VT100/xterm-256color 風のターミナル動作。24-bit トゥルーカラーとイタリックに対応し、シェルには TERM=xterm-256color と COLORTERM=truecolor を通知",
          "スクロールバック バッファは Android と iOS で 1,000／5,000／10,000／50,000 行から選択（既定は 5,000 行）",
          "ターミナル内検索 — スクロールバックと表示中の画面を検索し、一致箇所を移動（Android と iOS）",
          "シェル統合（OSC 133）：プロンプト間を移動し、コマンドの出力をまるごと選択 — 直前の 1 件だけでなく 300 行前のビルド エラーも — さらに長時間実行コマンドの完了時にアラート（Android と iOS）",
          "Kitty グラフィックス プロトコルによるターミナル内のインライン画像。ピンチ ズームや折り返しの変化でも消えずに残る（Android と iOS）",
          "ブロック、点字、六分割のモザイク グリフをアプリ自身が描画するため、chafa、timg、ANSI アートが空の四角にならず、ぴったりと敷き詰められる（Android）",
          "マウス トラッキングを使う TUI では、タップがそのままクリックになる — htop、vim、ペイン選択をタッチで操作（Android）",
          "ペインのヘッダーには、tmux への問い合わせやシェルからの OSC 7 通知で得た、そのペインの実際の作業ディレクトリを表示（Android）",
          "ESC、TAB、CTRL、矢印、Home、End、PgUp、PgDn、キーボード切替からなる 13 キーの拡張キーバー。横スクロールではなく 2 段目に折り返し、収まらない分はオーバーフロー メニューにまとめるので、画面外に隠れるキーはない",
          "Android と iOS でキーバーをカスタマイズ：F1〜F12、Ctrl の組み合わせ、記号など約 45 種のプリセット パレットから追加でき、削除・並べ替え・非表示、独自のエスケープシーケンス キーの定義、既定値へのリセットをライブ プレビュー付きで実行",
          "タップでフォーカス、任意で「タップでキーボードを表示」、コピー／全コピー",
          "ピンチで文字サイズ変更（リモート端末リサイズ付き）",
          "ペインのダブルタップでフルスクリーン",
          "端末テキスト選択（コピー、共有、すべて選択）— 長押しで単語を選択し、コピー後も選択が保持されるため、共有や再コピーができる",
          "OSC 52 クリップボード — リモートの tmux や vim セッションからテキストをスマホのクリップボードへ直接コピー（Android と iOS）",
          "ネイティブなパススルーのキーボード入力 — 自動修正がシェルと衝突せず、ソフトキーボードの音声入力も引き続き利用可能",
          "Android と iOS での外付けおよび Bluetooth キーボード対応（矢印キー、ファンクションキー、Ctrl／Alt の組み合わせを含む）",
          "ブラケットペーストにより、複数行のクリップボード内容が自動実行されない",
          "内蔵の Nerd Font が、システム フォントでは空の四角として表示されてしまう powerline、starship、devicon、Material Design のアイコン グリフを Android と iOS で描画",
          "ワイド CJK、絵文字、結合文字を Android と iOS で正しく計測・描画。書記素クラスタやゼロ幅接合子にも対応",
          "設定可能なターミナル フォント（システム等幅、JetBrains Mono、Source Code Pro）と ANSI カラースキーム（Solarized、Gruvbox、Dracula、Nord）を Android と iOS で提供し、開いているペインに即時反映",
          "設定にはピンチ ズームと併用できるターミナルの文字サイズ スライダーがあり、アプリのテーマも System／Light／Dark から選べる"
        ]
      },
      {
        title: "セッション",
        items: [
          "同時最大 8 つの SSH セッション",
          "アクティブセッションのグリッド表示",
          "バックグラウンドや画面ロックへの耐性：Android ではフォアグラウンド サービスが、アプリをスワイプで閉じたあともシェルとエージェントを動かし続ける。iOS では tmux 自動アタッチがシェルを再アタッチ",
          "Keepalive と指数バックオフ付きの再接続 — 試行は最大 10 回。すでに離れたネットワークでの失敗は、この上限に数えない",
          "Wi-Fi、モバイル回線、VPN を切り替えると、死んだ経路のタイムアウトを待たずに即座に接続し直し、すでにバックオフ中のセッションも使えるネットワークが現れた瞬間に再試行する",
          "応答が静かに途絶えたサーバー — サスペンドされた VM、固まった踏み台ホストなど — を、返ってこない keepalive から検知して再接続。入力が黙って飲み込まれることはない（iOS）",
          "スタート画面からの「アクティブセッション」入口。進行中の通知にセッション一覧を表示 — タップで開く",
          "tmux コマンド追跡と中断した作業向けの reattach ヒント。接続時に何へアタッチするかはサーバーごとに選択可能：自動判別、なし、tmux、herdr、Zellij（Android）",
          "エージェントはターミナル経由で自ら報告するため、どのエージェントが、どのツールを実行し、あなたの応答待ちかどうかをアプリが把握する — ペインは琥珀色になり、ヘッダーには「claude · needs you」と表示され、ツールバーのバッジが待機中の数を数える",
          "「エージェント」一覧からワンタップでエージェントの質問に応答。返答は別のチャネルで送られるため、画面に表示中の内容に打ち込まれることはない",
          "エージェント フックはアプリ内からサーバーへ導入できる — 特定ベンダー向けの統合ではなく、どのエージェントからでも呼び出せる小さなシェル スクリプト",
          "Eternal Terminal (ET) トランスポート：ネットワーク切断、スリープ、IP 変更を乗り越えるセッションを実現。SSH 経由のオプション自動 etserver セットアップ付き",
          "Tmux マネージャー：セッション、ウィンドウ、ペインを一覧表示して切り替え — アタッチ、名前変更、作成、分割、ズーム、強制終了が可能。名前または日付でソートでき、入力待ちのエージェントには 🔔 が付く",
          "herdr と Zellij のマネージャーは Android と iOS の両方で利用でき、それぞれのセッション、タブ、ペインに同じだけ手が届く — ツールバーのアイコンは、そのプログラムがサーバー上で見つかったときだけ表示される"
        ]
      },
      {
        title: "ファイルとトンネル",
        items: [
          "ローカルとリモートの二画面 SFTP ブラウザ。すべての転送を表示してスクロールできる転送ログ付き",
          "アップロード／ダウンロードのキュー。Android では他のアプリから実行中のセッションへファイルを共有すると、そのリモート パスがプロンプトに入力される",
          "スマホとリモートホスト間でのフォルダーの再帰的なアップロードとダウンロード",
          "リモートの名前変更、削除、作成、編集、.tar.gz への圧縮、権限変更（chmod／chown）、詳細表示",
          "ダウンロードしたファイルは両プラットフォームで別のアプリで開ける — iOS ではダウンロードがファイル アプリの「この iPhone 内」にも表示される",
          "Android では、ファイル転送はその tmux セッションが最後に作業していた場所から開き、ペインのヘッダーにセッション名を表示。記憶がない場合は、そのホストでよく使うディレクトリにフォールバックする",
          "名前または日付による並び替え（ホスト単位で記憶）と、最近使ったリモート パスへの復帰",
          "ファイル サイズは二進接頭辞で表示され、隣のタブのターミナルで ls -h が示す値と一致する",
          "サーバープロファイルに保存され、接続時に自動で立ち上がるローカル ポートフォワード",
          "アプリ全体とファイル ブラウザがシステムのライト／ダーク テーマに追従 — Android と iOS で System／Light／Dark から選択"
        ]
      },
      {
        title: "ローカライズ",
        items: [
          "UI 翻訳：アラビア語、ベンガル語、中国語（簡体・繁体）、英語、フランス語、ドイツ語、ヒンディー語、インドネシア語、日本語、マラーティー語、ポルトガル語、ロシア語、スペイン語、タミル語、テルグ語、トルコ語、ウルドゥー語 — Android はこれにナイジェリアン ピジンとエジプト アラビア語を加えた 20 言語、iOS は 18 言語",
          "既定ではシステム言語に追従。端末とは別の言語でアプリを使いたい場合は、設定に言語ピッカーがある"
        ]
      },
      {
        title: "鍵とバックアップ",
        items: [
          "端末上で新しい Ed25519 または ECDSA 鍵を生成（Android では RSA も。パスフレーズは任意）",
          "生成した公開鍵をコピー・共有・保存して、サーバーの authorized_keys に追加",
          "保存済みのサーバーと認証情報をバックアップファイルに書き出し — すべてでも、必要な行だけチェックしてでも可能。フォルダーのヘッダーをタップすればそのフォルダー全体が選ばれる",
          "任意のパスフレーズでバックアップを暗号化。インポートはマージまたは置換",
          "暗号化しないバックアップはパスワードや鍵を平文で保存します。ファイルを保護するか削除してください"
        ]
      },
      {
        title: "セキュリティ",
        items: [
          "セキュア スクリーン：Android ではスクリーンショットと画面録画をブロックし、最近のアプリのサムネイルからアプリを隠す。iOS ではアプリ切替時のプレビューを空白にし、画面録画とミラーリングをブロック（iOS では手動のスクリーンショットはブロックできない） — パスワード、鍵、トークンが画面に表示されているとき向けのオプトイン設定",
          "保存済みのサーバー、認証情報、鍵は端末内に留まる — シークレットは Android の Keystore と iOS の Keychain に保管され、クラウド アカウントや同期は不要",
          "使用状況分析は匿名のもののみ — サーバー、認証情報、コマンド、ファイルの内容を送ることは一切ない。Android には設定にオフにするスイッチがあるが、iOS にはまだない"
        ]
      },
      {
        title: "プラグイン",
        items: [
          "プラグインを閲覧・インストール・実行して Mobile SSH を拡張",
          "プラグインは公開カタログからオンデマンドでダウンロードされ、SHA-256 で検証されてアプリ専用ストレージに保存される",
          "プラグインは必要なもの（SSH コマンド、トンネル、ストレージ）を宣言し、宣言していない操作はアプリが拒否する",
          "プラグインがサーバー上で何かを設定するときは、実行前に実際のコマンドが提示され、承認してから走る",
          "カスタムまたはプライベートなカタログ ソースを設定できるほか、自分のサーバー上のフォルダーからインストールすることも可能"
        ]
      }
    ],
    security:
      "セキュリティ注記：現行のアプリは保存済みのサーバーと認証情報を端末にローカル保存します（iOS ではシークレットはシステムの Keychain に保管）。クラウド同期は提供しません。強固な画面ロックで端末を保護し、共有端末では認証情報を保存しないでください。"
  },
  compare: {
    metaTitle: "モバイルの Mobile SSH／Termux／Termius",
    metaDescription:
      "Android と iOS の SSH ワークフローにおける Mobile SSH、Termux、Termius のバランスの取れた比較。",
    eyebrow: "モバイルの SSH 選択肢",
    h1: "Mobile SSH／Termux／Termius",
    intro:
      "これらは SSH の周りで重なりますが、目的は異なります。Mobile SSH は Android と iOS に絞った SSH／SFTP クライアント、Termux は Android 専用の Linux 環境、Termius はアカウント基盤の生産性機能を備えたクロスプラットフォーム SSH クライアントです。",
    columns: {
      need: "目的",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "主な用途",
        mobileSsh: "Android と iOS 向けの SSH、SFTP、ローカル トンネル、端末の専用クライアント。",
        termux: "APT パッケージを使う Android の端末エミュレーター兼 Linux 環境。",
        termius: "Android、iOS、デスクトップ、Web 寄りのチーム作業に対応する最新の SSH クライアント。"
      },
      {
        need: "セットアップの形",
        mobileSsh: "ホストを入力するかサーバープロファイルを保存し、直接接続。",
        termux: "OpenSSH などのパッケージを入れ、シェルを設定し、Linux ライクなコマンドラインで作業。",
        termius: "Termius のアプリ／アカウントモデルでホスト、鍵、スニペット、ボルト項目を作成または同期。"
      },
      {
        need: "モバイルの端末操作",
        mobileSsh: "拡張キーバー、グリッド セッション、フルスクリーン ペイン、ピンチ ズーム、コピー／共有付き選択、tmux に配慮したスクロール — 両プラットフォームでのネイティブなパススルー入力と外付けキーボード対応付き。",
        termux: "強力な端末環境。動作は入れたツールと設定次第。",
        termius: "モバイル キーボード アドオン、ジェスチャー、タブ、自動補完、スニペット、洗練された端末 UX。"
      },
      {
        need: "ファイル転送",
        mobileSsh: "アクティブな SSH セッションに紐づく内蔵の二画面 SFTP 転送。",
        termux: "scp、sftp、rsync などのコマンドや入れたファイル ユーティリティを使用。",
        termius: "内蔵の SFTP とホスト／鍵管理機能。"
      },
      {
        need: "マルチセッション",
        mobileSsh: "グリッドで同時最大 8 つの SSH セッション。",
        termux: "Termux 内またはリモート シェルで tmux などの多重化を使用。",
        termius: "プラットフォームとプランに応じてタブやスプリットビューが利用可能。"
      },
      {
        need: "データモデル",
        mobileSsh: "サーバー、認証情報、履歴、設定、ログはすべて端末ローカル保存。",
        termux: "Termux のアプリ環境内の Linux ライクなファイルシステムとパッケージ。",
        termius: "ホスト、鍵、スニペット、転送ルール、known hosts、チーム共有のための暗号化ボルト。"
      },
      {
        need: "向いている場面",
        mobileSsh: "Android または iOS でサーバーに接続し、ファイルを転送し、セッションを生かし続けたいときの軽量アプリ。",
        termux: "Android 上で本格的なコマンドライン環境が必要で、パッケージの導入や設定に慣れている人向け。",
        termius: "端末をまたいだ同期、洗練された生産性機能、ボルト、コラボレーションが必要な人向け。"
      }
    ],
    cards: [
      {
        title: "Mobile SSH を選ぶとき",
        body: "完全な Linux 環境やクラウド同期アカウントを構築せずに、スマホやタブレット — Android でも iOS でも — から直接 SSH したい場合。保存済みサーバー、SFTP、tmux セッション、素早いローカル トンネルに特に向いています。"
      },
      {
        title: "Termux を選ぶとき",
        body: "Android 端末上で直接、パッケージ管理、シェル、コンパイラ、スクリプティング、rsync、curl、Git、Python、Node.js などの Linux ライクなツールが必要な場合。"
      },
      {
        title: "Termius を選ぶとき",
        body: "暗号化ボルトの同期、チーム共有、キーチェーン管理、スニペット、複数端末で一貫したアプリを備えた商用のクロスプラットフォーム SSH ワークスペースが必要な場合。"
      }
    ],
    featureHeading: "機能の比較",
    featureRows: [
      { category: "接続", feature: "Android と iOS で動作",                       mobile: "yes",    termux: "Android のみ", termius: "yes" },
      { category: "接続", feature: "保存済みサーバープロファイル",               mobile: "yes",    termux: "ssh config 経由", termius: "yes" },
      { category: "接続", feature: "保存済みサーバーの検索",                     mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "接続", feature: "サーバー フォルダー／グループ",              mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "接続", feature: "検索優先の「セッション追加」ピッカー",       mobile: "Android", termux: "no",          termius: "no" },
      { category: "接続", feature: "サーバーごとに複数アドレス（LAN/VPN ローミング）", mobile: "yes", termux: "no",           termius: "no" },
      { category: "接続", feature: "再利用可能な認証情報レコード",               mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "接続", feature: "ホーム画面に再開先を一覧表示",               mobile: "yes",    termux: "no",           termius: "一部対応" },
      { category: "接続", feature: "オフラインでの tmux セッション一覧（接続不要）", mobile: "yes", termux: "no",         termius: "no" },
      { category: "接続", feature: "アドレスの代わりに表示されるサーバー名",     mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "接続", feature: "ログイン履歴",                               mobile: "yes",    termux: "no",           termius: "no" },
      { category: "接続", feature: "Teleport プロキシ トランスポート（実験的）", mobile: "Android", termux: "no",          termius: "no" },
      { category: "接続", feature: "IPv6 のホストと転送先",                      mobile: "yes",    termux: "yes",          termius: "一部対応" },
      { category: "ターミナル", feature: "SSH ターミナル",                       mobile: "yes",    termux: "OpenSSH 経由",  termius: "yes" },
      { category: "ターミナル", feature: "xterm-256color エミュレーション",      mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "ターミナル", feature: "スクロールバックを設定可能（1,000〜50,000 行）", mobile: "yes", termux: "設定可能", termius: "一部対応" },
      { category: "ターミナル", feature: "ターミナル内検索（スクロールバック）", mobile: "yes",    termux: "no",           termius: "no" },
      { category: "ターミナル", feature: "拡張キーバー（ESC/TAB/CTRL/…）",      mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "ターミナル", feature: "ピンチで文字サイズ変更",               mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "ターミナル", feature: "ペインをダブルタップでフルスクリーン", mobile: "yes",    termux: "no",           termius: "no" },
      { category: "ターミナル", feature: "端末出力内のタップ可能な URL",         mobile: "yes",    termux: "一部対応",      termius: "yes" },
      { category: "ターミナル", feature: "テキスト選択：コピー／共有／全選択",   mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "ターミナル", feature: "ハードウェア／Bluetooth キーボード対応", mobile: "yes",   termux: "yes",          termius: "yes" },
      { category: "ターミナル", feature: "シェル統合（OSC 133）",                 mobile: "yes",    termux: "no",           termius: "no" },
      { category: "ターミナル", feature: "インライン画像（Kitty グラフィックス）", mobile: "yes",    termux: "no",           termius: "no" },
      { category: "ターミナル", feature: "アプリが描画するモザイク グリフ（chafa、ANSI アート）", mobile: "Android", termux: "フォント依存", termius: "no" },
      { category: "ターミナル", feature: "マウス モードの TUI でタップがクリックになる", mobile: "Android", termux: "yes",     termius: "no" },
      { category: "ターミナル", feature: "Nerd Font／powerline グリフの描画",     mobile: "yes",     termux: "設定可能",     termius: "一部対応" },
      { category: "セッション", feature: "複数の SSH 同時セッション",            mobile: "最大 8", termux: "最大 8",      termius: "yes" },
      { category: "セッション", feature: "グリッド ペイン レイアウト",           mobile: "yes",    termux: "tmux 経由",     termius: "タブ" },
      { category: "セッション", feature: "tmux に配慮したスクロール",            mobile: "yes",    termux: "yes",          termius: "no" },
      { category: "セッション", feature: "再接続時の tmux reattach ヒント",     mobile: "yes",    termux: "no",           termius: "no" },
      { category: "セッション", feature: "エージェント アラート（Claude Code／Codex）", mobile: "yes", termux: "no",      termius: "no" },
      { category: "セッション", feature: "セッション一覧を表示する進行中の通知", mobile: "Android", termux: "一部対応",     termius: "no" },
      { category: "セッション", feature: "フォアグラウンドサービスとウェイクロック", mobile: "Android", termux: "yes",     termius: "一部対応" },
      { category: "セッション", feature: "バックオフ付き自動再接続",             mobile: "yes",    termux: "autossh 経由",  termius: "yes" },
      { category: "ファイル", feature: "内蔵 SFTP ファイル転送 UI",             mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "ファイル", feature: "二画面ローカル＋リモート ブラウザ",      mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "ファイル", feature: "アップロード／ダウンロード キュー",      mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "ファイル", feature: "リモート名前変更／削除／作成",           mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "ファイル", feature: "リモート ファイル権限の表示",            mobile: "yes",    termux: "no",           termius: "no" },
      { category: "ファイル", feature: "ホスト単位で記憶する名前／日付並び替え", mobile: "yes",    termux: "no",           termius: "一部対応" },
      { category: "トンネル", feature: "ローカル ポートフォワード",              mobile: "yes",    termux: "CLI 経由",      termius: "yes" },
      { category: "トンネル", feature: "サーバープロファイルに保存するトンネル", mobile: "yes",    termux: "ssh config 経由", termius: "yes" },
      { category: "トンネル", feature: "ランタイム トンネル追加／削除",          mobile: "no",     termux: "no",           termius: "yes" },
      { category: "鍵", feature: "パスワード認証",                              mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "鍵", feature: "秘密鍵認証",                                  mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "鍵", feature: "端末上での鍵の生成",                          mobile: "yes",    termux: "ssh-keygen 経由", termius: "yes" },
      { category: "鍵", feature: "生成した公開鍵の共有／保存",                  mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "バックアップ", feature: "サーバー バックアップのエクスポート／インポート", mobile: "yes", termux: "termux-backup 経由", termius: "Pro クラウド保管庫" },
      { category: "バックアップ", feature: "暗号化ローカル バックアップ ファイル", mobile: "yes",  termux: "no",           termius: "no" },
      { category: "バックアップ", feature: "アカウント不要",                     mobile: "yes",    termux: "yes",          termius: "一部対応" },
      { category: "プライバシーとコスト", feature: "Pro ペイウォールなし",       mobile: "yes",    termux: "yes",          termius: "一部対応" },
      { category: "プライバシーとコスト", feature: "広告なし",                   mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "プライバシーとコスト", feature: "分析のオプトアウト",         mobile: "Android", termux: "分析なし",     termius: "no" },
      { category: "プライバシーとコスト", feature: "ローカルのみのデータ（クラウド同期なし）", mobile: "yes", termux: "yes", termius: "一部対応" },
      { category: "プライバシーとコスト", feature: "セキュア スクリーン（画面キャプチャをブロック）", mobile: "yes",  termux: "no", termius: "no" },
      { category: "セッション", feature: "Eternal Terminal（耐障害性セッション）",    mobile: "yes",    termux: "CLI 経由",      termius: "no" },
      { category: "セッション", feature: "SSH 経由の etserver 自動インストール",      mobile: "yes",    termux: "no",            termius: "no" },
      { category: "セッション", feature: "tmux セッション マネージャー",              mobile: "yes",    termux: "CLI 経由",      termius: "no" },
      { category: "セッション", feature: "herdr と Zellij のセッション マネージャー",  mobile: "yes"    , termux: "CLI 経由",     termius: "no" },
      { category: "セッション", feature: "停止中のエージェントへワンタップで応答",     mobile: "yes",    termux: "no",            termius: "no" },
      { category: "プラグイン", feature: "プラグイン サポート",                     mobile: "yes",    termux: "パッケージ経由", termius: "no" },
      { category: "プラグイン", feature: "オンデマンド インストールのプラグイン カタログ", mobile: "yes", termux: "no",           termius: "no" }
    ],
    agentAppsHeading: "Mobile SSH と AI コーディング エージェント アプリの比較",
    agentAppsIntro:
      "スマホからコーディング エージェント — Claude Code、Codex、そして類似のもの — を操作することだけを目的とした、急成長中のカテゴリーのアプリが登場しています。一部はサードパーティの SSH または中継アプリ（Onepilot、Happy、Omnara）です。OpenAI と Anthropic も現在はこれをネイティブに提供しており、Codex は ChatGPT アプリ内で、Claude Code は Claude アプリ内で動作し、いずれもベンダー自身のクラウドで実行されます。Mobile SSH はそれらすべてと重なる部分があり — SSH 経由でそうしたエージェントを実行し、対応が必要になったときに通知を受け取れます — が、逆の側からこの課題に取り組みます。まず汎用の直接 SSH クライアントであり、エージェントのコンパニオンはその次です。",
    agentAppsRows: [
      { feature: "スマホからコーディング エージェントを実行",             mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "任意のコーディング エージェントに対応（単一ベンダーに限らない）", mobile: "yes", onepilot: "yes", happy: "Claude Code", omnara: "yes",     chatgpt: "Codex のみ",    claude: "Claude Code のみ" },
      { feature: "自分のマシンで実行（ベンダーのクラウドではない）",       mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes",     chatgpt: "no",           claude: "一部対応" },
      { feature: "ダイレクト SSH — クラウド中継なし",                     mobile: "yes", onepilot: "yes",      happy: "no",         omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "汎用 SSH ターミナル（任意のコマンドを実行）",           mobile: "yes", onepilot: "yes",      happy: "no",         omnara: "一部対応", chatgpt: "no",           claude: "no" },
      { feature: "SFTP ファイル転送",                                     mobile: "yes", onepilot: "一部対応",  happy: "no",         omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "ローカル ポートフォワード",                             mobile: "yes", onepilot: "yes",      happy: "no",         omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "tmux セッション マネージャー",                          mobile: "yes", onepilot: "一部対応",  happy: "no",         omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "自分で入れたエージェントで動作",                        mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes",     chatgpt: "no",           claude: "no" },
      { feature: "エージェント アラート（エージェントが入力を必要とするときにプッシュ）", mobile: "yes", onepilot: "yes", happy: "yes", omnara: "yes", chatgpt: "yes", claude: "yes" },
      { feature: "エージェントのプロンプトをワンタップで承認／拒否",       mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "サーバーや SSH のセットアップ不要",                     mobile: "no",  onepilot: "no",       happy: "一部対応",    omnara: "一部対応", chatgpt: "yes",          claude: "yes" },
      { feature: "Android と iOS",                                        mobile: "yes", onepilot: "iOS のみ", happy: "yes",        omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "アカウント不要",                                        mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "Pro ペイウォールなし（全機能無料）",                    mobile: "yes", onepilot: "no",       happy: "no",         omnara: "no",      chatgpt: "無料プランあり", claude: "no" },
      { feature: "オープンソース",                                        mobile: "Apache 2.0",  onepilot: "no",       happy: "MIT",        omnara: "Apache",  chatgpt: "no",           claude: "no" }
    ],
    agentAppsNote:
      "ネイティブの ChatGPT アプリと Claude アプリは、セットアップ不要で単一ベンダーのエージェントを実行する最もスムーズな方法です — サーバーは不要で、アカウントだけで済みます — さらに洗練されたワンタップの承認／拒否画面も備えています。ただし難点として、これらは自社のモデルを自社のクラウドでのみ実行し、汎用ターミナルも、SFTP やトンネルも、自分のマシンの持ち込みもできず、有料またはアカウント必須です。Onepilot、Happy、Omnara は、あなたが管理するハードウェア上にエージェントを置きます（Onepilot はダイレクト SSH 経由、Happy と Omnara はクラウド中継経由で、Omnara はアカウントが必要）。Mobile SSH はアカウントやベンダーの中継なしで自分のサーバーに直接接続し、完全なターミナル、SFTP、ポートフォワードとともに任意のエージェントを実行でき、すべての機能が無料です。エージェントのプロンプトへの応答も、いまでは他のアプリと同じ方式になりました — すべての接続を横断してエージェントを並べる「エージェント」一覧があり、選択肢ごとにボタンが並びます — 違うのは、エージェントが動くのはあなたのマシンで、返答はあなた自身の SSH 接続を通って届くという点です。トレードオフは以前から変わりません。サーバーは自分で用意する必要があり、エージェント フックを一度そこにインストールしておく必要があります。",
  },
  privacy: {
    metaTitle: "プライバシーポリシー | Mobile SSH",
    metaDescription:
      "ローカル保存、SSH データ送信、ファイル転送、ログ、Android と iOS のアプリ パーミッションを含む Mobile SSH のプライバシーポリシー。",
    eyebrow: "プライバシー",
    h1: "プライバシーポリシー",
    intro:
      "Mobile SSH は Android と iOS 向けのローカルな SSH クライアントとして設計されています。Mobile SSH アカウントは不要で、Mobile SSH のクラウド同期サービスは提供しません。",
    sections: [
      {
        heading: "端末に保存される情報",
        body: "アプリのデータを保存することを選んだ場合、Mobile SSH はそれを端末にローカル保存します。シークレットは iOS ではシステムの Keychain に保管され、Android では端末外に持ち出せない Android Keystore 内の鍵で暗号化されます。また、アプリは Android のクラウド バックアップから除外されています。保存されるものには、サーバープロファイル、ユーザー名、ポート、パスワード、秘密鍵、鍵のパスフレーズ、ポート転送ルール、最近のセッション、ログイン試行履歴、ファイル転送のパス、並べ替え設定、tmux セッションのスナップショットと reattach ヒント、アプリ設定、デバッグ記録が有効な場合のデバッグログが含まれます。"
      },
      {
        heading: "ネットワーク経由で送信される情報",
        body: "Mobile SSH は SSH 認証データを、ユーザーが設定して接続するサーバーにのみ送信します。端末入出力、SFTP ファイルの内容、ローカル ポート転送のトラフィックは、ユーザーが選んだサーバーやリモート エンドポイントとの間でやり取りされます。Mobile SSH のアナリティクス、広告、テレメトリ、クラウド同期サービスにこれらのデータを送信することはありません。"
      },
      {
        heading: "ファイル転送とストレージ アクセス",
        body: "ファイル転送機能は、ファイルをアップロード／ダウンロードするために端末ローカルのストレージとリモートの SFTP ディレクトリを参照します。Mobile SSH は Android に対して包括的なストレージ権限を要求しません。システムのフォルダー ピッカーで 1 つのフォルダーを選ぶと、アプリはその中だけを読み書きできます。iOS では、ローカルのファイルや写真にはシステムのドキュメント ピッカーとフォト ピッカーを通じてアクセスします。"
      },
      {
        heading: "ログとトラブルシューティング",
        body: "ログイン履歴と任意のデバッグログはトラブルシューティングのためにローカル保存され、どちらも自分でオンにするまでは無効か空のままです。Android のデバッグ記録は、端末イベント、SSH データのサイズ、タッチ入力の診断、リサイズ イベント、トンネルのライフサイクル イベントを取得します。記録の開始前に、入力したすべてのキー（パスワードを含む）が記録される旨の警告が表示され、停止するとアーカイブが Downloads フォルダーに書き出されます。iOS はこれとは別の、より範囲の狭いログを記録します。接続を試みたアドレスとそれぞれの失敗理由、再接続とバックオフ、切断、ネットワークの変化、tmux コマンドとそのエラーです。デバッグログやアーカイブをサポートや他者に共有する前に内容を確認してください。"
      },
      { heading: "匿名の使用状況分析", body: "アプリの使われ方を把握して改善するため、Mobile SSH は当社に代わって処理を行うプライバシー重視の分析プロバイダー Aptabase に匿名の使用状況分析を送信します。対象は匿名のイベント（アプリの起動や利用機能など）と、アプリのバージョン、オペレーティング システムのバージョン、端末モデル、言語に限られます。定期的にリセットされるランダムなセッション識別子を使用し、あなたや端末には紐づきません。SSH サーバー、ホスト名、ユーザー名、パスワード、鍵、コマンド、ファイルの内容を含めることは一切ありません。データは暗号化された（HTTPS）接続で送信されます。分析は既定で有効です。Android では設定でいつでもオフにでき、オフのときは何も送信されません。一方、iOS アプリにはまだそのスイッチがないため、iOS ではアプリがインストールされている間、これらの匿名イベントが送信され続けます。iOS にもスイッチを追加する予定ですが、それまでは現状をありのままにこのページへ記載しておきます。" }
    ],
    permissionsHeading: "パーミッション",
    permissions: [
      { label: "インターネット", body: "SSH サーバーへの接続に必要です。" },
      { label: "Wake lock と Wi-Fi lock", body: "Android で、端末がスリープ中もアクティブな SSH セッションを維持するために使用されます。" },
      { label: "前面サービスと通知", body: "Android ではバックグラウンドでのアクティブ接続の処理に使用されます。iOS では通知はエージェント アラートに使用されます。" },
      { label: "ファイル アクセス", body: "Android ではシステムのピッカーでフォルダーごとに、iOS ではシステムのドキュメント ピッカーとフォト ピッカーを通じて許可されます。Mobile SSH はどちらのプラットフォームでも包括的なストレージ権限を要求しません。" }
    ],
    securityHeading: "セキュリティ上の責任",
    securityBody:
      "認証情報や秘密鍵を保存する場合は、強固な画面ロックで端末を保護してください。信頼できるサーバーにのみ接続してください。現行実装は、別建ての暗号化クラウド ボルトではなく、アプリのローカル ストレージ（および iOS の Keychain）を使用します。オプションのセキュア スクリーン設定は、シークレットが画面に表示されているときに保護を追加します。Android ではスクリーンショットと画面録画をブロックし、最近のアプリ表示からアプリを隠します。iOS ではアプリ切替時のプレビューを空白にし、画面録画とミラーリングをブロックします（iOS では手動のスクリーンショットはブロックできません）。",
    contactHeading: "お問い合わせ",
    contactBody: "サポート連絡先：[mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)。"
  },
  docsIndex: {
    metaTitle: "ドキュメント | Mobile SSH",
    metaDescription: "Android と iOS 向け Mobile SSH のエンドユーザー ドキュメント。",
    eyebrow: "ユーザー ガイド",
    h1: "Mobile SSH ドキュメント",
    intro:
      "Mobile SSH のインストール、接続、セッション管理、ファイル転送、ポート転送、トラブルシューティングの公開ガイドとしてこれらのページをご利用ください。",
    cards: [
      { slug: "getting-started",  title: "はじめに",               text: "インストール、アプリの起動、最初のサーバーへの接続、よく使うホストの保存。" },
      { slug: "terminal",         title: "ターミナル",             text: "ペイン、拡張キーバー、スクロール、コピー操作、tmux 動作、キーボード設定。" },
      { slug: "file-transfer",    title: "ファイル転送",           text: "端末とサーバーのファイル閲覧、アップロード、ダウンロード、並べ替え、リモート詳細の確認。" },
      { slug: "port-forwarding",  title: "ポート転送",             text: "ローカル トンネル文字列の記述、IPv6 宛先への転送、接続時の自動起動。" },
      { slug: "troubleshooting",  title: "トラブルシューティング", text: "接続、認証、キーボード、ストレージ、再接続の問題を解決。" }
    ]
  },
  docsNav: {
    home: "ドキュメント ホーム",
    gettingStarted: "はじめに",
    terminal: "ターミナル",
    fileTransfer: "ファイル転送",
    portForwarding: "ポート転送",
    troubleshooting: "トラブルシューティング"
  },
  about: {
    metaTitle: "情報 | Mobile SSH",
    metaDescription: "Mobile SSH について：Android・iOS 用 SSH クライアントのバージョン、作者、ライセンス、オープンソース表記。",
    eyebrow: "情報",
    h1: "Mobile SSH について",
    intro: "tmux、ポート転送、SFTP に対応するマルチセッション SSH クライアント。",
    appHeading: "アプリについて",
    versionLabel: "バージョン",
    authorLabel: "作者",
    authorValue: "Dmitry Kozlov",
    licenseLabel: "ライセンス",
    licenseValue: "Apache 2.0",
    websiteLabel: "ウェブサイト",
    privacyLabel: "プライバシーポリシー",
    privacyLinkText: "プライバシーポリシー",
    noticesHeading: "オープンソース表記",
    noticesIntro: "Mobile SSH は次のオープンソース ライブラリを使用しています。それぞれのライセンスに従って利用しています。",
    notices: [
      { name: "JSch (mwiede fork) — Android",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch" },
      { name: "JZlib (bundled in JSch) — Android",   license: "BSD 3-clause" },
      { name: "jBCrypt (bundled in JSch) — Android", license: "ISC" },
      { name: "Ed25519 / Ed448 Java — Android",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java" },
      { name: "StringFog — Android",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog" },
      { name: "SwiftNIO & SwiftNIO SSH — iOS",       license: "Apache 2.0", url: "https://github.com/apple/swift-nio-ssh" },
      { name: "Swift Crypto — iOS",                  license: "Apache 2.0", url: "https://github.com/apple/swift-crypto" }
    ],
    contactHeading: "お問い合わせ",
    contactBody: "サポート連絡先：[mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)。"
  }
};
