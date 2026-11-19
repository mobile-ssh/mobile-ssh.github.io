---
layout: ../../../layouts/DocLayout.astro
title: "VM cloud dan wg-easy"
description: "Buat VM cloud ber-IP publik, simpan koneksi SSH-nya di Mobile SSH, lalu instal wg-easy secara terpisah, dengan penjelasan kredensial penyedia, jaringan, dan penghapusan sumber daya."
---

# VM cloud dan wg-easy

Buat VM Linux di akun cloud milik Anda dan jalankan VPN WireGuard dengan wg-easy. Pada build Android yang kompatibel, plugin **VPN Setup** yang telah diterbitkan dapat membuat VM, memasang wg-easy, dan mengimpor klien dalam satu alur terpandu. Anda juga dapat membuat VM di konsol penyedia lalu memasangnya melalui Mobile SSH, atau memakai server publik yang sudah ada.

**Ketersediaan — 19 November 2026:** **VPN Setup 1.0.7** tersedia dalam [katalog plugin bawaan](https://github.com/mobile-ssh/mobile-ssh-plugins/tree/main/plugins/vpnsetup). Pengaturan dasar memerlukan plugin bridge **1.3.0**, pembaruan server **1.4.0**, dan penghapusan entri selesai yang memenuhi syarat **1.5.0**. Ketersediaan bergantung pada build Android terpasang dan jalur rilis; penerbitan plugin tidak memastikan rilis aplikasi tertentu tersedia bagi Anda. Otomatisasi setara pada iOS belum terkonfirmasi. Gunakan panduan konsol dan manual di bawah jika plugin tidak tersedia.

## Pilih alur terpandu atau manual

- **Buat melalui API cloud:** VPN Setup memakai akun penyedia Anda untuk membuat VM dan sumber daya jaringan, menyimpan koneksi SSH, memasang wg-easy, dan mengimpor klien. ID sumber daya dan catatan kepemilikan disimpan untuk pembersihan nanti.
- **Buat di konsol cloud atau gunakan server yang ada:** buat VM sendiri, lalu berikan IPv4 publik, nama pengguna SSH, dan kuncinya kepada VPN Setup, atau ikuti pemasangan manual di bawah. Plugin tidak memerlukan kredensial API cloud untuk memasang di server Anda.

Plugin yang diterbitkan menggabungkan penyediaan dan pemasangan; plugin terpisah untuk keduanya masih berupa rancangan. Penghapusan sumber daya buatan API berbeda dari server yang Anda sediakan, seperti dijelaskan di bawah. Pengujian langsung Hetzner yang tercatat berhasil memeriksa pengaturan, lalu lintas VPN, pengelolaan klien, administrasi privat, dan pembersihan pada emulator Android. Ini tidak membuktikan penerimaan langsung untuk setiap penyedia, kebijakan akun, atau ponsel fisik.

## Siapkan akun dan pengaturan server

1. Aktifkan akun cloud dan penagihan, pilih wilayah, lalu periksa kuota VM, disk, dan IP publik. Tinjau biaya VM, IPv4, penyimpanan, dan lalu lintas terbaru; ketersediaan tingkat gratis tidak diasumsikan.
2. Untuk panduan ini, pilih VM khusus **Ubuntu 24.04 LTS** dengan minimal **RAM 1 GB dan disk 20 GB**, menggunakan **amd64 atau arm64**. Ini adalah pilihan dasar pengaturan ini, bukan persyaratan minimum universal wg-easy. Gunakan akun dengan akses root atau sudo; instalasi tanpa pengawasan memerlukan peningkatan hak tanpa interaksi.
3. Pilih atau buat kunci SSH, dengan kunci privat tetap disimpan di Mobile SSH. Unggah hanya kunci publik ke cloud. Jalur impor Lightsail memerlukan kunci SSH RSA. Penyedia dan image lain memiliki jenis kunci yang didukung masing-masing. Klien SSH iOS saat ini mendukung kunci privat Ed25519/ECDSA, bukan RSA. Untuk Lightsail di iOS, gunakan dahulu konsol SSH browser penyedia untuk menambahkan kunci publik yang didukung aplikasi ke `authorized_keys`, lalu hubungkan dengan kunci itu.
4. Pilih **IPv4 publik**, sebaiknya alamat tetap atau yang dicadangkan jika penyedia menawarkannya. Alamat privat, instans khusus IPv6, atau gateway NAT yang hanya melayani lalu lintas keluar tidak memenuhi kebutuhan endpoint panduan ini.
5. Tetapkan CIDR sumber SSH secara eksplisit, misalnya IPv4 publik Anda saat ini diikuti `/32`. Jangan menganggap pengaturan bawaan plugin membatasi akses. Perubahan data seluler dan Wi-Fi mungkin mengharuskan pembaruan aturan melalui konsol cloud.

Jalur manual mendukung arsitektur di atas. Saat ini VPN Setup memilih **Ubuntu 24.04 pada amd64/x86-64**, terhubung melalui **port SSH 22**, dan menerima kunci SSH **Ed25519 atau RSA**; jalur Lightsail memerlukan RSA. Kunci ECDSA, host privat saja, dan endpoint IPv6 saja tidak didukung alur ini. Server yang sudah ada harus memiliki IPv4 publik dan akses administratif noninteraktif.

Kredensial API cloud mengizinkan pengelolaan sumber daya; kunci SSH mengizinkan login server. Masukkan rahasia API hanya dalam formulir kredensial native yang terlindungi, jangan dalam prompt suara, perintah terminal, atau berkas sumber. Kode native melakukan autentikasi ke endpoint penyedia yang disetujui; rahasia tidak dikirim ke VM atau pekerja plugin. Kredensial yang diingat dienkripsi dengan Android Keystore; jika tidak disimpan, kredensial hanya berada di memori dan mungkin perlu dimasukkan lagi setelah proses aplikasi berakhir.

Kontrol suara dapat menjawab pertanyaan nonrahasia yang didukung dan melaporkan kemajuan, tetapi pengisian kredensial dan persetujuan memerlukan layar. Perekaman mikrofon dijeda untuk formulir terlindungi dan perlu tindakan eksplisit untuk dilanjutkan. Pengaturan suara perlu diaktifkan, model lokal diunduh, dan izin mikrofon diberikan. Model suara luring tidak membuat panggilan API cloud, unduhan, atau SSH berfungsi tanpa internet.

## Pilih cloud dan dapatkan alamat publik

Untuk **pengaturan melalui konsol**, login sendiri ke penyedia; Mobile SSH tidak memerlukan kredensial API-nya. Untuk **penyediaan API melalui VPN Setup**, siapkan kredensial berikut dengan izin operasi pembuatan, pembacaan, jaringan, dan penghapusan yang diperlukan. Plugin mengimplementasikan sepuluh penyedia dalam tabel; AWS EC2 adalah pilihan terpisah khusus konsol. Batasi akses ke proyek atau deployment khusus jika didukung. Kebijakan akun tetap berlaku untuk kedua cara.

Buat VM Ubuntu pilihan dengan kunci SSH publik Anda dan terapkan aturan SSH pada bagian berikutnya. Tautan menjelaskan langkah alamat dan autentikasi khusus tiap penyedia.

<div class="doc-table" tabindex="0" role="region" aria-label="Penyedia cloud dan alamat publik">

| Penyedia | Kredensial untuk penyediaan melalui API | Pengaturan IPv4 publik di konsol |
| --- | --- | --- |
| [AWS Lightsail](./aws-lightsail/) | ID dan rahasia kunci akses; sertakan token sesi untuk kredensial sementara. Berikan [tindakan Lightsail](https://docs.aws.amazon.com/service-authorization/latest/reference/list_lightsail.html) yang diperlukan. | Buat instans Ubuntu dual-stack, pilih kunci SSH RSA, lalu alokasikan dan pasang [IPv4 statis di wilayahnya](https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-create-static-ip.html). Gunakan `ubuntu` untuk image Ubuntu. |
| [Google Cloud Compute Engine](./google-cloud/) | Kunci JSON akun layanan dan ID proyek. Izin harus mencakup operasi VM/disk, jaringan, alamat, dan firewall; Compute Network Admin saja tidak dapat menulis aturan firewall. Periksa [izin IAM](https://docs.cloud.google.com/compute/docs/access/iam). | Aktifkan Compute Engine API, pilih VPC/subnet dengan rute internet, cadangkan [IPv4 eksternal regional](https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address), lalu pasangkan ke VM. Atur nama pengguna/kunci SSH yang cocok; OS Login memerlukan pengaturan identitas sendiri. VPN Setup memakai kunci SSH metadata dan menonaktifkan OS Login pada VM-nya; jika organisasi mewajibkan OS Login, gunakan konfigurasi konsol yang disetujui. |
| [Microsoft Azure](./azure/) | ID tenant, ID aplikasi/klien, **nilai** rahasia klien, dan ID langganan. VPN Setup membuat grup sumber daya deployment sendiri: berikan izin membuat/menghapus grup pada lingkup langganan atau induk serta operasi komputasi/jaringan. Akses hanya ke grup yang sudah ada tidak cukup. Lihat [pengaturan service principal](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal). | Buat grup sumber daya khusus dan VNet/subnet. Pasangkan [Standard static IPv4 Public IP](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses) ke NIC VM dan kaitkan NSG. Gunakan nama administrator yang dipilih saat pembuatan. |
| [DigitalOcean](./digitalocean/) | Token akses pribadi dengan [cakupan](https://docs.digitalocean.com/reference/api/create-personal-access-token/) Droplet, kunci SSH, Reserved IP, firewall, dan operasi terkait yang diperlukan. | Buat Droplet Ubuntu dengan kunci SSH publik, tetapkan [Reserved IPv4](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/), lalu pasang Cloud Firewall. Login Ubuntu awal biasanya `root`. |
| [Hetzner Cloud](./hetzner/) | [Token API Read & Write](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/) khusus proyek. | Buat server Ubuntu dengan [Primary IPv4](https://docs.hetzner.com/cloud/servers/primary-ips/overview/), kunci SSH Anda, dan Cloud Firewall. Gunakan `root`. Periksa apakah Primary IP yang terpisah akan tetap disimpan ketika server dihapus. |
| [Akamai / Linode](./linode/) | Token akses pribadi dengan izin baca/tulis Linodes dan Firewalls serta [cakupan baca](https://techdocs.akamai.com/linode-api/reference/get-started) yang diperlukan. | Buat Linode Ubuntu dengan IPv4 publik dan kunci SSH, lalu pasang [Cloud Firewall](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-cloud-firewalls). Gunakan `root`. Pertahankan alamat yang diberikan selama masa hidup instans. |
| [Vultr](./vultr/) | Kunci API dengan akses API aktif; [daftar IP sumber yang diizinkan](https://docs.vultr.com/support/platform/users/how-can-i-manage-api-access-for-users) harus mengizinkan koneksi ponsel saat ini. | Buat instans Ubuntu Cloud Compute dengan IPv4 publik utama, kunci SSH, dan Firewall Group. Gunakan `root`. [Alamat yang diberikan bertahan selama instans ada](https://docs.vultr.com/support/products/compute/how-do-i-get-a-vultr-compute-instance-dedicated-ip-address); Reserved IP adalah pilihan terpisah. |
| [Oracle Cloud Infrastructure](./oracle-cloud/) | OCID tenancy/pengguna, sidik jari kunci API, dan [kunci privat penandatanganan RSA](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm), dengan kunci publik penandatanganan yang sesuai sudah didaftarkan. Ini terpisah dari kunci SSH. | Buat VCN, gateway internet, dan subnet publik dengan rute gateway. Tetapkan [Reserved Public IPv4](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm) ke IP privat VNIC VM. Gunakan `ubuntu` untuk Canonical Ubuntu; atur daftar keamanan/NSG. |
| [OVHcloud Public Cloud](./ovhcloud/) | Kunci aplikasi, rahasia aplikasi, dan kunci konsumen tervalidasi untuk endpoint API EU/CA/US yang sesuai. Batasi [hak API](https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps) pada operasi proyek yang dipilih. | Buat [instans Public Cloud](https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started) Ubuntu dengan Basic Public IP melalui Ext-Net, kunci SSH, dan grup keamanan. Gunakan `ubuntu`. Floating/Additional IP adalah sumber daya terpisah. |
| [Scaleway Instances](./scaleway/) | Kunci rahasia API aplikasi IAM dan UUID proyek, dengan izin instans, volume, IP, grup keamanan, dan kunci SSH. Lihat [pembuatan kunci API](https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/). | Buat instans Ubuntu, pasang [IPv4 fleksibel yang dirutekan dalam zona yang sama](https://www.scaleway.com/en/docs/instances/how-to/use-flexips/), atur grup keamanan, lalu nyalakan. Gunakan login SSH image, umumnya `root`. |

</div>

**Alternatif [AWS EC2](./aws-ec2/):** jalankan Ubuntu dalam subnet publik dengan [internet gateway dan rute gateway `0.0.0.0/0`](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html), pilih kunci SSH dan security group, lalu kaitkan [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html). Gunakan `ubuntu`. Adaptor AWS otomatis VPN Setup menargetkan Lightsail; EC2 menggunakan konsol. Elastic IP saja tidak membuat subnet privat dapat dijangkau.

Jika organisasi melarang kunci akun layanan, IP eksternal, atau metode autentikasi SSH yang dipilih, dapatkan konfigurasi yang disetujui administrator. Pengaturan melalui konsol tidak melewati pembatasan tersebut.

## Sediakan sumber daya dan simpan koneksi SSH

Buka **Plugin**, pasang **VPN Setup** dari katalog bawaan, lalu buka halaman mandirinya. Pilih **Siapkan VPN**, pilih penyedia, kemudian **Buat melalui API cloud** atau **Buat di konsol cloud**. Untuk server milik Anda, pilih opsi server publik yang sudah ada. Masukkan kredensial melalui formulir native, pilih atau buat kunci SSH, lalu tinjau lokasi, ukuran, image, dan CIDR sumber SSH. Pilihan berdasarkan akun dan pemeriksaan awal membantu memilih penawaran yang didukung; keduanya tidak mencadangkan kapasitas atau menjamin kuota. Periksa harga terkini penyedia dan setujui pembuatan di layar.

Ikuti operasi yang sedang berjalan sampai VM dan SSH siap. Jika permintaan kedaluwarsa atau Android menjeda pekerjaan latar belakang, lanjutkan atau tinjau operasi itu, jangan membuat VM berbayar lain. Respons pembuatan yang hilang mungkin memerlukan pencarian cloud atau pemeriksaan konsol. Simpan ID VM, disk, alamat, dan firewall; alur yang dihentikan masih mungkin telah membuat sumber daya.

VPN Setup meminta persetujuan kunci host SSH, menyimpan koneksi, memasang wg-easy, dan mengimpor klien pertama. Cocokkan sidik jari dengan konsol penyedia yang tepercaya. Untuk cara manual, tambahkan server pada **Server** dengan IPv4 publik, port SSH `22`, nama pengguna image, dan kunci privat yang cocok. Adaptor otomatis Google Cloud dan Azure memakai `ubuntu`; panduan konsol memakai nama pengguna yang dikonfigurasi di sana. Lihat [Memulai](../getting-started/) untuk pemeriksaan identitas dan kredensial tersimpan.

## Atur dua lapisan jaringan

Alamat publik membutuhkan rute, izin firewall cloud, izin firewall sistem tamu, dan layanan yang mendengarkan. Gunakan aturan ini pada firewall/grup keamanan penyedia; pertahankan aturan sistem tamu yang masih diperlukan.

- **TCP 22:** izinkan dari CIDR pengelolaan yang Anda pilih untuk SSH. Atur saat penyediaan.
- **UDP 51820:** izinkan jaringan yang akan memakai VPN. Untuk klien berpindah jaringan, ini mungkin berarti `0.0.0.0/0`. VPN Setup mengaturnya untuk deployment buatan API; gunakan konsol cloud untuk server yang Anda sediakan.
- **TCP 51821:** tetap tutup akses publik. Publikasikan UI admin wg-easy hanya pada loopback server dan akses melalui terowongan SSH.
- **Lalu lintas keluar:** izinkan unduhan paket/container, DNS, dan lalu lintas internet yang akan dibawa VPN.

Periksa [perilaku firewall Docker](https://docs.docker.com/engine/install/ubuntu/#firewall-limitations): port kontainer yang dipublikasikan dapat melewati aturan UFW. Jangan mengandalkan UFW saja untuk menyembunyikan UI admin, dan jangan kosongkan rantai firewall penyedia, terutama aturan penyimpanan/iSCSI OCI.

<a id="wg-easy-install"></a>

## Instal wg-easy pada VM yang dipilih

Setelah persetujuan, VPN Setup memasang rilis wg-easy yang dikunci dengan digest melalui SSH, memasang Docker bila diperlukan pada Ubuntu 24.04, dan membuat klien pertama. Antarmuka admin tetap pada loopback server dan rantai firewall penyedia dipertahankan. Untuk server buatan konsol atau yang sudah ada, atur sendiri firewall cloud; pemasang memerlukan SSH dan hak administratif, bukan rahasia API cloud. Gunakan server khusus yang baru, jangan menganggapnya dapat mengambil alih instalasi VPN lain.

Plugin katalog lama **WireGuard (wg-easy)** memerlukan sesi SSH aktif dan Docker. Plugin ini terpisah dari **VPN Setup** dan tidak menjanjikan impor klien native. Gunakan VPN Setup pada build Android yang kompatibel, atau jalur manual berikut dari terminal Mobile SSH pada VM khusus yang baru.

### Instalasi manual melalui SSH

Instal Docker Engine dan plugin Compose-nya memakai [petunjuk resmi Ubuntu](https://docs.docker.com/engine/install/ubuntu/). Lalu unduh konfigurasi versi yang ditentukan dari proyek asal:

```sh
sudo mkdir -p /opt/wg-easy
sudo curl -fL https://raw.githubusercontent.com/wg-easy/wg-easy/v15.5.0/docker-compose.yml -o /opt/wg-easy/compose.yaml
```

Edit `/opt/wg-easy/compose.yaml` memakai editor terminal dengan hak yang diperlukan sebelum menjalankannya. Di bawah `services.wg-easy`, ganti image, aktifkan atau tetapkan blok environment, dan ganti pemetaan port dengan nilai berikut. Pertahankan sisa berkas asal, termasuk volume persisten, mount modul, capabilities, jaringan, dan sysctls:

```yaml
image: ghcr.io/wg-easy/wg-easy:15.5.0@sha256:071f79a639e9361123a5e57733107320207b844ddbbd92dfa6962f541fe8aac8
environment:
  - INSECURE=true
ports:
  - "51820:51820/udp"
  - "127.0.0.1:51821:51821/tcp"
```

Ini potongan pengganti, bukan berkas Compose lengkap; pertahankan indentasi YAML di bawah service. `INSECURE=true` mengizinkan HTTP hanya untuk terowongan SSH loopback. Jangan publikasikan port admin ke internet. Listener kontainer berbeda dari pemetaan loopback pada host. Lihat [konfigurasi HTTP proyek asal](https://wg-easy.github.io/wg-easy/latest/examples/tutorials/reverse-proxyless/).

```sh
cd /opt/wg-easy
sudo docker compose -f compose.yaml config --quiet
sudo docker compose -f compose.yaml up -d
sudo docker compose -f compose.yaml ps
```

Simpan data kontainer `/etc/wireguard` pada volume persistennya. Jangan terapkan resep lama `PASSWORD`, `PASSWORD_HASH`, atau `WG_HOST` pada v15; gunakan panduan penyiapannya. Image sengaja dikunci pada versi tertentu: peningkatan memerlukan peninjauan versi baru dan perubahan referensi yang dikunci, bukan sekadar menjalankan `pull`.

## Buka UI admin dan tambahkan klien

Buat [penerusan port lokal](../port-forwarding/) Mobile SSH dengan port lokal `51821`, host jarak jauh `127.0.0.1`, dan port jarak jauh `51821`. Pertahankan koneksi SSH aktif dan buka `http://127.0.0.1:51821` pada ponsel yang sama. Jika port lokal tersebut sudah dipakai, pilih port lain dan gunakan dalam URL browser.

Dalam [panduan penyiapan awal](https://wg-easy.github.io/wg-easy/latest/guides/setup/) wg-easy, buat akun administrator, pilih instalasi baru, lalu atur endpoint VPN ke IPv4 publik atau nama DNS VM dengan port `51820`. Endpoint VPN bukan alamat loopback UI web atau port `51821`.

Buat satu klien per perangkat dan unduh WireGuard `.conf`-nya. Jika build Mobile SSH Anda menyediakan fitur ini, buka **VPN → WireGuard**, tambahkan profil, impor berkas, dan simpan. Sumber Android dan iOS terkini mendukung impor berkas; periksa build terpasang. VPN Setup langsung mengimpor klien pertamanya pada build Android yang kompatibel. Halamannya juga menyediakan **Tambah klien**, **Cabut klien**, **Ekspor klien/QR**, dan **Buka admin** melalui terowongan SSH privat. Hal ini tidak membuktikan kemampuan tersebut untuk plugin lama atau otomatisasi setara pada iOS. Berkas konfigurasi dan kode QR berisi kunci privat; jaga kerahasiaannya.

## Verifikasi VPN dan tangani kegagalan

Jalankan profil dan setujui permintaan VPN sistem operasi. Periksa handshake peer yang baru dan penghitung lalu lintas yang meningkat, lalu uji DNS serta rute internet atau jaringan privat yang diinginkan. Profil yang diimpor atau kontainer yang berjalan saja tidak membuktikan VPN berfungsi.

- **Pembuatan VM ditolak:** periksa penagihan, kuota, kapasitas regional, masa berlaku kredensial, dan izin IAM yang tepat. Penulisan firewall Google Cloud perlu izin di luar Compute Network Admin; OS Login wajib organisasi perlu pengaturan konsol yang disetujui.
- **SSH mengalami timeout:** periksa alamat publik, rute subnet, aturan TCP 22, dan IP sumber ponsel saat ini. Kegagalan autentikasi biasanya memerlukan nama pengguna image dan kunci SSH yang benar.
- **UI admin tidak tersedia:** pertahankan penerusan SSH, periksa status container dan pemetaan port loopback, serta pastikan HTTP hanya diaktifkan untuk terowongan.
- **Tidak ada handshake WireGuard:** periksa endpoint klien, UDP 51820 pada kedua lapisan firewall, kunci klien, dan apakah server mendengarkan.
- **Handshake ada tetapi tanpa lalu lintas:** periksa forwarding/NAT, DNS, rute tumpang tindih, dan `AllowedIPs`. Terowongan penuh IPv4 memakai `0.0.0.0/0`; evaluasi IPv6 secara terpisah. VM tanpa IPv6 upstream tidak dapat menyediakan akses internet keluar IPv6, dan rute khusus IPv4 mungkin membiarkan IPv6 di luar VPN.

## Perbarui plugin dan server VPN

Pada **Plugin**, gunakan tindakan **Perbarui** yang tersedia untuk versi kompatibel lebih baru dari katalog yang sama. Tinjau kemampuan baru yang diminta. Pengaturan, kredensial, dan catatan deployment dipertahankan; operasi yang belum selesai memakai versi plugin yang memulainya. Pembaruan plugin saja tidak memperbarui container wg-easy di server.

Pada plugin bridge 1.4.0 atau lebih baru, **Periksa server** melaporkan versi wg-easy yang berjalan dan **Perbarui WireGuard** menawarkan rilis yang dikunci plugin. Setujui pembaruan di layar. Image diunduh sebelum layanan diubah; kunci server, klien, dan profil lokal tetap terjaga. Jika ponsel ini memakai VPN tersebut, aplikasi memutuskannya sebelum pembaruan; hubungkan lagi sesudahnya. Ini memperbarui container yang dikelola, bukan sistem operasi host.

Pembaruan gagal membedakan kegagalan unduhan image, rollback berhasil, dan rollback gagal yang membuat VPN tetap mati. Ikuti pemeriksaan pemulihan atau coba lagi, jangan menganggap layanan sudah pulih. Instalasi manual perlu perubahan image terkunci yang ditinjau sendiri dan cadangan; resep pemasangan baru di atas bukan panduan migrasi.

## Hapus klien dan hentikan biaya cloud

Cabut klien di wg-easy sebelum membuang profil lokalnya. Menghapus profil di Mobile SSH tidak mencabut kunci peer di server. Cadangkan konfigurasi yang diperlukan secara aman sebelum menghapus kontainer VPN atau data persistennya.

Untuk deployment buatan API, **Hapus deployment** meninjau dan menghapus sumber daya cloud miliknya melalui API penyedia, bahkan ketika SSH tidak tersedia. Periksa sumber daya tersisa yang dilaporkan jika penghapusan dijeda atau gagal; lanjutkan pembersihan atau periksa konsol. Jangan tempatkan sumber daya lain dalam deployment yang dikelola plugin, terutama grup sumber daya Azure khususnya.

Untuk server buatan konsol atau yang sudah ada, penghapusan plugin menghapus instalasi VPN yang dikelolanya; tindakan ini **tidak** menghapus VM atau IP publik Anda. Hapus keduanya di konsol penyedia saat tidak diperlukan, lalu periksa disk, snapshot, alamat, dan sumber daya jaringan yang tertinggal. Jika pengaturan akun atau lokasi berubah selama pemulihan, periksa juga akun dan lokasi sebelumnya, termasuk proyek Scaleway atau compartment Oracle Cloud terdahulu.

**Hentikan alur** menghentikan operasi, bukan menghapus sumber daya. Pada bridge 1.5.0 atau lebih baru, **Hapus dari daftar** hanya tersedia jika aplikasi dapat memastikan entri layak dilupakan, tanpa operasi belum selesai atau sumber daya terkelola yang tersisa. Tindakan ini membersihkan riwayat lokal, bukan sumber daya cloud. Menghentikan VM atau mencopot plugin juga tidak menjamin biaya berhenti. Simpan ID sumber daya sampai penghapusan dikonfirmasi.
