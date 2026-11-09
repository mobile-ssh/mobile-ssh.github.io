---
layout: ../../../layouts/DocLayout.astro
title: "VM cloud dan wg-easy"
description: "Buat VM cloud ber-IP publik, simpan koneksi SSH-nya di Mobile SSH, lalu instal wg-easy secara terpisah, dengan penjelasan kredensial penyedia, jaringan, dan penghapusan sumber daya."
---

# VM cloud dan wg-easy

Buat VM Linux di akun cloud Anda sendiri, hubungkan melalui Mobile SSH, lalu instal wg-easy untuk menjalankan VPN WireGuard. Memisahkan penyediaan sumber daya dari instalasi memungkinkan VM yang sama dipakai untuk layanan lain, atau VPN dipasang di server yang sudah Anda miliki.

**Ketersediaan — 8 November 2026:** plugin pembuatan VM yang terpisah adalah alur yang direncanakan dan dijelaskan di bawah ini. Implementasi lokal Android **VPN Setup** yang ditinjau menggabungkan penyediaan, instalasi, dan impor klien; perubahan plugin/katalognya belum diterbitkan dan penerapan cloud nyata belum diuji. Entri terpisah AWS, Google Cloud, dan Azure saat ini baru berupa kerangka manifest/pengaturan; tindakan untuk menampilkan dan mengendalikan VM belum diimplementasikan, dan entri tersebut tidak membuat VM. Gunakan petunjuk konsol dan instalasi manual di bawah jika katalog Anda belum memiliki alur pembuatan. Alur native baru memerlukan build Android yang kompatibel; otomatisasi setara pada iOS belum terbukti tersedia.

## Dua plugin dengan tanggung jawab terpisah

- **Plugin penyediaan cloud:** memakai API penyedia untuk membuat VM, alamat publik, dan sumber daya jaringan yang diperlukan, lalu menyimpan koneksi SSH. Plugin menyimpan ID sumber daya cloud untuk pengelolaan atau penghapusan selanjutnya.
- **Penginstal wg-easy:** menghubungkan ke server tersimpan yang dipilih melalui SSH, memasang layanan VPN, dan membantu membuat konfigurasi klien. Penginstal memerlukan akses server dan hak administrator, bukan kredensial API cloud Anda. VM yang dibuat manual juga dapat digunakan.

Data yang diteruskan sebaiknya berisi referensi server tersimpan, alamat publik, port SSH, nama pengguna, referensi kredensial SSH, serta ID penerapan/sumber daya. Rahasia cloud dan kunci SSH privat tidak boleh disalin ke keluaran plugin atau ke VM. Menghapus VPN dan menghapus VM cloud adalah operasi yang terpisah.

## Siapkan akun dan pengaturan server

1. Aktifkan akun cloud dan penagihan, pilih wilayah, lalu periksa kuota VM, disk, dan IP publik. Tinjau biaya VM, IPv4, penyimpanan, dan lalu lintas terbaru; ketersediaan tingkat gratis tidak diasumsikan.
2. Untuk panduan ini, pilih VM khusus **Ubuntu 24.04 LTS** dengan minimal **RAM 1 GB dan disk 20 GB**, menggunakan **amd64 atau arm64**. Ini adalah pilihan dasar pengaturan ini, bukan persyaratan minimum universal wg-easy. Gunakan akun dengan akses root atau sudo; instalasi tanpa pengawasan memerlukan peningkatan hak tanpa interaksi.
3. Pilih atau buat kunci SSH, dengan kunci privat tetap disimpan di Mobile SSH. Unggah hanya kunci publik ke cloud. Jalur impor Lightsail memerlukan kunci SSH RSA. Penyedia dan image lain memiliki jenis kunci yang didukung masing-masing. Klien SSH iOS saat ini mendukung kunci privat Ed25519/ECDSA, bukan RSA. Untuk Lightsail di iOS, gunakan dahulu konsol SSH browser penyedia untuk menambahkan kunci publik yang didukung aplikasi ke `authorized_keys`, lalu hubungkan dengan kunci itu.
4. Pilih **IPv4 publik**, sebaiknya alamat tetap atau yang dicadangkan jika penyedia menawarkannya. Alamat privat, instans khusus IPv6, atau gateway NAT yang hanya melayani lalu lintas keluar tidak memenuhi kebutuhan endpoint panduan ini.
5. Tetapkan CIDR sumber SSH secara eksplisit, misalnya IPv4 publik Anda saat ini diikuti `/32`. Jangan menganggap pengaturan bawaan plugin membatasi akses. Perubahan data seluler dan Wi-Fi mungkin mengharuskan pembaruan aturan melalui konsol cloud.

