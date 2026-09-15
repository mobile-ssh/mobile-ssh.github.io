---
layout: ../../../layouts/DocLayout.astro
title: "Başlarken"
description: "Mobile SSH kurun, kimlikleri doğrulayın, atlama sunucuları ve anahtarları ayarlayın, sunucu, kimlik bilgisi ve ayarları yedekleyin."
---

# Başlarken

Mobile SSH, kendi Linux, Unix, ağ, IoT veya geliştirme sunucularınıza bağlanmak için Android ve iOS'a yönelik bir SSH istemcisidir. Sunucu adresini ve kimlik bilgilerini siz sağlarsınız; uygulama etkileşimli bir SSH terminali açar.

## Gereksinimler

- Android 8.0 veya üzeri ya da iOS 16 veya üzeri (iPhone veya iPad).
- Cihazdan SSH sunucunuza ağ erişimi.
- SSH sunucusunun ana bilgisayar adı veya IP adresi, port, kullanıcı adı ve bir parola ya da özel anahtar.
- Yerel aktarım için sistem seçicisinden klasör veya dosya seçin. Hiçbir platform genel depolama izni istemez.

## Uygulamayı yükleme

- **Android:** Mobile SSH şu anda Google Play'de kapalı bir test olarak sunuluyor. Katılım bağlantısını cihazdaki bir mobil tarayıcıda açın — testin görünmeyebileceği Google Play uygulamasının içinde değil — ve kullanacağınız Google hesabıyla katılın. Bundan sonra diğer uygulamalar gibi Play üzerinden kurulur ve güncellenir.
- **iOS:** iOS uygulaması TestFlight'ta herkese açık beta olarak sunulur. Apple'ın TestFlight uygulamasını yükleyin, ardından uygulamayı yüklemek ve güncellemeleri almak için sitenin ana sayfasındaki Mobile SSH davet bağlantısını açın.

## Bir sunucuya bağlanma

1. Mobile SSH'yi açın.
2. **+ Add Session** düğmesine dokunun ve kayıtlı bir sunucu arayın ya da o ekrandan yeni bir sunucu ekleyin.
3. Yeni bir sunucu ekliyorsanız ana bilgisayarı, portu, kullanıcı adını ve kimlik doğrulama ayrıntılarını girin.
4. Bir terminal oturumu açmak için sunucuya dokunun.
5. Hâlâ çalışan oturumlara dönmek için başlangıç ekranındaki **Active Sessions** seçeneğini kullanın.

Varsayılan SSH portu `22`'dir. Sunucunuz başka bir port kullanıyorsa onu sunucu profiline girin.

## Sunucu kimliklerini doğrulama

İki uygulama giriş bilgisi göndermeden SSH kimliğini kontrol eder. Değişen anahtar alternatif adres ve bastion dahil bağlantıyı durdurur.

- **Android:** **Yeni SSH kimliklerini otomatik kabul et** varsayılan açıktır. İlk ham anahtar kaydedilir, sonrakiler eşleşmelidir. Yeni SHA-256 izini yöneticiyle karşılaştırmak için **Ayarlar → Genel → Güvenlik** altında kapatın, sonra kabul edip yeniden bağlanın.
- **iOS:** bilinmeyen anahtar onay ister. SHA-256 izini güvenilir kanaldan karşılaştırıp **Güven ve yeniden bağlan** seçin.

Ayarlar'da kayıtlı kimlikleri inceleyin. İki platform da yöneticinin sağladığı host anahtarı iptal kayıtlarını destekler; Android ayrıca host sertifika yetkililerini destekler. iOS'ta kapsamı belirlenmiş OpenSSH `@revoked` Ed25519/ECDSA girdileri için **Ayarlar → Sunucu kimlikleri → İptal edilmiş anahtarları içe aktar** seçeneğini kullanın. İptal edilmiş anahtarlar, daha önce güvenilenler dahil, yeni bağlantılarda ve yeniden bağlanmalarda engellenir; iptal kaydını içe aktarmak mevcut bağlantıları kapatmaz. iOS host sertifikalarını veya CA içe aktarımını desteklemez. Güven her cihazda kalır ve yedekten içe aktarılmaz. Değişen veya iptal edilen bir anahtarı neden engellendiğini kontrol etmeden silmeyin.

## Aktarım seçme

Bir sunucu eklerken veya düzenlerken **Transport** seçicisi Mobile SSH'nin nasıl bağlanacağını belirler:

