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
    discordCommunity: "Discord の Mobile SSH コミュニティ",
    beta: "ベータテスト",
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
      "Android・iOS 向け Mobile SSH：SSH ターミナル、踏み台ホスト、tmux・herdr・Zellij、SFTP、VNC デスクトップ、バックアップ。Android は VPN クライアントとセキュリティキーにも対応。",
    eyebrow: "Android・iOS 用 SSH クライアント",
    h1: "Mobile SSH",
    intro:
      "SSH ターミナル、tmux・herdr・Zellij の管理、SFTP、VNC デスクトップ、踏み台ホスト、ローカルトンネルをスマートフォンとタブレットで。Eternal Terminal は通信が途切れてもリモートシェルを維持します。Android は VPN クライアントと USB/NFC セキュリティキー認証にも対応しています。",
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
      { title: "キーボードの上のターミナル キー", text: "ESC、TAB、CTRL、矢印、Home、End、PgUp、PgDn の 13 キーを並べた追加キーの行。横スクロールではなく 2 段目に折り返すので、画面外に隠れるキーはありません。プリセット パレットから F1〜F12、Ctrl の組み合わせ、独自のエスケープ シーケンスを追加できます。" },
      { title: "コマンド不要のポートフォワーディング", text: "トンネルはサーバープロファイルに紐づき、接続と同時に自動で立ち上がります。" },
      { title: "ロックや回線切替に強い", text: "保存済みサーバーに複数のアドレス（自宅 LAN の IP と VPN の IP など）を登録しておくと、Mobile SSH は応答するアドレスへ接続し、前回つながったアドレスを最初に試し、ネットワークが変わった瞬間に再接続します。Android ではフォアグラウンド サービスとウェイクロックが画面オフ中もシェルを維持し、iOS では自動再接続と tmux 自動アタッチで中断したまさにその場所に戻れます。" },
      { title: "Eternal Terminal", text: "オプションの ET トランスポートがネットワーク切断、スリープ、IP 変更をまたいでリモートシェルを生き続けさせます。ホストに etserver がなくても、Mobile SSH が SSH 経由でインストールできます。" },
      { title: "プラグインで拡張", text: "公開カタログを閲覧し、必要なプラグインをオンデマンドでインストールして新しいワークフローを追加できます。各プラグインはダウンロード後に SHA-256 で検証され、アプリ専用ストレージに保存されます。" }
    ],
    sectionAHead: "モバイルでの SSH 作業を中心に設計",
    sectionAIntro:
      "Mobile SSH は管理者の定番ルートを短くします。サーバーを保存し、つなぎ、セッションを維持し、必要なときにファイルを動かし、すばやくアクティブなターミナルに戻れます。",
    features: [
      { title: "SSH ターミナル", text: "xterm-256color ターミナル。24-bit トゥルーカラー、イタリック、ターミナル内検索、OSC 133 シェル統合、ピンチで文字サイズ変更に対応。加えて Android と iOS では、設定可能なフォントとカラースキーム、Nerd Font の powerline／アイコン グリフに対応。" },
      { title: "マルチセッション グリッド", text: "リサイズ可能なグリッドで最大 8 つの SSH セッション。ペインをタップしてフォーカス、ダブルタップでフルスクリーン、ピンチで文字サイズ変更。" },
      { title: "タップ可能なリンク", text: "ターミナル出力内の URL に下線が引かれ、タップするだけでブラウザで開きます。コピーやアプリ切替は不要。" },
      { title: "サーバーのフォルダーと名前", text: "保存済みサーバーを折りたたみ可能なグループに整理でき、アドレスの代わりに表示される名前も付けられます。名前だけでは区別がつかないときはアドレスが戻るので、行が紛らわしくなりません。" },
      { title: "エージェント アラート", text: "エージェントはターミナル経由で自ら報告するため、どのエージェントが何で止まっているかをアプリが把握します。「エージェント」一覧からワンタップで応答でき、アラートは積み重ならず置き換わり、タップすれば鳴ったペインが開きます。" },
      { title: "秘密鍵", text: "パスワードまたは秘密鍵で認証し、端末上で Ed25519・ECDSA 鍵を生成できます。Android は RSA に加え、USB/NFC の FIDO2 セキュリティキーとサーバー別の SSH エージェント転送にも対応します。" },
      { title: "SFTP 転送", text: "アクティブな SSH セッションに紐づくデュアルペインのファイルブラウザ。アップロード・ダウンロードをキューに入れ、名前変更、削除、リモート権限の確認が可能。" },
      { title: "ポートフォワーディング", text: "ローカル トンネル設定をサーバープロファイルと一緒に保存すれば、接続時に自動で開きます — 新しいネットワークで再接続したあとも、手で組み直す必要はありません。" },
      { title: "再接続ワークフロー", text: "ネットワークが切り替わると、死んだ経路のタイムアウトを待たずにセッションが一斉に接続し直し、バックオフ中のセッションも使えるネットワークが現れた瞬間に目を覚まします。iOS では、応答が静かに途絶えたサーバーを検知して再接続します。" },
      { title: "バックアップと復元", text: "サーバー、認証情報、アプリ設定をバックアップ。パスフレーズによる暗号化と、統合・置換のプレビューを利用できます。Android は VPN プロファイルも含みます。現在の両アプリは共通形式を使い、プラットフォーム固有設定は対応する範囲で保持します。" },
      { title: "Eternal Terminal", text: "Eternal Terminal (ET) 経由で接続すると、ネットワーク切断、スリープ、IP 変更を乗り越えるセッションが実現します — SSH 経由のオプション自動 etserver セットアップ付き。" },
      { title: "マルチプレクサー マネージャー", text: "両プラットフォームで tmux・herdr・Zellij の管理画面からセッションの接続、名前変更、作成、分割、拡大、終了を操作できます。共通のマルチプレクサーボタンから利用可能な管理画面を開き、保存済みサーバーごとに接続時のアタッチ先を選べます。" },
      { title: "プラグイン", text: "プラグインを閲覧・検索し、カテゴリで絞り込んで必要な機能をインストールできます。ダウンロードは SHA-256 で検証され、アプリ専用領域に保存されます。" },
      {
        "title": "サーバーの身元確認と踏み台ホスト",
        "text": "両プラットフォームで保存済みの踏み台経由で接続できます。認証前にホスト鍵を確認し、変更された鍵は遮断します。Android は新規鍵を自動保存するか事前確認するかを選べ、iOS は未知の鍵の確認を求めます。"
      },
      {
        "title": "リモートデスクトップ",
        "text": "Android・iOS で SSH 経由の VNC デスクトップを開き、タッチ、キーボード、クリップボードを使えます。サーバーが対応していれば画面サイズも変更できます。"
      },
      {
        "title": "Android の VPN クライアント",
        "text": "ホーム画面から SSH VPN、ローカル SOCKS5 プロキシ、WireGuard、Shadowsocks、OpenVPN を管理できます。プロファイルを選んで開始し、Mobile SSH VPN のクイック設定タイルで停止・再開できます。"
      }
    ],
    multiHead: "ひとつの画面で複数のシェル",
    multiP1:
      "ターミナル ビューはグリッドで複数のアクティブな SSH セッションを保持できます。ペインをタップして入力、追加キーの行でターミナルを操作、ピンチで文字サイズ調整、ダブルタップでフルスクリーン フォーカス。",
    multiP2:
      "ホーム画面は「どこに戻れるか」に答えます — いま生きている接続と、保存済みサーバーで待っている tmux セッション。後者は保存済みのスナップショットから再構築されるため、ネットワークがまったくなくても一覧に現れます。",
    multiAlt:
      "スマートフォン上の Mobile SSH が 2 つのアクティブな SSH ターミナル セッションを横並びのスプリット ビューで表示。",
    sftpHead: "端末だけでは足りないときの SFTP",
    sftpBody:
      "ローカルとリモートのフォルダを閲覧し、転送をキューに追加。tmux セッションごとのリモートフォルダを記憶し、リモートファイルを別のアプリで開けます。両プラットフォームで共有されたファイルをターミナルに取り込め、iOS では「ファイル」で選んだフォルダも記憶できます。",
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
    videoIosAlt: "iOS のデモ：Mobile SSH を開いてライブの SSH ターミナル セッションに入り、ホーム画面に戻るまで。tmux マネージャー、設定、アプリのその他の画面も表示",
    muxHead: "セッションマネージャーごとに 1 本の動画",
    muxIntro:
      "概要動画では tmux・herdr・Zellij を紹介しています。こちらの長い録画では、両プラットフォームから実際のサーバーに接続し、セッション、ウィンドウ、タブ、ペインの操作を詳しく示します。",
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
    demoHead: "Android で撮影したもう 3 本",
    demoIntro:
      "これらの iOS 版はまだ撮れていません。サーバーは上のデモと同じライブ環境です: アプリを離れても生き続けるセッション、打ち込むのではなくスマートフォン上で作る鍵、そして自分の頭の中の分け方どおりにまとめたサーバー。",
    demoItems: [
      {
        title: "セッションはアプリより長生きする",
        text: "Android はフォアグラウンドサービスで接続を維持し、常駐通知にサーバー名と「すべて切断」を表示します。ログの表示中にアプリを離れても、動作中のセッションに戻れます。iOS のバックグラウンド実行は短時間に限られ、その後は再接続してマルチプレクサーに再アタッチします。",
        androidAlt:
          "Android のデモ: バックグラウンドで動き続けるセッション。ターミナルに流れるライブの HTTP ログ、通知権限のダイアログ、接続中のサーバー名と「すべて切断」を示す進行中の通知、そしてホーム画面へ抜けてから戻ると同じログがなお届き続けている様子。"
      },
      {
        title: "鍵は打ち込むのではなく、ここで作る",
        text: "スマートフォン上で Ed25519 鍵を生成します: ラベル、ユーザー名、任意のパスフレーズ。続いて現れるシートには、サーバーの authorized_keys に追加する公開鍵側が表示され、公開鍵・秘密鍵のどちらも共有または保存できます。",
        androidAlt:
          "Android のデモ: 鍵の生成。ラベル、ユーザー名、Ed25519 の鍵タイプ、パスフレーズを備えた「SSH 鍵を生成」ダイアログ、続いて鍵の共有または保存ができる公開鍵のシート。"
      },
      {
        title: "サーバーは自分で名前を付けたフォルダーに置く",
        text: "保存済みサーバーをフォルダーにまとめ、使っていないものは折りたたんでおけます。同じ動画の最後はターミナルで、コマンドが出力した URL は手で選択するものではなく、下線が付いてタップできるものになっています。",
        androidAlt:
          "Android のデモ: サーバーのフォルダー。名前を付けたフォルダーに整理され、展開・折りたたみができる保存済みサーバー、続いてコマンド出力中の URL に下線が付き、タップできるターミナル。"
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
    galleryAlts: [
      "Android スマートフォン上の Mobile SSH ホーム画面。「アクティブなセッション」バナーと、再開できる保存済みサーバーの「続きから」一覧が、サーバー、認証情報、設定、バージョン情報、プラグインのボタンの上に表示されている。",
      "サーバー追加ダイアログ（サーバー名、ホストとポート、追加アドレス、認証情報、秘密鍵、ポートフォワーディングのフィールド）。",
      "単一セッションの SSH ターミナル。セッションツールバーの下に、コーディングエージェントのパッチと成功したテスト実行が表示されている。",
      "スマートフォン上で 2 つの SSH セッションを横並びのスプリット ビューで表示。",
      "スマートフォン上で 4 つの SSH セッションをグリッドで表示。それぞれ別のサーバーに接続し、アクティブ ペインを強調。",
      "SFTP ファイル転送画面（マイフォンとリモートホストのパネル）。",
      "バージョン情報ダイアログ（バージョン、作者、ライセンス、サイト）。",
      "スマートフォンの「SSH 鍵を生成」ダイアログ。ラベル、ユーザー、鍵の種類、パスフレーズの各フィールドを表示。",
      "スマートフォンの「公開鍵」ダイアログ。生成された鍵とコピー・共有・保存のオプションを表示。",
      "保存済みサーバー画面。折りたたみ可能な「仕事」と「個人」のフォルダー グループにサーバーが整理されて表示。",
      "スマートフォンの SSH ターミナル。https:// の URL がタップ可能なリンクとして下線付きで表示。",
      "Android スマートフォン上の Zellij マネージャー。セッション、タブ、ペインを一覧表示し、アタッチ、名前変更、強制終了、フォーカスのボタンを備える。",
      "スマートフォンの tmux マネージャー。tmux のセッション、ウィンドウ、ペインを一覧表示し、アタッチ、名前変更、切り替えのボタンを備える。",
      "スマートフォンのプラグイン画面。Tailscale、WireGuard、Claude Code CLI を含むインストール可能なプラグイン カタログを表示。",
      "スマートフォンの AI Chat プラグイン。リモートサーバー上でローカル稼働する llama3.2 モデルからの返信を SSH 経由でストリーミング表示。",
      "スマートフォンのサーバー追加ダイアログ。トランスポートを Eternal Terminal に設定し、ネットワーク切断を乗り越えてセッションを維持。"
    ],
    galleryIosAlts: [
      "iPhone 上の Mobile SSH 接続フォーム。サーバー、認証、フォルダー、トランスポートの各フィールドを表示。",
      "iPhone 上の保存済みサーバー画面。Production と Staging のグループに整理され、サーバー検索付き。",
      "iPhone 上のライブ SSH ターミナル。tmux ステータスバーと下部の追加キーの行付き。",
      "iPhone 上のグリッドで 2 つの SSH セッションを上下に並べて表示。タップでフォーカスできるペイン付き。",
      "iPhone 上のファイル転送画面。マイフォンとリモートホストのパネルと、完了した転送ログを表示。",
      "iPhone 上の鍵認証画面。端末上で生成した Ed25519 鍵とコピー可能な公開鍵を表示。",
      "iPhone 上の tmux マネージャー。セッションとウィンドウを一覧表示し、開く、名前変更、強制終了の操作を備える — ベルが入力待ちのエージェントを示す。",
      "iPhone 上の SSH ターミナル。tmux ウィンドウにアタッチし、リモート エディター内のコードを表示。",
      "iPhone 上のプラグイン カタログ。Tailscale、WireGuard、Claude Code CLI、VS Code、AI Chat をインストール可能。",
      "iPhone 上の接続フォーム。トランスポートを Eternal Terminal に設定し、ネットワーク切断を乗り越えてセッションを維持。",
      "iPhone 上のエージェント アラート設定。バイブレーション、音、イヤホンのみの各トグルを表示。",
      "iPhone 上の Mobile SSH ホーム画面。「アクティブなセッション」バナーと、実行中のセッションに戻れる「続きから」の行が、サーバー、認証情報、ログ、設定、バージョン情報、プラグインのタイルの上に表示されている。"
    ],
    compareHead: "Termux や Termius の中での立ち位置",
    compareIntro:
      "Mobile SSH は意図的に狭い範囲に絞られています。完全な Linux 環境でも、クロスプラットフォームのチーム用ボルトでもありません。モバイル ユーザーが最もよく使うセッション操作にすばやくアクセスできる、Android と iOS 向けのローカルな SSH／SFTP ツールです。",
    compareGuideTitle: "比較ガイド",
    compareGuideText: "スマートフォンやタブレットで Mobile SSH、Termux、Termius のどれを選ぶか。",
    privacyTitle: "プライバシーポリシー",
    privacyText: "接続データのうちどれが端末にローカル保存され、何がサーバーに送られるかを確認します。"
  },
  features: {
    metaTitle: "機能 | Mobile SSH",
    metaDescription:
      "Android・iOS の Mobile SSH：ターミナル、踏み台ホスト、サーバー検証、SFTP、VNC、バックアップ、マルチプレクサー管理。Android の VPN とセキュリティキーも紹介します。",
    eyebrow: "機能一覧",
    h1: "Mobile SSH の機能",
    intro:
      "Android と iOS から SSH ターミナル、サーバーの身元確認、踏み台ホスト、SFTP、VNC、セッション管理を利用できます。Android には VPN ルーティングとハードウェアセキュリティキー機能もあります。プラットフォーム固有の機能は以下に明記しています。",
    groups: [
      {
        title: "プラットフォーム",
        items: [
          "Android 8.0 以降 — 現在は Google Play のクローズド テストです。参加リンクをモバイル ブラウザで開いてから、Play でインストールしてください",
          "iPhone と iPad の iOS 16 以降 — TestFlight のパブリック ベータに参加",
          "現在の Android・iOS 版はサーバーなどの保存情報と設定に共通のバックアップ形式 2 を使用します。バックアップを読み込んでも、そのプラットフォームで未対応の機能は利用可能になりません"
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
          "作業の再開を軸にしたホーム画面：いま生きている接続と、サーバーで待っている tmux セッション — 後者は保存済みスナップショットから描かれるためネットワークがなくても一覧でき、各行には取得からの経過時間が付く。iOS では「最近」一覧が「新規接続」シートに移り、タップするとフォームがその内容で埋まる",
          "IPv6 に一貫対応：アドレス欄では角かっこ付きリテラル（ポートは任意で付加可能）、ポートフォワーディングのルールでは角かっこ付きの IPv6 宛先を使える",
          "成功と失敗のログイン履歴。実際に接続したアドレスと、失敗時はその理由も記録",
          "Teleport プロキシ トランスポート（実験的、Android）：ユーザー名、パスワード、OTP でログインするか、Teleport の設定または identity ファイルをインポートし、クラスターのノードを閲覧して、ターミナル、SFTP、tmux、プラグインをプロキシ トンネル経由で実行",
          "両プラットフォームで保存済み SSH 踏み台ホストを使用でき、展開後最大 8 ホップの順序付き経路に対応します。各ホップで独自の認証情報と身元確認を使います",
          "Android の SSH エージェント転送：サーバーごとに有効化すると、リモートプログラムが保存済み鍵の署名を要求できます。利用前の承認も設定でき、秘密鍵は電話に残ります",
          "Android の USB/NFC FIDO2 セキュリティキー：OpenSSH のセキュリティキー認証情報を登録または取り込み、タッチや PIN の要求に応答します"
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
          "ブロック、点字、セクスタントなどのモザイク文字をアプリ自身が描画し、Android と iOS で chafa・timg・ANSI アートを正しく敷き詰めて表示します",
          "両プラットフォームでタッチからマウス追跡中の端末プログラムへクリックを送り、ドラッグも選択できます。iOS にはカーソル配置へ切り替える設定もあります",
          "ペインのヘッダーには、tmux への問い合わせやシェルからの OSC 7 通知で得た、そのペインの実際の作業ディレクトリを表示（Android）",
          "ESC、TAB、CTRL、矢印、Home、End、PgUp、PgDn、キーボード切替の 13 キーを並べた追加キーの行。横スクロールではなく 2 段目に折り返し、収まらない分はオーバーフロー メニューにまとめるので、画面外に隠れるキーはない",
          "Android と iOS で追加キーの行をカスタマイズ：F1〜F12、Ctrl の組み合わせ、記号など約 45 種のプリセット パレットから追加でき、削除・並べ替え・非表示、独自のエスケープシーケンス キーの定義、既定値へのリセットをライブ プレビュー付きで実行",
          "タップでフォーカス、任意で「タップでキーボードを表示」、コピー／全コピー",
          "ピンチで文字サイズ変更（リモート ターミナルのリサイズ付き）",
          "ペインのダブルタップでフルスクリーン",
          "ターミナルのテキスト選択（コピー、共有、すべて選択）— 長押しで単語を選択し、コピー後も選択が保持されるため、共有や再コピーができる",
          "OSC 52 クリップボード — リモートの tmux や vim セッションからテキストをスマートフォンのクリップボードへ直接コピー（Android と iOS）",
          "両プラットフォームでハードウェアキーボードと音声入力に対応。iOS は自動修正を含む「音声入力と候補表示」が初期状態で有効です。直接入力したい場合は無効にしてください",
          "Android と iOS での外付けおよび Bluetooth キーボード対応（矢印キー、ファンクションキー、Ctrl／Alt の組み合わせを含む）",
          "ブラケットペーストにより、複数行のクリップボード内容が自動実行されない",
          "内蔵の Nerd Font が、システム フォントでは空の四角として表示されてしまう powerline、starship、devicon、Material Design のアイコン グリフを Android と iOS で描画",
          "ワイド CJK、絵文字、結合文字を Android と iOS で正しく計測・描画。書記素クラスタやゼロ幅接合子にも対応",
          "設定可能なターミナル フォント（システム等幅、JetBrains Mono、Source Code Pro）と ANSI カラースキーム（Solarized、Gruvbox、Dracula、Nord）を Android と iOS で提供し、開いているペインに即時反映",
          "設定にはピンチ ズームと併用できるターミナルの文字サイズ スライダーがあり、アプリのテーマも System／Light／Dark から選べる",
          "転送速度と無応答の表示で、処理中のリモートコマンドと応答しない接続を見分けられます。画面を暗くする動作と振動は任意です",
          "リモート通知、コマンド完了通知、リモートからのクリップボード読み取りを設定で管理します。これらの許可は初期状態では無効です"
        ]
      },
      {
        title: "セッション",
        items: [
          "同時最大 8 つの SSH セッション",
          "アクティブなセッションのグリッド表示",
          "バックグラウンドや画面ロックへの耐性：Android ではフォアグラウンド サービスが、アプリをスワイプで閉じたあともシェルとエージェントを動かし続ける。iOS では tmux 自動アタッチがシェルを再アタッチ",
          "Keepalive と指数バックオフ付きの再接続 — 試行は最大 10 回。すでに離れたネットワークでの失敗は、この上限に数えない",
          "Wi-Fi、モバイル回線、VPN を切り替えると、死んだ経路のタイムアウトを待たずに即座に接続し直し、すでにバックオフ中のセッションも使えるネットワークが現れた瞬間に再試行する",
          "keepalive の応答が途絶えるとサーバーの無応答を検出し、Android・iOS ともに再接続を開始します",
          "ホーム画面からの「アクティブなセッション」入口。進行中の通知にセッション一覧を表示 — タップで開く",
          "tmux コマンドの追跡と再アタッチ情報を保存。両プラットフォームでサーバーごとに自動、なし、tmux、herdr、Zellij を選べ、tmux ソケットを切り替えてもセッションの識別情報を維持します",
          "エージェントはターミナル経由で自ら報告するため、どのエージェントが、どのツールを実行し、あなたの応答待ちかどうかをアプリが把握する — ペインは琥珀色になり、ヘッダーには「claude · needs you」と表示され、ツールバーのバッジが待機中の数を数える",
          "「エージェント」一覧からワンタップでエージェントの質問に応答。返答は別のチャネルで送られるため、画面に表示中の内容に打ち込まれることはない",
          "エージェント フックはアプリ内からサーバーへ導入できる — 特定ベンダー向けの統合ではなく、どのエージェントからでも呼び出せる小さなシェル スクリプト",
          "Eternal Terminal (ET) トランスポート：ネットワーク切断、スリープ、IP 変更を乗り越えるセッションを実現。SSH 経由のオプション自動 etserver セットアップ付き",
          "Tmux マネージャー：セッション、ウィンドウ、ペインを一覧表示して切り替え — アタッチ、名前変更、作成、分割、ズーム、強制終了が可能。名前または日付でソートでき、入力待ちのエージェントには 🔔 が付く",
          "1 つのマルチプレクサーボタンから tmux・herdr・Zellij の管理画面を開けます。Herdr はペインのプレビュー、フォーカス、返信に、Zellij は実行中と終了済みのセッションに対応します"
        ]
      },
      {
        title: "ファイルとトンネル",
        items: [
          "ローカルとリモートのデュアルペイン SFTP ブラウザ。すべての転送を表示してスクロールできる転送ログ付き",
          "アップロードとダウンロードをキューで処理。Android の共有機能や iOS の共有拡張からファイルを受け取り、接続先にアップロードしてリモートパスを挿入できます",
          "スマートフォンとリモートホスト間でのフォルダーの再帰的なアップロードとダウンロード",
          "リモートの名前変更、削除、作成、編集、.tar.gz への圧縮、権限変更（chmod／chown）、詳細表示",
          "ダウンロードしたファイルは両プラットフォームで別のアプリで開ける — iOS ではダウンロードがファイル アプリの「この iPhone 内」にも表示される",
          "両プラットフォームでホストと tmux セッションごとにリモートフォルダを記憶します。iOS は「ファイル」で選んだ外部のローカルフォルダも記憶できます",
          "名前または日付による並べ替え（ホスト単位で記憶）と、最近使ったリモート パスへの復帰",
          "ファイル サイズは二進接頭辞で表示され、隣のタブのターミナルで ls -h が示す値と一致する",
          "サーバープロファイルに保存され、接続時に自動で立ち上がるローカル ポートフォワーディング",
          "アプリ全体とファイル ブラウザがシステムのライト／ダーク テーマに追従 — Android と iOS で System／Light／Dark から選択"
        ]
      },
      {
        title: "ローカライズ",
        items: [
          "両アプリは 20 言語に対応：アラビア語、エジプト・アラビア語、ベンガル語、中国語（簡体字・繁体字）、英語、フランス語、ドイツ語、ヒンディー語、インドネシア語、日本語、マラーティー語、ナイジェリア・ピジン語、ポルトガル語、ロシア語、スペイン語、タミル語、テルグ語、トルコ語、ウルドゥー語",
          "既定ではシステム言語に追従。端末とは別の言語でアプリを使いたい場合は、設定に言語ピッカーがある"
        ]
      },
      {
        title: "鍵とバックアップ",
        items: [
          "端末上で新しい Ed25519 または ECDSA 鍵を生成（Android では RSA も。パスフレーズは任意）",
          "生成した公開鍵をコピー・共有・保存して、サーバーの authorized_keys に追加",
          "完全バックアップにはサーバー、認証情報、アプリ設定、言語、マルチプレクサーの並び順を含みます。Android は SSH VPN・SOCKS5・WireGuard・Shadowsocks・OpenVPN のプロファイルも含みます",
          "対象を絞るには選択項目または保存情報のみをエクスポートできます。完全バックアップはプレビューを確認し、統合または置換を選択します。パスフレーズ暗号化も利用できます",
          "暗号化しないバックアップにはパスワードと秘密鍵が含まれます。SSH ホストの信頼情報、実行中セッション、システム権限、フォルダへのアクセス許可は移行されません。セキュリティキー認証には引き続き実物のキーが必要です"
        ]
      },
      {
        title: "セキュリティ",
        items: [
          "セキュア スクリーン：Android ではスクリーンショットと画面録画をブロックし、最近のアプリのサムネイルからアプリを隠す。iOS ではアプリ切替時のプレビューを空白にし、画面録画とミラーリングをブロック（iOS では手動のスクリーンショットはブロックできない） — パスワード、鍵、トークンが画面に表示されているとき向けのオプトイン設定",
          "保存サーバー、認証情報、鍵は端末内にあり、クラウドアカウントや同期は不要です。保存時の保護と限界はプライバシーページを参照してください",
          "匿名の利用状況分析は初期状態で有効ですが、Android・iOS ともに設定から無効化できます。イベントにサーバー、認証情報、コマンド、ファイル内容は含まれません",
          "認証前に SSH ホストの身元を確認します。Android は初回の通常鍵を標準で自動保存し、承認を求める設定も可能です。iOS は未知の鍵を信頼する前に確認し、両者とも変更された鍵を拒否します",
          "両プラットフォームで範囲指定の OpenSSH ホスト鍵失効情報を取り込めます。iOS は @revoked Ed25519/ECDSA 鍵、Android はさらにホスト認証局に対応します。iOS はホスト証明書や CA 取り込みに非対応です。SSH の信頼は端末固有でバックアップ対象外です"
        ]
      },
      {
        title: "プラグイン",
        items: [
          "プラグインをカテゴリ別に閲覧・検索し、インストールして実行できます。取得元を変えるとカタログが更新されます",
          "プラグインは公開カタログからオンデマンドでダウンロードされ、SHA-256 で検証されてアプリ専用ストレージに保存される",
          "プラグインは必要なもの（SSH コマンド、トンネル、ストレージ）を宣言し、宣言していない操作はアプリが拒否する",
          "プラグインがサーバー上で何かを設定するときは、実行前に実際のコマンドが提示され、承認してから走る",
          "カスタムまたはプライベートなカタログ ソースを設定できるほか、自分のサーバー上のフォルダーからインストールすることも可能"
        ]
      },
      {
        "title": "リモートデスクトップ",
        "items": [
          "Android・iOS で SSH トンネル経由の VNC デスクトップを使用し、VNC ポートを公開インターネットに開放する必要がありません",
          "タッチによるポインター操作、ハードウェア・画面キーボード、クリップボード交換、デスクトップのベルに対応します",
          "VNC サーバーが対応していれば、プリセットまたは任意の画面サイズを選べます。非対応のサイズ変更要求は通知されます"
        ]
      },
      {
        "title": "VPN クライアント（Android）",
        "items": [
          "ホーム画面の VPN から SSH VPN、SOCKS5 プロキシ、WireGuard、Shadowsocks、OpenVPN のプロファイルを管理します",
          "SSH VPN は全アプリ・ドメインまたは選択した対象の TCP と DNS を保存済み SSH サーバーに転送します。SSH に割り当てたその他の UDP は遮断します",
          "認証付きローカル SOCKS5 プロキシは別の VPN と併用できます。利用するアプリでプロキシとリモート DNS の設定が必要です",
          "WireGuard の .conf、対応する Shadowsocks の ss:// リンク、検証済みサーバー証明書を使う自己完結型 OpenVPN .ovpn を取り込めます",
          "プロファイルの開始で VPN を切り替え、Mobile SSH VPN クイック設定タイルで記憶した VPN を停止・開始できます。SOCKS プロキシはタイルの対象外です",
          "Android の端末 VPN は同時に 1 つだけ利用できます。Tailscale は別アプリ、IKEv2/IPsec は Android 設定で管理します。Mobile SSH は常時接続や VPN 外通信の遮断保証を提供しません"
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
      "Mobile SSH は Android・iOS で SSH、SFTP、VNC、マルチプレクサー管理をまとめて提供し、Android では VPN クライアントとセキュリティキー認証も利用できます。Termux は Android の Linux 環境、Termius はアカウントに基づく生産性機能を備えたクロスプラットフォーム SSH クライアントです。",
    columns: {
      need: "目的",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "主な用途",
        mobileSsh: "両プラットフォームで SSH、SFTP、VNC、踏み台ホスト、マルチプレクサー管理。Android は VPN クライアントと FIDO2 セキュリティキーにも対応。",
        termux: "APT パッケージを使う Android のターミナル エミュレーター兼 Linux 環境。",
        termius: "Android、iOS、デスクトップ、Web 寄りのチーム作業に対応する最新の SSH クライアント。"
      },
      {
        need: "セットアップの形",
        mobileSsh: "サーバーと認証情報を保存し、必要なら踏み台ホストを選択します。接続時には認証前にサーバーの身元を確認します。",
        termux: "OpenSSH などのパッケージを入れ、シェルを設定し、Linux ライクなコマンドラインで作業。",
        termius: "Termius のアプリ／アカウントモデルでホスト、鍵、スニペット、ボルト項目を作成または同期。"
      },
      {
        need: "モバイルのターミナル操作",
        mobileSsh: "追加キー、グリッドセッション、全画面ペイン、ピンチズーム、コピー・共有、マウス、外部キーボードに対応。iOS の「音声入力と候補表示」を無効にすると直接入力できます。",
        termux: "強力なターミナル環境。動作は入れたツールと設定次第。",
        termius: "モバイル キーボード アドオン、ジェスチャー、タブ、自動補完、スニペット、洗練されたターミナル UX。"
      },
      {
        need: "ファイル転送",
        mobileSsh: "両プラットフォームで 2 ペイン SFTP、tmux に応じたフォルダ履歴、リモートファイル共有、共有ファイル受信に対応。iOS は「ファイル」の外部フォルダも記憶できます。",
        termux: "scp、sftp、rsync などのコマンドや入れたファイル ユーティリティを使用。",
        termius: "内蔵の SFTP とホスト／鍵管理機能。"
      },
      {
        need: "マルチセッション",
        mobileSsh: "グリッドで同時最大 8 つの SSH セッション。",
        termux: "Termux 内またはリモート シェルで tmux などのマルチプレクサーを使用。",
        termius: "プラットフォームとプランに応じてタブやスプリットビューが利用可能。"
      },
      {
        need: "データモデル",
        mobileSsh: "プロファイル、認証情報、ホストの信頼情報、設定を端末に保存。保存情報と設定のバックアップを任意で移行できます。Android は VPN プロファイルも含みますが、SSH の信頼情報は各端末に残ります。",
        termux: "Termux のアプリ環境内の Linux ライクなファイルシステムとパッケージ。",
        termius: "ホスト、鍵、スニペット、ポートフォワーディングのルール、known hosts、チーム共有のための暗号化ボルト。"
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
        body: "完全な Linux 環境やクラウド同期アカウントを構築せずに、スマートフォンやタブレット — Android でも iOS でも — から直接 SSH したい場合。保存済みサーバー、SFTP、tmux セッション、素早いローカル トンネルに特に向いています。"
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
      { category: "ターミナル", feature: "追加キーの行（ESC/TAB/CTRL/…）",      mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "ターミナル", feature: "ピンチで文字サイズ変更",               mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "ターミナル", feature: "ペインをダブルタップでフルスクリーン", mobile: "yes",    termux: "no",           termius: "no" },
      { category: "ターミナル", feature: "ターミナル出力内のタップ可能な URL",         mobile: "yes",    termux: "一部対応",      termius: "yes" },
      { category: "ターミナル", feature: "テキスト選択：コピー／共有／全選択",   mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "ターミナル", feature: "ハードウェア／Bluetooth キーボード対応", mobile: "yes",   termux: "yes",          termius: "yes" },
      { category: "ターミナル", feature: "シェル統合（OSC 133）",                 mobile: "yes",    termux: "no",           termius: "no" },
      { category: "ターミナル", feature: "インライン画像（Kitty グラフィックス）", mobile: "yes",    termux: "no",           termius: "no" },
      { category: "ターミナル", feature: "アプリが描画するモザイク グリフ（chafa、ANSI アート）", mobile: "yes", termux: "フォント依存", termius: "no" },
      { category: "ターミナル", feature: "マウス モードの TUI でタップがクリックになる", mobile: "yes", termux: "yes",     termius: "no" },
      { category: "ターミナル", feature: "Nerd Font／powerline グリフの描画",     mobile: "yes",     termux: "設定可能",     termius: "一部対応" },
      { category: "セッション", feature: "複数の SSH 同時セッション",            mobile: "最大 8", termux: "最大 8",      termius: "yes" },
      { category: "セッション", feature: "グリッド ペイン レイアウト",           mobile: "yes",    termux: "tmux 経由",     termius: "タブ" },
      { category: "セッション", feature: "tmux に配慮したスクロール",            mobile: "yes",    termux: "yes",          termius: "no" },
      { category: "セッション", feature: "再接続時の tmux の再アタッチのヒント",     mobile: "yes",    termux: "no",           termius: "no" },
      { category: "セッション", feature: "エージェント アラート（Claude Code／Codex）", mobile: "yes", termux: "no",      termius: "no" },
      { category: "セッション", feature: "セッション一覧を表示する進行中の通知", mobile: "Android", termux: "一部対応",     termius: "no" },
      { category: "セッション", feature: "フォアグラウンド サービスとウェイクロック", mobile: "Android", termux: "yes",     termius: "一部対応" },
      { category: "セッション", feature: "バックオフ付き自動再接続",             mobile: "yes",    termux: "autossh 経由",  termius: "yes" },
      { category: "ファイル", feature: "内蔵 SFTP ファイル転送 UI",             mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "ファイル", feature: "ローカル＋リモートのデュアルペイン ブラウザ",      mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "ファイル", feature: "アップロード／ダウンロード キュー",      mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "ファイル", feature: "リモート名前変更／削除／作成",           mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "ファイル", feature: "リモート ファイル権限の表示",            mobile: "yes",    termux: "no",           termius: "no" },
      { category: "ファイル", feature: "ホスト単位で記憶する名前／日付並べ替え", mobile: "yes",    termux: "no",           termius: "一部対応" },
      { category: "トンネル", feature: "ローカル ポートフォワーディング",              mobile: "yes",    termux: "CLI 経由",      termius: "yes" },
      { category: "トンネル", feature: "サーバープロファイルに保存するトンネル", mobile: "yes",    termux: "ssh config 経由", termius: "yes" },
      { category: "トンネル", feature: "ランタイム トンネル追加／削除",          mobile: "no",     termux: "no",           termius: "yes" },
      { category: "鍵", feature: "パスワード認証",                              mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "鍵", feature: "秘密鍵認証",                                  mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "鍵", feature: "端末上での鍵の生成",                          mobile: "yes",    termux: "ssh-keygen 経由", termius: "yes" },
      { category: "鍵", feature: "生成した公開鍵の共有／保存",                  mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "バックアップ", feature: "サーバー バックアップのエクスポート／インポート", mobile: "yes", termux: "termux-backup 経由", termius: "Pro のクラウド ボルト" },
      { category: "バックアップ", feature: "暗号化ローカル バックアップ ファイル", mobile: "yes",  termux: "no",           termius: "no" },
      { category: "バックアップ", feature: "アカウント不要",                     mobile: "yes",    termux: "yes",          termius: "一部対応" },
      { category: "プライバシーとコスト", feature: "Pro ペイウォールなし",       mobile: "yes",    termux: "yes",          termius: "一部対応" },
      { category: "プライバシーとコスト", feature: "広告なし",                   mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "プライバシーとコスト", feature: "分析のオプトアウト",         mobile: "yes", termux: "分析なし",     termius: "no" },
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
      "スマートフォンからコーディング エージェント — Claude Code、Codex、そして類似のもの — を操作することだけを目的とした、急成長中のカテゴリーのアプリが登場しています。一部はサードパーティの SSH または中継アプリ（Onepilot、Happy、Omnara、Moshi、Orca）です。OpenAI と Anthropic も現在はこれをネイティブに提供しており、Codex は ChatGPT アプリ内で、Claude Code は Claude アプリ内で動作し、いずれもベンダー自身のクラウドで実行されます。Mobile SSH はそれらすべてと重なる部分があり — SSH 経由でそうしたエージェントを実行し、対応が必要になったときに通知を受け取れます — が、逆の側からこの課題に取り組みます。まず汎用の直接 SSH クライアントであり、エージェントのコンパニオンはその次です。",
    agentAppsRows: [
      { feature: "スマートフォンからコーディング エージェントを実行",             mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "任意のコーディング エージェントに対応（単一ベンダーに限らない）", mobile: "yes", onepilot: "yes", happy: "Claude Code", omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "Codex のみ",    claude: "Claude Code のみ" },
      { feature: "自分のマシンで実行（ベンダーのクラウドではない）",       mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "no",           claude: "一部対応" },
      { feature: "ダイレクト SSH — クラウド中継なし",                     mobile: "yes", onepilot: "yes",      happy: "no",         omnara: "no", moshi: "yes", orca: "no",      chatgpt: "no",           claude: "no" },
      { feature: "汎用 SSH ターミナル（任意のコマンドを実行）",           mobile: "yes", onepilot: "yes",      happy: "no",         omnara: "一部対応", moshi: "yes", orca: "ペアリングしたパソコンの端末", chatgpt: "no",           claude: "no" },
      { feature: "SFTP ファイル転送",                                     mobile: "yes", onepilot: "一部対応",  happy: "no",         omnara: "no", moshi: "公式情報に食い違いあり", orca: "デスクトップ版のみ",      chatgpt: "no",           claude: "no" },
      { feature: "ローカル ポートフォワーディング",                             mobile: "yes", onepilot: "yes",      happy: "no",         omnara: "no", moshi: "開発用プレビュー（Pro）", orca: "デスクトップ版のみ",      chatgpt: "no",           claude: "no" },
      { feature: "tmux セッション マネージャー",                          mobile: "yes", onepilot: "一部対応",  happy: "no",         omnara: "no", moshi: "Pro", orca: "ドキュメントに記載なし",      chatgpt: "no",           claude: "no" },
      { feature: "自分で入れたエージェントで動作",                        mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "no",           claude: "no" },
      { feature: "エージェント通知（接続中のエージェントが入力を必要とするとき）", mobile: "yes", onepilot: "yes", happy: "yes", omnara: "yes", moshi: "yes", orca: "yes", chatgpt: "yes", claude: "yes" },
      { feature: "エージェントのプロンプトをワンタップで承認／拒否",       mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes", moshi: "試用後は Pro", orca: "対応エージェント",     chatgpt: "yes",          claude: "yes" },
      { feature: "サーバーや SSH のセットアップ不要",                     mobile: "no",  onepilot: "no",       happy: "一部対応",    omnara: "一部対応", moshi: "no", orca: "パソコンとのペアリングが必要", chatgpt: "yes",          claude: "yes" },
      { feature: "Android と iOS",                                        mobile: "yes", onepilot: "iOS のみ", happy: "yes",        omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "アカウント不要",                                        mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "no", moshi: "yes", orca: "LAN/Tailscale。Relay はアカウントが必要",      chatgpt: "no",           claude: "no" },
      { feature: "Pro ペイウォールなし（全機能無料）",                    mobile: "yes", onepilot: "no",       happy: "no",         omnara: "no", moshi: "no", orca: "yes",      chatgpt: "無料プランあり", claude: "no" },
      { feature: "オープンソース",                                        mobile: "Apache 2.0",  onepilot: "no",       happy: "MIT",        omnara: "Apache", moshi: "no", orca: "MIT",  chatgpt: "no",           claude: "no" }
    ],
    agentAppsNote:
      "ネイティブの ChatGPT アプリと Claude アプリは、セットアップ不要で単一ベンダーのエージェントを実行する最もスムーズな方法です — サーバーは不要で、アカウントだけで済みます — さらに洗練されたワンタップの承認／拒否画面も備えています。ただし難点として、これらは自社のモデルを自社のクラウドでのみ実行し、汎用ターミナルも、SFTP やトンネルも、自分のマシンの持ち込みもできず、有料またはアカウント必須です。Onepilot、Happy、Omnara は、あなたが管理するハードウェア上にエージェントを置きます（Onepilot はダイレクト SSH 経由、Happy と Omnara はクラウド中継経由で、Omnara はアカウントが必要）。Mobile SSH はアカウントやベンダーの中継なしで自分のサーバーに直接接続し、完全なターミナル、SFTP、ポートフォワーディングとともに任意のエージェントを実行でき、すべての機能が無料です。エージェントのプロンプトへの応答も、いまでは他のアプリと同じ方式になりました — すべての接続を横断してエージェントを並べる「エージェント」一覧があり、選択肢ごとにボタンが並びます — 違うのは、エージェントが動くのはあなたのマシンで、返答はあなた自身の SSH 接続を通って届くという点です。トレードオフは以前から変わりません。サーバーは自分で用意する必要があり、エージェント フックを一度そこにインストールしておく必要があります。",
    agentAppsSourcesNote: "確認日：2026-09-19。Moshi の直接接続 SSH 端末と、エージェントのイベントや承認を処理する任意のバックエンドは別です。Android のストア掲載情報では SFTP 対応をうたっていますが、詳細なドキュメントでは SCP によるアップロードと開発サーバーのプレビューを説明しているため、該当する表の項目には条件を明記しています。Orca のモバイルアプリはパソコン上の Orca とペアリングします。LAN/Tailscale では Orca アカウントなしで利用できますが、Relay にはアカウントが必要です。デスクトップ版限定の機能や、ドキュメントに記載のない機能は表内に明記しています。公式情報：",
  },
  privacy: {
    metaTitle: "プライバシーポリシー | Mobile SSH",
    metaDescription:
      "Mobile SSH が Android・iOS で保存データ、サーバーの身元、バックアップ、SSH・VPN 通信、ファイル、分析、権限をどう扱うかを説明します。",
    eyebrow: "プライバシー",
    h1: "プライバシーポリシー",
    intro:
      "Mobile SSH は設定を端末上に保存し、選択したサーバーやサービスに接続します。Mobile SSH アカウントやクラウド同期は必要ありません。Android の任意の VPN クライアントは、選択した端末の通信も設定したサーバーに転送します。",
    sections: [
      {
        heading: "端末に保存される情報",
        body: "保存データにはサーバー設定、認証情報、秘密鍵、ホストの身元、踏み台、トンネル規則、セッションのスナップショット、ログイン履歴、パス、フォルダー権限、アプリ設定が含まれます。Android は VPN・プロキシ設定と秘密情報も保存します。iOS の秘密情報は Keychain を使用します。Android のインベントリーは Keystore の鍵で暗号化しますが、暗号化できない場合は平文で保存することがあります。WireGuard、Shadowsocks、OpenVPN 設定の保存は暗号化が必須です。Android クラウドバックアップは無効で、任意のデバッグログは端末内に保存します。"
      },
      {
        heading: "ネットワーク経由で送信される情報",
        body: "SSH 認証は、身元確認後に設定済みサーバーや踏み台ホストに送られます。ターミナル、SFTP、VNC、転送通信は選択した宛先に送信されます。プラグインのカタログ取得とダウンロードは設定済みの取得元に接続します。Android の VPN・プロキシは選択した経路に従い、他のアプリの通信や DNS を SSH・WireGuard・Shadowsocks・OpenVPN サーバーに送ることがあります。この通信を Mobile SSH の分析やクラウド保存先に送ることはありません。"
      },
      {
        heading: "ファイル転送とストレージ アクセス",
        body: "ファイル転送は選択したフォルダやファイルを使い、ストレージ全体の権限は求めません。Android は許可されたフォルダへのアクセスを保持します。iOS はアプリのフォルダまたは「ファイル」で選んだフォルダを使用し、システムの仕組みで書類、写真、共有ファイルを取り込みます。選んだファイルプロバイダが独自のクラウドに保存する場合があります。開く操作や共有では、選択したアプリまたは宛先にファイルが渡されます。"
      },
      {
        heading: "ログとトラブルシューティング",
        body: "接続時のログイン試行は端末に記録されます。デバッグ記録は任意です。Android の記録機能は、パスワードを含むすべての入力キーが診断に含まれることを警告し、アーカイブを出力します。iOS のデバッグログには接続先アドレス、失敗、再接続、ネットワーク変更、tmux の診断が記録されます。共有前に内容を確認してください。サーバーの詳細や、Android では入力した秘密情報が含まれる場合があります。"
      },
      { heading: "利用状況分析", body: "分析が有効な場合、Mobile SSHはアプリの改善のため、機能の操作（VPN・プロキシの利用やターミナルマルチプレクサーの種類を含む）、接続診断、アプリとOSのバージョン、デバイスのモデル、言語、一時的なセッションIDをHTTPS経由でAptabaseに送信します。AptabaseはリクエストのIPアドレスとUser-Agentを処理し、国や地域、日単位の仮名識別子を生成します。元のIPアドレスやUser-Agentは分析データとともに保存されません。イベントには、閲覧時の通信、DNSクエリ、サーバーアドレス、ユーザー名、認証情報、コマンド、ファイルの内容は含まれません。分析への同意画面があるAndroidビルドでは明示的な同意が必要です。以前のAndroidビルドとiOSでは、分析が初期状態で有効です。分析を無効にしてもすべての機能を使用できます。設定から収集を停止できますが、iOSではすでにキューに入っているイベントが後から送信される場合があります。Androidの同意はそのデバイスのみに保存され、バックアップからは復元されません。[Aptabaseのデータ処理契約](https://aptabase.com/legal/dpa)をご覧ください。" },
      {
        "heading": "書き出すバックアップ",
        "body": "完全バックアップには保存済み情報とアプリ設定が含まれ、Android は VPN・プロキシも含みます。パスフレーズを使えば暗号化され、使わない場合はパスワードと秘密鍵が平文で入ります。保存先や共有先は利用者が選びます。SSH ホストの信頼情報、実行中セッション、システムのフォルダアクセス許可は含みません。読み込み前に適用される項目とセキュリティ設定を確認できます。"
      },
      {
        "heading": "Android の VPN ルーティング",
        "body": "端末の VPN ルーティングには Android の同意が必要で、停止するかシステムが終了させるまで続きます。同時に使える端末 VPN は 1 つですが、ローカル SOCKS プロキシは別の VPN と併用できます。SSH は TCP と DNS を運び、SSH に割り当てたその他の UDP を遮断します。停止、切替、アプリ終了は元の VPN の保護を終わらせます。常時接続や VPN 外通信の遮断保証は提供しません。"
      }
    ],
    permissionsHeading: "権限",
    permissions: [
      { label: "インターネット", body: "SSH、ファイル転送、デスクトップ、VPN、プラグインの接続、および有効にした分析に使用します。" },
      { label: "Wake lock と Wi-Fi lock", body: "Android で、端末がスリープ中もアクティブな SSH セッションを維持するために使用されます。" },
      { label: "フォアグラウンド サービスと通知", body: "Android ではバックグラウンドでのアクティブ接続の処理に使用されます。iOS では通知はエージェント アラートに使用されます。" },
      { label: "ファイル アクセス", body: "システムのフォルダ・書類・写真選択画面を通じて許可されます。iOS は「ファイル」の外部フォルダも記憶できます。どちらもストレージ全体への権限は求めません。" },
      {
        "label": "VPN の同意（Android）",
        "body": "内蔵 VPN クライアントが端末の通信をルーティングする前に必要です。SOCKS のみのプロキシは端末の VPN 枠を使いません。"
      },
      {
        "label": "USB と NFC（Android）",
        "body": "物理 FIDO2 キーとの登録・SSH 署名の通信に使います。必要に応じて USB アクセス許可、タッチ、PIN による確認を行います。"
      }
    ],
    securityHeading: "セキュリティ上の責任",
    securityBody:
      "端末と書き出したバックアップを保護してください。不明な SSH フィンガープリントは信頼できる経路で照合してください。初回利用を承認したい場合は Android の新規識別情報の自動受け入れを無効にします。iOS は初期状態で確認を求めます。保存済み識別情報を置き換える前に、鍵変更の理由を調べてください。画面保護は Android でスクリーンショットと録画を遮断します。iOS はアプリ切替のプレビューと録画・ミラーリングを隠しますが、手動スクリーンショットは阻止できません。",
    contactHeading: "お問い合わせ",
    contactBody: "サポート連絡先：[mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)。"
  },
  docsIndex: {
    metaTitle: "ドキュメント | Mobile SSH",
    metaDescription: "Android と iOS 向け Mobile SSH のエンドユーザー ドキュメント。",
    eyebrow: "ユーザー ガイド",
    h1: "Mobile SSH ドキュメント",
    intro:
      "SSH の身元確認と踏み台ホスト、ターミナルと VNC、マルチプレクサー管理、SFTP、バックアップ、ローカルトンネル、Android VPN のガイドです。プラットフォーム間の違いも説明します。",
    cards: [
      { slug: "getting-started",  title: "はじめに",               text: "インストール、サーバーの身元確認、踏み台ホストと鍵の設定、バックアップの作成を説明します。" },
      { slug: "terminal",         title: "ターミナル",             text: "ターミナル操作、tmux・herdr・Zellij、エージェント通知、VNC デスクトップを使います。" },
      { slug: "file-transfer",    title: "ファイル転送",           text: "ファイルを転送し、フォルダを記憶し、セッションや他のアプリとファイルを共有します。" },
      { slug: "port-forwarding",  title: "ポートフォワーディング", text: "ローカルトンネルと Android の SSH VPN・SOCKS5・WireGuard・Shadowsocks・OpenVPN を設定します。" },
      { slug: "troubleshooting",  title: "トラブルシューティング", text: "身元確認、踏み台ホスト、ターミナル、転送、バックアップ、VPN の問題を診断します。" }
    ]
  },
  docsNav: {
    home: "ドキュメント ホーム",
    gettingStarted: "はじめに",
    terminal: "ターミナル",
    fileTransfer: "ファイル転送",
    portForwarding: "ポートフォワーディング",
    troubleshooting: "トラブルシューティング"
  },
  about: {
    metaTitle: "情報 | Mobile SSH",
    metaDescription: "Mobile SSH について：Android・iOS 用 SSH クライアントのバージョン、作者、ライセンス、オープンソース表記。",
    eyebrow: "情報",
    h1: "Mobile SSH について",
    intro: "Android・iOS 向けの SSH、SFTP、VNC、マルチプレクサー管理。ローカルバックアップ、サーバーの身元確認、踏み台ホストに対応し、Android は VPN クライアントとハードウェアセキュリティキーも備えます。",
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
    openvpnSourceHeading: "OpenVPN のソースコード",
    openvpnSourceBody: "OpenVPN 3 Core は MPL 2.0 に基づいて使用されています。対象の正確なソースコードと依存関係のバージョン、ライセンス文、ネイティブビルド情報をダウンロードできます。",
    openvpnSourceLabel: "ソースコードのアーカイブをダウンロード",
    certificatesHeading: "証明書",
    apkCertificateLabel: "直接インストールする APK の署名証明書（PEM）",
    apkCertificateBody: "この公開証明書は、直接インストールする Mobile SSH APK の署名者を識別します。Google Play は別の証明書でダウンロードするアプリに署名する場合があります。",
    serverCertificateBody: "SSH と VPN のサーバー証明書は、サーバー管理者または VPN 提供者から入手してください。信頼できる経路でフィンガープリントを確認してください。この署名証明書は VPN の認証局ではありません。",
    signingHelpLabel: "Android のアプリ署名ドキュメント",
    contactHeading: "お問い合わせ",
    contactBody: "サポート連絡先：[mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)。"
  }
};
