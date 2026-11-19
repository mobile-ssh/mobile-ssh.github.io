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

- **Android:** ana sayfadaki bağlantıyla Mobile SSH'yi Google Play'den yükleyin. Kullanılabilirlik yayın kanalına bağlıdır. Kapalı bir teste katılıyorsanız katılım bağlantısını tarayıcıda açın ve Play'de kullandığınız Google hesabıyla katılın.
- **iOS:** iOS uygulaması TestFlight'ta herkese açık beta olarak sunulur. Apple'ın TestFlight uygulamasını yükleyin, ardından kurulum ve güncellemeler için sitenin ana sayfasındaki Mobile SSH davet bağlantısını açın.

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

Özel anahtar içe aktarma, sistem dosya seçicisini kullanır. Android, 64 KB'tan büyük anahtar dosyalarını reddeder. İçe aktarma depolamanızın geri kalanına erişim vermez; dosya aktarımının kendi klasör ve dosya seçimleri vardır.

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

Android yedekleri ayrıca istem şablonlarını ve düzenleyici taslaklarını, indirilen modelleri, ses sunucusu ayarlarını, VPN Setup bulut kimlik bilgilerini ve Sohbet veya istem çalıştırma önbelleklerini içermez. Bunları yeni telefonda yeniden yapılandırın; yedekleme, sunucuda zaten kurulu zamanlamaları taşımaz veya kaldırmaz.

## Etkin oturumlar

Oturumlar çalışırken **Etkin Oturumlar** sayıyı gösterir ve terminal ızgarasını açar. Android kalıcı bildirimi hostları da listeler ve bağlantı kontrollerini açar.

Başlangıç ekranına dönmek etkin SSH oturumlarını kesmez; bölmeleri kapatmak veya terminal etkinliğini sonlandırmak oturumları keser.

## İlk yararlı ayarlar

Başlangıç ekranından **Settings** sayfasını açın (kendi sayfası vardır):

- Terminale dokunmanın klavyeyi açıp açmayacağını belirleyin. Platformların varsayılanları birbirinin tersidir: Android'de klavye yalnızca ⌨ düğmesiyle görünür, iOS'ta dokunarak açılır.
- Terminalin **metin boyutunu**, **yazı tipini**, **renk şemasını** ve **kaydırma geçmişi** boyutunu ayarlayın; bir uygulama **teması** seçin (Sistem, Açık veya Koyu).
- Uzun arka plan görevleri (Claude Code, Codex, kabuk betikleri) çalıştırıyor ve ajan sizden girdi beklediğinde haberdar olmak istiyorsanız **Ajan uyarıları**'nı etkinleştirin. Ajanların durumlarını nasıl bildirdiği için **Terminal** kılavuzuna bakın.
- Android'de **Oturumları arka planda çalışır tut** varsayılan olarak açıktır; böylece uygulamayı kaydırarak kapatsanız da kabuklar ve ajanlar çalışır.
- Her iki platformun Ayarlar bölümünde anonim kullanım analizi anahtarı bulunur. Kapatmak yeni olayların toplanmasını durdurur.
- iOS'ta **Dikte ve öneriler** varsayılan olarak açıktır. Dikte veya otomatik düzeltme olmadan doğrudan terminal girişi istiyorsanız kapatıp yeni bir bölme açın.
- Uzak bildirimler, komut tamamlanma uyarıları ve uzak pano okumaları ayrı ayrı etkinleştirilen ayarlardır. Yalnızca istediğiniz uzak eylemleri açın.
- Android'de **Sesli asistan**, **İstem şablonları** ve **Uygulama İçi Tarayıcı** isteğe bağlıdır ve varsayılan olarak kapalıdır. Sesin kendi Ayarlar sayfası vardır; diğer ikisi **Genel** altındadır.

## Android'de sesli asistan

Sesli asistan deneyseldir ve varsayılan olarak kapalıdır. Desteklenen 64 bit bir telefonda Gemma 4 veya kendi Linux SSH sunucunuzdaki ses hizmetini kullanabilir.

1. **Ayarlar → Sesli asistan**'ı açın ve asistanı etkinleştirin.
2. Yerel konuşma işleme için **Bu telefonda Gemma kullan (ses sunucusu yok)** seçeneğini açın, sunulan modellerden birini seçin ve **İndir**'e dokunun. Alternatif olarak kayıtlı bir Linux ses sunucusu seçip hizmet kurulumunu izleyin; Python 3.11–3.13, systemd kullanıcı hizmetleri ve birkaç GB boş alan gerekir.
3. Kontrol etmek istediğiniz terminal için sesli konuşma başlatın. Kaydetmek, incelemek ve göndermek için **Mesajlar**'ı; eller serbest konuşma ve sesli yanıtlar için **Canlı**'yı seçin. Özel bir ses sunucusu adresi Canlı modu kullanır.
4. Önerilen komutları onaylamadan önce inceleyin. Gemma, kısa bir salt okunur kontrol listesini onaysız çalıştırabilir; bu listenin dışındaki komutlar ve Claude Code veya Codex'e gönderilen istemler onayınızı ya da **Gönder**'i gerektirir.

