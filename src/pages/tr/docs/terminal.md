---
layout: ../../../layouts/DocLayout.astro
title: "Terminal"
description: "Mobile SSH terminal denetimleri, ek tuşlar, bölmeler, kaydırma, tmux, herdr ve Zellij yöneticileri, ajan uyarıları, kopyalama işlemleri ve klavye ayarları."
---

# Terminal

Mobile SSH terminali telefon ve tablet kullanımı için tasarlanmıştır. Bir terminal tuvali, ek tuş satırı, çoklu oturum bölmeleri, kaydırma işleme ve yeniden bağlanma davranışını bir araya getirir.

## Terminal temelleri

- Terminal, renk desteği ve imleç tuşu işleme ile xterm tarzı davranış kullanır.
- Geri kaydırma arabelleği varsayılan olarak 5000 satır tutar ve Ayarlar'dan 1.000, 10.000 veya 50.000 olarak değiştirilebilir.
- Yazmadan önce bir bölmeyi seçmek için dokunun.
- Metin boyutunu değiştirmek için bir terminal bölmesini kıstırın. Hareket durulduktan sonra Mobile SSH uzak PTY'yi yeniden boyutlandırır.
- Tam ekran moduna girmek için bir bölmeye çift dokunun (veya bölmenin genişletme denetimini kullanın). Izgaraya dönmek için Android'de Geri'yi, iOS'ta ise daraltma denetimini kullanın.

## Çoklu oturum ızgarası

Mobile SSH aynı anda sekiz SSH oturumuna kadar çalıştırabilir. Her oturum terminal ızgarasında bir bölme olarak görünür. Seçmek için bir bölmeye dokunun ya da başka bir bağlantı başlatmak için **+ Add Session** düğmesini kullanın.

Bölme başlığı nerede olduğunuzu adlandırır. Android'de bölmenin gerçek çalışma dizinini gösterir — tmux'tan sorulur ya da kabuk tarafından OSC 7 ile bildirilir ve uygulama açıkken tazelenir; iOS'ta ise uzak tarafın belirlediği başlığı, o yoksa `user@host:port` biçimini gösterir.

Bir bölmeyi kapatmak o SSH oturumunu keser. Başlangıç ekranına dönmek etkin oturumları **Active Sessions** aracılığıyla erişilebilir tutar.

## Eternal Terminal (ET)

Kaydedilen her sunucu, sunucu eklerken veya düzenlerken **Transport** seçiciyle belirlenen iki aktarımdan birini kullanabilir:

- **SSH** — standart bir SSH bağlantısı (varsayılan).
- **Eternal Terminal** — kabuğunuzu yeniden başlatmadan ağ kesintilerine, cihazın uyku moduna geçmesine ve IP adresi değişikliklerine dayanan bir ET oturumu.

ET oturumu sunucuda canlı tutar; böylece telefonunuz ağ değiştirdiğinde veya uykudan uyandığında Mobile SSH yeni bir kabuk açmak yerine aynı çalışan kabuğa yeniden bağlanır. Bu, onu mobil veri, Wi-Fi/hücresel geçişleri ve uzun süren komutlar için iyi bir seçim yapar.

ET, ana bilgisayarda bir `etserver` süreci gerektirir. Sunucuda yoksa Mobile SSH onu mevcut SSH bağlantısı üzerinden sizin için kurup başlatabilir — elle sunucu kurulumu gerekmez. ET kullanılabilir olduğunda **Eternal Terminal** aktarımı seçili şekilde bağlanın.

## Ek tuş satırı

Her iki platform da on üç terminal tuşunu elinizin altına koyar — dokunmatik klavyede kullanımı güç olan ya da hiç bulunmayan tuşları. Android'de bu, oturumun altındaki bir şerittir (donanım klavyesi takıldığında kendini gizler); iOS'ta ise yazılım klavyesinin üzerinde yer alır.

İki varsayılan takım aynı büyüklüktedir ama birebir aynı değildir:

| | Android | iOS |
|---|---|---|
| Varsayılanlar | `ESC` `TAB` `CTRL` ok tuşları `HOME` `PGUP` `END` `PGDN` `⌫` `⌨` | `ESC` `TAB` `CTRL` `⇧` ok tuşları `HOME` `END` `PGUP` `PGDN` `⌨` |
| Fark | geri silme tuşu var, Shift yok | yapışkan Shift var, geri silme tuşu yok |

