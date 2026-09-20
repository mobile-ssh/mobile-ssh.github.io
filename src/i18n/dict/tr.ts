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
    discordCommunity: "Discord'daki Mobile SSH topluluğu",
    beta: "Beta testi",
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
      "Android ve iOS için Mobile SSH: SSH terminalleri, atlama sunucuları, tmux, herdr, Zellij, SFTP, VNC masaüstleri ve yedekler. Android ayrıca VPN ve güvenlik anahtarları sunar.",
    eyebrow: "Android ve iOS için SSH istemcisi",
    h1: "Mobile SSH",
    intro:
      "Telefon ve tabletler için SSH terminalleri, tmux, herdr, Zellij yöneticileri, SFTP, VNC masaüstleri, atlama sunucuları ve yerel tüneller. Eternal Terminal kesintilerde uzak kabuğu canlı tutar. Android VPN ve USB/NFC güvenlik anahtarıyla girişi de içerir.",
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
      { title: "Ajan uyarıları ve tek dokunuşla yanıt", text: "Claude Code, Codex veya başka bir ajanın size ihtiyaç duyduğu anı öğrenin: bölme kehribar rengine döner, araç çubuğundaki bir rozet kaç ajanın beklediğini sayar ve Ajanlar listesi istemi tek dokunuşla yanıtlar — terminale hiçbir şey yazmadan." },
      { title: "Klavyenin üstünde terminal tuşları", text: "On üç tuşluk bir satır — ESC, TAB, CTRL, yön tuşları, Home, End, PgUp, PgDn — kaydırmak yerine ikinci bir satıra sarar; böylece hiçbir şey ekran dışında kalmaz. Hazır bir tuş paletinden F1–F12, Ctrl kombinasyonları veya kendi kaçış dizilerinizi ekleyin." },
      { title: "Komut yazmadan port yönlendirme", text: "Tüneller sunucu profiline bağlıdır ve bağlandığınız anda otomatik olarak yükselir." },
      { title: "Kilit ve ağ değişimine dayanıklı", text: "Kaydedilen bir sunucuya birden çok adres verin — bir ev LAN IP'si ve bir VPN IP'si — Mobile SSH hangisi yanıt verirse ona bağlanır, en son çalışan adresi önce dener ve ağ değiştiği anda yeniden bağlanır. Android'de bir ön plan servisi ve wake lock'lar, ekran kapalıyken oturumları canlı tutar; iOS'ta otomatik yeniden bağlanma ve tmux otomatik ekleme sizi kaldığınız yere geri getirir." },
      { title: "Eternal Terminal", text: "İsteğe bağlı ET aktarımı, uzak kabuğu ağ kesintileri, uyku modu ve IP değişiklikleri boyunca canlı tutar. Ana bilgisayarda etserver yok mu? Mobile SSH, SSH üzerinden onu sizin için kurabilir." },
      { title: "Eklentilerle genişletin", text: "Yeni iş akışları eklemek için genel bir katalogu gözden geçirin ve eklentileri istek üzerine kurun. Her eklenti indirilir ve uygulamaya özel depolamaya SHA-256 ile doğrulanarak kaydedilir." }
    ],
    sectionAHead: "Mobilde SSH çalışması için tasarlandı",
    sectionAIntro:
      "Mobile SSH yaygın yönetim yolunu kısaltır: sunucuyu kaydet, bağlan, oturumları canlı tut, gerektiğinde dosya taşı ve hızlıca etkin terminallere geri dön.",
    features: [
      { title: "SSH terminali", text: "24-bit gerçek renk, italik, terminal içi arama, OSC 133 kabuk entegrasyonu ve sıkıştırarak metin boyutlandırmayla xterm-256color terminali — ayrıca Android ve iOS'ta yapılandırılabilir yazı tipi ve renk şeması ile Nerd Font powerline/simge glifleri." },
      { title: "Çoklu oturum ızgarası", text: "Yeniden boyutlandırılabilir ızgarada sekiz SSH oturumuna kadar — odaklanmak için bölmeye dokun, tam ekran için çift dokun, metni boyutlandırmak için sıkıştır." },
      { title: "Tıklanabilir bağlantılar", text: "Terminaldeki URL'ler altı çizili olur ve bir dokunuşla tarayıcıda açılır — kopyalamaya veya uygulama değiştirmeye gerek kalmaz." },
      { title: "Sunucu klasörleri ve adları", text: "Kaydedilen sunucuları daraltılabilir gruplara düzenle ve bir sunucuya adresi yerine görünecek bir ad ver. Bir ad belirsiz kalacak olduğunda adres yeniden görünür; böylece satırlar birbirine karışmaz." },
      { title: "Ajan uyarıları", text: "Ajanlar kendilerini terminal üzerinden bildirir; böylece uygulama hangisinin ne yüzünden takıldığını bilir. Ajanlar listesinden tek dokunuşla yanıtla; uyarılar üst üste birikmek yerine birbirinin yerini alır ve birine dokunmak zili çalan bölmeyi açar." },
      { title: "Özel anahtarlar", text: "Parola veya özel anahtar kullanın; cihazda Ed25519/ECDSA, Android'de ayrıca RSA üretin. Android USB/NFC FIDO2 ve sunucu başına SSH ajan yönlendirmesini destekler." },
      { title: "SFTP aktarımı", text: "Etkin SSH oturumuna bağlı çift bölmeli dosya gezgini. Yükleme ve indirme sırala; yeniden adlandır, sil ve uzak izinleri incele." },
      { title: "Port yönlendirme", text: "Yerel tünel tanımlarını sunucu profiliyle kaydet; bağlandığında otomatik olarak açılırlar — yeni bir ağda yeniden bağlandıktan sonra bile, elle yeniden kurmana gerek kalmadan." },
      { title: "Yeniden bağlanma akışı", text: "Ağ değiştirdiğinde oturumlar ölü rotanın zaman aşımına uğramasını beklemeden hemen yeniden bağlanır; bekleme süresindeki bir oturum da kullanılabilir bir ağ belirir belirmez uyanır. iOS'ta sessizce yanıt vermeyi bırakmış bir sunucu fark edilir ve yeniden bağlanılır." },
      { title: "Yedekleme ve geri yükleme", text: "Sunucu, kimlik bilgisi ve ayarları isteğe bağlı parola şifrelemesi ve Birleştir/Değiştir önizlemesiyle yedekleyin. Android VPN profilleri içerir; güncel iki platform ortak biçim kullanır ve desteklenen özel ayarları korur." },
      { title: "Eternal Terminal", text: "Ağ kesintileri, uyku modu ve IP değişikliklerine dayanan oturumlar için Eternal Terminal (ET) üzerinden bağlanın — isteğe bağlı olarak SSH üzerinden otomatik etserver kurulumuyla." },
      { title: "Çoğullayıcı yöneticileri", text: "İki platformun tmux, herdr ve Zellij yöneticileriyle oturumlara bağlanın, yeniden adlandırın, oluşturun, bölün, yakınlaştırın veya sonlandırın. Ortak çoklayıcı düğmesi mevcut yöneticileri açar; sunucu profili bağlanınca eklenecek oturumu seçer." },
      { title: "Eklentiler", text: "Eklentileri kategoriye göre gezin, arayın ve süzün; gereken iş akışlarını kurun. İndirmeler SHA-256 ile doğrulanıp özel uygulama alanına kaydedilir." },
      {
        "title": "Sunucu kimliği ve atlama sunucuları",
        "text": "İki platformda kayıtlı bastionlarla erişin. Anahtar kontrolleri girişten önce yapılır, değişeni engeller. Android yeniyi otomatik kaydeder veya sorar; iOS bilinmeyeni onaylatır."
      },
      {
        "title": "Uzak masaüstleri",
        "text": "Android/iOS'ta SSH üzerinden VNC açın; dokunma, klavye, pano ve sunucu destekliyorsa uzak ekran boyutlandırma kullanın."
      },
      {
        "title": "Android VPN istemcileri",
        "text": "Ana ekrandan SSH VPN, yerel SOCKS5, WireGuard, Shadowsocks, OpenVPN yönetin. Profil seçip başlatın, Mobile SSH VPN Hızlı Ayarlar kutucuğuyla durdurup sürdürün."
      }
    ],
    multiHead: "Tek ekran, birkaç canlı kabuk",
    multiP1:
      "Terminal görünümü ızgarada birden çok etkin SSH oturumunu tutabilir. Yazmak için bir bölmeyi seç, terminal denetimleri için ek tuş satırını kullan, metin boyutunu sıkıştırarak ayarla ve tam ekran odaklanmak için bir bölmeye çift dokun.",
    multiP2:
      "Ana ekran «neye geri dönebilirim?» sorusunu yanıtlar — şu anda canlı olan bağlantılar ve kayıtlı sunucularında seni bekleyen tmux oturumları; saklanan bir anlık görüntüden yeniden oluşturuldukları için hiç ağ olmadan bile görünürler.",
    multiAlt:
      "Bir telefonda Mobile SSH, yan yana iki canlı SSH terminal oturumunu bölünmüş görünümde gösteriyor.",
    sftpHead: "Terminal yetmediğinde SFTP",
    sftpBody:
      "Yerel ve uzak klasörleri gezin, aktarımları sıraya alın, her tmux oturumunun dizinini hatırlayın ve uzak dosyaları başka uygulamada açın. İki platform terminale paylaşılan dosyaları kabul eder; iOS Dosyalar'dan seçilen klasörü hatırlar.",
    sftpCtaGuide: "Dosya aktarımı kılavuzu",
    sftpCtaAll: "Tüm özellikler",
    sftpAlt: "Bir telefonda Mobile SSH dosya aktarımı ekranı; yerel ve uzak bölmelerle.",
    galleryHead: "Gerçek bir cihazda gör",
    galleryIntro:
      "Android telefonlardan ve iPhone'lardan ekran görüntüleri — sunucu eklemek, terminallerde çalışmak, birden çok oturum yürütmek ve SFTP ile dosya taşımak için kullanacağın aynı ekranlar.",
    carouselPrev: "Önceki ekran görüntüsü",
    carouselNext: "Sonraki ekran görüntüsü",
    carouselDot: "{n}. konuma git",
    videoHead: "Çalışırken görün",
    videoIntro: "Her iki platformda kısa demolar. Android: nereye geri dönebileceğinizi gösteren ana ekran, yalnızca o sunucuda bulunanları gösteren oturum araç çubuğu, bir dosyayı doğrudan komut istemine gönderme ve tmux, herdr ile Zellij yöneticileri. iOS: doğrudan canlı bir terminalde açılış ve geri döndüğünüz ana ekran.",
    videoAlt: "Android demosu: sürdürülecek tmux oturumlarını listeleyen ana ekran, oturum araç çubuğu, komut istemine dosya ekleme ve tmux, herdr ile Zellij oturum yöneticileri",
    videoIosAlt: "iOS demosu: Mobile SSH uygulamasını açıp doğrudan canlı bir SSH terminal oturumuna girme ve ana ekrana dönme; tmux yöneticisi, Ayarlar ve uygulamanın diğer ekranları da görünüyor",
    muxHead: "Her oturum yöneticisi için bir video",
    muxIntro:
      "Genel demolar tmux, herdr ve Zellij'i tanıtır. Bu uzun kayıtlar iki platformda canlı sunucuyla oturum, pencere, sekme ve bölme kontrollerini gösterir.",
    muxItems: [
        {
          text: "Ana ekrandan doğrudan oturumlara, pencerelere ve bölmelere. Bir oturum zille işaretli, çünkü orada bir şey yanıt bekliyor. Bir pencereye bağlanın, çalışan terminal onu izlesin; pencere oluşturup adlandırın — hiçbir noktada önek kısayolu yazmadan.",
          androidAlt: "tmux yöneticisinin Android demosu: ana ekrandaki önbelleğe alınmış oturum listesi, ardından oturumlar, pencereler ve bölmeler, terminalin izlediği bir pencereye bağlanma ve adlandırılmış bir pencere oluşturma.",
          iosAlt: "tmux yöneticisinin iOS demosu: yaşlarıyla birlikte tmux oturumları ve girdi bekleyenin üzerindeki zil, ardından pencereler ve bölmeler; her satırda Aç, Yeniden adlandır ve Sonlandır."
        },
        {
          text: "Gerçek ajan durumu taşıyan çalışma alanları, sekmeler ve bölmeler — biri çalışıyor, biri engellenmiş ve bir insanı bekliyor. Engellenmiş olanı önizleyin, telefondan yanıtlayın ve herdr'ın onu önce çalışıyor, sonra bitti olarak yeniden sınıflandırmasını izleyin.",
          androidAlt: "herdr yöneticisinin Android demosu: ajan durumuyla etiketlenmiş oturumlar ve çalışma alanları, needs you olarak işaretlenmiş bir ajan, telefondan yanıtlanması ve yeni bir çalışma alanının oluşturulup yeniden adlandırılması.",
          iosAlt: "herdr yöneticisinin iOS demosu: ajan durumu taşıyan çalışma alanları ve yazılan girdiyi Enter ile birlikte engellenmiş bir ajana gönderen bir yanıt sayfası."
        },
        {
          text: "Yaşlarıyla birlikte oturumlar, ardından sekmeler ve bölmeler. Bir bölmenin çıktısını bağlanmadan önizleyin, adlandırılmış bir sekme ekleyin, önemli olanı öne getirin ve bağlanın — komut isteminde hiçbir şey yazmadan.",
          androidAlt: "Zellij yöneticisinin Android demosu: yaşlarıyla oturumlar, sekmeler ve bölmeler, bir bölmenin çıktısının önizlenmesi, adlandırılmış bir sekme oluşturulması ve bir oturuma bağlanılması.",
          iosAlt: "Zellij yöneticisinin iOS demosu: bağlanma, yeniden adlandırma, sonlandırma ve silme eylemleri olan bir oturum, sekmeleri ve önizleme ile her iki bölme yönünü sunan bir bölme."
        }
    ],
    demoHead: "Android'de çekilmiş üç demo daha",
    demoIntro:
      "Bunların henüz iOS çekimi yok. Yukarıdaki demolarla aynı canlı sunucu: uygulamadan çıkınca hayatta kalan bir oturum, telefona yazılmak yerine telefonda oluşturulan bir anahtar ve sunuculardan, onları zihninizde nasıl grupluyorsanız öyle gruplanmış bir liste.",
    demoItems: [
      {
        title: "Oturum uygulamadan uzun yaşar",
        text: "Android bağlantıyı ön plan hizmetinde tutar; kalıcı bildirim sunucuyu belirtir ve Tümünü kes sunar. Günlük akarken çıkıp çalışan oturuma dönün. iOS kısa arka plan süresinden sonra yeniden bağlanıp çoklayıcınıza eklenir.",
        androidAlt:
          "Arka planda çalışmayı sürdüren bir oturumun Android demosu: terminale canlı akan bir HTTP günlüğü, bildirim izni istemi, bağlı sunucunun adını yazan ve «Tümünün bağlantısını kes» sunan süregelen bildirim, ardından ana ekrana geçiş ve hâlâ akmakta olan aynı akışa dönüş."
      },
      {
        title: "Anahtarlar burada oluşturulur, yazılmaz",
        text: "Telefonda bir Ed25519 anahtarı oluşturun: bir etiket, bir kullanıcı adı ve isteğe bağlı bir parola. Ardından gelen sayfa, bir sunucunun authorized_keys dosyasına eklenecek genel yarıyı gösterir ve iki yarıdan da paylaşabilir ya da kaydedebilir.",
        androidAlt:
          "Anahtar oluşturmanın Android demosu: bir etiket, bir kullanıcı adı, Ed25519 anahtar türü ve bir parola içeren «SSH Anahtarı Oluştur» iletişim kutusu, ardından anahtarı paylaşmayı veya kaydetmeyi sunan genel anahtar sayfası."
      },
      {
        title: "Sunucular, adını sizin verdiğiniz klasörlerde yaşar",
        text: "Kaydedilen sunucuları klasörlerde gruplayın ve kullanmadıklarınızı daraltın. Aynı çekim terminalde biter: bir komutun yazdırdığı URL, elle seçilecek bir şey olmak yerine altı çizili ve dokunulabilirdir.",
        androidAlt:
          "Sunucu klasörlerinin Android demosu: adlandırılmış, açılıp daraltılabilen klasörlerde gruplanmış kayıtlı sunucular, ardından komut çıktısındaki URL'lerin altının çizili olduğu ve dokunulabildiği bir terminal."
      }
    ],
    graphicsHead: "Terminalin içinde, hareketli bir grafik",
    graphicsBody:
      "Kitty grafik protokolü üzerinden akıtılan ve uygulamanın dosyanın kendi kare zamanlamasıyla çözdüğü 36 karelik bir GIF — dışarıdan kare kare ilerletilmiyor. Ardından bir terminalin sınandığı kaçış dizileri: OSC 8 yapı numaralarını ve pano adlarını dokunulabilir şeylere çevirir, OSC 52 uzaktaki makinenin telefonunuzun panosuna yazmasına izin verir, OSC 777 ise gerçek bir Android bildirimi yükseltir.",
    graphicsAlt:
      "Kitty grafik protokolü üzerinden terminale akıtılan hareketli bir gecikme grafiğinin Android demosu; ardından OSC 8 bağlantıları, OSC 52 ile pano yazımı ve bir OSC 777 bildirimi.",
    lightboxClose: "Kapat",
    lightboxPrev: "Önceki",
    lightboxNext: "Sonraki",
    galleryAlts: [
      "Bir Android telefonda Mobile SSH ana ekranı; Etkin Oturumlar başlığı ve kaldığı yerden devam edilebilecek kayıtlı sunucuların listesi, Sunucular, Kimlik Bilgileri, Ayarlar, Hakkında ve Eklentiler düğmelerinin üzerinde.",
      "Bir telefonda Sunucu Ekle iletişim kutusu; sunucu adı, ana bilgisayar ve port, ek adresler, kimlik bilgileri, özel anahtar ve port yönlendirme alanlarıyla.",
      "Bir telefonda tek oturumlu SSH terminali; oturum araç çubuğunun altında bir kodlama ajanının yaması ve geçen test koşusu görünüyor.",
      "Bir telefonda yan yana iki SSH oturumu bölünmüş görünümde.",
      "Bir telefonda ızgarada dört SSH oturumu; her biri farklı bir sunucuda, etkin bölme vurgulu.",
      "Bir telefonda SFTP dosya aktarımı ekranı; Telefonum ve Uzak Sunucu bölmeleri.",
      "Bir telefonda Hakkında iletişim kutusu; sürüm, yazar, lisans ve web sitesi alanları.",
      "Telefonda etiket, kullanıcı, anahtar türü ve parola alanlarını içeren SSH Anahtarı Oluştur iletişim kutusu.",
      "Telefonda oluşturulan anahtarı kopyalama, paylaşma ve kaydetme seçenekleriyle gösteren Genel Anahtar iletişim kutusu.",
      "Kaydedilen sunucuların daraltılabilir İş ve Kişisel klasör gruplarında düzenlendiğini gösteren Kaydedilen Sunucular ekranı.",
      "Bir telefonda SSH terminali; https:// URL'leri dokunulabilir tıklanabilir bağlantılar olarak altı çizili şekilde görünüyor.",
      "Bir Android telefonda Zellij yöneticisi; oturumları, sekmeleri ve bölmeleri bağlan, yeniden adlandır, sonlandır ve odaklan düğmeleriyle listeliyor.",
      "Bir telefonda tmux yöneticisi; tmux oturumlarını, pencerelerini ve bölmelerini listeliyor, bağlan, yeniden adlandır ve geçiş yap düğmeleriyle.",
      "Bir telefonda Eklentiler ekranı; Tailscale, WireGuard ve Claude Code CLI içeren, kurulabilir bir eklenti kataloğu gösteriyor.",
      "Bir telefonda AI Chat eklentisi; uzak sunucuda SSH üzerinden çalışan yerel bir llama3.2 modelinden gelen yanıtı akıtıyor.",
      "Bir telefonda Sunucu Ekle iletişim kutusu; oturumların ağ kopmalarına dayanması için aktarım Eternal Terminal olarak ayarlanmış."
    ],
    galleryIosAlts: [
      "Bir iPhone'da Mobile SSH bağlantı formu; sunucu, kimlik doğrulama, klasör ve aktarım alanlarıyla.",
      "Bir iPhone'da Kaydedilen Sunucular; sunucu aramasıyla Production ve Staging gruplarına düzenlenmiş.",
      "Bir iPhone'da canlı SSH terminali; tmux durum çubuğu ve en altta ek tuş satırıyla.",
      "Bir iPhone'da ızgarada alt alta iki SSH oturumu; dokunarak odaklanılan bölmelerle.",
      "Bir iPhone'da Dosya Aktarımı; Telefonum ve Uzak Sunucu bölmeleri ve tamamlanmış bir aktarım günlüğüyle.",
      "Bir iPhone'da anahtarla kimlik doğrulama; cihazda oluşturulmuş bir Ed25519 anahtarı ve kopyalanabilir genel anahtarla.",
      "Bir iPhone'da tmux yöneticisi; oturumları ve pencereleri aç, yeniden adlandır ve sonlandır eylemleriyle listeliyor — girdi bekleyen bir ajanı zil simgesi işaretliyor.",
      "Bir iPhone'da bir tmux penceresine bağlı SSH terminali; uzak bir düzenleyicide kod gösteriyor.",
      "Bir iPhone'da Eklentiler kataloğu; kurulmaya hazır Tailscale, WireGuard, Claude Code CLI, VS Code ve AI Chat ile.",
      "Bir iPhone'da bağlantı formu; oturumların ağ kopmalarına dayanması için aktarım Eternal Terminal olarak ayarlanmış.",
      "Bir iPhone'da ajan uyarısı ayarları; titreşim, ses ve yalnızca kulaklık anahtarlarıyla.",
      "Bir iPhone'da Mobile SSH ana ekranı; Etkin Oturumlar başlığı ve canlı bir oturuma dönmek için bir Devam satırı, altında Sunucular, Kimlik Bilgileri, Günlükler, Ayarlar, Hakkında ve Eklentiler kutucukları."
    ],
    compareHead: "Termux ve Termius yanında yeri",
    compareIntro:
      "Mobile SSH kasıtlı olarak dar tutulmuştur: ne tam bir Linux ortamıdır ne de çapraz platform takım kasası. Mobil kullanıcıların en çok ihtiyaç duyduğu oturum denetimlerine hızlı erişim sağlayan, Android ve iOS için yerel bir SSH/SFTP aracıdır.",
    compareGuideTitle: "Karşılaştırma kılavuzu",
    compareGuideText: "Telefonda veya tablette Mobile SSH, Termux veya Termius'tan hangisini ne zaman seçmeli.",
    privacyTitle: "Gizlilik politikası",
    privacyText: "Hangi bağlantı verilerinin yerel kaldığını ve sunucularına ne gönderildiğini incele."
  },
  features: {
    metaTitle: "Özellikler | Mobile SSH",
    metaDescription:
      "Android/iOS için Mobile SSH terminal, atlama sunucusu, kimlik doğrulama, SFTP, VNC, yedek ve çoklayıcılarını; Android VPN ve güvenlik anahtarlarını keşfedin.",
    eyebrow: "Özellik listesi",
    h1: "Mobile SSH özellikleri",
    intro:
      "Android/iOS'tan SSH terminali, doğrulanmış kimlikler, atlama sunucuları, SFTP, VNC ve oturum yöneticileriyle bağlanın. Android yerleşik VPN ve donanım anahtarları ekler; platform farkları aşağıda işaretlidir.",
    groups: [
      {
        title: "Platformlar",
        items: [
          "Android 8.0 veya üzeri — şu anda bir Google Play kapalı testi: katılım bağlantısını bir mobil tarayıcıda açın, ardından Play'den kurun",
          "iPhone ve iPad'de iOS 16 veya üzeri — TestFlight'taki genel betaya katılın",
          "Güncel Android/iOS sürümleri envanter ve ayarlar için yedek biçimi 2 kullanır; içe aktarma desteklenmeyen platform özelliklerini kullanılabilir yapmaz"
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
          "Kaldığınız yerden devam etmek üzere kurulmuş bir ana ekran: şu anda canlı olan bağlantılar ve sunucularınızda bekleyen tmux oturumları — saklanan bir anlık görüntüden alınır, bu yüzden ağ olmadan da listelenir ve her satırda anlık görüntünün yaşı yazar. iOS'ta Son Oturumlar listesi Yeni Bağlantı ekranına taşındı; bir dokunuş formu dolduruyor",
          "Baştan sona IPv6: adres alanlarında isteğe bağlı portuyla birlikte köşeli parantezli adresler ve port yönlendirme kurallarında köşeli parantezli IPv6 hedefleri",
          "Başarılı ve başarısız giriş denemeleri günlüğü; tam olarak hangi adrese bağlanıldığını ve başarısızlık durumunda nedenini kaydeder",
          "Teleport proxy aktarımı (deneysel, Android): kullanıcı adı, parola ve OTP ile giriş yapın veya bir Teleport yapılandırma ya da kimlik dosyasını içe aktarın, küme düğümlerine göz atın, ardından proxy tüneli üzerinden terminaller, SFTP, tmux ve eklentiler çalıştırın",
          "İki platformda kayıtlı SSH atlama sunucuları, sekiz genişletilmiş atlamaya kadar sıralı zincir; her atlamanın kimlik bilgisi ve kontrolü ayrı",
          "Android SSH ajan yönlendirmesi: sunucu başına açın, uzak programlar kayıtlı anahtarla imza istesin; isteğe bağlı kullanım onayı, özel anahtar telefonda kalır",
          "USB/NFC Android FIDO2: OpenSSH güvenlik anahtarı kaydedin/aktarın, dokunma/PIN isteğini yanıtlayın"
        ]
      },
      {
        title: "Terminal",
        items: [
          "24-bit gerçek renk ve italik ile VT100/xterm-256color terminal davranışı — kabuğa TERM=xterm-256color ve COLORTERM=truecolor bildirilir",
          "Android ve iOS'ta 1.000, 5.000, 10.000 veya 50.000 satıra ayarlanabilen geri kaydırma arabelleği (varsayılan 5.000)",
          "Terminalde bul — geri kaydırmayı ve görünür ekranı ara, eşleşmeler arasında atla (Android ve iOS)",
          "Kabuk entegrasyonu (OSC 133): istemler arasında adım adım gez, bir komutun çıktısının tamamını seç — yalnızca sonuncusunu değil, 300 satır geriden gelen derleme hatasını — ve uzun süren bir komut bittiğinde uyarı al (Android ve iOS)",
          "Kitty grafik protokolü aracılığıyla terminalde satır içi görüntüler; sıkıştırarak yakınlaştırma ve satır yeniden sarmalarında kaybolmak yerine yerinde kalır (Android ve iOS)",
          "Uygulamanın çizdiği blok, braille ve altılı mozaik glifleri sayesinde chafa, timg ve ANSI sanatı Android/iOS ızgarasına doğru oturur",
          "İki platformda da dokunma, fare izleyen terminal programlarına tıklama gönderir; sürükleme isteğe bağlıdır. iOS ayrıca bunun yerine imleci yerleştirme ayarı sunar",
          "Bölme başlığı, tmux'tan sorulan veya kabuk tarafından OSC 7 ile bildirilen gerçek çalışma dizinini gösterir (Android)",
          "On üç tuşluk ek tuş satırı — ESC, TAB, CTRL, oklar, Home, End, PgUp, PgDn, klavye geçişi — kaydırmak yerine ikinci bir satıra sarar ve artakalanları bir taşma menüsüne katlar; böylece hiçbir tuş ekran dışında kalmaz",
          "Satırı Android ve iOS'ta özelleştir: F1–F12, Ctrl kombinasyonları ve simgeler dahil yaklaşık 45 hazır tuşluk bir paletten ekle; tuş kaldır, yeniden sırala, gizle, kendi kaçış dizisi tuşlarını tanımla ve canlı önizlemeyle varsayılanlara sıfırla",
          "Dokunarak odaklan, isteğe bağlı «dokununca klavyeyi göster», kopyala ve tümünü kopyala eylemleri",
          "Sıkıştırarak metin boyutunu değiştir ve uzak terminali yeniden boyutlandır",
          "Çift dokunarak bölme tam ekran modu",
          "Kopyala, Paylaş ve Tümünü seç eylemleriyle terminal metni seçimi — uzun basış kelimeyi seçer ve Kopyala, seçimi paylaşmak veya yeniden kopyalamak için korur",
          "OSC 52 pano — uzak bir tmux veya vim oturumundaki metni doğrudan telefon panosuna kopyala (Android ve iOS)",
          "İki platformda fiziksel klavye ve sesle dikte; iOS Dikte ve önerileri otomatik düzeltmeyle varsayılan açar. Doğrudan giriş için kapatın",
          "Android ve iOS'ta harici ve Bluetooth klavye desteği; oklar, işlev tuşları ve Ctrl/Alt akorları dahil",
          "Köşeli parantezli yapıştırma (bracketed paste); böylece çok satırlı pano içeriği otomatik çalıştırılmaz",
          "Yerleşik Nerd Font, sistem yazı tipinin aksi halde boş kutular olarak göstereceği powerline, starship, devicon ve Material Design simge gliflerini Android ve iOS'ta işler",
          "Geniş CJK, emoji ve birleşen karakterler Android ve iOS'ta doğru şekilde ölçülür ve çizilir; grafem kümeleri ve sıfır genişlikli birleştiriciler dahil",
          "Android ve iOS'ta yapılandırılabilir terminal yazı tipi (sistem tek aralıklı, JetBrains Mono veya Source Code Pro) ve ANSI renk şeması (Solarized, Gruvbox, Dracula, Nord); açık bölmelere anında uygulanır",
          "Ayarlar'da sıkıştırarak yakınlaştırmanın yanı sıra bir terminal metin boyutu kaydırıcısı ve Sistem, Açık ya da Koyu olarak ayarlanan bir uygulama teması",
          "Trafik hızı ve takılma göstergeleri meşgul komutla yanıtsız bağlantıyı ayırır; isteğe bağlı karartma/titreşim",
          "Ayarlar uzak bildirim, komut bitişi ve uzak pano okumayı kontrol eder; izinler varsayılan kapalıdır"
        ]
      },
      {
        title: "Oturumlar",
        items: [
          "Eşzamanlı sekiz SSH oturumuna kadar",
          "Etkin oturumlar için ızgara düzeni",
          "Arka plan ve ekran kilidi dayanıklılığı: Android'de bir ön plan servisi, uygulamayı kaydırıp kapattıktan sonra bile kabukları ve ajanları çalışır tutar; iOS'ta tmux otomatik ekleme kabuğunuzu yeniden bağlar",
          "Üstel gerilemeli keepalive ve yeniden bağlanma denemeleri — en fazla on deneme; zaten ayrıldığınız bir ağda yaşanan başarısızlıklar bu sınıra sayılmaz",
          "Wi-Fi, hücresel veri veya VPN arasında geçmek, ölü rotanın zaman aşımını beklemek yerine anında yeniden bağlanmayı başlatır; bekleme süresindeki bir oturum da kullanılabilir bir ağ belirir belirmez yeniden dener",
          "Yanıtsız keepalive yoklamaları duran sunucuyu algılayıp Android/iOS'ta yeniden bağlantıyı başlatır",
          "Başlangıç ekranından Etkin Oturumlar girişi; süregelen bildirim oturumları listeler — açmak için dokunun",
          "tmux komut takibi ve yeniden ekleme; iki platformda sunucu başına Otomatik, Hiçbiri, tmux, herdr, Zellij seçenekleri; soket değişiminde oturum kimliği korunur",
          "Ajanlar kendilerini terminal üzerinden bildirir; böylece uygulama hangi ajanın çalıştığını, hangi aracı kullandığını ve sizin yüzünüzden takılıp takılmadığını bilir — bölme kehribar rengine döner, başlığında «claude · sizi bekliyor» yazar ve araç çubuğundaki bir rozet kaç ajanın beklediğini sayar",
          "Bir ajanın sorusunu Ajanlar listesinden tek dokunuşla yanıtlayın; yanıt ayrı bir kanaldan gider, bu yüzden ekranda olanın içine hiçbir şey yazılmaz",
          "Ajan kancasını uygulamanın içinden bir sunucuya kurun — herhangi bir ajanın çağırabileceği küçük bir kabuk betiği; sağlayıcıya özel bir entegrasyon değil",
          "Ağ kesintileri, uyku modu ve IP değişikliklerine dayanan oturumlar için Eternal Terminal (ET) aktarımı; isteğe bağlı olarak SSH üzerinden otomatik etserver kurulumuyla",
          "Tmux yöneticisi: oturumları, pencereleri ve bölmeleri listele ve aralarında geçiş yap — bağlan, yeniden adlandır, oluştur, böl, yakınlaştır veya sonlandır; ada/tarihe göre sıralama ve girdi bekleyen ajanlar için 🔔",
          "Tek çoklayıcı düğmesi tmux, herdr ve Zellij'i açar; Herdr bölme önizleme, odak ve yanıtı, Zellij canlı ve çıkılmış oturumları destekler"
        ]
      },
      {
        title: "Dosyalar ve tüneller",
        items: [
          "Yerel ve uzak dosyalar için çift bölmeli SFTP gezgini; her aktarımı gösteren ve kaydırılabilen bir aktarım günlüğüyle",
          "Kuyruklu yükleme/indirme; Android Mobile SSH veya iOS Paylaşım Uzantısıyla dosya paylaşın, bağlı oturuma yükleyip uzak yollarını ekleyin",
          "Telefon ve uzak ana bilgisayar arasında özyinelemeli klasör yükleme ve indirme",
          "Uzak yeniden adlandırma, silme, oluşturma, düzenleme, .tar.gz olarak sıkıştırma, izinler (chmod/chown) ve ayrıntılar",
          "İndirilen bir dosyayı her iki platformda da başka bir uygulamada açın — iOS'ta indirilenler ayrıca Dosyalar uygulamasında «iPhone'umda» altında görünür",
          "Dosya Aktarımı iki platformda host ve tmux oturumuna göre dizinleri hatırlar; iOS Dosyalar'dan seçilen dış klasörü de hatırlar",
          "Her ana bilgisayar için kalıcı, ada veya tarihe göre sıralama ve son kullanılan uzak yollara geri dönüş",
          "Dosya boyutları ikili birimlerde gösterilir; bir sekme ötedeki terminalde ls -h ne gösteriyorsa onunla eşleşir",
          "Sunucu profilleriyle kaydedilen ve bağlanıldığında otomatik olarak açılan yerel port yönlendirme",
          "Uygulamanın tamamı ve dosya gezgini sistemin açık veya koyu temasını takip eder — Android ve iOS'ta Sistem, Açık veya Koyu seçin"
        ]
      },
      {
        title: "Yerelleştirme",
        items: [
          "İki platformda yirmi dil: Arapça, Mısır Arapçası, Bengalce, Basitleştirilmiş/Geleneksel Çince, İngilizce, Fransızca, Almanca, Hintçe, Endonezce, Japonca, Marathice, Nijerya Pidgin dili, Portekizce, Rusça, İspanyolca, Tamilce, Teluguca, Türkçe ve Urduca",
          "Varsayılan olarak sistem dilini takip eder; uygulamayı telefonun dilinden başka bir dilde kullanmak isterseniz Ayarlar'da bir dil seçici vardır"
        ]
      },
      {
        title: "Anahtarlar ve yedekleme",
        items: [
          "Cihazda yeni Ed25519 veya ECDSA anahtarları oluşturun (Android'de ayrıca RSA), isteğe bağlı parola ile",
          "Oluşturulan genel anahtarı kopyalayın, paylaşın veya kaydedin; sunucunun authorized_keys dosyasına ekleyin",
          "Tam yedek sunucu, kimlik bilgisi, ayar, dil ve çoklayıcı sırasını; Android ayrıca SSH VPN, SOCKS5, WireGuard, Shadowsocks, OpenVPN profillerini içerir",
          "Dar kapsam için seçili veya yalnız envanter dışa aktarımı; tam yedeği önizleyip Birleştir/Değiştir seçin, isterseniz parolayla şifreleyin",
          "Şifresiz yedek parola ve özel anahtar içerir. SSH güveni, etkin oturum, sistem/klasör izinleri taşınmaz; güvenlik anahtarı kimliği fiziksel anahtar ister"
        ]
      },
      {
        title: "Güvenlik",
        items: [
          "Güvenli ekran: Android'de ekran görüntülerini ve ekran kaydını engelle ve uygulamayı son kullanılanlar küçük resminden gizle; iOS'ta uygulama değiştirici önizlemesini boşalt ve ekran kaydını ve yansıtmayı engelle (iOS'ta elle alınan bir ekran görüntüsü engellenemez) — parolalar, anahtarlar veya belirteçler ekrandayken açılabilen bir ayar",
          "Kaydedilen sunucular, kimlik bilgileri ve anahtarlar cihazda saklanır; bulut hesabı veya eşitleme zorunlu değildir. Depolama korumaları ve sınırları için gizlilik sayfasına bakın",
          "Anonim analitik varsayılan açıktır, iki platformun Ayarlar'ından kapatılır; olaylar sunucu, kimlik bilgisi, komut veya dosya içeriği içermez",
          "SSH kimliği girişten önce doğrulanır. Android yeni ham anahtarı varsayılan otomatik sabitler, onay seçeneği vardır; iOS bilinmeyeni sorar. İkisi değişeni reddeder",
          "İki platform da kapsamı belirlenmiş OpenSSH host anahtarı iptal kayıtlarını içe aktarır. iOS, @revoked ile işaretli Ed25519/ECDSA anahtarlarını kabul eder; Android ayrıca host sertifika yetkililerini destekler. iOS host sertifikalarını veya CA içe aktarımını desteklemez. SSH güveni her cihazda kalır ve yedeklere dahil edilmez"
        ]
      },
      {
        title: "Eklentiler",
        items: [
          "Eklentileri kategoriye göre gezin, arayın, kurun ve çalıştırın; kaynak değişince katalog yenilenir",
          "Eklentiler genel bir katalogdan istek üzerine indirilir ve uygulamaya özel depolamaya SHA-256 ile doğrulanarak kaydedilir",
          "Bir eklenti neye ihtiyaç duyduğunu bildirir — SSH komutları, bir tünel, depolama — ve uygulama, istemediği hiçbir şeye izin vermez",
          "Bir eklenti sunucunuzda bir şey kurduğunda, çalıştırılacak komutları önce olduğu gibi görür ve çalışmadan önce onaylarsınız",
          "Özel veya kişisel bir katalog kaynağı yapılandırın ya da kendi sunucunuzdaki bir klasörden kurun"
        ]
      },
      {
        "title": "Uzak masaüstleri",
        "items": [
          "Android/iOS'ta VNC portunu internete açmadan SSH tünelli masaüstü",
          "Dokunmatik işaretçi, fiziksel/ekran klavyesi, pano alışverişi ve masaüstü zili",
          "VNC sunucusu destekliyorsa hazır/özel ekran ölçüsü seçin; desteklenmeyen boyut isteği bildirilir"
        ]
      },
      {
        "title": "VPN istemcileri (Android)",
        "items": [
          "Ana ekrandaki VPN'den SSH VPN, SOCKS5, WireGuard, Shadowsocks, OpenVPN profillerini yönetin",
          "SSH VPN tüm/seçili uygulama ve alanların TCP/DNS trafiğini kayıtlı SSH'tan geçirir; diğer atanmış UDP engellenir",
          "Kimlik doğrulamalı yerel SOCKS5 başka VPN ile çalışır; katılan uygulamalar proxy ve uzak DNS kullanmalıdır",
          "WireGuard .conf, desteklenen Shadowsocks ss:// veya doğrulanmış sertifikalı bağımsız OpenVPN .ovpn aktarın",
          "Profil başlatmak VPN'i değiştirir; Mobile SSH VPN kutucuğu hatırlanan VPN'i durdurur/başlatır, SOCKS içermez",
          "Android tek cihaz VPN'i sunar. Tailscale ayrı uygulama, IKEv2/IPsec Android Ayarları kullanır. Sürekli açık/kilitleme garantisi yoktur"
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
      "Mobile SSH, Android/iOS'ta SSH, SFTP, VNC ve çoklayıcıları, Android'de ayrıca VPN ve güvenlik anahtarı girişini birleştirir. Termux Android Linux ortamıdır; Termius hesap tabanlı üretkenlik özellikli çok platformlu SSH istemcisidir.",
    columns: {
      need: "İhtiyaç",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "Temel amaç",
        mobileSsh: "İki platformda SSH, SFTP, VNC, atlama sunucuları ve çoklayıcılar; Android'de VPN ve FIDO2.",
        termux: "APT paketli Android terminal emülatörü ve Linux ortamı.",
        termius: "Android, iOS, masaüstü ve web odaklı takım akışları için modern SSH istemcisi."
      },
      {
        need: "Kurulum tarzı",
        mobileSsh: "Sunucu/kimlik bilgilerini kaydedin, isterseniz atlama sunucusu seçin ve girişten önce kimlik kontrolüyle bağlanın.",
        termux: "OpenSSH gibi paketleri yükle, kabuk araçlarını yapılandır ve Linux benzeri komut satırından çalış.",
        termius: "Ana bilgisayarları, anahtarları, parçacıkları ve kasaları Termius uygulama/hesap modeliyle oluştur veya eşitle."
      },
      {
        need: "Mobil terminal denetimleri",
        mobileSsh: "Ek tuşlar, oturum ızgarası, tam ekran, kıstırarak yakınlaştırma, kopyala/paylaş, fare ve harici klavye. iOS Dikte ve öneriler doğrudan giriş için kapatılabilir.",
        termux: "Güçlü terminal ortamı; davranış yüklü araçlara ve yapılandırmaya bağlı.",
        termius: "Mobil klavye eklentisi, hareketler, sekmeler, otomatik tamamlama, parçacıklar ve cilalı terminal deneyimi."
      },
      {
        need: "Dosya aktarımı",
        mobileSsh: "İki bölmeli SFTP, tmux klasör geçmişi, uzak ve gelen dosya paylaşımı; iOS dış Dosyalar klasörünü hatırlar.",
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
        mobileSsh: "Cihazda profil, kimlik bilgisi, host güveni ve ayarlar; isteğe bağlı taşınabilir envanter/ayar yedeği. Android VPN de içerir; SSH güveni cihazda kalır.",
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
      { category: "Terminal",  feature: "Çift dokunarak bölmeyi tam ekrana al",        mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Terminal",  feature: "Terminaldeki tıklanabilir URL'ler",          mobile: "yes",    termux: "kısmi",        termius: "yes" },
      { category: "Terminal",  feature: "Metin seçimi: kopyala / paylaş / tümünü seç", mobile: "yes", termux: "yes",          termius: "yes" },
      { category: "Terminal",  feature: "Donanım / Bluetooth klavye desteği",         mobile: "yes",    termux: "yes",          termius: "yes" },
      { category: "Terminal",  feature: "Kabuk entegrasyonu (OSC 133)",               mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Terminal",  feature: "Satır içi görüntüler (Kitty grafikleri)",     mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Terminal",  feature: "Uygulamanın çizdiği mozaik glifler (chafa, ANSI sanatı)", mobile: "yes", termux: "yazı tipine bağlı", termius: "no" },
      { category: "Terminal",  feature: "Fare modlu TUI'lerde dokunuş tıklama sayılır", mobile: "yes", termux: "yes",        termius: "no" },
      { category: "Terminal",  feature: "Nerd Font / powerline glif oluşturma",       mobile: "yes",     termux: "yapılandırılabilir", termius: "kısmi" },
      { category: "Oturumlar", feature: "Eşzamanlı birden çok SSH oturumu",          mobile: "en fazla 8", termux: "en fazla 8", termius: "yes" },
      { category: "Oturumlar", feature: "Izgara bölme düzeni",                       mobile: "yes",    termux: "tmux ile",     termius: "sekmeler" },
      { category: "Oturumlar", feature: "tmux uyumlu kaydırma",                     mobile: "yes",    termux: "yes",          termius: "no" },
      { category: "Oturumlar", feature: "Yeniden bağlanmada tmux reattach ipuçları", mobile: "yes",   termux: "no",           termius: "no" },
      { category: "Oturumlar", feature: "Ajan uyarıları (Claude Code / Codex)",      mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Oturumlar", feature: "Oturum listesini gösteren süregelen bildirim", mobile: "Android", termux: "kısmi",   termius: "no" },
      { category: "Oturumlar", feature: "Ön plan servisi ve wake lock",              mobile: "Android", termux: "yes",         termius: "kısmi" },
      { category: "Oturumlar", feature: "Geri çekilmeli otomatik yeniden bağlanma",  mobile: "yes",    termux: "autossh ile",  termius: "yes" },
      { category: "Dosyalar",  feature: "Yerleşik SFTP dosya aktarımı arayüzü",      mobile: "yes",    termux: "no",           termius: "yes" },
      { category: "Dosyalar",  feature: "Çift bölmeli yerel + uzak gezgin",          mobile: "yes",    termux: "no",           termius: "yes" },
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
      { category: "Gizlilik ve maliyet", feature: "Analitikten çıkma seçeneği",      mobile: "yes", termux: "analitik yok", termius: "no" },
      { category: "Gizlilik ve maliyet", feature: "Yalnızca yerel veriler (bulut eşitlemesi yok)", mobile: "yes", termux: "yes", termius: "kısmi" },
      { category: "Gizlilik ve maliyet", feature: "Güvenli ekran (ekran yakalamayı engelle)", mobile: "yes",  termux: "no",         termius: "no" },
      { category: "Oturumlar", feature: "Eternal Terminal (dayanıklı oturumlar)",  mobile: "yes",    termux: "CLI ile",      termius: "no" },
      { category: "Oturumlar", feature: "SSH üzerinden otomatik etserver kurulumu", mobile: "yes",   termux: "no",           termius: "no" },
      { category: "Oturumlar", feature: "tmux oturum yöneticisi",                  mobile: "yes",    termux: "CLI ile",      termius: "no" },
      { category: "Oturumlar", feature: "herdr ve Zellij oturum yöneticileri",     mobile: "yes"    , termux: "CLI ile",     termius: "no" },
      { category: "Oturumlar", feature: "Takılmış bir ajana tek dokunuşla yanıt",  mobile: "yes",    termux: "no",           termius: "no" },
      { category: "Eklentiler", feature: "Eklenti desteği",                        mobile: "yes",    termux: "paketlerle",   termius: "no" },
      { category: "Eklentiler", feature: "İstek üzerine kurulan eklenti kataloğu", mobile: "yes",    termux: "no",           termius: "no" }
    ],
    agentAppsHeading: "Mobile SSH ile yapay zeka kodlama ajanı uygulamaları",
    agentAppsIntro:
      "Yalnızca kodlama ajanlarını — Claude Code, Codex ve benzerlerini — telefonundan yönetmek için var olan, hızla büyüyen bir uygulama kategorisi mevcut. Bazıları üçüncü taraf SSH veya aktarım uygulamalarıdır (Onepilot, Happy, Omnara, Moshi, Orca); OpenAI ve Anthropic artık bunu yerel olarak da sunuyor: ChatGPT uygulamasının içinde Codex, Claude uygulamasının içinde Claude Code, her ikisi de sağlayıcının kendi bulutunda çalışıyor. Mobile SSH bunların hepsiyle örtüşür — bu ajanları SSH üzerinden çalıştırabilir ve sana ihtiyaç duyduklarında uyarı alabilirsin — ancak işe diğer taraftan yaklaşır: önce genel, doğrudan bir SSH istemcisidir, sonra bir ajan yardımcısıdır.",
    agentAppsRows: [
      { feature: "Kodlama ajanlarını telefonundan çalıştırır",             mobile: "yes", onepilot: "yes",          happy: "yes",         omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "Herhangi bir kodlama ajanıyla çalışır (tek sağlayıcıyla değil)", mobile: "yes", onepilot: "yes", happy: "Claude Code", omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "yalnızca Codex", claude: "yalnızca Claude Code" },
      { feature: "Kendi makinende çalışır (sağlayıcı bulutunda değil)",     mobile: "yes", onepilot: "yes",          happy: "yes",         omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "no",           claude: "kısmi" },
      { feature: "Doğrudan SSH — bulut aktarımı yok",                      mobile: "yes", onepilot: "yes",          happy: "no",          omnara: "no", moshi: "yes", orca: "no",      chatgpt: "no",           claude: "no" },
      { feature: "Genel SSH terminali (herhangi bir komutu çalıştır)",     mobile: "yes", onepilot: "yes",          happy: "no",          omnara: "kısmi", moshi: "yes", orca: "Eşleştirilmiş bilgisayar terminali",   chatgpt: "no",           claude: "no" },
      { feature: "SFTP dosya aktarımı",                                    mobile: "yes", onepilot: "kısmi",        happy: "no",          omnara: "no", moshi: "Çelişkili belgeler", orca: "Yalnızca bilgisayarda",      chatgpt: "no",           claude: "no" },
      { feature: "Yerel port yönlendirme",                                 mobile: "yes", onepilot: "yes",          happy: "no",          omnara: "no", moshi: "Geliştirme önizlemeleri (Pro)", orca: "Yalnızca bilgisayarda",      chatgpt: "no",           claude: "no" },
      { feature: "tmux oturum yöneticisi",                                 mobile: "yes", onepilot: "kısmi",        happy: "no",          omnara: "no", moshi: "Pro", orca: "Belgelenmemiş",      chatgpt: "no",           claude: "no" },
      { feature: "Kendi kurduğunuz bir ajanla çalışır",                    mobile: "yes", onepilot: "yes",          happy: "yes",         omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "no",           claude: "no" },
      { feature: "Ajan bildirimleri (bağlı ajan girdi beklediğinde)", mobile: "yes", onepilot: "yes",   happy: "yes",         omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "Ajan istemlerini tek dokunuşla onayla/reddet",           mobile: "yes", onepilot: "yes",          happy: "yes",         omnara: "yes", moshi: "Denemeden sonra Pro", orca: "Desteklenen ajanlar",     chatgpt: "yes",          claude: "yes" },
      { feature: "Sıfır sunucu veya SSH kurulumu",                         mobile: "no",  onepilot: "no",           happy: "kısmi",       omnara: "kısmi", moshi: "no", orca: "Bilgisayarla eşleştirme",   chatgpt: "yes",          claude: "yes" },
      { feature: "Android ve iOS",                                         mobile: "yes", onepilot: "yalnızca iOS", happy: "yes",         omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "yes",          claude: "yes" },
      { feature: "Hesap gerekmez",                                         mobile: "yes", onepilot: "yes",          happy: "yes",         omnara: "no", moshi: "yes", orca: "LAN/Tailscale; Relay hesap gerektirir",      chatgpt: "no",           claude: "no" },
      { feature: "Pro paywall yok (tüm özellikler ücretsiz)",              mobile: "yes", onepilot: "no",           happy: "no",          omnara: "no", moshi: "no", orca: "yes",      chatgpt: "ücretsiz katman", claude: "no" },
      { feature: "Açık kaynak",                                            mobile: "Apache 2.0",  onepilot: "no",           happy: "MIT",         omnara: "Apache", moshi: "no", orca: "MIT",  chatgpt: "no",           claude: "no" }
    ],
    agentAppsNote:
      "Yerel ChatGPT ve Claude uygulamaları, tek bir sağlayıcının ajanını sıfır kurulumla çalıştırmanın en sorunsuz yoludur — sunucu yok, yalnızca bir hesap — ve cilalı, tek dokunuşla onayla/reddet ekranı eklerler. İşin püf noktası: yalnızca kendi modellerini kendi bulutlarında çalıştırırlar, genel terminal yok, SFTP veya tünel yok, kendi makineni getirme yok ve ücretli ya da hesaba bağlıdırlar. Onepilot, Happy ve Omnara ajanı senin denetlediğin donanımda tutar (Onepilot doğrudan SSH ile; Happy ve Omnara bir bulut aktarımı ile ve Omnara bir hesap gerektirir). Mobile SSH hesap veya sağlayıcı aktarımı olmadan doğrudan kendi sunucuna bağlanır, tam bir terminal, SFTP ve port yönlendirmenin yanında herhangi bir ajanı çalıştırır ve her özellik ücretsizdir. Artık ajan istemlerini onlarla aynı şekilde yanıtlıyor — her bağlantıdaki her ajanı gösteren bir Ajanlar listesi ve her seçenek için bir düğme — aradaki fark, ajanın senin makinende çalışması ve yanıtın kendi SSH bağlantın üzerinden gitmesi. Ödünleşim ise hep olduğu gibi: sunucuyu sen getirirsin ve ajanın kancasının oraya bir kez kurulması gerekir.",
    agentAppsSourcesNote: "2026-09-19 tarihinde kontrol edildi. Moshi’nin doğrudan SSH terminali, ajan olayları ve onayları için sunduğu isteğe bağlı arka uç hizmetinden ayrıdır. Android mağaza sayfası SFTP desteğini duyurur, ancak ayrıntılı belgeleri SCP yüklemelerini ve geliştirme sunucusu önizlemelerini açıklar; ilgili hücreler buna göre açıklamalar içerir. Orca’nın mobil uygulaması bilgisayardaki Orca ile eşleşir: LAN/Tailscale, Orca hesabı olmadan çalışabilirken Relay hesap gerektirir. Yalnızca bilgisayarda kullanılabilen ve belgelenmemiş özellikler tabloda belirtilmiştir.",
  },
  privacy: {
    metaTitle: "Gizlilik Politikası | Mobile SSH",
    metaDescription:
      "Mobile SSH Android/iOS'ta verileri, kimlikleri, yedekleri, SSH/VPN trafiğini, dosyaları, analitik ve izinleri nasıl işler.",
    eyebrow: "Gizlilik",
    h1: "Gizlilik Politikası",
    intro:
      "Mobile SSH yapılandırmayı cihazınızda saklar ve seçtiğiniz sunucu/hizmete bağlanır. Mobile SSH hesabı veya bulut eşitlemesi gerekmez. Android'in isteğe bağlı VPN'i seçilen cihaz trafiğini ayarladığınız sunucudan geçirir.",
    sections: [
      {
        heading: "Cihazınızda saklanan bilgiler",
        body: "Kayıtlı veriler sunucu profillerini, kimlik bilgilerini, özel anahtarları, host kimliklerini, atlama sunucularını, tünel kurallarını, oturum görüntülerini, giriş geçmişini, dosya yollarını, klasör erişim izinlerini ve uygulama ayarlarını içerir. Android ayrıca VPN/proxy yapılandırmalarını ve bunların gizli bilgilerini saklar. iOS gizli bilgiler için Keychain kullanır. Android envanteri Keystore destekli bir anahtarla şifreler; ancak şifreleme kullanılamıyorsa düz metin olarak kaydedebilir. WireGuard, Shadowsocks ve OpenVPN profillerinin saklanması şifreleme gerektirir. Android bulut yedeklemesi kapalıdır. İsteğe bağlı hata ayıklama günlükleri yerel olarak saklanır."
      },
      {
        heading: "Ağ üzerinden gönderilen bilgiler",
        body: "SSH giriş bilgisi kimlik kontrolünden sonra ayarlı sunucu/bastionlara gider. Terminal, SFTP, VNC ve yönlendirme seçtiğiniz hedefe gider. Eklenti kataloğu/indirme ayarlı kaynağa erişir. Android VPN/proxy, başka uygulama trafiği ve DNS'yi rotaya göre SSH, WireGuard, Shadowsocks veya OpenVPN üzerinden taşır. Bu trafik Mobile SSH analitiğine veya bulut depolamaya gönderilmez."
      },
      {
        heading: "Dosya aktarımı ve depolama erişimi",
        body: "Aktarım genel depolama izni olmadan seçilen dosya/klasörleri kullanır. Android verilen klasör erişimini korur. iOS uygulama klasörünü veya hatırlanan Dosyalar klasörünü kullanır; sistem arayüzlerinden belge, fotoğraf ve paylaşım alır. Dosya sağlayıcısı kendi bulutunda saklayabilir. Açma/paylaşma seçtiğiniz uygulama veya hedefe gönderir."
      },
      {
        heading: "Günlükler ve sorun giderme",
        body: "Bağlanırken giriş denemeleri yerel kaydedilir. Hata kaydı isteğe bağlıdır: Android her tuşu, parolaları da içereceğini bildirir ve arşiv çıkarır. iOS adres, hata, yeniden bağlantı, ağ değişimi ve tmux tanısını kaydeder. Paylaşmadan inceleyin; sunucu ayrıntısı ve Android'de yazılmış sırlar içerebilir."
      },
      { heading: "Kullanım analizi", body: "Analiz etkinleştirildiğinde Mobile SSH, uygulamayı geliştirmek için özellik etkileşimlerini (VPN/proxy kullanımı ve terminal çoklayıcı türü dahil), bağlantı tanılama verilerini, uygulama ve işletim sistemi sürümlerini, cihaz modelini, dili ve geçici bir oturum kimliğini HTTPS üzerinden Aptabase'e gönderir. Aptabase, ülke veya bölgeyi ve günlük takma adlı bir tanımlayıcıyı belirlemek için isteğin IP adresini ve User-Agent bilgisini işler; orijinal IP adresini veya User-Agent bilgisini analiz verileriyle birlikte saklamaz. Olaylar; gezinme trafiği, DNS sorguları, sunucu adresleri, kullanıcı adları, kimlik bilgileri, komutlar veya dosya içerikleri içermez. Analiz onayı istemini gösteren Android sürümleri açık onay gerektirir; eski Android sürümlerinde ve iOS'ta analiz varsayılan olarak açıktır. Tüm özellikler analiz olmadan çalışır. Ayarlar'dan veri toplama durdurulabilir; iOS'ta önceden kuyruğa alınmış olaylar yine de gönderilebilir. Android'deki onay cihaza özeldir ve yedeklerden geri yüklenmez. [Aptabase'in veri işleme sözleşmesine](https://aptabase.com/legal/dpa) bakın." },
      {
        "heading": "Dışa aktardığınız yedekler",
        "body": "Tam yedek envanter/ayarları, Android ayrıca VPN/proxy içerir. Parola dosyayı şifreler; yoksa parola ve özel anahtar açık metindir. Kaydetme/paylaşma hedefini siz seçersiniz. SSH güveni, etkin oturum ve sistem klasör izni dışarıda kalır. Önizleme uygulanacak bölümleri ve güvenlik ayarlarını gösterir."
      },
      {
        "heading": "Android VPN yönlendirmesi",
        "body": "Cihaz VPN'i Android onayı ister ve durdurulana veya sistem bitirene kadar sürer. Tek cihaz VPN'i, yanında yerel SOCKS olabilir. SSH TCP/DNS taşır, diğer SSH yönlü UDP engellenir. Durdurma, değiştirme veya uygulamayı bitirme eski VPN korumasını sona erdirir; sürekli açık/kilitleme garantisi yoktur."
      }
    ],
    permissionsHeading: "İzinler",
    permissions: [
      { label: "İnternet", body: "SSH, dosya, masaüstü, VPN, eklenti bağlantıları ve açık analitik için kullanılır." },
      { label: "Wake lock ve Wi-Fi lock", body: "cihaz uykudayken etkin SSH oturumlarını canlı tutmak için Android'de kullanılır." },
      { label: "Ön plan servisi ve bildirimler", body: "arka planda etkin bağlantıları yönetmek için Android'de kullanılır; iOS'ta bildirimler ajan uyarıları için kullanılır." },
      { label: "Dosya erişimi", body: "sistem klasör/belge/fotoğraf seçicileriyle verilir; iOS dış Dosyalar klasörünü hatırlar. İki platform da genel depolama izni istemez." },
      {
        "label": "VPN onayı (Android)",
        "body": "yerleşik VPN cihaz trafiğini yönlendirmeden gerekir. Yalnız SOCKS proxy VPN yuvasını kullanmaz."
      },
      {
        "label": "USB ve NFC (Android)",
        "body": "FIDO2 fiziksel anahtarla kayıt veya SSH imzası için kullanılır; gerektiğinde USB izni, dokunma/PIN onayı istenir."
      }
    ],
    securityHeading: "Güvenlik sorumlulukları",
    securityBody:
      "Cihazı ve dışa aktarılan yedekleri koruyun. Bilinmeyen SSH izlerini güvenilir kanaldan karşılaştırın: ilk kullanım onayı isterseniz Android otomatik kabulünü kapatın; iOS varsayılan sorar. Kaydı değiştirmeden anahtar değişimini araştırın. Güvenli ekran Android'de ekran görüntülerini ve kaydı engeller; iOS uygulama geçiş önizlemesi ve kayıt/yansıtmayı gizler, elle ekran görüntüsünü engelleyemez.",
    contactHeading: "İletişim",
    contactBody: "Destek iletişimi: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  },
  docsIndex: {
    metaTitle: "Belgeler | Mobile SSH",
    metaDescription: "Android ve iOS'taki Mobile SSH için son kullanıcı belgeleri.",
    eyebrow: "Kullanıcı kılavuzu",
    h1: "Mobile SSH belgeleri",
    intro:
      "Platform farklarıyla SSH kimliği/atlamalar, terminal/VNC, çoklayıcı, SFTP, yedek, yerel tünel ve Android VPN kılavuzları.",
    cards: [
      { slug: "getting-started",  title: "Başlarken",        text: "Kurun, kimlik doğrulayın, atlama/anahtar ayarlayın ve yapılandırmayı yedekleyin." },
      { slug: "terminal",         title: "Terminal",          text: "Terminal, tmux, herdr, Zellij, ajan uyarısı ve VNC masaüstü kullanın." },
      { slug: "file-transfer",    title: "Dosya aktarımı",   text: "Dosya aktarın, klasörleri hatırlayın, oturuma veya başka uygulamaya paylaşın." },
      { slug: "port-forwarding",  title: "Port yönlendirme", text: "Yerel tünel ve Android SSH VPN, SOCKS5, WireGuard, Shadowsocks, OpenVPN ayarlayın." },
      { slug: "troubleshooting",  title: "Sorun giderme",    text: "Kimlik, atlama, terminal, aktarım, yedek ve VPN sorunlarını tanılayın." }
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
    intro: "Android/iOS için SSH, SFTP, VNC ve çoklayıcılar; yerel yedek, doğrulanmış kimlikler ve atlama sunucuları. Android VPN ve donanım güvenlik anahtarlarını da içerir.",
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
    openvpnSourceHeading: "OpenVPN kaynak kodu",
    openvpnSourceBody: "OpenVPN 3 Core, MPL 2.0 kapsamında kullanılır. Kapsanan kaynak kodunu ve bağımlılıkların tam sürümlerini, lisans metinlerini ve yerel derleme bilgilerini indirin.",
    openvpnSourceLabel: "Kaynak kodu arşivini indir",
    certificatesHeading: "Sertifikalar",
    apkCertificateLabel: "Doğrudan yüklenen APK'nın imzalama sertifikası (PEM)",
    apkCertificateBody: "Bu genel sertifika, Mobile SSH'nin doğrudan yüklenen APK'sını imzalayanı tanımlar. Google Play, indirmeleri farklı bir sertifikayla imzalayabilir.",
    serverCertificateBody: "SSH ve VPN sunucu sertifikaları, sunucu yöneticinizden veya VPN sağlayıcınızdan gelmelidir. Parmak izlerini güvenilir bir kanal üzerinden doğrulayın; bu imzalama sertifikası bir VPN CA'sı değildir.",
    signingHelpLabel: "Android imzalama belgeleri",
    contactHeading: "İletişim",
    contactBody: "Destek iletişimi: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  }
};
