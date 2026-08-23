import type { FlightPost } from "./types";

// Turkish translation of "Eleven hours over the Atlantic".
//
// The split-flap tiles stay English (they are per-character, aria-hidden
// decoration), so masthead.headline (screen-reader text) and
// masthead.headlineTranslated (the visible line under the board) both carry
// the Turkish headline.
//
// Figures are unchanged; only their notation is Turkish (35.786 km, 7,3 ms,
// %20).

export const tr: FlightPost = {
  meta: {
    title: "Atlantik üzerinde on bir saat | Mobile SSH",
    description:
      "35.786 km'de yalnızca ışığın gidiş dönüşü 477 ms tutuyor. Uçaktan çalışırken asıl bozulan şey nedir, neden sandığınız şey değildir ve uzun bir uçuş nasıl yeniden izlemekle değil iş çıkarmakla geçirilir. Mobile SSH'den — Android, iPhone ve iPad için SSH, SFTP ve terminal istemcisi."
  },

  backLabel: "Blog",

  masthead: {
    eyebrow: "Saha raporu",
    boardTitle: "Giden uçuşlar",
    legend: {
      time: "Saat",
      flight: "Uçuş",
      destination: "Varış",
      remarks: "Açıklama"
    },
    headline: "Atlantik üzerinde on bir saat",
    headlineTranslated: "Atlantik üzerinde on bir saat",
    deck: `24B koltuğu üç kez izlediği bir filmi izliyor. 24C koltuğu aynı Wi-Fi üzerinden
      <span class="hl">dört sunucuyu</span> gözden geçiriyor. Fark bağlantıda değil —
      her birinin o bağlantının öbür ucuna ne koyduğunda.`,
    byline: [
      { key: "yazar:", value: "Mobile SSH Yayın Kurulu" },
      { key: "tarih:", value: "10 Ağustos 2026" },
      { key: "okuma:", value: "8 dk" },
      { key: "bağlantı:", value: "703 ms, GEO" }
    ]
  },

  sections: {
    twoSeats: {
      heading: "İki koltuk, tek uydu",
      intro: [
        `On bir saat, New York'tan doğuda bir yere. Kabin ışıkları kehribara döner. 24B koltuğu
          koltuk arkası ekranı açar, dört yüz başlıklık bir katalogda gezinir ve daha önce üç kez
          izlediği bir filmi seçer. Bu bir eleştiri değil. Basınçlandırılmış bir alüminyum tüpün içinde
          geçen on bir saatle yapılabilecek en makul şey budur ve çoğumuz bunu yaptık.`,
        `24C koltuğu telefonunu çıkarır.`
      ],
      outro: [
        `İki koltuk da aynı Wi-Fi'ye bağlı. İkisi de yerden aynı uzaklıkta. Tekerlekler piste
          değdiğinde biri ezbere bildiği bir filmi izlemiş olacak, diğeri ise altı bin kilometre
          ötedeki bir makinede üç dalı birleştirmiş, çöken bir test paketini yeşile çevirmiş ve
          takılmış bir işi yeniden başlatmış olacak.`,
        `İlginç olan bunun mümkün olması değil. <em>Neden</em> mümkün olduğu — ve çoğu insanın bir kez
          deneyip Grönland üzerinde bir yerde vazgeçtiği o bariz yöntemin neden hiç işe yaramadığı.`
      ]
    },

    aboveYou: {
      heading: "Tepenizde aslında ne var",
      intro: [
        `Bir havayolunun “Wi-Fi” derken kastedebileceği kökten farklı iki şey var ve bunlardan
          hangisinin sizin gövdenize cıvatalandığı, sonraki her şeyi belirliyor.`,
        `Eski düzenek, <strong>35.786 km</strong>'de park etmiş yer durağan bir uydu. O yükseklik
          kimsenin sizin iyiliğiniz için yaptığı bir tasarım tercihi değil; bir yörüngenin tam yirmi
          dört saat sürdüğü mesafe orası, dolayısıyla uydu sabit duruyormuş gibi görünüyor. Sonuç,
          hiçbir mühendislik bütçesinin itiraz edemeyeceği bir aritmetik: yukarı ve aşağı, iki kez —
          tek bir yönlendirici işin içine girmeden önce <strong>ışığın kendisi için 477 ms gidiş
          dönüş</strong>.`,
        `Yeni düzenek ise kabaca <strong>550 km</strong>'de, alçak Dünya yörüngesindeki bir uydu
          takımı — yaklaşık altmış beş kat daha yakın ve gidiş dönüş yayılım süresi
          <strong>7,3 ms</strong>.`
      ],
      afterDiagram: [
        `Havadan yapılan ölçümler fizikle uyuşuyor. Ookla'nın 2025 birinci çeyrek uçuş içi hız
          testlerinin analizi, <strong>Starlink'te 44 ms'lik, Hughes, Intelsat ve Viasat'ta 703–757
          ms'lik bir medyan gidiş dönüş süresi</strong> buldu — kabaca on altı katlık bir uçurum. Ayrı
          bir ekip, ACM IMC 2025 için <strong>7 havayolunda 25 uçuşta</strong> gerçek cihazları
          ölçümleyerek aynı tabloyu bağımsız olarak buldu: LEO'da 40 ms'nin altı, GEO'da 550 ms'nin
          üstü.`
      ],
      afterChart: [
        `Okyanus aşırı uzun bir uçuş için dürüst rakam manşetten biraz daha kötü. Aynı araştırma
          Pasifik üzerinde <strong>19–86 ms aralığında, 62 ms'lik bir medyan</strong> ölçtü. Aklınızda
          tutmanız gereken rakam bu. Yine de mükemmel. Ama 44 değil.`
      ]
    },

    rollout: {
      heading: "Keyif kaçıran kısım",
      intro: [
        `Bir ürün sitesindeki blog yazısının tam bu noktada size geleceğin geldiğini söylemesi
          beklenir.`,
        `Gelecek her yere aynı anda gelmedi ve en son ulaştığı uçak <em>sizinki</em>.`,
        `Önce dar gövdeliler donatılıyor — sayıları çok, hızlı dönüş yapıyorlar ve kimsenin on bir saat
          boyunca bir şey yapmaya çalışmadığı kısa iç hat uçuşlarında uçuyorlar. Okyanusları asıl geçen
          geniş gövdeliler ise kuyruğun sonunda. 2026'nın ortası itibarıyla United'ın
          <strong>400'ün üzerinde uçağında Starlink vardı</strong> ve yıl sonunda bine yaklaşmayı
          bekliyordu — ama bunların yalnızca <strong>altmış kadarı geniş gövdeliydi</strong>, ilk
          Starlink'li geniş gövdeli transatlantik uçuşunu (Newark–Heathrow) ancak
          <strong>Haziran 2026</strong>'da yaptı ve geniş gövdeli filonun tamamı
          <strong>2027 yazından</strong> önce hazır olmayacak. Virgin Atlantic
          <strong>on iki A350</strong>'sini — geniş gövdeli filosunun
          <strong>yaklaşık %28'ini</strong> — bitirmişti; 787'ler 2026'nın ikinci yarısına,
          A330neo'lar 2027'ye programlanmıştı.`
      ],
      afterFigure: [
        `Yani: bunu 2026'da kıtalararası bir uçuşta okuyorsanız ihtimaller hâlâ aleyhinize.
          Muhtemelen 62 ms'lik hatta değil, 700 ms'lik hattasınız.`,
        `Bu da yazının geri kalanını daha az değil, daha çok işe yarar kılıyor.`
      ]
    },

    filmVsShell: {
      heading: "Film neden çalışır da terminal çalışmaz",
      cmdComment: "tek bir karakteri taşımak için koca bir oturum",
      prose: [
        `Bir film ile bir kabuk birbirinin tam tersi yönde çuvallar ve uçuş içi Wi-Fi, ikisinden biri
          için tam anlamıyla yanlış ağdır.`,
        `Film, gecikmeyi umursamayan bir <em>bant genişliği</em> sorunudur. Tamponlar. İlk kare 700 ms
          geç gelse kimse fark etmez, çünkü deneyimin hiçbir yanı filmin size tepki vermesine bağlı
          değildir. Oynat'a bas, bekle, izle. Gidiş dönüş bir kez yaşanır.`,
        `Etkileşimli bir kabuk bunun ayna görüntüsüdür. Neredeyse hiç bant genişliği istemez — bir
          terminal oturumu megabitle değil kilobitle ölçülür — ama <strong>ekranda yankısını görmeyi
          beklediğiniz her bir tuş vuruşu için</strong> gidiş dönüşü öder. 700 ms'de bu, yavaş bir
          bağlantı değildir. Bu, her harften sonra saniyenin üçte ikisi kadar duraklayan bir
          sohbettir.`,
        `İnsanların yanıldığı yer tam burası. Uçuş içi portalda “50 Mbps” yazısını görüyor, bağlantının
          iyi olduğuna karar veriyor, bir terminal açıyor ve iyi olmasının konuyla hiçbir ilgisi
          olmadığını keşfediyorlar. Buradaki para birimi bant genişliği değil.
          <strong>Gidiş dönüşler.</strong>`
      ]
    },

    whatBreaks: {
      heading: "Asıl bozulan ne (yazmak değil)",
      intro: [
        `Arıza, “yavaş hissettiriyor”dan çok daha belirgin ve araştırmalar acının nereye düştüğü
          konusunda alışılmadık ölçüde net.`,
        `Uçtan uca 20 ms ile 200 ms giriş gecikmesini karşılaştıran, 31 katılımcılı kontrollü bir
          çalışmada <strong>düz yazma neredeyse hiç kıpırdamadı</strong>: karakter başına 290,9 ms'ye
          karşı 302,7 ms; yazarların anlamlı diyemediği bir fark. Hata oranları aynıydı.`
      ],
      afterTable: [
        `Ama <em>düzeltme</em> görevi — yön tuşlarıyla imleci yeniden konumlandırıp metni onarma, yani
          bir editörde asıl yaptığınız şey — <strong>38,9 saniyeden 46,5 saniyeye, yaklaşık %20 daha
          yavaşa çıktı; hem de çok büyük bir etki büyüklüğüyle</strong> (p &lt; 0,001, d = 1,673).
          Yazarlar mekanizmayı açıkça koyuyor: gezinirken sürekli ekranı beklemek zorundasınız, çünkü
          bir sonraki hamlenizi imlecin nereye düştüğü belirliyor.`,
        `Hızın düşmediği yerde bile öznel yük arttı. Performansın istatistiksel olarak değişmediği
          yazma görevinde, katılımcıların bildirdiği <strong>hayal kırıklığı yine de 20,9'dan 31,3'e
          çıktı</strong>.`,
        `Bunu terminale çevirin; yükseklikte neyin dağıldığı tam olarak ortaya çıkar: bir komutu yazmak
          değil. <code>vim</code>'de gezinmek, sekmeyle tamamlama, <code>less</code> içinde kaydırmak
          ve bir REPL'in dürt-bak ritmi. Bunların her biri, sıradaki hamlenizin az önce geri gelen şeye
          bağlı olduğu bir döngü.`
      ]
    },

    moveTheWork: {
      heading: "Tuş vuruşlarını değil, işi taşıyın",
      intro: [
        `Kıt kaynağın gidiş dönüşler olduğunu kabul ettiğinizde çözüm “daha hızlı bir uçak bul” olmaktan
          çıkar ve bir mimari sorusuna dönüşür: <strong>daha az gidiş dönüş yapın ve her birine daha
          çok iş yükleyin.</strong>`,
        `Bu soruna doğrudan saldıran tanınmış bir araç var. Mosh, tuş vuruşlarınızın ne yapacağını
          tahmin eder ve sunucu onaylamadan önce onları yerelde ekrana basar. Ölçülen etki çarpıcı:
          gidiş dönüş süresi kabaca yarım saniye olan bir hatta medyan tuş yanıtı
          <strong>503 ms'den 5 ms'nin altına</strong> indi. MIT'den Singapur'a uzanan okyanus aşırı bir
          yolda ise <strong>273 ms'den 5 ms'nin altına</strong>.`,
        `Ama küçük puntoları okuyun, çünkü asıl mesele orada. Mosh tuş vuruşlarının yaklaşık
          <strong>%70'ini</strong> tahmin ediyor. Tahmin edemediği %30 kadarlık kısım, yazarların kendi
          ifadesiyle <em>ağırlıklı olarak gezinme</em> — ve orada gecikme profili yeniden düz SSH'ye
          benziyor. Yani: yüksek gecikmenin en ağır cezalandırdığı etkileşim, tam da yerel yankının
          kurtaramadığı etkileşim.`
      ],
      chartHeading: "tahmin edilen / edilemeyen",
      afterChart: [
        `Demek ki tahmin yardımcı oluyor ama sizi kurtarmıyor. Sizi asıl kurtaran şey, döngünün içinde
          bu kadar sık bulunmayı reddetmek.`,
        `<strong>Gecikmenin içine yazmayı bırakın. Uzun süren işi uzak uca koyun ve arada bir bakın.</strong>
          Bir derleme, bir test paketi, bir veri göçü, bir kodlama ajanı — hiçbirinin gidiş dönüş
          boyunca sizin orada olmanıza ihtiyacı yok. Başlangıçta ve karar anında orada olmanıza ihtiyacı
          var. Aradaki her şey makinenin sorunu ve makine, iyi bir bağlantıyla yerde duruyor.`,
        `Yükseklikte <em>paralelliğin</em> <em>etkileşimi</em> yenmesinin sebebi de bu. 700 ms'nin
          içinden hızlı yazamazsınız. Ama dört sunucuyu aynı anda gayet iyi gözetebilirsiniz, çünkü
          gözetim gecikmeye değil dikkate bağlıdır — ve elinizde on bir saatlik dikkat ve onu
          harcayacak başka hiçbir şey yok.`
      ]
    },

    seat24c: {
      heading: "24C koltuğu aslında ne yapıyor",
      lead: `Somut olarak: bir telefonda, kötü bir hatta:`,
      outro: [
        `Bunların hiçbiri uçaklar için icat edilmedi. Düşmanca bir hat üzerinden uzaktan çalışmak hep
          böyle görünmüştür; uçak da yalnızca alışılmadık ölçüde dürüst bir düşmanca hattır.`
      ]
    },

    caveat: {
      heading: "Dürüst bir çekince",
      prose: [
        `Doğrulayamadığımız ve doğrulamış gibi yapmayacağımız iki şey var:`,
        `<strong>Havayolunuzun ağı SSH'ye hiç izin verecek mi?</strong> Havayolu Wi-Fi sağlayıcıları
          arasında port engelleme, VPN politikası veya boşta kalma zaman aşımları konusunda güvenilir,
          kamuya açık bir kanıt bulamadık — buna karşılık kontrol edilince ayakta kalmayan bir sürü
          kendinden emin forum iddiası bulduk. Taşıyıcıya, sağlayıcıya ve uçağa göre değişiyor. Uzun bir
          uçuşu buna göre planlamadan önce kısa bir uçuşta deneyin.`,
        `<strong>Kabin zamanını gerçekte nasıl geçiriyor?</strong> En çok alıntılanan uçuş içi eğlence
          istatistiklerinin izi, hiçbir yöntem bilgisi olmayan reklam fiyat listelerine çıkıyor; biz de
          onları çöpe attık. Bulabildiğimiz en iyi anket kanıtı — Inmarsat/Censuswide, on ülkede 11.231
          yolcu; gerçi saha çalışması 2022'de yapılmış ve süreyi ölçmek yerine niyeti sormuş — eğlenceyi
          işin epey önünde gösteriyor: <strong>%41'i indirilmiş film izlemek, %35'i yayın izlemek
          isterken, iş yapmak isteyenler %26'da kaldı.</strong>`,
        `O yüzden 24B koltuğunu bir istatistik değil, bir karakter olarak görün. Mesele hiçbir zaman
          film izlemenin yanlış olduğu değildi. Mesele, alternatifin artık ulaşılmaz olmaması.`
      ]
    },

    descent: {
      heading: "Alçalış",
      prose: [
        `Film, son üç seferde bittiği yerde biter. Alçalış başlar. 24B koltuğu gayet iyi bir uçuş
          geçirmiştir ve dinlenmiş inecektir; bunun da bir kıymeti var.`,
        `24C koltuğu ise işi bitmiş hâlde iner — çünkü iş hiçbir zaman koltukta değildi. Baştan sona
          yerdeki bir makinedeydi; telefon yalnızca ona açılan bir pencereydi.`,
        `On bir saat, 700 ms'de geçirmek için uzun bir süre. Uyduyu hiç umursamayan dört sunucuyu
          gözetmek için ise çok kısa.`
      ]
    }
  },

  seat24b: {
    tag: "koltuk 24b",
    lines: [
      { time: "19:04", verb: "play", text: "— film, 118 dk" },
      { time: "21:02", verb: "play", text: "— film, yine" },
      { time: "23:10", verb: "idle", text: "— kabin karanlık" },
      { time: "05:41", verb: "wake", text: "— alçalış" }
    ]
  },

  seat24c: {
    tag: "koltuk 24c",
    lines: [
      { time: "19:04", verb: "attach", text: "— 4 oturum, 1 ızgara" },
      { time: "21:02", verb: "merge", text: "— üç dal" },
      { time: "23:10", verb: "green", text: "— çöken paket yeşile döndü" },
      { time: "05:41", verb: "kick", text: "— takılan iş yeniden başladı" }
    ]
  },

  quotes: [
    `Aynı uçak, aynı anten, aynı kötü Wi-Fi. Fark tamamen o hattın
        öbür ucuna ne koyduğunuzda.`,
    `Bindiğiniz uçak, yükseltecekleri son uçak. 700 ms'ye göre plan
        yapın, 62'yi görünce sevinin.`,
    `Gecikme yazmanızdan vergi almaz. Ekranı bekleyen her karardan
        alır.`
  ],

  orbit: {
    alt: "Şema: 35.786 km'deki yer durağan bir uydu, yalnızca ışık için 477 ms gidiş dönüşe mal olur; 550 km'deki alçak Dünya yörüngesindeki bir uydu 7,3 ms'ye.",
    geoLabel: "GEO 35.786 km",
    geoValue: "477 ms ışık",
    leoLabel: "LEO 550 km",
    leoValue: "7,3 ms ışık",
    aircraft: "24C koltuğu, 11.000 m",
    caption: "Ölçekli değil — içinde 35.786 km geçen hiçbir şey ölçekli olmaz."
  },

  latencyChart: {
    rows: [
      { label: "GEO — Hughes / Intelsat / Viasat, medyan", value: "703 ms" },
      { label: "LEO, Pasifik üzerinde — uzun menzil medyanı", value: "62 ms" },
      { label: "LEO — Starlink uçuş içi, genel medyan", value: "44 ms" }
    ],
    note: "Çubuklar ortak doğrusal ölçekte. Kaynak 1."
  },

  rolloutFigure: {
    items: [
      {
        name: "United",
        value: "≈60",
        text: `donanımı takılmış 400+ uçağın içinde Starlink uçuran geniş gövdeli. Geniş gövdeli
            filonun geri kalanı 2027 yazından önce hazır değil.`
      },
      {
        name: "Virgin Atlantic",
        value: "~43'ün 12'si",
        text: `geniş gövdeli tamamlandı — yaklaşık yüzde 28. 787'ler 2026'nın ikinci yarısında,
            A330neo'lar 2027'de.`
      }
    ],
    note: `Kaynak 5 ve 6. United'ın kalan geniş gövdelileri 2027 yazına kadar; Virgin'in
          787'leri 2026'nın ikinci yarısında, A330neo'ları 2027'de.`
  },

  latencyTable: {
    caption: "Schmid vd., MUM '23 — n = 31, 20 ms'ye karşı 200 ms giriş gecikmesi",
    head: ["görev", "20 ms", "200 ms", "sonuç"],
    rows: [
      { task: "yazma / karakter", low: "290,9", high: "302,7", verdict: "fark yok" },
      { task: "düzeltme görevi", low: "38,9 sn", high: "46,5 sn", verdict: "+%20" },
      { task: "hayal kırıklığı", low: "20,9", high: "31,3", verdict: "p=0,004" }
    ]
  },

  moshChart: {
    rows: [
      { label: "mosh'un anında yankıladığı tuş vuruşları", value: "≈%70" },
      { label: "tahmin edilemeyen — “ağırlıklı olarak gezinme”", value: "≈%30" }
    ],
    note: "Kaynak 4."
  },

  windows: [
    {
      title: "baglantidan-uzun-yasayan-oturumlar",
      body: `Uçak hücre değiştirir, portal yeniden kimlik doğrulama ister, bağlantı kopar.
            <code>tmux</code> kabuğu buna aldırmadan sunucuda çalışır tutar; oturum, elinizdeki değil
            uzak uçtaki bir şeydir. Eternal Terminal aynı fikri daha ileri taşır ve oturumun TCP
            bağlantısının kendisinden bile sağ çıkmasını sağlar; kaçırdıklarınızı tamponlayıp yeniden
            oynatır. <span style="color:var(--dim)">(Filtreli bir ağ için dostça uyarı: ET'nin SSH'nin
            22'sine <em>ek olarak</em> kendi portuna ihtiyacı var — varsayılan olarak 2022.)</span>`
    },
    {
      title: "ayni-anda-birden-fazla-is",
      body: `Bir ızgarada birkaç oturum, birkaç kayıtlı sunucu; her biri iki karar arasında gözetim
            gerektirmeyen bir şey çalıştırıyor.`
    },
    {
      title: "yazma-isini-ustlenen-ajanlar",
      body: `Kodlama ajanları <em>sizin</em> sunucularınızda, kodun bulunduğu yerde, yer gecikmesiyle
            çalışır. Uydu vergisini onlar ödemiyor; siz de yalnızca onlara yanıt verirken ödüyorsunuz.`
    },
    {
      title: "onemli-oldugunda-bildirim",
      bellLabel: " (zil)",
      body: `Ajan Uyarıları gerçekten bir insan gerektiğinde devreye girer — böylece uçuş, bir yankıyı
            bekleyen komut istemine bakarak değil, inceleyip karar vererek geçer.`
    }
  ],

  cta: {
    cmdComment: "ücretsiz · açık kaynak · Apache-2.0",
    heading: "Bir sonraki uzun uçuşunuz on bir saatlik sunucu zamanı.",
    prose: [
      `Mobile SSH, Android, iPhone ve iPad için yerel bir SSH, SFTP ve terminal istemcisidir. Çoklu
          oturum, yerleşik bir tmux yöneticisi, Eternal Terminal ve bir ajanın size ihtiyacı olduğunda
          anlık bildirim. Ücretsiz, hesap yok, reklam yok, açık kaynak.`
    ],
    tags: ["Reklam yok", "Hesap yok", "Veriler cihazda", "Apache-2.0"],
    playButton: "Google Play'de teste katılın",
    iosButton: "iOS betasına katılın",
    note: `Android kapalı testte — test edeceğiniz Google hesabıyla teste katılın ve bağlantıyı mobil
      tarayıcınızda açın; kapalı test, Google Play uygulamasının içinde görünmeyebilir.`
  },

  sources: {
    heading: "Kaynaklar",
    items: [
      `Ookla 2025 birinci çeyrek uçuş içi verileri, <em>A First Look at Starlink In-Flight Performance</em> içinde analiz edildi — arXiv:2508.09839, IEEE Xplore doc 11353148'de hakem denetiminden geçti. (44 ms'ye karşı 703–757 ms; Pasifik medyanı 62 ms, 19–86 ms aralığı.)`,
      `<em>From GEO to LEO: First Look Into Starlink In-Flight Connectivity</em>, ACM IMC 2025 — Jang, Varvello, Raman, Zaki. 25 uçuş, 7 havayolu. (LEO'da &lt;40 ms, GEO'da 550 ms üstü.)`,
      `Schmid vd., MUM '23, <em>Effects of Text Input Latency</em> — n=31, 20 ms'ye karşı 200 ms. (290,9'a karşı 302,7 ms/karakter, anlamlı değil; düzeltme 38,9 sn → 46,5 sn, p&lt;0,001, d=1,673; hayal kırıklığı 20,9 → 31,3, p=0,004.)`,
      `Winstein &amp; Balakrishnan, <em>Mosh: An Interactive Remote Shell for Mobile Clients</em>, USENIX ATC 2012. (503 ms → &lt;5 ms; 273 ms → &lt;5 ms; tuş vuruşlarının ~%70'i tahmin edildi; tahmin edilemeyen kalan kısım "ağırlıklı olarak gezinme".)`,
      `United Airlines haber odası, 22 Haziran 2026, <em>United Accelerates Starlink Wi-Fi Rollout with First Widebody Transatlantic Flight</em>. (400+ uçak; ~60 geniş gövdeli; geniş gövdeli filonun tamamı 2027 yazı.)`,
      `Virgin Atlantic basın bülteni, 12 Nisan 2026. (A350'ler tamamlandı; 787'ler 2026'nın ikinci yarısı; A330neo'lar 2027.)`,
      `Eternal Terminal belgeleri — eternalterminal.dev/howitworks, github.com/MisterTea/EternalTerminal. (Tamponla ve yeniden oynat; SSH'ye ek olarak varsayılan port 2022.)`,
      `Inmarsat/Censuswide Yolcu Deneyimi Anketi 2022, 10 ülkede n=11.231. (İndirilmiş filmler %41, yayın %35, iş %26 — beyan edilen niyet, çoklu seçim, saha çalışması 2022.)`
    ],
    quitHint: "— çıkmak için q'ya basın"
  },

  colophon: [
    "Mobile SSH — Android, iPhone ve iPad için ücretsiz, açık kaynaklı SSH / SFTP / terminal.",
    "Apache-2.0. Reklam yok, hesap yok, Pro katmanı yok."
  ]
};
