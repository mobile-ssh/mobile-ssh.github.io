---
layout: ../../../layouts/DocLayout.astro
title: "Bağlantı noktası yönlendirme"
description: "Mobile SSH yerel bağlantı noktası yönlendirme söz dizimi, IPv6 hedefleri ve kaydedilen tünellerin Android ile iOS'ta nasıl açıldığı."
---

# Bağlantı noktası yönlendirme

Mobile SSH hem Android hem de iOS'ta yerel SSH bağlantı noktası yönlendirmeyi destekler. Cihazdaki yerel bir bağlantı noktası `127.0.0.1` üzerinde dinler ve trafiği SSH bağlantısı aracılığıyla uzak bir ana bilgisayara ve bağlantı noktasına yönlendirir.

## Kayıtlı tünel söz dizimi

Bağlantı noktası yönlendirme kuralları virgülle ayrılır. Her girdi iki biçimden birini kullanır:

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

Yönlendirmeler kaydedilen sunucuda tanımlanır ve o sunucuya bağlanıldığında açılır. Hiçbir platformda oturum ortasında tünel eklemek ya da kaldırmak için ayrı bir ekran yoktur: yönlendirmelerinizi değiştirmek için sunucu profilini düzenleyin ve yeniden bağlanın.

Bu bilinçli bir ödünleşimdir — profilde yaşayan bir tünel, siz elle yeniden kurmadan her bağlanışınızda geri gelir; yeni bir ağda yeniden bağlandıktan sonra bile.

## IPv6 hedefleri

Bir IPv6 hedefi, iki nokta üst üste işaretlerinin bağlantı noktası ayırıcısıyla karıştırılmaması için köşeli parantez içine alınmalıdır:

```text
8080:[2001:db8::1]:80
```

Köşeli parantezsiz, çıplak bir IPv6 adresi sessizce yanlış okunmak yerine belirsiz sayılarak reddedilir. Aynı köşeli parantez biçimi, sunucunun adres alanında da çalışır ve ardına isteğe bağlı bir bağlantı noktası eklenebilir (`[fe80::1]:22`).

## Adres bağlama

Mobile SSH yerel yönlendirmeleri cihazdaki `127.0.0.1`'e bağlar. Bu kasıtlıdır: tüneli cihaza yerel tutar ve yalnızca IPv6 geri döngü sürprizlerinden kaçınır. İşletim sistemi ağ erişimine izin verirse aynı cihazdaki diğer uygulamalar yönlendirilen yerel bağlantı noktasına bağlanabilir.

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

## Tünel sorun giderme

- SSH oturumunun bağlı olduğundan emin olun — yönlendirmeler oturumdan sonra açılır.
- Yerel bağlantı noktasının zaten kullanımda olmadığını kontrol edin.
- Uzak ana bilgisayarın ve bağlantı noktasının SSH sunucusundan erişilebilir olduğunu kontrol edin.
- Hedef hizmet SSH sunucusunun kendisinde olduğunda `localhost` kullanın.
- SSH sunucusunun arkasındaki başka bir ana bilgisayara yönlendirirken sunucunun iç DNS adını veya IP adresini kullanın.
