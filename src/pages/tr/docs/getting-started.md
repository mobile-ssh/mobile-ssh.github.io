---
layout: ../../../layouts/DocLayout.astro
title: "Başlarken"
description: "Mobile SSH'yi kurmanın, bir sunucuya bağlanmanın, profilleri, kimlik bilgilerini ve oturumları kaydetmenin ilk adımları."
---

# Başlarken

Mobile SSH, kendi Linux, Unix, ağ, IoT veya geliştirme sunucularınıza bağlanmak için Android ve iOS'a yönelik bir SSH istemcisidir. Sunucu adresini ve kimlik bilgilerini siz sağlarsınız; uygulama etkileşimli bir SSH terminali açar.

## Gereksinimler

- Android 8.0 veya üzeri ya da iOS 16 veya üzeri (iPhone veya iPad).
- Cihazdan SSH sunucunuza ağ erişimi.
- SSH sunucusunun ana bilgisayar adı veya IP adresi, bağlantı noktası, kullanıcı adı ve bir parola ya da özel anahtar.
- Android'de, telefonun yerel dosya tarayıcısıyla SFTP dosya aktarımı kullanmak isterseniz depolama erişimi; iOS bunun yerine sistemin dosya ve fotoğraf seçicilerini kullanır.

## Uygulamayı yükleme

- **Android:** Mobile SSH'yi Google Play'den yükleyin.
- **iOS:** iOS uygulaması TestFlight'ta herkese açık beta olarak sunulur. Apple'ın TestFlight uygulamasını yükleyin, ardından uygulamayı yüklemek ve güncellemeleri almak için sitenin ana sayfasındaki Mobile SSH davet bağlantısını açın.

## Bir sunucuya bağlanma

1. Mobile SSH'yi açın.
2. **+ Add Session** düğmesine dokunun ve kayıtlı bir sunucu arayın ya da o ekrandan yeni bir sunucu ekleyin.
3. Yeni bir sunucu ekliyorsanız ana bilgisayarı, bağlantı noktasını, kullanıcı adını ve kimlik doğrulama ayrıntılarını girin.
4. Bir terminal oturumu açmak için sunucuya dokunun.
5. Hâlâ çalışan oturumlara dönmek için başlangıç ekranındaki **Active Sessions** seçeneğini kullanın.

Varsayılan SSH bağlantı noktası `22`'dir. Sunucunuz başka bir bağlantı noktası kullanıyorsa onu sunucu profiline girin.

## Aktarım seçme

Bir sunucu eklerken veya düzenlerken **Transport** seçicisi Mobile SSH'nin nasıl bağlanacağını belirler:

- **SSH** — standart bir SSH bağlantısı (varsayılan).
- **Eternal Terminal** — ağ kopmalarına, uykuya ve IP değişikliklerine dayanan dirençli bir oturum. Ana bilgisayarda `etserver` yoksa Mobile SSH bunu sizin için SSH üzerinden kurabilir. Ayrıntılar için **Terminal** kılavuzuna bakın.

## Sunucuları kaydetme

Kayıtlı sunucular, bağlantı hedefini ve isteğe bağlı tünel yapılandırmasını saklar. Kayıtlı bir sunucu şunları içerebilir:

- Ana bilgisayar adı veya IP adresi.
- SSH bağlantı noktası.
- Kullanıcı adı.
- Parola veya özel anahtar ayrıntıları.
- İsteğe bağlı yerel bağlantı noktası yönlendirme kuralları.

Sık eriştiğiniz ana bilgisayarlar için kayıtlı sunucuları kullanın. Kayıtlı bir sunucu, mevcut etkin oturumunuzdan farklı bir ana bilgisayara işaret ediyorsa Mobile SSH seçilen hedef için yeni bir bağlantı başlatır.

## Kimlik bilgilerini kaydetme

**Credentials** ekranı, yeniden kullanılabilir kullanıcı adı/parola veya kullanıcı adı/özel anahtar kayıtlarını saklar. Kayıtlı kimlik bilgileri sunucu kurulum iletişim kutusundan seçilebilir; böylece her ana bilgisayar için aynı oturum açma bilgilerini yeniden girmek zorunda kalmazsınız.

Kimlik bilgisi kayıtları cihazda yerel olarak saklanır — iOS'ta gizli veriler sistemin Keychain'inde tutulur. Parola, parola tümcesi veya özel anahtar kaydediyorsanız cihazı bir ekran kilidiyle koruyun.

## Özel anahtarları kullanma

Mobile SSH, yapıştırılan özel anahtarları ve sistem dosya seçicisi aracılığıyla anahtar içe aktarmayı destekler. Android'de uygulama Ed25519, RSA, ECDSA ve DSA anahtarlarını destekler; iOS'ta Ed25519 ve ECDSA (P-256/384/521) anahtarlarını destekler.

