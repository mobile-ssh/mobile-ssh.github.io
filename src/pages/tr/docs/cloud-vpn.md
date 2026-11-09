---
layout: ../../../layouts/DocLayout.astro
title: "Bulut sanal makineleri ve wg-easy"
description: "Genel IP adresli bir bulut sanal makinesi oluştur, SSH bağlantısını Mobile SSH'ye kaydet ve wg-easy'yi ayrı adımda kur; sağlayıcı kimlik bilgileri, ağ ve kaynak silme işlemleri burada açıklanıyor."
---

# Bulut sanal makineleri ve wg-easy

Kendi bulut hesabında bir Linux sanal makinesi oluştur, Mobile SSH ile bağlan, ardından WireGuard VPN çalıştırmak için wg-easy kur. Kaynak oluşturmayı kurulumdan ayrı tutmak, aynı makineyi başka bir hizmet için kullanmana veya VPN'i mevcut bir sunucuya kurmana olanak verir.

**Kullanılabilirlik — 8 Kasım 2026:** aşağıda anlatılan hedef akış, ayrı sanal makine oluşturma eklentileridir. İncelenen yerel Android **VPN Setup** uygulaması kaynak oluşturmayı, kurulumu ve istemci içe aktarmayı birleştiriyor; eklenti/katalog değişiklikleri yayımlanmış değil ve gerçek bulut dağıtımları henüz test edilmedi. Ayrı AWS, Google Cloud ve Azure girdileri şu anda yalnızca bildirim/ayar taslaklarıdır; sanal makine listeleme ve kontrol eylemleri uygulanmış değildir ve sanal makine oluşturmazlar. Kataloğunda oluşturma akışı yoksa aşağıdaki konsol ve elle kurulum adımlarını kullan. Yeni yerel akış uyumlu bir Android derlemesi gerektiriyor; eşdeğer iOS otomasyonu ortaya konmuş değil.

## Ayrı sorumlulukları olan iki eklenti

- **Bulut kaynak oluşturucusu:** sağlayıcı API'si üzerinden sanal makineyi, genel adresi ve gerekli ağ kaynaklarını oluşturur, ardından SSH bağlantısını kaydeder. Daha sonraki yönetim veya silme işlemleri için bulut kaynak kimliklerini saklar.
- **wg-easy kurucusu:** seçilen kayıtlı sunucuya SSH ile bağlanır, VPN hizmetini kurar ve istemci yapılandırması oluşturmaya yardım eder. Bulut API kimlik bilgilerine değil, sunucu erişimine ve yönetici yetkilerine ihtiyaç duyar. Elle oluşturulan bir makine de burada kullanılabilir.

Eklentiler arasındaki aktarım kayıtlı sunucu referansını, genel adresi, SSH portunu, kullanıcı adını, SSH kimlik bilgisi referansını ve dağıtım/kaynak kimliklerini içermelidir. Bulut sırları ve özel SSH anahtarları eklenti çıktısına veya sanal makineye kopyalanmamalıdır. VPN'i kaldırmak ve bulut makinesini silmek ayrı işlemlerdir.

## Hesabını ve sunucu ayarlarını hazırla

