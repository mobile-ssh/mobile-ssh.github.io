---
layout: ../../../layouts/DocLayout.astro
title: "Bulut sanal makineleri ve wg-easy"
description: "Genel IP adresli bir bulut sanal makinesi oluştur, SSH bağlantısını Mobile SSH'ye kaydet ve wg-easy'yi ayrı adımda kur; sağlayıcı kimlik bilgileri, ağ ve kaynak silme işlemleri burada açıklanıyor."
---

# Bulut sanal makineleri ve wg-easy

Kendi bulut hesabınızda bir Linux VM oluşturup wg-easy ile WireGuard VPN çalıştırın. Uyumlu Android derlemelerinde yayımlanmış **VPN Setup** eklentisi, tek bir yönlendirmeli akışta VM oluşturabilir, wg-easy kurabilir ve istemciyi içe aktarabilir. VM’yi sağlayıcının konsolunda oluşturup Mobile SSH üzerinden kurulum yapabilir veya mevcut bir genel sunucuyu kullanabilirsiniz.

**Kullanılabilirlik — 19 Kasım 2026:** **VPN Setup 1.0.7**, [varsayılan eklenti kataloğunda](https://github.com/mobile-ssh/mobile-ssh-plugins/tree/main/plugins/vpnsetup) yayımlanmıştır. Temel kurulum eklenti köprüsü **1.3.0**, sunucu güncellemeleri **1.4.0**, uygun tamamlanmış kayıtların kaldırılması **1.5.0** gerektirir. Kullanılabilirlik kurulu Android derlemesine ve sürüm kanalına bağlıdır; eklentinin yayımlanması belirli bir uygulama sürümünün size sunulduğunu doğrulamaz. Eşdeğer iOS otomasyonu doğrulanmamıştır. Eklenti yoksa aşağıdaki konsol ve elle kurulum yönergelerini kullanın.

## Yönlendirmeli veya elle iş akışını seçin

- **Bulut API’siyle oluştur:** VPN Setup sağlayıcı hesabınızla VM ve ağ kaynaklarını oluşturur, SSH bağlantısını kaydeder, wg-easy kurar ve istemciyi içe aktarır. Sonraki temizlik için kaynak kimliklerini ve sahiplik kayıtlarını saklar.
- **Bulut konsolunda oluştur veya mevcut sunucuyu kullan:** VM’yi kendiniz oluşturup genel IPv4 adresini, SSH kullanıcı adını ve anahtarını VPN Setup’a verin ya da aşağıdaki elle kurulum adımlarını izleyin. Eklentinin sunucunuza kurulum yapması için bulut API kimlik bilgileri gerekmez.

Yayımlanmış eklenti kaynak oluşturma ile kurulumu birleştirir; ayrı sağlayıcı ve kurulum eklentileri planlanan mimari olarak kalmaktadır. API ile oluşturulan kaynaklarla sizin sağladığınız sunucuların silinme davranışı farklıdır; aşağıda açıklanmıştır. Android emülatöründe kaydedilmiş canlı Hetzner testi kurulum, VPN trafiği, istemci yönetimi, özel yönetim erişimi ve temizliği başarıyla tamamladı. Bu, her sağlayıcı, hesap politikası veya fiziksel telefon için canlı kabul testi yapıldığını göstermez.

## Hesabını ve sunucu ayarlarını hazırla

1. Bir bulut hesabını ve faturalandırmayı etkinleştir, bölge seç ve sanal makine, disk ve genel IP kotalarını kontrol et. Sağlayıcının güncel makine, IPv4, depolama ve trafik ücretlerini incele; ücretsiz katman kullanılabilirliği varsayılmaz.
2. Bu kılavuz için en az **1 GB RAM ve 20 GB disk** içeren, **amd64 veya arm64** mimarisinde özel bir **Ubuntu 24.04 LTS** makinesi seç. Bunlar bu kurulumun temel tercihleridir, wg-easy için evrensel asgari gereksinimler değil. root veya sudo erişimli bir hesap kullan; gözetimsiz kurulum etkileşimsiz yetki yükseltme gerektirir.
3. Özel anahtarı Mobile SSH'de tutarak bir SSH anahtarı seç veya oluştur. Buluta yalnızca genel anahtarı yükle. Lightsail'ın içe aktarma yolu RSA SSH anahtarı gerektirir. Diğer sağlayıcıların ve imajların kabul ettiği anahtar türleri farklıdır. Mevcut iOS SSH istemcisi RSA yerine Ed25519/ECDSA özel anahtarlarını destekler. iOS'te Lightsail için önce sağlayıcının tarayıcıdaki SSH konsolunu kullanarak uygulamanın desteklediği bir genel anahtarı `authorized_keys` dosyasına ekle, ardından bu anahtarla bağlan.
4. Sağlayıcı sunuyorsa tercihen ayrılmış/statik bir **genel IPv4** seç. Özel adres, yalnızca IPv6 kullanan örnek veya sadece dışarı yönlü NAT ağ geçidi bu kılavuzun uç nokta gereksinimini karşılamaz.
5. SSH kaynak CIDR'ını açıkça belirle; örneğin mevcut genel IPv4 adresinin sonuna `/32` ekle. Eklentinin varsayılanının erişimi kısıtladığını varsayma. Mobil veri ve Wi-Fi değişiklikleri, kuralı bulut konsolundan güncellemeyi gerektirebilir.

Elle kurulum yukarıdaki mimarileri destekler. VPN Setup şu anda **amd64/x86-64 üzerinde Ubuntu 24.04** seçer, **SSH bağlantı noktası 22** üzerinden bağlanır ve **Ed25519 veya RSA** SSH anahtarlarını kabul eder; Lightsail akışı RSA gerektirir. ECDSA anahtarları, yalnızca özel adresli sunucular ve yalnızca IPv6 uç noktaları bu akışta desteklenmez. Mevcut sunucunun genel IPv4 adresi ve etkileşimsiz yönetici erişimi olmalıdır.

Bulut API kimlik bilgileri kaynak yönetimini, SSH anahtarları sunucu oturum açmayı yetkilendirir. API sırlarını yalnızca korumalı yerel kimlik bilgisi formuna girin; sesli istemlere, terminal komutlarına veya kaynak dosyalara yazmayın. Yerel kod onaylı sağlayıcı uç noktalarında kimlik doğrular; sırlar VM’ye veya eklenti işçisine gönderilmez. Hatırlanan bilgiler Android Keystore ile şifrelenir; hatırlamamayı seçerseniz bellekte kalır ve uygulama süreci bittikten sonra yeniden girilmesi gerekebilir.

Sesli kontroller desteklenen gizli olmayan soruları yanıtlayabilir ve ilerlemeyi bildirebilir; kimlik bilgisi girişi ve onaylar ekran gerektirir. Korumalı formlarda mikrofon kaydı duraklar ve açık bir işlemle sürdürülmelidir. Sesli kurulum ayrı etkinleştirme, indirilmiş yerel model ve mikrofon izni gerektirir. Çevrimdışı ses modeli, bulut API çağrılarını, indirmeleri veya SSH bağlantılarını internetsiz çalıştırmaz.

## Bir bulut seç ve genel adres al

**Konsol kurulumu** için sağlayıcıya kendiniz giriş yapın; Mobile SSH onun API kimlik bilgilerine ihtiyaç duymaz. **VPN Setup API ile kaynak oluşturma** için aşağıdaki bilgileri gerekli oluşturma, okuma, ağ ve silme izinleriyle hazırlayın. Eklenti bu tablodaki on sağlayıcıyı uygular; AWS EC2 yalnızca konsoldan kullanılan ayrı bir seçenektir. Destekleniyorsa erişimi özel bir proje veya dağıtımla sınırlayın. Hesap politikaları her iki yöntemde de geçerlidir.

Seçtiğin Ubuntu makinesini genel SSH anahtarınla oluştur ve sonraki bölümdeki SSH kuralını uygula. Bağlantılar, sağlayıcıya özgü adres ve kimlik doğrulama adımlarını açıklar.

<div class="doc-table" tabindex="0" role="region" aria-label="Bulut sağlayıcıları ve genel adresler">

| Sağlayıcı | API ile kaynak oluşturma kimlik bilgisi | Konsolda genel IPv4 ayarı |
| --- | --- | --- |
| [AWS Lightsail](./aws-lightsail/) | Erişim anahtarı kimliği ve sırrı; geçici kimlik bilgileri için oturum belirtecini ekle. Gerekli [Lightsail işlemlerine](https://docs.aws.amazon.com/service-authorization/latest/reference/list_lightsail.html) izin ver. | Çift yığınlı Ubuntu örneği oluştur, RSA SSH anahtarını seç, ardından [kendi bölgesinde statik IPv4](https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-create-static-ip.html) ayır ve bağla. Ubuntu imajında `ubuntu` kullan. |
| [Google Cloud Compute Engine](./google-cloud/) | Hizmet hesabı JSON anahtarı ve proje kimliği. İzinler VM/disk, ağ, adres ve güvenlik duvarı işlemlerini kapsamalıdır; Compute Network Admin tek başına güvenlik duvarı kurallarını yazamaz. [IAM izinlerini](https://docs.cloud.google.com/compute/docs/access/iam) kontrol edin. | Compute Engine API hizmetini etkinleştirin, internet yönlendirmesi olan VPC/alt ağ seçin, [bölgesel harici IPv4](https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address) ayırıp VM’ye bağlayın. Eşleşen SSH kullanıcı adını/anahtarını yapılandırın; OS Login ayrı kimlik kurulumu gerektirir. VPN Setup meta veri SSH anahtarlarını kullanır ve kendi VM’sinde OS Login’i kapatır; kuruluşunuz OS Login gerektiriyorsa onaylı bir konsol yapılandırması kullanın. |
| [Microsoft Azure](./azure/) | Kiracı kimliği, uygulama/istemci kimliği, istemci sırrının **değeri** ve abonelik kimliği. VPN Setup kendi dağıtım kaynak grubunu oluşturur: abonelik veya üst kapsamda grup oluşturma/silme ve hesaplama/ağ işlemlerine izin verin. Yalnızca mevcut gruba erişim yeterli değildir. [Hizmet sorumlusu kurulumuna](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal) bakın. | Ayrı bir kaynak grubu ve VNet/alt ağ oluşturun. VM NIC’ye [Standard statik IPv4 Public IP](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses) bağlayın ve NSG ilişkilendirin. Oluştururken seçtiğiniz yönetici kullanıcı adını kullanın. |
| [DigitalOcean](./digitalocean/) | Gerekli Droplet, SSH anahtarı, Reserved IP, güvenlik duvarı ve ilgili [kapsamlara](https://docs.digitalocean.com/reference/api/create-personal-access-token/) sahip kişisel erişim belirteci. | Genel SSH anahtarıyla Ubuntu Droplet oluştur, [Reserved IPv4](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/) ata ve Cloud Firewall bağla. Ubuntu'nun ilk giriş kullanıcısı genellikle `root` olur. |
| [Hetzner Cloud](./hetzner/) | Projeye özel [Read & Write API belirteci](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/). | [Primary IPv4](https://docs.hetzner.com/cloud/servers/primary-ips/overview/), SSH anahtarın ve Cloud Firewall ile Ubuntu sunucusu oluştur. `root` kullan. Sunucu silindiğinde ayrı Primary IP'nin korunup korunmayacağını kontrol et. |
| [Akamai / Linode](./linode/) | Linodes ve Firewalls okuma/yazma izinleri ve gerekli [okuma kapsamlarına](https://techdocs.akamai.com/linode-api/reference/get-started) sahip kişisel erişim belirteci. | Genel IPv4 ve SSH anahtarıyla Ubuntu Linode oluştur, ardından [Cloud Firewall](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-cloud-firewalls) bağla. `root` kullan. Örneğin atanmış adresini kullanım ömrü boyunca koru. |
| [Vultr](./vultr/) | API erişimi etkin API anahtarı; [izin verilen kaynak IP listesi](https://docs.vultr.com/support/platform/users/how-can-i-manage-api-access-for-users) telefonun mevcut bağlantısına izin vermeli. | Genel ana IPv4, SSH anahtarı ve Firewall Group ile Ubuntu Cloud Compute örneği oluştur. `root` kullan. [Atanmış adres örneğin ömrü boyunca kalır](https://docs.vultr.com/support/products/compute/how-do-i-get-a-vultr-compute-instance-dedicated-ip-address); Reserved IP ayrı bir tercihtir. |
| [Oracle Cloud Infrastructure](./oracle-cloud/) | Kiracılık/kullanıcı OCID'leri, API anahtarı parmak izi ve eşleşen genel imzalama anahtarı kaydedilmiş [RSA özel imzalama anahtarı](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm). SSH anahtarından ayrıdır. | VCN, internet ağ geçidi ve ağ geçidi rotalı genel alt ağ oluştur. Makinenin VNIC özel IP'sine [Reserved Public IPv4](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm) ata. Canonical Ubuntu için `ubuntu` kullan; güvenlik listelerini/NSG'yi ayarla. |
| [OVHcloud Public Cloud](./ovhcloud/) | Eşleşen EU/CA/US API uç noktası için uygulama anahtarı, uygulama sırrı ve doğrulanmış tüketici anahtarı. [API haklarını](https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps) seçilen projenin işlemleriyle sınırla. | Ext-Net üzerinden Basic Public IP, SSH anahtarı ve güvenlik grubuyla Ubuntu [Public Cloud örneği](https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started) oluştur. `ubuntu` kullan. Floating/Additional IP'ler ayrı kaynaklardır. |
| [Scaleway Instances](./scaleway/) | Örnek, birim, IP, güvenlik grubu ve SSH anahtarı izinleri olan IAM uygulamasının API gizli anahtarı ve proje UUID'si. [API anahtarı oluşturma](https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/) belgesine bak. | Ubuntu örneği oluştur, [aynı erişilebilirlik zonunda esnek yönlendirilmiş IPv4](https://www.scaleway.com/en/docs/instances/how-to/use-flexips/) bağla, güvenlik grubu ayarla ve aç. İmajın SSH kullanıcısını kullan; genellikle `root` olur. |

</div>

**[AWS EC2](./aws-ec2/) alternatifi:** [İnternet ağ geçidi ve `0.0.0.0/0` ağ geçidi rotası](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html) olan genel alt ağda Ubuntu başlatın, SSH anahtarı ve güvenlik grubu seçip [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html) ilişkilendirin. `ubuntu` kullanın. VPN Setup’ın otomatik AWS bağdaştırıcısı Lightsail’i hedefler; EC2 konsol yoludur. Elastic IP tek başına özel alt ağı erişilebilir yapmaz.

Bir kuruluş hizmet hesabı anahtarlarını, harici IP'leri veya seçtiğin SSH kimlik doğrulama yöntemini yasaklıyorsa yönetici onaylı bir yapılandırma edin. Konsoldan kurulum bu kısıtlamaları aşmaz.

## Kaynakları oluştur ve SSH bağlantısını kaydet

**Eklentiler** bölümünü açın, varsayılan katalogdan **VPN Setup** kurup bağımsız sayfasını açın. **VPN kur**, sağlayıcı, ardından **Bulut API’siyle oluştur** veya **Bulut konsolunda oluştur** seçin. Sahip olduğunuz sunucu için mevcut genel sunucu seçeneğini kullanın. Kimlik bilgilerini yerel forma girin, SSH anahtarı seçin veya oluşturun; konum, boyut, imaj ve SSH kaynak CIDR’sini inceleyin. Hesaba dayalı seçenekler ve ön kontroller desteklenen ürünleri seçmeye yardımcı olur; kapasite ayırmaz veya kota garantilemez. Sağlayıcının güncel fiyatlarını inceleyip oluşturmayı ekranda onaylayın.

VM ve SSH hazır olana kadar mevcut işlemi izleyin. İstek zaman aşımına uğrarsa veya Android arka plan çalışmasını duraklatırsa başka ücretli VM oluşturmak yerine bu işlemi sürdürün ya da inceleyin. Oluşturma yanıtının kaybolması bulut sorgusu veya konsol incelemesi gerektirebilir. VM, disk, adres ve güvenlik duvarı kaynak kimliklerini saklayın; durdurulmuş akış da kaynak oluşturmuş olabilir.

VPN Setup SSH sunucu anahtarı onayı ister, bağlantıyı kaydeder, wg-easy kurar ve ilk istemcisini içe aktarır. Parmak izini sağlayıcının güvenilir konsoluyla karşılaştırın. Elle kurulumda **Sunucular** altında genel IPv4, SSH bağlantı noktası `22`, imaj kullanıcı adı ve eşleşen özel anahtarla sunucuyu ekleyin. Otomatik Google Cloud ve Azure bağdaştırıcıları `ubuntu` kullanır; konsol kılavuzları orada yapılandırılan kullanıcı adlarını kullanır. Kimlik kontrolleri ve kayıtlı bilgiler için [Başlarken](../getting-started/) bölümüne bakın.

## İki ağ katmanını yapılandır

Genel adresin bir rotaya, bulut güvenlik duvarı iznine, konuk sistem güvenlik duvarı iznine ve dinleyen bir hizmete ihtiyacı vardır. Sağlayıcının güvenlik duvarında/güvenlik grubunda bu kuralları kullan; gerekli mevcut konuk kurallarını koru.

- **TCP 22:** SSH için seçtiğiniz yönetim CIDR’sinden izin verin. Kaynak oluştururken yapılandırın.
- **UDP 51820:** VPN kullanacak ağlara izin verin. Gezici istemciler için bu `0.0.0.0/0` olabilir. VPN Setup API ile oluşturulan dağıtımlarda bunu yapılandırır; kendi sunucunuz için bulut konsolunu kullanın.
- **TCP 51821:** genel erişime kapalı tutun. wg-easy yönetim arayüzünü yalnızca sunucunun loopback adresinde yayımlayın ve SSH tüneliyle erişin.
- **Giden trafik:** paket/konteyner indirmelerine, DNS’e ve VPN’in taşıyacağı internet trafiğine izin verin.

Docker'ın [güvenlik duvarı davranışını](https://docs.docker.com/engine/install/ubuntu/#firewall-limitations) kontrol et: yayımlanan konteyner portları UFW kurallarını aşabilir. Yönetim arayüzünü gizlemek için yalnızca UFW'ye güvenme ve özellikle OCI'nin depolama/iSCSI kuralları olmak üzere sağlayıcının güvenlik duvarı zincirlerini temizleme.

<a id="wg-easy-install"></a>

## Seçilen makineye wg-easy kur

Onaydan sonra VPN Setup digest ile sabitlenmiş wg-easy sürümünü SSH üzerinden kurar, Ubuntu 24.04’te gerekirse Docker yükler ve ilk istemciyi oluşturur. Yönetim arayüzünü sunucu loopback adresinde tutar, sağlayıcının güvenlik duvarı zincirlerini korur. Konsolda oluşturulmuş veya mevcut sunucuda bulut güvenlik duvarını kendiniz ayarlayın; kurucu bulut API sırrına değil, SSH erişimi ve yönetici yetkilerine ihtiyaç duyar. İlgisiz bir VPN kurulumunu devralacağını varsaymak yerine yeni ve özel bir sunucu kullanın.

Eski **WireGuard (wg-easy)** katalog eklentisi etkin SSH oturumu ve Docker gerektirir. **VPN Setup** ile ayrıdır ve yerel istemci içe aktarımı vaat etmez. Uyumlu Android derlemesinde VPN Setup kullanın veya yeni, özel bir VM’de Mobile SSH terminalinden aşağıdaki elle kurulum yolunu izleyin.

### SSH üzerinden elle kurulum

Docker Engine ve Compose eklentisini resmî [Ubuntu talimatlarıyla](https://docs.docker.com/engine/install/ubuntu/) kur. Ardından asıl projeden sürümü belirtilmiş yapılandırmayı indir:

```sh
sudo mkdir -p /opt/wg-easy
sudo curl -fL https://raw.githubusercontent.com/wg-easy/wg-easy/v15.5.0/docker-compose.yml -o /opt/wg-easy/compose.yaml
```

Başlatmadan önce `/opt/wg-easy/compose.yaml` dosyasını yetkili bir terminal düzenleyicisiyle düzenle. `services.wg-easy` altında imajı değiştir, ortam bloğunu yorumdan çıkar veya ayarla ve port eşlemelerini bu değerlerle değiştir. Kalıcı birim, modül bağlama, yetenekler, ağlar ve sysctls dahil asıl dosyanın kalanını koru:

```yaml
image: ghcr.io/wg-easy/wg-easy:15.5.0@sha256:071f79a639e9361123a5e57733107320207b844ddbbd92dfa6962f541fe8aac8
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

Her cihaz için bir istemci oluşturup WireGuard `.conf` dosyasını indirin. Mobile SSH derlemeniz sunuyorsa **VPN → WireGuard** bölümünü açın, profil ekleyin, dosyayı içe aktarıp kaydedin. Güncel Android ve iOS kaynakları dosya içe aktarımını destekler; kurulu derlemenizi kontrol edin. VPN Setup uyumlu Android derlemelerinde ilk istemciyi doğrudan içe aktarır. Sayfası ayrıca **İstemci ekle**, **İstemciyi iptal et**, **İstemci/QR dışa aktar** ve özel SSH tüneliyle **Yönetimi aç** sunar. Bu, eski eklentide bu yeteneklerin veya eşdeğer iOS otomasyonunun bulunduğunu doğrulamaz. Yapılandırma dosyaları ve QR kodları özel anahtar içerir; gizli tutun.

## VPN'i doğrula ve hataları gider

Profili başlat ve işletim sisteminin VPN isteğini onayla. Yakın zamanda gerçekleşen eş el sıkışmasını ve artan trafik sayaçlarını kontrol et; ardından DNS'i ve hedeflenen internet veya özel ağ rotalarını dene. İçe aktarılmış profil veya çalışan konteyner tek başına VPN'in çalıştığını kanıtlamaz.

- **VM oluşturma reddedildi:** faturalandırma, kota, bölgesel kapasite, kimlik bilgilerinin süresi ve tam IAM izinlerini kontrol edin. Google Cloud güvenlik duvarı yazımları Compute Network Admin ötesinde izin ister; kuruluşun zorunlu tuttuğu OS Login onaylı konsol kurulumu gerektirir.
- **SSH zaman aşımı:** genel adresi, alt ağ yönlendirmesini, TCP 22 kurallarını ve telefonun mevcut kaynak IP’sini kontrol edin. Kimlik doğrulama hataları genellikle doğru imaj kullanıcı adı ve SSH anahtarı gerektirir.
- **Yönetim arayüzüne erişilemiyor:** SSH yönlendirmesini bağlı tutun, konteyner durumunu ve loopback port eşlemesini kontrol edin; HTTP’nin yalnızca tünel için açık olduğunu doğrulayın.
- **WireGuard el sıkışması yok:** istemci uç noktasını, iki güvenlik duvarı katmanındaki UDP 51820’yi, istemci anahtarlarını ve sunucunun dinleyip dinlemediğini kontrol edin.
- **El sıkışması var, trafik yok:** forwarding/NAT, DNS, çakışan rotalar ve `AllowedIPs` değerini inceleyin. Tam IPv4 tüneli `0.0.0.0/0` kullanır; IPv6’yı ayrı değerlendirin. Üst ağ IPv6’sı olmayan VM, IPv6 internet çıkışı sağlayamaz; yalnızca IPv4 rotaları IPv6’yı VPN dışında bırakabilir.

## Eklentiyi ve VPN sunucusunu güncelleyin

**Eklentiler** bölümünde aynı katalogdaki daha yeni uyumlu sürüm için **Güncelle** işlemini kullanın. Yeni istenen yetenekleri inceleyin. Ayarlar, kimlik bilgileri ve dağıtım kayıtları korunur; tamamlanmamış işlem onu başlatan eklenti sürümüyle devam eder. Eklenti güncellemesi tek başına sunucunun wg-easy konteynerini güncellemez.

Eklenti köprüsü 1.4.0 veya üzerinde **Sunucuyu kontrol et** çalışan wg-easy sürümünü bildirir; **WireGuard’ı güncelle** eklentinin sabitlenmiş sürümünü sunar. Güncellemeyi ekranda onaylayın. Hizmeti değiştirmeden önce imajı indirir; sunucu anahtarlarını, istemcileri ve yerel profilleri korur. Telefon bu VPN’i kullanıyorsa uygulama güncellemeden önce bağlantıyı keser; sonrasında yeniden bağlanın. Bu işlem ana işletim sistemini değil, yönetilen konteyneri günceller.

Başarısız güncelleme; imaj indirme hatasını, başarılı geri almayı ve VPN’i kapalı bırakan başarısız geri almayı ayırır. Hizmetin döndüğünü varsaymak yerine kurtarma kontrolünü izleyin veya yeniden deneyin. Elle kurulumlar ayrı incelenmiş imaj sabitleme değişikliği ve yedek gerektirir; yukarıdaki temiz kurulum tarifi geçiş kılavuzu değildir.

## İstemcileri kaldır ve bulut ücretlerini durdur

Yerel profili atmadan önce istemciyi wg-easy'de iptal et. Mobile SSH'de profil silmek sunucudaki eş anahtarını iptal etmez. VPN konteynerini veya kalıcı verisini kaldırmadan önce gerekli yapılandırmayı güvenli biçimde yedekle.

API ile oluşturulmuş dağıtımda **Dağıtımı sil**, SSH erişimi olmasa bile sahip olduğu bulut kaynaklarını sağlayıcı API’si üzerinden inceleyip siler. Silme duraklar veya başarısız olursa bildirilen kalan kaynakları kontrol edin; temizliği sürdürün veya konsolu inceleyin. İlgisiz kaynakları eklenti yönetimindeki dağıtımın, özellikle özel Azure kaynak grubunun dışında tutun.

Konsolda oluşturulmuş veya mevcut sunucuda eklenti silme işlemi yönettiği VPN kurulumunu kaldırır; VM’nizi veya genel IP’nizi **silmez**. Artık gerekmediğinde bunları sağlayıcı konsolunda silin; kalan diskleri, anlık görüntüleri, adresleri ve ağ kaynaklarını kontrol edin. Kurtarma sırasında hesap veya konum ayarları değiştiyse önceki hesabı ve konumu da inceleyin; önceki Scaleway projesi veya Oracle Cloud bölmesi buna dahildir.

**İş akışını durdur** işlemi keser, kaynakları silmez. Köprü 1.5.0 veya üzerinde **Listeden kaldır** yalnızca uygulama kaydın unutulmaya uygun olduğunu, tamamlanmamış işlem veya kalan yönetilen kaynak bulunmadığını doğrulayabildiğinde sunulur. Bulut kaynaklarını değil, yerel geçmişi temizler. VM’yi durdurmak veya eklentiyi kaldırmak da ücretlerin biteceğini garantilemez. Silme doğrulanana kadar kaynak kimliklerini saklayın.
