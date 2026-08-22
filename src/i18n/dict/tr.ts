import type { Dict } from "../types";

export const tr: Dict = {
  meta: {
    siteName: "Mobile SSH",
    languageLabel: "Dil",
    languageSwitcher: "Dili değiştir"
  },
  nav: {
    blog: "Blog",
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
      { title: "Ajan uyarıları ve tek dokunuşla yanıt", text: "Claude Code, Codex veya başka bir ajanın size ihtiyaç duyduğu anı öğrenin: panel kehribar rengine döner, araç çubuğundaki bir rozet kaç ajanın beklediğini sayar ve Ajanlar listesi istemi tek dokunuşla yanıtlar — terminale hiçbir şey yazmadan." },
      { title: "Klavyenin üstünde terminal tuşları", text: "On üç tuşluk bir satır — ESC, TAB, CTRL, yön tuşları, Home, End, PgUp, PgDn — kaydırmak yerine ikinci bir satıra sarar; böylece hiçbir şey ekran dışında kalmaz. Hazır bir tuş paletinden F1–F12, Ctrl kombinasyonları veya kendi kaçış dizilerinizi ekleyin." },
      { title: "Komut yazmadan port yönlendirme", text: "Tüneller sunucu profiline bağlıdır ve bağlandığınız anda otomatik olarak yükselir." },
      { title: "Kilit ve ağ değişimine dayanıklı", text: "Kaydedilen bir sunucuya birden çok adres verin — bir ev LAN IP'si ve bir VPN IP'si — Mobile SSH hangisi yanıt verirse ona bağlanır, en son çalışan adresi önce dener ve ağ değiştiği anda yeniden bağlanır. Android'de bir ön plan servisi ve wake lock'lar, ekran kapalıyken oturumları canlı tutar; iOS'ta otomatik yeniden bağlanma ve tmux otomatik ekleme sizi kaldığınız yere geri getirir." },
      { title: "Eternal Terminal", text: "İsteğe bağlı ET aktarımı, uzak kabuğu ağ kesintileri, uyku modu ve IP değişiklikleri boyunca canlı tutar. Ana bilgisayarda etserver yok mu? Mobile SSH, SSH üzerinden onu sizin için kurabilir." },
      { title: "Eklentilerle genişletin", text: "Yeni iş akışları eklemek için genel bir katalogu gözden geçirin ve eklentileri istek üzerine kurun. Her eklenti indirilir ve uygulamaya özel depolamaya SHA-256 ile doğrulanarak kaydedilir." }
    ],
    sectionAHead: "Mobilde SSH çalışması için tasarlandı",
    sectionAIntro:
      "Mobile SSH yaygın yönetim yolunu kısaltır: sunucuyu kaydet, bağlan, oturumları canlı tut, gerektiğinde dosya taşı ve hızlıca aktif terminallere geri dön.",
    features: [
      { title: "SSH terminali", text: "24-bit gerçek renk, italik, terminal içi arama, OSC 133 kabuk entegrasyonu ve sıkıştırarak metin boyutlandırmayla xterm-256color terminali — ayrıca Android ve iOS'ta yapılandırılabilir yazı tipi ve renk şeması ile Nerd Font powerline/simge glifleri." },
      { title: "Çoklu oturum ızgarası", text: "Yeniden boyutlandırılabilir ızgarada sekiz SSH oturumuna kadar — odaklanmak için panele dokun, tam ekran için çift dokun, metni boyutlandırmak için sıkıştır." },
      { title: "Tıklanabilir bağlantılar", text: "Terminaldeki URL'ler altı çizili olur ve bir dokunuşla tarayıcıda açılır — kopyalamaya veya uygulama değiştirmeye gerek kalmaz." },
      { title: "Sunucu klasörleri ve adları", text: "Kaydedilen sunucuları daraltılabilir gruplara düzenle ve bir sunucuya adresi yerine görünecek bir ad ver. Bir ad belirsiz kalacak olduğunda adres yeniden görünür; böylece satırlar birbirine karışmaz." },
      { title: "Ajan uyarıları", text: "Ajanlar kendilerini terminal üzerinden bildirir; böylece uygulama hangisinin ne yüzünden takıldığını bilir. Ajanlar listesinden tek dokunuşla yanıtla; uyarılar üst üste birikmek yerine birbirinin yerini alır ve birine dokunmak zili çalan paneli açar." },
      { title: "Özel anahtarlar", text: "Parola veya özel anahtarla kimlik doğrulama. Cihazda Ed25519 veya ECDSA anahtarı oluşturun (Android'de ayrıca RSA); mevcut anahtarları içe aktarın veya yapıştırın." },
      { title: "SFTP aktarımı", text: "Aktif SSH oturumuna bağlı çift panelli dosya gezgini. Yükleme ve indirme sırala; yeniden adlandır, sil ve uzak izinleri incele." },
      { title: "Port yönlendirme", text: "Yerel tünel tanımlarını sunucu profiliyle kaydet; bağlandığında otomatik olarak açılırlar — yeni bir ağda yeniden bağlandıktan sonra bile, elle yeniden kurmana gerek kalmadan." },
      { title: "Yeniden bağlanma akışı", text: "Ağ değiştirdiğinde oturumlar ölü rotanın zaman aşımına uğramasını beklemeden hemen yeniden bağlanır; bekleme süresindeki bir oturum da kullanılabilir bir ağ belirir belirmez uyanır. iOS'ta sessizce yanıt vermeyi bırakmış bir sunucu fark edilir ve yeniden bağlanılır." },
      { title: "Yedekleme ve geri yükleme", text: "Kaydedilen sunucuları ve kimlik bilgilerini şifreli bir yedek dosyasına aktar; cihazlar arası geçiş için birleştir veya değiştir seçeneğiyle içe aktar — yedekler Android ve iOS arasında uyumludur." },
      { title: "Eternal Terminal", text: "Ağ kesintileri, uyku modu ve IP değişikliklerine dayanan oturumlar için Eternal Terminal (ET) üzerinden bağlanın — isteğe bağlı olarak SSH üzerinden otomatik etserver kurulumuyla." },
      { title: "Çoğullayıcı yöneticileri", text: "tmux'u önek akorları olmadan yönetin — bağlanın, yeniden adlandırın, oluşturun, bölün, yakınlaştırın veya sonlandırın. Android aynısını herdr ve Zellij için de sunar; araç çubuğunda bir simge yalnızca o program sunucuda bulunduğunda belirir." },
      { title: "Eklentiler", text: "Mobile SSH'yi genişletmek için eklentilere göz atın, kurun ve çalıştırın. Eklentiler genel bir katalogdan istek üzerine indirilir ve uygulamaya özel depolamaya SHA-256 ile doğrulanarak kaydedilir." }
    ],
    multiHead: "Tek ekran, birkaç canlı kabuk",
    multiP1:
      "Terminal görünümü ızgarada birden çok aktif SSH oturumunu tutabilir. Yazmak için bir paneli seç, terminal kontrolleri için ek tuş satırını kullan, metin boyutunu sıkıştırarak ayarla ve tam ekran odaklanmak için bir panele çift dokun.",
    multiP2:
      "Ana ekran «neye geri dönebilirim?» sorusunu yanıtlar — şu anda canlı olan bağlantılar ve kayıtlı sunucularında seni bekleyen tmux oturumları; saklanan bir anlık görüntüden yeniden oluşturuldukları için hiç ağ olmadan bile görünürler.",
    multiAlt:
      "Bir telefonda Mobile SSH, yan yana iki canlı SSH terminal oturumunu bölünmüş görünümde gösteriyor.",
    sftpHead: "Terminal yetmediğinde SFTP",
    sftpBody:
      "Telefon depolamasını ve uzak dizinleri taramak için bağlı bir oturumdan dosya aktarımını aç. Yüklemeleri ve indirmeleri sıraya al, dosyaları sırala, son kullanılan uzak yollara geri dön ve neyi taşıyacağına karar verirken uzak izinleri incele veya değiştir.",
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
    videoIntro: "Her iki platformda kısa demolar. Android: nereye geri dönebileceğinizi gösteren ana ekran, yalnızca o sunucuda bulunanları gösteren oturum araç çubuğu, bir dosyayı doğrudan komut istemine gönderme ve tmux, herdr ile Zellij yöneticileri. iOS: doğrudan canlı bir terminalde açılış ve geri döndüğünüz ana ekran.",
    videoAlt: "Android demosu: sürdürülecek tmux oturumlarını listeleyen ana ekran, oturum araç çubuğu, komut istemine dosya ekleme ve tmux, herdr ile Zellij oturum yöneticileri",
    videoIosAlt: "iOS demosu: Mobile SSH uygulamasını açıp doğrudan canlı bir SSH terminal oturumuna girme ve Son Oturumlar listesiyle uygulamanın diğer ekranlarının bulunduğu ana ekrana dönme",
    lightboxClose: "Kapat",
    lightboxPrev: "Önceki",
    lightboxNext: "Sonraki",
    betaJoin: "Beta'ya katıl",
    betaOr: "veya e-posta gönderin",
    betaRequest: "özel beta erişimi istemek için",
    galleryAlts: [
      "Bir Android telefonda Mobile SSH ana ekranı; kayıtlı bir sunucuda bekleyen tmux oturumlarını, Sunucular, Kimlik Bilgileri, Ayarlar, Hakkında ve Eklentiler düğmelerinin üzerinde listeliyor.",
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
      "Bir Android telefonda Zellij yöneticisi; oturumları, sekmeleri ve panelleri bağlan, yeniden adlandır, sonlandır ve odaklan düğmeleriyle listeliyor.",
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
      "Bir iPhone'da Mobile SSH ana ekranı; tek dokunuşla yeniden bağlanmak için bir Son Oturumlar listesi ve altında Sunucular, Kimlik Bilgileri, Günlükler, Ayarlar, Hakkında ve Eklentiler kutucukları."
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
          "Android 8.0 veya üzeri — şu anda bir Google Play kapalı testi: katılım bağlantısını bir mobil tarayıcıda açın, ardından Play'den kurun",
          "iPhone ve iPad'de iOS 16 veya üzeri — TestFlight'taki genel betaya katılın",
          "Şifreli yedekler birlikte çalışır: bir platformda dışa aktarın, diğerinde içe aktarın"
        ]
      },
      {
        title: "Bağlantılar",
        items: [
          "Parola ve özel anahtarla kimlik doğrulama",
          "Android'de Ed25519, ECDSA (P-256/384/521) ve RSA özel anahtarları; iOS'ta Ed25519 ve ECDSA. Her iki platform da parola tümcesiyle şifrelenmiş anahtarları açar",
          "Ana bilgisayar, port, kullanıcı, kimlik bilgisi, özel anahtar ve isteğe bağlı tünel tanımlarıyla kaydedilmiş sunucu profilleri — ayarlarını yeni bir sunucuya kopyalamak için bir profili klonlayın",
          "Bir sunucuya ad verin; liste adresi yerine o adı gösterir — iki satır birbirine benzeyecek olduğunda adres yeniden ortaya çıkar",
          "Kaydedilen sunucuları ada, ana bilgisayara, porta, kimlik bilgisine veya alternatif adreslerinden herhangi birine göre arayın",
          "Aynı makineye iki ayrı kayıtlı satır üzerinden bağlanırsanız uygulama bunu fark eder — ana bilgisayar anahtarının parmak izini alır ve ikisini çok adresli tek bir sunucuda birleştirmeyi önerir",
          "Arama öncelikli Oturum Ekle akışı: ayrılmış bir arama sayfasından kayıtlı sunucu seç ve tek dokunuşla bağlan",
          "LAN/VPN dolaşımı için kayıtlı sunucu başına birden çok adres — sırayla denenir, en son çalışan adres önce denenir ve ağ değişiminde yeniden bağlanma devreye girer",
          "Sunucu kurulumunda seçilebilen yeniden kullanılabilir kimlik bilgisi kayıtları",
          "Kaldığınız yerden devam etmek üzere kurulmuş bir ana ekran: şu anda canlı olan bağlantılar ve sunucularınızda bekleyen tmux oturumları — saklanan bir anlık görüntüden alınır, bu yüzden ağ olmadan da listelenir ve her satırda anlık görüntünün yaşı yazar. iOS ayrıca bir Son Oturumlar listesi tutar",
          "Baştan sona IPv6: adres alanlarında isteğe bağlı portuyla birlikte köşeli parantezli adresler ve port yönlendirme kurallarında köşeli parantezli IPv6 hedefleri",
          "Başarılı ve başarısız giriş denemeleri günlüğü; tam olarak hangi adrese bağlanıldığını ve başarısızlık durumunda nedenini kaydeder",
          "Teleport proxy aktarımı (deneysel, Android): kullanıcı adı, parola ve OTP ile giriş yapın veya bir Teleport yapılandırma ya da kimlik dosyasını içe aktarın, küme düğümlerine göz atın, ardından proxy tüneli üzerinden terminaller, SFTP, tmux ve eklentiler çalıştırın"
        ]
      },
      {
        title: "Terminal",
        items: [
          "24-bit gerçek renk ve italik ile VT100/xterm-256color terminal davranışı — kabuğa TERM=xterm-256color ve COLORTERM=truecolor bildirilir",
          "Android ve iOS'ta 1.000, 5.000, 10.000 veya 50.000 satıra ayarlanabilen geri kaydırma tamponu (varsayılan 5.000)",
          "Terminalde bul — geri kaydırmayı ve görünür ekranı ara, eşleşmeler arasında atla (Android ve iOS)",
          "Kabuk entegrasyonu (OSC 133): istemler arasında adım adım gez, bir komutun çıktısının tamamını seç — yalnızca sonuncusunu değil, 300 satır geriden gelen derleme hatasını — ve uzun süren bir komut bittiğinde uyarı al (Android ve iOS)",
          "Kitty grafik protokolü aracılığıyla terminalde satır içi görüntüler; sıkıştırarak yakınlaştırma ve satır yeniden sarmalarında kaybolmak yerine yerinde kalır (Android ve iOS)",
          "Blok, braille ve sekstant mozaik glifleri uygulamanın kendisi tarafından çizilir; böylece chafa, timg ve ANSI sanatı boş kutular göstermek yerine tam olarak döşenir (Android)",
          "Fare izlemeli bir TUI'de dokunuş bir tıklamadır — htop, vim ve panel seçimi dokunarak çalışır (Android)",
          "Panel başlığı, tmux'tan sorulan veya kabuk tarafından OSC 7 ile bildirilen gerçek çalışma dizinini gösterir (Android)",
          "On üç tuşluk ek tuş satırı — ESC, TAB, CTRL, oklar, Home, End, PgUp, PgDn, klavye geçişi — kaydırmak yerine ikinci bir satıra sarar ve artakalanları bir taşma menüsüne katlar; böylece hiçbir tuş ekran dışında kalmaz",
          "Satırı Android ve iOS'ta özelleştir: F1–F12, Ctrl kombinasyonları ve simgeler dahil yaklaşık 45 hazır tuşluk bir paletten ekle; tuş kaldır, yeniden sırala, gizle, kendi kaçış dizisi tuşlarını tanımla ve canlı önizlemeyle varsayılanlara sıfırla",
          "Dokunarak odaklan, isteğe bağlı «dokununca klavyeyi göster», kopyala ve tümünü kopyala eylemleri",
          "Sıkıştırarak metin boyutunu değiştir ve uzak terminali yeniden boyutlandır",
          "Çift dokunarak panel tam ekran modu",
          "Kopyala, Paylaş ve Tümünü seç eylemleriyle terminal metni seçimi — uzun basış kelimeyi seçer ve Kopyala, seçimi paylaşmak veya yeniden kopyalamak için korur",
          "OSC 52 pano — uzak bir tmux veya vim oturumundaki metni doğrudan telefon panosuna kopyala (Android ve iOS)",
          "Yerel geçişli klavye girişi — otomatik düzeltme kabukla çakışmaz; ekran klavyesi sesli diktesi yine de çalışır",
          "Android ve iOS'ta harici ve Bluetooth klavye desteği; oklar, işlev tuşları ve Ctrl/Alt akorları dahil",
          "Köşeli parantezli yapıştırma (bracketed paste); böylece çok satırlı pano içeriği otomatik çalıştırılmaz",
          "Yerleşik Nerd Font, sistem yazı tipinin aksi halde boş kutular olarak göstereceği powerline, starship, devicon ve Material Design simge gliflerini Android ve iOS'ta işler",
          "Geniş CJK, emoji ve birleşen karakterler Android ve iOS'ta doğru şekilde ölçülür ve çizilir; grafem kümeleri ve sıfır genişlikli birleştiriciler dahil",
          "Android ve iOS'ta yapılandırılabilir terminal yazı tipi (sistem tek aralıklı, JetBrains Mono veya Source Code Pro) ve ANSI renk şeması (Solarized, Gruvbox, Dracula, Nord); açık panellere anında uygulanır",
          "Ayarlar'da sıkıştırarak yakınlaştırmanın yanı sıra bir terminal metin boyutu kaydırıcısı ve Sistem, Açık ya da Koyu olarak ayarlanan bir uygulama teması"
        ]
      },
      {
        title: "Oturumlar",
        items: [
          "Eşzamanlı sekiz SSH oturumuna kadar",
          "Aktif oturumlar için ızgara düzeni",
          "Arka plan ve ekran kilidi dayanıklılığı: Android'de bir ön plan servisi, uygulamayı kaydırıp kapattıktan sonra bile kabukları ve ajanları çalışır tutar; iOS'ta tmux otomatik ekleme kabuğunuzu yeniden bağlar",
          "Üstel gerilemeli keepalive ve yeniden bağlanma denemeleri — en fazla on deneme; zaten ayrıldığınız bir ağda yaşanan başarısızlıklar bu sınıra sayılmaz",
          "Wi-Fi, hücresel veri veya VPN arasında geçmek, ölü rotanın zaman aşımını beklemek yerine anında yeniden bağlanmayı başlatır; bekleme süresindeki bir oturum da kullanılabilir bir ağ belirir belirmez yeniden dener",
          "Sessizce yanıt vermeyi bırakmış bir sunucu — askıya alınmış bir sanal makine, kilitlenmiş bir atlama ana bilgisayarı — yanıtsız kalan keepalive yoklamalarından fark edilir ve tuş vuruşlarınızı sessizce yutmak yerine yeniden bağlanılır (iOS)",
          "Başlangıç ekranından Aktif Oturumlar girişi; süregelen bildirim oturumları listeler — açmak için dokunun",
          "Kesintiye uğrayan iş için tmux komut izleme ve reattach ipuçları; ayrıca sunucu başına bağlanınca neye eklenileceği seçimi: otomatik algıla, hiçbiri, tmux, herdr veya Zellij (Android)",
          "Ajanlar kendilerini terminal üzerinden bildirir; böylece uygulama hangi ajanın çalıştığını, hangi aracı kullandığını ve sizin yüzünüzden takılıp takılmadığını bilir — panel kehribar rengine döner, başlığında «claude · sizi bekliyor» yazar ve araç çubuğundaki bir rozet kaç ajanın beklediğini sayar",
          "Bir ajanın sorusunu Ajanlar listesinden tek dokunuşla yanıtlayın; yanıt ayrı bir kanaldan gider, bu yüzden ekranda olanın içine hiçbir şey yazılmaz",
          "Ajan kancasını uygulamanın içinden bir sunucuya kurun — herhangi bir ajanın çağırabileceği küçük bir kabuk betiği; sağlayıcıya özel bir entegrasyon değil",
          "Ağ kesintileri, uyku modu ve IP değişikliklerine dayanan oturumlar için Eternal Terminal (ET) aktarımı; isteğe bağlı olarak SSH üzerinden otomatik etserver kurulumuyla",
          "Tmux yöneticisi: oturumları, pencereleri ve panelleri listele ve aralarında geçiş yap — bağlan, yeniden adlandır, oluştur, böl, yakınlaştır veya sonlandır; ada/tarihe göre sıralama ve girdi bekleyen ajanlar için 🔔",
          "Android'de herdr ve Zellij yöneticileri; her biri kendi oturumları, sekmeleri ve panelleri üzerinde aynı denetimi sunar — araç çubuğu bir simgeyi yalnızca o program sunucuda bulunduğunda gösterir"
        ]
      },
      {
        title: "Dosyalar ve tüneller",
        items: [
          "Yerel ve uzak dosyalar için çift panelli SFTP gezgini; her aktarımı gösteren ve kaydırılabilen bir aktarım günlüğüyle",
          "Sıraya alınmış yükleme ve indirme işlemleri; Android'de başka bir uygulamadan herhangi bir dosyayı çalışan oturuma paylaşın, uzak yolu komut istemine yazılır",
          "Telefon ve uzak ana bilgisayar arasında özyinelemeli klasör yükleme ve indirme",
          "Uzak yeniden adlandırma, silme, oluşturma, düzenleme, .tar.gz olarak sıkıştırma, izinler (chmod/chown) ve ayrıntılar",
          "İndirilen bir dosyayı her iki platformda da başka bir uygulamada açın — iOS'ta indirilenler ayrıca Dosyalar uygulamasında «iPhone'umda» altında görünür",
          "Android'de Dosya Aktarımı, ilgili tmux oturumunun kaldığı yerden yeniden açılır ve oturumu panel başlığında adlandırır; hatırlanacak bir şey yoksa o ana bilgisayarda en çok kullandığınız dizinlere döner",
          "Her ana bilgisayar için kalıcı, ada veya tarihe göre sıralama ve son kullanılan uzak yollara geri dönüş",
          "Dosya boyutları ikili birimlerde gösterilir; bir sekme ötedeki terminalde ls -h ne gösteriyorsa onunla eşleşir",
          "Sunucu profilleriyle kaydedilen ve bağlanıldığında otomatik olarak açılan yerel port yönlendirme",
          "Uygulamanın tamamı ve dosya tarayıcısı sistemin açık veya koyu temasını takip eder — Android ve iOS'ta Sistem, Açık veya Koyu seçin"
        ]
      },
      {
        title: "Yerelleştirme",
        items: [
          "Uygulama arayüzü çevirileri: Arapça, Bengalce, Çince (Basitleştirilmiş ve Geleneksel), İngilizce, Fransızca, Almanca, Hintçe, Endonezce, Japonca, Marathi, Portekizce, Rusça, İspanyolca, Tamilce, Telugu, Türkçe ve Urduca — Android'de yirmi dil (Nijerya Pidgin'i ve Mısır Arapçası da eklenir), iOS'ta on sekiz dil",
          "Varsayılan olarak sistem dilini takip eder; uygulamayı telefonun dilinden başka bir dilde kullanmak isterseniz Ayarlar'da bir dil seçici vardır"
        ]
      },
      {
        title: "Anahtarlar ve yedekleme",
        items: [
          "Cihazda yeni Ed25519 veya ECDSA anahtarları oluşturun (Android'de ayrıca RSA), isteğe bağlı parola ile",
          "Oluşturulan genel anahtarı kopyalayın, paylaşın veya kaydedin; sunucunun authorized_keys dosyasına ekleyin",
          "Kayıtlı sunucuları ve kimlik bilgilerini bir yedek dosyasına aktarın — tümünü ya da yalnızca işaretlediğiniz satırları; bir klasör başlığına dokunmak klasörün tamamını alır",
          "İsteğe bağlı parola yedeği şifreler; birleştir veya değiştir ile içe aktarın",
          "Şifrelenmemiş yedek, parolaları ve anahtarları düz metin olarak saklar — dosyayı koruyun veya silin"
        ]
      },
      {
        title: "Güvenlik",
        items: [
          "Güvenli ekran: Android'de ekran görüntülerini ve ekran kaydını engelle ve uygulamayı son kullanılanlar küçük resminden gizle; iOS'ta uygulama değiştirici önizlemesini boşalt ve ekran kaydını ve yansıtmayı engelle (iOS'ta elle alınan bir ekran görüntüsü engellenemez) — parolalar, anahtarlar veya belirteçler ekrandayken açılabilen bir ayar",
          "Kaydedilen sunucular, kimlik bilgileri ve anahtarlar cihazda kalır — gizli veriler Android Keystore ve iOS Keychain'de tutulur, bulut hesabı veya eşitleme yoktur",
          "Yalnızca anonim kullanım analizleri — asla sunucularınız, kimlik bilgileriniz, komutlarınız veya dosya içerikleriniz değil. Android'de Ayarlar'da bunu kapatan bir anahtar vardır; iOS'ta böyle bir anahtar henüz yok"
        ]
      },
      {
        title: "Eklentiler",
        items: [
          "Mobile SSH'yi genişletmek için eklentilere göz atın, kurun ve çalıştırın",
          "Eklentiler genel bir katalogdan istek üzerine indirilir ve uygulamaya özel depolamaya SHA-256 ile doğrulanarak kaydedilir",
          "Bir eklenti neye ihtiyaç duyduğunu bildirir — SSH komutları, bir tünel, depolama — ve uygulama, istemediği hiçbir şeye izin vermez",
          "Bir eklenti sunucunuzda bir şey kurduğunda, çalıştırılacak komutları önce olduğu gibi görür ve çalışmadan önce onaylarsınız",
          "Özel veya kişisel bir katalog kaynağı yapılandırın ya da kendi sunucunuzdaki bir klasörden kurun"
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
      { category: "Bağlantı", feature: "Android ve iOS'ta çalışır",                  mobile: "yes",    termux: "yalnızca Android", termius: "yes" },
      { category: "Bağlantı", feature: "Kaydedilmiş sunucu profilleri",              mobile: "yes",    termux: "ssh config ile", termius: "yes" },
      { category: "Bağlantı", feature: "Kaydedilen sunucuları arama",                mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "Bağlantı", feature: "Sunucu klasörleri / grupları",               mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "Bağlantı", feature: "Arama öncelikli Oturum Ekle seçici",         mobile: "Android", termux: "no",          termius: "no" },
      { category: "Bağlantı", feature: "Sunucu başına birden çok adres (LAN/VPN dolaşımı)", mobile: "yes", termux: "no",     termius: "no" },
      { category: "Bağlantı", feature: "Yeniden kullanılabilir kimlik bilgisi kayıtları", mobile: "yes", termux: "no",         termius: "yes" },
      { category: "Bağlantı", feature: "Ana ekran neye dönebileceğini listeler",      mobile: "yes",    termux: "no",           termius: "kısmi" },
      { category: "Bağlantı", feature: "Çevrimdışı tmux oturum listesi (bağlantı gerekmez)", mobile: "yes", termux: "no",     termius: "no" },
      { category: "Bağlantı", feature: "Adres yerine gösterilen sunucu adları",       mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "Bağlantı", feature: "Giriş günlüğü",                              mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Bağlantı", feature: "Teleport proxy aktarımı (deneysel)",          mobile: "Android", termux: "no",          termius: "no" },
      { category: "Bağlantı", feature: "IPv6 ana bilgisayarlar ve yönlendirme hedefleri", mobile: "yes", termux: "yes",         termius: "kısmi" },
      { category: "Terminal",  feature: "SSH terminali",                              mobile: "yes",    termux: "OpenSSH ile",  termius: "yes" },
      { category: "Terminal",  feature: "xterm-256color emülasyonu",                  mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "Terminal",  feature: "Yapılandırılabilir geri kaydırma (1.000–50.000 satır)", mobile: "yes", termux: "yapılandırılabilir", termius: "kısmi" },
      { category: "Terminal",  feature: "Terminal içi arama (geri kaydırma)",         mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Terminal",  feature: "Ek tuş satırı (ESC/TAB/CTRL/…)",            mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "Terminal",  feature: "Sıkıştırarak metin boyutlandırma",           mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "Terminal",  feature: "Çift dokunarak paneli tam ekrana al",        mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Terminal",  feature: "Terminaldeki tıklanabilir URL'ler",          mobile: "yes",    termux: "kısmi",        termius: "yes" },
      { category: "Terminal",  feature: "Metin seçimi: kopyala / paylaş / tümünü seç", mobile: "yes", termux: "yes",          termius: "yes" },
      { category: "Terminal",  feature: "Donanım / Bluetooth klavye desteği",         mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "Terminal",  feature: "Kabuk entegrasyonu (OSC 133)",               mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Terminal",  feature: "Satır içi görüntüler (Kitty grafikleri)",     mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Terminal",  feature: "Uygulamanın çizdiği mozaik glifler (chafa, ANSI sanatı)", mobile: "Android", termux: "yazı tipine bağlı", termius: "no" },
      { category: "Terminal",  feature: "Fare modlu TUI'lerde dokunuş tıklama sayılır", mobile: "Android", termux: "yes",        termius: "no" },
      { category: "Terminal",  feature: "Nerd Font / powerline glif oluşturma",       mobile: "yes",     termux: "yapılandırılabilir", termius: "kısmi" },
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
      { category: "Tüneller",  feature: "Çalışma zamanında tünel ekle / kaldır",    mobile: "no",     termux: "no",           termius: "yes" },
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
      { category: "Gizlilik ve maliyet", feature: "Güvenli ekran (ekran yakalamayı engelle)", mobile: "yes",  termux: "no",         termius: "no" },
      { category: "Oturumlar", feature: "Eternal Terminal (dayanıklı oturumlar)",  mobile: "yes",    termux: "CLI ile",      termius: "no" },
      { category: "Oturumlar", feature: "SSH üzerinden otomatik etserver kurulumu", mobile: "yes",   termux: "no",           termius: "no" },
      { category: "Oturumlar", feature: "tmux oturum yöneticisi",                  mobile: "yes",    termux: "CLI ile",      termius: "no" },
      { category: "Oturumlar", feature: "herdr ve Zellij oturum yöneticileri",     mobile: "Android", termux: "CLI ile",     termius: "no" },
      { category: "Oturumlar", feature: "Takılmış bir ajana tek dokunuşla yanıt",  mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Eklentiler", feature: "Eklenti desteği",                        mobile: "yes",    termux: "paketlerle",   termius: "no" },
      { category: "Eklentiler", feature: "İstek üzerine kurulan eklenti kataloğu", mobile: "yes",    termux: "no",           termius: "no" }
    ],
    agentAppsHeading: "Mobile SSH ile yapay zeka kodlama ajanı uygulamaları",
    agentAppsIntro:
      "Yalnızca kodlama ajanlarını — Claude Code, Codex ve benzerlerini — telefonundan yönetmek için var olan, hızla büyüyen bir uygulama kategorisi mevcut. Bazıları üçüncü taraf SSH veya aktarım uygulamalarıdır (Onepilot, Happy, Omnara); OpenAI ve Anthropic artık bunu yerel olarak da sunuyor: ChatGPT uygulamasının içinde Codex, Claude uygulamasının içinde Claude Code, her ikisi de sağlayıcının kendi bulutunda çalışıyor. Mobile SSH bunların hepsiyle örtüşür — bu ajanları SSH üzerinden çalıştırabilir ve sana ihtiyaç duyduklarında uyarı alabilirsin — ancak işe diğer taraftan yaklaşır: önce genel, doğrudan bir SSH istemcisidir, sonra bir ajan yardımcısıdır.",
    agentAppsRows: [
      { feature: "Kodlama ajanlarını telefonundan çalıştırır",             mobile: "yes", onepilot: "yes",          happy: "yes",         omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "Herhangi bir kodlama ajanıyla çalışır (tek sağlayıcıyla değil)", mobile: "yes", onepilot: "yes", happy: "Claude Code", omnara: "yes",     chatgpt: "yalnızca Codex", claude: "yalnızca Claude Code" },
      { feature: "Kendi makinende çalışır (sağlayıcı bulutunda değil)",     mobile: "yes", onepilot: "yes",          happy: "yes",         omnara: "yes",     chatgpt: "no",           claude: "kısmi" },
      { feature: "Doğrudan SSH — bulut aktarımı yok",                      mobile: "yes", onepilot: "yes",          happy: "no",          omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "Genel SSH terminali (herhangi bir komutu çalıştır)",     mobile: "yes", onepilot: "yes",          happy: "no",          omnara: "kısmi",   chatgpt: "no",           claude: "no" },
      { feature: "SFTP dosya aktarımı",                                    mobile: "yes", onepilot: "kısmi",        happy: "no",          omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "Yerel port yönlendirme",                                 mobile: "yes", onepilot: "yes",          happy: "no",          omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "tmux oturum yöneticisi",                                 mobile: "yes", onepilot: "kısmi",        happy: "no",          omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "Kendi kurduğunuz bir ajanla çalışır",                    mobile: "yes", onepilot: "yes",          happy: "yes",         omnara: "yes",     chatgpt: "no",           claude: "no" },
      { feature: "Ajan uyarıları (ajanın girdiye ihtiyacı olduğunda bildirim)", mobile: "yes", onepilot: "yes",   happy: "yes",         omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "Ajan istemlerini tek dokunuşla onayla/reddet",           mobile: "yes", onepilot: "yes",          happy: "yes",         omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "Sıfır sunucu veya SSH kurulumu",                         mobile: "no",  onepilot: "no",           happy: "kısmi",       omnara: "kısmi",   chatgpt: "yes",          claude: "yes" },
      { feature: "Android ve iOS",                                         mobile: "yes", onepilot: "yalnızca iOS", happy: "yes",         omnara: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "Hesap gerekmez",                                         mobile: "yes", onepilot: "yes",          happy: "yes",         omnara: "no",      chatgpt: "no",           claude: "no" },
      { feature: "Pro paywall yok (tüm özellikler ücretsiz)",              mobile: "yes", onepilot: "no",           happy: "no",          omnara: "no",      chatgpt: "ücretsiz katman", claude: "no" },
      { feature: "Açık kaynak",                                            mobile: "Apache 2.0",  onepilot: "no",           happy: "MIT",         omnara: "Apache",  chatgpt: "no",           claude: "no" }
    ],
    agentAppsNote:
      "Yerel ChatGPT ve Claude uygulamaları, tek bir sağlayıcının ajanını sıfır kurulumla çalıştırmanın en sorunsuz yoludur — sunucu yok, yalnızca bir hesap — ve cilalı, tek dokunuşla onayla/reddet ekranı eklerler. İşin püf noktası: yalnızca kendi modellerini kendi bulutlarında çalıştırırlar, genel terminal yok, SFTP veya tünel yok, kendi makineni getirme yok ve ücretli ya da hesaba bağlıdırlar. Onepilot, Happy ve Omnara ajanı senin denetlediğin donanımda tutar (Onepilot doğrudan SSH ile; Happy ve Omnara bir bulut aktarımı ile ve Omnara bir hesap gerektirir). Mobile SSH hesap veya sağlayıcı aktarımı olmadan doğrudan kendi sunucuna bağlanır, tam bir terminal, SFTP ve port yönlendirmenin yanında herhangi bir ajanı çalıştırır ve her özellik ücretsizdir. Artık ajan istemlerini onlarla aynı şekilde yanıtlıyor — her bağlantıdaki her ajanı gösteren bir Ajanlar listesi ve her seçenek için bir düğme — aradaki fark, ajanın senin makinende çalışması ve yanıtın kendi SSH bağlantın üzerinden gitmesi. Ödünleşim ise hep olduğu gibi: sunucuyu sen getirirsin ve ajanın kancasının oraya bir kez kurulması gerekir.",
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
        body: "Uygulama verilerini kaydetmeyi seçerseniz Mobile SSH bunları cihazda yerel olarak saklar. Gizli bilgiler iOS'ta sistem Keychain'inde tutulur; Android'de ise cihazdan dışarı aktarılamayan, Android Keystore'da saklanan bir anahtarla şifrelenir ve uygulama Android bulut yedeklemesinin dışında kalır. Bu; kaydedilmiş sunucu profilleri, kullanıcı adları, portlar, parolalar, özel anahtarlar, anahtar parolaları, port yönlendirme kuralları, son oturumlar, giriş denemesi geçmişi, dosya aktarım yolları, sıralama tercihleri, tmux oturum anlık görüntüleri ve reattach ipuçları, uygulama ayarları ve hata ayıklama kaydı etkinken hata ayıklama günlüklerini içerebilir."
      },
      {
        heading: "Ağ üzerinden gönderilen bilgiler",
        body: "Mobile SSH yalnızca yapılandırıp bağlandığınız sunuculara SSH kimlik doğrulama verisi gönderir. Terminal girişi/çıkışı, SFTP dosya içeriği ve yerel port yönlendirilmiş trafik, seçtiğiniz sunucu ve uzak uç noktalarla değiş tokuş edilir. Mobile SSH bu verileri herhangi bir Mobile SSH analitik, reklam, telemetri veya bulut eşitleme hizmetine göndermez."
      },
      {
        heading: "Dosya aktarımı ve depolama erişimi",
        body: "Dosya aktarımı özelliği, yerel telefon depolamasını ve uzak SFTP dizinlerini dosya yüklemek ve indirmek için tarar. Mobile SSH, Android'den geniş kapsamlı depolama izni istemez: sistemin klasör seçicisiyle tek bir klasör seçersiniz ve uygulama yalnızca onun içinde okuyup yazabilir. iOS'ta yerel dosyalara ve fotoğraflara sistemin belge ve fotoğraf seçicileri aracılığıyla erişilir."
      },
      {
        heading: "Günlükler ve sorun giderme",
        body: "Giriş geçmişi ve isteğe bağlı hata ayıklama günlükleri sorun giderme için yerel olarak saklanır ve siz açana kadar ikisi de kapalı ya da boştur. Android'in hata ayıklama kaydedicisi terminal olaylarını, SSH veri boyutlarını, dokunma giriş tanılamalarını, yeniden boyutlandırma olaylarını ve tünel yaşam döngüsü olaylarını yakalar — başlamadan önce sizi, parolalar dahil yazdığınız her tuşun kaydedileceği konusunda uyarır ve İndirilenler klasörünüze bir arşiv yazar. iOS daha dar kapsamlı, farklı bir günlük tutar: bağlanmayı denediği adresler ve her birinin neden başarısız olduğu, yeniden bağlanmalar ve bekleme süreleri, düşen bağlantılar, ağ değişiklikleri ve tmux komutları ile hataları. Bir hata ayıklama günlüğünü veya arşivini destek ekibi ya da başka biriyle paylaşmadan önce gözden geçirin."
      },
      { heading: "Anonim kullanım analizi", body: "Uygulamanın nasıl kullanıldığını anlamak ve geliştirmek için Mobile SSH, bizim adımıza hareket eden gizlilik odaklı analiz sağlayıcısı Aptabase'e anonim kullanım analizleri gönderir. Bu, yalnızca anonim olaylarla (uygulama açılışları ve hangi özelliklerin kullanıldığı gibi) birlikte uygulama sürümü, işletim sistemi sürümü, cihaz modeli ve dil ile sınırlıdır. Düzenli olarak sıfırlanan ve sizinle ya da cihazınızla ilişkilendirilmeyen rastgele bir oturum tanımlayıcısı kullanır. SSH sunucularınızı, ana bilgisayar adlarınızı, kullanıcı adlarınızı, parolalarınızı, anahtarlarınızı, komutlarınızı veya dosya içeriklerinizi asla içermez. Veriler şifreli (HTTPS) bir bağlantı üzerinden gönderilir. Analiz varsayılan olarak açıktır. Android'de Ayarlar'dan istediğiniz zaman kapatabilirsiniz ve kapalıyken hiçbir şey gönderilmez; iOS uygulamasında bu anahtar henüz yok, bu yüzden iOS'ta bu anonim olaylar uygulama kurulu kaldığı sürece gönderilir. iOS anahtarını eklemeyi planlıyoruz — o zamana kadar bu sayfa durumu olduğu gibi belirtir." }
    ],
    permissionsHeading: "İzinler",
    permissions: [
      { label: "İnternet", body: "SSH sunucularına bağlanmak için gereklidir." },
      { label: "Wake lock ve Wi-Fi lock", body: "cihaz uykudayken aktif SSH oturumlarını canlı tutmak için Android'de kullanılır." },
      { label: "Ön plan servisi ve bildirimler", body: "arka planda aktif bağlantıları yönetmek için Android'de kullanılır; iOS'ta bildirimler ajan uyarıları için kullanılır." },
      { label: "Dosya erişimi", body: "Android'de sistem seçicisiyle klasör bazında, iOS'ta ise sistemin belge ve fotoğraf seçicileri üzerinden verilir. Mobile SSH hiçbir platformda toptan depolama izni istemez." }
    ],
    securityHeading: "Güvenlik sorumlulukları",
    securityBody:
      "Kimlik bilgilerini veya özel anahtarları kaydederseniz cihazınızı güçlü bir ekran kilidiyle koruyun. Yalnızca güvendiğiniz sunuculara bağlanın. Mevcut uygulama, ayrı bir şifreli bulut kasası yerine yerel uygulama depolamasını (ve iOS'ta sistem Keychain'ini) kullanır. İsteğe bağlı bir Güvenli ekran ayarı, gizli veriler ekrandayken koruma ekler: Android'de ekran görüntülerini ve ekran kaydını engeller ve uygulamayı son kullanılanlar görünümünden gizler; iOS'ta uygulama değiştirici önizlemesini boşaltır ve ekran kaydını ve yansıtmayı engeller (iOS'ta elle alınan bir ekran görüntüsü engellenemez).",
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
      { slug: "port-forwarding",  title: "Port yönlendirme", text: "Yerel tünel dizeleri yaz, IPv6 hedeflerine yönlendir ve bağlandığında kendiliğinden açılmalarını sağla." },
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
    licenseValue: "Apache 2.0",
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
