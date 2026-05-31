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
    tagline: "Android 端末向けに絞り込んだ SSH／SFTP／ターミナル ワークフロー。",
    documentation: "ドキュメント",
    comparison: "比較",
    privacy: "プライバシー",
    contact: "お問い合わせ",
    feedback: "フィードバック"
  },
  home: {
    metaTitle: "Mobile SSH — Android 用 SSH クライアント",
    metaDescription:
      "Mobile SSH は、マルチセッション端末、SFTP 転送、秘密鍵、ポートフォワード、tmux に配慮した操作を備えた、Android 向けの絞り込まれた SSH クライアントです。",
    eyebrow: "Android 用 SSH クライアント",
    h1: "Mobile SSH",
    intro:
      "Android 向けの絞り込まれた SSH クライアント。マルチセッション端末、秘密鍵認証、SFTP ファイル転送、ローカル ポートフォワード、tmux に配慮した操作をスマホとタブレットのために用意しました。",
    versionLine: "{count} 言語に対応 · バージョン {version}",
    ctaDocs: "ドキュメントを読む",
    ctaPlay: "Google Play で手に入れよう",
    advantagesHead: "Mobile SSH を選ぶ理由",
    advantagesIntro: "モバイル SSH クライアントが取りこぼしがちなポイントに合わせて作られています。",
    advantages: [
      { title: "Pro 版なし、広告なし", text: "すべての機能が同じアプリの中にあります。基本機能を Pro アップグレードの裏に隠すペイウォールはなく、ターミナルに広告バナーも出ません。" },
      { title: "データは端末内に留まる", text: "保存したサーバー、認証情報、鍵はすべて端末内。クラウドアカウント不要、停止される心配なし。" },
      { title: "保存ホストにワンタップ接続", text: "一度ホストを登録すれば、鍵・ポート・設定済みトンネルとともにワンタップで再接続。" },
      { title: "キーボード上のターミナルキー", text: "ESC、TAB、CTRL、ALT、FN、矢印、Home、End、PgUp/PgDn の専用列を Gboard の予測と衝突せずに表示。" },
      { title: "コマンド不要のポート転送", text: "トンネルはサーバープロファイルに紐づき、接続と同時に自動で立ち上がります。" },
      { title: "ロックや回線切替に強い", text: "フォアグラウンドサービス、ウェイクロック、自動再接続で、画面オフ・アプリ切替・ネットワーク変更を越えてセッションを維持。" }
    ],
    sectionAHead: "Android 上の SSH 作業を中心に設計",
    sectionAIntro:
      "Mobile SSH は管理者の定番ルートを短くします。サーバーを保存し、つなぎ、セッションを維持し、必要なときにファイルを動かし、すばやくアクティブな端末に戻れます。",
    features: [
      { title: "SSH ターミナル", text: "VT100/xterm-256color のエミュレーション。色、カーソル キー、スクロールバック、コピー、Android キーボードに対応。" },
      { title: "マルチセッション グリッド", text: "同時に最大 8 セッション。ペインをタップして切り替え、ダブルタップでフルスクリーン。" },
      { title: "秘密鍵", text: "パスワードまたは取り込み/貼り付け済みの秘密鍵を使用可能。Ed25519、RSA、ECDSA、DSA に対応。" },
      { title: "SFTP 転送", text: "ローカル／リモートのブラウザ ペインで、端末ストレージとリモートサーバー間でファイルを移動。" },
      { title: "ポートフォワード", text: "ローカルトンネル定義をサーバープロファイルとともに保存、または接続中に追加可能。" },
      { title: "再接続ワークフロー", text: "前面サービス、wake lock、keepalive、再接続の試行が、モバイル回線の変化を越えてセッションを維持。" },
      { title: "端末選択", text: "端末テキストを選択してコピー、共有、画面の全選択。コピーは Android クリップボードへ。" },
      { title: "モバイル キーボードに優しい", text: "Gboard の候補と音声入力が拡張キーバーと併用可能。入力中テキストは単語境界までバッファ。" }
    ],
    multiHead: "ひとつの画面で複数のシェル",
    multiP1:
      "端末ビューはグリッドで複数のアクティブな SSH セッションを保持できます。ペインをタップして入力、拡張キーバーで端末操作、ピンチで文字サイズ調整、ダブルタップでフルスクリーン フォーカス。",
    multiP2:
      "セッション履歴とアクティブセッションの復元により、アプリ切り替え、画面ロック、Android アクティビティの再生成のあとも作業に戻れます。",
    multiAlt:
      "10 インチの Android タブレットで Mobile SSH が 4 つのアクティブな SSH 端末ペインを並べて表示。",
    sftpHead: "端末だけでは足りないときの SFTP",
    sftpBody:
      "接続済みセッションからファイル転送を開いて、端末ストレージとリモートディレクトリを参照できます。アップロードとダウンロードをキューに入れ、並べ替え、ホストごとの最近のパスを記憶し、リモートのファイル権限を確認しながら移動できます。",
    sftpCtaGuide: "ファイル転送ガイド",
    sftpCtaAll: "すべての機能",
    sftpAlt: "スマートフォンの Mobile SSH ファイル転送画面（ローカルとリモートのパネル付き）。",
    galleryHead: "実機でのスクリーンショット",
    galleryIntro:
      "Android スマートフォンのスクリーンショット — サーバー追加、端末作業、複数セッション、SFTP でのファイル移動などで実際に使う画面です。",
    galleryAlts: [
      "Mobile SSH のスタート画面（サーバー、認証情報、ログ、設定、デバッグ、バージョン情報のタイル）。",
      "サーバー追加ダイアログ（ホスト、ポート、認証情報、秘密鍵、ポート転送のフィールド）。",
      "単一セッションの SSH 端末（下部に拡張キーバー付き）。",
      "縦に並んだ 2 つの SSH セッション（アクティブなペインを強調）。",
      "SFTP ファイル転送画面（マイフォンとリモートホストのパネル）。",
      "バージョン情報ダイアログ（バージョン、作者、ライセンス、サイト）。"
    ],
    compareHead: "Termux や Termius の中での立ち位置",
    compareIntro:
      "Mobile SSH は意図的に狭い範囲に絞られています。完全な Linux 環境でも、クロスプラットフォームのチーム用ボルトでもありません。モバイル ユーザーが最もよく使うセッション操作にすばやくアクセスできるローカルな Android SSH／SFTP ツールです。",
    compareGuideTitle: "比較ガイド",
    compareGuideText: "Android で Mobile SSH、Termux、Termius のどれを選ぶか。",
    privacyTitle: "プライバシーポリシー",
    privacyText: "接続データのうちどれが端末にローカル保存され、何がサーバーに送られるかを確認します。"
  },
  features: {
    metaTitle: "機能 | Mobile SSH",
    metaDescription:
      "Android の SSH、ターミナル、SFTP、秘密鍵、tmux、ポート転送に関する Mobile SSH の主な機能。",
    eyebrow: "機能一覧",
    h1: "Mobile SSH の機能",
    intro:
      "Mobile SSH は Android で直接 SSH を使うために作られています。端末を開き、生かし続け、ファイルを動かし、サーバーを保存し、モバイルの中断からすばやく復帰します。",
    groups: [
      {
        title: "接続",
        items: [
          "パスワード認証と秘密鍵認証",
          "現行実装が対応する Ed25519、RSA、ECDSA、DSA の秘密鍵",
          "ホスト、ポート、ユーザー、認証情報、秘密鍵、トンネル設定を含む保存済みサーバープロファイル",
          "サーバー設定で選べる再利用可能な認証情報レコード",
          "よく使うサーバー群へ再接続するための最近のセッション履歴",
          "成功と失敗のログイン履歴"
        ]
      },
      {
        title: "ターミナル",
        items: [
          "VT100/xterm-256color 風のターミナル動作",
          "5000 行のスクロールバック バッファ",
          "ESC、TAB、CTRL、Shift、矢印、Home、End、PgUp、PgDn、キーボード切替の拡張キーバー",
          "タップでフォーカス、任意で「タップでキーボードを表示」、コピー／全コピー",
          "ピンチで文字サイズ変更（リモート端末リサイズ付き）",
          "ペインのダブルタップでフルスクリーン",
          "端末テキスト選択（コピー、共有、すべて選択）",
          "Gboard の候補／自動修正と音声入力に対応、入力中テキストのバッファあり"
        ]
      },
      {
        title: "セッション",
        items: [
          "同時最大 8 つの SSH セッション",
          "アクティブセッションのグリッド表示",
          "バックグラウンドや画面ロックに耐える前面サービス",
          "Keepalive と指数バックオフ付き再接続",
          "スタート画面からの「アクティブセッション」入口",
          "tmux コマンド追跡と中断した作業向けの reattach ヒント"
        ]
      },
      {
        title: "ファイルとトンネル",
        items: [
          "ローカルとリモートの二画面 SFTP ブラウザ",
          "アップロード／ダウンロードのキュー",
          "リモートの名前変更、削除、作成、編集、詳細",
          "名前または日付による並び替え（ホスト単位で記憶）",
          "サーバープロファイルに保存されるローカル ポートフォワード",
          "接続中セッション向けランタイム トンネル追加／削除ビュー"
        ]
      },
      {
        title: "ローカライズ",
        items: [
          "UI 翻訳：アラビア語、ベンガル語、中国語（簡体・繁体）、英語、フランス語、ドイツ語、ヒンディー語、インドネシア語、日本語、マラーティー語、ナイジェリアン ピジン、ポルトガル語、ロシア語、スペイン語、タミル語、テルグ語、トルコ語、ウルドゥー語",
          "Android のシステム言語に追従。アプリ内の言語ピッカーは不要"
        ]
      }
    ],
    security:
      "セキュリティ注記：現行のアプリは保存済みのサーバーと認証情報を Android 端末にローカル保存します。クラウド同期は提供しません。強固な画面ロックで端末を保護し、共有端末では認証情報を保存しないでください。"
  },
  compare: {
    metaTitle: "Android の Mobile SSH／Termux／Termius",
    metaDescription:
      "Android の SSH ワークフローにおける Mobile SSH、Termux、Termius のバランスの取れた比較。",
    eyebrow: "Android の SSH 選択肢",
    h1: "Mobile SSH／Termux／Termius",
    intro:
      "これらは SSH の周りで重なりますが、目的は異なります。Mobile SSH は Android に絞った SSH／SFTP クライアント、Termux は Linux 環境、Termius はアカウント基盤の生産性機能を備えたクロスプラットフォーム SSH クライアントです。",
    columns: {
      need: "目的",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "主な用途",
        mobileSsh: "Android 向けの SSH、SFTP、ローカル トンネル、端末の専用クライアント。",
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
        need: "Android の端末操作",
        mobileSsh: "拡張キーバー、グリッド セッション、フルスクリーン ペイン、ピンチ ズーム、コピー／共有付き選択、Gboard 候補、音声入力、tmux に配慮したスクロール。",
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
        mobileSsh: "Android のグリッドで同時最大 8 つの SSH セッション。",
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
        mobileSsh: "Android からサーバーに接続し、ファイルを転送し、セッションを生かし続けたいときの軽量アプリ。",
        termux: "Android 上で本格的なコマンドライン環境が必要で、パッケージの導入や設定に慣れている人向け。",
        termius: "端末をまたいだ同期、洗練された生産性機能、ボルト、コラボレーションが必要な人向け。"
      }
    ],
    cards: [
      {
        title: "Mobile SSH を選ぶとき",
        body: "完全な Linux 環境やクラウド同期アカウントを構築せずに、Android から直接 SSH したい場合。保存済みサーバー、SFTP、tmux セッション、素早いローカル トンネルに特に向いています。"
      },
      {
        title: "Termux を選ぶとき",
        body: "Android 端末上で直接、パッケージ管理、シェル、コンパイラ、スクリプティング、rsync、curl、Git、Python、Node.js などの Linux ライクなツールが必要な場合。"
      },
      {
        title: "Termius を選ぶとき",
        body: "暗号化ボルトの同期、チーム共有、キーチェーン管理、スニペット、複数端末で一貫したアプリを備えた商用のクロスプラットフォーム SSH ワークスペースが必要な場合。"
      }
    ]
  },
  privacy: {
    metaTitle: "プライバシーポリシー | Mobile SSH",
    metaDescription:
      "ローカル保存、SSH データ送信、ファイル転送、ログ、Android パーミッションを含む Mobile SSH のプライバシーポリシー。",
    eyebrow: "プライバシー",
    h1: "プライバシーポリシー",
    intro:
      "Mobile SSH はローカルな Android SSH クライアントとして設計されています。Mobile SSH アカウントは不要で、Mobile SSH のクラウド同期サービスは提供しません。",
    sections: [
      {
        heading: "端末に保存される情報",
        body: "アプリのデータを保存することを選んだ場合、Mobile SSH はそれを Android 端末にローカル保存します。保存されるものには、サーバープロファイル、ユーザー名、ポート、パスワード、秘密鍵、鍵のパスフレーズ、ポート転送ルール、最近のセッション、ログイン試行履歴、ファイル転送のパス、並べ替え設定、tmux の reattach ヒント、アプリ設定、デバッグ記録が有効な場合のデバッグログが含まれます。"
      },
      {
        heading: "ネットワーク経由で送信される情報",
        body: "Mobile SSH は SSH 認証データを、ユーザーが設定して接続するサーバーにのみ送信します。端末入出力、SFTP ファイルの内容、ローカル ポート転送のトラフィックは、ユーザーが選んだサーバーやリモート エンドポイントとの間でやり取りされます。Mobile SSH のアナリティクス、広告、テレメトリ、クラウド同期サービスにこれらのデータを送信することはありません。"
      },
      {
        heading: "ファイル転送とストレージ アクセス",
        body: "ファイル転送機能は、ファイルをアップロード／ダウンロードするために端末ローカルのストレージとリモートの SFTP ディレクトリを参照します。それを必要とする Android のバージョンでは、ローカル ファイル ブラウザが選択ファイルを読み書きできるようにストレージ アクセスを要求する場合があります。"
      },
      {
        heading: "ログとトラブルシューティング",
        body: "ログイン履歴と任意のデバッグログはトラブルシューティングのためにローカル保存されます。デバッグログには端末イベント、SSH データのサイズ、タッチ入力の診断、リサイズ イベント、トンネルのライフサイクル イベントが含まれることがあります。デバッグ アーカイブをサポートや他者に共有する前に内容を確認してください。"
      }
    ],
    permissionsHeading: "パーミッション",
    permissions: [
      { label: "インターネット", body: "SSH サーバーへの接続に必要です。" },
      { label: "Wake lock と Wi-Fi lock", body: "端末がスリープ中もアクティブな SSH セッションを維持するために使用されます。" },
      { label: "前面サービスと通知", body: "バックグラウンドでのアクティブ接続の処理に使用されます。" },
      { label: "ストレージ アクセス", body: "ファイル転送と鍵の取り込みフローで使用されます。" }
    ],
    securityHeading: "セキュリティ上の責任",
    securityBody:
      "認証情報や秘密鍵を保存する場合は、強固な画面ロックで Android 端末を保護してください。信頼できるサーバーにのみ接続してください。現行実装は、別建ての暗号化クラウド ボルトではなく、アプリのローカル ストレージを使用します。",
    contactHeading: "お問い合わせ",
    contactBody: "サポート連絡先：[mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)。"
  },
  docsIndex: {
    metaTitle: "ドキュメント | Mobile SSH",
    metaDescription: "Android 向け Mobile SSH のエンドユーザー ドキュメント。",
    eyebrow: "ユーザー ガイド",
    h1: "Mobile SSH ドキュメント",
    intro:
      "Mobile SSH のインストール、接続、セッション管理、ファイル転送、ポート転送、トラブルシューティングの公開ガイドとしてこれらのページをご利用ください。",
    cards: [
      { slug: "getting-started",  title: "はじめに",         text: "インストール、アプリの起動、最初のサーバーへの接続、よく使うホストの保存。" },
      { slug: "terminal",         title: "ターミナル",       text: "ペイン、拡張キーバー、スクロール、コピー操作、tmux 動作、キーボード設定。" },
      { slug: "file-transfer",    title: "ファイル転送",     text: "端末とサーバーのファイル閲覧、アップロード、ダウンロード、並べ替え、リモート詳細の確認。" },
      { slug: "port-forwarding",  title: "ポート転送",       text: "ローカル トンネル文字列の設定と、接続中のアクティブな転送の管理。" },
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
    metaDescription: "Mobile SSH について：Android 用 SSH クライアントのバージョン、作者、ライセンス、オープンソース表記。",
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
      { name: "JSch (mwiede fork)",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch" },
      { name: "JZlib (bundled in JSch)",   license: "BSD 3-clause" },
      { name: "jBCrypt (bundled in JSch)", license: "ISC" },
      { name: "Ed25519 / Ed448 Java",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java" },
      { name: "StringFog",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog" }
    ],
    contactHeading: "お問い合わせ",
    contactBody: "サポート連絡先：[mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)。"
  }
};
