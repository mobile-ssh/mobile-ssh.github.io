---
layout: ../../../layouts/DocLayout.astro
title: "Dosya aktarımı"
description: "Mobile SSH SFTP aktarımı, hatırlanan klasörler, tmux oturum dizinleri, kuyruklar, izinler ve terminale dosya paylaşımı."
---

# Dosya aktarımı

Mobile SSH, etkin SSH bağlantısına bağlı bir SFTP dosya aktarım ekranı içerir. Telefonunuzdan veya tabletinizden hızlı sunucu bakımı içindir: bir yapılandırma yükleyin, bir günlük indirin, uzak bir dosyayı yeniden adlandırın veya uygulamadan çıkmadan izinleri inceleyin.

## Dosya aktarımını açma

1. Bir SSH sunucusuna bağlanın.
2. Bağlı terminal bölmesini seçin.
3. Terminal araç çubuğundan **Transfer**'i açın veya geçerli ekran destekliyorsa bölme başlığına uzun basın.
4. Dosya aktarım ekranı bir yerel bölme ve bir uzak bölmeyle açılır.

Etkin bir SSH oturumu yoksa dosya aktarımı açılamaz.

## Yerel ve uzak bölmeler

Dosya aktarım ekranında iki gezgin bölmesi vardır:

- **Yerel bölme:** telefon depolaması.
- **Uzak bölme:** SFTP üzerinden sunucu dosyaları.

Uygulama uzak son yolları ve sıralamayı sunucu başına hatırlar. Android'de uzak bölme başlığından, iOS'ta saat simgesinden açın. Yerel bölme seçtiğiniz klasörü gösterir; iOS siz değiştirene kadar uygulamanın Documents klasörünü kullanır.

Dosya aktarım ekranı sisteminizin açık veya koyu temasını izler; böylece Mobile SSH'nin geri kalanıyla uyumlu görünür.

### Her oturumun açıldığı yer

İki platformda tmux'tan Dosya Aktarımı açmak **o oturum ve soket** için hatırlanan dizini getirir. Yeni oturum önce sık kullanılan sunucu dizinlerini, sonra diğer kayıtlı veya giriş dizinlerini dener.

Dizin yoksa veya erişilemiyorsa sıradaki kullanılabilir yer denenir. Bağlantı hatası eksik klasör sanılmaz, bildirilir. Yenileme yeni ziyaret sayılmaz.

## Depolama erişimi

Mobile SSH hiçbir platformda toptan depolama izni istemez.

Android'de sistemin klasör seçicisiyle **tek bir klasöre** izin verirsiniz ve indirilenler oraya yazılır — diğer tüm uygulamaların zaten okuyabildiği bir yere. Verilen izin uygulama açılışları arasında korunur.

iOS'ta **Telefonum → Yerel klasör seç**, desteklenen iCloud Drive ve diğer sağlayıcılar dahil Dosyalar klasörüne izin verir. Seçim kalıcıdır. **Uygulama klasörünü kullan**, Mobile SSH Documents'a döner. Klasör erişilemezse tekrar seçin veya açıkça uygulama klasörüne geçin; indirmeler sessizce yönlendirilmez. Bu izin yedeklere girmez.

iOS belge ve fotoğraf seçicileri birden fazla öğe aktarır. Ad çakışmaları **Değiştir**, **İkisini de tut** veya **İptal** sunar. Zaten hedefteki dosya içe aktarılırken korunur.

Özel anahtar içe aktarma işlemi dosya aktarımından bağımsızdır ve sistem dosya seçicisini kullanır.

## Dosya yükleme

1. Yerel bölmeyi açın.
2. Yüklemek istediğiniz dosyaya gidin.
3. Yüklemeyi seçin.
4. Uzak hedefi onaylayın.
5. İlerleme ve tamamlanma için aktarım kuyruğunu izleyin.

Yüklemeler, kayıtlı atlama sunucuları dahil seçilen sunucunun SSH yolunu izler. Bağlantı kesilirse yeniden bağlandıktan sonra deneyin.

## Dosya indirme

1. Uzak bölmeyi açın.
2. İndirmek istediğiniz dosyaya gidin.
3. İndirmeyi seçin.
4. Yerel hedefi onaylayın.
5. İlerleme ve tamamlanma için aktarım kuyruğunu izleyin.

Büyük indirmeler mümkün olduğunda kararlı bir ağ bağlantısıyla yapılmalıdır.

## Tüm klasörleri kopyalama

