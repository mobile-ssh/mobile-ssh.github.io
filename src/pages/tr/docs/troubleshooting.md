---
layout: ../../../layouts/DocLayout.astro
title: "Sorun giderme"
description: "Mobile SSH bağlantı, kimlik, güvenlik anahtarı, terminal, dosya, VPN, yedek ve uzak masaüstü sorunlarını çözün."
---

# Sorun giderme

Bu sayfa yaygın Mobile SSH sorunlarını ve sunucu tarafı SSH ayarlarını değiştirmeden önce yapılacak ilk kontrolleri kapsar.

## Bağlanılamıyor

Şunları kontrol edin:

- Cihazın ağ erişimi var.
- Sunucunun ana bilgisayar adı veya IP adresi doğru.
- SSH portu doğru, genellikle `22`.
- Bir güvenlik duvarı, VPN, operatör ağı veya Wi-Fi ağı portu engellemiyor.
- SSH sunucusu çalışıyor ve kullandığınız ağdan gelen bağlantıları kabul ediyor.

Aynı sunucu başka bir cihazdan çalışıyorsa tam olarak ana bilgisayarı, portu, kullanıcı adını, anahtarı ve ağ yolunu karşılaştırın.

## Sunucu kimliği dikkat gerektiriyor

İki platform kimlik bilgisi göndermeden SSH kimliğini kontrol eder. iOS'ta yeni anahtar parmak izi onayı ve **Güven ve yeniden bağlan** ister. Android'de **Ayarlar → Genel → Güvenlik → Yeni SSH kimliklerini otomatik kabul et** varsayılan açıktır: ilk ham anahtar kaydedilir, sonrakiler eşleşmelidir. Bağlanmadan yeni izi incelemek için kapatın.

Yeni veya değişen SHA-256 izini yöneticinizle güvenilir kanaldan karşılaştırın. Değişim yenilenmiş veya beklenmedik sunucu olabilir; nedenini doğrulamadan eski kimliği silmeyin. Ayarlar'da kimlikleri inceleyin. Alternatif adresler ve bastionlar doğrulamayı atlamaz.

Android kapsamı belirlenmiş host sertifika yetkililerini ve iptal kayıtlarını da destekler. Bilinmeyen yetkililer, süresi dolmuş veya geçersiz sertifikalar ve iptal edilmiş anahtarlar, ilk kullanımda otomatik kabul açıkken bile engellenir. iOS'ta **Ayarlar → Sunucu kimlikleri → İptal edilmiş anahtarları içe aktar**, kapsamı belirlenmiş OpenSSH `@revoked` Ed25519/ECDSA girdilerini kabul eder. Desteklenmeyen girdiler içeren yapıştırılmış metnin tamamı reddedilir; CA girdileri, sertifikalar, RSA anahtarları ve hash uygulanmış host adları desteklenmez. İptaller yeni bağlantılarda ve yeniden bağlanmalarda önceki güveni geçersiz kılar, ancak mevcut bağlantıları kapatmaz. Kimlikler ve iptal kayıtları yedeklere dahil edilmez. iOS'ta paylaşım uzantısından yüklemeden önce bilinmeyen sunucuyu ana uygulamada doğrulayın.

## Atlama sunucusundan bağlanılamıyor

Her bastionun adresini ve kimlik bilgilerini, telefonun ilkine erişimini kontrol edin. Sonrakiler öncekinden erişilebilir olmalıdır. Bastionlar `permitopen` sınırları dahil TCP yönlendirmesini açmalıdır. Rota SSH olmalı, döngü içermemeli ve sekiz genişletilmiş atlamayı aşmamalıdır.

Silinmiş veya çözümlenemeyen bastion doğrudan bağlantıya dönüşmez. Rotayı düzeltip yeniden bağlanın. Android durumu ve giriş günlüğü hatalı atlamayı son sunucudan ayırır.

## Kimlik doğrulama başarısız

Şunları kontrol edin:

- Kullanıcı adının yazımı.
- Parola veya anahtar parola tümcesi.
- Sunucunun parolayla, anahtarla ya da her ikisiyle oturum açmaya izin verip vermediği.
- Özel anahtarın sunucu kullanıcısının `authorized_keys` dosyasındaki bir genel anahtarla eşleşip eşleşmediği.
- Anahtar dosyasının başlık ve altbilgi satırları dahil tam olarak içe aktarılıp aktarılmadığı.