1. Bir bulut hesabını ve faturalandırmayı etkinleştir, bölge seç ve sanal makine, disk ve genel IP kotalarını kontrol et. Sağlayıcının güncel makine, IPv4, depolama ve trafik ücretlerini incele; ücretsiz katman kullanılabilirliği varsayılmaz.
2. Bu kılavuz için en az **1 GB RAM ve 20 GB disk** içeren, **amd64 veya arm64** mimarisinde özel bir **Ubuntu 24.04 LTS** makinesi seç. Bunlar bu kurulumun temel tercihleridir, wg-easy için evrensel asgari gereksinimler değil. root veya sudo erişimli bir hesap kullan; gözetimsiz kurulum etkileşimsiz yetki yükseltme gerektirir.
3. Özel anahtarı Mobile SSH'de tutarak bir SSH anahtarı seç veya oluştur. Buluta yalnızca genel anahtarı yükle. Lightsail'ın içe aktarma yolu RSA SSH anahtarı gerektirir. Diğer sağlayıcıların ve imajların kabul ettiği anahtar türleri farklıdır. Mevcut iOS SSH istemcisi RSA yerine Ed25519/ECDSA özel anahtarlarını destekler. iOS'te Lightsail için önce sağlayıcının tarayıcıdaki SSH konsolunu kullanarak uygulamanın desteklediği bir genel anahtarı `authorized_keys` dosyasına ekle, ardından bu anahtarla bağlan.
4. Sağlayıcı sunuyorsa tercihen ayrılmış/statik bir **genel IPv4** seç. Özel adres, yalnızca IPv6 kullanan örnek veya sadece dışarı yönlü NAT ağ geçidi bu kılavuzun uç nokta gereksinimini karşılamaz.
5. SSH kaynak CIDR'ını açıkça belirle; örneğin mevcut genel IPv4 adresinin sonuna `/32` ekle. Eklentinin varsayılanının erişimi kısıtladığını varsayma. Mobil veri ve Wi-Fi değişiklikleri, kuralı bulut konsolundan güncellemeyi gerektirebilir.

Bulut API kimlik bilgileri kaynak yönetimine, SSH anahtarları ise sunucuya girişe izin verir. Bunlar farklı kimlik bilgileridir. API sırlarını yalnızca sağlayıcının korumalı kimlik bilgisi formuna gir; sesli istemlere, terminal komutlarına veya kaynak dosyalarına yazma. Yerel Android akışında sağlayıcı kimlik doğrulamasını ve şifreli kimlik bilgisi saklamayı yerel kod yürütür; gerektiğinde bilgiler sağlayıcıya gönderilir, sanal makineye veya eklenti işleyicisine değil. Çevrimdışı ses modeli, bulut API çağrılarını, indirmeleri veya SSH'yi internet olmadan çalıştırmaz.

## Bir bulut seç ve genel adres al

**Konsoldan kurulum** için sağlayıcıya kendin giriş yap; Mobile SSH'nin onun API kimlik bilgilerine ihtiyacı yoktur. Gelecekteki **eklentiyle kaynak oluşturma** için aşağıdaki kimlik bilgisini, gerekli oluşturma, okuma, ağ ve silme işlemlerinin izinleriyle hazırla. Desteklendiği yerde erişimi özel bir proje veya dağıtımla sınırla. Hesap politikaları her iki yöntemde de geçerlidir.

Seçtiğin Ubuntu makinesini genel SSH anahtarınla oluştur ve sonraki bölümdeki SSH kuralını uygula. Bağlantılar, sağlayıcıya özgü adres ve kimlik doğrulama adımlarını açıklar.

<div class="doc-table" tabindex="0" role="region" aria-label="Bulut sağlayıcıları ve genel adresler">

