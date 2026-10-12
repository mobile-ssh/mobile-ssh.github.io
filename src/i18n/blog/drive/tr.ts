import { defineDrive } from "./define";

export const tr = defineDrive({
  "metaTitle": "Eve dönüş yolunda başlayan blog yazısı | Mobile SSH",
  "metaDescription": "Hayali bir sesli yazma oturumu T3 Code, Moshi, Mobile SSH ve paseo.sh'yi karşılaştırıyor: taslak hazırlama, dosya düzenleme, kod yazma, değişiklikleri hazırlama ve gürültüyle baş etme.",
  "back": "Blog",
  "eyebrow": "Sesle çalışma akışları",
  "title": "Eve dönüş yolunda başlayan blog yazısı",
  "standfirst": "Yolculuk bitmeden aklına bir fikir geliyor. Sürekli dokunmatik ekranla uğraşmadan bunu bir taslağa, kaynak kodu değişikliğine ve özenle commit için hazırlanmış bir diff'e dönüştürebilir misin? Dört ürün bu konuşmanın farklı parçalarını sunuyor.",
  "author": "Mobile SSH Yayın Kurulu",
  "date": "11 Ekim 2026",
  "readingTime": "7 dk. okuma",
  "evidence": "Hayali bir yolculuk; sürüş testi değil. Yetenekler 11 Ekim 2026 tarihinde resmî belgeler ve güncel kaynak koduyla karşılaştırılarak kontrol edildi. Karşılaştırmalı mikrofon veya yol gürültüsü testi yapılmadı. Kurulumu park hâlindeyken yap; sürüş önceliklidir, ekran incelemesi ve onaylar güvenli bir duruşu bekler.",
  "body": [
    "Yazı, park edilmiş bir arabada başlıyor. Erişilebilir bir bilgisayarda depon, hazır bir kodlama ajanın ve akşam yemeğinden sonra hatırlamaya söz verirsen muhtemelen kaybolacak bir fikrin var. Yola çıkmadan önce projeyi seçiyor ve bağlantıyı kuruyorsun. İlk isteği sıradan bir konuşmayla dile getiriyorsun.",
    "Yeni arama özelliğimiz hakkında bir blog yazısı taslağı hazırla. Okuyucunun sorunuyla başla. Taslağı blog dizinine kaydet ve commit oluşturma.",
    "Yolculuk sahneyi kuruyor, ama asıl işe yarayan soru mikrofon seni duyduktan sonra ne olduğu. Konuşma yalnızca bir metin kutusunu mu dolduruyor? Birinin hâlâ Gönder'e basması gerekiyor mu? Bir yanıt duyup devam sorusu sorabiliyor musun? T3 Code, Moshi, Mobile SSH ve paseo.sh bu soruya aynı yanıtı vermiyor.",
    "Tek istek, dört farklı konuşma",
    "T3 Code, kodlama ajanını ve depodaki işini bir mobil arayüze taşıyor. Belgelenen yerleşik ses girişi, iOS 26 veya üstünü çalıştıran desteklenen iPhone'larda yerel olarak metne dönüştürüyor. Kritik nokta şu: döküm, mesaj alanındaki taslağı değiştiriyor; isteği ajana göndermiyor. Bu, park hâlindeyken kapsamlı yazma talimatlarını söylemek, kontrol etmek ve göndermek için uygun. Sesli yanıtlarla kesintisiz bir konuşmayı ortaya koymuyor. Gönderimden sonra iş uzak bilgisayarda devam edebilir, ancak dikte tek başına elleri kullanmadan tamamlanan bir etkileşim sağlamaz. <a href=\"#source-t3-voice\">[1]</a>",
    "Moshi terminal yolunu seçiyor. Ses belgeleri, konuşmanın isteğe bağlı Enter ile gönderilen terminal girdisine ya da düzenlenebilir bir mesaj taslağına dönüşmesini anlatıyor. Paseo ile kendi karşılaştırması bunu karşılıklı sesli konuşma yerine tek yönlü dikte olarak adlandırıyor. O terminalde zaten çalışan bir kodlama ajanı yazma talimatlarını alabilir. Hayali yolculuğumuzdaki eksik adım, belgelenmiş iki yönlü bir ses modunda sonucu dinlemek ve üzerinde konuşarak düzeltmek. Mikrofon düğmesi ve otomatik Enter faydalı, ancak hiçbiri sesli geri bildirim veya sesle onaylama olduğunu kanıtlamıyor. <a href=\"#source-moshi-voice\">[3]</a> <a href=\"#source-moshi-conversation\">[4]</a>",
    "paseo.sh hem dikteyi hem sesli konuşmaları belgeliyor: konuşma tanıma isteğini ajana iletiyor, konuşma sentezi de yanıtları seslendiriyor. Ses iş akışı kodlama ajanlarını başlatıp kontrol edebiliyor; bu da onu hayal edilen diyalog için doğrudan bir aday yapıyor. Bu, belgelenmiş bir etkileşim tasarımı; bu yolculuktan elde edilmiş bir sonuç değil. Yaşam döngüsü sınırları da var: incelenen Android uygulaması arka plana geçince sesi duraklatıyor. Sesli konuşmanın, telefon kilitliyken de kesintisiz bir oturum anlamına geldiğini varsayma. <a href=\"#source-paseo-voice\">[5]</a> <a href=\"#source-paseo-background\">[7]</a>",
    "Mobile SSH'nin deneysel Android asistanı farklı bir çekicilik sunuyor: ses, zaten kullandığın SSH oturumlarıyla çalışabiliyor. Live modu sesli etkileşimi destekliyor; kontrolleri ana makineleri ve çoklayıcı kaynaklarını keşfedebiliyor, seçilen terminal çıktısını okuyabiliyor ve ayrı bir izin verildikten sonra terminal girdisi gönderebiliyor veya desteklenen komutları çalıştırabiliyor. Bir düzenleyici, kodlama ajanı ve test paneli arasında gidip gelen biri için mevcut hedefi adıyla belirtmek yararlı. Vurgulanması gereken, dayanağı olan avantaj bu: kontrol izinleri açık tutularak sesin genel SSH işlerine entegre edilmesi. Bu, diğer üç üründen daha iyi konuşma tanıma kanıtı değil. <a href=\"#source-mobile-voice\">[8]</a>",
    "Platform ayrımı önemli. Mobile SSH'nin yeni iOS ses uygulaması, sesli yanıtlar ve seçilen terminale salt okunur erişimle birlikte ön planda dikte, inceleme ve açıkça Gönder'e basma akışını sunuyor. Sürüm notları özel bir test derlemesini anlatıyor. Android asistanının terminale yazma kontrolünü veya sürekli dinlemeyi sağlamıyor. Android Auto geliştirme adaptörü de yayımlanmış bir araç entegrasyonu değil. Hikâye, gerçekten sahip olduğun derlemeye uymalı. <a href=\"#source-mobile-ios\">[11]</a> <a href=\"#source-mobile-car\">[12]</a>",
    "Taslak dosyaya, ardından kaynak kodu değişikliğine dönüşüyor",
    "Bir sonraki güvenli duruşta ana hatların hazır olduğunu düşün. Şimdi görev daha kesin hâle geliyor. Girişi kısaltmak, bir örneği düzeltmek ve sitenin kaynak kodunda küçük bir değişiklik yapmak istiyorsun. Bu değişiklikleri hâlâ sesle anlatabilirsin; her süslü parantezi ve noktalı virgülü dikte etmek gerekmez.",
    "Taslağın girişini kısalt. Sonra bu projenin kurallarına uyarak makale bileşenine okuma süresi etiketi ekle. İlgili testleri çalıştır ve hangi dosyaların değiştiğini söyle.",
    "Burada yazıyı kodlama ajanı yazıyor. Ses arayüzü talimatı taşıyor; depo erişimi, kullanılabilir araçlar ve izinler, dosyaları düzenleyip bileşeni uygulayıp uygulayamayacağını belirliyor. Bu yetenekleri bu belirli bloga uygulamak önerilen bir iş akışı; dört ürünün de bunu tamamladığına dair doğrulanmış bir gösterim değil. T3 Code ajanla düzenleme ve Git işlemleri sunuyor; Moshi gerçek bir terminal sağlıyor; Paseo ajanla geliştirme akışlarını belgeliyor; Android'de Mobile SSH izin verilen bir terminali veya komut hedefini seçebiliyor. Seçilen ajanın yine de görevi anlaması gerekiyor.",
    "Mobile SSH, ses oturumu sona erdiğinde de işe yarıyor: aynı uygulamada SSH terminali, SFTP metin düzenleme ve uzaktaki lazygit'e erişim var. Böylece park hâlindeyken gerçek dosyaları ve diff'i inceleyebileceğin pratik bir yerin oluyor. Bunlar etkileşimli inceleme araçları; tüm düğmelerinin sesle kullanılabildiğinin kanıtı değil. <a href=\"#source-mobile-voice\">[8]</a>",
    "Değişiklikleri hazırlamak ayrı bir cümleyi hak ediyor",
    "Yalnızca az önce incelediğimiz blog taslağını ve makale bileşenini hazırlama alanına ekle. Diğer tüm değişikliklere dokunma. Commit veya push yapma.",
    "Hazırlama alanına eklemek, bir sonraki Git commit'inin içeriğini seçer; kaydetmekten, commit oluşturmaktan ve yayımlamaktan ayrıdır. T3 Code'un mobil commit akışı dosyaları seçer ve commit işleminin bir parçası olarak hazırlama alanına ekler. Bu, bağımsız bir sesli hazırlama işlemini belgelemekle aynı şey değildir. Moshi, Paseo veya yazma izni etkinleştirilmiş bir Mobile SSH Android oturumunda yetkin bir ajandan belirli dosyaları hazırlamasını istemek, izinlere bağlı olarak kabuk araçlarının makul bir kullanımıdır. Bunların hiçbiri, herhangi bir diff'in yalnızca sesle güvenilir biçimde onaylanabildiğini kanıtlamaz. Güvenli duruşta hazırlama alanındaki diff'i kontrol et. <a href=\"#source-t3-git\">[2]</a> <a href=\"#source-paseo-work\">[6]</a>",
    "Sonra yol daha gürültülü oluyor",
    "Hayali yolculuğumuzda yağmur başlıyor, fan hızlanıyor ve bir yolcu konuşmaya başlıyor. Özenli bir demonun önemli soruyu yanıtlamayı bıraktığı yer burası. Bu dört ürün için kontrollü ve karşılaştırılabilir yol gürültüsü sonuçları bulamadık. Burada konuşma tanımada bir kazanan, mikrofondan güvenilir bir mesafe veya arka plandaki konuşmanın asla komuta dönüşmeyeceği vaadi için kanıt yok.",
    "T3 Code'un cihaz üzerindeki dökümü, tanımanın nerede gerçekleştiğini anlatıyor; gürültülü bir kabindeki doğruluğunu değil. Moshi, iOS'te birkaç tanıma motoru sunuyor ve yerel tanıma gürültüyle zorlandığında uzaktan sunulan dökümü öneriyor; bu öneri bir karşılaştırma testi değil. Paseo yerel ses hizmetleri ve ayarlanabilir bulut alternatifleri sunuyor, ancak sağlayıcı seçimi tek başına arabandaki performansı ortaya koymuyor. Yol gürültüsü, başka konuşmalar, mikrofon konumu ve seçilen tanıma modeli gerçek kurulumda değerlendirilmeli. <a href=\"#source-t3-voice\">[1]</a> <a href=\"#source-moshi-voice\">[3]</a> <a href=\"#source-paseo-voice\">[5]</a>",
    "Mobile SSH, Android'de değerlendirilebilecek faydalı kontroller sunuyor: telefonun ses yolu, mevcutsa platformun gürültü bastırmasını ve yankı iptalini etkinleştiriyor; ses sunucusunda da isteğe bağlı RNNoise filtresi ve kaydedilmiş konuşmacıya göre bir giriş filtresi bulunuyor. Bunlar doğrulanmış uygulama tercihleri, doğrulanmış üstünlük değil. Girdi koruması varsayılan olarak kapalı, kurulum gerektiriyor ve hedeflenen konuşmacıyı reddedebilir ya da istenmeyen konuşmayı kabul edebilir. Belgeleri, kaydedilen sentetik kontrollerin insanlarla yapılan kulaklık veya araba gürültüsü tanıma doğruluğunu ölçmediğini açıkça söylüyor. <a href=\"#source-mobile-noise\">[10]</a>",
    "Mobile SSH Android'in sunucuda tanıma yolunda, belgelenen kulaklık kontrolleri ayarlanmış bir konuşmayı başlatabilir veya sürdürebilir ve etkin oturumu arka planda kontrol edebilir; bunlar Android'in yönlendirmesine ve diğer uygulamaların öncelik almasına bağlıdır. Ekran etkileşimini azaltmak açısından bu önemlidir. Yine de telefonun ve kulaklığınla park hâlindeyken denenmesi gerekir; direksiyon düğmeleri, uyandırma sözcükleri veya her araba hakkında bir garanti değildir. Konuşma düzeltme ya da dikkat gerektiriyorsa duraklat. <a href=\"#source-mobile-headset\">[9]</a>",
    "İncelemeye değer bir şeyle varmak",
    "İşe yarayan sonuç, yolculuk bitince seni bekleyen bir taslak ve küçük, incelenebilir bir değişikliktir. T3 Code ve Moshi, mevcut bir kodlama akışına sözlü talimat vermenin farklı yollarını sunuyor. Paseo, belgelenmiş bir konuşma alternatifi sunuyor. Mobile SSH, mevcut SSH terminalleri ve çoklayıcı oturumlarının yanında ses, ardından inceleme için eksiksiz terminal ve dosya araçları isteyen Android kullanıcıları için özellikle değerlendirilmeye değer. Bu yargı, yapmadığımız bir gürültü yarışından değil, yeteneklerden doğuyor.",
    "Dördü de karşılaştırmada yer almayı hak ediyor. Cihazına ve işe uyan etkileşimi seç, isteklerini açık ve belirli tut, dikkatini yola ver. Taslak bekleyebilir. Son diff ise dikkatini hak ediyor."
  ],
  "comparison": {
    "heading": "Hayali yolculuğun her üründen makul olarak isteyebilecekleri",
    "productHeading": "Ürün",
    "voiceHeading": "Doğrulanmış ses akışı",
    "fitHeading": "Uygunluk ve sınır",
    "rows": [
      {
        "id": "t3",
        "voice": "Desteklenen iOS cihazları: taslağa dikte; gönderim ayrı.",
        "fit": "Ajanla düzenleme ve mobil Git işlemleri; sürekli sesli diyalog ortaya konmuş değil."
      },
      {
        "id": "moshi",
        "voice": "Terminale veya mesaj alanına dikte; isteğe bağlı Enter.",
        "fit": "Mevcut terminal ajanını kullan; belgelenen ses tek yönlü."
      },
      {
        "id": "mobile",
        "voice": "Deneysel Android Live konuşması ve açık izinle terminal kontrolü.",
        "fit": "Mevcut SSH ve çoklayıcı hedefleri; yeni iOS asistanı salt okunur ve Gönder'e basmayı gerektirir."
      },
      {
        "id": "paseo",
        "voice": "Ses modunda dikte, konuşma tanıma ve sesli yanıtlar.",
        "fit": "Konuşarak ajan kontrolü; arka plan sesi platforma ve derlemeye bağlı."
      }
    ],
    "note": "Belgeler ve kaynak kodu mekanizmaları ortaya koyar; bu senaryonun başarıyla tamamlandığını değil. Dört ürünün hiçbirinde karşılaştırmalı yol gürültüsü performansı ortaya konmuş değil."
  },
  "sources": {
    "heading": "Bu karşılaştırmanın kaynakları",
    "t3Voice": "T3 Code: ses girişi ve yalnızca taslağı değiştiren gönderim sınırı",
    "t3Ios": "T3 Code: iOS'te ses kullanılabilirliği",
    "t3Git": "T3 Code: mobilde commit için dosya seçimi",
    "t3Stage": "T3 Code: seçilen dosyaları sunucuda hazırlama alanına ekleme",
    "moshiVoice": "Moshi: ses motorları, terminal girdisi ve mesaj alanının davranışı",
    "moshiConversation": "Moshi: dikte ile konuşma arasındaki farkı kendi açıklaması",
    "paseoVoice": "paseo.sh: dikte ve sesli konuşmalar",
    "paseoWork": "paseo.sh: depoda geliştirme iş akışları",
    "paseoBackground": "Paseo: v0.11.2 sürümünde Android ses yaşam döngüsü",
    "mobileVoice": "Mobile SSH: Android ses kontrolleri ve olağan terminal/dosya akışları",
    "mobileHeadset": "Mobile SSH: kulaklık kontrolleri ve sınırları",
    "mobileNoise": "Mobile SSH: isteğe bağlı girdi koruması ve ses uygulaması",
    "mobileAudio": "Mobile SSH: platformun ses işlemesi",
    "mobileIos": "Mobile SSH: iOS ses uygulaması ve özel derleme sınırları",
    "mobileCar": "Mobile SSH: yalnızca geliştirmeye yönelik Android Auto adaptörü",
    "mobileAudit": "Mobile SSH referansları, özel Android ve iOS depolarını gösterilen revizyonlarda yaptığımız incelemeyi kaydeder. Bunlar kaynak kodu bulgularıdır; herkese açık sürüm teyitleri veya araç içi test sonuçları değildir."
  },
  "cta": {
    "heading": "Konuşmayı işe yakın tut.",
    "body": "Ses oturumu kurmadan önce Mobile SSH'nin belgelenmiş iş akışlarını keşfet, platformunun ve derlemenin yeteneklerini kontrol et.",
    "docsLink": "Belgeleri oku",
    "featuresLink": "Platform özelliklerini kontrol et"
  }
});