**Satır asla kaydırılmaz.** Tuşlar genişliğe sığmaz olduğunda alanı eşit paylaşır ve ikinci bir satıra sarar; geriye kalan varsa bir `⋯` taşma menüsüne katlanır. Hiçbir şey bir kaydırmanın arkasına gizlenmez ya da ekran kenarında kırpılmaz ve kurulu bir değiştirici, taşma menüsünden seçtiğiniz bir tuşa da uygulanır.

`CTRL` yapışkan bir değiştirici olarak çalışır: `CTRL`'ye dokunun, ardından Ctrl-C göndermek için `C` yazın. `Shift`, iOS'ta Android'e göre daha yapışkandır — iOS'ta yazılım klavyesinde yazacağınız bir sonraki karakteri de büyük harfe çevirir, Android'de ise yalnızca çubuğun kendi tuşlarına uygulanır (`Shift`+`Tab`, `Shift`+ok tuşları).

Ok tuşu veya `PGDN` gibi bir tuşu basılı tutarsanız yinelenir.

## Klavye davranışı

Terminal, ekran klavyesine yerel bir geçişli bağlantı kullanır: yazdıkça her karakter uzak kabuğa gönderilir; otomatik düzeltme ve tahmine dayalı öneriler kapalıdır; böylece klavye, giriş kabuğa ulaşmadan önce onu asla yeniden yazmaz. Bu; Vim, tmux, htop, less, alışılmadık tuş akorları kullanan kabuklar ve uzak parola istemlerini öngörülebilir tutar — devre dışı bırakılacak bir öneri arabelleği yoktur.

- **Klavyeyi göstermek için terminale dokun:** etkinleştirildiğinde terminale dokunmak sistemden ekran klavyesini göstermesini ister.

Ekran klavyesi sesli diktesi yine de çalışır: dikte edilen metin, yazılan diğer girdiler gibi doğrudan kabuğa iletilir.

## Donanım klavyeleri

Harici ve Bluetooth klavyeler, hem Android hem iOS'ta terminali doğrudan sürer. Sıradan karakterlerin ötesinde Mobile SSH şu tuşları eşler: ok tuşları, `Home`/`End`, `PgUp`/`PgDn`, `Insert`, `Delete`, `Esc`, `F1`–`F12` işlev tuşları, `Ctrl`+tuş ve `Alt`/`Option`-Meta-olarak akorları ile `Shift`+`Tab`. Değiştirici tuşlar, ek tuş satırının yapışkan değiştiricileriyle birleşir.

## Yapıştırma

Bunu isteyen bir programa (bash, Vim ve diğer köşeli parantezli yapıştırma uygulamaları) yapıştırma, köşeli parantez işaretleriyle sarmalanır; böylece çok satırlı pano içeriği satır satır otomatik çalıştırılmak yerine metin olarak eklenir. Yalnızca gerçek yapıştırmalar sarmalanır; yazılan ve dikte edilen metne dokunulmaz.

## Seç, kopyala, paylaş

Parmağınızın altındaki kelimeyi seçmek için terminalin içine uzun basın, ardından ayarlamak için tutamakları sürükleyin. Seçim araç çubuğu üç işlem sunar:

- **Copy** — seçili metni sistem panosuna koyar. Seçim daha sonra da vurgulu kalır; böylece paylaşabilir, yeniden kopyalayabilir veya genişletebilirsiniz.
- **Share** — seçili metni sistem paylaşım sayfasına (e-posta, notlar, mesajlaşma vb.) iletir.
- **Select all** — seçimi görünür terminal arabelleğinin tamamına genişletir, ardından Copy veya Share uygulanabilir.

## Terminalde bul

Tüm terminal arabelleğini — geri kaydırmayı ve görünür ekranı — arayın ve eşleşmeler arasında atlayın. Terminal denetimlerinden aramayı açın, bir sorgu yazın ve isabetler arasında ilerleyin. Bu, hem Android hem iOS'ta çalışır.

## Renk, italik ve uzak pano

- Terminal **24-bit gerçek renk** ve **italik** işler; böylece temalı istemler, sözdizimi vurgulaması ve TUI'ler masaüstündeki gibi görünür.
- **OSC 52 panosu:** uzak bir program metni kopyaladığında (tmux `set-clipboard`, bir Vim/Neovim OSC 52 kopyalaması) bu, telefonunuzun panosuna düşer — böylece sunucudan kopyalayıp yerel bir uygulamaya yapıştırabilirsiniz.
- Hem Android hem de iOS'ta geniş CJK, emoji ve birleşen karakterler (grafem kümeleri ve sıfır genişlikli birleştiriciler) doğru şekilde ölçülür ve çizilir ve yerleşik bir **Nerd Font** sistem yazı tipinin aksi halde boş kutular olarak göstereceği powerline, starship, devicon ve Material Design simge gliflerini çizer.

