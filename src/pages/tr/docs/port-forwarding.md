---
layout: ../../../layouts/DocLayout.astro
title: "Port yönlendirme"
description: "Android/iOS'ta SSH tünelleri ve atlama sunucuları; Android'de VPN, SOCKS5 proxy, yönlendirme ve DNS kurulumu."
---

# Port yönlendirme

Mobile SSH hem Android hem de iOS'ta yerel SSH port yönlendirmeyi destekler. Cihazdaki yerel bir port `127.0.0.1` üzerinde dinler ve trafiği SSH bağlantısı aracılığıyla uzak bir ana bilgisayara ve porta yönlendirir.

Android'de SSH VPN, yerel SOCKS5 proxy, WireGuard, Shadowsocks ve OpenVPN için ayrıca **VPN** sayfası vardır. Bu profiller aşağıdaki yerel yönlendirmelerden ayrıdır.

## Kayıtlı tünel söz dizimi

Port yönlendirme kuralları virgülle ayrılır. Her girdi iki biçimden birini kullanır:

```text
PORT
LOCAL:REMOTEHOST:REMOTE
```

Kısa biçim:

```text
8080
```

Bu, cihazda `127.0.0.1:8080`'i bağlar ve sunucunun bakış açısından `localhost:8080`'e yönlendirir.

Tam biçim:

```text
3000:localhost:3000
```

Bu, cihazda `127.0.0.1:3000`'i bağlar ve SSH aracılığıyla uzak taraftaki `localhost:3000`'e yönlendirir.

Birden çok yönlendirme:

```text
8080, 3000:localhost:3000, 15432:db.internal:5432
```

## Kayıtlı bir sunucuya tünel ekleme

1. **Saved Servers**'ı açın.
2. Bir sunucu profili ekleyin veya düzenleyin.
3. Yönlendirme kurallarını **Port forwards** alanına girin.
4. Sunucuyu kaydedin.
5. Sunucuya bağlanın.

Uygulama, kaydedilen yönlendirmeleri SSH oturumu bağlandıktan sonra uygular.

## Tüneller sunucu profiline aittir

Yerel yönlendirmeler sunucu profiline kaydedilir ve bağlantıyla başlar. Değiştirmek için profili düzenleyip yeniden bağlanın.

Kayıtlı tünel yeni ağda yeniden bağlantı dahil her bağlantıda geri gelir.

## IPv6 hedefleri

Bir IPv6 hedefi, iki nokta üst üste işaretlerinin port ayırıcısıyla karıştırılmaması için köşeli parantez içine alınmalıdır:

```text
8080:[2001:db8::1]:80
```

Köşeli parantezsiz, çıplak bir IPv6 adresi sessizce yanlış okunmak yerine belirsiz sayılarak reddedilir. Aynı köşeli parantez biçimi, sunucunun adres alanında da çalışır ve ardına isteğe bağlı bir port eklenebilir (`[fe80::1]:22`).

## Adres bağlama

Mobile SSH yerel yönlendirmeleri cihazdaki `127.0.0.1`'e bağlar. Bu kasıtlıdır: tüneli cihaza yerel tutar ve yalnızca IPv6 geri döngü sürprizlerinden kaçınır. İşletim sistemi ağ erişimine izin verirse aynı cihazdaki diğer uygulamalar yönlendirilen yerel porta bağlanabilir.

## Yaygın örnekler

Uzak sunucuda çalışan bir web hizmetine erişim:

```text
8080
```

Ardından aynı cihazdaki bir tarayıcıdan `http://127.0.0.1:8080` adresini açın.

Bir geliştirme sunucusuna erişim:

```text
3000:localhost:3000
```

SSH sunucusundan erişilebilen bir iç veritabanına erişim:

```text
15432:db.internal:5432
```

## Atlama sunucuları üzerinden bağlantı

İki platformda SSH sunucusu sıralı kayıtlı bastion listesinden bağlanabilir. Hedefi düzenleyip **Şunun üzerinden bağlan** altında ekleyin ve sıralayın. Her atlama kendi kimlik bilgilerini kullanır; genişletilmiş rota en fazla sekiz atlama içerir.

Telefon ilk bastiona ulaşır; sonraki her adres öncekinden erişilebilir olmalıdır. Yerel yönlendirme, terminal ve SFTP aynı doğrulanmış SSH yolunu izler. Yönlendirme hedefi son SSH sunucusundan erişilir. Her bastion TCP yönlendirmesine izin vermeli, her kimlik girişten önce doğrulanmalıdır. Bu yollar SSH gerektirir, Eternal Terminal için geçerli değildir.

## Android'de VPN yönlendirmesi

Ana ekrandan **VPN** açıp adlandırılmış profil ekleyin veya aktarın, **Başlat** simgesine dokunun. Android VPN isteğini onaylayın. Etkinken simge **Yönlendirmeyi durdur** olur; kalem düzenler, çöp kutusu siler. Sık kullanılan türler önce gelir.

