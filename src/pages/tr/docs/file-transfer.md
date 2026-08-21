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

Uygulama, ana bilgisayar başına son on uzak yolu hatırlar — bunları Android'de uzak bölmenin başlığından, iOS'ta ise saat simgesinden açın. Sıralama ayarları her iki bölme için ana bilgisayar başına hatırlanır. Yerel yol geçmişi yoktur: Android'de yerel bölme, izin verdiğiniz klasördür; iOS'ta ise uygulamanın kendi belgeler alanıdır.

Dosya aktarım ekranı sisteminizin açık veya koyu temasını izler; böylece Mobile SSH'nin geri kalanıyla uyumlu görünür.

### Her oturum nerede açılır (Android)

Dosya Aktarımı'nı bir tmux oturumuna bağlı bir bölmeden açmak, uzak bölmeyi **o oturumun** en son çalıştığı yere geri götürür ve oturum adı bölme başlığında görünür. Daha önce açmadığınız bir oturum, o ana bilgisayarda en çok kullandığınız dizinlerden başlar, sonra ana bilgisayarın son dizini, sonra da ev dizininiz denenir.

Hatırlanan bir dizin o zamandan beri silinmişse uygulama, sizi bir hatayla baş başa bırakmak yerine gerçekten listelenen biri çıkana kadar bu listede aşağı iner — ve bozuk yolu geri yazmaz. iOS'ta ana bilgisayar başına tek bir uzak dizin hatırlanır.

## Depolama erişimi

Mobile SSH hiçbir platformda toptan depolama izni istemez.

Android'de sistemin klasör seçicisiyle **tek bir klasöre** izin verirsiniz ve indirilenler oraya yazılır — diğer tüm uygulamaların zaten okuyabildiği bir yere. Verilen izin uygulama açılışları arasında korunur.

iOS'ta yerel bölme uygulamanın belgeler alanıdır ve dosyalar sistemin belge ve fotoğraf seçicileri aracılığıyla gelir.

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

Yüklemeler ve indirmeler tek dosyalarla sınırlı değildir. Bir klasör seçin; Mobile SSH tüm alt ağacı her iki yönde kopyalar — telefondan uzağa ve uzaktan telefona — önce hedef dizinleri oluşturur, ardından her dosyayı sıraya alır. Okunamayan bir alt dizin kopyalamanın geri kalanını durdurmaz; Android'de "Can't list directory" yazan başarısız bir satır olarak bildirilir, iOS ise neyi atladığını listelemeden devam eder.

## Uzak dosya işlemleri

Seçili uzak öğeye bağlı olarak Mobile SSH şu işlemleri gösterebilir:

- İndir ya da Android'de **Copy to phone**.
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

Aktarımlar kuyruğa alınır ve duruma göre gösterilir; günlük her aktarımı gösterir ve kaydırılabilir — Android bunları Queued / Failed / Successful sekmelerine, iOS ise Active / Failed / Done sekmelerine ayırır. Başarısız aktarımlar, altta yatan SFTP işlemi bir neden sağladığında ilgili nedeni de gösterir. iOS'ta o an aktarılan dosya Active sekmesinin en üstünde kalır ve bir satır aktarım sürerken iptal edilebilir.

## Dosyaları uygulamadan dışarı çıkarma

- **Android:** indirilenler izin verdiğiniz klasöre iner, bu yüzden diğer tüm uygulamalar tarafından zaten görülebilirler. **Open in another app** her iki bölmede de vardır; uzak bir dosya önce indirilir, sonra devredilir.
- **iOS:** Mobile SSH, Dosyalar uygulamasında **iPhone'umda** altında görünür; böylece Telefonum bölmesindeki her şeye Mail'den, seçicilerden ve diğer uygulamalardan erişilebilir. İndirilen bir dosyaya uzun basıp **Open in another app** seçeneğini seçerek devredebilir, AirDrop ile gönderebilir veya başka bir yere kaydedebilirsiniz.

## Bir oturuma dosya gönderme (Android)

Android, başka herhangi bir uygulamadan kendisine paylaşılan dosyaları kabul eder: Mobile SSH'ye paylaşın; dosya, bölmenin ana bilgisayarındaki `~/.cache/mobile-ssh` dizinine yüklenir ve uzak yolu komut istemine yazılır, böylece hemen kullanabilirsiniz. Terminal araç çubuğundaki 📎 düğmesi aynısını sistem dosya seçicisinden yapar ve ikisi de aynı anda birden çok dosya kabul eder.

iOS'ta dosyaları ＋ düğmesiyle yerel bölmeye alın ve oradan yükleyin.

## Pratik ipuçları

- Hedefli dosya taşımaları için SFTP kullanın; büyük dizin eşitlemesi için sunucuda `rsync` gibi komut satırı araçlarını tercih edin.
- Yedeğiniz veya dağıtım geri alma yolunuz olmadıkça canlı üretim dosyalarını düzenlemekten kaçının.
- Yükledikten sonra bir dosya görünmüyorsa uzak bölmeyi yenileyin veya hedef yolu doğrulayın.
- Android'de yerel bölme boşsa **Pick folder** ile bir klasör seçin — uygulamanın erişimi yalnızca ona verdiğiniz klasörledir. iOS'ta ise dosyaları yerel bölmeye eklemek için bunun yerine seçicileri kullanın.
