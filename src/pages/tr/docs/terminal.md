---
layout: ../../../layouts/DocLayout.astro
title: "Terminal"
description: "Mobile SSH terminal denetimleri, ek tuşlar, bölmeler, kaydırma, tmux davranışı, kopyalama işlemleri ve klavye ayarları."
---

# Terminal

Mobile SSH terminali telefon ve tablet kullanımı için tasarlanmıştır. Bir terminal tuvali, ek tuş satırı, çoklu oturum bölmeleri, kaydırma işleme ve yeniden bağlanma davranışını birleştirir.

## Terminal temelleri

- Terminal, renk desteği ve imleç tuşu işleme ile xterm tarzı davranış kullanır.
- Geri kaydırma arabelleği en fazla 5000 satır tutar.
- Yazmadan önce bir bölmeyi seçmek için dokunun.
- Metin boyutunu değiştirmek için bir terminal bölmesini kıstırın. Hareket yatıştıktan sonra Mobile SSH uzak PTY'yi yeniden boyutlandırır.
- Tam ekran moduna girmek için bir bölmeye çift dokunun. Izgaraya dönmek için Geri'yi kullanın.

## Çoklu oturum ızgarası

Mobile SSH aynı anda sekiz SSH oturumuna kadar çalıştırabilir. Her oturum terminal ızgarasında bir bölme olarak görünür. Bölme başlığı geçerli hedefi veya başlığı gösterir. Seçmek için bir bölmeye dokunun veya başka bir bağlantı başlatmak için **+ Oturum Ekle**'yi kullanın.

Bir bölmeyi kapatmak o SSH oturumunu keser. Başlangıç ekranına dönmek etkin oturumları **Etkin Oturumlar** aracılığıyla kullanılabilir tutar.

## Ek tuş satırı

Ek tuş satırı Android klavyesinin üstünde görünür ve dokunmatik klavyelerde zahmetli olan terminal tuşlarını sağlar:

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

`CTRL` ve `Shift` bir sonraki uyumlu giriş için yapışkan değiştiriciler gibi davranır. Örneğin `CTRL`'ye dokunun, ardından Ctrl-C göndermek için `C` yazın.

## Klavye davranışı

Mobile SSH'de klavyeyle ilgili iki ayar vardır:

- **Klavyeyi göstermek için terminale dokun:** etkinleştirildiğinde terminale dokunmak Android'den giriş yöntemini göstermesini ister.
- **Klavye önerileri:** etkinleştirildiğinde uyumlu klavyeler kabuk istemlerinde öneri gösterebilir. Öneriler terminal programlarıyla çakışıyorsa devre dışı bırakın.

Öneriler etkinken Mobile SSH, oluşturulan metni bir sözcük sınırına kadar arabelleğe alır; böylece klavye düzeltmesi geçerli sözcüğü uzak kabuğa gönderilmeden önce değiştirebilir. Denetim tuşları ve terminal akorları bu arabelleği atlar; böylece tmux önek komutları gibi kısayollar anında ulaşır.

Sesli giriş (Gboard mikrofon düğmesi) aynı oluşturma metni arabelleğinden geçer; bu nedenle dikte edilen metin karakter karakter değil, çözümlendikten sonra bir kez gönderilir.

## Seç, kopyala, paylaş

Seçim moduna girmek için terminalin içine uzun basın. Seçim araç çubuğu üç işlem sunar:

- **Kopyala** — seçili metni Android panosuna koyar.
- **Paylaş** — seçili metni Android paylaşım sayfasına (posta, notlar, mesajlaşma vb.) iletir.
- **Tümünü seç** — seçimi görünür terminal arabelleğinin tamamına genişletir, ardından Kopyala veya Paylaş.

## Kaydırma

Mobile SSH kaydırma hareketlerini terminal durumuna göre yönlendirir:

- Normal kabuk çıktısında kaydırma, yerel geri kaydırma arabelleğini kaydırır.
- Fare modlu terminal uygulamalarında kaydırma fare tekerleği kaçış dizileri gönderir.
- Fare modu olmayan alternatif ekran uygulamalarında, birçok tmux oturumu gibi, kaydırma tmux kopya moduna girer ve satır kaydırma komutları gönderir.

Geriye kaydırılmışken yazarsanız Mobile SSH canlı terminal görünümüne döner.

## tmux davranışı

Mobile SSH giden tmux attach ve yeni oturum komutlarını gözlemler, örneğin:

```bash
tmux attach -t work
tmux a -t work
tmux new -A -s work
```

tmux'tayken bağlantı düştüğünde uygulama o sunucunun son tmux oturum adını hatırlayabilir ve yeniden bağlandıktan sonra yeniden eklemeyi deneyebilir. Açık bir oturum adı gözlemlenmediyse ama uygulama alternatif ekranlı tmux benzeri bir oturumda olduğunuzu biliyorsa genel bir `tmux attach` deneyebilir.

Bu davranış elden gelenin en iyisidir. Uzak tmux oturumu artık yoksa uzak kabuk kullanılabilir kalır.

## Tam ekran terminal programları

Vim, less, htop, ncurses araçları ve tmux bölmeleri gibi programlar için:

- Klavye girişi programın beklemediği bir biçimde arabelleğe almaya başlarsa klavye önerilerini devre dışı bırakın.
- `ESC`, oklar, `PGUP` ve `PGDN` için ek tuş satırını kullanın.
- Metin çok küçükse kıstırarak yakınlaştırma kullanın, sonra uzak terminal boyutunun oturması için kısa süre bekleyin.