Kredensial API cloud mengizinkan pengelolaan sumber daya; kunci SSH mengizinkan login server. Keduanya adalah kredensial berbeda. Masukkan rahasia API hanya pada formulir kredensial penyedia yang terlindungi, bukan dalam perintah suara, perintah terminal, atau berkas sumber. Pada alur lokal Android, kode native menangani autentikasi penyedia dan penyimpanan kredensial terenkripsi; kredensial dikirim ke penyedianya jika diperlukan, bukan ke VM atau worker plugin. Model suara offline tidak membuat panggilan API cloud, unduhan, atau SSH berfungsi tanpa akses internet.

## Pilih cloud dan dapatkan alamat publik

Untuk **pengaturan melalui konsol**, masuk sendiri ke penyedia; Mobile SSH tidak memerlukan kredensial API penyedia. Untuk **penyediaan melalui plugin** kelak, siapkan kredensial di bawah dengan izin operasi pembuatan, pembacaan, jaringan, dan penghapusan yang diperlukan. Batasi akses ke proyek atau penerapan khusus jika didukung. Kebijakan akun tetap berlaku pada kedua metode.

Buat VM Ubuntu pilihan dengan kunci SSH publik Anda dan terapkan aturan SSH pada bagian berikutnya. Tautan menjelaskan langkah alamat dan autentikasi khusus tiap penyedia.

<div class="doc-table" tabindex="0" role="region" aria-label="Penyedia cloud dan alamat publik">