Şifreli özel anahtarlar için parola/parola tümcesi alanına parola tümcesini girin.

Android'de uzak `ssh`/`git` için profilde **SSH ajanını yönlendir** ve sunucu izni gerekir. Yalnızca kullanılabilir kayıtlı anahtarlar sunulur. İzin ver/Reddet veya fiziksel anahtar isteği terminal, aktarım ve tünelleri 30 saniyeye kadar duraklatabilir; uygulamadan veya bildirimden yanıtlayın.

## Özel anahtar içe aktarma başarısız

Özel anahtar içe aktarma sistem dosya seçicisini kullanır. İçe aktarma başarısız olursa:

- Seçilen dosyanın genel bir `.pub` dosyası değil, özel anahtar olduğunu doğrulayın.
- Dosyayı güvenilir bir metin düzenleyicide açın ve tam anahtar bloğunu içerdiğini doğrulayın.
- Anahtarı özel anahtar alanına elle yapıştırmayı deneyin.
- Anahtar türünün desteklendiğini doğrulayın: Android'de Ed25519, ECDSA (P-256/384/521) veya RSA; iOS'ta Ed25519 veya ECDSA. DSA (`ssh-dss`) hiçbirinde çalışmaz ve iOS RSA'yı desteklemez — bunun yerine bir Ed25519 anahtarı oluşturun.

## Android'de güvenlik anahtarı yanıt vermiyor

Android, USB/NFC ile CTAP2/FIDO2 `ed25519-sk` ve `ecdsa-sk` destekler. İçe aktarılan dosyayı oluşturan fiziksel anahtarı kullanın. USB host desteği ve izin ister; NFC açık olmalı, işlem bitene kadar anahtar telefonda tutulmalıdır. İstenirse PIN girip anahtara dokunun.

Sunucu, seçilen `sk-*` algoritmasına izin veren OpenSSH 8.2+ ister. Yalnız U2F ve yerleşik kimlik keşfi desteklenmez. Anahtarı ararken giriş süresi dolabilir; önceden hazırlayın. Arka plan istekleri için bildirimi açın veya uygulamaya dönün. iOS donanım anahtarıyla girişi desteklemez.

## Klavye girişi gecikiyor veya değişiyor

Android girişleri düzeltme/tahmin olmadan doğrudan gönderir. iOS'ta **Dikte ve öneriler** ses ve satır düzeltmeleri için varsayılan açıktır. Beklenmedik değiştirirse kapatın, **Klavye önerileri** ayarını inceleyip yeni bölme açın.

`ESC`, `TAB`, `CTRL`, oklar, `HOME`, `END`, `PGUP`, `PGDN` için ek sırayı kullanın. Takılan ağ da girişi geciktirir. Android başlığı **yanıt yok** veya **gönderilmedi** gösterir; yeniden bağlanırken yazılanlar yeni kabukta tekrarlanmaz, atılır. Bağlantıyı bekleyin, komut satırını kontrol edin, yalnız gerekeni yeniden yazın.

## tmux kaydırması beklediğiniz gibi değil

Mobile SSH kaydırma davranışını terminal durumuna göre değiştirir. tmux veya diğer alternatif ekran programlarında kaydırma hareketleri yerel geri kaydırma arabelleğini kaydırmak yerine tmux kopya modu komutları gönderebilir. tmux fare modu etkinse uygulama fare tekerleği kaçış dizileri gönderir.

Kaydırma yanlış geliyorsa:

- Uzak sunucuda tmux fare modunu etkinleştirmeyi veya devre dışı bırakmayı deneyin.
- Ek tuş satırındaki `PGUP` ve `PGDN`'yi kullanın.
- Yoğun çıktıyı kaydırmadan önce tam ekran için bölmeye çift dokunun.
- Uzak terminal boyutu eski görünüyorsa tmux'u ayırıp yeniden ekleyin.

