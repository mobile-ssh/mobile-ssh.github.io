import type { Dict } from "../types";

export const ja: Dict = {
  meta: {
    siteName: "Mobile SSH",
    languageLabel: "言語",
    languageSwitcher: "言語を切り替える"
  },
  nav: {
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
      { title: "エージェント アラート", text: "Claude Code、Codex、または他のリモート エージェントが入力を必要とした瞬間に、音とバイブレーション付きの通知を受け取ります。動画再生中もイヤホンで鳴ります。" },
      { title: "キーボードの上のターミナル キー", text: "ESC、TAB、CTRL、ALT、FN、矢印、Home、End、PgUp/PgDn の専用列を Android と iOS で表示 — 自動修正と衝突しないターミナル キー。" },
      { title: "コマンド不要のポート転送", text: "トンネルはサーバープロファイルに紐づき、接続と同時に自動で立ち上がります。" },
      { title: "ロックや回線切替に強い", text: "保存済みサーバーに複数のアドレス（自宅 LAN の IP と VPN の IP など）を登録しておくと、Mobile SSH は応答するアドレスへ接続し、前回つながったアドレスを最初に試し、ネットワークが変わった瞬間に再接続します。Android ではフォアグラウンドサービスとウェイクロックが画面オフ中もシェルを維持し、iOS では自動再接続と tmux 自動アタッチで中断したまさにその場所に戻れます。" },
      { title: "Eternal Terminal", text: "オプションの ET トランスポートがネットワーク切断、スリープ、IP 変更をまたいでリモートシェルを生き続けさせます。ホストに etserver がなくても、Mobile SSH が SSH 経由でインストールできます。" },
      { title: "プラグインで拡張", text: "公開カタログを閲覧し、必要なプラグインをオンデマンドでインストールして新しいワークフローを追加できます。各プラグインはダウンロード後に SHA-256 で検証され、アプリ専用ストレージに保存されます。" }
    ],
    sectionAHead: "モバイルでの SSH 作業を中心に設計",
    sectionAIntro:
      "Mobile SSH は管理者の定番ルートを短くします。サーバーを保存し、つなぎ、セッションを維持し、必要なときにファイルを動かし、すばやくアクティブな端末に戻れます。",
    features: [
      { title: "SSH ターミナル", text: "xterm-256color 端末。24-bit トゥルーカラー、イタリック、ターミナル内検索、OSC 133 シェル統合、ピンチで文字サイズ変更に対応。加えて Android では、設定可能なフォントとカラースキーム、Nerd Font の powerline／アイコン グリフに対応。" },
      { title: "マルチセッション グリッド", text: "リサイズ可能なグリッドで最大 8 つの SSH セッション。ペインをタップしてフォーカス、ダブルタップでフルスクリーン、ピンチで文字サイズ変更。" },
      { title: "タップ可能なリンク", text: "ターミナル出力内の URL に下線が引かれ、タップするだけでブラウザで開きます。コピーやアプリ切替は不要。" },
      { title: "サーバー フォルダー", text: "保存済みサーバーを折りたたみ可能なグループに整理。グループのヘッダーをタップして折りたたみ。フォルダー構造はクイック接続ピッカーにも反映されます。" },
      { title: "エージェント アラート", text: "リモート エージェント（Claude Code、Codex など）が入力を必要としたときに、音とバイブレーション付きの通知。動画通話中もイヤホンで鳴ります。" },
      { title: "秘密鍵", text: "パスワードまたは秘密鍵認証。端末上で Ed25519 または ECDSA 鍵を生成（Android では RSA も）、または既存の鍵をインポート・貼り付け。" },
      { title: "SFTP 転送", text: "アクティブな SSH セッションに紐づく二画面ファイルブラウザ。アップロード・ダウンロードをキューに入れ、名前変更、削除、リモート権限の確認が可能。" },
      { title: "ポートフォワード", text: "ローカル トンネル設定をサーバープロファイルと一緒に保存。接続時に自動で開くか、接続中に追加・削除が可能。" },
      { title: "再接続ワークフロー", text: "keepalive と指数バックオフ付き再接続で、画面オフやローミングを越えてセッションを維持 — Android ではフォアグラウンドサービス、iOS では tmux 自動アタッチが支えます。" },
      { title: "バックアップと復元", text: "保存済みサーバーと認証情報を暗号化バックアップ ファイルに書き出し。マージまたは置換でインポートして端末間で移行 — バックアップは Android と iOS の間で相互に利用できます。" },
      { title: "Eternal Terminal", text: "Eternal Terminal (ET) 経由で接続すると、ネットワーク切断、スリープ、IP 変更を乗り越えるセッションが実現します — SSH 経由のオプション自動 etserver セットアップ付き。" },
      { title: "Tmux マネージャー", text: "tmux のセッション、ウィンドウ、ペインを一覧表示して切り替え — アタッチ、名前変更、作成、分割、ズーム、強制終了が可能。名前または日付でソートでき、入力待ちのエージェントには 🔔 が付きます。" },
      { title: "プラグイン", text: "プラグインを閲覧・インストール・実行して Mobile SSH を拡張できます。プラグインは公開カタログからオンデマンドでダウンロードされ、SHA-256 で検証されてアプリ専用ストレージに保存されます。" }
    ],
    multiHead: "ひとつの画面で複数のシェル",
    multiP1:
      "端末ビューはグリッドで複数のアクティブな SSH セッションを保持できます。ペインをタップして入力、拡張キーバーで端末操作、ピンチで文字サイズ調整、ダブルタップでフルスクリーン フォーカス。",
    multiP2:
      "セッション履歴とアクティブセッションの復元により、アプリ切り替え、画面ロック、システムによるアプリの解放のあとも作業に戻れます。",
    multiAlt:
      "スマートフォン上の Mobile SSH が 2 つのアクティブな SSH 端末セッションを横並びのスプリット ビューで表示。",
    sftpHead: "端末だけでは足りないときの SFTP",
    sftpBody:
      "接続済みセッションからファイル転送を開いて、端末ストレージとリモートディレクトリを参照できます。アップロードとダウンロードをキューに入れ、並べ替え、ホストごとの最近のパスを記憶し、リモートのファイル権限を確認しながら移動できます。",
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
    videoIntro: "両プラットフォームでの短いデモ。Android：tmux のウィンドウ切り替え、SFTP のファイル転送、AI Chat プラグインのインストールとチャット、Eternal Terminal、ワンタップの最近のセッション。iOS：グループ化された保存済みサーバー、tmux 自動アタッチ付きの接続オプション、ライブの端末セッション、Tmux マネージャー。",
    videoAlt: "Android のデモ：tmux のウィンドウ切り替え、SFTP でのファイルダウンロード、AI Chat プラグインのインストールと利用、Eternal Terminal トランスポート、最近のセッション",
    videoIosAlt: "iOS のデモ：グループ化された保存済みサーバー、tmux 自動アタッチとポート転送付きの接続オプション、ライブの SSH 端末セッション、ウィンドウを切り替える Tmux マネージャー",
    lightboxClose: "閉じる",
    lightboxPrev: "前へ",
    lightboxNext: "次へ",
    betaJoin: "ベータに参加する",
    betaOr: "またはメールで",
    betaRequest: "プライベートベータへのアクセスをリクエストする",
    galleryAlts: [
      "Mobile SSH のスタート画面（サーバー、認証情報、ログ、設定、デバッグ、バージョン情報のタイル）。",
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
      "スマートフォン上の Mobile SSH ホーム画面。最近のセッション一覧を表示し、ワンタップで SSH 接続を再開できる。",
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
      "iPhone 上の Mobile SSH 接続画面。ワンタップで再接続できる「最近」セクション付き。"
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
          "Android 8.0 以降 — Google Play からインストール",
          "iPhone と iPad の iOS 16 以降 — TestFlight のパブリック ベータに参加",
          "暗号化バックアップは相互に利用可能：一方のプラットフォームで書き出し、もう一方で取り込み"
        ]
      },
      {
        title: "接続",
        items: [
          "パスワード認証と秘密鍵認証",
          "Android では Ed25519、RSA、ECDSA、DSA の秘密鍵に対応。iOS では Ed25519 と ECDSA（P-256/384/521）",
          "ホスト、ポート、ユーザー名、認証情報、秘密鍵、トンネル設定を含む保存済みサーバープロファイル",
          "名前またはホストで保存済みサーバーを検索",
          "検索優先の「セッション追加」フロー：専用の検索ページで保存済みサーバーを選んでワンタップ接続",
          "保存済みサーバーごとに複数のアドレスを登録して LAN／VPN のローミングに対応 — 順番に接続を試み、前回つながったアドレスを最初に試行。ネットワーク変更時には再接続が働く",
          "サーバー設定で選べる再利用可能な認証情報レコード",
          "よく使うサーバー群へ再接続するための最近のセッション履歴",
          "成功と失敗のログイン履歴。実際に接続したアドレスも記録"
        ]
      },
      {
        title: "ターミナル",
        items: [
          "VT100/xterm-256color 風のターミナル動作。24-bit トゥルーカラーとイタリックに対応",
          "5000 行のスクロールバック バッファ。Android ではサイズを設定可能",
          "ターミナル内検索 — スクロールバックと表示中の画面を検索し、一致箇所を移動（Android と iOS）",
          "シェル統合（OSC 133）：プロンプト間の移動、コマンド出力のコピー、長時間実行コマンドの完了時のアラート（Android と iOS）",
          "Kitty グラフィックス プロトコルによるターミナル内のインライン画像（Android と iOS）",
          "ESC、TAB、CTRL、Shift、矢印、Home、End、PgUp、PgDn、キーボード切替の拡張キーバー — Android ではカスタマイズ可能：キーの追加・削除・並べ替え、独自のエスケープシーケンス キーの定義、既定値へのリセット",
          "タップでフォーカス、任意で「タップでキーボードを表示」、コピー／全コピー",
          "ピンチで文字サイズ変更（リモート端末リサイズ付き）",
          "ペインのダブルタップでフルスクリーン",
          "端末テキスト選択（コピー、共有、すべて選択）— 長押しで単語を選択し、コピー後も選択が保持されるため、共有や再コピーができる",
          "OSC 52 クリップボード — リモートの tmux や vim セッションからテキストをスマホのクリップボードへ直接コピー",
          "ネイティブなパススルーのキーボード入力 — 自動修正がシェルと衝突せず、ソフトキーボードの音声入力も引き続き利用可能",
          "Android と iOS での外付けおよび Bluetooth キーボード対応（矢印キー、ファンクションキー、Ctrl／Alt の組み合わせを含む）",
          "ブラケットペーストにより、複数行のクリップボード内容が自動実行されない",
          "内蔵の Nerd Font が、システム フォントでは空の四角として表示されてしまう powerline、starship、devicon、Material Design のアイコン グリフを Android で描画",
          "ワイド CJK、絵文字、結合文字を Android と iOS で正しく計測・描画。書記素クラスタやゼロ幅接合子にも対応",
          "設定可能なターミナル フォント（システム等幅、JetBrains Mono、Source Code Pro）と ANSI カラースキーム（Solarized、Gruvbox、Dracula、Nord）を Android で提供し、開いているペインに即時反映"
        ]
      },
      {
        title: "セッション",
        items: [
          "同時最大 8 つの SSH セッション",
          "アクティブセッションのグリッド表示",
          "バックグラウンドや画面ロックへの耐性：Android では前面サービス、iOS では tmux 自動アタッチがシェルを再アタッチ",
          "Keepalive と指数バックオフ付き再接続",
          "スタート画面からの「アクティブセッション」入口。進行中の通知にセッション一覧を表示 — タップで開く",
          "tmux コマンド追跡と中断した作業向けの reattach ヒント",
          "エージェント アラート：リモート エージェント（Claude Code、Codex など）が入力を必要としたときに、任意の音とバイブレーション付きの通知 — OSC 9/777 通知でエージェント自身のタイトルとメッセージを表示。動画再生中もイヤホンで鳴る",
          "Eternal Terminal (ET) トランスポート：ネットワーク切断、スリープ、IP 変更を乗り越えるセッションを実現。SSH 経由のオプション自動 etserver セットアップ付き",
          "Tmux マネージャー：セッション、ウィンドウ、ペインを一覧表示して切り替え — アタッチ、名前変更、作成、分割、ズーム、強制終了が可能。名前または日付でソートでき、入力待ちのエージェントには 🔔 が付く"
        ]
      },
      {
        title: "ファイルとトンネル",
        items: [
          "ローカルとリモートの二画面 SFTP ブラウザ",
          "アップロード／ダウンロードのキュー",
          "スマホとリモートホスト間でのフォルダーの再帰的なアップロードとダウンロード",
          "リモートの名前変更、削除、作成、編集、詳細",
          "ダウンロードしたファイルを、ローカル ペインから Android の別のアプリで直接開く",
          "名前または日付による並び替え（ホスト単位で記憶）",
          "サーバープロファイルに保存されるローカル ポートフォワード",
          "接続中セッション向けランタイム トンネル追加／削除ビュー",
          "ファイル転送はシステムのライト／ダーク テーマに追従"
        ]
      },
      {
        title: "ローカライズ",
        items: [
          "UI 翻訳：アラビア語、ベンガル語、中国語（簡体・繁体）、英語、フランス語、ドイツ語、ヒンディー語、インドネシア語、日本語、マラーティー語、ナイジェリアン ピジン、ポルトガル語、ロシア語、スペイン語、タミル語、テルグ語、トルコ語、ウルドゥー語",
          "Android と iOS のシステム言語に追従。アプリ内の言語ピッカーは不要"
        ]
      },
      {
        title: "鍵とバックアップ",
        items: [
          "端末上で新しい Ed25519 または ECDSA 鍵を生成（Android では RSA も。パスフレーズは任意）",
          "生成した公開鍵をコピー・共有・保存して、サーバーの authorized_keys に追加",
          "保存済みのサーバーと認証情報をバックアップファイルに書き出し",
          "任意のパスフレーズでバックアップを暗号化。インポートはマージまたは置換",
          "暗号化しないバックアップはパスワードや鍵を平文で保存します。ファイルを保護するか削除してください"
        ]
      },
      {
        title: "セキュリティ",
        items: [
          "セキュア スクリーン（Android）：スクリーンショットと画面録画をブロックし、最近のアプリのサムネイルからアプリを隠す — パスワード、鍵、トークンが画面に表示されているとき向けのオプトイン設定",
          "保存済みのサーバー、認証情報、鍵は端末内に留まる — シークレットは Android の Keystore と iOS の Keychain に保管され、クラウド アカウントや同期は不要",
          "使用状況分析は匿名かつオプトアウト可能なもののみ — サーバー、認証情報、コマンド、ファイルの内容を送ることは一切ない"
        ]
      },
      {
        title: "プラグイン",
        items: [
          "プラグインを閲覧・インストール・実行して Mobile SSH を拡張",
          "プラグインは公開カタログからオンデマンドでダウンロードされ、SHA-256 で検証されてアプリ専用ストレージに保存される",
          "必要に応じてカスタムまたはプライベートなカタログ ソースを設定可能"
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
      { category: "接続", feature: "最近のセッション履歴",                       mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "接続", feature: "ログイン履歴",                               mobile: "yes",    termux: "no",           termius: "no" },
      { category: "ターミナル", feature: "SSH ターミナル",                       mobile: "yes",    termux: "OpenSSH 経由",  termius: "yes" },
      { category: "ターミナル", feature: "xterm-256color エミュレーション",      mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "ターミナル", feature: "5000 行スクロールバック バッファ",     mobile: "yes",    termux: "設定可能",      termius: "yes" },
      { category: "ターミナル", feature: "ターミナル内検索（スクロールバック）", mobile: "yes",    termux: "no",           termius: "no" },
      { category: "ターミナル", feature: "拡張キーバー（ESC/TAB/CTRL/…）",      mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "ターミナル", feature: "ピンチで文字サイズ変更",               mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "ターミナル", feature: "ペインをダブルタップでフルスクリーン", mobile: "yes",    termux: "no",           termius: "no" },
      { category: "ターミナル", feature: "端末出力内のタップ可能な URL",         mobile: "yes",    termux: "一部対応",      termius: "yes" },
      { category: "ターミナル", feature: "テキスト選択：コピー／共有／全選択",   mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "ターミナル", feature: "ハードウェア／Bluetooth キーボード対応", mobile: "yes",   termux: "yes",          termius: "yes" },
      { category: "ターミナル", feature: "シェル統合（OSC 133）",                 mobile: "yes",    termux: "no",           termius: "no" },
      { category: "ターミナル", feature: "インライン画像（Kitty グラフィックス）", mobile: "yes",    termux: "no",           termius: "no" },
      { category: "ターミナル", feature: "Nerd Font／powerline グリフの描画",     mobile: "Android", termux: "設定可能",     termius: "一部対応" },
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
      { category: "トンネル", feature: "ランタイム トンネル追加／削除",          mobile: "Android", termux: "no",          termius: "yes" },
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
      { category: "プライバシーとコスト", feature: "セキュア スクリーン（スクリーンショットをブロック）", mobile: "Android", termux: "no", termius: "no" },
      { category: "セッション", feature: "Eternal Terminal（耐障害性セッション）",    mobile: "yes",    termux: "CLI 経由",      termius: "no" },
      { category: "セッション", feature: "SSH 経由の etserver 自動インストール",      mobile: "yes",    termux: "no",            termius: "no" },
      { category: "セッション", feature: "tmux セッション マネージャー",              mobile: "yes",    termux: "CLI 経由",      termius: "no" },
      { category: "プラグイン", feature: "プラグイン サポート",                       mobile: "yes",    termux: "パッケージ経由", termius: "no" },
      { category: "プラグイン", feature: "オンデマンド インストールのプラグイン カタログ", mobile: "yes", termux: "no",           termius: "no" }
    ],
    agentAppsHeading: "Mobile SSH とリモート AI エージェント アプリの比較",
    agentAppsIntro:
      "スマホからリモートマシン上で Claude Code や Codex などのコーディング エージェントを実行することだけを目的とした、新しいカテゴリーのアプリが登場しています。Mobile SSH はそれらと重なる部分があり — SSH 経由でそうしたエージェントを実行し、対応が必要になったときに通知を受け取れます — が、逆の側からこの課題に取り組みます。まず汎用の直接 SSH クライアントであり、エージェントのコンパニオンはその次です。",
    agentAppsRows: [
      { feature: "リモートサーバーで Claude Code と Codex を実行",       mobile: "yes",    onepilot: "yes",      happy: "yes",   omnara: "yes" },
      { feature: "汎用 SSH ターミナル（任意のコマンドを実行）",           mobile: "yes",    onepilot: "yes",      happy: "no",    omnara: "一部対応" },
      { feature: "ダイレクト SSH — クラウド中継なし",                     mobile: "yes",    onepilot: "yes",      happy: "no",    omnara: "no" },
      { feature: "SFTP ファイル転送",                                     mobile: "yes",    onepilot: "一部対応",  happy: "no",    omnara: "no" },
      { feature: "ローカル ポートフォワード",                             mobile: "yes",    onepilot: "yes",      happy: "no",    omnara: "no" },
      { feature: "tmux セッション マネージャー",                          mobile: "yes",    onepilot: "一部対応",  happy: "no",    omnara: "no" },
      { feature: "エージェント アラート（エージェントが入力を必要とするときにプッシュ）", mobile: "yes", onepilot: "yes", happy: "yes", omnara: "yes" },
      { feature: "エージェントのプロンプトをワンタップで承認／拒否",       mobile: "no",     onepilot: "yes",      happy: "yes",   omnara: "yes" },
      { feature: "Android と iOS",                                        mobile: "yes",    onepilot: "iOS のみ", happy: "yes",   omnara: "yes" },
      { feature: "アカウント不要",                                        mobile: "yes",    onepilot: "yes",      happy: "yes",   omnara: "no" },
      { feature: "Pro ペイウォールなし（全機能無料）",                    mobile: "yes",    onepilot: "no",       happy: "no",    omnara: "no" },
      { feature: "オープンソース",                                        mobile: "no",     onepilot: "no",       happy: "MIT",   omnara: "Apache" }
    ],
    agentAppsNote:
      "トレードオフは確かにあります。専用のエージェント アプリはパーミッション プロンプト用にワンタップの承認／拒否画面を追加しますが、Mobile SSH ではターミナルでエージェントに応答します。その代わり、Mobile SSH は完全な SSH／SFTP／トンネル クライアントであり、アカウントやベンダーの中継なしで自分のサーバーに直接接続でき、すべての機能が無料です。Happy と Omnara はオープンソースですがクラウド中継を経由します（Omnara はアカウントも必要）。Onepilot が最も近く — iOS でのダイレクト SSH — ですが iOS 専用かつ有料です。",
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
        body: "アプリのデータを保存することを選んだ場合、Mobile SSH はそれを端末にローカル保存します — iOS ではシークレットはシステムの Keychain に保管されます。保存されるものには、サーバープロファイル、ユーザー名、ポート、パスワード、秘密鍵、鍵のパスフレーズ、ポート転送ルール、最近のセッション、ログイン試行履歴、ファイル転送のパス、並べ替え設定、tmux の reattach ヒント、アプリ設定、デバッグ記録が有効な場合のデバッグログが含まれます。"
      },
      {
        heading: "ネットワーク経由で送信される情報",
        body: "Mobile SSH は SSH 認証データを、ユーザーが設定して接続するサーバーにのみ送信します。端末入出力、SFTP ファイルの内容、ローカル ポート転送のトラフィックは、ユーザーが選んだサーバーやリモート エンドポイントとの間でやり取りされます。Mobile SSH のアナリティクス、広告、テレメトリ、クラウド同期サービスにこれらのデータを送信することはありません。"
      },
      {
        heading: "ファイル転送とストレージ アクセス",
        body: "ファイル転送機能は、ファイルをアップロード／ダウンロードするために端末ローカルのストレージとリモートの SFTP ディレクトリを参照します。それを必要とする Android のバージョンでは、ローカル ファイル ブラウザが選択ファイルを読み書きできるようにストレージ アクセスを要求する場合があります。iOS では、ローカルのファイルや写真にはシステムのドキュメント ピッカーとフォト ピッカーを通じてアクセスします。"
      },
      {
        heading: "ログとトラブルシューティング",
        body: "ログイン履歴と任意のデバッグログはトラブルシューティングのためにローカル保存されます。デバッグログには端末イベント、SSH データのサイズ、タッチ入力の診断、リサイズ イベント、トンネルのライフサイクル イベントが含まれることがあります。デバッグ アーカイブをサポートや他者に共有する前に内容を確認してください。"
      },
      { heading: "匿名の使用状況分析", body: "アプリの使われ方を把握して改善するため、Mobile SSH は当社に代わって処理を行うプライバシー重視の分析プロバイダー Aptabase に匿名の使用状況分析を送信します。対象は匿名のイベント（アプリの起動や利用機能など）と、アプリのバージョン、オペレーティング システムのバージョン、端末モデル、言語に限られます。定期的にリセットされるランダムなセッション識別子を使用し、あなたや端末には紐づきません。SSH サーバー、ホスト名、ユーザー名、パスワード、鍵、コマンド、ファイルの内容を含めることは一切ありません。データは暗号化された（HTTPS）接続で送信されます。分析は既定で有効ですが、設定でいつでもオフにできます。オフのときは何も送信されません。" }
    ],
    permissionsHeading: "パーミッション",
    permissions: [
      { label: "インターネット", body: "SSH サーバーへの接続に必要です。" },
      { label: "Wake lock と Wi-Fi lock", body: "Android で、端末がスリープ中もアクティブな SSH セッションを維持するために使用されます。" },
      { label: "前面サービスと通知", body: "Android ではバックグラウンドでのアクティブ接続の処理に使用されます。iOS では通知はエージェント アラートに使用されます。" },
      { label: "ストレージ アクセス", body: "ファイル転送と鍵の取り込みフローで使用されます。iOS ではシステムのドキュメント ピッカーとフォト ピッカーを経由します。" }
    ],
    securityHeading: "セキュリティ上の責任",
    securityBody:
      "認証情報や秘密鍵を保存する場合は、強固な画面ロックで端末を保護してください。信頼できるサーバーにのみ接続してください。現行実装は、別建ての暗号化クラウド ボルトではなく、アプリのローカル ストレージ（および iOS の Keychain）を使用します。Android では、オプションのセキュア スクリーン設定がスクリーンショットと画面録画をブロックし、最近のアプリ表示からアプリを隠します。",
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
      { slug: "port-forwarding",  title: "ポート転送",             text: "ローカル トンネル文字列の設定と、接続中のアクティブな転送の管理。" },
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
    licenseValue: "MIT",
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
