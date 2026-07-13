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
    about: "Hakkında",
    privacy: "Gizlilik"
  },
  footer: {
    tagline: "Android ve iOS cihazlar için odaklanmış SSH, SFTP ve terminal akışları.",
    documentation: "Belgeler",
    comparison: "Karşılaştırma",
    privacy: "Gizlilik",
    contact: "İletişim",
    feedback: "Geri Bildirim"
  },
  home: {
    metaTitle: "Mobile SSH — Android ve iOS için SSH istemcisi",
    metaDescription:
      "Mobile SSH; çoklu oturum terminalleri, Eternal Terminal dayanıklı oturumları, tmux yöneticisi, SFTP aktarımı, özel anahtarlar, port yönlendirme ve eklentiler sunan, Android ve iOS için odaklanmış bir SSH istemcisidir.",
    eyebrow: "Android ve iOS için SSH istemcisi",
    h1: "Mobile SSH",
    intro:
      "Android ve iOS için odaklanmış bir SSH istemcisi: çoklu oturum terminalleri, ağ kesintilerine dayanıklı Eternal Terminal oturumları, yerleşik bir tmux yöneticisi, SFTP dosya aktarımı, yerel port yönlendirme ve eklentiler — telefon ve tablet kullanımı için tasarlandı.",
    versionLine: "{count} dilde mevcut · Android {version} · iOS {iosVersion} beta",
    ctaDocs: "Belgeleri oku",
    ctaPlay: "Google Play'den indirin",
    ctaIos: "iOS betasını TestFlight'tan edinin",
    platformAndroid: "Android",
    platformIos: "iOS — iPhone ve iPad",
    advantagesHead: "Neden Mobile SSH",
    advantagesIntro: "Mobil SSH istemcilerinin tipik olarak takıldığı noktalar düşünülerek tasarlandı.",
    advantages: [
      { title: "Pro seviyesi yok, reklam yok", text: "Tüm özellikler aynı uygulamada. Temel akışları bir Pro yükseltmesinin ardına saklayan bir paywall yok, terminalde reklam afişi yok." },
      { title: "Verileriniz cihazınızda kalır", text: "Kaydedilen sunucular, kimlik bilgileri ve anahtarlar cihazda saklanır. Bulut hesabı yok; kapatılacak bir şey yok." },
      { title: "Kayıtlı sunucular, arayarak bağlan", text: "Sunucuyu bir kez ekleyin, arayın ve dokunarak bağlanın — anahtar, port ve tüneller birlikte gelir." },
      { title: "Ajan uyarıları", text: "Claude Code, Codex veya başka bir uzak ajan girdinize ihtiyaç duyduğu anda sesli ve titreşimli bildirim alın. Video oynatılırken bile kulaklıktan çalar." },
      { title: "Klavyenin üstünde terminal tuşları", text: "Android ve iOS'ta ESC, TAB, CTRL, ALT, FN, yön tuşları, Home, End, PgUp/PgDn için ayrı bir sıra — otomatik düzeltmeyle çakışmayan terminal tuşları." },
      { title: "Komut yazmadan port yönlendirme", text: "Tüneller sunucu profiline bağlıdır ve bağlandığınız anda otomatik olarak yükselir." },
      { title: "Kilit ve ağ değişimine dayanıklı", text: "Kaydedilen bir sunucuya birden çok adres verin — bir ev LAN IP'si ve bir VPN IP'si — Mobile SSH hangisi yanıt verirse ona bağlanır, en son çalışan adresi önce dener ve ağ değiştiği anda yeniden bağlanır. Android'de bir ön plan servisi ve wake lock'lar, ekran kapalıyken oturumları canlı tutar; iOS'ta otomatik yeniden bağlanma ve tmux otomatik ekleme sizi kaldığınız yere geri getirir." },
      { title: "Eternal Terminal", text: "İsteğe bağlı ET aktarımı, uzak kabuğu ağ kesintileri, uyku modu ve IP değişiklikleri boyunca canlı tutar. Ana bilgisayarda etserver yok mu? Mobile SSH, SSH üzerinden onu sizin için kurabilir." },
      { title: "Eklentilerle genişletin", text: "Yeni iş akışları eklemek için genel bir katalogu gözden geçirin ve eklentileri istek üzerine kurun. Her eklenti indirilir ve uygulamaya özel depolamaya SHA-256 ile doğrulanarak kaydedilir." }
    ],
    sectionAHead: "Mobilde SSH çalışması için tasarlandı",
    sectionAIntro:
      "Mobile SSH yaygın yönetim yolunu kısaltır: sunucuyu kaydet, bağlan, oturumları canlı tut, gerektiğinde dosya taşı ve hızlıca aktif terminallere geri dön.",
    features: [
      { title: "SSH terminali", text: "5000 satırlık geri kaydırma, renk, imleç tuşları, kopyala/paylaş ve sıkıştırarak metin boyutlandırmayla xterm-256color terminal emülasyonu." },
      { title: "Çoklu oturum ızgarası", text: "Yeniden boyutlandırılabilir ızgarada sekiz SSH oturumuna kadar — odaklanmak için panele dokun, tam ekran için çift dokun, metni boyutlandırmak için sıkıştır." },
      { title: "Tıklanabilir bağlantılar", text: "Terminaldeki URL'ler altı çizili olur ve bir dokunuşla tarayıcıda açılır — kopyalamaya veya uygulama değiştirmeye gerek kalmaz." },
      { title: "Sunucu klasörleri", text: "Kaydedilen sunucuları daraltılabilir gruplara düzenle. Daraltmak için grup başlığına dokun; klasör yapısı hızlı bağlan seçicisine de yansır." },
      { title: "Ajan uyarıları", text: "Uzak bir ajan (Claude Code, Codex vb.) girdinizi beklediğinde sesli ve titreşimli bildirim. Video görüşmeleri sırasında bile kulaklıktan çalar." },
      { title: "Özel anahtarlar", text: "Parola veya özel anahtarla kimlik doğrulama. Cihazda Ed25519 veya ECDSA anahtarı oluşturun (Android'de ayrıca RSA); mevcut anahtarları içe aktarın veya yapıştırın." },
      { title: "SFTP aktarımı", text: "Aktif SSH oturumuna bağlı çift panelli dosya gezgini. Yükleme ve indirme sırala; yeniden adlandır, sil ve uzak izinleri incele." },
      { title: "Port yönlendirme", text: "Yerel tünel tanımlarını sunucu profiliyle kaydet — tüneller bağlandığında otomatik açılır ya da bağlıyken ekle/kaldır." },
      { title: "Yeniden bağlanma akışı", text: "Keepalive ve üstel gerilemeli yeniden bağlanma, ekran kapandığında ve ağ değişiminde oturumları canlı tutar — Android'de ön plan servisi, iOS'ta tmux otomatik ekleme ile desteklenir." },
      { title: "Yedekleme ve geri yükleme", text: "Kaydedilen sunucuları ve kimlik bilgilerini şifreli bir yedek dosyasına aktar; cihazlar arası geçiş için birleştir veya değiştir seçeneğiyle içe aktar — yedekler Android ve iOS arasında uyumludur." },
      { title: "Eternal Terminal", text: "Ağ kesintileri, uyku modu ve IP değişikliklerine dayanan oturumlar için Eternal Terminal (ET) üzerinden bağlanın — isteğe bağlı olarak SSH üzerinden otomatik etserver kurulumuyla." },
      { title: "Tmux yöneticisi", text: "tmux oturumlarını, pencerelerini ve panellerini listeleyin ve aralarında geçiş yapın — bağlanın, yeniden adlandırın, oluşturun, bölün, yakınlaştırın veya sonlandırın. Ada veya tarihe göre sıralayın; girdi bekleyen ajanları bir 🔔 işaretler." },
      { title: "Eklentiler", text: "Mobile SSH'yi genişletmek için eklentilere göz atın, kurun ve çalıştırın. Eklentiler genel bir katalogdan istek üzerine indirilir ve uygulamaya özel depolamaya SHA-256 ile doğrulanarak kaydedilir." }
    ],
    multiHead: "Tek ekran, birkaç canlı kabuk",
    multiP1:
      "Terminal görünümü ızgarada birden çok aktif SSH oturumunu tutabilir. Yazmak için bir paneli seç, terminal kontrolleri için ek tuş satırını kullan, metin boyutunu sıkıştırarak ayarla ve tam ekran odaklanmak için bir panele çift dokun.",
    multiP2:
      "Oturum geçmişi ve aktif oturum kurtarma, uygulama değişimleri, ekran kilidi veya sistemin uygulamayı kapatmasının ardından sürmekte olan işe dönmene yardım eder.",
    multiAlt:
      "Bir telefonda Mobile SSH, yan yana iki canlı SSH terminal oturumunu bölünmüş görünümde gösteriyor.",
    sftpHead: "Terminal yetmediğinde SFTP",
    sftpBody:
      "Telefon depolamasını ve uzak dizinleri taramak için bağlı bir oturumdan dosya aktarımını aç. Yüklemeleri ve indirmeleri sıraya al, dosyaları sırala, her ana bilgisayar için son yolları hatırla ve taşımadan önce uzak izinleri incele.",
    sftpCtaGuide: "Dosya aktarımı kılavuzu",
    sftpCtaAll: "Tüm özellikler",
    sftpAlt: "Bir telefonda Mobile SSH dosya aktarımı ekranı; yerel ve uzak panellerle.",
    galleryHead: "Gerçek bir cihazda gör",
    galleryIntro:
      "Android telefonlardan ve iPhone'lardan ekran görüntüleri — sunucu eklemek, terminallerde çalışmak, birden çok oturum yürütmek ve SFTP ile dosya taşımak için kullanacağın aynı ekranlar.",
    carouselPrev: "Önceki ekran görüntüsü",
    carouselNext: "Sonraki ekran görüntüsü",
    carouselDot: "{n}. konuma git",
    videoHead: "Çalışırken görün",
    videoIntro: "Her iki platformda kısa demolar. Android: tmux pencere değiştirme, SFTP dosya aktarımı, AI Chat eklentisini kurma ve onunla sohbet etme, Eternal Terminal ve tek dokunuşla Son Oturumlar. iOS: gruplanmış kayıtlı sunucular, tmux otomatik eklemeli bağlantı seçenekleri, canlı bir terminal oturumu ve Tmux yöneticisi.",
    videoAlt: "Android'de tmux pencere değiştirme, SFTP dosya indirme, AI Chat eklentisini kurup kullanma, Eternal Terminal aktarımı ve Son Oturumlar demosu",
    videoIosAlt: "iOS'ta gruplanmış kayıtlı sunucular, tmux otomatik ekleme ve port yönlendirme içeren bağlantı seçenekleri, canlı bir SSH terminal oturumu ve pencereler arasında geçiş yapan Tmux yöneticisi demosu",
    lightboxClose: "Kapat",
    lightboxPrev: "Önceki",
    lightboxNext: "Sonraki",
    betaJoin: "Beta'ya katıl",
    betaOr: "veya e-posta gönderin",
    betaRequest: "özel beta erişimi istemek için",
    galleryAlts: [
      "Bir telefonda Mobile SSH başlangıç ekranı; Sunucular, Kimlik Bilgileri, Günlükler, Ayarlar, Hata Ayıklama ve Hakkında kutucukları.",
      "Bir telefonda Sunucu Ekle iletişim kutusu; ana bilgisayar, port, kimlik bilgileri, özel anahtar ve port yönlendirme alanları.",
      "Bir telefonda tek oturumlu SSH terminali; en altta ek tuş satırı.",
      "Bir telefonda yan yana iki SSH oturumu bölünmüş görünümde.",
      "Bir telefonda üst üste iki SSH oturumu; aktif panel vurgulu.",
      "Bir telefonda SFTP dosya aktarımı ekranı; Telefonum ve Uzak Sunucu panelleri.",
      "Bir telefonda Hakkında iletişim kutusu; sürüm, yazar, lisans ve web sitesi alanları.",
      "Telefonda etiket, kullanıcı, anahtar türü ve parola alanlarını içeren SSH Anahtarı Oluştur iletişim kutusu.",
      "Telefonda oluşturulan anahtarı kopyalama, paylaşma ve kaydetme seçenekleriyle gösteren Genel Anahtar iletişim kutusu.",
      "Kaydedilen sunucuların daraltılabilir İş ve Kişisel klasör gruplarında düzenlendiğini gösteren Kaydedilen Sunucular ekranı.",
      "Bir telefonda SSH terminali; https:// URL'leri dokunulabilir tıklanabilir bağlantılar olarak altı çizili şekilde görünüyor.",
      "Bir telefonda Mobile SSH ana ekranı; SSH bağlantısını tek dokunuşla sürdürmek için bir Son Oturumlar listesi gösteriyor.",
      "Bir telefonda tmux yöneticisi; tmux oturumlarını, pencerelerini ve panellerini listeliyor, bağlan, yeniden adlandır ve geçiş yap düğmeleriyle.",
      "Bir telefonda Eklentiler ekranı; Tailscale, WireGuard ve VS Code içeren, kurulabilir bir eklenti kataloğu gösteriyor.",
      "Bir telefonda AI Chat eklentisi; uzak sunucuda SSH üzerinden çalışan yerel bir llama3.2 modelinden gelen yanıtı akıtıyor.",
      "Bir telefonda Sunucu Ekle iletişim kutusu; oturumların ağ kopmalarına dayanması için aktarım Eternal Terminal olarak ayarlanmış."
    ],
    galleryIosAlts: [
      "Bir iPhone'da Mobile SSH bağlantı formu; sunucu, kimlik doğrulama, klasör ve aktarım alanlarıyla.",
      "Bir iPhone'da Kaydedilen Sunucular; sunucu aramasıyla Production ve Staging gruplarına düzenlenmiş.",
      "Bir iPhone'da canlı SSH terminali; tmux durum çubuğu ve en altta ek tuş satırıyla.",
      "Bir iPhone'da ızgarada yan yana iki SSH oturumu; dokunarak odaklanılan panellerle.",
      "Bir iPhone'da Dosya Aktarımı; Telefonum ve Uzak Sunucu panelleri ve tamamlanmış bir aktarım günlüğüyle.",
      "Bir iPhone'da anahtarla kimlik doğrulama; cihazda oluşturulmuş bir Ed25519 anahtarı ve kopyalanabilir genel anahtarla.",
      "Bir iPhone'da tmux yöneticisi; oturumları ve pencereleri bağlan, yeniden adlandır ve sonlandır eylemleriyle listeliyor — girdi bekleyen bir ajanı zil simgesi işaretliyor.",
      "Bir iPhone'da bir tmux penceresine bağlı SSH terminali; uzak bir düzenleyicide kod gösteriyor.",
      "Bir iPhone'da Eklentiler kataloğu; kurulmaya hazır Tailscale, WireGuard, VS Code, AI Chat ve Open WebUI ile.",
      "Bir iPhone'da bağlantı formu; oturumların ağ kopmalarına dayanması için aktarım Eternal Terminal olarak ayarlanmış.",
      "Bir iPhone'da ajan uyarısı ayarları; titreşim, ses ve yalnızca kulaklık anahtarlarıyla.",
      "Bir iPhone'da Mobile SSH bağlantı ekranı; tek dokunuşla yeniden bağlanmak için bir Son Oturumlar bölümüyle."
    ],
    compareHead: "Termux ve Termius yanında yeri",
    compareIntro:
      "Mobile SSH kasıtlı olarak dar tutulmuştur: ne tam bir Linux ortamıdır ne de çapraz platform takım kasası. Mobil kullanıcıların en çok ihtiyaç duyduğu oturum kontrollerine hızlı erişim sağlayan, Android ve iOS için yerel bir SSH/SFTP aracıdır.",
    compareGuideTitle: "Karşılaştırma kılavuzu",
    compareGuideText: "Telefonda veya tablette Mobile SSH, Termux veya Termius'tan hangisini ne zaman seçmeli.",
    privacyTitle: "Gizlilik politikası",
    privacyText: "Hangi bağlantı verilerinin yerel kaldığını ve sunucularına ne gönderildiğini incele."
  },
  features: {
    metaTitle: "Özellikler | Mobile SSH",
    metaDescription:
      "Android ve iOS'ta SSH için Mobile SSH'nin temel özellikleri: terminal, Eternal Terminal, tmux yöneticisi, SFTP, özel anahtarlar, port yönlendirme ve eklentiler.",
    eyebrow: "Özellik listesi",
    h1: "Mobile SSH özellikleri",
    intro:
      "Mobile SSH, Android ve iOS cihazlardan doğrudan SSH kullanımı için kurulmuştur: terminalleri aç, canlı tut, dosya taşı, sunucu kaydet ve mobil kesintilerden hızla kurtul.",
    groups: [
      {
        title: "Platformlar",
        items: [
          "Android 8.0 veya üzeri — Google Play'den kurun",
          "iPhone ve iPad'de iOS 16 veya üzeri — TestFlight'taki genel betaya katılın",
          "Şifreli yedekler birlikte çalışır: bir platformda dışa aktarın, diğerinde içe aktarın"
        ]
      },
      {
        title: "Bağlantılar",
        items: [
          "Parola ve özel anahtarla kimlik doğrulama",
          "Android'de Ed25519, RSA, ECDSA ve DSA özel anahtarları; iOS'ta Ed25519 ve ECDSA (P-256/384/521)",
          "Ana bilgisayar, port, kullanıcı, kimlik bilgisi, özel anahtar ve isteğe bağlı tünel tanımlarıyla kaydedilmiş sunucu profilleri",
          "Kaydedilen sunucuları ada veya ana bilgisayara göre arama",
          "Arama öncelikli Oturum Ekle akışı: ayrılmış bir arama sayfasından kayıtlı sunucu seç ve tek dokunuşla bağlan",
          "LAN/VPN dolaşımı için kayıtlı sunucu başına birden çok adres — sırayla denenir, en son çalışan adres önce denenir ve ağ değişiminde yeniden bağlanma devreye girer",
          "Sunucu kurulumunda seçilebilen yeniden kullanılabilir kimlik bilgisi kayıtları",
          "Sık kullanılan sunucu setlerine yeniden bağlanmak için son oturum geçmişi",
          "Başarılı ve başarısız giriş denemeleri günlüğü; tam olarak hangi adrese bağlanıldığını kaydeder"
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
          "Yerel geçişli klavye girişi — otomatik düzeltme kabukla çakışmaz; ekran klavyesi sesli diktesi yine de çalışır",
          "Android ve iOS'ta harici ve Bluetooth klavye desteği; oklar, işlev tuşları ve Ctrl/Alt akorları dahil",
          "Köşeli parantezli yapıştırma (bracketed paste); böylece çok satırlı pano içeriği otomatik çalıştırılmaz"
        ]
      },
      {
        title: "Oturumlar",
        items: [
          "Eşzamanlı sekiz SSH oturumuna kadar",
          "Aktif oturumlar için ızgara düzeni",
          "Arka plan ve ekran kilidi dayanıklılığı: Android'de ön plan servisi; iOS'ta tmux otomatik ekleme kabuğunuzu yeniden bağlar",
          "Üstel gerilemeli keepalive ve yeniden bağlanma denemeleri",
          "Başlangıç ekranından Aktif Oturumlar girişi; süregelen bildirim oturumları listeler — açmak için dokunun",
          "Kesintiye uğrayan iş için tmux komut izleme ve reattach ipuçları",
          "Ajan uyarıları: uzak bir ajan (Claude Code, Codex vb.) girdinizi beklediğinde isteğe bağlı ses ve titreşimli bildirim; video sırasında kulaklıktan çalar",
          "Ağ kesintileri, uyku modu ve IP değişikliklerine dayanan oturumlar için Eternal Terminal (ET) aktarımı; isteğe bağlı olarak SSH üzerinden otomatik etserver kurulumuyla",
          "Tmux yöneticisi: oturumları, pencereleri ve panelleri listele ve aralarında geçiş yap — bağlan, yeniden adlandır, oluştur, böl, yakınlaştır veya sonlandır; ada/tarihe göre sıralama ve girdi bekleyen ajanlar için 🔔"
        ]
      },
      {
        title: "Dosyalar ve tüneller",
        items: [
          "Yerel ve uzak dosyalar için çift panelli SFTP gezgini",
          "Sıraya alınmış yükleme ve indirme işlemleri",
          "Telefon ve uzak ana bilgisayar arasında özyinelemeli klasör yükleme ve indirme",
          "Uzak yeniden adlandırma, silme, oluşturma, düzenleme ve ayrıntılar",
          "Her ana bilgisayar için kalıcı, ada veya tarihe göre sıralama",
          "Sunucu profilleriyle kaydedilen yerel port yönlendirme",
          "Bağlı oturumlar için çalışma zamanı tünel ekle/kaldır görünümü",
          "Dosya aktarımı sistemin açık veya koyu temasını takip eder"
        ]
      },
      {
        title: "Yerelleştirme",
        items: [
          "Uygulama arayüzü çevirileri: Arapça, Bengalce, Çince (Basitleştirilmiş ve Geleneksel), İngilizce, Fransızca, Almanca, Hintçe, Endonezce, Japonca, Marathi, Nijerya Pidgin, Portekizce, Rusça, İspanyolca, Tamilce, Telugu, Türkçe, Urduca",
          "Android ve iOS'ta sistem dilini takip eder; uygulama içi seçici gerektirmez"
        ]
      },
      {
        title: "Anahtarlar ve yedekleme",
        items: [
          "Cihazda yeni Ed25519 veya ECDSA anahtarları oluşturun (Android'de ayrıca RSA), isteğe bağlı parola ile",
          "Oluşturulan genel anahtarı kopyalayın, paylaşın veya kaydedin; sunucunun authorized_keys dosyasına ekleyin",
          "Kayıtlı sunucuları ve kimlik bilgilerini bir yedek dosyasına aktarın",
          "İsteğe bağlı parola yedeği şifreler; birleştir veya değiştir ile içe aktarın",
          "Şifrelenmemiş yedek, parolaları ve anahtarları düz metin olarak saklar — dosyayı koruyun veya silin"
        ]
      },
      {
        title: "Eklentiler",
        items: [
          "Mobile SSH'yi genişletmek için eklentilere göz atın, kurun ve çalıştırın",
          "Eklentiler genel bir katalogdan istek üzerine indirilir ve uygulamaya özel depolamaya SHA-256 ile doğrulanarak kaydedilir",
          "Gerektiğinde özel veya kişisel bir katalog kaynağı yapılandırın"
        ]
      }
    ],
    security:
      "Güvenlik notu: mevcut uygulama, kaydedilen sunucu ve kimlik bilgisi kayıtlarını cihazda yerel olarak saklar (iOS'ta gizli veriler sistem Keychain'inde tutulur). Bulut eşitlemesi sunmaz. Cihazı güçlü bir ekran kilidiyle koru ve paylaşılan cihazlarda kimlik bilgilerini kaydetmekten kaçın."
  },
  compare: {
    metaTitle: "Mobilde Mobile SSH ile Termux ve Termius",
    metaDescription:
      "Android ve iOS'ta SSH akışları için Mobile SSH, Termux ve Termius'un dengeli karşılaştırması.",
    eyebrow: "Mobilde SSH seçenekleri",
    h1: "Mobile SSH, Termux ve Termius",
    intro:
      "Bu araçlar SSH çevresinde örtüşür ama farklı işler için tasarlanmıştır. Mobile SSH Android ve iOS için odaklanmış SSH/SFTP istemcisidir, Termux yalnızca Android'de çalışan bir Linux ortamıdır ve Termius hesap tabanlı üretkenlik özellikleri olan çapraz platform bir SSH istemcisidir.",
    columns: {
      need: "İhtiyaç",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "Temel amaç",
        mobileSsh: "Android ve iOS için adanmış SSH, SFTP, yerel tünel ve terminal istemcisi.",
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
        need: "Mobil terminal kontrolleri",
        mobileSsh: "Yerleşik ek tuş satırı, ızgara oturumları, tam ekran paneller, sıkıştırarak yakınlaştırma, kopya/paylaş ile seçim ve tmux uyumlu kaydırma — her iki platformda yerel geçişli yazım ve harici klavye desteğiyle.",
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
        mobileSsh: "Izgarada eşzamanlı sekiz SSH oturumuna kadar.",
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
        mobileSsh: "Sunuculara bağlanmak, dosya aktarmak ve oturumları canlı tutmak için Android'de veya iOS'ta basit bir uygulama istiyorsun.",
        termux: "Android'de tam bir komut satırı ortamı istiyorsun ve paket kurmaya/yapılandırmaya hakimsin.",
        termius: "Cihazlar arası eşitleme, cilalı üretkenlik özellikleri, kasalar ve iş birliği istiyorsun."
      }
    ],
    cards: [
      {
        title: "Şu durumlarda Mobile SSH'yi seç",
        body: "Tam bir Linux ortamı veya buluta eşitlenen bir hesap modeli kurmadan telefonundan veya tabletinden — Android ya da iOS — doğrudan SSH erişimi istiyorsan. Kaydedilmiş sunucular, SFTP, tmux oturumları ve hızlı yerel tünel akışları için özellikle uygundur."
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
    featureHeading: "Özellik karşılaştırması",
    featureRows: [
      { category: "Bağlantı", feature: "Kaydedilmiş sunucu profilleri",              mobile: "yes",    termux: "ssh config ile", termius: "yes" },
      { category: "Bağlantı", feature: "Kaydedilen sunucuları arama",                mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "Bağlantı", feature: "Sunucu klasörleri / grupları",               mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "Bağlantı", feature: "Arama öncelikli Oturum Ekle seçici",         mobile: "Android", termux: "no",          termius: "no" },
      { category: "Bağlantı", feature: "Yeniden kullanılabilir kimlik bilgisi kayıtları", mobile: "yes", termux: "no",         termius: "yes" },
      { category: "Bağlantı", feature: "Son oturum geçmişi",                         mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "Bağlantı", feature: "Giriş günlüğü",                              mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Terminal",  feature: "SSH terminali",                              mobile: "yes",    termux: "OpenSSH ile",  termius: "yes" },
      { category: "Terminal",  feature: "xterm-256color emülasyonu",                  mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "Terminal",  feature: "5.000 satırlık geri kaydırma tamponu",       mobile: "yes",    termux: "yapılandırılabilir", termius: "yes" },
      { category: "Terminal",  feature: "Ek tuş satırı (ESC/TAB/CTRL/…)",            mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "Terminal",  feature: "Sıkıştırarak metin boyutlandırma",           mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "Terminal",  feature: "Çift dokunarak paneli tam ekrana al",        mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Terminal",  feature: "Terminaldeki tıklanabilir URL'ler",          mobile: "yes",    termux: "kısmi",        termius: "yes" },
      { category: "Terminal",  feature: "Metin seçimi: kopyala / paylaş / tümünü seç", mobile: "yes", termux: "yes",          termius: "yes" },
      { category: "Terminal",  feature: "Donanım / Bluetooth klavye desteği",         mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "Oturumlar", feature: "Eşzamanlı birden çok SSH oturumu",          mobile: "en fazla 8", termux: "en fazla 8", termius: "yes" },
      { category: "Oturumlar", feature: "Izgara panel düzeni",                       mobile: "yes",    termux: "tmux ile",     termius: "sekmeler" },
      { category: "Oturumlar", feature: "tmux uyumlu kaydırma",                     mobile: "yes",    termux: "yes",          termius: "no" },
      { category: "Oturumlar", feature: "Yeniden bağlanmada tmux reattach ipuçları", mobile: "yes",   termux: "no",           termius: "no" },
      { category: "Oturumlar", feature: "Ajan uyarıları (Claude Code / Codex)",      mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Oturumlar", feature: "Oturum listesini gösteren süregelen bildirim", mobile: "Android", termux: "kısmi",   termius: "no" },
      { category: "Oturumlar", feature: "Ön plan servisi ve wake lock",              mobile: "Android", termux: "yes",         termius: "kısmi" },
      { category: "Oturumlar", feature: "Geri çekilmeli otomatik yeniden bağlanma",  mobile: "yes",    termux: "autossh ile",  termius: "yes" },
      { category: "Dosyalar",  feature: "Yerleşik SFTP dosya aktarımı arayüzü",      mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "Dosyalar",  feature: "Çift panelli yerel + uzak gezgin",          mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "Dosyalar",  feature: "Yükleme / indirme kuyruğu",                mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "Dosyalar",  feature: "Uzak yeniden adlandır / sil / oluştur",     mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "Dosyalar",  feature: "Uzak dosya izinleri görünümü",              mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Dosyalar",  feature: "Her ana bilgisayar için ada veya tarihe göre sıralama", mobile: "yes", termux: "no", termius: "kısmi" },
      { category: "Tüneller",  feature: "Yerel port yönlendirme",                   mobile: "yes",    termux: "CLI ile",      termius: "yes" },
      { category: "Tüneller",  feature: "Sunucu profiliyle kaydedilen tüneller",     mobile: "yes",    termux: "ssh config ile", termius: "yes" },
      { category: "Tüneller",  feature: "Çalışma zamanında tünel ekle / kaldır",    mobile: "Android", termux: "no",          termius: "yes" },
      { category: "Anahtarlar", feature: "Parola ile kimlik doğrulama",              mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "Anahtarlar", feature: "Özel anahtarla kimlik doğrulama",          mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "Anahtarlar", feature: "Cihazda anahtar oluşturma",                mobile: "yes",    termux: "ssh-keygen ile", termius: "yes" },
      { category: "Anahtarlar", feature: "Oluşturulan genel anahtarı paylaş / kaydet", mobile: "yes", termux: "yes",          termius: "yes" },
      { category: "Yedekleme", feature: "Sunucu yedeğini dışa / içe aktar",         mobile: "yes",    termux: "termux-backup ile", termius: "Pro bulut kasası" },
      { category: "Yedekleme", feature: "Şifreli yerel yedek dosyası",              mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Yedekleme", feature: "Hesap gerekmez",                            mobile: "yes",    termux: "yes",          termius: "kısmi" },
      { category: "Gizlilik ve maliyet", feature: "Pro paywall yok",                 mobile: "yes",    termux: "yes",          termius: "kısmi" },
      { category: "Gizlilik ve maliyet", feature: "Reklam yok",                      mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "Gizlilik ve maliyet", feature: "Analitikten çıkma seçeneği",      mobile: "Android", termux: "analitik yok", termius: "no" },
      { category: "Gizlilik ve maliyet", feature: "Yalnızca yerel veriler (bulut eşitlemesi yok)", mobile: "yes", termux: "yes", termius: "kısmi" },
      { category: "Oturumlar", feature: "Eternal Terminal (dayanıklı oturumlar)",  mobile: "yes",    termux: "CLI ile",      termius: "no" },
      { category: "Oturumlar", feature: "SSH üzerinden otomatik etserver kurulumu", mobile: "yes",   termux: "no",           termius: "no" },
      { category: "Oturumlar", feature: "tmux oturum yöneticisi",                  mobile: "yes",    termux: "CLI ile",      termius: "no" },
      { category: "Eklentiler", feature: "Eklenti desteği",                        mobile: "yes",    termux: "paketlerle",   termius: "no" },
      { category: "Eklentiler", feature: "İstek üzerine kurulan eklenti kataloğu", mobile: "yes",    termux: "no",           termius: "no" }
    ]
  },
  privacy: {
    metaTitle: "Gizlilik Politikası | Mobile SSH",
    metaDescription:
      "Mobile SSH'nin gizlilik politikası: yerel depolama, SSH veri aktarımı, dosya aktarımı, günlükler ve Android ile iOS'taki uygulama izinleri.",
    eyebrow: "Gizlilik",
    h1: "Gizlilik Politikası",
    intro:
      "Mobile SSH, Android ve iOS için yerel bir SSH istemcisi olarak tasarlanmıştır. Mobile SSH hesabı gerektirmez ve Mobile SSH bulut eşitleme hizmeti sunmaz.",
    sections: [
      {
        heading: "Cihazınızda saklanan bilgiler",
        body: "Uygulama verilerini kaydetmeyi seçerseniz Mobile SSH bunları cihazda yerel olarak saklar — iOS'ta gizli bilgiler sistem Keychain'inde tutulur. Bu; kaydedilmiş sunucu profilleri, kullanıcı adları, portlar, parolalar, özel anahtarlar, anahtar parolaları, port yönlendirme kuralları, son oturumlar, giriş denemesi geçmişi, dosya aktarım yolları, sıralama tercihleri, tmux reattach ipuçları, uygulama ayarları ve hata ayıklama kaydı etkinken hata ayıklama günlüklerini içerebilir."
      },
      {
        heading: "Ağ üzerinden gönderilen bilgiler",
        body: "Mobile SSH yalnızca yapılandırıp bağlandığınız sunuculara SSH kimlik doğrulama verisi gönderir. Terminal girişi/çıkışı, SFTP dosya içeriği ve yerel port yönlendirilmiş trafik, seçtiğiniz sunucu ve uzak uç noktalarla değiş tokuş edilir. Mobile SSH bu verileri herhangi bir Mobile SSH analitik, reklam, telemetri veya bulut eşitleme hizmetine göndermez."
      },
      {
        heading: "Dosya aktarımı ve depolama erişimi",
        body: "Dosya aktarımı özelliği, yerel telefon depolamasını ve uzak SFTP dizinlerini dosya yüklemek ve indirmek için tarar. Bunu gerektiren Android sürümlerinde uygulama, yerel dosya gezgininin seçili dosyaları okuyup yazabilmesi için depolama erişimi isteyebilir. iOS'ta yerel dosyalara ve fotoğraflara sistemin belge ve fotoğraf seçicileri aracılığıyla erişilir."
      },
      {
        heading: "Günlükler ve sorun giderme",
        body: "Giriş geçmişi ve isteğe bağlı hata ayıklama günlükleri sorun giderme için yerel olarak saklanır. Hata ayıklama günlükleri terminal olaylarını, SSH veri boyutlarını, dokunma giriş tanılamalarını, yeniden boyutlandırma olaylarını ve tünel yaşam döngüsü olaylarını içerebilir. Bir hata ayıklama arşivini destek ekibi veya başka biriyle paylaşmadan önce gözden geçirin."
      },
      { heading: "Anonim kullanım analizi", body: "Uygulamanın nasıl kullanıldığını anlamak ve geliştirmek için Mobile SSH, bizim adımıza hareket eden gizlilik odaklı analiz sağlayıcısı Aptabase'e anonim kullanım analizleri gönderir. Bu, yalnızca anonim olaylarla (uygulama açılışları ve hangi özelliklerin kullanıldığı gibi) birlikte uygulama sürümü, işletim sistemi sürümü, cihaz modeli ve dil ile sınırlıdır. Düzenli olarak sıfırlanan ve sizinle ya da cihazınızla ilişkilendirilmeyen rastgele bir oturum tanımlayıcısı kullanır. SSH sunucularınızı, ana bilgisayar adlarınızı, kullanıcı adlarınızı, parolalarınızı, anahtarlarınızı, komutlarınızı veya dosya içeriklerinizi asla içermez. Veriler şifreli (HTTPS) bir bağlantı üzerinden gönderilir. Analiz varsayılan olarak açıktır ve Ayarlar'dan istediğiniz zaman kapatılabilir; kapalıyken hiçbir şey gönderilmez." }
    ],
    permissionsHeading: "İzinler",
    permissions: [
      { label: "İnternet", body: "SSH sunucularına bağlanmak için gereklidir." },
      { label: "Wake lock ve Wi-Fi lock", body: "cihaz uykudayken aktif SSH oturumlarını canlı tutmak için Android'de kullanılır." },
      { label: "Ön plan servisi ve bildirimler", body: "arka planda aktif bağlantıları yönetmek için Android'de kullanılır; iOS'ta bildirimler ajan uyarıları için kullanılır." },
      { label: "Depolama erişimi", body: "dosya aktarımı ve anahtar içe aktarma akışları tarafından kullanılır; iOS'ta bu, sistemin belge ve fotoğraf seçicileri üzerinden gerçekleşir." }
    ],
    securityHeading: "Güvenlik sorumlulukları",
    securityBody:
      "Kimlik bilgilerini veya özel anahtarları kaydederseniz cihazınızı güçlü bir ekran kilidiyle koruyun. Yalnızca güvendiğiniz sunuculara bağlanın. Mevcut uygulama, ayrı bir şifreli bulut kasası yerine yerel uygulama depolamasını (ve iOS'ta sistem Keychain'ini) kullanır.",
    contactHeading: "İletişim",
    contactBody: "Destek iletişimi: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  },
  docsIndex: {
    metaTitle: "Belgeler | Mobile SSH",
    metaDescription: "Android ve iOS'taki Mobile SSH için son kullanıcı belgeleri.",
    eyebrow: "Kullanıcı kılavuzu",
    h1: "Mobile SSH belgeleri",
    intro:
      "Mobile SSH'yi kurmak, bağlanmak, oturumları yönetmek, dosya aktarmak, port yönlendirmek ve sorunları çözmek için bu sayfaları genel kılavuz olarak kullanın.",
    cards: [
      { slug: "getting-started",  title: "Başlarken",        text: "Kur, uygulamayı aç, ilk sunucuna bağlan ve sık kullanılan ana bilgisayarları kaydet." },
      { slug: "terminal",         title: "Terminal",          text: "Paneller, ek tuş satırı, kaydırma, kopyalama eylemleri, tmux davranışı ve klavye ayarları." },
      { slug: "file-transfer",    title: "Dosya aktarımı",   text: "Telefon ve sunucu dosyalarını gez, yükle, indir, sırala ve uzak ayrıntıları incele." },
      { slug: "port-forwarding",  title: "Port yönlendirme", text: "Yerel tünel dizelerini yapılandır ve bağlıyken aktif yönlendirmeleri yönet." },
      { slug: "troubleshooting",  title: "Sorun giderme",    text: "Bağlantı, kimlik doğrulama, klavye, depolama ve yeniden bağlanma sorunlarını çöz." }
    ]
  },
  docsNav: {
    home: "Belgeler ana sayfa",
    gettingStarted: "Başlarken",
    terminal: "Terminal",
    fileTransfer: "Dosya aktarımı",
    portForwarding: "Port yönlendirme",
    troubleshooting: "Sorun giderme"
  },
  about: {
    metaTitle: "Hakkında | Mobile SSH",
    metaDescription: "Mobile SSH hakkında: Android ve iOS SSH istemcisinin sürümü, yazarı, lisansı ve açık kaynak bildirimleri.",
    eyebrow: "Hakkında",
    h1: "Mobile SSH hakkında",
    intro: "tmux, port yönlendirme ve SFTP destekli çoklu oturum SSH istemcisi.",
    appHeading: "Uygulama hakkında",
    versionLabel: "Sürüm",
    authorLabel: "Yazar",
    authorValue: "Dmitry Kozlov",
    licenseLabel: "Lisans",
    licenseValue: "MIT",
    websiteLabel: "Web sitesi",
    privacyLabel: "Gizlilik politikası",
    privacyLinkText: "Gizlilik politikası",
    noticesHeading: "Açık kaynak bildirimleri",
    noticesIntro: "Mobile SSH aşağıdaki açık kaynak kütüphaneler üzerine kurulmuştur. Her biri kendi lisansı kapsamında kullanılır.",
    notices: [
      { name: "JSch (mwiede fork) — Android",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch" },
      { name: "JZlib (bundled in JSch) — Android",   license: "BSD 3-clause" },
      { name: "jBCrypt (bundled in JSch) — Android", license: "ISC" },
      { name: "Ed25519 / Ed448 Java — Android",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java" },
      { name: "StringFog — Android",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog" },
      { name: "SwiftNIO & SwiftNIO SSH — iOS",       license: "Apache 2.0", url: "https://github.com/apple/swift-nio-ssh" },
      { name: "Swift Crypto — iOS",                  license: "Apache 2.0", url: "https://github.com/apple/swift-crypto" }
    ],
    contactHeading: "İletişim",
    contactBody: "Destek iletişimi: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  }
};