Android'de standart gösterge görünüyorsa en alta kaydırmak uygulamanın tmux kopyalama modundan çıkar. Gösterge olmayan özel/bölünmüş düzenlerde elle çıkış gerekebilir. Oturum değiştirirken sunucu, tmux soketi ve oturum adını kontrol edin.

## Ekran kilidinden sonra oturum düştü

Android'de Mobile SSH kesintileri azaltmak için keepalive, ön plan servisi, wake lock, Wi-Fi lock ve yeniden bağlanma denemeleri kullanır. Android pil ilkeleri yine de arka plan işini durdurabilir.

Şunları kontrol edin:

- Cihazınız arka plan uygulamalarını agresif biçimde durduruyorsa Mobile SSH için pil iyileştirmesini devre dışı bırakın.
- Uzun oturumlar sırasında Wi-Fi veya mobil veriyi kararlı tutun.
- Kilidi açtıktan sonra Mobile SSH'yi yeniden açın ve **Active Sessions** seçeneğine dokunun.
- Uygulamayı kaydırıp kapattıktan sonra kabukların hayatta kalmasını istiyorsanız Ayarlar'da **Keep sessions running in background** seçeneğinin açık olduğunu kontrol edin.
- Sunucu SSH oturumunu kestiyse ana ekrandan yeniden bağlanın — **Continue** hâlâ canlı olanları, **Tmux sessions** ise sunucuda bekleyenleri listeler.

iOS arka plan uygulamalarını askıya alır; uygulama değiştirince veya kilitlenince SSH süresiz açık kalmaz. Hızlı geçişlere kısa süre tanınır. Devam etmek için **Bağlanınca ekle** seçeneğinde tmux, Herdr, Zellij veya **Eternal Terminal** kullanın. Çoklayıcı sunucuda çalışmalıdır; Eternal Terminal bastion yolu kullanamaz.

## Dosya aktarımı telefon dosyalarını tarayamıyor

Mobile SSH, Android'de hiçbir depolama izni istemez. Bunun yerine yerel bölme, sistemin klasör seçicisiyle izin verdiğiniz tek bir klasörü gösterir — boşsa **Pick folder** ile bir klasör seçin. Verilen izin kalıcıdır, yani bu tek seferlik bir adımdır.

Uzak dosyalar yükleniyor ama yerel dosyalar yüklenmiyorsa SSH bağlantısı sorunsuzdur; yalnızca henüz izin verilmiş bir klasörünüz yoktur.

iOS yerel bölmesi uygulamanın Documents alanında başlar. **Telefonum → Yerel klasör seç** başka Dosyalar klasörünü hatırlar. Sağlayıcı/izin yoksa yeniden seçin veya uygulama klasörüne dönün. Uygulama indirmeleri **iPhone'umda**, dış dosyalar sağlayıcı konumunda kalır. Klasör izinleri yedekle taşınmaz.

## Yükleme veya indirme başarısız

Şunları kontrol edin:

- SSH oturumu hâlâ bağlı.
- Uzak dizin var.
- Uzak kullanıcının yolu okuma veya yazma izni var.
- Yerel hedef yazılabilir.
- Cihazda yeterli boş alan var.
- Büyük aktarımlar için ağ kararlı.

## Port yönlendirme başarısız

Şunları kontrol edin:

- Yerel port `1` ile `65535` arasında.
- Yerel port zaten kullanımda değil.
- Tünel dizesi `PORT` veya `LOCAL:REMOTEHOST:REMOTE`.
- Uzak ana bilgisayar ve uzak port SSH sunucusundan erişilebilir.
- SSH sunucusu TCP yönlendirmeye izin veriyor.

## Android'de VPN veya proxy trafik taşımıyor

- **VPN** profilini başlatıp Android'e izin verin. Cihaz VPN'i öncekini değiştirir; diğeri kalmalıysa yerel SOCKS5 kullanın.
- SSH VPN'de sunucu, bastion, kimlik, TCP izni ve uygulama/site seçimini kontrol edin. TCP/DNS taşır, genel UDP değil.
- SOCKS5 istemcisinde yerel adres, port, parola ve uzak DNS ayarlayın. Proxy tüm uygulamaları otomatik yönlendirmez.
- WireGuard'da el sıkışma, anahtar, `AllowedIPs`, DNS; Shadowsocks'ta şifreleme/parola ve DNS için UDP aktarımını kontrol edin.
- OpenVPN'de desteklenen bağımsız profil kullanın, CA/kimlik ve giriş bilgilerini doğrulayın, tam tünel için VPN DNS sağlayın. Giriş/sertifika hatalarını düzeltip profili yeniden başlatın.