## Kabuk entegrasyonu ve satır içi görüntüler

- **Kabuk entegrasyonu (OSC 133):** kabuğunuz OSC 133 istem işaretleri yaydığında Mobile SSH istemler arasında adım adım gezebilir ve uzun süren bir komut bittiğinde sizi uyarabilir. Android ve iOS'ta çalışır. Hiçbir uygulama bu işaretleri kendisi eklemez — kabuğunuzun yayması gerekir (bir `PROMPT_COMMAND`/`precmd` kancası ya da starship). Android'de istem gezinmesi, **Settings → Shell integration** altında etkinleştirene kadar kapalıdır; iOS'ta ise işaretler gelmeye başlayınca menü kendiliğinden görünür.
- **Çıktıyı seçme:** bir komutun çıktısının herhangi bir yerine dokunun ve o bloğun tamamını seçin — yalnızca son komutu değil, 300 satır önceki derleme hatasını — sonra kopyalayın, paylaşın veya seçimi genişletin.
- **Satır içi görüntüler:** Kitty grafik protokolünü kullanan programlar görüntüleri doğrudan terminalde çizer; Android ve iOS'ta. Görüntüler sıkıştırarak yakınlaştırmaya ve satırların yeniden sarılmasına dayanır: hücre cinsinden ölçülür ve satırlarıyla birlikte hareket ederler, düşürülüp yerlerinde boşluk bırakmazlar. Bunlar ana ekrana ait bir özelliktir ve tam ekran bir TUI devraldığında temizlenirler.
- **Mozaik glifler (Android):** blok, braille, sekstant ve oktant karakterleri bir yazı tipinden istenmek yerine uygulamanın kendisi tarafından çizilir; böylece `chafa`, `timg` ve ANSI sanatı ızgarayı tam olarak döşer — hangi yazı tipini seçerseniz seçin, ne dikiş izi ne de boş kutu kalır.
- **Gerçek çalışma dizini (Android):** bölme başlığı, son istemin ne yazdırdığına bakmaksızın bölmenin gerçekte nerede olduğunu gösterir — tmux'tan sorularak ya da kabuk tarafından OSC 7 ile bildirilerek.

## Görünüm ve tuşlar

Hem Android hem de iOS'ta Ayarlar, terminali özelleştirmenize olanak tanır:

- **Yazı tipi:** sistem tek aralıklı yazı tipini, JetBrains Mono veya Source Code Pro'yu seçin.
- **Renk şeması:** Varsayılan, Solarized Koyu veya Açık, Gruvbox, Dracula ya da Nord — açık panellere anında uygulanır.
- **Ek tuş satırı:** tuş ekleyin, kaldırın, yeniden sıralayın ve gizleyin, kendi kaçış dizisi tuşlarınızı tanımlayın ve varsayılanlara sıfırlayın; canlı önizleme satırın tam olarak nasıl bölüneceğini gösterir. Android bunu bir **Keys** sekmesine koyar; iOS'ta **Extra keys → Customize keys** altındadır.
- **Hazır tuşlardan ekleme:** altı grupta yaklaşık 45 tuşluk bir palet — `F1`–`F12`, `^C` `^D` `^Z` `^R` `^L` gibi Ctrl kombinasyonları, `|` `~` `/` `_` `:` gibi simgeler ve değiştiriciler. `F1`–`F12` sıradan kaçış dizileri olarak gönderilir, bu yüzden bir `FN` akoru gerektirmezler. Android ayrıca dosya seçicisini açıp canlı oturuma yükleme yapan bir 📎 **Attach a file** tuşu sunar; iOS ise `INS`, `DEL` ve bir rakam satırını açığa çıkaran bir `FN` tuşu sunar.
- **Geri kaydırma boyutu:** 1.000, 5.000, 10.000 veya 50.000 satır (varsayılan 5.000). Yeni bölmelere uygulanır.
- **Metin boyutu:** sıkıştırarak yakınlaştırmanın yanı sıra bir kaydırıcı.
- **Tema:** uygulamanın tamamı için Sistem, Açık veya Koyu.

Sıfırlama, bugünkü listeyi dondurmak yerine uygulamayla gelen varsayılanları geri getirir; böylece sonraki sürümlerin iyileştirmeleri size de ulaşır. Değişiklikler zaten açık olan bölmelere anında uygulanır.

## Kaydırma

Mobile SSH kaydırma hareketlerini terminal durumuna göre yönlendirir:

