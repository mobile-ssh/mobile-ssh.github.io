import { defineGoOutside } from "./define";

export const tr = defineGoOutside({
  metaTitle: "Dışarı çıkın. Ajan çalışmaya devam ediyor. | Mobile SSH",
  metaDescription:
    "Kodlama ajanınız telefonunuzda değil, sunucunuzda çalışır. Onu tmux altında başlatın, dışarı çıkın ve gerçekten bir insana ihtiyaç duyduğunda uyarılar sizi bulsun.",
  back: "Blog",
  eyebrow: "Saha notu",
  title: "Dışarı çıkın. Ajan çalışmaya devam ediyor.",
  standfirst:
    "Ajanınızı ayakta tutan şey hiçbir zaman telefon olmadı; sunucu oldu. Buna bir kez inandığınızda dışarıda geçen bir öğleden sonranın size maliyeti sıfırdır: siz gidersiniz, iş sürer ve sizi yalnızca gerçekten yanıt bekleyen bir soru böler.",
  author: "Mobile SSH Yayın Kurulu",
  date: "7 Eylül 2026",
  readingTime: "7 dk okuma",

  board: {
    ariaLabel:
      "Çalışan dört oturumu sörf noktaları gibi okuyan bir koşullar tablosu: üçü istikrarlı biçimde çalışıyor, claude adlı biri ise bir insanı bekliyor.",
    heading: "KOŞULLAR",
    timeLabel: "06:14 HST",
    breakHeading: "Nokta",
    swellHeading: "Dalga",
    stateHeading: "Durum",
    rows: [
      { name: "api-prod", swell: "2-3 ft", state: "yükseliyor", needsYou: false },
      { name: "nightly-tests", swell: "6-8 ft", state: "sabit", needsYou: false },
      { name: "claude", swell: "10+ ft", state: "size ihtiyacı var", needsYou: true },
      { name: "web-api", swell: "1-2 ft", state: "sabit", needsYou: false }
    ],
    statusLine: "4 oturum · 1 bekliyor · son kontrol 06:14",
    caption:
      "Sahibi olduğunuz bir makinede dört oturum. Üçü nerede olduğunuzu umursamıyor. Dördüncüsü ise telefonu cebinizden çıkarmanız için tek neden."
  },

  body: [
    `Build bitse de bitmese de mesai biter. <em>Pau hana</em> — çalışma gününün sonu — kendi takvimiyle gelir ve alışılmış yanıt onu görmezden gelmektir: dizüstü bilgisayarı masada açık bırakmak, bir ilerleme çubuğuna yarım gözle bakmak ve akşamı, hiçbir aşamasında size ihtiyacı olmayan bir sürece feda etmek.`,
    `Bu takas ancak iş, taşıdığınız makinede yürüyorsa anlamlıdır. Genellikle öyle değildir. Ajan bir sunucuda çalışan bir süreçtir; o sunucunun diskindeki dosyaları düzenler, o sunucunun testlerini çalıştırır. Telefonunuz ona açılan bir penceredir. Pencereyi kapatın, oda hâlâ yerinde durur.`,
    `Dayanıklı katman sunucudur`,
    `Claude Code veya Codex'i <code>tmux</code>, <code>herdr</code> ya da Zellij içinde başlatın; oturum bağlantınıza değil, sunucuya ait olur. Sinyaliniz tek çubuğa düşsün, bir lav tüpüne girin, telefonu iki saat kaldırın — ajan okumayı, düzenlemeyi ve test çalıştırmayı sürdürür, çünkü hiçbir yanı hiçbir zaman size bağlı değildi.`,
    `Bütün hüner budur ve bu konuda kesin konuşmakta yarar var, çünkü övgüyü yanlış bileşene vermek kolaydır. Süreci ayakta tutan uygulama değildir; karşı uçtaki multiplexer'dır. Mobile SSH'nin işi, temiz biçimde ayrılıp temiz biçimde geri dönmektir.`,
    `Siz güç kaynağı değilsiniz. Öyleymişsiniz gibi davranmayı bırakın.`,
    `Uğrayın, dadılık etmeyin`,
    `Bir saat çalışan bir ajanın insana ihtiyacı bunun yaklaşık doksan saniyesindedir. Sorun hiçbir zaman beklemek olmadı; o doksan saniyenin <em>ne zaman</em> geldiğini bilmemek oldu — insanları, söyleyecek hiçbir şeyi olmayan bir ekrana bakar hâlde tutan da budur.`,
    `Agent Alerts bunu yanıtlar. Algılama bilinçli olarak yalındır ve tam bu yüzden güvenilirdir: bir terminal zili, bir <code>OSC 9</code> ya da <code>OSC 777</code> bildirimi ve sunucuya bir kez kurduğunuz ajan hook'u. Çıktınızı okuyup niyet tahmin etmez, ayarlanacak bir hassasiyet düğmesi de yoktur — karşı taraftaki programın gerçekten duyurduğu şeyi bildirir.`,
    `Yani gerçek bir soru ortaya çıkana kadar telefon cebinizde kalır. Sonra titrer, istemi okursunuz, bir yanıta dokunur ve telefonu kaldırırsınız. Etkileşimin tamamı budur ve bir kumsaldan, bir patika başından ya da shave ice kuyruğundan işler.`,
    `Adanın düzeltemeyecekleri`,
    `İki dürüst sınır — çünkü yalnızca güçlü yanları sıralayan bir yazı, reklamdır.`,
    `Platform farkı gerçektir ve buna göre plan yapmakta yarar var. Android'de, uygulama arka plandayken bağlantıyı bir ön plan hizmeti tutar — kalıcı bildirim oturumun <em>kendisidir</em>. iOS'ta arka planda çalıştırma diye bir şey hiç yoktur; siz döndüğünüzde yeniden bağlanır ve multiplexer'ınıza yeniden iliştirilir. Her iki durumda da sunucudaki ajan hiç durmadı; asıl mesele bu. Kapanan yalnızca pencereydi.`,
    `Aloha, dikkatsizliğin mazereti değildir`,
    `İyi ayrılmak küçük bir disiplindir. İki saat gözetimsiz çalışmasını istemeyeceğiniz hiçbir şeyi kapıdan çıkarken başlatmayın — bir migration'ın ortasındaki ajan, mesafeyle daha iyi hâle gelmez. Ona doğal bir durma noktası olan bir görev verin, düzenlemeden önce incelemesini isteyin ve döndüğünüzde gözden geçireceğiniz şey diff olsun.`,
    `Bildirime de bir çağrı cihazına göstereceğiniz özeni gösterin. Her şey uyarı üretiyorsa hiçbir şey uyarı üretmiyordur. Hook, bir insanı bölmeye değer durumlarda tetiklenir; öyle bırakın ki titreşim anlamlı kalsın.`,
    `Build'in seyirciye ihtiyacı yok. Gidin ve bir yerde olun.`
  ],

  checklist: {
    heading: "Dışarı çıkmadan önce",
    steps: [
      {
        heading: "Bir multiplexer altında başlatın",
        body: "Ajanı <code>tmux</code>, <code>herdr</code> ya da Zellij içinde çalıştırın ki oturum bağlantınıza bağımlı kalmak yerine ondan sağ çıksın."
      },
      {
        heading: "Ajan hook'unu kurun",
        body: "Sunucu başına bir kez, uygulamanın içinden. Bu, her ajanın çağırabileceği küçük bir kabuk betiğidir — sağlayıcıya özel bir entegrasyon değildir ve tek bir CLI'a bağlı değildir."
      },
      {
        heading: "Bir uyarının ulaştığını kanıtlayın",
        body: "Ona güvenmeden önce bir istem tetikleyin ve telefonun titrediğini doğrulayın. Çalıştığını hiç görmediğiniz bir uyarı, plan değildir."
      },
      {
        heading: "Ona bir durma noktası verin",
        body: "Makul bir yerde biten bir görev, ucu açık olana yeğdir; çünkü onu izlememeyi seçiyorsunuz."
      }
    ],
    promptLabel: "Yalnız bırakılmaya değer bir görev",
    prompt:
      "AGENTS.md'yi oku, sonra başarısız handler testlerini düzelt. Düzenlemeden önce diff'i incele, odaklı testleri çalıştır ve geçtiklerinde dur — commit etme."
  },

  truth: {
    heading: "Siz uzaklaştığınızda ayakta kalanlar",
    itemHeading: "Telefon cebe girdiğinde",
    resultHeading: "Devam eder mi?",
    yes: "Evet",
    no: "Hayır",
    rows: [
      { item: "Sunucudaki ajan süreci", value: "Sahibi tmux, herdr veya Zellij", survives: true },
      { item: "Dosyalar, diff'ler ve test çıktısı", value: "Sunucunun diskinde", survives: true },
      { item: "Oturumdaki yeriniz", value: "Döndüğünüzde yeniden iliştirilir", survives: true },
      { item: "Android'de bağlantı", value: "Bir ön plan hizmeti tutar", survives: true },
      { item: "iOS'ta bağlantı", value: "Arka planda çalıştırma yok — yeniden bağlanır", survives: false },
      { item: "İletecek sinyali olmayan bir uyarı", value: "Telefon yeniden erişilebilir olduğunda ulaşır", survives: false }
    ],
    note: "Ajan her satırda çalışmaya devam eder. Değişen tek şey, telefonunuzun pencereyi açık tutmayı sürdürüp sürdürmediğidir."
  },

  cta: {
    ariaLabel: "Mobile SSH'yi edinin",
    heading: "Dizüstünü bırakın. Terminali alın.",
    body: "Doğrudan kendi makinenize bağlanın, dilediğiniz ajanı tmux, herdr veya Zellij içinde çalıştırın ve bir insana ihtiyaç duyduğunda Agent Alerts size haber versin — aynı uygulamada SFTP, tüneller ve gerçek bir terminalle.",
    tags: ["Her ajan", "Doğrudan SSH", "Agent Alerts", "Apache-2.0"],
    playButton: "Google Play testine katıl",
    iosButton: "iOS betasına katıl",
    note: `Android kapalı testtedir: test edeceğiniz Google hesabıyla katılın, sonra katılım bağlantısını mobil tarayıcınızda açın. Zaten katıldınız mı? Doğrudan <a href="{playUrl}" rel="noopener">Play sayfasına</a> gidin.`
  }
});