Telefon modelleri, yalnızca İndir'e dokunduktan sonra Hugging Face'ten yaklaşık 2.6–3.7 GB indirir. Tarifeli bağlantıdan indirme onay ister; Wi-Fi'da başlatılan indirme, bağlantı tarifeli hâle gelirse duraklar. Gemma ile konuşma telefonda kalır; sunucu seçeneği sesi yapılandırdığınız ses hizmetine gönderir. Mikrofon izni, ses özelliği kullanıldığında istenir. Çevrimdışı sentez sesi eksikse uygulama, telefonun konuşma motoru üzerinden indirmeyi önerir.

Başka bir uygulama ses odağını alırsa veya kulaklık Durdur gönderirse konuşma, modu ve bağlamı korunarak duraklar. Ses sayfasında veya bildirimde **Konuşmaya devam et**'i kullanın ya da kulaklıkta Oynat'a basın. Başka uygulamanın sesi nedeniyle oluşan duraklama, o ses sona erdiğinde biter.

## Android'de istem şablonları

İstem şablonları deneyseldir ve varsayılan olarak kapalıdır. Kendi sunucunuzda salt okunur Claude Code veya Codex çalıştırmaları zamanlar. Sunucuda Python 3.8 veya üzeri, cron ve hesabına giriş yapılmış bir kodlama ajanı gerekir.

1. **Ayarlar → Genel → İstem şablonları**'nı etkinleştirin.
2. Ana Sayfa'da **İstemler**'i veya kayıtlı sunucu menüsündeki istem şablonu seçeneğini açın.
3. İstem, sunucu, proje klasörü ve Claude Code veya Codex içeren bir şablon oluşturun. Saat dilimini seçin ve her gün, hafta içi, seçili günlerde veya 1–12 saatte bir çalıştırılacak şekilde zamanlayın.
4. Şablonu kaydedin, ardından eşitlemek için sunucusuna bağlanın. Mobile SSH küçük bir yardımcı ve bir crontab girdisi kurar; zamanlamalar telefon bağlı değilken bile sunucuda çalışır.
5. Her çalıştırmanın çıktısını ve durumunu inceleyin veya **Şimdi çalıştır**, **Duraklat** ya da **Sunucudan kaldır**'ı seçin.

Şablonlar ve düzenleyici taslakları telefonda şifrelenir ve yedeklere dahil edilmez. İndirilmiş bir Gemma modeli istem taslağı hazırlamaya ve düzenlemeye yardımcı olabilir. Özelliği kapatmak kontrollerini gizler ve telefon tarafındaki eşitlemeyi durdurur; sunucuda zaten kurulu zamanlamaları durdurmaz veya kaldırmaz. Önce İstem şablonları içinde bu zamanlamaları duraklatın ya da kaldırın.

## Eklentiler

Eklentiler, Mobile SSH'yi ek iş akışlarıyla genişletir. Başlangıç ekranından **Plugins** sayfasını açarak şunları yapabilirsiniz:

- Kataloğu kategoriye göre gezin ve eklenti arayın.
- İstediklerinizi yükleyin — her eklenti istek üzerine indirilir ve SHA-256 sağlama toplamıyla doğrulanarak uygulamanın özel depolama alanına yerleştirilir.
- Yüklü eklentileri aynı ekrandan çalıştırın.

Eklentiler varsayılan olarak herkese açık bir katalogdan alınır. Kendi kataloğunuzu yönetiyorsanız Mobile SSH'yi özel bir katalog kaynağına yönlendirebilirsiniz. Yalnızca güvendiğiniz kaynaklardan eklenti yükleyin.

Android'de katalog eklentileri daha yeni sürüm olduğunda **Güncelle** seçeneğini gösterir. Güncellemeler özgün kataloğu kullanır, eklenti ayarlarını ve verilerini korur, ek erişim gerekiyorsa onay ister. Yüklü sürümü eski bir sürüme düşürmez.

## Diller

Mobile SSH varsayılan olarak sistem dilini izler. İki uygulama yirmi dil sunar: Arapça, Mısır Arapçası, Bengalce, Basitleştirilmiş ve Geleneksel Çince, İngilizce, Fransızca, Almanca, Hintçe, Endonezce, Japonca, Marathice, Nijerya Pidgin dili, Portekizce, Rusça, İspanyolca, Tamilce, Teluguca, Türkçe ve Urduca.

Uygulamayı telefonunkinden başka bir dilde kullanmak isterseniz **Ayarlar → Dil** bölümünde "Sistem varsayılanı" seçeneği olan bir seçici bulunur. Dili yine Android **Ayarlar → Sistem → Diller** ya da iOS **Ayarlar → Genel → Dil ve Bölge** bölümünden de değiştirebilirsiniz.

## Güvenlik notu

Yalnız güvenilir sunuculara bağlanın. Dışa aktarma/paylaşma dışında veriler cihazda kalır; bulut kasası veya otomatik eşitleme yoktur. Cihaz ve yedekleri koruyun, bilinmeyen izleri ve değişen anahtar hatalarını yeniden bağlanmadan inceleyin.