- **SSH** — standart bir SSH bağlantısı (varsayılan).
- **Eternal Terminal** — ağ kopmalarına, uykuya ve IP değişikliklerine dayanan dirençli bir oturum. Ana bilgisayarda `etserver` yoksa Mobile SSH bunu sizin için SSH üzerinden kurabilir. Ayrıntılar için **Terminal** kılavuzuna bakın.

Android ayrıca deneysel **Teleport** proxy bağlantıları sunar. Bastion yolları SSH ister, Eternal Terminal ile birleşmez.

## Sunucuları kaydetme

Kayıtlı sunucular, bağlantı hedefini ve isteğe bağlı tünel yapılandırmasını saklar. Kayıtlı bir sunucu şunları içerebilir:

- Ana bilgisayar adı veya IP adresi.
- SSH portu.
- Kullanıcı adı.
- Parola veya özel anahtar ayrıntıları.
- İsteğe bağlı yerel port yönlendirme kuralları.
- Aynı makine için isteğe bağlı ek adresler (aşağıya bakın).
- İsteğe bağlı atlama sunucuları ve **Bağlanınca ekle**: Otomatik, Hiçbiri, tmux, herdr veya Zellij.

Sık eriştiğiniz ana bilgisayarlar için kayıtlı sunucuları kullanın. Kayıtlı bir sunucu, mevcut etkin oturumunuzdan farklı bir ana bilgisayara işaret ediyorsa Mobile SSH seçilen hedef için yeni bir bağlantı başlatır.

### Birden çok adres (LAN/VPN dolaşımı)

