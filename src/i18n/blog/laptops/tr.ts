import type { LaptopsPost } from "./types";

// Turkish translation of /blog/laptops-are-dead/.
// The conceit is a newspaper death notice ("vefat ilanı"): keep the funeral
// register — huzur içinde aramızdan ayrıldı, geride bıraktı, taziye,
// "çelenk gönderilmemesi rica olunur" — and keep the inline markup intact.
// Numbers use Turkish notation (1.795 $, %6); the values themselves are
// unchanged.

export const tr: LaptopsPost = {
  metaTitle: "Dizüstü bilgisayar öldü, SSH ve TCP/IP hayatta kaldı | Mobile SSH",
  metaDescription:
    "Dizüstü bilgisayara (1981–2026) sevgi dolu bir veda. TCP/IP 1974'te tasarlandı, SSH 1995'te yazıldı; ikisi de donanımdan uzun yaşadı ve zaten elinizde duran cihaza taşındı. Mobile SSH'nin gerekçesi — Android, iPhone ve iPad için SSH, SFTP ve terminal istemcisi. Ücretsiz, yerel ve açık kaynak.",

  back: "Blog",
  eyebrow: "Görüş",
  titleLead: "Dizüstü bilgisayar öldü.",
  titleSoft: "Yaşasın cebiniz.",
  standfirst: `<b>Ama SSH ve TCP/IP hayatta kaldı.</b> Ağır ve sıcak karınlı bir dosta sevgi dolu bir veda —
ve zaten elinizde duran cihaza sessiz sedasız taşınmış olan terminalin savunması.`,
  author: "Mobile SSH Yayın Kurulu",
  date: "27 Temmuz 2026",
  readingTime: "7 dakikalık okuma",

  leadFigure: {
    terminal: {
      title: "ssh · prod-01 · tmux",
      prompt: "you@prod-01",
      path: "~/app",
      command: `claude "başarısız testi düzelt"`,
      reading: "src/api/auth.ts okunuyor",
      patching: "token yenileme yamalanıyor …",
      result: "3 dosya değişti, testler yeşil",
      needsInput: "ajan girdi bekliyor",
      push: "git push origin main"
    },
    toast: {
      title: "Ajan Uyarıları",
      host: "prod-01",
      body: "Claude Code sizin incelemenizi bekliyor"
    },
    caption:
      "Delil A: gerçek bir SSH oturumu, bir kodlama ajanı ve bir Ajan Uyarısı — hepsi cebinizdeki şeyin üzerinde çalışıyor, ortalıkta şarj aleti yok."
  },

  body: [
    {
      kind: "lead",
      html: `Dünyanın dört bir yanındaki geliştiricilerin, yazarların ve gezginlerin sevgili yol arkadaşı
Dizüstü Bilgisayar, bu hafta 45 yaşında, bir kafede, %6 şarjla ve ortalıkta hiç şarj aleti yokken huzur
içinde aramızdan ayrıldı. Her zamanki gibi, okuyacağına söz verdiği sekmelerle çevriliydi.`
    },
    {
      kind: "p",
      html: `Dram yaşanmadı. Ekranı öylece söndü, fanından bir kez içini çekti ve — son bir kez, olabilecek en
kötü anda — şimdi bir güncelleme yüklemek için uygun bir zaman olup olmadığını sordu.`
    },
    {
      kind: "pull",
      html: `“Tam da nihayet aklınıza bir fikir geldiği anda ürün yazılımı için yeniden başlatma isterdi. Hep öyle yapardı.”`
    },
    { kind: "h2", html: `Ağır bir ömür, sadakatle taşındı` },
    {
      kind: "p",
      html: `1981'de Osborne&nbsp;1'in çocuğu olarak doğdu — on bir kilo taşınabilir hırs, pil yok, beş inçlik bir
ekran — ve kırk beş yılını hafifleyerek, ama bir türlü hafiflemeden geçirdi. Bir buçuk kilo civarında
öldü; ebeveyni bunu büyücülük sayardı. Klavyeyi hatırlıyoruz. Sıcacık alt yüzeyini. Her düşünme edimini
ilan eden vınlayan fanları. Hep birazcık fazla dolu olan çantayı, küçük bir roman büyüklüğündeki şarj
tuğlasını ve pencere kenarındaki boş prizin — sonsuz, umutlu — aranışını.`
    },
    {
      kind: "p",
      html: `Bizden çok şey istedi, biz de yine de taşıdık onu; masadan kapıya, kapıdan 24B koltuğuna. Çünkü uzun
süre boyunca gerçek bir terminali içinde barındırabilen tek şey oydu. Artık öyle değil.`
    },
    { kind: "h2", html: `Geride büyükleri kaldı` },
    {
      kind: "p",
      html: `Dizüstü Bilgisayar geride çocuk bırakmadı. Kendisine vaat edilen halefler — tablet, Chromebook,
klavyesi çıkan şu şey — geldiler, arka sıralara oturdular ve daha az portu olan birer dizüstü çıktılar.
Onun yerine geride, o doğduğunda çoktan çalışmakta olan ve bu sabah da çalışan iki akraba bıraktı.`
    },
    {
      kind: "p",
      html: `<strong>TCP/IP</strong> büyük olan. Vint Cerf, Bob Kahn ve uzun bir iş arkadaşları kadrosu tasarımı
Mayıs 1974'te yayımladı; RFC&nbsp;675 aynı yılın aralık ayında ayrıntısını yazdı ve bu arada “internet”
sözcüğünü de ortaya attı. ARPANET 1 Ocak 1983'te geçmeye başladı ve haziranda işi bitirmişti — o sırada
Dizüstü Bilgisayar disket sürücülü, yürümeye yeni başlamış bir bebekti.`
    },
    {
      kind: "p",
      html: `<strong>SSH</strong> yeğen; otuz bir yaşında ve tabutu omuzlayanların en genci. Üniversite ağına
yerleşen bir dinleyici sessizce binlerce parola topladıktan sonra, Tatu Ylönen onu 1995 baharında
Helsinki University of Technology'de yazdı. <code>ssh-1.0.0</code>'ı o temmuz yayımladı ve 22 numaralı
portu kendisi seçti: 21'deki FTP ile 23'teki telnet arasında kalan tek boş numara. Gerekçesi, yerlerini
almaya niyetlendiği iki protokolün tam ortasına oturmanın “insana bir parça güvenilirlik havası veren o
küçük şeylerden biri olabileceği”ydi. Pazartesi IANA'ya sordu. Salı evet dediler. Çarşamba yayımladı.`
    },
    { kind: "ledger" },
    { kind: "h2", html: `Protokollerin asla varsaymadıkları` },
    {
      kind: "p",
      html: `Bu uzun ömürde gizem yok. Neredeyse hiçbir şey varsaymadıkları için dayandılar. TCP paketleri
varsayar; bir kısmı kaybolur, bir kısmı iki kere gelir, bir kısmı sırası karışmış hâlde ortaya çıkar. SSH
güvenilir bir bayt akışı ile bir anahtar çifti varsayar. İki listede de olmayanlar: ekran boyutu, klavye
düzeni, kasa, menteşe, priz ve hâlâ ayakta duran bir üretici.`
    },
    {
      kind: "p",
      html: `SSH terminalinizin ne kadar büyük olduğunu bile varsaymaz. Sorar — ve sonradan farklı bir yanıtı da
kabul eder. Bu incelik, masaüstünde pencerenin köşesinden çekiştiren insanlar için icat edilmişti. Aynı
zamanda telefonu yan çevirmenin oturumu bitirmemesinin de sebebi.`
    },
    {
      kind: "pull",
      html: `“Donanım bir bedendir. Protokol bir alışkanlıktır. İkisinden yalnızca biri merdiven boşluğuna düşürülebilir.”`
    },
    {
      kind: "p",
      html: `Kasaya bağlı olan her şey önce gitti ve hiçbiri kötü mühendislikten ölmedi. Disket sürücü, PC Card
yuvası, dock konnektörü — her biri belirli bir koşullar kümesi için iyi yapılmıştı; ölümlü olan kısım
koşullardı. Bir protokol sahibine bile bağlı değildir. Ylönen'in sonraki sürümlerinin lisansı sıkılaşınca
OpenBSD projesi <code>ssh 1.2.12</code>'ye, yeniden kullanılabilecek kadar özgür olan son sürüme geri
döndü ve OpenSSH'yi 1 Aralık 1999'da OpenBSD&nbsp;2.6 ile birlikte yayımladı. Protokol hiç aldırmadan
yoluna devam etti. Zaten hiçbir zaman kimsenin malı olmamıştı; tam da bu yüzden hâlâ burada.`
    },
    { kind: "h2", html: `Yamalanmak zorunda kalan tek varsayım` },
    {
      kind: "p",
      html: `Dürüstlük bir düzeltmeyi gerektiriyor. TCP tek bir varsayımda bulundu ve o da yanlıştı: makinenin
yerinde duracağını varsaydı. Bir bağlantı dört sayıyla adlandırılır — iki adres, iki port — ki bu, o şey
yükseltilmiş döşemeli bir odaya vidalanmışken, 1981'de bir şeyi adlandırmanın gayet mantıklı bir yoluydu.
Elinizde telefonla bir kafeden çıkın; o dört sayıdan biri sessizce yalana dönüşür.`
    },
    {
      kind: "p",
      html: `İkinci bir cenaze olmadı. Protokol korundu, varsayımın etrafı yamandı. İş, kapıdan çıkıp giden bir
istemcinin erişemeyeceği yere, uzak uca taşındı: önce <code>screen</code>, sonra <code>tmux</code> —
terminal gelip giderken kabuğu açık tutuyorlar. Eternal Terminal bir adım daha attı ve oturumu adresle
değil kendi adıyla andı; böylece altındaki adres değişse de oturum ayakta kalıyor.`
    },
    {
      kind: "pull",
      html: `“Sunucularınız hiçbir zaman dizüstünüze sadık değildi. Porta sadıktılar.”`
    },
    {
      kind: "p",
      html: `Bunların hiçbiri telefonlar için icat edilmedi. Telefonlar bunları miras aldı. Eternal Terminal
aktarımı, tmux yöneticisi, üstel geri çekilmeyle yeniden bağlanan keepalive'ler ve kayıtlı her sunucu için
birden çok adres taşıyan bir istemci, komutun tam ortasında binadan dışarı taşınabilir ve ipin ucunu
kaldırımda yeniden yakalayabilir. Uzak uca istemcinizin sürüm dizesi ve terminalinizin boyutu bildirilir.
Ortada bir menteşe olup olmadığı asla bildirilmez.`
    },
    { kind: "h2", html: `İş sessiz sedasız bir cebe taşındı` },
    {
      kind: "p",
      html: `Son yıllarında Dizüstü Bilgisayar kendi önemi konusunda kaygılanmaya başladı. Haklıydı da. Bir
zamanlar kendine ait saydığı iş — gerçek bir terminal, gerçek dosya aktarımı, gerçek anahtarlar, gerçek
tüneller — sessizce, zaten elinizde duran cihaza kaymıştı.`
    },
    {
      kind: "p",
      html: `O cihazda <strong>Mobile SSH</strong> çalışıyor: Android, iPhone ve iPad için yerel bir SSH, SFTP ve
terminal istemcisi. Oyuncak bir kabuk değil. Kabuk taklidi yapan bir uzak masaüstü değil. Tam bir
<span class="nowrap">xterm-256color</span> terminali — gerçeğinin ta kendisi — ve vaktiyle Dizüstü
Bilgisayar'ın şarj aletinin kapladığı yere sığıyor.`
    },
    {
      kind: "pull",
      html: `“Bir zamanlar kendine ait dediği iş bir cebe taşındı — ve bir kez olsun priz istemedi.”`
    },
    { kind: "h2", html: `Geride kalanlar: telefonunuz — ve Mobile SSH` },
    {
      kind: "p",
      html: `Miras, kalem kalem. Çelenk gönderilmemesi rica olunur; aile yalnızca aşağıdaki veda yazısını
okumanızı ve her satırının bugün kurabileceğiniz gerçek bir yazılım olduğunu bilmenizi istiyor.`
    },
    { kind: "estate" },
    {
      kind: "pull",
      html: `“‘Dizüstü bilgisayar öldü’ bir veda yazısıdır, otopsi raporu değil. Taziyede dizüstülerin başımızın üstünde yeri var.”`
    },
    {
      kind: "p",
      html: `Bunu sevgiyle söylüyoruz. Dizüstü Bilgisayar onurluca hizmet etti ve taziyede başımızın üstünde yeri
var — bir sehpanın üzerinde açık duruyor, fanı usulca dönüyor, nihayet fişe takılı. Ama günün işi daha
hafif toplandı ve binayı terk etti. Artık bir cebe sığıyor. Telefonu ilk çalışta açıyor.`
    },
    {
      kind: "p",
      html: `SSH ve TCP/IP çelenk göndermedi. Çalışıyorlardı.`
    }
  ],

  ledger: {
    entries: [
      {
        year: "1974",
        event: "Cerf, Kahn ve meslektaşları TCP/IP'ye dönüşecek tasarımı yayımlar",
        status: "hâlâ çalışıyor",
        on: true
      },
      {
        year: "1978",
        event: "DEC, ilk ANSI uyumlu terminali VT100'ü piyasaya sürer",
        status: "dizileri hâlâ kullanımda",
        on: true
      },
      {
        year: "1981",
        event: "Osborne&nbsp;1 satışa çıkar: 11&nbsp;kg, 1.795 $, yalnızca prizden",
        status: "1983'te üretimi bitti",
        on: false
      },
      {
        year: "1983",
        event: "ARPANET, NCP'den TCP/IP'ye geçişini tamamlar",
        status: "hâlâ çalışıyor",
        on: true
      },
      {
        year: "1995",
        event: "SSH Helsinki'de yazılır; IANA 11 Temmuz'da 22 numaralı portu verir",
        status: "hâlâ çalışıyor",
        on: true
      },
      {
        year: "2026",
        event: "Dizüstü Bilgisayar, 45 yaşında, bir kafede, %6 şarjla ve şarj aletsiz",
        status: "geride yukarıdakiler kaldı",
        on: false
      }
    ],
    caption: "Törende okunduğu hâliyle öncelik sırası. En yaşlı yas tutan elli iki yaşında."
  },

  estate: [
    {
      heading: "Cebinizde gerçek bir terminal",
      body: "Tam <code>xterm-256color</code> öykünmesi, yeniden boyutlandırılabilir bir ızgarada sekize kadar eşzamanlı oturum, yerleşik bir tmux oturum yöneticisi ve ağ kopmalarına, uyku moduna ve IP değişikliklerine dayanan bağlantılar için Eternal Terminal."
    },
    {
      heading: "Dosyalar ve tüneller, kutudan çıktığı gibi",
      body: "Telefonla sunucu arasında dosya taşımak için çift panelli bir SFTP gezgini; yerel port yönlendirmeleri ve tüneller de her sunucunun tam yanında kayıtlı durur — bağlandığınız anda kendiliğinden ayağa kalkarlar."
    },
    {
      heading: "Anahtarlar cihazda üretilir",
      body: "Cihaz üzerinde SSH anahtarı üretimi — Ed25519 ve ECDSA — parola veya özel anahtar kimlik doğrulamasıyla. Hiçbir şey telefondan çıkmaz."
    },
    {
      heading: "Kodlama ajanları ve Ajan Uyarıları",
      body: "Claude Code, Codex ve diğer ajanları doğrudan telefonunuzdan, <em>kendi</em> sunucularınızda çalıştırın. Bir ajanın girdinize ihtiyaç duyduğu anda Ajan Uyarıları anlık bildirim gönderir — sesli ve titreşimli — böylece başınızı kaldırıp uzaklaşabilir, yine de olan bitenden haberdar kalırsınız."
    },
    {
      heading: "Duruma uygun giyinmiş",
      body: "Yapılandırılabilir yazı tipleri ve renk şemaları, Nerd Font powerline ve simge glifleri ve daha da ileri götürmek için bir eklenti sistemi — terminali kendinize ait hissedene kadar ayarlayın."
    },
    {
      heading: "Dürüstçe, gerçekten ücretsiz",
      body: "Reklam yok. Pro paywall'ı yok. Hesap gerekmez. Verileriniz cihazda kalır ve her şey Apache-2.0 lisansı altında açık kaynaktır."
    }
  ],

  cta: {
    ariaLabel: "Mobile SSH'yi edinin",
    heading: "Çelenk yerine birkaç sekme kapatın.",
    body: "Mobile SSH'yi kurun, dizüstünüze hak ettiği dinlenmeyi verin ve cebinizde gerçek bir terminal taşıyın — ücretsiz, yerel ve açık kaynak.",
    tags: ["Reklam yok", "Hesap yok", "Veriler cihazda", "Apache-2.0"],
    playButton: "Google Play'de teste katılın",
    iosButton: "iOS betasına katılın",
    note: `Android kapalı testte: test edeceğiniz Google hesabıyla teste katılın ve katılım bağlantısını
mobil tarayıcınızda açın — kapalı test, Google Play uygulamasının içinde görünmeyebilir. Zaten katıldınız
mı? Doğrudan <a href="{playUrl}" rel="noopener">Play sayfasına</a> gidin.`
  }
};
