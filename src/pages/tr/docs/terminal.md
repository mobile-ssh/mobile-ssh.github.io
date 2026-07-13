---
layout: ../../../layouts/DocLayout.astro
title: "Terminal"
description: "Mobile SSH terminal denetimleri, ek tuşlar, bölmeler, kaydırma, tmux davranışı, kopyalama işlemleri ve klavye ayarları."
---

# Terminal

Mobile SSH terminali telefon ve tablet kullanımı için tasarlanmıştır. Bir terminal tuvali, ek tuş satırı, çoklu oturum bölmeleri, kaydırma işleme ve yeniden bağlanma davranışını bir araya getirir.

## Terminal temelleri

- Terminal, renk desteği ve imleç tuşu işleme ile xterm tarzı davranış kullanır.
- Geri kaydırma arabelleği en fazla 5000 satır tutar.
- Yazmadan önce bir bölmeyi seçmek için dokunun.
- Metin boyutunu değiştirmek için bir terminal bölmesini kıstırın. Hareket durulduktan sonra Mobile SSH uzak PTY'yi yeniden boyutlandırır.
- Tam ekran moduna girmek için bir bölmeye çift dokunun (veya bölmenin genişletme denetimini kullanın). Izgaraya dönmek için Android'de Geri'yi, iOS'ta ise daraltma denetimini kullanın.

## Çoklu oturum ızgarası

Mobile SSH aynı anda sekiz SSH oturumuna kadar çalıştırabilir. Her oturum terminal ızgarasında bir bölme olarak görünür. Bölme başlığı geçerli hedefi veya başlığı gösterir. Seçmek için bir bölmeye dokunun ya da başka bir bağlantı başlatmak için **+ Add Session** düğmesini kullanın.

Bir bölmeyi kapatmak o SSH oturumunu keser. Başlangıç ekranına dönmek etkin oturumları **Active Sessions** aracılığıyla erişilebilir tutar.

## Eternal Terminal (ET)

Kaydedilen her sunucu, sunucu eklerken veya düzenlerken **Transport** seçiciyle belirlenen iki aktarımdan birini kullanabilir:

- **SSH** — standart bir SSH bağlantısı (varsayılan).
- **Eternal Terminal** — kabuğunuzu yeniden başlatmadan ağ kesintilerine, cihazın uyku moduna geçmesine ve IP adresi değişikliklerine dayanan bir ET oturumu.

ET oturumu sunucuda canlı tutar; böylece telefonunuz ağ değiştirdiğinde veya uykudan uyandığında Mobile SSH yeni bir kabuk açmak yerine aynı çalışan kabuğa yeniden bağlanır. Bu, onu mobil veri, Wi-Fi/hücresel geçişleri ve uzun süren komutlar için iyi bir seçim yapar.

ET, ana bilgisayarda bir `etserver` süreci gerektirir. Sunucuda yoksa Mobile SSH onu mevcut SSH bağlantısı üzerinden sizin için kurup başlatabilir — elle sunucu kurulumu gerekmez. ET kullanılabilir olduğunda **Eternal Terminal** aktarımı seçili şekilde bağlanın.

## Ek tuş satırı

Hem Android hem iOS'ta ek tuş satırı ekran klavyesinin üstünde görünür ve dokunmatik klavyelerde kullanımı güç olan terminal tuşlarını sağlar:

- `ESC`
- `TAB`
- `CTRL`
- `Shift`
- Ok tuşları
- `HOME`
- `END`
- `PGUP`
- `PGDN`
- Klavye geçişi

`CTRL` ve `Shift` bir sonraki uyumlu giriş için yapışkan değiştirici olarak çalışır. Örneğin `CTRL`'ye dokunun, ardından Ctrl-C göndermek için `C` yazın.

## Klavye davranışı

Terminal, ekran klavyesine yerel bir geçişli bağlantı kullanır: yazdıkça her karakter uzak kabuğa gönderilir; otomatik düzeltme ve tahmine dayalı öneriler kapalıdır; böylece klavye, giriş kabuğa ulaşmadan önce onu asla yeniden yazmaz. Bu; Vim, tmux, htop, less, alışılmadık tuş akorları kullanan kabuklar ve uzak parola istemlerini öngörülebilir tutar — devre dışı bırakılacak bir öneri arabelleği yoktur.

