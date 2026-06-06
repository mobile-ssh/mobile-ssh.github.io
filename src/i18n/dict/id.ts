import type { Dict } from "../types";

export const id: Dict = {
  meta: {
    siteName: "Mobile SSH",
    languageLabel: "Bahasa",
    languageSwitcher: "Ubah bahasa"
  },
  nav: {
    home: "Beranda",
    features: "Fitur",
    docs: "Dokumentasi",
    compare: "Perbandingan",
    about: "Tentang",
    privacy: "Privasi"
  },
  footer: {
    tagline: "Alur kerja SSH, SFTP, dan terminal yang fokus untuk perangkat Android.",
    documentation: "Dokumentasi",
    comparison: "Perbandingan",
    privacy: "Privasi",
    contact: "Kontak",
    feedback: "Umpan Balik"
  },
  home: {
    metaTitle: "Mobile SSH — Klien SSH untuk Android",
    metaDescription:
      "Mobile SSH adalah klien SSH yang fokus untuk Android dengan terminal multi-sesi, transfer SFTP, kunci pribadi, penerusan port, dan alur kerja yang ramah tmux.",
    eyebrow: "Klien SSH untuk Android",
    h1: "Mobile SSH",
    intro:
      "Klien SSH yang fokus untuk Android dengan terminal multi-sesi, autentikasi kunci pribadi, transfer berkas SFTP, penerusan port lokal, dan kontrol ramah tmux untuk ponsel dan tablet.",
    versionLine: "Tersedia dalam {count} bahasa · versi {version}",
    ctaDocs: "Baca dokumentasi",
    ctaPlay: "Dapatkan di Google Play",
    advantagesHead: "Mengapa Mobile SSH",
    advantagesIntro: "Dirancang untuk menjawab hal-hal yang biasa keliru pada klien SSH ponsel.",
    advantages: [
      { title: "Tanpa tingkatan Pro, tanpa iklan", text: "Semua fitur ada di aplikasi yang sama. Tidak ada paywall yang menyembunyikan alur kerja penting di balik upgrade Pro, tidak ada banner iklan di terminal." },
      { title: "Data Anda tetap lokal", text: "Server, kredensial, dan kunci yang disimpan ada di perangkat. Tidak ada akun cloud; tidak ada yang bisa dihentikan." },
      { title: "Host tersimpan, terhubung dengan satu tap", text: "Tambahkan host sekali dan hubungkan kembali dengan satu tap — termasuk kunci, port, dan tunnel yang sudah dikonfigurasi." },
      { title: "Peringatan agen", text: "Dapatkan notifikasi — dengan suara dan getaran — saat Claude Code, Codex, atau agen jarak jauh lain memerlukan masukan Anda. Berbunyi di headphone bahkan saat video sedang berjalan." },
      { title: "Tombol terminal di atas keyboard", text: "Baris khusus berisi ESC, TAB, CTRL, ALT, FN, panah, Home, End, PgUp/PgDn — tanpa mengganggu saran Gboard." },
      { title: "Penerusan port tanpa perintah", text: "Tunnel melekat pada profil server dan otomatis aktif saat tersambung." },
      { title: "Bertahan saat layar terkunci dan roaming", text: "Layanan foreground, wake lock, dan koneksi ulang otomatis menjaga sesi tetap hidup meski layar mati, ganti aplikasi, atau ganti jaringan." }
    ],
    sectionAHead: "Dirancang untuk pekerjaan SSH di Android",
    sectionAIntro:
      "Mobile SSH memendekkan jalur administrasi umum: simpan server, sambungkan, jaga sesi tetap hidup, pindahkan berkas saat diperlukan, dan kembali cepat ke terminal aktif.",
    features: [
      { title: "Terminal SSH", text: "Emulasi terminal xterm-256color dengan scrollback 5000 baris, warna, tombol kursor, salin/bagikan, dan penyesuaian ukuran teks dengan cubit." },
      { title: "Kisi multi-sesi", text: "Hingga delapan sesi SSH dalam kisi yang dapat diubah ukurannya — ketuk panel untuk fokus, ketuk ganda untuk layar penuh, cubit untuk ubah ukuran teks." },
      { title: "Tautan yang dapat diklik", text: "URL di terminal digarisbawahi dan terbuka di browser dengan satu tap — tanpa menyalin atau berpindah aplikasi." },
      { title: "Folder server", text: "Atur server tersimpan ke dalam grup yang dapat diciutkan. Ketuk tajuk grup untuk menciutkannya; struktur folder tersedia di pemilih sambungan cepat." },
      { title: "Peringatan agen", text: "Notifikasi dengan suara dan getaran saat agen jarak jauh (Claude Code, Codex, dll.) memerlukan masukan Anda. Berbunyi di headphone bahkan saat panggilan video." },
      { title: "Kunci pribadi", text: "Autentikasi kata sandi atau kunci pribadi. Buat kunci Ed25519, ECDSA, atau RSA di perangkat; impor atau tempel kunci yang ada." },
      { title: "Transfer SFTP", text: "Penjelajah berkas dua panel yang terhubung ke sesi SSH aktif. Antrakan unggahan dan unduhan, ganti nama, hapus, dan periksa izin jarak jauh." },
      { title: "Penerusan port", text: "Simpan spesifikasi tunnel lokal bersama profil server — tunnel terbuka otomatis saat tersambung, atau tambah/hapus saat sedang terhubung." },
      { title: "Alur penyambungan ulang", text: "Layanan foreground, wake lock, keepalive, dan penyambungan ulang backoff eksponensial menjaga sesi hidup saat layar mati dan roaming." },
      { title: "Cadangan & pemulihan", text: "Ekspor server dan kredensial tersimpan ke file cadangan terenkripsi; impor dengan gabung atau ganti untuk berpindah antar perangkat." }
    ],
    multiHead: "Satu layar, beberapa shell aktif",
    multiP1:
      "Tampilan terminal dapat menampung beberapa sesi SSH aktif dalam kisi. Pilih panel untuk mengetik, gunakan baris tombol tambahan untuk kontrol terminal, cubit untuk menyesuaikan ukuran teks, dan ketuk ganda panel saat butuh fokus layar penuh.",
    multiP2:
      "Riwayat sesi dan pemulihan sesi aktif membantu Anda kembali ke pekerjaan saat ini setelah berpindah aplikasi, kunci layar, atau pembuatan ulang aktivitas Android.",
    multiAlt:
      "Mobile SSH di ponsel yang menampilkan dua sesi SSH terminal aktif dalam tampilan terbagi berdampingan.",
    sftpHead: "SFTP saat terminal tidak cukup",
    sftpBody:
      "Buka transfer berkas dari sesi yang tersambung untuk menelusuri penyimpanan ponsel dan direktori jarak jauh. Antrekan unggahan dan unduhan, urutkan berkas, ingat jalur terbaru per host, dan periksa izin berkas jarak jauh sebelum memindahkan.",
    sftpCtaGuide: "Panduan transfer berkas",
    sftpCtaAll: "Semua fitur",
    sftpAlt: "Layar transfer berkas Mobile SSH di ponsel dengan panel lokal dan jarak jauh.",
    galleryHead: "Lihat di perangkat nyata",
    galleryIntro:
      "Tangkapan layar dari ponsel Android — layar yang sama yang akan Anda gunakan untuk menambahkan server, bekerja di terminal, menjalankan beberapa sesi, dan memindahkan berkas via SFTP.",
    galleryAlts: [
      "Layar awal Mobile SSH di ponsel dengan ubin Server, Kredensial, Log, Pengaturan, Debug, dan Tentang.",
      "Dialog Tambah Server di ponsel menampilkan kolom host, port, kredensial, kunci pribadi, dan penerusan port.",
      "Terminal SSH satu sesi di ponsel dengan baris tombol tambahan di bagian bawah.",
      "Dua sesi SSH dalam tampilan terbagi berdampingan di ponsel.",
      "Dua sesi SSH bertumpuk secara vertikal di ponsel dengan panel aktif disorot.",
      "Layar transfer SFTP di ponsel dengan panel Ponsel Saya dan Host Jarak Jauh.",
      "Dialog Tentang di ponsel menampilkan kolom versi, penulis, lisensi, dan situs web.",
      "Dialog Buat Kunci SSH di ponsel dengan kolom label, pengguna, jenis kunci, dan frasa sandi.",
      "Dialog Kunci Publik di ponsel yang menampilkan kunci yang dibuat dengan opsi salin, bagikan, dan simpan.",
      "Layar Server Tersimpan yang menampilkan server yang diatur dalam grup folder Kerja dan Pribadi yang dapat diciutkan.",
      "Terminal SSH di ponsel dengan URL https:// digarisbawahi sebagai tautan yang dapat diklik."
    ],
    compareHead: "Tempatnya di samping Termux dan Termius",
    compareIntro:
      "Mobile SSH sengaja dibuat sempit: bukan lingkungan Linux lengkap maupun brankas tim lintas platform. Ini adalah alat SSH/SFTP lokal untuk Android dengan akses cepat ke kontrol sesi yang paling sering dibutuhkan pengguna seluler.",
    compareGuideTitle: "Panduan perbandingan",
    compareGuideText: "Kapan memilih Mobile SSH, Termux, atau Termius pada perangkat Android.",
    privacyTitle: "Kebijakan privasi",
    privacyText: "Lihat data koneksi mana yang disimpan lokal dan apa yang dikirim ke server Anda."
  },
  features: {
    metaTitle: "Fitur | Mobile SSH",
    metaDescription:
      "Fitur utama Mobile SSH untuk alur SSH, terminal, SFTP, kunci pribadi, tmux, dan penerusan port di Android.",
    eyebrow: "Daftar fitur",
    h1: "Fitur Mobile SSH",
    intro:
      "Mobile SSH dibangun untuk penggunaan SSH langsung di Android: buka terminal, jaga tetap hidup, pindahkan berkas, simpan server, dan pulih cepat dari gangguan seluler.",
    groups: [
      {
        title: "Koneksi",
        items: [
          "Autentikasi kata sandi dan kunci pribadi",
          "Kunci pribadi Ed25519, RSA, ECDSA, dan DSA didukung implementasi aplikasi saat ini",
          "Profil server tersimpan dengan host, port, pengguna, kredensial, kunci pribadi, dan spesifikasi tunnel opsional",
          "Cari server tersimpan berdasarkan nama atau host",
          "Alur Tambah Sesi berbasis pencarian: pilih server tersimpan dari halaman pencarian khusus dan sambung dengan satu tap",
          "Catatan kredensial yang dapat dipakai ulang dan dipilih dari penyetelan server",
          "Riwayat sesi terkini untuk menyambung ulang ke set server umum",
          "Log upaya masuk berhasil dan gagal"
        ]
      },
      {
        title: "Terminal",
        items: [
          "Perilaku terminal bergaya VT100/xterm-256color",
          "Buffer scrollback 5000 baris",
          "Baris tombol tambahan untuk ESC, TAB, CTRL, Shift, panah, Home, End, PgUp, PgDn, dan toggle keyboard",
          "Sentuh untuk fokus, opsi sentuh-untuk-tampilkan-keyboard, aksi salin dan salin semua",
          "Cubit untuk ukuran teks dengan resize terminal jarak jauh",
          "Mode layar penuh panel dengan ketuk ganda",
          "Seleksi teks terminal dengan Salin, Bagikan, dan Pilih semua",
          "Saran/koreksi Gboard dan input suara didukung, dengan buffer teks yang sedang disusun untuk terminal"
        ]
      },
      {
        title: "Sesi",
        items: [
          "Hingga delapan sesi SSH bersamaan",
          "Tata letak kisi untuk sesi aktif",
          "Dukungan layanan foreground untuk ketahanan latar belakang dan kunci layar",
          "Keepalive dan upaya penyambungan ulang dengan backoff eksponensial",
          "Titik masuk Sesi Aktif dari layar awal; notifikasi berkelanjutan menampilkan daftar sesi — ketuk untuk membuka",
          "Pelacakan perintah tmux dan petunjuk reattach untuk pekerjaan terhenti",
          "Peringatan agen: notifikasi dengan suara dan getaran opsional saat agen jarak jauh (Claude Code, Codex, dll.) memerlukan masukan; berbunyi di headphone saat video"
        ]
      },
      {
        title: "Berkas dan tunnel",
        items: [
          "Penjelajah SFTP dua panel untuk berkas lokal dan jarak jauh",
          "Operasi unggah dan unduh yang diantre",
          "Aksi jarak jauh: ganti nama, hapus, buat, edit, dan detail",
          "Urutkan berdasarkan nama atau tanggal dengan persistensi per host",
          "Penerusan port lokal yang disimpan bersama profil server",
          "Tampilan tambah/hapus tunnel runtime untuk sesi yang tersambung"
        ]
      },
      {
        title: "Pelokalan",
        items: [
          "Terjemahan UI aplikasi: Arab, Bengali, Tionghoa (Sederhana dan Tradisional), Inggris, Prancis, Jerman, Hindi, Indonesia, Jepang, Marathi, Pidgin Nigeria, Portugis, Rusia, Spanyol, Tamil, Telugu, Turki, Urdu",
          "Mengikuti bahasa sistem Android; tidak perlu pemilih khusus dalam aplikasi"
        ]
      },
      {
        title: "Kunci dan cadangan",
        items: [
          "Buat kunci Ed25519, ECDSA, atau RSA baru di perangkat, dengan frasa sandi opsional",
          "Salin, bagikan, atau simpan kunci publik yang dibuat untuk ditambahkan ke authorized_keys server",
          "Ekspor server dan kredensial tersimpan ke file cadangan",
          "Frasa sandi opsional mengenkripsi cadangan; impor dengan gabung atau ganti",
          "Cadangan tanpa enkripsi menyimpan kata sandi dan kunci dalam teks biasa — lindungi atau hapus file"
        ]
      }
    ],
    security:
      "Catatan keamanan: aplikasi saat ini menyimpan profil server dan kredensial yang tersimpan secara lokal di perangkat Android. Tidak ada sinkronisasi awan. Lindungi perangkat dengan kunci layar yang kuat dan hindari menyimpan kredensial di perangkat bersama."
  },
  compare: {
    metaTitle: "Mobile SSH vs Termux vs Termius di Android",
    metaDescription:
      "Perbandingan yang seimbang antara Mobile SSH, Termux, dan Termius untuk alur SSH di Android.",
    eyebrow: "Pilihan SSH di Android",
    h1: "Mobile SSH vs Termux vs Termius",
    intro:
      "Alat-alat ini saling beririsan di sekitar SSH, tetapi dibangun untuk tujuan berbeda. Mobile SSH adalah klien SSH/SFTP yang fokus untuk Android, Termux adalah lingkungan Linux, dan Termius adalah klien SSH lintas platform dengan fitur produktivitas berbasis akun.",
    columns: {
      need: "Kebutuhan",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "Tujuan utama",
        mobileSsh: "Klien SSH, SFTP, tunnel lokal, dan terminal khusus untuk Android.",
        termux: "Emulator terminal Android dan lingkungan Linux dengan paket APT.",
        termius: "Klien SSH modern di Android, iOS, desktop, dan alur kerja tim berorientasi web."
      },
      {
        need: "Gaya penyetelan",
        mobileSsh: "Masukkan host atau simpan profil server, lalu sambung langsung.",
        termux: "Pasang paket seperti OpenSSH, konfigurasi alat shell, dan bekerja dari baris perintah ala Linux.",
        termius: "Buat atau sinkronkan host, kunci, snippet, dan brankas melalui model aplikasi/akun Termius."
      },
      {
        need: "Kontrol terminal Android",
        mobileSsh: "Baris tombol tambahan bawaan, sesi kisi, panel layar penuh, zoom cubit, seleksi dengan salin/bagikan, saran Gboard, input suara, dan gulir ramah tmux.",
        termux: "Lingkungan terminal yang kuat; perilakunya tergantung pada alat dan konfigurasi terpasang.",
        termius: "Add-on keyboard seluler, gestur, tab, autocomplete, snippet, dan UX terminal yang rapi."
      },
      {
        need: "Transfer berkas",
        mobileSsh: "Transfer SFTP dua panel bawaan terkait sesi SSH aktif.",
        termux: "Gunakan alat baris perintah seperti scp, sftp, rsync, atau utilitas berkas yang terpasang.",
        termius: "Fitur SFTP bawaan dan manajemen host/kunci."
      },
      {
        need: "Kerja multi-sesi",
        mobileSsh: "Hingga delapan sesi SSH bersamaan dalam kisi Android.",
        termux: "Gunakan multiplexer seperti tmux di dalam Termux atau shell jarak jauh.",
        termius: "Tab dan tampilan terbagi tergantung platform dan paket."
      },
      {
        need: "Model data",
        mobileSsh: "Server, kredensial, riwayat, pengaturan, dan log hanya tersimpan lokal.",
        termux: "Sistem berkas ala Linux dan paket di dalam lingkungan aplikasi Termux.",
        termius: "Brankas terenkripsi untuk host, kunci, snippet, aturan penerusan, known hosts, dan berbagi tim."
      },
      {
        need: "Kasus terbaik",
        mobileSsh: "Anda ingin aplikasi Android sederhana untuk menyambung ke server, memindahkan berkas, dan menjaga sesi tetap hidup.",
        termux: "Anda ingin lingkungan baris perintah lengkap di Android dan nyaman memasang/mengonfigurasi paket.",
        termius: "Anda ingin sinkronisasi lintas perangkat, fitur produktivitas rapi, brankas, dan kolaborasi."
      }
    ],
    cards: [
      {
        title: "Pilih Mobile SSH bila",
        body: "Anda ingin akses SSH langsung dari Android tanpa menyiapkan lingkungan Linux penuh atau model akun yang disinkronkan ke cloud. Sangat cocok untuk server tersimpan, SFTP, sesi tmux, dan alur tunnel lokal yang cepat."
      },
      {
        title: "Pilih Termux bila",
        body: "Anda butuh manajemen paket, shell, kompilator, scripting, rsync, curl, Git, Python, Node.js, atau alat ala Linux lainnya langsung di perangkat Android."
      },
      {
        title: "Pilih Termius bila",
        body: "Anda ingin ruang kerja SSH komersial lintas platform dengan sinkronisasi brankas terenkripsi, berbagi tim, manajemen keyring, snippet, dan aplikasi yang konsisten di beberapa perangkat."
      }
    ],
    featureHeading: "Fitur per fitur",
    featureRows: [
      { category: "Koneksi",          feature: "Profil server tersimpan",                        mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Koneksi",          feature: "Cari server tersimpan",                          mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Koneksi",          feature: "Folder / grup server",                           mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Koneksi",          feature: "Pemilih Tambah Sesi berbasis pencarian",         mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Koneksi",          feature: "Catatan kredensial yang dapat dipakai ulang",    mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Koneksi",          feature: "Riwayat sesi terkini",                           mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Koneksi",          feature: "Log masuk",                                      mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",         feature: "Terminal SSH",                                   mobile: "yes",     termux: "melalui OpenSSH",   termius: "yes" },
      { category: "Terminal",         feature: "Emulasi xterm-256color",                         mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "Buffer scrollback 5 000 baris",                  mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "Baris tombol tambahan (ESC/TAB/CTRL/…)",         mobile: "yes",     termux: "sebagian",       termius: "yes" },
      { category: "Terminal",         feature: "Ukuran teks dengan cubit",                       mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "Ketuk ganda panel ke layar penuh",               mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",         feature: "URL yang dapat diklik di output terminal",       mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Terminal",         feature: "Seleksi teks: salin / bagikan / pilih semua",   mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "Saran Gboard & input suara",                     mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Sesi",             feature: "Beberapa sesi SSH bersamaan",                    mobile: "hingga 8", termux: "melalui tmux",      termius: "yes" },
      { category: "Sesi",             feature: "Tata letak panel kisi",                          mobile: "yes",     termux: "no",            termius: "tab" },
      { category: "Sesi",             feature: "Gulir ramah tmux",                               mobile: "yes",     termux: "yes",           termius: "no" },
      { category: "Sesi",             feature: "Petunjuk reattach tmux saat penyambungan ulang", mobile: "yes",     termux: "yes",           termius: "no" },
      { category: "Sesi",             feature: "Peringatan agen (Claude Code / Codex)",          mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sesi",             feature: "Notifikasi berkelanjutan dengan daftar sesi",    mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sesi",             feature: "Layanan foreground & wake lock",                 mobile: "yes",     termux: "sebagian",       termius: "yes" },
      { category: "Sesi",             feature: "Penyambungan ulang otomatis dengan backoff",     mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Berkas",           feature: "UI transfer berkas SFTP bawaan",                 mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Berkas",           feature: "Penjelajah dua panel lokal + jarak jauh",        mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Berkas",           feature: "Antrean unggah / unduh",                         mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Berkas",           feature: "Ganti nama / hapus / buat jarak jauh",           mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Berkas",           feature: "Tampilan izin berkas jarak jauh",                mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Berkas",           feature: "Urutkan berdasarkan nama atau tanggal per host", mobile: "yes",     termux: "no",            termius: "sebagian" },
      { category: "Tunnel",           feature: "Penerusan port lokal",                           mobile: "yes",     termux: "melalui CLI",       termius: "yes" },
      { category: "Tunnel",           feature: "Tunnel tersimpan bersama profil server",         mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Tunnel",           feature: "Tambah / hapus tunnel saat runtime",             mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Kunci",            feature: "Autentikasi kata sandi",                         mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Kunci",            feature: "Autentikasi kunci pribadi",                      mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Kunci",            feature: "Pembuatan kunci di perangkat",                   mobile: "yes",     termux: "melalui ssh-keygen", termius: "yes" },
      { category: "Kunci",            feature: "Bagikan / simpan kunci publik yang dibuat",      mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Cadangan",         feature: "Ekspor / impor cadangan server",                 mobile: "yes",     termux: "no",            termius: "brankas cloud" },
      { category: "Cadangan",         feature: "File cadangan lokal terenkripsi",                mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Cadangan",         feature: "Tidak perlu akun",                               mobile: "yes",     termux: "yes",           termius: "no" },
      { category: "Privasi & biaya",  feature: "Tanpa paywall Pro",                              mobile: "yes",     termux: "yes",           termius: "sebagian" },
      { category: "Privasi & biaya",  feature: "Tanpa iklan",                                   mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Privasi & biaya",  feature: "Opsi keluar analitik",                           mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Privasi & biaya",  feature: "Data hanya lokal (tanpa sinkronisasi awan)",     mobile: "yes",     termux: "yes",           termius: "no" }
    ]
  },
  privacy: {
    metaTitle: "Kebijakan Privasi | Mobile SSH",
    metaDescription:
      "Kebijakan privasi Mobile SSH meliputi penyimpanan lokal, transmisi data SSH, transfer berkas, log, dan izin Android.",
    eyebrow: "Privasi",
    h1: "Kebijakan Privasi",
    intro:
      "Mobile SSH dirancang sebagai klien SSH lokal untuk Android. Tidak memerlukan akun Mobile SSH dan tidak menyediakan layanan sinkronisasi awan Mobile SSH.",
    sections: [
      {
        heading: "Informasi yang tersimpan di perangkat Anda",
        body: "Jika memilih menyimpan data aplikasi, Mobile SSH menyimpannya secara lokal di perangkat Android. Ini dapat mencakup profil server tersimpan, nama pengguna, port, kata sandi, kunci pribadi, frasa-sandi kunci, aturan penerusan port, sesi terbaru, riwayat upaya masuk, jalur transfer berkas, preferensi urutan, petunjuk reattach tmux, pengaturan aplikasi, dan log debug saat perekaman debug diaktifkan."
      },
      {
        heading: "Informasi yang dikirim melalui jaringan",
        body: "Mobile SSH mengirim data autentikasi SSH hanya ke server yang Anda konfigurasi dan sambungi. Input/output terminal, isi berkas SFTP, dan trafik penerusan port lokal dipertukarkan dengan server dan titik akhir jarak jauh pilihan Anda. Mobile SSH tidak mengirim data ini ke layanan analitik, iklan, telemetri, atau sinkronisasi awan Mobile SSH."
      },
      {
        heading: "Transfer berkas dan akses penyimpanan",
        body: "Fitur transfer berkas menjelajahi penyimpanan ponsel lokal dan direktori SFTP jarak jauh agar Anda dapat mengunggah dan mengunduh berkas. Pada versi Android yang memerlukannya, aplikasi dapat meminta akses penyimpanan agar penjelajah lokal dapat membaca dan menulis berkas terpilih."
      },
      {
        heading: "Log dan pemecahan masalah",
        body: "Riwayat masuk dan log debug opsional disimpan lokal untuk pemecahan masalah. Log debug dapat mencakup peristiwa terminal, ukuran data SSH, diagnostik input sentuh, peristiwa resize, dan peristiwa siklus hidup tunnel. Tinjau arsip debug sebelum membagikannya ke dukungan atau pihak lain."
      },
      { heading: "Analitik penggunaan anonim", body: "Untuk memahami cara aplikasi digunakan dan menyempurnakannya, Mobile SSH mengirim analitik penggunaan anonim ke Aptabase, penyedia analitik yang berfokus pada privasi yang bertindak atas nama kami. Ini terbatas pada peristiwa anonim (seperti pembukaan aplikasi dan fitur yang digunakan) beserta versi aplikasi, versi Android, model perangkat, dan bahasa. Digunakan pengidentifikasi sesi acak yang disetel ulang secara berkala dan tidak terkait dengan Anda atau perangkat Anda. Ini tidak pernah mencakup server SSH, nama host, nama pengguna, kata sandi, kunci, perintah, atau isi file Anda. Data dikirim melalui koneksi terenkripsi (HTTPS). Analitik aktif secara default dan dapat dimatikan kapan saja di Setelan; saat dimatikan, tidak ada yang dikirim." }
    ],
    permissionsHeading: "Izin",
    permissions: [
      { label: "Internet", body: "diperlukan untuk menyambung ke server SSH." },
      { label: "Wake lock dan Wi-Fi lock", body: "menjaga sesi SSH tetap aktif saat perangkat tidur." },
      { label: "Layanan foreground dan notifikasi", body: "untuk menangani koneksi aktif di latar belakang." },
      { label: "Akses penyimpanan", body: "digunakan oleh transfer berkas dan impor kunci." }
    ],
    securityHeading: "Tanggung jawab keamanan",
    securityBody:
      "Lindungi perangkat Android dengan kunci layar kuat jika menyimpan kredensial atau kunci pribadi. Hanya sambungkan ke server yang Anda percayai. Implementasi saat ini menggunakan penyimpanan aplikasi lokal, bukan brankas awan terenkripsi terpisah.",
    contactHeading: "Kontak",
    contactBody: "Kontak dukungan: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  },
  docsIndex: {
    metaTitle: "Dokumentasi | Mobile SSH",
    metaDescription: "Dokumentasi pengguna akhir untuk Mobile SSH di Android.",
    eyebrow: "Panduan pengguna",
    h1: "Dokumentasi Mobile SSH",
    intro:
      "Gunakan halaman ini sebagai panduan publik untuk memasang, menyambung, mengelola sesi, memindahkan berkas, meneruskan port, dan memecahkan masalah Mobile SSH.",
    cards: [
      { slug: "getting-started",  title: "Mulai cepat",       text: "Pasang, buka aplikasi, sambung ke server pertama, dan simpan host umum." },
      { slug: "terminal",         title: "Terminal",          text: "Panel, baris tombol tambahan, gulir, aksi salin, perilaku tmux, dan pengaturan keyboard." },
      { slug: "file-transfer",    title: "Transfer berkas",   text: "Jelajahi berkas ponsel dan server, unggah, unduh, urutkan, dan lihat detail jarak jauh." },
      { slug: "port-forwarding",  title: "Penerusan port",    text: "Konfigurasi string tunnel lokal dan kelola penerusan aktif saat tersambung." },
      { slug: "troubleshooting",  title: "Pemecahan masalah", text: "Atasi masalah koneksi, autentikasi, keyboard, penyimpanan, dan penyambungan ulang." }
    ]
  },
  docsNav: {
    home: "Beranda dokumentasi",
    gettingStarted: "Mulai cepat",
    terminal: "Terminal",
    fileTransfer: "Transfer berkas",
    portForwarding: "Penerusan port",
    troubleshooting: "Pemecahan masalah"
  },
  about: {
    metaTitle: "Tentang | Mobile SSH",
    metaDescription: "Tentang Mobile SSH: versi, penulis, lisensi, dan pemberitahuan open-source untuk klien SSH Android.",
    eyebrow: "Tentang",
    h1: "Tentang Mobile SSH",
    intro: "Klien SSH multi-sesi dengan tmux, penerusan port, dan SFTP.",
    appHeading: "Tentang aplikasi",
    versionLabel: "Versi",
    authorLabel: "Penulis",
    authorValue: "Dmitry Kozlov",
    licenseLabel: "Lisensi",
    licenseValue: "MIT",
    websiteLabel: "Situs",
    privacyLabel: "Kebijakan privasi",
    privacyLinkText: "Kebijakan privasi",
    noticesHeading: "Pemberitahuan open source",
    noticesIntro: "Mobile SSH dibangun di atas pustaka open-source berikut. Setiap pustaka digunakan menurut lisensinya masing-masing.",
    notices: [
      { name: "JSch (mwiede fork)",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch" },
      { name: "JZlib (bundled in JSch)",   license: "BSD 3-clause" },
      { name: "jBCrypt (bundled in JSch)", license: "ISC" },
      { name: "Ed25519 / Ed448 Java",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java" },
      { name: "StringFog",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog" }
    ],
    contactHeading: "Kontak",
    contactBody: "Kontak dukungan: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  }
};