- Normal kabuk çıktısında kaydırma, yerel geri kaydırma arabelleğini kaydırır.
- Fare modlu terminal uygulamalarında kaydırma, fare tekerleği kaçış dizileri gönderir.
- Fare modu olmayan alternatif ekran uygulamalarında, birçok tmux oturumu gibi, kaydırma tmux kopya moduna girer ve satır kaydırma komutları gönderir.

Android'de, fare izleyen bir programın içindeki dokunuş o hücrede bir sol tıklama olarak iletilir; böylece htop, vim ve tıklayarak odaklanan bölmeler dokunuşa yanıt verir. iOS'ta aynı programda bir dokunuş tıklamak yerine klavyeyi açar; yalnızca tekerlek kaydırması bildirilir.

Geriye kaydırılmışken yazarsanız Mobile SSH canlı terminal görünümüne döner.

## tmux davranışı

Mobile SSH giden tmux attach ve yeni oturum komutlarını gözlemler, örneğin:

```bash
tmux attach -t work
tmux a -t work
tmux new -A -s work
```

tmux'tayken bağlantı düştüğünde uygulama o sunucunun son tmux oturum adını hatırlayabilir ve yeniden bağlandıktan sonra yeniden eklemeyi deneyebilir. Açık bir oturum adı gözlemlenmediyse ancak uygulama alternatif ekranlı tmux benzeri bir oturumda olduğunuzu tespit ettiyse genel bir `tmux attach` deneyebilir.

Bu davranış elden gelenin en iyisidir. Uzak tmux oturumu artık mevcut değilse uzak kabuk kullanılabilir kalmaya devam eder.

## Tmux yöneticisi

Mobile SSH, önek akorları yazmadan tmux'u gezip yönetebilmeniz için bir tmux yöneticisi içerir. Bağlı bir oturumdan **Tmux** düğmesiyle açın. Üç bölüm halinde listeler:

- **Sessions** — sunucudaki tüm tmux oturumları.
- **Windows** — seçili oturumdaki pencereler.
- **Panes** — seçili penceredeki bölmeler.

Yöneticiden şunları yapabilirsiniz:

- Bir oturumu geçerli terminale **bağlayın (attach)**.
- Yeni bir oturum veya pencere **oluşturun** ve bunları **yeniden adlandırın**.
- Bir bölmeyi yatay veya dikey **bölün**, bir bölmeyi **yakınlaştırın** ve oturumları, pencereleri veya bölmeleri **sonlandırın**.
- Oturumları ada veya oluşturulma tarihine göre **sıralayın**.

🔔 simgesi, ajanı girdi bekleyen her oturumu işaretler; böylece duraklamış bir Claude Code veya Codex çalışmasını bir bakışta fark edip ona bağlanabilirsiniz. Bu, yukarıdaki reattach ipuçlarını tamamlar: reattach mantığı yeniden bağlanmada son oturumunuzu otomatik olarak geri yüklerken, yönetici size tam elle denetim sunar.

Her iki platform da aynı ana bilgisayarda birden çok tmux sunucusunu (soket) yönetebilir ve oturumları ada veya oluşturulma tarihine göre sıralayabilir.

## Herdr ve Zellij (Android)

Android aynı fikri iki çoğullayıcı için daha sunar. Her birinin kendi araç çubuğu simgesi vardır ve **bir simge yalnızca uygulama o programı sunucuda gerçekten bulduğunda belirir** — böylece araç çubuğu, siz `which` çalıştırmadan orada ne kurulu olduğunu söyler.

- **Herdr** kendi sözcük dağarcığını kullanır: oturumlar, çalışma alanları, sekmeler, bölmeler. Her bölme ajanının durumunu gösterir — çalışıyor, sizi bekliyor, boşta — ve takılmış bir ajan doğrudan listeden yanıtlanabilir. Herdr'in kendi durumu uygulamanın ajan rozetini besler, bu yüzden bu, sunucuya hiçbir kanca kurulmadan çalışır.
- **Zellij** oturumları, sekmeleri ve bölmeleri bağlanma, yeniden adlandırma, sonlandırma ve bölme işlemleriyle listeler. Sonlandırılmış oturumlar listede kalır; böylece bağlanmak onları diriltir, silmek ise tamamen unutturur. Sekme ve bölme ayrıntısı Zellij 0.44 veya üzerini gerektirir; daha eski bir sürümde sayfa sekme adlarını gösterir ve nedenini açıklar. Bölmeler, oturuma bağlı bir istemci gerektirir ve sayfa bunu, başarısız olacak bir düğme sunmak yerine açıklar.

Herdr veya Zellij kurulu ama giriş kabuğunun `PATH`'inde değilse sayfa bunu eklemeyi önerir.