Yüklemeler ve indirmeler tek dosyalarla sınırlı değildir. Bir klasör seçin; Mobile SSH tüm alt ağacı her iki yönde kopyalar — telefondan uzağa ve uzaktan telefona — önce hedef dizinleri oluşturur, ardından her dosyayı sıraya alır. Okunamayan bir alt dizin kopyalamanın geri kalanını durdurmaz; Android'de "Can't list directory" yazan başarısız bir satır olarak bildirilir, iOS ise neyi atladığını listelemeden devam eder.

## Uzak dosya işlemleri

Seçili uzak öğeye bağlı olarak Mobile SSH şu işlemleri gösterebilir:

- İndirmek için **Telefona kopyala**.
- **Sunucuda** kopyala veya taşı — `cp -r` / `mv` ana bilgisayarda çalışır, baytlar telefonunuza uğramaz.
- Yeniden adlandır.
- Sil.
- Dosya veya dizin oluştur.
- Metin dosyasını düzenle.
- `.tar.gz` olarak sıkıştır.
- İzinler — kip ve sahip değiştirme, bir klasörün tamamına uygulama seçeneğiyle.
- Başka bir uygulamada aç.
- Dosya ayrıntılarını görüntüle.

Uzak dosya ayrıntıları izin bitlerini, sahibini, grubunu ve sekizlik izin değerlerini içerebilir. Başka bir işlem veya dağıtım aracı tarafından yönetilen sunucu dosyalarını değiştirmeden önce bu ayrıntıları inceleyin.

Dosya boyutları ikili birimlerde gösterilir; böylece bir sekme ötedeki terminalde `ls -h` ne yazdırıyorsa onunla eşleşirler.

## Sıralama ve son yollar

Her bölme ada veya tarihe göre artan ya da azalan sırada sıralanabilir. Mobile SSH, seçili yerel ve uzak sıralama modlarını son yollarla birlikte sunucu başına saklar; böylece aynı sunucuya yapılan tekrarlı aktarımlar tanıdık konumlardan başlar.

## Aktarım kuyruğu

Aktarımlar Android'de Kuyrukta / Başarısız / Başarılı; iOS'ta Etkin / Başarısız / Bitti durumlarında gösterilir. Hatalarda mevcut neden yazılır. iOS'ta geçerli aktarım Etkin'in başında kalır ve iptal edilebilir.

iOS'ta kuyruk, başka yere göz atsanız da özgün klasörü korur. İndirme hedefi değiştirmeden önce geçici alanda tamamlanır; iptal veya hata eski dosyayı korur. Üzerine yazma onayından sonra hedef değiştiyse uygulama durur.

## Dosyaları uygulamadan dışarı çıkarma

- **Android:** indirilenler izin verdiğiniz klasöre iner, bu yüzden diğer tüm uygulamalar tarafından zaten görülebilirler. **Open in another app** her iki bölmede de vardır; uzak bir dosya önce indirilir, sonra devredilir.
- **iOS:** **Başka uygulamada aç** yerel ve uzak dosyalarda vardır. Uzak dosya önce indirilir, sonra paylaşım açılır. Uygulama klasörü **iPhone'umda → Mobile SSH** altında, dış klasör kendi Dosyalar konumunda kalır.

## Oturuma dosya gönderme

İki platform başka uygulamalardan paylaşımı kabul eder ve terminalde 📎 **Dosya ekle** sunar. Dosyalar seçilen sunucunun `~/.cache/mobile-ssh` dizinine yüklenir; yollar Enter basmadan komut satırına eklenebilir. Birden fazla dosya desteklenir.

Android'de paylaşım çalışan oturumu hedefler. iOS'ta ataş **Fotoğraf Arşivi** veya **Dosyalar** sunar. Paylaşım Uzantısı, Mobile SSH kapalıyken de kayıtlı SSH sunucusuna yükleyebilir; Eternal Terminal profilleri sunulmaz. Bilinmeyen kimliği önce ana uygulamada doğrulayın.

iOS uzantısıyla yüklemeden sonra yollar panoya kopyalanır ve o sunucuya bağlı bölme bulunana kadar ekleme için bekler. Başka sunucunun bölmesine eklenmez.

## Pratik ipuçları

- Hedefli dosya taşımaları için SFTP kullanın; büyük dizin eşitlemesi için sunucuda `rsync` gibi komut satırı araçlarını tercih edin.
- Yedeğiniz veya dağıtım geri alma yolunuz olmadıkça canlı üretim dosyalarını düzenlemekten kaçının.
- Yükledikten sonra bir dosya görünmüyorsa uzak bölmeyi yenileyin veya hedef yolu doğrulayın.
- Android yerel bölme boşsa **Klasör seç** kullanın. iOS'ta hedefe göre **Yerel klasör seç**, **Uygulama klasörünü kullan** veya içe aktarma seçicilerini kullanın.
