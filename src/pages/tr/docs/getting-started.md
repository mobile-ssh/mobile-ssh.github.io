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

- **Android:** Mobile SSH şu anda Google Play'de kapalı bir test olarak sunuluyor. Katılım bağlantısını cihazdaki bir mobil tarayıcıda açın — testin görünmeyebileceği Google Play uygulamasının içinde değil — ve kullanacağınız Google hesabıyla katılın. Bundan sonra diğer uygulamalar gibi Play üzerinden kurulur ve güncellenir.
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
- Aynı makine için isteğe bağlı ek adresler (aşağıya bakın).

Sık eriştiğiniz ana bilgisayarlar için kayıtlı sunucuları kullanın. Kayıtlı bir sunucu, mevcut etkin oturumunuzdan farklı bir ana bilgisayara işaret ediyorsa Mobile SSH seçilen hedef için yeni bir bağlantı başlatır.

### Birden çok adres (LAN/VPN dolaşımı)

Aynı makineye, bulunduğunuz yere bağlı olarak genellikle farklı adreslerden erişilebilir — bir ev Wi-Fi IP'si ile bir VPN IP'si gibi. Sunucunun düzenleme iletişim kutusunda, gerekirse her biri kendi bağlantı noktasıyla, alternatif adresleri ekleyin. Bağlandığınızda Mobile SSH adresleri biri yanıt verene kadar sırayla dener ve en son çalışan adresi hatırlayıp bir sonraki sefer önce onu arar. Bir ağ değişikliği (örneğin VPN'den ayrılmak), ölü rotanın zaman aşımına uğramasını beklemek yerine artık erişilebilir olan adrese anında yeniden bağlanmayı tetikler.

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

Özel anahtar içe aktarma işlemi, anahtar dosyaları için sistem dosya seçicisini kullanır. Android'de dosya aktarımı ayrı bir yerel dosya tarayıcısı kullanır ve daha yeni Android sürümlerinde daha geniş depolama erişimi isteyebilir; iOS'ta dosyalar sistemin belge ve fotoğraf seçicileri aracılığıyla gelir.

## Ana ekran

Ana ekran, boş bir bağlantı formu açmak yerine "neye geri dönebilirim?" sorusunu yanıtlamak üzere kurulmuştur:

- **Continue**, şu anda canlı olan bağlantıları listeler; bir bağlantının birden çok bölmesi varsa bölme sayısını da gösterir. Bir satıra dokunmak sizi oraya geri götürür.
- **Tmux sessions**, kayıtlı sunucularınızda çalışanları listeler. Uygulamanın önceden sakladığı bir anlık görüntüden çizilir, bu yüzden hiç ağ olmadan bile anında görünür — her satırda anlık görüntünün yaşı yazar ve birine dokunmak bağlanıp o oturuma ekler. Anlık görüntüler birkaç saat sonra soluklaşır ve bir hafta sonra atılır.
- iOS'ta bunların altında bir **Recent** listesi bulunur; Android uygulaması bunu kaldırdı, çünkü "neye geri dönebilirim?" sorusu "en son ne zaman bağlandım?" sorusundan daha yararlı çıktı.

Hiçbir şey canlı değilse ve önbellekte de bir şey yoksa ekran bunu söyler ve sizi **Servers** bölümüne yönlendirir.

## Kayıtlı sunucuları adlandırma ve arama

Kayıtlı bir sunucu bir ad taşıyabilir — "Ev NAS", "Prod web" — ve liste adres yerine bu adı gösterir. Ad belirsiz kalacak olduğunda adres kendiliğinden geri döner: aynı adı paylaşan iki satır ya da süren bir arama gibi durumlarda; böylece satırları her zaman birbirinden ayırabilirsiniz.

Filtrelemek için **Saved Servers** sayfasındaki arama alanına dokunun. Arama; adı, kullanıcıyı, ana bilgisayarı, portu, kimlik bilgisini ve tüm alternatif adresleri eşleştirir. **+ Add Session** ekranı da arama özelliğiyle açılır; böylece kayıtlı bir sunucuyu tek adımda bulup bağlanabilirsiniz.

Sunucular klasörlere ayrılabilir. Bir klasör daraltılabilir, daraltıldığını hatırlar, yeniden sıralanabilir veya yeniden adlandırılabilir; bir klasörü silmek içindeki sunucuları silmek yerine **Ungrouped** altına taşır.

## Kurulumunuzun bir bölümünü dışa aktarma

Servers ve Credentials ekranlarındaki **Export selected…**, listeyi onay kutulu bir seçiciye dönüştürür; böylece her şeyi dışa aktarmadan yalnızca üç sunucuyu paylaşabilirsiniz. Bir klasör başlığına dokunmak klasörün tamamını alır. Bir parola tümcesi verirseniz dışa aktarımlar şifrelenir — vermezseniz dosya parolaları ve özel anahtarları düz metin olarak tutar ve uygulama yazmadan önce bunu söyler.

## Etkin oturumlar

Oturumlar çalışırken başlangıç ekranı bir sayıyla birlikte **Active Sessions** seçeneğini gösterir. Terminal ızgarasına dönmek için üzerine dokunun. Devam eden bir bildirim de etkin ana bilgisayarları listeler — doğrudan o terminale geçmek için bildirimdeki bir ana bilgisayara dokunun.

Başlangıç ekranına dönmek etkin SSH oturumlarını kesmez; bölmeleri kapatmak veya terminal etkinliğini sonlandırmak oturumları keser.

## İlk yararlı ayarlar

Başlangıç ekranından **Settings** sayfasını açın (kendi sayfası vardır):

- Terminale dokunmanın klavyeyi açıp açmayacağına karar verin. İki platform zıt varsayılanlarla gelir: Android'de klavye yalnızca ⌨ düğmesinden açılır, iOS'ta ise bir dokunuş klavyeyi açar.
- Terminalin **metin boyutunu**, **yazı tipini**, **renk şemasını** ve **geri kaydırma** boyutunu ayarlayın ve bir uygulama **teması** seçin (Sistem, Açık veya Koyu).
- Arka planda uzun süren görevler (Claude Code, Codex, kabuk betikleri) çalıştırıyorsanız ve ajanın girdinize ihtiyaç duyduğunda haberdar olmak istiyorsanız **Agent alerts** seçeneğini etkinleştirin. Ajanların kendilerini nasıl bildirdiği için **Terminal** kılavuzuna bakın.
- Android'de **Keep sessions running in background** varsayılan olarak açıktır; böylece uygulamayı kaydırıp kapatsanız bile kabuklar ve ajanlar çalışmayı sürdürür.
- Android'de, herhangi bir veri gönderilmesini istemiyorsanız anonim kullanım analitiğini kapatın. iOS uygulamasında bu anahtar henüz yok.

## Eklentiler

Eklentiler, Mobile SSH'yi ek iş akışlarıyla genişletir. Başlangıç ekranından **Plugins** sayfasını açarak şunları yapabilirsiniz:

- Kullanılabilir eklentilerin kataloğuna göz atın.
- İstediklerinizi yükleyin — her eklenti istek üzerine indirilir ve SHA-256 sağlama toplamıyla doğrulanarak uygulamanın özel depolama alanına yerleştirilir.
- Yüklü eklentileri aynı ekrandan çalıştırın.

Eklentiler varsayılan olarak herkese açık bir katalogdan alınır. Kendi kataloğunuzu yönetiyorsanız Mobile SSH'yi özel bir katalog kaynağına yönlendirebilirsiniz. Yalnızca güvendiğiniz kaynaklardan eklenti yükleyin.

## Diller

Mobile SSH varsayılan olarak sistem dilini izler. Uygulama Arapça, Bengalce, Çince (Basitleştirilmiş ve Geleneksel), İngilizce, Fransızca, Almanca, Hintçe, Endonezce, Japonca, Marathi, Portekizce, Rusça, İspanyolca, Tamilce, Telugu, Türkçe ve Urduca çevirileriyle birlikte gelir — Android'de yirmi dil (Nijerya Pidgin'i ve Mısır Arapçası da eklenir), iOS'ta on sekiz dil.

Uygulamayı telefonunkinden başka bir dilde kullanmak isterseniz **Ayarlar → Dil** bölümünde "Sistem varsayılanı" seçeneği olan bir seçici bulunur. Dili yine Android **Ayarlar → Sistem → Diller** ya da iOS **Ayarlar → Genel → Dil ve Bölge** bölümünden de değiştirebilirsiniz.

## Güvenlik notu

Yalnızca güvendiğiniz sunuculara bağlanın. Mevcut uygulama kaydedilen bağlantı verilerini yerel olarak saklar; bulut kasası veya cihazlar arası eşitleme sunmaz. Mevcut uygulama bilinen ana bilgisayar onayı istemi de göstermez; bu nedenle ana bilgisayar kimliği önemliyse güvenilmeyen ağlar üzerinden bağlanmaktan kaçının.
