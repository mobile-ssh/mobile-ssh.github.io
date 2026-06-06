---
layout: ../../../layouts/DocLayout.astro
title: "Sorun Giderme"
description: "Bağlantı, kimlik doğrulama, klavye, tmux, dosya aktarımı ve tünel sorunları için Mobile SSH sorun giderme kılavuzu."
---

# Sorun Giderme

Bu sayfa yaygın Mobile SSH sorunlarını ve sunucu tarafı SSH ayarlarını değiştirmeden önce yapılacak ilk denetimleri kapsar.

## Bağlanılamıyor

Denetleyin:

- Android cihazın ağ erişimi var.
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

Özel anahtar içe aktarma Android dosya seçiciyi kullanır. İçe aktarma başarısız olursa:

- Seçilen dosyanın genel bir `.pub` dosyası değil, özel anahtar olduğunu doğrulayın.
- Dosyayı güvenilir bir metin düzenleyicide açın ve tam anahtar bloğunu içerdiğini doğrulayın.
- Anahtarı özel anahtar alanına elle yapıştırmayı deneyin.
- Anahtar türünün uygulama tarafından desteklendiğini doğrulayın: Ed25519, RSA, ECDSA veya DSA.

## Klavye Girişi Gecikiyor veya Değişiyor

Android klavyeniz metni kabuğa ulaşmadan değiştiriyorsa Mobile SSH ayarlarında klavye önerilerini devre dışı bırakın. Bu; Vim, tmux, htop, less, alışılmadık tuş akorları kullanan kabuklar ve uzak parola istemleri için yararlıdır.

`ESC`, `TAB`, `CTRL`, oklar, `HOME`, `END`, `PGUP` ve `PGDN` gibi terminal tuşları için ek tuş satırını kullanın.

## tmux Kaydırması Beklediğiniz Gibi Değil

Mobile SSH kaydırma davranışını terminal durumuna göre değiştirir. tmux veya diğer alternatif ekran programlarında kaydırma hareketleri yerel geçmişi kaydırmak yerine tmux kopya modu komutları gönderebilir. tmux fare modu etkinse uygulama fare tekerleği kaçış dizileri gönderir.

Kaydırma yanlış geliyorsa:

- Uzak sunucuda tmux fare modunu etkinleştirmeyi veya devre dışı bırakmayı deneyin.
- Ek tuş satırındaki `PGUP` ve `PGDN`'yi kullanın.
- Yoğun çıktıyı kaydırmadan önce tam ekran için bölmeye çift dokunun.
- Uzak terminal boyutu eski görünüyorsa tmux'u ayırıp yeniden ekleyin.

## Ekran Kilidinden Sonra Oturum Düştü

Mobile SSH kesintileri azaltmak için keepalive, ön plan hizmeti, uyandırma kilidi, Wi-Fi kilidi ve yeniden bağlanma denemeleri kullanır. Android pil ilkeleri yine de arka plan işini durdurabilir.

Denetleyin:

- Cihazınız arka plan uygulamalarını agresif biçimde durduruyorsa Mobile SSH için pil iyileştirmesini devre dışı bırakın.
- Uzun oturumlar sırasında Wi-Fi veya mobil veriyi kararlı tutun.
- Kilidi açtıktan sonra Mobile SSH'yi yeniden açın ve **Active Sessions** seçeneğine dokunun.
- Sunucu SSH oturumunu kestiyse son oturumlardan yeniden bağlanın.

## Dosya Aktarımı Telefon Dosyalarını Tarayamıyor

Daha yeni Android sürümlerinde yerel dosya tarama depolama erişimi gerektirebilir. Mobile SSH için Android Ayarları'nda depolama erişimi verin, ardından dosya aktarım ekranını yeniden açın.

Uzak dosyalar yükleniyor ama yerel dosyalar yüklenmiyorsa SSH bağlantısı büyük olasılıkla iyidir ve sorun yerel Android depolama erişimindedir.

## Yükleme veya İndirme Başarısız

Denetleyin:

- SSH oturumu hâlâ bağlı.
- Uzak dizin var.
- Uzak kullanıcının yolu okuma veya yazma izni var.
- Yerel hedef yazılabilir.
- Android cihazda yeterli boş alan var.
- Büyük aktarımlar için ağ kararlı.

## Bağlantı Noktası Yönlendirme Başarısız

Denetleyin:

- Yerel bağlantı noktası `1` ile `65535` arasında.
- Yerel bağlantı noktası zaten kullanımda değil.
- Tünel dizesi `PORT` veya `LOCAL:REMOTEHOST:REMOTE`.
- Uzak ana bilgisayar ve uzak bağlantı noktası SSH sunucusundan erişilebilir.
- SSH sunucusu TCP yönlendirmeye izin veriyor.

## Hata Ayıklama Günlükleri

Başlangıç ekranında bir **Debug** düğmesi vardır. Etkinleştirildiğinde Mobile SSH; terminal olayları, SSH veri boyutları, dokunma girişi, yeniden boyutlandırma davranışı ve tünel yaşam döngüsü için tanılama bilgileri kaydeder. Bir hata ayıklama arşivini yerel olarak kaydetmek için kaydı durdurun.

Hata ayıklama arşivlerini paylaşmadan önce gözden geçirin. Bunlar sorun giderme amaçlıdır ve sunucu adlarını, zamanlamaları, terminal davranışını veya diğer ortam ayrıntılarını açığa çıkarabilir.