Kaydedilen her sunucunun bir **Attach on connect** ayarı vardır: **Auto (detect)**, **Nothing**, **tmux**, **herdr** veya **Zellij**. Auto; önce o sunucuda en son kullandığınızı, sonra canlı oturumu olanı, sonra da kurulu olanı seçer — sunucuyu henüz yoklamadıysa tahmin yürütmek yerine hiçbir şeye bağlanmaz.

iOS uygulaması bugün yalnızca tmux destekler.

## Ajan uyarıları

Mobile SSH, uzak bir yapay zeka kodlama ajanının — Claude Code, Codex, Gemini — sizi beklerken takıldığını size söyler. Bunu terminal çıktınızı okuyup tahmin ederek yapmaz. İki yol vardır ve farklı ayrıntı düzeylerinde çalışırlar.

### Zil

Kutudan çıktığı haliyle, izlemediğiniz bir oturumdan gelen terminal zili bir uyarı doğurur; birçok aracın zaten yaydığı masaüstü bildirim kaçış dizileri (OSC 9, OSC 777) de öyle. Siz bir şey yazdıktan hemen sonra gelen ziller yok sayılır, böylece sıradan kabuk tamamlama gürültüsü sizi rahatsız etmez.

Bu hiçbir kurulum gerektirmez, ama uygulama yalnızca *bir şeyin* çaldığını bilir.

### Ajan kancası

Uygulamanın *hangi* ajanın beklediğini ve *ne yaptığını* bilmesi için sunucuya ajan kancasını kurun:

- **iOS:** Settings → **Agent alerts** → **Install Agent Hook**. Birden çok sunucu bağlıysa hangisi olduğunu sorar.
- **Android:** bir oturumun bölme başlığına uzun basın ve **Install agent hooks** seçeneğini seçin.

Bu, o sunucuda `~/.mobile-ssh/agent-hook.sh` yoluna küçük bir kabuk betiği yazar. Ajandan bağımsızdır — herhangi bir sağlayıcının biçimini ayrıştırmak yerine komut satırı argümanları alır — bu yüzden komut çalıştırabilen her şey onun üzerinden bildirim yapabilir. Dosyayı silmek temiz bir kaldırma işlemidir.

Bir ajan kanca üzerinden bildirim yapmaya başladığında:

- Bölmenin başlığında `claude · sizi bekliyor` yazar ya da çalıştırdığı araç adlandırılır.
- Ajanı takılmış olan bölme kehribar renginde bir kenarlık alır. Zaten baktığınız bölmeye dokunulmaz — istem zaten oradadır.
- Araç çubuğundaki bir rozet, tüm bağlantılarda bekleyen ajanları sayar; en fazla `9+` gösterir.
- **Agents** ekranı her bağlantıdaki her ajanı, ne yaptığı ve ne kadar süredir beklediğiyle birlikte listeler.

### Yazmadan yanıtlama

Bir ajan sabit bir yanıt kümesi olan bir soru sorduğunda uygulama, Ajanlar listesinde her seçenek için bir düğme gösterir — en fazla altı tane. Android'de ayrıca bir bölme başlığındaki ajan rozetine dokunabilirsiniz.

Yanıtınız oturuma yazılmaz. Ayrı bir kanal üzerinden bir dosyaya yazılır ve kanca tarafından alınır; böylece yanıt vermek ekrandakini bozamaz. Uygulama, istemin gerçekte sunmadığı bir seçeneği göndermeyi reddeder ve bağlantı bu arada koptuysa sessizce başarısız olmak yerine size bunu açıkça söyler.

### Ayarlar

Uyarılar her iki platformda da varsayılan olarak açıktır; bildirim, ses, titreşim ve o an baktığınız oturumun da uyarı verip vermeyeceği için ayrı anahtarlar bulunur.

Bilinmeye değer bir varsayılan var: **ses yalnızca kulaklıkla sınırlıdır**. Takılı veya eşleşmiş bir şey yoksa uyarı bildirir ve titreşir ama ses çalmaz. Uyarının telefon hoparlöründen duyulmasını istiyorsanız bunu kapatın.

Hassasiyet ayarı ve ses seçici yoktur — denetimler açık/kapalıdır.

## Tam ekran terminal programları

Vim, less, htop, ncurses araçları ve tmux bölmeleri gibi programlar için:

- Giriş doğrudan programa iletilir — araya girecek otomatik düzeltme veya öneri arabelleği yoktur.
- `ESC`, ok tuşları, `PGUP` ve `PGDN` için ek tuş satırını kullanın.
- Metin çok küçükse kıstırarak yakınlaştırma kullanın, ardından uzak terminal boyutunun oturması için kısaca bekleyin.
