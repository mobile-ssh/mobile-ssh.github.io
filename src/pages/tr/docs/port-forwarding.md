---
layout: ../../../layouts/DocLayout.astro
title: "Bağlantı noktası yönlendirme"
description: "Android ve iOS'ta Mobile SSH yerel bağlantı noktası yönlendirme söz dizimi ve tünel yönetimi."
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

## Etkin tünelleri yönetme

Bağlıyken oturumu seçin ve terminal araç çubuğundan tünel görünümünü açın. Oradan etkin yerel yönlendirmeleri inceleyebilir, yeni bir tünel ekleyebilir veya mevcut bir yerel yönlendirmeyi kaldırabilirsiniz.

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

- Çalışma zamanı tünelleri eklemeden önce SSH oturumunun bağlı olduğundan emin olun.
- Yerel bağlantı noktasının zaten kullanımda olmadığını kontrol edin.
- Uzak ana bilgisayarın ve bağlantı noktasının SSH sunucusundan erişilebilir olduğunu kontrol edin.
- Hedef hizmet SSH sunucusunun kendisinde olduğunda `localhost` kullanın.
- SSH sunucusunun arkasındaki başka bir ana bilgisayara yönlendirirken sunucunun iç DNS adını veya IP adresini kullanın.
