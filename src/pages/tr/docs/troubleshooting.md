---
layout: ../../../layouts/DocLayout.astro
title: "Sorun Giderme"
description: "Bağlantı, kimlik doğrulama, klavye, tmux, dosya aktarımı ve tünel sorunları için Mobile SSH sorun giderme kılavuzu."
---

# Sorun Giderme

Bu sayfa yaygın Mobile SSH sorunlarını ve sunucu tarafı SSH ayarlarını değiştirmeden önce yapılacak ilk denetimleri kapsar.

## Bağlanılamıyor

Denetleyin:

- Cihazın ağ erişimi var.
- Sunucunun ana bilgisayar adı veya IP adresi doğru.
- SSH bağlantı noktası doğru, genellikle `22`.
- Bir güvenlik duvarı, VPN, operatör ağı veya Wi-Fi ağı bağlantı noktasını engellemiyor.
- SSH sunucusu çalışıyor ve kullandığınız ağdan gelen bağlantıları kabul ediyor.

Aynı sunucu başka bir cihazdan çalışıyorsa tam olarak ana bilgisayarı, bağlantı noktasını, kullanıcı adını, anahtarı ve ağ yolunu karşılaştırın.

## Kimlik Doğrulama Başarısız

Denetleyin:

- Kullanıcı adının yazımı.
- Parola veya anahtar parola tümcesi.
- Sunucunun parolayla, anahtarla ya da her ikisiyle oturum açmaya izin verip vermediği.
- Özel anahtarın sunucu kullanıcısının `authorized_keys` dosyasındaki bir genel anahtarla eşleşip eşleşmediği.
- Anahtar dosyasının başlık ve altbilgi satırları dahil tam olarak içe aktarılıp aktarılmadığı.

Şifreli özel anahtarlar için parola/parola tümcesi alanına parola tümcesini girin.

## Özel Anahtar İçe Aktarma Başarısız

Özel anahtar içe aktarma sistem dosya seçicisini kullanır. İçe aktarma başarısız olursa:

- Seçilen dosyanın genel bir `.pub` dosyası değil, özel anahtar olduğunu doğrulayın.
- Dosyayı güvenilir bir metin düzenleyicide açın ve tam anahtar bloğunu içerdiğini doğrulayın.
- Anahtarı özel anahtar alanına elle yapıştırmayı deneyin.
- Anahtar türünün desteklendiğini doğrulayın: Android'de Ed25519, ECDSA (P-256/384/521) veya RSA; iOS'ta Ed25519 veya ECDSA. DSA (`ssh-dss`) hiçbirinde çalışmaz ve iOS RSA'yı desteklemez — bunun yerine bir Ed25519 anahtarı oluşturun.

## Klavye Girişi Gecikiyor veya Değişiyor

Mobile SSH tuş vuruşlarını, otomatik düzeltme ve tahmine dayalı öneriler kapalı olarak doğrudan kabuğa gönderir; bu yüzden klavye, metni uzak tarafa ulaşmadan önce yeniden yazmamalıdır (devre dışı bırakılacak bir öneri ayarı yoktur). Klavyeniz girişi yine de değiştiriyorsa, sistem düzeyinde bir değiştirme veya pano aracının araya girmediğinden emin olun ve `ESC`, `TAB`, `CTRL`, oklar, `HOME`, `END`, `PGUP` ve `PGDN` gibi terminal tuşları için ek tuş satırını kullanın.

## tmux Kaydırması Beklediğiniz Gibi Değil

Mobile SSH kaydırma davranışını terminal durumuna göre değiştirir. tmux veya diğer alternatif ekran programlarında kaydırma hareketleri yerel geçmişi kaydırmak yerine tmux kopya modu komutları gönderebilir. tmux fare modu etkinse uygulama fare tekerleği kaçış dizileri gönderir.

Kaydırma yanlış geliyorsa:

- Uzak sunucuda tmux fare modunu etkinleştirmeyi veya devre dışı bırakmayı deneyin.
- Ek tuş satırındaki `PGUP` ve `PGDN`'yi kullanın.
- Yoğun çıktıyı kaydırmadan önce tam ekran için bölmeye çift dokunun.
- Uzak terminal boyutu eski görünüyorsa tmux'u ayırıp yeniden ekleyin.

## Ekran Kilidinden Sonra Oturum Düştü

Android'de Mobile SSH kesintileri azaltmak için keepalive, ön plan hizmeti, uyandırma kilidi, Wi-Fi kilidi ve yeniden bağlanma denemeleri kullanır. Android pil ilkeleri yine de arka plan işini durdurabilir.

Denetleyin:

- Cihazınız arka plan uygulamalarını agresif biçimde durduruyorsa Mobile SSH için pil iyileştirmesini devre dışı bırakın.
- Uzun oturumlar sırasında Wi-Fi veya mobil veriyi kararlı tutun.
- Kilidi açtıktan sonra Mobile SSH'yi yeniden açın ve **Active Sessions** seçeneğine dokunun.
- Uygulamayı kaydırıp kapattıktan sonra kabukların hayatta kalmasını istiyorsanız Ayarlar'da **Keep sessions running in background** seçeneğinin açık olduğunu denetleyin.
- Sunucu SSH oturumunu kestiyse ana ekrandan yeniden bağlanın — **Continue** hâlâ canlı olanları, **Tmux sessions** ise sunucuda bekleyenleri listeler.

iOS'ta sistem, arka plandaki uygulamaları askıya alır; bu yüzden başka bir uygulamaya geçtiğinizde veya ekranı kilitlediğinizde ham bir SSH bağlantısı süresiz açık tutulamaz. Kısa bir ek süre hızlı uygulama geçişlerini karşılar; daha uzun süreler için sunucu profilinde **Auto-attach tmux session** seçeneğini etkinleştirin (veya **Eternal Terminal** aktarımını kullanın); böylece yeniden bağlandığınızda kaldığınız kabuğa geri dönersiniz.

## Dosya Aktarımı Telefon Dosyalarını Tarayamıyor

Mobile SSH, Android'de hiçbir depolama izni istemez. Bunun yerine yerel bölme, sistemin klasör seçicisiyle izin verdiğiniz tek bir klasörü gösterir — boşsa **Pick folder** ile bir klasör seçin. Verilen izin kalıcıdır, yani bu tek seferlik bir adımdır.

Uzak dosyalar yükleniyor ama yerel dosyalar yüklenmiyorsa SSH bağlantısı sorunsuzdur; yalnızca henüz izin verilmiş bir klasörünüz yoktur.

iOS'ta yerel bölme uygulamanın belgeler alanını gösterir ve dosyaları sistemin belge ve fotoğraf seçicileri aracılığıyla eklersiniz. Oradaki indirilenler ayrıca Dosyalar uygulamasında **iPhone'umda** altında görünür.

## Yükleme veya İndirme Başarısız

Denetleyin:

- SSH oturumu hâlâ bağlı.
- Uzak dizin var.
- Uzak kullanıcının yolu okuma veya yazma izni var.
- Yerel hedef yazılabilir.
- Cihazda yeterli boş alan var.
- Büyük aktarımlar için ağ kararlı.

## Bağlantı Noktası Yönlendirme Başarısız

Denetleyin:

- Yerel bağlantı noktası `1` ile `65535` arasında.
- Yerel bağlantı noktası zaten kullanımda değil.
- Tünel dizesi `PORT` veya `LOCAL:REMOTEHOST:REMOTE`.
- Uzak ana bilgisayar ve uzak bağlantı noktası SSH sunucusundan erişilebilir.
- SSH sunucusu TCP yönlendirmeye izin veriyor.

## Hata Ayıklama Günlükleri

İki platform farklı şeyler kaydeder, bu yüzden sorununuza uyanı seçin.

**Android — terminal ve çizim.** **Settings → Debugging → Show Debug and Logs buttons** seçeneğini etkinleştirin, ardından başlangıç ekranında beliren **Debug** düğmesini kullanın. Terminal olaylarını, SSH veri boyutlarını, dokunma girişini, yeniden boyutlandırma davranışını ve tünel yaşam döngüsünü kaydeder. Bir kayda başlamak, sizi önce parolalar dahil yazdığınız her tuşun yakalandığı konusunda uyarır. Kaydı durdurmak İndirilenler klasörünüze bir arşiv yazar.

**iOS — bağlantılar ve yeniden bağlanmalar.** **Settings → Diagnostics → Record debug log** seçeneğini açın. Bağlanmayı denediği her adresi ve neden başarısız olduğunu, yeniden bağlanma denemelerini ve bekleme sürelerini, düşen bağlantıları, "peer stopped answering keepalives" durumunu, ağ değişikliklerini ve tmux komutlarını hatalarıyla birlikte kaydeder. Ayarlar, kaydın sürdüğünü doğrulayabilmeniz için canlı bir satır sayısı gösterir ve **Export Debug Log** günlüğü metin dosyası olarak paylaşır. Günlük bellekte tutulur ve yalnızca geçerli uygulama oturumunu kapsar.

Herhangi bir hata ayıklama günlüğünü veya arşivini paylaşmadan önce gözden geçirin. Bunlar sorun giderme amaçlıdır ve sunucu adlarını, adresleri, zamanlamaları veya diğer ortam ayrıntılarını — Android'de ise yazdığınız her şeyi — açığa çıkarabilir.
