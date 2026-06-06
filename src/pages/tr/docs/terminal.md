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
- Tam ekran moduna girmek için bir bölmeye çift dokunun. Izgaraya dönmek için Geri'yi kullanın.

## Çoklu oturum ızgarası

Mobile SSH aynı anda sekiz SSH oturumuna kadar çalıştırabilir. Her oturum terminal ızgarasında bir bölme olarak görünür. Bölme başlığı geçerli hedefi veya başlığı gösterir. Seçmek için bir bölmeye dokunun ya da başka bir bağlantı başlatmak için **+ Add Session** düğmesini kullanın.

Bir bölmeyi kapatmak o SSH oturumunu keser. Başlangıç ekranına dönmek etkin oturumları **Active Sessions** aracılığıyla erişilebilir tutar.

## Ek tuş satırı

Ek tuş satırı Android klavyesinin üstünde görünür ve dokunmatik klavyelerde kullanımı güç olan terminal tuşlarını sağlar:

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

Mobile SSH'de klavyeyle ilgili iki ayar bulunur:

- **Klavyeyi göstermek için terminale dokun:** etkinleştirildiğinde terminale dokunmak Android'den giriş yöntemini göstermesini ister.
- **Keyboard suggestions:** etkinleştirildiğinde uyumlu klavyeler kabuk istemlerinde öneri gösterebilir. Öneriler terminal programlarıyla çakışıyorsa devre dışı bırakın.

Öneriler etkinken Mobile SSH, oluşturulan metni bir sözcük sınırına kadar arabelleğe alır; böylece klavye düzeltmesi geçerli sözcüğü uzak kabuğa gönderilmeden önce değiştirebilir. Denetim tuşları ve terminal akorları bu arabelleği atlar; dolayısıyla tmux önek komutları gibi kısayollar anında iletilir.

Sesli giriş (Gboard mikrofon düğmesi) aynı oluşturma metni arabelleğinden geçer; bu nedenle dikte edilen metin karakter karakter değil, çözümlendikten sonra tek seferde gönderilir.

## Seç, kopyala, paylaş

Seçim moduna girmek için terminalin içine uzun basın. Seçim araç çubuğu üç işlem sunar:

- **Copy** — seçili metni Android panosuna koyar.
- **Share** — seçili metni Android paylaşım sayfasına (e-posta, notlar, mesajlaşma vb.) iletir.
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

- Klavye girişi programın beklemediği biçimde arabelleğe alınmaya başlarsa klavye önerilerini devre dışı bırakın.
- `ESC`, ok tuşları, `PGUP` ve `PGDN` için ek tuş satırını kullanın.
- Metin çok küçükse kıstırarak yakınlaştırma kullanın, ardından uzak terminal boyutunun oturması için kısaca bekleyin.
