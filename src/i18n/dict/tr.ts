import type { Dict } from "../types";

export const tr: Dict = {
  meta: {
    siteName: "Mobile SSH",
    languageLabel: "Dil",
    languageSwitcher: "Dili değiştir"
  },
  nav: {
    home: "Ana sayfa",
    features: "Özellikler",
    docs: "Belgeler",
    compare: "Karşılaştır",
    privacy: "Gizlilik"
  },
  footer: {
    tagline: "Android cihazlar için odaklanmış SSH, SFTP ve terminal akışları.",
    documentation: "Belgeler",
    comparison: "Karşılaştırma",
    privacy: "Gizlilik",
    contact: "İletişim"
  },
  home: {
    metaTitle: "Mobile SSH — Android için SSH istemcisi",
    metaDescription:
      "Mobile SSH; çoklu oturum terminalleri, SFTP aktarımı, özel anahtarlar, port yönlendirme ve tmux uyumlu akışlar sunan, Android için odaklanmış bir SSH istemcisidir.",
    eyebrow: "Android için SSH istemcisi",
    h1: "Mobile SSH",
    intro:
      "Android için odaklanmış bir SSH istemcisi: çoklu oturum terminalleri, özel anahtarla kimlik doğrulama, SFTP dosya aktarımı, yerel port yönlendirme ve telefon ile tablet için tmux uyumlu kontroller.",
    versionLine: "19 dilde mevcut · sürüm 1.4",
    ctaDocs: "Belgeleri oku",
    ctaPlay: "Yakında Google Play'de",
    sectionAHead: "Android'de SSH çalışması için tasarlandı",
    sectionAIntro:
      "Mobile SSH yaygın yönetim yolunu kısaltır: sunucuyu kaydet, bağlan, oturumları canlı tut, gerektiğinde dosya taşı ve hızlıca aktif terminallere geri dön.",
    features: [
      { title: "SSH terminali", text: "Renk, imleç tuşları, geri kaydırma, kopyalama ve Android klavye desteğiyle VT100/xterm-256color emülasyonu." },
      { title: "Çoklu oturum ızgarası", text: "Aynı anda sekiz oturuma kadar; panele dokunarak geç, panele çift dokunarak tam ekrana al." },
      { title: "Özel anahtarlar", text: "Parolalar veya içe aktarılan/yapıştırılan özel anahtarlar; uygulamanın desteklediği Ed25519, RSA, ECDSA ve DSA dahil." },
      { title: "SFTP aktarımı", text: "Yerel ve uzak gezgin panelleriyle telefon depolaması ile uzak sunucu arasında dosya taşı." },
      { title: "Port yönlendirme", text: "Yerel tünel tanımlarını sunucu profiline kaydet veya bağlıyken tünel ekle." },
      { title: "Yeniden bağlanma", text: "Ön plan servisi, wake lock, keepalive ve yeniden bağlanma denemeleri oturumların mobil ağ değişikliklerine dayanmasını sağlar." },
      { title: "Terminal seçimi", text: "Terminal metnini seç, kopyala, paylaş veya görünen tamponun tamamını seç; kopyalar Android panosuna gider." },
      { title: "Mobil klavye dostu", text: "Gboard önerileri ve sesli giriş ek tuş satırıyla birlikte çalışır; yazılmakta olan metin sözcük sınırına kadar tamponlanır." }
    ],
    multiHead: "Tek ekran, birkaç canlı kabuk",
    multiP1:
      "Terminal görünümü ızgarada birden çok aktif SSH oturumunu tutabilir. Yazmak için bir paneli seç, terminal kontrolleri için ek tuş satırını kullan, metin boyutunu sıkıştırarak ayarla ve tam ekran odaklanmak için bir panele çift dokun.",
    multiP2:
      "Oturum geçmişi ve aktif oturum kurtarma, uygulama değişimleri, ekran kilidi veya Android aktivitesinin yeniden oluşturulmasının ardından sürmekte olan işe dönmene yardım eder.",
    multiAlt:
      "10 inçlik Android tablette Mobile SSH, yan yana dört aktif SSH terminal panelini gösteriyor.",
    sftpHead: "Terminal yetmediğinde SFTP",
    sftpBody:
      "Telefon depolamasını ve uzak dizinleri taramak için bağlı bir oturumdan dosya aktarımını aç. Yüklemeleri ve indirmeleri sıraya al, dosyaları sırala, her ana bilgisayar için son yolları hatırla ve taşımadan önce uzak izinleri incele.",
    sftpCtaGuide: "Dosya aktarımı kılavuzu",
    sftpCtaAll: "Tüm özellikler",
    sftpAlt: "Bir telefonda Mobile SSH dosya aktarımı ekranı; yerel ve uzak panellerle.",
    galleryHead: "Gerçek bir cihazda gör",
    galleryIntro:
      "Android telefonlardan ekran görüntüleri — sunucu eklemek, terminallerde çalışmak, birden çok oturum yürütmek ve SFTP ile dosya taşımak için kullanacağın aynı ekranlar.",
    galleryAlts: [
      "Bir telefonda Mobile SSH başlangıç ekranı; Sunucular, Kimlik Bilgileri, Günlükler, Ayarlar, Hata Ayıklama ve Hakkında kutucukları.",
      "Bir telefonda Sunucu Ekle iletişim kutusu; ana bilgisayar, port, kimlik bilgileri, özel anahtar ve port yönlendirme alanları.",
      "Bir telefonda tek oturumlu SSH terminali; en altta ek tuş satırı.",
      "Bir telefonda üst üste iki SSH oturumu; aktif panel vurgulu.",
      "Bir telefonda SFTP dosya aktarımı ekranı; Telefonum ve Uzak Sunucu panelleri.",
      "Bir telefonda Hakkında iletişim kutusu; sürüm, yazar, lisans ve web sitesi alanları."
    ],
    compareHead: "Termux ve Termius yanında yeri",
    compareIntro:
      "Mobile SSH kasıtlı olarak dar tutulmuştur: ne tam bir Linux ortamıdır ne de çapraz platform takım kasası. Mobil kullanıcıların en çok ihtiyaç duyduğu oturum kontrollerine hızlı erişim sağlayan, Android için yerel bir SSH/SFTP aracıdır.",
    compareGuideTitle: "Karşılaştırma kılavuzu",
    compareGuideText: "Android cihazlarda Mobile SSH, Termux veya Termius'tan hangisini ne zaman seçmeli.",
    privacyTitle: "Gizlilik politikası",
    privacyText: "Hangi bağlantı verilerinin yerel kaldığını ve sunucularına ne gönderildiğini incele."
  },
  features: {
    metaTitle: "Özellikler | Mobile SSH",
    metaDescription:
      "Android'de SSH, terminal, SFTP, özel anahtar, tmux ve port yönlendirme akışları için Mobile SSH'nin temel özellikleri.",
    eyebrow: "Özellik listesi",
    h1: "Mobile SSH özellikleri",
    intro:
      "Mobile SSH, Android'de doğrudan SSH kullanımı için kurulmuştur: terminalleri aç, canlı tut, dosya taşı, sunucu kaydet ve mobil kesintilerden hızla kurtul.",
    groups: [
      {
        title: "Bağlantılar",
        items: [
          "Parola ve özel anahtarla kimlik doğrulama",
          "Mevcut uygulamanın desteklediği Ed25519, RSA, ECDSA ve DSA özel anahtarları",
          "Ana bilgisayar, port, kullanıcı, kimlik bilgisi, özel anahtar ve isteğe bağlı tünelle birlikte kaydedilmiş sunucu profilleri",
          "Sunucu kurulumunda seçilebilen yeniden kullanılabilir kimlik bilgisi kayıtları",
          "Sık kullanılan sunucu setlerine yeniden bağlanmak için son oturum geçmişi",
          "Başarılı ve başarısız giriş denemeleri günlüğü"
        ]
      },
      {
        title: "Terminal",
        items: [
          "VT100/xterm-256color tarzı terminal davranışı",
          "5000 satırlık geri kaydırma tamponu",
          "ESC, TAB, CTRL, Shift, oklar, Home, End, PgUp, PgDn ve klavye geçişi için ek tuş satırı",
          "Dokunarak odaklan, isteğe bağlı «dokununca klavyeyi göster», kopyala ve tümünü kopyala eylemleri",
          "Sıkıştırarak metin boyutunu değiştir ve uzak terminali yeniden boyutlandır",
          "Çift dokunarak panel tam ekran modu",
          "Kopyala, Paylaş ve Tümünü seç eylemleriyle terminal metni seçimi",
          "Gboard önerisi/otomatik düzeltme ve sesli giriş desteği; yazılan metin için tamponlama"
        ]
      },
      {
        title: "Oturumlar",
        items: [
          "Eşzamanlı sekiz SSH oturumuna kadar",
          "Aktif oturumlar için ızgara düzeni",
          "Arka plan ve ekran kilidi dayanıklılığı için ön plan servisi",
          "Üstel gerilemeli keepalive ve yeniden bağlanma denemeleri",
          "Başlangıç ekranından Aktif Oturumlar girişi",
          "Kesintiye uğrayan iş için tmux komut izleme ve reattach ipuçları"
        ]
      },
      {
        title: "Dosyalar ve tüneller",
        items: [
          "Yerel ve uzak dosyalar için çift panelli SFTP gezgini",
          "Sıraya alınmış yükleme ve indirme işlemleri",
          "Uzak yeniden adlandırma, silme, oluşturma, düzenleme ve ayrıntılar",
          "Her ana bilgisayar için kalıcı, ada veya tarihe göre sıralama",
          "Sunucu profilleriyle kaydedilen yerel port yönlendirme",
          "Bağlı oturumlar için çalışma zamanı tünel ekle/kaldır görünümü"
        ]
      },
      {
        title: "Yerelleştirme",
        items: [
          "Uygulama arayüzü çevirileri: Arapça, Bengalce, Çince (Basitleştirilmiş ve Geleneksel), İngilizce, Fransızca, Almanca, Hintçe, Endonezce, Japonca, Marathi, Nijerya Pidgin, Portekizce, Rusça, İspanyolca, Tamilce, Telugu, Türkçe, Urduca",
          "Android sistem dilini takip eder; uygulama içi seçici gerektirmez"
        ]
      }
    ],
    security:
      "Güvenlik notu: mevcut uygulama, kaydedilen sunucu ve kimlik bilgisi kayıtlarını Android cihazda yerel olarak saklar. Bulut eşitlemesi sunmaz. Cihazı güçlü bir ekran kilidiyle koru ve paylaşılan cihazlarda kimlik bilgilerini kaydetmekten kaçın."
  },
  compare: {
    metaTitle: "Android'de Mobile SSH ile Termux ve Termius",
    metaDescription:
      "Android SSH akışları için Mobile SSH, Termux ve Termius'un dengeli karşılaştırması.",
    eyebrow: "Android'de SSH seçenekleri",
    h1: "Mobile SSH, Termux ve Termius",
    intro:
      "Bu araçlar SSH çevresinde örtüşür ama farklı işler için tasarlanmıştır. Mobile SSH Android için odaklanmış SSH/SFTP istemcisidir, Termux bir Linux ortamıdır ve Termius hesap tabanlı üretkenlik özellikleri olan çapraz platform bir SSH istemcisidir.",
    columns: {
      need: "İhtiyaç",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "Temel amaç",
        mobileSsh: "Android için adanmış SSH, SFTP, yerel tünel ve terminal istemcisi.",
        termux: "APT paketli Android terminal emülatörü ve Linux ortamı.",
        termius: "Android, iOS, masaüstü ve web odaklı takım akışları için modern SSH istemcisi."
      },
      {
        need: "Kurulum tarzı",
        mobileSsh: "Bir ana bilgisayar gir veya sunucu profili kaydet, sonra doğrudan bağlan.",
        termux: "OpenSSH gibi paketleri yükle, kabuk araçlarını yapılandır ve Linux benzeri komut satırından çalış.",
        termius: "Ana bilgisayarları, anahtarları, parçacıkları ve kasaları Termius uygulama/hesap modeliyle oluştur veya eşitle."
      },
      {
        need: "Android terminal kontrolleri",
        mobileSsh: "Yerleşik ek tuş satırı, ızgara oturumları, tam ekran paneller, sıkıştırarak yakınlaştırma, kopya/paylaş ile seçim, Gboard önerileri, sesli giriş ve tmux uyumlu kaydırma.",
        termux: "Güçlü terminal ortamı; davranış yüklü araçlara ve yapılandırmaya bağlı.",
        termius: "Mobil klavye eklentisi, hareketler, sekmeler, otomatik tamamlama, parçacıklar ve cilalı terminal deneyimi."
      },
      {
        need: "Dosya aktarımı",
        mobileSsh: "Aktif SSH oturumuna bağlı, yerleşik çift panelli SFTP aktarımı.",
        termux: "scp, sftp, rsync gibi komut satırı araçlarını veya yüklü dosya yardımcılarını kullan.",
        termius: "Yerleşik SFTP ile ana bilgisayar/anahtar yönetimi."
      },
      {
        need: "Çoklu oturum çalışması",
        mobileSsh: "Android ızgarasında eşzamanlı sekiz SSH oturumuna kadar.",
        termux: "Termux içinde veya uzak kabuklarda tmux gibi çoğullayıcıları kullan.",
        termius: "Platform ve plana göre sekmeler ve bölünmüş görünüm akışları."
      },
      {
        need: "Veri modeli",
        mobileSsh: "Yalnızca yerel olarak kaydedilen sunucular, kimlik bilgileri, geçmiş, ayarlar ve günlükler.",
        termux: "Termux uygulama ortamının içindeki Linux benzeri dosya sistemi ve paketler.",
        termius: "Ana bilgisayar, anahtar, parçacık, yönlendirme kuralları, known hosts ve takım paylaşımı için şifreli kasalar."
      },
      {
        need: "En uygun durum",
        mobileSsh: "Sunuculara bağlanmak, dosya aktarmak ve oturumları canlı tutmak için basit bir Android uygulaması istiyorsun.",
        termux: "Android'de tam bir komut satırı ortamı istiyorsun ve paket kurmaya/yapılandırmaya hakimsin.",
        termius: "Cihazlar arası eşitleme, cilalı üretkenlik özellikleri, kasalar ve iş birliği istiyorsun."
      }
    ],
    cards: [
      {
        title: "Şu durumlarda Mobile SSH'yi seç",
        body: "Tam bir Linux ortamı veya buluta eşitlenen bir hesap modeli kurmadan Android'den doğrudan SSH erişimi istiyorsan. Kaydedilmiş sunucular, SFTP, tmux oturumları ve hızlı yerel tünel akışları için özellikle uygundur."
      },
      {
        title: "Şu durumlarda Termux'u seç",
        body: "Android cihazda doğrudan paket yönetimi, kabuklar, derleyiciler, betikleme, rsync, curl, Git, Python, Node.js veya benzeri Linux araçlarına ihtiyacın varsa."
      },
      {
        title: "Şu durumlarda Termius'u seç",
        body: "Şifreli kasa eşitlemesi, takım paylaşımı, anahtarlık yönetimi, parçacıklar ve birden çok cihazda tutarlı bir uygulamayla ticari, çapraz platform bir SSH çalışma alanı istiyorsan."
      }
    ],
    sources:
      "Kaynaklar: Termux, [termux.dev](https://termux.dev/en/) adresinde kendini APT paketli ve OpenSSH destekli bir Android terminal emülatörü ve Linux ortamı olarak tanımlar. Termius, [Android sayfasında](https://www.termius.com/free-ssh-client-for-android) ve [kasa belgelerinde](https://termius.com/documentation/set-up-vaults) SSH, SFTP, Mosh, Telnet, Serial, klavye eklentileri, SFTP, şifreli kasalar ve anahtar yönetimini açıklar."
  },
  privacy: {
    metaTitle: "Gizlilik Politikası | Mobile SSH",
    metaDescription:
      "Mobile SSH'nin gizlilik politikası: yerel depolama, SSH veri aktarımı, dosya aktarımı, günlükler ve Android izinleri.",
    eyebrow: "Gizlilik",
    h1: "Gizlilik Politikası",
    intro:
      "Mobile SSH, Android için yerel bir SSH istemcisi olarak tasarlanmıştır. Mobile SSH hesabı gerektirmez ve Mobile SSH bulut eşitleme hizmeti sunmaz.",
    sections: [
      {
        heading: "Cihazınızda saklanan bilgiler",
        body: "Uygulama verilerini kaydetmeyi seçerseniz Mobile SSH bunları Android cihazda yerel olarak saklar. Bu; kaydedilmiş sunucu profilleri, kullanıcı adları, portlar, parolalar, özel anahtarlar, anahtar parolaları, port yönlendirme kuralları, son oturumlar, giriş denemesi geçmişi, dosya aktarım yolları, sıralama tercihleri, tmux reattach ipuçları, uygulama ayarları ve hata ayıklama kaydı etkinken hata ayıklama günlüklerini içerebilir."
      },
      {
        heading: "Ağ üzerinden gönderilen bilgiler",
        body: "Mobile SSH yalnızca yapılandırıp bağlandığınız sunuculara SSH kimlik doğrulama verisi gönderir. Terminal girişi/çıkışı, SFTP dosya içeriği ve yerel port yönlendirilmiş trafik, seçtiğiniz sunucu ve uzak uç noktalarla değiş tokuş edilir. Mobile SSH bu verileri herhangi bir Mobile SSH analitik, reklam, telemetri veya bulut eşitleme hizmetine göndermez."
      },
      {
        heading: "Dosya aktarımı ve depolama erişimi",
        body: "Dosya aktarımı özelliği, yerel telefon depolamasını ve uzak SFTP dizinlerini dosya yüklemek ve indirmek için tarar. Bunu gerektiren Android sürümlerinde uygulama, yerel dosya gezgininin seçili dosyaları okuyup yazabilmesi için depolama erişimi isteyebilir."
      },
      {
        heading: "Günlükler ve sorun giderme",
        body: "Giriş geçmişi ve isteğe bağlı hata ayıklama günlükleri sorun giderme için yerel olarak saklanır. Hata ayıklama günlükleri terminal olaylarını, SSH veri boyutlarını, dokunma giriş tanılamalarını, yeniden boyutlandırma olaylarını ve tünel yaşam döngüsü olaylarını içerebilir. Bir hata ayıklama arşivini destek ekibi veya başka biriyle paylaşmadan önce gözden geçirin."
      }
    ],
    permissionsHeading: "İzinler",
    permissions: [
      { label: "İnternet", body: "SSH sunucularına bağlanmak için gereklidir." },
      { label: "Wake lock ve Wi-Fi lock", body: "cihaz uykudayken aktif SSH oturumlarını canlı tutmak için kullanılır." },
      { label: "Ön plan servisi ve bildirimler", body: "arka planda aktif bağlantıları yönetmek için kullanılır." },
      { label: "Depolama erişimi", body: "dosya aktarımı ve anahtar içe aktarma akışları tarafından kullanılır." }
    ],
    securityHeading: "Güvenlik sorumlulukları",
    securityBody:
      "Kimlik bilgilerini veya özel anahtarları kaydederseniz Android cihazınızı güçlü bir ekran kilidiyle koruyun. Yalnızca güvendiğiniz sunuculara bağlanın. Mevcut uygulama, ayrı bir şifreli bulut kasası yerine yerel uygulama depolamasını kullanır.",
    contactHeading: "İletişim",
    contactBody: "Destek iletişimi: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  },
  docsIndex: {
    metaTitle: "Belgeler | Mobile SSH",
    metaDescription: "Android'deki Mobile SSH için son kullanıcı belgeleri.",
    eyebrow: "Kullanıcı kılavuzu",
    h1: "Mobile SSH belgeleri",
    intro:
      "Mobile SSH'yi kurmak, bağlanmak, oturumları yönetmek, dosya aktarmak, port yönlendirmek ve sorunları çözmek için bu sayfaları genel kılavuz olarak kullanın.",
    cards: [
      { slug: "getting-started",  title: "Başlarken",      text: "Kur, uygulamayı aç, ilk sunucuna bağlan ve sık kullanılan ana bilgisayarları kaydet." },
      { slug: "terminal",         title: "Terminal",       text: "Paneller, ek tuş satırı, kaydırma, kopyalama eylemleri, tmux davranışı ve klavye ayarları." },
      { slug: "file-transfer",    title: "Dosya aktarımı", text: "Telefon ve sunucu dosyalarını gez, yükle, indir, sırala ve uzak ayrıntıları incele." },
      { slug: "port-forwarding",  title: "Port yönlendirme", text: "Yerel tünel dizelerini yapılandır ve bağlıyken aktif yönlendirmeleri yönet." },
      { slug: "troubleshooting",  title: "Sorun giderme",   text: "Bağlantı, kimlik doğrulama, klavye, depolama ve yeniden bağlanma sorunlarını çöz." }
    ]
  },
  docsNav: {
    home: "Belgeler ana sayfa",
    gettingStarted: "Başlarken",
    terminal: "Terminal",
    fileTransfer: "Dosya aktarımı",
    portForwarding: "Port yönlendirme",
    troubleshooting: "Sorun giderme"
  }
};
