import type { CloudGuides } from "./types";

export const tr: CloudGuides = {
  "title": "{provider} üzerinde sanal makine oluşturma",
  "description": "{provider} üzerinde adım adım sanal makine oluşturma: genel IPv4, güvenlik duvarı kuralları, Mobile SSH ile SSH erişimi, isteğe bağlı API kimlik bilgileri ve kaynak temizliği.",
  "intro": "Kendi {provider} hesabınızda genel IPv4 adresine sahip bir Ubuntu sunucusu oluşturun. Konsol adımlarını izleyin, Mobile SSH ile bağlanın ve ardından wg-easy kurulumunu ayrı bir iş olarak yapın.",
  "back": "Bulut sanal makineleri ve wg-easy",
  "indexHeading": "Bulut sağlayıcıları için adım adım kılavuzlar",
  "indexIntro": "Konsol ekranları, genel IP ayarları, SSH kullanıcı adı, isteğe bağlı API kimlik bilgileri ve kaynak temizliği için sağlayıcınızı seçin. AWS Lightsail ve EC2 için ayrı kılavuzlar vardır.",
  "cardAction": "Sanal makine oluşturun ve Mobile SSH ile bağlanın",
  "navLabel": "Bulut sağlayıcısı seçin",
  "openConsole": "Sağlayıcı konsolunu aç",
  "availability": "Bu talimatlar sağlayıcının konsolunu kullanır. Sanal makine oluşturmaya yönelik ayrı eklentiler planlanmaktadır; birleşik Android VPN Setup uygulaması yereldir ve yayımlanmamıştır. API bölümü gelecekteki erişimi hazırlamak içindir ve bu elle kurulum yolunda gerekli değildir.",
  "availabilityLink": "Eklenti kullanılabilirliğini kontrol edin",
  "checked": "Konsol belgeleri 8 Kasım 2026 tarihinde kontrol edildi.",
  "beforeHeading": "Başlamadan önce",
  "before": [
    "Faturalandırmayı etkinleştirin; bölgesel sanal makine, disk ve genel IP kotalarını kontrol edin. Kaynak oluşturmadan önce gösterilen fiyatı inceleyin; ücretsiz bir katmanın veya belirli bir planın mevcut olduğunu varsaymayın.",
    "Bu kurulum için en az 1 GB RAM ve 20 GB depolamaya sahip Ubuntu 24.04 LTS kullanın; sağlayıcının alt sınırı daha yüksekse ona uyun. CPU mimarisini imajla eşleştirin. Bu, kılavuzun temel yapılandırmasıdır; wg-easy için evrensel bir alt sınır değildir.",
    "SSH özel anahtarını Mobile SSH içinde tutun ve yalnızca açık anahtarını yükleyin. Ed25519, güncel Android ve iOS istemcileriyle çalışır; Lightsail RSA içe aktarımı ve iOS için ek çözüm ilgili adımlarda açıklanır. SSH kaynağı olarak geçerli genel IPv4 adresinizin sonuna <code>/32</code> ekleyerek kaydedin veya onaylı yönetim CIDR aralığınızı kullanın."
  ],
  "networkHeading": "Bu kurulum için ağ kuralları",
  "networkRules": [
    "Yönetim CIDR aralığından gelen <code>TCP 22</code> trafiğine izin verin. Gerekli değilse daha geniş SSH izin kurallarını kaldırın; dar bir kural eklemek geniş bir kuralı otomatik olarak iptal etmez. Telefonunuzun genel adresi değiştiğinde kaynağı güncelleyin.",
    "Sonraki VPN adımı için VPN istemci ağlarından gelen <code>UDP 51820</code> trafiğine izin verin; ağlar arasında dolaşan istemciler için <code>0.0.0.0/0</code> gerekebilir. IPv6'yı etkinleştirirseniz kurallarını bilinçli şekilde yapılandırın.",
    "Genel erişime açık <code>TCP 51821</code> bağlantı noktasını kapalı tutun. wg-easy yönetim arayüzü sunucunun geri döngü adresine bağlanacak ve SSH yönlendirmesi üzerinden erişilecektir.",
    "Gerekli giden DNS, paket/konteyner indirme ve VPN trafiğine izin verin. Hem bulut hem konuk sistem güvenlik duvarlarını kontrol edin; sağlayıcının depolama kurallarını ve temel ICMP kurallarını koruyun."
  ],
  "stepsHeading": "Sunucuyu oluşturun ve bağlanın",
  "sourceLink": "Sağlayıcının talimatları",
  "connectHeading": "Sunucuyu Mobile SSH içinde kaydedin",
  "connectText": "Sunucular'ı açın, bir sunucu ekleyin ve bu değerleri doldurun. Eşleşen özel anahtarı içeren kimlik bilgisini seçin. Yapılandırdığınız kullanıcı adı kılavuzdaki örnekten farklıysa kendi kullanıcı adınızı kullanın.",
  "hostLabel": "Sunucu adresi",
  "hostValue": "Sağlayıcı konsolundaki sanal makinenin genel IPv4 adresi",
  "portLabel": "Bağlantı noktası",
  "userLabel": "Kullanıcı adı",
  "credentialLabel": "Kimlik doğrulama",
  "credentialValue": "Eşleşen SSH özel anahtarını içeren kimlik bilgisi",
  "identityText": "SSH sunucu anahtarı parmak izini sağlayıcının güvenilir konsolundan veya önyükleme günlüklerinden alın ve bağlantıya güvenmeden önce karşılaştırın. Android'de ilk kullanımı incelemek istiyorsanız yeni kimliklerin otomatik kabulünü kapatın. Kayıtlı bir kimliği değiştirmeden önce anahtar değişikliği uyarılarını araştırın.",
  "connectionGuide": "SSH anahtarları ve kimlik kontrolleri",
  "vpnHeading": "wg-easy'yi ayrı bir adımda kurun",
  "vpnText": "Önce kayıtlı sunucunun terminal açtığını ve hesabınızın root veya sudo erişimi olduğunu doğrulayın. Ardından ortak wg-easy kurulum kılavuzunu izleyin: Docker, sürümü sabitlenmiş konteyner, SSH üzerinden özel yönetim, istemci oluşturma ve VPN doğrulama. Kurucu, bulut API sırrınıza değil SSH erişimine ihtiyaç duyar.",
  "vpnLink": "wg-easy kurulum adımlarına devam edin",
  "apiHeading": "Gelecekteki bir eklenti için isteğe bağlı API kimlik bilgileri",
  "apiIntro": "Konsol üzerinden kurulumda bu bölümü atlayın. Kimlik bilgilerini yalnızca uyumlu bir kaynak hazırlama aracı istediğinde oluşturun. Aşağıdaki izin listeleri hazırlık rehberidir; yayımlanmış bir eklenti için test edilmiş en düşük yetki politikaları değildir.",
  "apiSecretNote": "Kimlik bilgilerini yalnızca desteklenen korumalı bir forma girin. Bulut sırlarını sesli isteklere, terminal komutlarına veya sanal makineye koymayın. Desteklenen en dar kapsamı kullanın, geçerlilik süresini kaydedin ve artık gerekmediğinde kimlik bilgilerini iptal edin.",
  "cleanupHeading": "Artık gerek duymadığınız kaynakları silin",
  "cleanupWarning": "Sanal makineyi durdurmak, kurulum işini iptal etmek veya Mobile SSH profilini kaldırmak bulut kaynaklarını silmez ve ücretlerin duracağını garanti etmez. Silme doğrulanana kadar kaynak kimliklerini saklayın ve ilgisiz kaynakları koruyun.",
  "providers": {
    "aws-lightsail": {
      "consoleSteps": [
        "AWS hesabınızda oturum açın, Lightsail'i açın ve <strong>Örnek oluştur</strong> seçeneğini seçin. Planladığınız VPN konumuna en yakın bölgeyi seçin.",
        "<strong>Linux/Unix → Yalnızca işletim sistemi → Ubuntu 24.04 LTS</strong> seçeneğini seçin. En az 1 GB RAM ve 20 GB depolamalı, çift yığın IPv4/IPv6 planı seçin; gösterilen fiyatı inceleyin.",
        "Bölgesel SSH anahtar çiftini seçin veya RSA açık anahtarınızı yükleyin. Özel anahtarı güvenle saklayın, örneği adlandırın ve <strong>Örnek oluştur</strong> seçeneğini seçin. iOS için aşağıdaki ek anahtar kurulumu gerekir.",
        "<strong>Ağ → Statik IP oluştur</strong> bölümünü açın. Aynı bölgeyi seçin, adresi bu örneğe bağlayın, adlandırın ve oluşturun. Statik IPv4 adresini kaydedin.",
        "Örneğin <strong>Ağ</strong> sekmesinde SSH erişimini telefonunuzun genel IPv4 adresiyle sınırlayın ve <strong>Lightsail tarayıcı SSH/RDP erişimine izin ver</strong> seçeneğini koruyun. Ortak UDP 51820 kuralını ekleyin; IPv6 kurallarını ayrıca inceleyin ve TCP 51821'i kapalı tutun.",
        "iOS için <strong>Bağlan → SSH kullanarak bağlan</strong> seçeneğini seçin. Uygulamanızın Ed25519 açık anahtarını <code>/home/ubuntu/.ssh/authorized_keys</code> dosyasına yeni satır olarak ekleyin; mevcut anahtarları koruyun. Tarayıcı SSH bağlantısı sağlayıcının ayrı anahtarını kullanır; statik IPv4 adresiniz artık hazırdır."
      ],
      "apiSteps": [
        "Yalnızca gelecekteki bir kaynak hazırlama aracı için Lightsail örnekleri, SSH anahtarları, statik IP'ler ve güvenlik duvarlarına yönelik, temizliği de kapsayan gerekli işlemlere sahip özel bir IAM kimliği oluşturun. Desteklenen yerlerde bölgeyi ve kaynakları sınırlayın; bu, test edilmiş en düşük yetki politikası değildir.",
        "<strong>IAM → Kullanıcılar → Güvenlik kimlik bilgileri</strong> altında yalnızca desteklenen bir otomasyon ihtiyaç duyduğunda erişim anahtarı oluşturun. Kimliğini ve sırrını korumalı yerel form üzerinden verin; geçici kimlik bilgileri ayrıca oturum belirtecini gerektirir. Asla root anahtarları kullanmayın."
      ],
      "cleanupSteps": [
        "İşiniz bittiğinde örneği silin. Korunan anlık görüntüleri ve diskleri ayrıca inceleyin; bir örneği durdurmak tüm ücretleri sonlandırmaz.",
        "Bağlantısını ayırdıktan sonra statik IP'yi ayrıca serbest bırakın. Örneği silmek adresi silmez."
      ]
    },
    "aws-ec2": {
      "consoleSteps": [
        "AWS bölgenizde EC2'yi açın ve <strong>Örnek başlat</strong> seçeneğini seçin. Sunucuyu adlandırın ve yayıncısını, mimarisini kontrol ederek resmi Canonical <strong>Ubuntu Server 24.04 LTS</strong> AMI'sini seçin.",
        "En az 1 GB RAM'e ve eşleşen mimariye sahip örnek türünü seçin. <strong>Depolamayı yapılandır</strong> altında önyükleme birimi için en az 20 GB seçin ve tahmini kaynak maliyetlerini inceleyin.",
        "<strong>Anahtar çifti</strong> altında mevcut bir anahtarı seçin veya Linux için Ed25519 anahtar çifti oluşturun/içe aktarın. Eşleşen özel anahtarı uygulamada hazır tutun; AWS açık anahtarı örneğe kurar.",
        "<strong>Ağ ayarları</strong> içinde genel bir alt ağ seçin. VPC'sinde bağlı bir internet ağ geçidi ve bu geçide giden <code>0.0.0.0/0</code> rotası bulunmalıdır. Genel IPv4'ü etkinleştirin; statik adres aşağıda ayarlanacaktır.",
        "Ortak TCP 22 ve UDP 51820 kurallarına sahip güvenlik grubunu oluşturun veya seçin. SSH'yi telefonunuzun genel IPv4 adresiyle sınırlayın, TCP 51821'i kapalı tutun, ardından <strong>Örnek başlat</strong> seçeneğini seçip çalışmasını bekleyin.",
        "<strong>Ağ ve Güvenlik → Elastic IP'ler → Elastic IP adresi ayır</strong> bölümünü açın. Ardından <strong>İşlemler → Elastic IP adresi ilişkilendir</strong> seçeneğiyle bu örneği ve birincil özel IP'sini seçin. Statik IPv4'ü kaydedin; genel IPv4 adresleri ücretlidir."
      ],
      "apiSteps": [
        "Yalnızca gelecekteki bir kaynak hazırlama aracı için örnek oluşturmayı, ilgili AMI/ağ/disk/anahtar kaynaklarını, etiketleri, Elastic IP'leri ve temizliği kapsayan özel bir IAM kimliği oluşturun. Mevcut okuma/başlatma/durdurma izinleri yeterli değildir. Yalnızca örnek profili bağlıyorsanız <code>iam:PassRole</code> ekleyin.",
        "Bu kimliğin kimlik bilgilerini oluşturun veya edinin ve yalnızca desteklenen korumalı yerel ayarlardan verin. Desteklendiğinde oturum belirteciyle birlikte geçici kimlik bilgilerini tercih edin; asla root erişim anahtarları kullanmayın. Bu konsol yöntemi Mobile SSH içinde API anahtarı gerektirmez."
      ],
      "cleanupSteps": [
        "Örneği sonlandırın. <strong>Sonlandırıldığında sil</strong> seçeneğini kontrol edin ve istemediğiniz korunan EBS birimlerini veya anlık görüntüleri ayrıca kaldırın.",
        "Elastic IP'yi ayrıca serbest bırakın. Sonlandırma adresin ilişkisini kaldırır ancak adresi serbest bırakmaz veya ücretlerini durdurmaz."
      ]
    },
    "google-cloud": {
      "consoleSteps": [
        "Bir Google Cloud projesi seçin veya oluşturun, faturalandırmayı ve <strong>Compute Engine API</strong> hizmetini etkinleştirin. <strong>Compute Engine → VM örnekleri → Örnek oluştur</strong> bölümünü açın.",
        "Sanal makineyi adlandırın; bölgesini, alanını ve en az 1 GB RAM'e sahip makineyi seçin. <strong>İşletim sistemi ve depolama → Değiştir</strong> altında <strong>Ubuntu → Ubuntu 24.04 LTS</strong> ve en az 20 GB depolama seçin.",
        "Sanal makinenin bölgesinde bölgesel statik harici IPv4 ayırın. Makinenin <strong>Ağ</strong> ayarlarında hedef VPC/alt ağı seçin ve bu adresi ağ arayüzünün harici IPv4'ü olarak atayın. VPC'de varsayılan internet rotası olmalıdır; projenizde yoksa uygun ağ ve alt ağ oluşturun.",
        "Sanal makinenin SSH anahtar ayarlarında uygulamanızın açık anahtarını kullanıcı adı yorumu <code>mobileuser</code> olacak şekilde ekleyin: <code>ssh-ed25519 AAAA… mobileuser</code>. Projeniz OS Login'i zorunlu tutuyorsa o yöntemi ve atadığı POSIX kullanıcı adını kullanın; meta veri anahtarları bunu geçersiz kılmaz.",
        "<code>wg-vpn</code> gibi bir ağ etiketi ekleyin. Ortak TCP 22 ve UDP 51820 erişimi için bu etiketi hedefleyen gelen trafik güvenlik duvarı kuralları oluşturun. SSH'yi telefonunuzun genel IPv4 adresiyle sınırlayın ve TCP 51821'i kapalı tutun.",
        "Sanal makine yapılandırmasını incelemeyi bitirip <strong>Oluştur</strong> seçeneğini seçin. Örnek çalışana kadar bekleyin, ardından harici IPv4'ü ve yukarıda seçilen SSH kullanıcı adını kaydedin. Kullanıcı adının <code>ubuntu</code> olduğunu varsaymayın."
      ],
      "apiSteps": [
        "Yalnızca gelecekteki bir kaynak hazırlama aracı için proje kapsamlı Compute Örnek Yöneticisi (v1), Compute Ağ Yöneticisi ve Compute Güvenlik Yöneticisi rollerine veya daha dar eşdeğerlerine sahip özel hizmet hesabı kullanın. Compute Ağ Yöneticisi güvenlik duvarı oluşturamaz. Bir VM hizmet hesabı bağlıyorsanız o hesap üzerinde Hizmet Hesabı Kullanıcısı rolünü de verin.",
        "Desteklenen otomasyon JSON anahtarı gerektiriyorsa ve kuruluş politikası izin veriyorsa <strong>IAM ve Yönetici → Hizmet hesapları → Anahtarlar → Anahtar ekle → Yeni anahtar oluştur → JSON</strong> bölümünü açın. Proje kimliğini ve JSON'u korumalı yerel ayarlardan verin; anahtar kısıtlamasını asla aşmayın."
      ],
      "cleanupSteps": [
        "Sanal makineyi silin ve önyükleme/veri disklerinin silinip silinmediğini veya tutulduğunu inceleyin; istemediğiniz korunan diskleri ve anlık görüntüleri kaldırın.",
        "Ayrılmış harici IPv4'ü ayrıca serbest bırakın. Sanal makineyi silmek ayrılmış adresi serbest bırakmaz."
      ]
    },
    "azure": {
      "consoleSteps": [
        "Etkin bir abonelikle Azure portalını açın. Özel bir kaynak grubu oluşturun, ardından <strong>Sanal makineler → Oluştur → Azure sanal makinesi</strong> bölümünde bu aboneliği ve grubu seçin.",
        "Ad ve bölge girin. <strong>Ubuntu Server 24.04 LTS – x64 Gen2</strong> ile en az 1 GB RAM'e sahip uyumlu boyutu seçin. İşletim sistemi diski en az 20 GB olsun; gösterilen maliyeti inceleyin.",
        "<strong>SSH ortak anahtarı</strong> kimlik doğrulamasını seçin, yönetici kullanıcı adını <code>azureuser</code> yapın ve mevcut açık anahtarı seçin. Uygulamanızın Ed25519 açık anahtarını yapıştırın; özel anahtarı uygulamada tutun.",
        "<strong>Ağ</strong> altında VNet ve alt ağ seçin veya oluşturun. Uygun bölgede Standard statik genel IPv4 oluşturun veya seçin ve bu sanal makinenin ağ arayüzü IP yapılandırmasına bağlayın.",
        "İlgili ağ güvenlik grubunu ortak TCP 22 ve UDP 51820 kurallarıyla yapılandırın. SSH'yi telefonunuzun genel IPv4 adresiyle sınırlayın; TCP 51821'i kapalı tutun. Hem alt ağda hem arayüzde güvenlik grubu varsa ikisi de trafiğe izin vermelidir.",
        "<strong>Gözden geçir + oluştur → Oluştur</strong> seçeneğini seçin. Dağıtımı bekleyin, ardından sanal makinenin <strong>Genel Bakış</strong> sayfasından genel IPv4'ü kaydedin. Makine, <code>azureuser</code> hesabı ve seçtiğiniz SSH anahtarıyla hazırdır."
      ],
      "apiSteps": [
        "Yalnızca gelecekteki bir kaynak hazırlama aracı için <strong>Microsoft Entra ID → Uygulama kayıtları</strong> altında tek kiracılı özel uygulama oluşturun. Kiracı, istemci ve abonelik kimliklerini kaydedin. Gerekiyorsa <strong>Sertifikalar ve gizli diziler</strong> altında istemci sırrı oluşturun ve gizli dizi kimliğini değil Değer'ini kopyalayın.",
        "Kaynak grubunun <strong>Erişim denetimi (IAM)</strong> bölümünde bu güvenlik sorumlusuna uygun işlem/ağ izinlerini atayın. Bu özel grupta Katkıda Bulunan rolü geniştir ancak kullanılabilir; daha dar ve test edilmiş bir rolü tercih edin. Grup kapsamlı izin grubu oluşturamayacağı için grubu önceden oluşturun. Korumalı yerel kimlik bilgisi ayarlarını kullanın."
      ],
      "cleanupSteps": [
        "Kaynak grubu yalnızca bu dağıtımı içeriyorsa içeriğini inceleyin ve işiniz bittiğinde grubu silin.",
        "Grubu tutacaksanız sanal makineyi silip bağlı kaynakları silme seçeneklerini kontrol edin. İstemediğiniz korunan diskleri, ağ arayüzlerini ve genel IP'leri ayrıca silin."
      ]
    },
    "digitalocean": {
      "consoleSteps": [
        "Kontrol panelinde <strong>Oluştur → Droplet</strong> bölümünü açın. Kapasitesi bulunan yakın bir <strong>Bölge</strong> seçin. Bu sunucuyu tanımlayan proje ve ana makine adı kullanın; bölge, plan kullanılabilirliği ve fiyat değişebilir.",
        "<strong>İmaj seç → İşletim sistemi</strong> altında <strong>Ubuntu 24.04 LTS</strong> seçin. Yapılandırma türü seçicisi görünürse <strong>Paket</strong>, ardından <strong>Paylaşımlı CPU → Basic</strong> seçin. En az <strong>1 GB RAM</strong> ve <strong>20 GB disk</strong> veya sağlayıcının daha yüksek alt sınırını seçin.",
        "<strong>Kimlik doğrulama yöntemi seç → SSH anahtarı → SSH anahtarı ekle</strong> altında açık anahtarı yapıştırın, adlandırın ve seçin. Eşleşen özel anahtarı cihazınızda tutun; sonradan eklenen hesap anahtarı mevcut Droplet'lere otomatik kurulmaz.",
        "<strong>Ağ</strong> altında <strong>Genel IPv4 adresi</strong> seçili kalsın. Adedi <strong>1</strong> yapın, ana makine adını ve projeyi doğrulayıp <strong>Droplet oluştur</strong> seçeneğine tıklayın. İki genel adres seçeneğini de kaldırmak yalnızca özel erişimli sunucu oluşturur.",
        "<strong>Oluştur → Güvenlik duvarı</strong> bölümünü açıp adlandırın. Varsayılan her yerden SSH kaynağını <strong>TCP 22</strong> için yönetim CIDR aralığınızla değiştirin; isterseniz ortak kılavuzun <strong>UDP 51820</strong> kuralını ekleyin. Uygun giden kuralları tutun, <strong>Droplet'lere uygula</strong> altında sunucuyu seçip güvenlik duvarını oluşturun.",
        "Sunucu değişiminde korunacak adres için <strong>Ağ → Ayrılmış IP'ler → Ayrılmış IP ekle</strong> bölümünü açın. <strong>IPv4 adresi → Droplet'e ata</strong> seçeneğiyle bu Droplet'i seçip onaylayın. Hazırlama tamamlanınca atanan genel IPv4'ü kaydedin."
      ],
      "apiSteps": [
        "Yalnızca gelecekteki uyumlu bir eklenti için: <strong>Hesap → API → Belirteçler → Yeni belirteç oluştur</strong> bölümünü açın. Açıklayıcı ad ve geçerlilik süresi girin.",
        "Uygulanan iş akışının gerekli Droplet, SSH anahtarı, güvenlik duvarı ve ayrılmış IP işlemleri ile bağımlılıkları için <strong>Özel kapsamlar</strong> seçin. Varsayılan olarak Tam Erişim seçmeyin; belirteç gösterildiğinde kaydedin."
      ],
      "cleanupSteps": [
        "Gerekli verileri kaydettikten sonra <strong>Ayarlar → Yok et</strong> bölümünü açın, ilişkili kaynakları inceleyin, Droplet adını girip onaylayın. Seçilmeyen birimler ve anlık görüntüler kalır; otomatik yedekler sona erme tarihlerini korur.",
        "İstenmeyen her adres için <strong>Ağ → Ayrılmış IP'ler → … → Sil</strong> bölümünü açıp <strong>Ayrılmış IP'yi sil</strong> işlemini onaylayın. Korunan adresler ve diğer kaynaklar ücretlendirilmeye devam edebilir."
      ]
    },
    "hetzner": {
      "consoleSteps": [
        "Hedef projeyi ve ardından <strong>Güvenlik duvarları → Güvenlik duvarı oluştur</strong> bölümünü açın. Güvenlik duvarını adlandırıp yönetim CIDR aralığınızdan gelen <strong>TCP 22</strong> trafiğine izin verin. İsterseniz ortak kılavuzun <strong>UDP 51820</strong> kuralını ekleyin. Giden kuralları boş bırakmak giden trafiğe izin verir.",
        "<strong>Sunucular → Sunucu ekle</strong> bölümünü açın. Seçtiğiniz sunucu türünün bulunduğu yakın bir <strong>Konum</strong> seçin. Güvenlik duvarını ve sunucuyu aynı projede tutun; kullanılabilirlik konuma ve güncel kapasiteye göre değişebilir.",
        "En az <strong>1 GB RAM</strong> ve <strong>20 GB disk</strong> veya sağlayıcının daha yüksek alt sınırına sahip kullanılabilir bir <strong>Tür</strong> seçin. <strong>İmaj → İşletim sistemi imajları</strong> altında seçilen sunucu mimarisine uygun <strong>Ubuntu 24.04</strong> seçin.",
        "<strong>Ağ</strong> altında genel <strong>IPv4</strong>'ü etkinleştirin. Aynı proje ve konumda atanmamış <strong>Birincil IPv4</strong> seçin veya Hetzner'ın oluşturmasına izin verin. Yalnızca özel ya da yalnızca IPv6 kullanan sunucu, bu kılavuzun genel IPv4 gereksinimini karşılamaz.",
        "<strong>SSH anahtarı</strong> altında açık anahtarınızı ekleyin veya seçin. <strong>Güvenlik duvarları</strong> altında önceden oluşturduğunuz güvenlik duvarını seçin. Burada seçilen hesap anahtarları oluşturma sırasında kurulur; sonradan başka hesap anahtarı eklemek sunucuyu güncellemez.",
        "Tanınabilir bir <strong>Ad</strong> girin, isteğe bağlı yedekleri ve toplam maliyeti inceleyip <strong>Şimdi oluştur ve satın al</strong> seçeneğine tıklayın. Sunucunun hazır olmasını bekleyip birincil IPv4'ünü kaydedin. Adresi yeniden kullanacaksanız bu IP kaynağını tutun."
      ],
      "apiSteps": [
        "Yalnızca gelecekteki uyumlu bir eklenti için: hedef projenin <strong>Güvenlik → API belirteçleri → API belirteci oluştur</strong> bölümünü açın ve açıklama girin.",
        "Kaynak hazırlama için <strong>Okuma ve Yazma</strong> seçin, pencereyi kapatmadan belirteci kopyalayın. Bu, tek sunucuyla sınırlı izin değil, tüm projeye yazma erişimi verir."
      ],
      "cleanupSteps": [
        "Gerekli verileri kaydedin, ardından hedef sunucuyu silin. Yeni sunucu için adresi tutmak istiyorsanız önce birincil IP'nin <strong>Otomatik sil</strong> ayarını kapatın.",
        "İstemediğiniz korunan birincil IP'leri, birimleri ve anlık görüntüleri ayrıca silin. IPv4 adresi tutulduğu sürece ücretlendirilmeye devam eder; etkin <strong>Otomatik sil</strong>, korunmayan birincil IP'yi sunucusuyla birlikte kaldırır."
      ]
    },
    "linode": {
      "consoleSteps": [
        "<strong>Güvenlik duvarları → Güvenlik duvarı oluştur → Özel güvenlik duvarı</strong> bölümünü açın. Etiket girin. <strong>Varsayılan gelen politikası: Düşür</strong> ve <strong>Varsayılan giden politikası: Kabul et</strong> ayarlarını koruyun; bu, giden trafiğe izin verirken gelen bağlantılar için açık kurallar gerektirir.",
        "<strong>Protokol: TCP</strong>, <strong>Bağlantı noktaları: 22</strong>, yönetim CIDR aralığınızı içeren <strong>Kaynaklar: IP/Ağ maskesi</strong> ve <strong>İşlem: Kabul et</strong> değerleriyle gelen kural ekleyin. İsterseniz ortak kılavuzun <strong>UDP 51820</strong> kuralını ekleyin. Kuralları etkinleştirmek için <strong>Değişiklikleri Kaydet</strong> seçeneğine tıklayın.",
        "<strong>Oluştur → Linode</strong> bölümünü açın. Yakın bir ana işlem bölgesi, ardından <strong>Dağıtımlar → Ubuntu 24.04</strong> seçin. En az <strong>1 GB RAM</strong> ve <strong>20 GB disk</strong> veya sağlayıcının daha yüksek alt sınırına sahip kullanılabilir plan seçin.",
        "<strong>Etiket</strong> değerini ayarlayın. Güvenlik altında mevcut SSH anahtarını seçin veya <strong>SSH anahtarı ekle</strong> seçeneğiyle açık anahtarınızı yapıştırın. SSH anahtarıyla hazırlamada <strong>Root parolası</strong> isteğe bağlıdır; özel anahtarınızı cihazınızda tutun.",
        "Ağ altında <strong>Genel İnternet</strong> ve <strong>Linode Arayüzleri</strong> seçin. Bu genel arayüz için güvenlik duvarınızı seçin. <strong>IP adresi</strong> altında <strong>Ayrılmış</strong> seçeneğiyle aynı bölgedeki adresi seçin veya <strong>IP ayır</strong> seçeneğiyle adres edinin.",
        "<strong>Linode Özeti</strong> içinde isteğe bağlı yedekleri ve diğer ücretleri inceleyip <strong>Linode oluştur</strong> seçeneğine tıklayın. Başlatmayı bekleyip genel IPv4'ü kaydedin. Ayrılmış adres sunucu silindikten sonra hesabınızda kalır ve başka bölgeye taşınamaz."
      ],
      "apiSteps": [
        "Yalnızca gelecekteki uyumlu bir eklenti için: kullanıcı adı menünüzden <strong>API Belirteçleri → Kişisel Erişim Belirteci Oluştur</strong> bölümünü açın. Etiket ve geçerlilik süresi belirleyin.",
        "Yalnızca gerekli kapsamları verin: kaynak hazırlama genellikle Linode ve Güvenlik Duvarları için Okuma/Yazma gerektirir; adres ayırmak veya serbest bırakmak ayrıca <code>ips:read_write</code> ister. Belirteci güvenle saklayın."
      ],
      "cleanupSteps": [
        "Gerekli verileri kaydedin, ardından <strong>Linode'lar → … → Sil → Linode'u sil</strong> bölümünü açın. Ayrı tutulan birimleri ve imajları kontrol edin.",
        "İstenmeyen adres için <strong>Ayrılmış IP'ler → … → Ayırmayı iptal et</strong> seçeneğini açıp onaylayın. Ayrılmış IP'ler sunucu silindikten sonra kalır ve serbest bırakılana kadar ücretlendirilir."
      ]
    },
    "vultr": {
      "consoleSteps": [
        "<strong>Hesap → SSH Anahtarları → SSH Anahtarı Ekle</strong> bölümünü açın. Açık anahtarınızı yapıştırıp adlandırın ve kaydedin. Eşleşen özel anahtarı cihazınızda tutun; örneği yapılandırırken bu kayıtlı açık anahtarı seçin.",
        "<strong>Ağ → Güvenlik Duvarı Grupları → Güvenlik Duvarı Grubu Oluştur</strong> bölümünü açıp adlandırın. Yönetim CIDR aralığınızdan <strong>TCP 22</strong> için gelen IPv4 kuralı ve isteğe bağlı <strong>UDP 51820</strong> kuralını ekleyin. Kayıtlı kural bulunduğunu doğrulayın: boş gruplar uygulanmaz.",
        "<strong>İşlem → Örnekler → Örnek Oluştur + → Paylaşımlı CPU</strong> bölümünü açın. En az <strong>1 GB RAM</strong> ve <strong>20 GB disk</strong> veya sağlayıcının daha yüksek alt sınırına sahip kullanılabilir plan seçin. Yakın bir konum seçip <strong>Yapılandır</strong> seçeneğine tıklayın.",
        "<strong>İmaj Seçimi ve Yapılandırma → İşletim Sistemi</strong> altında <strong>Ubuntu 24.04</strong> seçin. <strong>Sunucu Ayarları</strong> altında <strong>SSH Anahtarları</strong> kaydınızı ve kuralları doldurulmuş <strong>Güvenlik Duvarı Grubu</strong> seçeneğini belirleyin. <strong>Sunucu 1 Ana Makine Adı</strong> ve <strong>Sunucu 1 Etiketi</strong> girin.",
        "<strong>Örnek Bağlantısı</strong> altında <strong>Genel IP'li Örnekler</strong> seçin ve <strong>Genel IPv4</strong> etkin kalsın. Otomatik yedekleri ve diğer isteğe bağlı ücretleri inceleyin. <strong>Sınırlı Kullanıcı Girişi</strong>, giriş hesabını <code>root</code> yerine sudo kullanabilen <code>linuxuser</code> yapar. <strong>Özet</strong> bölümünü inceleyip <strong>Dağıt</strong> seçeneğine tıklayın.",
        "Örneğin hazır olmasını bekleyin ve genel IPv4'ünü kaydedin. Normal adres örnek var olduğu sürece sabit kalır; değişimden sonra da kalması gerekiyorsa aynı bölgeden ayrılmış IP kullanın."
      ],
      "apiSteps": [
        "Yalnızca gelecekteki uyumlu bir eklenti için: <strong>Hesap → API</strong> bölümünü açın, ardından <strong>API'yi Etkinleştir</strong> seçeneğini <strong>Kişisel Erişim Belirteci</strong> altında seçin. Kimlik bilgisini güvenle saklayın.",
        "<strong>Erişim Denetimi</strong> altında API isteklerinin geleceği IP/CIDR aralığına izin verin. Mobil ağ değişimlerinden sonra güncelleyin; bu, belirli kaynak izinlerini değil isteklerin kaynağını sınırlar."
      ],
      "cleanupSteps": [
        "Gerekli verileri kaydedin, örneği açıp <strong>Sunucuyu Yok Et</strong> seçeneğine tıklayın. <strong>Evet, bu sunucuyu yok et</strong> ve ardından <strong>Sunucuyu Yok Et</strong> seçin.",
        "İstemediğiniz korunan adresleri <strong>Ağ → Ayrılmış IP'ler → Ayrılmış IP'yi Kaldır</strong> yoluyla silin. Ayrı depolama ve anlık görüntüleri de kontrol edin; sunucu silmek hesabın tamamını temizlemez."
      ]
    },
    "oracle-cloud": {
      "consoleSteps": [
        "OCI bölgenizi ve özel bir bölme seçin. İşlem, birim ve genel IP kotalarını doğrulayın; mevcut kapasite ve ücretsiz katmana uygunluk seçilen kaynaklara bağlıdır.",
        "<strong>Ağ → Sanal bulut ağları → VCN Sihirbazını Başlat → İnternet Bağlantılı VCN Oluştur</strong> bölümünü açın. Genel alt ağını kullanın ve İnternet Ağ Geçidi üzerinden <code>0.0.0.0/0</code> rotasını doğrulayın.",
        "Genel alt ağın güvenlik listesini ve bağlı ağ güvenlik gruplarını inceleyin. TCP <code>22</code> erişimini yönetim CIDR aralığınızla sınırlayın, UDP <code>51820</code> için izin verin ve gerekli giden/ICMP kurallarını koruyun.",
        "<strong>İşlem → Örnekler → Örnek oluştur</strong> bölümünü açın. Adı, bölmeyi ve kullanılabilirlik etki alanını belirleyin. <strong>İmajı değiştir → Ubuntu → 24.04</strong>, uyumlu VM şekli ve yeterli bellek ile önyükleme depolaması seçin.",
        "Genel alt ağı seçip genel IPv4 atamasını etkinleştirin. <strong>SSH anahtarları ekle</strong> altında Ed25519/ECDSA açık anahtarınızı yapıştırın veya yükleyin; konsolun ürettiği anahtar RSA'dır. Eşleşen özel anahtarı cihazınızda tutun.",
        "Sanal makineyi inceleyip oluşturun. Çalışıyor durumuna geçtiğinde genel IPv4'ünü kaydedin. Sanal makine değişiminde korunacak adres için geçici IP'yi birincil özel IP'sine atanmış ayrılmış genel IP ile değiştirebilirsiniz; yeni adresi kaydedin."
      ],
      "apiSteps": [
        "Yalnızca gelecekteki bir kaynak hazırlama eklentisi için: yöneticiden bu bölmede özel IAM kullanıcı/grubuna gerekli işlem, ağ ve birim izinlerini vermesini isteyin.",
        "<strong>Kullanıcı ayarları → API Anahtarları → API Anahtarı Ekle</strong> bölümünü açın. RSA PEM imzalama özel anahtarını, parmak izini, kiracılık/kullanıcı OCID'lerini ve bölgeyi kaydedin; bölme OCID'sini not edin. Bu anahtar SSH anahtarınızdan ayrıdır."
      ],
      "cleanupSteps": [
        "Örneği sonlandırın ve gerekmiyorsa önyükleme birimini açıkça silin; OCI bu birimi varsayılan olarak korur. Saklamak istediğiniz verileri önce yedekleyin.",
        "İstenmeyen ayrılmış genel IP'leri ve korunan birimleri silin. Sihirbazın oluşturduğu özel ağ kaynakları dahil, özel VCN'nin kullanılmayan alt ağlarını, ağ geçitlerini ve diğer ağ kaynaklarını kaldırın."
      ]
    },
    "ovhcloud": {
      "consoleSteps": [
        "Public Cloud projesini ve ödeme yöntemini etkinleştirin. <strong>Proje Yönetimi → Kotalar</strong> bölümünü kontrol edin. <strong>SSH anahtarları → SSH anahtarı oluştur</strong> altında açık anahtarınızı adlandırıp yapıştırın ve <strong>Ekle</strong> seçin.",
        "<strong>İşlem → Örnekler → Örnek oluştur</strong> bölümünü açın. Sanal makineyi adlandırın, bölge ve uygun model seçin, Ubuntu <code>24.04</code> ile kayıtlı SSH anahtarını seçin.",
        "Ağ altında <strong>Genel IP ata → Temel Genel IP</strong> seçeneğini etkinleştirin; genel bağlantı varsayılan olarak kapalıdır. Temel IP <code>Ext-Net</code> kullanır ve ağ geçidiyle uyumsuzdur. Otomatik anlık görüntüleri ve maliyetleri inceleyin, saatlik faturalandırmayı seçip <strong>Örneğimi oluştur</strong> seçeneğine tıklayın.",
        "Filtrelemeyi yapılandırmak için <strong>Proje Yönetimi → Kullanıcılar</strong> bölümünü açın. Gerekirse uygun ağ/örnek izinleriyle OpenStack kullanıcısı oluşturun, parolasını kaydedin ve <strong>… → OpenStack Horizon'u Başlat</strong> işlemini seçin.",
        "Horizon'da sanal makinenin bölgesini, ardından <strong>Ağ → Güvenlik Grupları → Güvenlik Grubu Oluştur</strong> seçin. Özel grup oluşturun. <strong>Kuralları Yönet</strong> altında yönetim CIDR aralığınızdan TCP <code>22</code> ve UDP <code>51820</code> trafiğine izin verin; giden kuralları koruyun.",
        "Horizon'da <strong>İşlem → Örnekler → Güvenlik Gruplarını Düzenle</strong> bölümünü açın. Özel grubu uygulayın ve geniş izinli varsayılan grubu yalnızca bu VM'den kaldırın; paylaşılan varsayılan grubu asla düzenlemeyin/silmeyin. Etkin olduğunda Genel Bakış'taki genel IPv4'ü kaydedin."
      ],
      "apiSteps": [
        "Yalnızca gelecekteki bir kaynak hazırlama eklentisi için: hesabınızın API bölgesine ait belirteç oluşturma sayfasını açın. Uygulamayı adlandırın, geçerlilik süresi belirleyin ve Haklar'ı belgelenen proje yolları/işlemleriyle sınırlayın.",
        "Uygulama anahtarını, uygulama sırrını ve tüketici anahtarını güvenle saklayın. Bu imzalı API kimlik bilgileri, Horizon'un kullandığı OpenStack kullanıcı adı/parolasından farklıdır."
      ],
      "cleanupSteps": [
        "Saklamak istediğiniz verileri yedekleyin, ardından örneğin <strong>… → Sil → Örneği sil</strong> işlemini seçin. Saatlik faturalandırma silinene kadar devam eder.",
        "İstenmeyen birimleri, anlık görüntüleri/yedekleri ve bağımsız oluşturulmuş Floating/Additional IP'leri veya ağ geçitlerini ayrıca kaldırın. Sanal makineyi silmek tüm ilişkili kaynakları kaldırmaz."
      ]
    },
    "scaleway": {
      "consoleSteps": [
        "Doğru Kuruluşu ve Projeyi seçin, faturalandırmayı etkinleştirip kotaları kontrol edin. <strong>Proje panosu → SSH anahtarı ekle</strong> altında açık anahtarınızı adlandırıp yapıştırın. SSH anahtarlarının kapsamı bu Projedir.",
        "Seçtiğiniz Kullanılabilirlik Alanında <strong>İşlem → CPU ve GPU Örnekleri → Güvenlik grupları</strong> bölümünü açın. Aynı alanda özel grup oluşturun. Durum bilgili filtrelemeyi etkinleştirin; geleni <strong>Düşür</strong>, gideni <strong>Kabul et</strong> yapın.",
        "Grubun <strong>Kurallar</strong> sekmesinde yönetim CIDR aralığınızdan TCP <code>22</code> ve VPN istemcileri için UDP <code>51820</code> trafiğine izin verin. TCP <code>51821</code> kapalı kalsın. Otomatik oluşturulan varsayılan grup durum bilgisizdir; özel grubunuzu açıkça seçin.",
        "<strong>Örnek Oluştur → CPU Örneği Oluştur</strong> seçeneğini, uygun CPU yapılandırmasını ve aynı Kullanılabilirlik Alanını seçip <strong>Örneği Yapılandır</strong> seçeneğine ilerleyin. Adlandırın, Ubuntu <code>24.04</code>/Noble seçin ve en az 20 GB sistem birimi yapılandırın.",
        "<strong>Genel IPv4</strong> etkin kalsın; bir adres ayırın veya mevcut kullanılabilir adresi seçin. Özel güvenlik grubunuzu seçip gösterilen SSH anahtarlarını doğrulayın. Etkinse IPv6 ayarlarını ayrıca inceleyin.",
        "<strong>İncele</strong> seçeneğini seçin, tahmini maliyetleri kontrol edip <strong>Örnek Oluştur</strong> seçin. Hazırlamanın bitmesini bekleyin ve <strong>Genel Bakış</strong> bölümünden genel IPv4'ü kopyalayın. Bu esnek IP, yaşam döngüsünü sizin yönetmeniz gereken ayrı bir kaynaktır."
      ],
      "apiSteps": [
        "Yalnızca gelecekteki bir kaynak hazırlama eklentisi için: IAM uygulaması oluşturun ve hedef Projede örnekler, ağ ve depolama için gerekli izinleri verin.",
        "<strong>IAM ve API anahtarları → API anahtarları → API anahtarı oluştur</strong> bölümünü açın. Uygulamayı ve geçerlilik süresini seçin. Erişim anahtarını ve yalnızca bir kez gösterilen sırrı kaydedin; Proje UUID'sini ve alanı ayrıca not edin."
      ],
      "cleanupSteps": [
        "Saklamak istediğiniz verileri yedekleyin. Doğru Kullanılabilirlik Alanında örneğin <strong>… → Sil</strong> işlemini seçin, <code>DELETE</code> yazın ve artık gerek duymadığınız ilişkili IP'ler ile Block Storage birimlerinin silinmesini seçin.",
        "<strong>Örneği Sil</strong> işlemini onaylayın. İstenmeyen korunan esnek IP'leri, birimleri ve anlık görüntüleri kontrol edin; yalnızca kapatmak bu kaynakları kaldırmaz."
      ]
    }
  }
};
