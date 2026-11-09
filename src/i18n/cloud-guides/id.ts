import type { CloudGuides } from "./types";

export const id: CloudGuides = {
  "title": "Membuat VM di {provider}",
  "description": "Pembuatan VM di {provider} langkah demi langkah: IPv4 publik, aturan firewall, akses SSH dari Mobile SSH, kredensial API opsional, dan penghapusan sumber daya.",
  "intro": "Buat server Ubuntu dengan IPv4 publik di akun {provider} Anda sendiri. Ikuti langkah di konsol, hubungkan dari Mobile SSH, lalu instal wg-easy sebagai tugas terpisah.",
  "back": "VM cloud dan wg-easy",
  "indexHeading": "Panduan penyedia cloud langkah demi langkah",
  "indexIntro": "Pilih penyedia Anda untuk melihat layar konsol, pengaturan IP publik, nama pengguna SSH, kredensial API opsional, dan penghapusan sumber daya. AWS Lightsail dan EC2 memiliki panduan terpisah.",
  "cardAction": "Membuat VM dan menghubungkan dengan Mobile SSH",
  "navLabel": "Pilih penyedia cloud",
  "openConsole": "Buka konsol penyedia",
  "availability": "Petunjuk ini menggunakan konsol penyedia. Plugin pembuatan VM terpisah masih direncanakan; implementasi gabungan Android VPN Setup bersifat lokal dan belum dipublikasikan. Bagian API menyiapkan akses mendatang dan tidak diperlukan untuk cara manual ini.",
  "availabilityLink": "Periksa ketersediaan plugin",
  "checked": "Dokumentasi konsol diperiksa pada 8 November 2026.",
  "beforeHeading": "Sebelum memulai",
  "before": [
    "Aktifkan penagihan dan periksa kuota regional untuk VM, disk, serta IP publik. Tinjau harga yang ditampilkan sebelum membuat sumber daya; jangan menganggap paket gratis atau paket tertentu tersedia.",
    "Untuk pengaturan ini, gunakan Ubuntu 24.04 LTS dengan RAM minimal 1 GB dan penyimpanan 20 GB, atau minimum penyedia yang lebih besar. Sesuaikan arsitektur CPU dengan image. Ini adalah dasar konfigurasi panduan, bukan minimum universal wg-easy.",
    "Simpan kunci privat SSH di Mobile SSH dan unggah hanya kunci publiknya. Ed25519 berfungsi dengan klien Android dan iOS saat ini; impor RSA Lightsail dan solusi untuk iOS dijelaskan dalam langkahnya. Catat IPv4 publik Anda saat ini diikuti <code>/32</code> sebagai sumber SSH, atau gunakan CIDR administrasi yang disetujui."
  ],
  "networkHeading": "Aturan jaringan untuk pengaturan ini",
  "networkRules": [
    "Izinkan <code>TCP 22</code> masuk dari CIDR administrasi. Hapus aturan izin SSH yang lebih luas jika tidak diperlukan; menambahkan aturan terbatas tidak otomatis membatalkan aturan yang lebih luas. Perbarui sumber saat alamat publik ponsel berubah.",
    "Untuk langkah VPN berikutnya, izinkan <code>UDP 51820</code> masuk dari jaringan klien VPN; klien yang berpindah jaringan mungkin memerlukan <code>0.0.0.0/0</code>. Konfigurasikan aturan IPv6 secara sengaja jika Anda mengaktifkan IPv6.",
    "Tutup akses publik ke <code>TCP 51821</code>. Antarmuka admin wg-easy akan terikat ke loopback server dan diakses melalui penerusan SSH.",
    "Izinkan lalu lintas keluar yang diperlukan untuk DNS, unduhan paket/kontainer, dan VPN. Periksa firewall cloud maupun sistem tamu; pertahankan aturan penyimpanan penyedia dan aturan ICMP penting."
  ],
  "stepsHeading": "Membuat server dan menghubungkan",
  "sourceLink": "Petunjuk penyedia",
  "connectHeading": "Simpan server di Mobile SSH",
  "connectText": "Buka Server, tambahkan server, lalu isi nilai berikut. Pilih kredensial yang berisi kunci privat yang cocok. Gunakan nama pengguna yang Anda konfigurasikan jika berbeda dari contoh panduan.",
  "hostLabel": "Host",
  "hostValue": "IPv4 publik VM dari konsol penyedia",
  "portLabel": "Port",
  "userLabel": "Nama pengguna",
  "credentialLabel": "Autentikasi",
  "credentialValue": "Kredensial kunci privat SSH yang cocok",
  "identityText": "Dapatkan sidik jari kunci host SSH melalui konsol tepercaya penyedia atau log boot, lalu bandingkan sebelum mempercayai koneksi. Di Android, nonaktifkan penerimaan otomatis identitas baru jika ingin meninjau penggunaan pertama. Selidiki peringatan perubahan kunci sebelum mengganti identitas tersimpan.",
  "connectionGuide": "Kunci SSH dan pemeriksaan identitas",
  "vpnHeading": "Instal wg-easy sebagai langkah terpisah",
  "vpnText": "Pastikan dahulu server tersimpan dapat membuka terminal dan pengguna Anda memiliki akses root atau sudo. Lalu ikuti panduan instalasi wg-easy bersama: Docker, kontainer dengan versi yang dipatok, administrasi privat melalui SSH, pembuatan klien, dan verifikasi VPN. Penginstal memerlukan akses SSH, bukan rahasia API cloud Anda.",
  "vpnLink": "Lanjut ke langkah instalasi wg-easy",
  "apiHeading": "Kredensial API opsional untuk plugin mendatang",
  "apiIntro": "Lewati bagian ini jika menggunakan konsol. Buat kredensial hanya saat alat penyediaan yang kompatibel memerlukannya. Daftar izin di bawah adalah panduan persiapan, bukan kebijakan minimum teruji untuk plugin yang telah dirilis.",
  "apiSecretNote": "Masukkan kredensial hanya pada formulir terlindungi yang didukung. Jangan masukkan rahasia cloud ke perintah suara, perintah terminal, atau VM. Gunakan cakupan tersempit yang didukung, catat masa berlaku, dan cabut kredensial yang tidak diperlukan lagi.",
  "cleanupHeading": "Hapus sumber daya yang tidak diperlukan lagi",
  "cleanupWarning": "Menghentikan VM, membatalkan tugas penyiapan, atau menghapus profil Mobile SSH tidak menghapus sumber daya cloud maupun menjamin biaya berhenti. Simpan ID sumber daya sampai penghapusan dikonfirmasi, dan pertahankan sumber daya yang tidak terkait.",
  "providers": {
    "aws-lightsail": {
      "consoleSteps": [
        "Masuk ke akun AWS Anda, buka Lightsail, lalu pilih <strong>Buat instans</strong>. Pilih wilayah terdekat dengan lokasi VPN yang Anda inginkan.",
        "Pilih <strong>Linux/Unix → Hanya OS → Ubuntu 24.04 LTS</strong>. Pilih paket dual-stack IPv4/IPv6 dengan RAM minimal 1 GB dan penyimpanan 20 GB; tinjau harga yang ditampilkan.",
        "Pilih pasangan kunci SSH regional atau unggah kunci publik RSA Anda. Simpan kunci privatnya dengan aman, beri nama instans, lalu pilih <strong>Buat instans</strong>. iOS memerlukan penyiapan kunci tambahan di bawah.",
        "Buka <strong>Jaringan → Buat IP statis</strong>. Pilih wilayah yang sama, kaitkan alamat ke instans ini, beri nama, lalu buat. Catat IPv4 statisnya.",
        "Pada tab <strong>Jaringan</strong> instans, batasi SSH ke IPv4 publik ponsel sambil mempertahankan <strong>Izinkan SSH/RDP browser Lightsail</strong>. Tambahkan aturan UDP 51820 bersama; tinjau aturan IPv6 secara terpisah dan biarkan TCP 51821 tertutup.",
        "Untuk iOS, pilih <strong>Hubungkan → Hubungkan menggunakan SSH</strong>. Tambahkan kunci publik Ed25519 aplikasi sebagai baris baru di <code>/home/ubuntu/.ssh/authorized_keys</code>, tanpa menghapus kunci yang ada. SSH browser menggunakan kunci penyedia terpisah; IPv4 statis Anda kini siap."
      ],
      "apiSteps": [
        "Hanya untuk alat penyediaan mendatang, buat identitas IAM khusus dengan tindakan Lightsail yang diperlukan untuk instans, kunci SSH, IP statis, dan firewall, termasuk penghapusan. Batasi wilayah dan sumber daya jika didukung; ini bukan kebijakan minimum teruji.",
        "Di <strong>IAM → Pengguna → Kredensial keamanan</strong>, buat kunci akses hanya saat otomatisasi yang didukung memerlukannya. Masukkan ID dan rahasianya melalui formulir native terlindungi; kredensial sementara juga memerlukan token sesi. Jangan pernah menggunakan kunci root."
      ],
      "cleanupSteps": [
        "Hapus instans setelah selesai. Tinjau snapshot dan disk yang dipertahankan secara terpisah; menghentikan instans tidak menghentikan semua biaya.",
        "Lepaskan IP statis secara terpisah setelah melepas kaitannya. Menghapus instans tidak menghapus alamat tersebut."
      ]
    },
    "aws-ec2": {
      "consoleSteps": [
        "Buka EC2 di wilayah AWS Anda dan pilih <strong>Luncurkan instans</strong>. Beri nama server dan pilih AMI resmi Canonical <strong>Ubuntu Server 24.04 LTS</strong>, dengan memeriksa penerbit serta arsitekturnya.",
        "Pilih jenis instans dengan RAM minimal 1 GB dan arsitektur yang cocok. Di <strong>Konfigurasikan penyimpanan</strong>, pilih minimal 20 GB untuk volume boot dan tinjau perkiraan biaya sumber daya.",
        "Di <strong>Pasangan kunci</strong>, pilih kunci yang ada atau buat/impor pasangan kunci Ed25519 untuk Linux. Siapkan kunci privat yang cocok di aplikasi; AWS memasang kunci publik pada instans.",
        "Di <strong>Pengaturan jaringan</strong>, pilih subnet publik. VPC-nya memerlukan gateway internet terpasang dan rute <code>0.0.0.0/0</code> ke gateway tersebut. Aktifkan IPv4 publik; alamat statis diatur di bawah.",
        "Buat atau pilih grup keamanan dengan aturan TCP 22 dan UDP 51820 bersama. Batasi SSH ke IPv4 publik ponsel, biarkan TCP 51821 tertutup, lalu pilih <strong>Luncurkan instans</strong> dan tunggu sampai berjalan.",
        "Buka <strong>Jaringan dan Keamanan → Elastic IP → Alokasikan alamat Elastic IP</strong>. Lalu pilih <strong>Tindakan → Kaitkan alamat Elastic IP</strong> dan pilih instans ini beserta IP privat utamanya. Catat IPv4 statis; alamat IPv4 publik dikenai biaya."
      ],
      "apiSteps": [
        "Hanya untuk alat penyediaan mendatang, buat identitas IAM khusus yang mencakup pembuatan instans, sumber daya AMI/jaringan/disk/kunci terkait, tag, Elastic IP, dan penghapusan. Izin baca/mulai/hentikan yang ada tidak cukup. Tambahkan <code>iam:PassRole</code> hanya jika memasang profil instans.",
        "Buat atau dapatkan kredensial identitas itu dan masukkan hanya melalui pengaturan native terlindungi yang didukung. Utamakan kredensial sementara bila didukung, termasuk token sesinya; jangan gunakan kunci akses root. Prosedur konsol ini tidak memerlukan kunci API di Mobile SSH."
      ],
      "cleanupSteps": [
        "Akhiri instans. Periksa <strong>Hapus saat diakhiri</strong> dan hapus terpisah volume EBS atau snapshot yang dipertahankan tetapi tidak diperlukan.",
        "Lepaskan Elastic IP secara terpisah. Mengakhiri instans memutus kaitan alamat, tetapi tidak melepaskan alamat atau menghentikan biayanya."
      ]
    },
    "google-cloud": {
      "consoleSteps": [
        "Pilih atau buat proyek Google Cloud, aktifkan penagihan, lalu aktifkan <strong>Compute Engine API</strong>. Buka <strong>Compute Engine → Instans VM → Buat instans</strong>.",
        "Beri nama VM dan pilih wilayah, zona, serta mesin dengan RAM minimal 1 GB. Di <strong>OS dan penyimpanan → Ubah</strong>, pilih <strong>Ubuntu → Ubuntu 24.04 LTS</strong> dan penyimpanan minimal 20 GB.",
        "Pesan IPv4 eksternal statis regional di wilayah VM. Pada pengaturan <strong>Jaringan</strong> VM, pilih VPC/subnet yang dituju dan pilih alamat tersebut sebagai IPv4 eksternal antarmuka jaringan. VPC harus memiliki rute internet default; buat jaringan dan subnet yang sesuai jika proyek belum memilikinya.",
        "Pada pengaturan kunci SSH VM, tambahkan kunci publik aplikasi dengan <code>mobileuser</code> sebagai komentar nama pengguna: <code>ssh-ed25519 AAAA… mobileuser</code>. Jika proyek mewajibkan OS Login, gunakan prosedur tersebut dan nama pengguna POSIX yang ditetapkannya; kunci metadata tidak mengesampingkannya.",
        "Tambahkan tag jaringan seperti <code>wg-vpn</code>. Buat aturan firewall masuk yang menargetkan tag tersebut untuk akses TCP 22 dan UDP 51820 bersama. Batasi SSH ke IPv4 publik ponsel dan biarkan TCP 51821 tertutup.",
        "Selesaikan peninjauan konfigurasi VM dan pilih <strong>Buat</strong>. Tunggu sampai instans berjalan, lalu catat IPv4 eksternal dan nama pengguna SSH yang dipilih di atas. Jangan menganggap nama pengguna adalah <code>ubuntu</code>."
      ],
      "apiSteps": [
        "Hanya untuk alat penyediaan mendatang, gunakan akun layanan khusus dengan peran Admin Instans Compute (v1), Admin Jaringan Compute, dan Admin Keamanan Compute pada cakupan proyek, atau padanan yang lebih terbatas. Admin Jaringan Compute tidak dapat membuat firewall. Jika memasang akun layanan VM, berikan juga peran Pengguna Akun Layanan pada akun tersebut.",
        "Jika otomatisasi yang didukung memerlukan kunci JSON dan kebijakan organisasi mengizinkannya, buka <strong>IAM dan Admin → Akun layanan → Kunci → Tambahkan kunci → Buat kunci baru → JSON</strong>. Masukkan ID proyek dan JSON melalui pengaturan native terlindungi; jangan pernah melewati pembatasan kunci."
      ],
      "cleanupSteps": [
        "Hapus VM dan periksa apakah disk boot serta datanya dihapus atau dipertahankan; hapus disk dan snapshot yang dipertahankan tetapi tidak diperlukan.",
        "Lepaskan IPv4 eksternal yang dipesan secara terpisah. Menghapus VM tidak melepaskan alamat yang dipesan."
      ]
    },
    "azure": {
      "consoleSteps": [
        "Buka portal Azure dengan langganan aktif. Buat grup sumber daya khusus, lalu buka <strong>Mesin virtual → Buat → Mesin virtual Azure</strong> dan pilih langganan serta grup tersebut.",
        "Masukkan nama dan wilayah. Pilih <strong>Ubuntu Server 24.04 LTS – x64 Gen2</strong> dan ukuran yang kompatibel dengan RAM minimal 1 GB. Pertahankan disk OS minimal 20 GB; tinjau biaya yang ditampilkan.",
        "Pilih autentikasi <strong>Kunci publik SSH</strong>, tetapkan nama pengguna administrator menjadi <code>azureuser</code>, dan pilih kunci publik yang ada. Tempel kunci publik Ed25519 aplikasi; simpan kunci privat di aplikasi.",
        "Di <strong>Jaringan</strong>, pilih atau buat VNet dan subnet. Buat atau pilih IPv4 publik statis Standard di wilayah yang tepat dan kaitkan ke konfigurasi IP antarmuka jaringan VM ini.",
        "Konfigurasikan grup keamanan jaringan yang berlaku dengan aturan TCP 22 dan UDP 51820 bersama. Batasi SSH ke IPv4 publik ponsel; biarkan TCP 51821 tertutup. Jika subnet dan antarmuka sama-sama memiliki grup keamanan, keduanya harus mengizinkan lalu lintas.",
        "Pilih <strong>Tinjau + buat → Buat</strong>. Tunggu penerapan, lalu buka <strong>Ringkasan</strong> VM dan catat IPv4 publiknya. VM siap dengan akun <code>azureuser</code> dan kunci SSH pilihan Anda."
      ],
      "apiSteps": [
        "Hanya untuk alat penyediaan mendatang, buat aplikasi khusus satu tenant di <strong>Microsoft Entra ID → Pendaftaran aplikasi</strong>. Catat ID tenant, klien, dan langganan. Jika perlu, buat rahasia klien di <strong>Sertifikat dan rahasia</strong>, lalu salin Nilainya, bukan ID rahasianya.",
        "Di <strong>Kontrol akses (IAM)</strong> grup sumber daya, berikan izin komputasi/jaringan yang sesuai kepada prinsipal tersebut. Kontributor pada grup khusus ini luas tetapi dapat digunakan; utamakan peran lebih terbatas yang telah diuji. Buat grup terlebih dahulu karena izin dalam cakupan grup tidak dapat membuatnya. Gunakan pengaturan kredensial native terlindungi."
      ],
      "cleanupSteps": [
        "Jika grup sumber daya hanya berisi penerapan ini, tinjau isinya dan hapus grup setelah selesai.",
        "Jika mempertahankan grup, hapus VM dan periksa opsi penghapusan sumber daya yang terkait. Hapus terpisah disk, antarmuka jaringan, dan IP publik yang dipertahankan tetapi tidak diperlukan."
      ]
    },
    "digitalocean": {
      "consoleSteps": [
        "Buka <strong>Buat → Droplet</strong> di panel kontrol. Pilih <strong>Wilayah</strong> terdekat dengan kapasitas tersedia. Gunakan proyek dan nama host yang mengidentifikasi server ini; wilayah, ketersediaan paket, dan harga dapat berbeda.",
        "Di <strong>Pilih image → OS</strong>, pilih <strong>Ubuntu 24.04 LTS</strong>. Jika pemilih jenis konfigurasi muncul, pilih <strong>Paket gabungan</strong>, lalu <strong>CPU bersama → Basic</strong>. Pilih minimal <strong>RAM 1 GB</strong> dan <strong>disk 20 GB</strong>, atau minimum penyedia yang lebih besar.",
        "Di <strong>Pilih metode autentikasi → Kunci SSH → Tambahkan kunci SSH</strong>, tempel dan beri nama kunci publik, lalu pilih. Simpan kunci privat yang cocok pada perangkat; kunci akun yang ditambahkan kemudian tidak otomatis dipasang pada Droplet yang ada.",
        "Di <strong>Jaringan</strong>, biarkan <strong>Alamat IPv4 publik</strong> dipilih. Atur jumlah menjadi <strong>1</strong>, konfirmasikan nama host dan proyek, lalu klik <strong>Buat Droplet</strong>. Menghapus centang kedua opsi alamat publik menghasilkan server privat saja.",
        "Buka <strong>Buat → Firewall</strong> dan beri nama. Ganti sumber SSH default dari mana saja dengan CIDR administrasi untuk <strong>TCP 22</strong>; tambahkan aturan <strong>UDP 51820</strong> dari panduan bersama bila perlu. Pertahankan aturan keluar yang sesuai, pilih server di <strong>Terapkan ke Droplet</strong>, lalu buat firewall.",
        "Agar alamat bertahan saat server diganti, buka <strong>Jaringan → IP yang dipesan → Tambahkan IP yang dipesan</strong>. Pilih <strong>Alamat IPv4 → Tetapkan ke Droplet</strong>, pilih Droplet ini, lalu konfirmasi. Catat IPv4 publik yang ditetapkan setelah penyediaan selesai."
      ],
      "apiSteps": [
        "Hanya untuk plugin kompatibel mendatang: buka <strong>Akun → API → Token → Buat token baru</strong>. Masukkan nama yang jelas dan masa berlaku.",
        "Pilih <strong>Cakupan khusus</strong> untuk operasi Droplet, kunci SSH, firewall, IP yang dipesan, serta dependensi yang diperlukan prosedur terimplementasi. Jangan otomatis memilih Akses Penuh; simpan token saat ditampilkan."
      ],
      "cleanupSteps": [
        "Setelah menyimpan data yang diperlukan, buka <strong>Pengaturan → Hancurkan</strong>, tinjau sumber daya terkait, masukkan nama Droplet, lalu konfirmasi. Volume dan snapshot yang tidak dipilih tetap ada; cadangan otomatis mempertahankan tanggal kedaluwarsanya.",
        "Buka <strong>Jaringan → IP yang dipesan → … → Hapus</strong> untuk setiap alamat yang tidak diperlukan, lalu konfirmasikan <strong>Hapus IP yang dipesan</strong>. Alamat dan sumber daya lain yang dipertahankan dapat terus dikenai biaya."
      ]
    },
    "hetzner": {
      "consoleSteps": [
        "Buka proyek yang dituju, lalu <strong>Firewall → Buat firewall</strong>. Beri nama firewall dan izinkan <strong>TCP 22</strong> masuk dari CIDR administrasi. Tambahkan aturan <strong>UDP 51820</strong> dari panduan bersama bila perlu. Membiarkan aturan keluar kosong mengizinkan lalu lintas keluar.",
        "Buka <strong>Server → Tambahkan server</strong>. Pilih <strong>Lokasi</strong> terdekat tempat jenis server pilihan tersedia. Tempatkan firewall dan server di proyek yang sama; ketersediaan dapat berubah menurut lokasi dan kapasitas saat ini.",
        "Pilih <strong>Jenis</strong> yang tersedia dengan minimal <strong>RAM 1 GB</strong> dan <strong>disk 20 GB</strong>, atau minimum penyedia yang lebih besar. Di <strong>Image → Image OS</strong>, pilih <strong>Ubuntu 24.04</strong> yang sesuai dengan arsitektur server pilihan.",
        "Di <strong>Jaringan</strong>, aktifkan <strong>IPv4</strong> publik. Pilih <strong>IPv4 utama</strong> yang belum ditetapkan pada proyek dan lokasi yang sama, atau biarkan Hetzner membuatnya. Server privat saja atau IPv6 saja tidak memenuhi persyaratan IPv4 publik panduan ini.",
        "Di <strong>Kunci SSH</strong>, tambahkan atau pilih kunci publik. Di <strong>Firewall</strong>, pilih firewall yang dibuat sebelumnya. Kunci akun yang dipilih di sini dipasang saat pembuatan; menambahkan kunci akun lain kemudian tidak memperbarui server ini.",
        "Masukkan <strong>Nama</strong> yang mudah dikenali, tinjau cadangan opsional dan biaya total, lalu klik <strong>Buat dan beli sekarang</strong>. Tunggu server siap dan catat IPv4 utamanya. Pertahankan sumber daya IP itu jika ingin memakai ulang alamatnya."
      ],
      "apiSteps": [
        "Hanya untuk plugin kompatibel mendatang: buka <strong>Keamanan → Token API → Buat token API</strong> pada proyek yang dituju dan masukkan deskripsi.",
        "Pilih <strong>Baca dan Tulis</strong> untuk penyediaan dan salin token sebelum menutup jendela. Ini memberi akses tulis di seluruh proyek, bukan izin terbatas pada satu server ini."
      ],
      "cleanupSteps": [
        "Simpan data yang diperlukan, lalu hapus server yang dituju. Untuk mempertahankan alamat saat penggantian, nonaktifkan dahulu pengaturan <strong>Hapus otomatis</strong> pada IP utama.",
        "Hapus terpisah IP utama, volume, dan snapshot yang dipertahankan tetapi tidak diperlukan. Alamat IPv4 terus dikenai biaya selama dipertahankan; <strong>Hapus otomatis</strong> yang aktif menghapus IP utama tanpa perlindungan bersama servernya."
      ]
    },
    "linode": {
      "consoleSteps": [
        "Buka <strong>Firewall → Buat firewall → Firewall khusus</strong>. Masukkan label. Pertahankan <strong>Kebijakan masuk default: Buang</strong> dan <strong>Kebijakan keluar default: Terima</strong>; ini mengizinkan lalu lintas keluar sambil mewajibkan aturan eksplisit untuk koneksi masuk.",
        "Tambahkan aturan masuk dengan <strong>Protokol: TCP</strong>, <strong>Port: 22</strong>, <strong>Sumber: IP/Netmask</strong> berisi CIDR administrasi, dan <strong>Tindakan: Terima</strong>. Tambahkan aturan <strong>UDP 51820</strong> dari panduan bersama bila perlu. Klik <strong>Simpan Perubahan</strong> untuk mengaktifkan aturan.",
        "Buka <strong>Buat → Linode</strong>. Pilih wilayah komputasi inti terdekat, lalu <strong>Distribusi → Ubuntu 24.04</strong>. Pilih paket tersedia dengan minimal <strong>RAM 1 GB</strong> dan <strong>disk 20 GB</strong>, atau minimum penyedia yang lebih besar.",
        "Tetapkan <strong>Label</strong>. Di bagian keamanan, pilih kunci SSH yang ada atau klik <strong>Tambahkan kunci SSH</strong> dan tempel kunci publik. <strong>Kata sandi root</strong> opsional saat penyediaan memakai kunci SSH; simpan kunci privat di perangkat.",
        "Pada jaringan, pilih <strong>Internet Publik</strong> dan <strong>Antarmuka Linode</strong>. Pilih firewall untuk antarmuka publik itu. Di <strong>Alamat IP</strong>, pilih <strong>Dipesan</strong> dan alamat di wilayah yang sama, atau klik <strong>Pesan IP</strong> untuk mendapatkannya.",
        "Tinjau cadangan opsional dan biaya lain di <strong>Ringkasan Linode</strong>, lalu klik <strong>Buat Linode</strong>. Tunggu inisialisasi dan catat IPv4 publiknya. Alamat yang dipesan tetap ada di akun setelah server dihapus dan tidak dapat dipindahkan ke wilayah lain."
      ],
      "apiSteps": [
        "Hanya untuk plugin kompatibel mendatang: buka menu nama pengguna → <strong>Token API → Buat Token Akses Pribadi</strong>. Tetapkan label dan masa berlaku.",
        "Berikan hanya cakupan yang diperlukan: penyediaan biasanya memerlukan Baca/Tulis untuk Linode dan Firewall; memesan atau melepaskan alamat juga memerlukan <code>ips:read_write</code>. Simpan token dengan aman."
      ],
      "cleanupSteps": [
        "Simpan data yang diperlukan, lalu buka <strong>Linode → … → Hapus → Hapus Linode</strong>. Periksa volume dan image yang dipertahankan secara terpisah.",
        "Untuk alamat yang tidak diperlukan, buka <strong>IP yang dipesan → … → Batalkan pemesanan</strong> dan konfirmasi. IP yang dipesan bertahan setelah penghapusan server dan terus dikenai biaya hingga dilepaskan."
      ]
    },
    "vultr": {
      "consoleSteps": [
        "Buka <strong>Akun → Kunci SSH → Tambahkan kunci SSH</strong>. Tempel dan beri nama kunci publik, lalu simpan. Pertahankan kunci privat yang cocok pada perangkat; pilih kunci publik tersimpan ini saat mengonfigurasi instans.",
        "Buka <strong>Jaringan → Grup firewall → Buat grup firewall</strong> dan beri nama. Tambahkan aturan IPv4 masuk untuk <strong>TCP 22</strong> dari CIDR administrasi, ditambah aturan opsional <strong>UDP 51820</strong>. Pastikan ada aturan tersimpan: grup kosong tidak diberlakukan.",
        "Buka <strong>Komputasi → Instans → Buat instans + → CPU bersama</strong>. Pilih paket tersedia dengan minimal <strong>RAM 1 GB</strong> dan <strong>disk 20 GB</strong>, atau minimum penyedia yang lebih besar. Pilih lokasi terdekat, lalu klik <strong>Konfigurasikan</strong>.",
        "Di <strong>Pemilihan dan konfigurasi image → Sistem operasi</strong>, pilih <strong>Ubuntu 24.04</strong>. Di <strong>Pengaturan server</strong>, pilih entri <strong>Kunci SSH</strong> dan <strong>Grup firewall</strong> yang telah berisi aturan. Masukkan <strong>Nama host Server 1</strong> dan <strong>Label Server 1</strong>.",
        "Di <strong>Konektivitas instans</strong>, pilih <strong>Instans dengan IP publik</strong> dan pertahankan <strong>IPv4 publik</strong> aktif. Tinjau cadangan otomatis dan biaya opsional lainnya. <strong>Login pengguna terbatas</strong> mengubah pengguna dari <code>root</code> menjadi <code>linuxuser</code> yang dapat memakai sudo. Tinjau <strong>Ringkasan</strong> dan klik <strong>Terapkan</strong>.",
        "Tunggu instans siap dan catat IPv4 publiknya. Alamat biasa tetap sama selama instans ini ada; gunakan IP yang dipesan di wilayah yang sama jika alamat harus bertahan saat penggantian."
      ],
      "apiSteps": [
        "Hanya untuk plugin kompatibel mendatang: buka <strong>Akun → API</strong>, lalu <strong>Aktifkan API</strong> di bawah <strong>Token Akses Pribadi</strong>. Simpan kredensial dengan aman.",
        "Di <strong>Kontrol Akses</strong>, izinkan IP/CIDR yang akan menjadi asal permintaan API. Perbarui setelah perubahan jaringan seluler; ini membatasi asal permintaan, bukan izin atas sumber daya tertentu."
      ],
      "cleanupSteps": [
        "Simpan data yang diperlukan, buka instans, lalu klik <strong>Hancurkan Server</strong>. Pilih <strong>Ya, hancurkan server ini</strong>, lalu <strong>Hancurkan Server</strong>.",
        "Hapus alamat yang dipertahankan tetapi tidak diperlukan melalui <strong>Jaringan → IP yang dipesan → Hapus IP yang dipesan</strong>. Periksa juga penyimpanan dan snapshot terpisah; menghapus server bukan pembersihan seluruh akun."
      ]
    },
    "oracle-cloud": {
      "consoleSteps": [
        "Pilih wilayah OCI dan kompartemen khusus. Konfirmasikan kuota komputasi, volume, serta IP publik; kapasitas tersedia dan kelayakan paket gratis bergantung pada sumber daya yang dipilih.",
        "Buka <strong>Jaringan → Jaringan cloud virtual → Mulai wizard VCN → Buat VCN dengan konektivitas Internet</strong>. Gunakan subnet publiknya dan pastikan ada rute <code>0.0.0.0/0</code> melalui Internet Gateway.",
        "Tinjau daftar keamanan subnet publik dan grup keamanan jaringan yang terkait. Batasi TCP <code>22</code> ke CIDR administrasi, izinkan UDP <code>51820</code>, dan pertahankan aturan keluar serta ICMP yang diperlukan.",
        "Buka <strong>Komputasi → Instans → Buat instans</strong>. Tetapkan nama, kompartemen, dan domain ketersediaan. Pilih <strong>Ubah image → Ubuntu → 24.04</strong>, bentuk VM yang kompatibel, serta memori dan penyimpanan boot yang memadai.",
        "Pilih subnet publik dan aktifkan penetapan IPv4 publik. Di <strong>Tambahkan kunci SSH</strong>, tempel atau unggah kunci publik Ed25519/ECDSA; kunci yang dibuat konsol adalah RSA. Simpan kunci privat yang cocok pada perangkat.",
        "Tinjau dan buat VM. Setelah Berjalan, catat IPv4 publiknya. Agar alamat bertahan saat VM diganti, Anda dapat mengganti IP sementara dengan IP publik yang dipesan dan ditetapkan ke IP privat utamanya; catat alamat baru."
      ],
      "apiSteps": [
        "Hanya untuk plugin penyediaan mendatang: minta administrator memberikan izin komputasi, jaringan, dan volume yang diperlukan kepada pengguna/grup IAM khusus di kompartemen ini.",
        "Buka <strong>Pengaturan pengguna → Kunci API → Tambahkan kunci API</strong>. Simpan kunci privat penandatangan RSA PEM, sidik jari, OCID tenancy/pengguna, serta wilayah; catat OCID kompartemen. Ini terpisah dari kunci SSH."
      ],
      "cleanupSteps": [
        "Akhiri instans dan secara eksplisit hapus volume boot jika tidak diperlukan; OCI mempertahankan volume itu secara default. Cadangkan data yang diinginkan terlebih dahulu.",
        "Hapus IP publik yang dipesan dan volume tersimpan yang tidak diperlukan. Hapus subnet, gateway, dan sumber daya jaringan lain yang tidak digunakan pada VCN khusus, termasuk sumber daya jaringan privat buatan wizard."
      ]
    },
    "ovhcloud": {
      "consoleSteps": [
        "Aktifkan proyek Public Cloud dan metode pembayaran. Periksa <strong>Pengelolaan proyek → Kuota</strong>. Di <strong>Kunci SSH → Buat kunci SSH</strong>, beri nama dan tempel kunci publik, lalu pilih <strong>Tambahkan</strong>.",
        "Buka <strong>Komputasi → Instans → Buat instans</strong>. Beri nama VM, pilih wilayah dan model yang sesuai, pilih Ubuntu <code>24.04</code>, lalu pilih kunci SSH tersimpan.",
        "Pada jaringan, aktifkan <strong>Tetapkan IP publik → IP Publik Dasar</strong>; konektivitas publik nonaktif secara default. IP Dasar menggunakan <code>Ext-Net</code> dan tidak kompatibel dengan gateway. Tinjau snapshot otomatis serta biaya, pilih penagihan per jam, lalu pilih <strong>Buat instans saya</strong>.",
        "Untuk mengatur pemfilteran, buka <strong>Pengelolaan proyek → Pengguna</strong>. Jika perlu, buat pengguna OpenStack dengan izin jaringan/instans yang sesuai, simpan kata sandinya, lalu pilih tindakan <strong>… → Luncurkan OpenStack Horizon</strong>.",
        "Di Horizon, pilih wilayah VM, lalu <strong>Jaringan → Grup Keamanan → Buat Grup Keamanan</strong>. Buat grup khusus. Di <strong>Kelola Aturan</strong>, izinkan TCP <code>22</code> dari CIDR administrasi dan UDP <code>51820</code>; pertahankan aturan keluar.",
        "Buka <strong>Komputasi → Instans → Edit Grup Keamanan</strong> di Horizon. Terapkan grup khusus dan lepaskan grup default yang permisif hanya dari VM ini; jangan pernah mengedit/menghapus grup default bersama. Setelah Aktif, catat IPv4 publik dari Ringkasannya."
      ],
      "apiSteps": [
        "Hanya untuk plugin penyediaan mendatang: buka halaman pembuatan token untuk wilayah API akun. Beri nama aplikasi, tetapkan masa berlaku, dan batasi Hak pada jalur/tindakan proyek yang didokumentasikan.",
        "Simpan kunci aplikasi, rahasia aplikasi, dan kunci konsumen dengan aman. Kredensial API bertanda tangan ini berbeda dari nama pengguna/kata sandi OpenStack yang digunakan Horizon."
      ],
      "cleanupSteps": [
        "Cadangkan data yang diinginkan, lalu pilih <strong>… → Hapus → Hapus instans</strong> pada instans. Penagihan per jam berlanjut sampai dihapus.",
        "Hapus secara terpisah volume, snapshot/cadangan, serta Floating/Additional IP atau gateway yang dibuat sendiri dan tidak diperlukan. Menghapus VM tidak menghapus semua sumber daya terkait."
      ]
    },
    "scaleway": {
      "consoleSteps": [
        "Pilih Organisasi dan Proyek yang benar, aktifkan penagihan, lalu periksa kuota. Di <strong>Dasbor proyek → Tambahkan kunci SSH</strong>, beri nama dan tempel kunci publik. Kunci SSH memiliki cakupan pada Proyek ini.",
        "Buka <strong>Komputasi → Instans CPU dan GPU → Grup keamanan</strong> pada Zona Ketersediaan pilihan. Buat grup khusus di zona tersebut. Aktifkan pemfilteran stateful, atur masuk menjadi <strong>Buang</strong> dan keluar menjadi <strong>Terima</strong>.",
        "Pada tab <strong>Aturan</strong> grup, izinkan TCP <code>22</code> dari CIDR administrasi dan UDP <code>51820</code> untuk klien VPN. Biarkan TCP <code>51821</code> tertutup. Grup default yang dibuat otomatis bersifat stateless, jadi pilih grup khusus Anda secara eksplisit.",
        "Pilih <strong>Buat Instans → Buat Instans CPU</strong>, pilih konfigurasi CPU yang sesuai dan Zona Ketersediaan yang sama, lalu <strong>Konfigurasikan Instans</strong>. Beri nama, pilih Ubuntu <code>24.04</code>/Noble, dan atur volume sistem minimal 20 GB.",
        "Biarkan <strong>IPv4 publik</strong> aktif dan alokasikan alamat, atau pilih alamat tersedia yang sudah ada. Pilih grup keamanan khusus dan periksa kunci SSH yang ditampilkan. Tinjau pengaturan IPv6 secara terpisah jika diaktifkan.",
        "Pilih <strong>Tinjau</strong>, periksa perkiraan biaya, lalu <strong>Buat Instans</strong>. Tunggu penyediaan selesai dan salin IPv4 publik dari <strong>Ringkasan</strong>. IP fleksibel ini adalah sumber daya terpisah yang siklus hidupnya harus Anda kelola."
      ],
      "apiSteps": [
        "Hanya untuk plugin penyediaan mendatang: buat aplikasi IAM dan berikan izin yang diperlukan untuk Instans, jaringan, dan penyimpanan pada Proyek tujuan.",
        "Buka <strong>IAM dan kunci API → Kunci API → Buat kunci API</strong>. Pilih aplikasi dan masa berlaku. Simpan kunci akses serta rahasia yang ditampilkan sekali; catat UUID Proyek dan zona secara terpisah."
      ],
      "cleanupSteps": [
        "Cadangkan data yang diinginkan. Di Zona Ketersediaan yang benar, pilih <strong>… → Hapus</strong> pada instans, ketik <code>DELETE</code>, lalu pilih penghapusan IP dan volume Block Storage terkait yang tidak diperlukan lagi.",
        "Konfirmasikan <strong>Hapus Instans</strong>. Periksa IP fleksibel, volume, dan snapshot tersimpan yang tidak diperlukan; mematikan saja tidak menghapus sumber daya tersebut."
      ]
    }
  }
};