SSH VPN, Shadowsocks ve OpenVPN yeniden bağlantıda doğrudana dönmek yerine yakalanan trafiği engelleyebilir. Durdurma korumayı bitirir. VPN, sunucu sağlayıcısı veya yöneticisinin internet kısıtlamasını aşmaz.

## Yedek her şeyi geri yüklemedi

Önizlemeyi ve **Birleştir** veya **Değiştir** seçimini inceleyin. Eski/kısmi yedekte eksik bölümler değişmez. Tam yedekler uyumlu ayarları, Android ayrıca VPN/proxy profillerini içerir. Her platform verisi iOS'a taşınmaz; eski sürüm yeni tam biçimi reddedebilir.

Host kimliği, sistem izni ve klasör erişimi cihazda kalır. Yeni cihazda hostları doğrulayıp klasör/VPN izni verin. Donanım kimliği fiziksel anahtar ister. İçe aktarma VPN başlatmaz; profilleri önce inceleyin.

## Uzak masaüstü yok veya boyutlandırılamıyor

Bağlı SSH oturumundan açıp yerel TCP yönlendirme iznini kontrol edin. Linux'ta eksik paket mesajına göre masaüstü/VNC kurun. Android Wayland konsolu yansıtmaz; uyumlu sanal masaüstü kullanın.

macOS'ta Mac ayarlarından Ekran Paylaşımı'nı açın. Android Mac hesabıyla kimlik doğrulamayı destekler; iOS ise Ekran Paylaşımı'nda klasik VNC parolası erişiminin açılmasını gerektirir ve Mac hesabı parolası yerine ekran paylaşımı parolasını kullanır. Görüntüleyici Mac'in mevcut ekranını gösterir. Çözünürlüğü Mac'ten değiştirmeniz gerekebilir. Sanal masaüstü yalnızca sunucusu destekliyorsa çalışırken boyutlandırılabilir; uygulamanın oluşturduğu masaüstünü yeniden başlatmak onay ister ve çalışan programlarını kapatır. Görüntüleyiciden çıkmak uzak masaüstünü çalışır bırakır.

## Hata ayıklama günlükleri

İki platform farklı şeyler kaydeder, bu yüzden sorununuza uyanı seçin.

**Android — terminal ve çizim.** **Settings → Debugging → Show Debug and Logs buttons** seçeneğini etkinleştirin, ardından başlangıç ekranında beliren **Debug** düğmesini kullanın. Terminal olaylarını, SSH veri boyutlarını, dokunma girişini, yeniden boyutlandırma davranışını ve tünel yaşam döngüsünü kaydeder. Bir kayda başlamak, sizi önce parolalar dahil yazdığınız her tuşun yakalandığı konusunda uyarır. Kaydı durdurmak İndirilenler klasörünüze bir arşiv yazar.

**iOS — bağlantılar ve yeniden bağlanmalar.** **Settings → Diagnostics → Record debug log** seçeneğini açın. Bağlanmayı denediği her adresi ve neden başarısız olduğunu, yeniden bağlanma denemelerini ve bekleme sürelerini, düşen bağlantıları, "peer stopped answering keepalives" durumunu, ağ değişikliklerini ve tmux komutlarını hatalarıyla birlikte kaydeder. Ayarlar, kaydın sürdüğünü doğrulayabilmeniz için canlı bir satır sayısı gösterir ve **Export Debug Log** günlüğü metin dosyası olarak paylaşır. Günlük bellekte tutulur ve yalnızca geçerli uygulama oturumunu kapsar.

Herhangi bir hata ayıklama günlüğünü veya arşivini paylaşmadan önce gözden geçirin. Bunlar sorun giderme amaçlıdır ve sunucu adlarını, adresleri, zamanlamaları veya diğer ortam ayrıntılarını — Android'de ise yazdığınız her şeyi — açığa çıkarabilir.