| Sağlayıcı | API ile kaynak oluşturma kimlik bilgisi | Konsolda genel IPv4 ayarı |
| --- | --- | --- |
| [AWS Lightsail](./aws-lightsail/) | Erişim anahtarı kimliği ve sırrı; geçici kimlik bilgileri için oturum belirtecini ekle. Gerekli [Lightsail işlemlerine](https://docs.aws.amazon.com/service-authorization/latest/reference/list_lightsail.html) izin ver. | Çift yığınlı Ubuntu örneği oluştur, RSA SSH anahtarını seç, ardından [kendi bölgesinde statik IPv4](https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-create-static-ip.html) ayır ve bağla. Ubuntu imajında `ubuntu` kullan. |
| [Google Cloud Compute Engine](./google-cloud/) | Hizmet hesabı JSON anahtarı ve proje kimliği. İzinler makine/disk, ağ, adres ve güvenlik duvarı işlemlerini kapsamalı; Network Admin tek başına güvenlik duvarı kurallarını yazamaz. [IAM izinlerini](https://docs.cloud.google.com/compute/docs/access/iam) kontrol et. | Compute Engine API'yi etkinleştir, internet yönlendirmeli VPC/alt ağ seç, [bölgesel harici IPv4](https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address) ayır ve makineye bağla. Eşleşen SSH kullanıcı adını/anahtarını ayarla; OS Login kendi kimlik kurulumunu gerektirir. |
| [Microsoft Azure](./azure/) | Kiracı kimliği, uygulama/istemci kimliği, istemci sırrının **değeri** ve abonelik kimliği. İşlem/ağ izinlerini ver; kaynak grubu oluşturmak üst kapsamda da izin gerektirir. [Hizmet sorumlusu kurulumuna](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal) bak. | Özel kaynak grubu ve VNet/alt ağ oluştur. Makinenin NIC'ine [Standard statik IPv4 Public IP](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses) bağla ve NSG ilişkilendir. Oluşturma sırasında seçtiğin yönetici adını kullan. |
| [DigitalOcean](./digitalocean/) | Gerekli Droplet, SSH anahtarı, Reserved IP, güvenlik duvarı ve ilgili [kapsamlara](https://docs.digitalocean.com/reference/api/create-personal-access-token/) sahip kişisel erişim belirteci. | Genel SSH anahtarıyla Ubuntu Droplet oluştur, [Reserved IPv4](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/) ata ve Cloud Firewall bağla. Ubuntu'nun ilk giriş kullanıcısı genellikle `root` olur. |
| [Hetzner Cloud](./hetzner/) | Projeye özel [Read & Write API belirteci](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/). | [Primary IPv4](https://docs.hetzner.com/cloud/servers/primary-ips/overview/), SSH anahtarın ve Cloud Firewall ile Ubuntu sunucusu oluştur. `root` kullan. Sunucu silindiğinde ayrı Primary IP'nin korunup korunmayacağını kontrol et. |
| [Akamai / Linode](./linode/) | Linodes ve Firewalls okuma/yazma izinleri ve gerekli [okuma kapsamlarına](https://techdocs.akamai.com/linode-api/reference/get-started) sahip kişisel erişim belirteci. | Genel IPv4 ve SSH anahtarıyla Ubuntu Linode oluştur, ardından [Cloud Firewall](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-cloud-firewalls) bağla. `root` kullan. Örneğin atanmış adresini kullanım ömrü boyunca koru. |
| [Vultr](./vultr/) | API erişimi etkin API anahtarı; [izin verilen kaynak IP listesi](https://docs.vultr.com/support/platform/users/how-can-i-manage-api-access-for-users) telefonun mevcut bağlantısına izin vermeli. | Genel ana IPv4, SSH anahtarı ve Firewall Group ile Ubuntu Cloud Compute örneği oluştur. `root` kullan. [Atanmış adres örneğin ömrü boyunca kalır](https://docs.vultr.com/support/products/compute/how-do-i-get-a-vultr-compute-instance-dedicated-ip-address); Reserved IP ayrı bir tercihtir. |
| [Oracle Cloud Infrastructure](./oracle-cloud/) | Kiracılık/kullanıcı OCID'leri, API anahtarı parmak izi ve eşleşen genel imzalama anahtarı kaydedilmiş [RSA özel imzalama anahtarı](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm). SSH anahtarından ayrıdır. | VCN, internet ağ geçidi ve ağ geçidi rotalı genel alt ağ oluştur. Makinenin VNIC özel IP'sine [Reserved Public IPv4](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm) ata. Canonical Ubuntu için `ubuntu` kullan; güvenlik listelerini/NSG'yi ayarla. |
| [OVHcloud Public Cloud](./ovhcloud/) | Eşleşen EU/CA/US API uç noktası için uygulama anahtarı, uygulama sırrı ve doğrulanmış tüketici anahtarı. [API haklarını](https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps) seçilen projenin işlemleriyle sınırla. | Ext-Net üzerinden Basic Public IP, SSH anahtarı ve güvenlik grubuyla Ubuntu [Public Cloud örneği](https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started) oluştur. `ubuntu` kullan. Floating/Additional IP'ler ayrı kaynaklardır. |
| [Scaleway Instances](./scaleway/) | Örnek, birim, IP, güvenlik grubu ve SSH anahtarı izinleri olan IAM uygulamasının API gizli anahtarı ve proje UUID'si. [API anahtarı oluşturma](https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/) belgesine bak. | Ubuntu örneği oluştur, [aynı erişilebilirlik zonunda esnek yönlendirilmiş IPv4](https://www.scaleway.com/en/docs/instances/how-to/use-flexips/) bağla, güvenlik grubu ayarla ve aç. İmajın SSH kullanıcısını kullan; genellikle `root` olur. |

</div>

**[AWS EC2](./aws-ec2/) alternatifi:** [internet ağ geçidi ve ona giden `0.0.0.0/0` rotası](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html) bulunan genel bir alt ağda Ubuntu başlat, SSH anahtarı ve güvenlik grubu seç, ardından [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html) ilişkilendir. `ubuntu` kullan. Yerel otomatik adaptör Lightsail'ı hedefler; EC2 konsol üzerinden kurulur. Elastic IP tek başına özel bir alt ağı erişilebilir yapmaz.

Bir kuruluş hizmet hesabı anahtarlarını, harici IP'leri veya seçtiğin SSH kimlik doğrulama yöntemini yasaklıyorsa yönetici onaylı bir yapılandırma edin. Konsoldan kurulum bu kısıtlamaları aşmaz.

## Kaynakları oluştur ve SSH bağlantısını kaydet

Hedeflenen ayrı akışta **Eklentiler** bölümünü aç, sağlayıcının kaynak oluşturma eklentisini güvenilir katalogdan yükle, hesap ve bölgesini seç; makine boyutu, imaj, genel adres ve SSH anahtarını belirle. Oluşturmayı onaylamadan önce kaynakları ve maliyetleri incele. Oluşturma eylemi olmayan, yalnızca yönetim yapan bir eklenti bu adımı gerçekleştiremez; sağlayıcı konsolunu kullan.

Sağlayıcının makinenin çalıştığını bildirmesini ve SSH'nin erişilebilir olmasını bekle. Makine, disk, adres ve güvenlik duvarı kaynak kimliklerini sakla. İstek zaman aşımına uğrarsa ikinci bir ücretli makine oluşturmamak için yeniden denemeden önce mevcut işlemi incele veya sürdür.

Dönen bağlantıyı Mobile SSH'ye kaydet veya **Sunucular** altında elle ekle: genel IPv4, SSH portu `22`, imajın kullanıcı adı ve eşleşen özel anahtar kimlik bilgisi. Bağlanmadan önce sağlayıcının güvenilir konsolundan SSH sunucu anahtarı parmak izini karşılaştır. Kimlik denetimleri ve kayıtlı kimlik bilgileri için [Başlarken](../getting-started/) bölümüne bak.

## İki ağ katmanını yapılandır

Genel adresin bir rotaya, bulut güvenlik duvarı iznine, konuk sistem güvenlik duvarı iznine ve dinleyen bir hizmete ihtiyacı vardır. Sağlayıcının güvenlik duvarında/güvenlik grubunda bu kuralları kullan; gerekli mevcut konuk kurallarını koru.

- **TCP 22:** SSH için seçtiğin yönetim CIDR'ından erişime izin ver. Kaynak oluştururken ayarla.
- **UDP 51820:** VPN'i kullanacak ağlara izin ver. Gezici istemciler için bu `0.0.0.0/0` olabilir. WireGuard'ı kurarken bulut oluşturucusu veya konsol üzerinden ekle.
- **TCP 51821:** genel erişime kapalı tut. wg-easy yönetim arayüzünü yalnızca sunucunun loopback adresinde yayımla ve SSH tüneliyle eriş.
- **Giden trafik:** paket/konteyner indirmelerine, DNS'e ve VPN'in taşıması beklenen internet trafiğine izin ver.

Docker'ın [güvenlik duvarı davranışını](https://docs.docker.com/engine/install/ubuntu/#firewall-limitations) kontrol et: yayımlanan konteyner portları UFW kurallarını aşabilir. Yönetim arayüzünü gizlemek için yalnızca UFW'ye güvenme ve özellikle OCI'nin depolama/iSCSI kuralları olmak üzere sağlayıcının güvenlik duvarı zincirlerini temizleme.

<a id="wg-easy-install"></a>

## Seçilen makineye wg-easy kur

Ayrı kurucu kayıtlı SSH sunucusunu kabul etmeli ve sunucu değişiklikleri için onay istemelidir. İşletim sistemini, yetkileri, mevcut Docker/VPN kurulumunu ve port çakışmalarını kontrol etmeli, kalıcı verileri korumalı ve kurulan sürümü bildirmelidir. Bulut hesabı sırrına ihtiyacı yoktur; bulut güvenlik duvarını değiştirmek için kaynak oluşturucuyu veya konsolu kullan.

Katalogdaki eski **WireGuard (wg-easy)** eklentisi etkin SSH oturumu ve Docker gerektirir. Yeni otomatik kurucu değildir ve yerel istemci içe aktarma sözü vermez. Uyumlu güncel kurucu kullan veya yeni, özel bir makinede Mobile SSH terminalinden aşağıdaki elle kurulum yolunu izle.

### SSH üzerinden elle kurulum

Docker Engine ve Compose eklentisini resmî [Ubuntu talimatlarıyla](https://docs.docker.com/engine/install/ubuntu/) kur. Ardından asıl projeden sürümü belirtilmiş yapılandırmayı indir:

```sh
sudo mkdir -p /opt/wg-easy
sudo curl -fL https://raw.githubusercontent.com/wg-easy/wg-easy/v15.4.0/docker-compose.yml -o /opt/wg-easy/compose.yaml
```

Başlatmadan önce `/opt/wg-easy/compose.yaml` dosyasını yetkili bir terminal düzenleyicisiyle düzenle. `services.wg-easy` altında imajı değiştir, ortam bloğunu yorumdan çıkar veya ayarla ve port eşlemelerini bu değerlerle değiştir. Kalıcı birim, modül bağlama, yetenekler, ağlar ve sysctls dahil asıl dosyanın kalanını koru:

```yaml
image: ghcr.io/wg-easy/wg-easy:15.4.0@sha256:0e7bc9d34e86ddcaa92bc700d4d7dc9b33291dbc07ac8d13382f7c2095f949ec
environment:
  - INSECURE=true
ports:
  - "51820:51820/udp"
  - "127.0.0.1:51821:51821/tcp"
```

Bu tam bir Compose dosyası değil, değiştirilecek bir parçadır; hizmet altındaki YAML girintisini koru. `INSECURE=true`, HTTP'ye yalnızca loopback SSH tüneli için izin verir. Yönetim portunu internete açma. Konteyner dinleyicisi, ana makine tarafındaki loopback eşlemesinden farklıdır. Asıl projenin [HTTP yapılandırmasına](https://wg-easy.github.io/wg-easy/latest/examples/tutorials/reverse-proxyless/) bak.

```sh
cd /opt/wg-easy
sudo docker compose -f compose.yaml config --quiet
sudo docker compose -f compose.yaml up -d
sudo docker compose -f compose.yaml ps
```

Konteynerin `/etc/wireguard` verilerini kalıcı biriminde tut. v15'e eski `PASSWORD`, `PASSWORD_HASH` veya `WG_HOST` tariflerini uygulama; kurulum sihirbazını kullan. İmaj bilinçli olarak sabitlenmiştir: yükseltme, yalnızca `pull` çalıştırmayı değil, yeni sürümü inceleyip sabitlenmiş referansı değiştirmeyi gerektirir.

## Yönetim arayüzünü aç ve istemci ekle

Mobile SSH'de yerel port `51821`, uzak ana makine `127.0.0.1` ve uzak port `51821` olacak şekilde [yerel port yönlendirme](../port-forwarding/) oluştur. SSH bağlantısını etkin tut ve aynı telefonda `http://127.0.0.1:51821` adresini aç. Yerel port kullanılıyorsa başka bir port seç ve tarayıcı URL'sinde onu kullan.

wg-easy'nin [ilk çalıştırma sihirbazında](https://wg-easy.github.io/wg-easy/latest/guides/setup/) yönetici hesabı oluştur, yeni kurulum seç ve VPN uç noktasını makinenin genel IPv4 adresi veya DNS adı ile port `51820` olarak ayarla. VPN uç noktası, web arayüzünün loopback adresi veya port `51821` değildir.

Her cihaz için bir istemci oluştur ve WireGuard `.conf` dosyasını indir. Mobile SSH derlemen sunuyorsa **VPN → WireGuard** bölümünü aç, profil ekle, dosyayı içe aktar ve kaydet. Güncel Android ve iOS kaynak kodu dosya içe aktarmayı destekler; kurulu derlemeni kontrol et. Yerel Android birleşik akışı doğrudan içe aktarabilir, ancak bu eski eklenti veya iOS otomasyonu hakkında bir söz değildir. Yapılandırma dosyaları ve QR kodları özel anahtar içerir; gizli tut.

## VPN'i doğrula ve hataları gider

Profili başlat ve işletim sisteminin VPN isteğini onayla. Yakın zamanda gerçekleşen eş el sıkışmasını ve artan trafik sayaçlarını kontrol et; ardından DNS'i ve hedeflenen internet veya özel ağ rotalarını dene. İçe aktarılmış profil veya çalışan konteyner tek başına VPN'in çalıştığını kanıtlamaz.

- **Makine oluşturma reddedildi:** faturalandırma, kota, bölgesel kapasite, kimlik bilgisi süresi ve tam IAM izinlerini kontrol et. Google Cloud güvenlik duvarı yazımları Network Admin dışında izinler gerektirir.
- **SSH zaman aşımı:** genel adres, alt ağ yönlendirmesi, TCP 22 kuralları ve telefonun mevcut kaynak IP'sini kontrol et. Kimlik doğrulama hataları genellikle doğru imaj kullanıcı adı ve SSH anahtarı gerektirir.
- **Yönetim arayüzü erişilemiyor:** SSH yönlendirmesini bağlı tut, konteyner durumunu ve loopback port eşlemesini kontrol et, HTTP'nin yalnızca tünel için açık olduğunu doğrula.
- **WireGuard el sıkışması yok:** istemci uç noktasını, iki güvenlik duvarı katmanında UDP 51820'yi, istemci anahtarlarını ve sunucunun dinleyip dinlemediğini kontrol et.
- **El sıkışması var, trafik yok:** yönlendirme/NAT, DNS, rota çakışması ve `AllowedIPs` değerini incele. Tam tünel IPv4, `0.0.0.0/0` kullanır; IPv6'yı ayrıca değerlendir. Üst ağda IPv6 bağlantısı olmayan makine IPv6 internet çıkışı sunamaz; yalnızca IPv4 rotaları IPv6'yı VPN dışında bırakabilir.

## İstemcileri kaldır ve bulut ücretlerini durdur

Yerel profili atmadan önce istemciyi wg-easy'de iptal et. Mobile SSH'de profil silmek sunucudaki eş anahtarını iptal etmez. VPN konteynerini veya kalıcı verisini kaldırmadan önce gerekli yapılandırmayı güvenli biçimde yedekle.

Artık gerek olmayan makineyi sorumlu kaynak oluşturucusu veya sağlayıcı konsoluyla sil; sonra tutulan diskleri, anlık görüntüleri, ayrılmış/genel adresleri ve ağ kaynaklarını kontrol et. Özel Azure kaynak grubunu silmeden önce içeriğini incele. Eklentinin yönettiği dağıtıma ilgisiz kaynaklar ekleme.

Makineyi durdurmak, kurulum işini iptal etmek veya eklentiyi kaldırmak kaynakların silindiğini ya da ücretlerin durduğunu garanti etmez. Konsoldan oluşturulan kaynakları temizlemek senin sorumluluğundadır; silme onaylanana kadar sağlayıcının kaynak kimliklerini sakla.
