---
layout: ../../../layouts/DocLayout.astro
title: "Dosya aktarımı"
description: "Yerel dosyalar, uzak dosyalar, yükleme, indirme, sıralama ve izinler için Mobile SSH SFTP dosya aktarım kılavuzu."
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

Dosya aktarım ekranında iki tarayıcı bölmesi vardır:

- **Yerel bölme:** telefon depolaması.
- **Uzak bölme:** SFTP üzerinden sunucu dosyaları.

Uygulama, sunucu başına son yerel ve uzak yolları hatırlar. Sıralama ayarları da her iki bölme için sunucu başına hatırlanır.

## Depolama erişimi

Doğrudan dosya taramayı kısıtlayan Android sürümlerinde, yerel bölme telefon dosyalarını tarayabilmeden önce Mobile SSH depolama erişimi isteyebilir. Bu izni atlarsanız veya reddederseniz uzak tarama yine de çalışabilir, ancak yerel yükleme ve indirme yolları sınırlı olabilir.

iOS'ta yerel bölme, uygulamanın kendi belgeler alanıyla çalışır ve dosyaları sistem belge ve fotoğraf seçicileri aracılığıyla içeri alırsınız — fotoğrafların ve belgelerin çoklu seçimle içe aktarılması dahil. Ayrı bir depolama izni gerekmez.

Özel anahtar içe aktarma işlemi dosya aktarımından bağımsızdır ve sistem dosya seçiciyi kullanır.

## Dosya yükleme

1. Yerel bölmeyi açın.
2. Yüklemek istediğiniz dosyaya gidin.
3. Yüklemeyi seçin.
4. Uzak hedefi onaylayın.
5. İlerleme ve tamamlanma için aktarım kuyruğunu izleyin.

Yüklemeler mevcut SSH/SFTP bağlantısını kullanır. Bağlantı kesilirse yeniden bağlandıktan sonra tekrar deneyin.

## Dosya indirme

1. Uzak bölmeyi açın.
2. İndirmek istediğiniz dosyaya gidin.
3. İndirmeyi seçin.
4. Yerel hedefi onaylayın.
5. İlerleme ve tamamlanma için aktarım kuyruğunu izleyin.

Büyük indirmeler mümkün olduğunda kararlı bir ağ bağlantısıyla yapılmalıdır.

## Tüm klasörleri kopyalama

Yüklemeler ve indirmeler tek dosyalarla sınırlı değildir. Bir klasör seçin; Mobile SSH tüm alt ağacı her iki yönde kopyalar — telefondan uzağa ve uzaktan telefona — önce hedef dizinleri oluşturur, ardından her dosyayı sıraya alır. Okunamayan bir alt dizin atlanır ve kopyalamanın geri kalanı durdurulmadan raporlanır.

## Uzak dosya işlemleri

Seçili uzak öğeye bağlı olarak Mobile SSH şu işlemleri gösterebilir:

- İndir.
- Yeniden adlandır.
- Sil.
- Dosya veya dizin oluştur.
- Metin dosyasını düzenle.
- Dosya ayrıntılarını görüntüle.

Uzak dosya ayrıntıları izin bitlerini, sahibini, grubunu ve sekizlik izin değerlerini içerebilir. Başka bir işlem veya dağıtım aracı tarafından yönetilen sunucu dosyalarını değiştirmeden önce bu ayrıntıları inceleyin.

## Sıralama ve son yollar

Her bölme ada veya tarihe göre artan ya da azalan sırada sıralanabilir. Mobile SSH, seçili yerel ve uzak sıralama modlarını son yollarla birlikte sunucu başına saklar; böylece aynı sunucuya yapılan tekrarlı aktarımlar tanıdık konumlardan başlar.

## Aktarım kuyruğu

Aktarımlar kuyruğa alınır ve duruma göre gösterilir. Günlük alanı kuyruktaki, başarısız ve başarılı aktarımları ayrı ayrı listeler. Başarısız aktarımlar, altta yatan SFTP işlemi bir neden sağladığında ilgili nedeni de gösterir.

## Pratik ipuçları

- Hedefli dosya taşımaları için SFTP kullanın; büyük dizin eşitlemesi için sunucuda `rsync` gibi komut satırı araçlarını tercih edin.
- Yedeğiniz veya dağıtım geri alma yolunuz olmadıkça canlı üretim dosyalarını düzenlemekten kaçının.
- Yükledikten sonra bir dosya görünmüyorsa uzak bölmeyi yenileyin veya hedef yolu doğrulayın.
- Android depolama erişimi yerel taramayı engelliyorsa Android Ayarları'ndan izni verin ve dosya aktarımını yeniden açın. iOS'ta ise dosyaları yerel bölmeye eklemek için bunun yerine seçicileri kullanın.