Bir özel anahtar kullanmak için:

1. **Credentials** ekranını veya sunucu düzenleme iletişim kutusunu açın.
2. Özel anahtar metnini yapıştırın ya da **Import from file** seçeneğini belirleyin.
3. Anahtar şifreliyse parola/parola tümcesi alanına anahtar parola tümcesini girin.
4. Kimlik bilgisini veya sunucuyu kaydedin.

Özel anahtar içe aktarma işlemi, anahtar dosyaları için sistem dosya seçicisini kullanır. Android'de dosya aktarımı ayrı bir yerel dosya tarayıcısı kullanır ve daha yeni Android sürümlerinde daha geniş depolama erişimi isteyebilir; iOS'ta dosyalar sistemin belge ve fotoğraf seçicileri aracılığıyla gelir.

## Son oturumlar

Başlangıç ekranı son oturumları gösterir. Son bir oturum aynı sunucu kümesine yeniden bağlanabilir. Önceki oturum hâlâ etkinse Mobile SSH yinelenen bir bağlantı başlatmak yerine mevcut oturuma döner.

## Kayıtlı sunucularda arama

**Saved Servers** sayfasındaki arama alanına dokunarak ada veya ana bilgisayara göre filtreleme yapabilirsiniz. **+ Add Session** ekranı da arama özelliğiyle açılır; böylece kayıtlı bir sunucuyu tek adımda bulup bağlanabilirsiniz.

## Etkin oturumlar

Oturumlar çalışırken başlangıç ekranı bir sayıyla birlikte **Active Sessions** seçeneğini gösterir. Terminal ızgarasına dönmek için üzerine dokunun. Devam eden bir bildirim de etkin ana bilgisayarları listeler — doğrudan o terminale geçmek için bildirimdeki bir ana bilgisayara dokunun.

Başlangıç ekranına dönmek etkin SSH oturumlarını kesmez; bölmeleri kapatmak veya terminal etkinliğini sonlandırmak oturumları keser.

## İlk yararlı ayarlar

Başlangıç ekranından **Settings** sayfasını açın (kendi sayfası vardır):

- Terminale dokunulduğunda klavyenin görünmesini istiyorsanız "dokununca klavyeyi göster" seçeneğini etkinleştirin.
- Klavye önerileri Vim, less, htop veya tam ekran tmux gibi terminal programlarıyla çakışıyorsa IME önerilerini devre dışı bırakın.
- Arka planda uzun süren görevler (Claude Code, Codex, kabuk betikleri) çalıştırıyorsanız ve ajanın girdinize ihtiyaç duyduğunda ses veya titreşim bildirimi almak istiyorsanız **Agent alerts** seçeneğini etkinleştirin.
- Herhangi bir veri gönderilmesini istemiyorsanız anonim kullanım analitiğini kapatın.

## Eklentiler

Eklentiler, Mobile SSH'yi ek iş akışlarıyla genişletir. Başlangıç ekranından **Plugins** sayfasını açarak şunları yapabilirsiniz:

- Kullanılabilir eklentilerin kataloğuna göz atın.
- İstediklerinizi yükleyin — her eklenti istek üzerine indirilir ve SHA-256 sağlama toplamıyla doğrulanarak uygulamanın özel depolama alanına yerleştirilir.
- Yüklü eklentileri aynı ekrandan çalıştırın.

Eklentiler varsayılan olarak herkese açık bir katalogdan alınır. Kendi kataloğunuzu yönetiyorsanız Mobile SSH'yi özel bir katalog kaynağına yönlendirebilirsiniz. Yalnızca güvendiğiniz kaynaklardan eklenti yükleyin.

## Diller

Mobile SSH, sistem dilini izler. Uygulama Arapça, Bengalce, Çince (Basitleştirilmiş ve Geleneksel), İngilizce, Fransızca, Almanca, Hintçe, Endonezce, Japonca, Marathi, Nijerya Pidgin'i, Portekizce, Rusça, İspanyolca, Tamilce, Telugu, Türkçe ve Urduca çevirileriyle birlikte gelir. Dili uygulama içinden değil, Android **Ayarlar → Sistem → Diller** bölümünden ya da iOS'ta **Ayarlar → Genel → Dil ve Bölge** bölümünden değiştirin.

## Güvenlik notu

Yalnızca güvendiğiniz sunuculara bağlanın. Mevcut uygulama kaydedilen bağlantı verilerini yerel olarak saklar; bulut kasası veya cihazlar arası eşitleme sunmaz. Mevcut uygulama bilinen ana bilgisayar onayı istemi de göstermez; bu nedenle ana bilgisayar kimliği önemliyse güvenilmeyen ağlar üzerinden bağlanmaktan kaçının.
