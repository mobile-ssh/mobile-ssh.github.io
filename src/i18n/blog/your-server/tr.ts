import { defineYourServer } from "./define";

export const tr = defineYourServer({
  "metaTitle": "Senin ajanın. Senin sunucun. Senin kuralların. | Mobile SSH",
  "metaDescription": "Kodlama ajanının nerede çalışacağını seç: yönetilen bir ortam, kendi bulut hesabın veya sana ait donanım. Erişimi, yedekleri ve ayrılma yolunu kontrolünde tut.",
  "back": "Blog",
  "eyebrow": "Sahiplik",
  "title": "Senin ajanın. Senin sunucun. Senin kuralların.",
  "standfirst": "Hazır bir ajan çalışma ortamı kurulum süresinden kazandırır. Deponu vermeden önce makinenin, kimlik bilgilerinin ve ayrılma yolunun kimin elinde olacağını belirle. Mobile SSH, masanın altındaki bilgisayardan kendi bulut hesabındaki sanal makineye kadar kendi sunucunu kullanmanı sağlar.",
  "author": "Mobile SSH Yayın Kurulu",
  "date": "5 Ekim 2026",
  "readingTime": "7 dk. okuma",
  "figure": {
    "heading": "Sunucuyu seç. Model yolunu kontrol et.",
    "phone": "Telefonun · Mobile SSH",
    "connection": "Seçtiğin sunucuya SSH bağlantısı",
    "hosts": [
      {
        "id": "owned",
        "title": "Sana ait fiziksel makine",
        "detail": "Evde, ofiste veya kendi sunucu odanda"
      },
      {
        "id": "cloud",
        "title": "Kendi bulut hesabındaki sanal makine",
        "detail": "Konuk sistemi sen yönetirsin; donanımı sağlayıcı işletir"
      }
    ],
    "workspace": "Dosyalar, araçlar ve ajan süreci seçilen sunucuda bulunur",
    "modelConnection": "Bulut modeli kullanıyorsan istemler ve seçilen bağlam sunucudan çıkar",
    "model": "Seçtiğin model hizmeti",
    "caption": "Üç ayrı karar: nasıl bağlanacağın, kodun nerede çalışacağı ve modelin onu nerede işleyeceği. İlk ikisini kontrol etmek üçüncüsünü yerel yapmaz."
  },
  "body": [
    "Teklif çekici: bir çalışma ortamını aç ve Codex, Claude Code veya Gemini CLI hazır beklesin. Hazırlanacak makine, kurulacak paket yok. Bir depo bağla, görevi anlat ve işi buluttaki bir sanal makineye bırak. Bir deneme veya tek kullanımlık proje için bu kolaylık tam aradığın şey olabilir.",
    "Sonra deneme günlük çalışma ortamına dönüşür. Özel kod gelir. Test verileri, kurum içi belgeler ve sağladığın kimlik bilgileri de gelir. Bu devir sıradanlaşmadan önce daha kalıcı bir soru sor: Bu işin bulunduğu yeri kim kontrol ediyor?",
    "Hazır çalışma ortamının bir işletmecisi vardır",
    "Sağlayıcının yönettiği bir ajan ortamında, çalıştırma sunucusunu başkası işletir. Depon oraya klonlanabilir, veriler yüklenebilir ve başka sistemlere erişim izinleri verilebilir. Yalıtım, yönetici erişimi, saklama süreleri ve dışa aktarma seçenekleri hizmete bağlıdır. Hazır araçlar ne kadar hızlı başlayabileceğini gösterir; bu düzenlemeler hakkında pek bir şey söylemez.",
    "Bu seçimi bilinçli yapabilirsin. Yönetilen ortamlar bakım yükünü azaltabilir ve yararlı bir yalıtım sağlayabilir. Oturum bittikten veya hesap kapandıktan sonrası dahil, çalışma disklerine, konuşma kayıtlarına, anlık görüntülere ve kimlik bilgilerine ne olduğunu oku. Özel işin hakkında net yanıtlar istemek için kötü niyet varsayman gerekmez.",
    "Anahtarları tut. Bir yedek tut. Ayrılma imkânını elinde tut.",
    "Aynı ajanı çalıştırmak için üç yer",
    "Kendi bulut hesabındaki bir sanal makine farklı bir düzen sunar. Konuk işletim sistemini seçer, araçları kurar, erişim verir ve örneğin yaşam döngüsünü yönetirsin. Fiziksel altyapıyı yine bulut şirketi işletir. Ona kendi sunucun demek, alttaki donanımın mülkiyetini değil yönetim kontrolünü anlatır. <a href=\"#source-cloud\">[1]</a>",
    "Sana ait fiziksel bir makine daha ileri gider: donanımı seçer, nerede duracağına karar verirsin. Var olan bir masaüstü bilgisayar, küçük bir ev sunucusu veya ofis makinesi çalışma ortamını barındırabilir. Pratik işleri de üstlenirsin: elektrik, bağlantı, onarım, yamalar ve kurtarma. Sahiplik sana verilecek kararlar sunar; bunları senin yerine vermez.",
    "Sunucunu telefonuna getir",
    "Mobile SSH, kullanıcının işlettiği her iki seçenekle de çalışır. Yerel ağındaki, yapılandırdığın bir ağ yolu üzerinden ulaşılan veya bulut hesabındaki erişilebilir bir SSH sunucusuna bağlan. Normal SSH oturumları, Mobile SSH tarafından işletilen bir oturum aktarıcısı veya Mobile SSH hesabı gerektirmez. Hedefi seçer ve kimlik bilgilerini sağlarsın.",
    "İstediğin ajanı o sunucuya kur. Çalışma dizinini aç, Codex, Claude Code veya Gemini CLI çalıştır ve zaten bildiğin terminali kullan. Oturumu tmux, herdr veya Zellij altında tutabilir, sunucu ve süreç çalıştığı sürece telefonundan geri dönebilirsin. İş o ortama aittir; telefonunu değiştirmek depoyu taşımanı gerektirmez.",
    "Böylece yararlı seçimler senin elinde kalır. Hassas test verilerini yerel bir makinede tut. Kaynakları göreve uygunsa bulut sanal makinesi kullan. Mobil iş akışını yeniden kurmadan ajan değiştir. Mobile SSH terminal erişimi, SFTP ve tüneller sağlar; belirli bir ajan çalışma ortamını kiralamanı gerektirmez.",
    "Sunucun ve modelin ayrı seçimlerdir",
    "Bu ayrım, özel verileri konuşurken özellikle önemlidir. Ajanı sana ait donanımda çalıştırmak, modelini de orada çalıştırmak anlamına gelmez. Bulut destekli bir ajan istemleri, depodan seçilen bağlamı ve araç sonuçlarını model hizmetine gönderebilir. Çıkarım başka yerde yapılırken ajan süreci ve çalışma ağacı sunucunda kalabilir. <a href=\"#source-claude\">[2]</a> <a href=\"#source-gemini\">[3]</a>",
    "SSH, telefonun ile bağlandığı uç nokta arasındaki bağlantıyı şifreler. Sunucudaki yazılımın izin verilen dosyaları okumasını veya kendi ağ isteklerini yapmasını engellemez. Ajanın hangi model hizmetini kullanacağına, neleri okuyabileceğine ve hangi araç ya da entegrasyonların dışarı veri gönderebileceğine karar ver. Kullandığın gerçek hesap ve yapılandırmanın politikalarını kontrol et.",
    "İş yerel çıkarım gerektiriyorsa uyumlu bir ajan ve model düzeni seç ve ağ davranışını doğrula. Bir kurucudaki yerel sözcüğünden bu garantiyi çıkarma. Mobile SSH'nin isteğe bağlı analitikleri ve eklenti indirmeleri de kendi veri akışlarına sahiptir; uygulamanın gizlilik ayarları ve politikası bunları açıklar.",
    "Kontrolü kullanabileceğin bir yetkiye dönüştür",
    "Root parolası yalnızca başlangıçtır. Pratik kontrol; erişimi sınırlamak, bir hatadan kurtulmak, değişiklikleri incelemek ve bir ajan platformundan senin için saklamasını istemeden çalışma ortamını taşıyabilmektir. Bu yeteneklere model seçimi kadar önem ver.",
    "Bunların hiçbiri bir ev sunucusunu otomatik olarak yönetilen hizmetten daha güvenli yapmaz. Geniş yetkili kimlik bilgileri taşıyan bakımsız bir makine, özel veriler için kötü bir yer olabilir. Sürdürebileceğin sorumluluk düzeyini seç. Avantaj, bu seçimi yapabilmek, inceleyebilmek ve ihtiyaçların değiştiğinde değiştirebilmektir.",
    "Yapabiliyorsan makinenin sahibi ol. Nerede çalışırsa çalışsın ortamın kontrolünü elinde tut.",
    "Hazır bir ajan ortamı bir dahaki sefere deponu istediğinde, bağlamadan önce bir an dur. Dosyaların nerede bulunacağına, o sunucuyu kimin yöneteceğine ve işini nasıl yanında götüreceğine karar ver. Sonra telefonunu al. Mobile SSH seni seçtiğin sunucuya bağlayabilir."
  ],
  "comparison": {
    "heading": "Kim neyi kontrol ediyor?",
    "dimension": "Karar",
    "models": [
      {
        "id": "managed",
        "title": "Yönetilen ajan çalışma ortamı"
      },
      {
        "id": "cloud",
        "title": "Kendi bulut hesabındaki sanal makine"
      },
      {
        "id": "owned",
        "title": "Sana ait donanım"
      }
    ],
    "rows": [
      {
        "id": "hardware",
        "label": "Fiziksel donanım",
        "managed": "Hizmet veya altyapı sağlayıcısı",
        "cloud": "Bulut sağlayıcısı",
        "owned": "Makine sana aittir"
      },
      {
        "id": "admin",
        "label": "Yönetim kontrolü",
        "managed": "Hizmet belirler",
        "cloud": "Konuk işletim sistemini sen yönetirsin",
        "owned": "Sunucuyu sen yönetirsin"
      },
      {
        "id": "storage",
        "label": "Çalışma ortamı ve depolama",
        "managed": "Hizmetin yönettiği diskler ve saklama süreleri",
        "cloud": "Senin yapılandırdığın disk birimleri ve yaşam döngüsü",
        "owned": "Seçtiğin ve bakımını yaptığın depolama"
      },
      {
        "id": "access",
        "label": "Kimlik bilgileri ve ağ politikası",
        "managed": "Hizmet kontrolleri ve verdiğin izinler",
        "cloud": "Kendi sistem, kimlik ve ağ yapılandırman",
        "owned": "Kendi sistem, kimlik ve ağ yapılandırman"
      },
      {
        "id": "portability",
        "label": "Yedekler ve ayrılma yolu",
        "managed": "Dışa aktarma ve silme seçeneklerini kontrol et",
        "cloud": "Kopyaları örneğin dışında yönet",
        "owned": "Kopyaları makinenin dışında yönet"
      },
      {
        "id": "maintenance",
        "label": "İşletim işi",
        "managed": "Ortamı sağlayıcı işletir; kullanımını sen yapılandırırsın",
        "cloud": "Konuk sistemin bakımını sen, altyapıyı sağlayıcı yapar",
        "owned": "Donanımı, işletim sistemini ve bağlantıyı sen sürdürürsün"
      }
    ],
    "note": "Bunlar tipik düzenlemelerdir; her hizmet için garanti değildir. Her sütunda model sağlayıcısına giden veri akışları, seçtiğin ajana ve yapılandırmaya bağlıdır."
  },
  "checklist": {
    "heading": "Kontrolü korumanın altı yolu",
    "steps": [
      {
        "heading": "Kimlik bilgilerine küçük bir görev ver",
        "body": "Ortam için ayrı ve iptal edilebilir kimlik bilgileri kullan. Yalnızca görevin gerektirdiği depo ve hizmet izinlerini ver."
      },
      {
        "heading": "Çalışma ortamını sınırla",
        "body": "Mümkünse ajanı özel, ayrıcalıksız bir kullanıcı olarak çalıştır. İlgisiz özel dosyaları ve üretim sırlarını erişiminin dışında tut."
      },
      {
        "heading": "SSH hedefini doğrula",
        "body": "Tanımadığın sunucu parmak izlerini güvenilir bir kanaldan kontrol et. Kayıtlı kimliği değiştirmeden önce değişen anahtarları araştır."
      },
      {
        "heading": "Bağımsız bir yedek tut",
        "body": "Şifreli kopyaları çalışma sunucusundan ayrı, kontrol ettiğin hesaplarda sakla. Koruman gereken, henüz commit edilmemiş işler dahil bir geri yükleme dene."
      },
      {
        "heading": "Sunucudan çıkanları incele",
        "body": "Model uç noktalarını, eklentileri, harici araçları ve telemetri ayarlarını kontrol et. Gereken en az bağlamı paylaş ve ortaya çıkan değişiklikleri incele."
      },
      {
        "heading": "Taşınmayı dene",
        "body": "Çalışma ortamını başka bir sunucuda geri yükle, yeniden bağlan ve testlerini çalıştır. Ayrılma imkânı, denemiş olduğun bir şey olmalı."
      }
    ]
  },
  "sources": {
    "heading": "Kaynaklar ve sınırlar",
    "aws": "AWS: bulut altyapısı ve konuk sistemler için paylaşılan sorumluluk",
    "anthropic": "Claude Code: yerel çalıştırma, bulut bağlantıları ve veri kullanımı",
    "google": "Gemini CLI: model hizmetleri ve geçerli gizlilik bildirimleri",
    "checked": "Kaynak belgeler 5 Ekim 2026 tarihinde kontrol edildi. Hesap koşulları ve hizmet yetenekleri değişebilir."
  },
  "cta": {
    "heading": "Seçtiğin sunucuya bağlan.",
    "body": "Kendi makinelerine erişmek, araçlarını çalıştırmak ve çalışma ortamını elinin altında tutmak için Android veya iOS'ta Mobile SSH kullan.",
    "playButton": "Google Play'den edin",
    "iosButton": "iOS betasına katıl",
    "docsLink": "İlk bağlantını kur",
    "privacyLink": "Gizlilik politikasını oku"
  }
});