Android aynı anda bir cihaz VPN'ine izin verir. Başka profil önceki VPN'i değiştirir. Yerel SSH SOCKS5 proxy, SSH olmayan VPN içinden sürebilir. Tailscale kendi uygulamasını kullanır; Mobile SSH VPN başlatmak onu değiştirir. IKEv2/IPsec Mobile SSH'ta değil Android VPN ayarlarında yönetilir.

### SSH VPN ve SOCKS5 proxy

- **SSH VPN:** kimlik bilgileri ve atlamalarıyla kayıtlı sunucu, tüm veya seçili uygulamalar/siteler seçin. Sunucu TCP yönlendirmesi ister, VPN yardımcısı gerekmez. SSH, TCP ve uzak DNS taşır; diğer SSH yönlü UDP engellenir, böylece tarayıcı QUIC'ten TCP'ye geçebilir.
- **SOCKS5 proxy:** ayrı düzenleyicide sunucu seçip her uygulamayı yerel proxy ve uzak DNS ile ayarlayın. Varsayılan `127.0.0.1:1080` ve üretilmiş paroladır. **Kimlik bilgileriyle proxy URL'sini kopyala** uyumlu istemciye `socks5h://` verir. Tailscale dahil mevcut VPN kullanılabilir. Aynı anda yalnızca bir SSH VPN veya SSH SOCKS5 profili çalışır.

`example.org` gibi alanlar alt alanlarını da kapsar. Tanınan listelenmemiş alanlar normal ağı kullanır. Doğrudan IP veya şifreli DNS adresleri güvenilir eşleşmediği için SSH kullanır. SSH VPN, uygulama ve site seçimini birlikte uygular; SOCKS5 istemcileri kendi ayarlarıyla seçilir.

Uzak DNS varsayılan `1.1.1.1:53` kullanır; SSH sunucusundan erişilen sayısal çözümleyici girin. Yeniden bağlantı veya giriş beklerken SSH trafiği engellenir, bilinen istisna hedefler normal sürer. Durdurma, profil değiştirme, izin iptali veya uygulamanın sonlanması korumayı bitirir. Sürekli açık VPN veya Android kilitlemesi garantisi yoktur.

### WireGuard, Shadowsocks ve OpenVPN

- **WireGuard:** standart `.conf` içe aktarın veya yapıştırın. `AllowedIPs` yolları, `DNS` çözümleyiciyi belirler. Eş el sıkışmasını ve sayaçları kontrol edin; etkin arayüz erişilebilirliği kanıtlamaz.
- **Shadowsocks:** `ss://` aktarın veya sunucu, port, parola, şifreleme ve DNS girin. AES-128-GCM, AES-256-GCM, ChaCha20-Poly1305 desteklenir. TCP/UDP tüneli kullanır; UDP ve DNS için sunucu UDP aktarımı gerekir. Eklenti gerektiren bağlantı ve AEAD-2022 desteklenmez.
- **OpenVPN:** gömülü sertifika ve anahtarlı bağımsız `.ovpn` aktarın. Kullanıcı/parola ve şifreli özel anahtar parolası desteklenir. Sunucu sertifikası doğrulanmalıdır. Rota/DNS profil ve sunucudan gelir; tam tünel VPN DNS ister. Dış dosya, betik, eklenti, TAP ve etkileşimli doğrulama desteklenmez.

Uygulama bu protokol motorlarını içerir. Shadowsocks ve OpenVPN, SSH VPN'in uygulama/site seçicilerini sunmaz. VPN, sağlayıcının veya yöneticinin sunucuya kısıtladığı internet erişimini vermez.

### Hızlı Ayarlar kutucuğu

**Mobile SSH VPN** kutucuğuna seçmek için bir VPN profilini bir kez başlatın. Kutucuk bağlantı ve yeniden bağlantı dahil etkinken vurgulanır. Dokunarak durdurun, tekrar dokunarak hatırlanan profili başlatın. SOCKS5 başlatmaz veya başka uygulamanın VPN'ini durdurmaz.

Android 13 ve sonrasında VPN'i ilk açış kutucuk ekleme izni ister. Reddederseniz veya eski Android'de **Hızlı Ayarlar → Düzenle** kullanın. Silinmiş profil veya eksik izin VPN kurulum sayfasını açar.

## Tünel sorun giderme

- SSH oturumunun bağlı olduğundan emin olun — yönlendirmeler oturumdan sonra açılır.
- Yerel portun zaten kullanımda olmadığını kontrol edin.
- Uzak ana bilgisayarın ve portun SSH sunucusundan erişilebilir olduğunu kontrol edin.
- Hedef hizmet SSH sunucusunun kendisinde olduğunda `localhost` kullanın.
- SSH sunucusunun arkasındaki başka bir ana bilgisayara yönlendirirken sunucunun iç DNS adını veya IP adresini kullanın.
- Atlama yollarında her adımın kimlik bilgisi, kimliği ve TCP iznini kontrol edin.
- VPN için sunucu/yapılandırma, DNS, Android izni ve diğer VPN'leri kontrol edin. Protokol ayrıntıları için [sorun giderme kılavuzuna](../troubleshooting/) bakın.