| Penyedia | Kredensial untuk penyediaan melalui API | Pengaturan IPv4 publik di konsol |
| --- | --- | --- |
| AWS Lightsail | ID dan rahasia kunci akses; sertakan token sesi untuk kredensial sementara. Berikan [tindakan Lightsail](https://docs.aws.amazon.com/service-authorization/latest/reference/list_lightsail.html) yang diperlukan. | Buat instans Ubuntu dual-stack, pilih kunci SSH RSA, lalu alokasikan dan pasang [IPv4 statis di wilayahnya](https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-create-static-ip.html). Gunakan `ubuntu` untuk image Ubuntu. |
| Google Cloud Compute Engine | Kunci JSON akun layanan dan ID proyek. Izin harus mencakup operasi VM/disk, jaringan, alamat, dan firewall; Network Admin saja tidak dapat menulis aturan firewall. Periksa [izin IAM](https://docs.cloud.google.com/compute/docs/access/iam). | Aktifkan Compute Engine API, pilih VPC/subnet dengan rute internet, cadangkan [IPv4 eksternal regional](https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address), lalu pasang pada VM. Atur nama pengguna/kunci SSH yang sesuai; OS Login memerlukan pengaturan identitas tersendiri. |
| Microsoft Azure | ID tenant, ID aplikasi/klien, **nilai** rahasia klien, dan ID langganan. Berikan izin komputasi/jaringan; membuat grup sumber daya juga memerlukan izin pada cakupan induknya. Lihat [pengaturan service principal](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal). | Buat grup sumber daya khusus dan VNet/subnet. Pasang [Public IP IPv4 statis Standard](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses) pada NIC VM dan kaitkan NSG. Gunakan nama administrator yang dipilih saat pembuatan. |
| DigitalOcean | Token akses pribadi dengan [cakupan](https://docs.digitalocean.com/reference/api/create-personal-access-token/) Droplet, kunci SSH, Reserved IP, firewall, dan operasi terkait yang diperlukan. | Buat Droplet Ubuntu dengan kunci SSH publik, tetapkan [Reserved IPv4](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/), lalu pasang Cloud Firewall. Login Ubuntu awal biasanya `root`. |
| Hetzner Cloud | [Token API Read & Write](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/) khusus proyek. | Buat server Ubuntu dengan [Primary IPv4](https://docs.hetzner.com/cloud/servers/primary-ips/overview/), kunci SSH Anda, dan Cloud Firewall. Gunakan `root`. Periksa apakah Primary IP yang terpisah akan tetap disimpan ketika server dihapus. |
| Akamai / Linode | Token akses pribadi dengan izin baca/tulis Linodes dan Firewalls serta [cakupan baca](https://techdocs.akamai.com/linode-api/reference/get-started) yang diperlukan. | Buat Linode Ubuntu dengan IPv4 publik dan kunci SSH, lalu pasang [Cloud Firewall](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-cloud-firewalls). Gunakan `root`. Pertahankan alamat yang diberikan selama masa hidup instans. |
| Vultr | Kunci API dengan akses API aktif; [daftar IP sumber yang diizinkan](https://docs.vultr.com/support/platform/users/how-can-i-manage-api-access-for-users) harus mengizinkan koneksi ponsel saat ini. | Buat instans Ubuntu Cloud Compute dengan IPv4 publik utama, kunci SSH, dan Firewall Group. Gunakan `root`. [Alamat yang diberikan bertahan selama instans ada](https://docs.vultr.com/support/products/compute/how-do-i-get-a-vultr-compute-instance-dedicated-ip-address); Reserved IP adalah pilihan terpisah. |
| Oracle Cloud Infrastructure | OCID tenancy/pengguna, sidik jari kunci API, dan [kunci privat penandatanganan RSA](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm), dengan kunci publik penandatanganan yang sesuai sudah didaftarkan. Ini terpisah dari kunci SSH. | Buat VCN, gateway internet, dan subnet publik dengan rute gateway. Tetapkan [Reserved Public IPv4](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm) ke IP privat VNIC VM. Gunakan `ubuntu` untuk Canonical Ubuntu; atur daftar keamanan/NSG. |
| OVHcloud Public Cloud | Kunci aplikasi, rahasia aplikasi, dan kunci konsumen tervalidasi untuk endpoint API EU/CA/US yang sesuai. Batasi [hak API](https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps) pada operasi proyek yang dipilih. | Buat [instans Public Cloud](https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started) Ubuntu dengan Basic Public IP melalui Ext-Net, kunci SSH, dan grup keamanan. Gunakan `ubuntu`. Floating/Additional IP adalah sumber daya terpisah. |
| Scaleway Instances | Kunci rahasia API aplikasi IAM dan UUID proyek, dengan izin instans, volume, IP, grup keamanan, dan kunci SSH. Lihat [pembuatan kunci API](https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/). | Buat instans Ubuntu, pasang [IPv4 fleksibel yang dirutekan dalam zona yang sama](https://www.scaleway.com/en/docs/instances/how-to/use-flexips/), atur grup keamanan, lalu nyalakan. Gunakan login SSH image, umumnya `root`. |

</div>

**Alternatif AWS EC2:** jalankan Ubuntu dalam subnet publik dengan [gateway internet dan rute `0.0.0.0/0` ke gateway](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html), pilih kunci SSH dan grup keamanan, lalu kaitkan [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html). Gunakan `ubuntu`. Adaptor otomatis lokal menargetkan Lightsail; EC2 memakai jalur konsol. Elastic IP saja tidak membuat subnet privat dapat dijangkau.

Jika organisasi melarang kunci akun layanan, IP eksternal, atau metode autentikasi SSH yang dipilih, dapatkan konfigurasi yang disetujui administrator. Pengaturan melalui konsol tidak melewati pembatasan tersebut.

## Sediakan sumber daya dan simpan koneksi SSH

Dalam alur terpisah yang direncanakan, buka **Plugin**, instal plugin penyediaan milik penyedia dari katalog tepercaya, pilih akun dan wilayah, lalu pilih ukuran VM, image, alamat publik, dan kunci SSH. Tinjau sumber daya dan biaya sebelum mengonfirmasi pembuatan. Plugin yang hanya mengelola tanpa tindakan pembuatan tidak dapat melakukan langkah ini; gunakan konsol penyedia.

Tunggu hingga penyedia melaporkan VM berjalan dan SSH dapat dijangkau. Simpan ID sumber daya VM, disk, alamat, dan firewall. Jika permintaan kehabisan waktu, periksa atau lanjutkan operasi yang sudah ada sebelum mencoba membuat ulang agar tidak menghasilkan VM berbayar kedua.

Simpan koneksi yang dikembalikan di Mobile SSH, atau tambahkan manual di **Server**: IPv4 publik, port SSH `22`, nama pengguna image, dan kredensial kunci privat yang sesuai. Bandingkan sidik jari kunci host SSH melalui konsol tepercaya penyedia sebelum menghubungkan. Lihat [Memulai](../getting-started/) untuk pemeriksaan identitas dan kredensial tersimpan.

## Atur dua lapisan jaringan

Alamat publik membutuhkan rute, izin firewall cloud, izin firewall sistem tamu, dan layanan yang mendengarkan. Gunakan aturan ini pada firewall/grup keamanan penyedia; pertahankan aturan sistem tamu yang masih diperlukan.

- **TCP 22:** izinkan dari CIDR pengelolaan yang dipilih untuk SSH. Atur saat penyediaan.
- **UDP 51820:** izinkan dari jaringan yang akan memakai VPN. Untuk klien berpindah jaringan, ini dapat berarti `0.0.0.0/0`. Tambahkan saat menyiapkan WireGuard, melalui plugin penyediaan atau konsol.
- **TCP 51821:** jangan buka untuk publik. Publikasikan UI admin wg-easy hanya pada loopback server dan akses melalui terowongan SSH.
- **Lalu lintas keluar:** izinkan unduhan paket/kontainer, DNS, dan lalu lintas internet yang hendak dibawa VPN.

Periksa [perilaku firewall Docker](https://docs.docker.com/engine/install/ubuntu/#firewall-limitations): port kontainer yang dipublikasikan dapat melewati aturan UFW. Jangan mengandalkan UFW saja untuk menyembunyikan UI admin, dan jangan kosongkan rantai firewall penyedia, terutama aturan penyimpanan/iSCSI OCI.

## Instal wg-easy pada VM yang dipilih

Penginstal terpisah sebaiknya menerima server SSH tersimpan dan meminta persetujuan untuk perubahan server. Penginstal sebaiknya memeriksa OS, hak akses, instalasi Docker/VPN yang sudah ada, dan konflik port, mempertahankan data persisten, serta melaporkan versi terpasang. Penginstal tidak memerlukan rahasia akun cloud; gunakan plugin penyediaan atau konsol untuk perubahan firewall cloud.

Plugin katalog lama **WireGuard (wg-easy)** memerlukan sesi SSH aktif dan Docker. Plugin ini bukan penginstal otomatis baru dan tidak menjanjikan impor klien native. Gunakan penginstal terbaru yang kompatibel, atau jalur manual berikut dari terminal Mobile SSH pada VM khusus yang baru.

### Instalasi manual melalui SSH

Instal Docker Engine dan plugin Compose-nya memakai [petunjuk resmi Ubuntu](https://docs.docker.com/engine/install/ubuntu/). Lalu unduh konfigurasi versi yang ditentukan dari proyek asal:

```sh
sudo mkdir -p /opt/wg-easy
sudo curl -fL https://raw.githubusercontent.com/wg-easy/wg-easy/v15.4.0/docker-compose.yml -o /opt/wg-easy/compose.yaml
```

Edit `/opt/wg-easy/compose.yaml` memakai editor terminal dengan hak yang diperlukan sebelum menjalankannya. Di bawah `services.wg-easy`, ganti image, aktifkan atau tetapkan blok environment, dan ganti pemetaan port dengan nilai berikut. Pertahankan sisa berkas asal, termasuk volume persisten, mount modul, capabilities, jaringan, dan sysctls:

```yaml
image: ghcr.io/wg-easy/wg-easy:15.4.0@sha256:0e7bc9d34e86ddcaa92bc700d4d7dc9b33291dbc07ac8d13382f7c2095f949ec
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

Buat satu klien per perangkat dan unduh berkas WireGuard `.conf`-nya. Jika build Mobile SSH Anda menyediakannya, buka **VPN → WireGuard**, tambahkan profil, impor berkas, lalu simpan. Kode sumber Android dan iOS saat ini mendukung impor berkas; periksa build yang terpasang. Alur gabungan lokal Android dapat mengimpor langsung, tetapi ini bukan janji untuk plugin lama atau otomatisasi iOS. Berkas konfigurasi dan kode QR berisi kunci privat; jaga kerahasiaannya.

## Verifikasi VPN dan tangani kegagalan

Jalankan profil dan setujui permintaan VPN sistem operasi. Periksa handshake peer yang baru dan penghitung lalu lintas yang meningkat, lalu uji DNS serta rute internet atau jaringan privat yang diinginkan. Profil yang diimpor atau kontainer yang berjalan saja tidak membuktikan VPN berfungsi.

- **Pembuatan VM ditolak:** periksa penagihan, kuota, kapasitas wilayah, masa berlaku kredensial, dan izin IAM yang tepat. Penulisan firewall Google Cloud memerlukan izin di luar Network Admin.
- **SSH kehabisan waktu:** periksa alamat publik, rute subnet, aturan TCP 22, dan IP sumber ponsel saat ini. Kegagalan autentikasi biasanya membutuhkan nama pengguna image dan kunci SSH yang benar.
- **UI admin tidak tersedia:** pertahankan penerusan SSH tersambung, periksa status kontainer dan pemetaan port loopback, serta pastikan HTTP diaktifkan hanya untuk terowongan.
- **Tidak ada handshake WireGuard:** periksa endpoint klien, UDP 51820 pada kedua lapisan firewall, kunci klien, dan apakah server mendengarkan.
- **Handshake ada tetapi tanpa lalu lintas:** periksa penerusan/NAT, DNS, tumpang tindih rute, dan `AllowedIPs`. Terowongan penuh IPv4 memakai `0.0.0.0/0`; evaluasi IPv6 secara terpisah. VM tanpa IPv6 upstream tidak dapat menyediakan akses internet IPv6, dan rute khusus IPv4 mungkin membiarkan IPv6 di luar VPN.

## Hapus klien dan hentikan biaya cloud

Cabut klien di wg-easy sebelum membuang profil lokalnya. Menghapus profil di Mobile SSH tidak mencabut kunci peer di server. Cadangkan konfigurasi yang diperlukan secara aman sebelum menghapus kontainer VPN atau data persistennya.

Gunakan plugin penyediaan yang mengelola sumber daya atau konsol penyedia untuk menghapus VM yang tidak diperlukan, lalu periksa disk yang dipertahankan, snapshot, alamat cadangan/publik, dan sumber daya jaringan. Tinjau isi grup sumber daya khusus Azure sebelum menghapusnya. Jangan masukkan sumber daya yang tidak terkait ke penerapan yang dikelola plugin.

Menghentikan VM, membatalkan tugas penyiapan, atau menghapus plugin tidak menjamin sumber daya dihapus atau biaya berhenti. Sumber daya buatan konsol tetap menjadi tanggung jawab Anda untuk dibersihkan; simpan ID sumber daya penyedia sampai penghapusan dikonfirmasi.