Aynı makineye, bulunduğunuz yere bağlı olarak genellikle farklı adreslerden erişilebilir — bir ev Wi-Fi IP'si ile bir VPN IP'si gibi. Sunucunun düzenleme iletişim kutusunda, gerekirse her biri kendi portuyla, alternatif adresleri ekleyin. Bağlandığınızda Mobile SSH adresleri biri yanıt verene kadar sırayla dener ve en son çalışan adresi hatırlayıp bir sonraki sefer önce onu arar. Bir ağ değişikliği (örneğin VPN'den ayrılmak), ölü rotanın zaman aşımına uğramasını beklemek yerine artık erişilebilir olan adrese anında yeniden bağlanmayı tetikler.

### Atlama sunucuları

Önce bastionları kaydedin, hedef sunucuda sırayla seçin. İki platform sekiz genişletilmiş SSH atlaması destekler. Her biri kendi kimlik bilgilerini/doğrulamasını kullanır; hedef öncekinden erişilebilir olmalıdır. Eksik sunucu, döngü veya hata doğrudana dönmeden yolu durdurur. Terminal, SFTP, yerel yönlendirme ve desteklenen SSH işlevleri kayıtlı yolu kullanır.

## Kimlik bilgilerini kaydetme

**Credentials** ekranı, yeniden kullanılabilir kullanıcı adı/parola veya kullanıcı adı/özel anahtar kayıtlarını saklar. Kayıtlı kimlik bilgileri sunucu kurulum iletişim kutusundan seçilebilir; böylece her ana bilgisayar için aynı oturum açma bilgilerini yeniden girmek zorunda kalmazsınız.

Kimlik bilgisi kayıtları cihazda yerel olarak saklanır — iOS'ta gizli veriler sistemin Keychain'inde tutulur. Parola, parola tümcesi veya özel anahtar kaydediyorsanız cihazı bir ekran kilidiyle koruyun.

## Özel anahtarları kullanma

Mobile SSH, yapıştırılan özel anahtarları ve sistem dosya seçicisi aracılığıyla anahtar içe aktarmayı destekler. Android'de uygulama Ed25519, ECDSA (P-256/384/521) ve RSA anahtarlarını destekler; iOS'ta Ed25519 ve ECDSA (P-256/384/521) anahtarlarını destekler. DSA (`ssh-dss`) hiçbir platformda desteklenmez. Her iki platform da parola tümcesiyle şifrelenmiş bir anahtarı açabilir — parola tümcesini parola/parola tümcesi alanına girin.

Bir özel anahtar kullanmak için:

1. **Credentials** ekranını veya sunucu düzenleme iletişim kutusunu açın.
2. Özel anahtar metnini yapıştırın ya da **Import from file** seçeneğini belirleyin.
3. Anahtar şifreliyse parola/parola tümcesi alanına anahtar parola tümcesini girin.
4. Kimlik bilgisini veya sunucuyu kaydedin.

Anahtar aktarma sistem seçicisini kullanır, depolamanın kalanına erişim vermez. Dosya aktarımının kendi klasör/dosya seçimleri vardır.

Android USB/NFC **FIDO2 anahtarlarını** destekler: kaydedin veya OpenSSH kimliğini aktarın, dokunma/PIN isteklerini izleyin. Dışa aktarma/geri yükleme sonrasında da fiziksel anahtar gerekir. **SSH ajan yönlendirmesi** sunucu başına isteğe bağlıdır; kayıtlı anahtarlar kullanım başına isteğe bağlı onayla imza isteklerini yanıtlar. Yalnız imza istemesine güvendiğiniz sunucuda açın. iOS fiziksel anahtar girişi veya ajan yönlendirmesini desteklemez.

## Ana ekran

Ana ekran, boş bir bağlantı formu açmak yerine "neye geri dönebilirim?" sorusunu yanıtlamak üzere kurulmuştur:

- **Continue**, şu anda canlı olan bağlantıları listeler; bir bağlantının birden çok bölmesi varsa bölme sayısını da gösterir. Bir satıra dokunmak sizi oraya geri götürür.
- **Tmux sessions**, kayıtlı sunucularınızda çalışanları listeler. Uygulamanın önceden sakladığı bir anlık görüntüden çizilir, bu yüzden hiç ağ olmadan bile anında görünür — her satırda anlık görüntünün yaşı yazar ve birine dokunmak bağlanıp o oturuma ekler. Anlık görüntüler birkaç saat sonra soluklaşır ve bir hafta sonra atılır.
- iOS'ta **Son kullanılanlar**, **Yeni bağlantı** sayfasındadır; seçilen kayıt formu doldurur.

Android **VPN** kutucuğu yerleşik istemcileri açar; **Hakkında** Ayarlar'dadır. VPN kılavuzu bu sitede **Port yönlendirme** içindedir.

Hiçbir şey canlı değilse ve önbellekte de bir şey yoksa ekran bunu söyler ve sizi **Servers** bölümüne yönlendirir.

## Kayıtlı sunucuları adlandırma ve arama

Kayıtlı bir sunucu bir ad taşıyabilir — "Ev NAS", "Prod web" — ve liste adres yerine bu adı gösterir. Ad belirsiz kalacak olduğunda adres kendiliğinden geri döner: aynı adı paylaşan iki satır ya da süren bir arama gibi durumlarda; böylece satırları her zaman birbirinden ayırabilirsiniz.

Filtrelemek için **Saved Servers** sayfasındaki arama alanına dokunun. Arama; adı, kullanıcıyı, ana bilgisayarı, portu, kimlik bilgisini ve tüm alternatif adresleri eşleştirir. **+ Add Session** ekranı da arama özelliğiyle açılır; böylece kayıtlı bir sunucuyu tek adımda bulup bağlanabilirsiniz.

Sunucular klasörlere ayrılabilir. Bir klasör daraltılabilir, daraltıldığını hatırlar, yeniden sıralanabilir veya yeniden adlandırılabilir; bir klasörü silmek içindeki sunucuları silmek yerine **Ungrouped** altına taşır.

## Kurulumunuzun bir bölümünü dışa aktarma

Servers ve Credentials ekranlarındaki **Export selected…**, listeyi onay kutulu bir seçiciye dönüştürür; böylece her şeyi dışa aktarmadan yalnızca üç sunucuyu paylaşabilirsiniz. Bir klasör başlığına dokunmak klasörün tamamını alır. Bir parola tümcesi verirseniz dışa aktarımlar şifrelenir — vermezseniz dosya parolaları ve özel anahtarları düz metin olarak tutar ve uygulama yazmadan önce bunu söyler.

Tam yedek için Android'de **Tümünü dışa aktar (yedek)**, iOS'ta **Yedekle ve Geri Yükle** seçin. Sunucular, kimlik bilgileri, dil, ek tuşlar ve çoklayıcı sırası gibi ayarlar dahil edilir. Android VPN/SOCKS da ekler. Tüm dosyayı parola ile koruyun.

İkisi biçim 2 ve eski envanterleri okur. Önizleyin: **Birleştir** mevcut öğeleri koruyarak bölümleri uygular; **Değiştir** dosyadaki bölümleri değiştirir ve sunulan ayar bölümündeki eksik tercihleri varsayılana döndürür. Eksik bölümler değişmez. Desteklenmeyen seçenek belirtilir; aktarmak diğer uygulamaya o özelliği eklemez. İçe aktarma VPN başlatmaz.

Kimlikler, etkin oturumlar, sistem izinleri ve klasör erişimi geri yüklenmez. Yeni cihazda hostları doğrulayıp izin verin. Eski uygulamalar yeni tam biçimi okuyamaz.

## Etkin oturumlar

Oturumlar çalışırken **Etkin Oturumlar** sayıyı gösterir ve terminal ızgarasını açar. Android kalıcı bildirimi hostları da listeler ve bağlantı kontrollerini açar.

Başlangıç ekranına dönmek etkin SSH oturumlarını kesmez; bölmeleri kapatmak veya terminal etkinliğini sonlandırmak oturumları keser.

## İlk yararlı ayarlar

Başlangıç ekranından **Settings** sayfasını açın (kendi sayfası vardır):

- Terminale dokunmanın klavyeyi açıp açmayacağına karar verin. İki platform zıt varsayılanlarla gelir: Android'de klavye yalnızca ⌨ düğmesinden açılır, iOS'ta ise bir dokunuş klavyeyi açar.
- Terminalin **metin boyutunu**, **yazı tipini**, **renk şemasını** ve **geri kaydırma** boyutunu ayarlayın ve bir uygulama **teması** seçin (Sistem, Açık veya Koyu).
- Arka planda uzun süren görevler (Claude Code, Codex, kabuk betikleri) çalıştırıyorsanız ve ajanın girdinize ihtiyaç duyduğunda haberdar olmak istiyorsanız **Agent alerts** seçeneğini etkinleştirin. Ajanların kendilerini nasıl bildirdiği için **Terminal** kılavuzuna bakın.
- Android'de **Keep sessions running in background** varsayılan olarak açıktır; böylece uygulamayı kaydırıp kapatsanız bile kabuklar ve ajanlar çalışmayı sürdürür.
- İki platformda anonim kullanım analitiği anahtarı vardır; kapatmak yeni olay toplamayı durdurur.
- iOS'ta **Dikte ve öneriler** varsayılan açıktır. Doğrudan giriş için kapatıp yeni bölme açın.
- Uzak bildirimler, komut bitişi ve uzak pano okuma ayrı izinlerdir. Yalnız istediğinizi açın.

## Eklentiler

Eklentiler, Mobile SSH'yi ek iş akışlarıyla genişletir. Başlangıç ekranından **Plugins** sayfasını açarak şunları yapabilirsiniz:

- Kataloğu kategoriye göre gezin ve eklenti arayın.
- İstediklerinizi yükleyin — her eklenti istek üzerine indirilir ve SHA-256 sağlama toplamıyla doğrulanarak uygulamanın özel depolama alanına yerleştirilir.
- Yüklü eklentileri aynı ekrandan çalıştırın.

Eklentiler varsayılan olarak herkese açık bir katalogdan alınır. Kendi kataloğunuzu yönetiyorsanız Mobile SSH'yi özel bir katalog kaynağına yönlendirebilirsiniz. Yalnızca güvendiğiniz kaynaklardan eklenti yükleyin.

## Diller

Mobile SSH varsayılan olarak sistem dilini izler. İki uygulama yirmi dil sunar: Arapça, Mısır Arapçası, Bengalce, Basitleştirilmiş ve Geleneksel Çince, İngilizce, Fransızca, Almanca, Hintçe, Endonezce, Japonca, Marathice, Nijerya Pidgin dili, Portekizce, Rusça, İspanyolca, Tamilce, Teluguca, Türkçe ve Urduca.

Uygulamayı telefonunkinden başka bir dilde kullanmak isterseniz **Ayarlar → Dil** bölümünde "Sistem varsayılanı" seçeneği olan bir seçici bulunur. Dili yine Android **Ayarlar → Sistem → Diller** ya da iOS **Ayarlar → Genel → Dil ve Bölge** bölümünden de değiştirebilirsiniz.

## Güvenlik notu

Yalnız güvenilir sunuculara bağlanın. Dışa aktarma/paylaşma dışında veriler cihazda kalır; bulut kasası veya otomatik eşitleme yoktur. Cihaz ve yedekleri koruyun, bilinmeyen izleri ve değişen anahtar hatalarını yeniden bağlanmadan inceleyin.