- **Klavyeyi göstermek için terminale dokun:** etkinleştirildiğinde terminale dokunmak sistemden ekran klavyesini göstermesini ister.

Ekran klavyesi sesli diktesi yine de çalışır: dikte edilen metin, yazılan diğer girdiler gibi doğrudan kabuğa iletilir.

## Donanım klavyeleri

Harici ve Bluetooth klavyeler, hem Android hem iOS'ta terminali doğrudan sürer. Sıradan karakterlerin ötesinde Mobile SSH şu tuşları eşler: ok tuşları, `Home`/`End`, `PgUp`/`PgDn`, `Insert`, `Delete`, `Esc`, `F1`–`F12` işlev tuşları, `Ctrl`+tuş ve `Alt`/`Option`-Meta-olarak akorları ile `Shift`+`Tab`. Değiştirici tuşlar, ek tuş satırının yapışkan değiştiricileriyle birleşir.

## Yapıştırma

Bunu isteyen bir programa (bash, Vim ve diğer köşeli parantezli yapıştırma uygulamaları) yapıştırma, köşeli parantez işaretleriyle sarmalanır; böylece çok satırlı pano içeriği satır satır otomatik çalıştırılmak yerine metin olarak eklenir. Yalnızca gerçek yapıştırmalar sarmalanır; yazılan ve dikte edilen metne dokunulmaz.

## Seç, kopyala, paylaş

Seçim moduna girmek için terminalin içine uzun basın. Seçim araç çubuğu üç işlem sunar:

- **Copy** — seçili metni sistem panosuna koyar.
- **Share** — seçili metni sistem paylaşım sayfasına (e-posta, notlar, mesajlaşma vb.) iletir.
- **Select all** — seçimi görünür terminal arabelleğinin tamamına genişletir, ardından Copy veya Share uygulanabilir.

## Kaydırma

Mobile SSH kaydırma hareketlerini terminal durumuna göre yönlendirir:

- Normal kabuk çıktısında kaydırma, yerel geri kaydırma arabelleğini kaydırır.
- Fare modlu terminal uygulamalarında kaydırma, fare tekerleği kaçış dizileri gönderir.
- Fare modu olmayan alternatif ekran uygulamalarında, birçok tmux oturumu gibi, kaydırma tmux kopya moduna girer ve satır kaydırma komutları gönderir.

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

## Agent alerts

Mobile SSH, aktif oturumun terminal çıktısını izleyerek uzak bir aracın giriş beklediğini gösteren kalıpları arar. Bir eşleşme algılandığında — örneğin Claude Code veya Codex bir istem için duraksa — uygulama isteğe bağlı ses ve titreşimle bir bildirim gönderir.

Yapılandırmak için:

1. Başlangıç ekranından **Settings** bölümünü açın.
2. **Agent alerts** seçeneğini etkinleştirin.
3. Bir bildirim sesi ve titreşim düzeni seçin.

Uyarı, kulaklık dahil o anda etkin olan ses çıkışından gelir; böylece video izlerken veya telefon kilitliyken bile duyabilirsiniz. Bildirim, Mobile SSH arka planda olsa bile görünür.

Agent alert kalıpları görünür terminal çıktısıyla eşleştirilir. Uzak aracınız tanınabilir bir istem satırı (kullanıcı adı, `?`, köşeli parantez içinde soru gibi) çıktılıyorsa uygulama bunu otomatik olarak yakalayabilir. Uyarılar çok sık veya hiç tetiklenmiyorsa Settings bölümünden hassasiyeti ayarlayın.

## Tam ekran terminal programları

Vim, less, htop, ncurses araçları ve tmux bölmeleri gibi programlar için:

- Giriş doğrudan programa iletilir — araya girecek otomatik düzeltme veya öneri arabelleği yoktur.
- `ESC`, ok tuşları, `PGUP` ve `PGDN` için ek tuş satırını kullanın.
- Metin çok küçükse kıstırarak yakınlaştırma kullanın, ardından uzak terminal boyutunun oturması için kısaca bekleyin.
