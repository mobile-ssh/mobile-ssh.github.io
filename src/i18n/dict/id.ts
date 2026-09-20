import type { Dict } from "../types";

export const id: Dict = {
  meta: {
    siteName: "Mobile SSH",
    languageLabel: "Bahasa",
    languageSwitcher: "Ubah bahasa"
  },
  nav: {
    blog: "Blog",
    home: "Beranda",
    features: "Fitur",
    docs: "Dokumentasi",
    compare: "Perbandingan",
    about: "Tentang",
    privacy: "Privasi"
  },
  footer: {
    discordCommunity: "Komunitas Mobile SSH di Discord",
    beta: "Uji coba beta",
    tagline: "Alur kerja SSH, SFTP, dan terminal yang fokus untuk perangkat Android dan iOS.",
    documentation: "Dokumentasi",
    comparison: "Perbandingan",
    privacy: "Privasi",
    contact: "Kontak",
    feedback: "Umpan Balik"
  },
  home: {
    metaTitle: "Mobile SSH — Klien SSH untuk Android & iOS",
    metaDescription:
      "Mobile SSH untuk Android dan iOS: terminal SSH, host perantara, tmux, herdr, Zellij, SFTP, desktop VNC dan cadangan. Android juga memiliki klien VPN dan kunci keamanan.",
    eyebrow: "Klien SSH untuk Android & iOS",
    h1: "Mobile SSH",
    intro:
      "Terminal SSH, pengelola tmux, herdr dan Zellij, SFTP, desktop VNC, host perantara dan terowongan lokal untuk ponsel serta tablet. Eternal Terminal menjaga shell tetap hidup saat terputus. Android juga menyediakan VPN dan autentikasi kunci keamanan USB/NFC.",
    versionLine: "Tersedia dalam {count} bahasa · Android {version} · iOS {iosVersion} beta",
    ctaDocs: "Baca dokumentasi",
    ctaPlay: "Dapatkan di Google Play",
    ctaIos: "Dapatkan beta iOS di TestFlight",
    platformAndroid: "Android",
    platformIos: "iOS — iPhone & iPad",
    advantagesHead: "Mengapa Mobile SSH",
    advantagesIntro: "Dirancang untuk menjawab hal-hal yang biasa keliru pada klien SSH ponsel.",
    advantages: [
      { title: "Tanpa tingkatan Pro, tanpa iklan", text: "Semua fitur ada di aplikasi yang sama. Tidak ada paywall yang menyembunyikan alur kerja penting di balik upgrade Pro, tidak ada banner iklan di terminal." },
      { title: "Data Anda tetap lokal", text: "Server, kredensial, dan kunci yang disimpan ada di perangkat. Tidak ada akun awan; tidak ada yang bisa dihentikan." },
      { title: "Host tersimpan, terhubung dengan satu ketuk", text: "Tambahkan host sekali dan hubungkan kembali dengan satu ketuk — termasuk kunci, port, dan tunnel yang sudah dikonfigurasi." },
      { title: "Peringatan agen, dan satu ketuk untuk menjawab", text: "Ketahui persis saat Claude Code, Codex, atau agen lain membutuhkan Anda: panel berubah kuning amber, lencana di bilah alat menghitung siapa saja yang menunggu, dan daftar Agents menjawab pertanyaannya dengan satu ketuk — tanpa perlu mengetik di terminal." },
      { title: "Tombol terminal di atas keyboard", text: "Baris berisi tiga belas tombol — ESC, TAB, CTRL, panah, Home, End, PgUp, PgDn — yang membungkus ke baris kedua alih-alih digulir, jadi tidak ada yang tersembunyi di luar layar. Tambahkan F1–F12, kombinasi Ctrl, atau escape sequence buatan Anda sendiri dari palet preset." },
      { title: "Penerusan port tanpa perintah", text: "Tunnel melekat pada profil server dan otomatis aktif saat tersambung." },
      { title: "Bertahan saat layar terkunci dan roaming", text: "Beri satu server tersimpan beberapa alamat — IP LAN rumah dan IP VPN — dan Mobile SSH menghubungi mana pun yang merespons, mencoba alamat terakhir yang berhasil lebih dulu, lalu menyambung ulang begitu jaringan berubah. Di Android, layanan latar depan dan wake lock menjaga shell tetap hidup saat layar mati; di iOS, penyambungan ulang otomatis plus attach otomatis tmux mengembalikan Anda ke tempat terakhir Anda bekerja." },
      { title: "Eternal Terminal", text: "Transport ET opsional menjaga shell jarak jauh tetap hidup saat koneksi jaringan terputus, perangkat tidur, dan IP berubah. Tidak ada etserver di host? Mobile SSH dapat memasangnya untuk Anda melalui SSH." },
      { title: "Perluas dengan plugin", text: "Telusuri katalog publik dan pasang plugin sesuai kebutuhan untuk menambah alur kerja baru. Setiap plugin diunduh dan diverifikasi SHA-256 ke penyimpanan privat aplikasi." }
    ],
    sectionAHead: "Dirancang untuk pekerjaan SSH seluler",
    sectionAIntro:
      "Mobile SSH memendekkan jalur administrasi umum: simpan server, sambungkan, jaga sesi tetap hidup, pindahkan berkas saat diperlukan, dan kembali cepat ke terminal aktif.",
    features: [
      { title: "Terminal SSH", text: "Terminal xterm-256color dengan warna sejati 24-bit, huruf miring, pencarian di dalam terminal, integrasi shell OSC 133, dan penyesuaian ukuran teks dengan cubit — plus font dan skema warna yang dapat dikonfigurasi serta glyph powerline/ikon Nerd Font di Android dan iOS." },
      { title: "Kisi multi-sesi", text: "Hingga delapan sesi SSH dalam kisi yang dapat diubah ukurannya — ketuk panel untuk fokus, ketuk ganda untuk layar penuh, cubit untuk ubah ukuran teks." },
      { title: "Tautan yang dapat diklik", text: "URL di terminal digarisbawahi dan terbuka di peramban dengan satu ketuk — tanpa menyalin atau berpindah aplikasi." },
      { title: "Folder dan nama server", text: "Atur server tersimpan ke dalam grup yang dapat diciutkan, dan beri sebuah server nama yang ditampilkan menggantikan alamatnya. Alamatnya muncul kembali setiap kali sebuah nama menjadi ambigu, sehingga barisnya tidak pernah tampak seragam." },
      { title: "Peringatan agen", text: "Agen melapor lewat terminal, jadi aplikasi tahu agen mana yang tertahan dan karena apa. Jawab dari daftar Agents dengan satu ketuk; peringatan saling menggantikan alih-alih menumpuk, dan mengetuknya membuka panel yang berbunyi." },
      { title: "Kunci privat", text: "Gunakan sandi atau kunci privat; buat Ed25519 atau ECDSA di perangkat, juga RSA di Android. Android mendukung FIDO2 USB/NFC dan penerusan agen SSH per server." },
      { title: "Transfer SFTP", text: "Penjelajah berkas dua panel yang terhubung ke sesi SSH aktif. Antrakan unggahan dan unduhan, ganti nama, hapus, dan periksa izin jarak jauh." },
      { title: "Penerusan port", text: "Simpan spesifikasi tunnel lokal bersama profil server dan tunnel itu terbuka otomatis saat tersambung — termasuk setelah penyambungan ulang di jaringan baru, tanpa perlu Anda bangun ulang secara manual." },
      { title: "Alur penyambungan ulang", text: "Ganti jaringan dan semua sesi langsung menghubungi ulang alih-alih menunggu rute mati kehabisan waktu, dan sesi yang sedang dalam backoff bangun begitu jaringan yang dapat dipakai muncul. Di iOS, server yang diam-diam berhenti menjawab akan terdeteksi dan disambungkan ulang." },
      { title: "Cadangan & pemulihan", text: "Cadangkan server, kredensial dan pengaturan dengan enkripsi frasa sandi opsional serta pratinjau Gabungkan/Ganti. Android menyertakan profil VPN; cadangan terbaru Android/iOS berbagi format dan mempertahankan pengaturan khusus platform yang didukung." },
      { title: "Eternal Terminal", text: "Sambung melalui Eternal Terminal (ET) untuk sesi yang bertahan saat koneksi jaringan terputus, perangkat tidur, dan IP berubah — dengan opsi penyiapan etserver otomatis melalui SSH." },
      { title: "Pengelola multiplexer", text: "Lampirkan, ganti nama, buat, bagi, perbesar atau hentikan sesi lewat pengelola tmux, herdr dan Zellij pada kedua platform. Satu tombol multiplexer membuka pengelola yang tersedia; server tersimpan menentukan lampiran saat terhubung." },
      { title: "Plugin", text: "Jelajahi, cari dan saring plugin menurut kategori, lalu pasang alur kerja yang diperlukan. Unduhan diverifikasi SHA-256 ke penyimpanan privat aplikasi." },
      {
        "title": "Identitas server dan host perantara",
        "text": "Capai server lewat bastion tersimpan pada kedua platform. Verifikasi kunci sebelum autentikasi memblokir perubahan. Android dapat menyimpan otomatis atau bertanya; iOS meminta persetujuan kunci asing."
      },
      {
        "title": "Desktop jarak jauh",
        "text": "Buka VNC melalui SSH pada Android/iOS, dengan sentuhan, papan ketik, papan klip dan ukuran layar jarak jauh jika didukung server."
      },
      {
        "title": "Klien VPN di Android",
        "text": "Kelola SSH VPN, proxy SOCKS5 lokal, WireGuard, Shadowsocks dan OpenVPN dari beranda. Pilih profil, mulai perutean, lalu hentikan/lanjutkan lewat ubin Mobile SSH VPN."
      }
    ],
    multiHead: "Satu layar, beberapa shell aktif",
    multiP1:
      "Tampilan terminal dapat menampung beberapa sesi SSH aktif dalam kisi. Pilih panel untuk mengetik, gunakan baris tombol tambahan untuk kontrol terminal, cubit untuk menyesuaikan ukuran teks, dan ketuk ganda panel saat butuh fokus layar penuh.",
    multiP2:
      "Layar beranda menjawab pertanyaan \"apa yang bisa saya lanjutkan?\" — koneksi yang aktif saat ini, dan sesi tmux yang menunggu di server tersimpan Anda, disusun ulang dari snapshot tersimpan sehingga muncul bahkan tanpa jaringan sama sekali.",
    multiAlt:
      "Mobile SSH di ponsel yang menampilkan dua sesi SSH terminal aktif dalam tampilan terbagi berdampingan.",
    sftpHead: "SFTP saat terminal tidak cukup",
    sftpBody:
      "Jelajahi folder lokal/jarak jauh, antrekan transfer, ingat direktori tiap sesi tmux dan buka berkas jarak jauh di aplikasi lain. Kedua platform menerima berkas bersama ke terminal; iOS dapat mengingat folder pilihan di Files.",
    sftpCtaGuide: "Panduan transfer berkas",
    sftpCtaAll: "Semua fitur",
    sftpAlt: "Layar transfer berkas Mobile SSH di ponsel dengan panel lokal dan jarak jauh.",
    galleryHead: "Lihat di perangkat nyata",
    galleryIntro:
      "Tangkapan layar dari ponsel Android dan iPhone — layar yang sama yang akan Anda gunakan untuk menambahkan server, bekerja di terminal, menjalankan beberapa sesi, dan memindahkan berkas via SFTP.",
    carouselPrev: "Tangkapan layar sebelumnya",
    carouselNext: "Tangkapan layar berikutnya",
    carouselDot: "Pergi ke posisi {n}",
    videoHead: "Lihat dalam aksi",
    videoIntro: "Demo singkat di kedua platform. Android: layar beranda yang langsung menunjukkan apa saja yang bisa Anda lanjutkan, bilah alat sesi yang hanya menampilkan fitur yang tersedia di server itu, mengirim berkas langsung ke prompt, serta pengelola tmux, herdr, dan Zellij. iOS: membuka aplikasi langsung ke terminal aktif dan layar beranda tempat Anda kembali.",
    videoAlt: "Demo Android: layar beranda yang menampilkan daftar sesi tmux untuk dilanjutkan, bilah alat sesi, melampirkan berkas ke prompt, serta pengelola sesi tmux, herdr, dan Zellij",
    videoIosAlt: "Demo iOS: membuka Mobile SSH langsung ke sesi terminal SSH aktif lalu kembali ke layar beranda, dengan pengelola tmux, Pengaturan, dan layar-layar lain di aplikasi",
    muxHead: "Satu video untuk tiap pengelola sesi",
    muxIntro:
      "Demo ringkasan memperkenalkan tmux, herdr dan Zellij. Rekaman lebih panjang menunjukkan kontrol sesi, jendela, tab dan panel pada kedua platform dengan server hidup.",
    muxItems: [
        {
          text: "Sesi, jendela, dan panel yang dijangkau langsung dari layar beranda, dengan satu sesi ditandai lonceng karena ada sesuatu di sana yang menunggu jawaban. Attach sebuah jendela dan terminal yang sedang berjalan ikut berpindah; buat jendela lalu beri nama — tanpa sekali pun mengetik kord prefix.",
          androidAlt: "Demo pengelola tmux di Android: daftar sesi tersimpan di layar beranda, lalu sesi, jendela, dan panel, meng-attach jendela sehingga terminal mengikutinya, dan membuat jendela bernama.",
          iosAlt: "Demo pengelola tmux di iOS: sesi tmux beserta usianya dan lonceng pada sesi yang menunggu input, lalu jendela dan panel, tiap baris menawarkan Buka, Ganti nama, dan Kill."
        },
        {
          text: "Ruang kerja, tab, dan panel yang membawa keadaan agen yang sebenarnya — satu agen bekerja, satu lagi terblokir menunggu manusia. Pratinjau yang terblokir, jawab dari ponsel, lalu lihat herdr menggolongkannya kembali menjadi bekerja, kemudian selesai.",
          androidAlt: "Demo pengelola herdr di Android: sesi dan ruang kerja berlabel keadaan agen, satu agen ditandai needs you, menjawabnya dari ponsel, serta ruang kerja baru yang dibuat dan diganti namanya.",
          iosAlt: "Demo pengelola herdr di iOS: ruang kerja yang membawa keadaan agen dan lembar balasan yang mengirim ketikan ke agen yang terblokir, diikuti Enter."
        },
        {
          text: "Sesi beserta usianya, lalu tab dan panel. Pratinjau keluaran sebuah panel, tambahkan tab bernama, bawa yang penting ke depan, lalu attach — tanpa mengetik apa pun di prompt.",
          androidAlt: "Demo pengelola Zellij di Android: sesi beserta usianya, tab dan panel, pratinjau keluaran panel, membuat tab bernama, dan meng-attach sesi.",
          iosAlt: "Demo pengelola Zellij di iOS: sebuah sesi dengan tindakan attach, ganti nama, kill, dan hapus, tab-tabnya, serta panel yang menawarkan pratinjau dan kedua arah pembagian."
        }
    ],
    demoHead: "Tiga lagi, difilmkan di Android",
    demoIntro:
      "Belum ada rekaman iOS untuk ketiganya. Server sungguhan yang sama seperti demo di atas: sesi yang bertahan meski Anda keluar dari aplikasi, kunci yang dibuat di ponsel alih-alih diketikkan ke dalamnya, dan server yang dikelompokkan sesuai cara Anda memikirkannya.",
    demoItems: [
      {
        title: "Sesi hidup lebih lama daripada aplikasinya",
        text: "Android mempertahankan koneksi melalui layanan latar depan; notifikasi tetap menamai server dan menawarkan Putuskan semua. Tinggalkan log yang mengalir lalu kembali ke sesi berjalan. iOS hanya mendapat waktu latar belakang singkat sebelum menyambung dan melampirkan ulang multiplexer.",
        androidAlt:
          "Demo Android tentang sesi yang terus berjalan di latar belakang: log HTTP langsung yang mengalir di terminal, permintaan izin notifikasi, notifikasi yang terus tampil menyebutkan server yang tersambung beserta Putuskan semua, lalu beralih ke layar beranda ponsel dan kembali ke aliran yang sama yang masih terus berdatangan."
      },
      {
        title: "Kunci dibuat di sini, bukan diketikkan",
        text: "Buat kunci Ed25519 di ponsel: sebuah label, nama pengguna, dan frasa sandi opsional. Lembar yang muncul setelahnya menampilkan bagian publik untuk ditambahkan ke authorized_keys sebuah server, dan dapat membagikan atau menyimpan bagian mana pun dari keduanya.",
        androidAlt:
          "Demo Android tentang pembuatan kunci: dialog Buat Kunci SSH dengan label, nama pengguna, jenis kunci Ed25519, dan frasa sandi, lalu lembar kunci publik yang menawarkan untuk membagikan atau menyimpan kunci."
      },
      {
        title: "Server tinggal di folder yang Anda beri nama",
        text: "Kelompokkan server tersimpan ke dalam folder dan ciutkan yang sedang tidak Anda pakai. Rekaman yang sama berakhir di terminal, tempat URL yang dicetak oleh sebuah perintah tampil digarisbawahi dan dapat diketuk, bukan sesuatu yang harus diseleksi dengan tangan.",
        androidAlt:
          "Demo Android tentang folder server: server tersimpan yang dikelompokkan ke dalam folder bernama yang bisa dibentangkan dan diciutkan, lalu terminal tempat URL pada keluaran perintah digarisbawahi dan dapat diketuk."
      }
    ],
    graphicsHead: "Grafik bergerak, di dalam terminal",
    graphicsBody:
      "GIF 36 bingkai yang dialirkan lewat protokol grafis Kitty dan didekode aplikasi pada tempo bingkai berkas itu sendiri — bukan dimajukan dari luar. Lalu escape sequence yang menjadi ukuran sebuah terminal: OSC 8 mengubah nomor build dan nama dasbor menjadi sesuatu yang bisa diketuk, OSC 52 membiarkan sisi jauh menulis clipboard ponsel Anda, dan OSC 777 memunculkan notifikasi Android yang sungguhan.",
    graphicsAlt:
      "Demo Android berupa grafik latensi bergerak yang dialirkan ke terminal lewat protokol grafis Kitty, disusul tautan OSC 8, penulisan clipboard OSC 52, dan notifikasi OSC 777.",
    lightboxClose: "Tutup",
    lightboxPrev: "Sebelumnya",
    lightboxNext: "Berikutnya",
    galleryAlts: [
      "Layar beranda Mobile SSH di ponsel Android dengan spanduk Sesi Aktif dan daftar Lanjutkan berisi server tersimpan yang bisa dilanjutkan, di atas tombol Server, Kredensial, Pengaturan, Tentang, dan Plugin.",
      "Dialog Tambah Server di ponsel dengan kolom nama server, host dan port, alamat tambahan, kredensial, kunci privat, dan penerusan port.",
      "Terminal SSH satu sesi di ponsel yang menampilkan tambalan dari agen pemrograman dan uji coba yang lulus, di bawah bilah alat sesi.",
      "Dua sesi SSH dalam tampilan terbagi berdampingan di ponsel.",
      "Empat sesi SSH dalam kisi di ponsel, masing-masing terhubung ke server yang berbeda, dengan panel aktif disorot.",
      "Layar transfer SFTP di ponsel dengan panel Ponsel Saya dan Host Jarak Jauh.",
      "Dialog Tentang di ponsel menampilkan kolom versi, penulis, lisensi, dan situs web.",
      "Dialog Buat Kunci SSH di ponsel dengan kolom label, pengguna, jenis kunci, dan frasa sandi.",
      "Dialog Kunci Publik di ponsel yang menampilkan kunci yang dibuat dengan opsi salin, bagikan, dan simpan.",
      "Layar Server Tersimpan yang menampilkan server yang diatur dalam grup folder Kerja dan Pribadi yang dapat diciutkan.",
      "Terminal SSH di ponsel dengan URL https:// digarisbawahi sebagai tautan yang dapat diklik.",
      "Pengelola Zellij di ponsel Android yang menampilkan daftar sesi, tab, dan panel dengan tombol untuk attach, ganti nama, kill, dan fokus.",
      "Pengelola tmux di ponsel yang menampilkan daftar sesi, jendela, dan panel tmux dengan tombol untuk attach, ganti nama, dan beralih.",
      "Layar Plugin di ponsel yang menampilkan katalog plugin yang dapat dipasang dengan Tailscale, WireGuard, dan Claude Code CLI.",
      "Plugin AI Chat di ponsel yang menampilkan aliran balasan dari model llama3.2 lokal yang berjalan di server jarak jauh melalui SSH.",
      "Dialog Tambah Server di ponsel dengan transport disetel ke Eternal Terminal agar sesi bertahan saat koneksi jaringan terputus."
    ],
    galleryIosAlts: [
      "Formulir koneksi Mobile SSH di iPhone dengan kolom server, autentikasi, folder, dan transport.",
      "Server Tersimpan di iPhone yang diatur dalam grup Production dan Staging dengan pencarian server.",
      "Terminal SSH langsung di iPhone dengan bilah status tmux dan baris tombol tambahan di bagian bawah.",
      "Dua sesi SSH tersusun atas-bawah dalam kisi di iPhone dengan panel ketuk-untuk-fokus.",
      "Transfer Berkas di iPhone dengan panel Ponsel Saya dan Host Jarak Jauh serta log transfer yang selesai.",
      "Autentikasi kunci di iPhone dengan kunci Ed25519 yang dibuat di perangkat dan kunci publik yang dapat disalin.",
      "Pengelola tmux di iPhone yang menampilkan daftar sesi dan jendela dengan aksi buka, ganti nama, dan kill — ikon bel menandai agen yang menunggu input.",
      "Terminal SSH di iPhone yang ter-attach ke jendela tmux menampilkan kode di editor jarak jauh.",
      "Katalog plugin di iPhone dengan Tailscale, WireGuard, Claude Code CLI, VS Code, dan AI Chat yang dapat dipasang.",
      "Formulir koneksi di iPhone dengan transport disetel ke Eternal Terminal agar sesi bertahan saat koneksi jaringan terputus.",
      "Pengaturan peringatan agen di iPhone dengan sakelar getaran, suara, dan hanya-headphone.",
      "Layar beranda Mobile SSH di iPhone dengan spanduk Sesi Aktif dan baris Lanjutkan untuk kembali ke sesi yang sedang berjalan, di atas ubin Server, Kredensial, Log, Pengaturan, Tentang, dan Plugin."
    ],
    compareHead: "Tempatnya di samping Termux dan Termius",
    compareIntro:
      "Mobile SSH sengaja dibuat sempit: bukan lingkungan Linux lengkap maupun brankas tim lintas platform. Ini adalah alat SSH/SFTP lokal untuk Android dan iOS dengan akses cepat ke kontrol sesi yang paling sering dibutuhkan pengguna seluler.",
    compareGuideTitle: "Panduan perbandingan",
    compareGuideText: "Kapan memilih Mobile SSH, Termux, atau Termius di ponsel atau tablet Anda.",
    privacyTitle: "Kebijakan privasi",
    privacyText: "Lihat data koneksi mana yang disimpan lokal dan apa yang dikirim ke server Anda."
  },
  features: {
    metaTitle: "Fitur | Mobile SSH",
    metaDescription:
      "Jelajahi terminal Mobile SSH, host perantara, verifikasi server, SFTP, VNC, cadangan dan multiplexer Android/iOS, ditambah VPN serta kunci keamanan Android.",
    eyebrow: "Daftar fitur",
    h1: "Fitur Mobile SSH",
    intro:
      "Hubungkan server dari Android/iOS dengan terminal SSH, identitas terverifikasi, host perantara, SFTP, VNC dan pengelola sesi. Android menambah VPN bawaan serta kunci keamanan fisik; fitur khusus platform ditandai di bawah.",
    groups: [
      {
        title: "Platform",
        items: [
          "Android 8.0 atau lebih baru — saat ini berupa uji tertutup di Google Play: buka tautan pendaftaran di peramban ponsel, lalu pasang dari Play",
          "iOS 16 atau lebih baru di iPhone dan iPad — ikuti beta publik di TestFlight",
          "Versi Android/iOS terbaru memakai format cadangan 2 untuk inventaris dan pengaturan; impor tidak menyediakan fitur platform yang tidak didukung"
        ]
      },
      {
        title: "Koneksi",
        items: [
          "Autentikasi kata sandi dan kunci privat",
          "Kunci privat Ed25519, ECDSA (P-256/384/521), dan RSA di Android; Ed25519 dan ECDSA di iOS. Kedua platform dapat membuka kunci yang terenkripsi frasa sandi",
          "Profil server tersimpan dengan host, port, pengguna, kredensial, kunci privat, dan spesifikasi tunnel opsional — klon profil untuk menggandakan pengaturannya ke server baru",
          "Beri sebuah server nama dan daftarnya menampilkan nama itu alih-alih alamatnya — alamatnya kembali muncul setiap kali dua baris akan terlihat serupa",
          "Cari server tersimpan berdasarkan nama, host, port, kredensial, atau salah satu alamat alternatifnya",
          "Sambung dua kali ke mesin yang sama lewat dua baris tersimpan dan aplikasi menyadarinya — ia mencocokkan sidik jari kunci host lalu menawarkan untuk menggabungkannya menjadi satu server multi-alamat",
          "Alur Tambah Sesi berbasis pencarian: pilih server tersimpan dari halaman pencarian khusus dan sambung dengan satu ketuk",
          "Beberapa alamat per server tersimpan untuk roaming LAN/VPN — dihubungi berurutan dengan alamat terakhir yang berhasil dicoba lebih dulu, dan penyambungan ulang aktif saat jaringan berubah",
          "Catatan kredensial yang dapat dipakai ulang dan dipilih dari penyetelan server",
          "Layar beranda yang dirancang untuk melanjutkan pekerjaan: koneksi yang aktif saat ini, dan sesi tmux yang menunggu di server Anda — diambil dari snapshot tersimpan, sehingga tetap terdaftar tanpa jaringan dan setiap baris ditandai umurnya. Di iOS, daftar Terkini pindah ke lembar Koneksi Baru, tempat satu ketuk langsung mengisi formulirnya",
          "IPv6 dari ujung ke ujung: literal dalam kurung siku dengan port opsional di kolom alamat, dan tujuan IPv6 dalam kurung siku pada aturan penerusan port",
          "Log upaya masuk berhasil dan gagal, mencatat alamat persis yang dihubungi dan, saat gagal, alasannya",
          "Transport proxy Teleport (eksperimental, Android): masuk dengan nama pengguna, kata sandi, dan OTP atau impor berkas konfigurasi atau identitas Teleport, telusuri node klaster, lalu jalankan terminal, SFTP, tmux, dan plugin melalui tunnel proxy",
          "Host perantara SSH tersimpan pada kedua platform, dengan urutan maksimal delapan lompatan diperluas; setiapnya punya kredensial dan pemeriksaan identitas",
          "Penerusan agen SSH Android: aktifkan per server agar program meminta tanda tangan kunci tersimpan, dengan persetujuan opsional; kunci privat tetap di ponsel",
          "FIDO2 Android lewat USB/NFC: daftarkan atau impor kredensial OpenSSH lalu jawab permintaan sentuhan/PIN"
        ]
      },
      {
        title: "Terminal",
        items: [
          "Perilaku terminal bergaya VT100/xterm-256color dengan warna sejati 24-bit dan huruf miring — shell diberi tahu TERM=xterm-256color dan COLORTERM=truecolor",
          "Buffer scrollback yang disetel ke 1.000, 5.000, 10.000, atau 50.000 baris di Android dan iOS (5.000 secara bawaan)",
          "Cari di terminal — telusuri buffer scrollback dan layar yang terlihat serta lompat antar kecocokan (Android dan iOS)",
          "Integrasi shell (OSC 133): melangkah antar prompt, pilih seluruh keluaran sebuah perintah — galat build dari 300 baris ke belakang, bukan hanya yang terakhir — dan dapatkan peringatan saat perintah yang berjalan lama selesai (Android dan iOS)",
          "Gambar inline di terminal melalui protokol grafis Kitty, yang bertahan saat zoom cubit dan pembungkusan ulang alih-alih lenyap (Android dan iOS)",
          "Aplikasi menggambar blok, braille dan glif mosaik sekstan sendiri sehingga chafa, timg dan seni ANSI pas di Android/iOS",
          "Sentuhan mengirim klik ke program terminal yang melacak tetikus di kedua platform, dengan seret opsional; iOS juga menawarkan pengaturan untuk menempatkan kursor sebagai gantinya",
          "Header panel menyebutkan direktori kerja sebenarnya dari panel itu, ditanyakan ke tmux atau dilaporkan shell melalui OSC 7 (Android)",
          "Baris tombol tambahan berisi tiga belas tombol — ESC, TAB, CTRL, panah, Home, End, PgUp, PgDn, toggle keyboard — yang membungkus ke baris kedua alih-alih digulir, dan melipat sisanya ke menu luapan sehingga tidak ada tombol yang berada di luar layar",
          "Sesuaikan barisnya di Android dan iOS: tambahkan dari palet berisi sekitar 45 preset termasuk F1–F12, kombinasi Ctrl, dan simbol; hapus, susun ulang, sembunyikan, tentukan tombol escape sequence Anda sendiri, dan reset ke default, dengan pratinjau langsung",
          "Sentuh untuk fokus, opsi sentuh-untuk-tampilkan-keyboard, aksi salin dan salin semua",
          "Cubit untuk ukuran teks dengan resize terminal jarak jauh",
          "Mode layar penuh panel dengan ketuk ganda",
          "Seleksi teks terminal dengan Salin, Bagikan, dan Pilih semua — tekan lama memilih kata, dan Salin mempertahankan pemilihan untuk dibagikan atau disalin ulang",
          "Clipboard OSC 52 — salin teks dari sesi tmux atau vim jarak jauh langsung ke clipboard ponsel (Android dan iOS)",
          "Papan ketik fisik dan dikte pada kedua platform; iOS mengaktifkan Dikte dan saran termasuk koreksi otomatis secara bawaan. Matikan untuk masukan langsung",
          "Dukungan keyboard eksternal dan Bluetooth di Android dan iOS, termasuk panah, tombol fungsi, dan kombinasi Ctrl/Alt",
          "Bracketed paste agar konten clipboard multi-baris tidak dieksekusi otomatis",
          "Nerd Font bawaan menampilkan glyph ikon powerline, starship, devicon, dan Material Design di Android dan iOS yang jika tidak akan ditampilkan sebagai kotak kosong oleh font sistem",
          "Karakter CJK lebar, emoji, dan karakter penggabung diukur dan digambar dengan benar di Android dan iOS, termasuk klaster grafem dan zero-width joiner",
          "Font terminal yang dapat dikonfigurasi (monospace sistem, JetBrains Mono, atau Source Code Pro) dan skema warna ANSI (Solarized, Gruvbox, Dracula, Nord) di Android dan iOS, diterapkan secara langsung ke panel yang terbuka",
          "Penggeser ukuran teks terminal di Pengaturan berdampingan dengan zoom cubit, serta tema aplikasi yang dapat disetel ke Sistem, Terang, atau Gelap",
          "Laju trafik dan indikator koneksi macet membedakan perintah sibuk dari koneksi tanpa respons; peredupan/getaran opsional",
          "Pengaturan mengontrol notifikasi jarak jauh, perintah selesai dan pembacaan papan klip jarak jauh; izin tersebut nonaktif secara bawaan"
        ]
      },
      {
        title: "Sesi",
        items: [
          "Hingga delapan sesi SSH bersamaan",
          "Tata letak kisi untuk sesi aktif",
          "Ketahanan latar belakang dan kunci layar: di Android, layanan latar depan menjaga shell dan agen tetap berjalan setelah Anda menggeser aplikasi dari daftar terkini; di iOS, attach otomatis tmux menyambungkan kembali shell Anda",
          "Keepalive dan upaya penyambungan ulang dengan backoff eksponensial — hingga sepuluh percobaan, dan kegagalan pada jaringan yang sudah Anda tinggalkan tidak dihitung ke batas itu",
          "Beralih Wi-Fi, seluler, atau VPN langsung memicu penyambungan ulang alih-alih menunggu rute mati kehabisan waktu, dan sesi yang sudah dalam backoff mencoba lagi begitu jaringan yang dapat dipakai muncul",
          "Probe keepalive tanpa balasan mendeteksi server yang tidak merespons dan memicu penyambungan ulang di Android/iOS",
          "Titik masuk Sesi Aktif dari layar beranda; notifikasi berkelanjutan menampilkan daftar sesi — ketuk untuk membuka",
          "Pelacakan perintah tmux dan lampiran ulang, dengan pilihan Otomatis, Tidak ada, tmux, herdr atau Zellij per server pada Android/iOS; identitas sesi bertahan saat berpindah soket",
          "Agen melaporkan dirinya sendiri lewat terminal, sehingga aplikasi tahu agennya, alat yang sedang dijalankannya, dan apakah ia tertahan menunggu Anda — panel berubah kuning amber, headernya berbunyi \"claude · needs you\", dan lencana di bilah alat menghitung siapa saja yang menunggu",
          "Jawab pertanyaan agen dengan satu ketuk dari daftar Agents; balasannya dikirim melalui kanal terpisah, jadi ia tidak pernah mengetik ke apa pun yang sedang tampil di layar",
          "Pasang hook agen ke sebuah server dari dalam aplikasi — skrip shell kecil yang dapat dipanggil agen mana pun, bukan integrasi khusus satu vendor",
          "Transport Eternal Terminal (ET) untuk sesi yang bertahan saat koneksi jaringan terputus, perangkat tidur, dan IP berubah, dengan opsi penyiapan etserver otomatis melalui SSH",
          "Pengelola tmux: lihat daftar dan beralih antar sesi, jendela, dan panel — attach, ganti nama, buat, pisah, zoom, atau kill, dengan pengurutan nama/tanggal dan 🔔 untuk agen yang menunggu input",
          "Satu tombol multiplexer membuka tmux, herdr dan Zellij; Herdr mendukung pratinjau panel, fokus dan balasan, Zellij sesi aktif maupun berhenti"
        ]
      },
      {
        title: "Berkas dan tunnel",
        items: [
          "Penjelajah SFTP dua panel untuk berkas lokal dan jarak jauh, dengan log transfer yang menampilkan setiap transfer dan dapat digulir",
          "Unggahan/unduhan berantre; bagikan berkas ke Mobile SSH Android atau Ekstensi Berbagi iOS, unggah ke sesi terhubung dan masukkan jalur jarak jauhnya",
          "Unggah dan unduh folder rekursif antara ponsel dan host jarak jauh",
          "Aksi jarak jauh: ganti nama, hapus, buat, edit, kompres ke .tar.gz, izin (chmod/chown), dan detail",
          "Buka berkas yang diunduh di aplikasi lain di kedua platform — di iOS, unduhan juga muncul di aplikasi Files di bawah \"On My iPhone\"",
          "Transfer Berkas mengingat direktori per host dan sesi tmux pada kedua platform; iOS juga mengingat folder lokal eksternal pilihan Files",
          "Urutkan berdasarkan nama atau tanggal dengan persistensi per host, dan lompat kembali ke jalur jarak jauh terbaru",
          "Ukuran berkas dalam satuan biner, sesuai dengan yang ditampilkan ls -h di terminal satu tab di sebelahnya",
          "Penerusan port lokal yang disimpan bersama profil server dan otomatis aktif saat tersambung",
          "Mengikuti tema terang atau gelap sistem di seluruh aplikasi dan penjelajah berkas — pilih Sistem, Terang, atau Gelap di Android dan iOS"
        ]
      },
      {
        title: "Pelokalan",
        items: [
          "Dua puluh bahasa pada kedua platform: Arab, Arab Mesir, Bengali, Mandarin Sederhana dan Tradisional, Inggris, Prancis, Jerman, Hindi, Indonesia, Jepang, Marathi, Pidgin Nigeria, Portugis, Rusia, Spanyol, Tamil, Telugu, Turki dan Urdu",
          "Mengikuti bahasa sistem secara bawaan, dan Pengaturan menyediakan pemilih bahasa jika Anda ingin aplikasi dalam bahasa selain bahasa ponsel"
        ]
      },
      {
        title: "Kunci dan cadangan",
        items: [
          "Buat kunci Ed25519 atau ECDSA baru di perangkat (RSA juga di Android), dengan frasa sandi opsional",
          "Salin, bagikan, atau simpan kunci publik yang dibuat untuk ditambahkan ke authorized_keys server",
          "Cadangan lengkap memuat server, kredensial, pengaturan, bahasa dan urutan multiplexer; Android menambah profil SSH VPN, SOCKS5, WireGuard, Shadowsocks serta OpenVPN",
          "Pilih ekspor sebagian atau inventaris saja untuk lingkup lebih kecil; pratinjau cadangan lengkap lalu Gabungkan/Ganti, dengan enkripsi frasa sandi opsional",
          "Cadangan tanpa enkripsi memuat sandi dan kunci privat. Kepercayaan SSH, sesi aktif, izin sistem dan folder tidak portabel; kredensial kunci keamanan tetap perlu kunci fisik"
        ]
      },
      {
        title: "Keamanan",
        items: [
          "Layar aman: di Android, memblokir tangkapan layar dan perekaman layar serta menyembunyikan aplikasi dari thumbnail aplikasi terkini; di iOS, mengosongkan pratinjau pengalih aplikasi dan memblokir perekaman serta mirroring layar (tangkapan layar manual tidak dapat diblokir di iOS) — pengaturan opt-in untuk saat kata sandi, kunci, atau token ada di layar",
          "Server, kredensial, dan kunci tersimpan berada di perangkat, tanpa akun awan atau sinkronisasi wajib; lihat halaman privasi untuk perlindungan penyimpanan dan batasannya",
          "Analitik anonim aktif secara bawaan dan dapat dimatikan di Pengaturan Android/iOS; peristiwa tidak memuat server, kredensial, perintah atau isi berkas",
          "Identitas SSH diverifikasi sebelum autentikasi. Android menyimpan kunci mentah baru otomatis secara bawaan, dengan pilihan persetujuan; iOS meminta kepercayaan kunci asing. Keduanya menolak perubahan",
          "Kedua platform mengimpor pencabutan kunci host OpenSSH dengan lingkup tertentu. iOS menerima kunci Ed25519/ECDSA bertanda @revoked; Android juga mendukung otoritas sertifikat host. iOS tidak mendukung sertifikat host atau impor CA. Kepercayaan SSH tetap pada tiap perangkat dan tidak disertakan dalam cadangan"
        ]
      },
      {
        title: "Plugin",
        items: [
          "Jelajahi plugin menurut kategori, cari, pasang dan jalankan; katalog dimuat ulang saat sumber berubah",
          "Plugin diunduh sesuai kebutuhan dari katalog publik dan diverifikasi SHA-256 ke penyimpanan privat aplikasi",
          "Sebuah plugin mendeklarasikan apa yang dibutuhkannya — perintah SSH, sebuah tunnel, penyimpanan — dan aplikasi menolak apa pun yang tidak dimintanya",
          "Saat sebuah plugin menyiapkan sesuatu di server Anda, Anda melihat perintah persisnya lebih dulu dan menyetujuinya sebelum dijalankan",
          "Konfigurasikan sumber katalog khusus atau privat, atau pasang dari sebuah folder di server Anda sendiri"
        ]
      },
      {
        "title": "Desktop jarak jauh",
        "items": [
          "Desktop VNC lewat terowongan SSH Android/iOS tanpa membuka port VNC ke internet publik",
          "Kontrol penunjuk sentuh, papan ketik fisik/layar, pertukaran papan klip dan bel desktop",
          "Pilih ukuran layar siap pakai atau khusus jika server VNC mendukungnya; permintaan tak didukung dilaporkan"
        ]
      },
      {
        "title": "Klien VPN (Android)",
        "items": [
          "Buka VPN dari beranda untuk profil SSH VPN, SOCKS5, WireGuard, Shadowsocks dan OpenVPN",
          "SSH VPN merutekan TCP/DNS lewat server tersimpan untuk semua atau aplikasi/domain terpilih; UDP lain yang ditugaskan diblokir",
          "Proxy SOCKS5 lokal berautentikasi berdampingan dengan VPN lain; aplikasi peserta harus memakai proxy dan DNS jarak jauh",
          "Impor WireGuard .conf, tautan Shadowsocks ss:// yang didukung atau OpenVPN .ovpn mandiri dengan sertifikat server terverifikasi",
          "Mulai profil untuk mengganti VPN; ubin Mobile SSH VPN menghentikan/menjalankan profil VPN tersimpan, tanpa proxy SOCKS",
          "Android mengizinkan satu VPN perangkat. Tailscale memakai aplikasi terpisah; IKEv2/IPsec di Pengaturan Android. Tidak ada jaminan selalu aktif/penguncian"
        ]
      }
    ],
    security:
      "Catatan keamanan: aplikasi saat ini menyimpan profil server dan kredensial yang tersimpan secara lokal di perangkat (di iOS, rahasia disimpan di Keychain sistem). Tidak ada sinkronisasi awan. Lindungi perangkat dengan kunci layar yang kuat dan hindari menyimpan kredensial di perangkat bersama."
  },
  compare: {
    metaTitle: "Mobile SSH vs Termux vs Termius di perangkat seluler",
    metaDescription:
      "Perbandingan yang seimbang antara Mobile SSH, Termux, dan Termius untuk alur SSH di Android dan iOS.",
    eyebrow: "Pilihan SSH seluler",
    h1: "Mobile SSH vs Termux vs Termius",
    intro:
      "Mobile SSH menggabungkan SSH, SFTP, VNC dan pengelola multiplexer pada Android/iOS, dengan VPN bawaan dan autentikasi kunci keamanan di Android. Termux adalah lingkungan Linux Android; Termius klien SSH lintas platform dengan fitur produktivitas berbasis akun.",
    columns: {
      need: "Kebutuhan",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "Tujuan utama",
        mobileSsh: "SSH, SFTP, VNC, host perantara dan multiplexer pada kedua platform; VPN dan FIDO2 di Android.",
        termux: "Emulator terminal Android dan lingkungan Linux dengan paket APT.",
        termius: "Klien SSH modern di Android, iOS, desktop, dan alur kerja tim berorientasi web."
      },
      {
        need: "Gaya penyetelan",
        mobileSsh: "Simpan server/kredensial, pilih host perantara bila perlu, lalu hubungkan dengan pemeriksaan identitas sebelum autentikasi.",
        termux: "Pasang paket seperti OpenSSH, konfigurasi alat shell, dan bekerja dari baris perintah ala Linux.",
        termius: "Buat atau sinkronkan host, kunci, snippet, dan brankas melalui model aplikasi/akun Termius."
      },
      {
        need: "Kontrol terminal seluler",
        mobileSsh: "Tombol tambahan, kisi sesi, panel layar penuh, zoom cubit, salin/bagikan, tetikus dan papan ketik eksternal. Dikte dan saran iOS dapat dimatikan untuk masukan langsung.",
        termux: "Lingkungan terminal yang kuat; perilakunya tergantung pada alat dan konfigurasi terpasang.",
        termius: "Add-on keyboard seluler, gestur, tab, autocomplete, snippet, dan UX terminal yang rapi."
      },
      {
        need: "Transfer berkas",
        mobileSsh: "SFTP dua panel, riwayat folder tmux, berbagi berkas jarak jauh dan menerima berbagi pada kedua platform; iOS dapat mengingat folder Files eksternal.",
        termux: "Gunakan alat baris perintah seperti scp, sftp, rsync, atau utilitas berkas yang terpasang.",
        termius: "Fitur SFTP bawaan dan manajemen host/kunci."
      },
      {
        need: "Kerja multi-sesi",
        mobileSsh: "Hingga delapan sesi SSH bersamaan dalam kisi.",
        termux: "Gunakan multiplexer seperti tmux di dalam Termux atau shell jarak jauh.",
        termius: "Tab dan tampilan terbagi tergantung platform dan paket."
      },
      {
        need: "Model data",
        mobileSsh: "Profil, kredensial, kepercayaan host dan pengaturan di perangkat; cadangan inventaris/pengaturan portabel opsional. Android juga menyertakan VPN; kepercayaan SSH tetap per perangkat.",
        termux: "Sistem berkas ala Linux dan paket di dalam lingkungan aplikasi Termux.",
        termius: "Brankas terenkripsi untuk host, kunci, snippet, aturan penerusan, known hosts, dan berbagi tim."
      },
      {
        need: "Kasus terbaik",
        mobileSsh: "Anda ingin aplikasi sederhana di Android atau iOS untuk menyambung ke server, memindahkan berkas, dan menjaga sesi tetap hidup.",
        termux: "Anda ingin lingkungan baris perintah lengkap di Android dan nyaman memasang/mengonfigurasi paket.",
        termius: "Anda ingin sinkronisasi lintas perangkat, fitur produktivitas rapi, brankas, dan kolaborasi."
      }
    ],
    cards: [
      {
        title: "Pilih Mobile SSH bila",
        body: "Anda ingin akses SSH langsung dari ponsel atau tablet — Android atau iOS — tanpa menyiapkan lingkungan Linux penuh atau model akun yang disinkronkan ke awan. Sangat cocok untuk server tersimpan, SFTP, sesi tmux, dan alur tunnel lokal yang cepat."
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
      { category: "Koneksi",          feature: "Berjalan di Android dan iOS",                    mobile: "yes",     termux: "Android saja",  termius: "yes" },
      { category: "Koneksi",          feature: "Profil server tersimpan",                        mobile: "yes",     termux: "melalui ssh config", termius: "yes" },
      { category: "Koneksi",          feature: "Cari server tersimpan",                          mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Koneksi",          feature: "Folder / grup server",                           mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Koneksi",          feature: "Pemilih Tambah Sesi berbasis pencarian",         mobile: "Android", termux: "no",            termius: "no" },
      { category: "Koneksi",          feature: "Beberapa alamat per server (roaming LAN/VPN)",   mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Koneksi",          feature: "Catatan kredensial yang dapat dipakai ulang",    mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Koneksi",          feature: "Layar beranda menampilkan apa yang bisa dilanjutkan", mobile: "yes", termux: "no",            termius: "sebagian" },
      { category: "Koneksi",          feature: "Daftar sesi tmux luring (tanpa perlu koneksi)",  mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Koneksi",          feature: "Server bernama ditampilkan menggantikan alamat", mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Koneksi",          feature: "Log masuk",                                      mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Koneksi",          feature: "Transport proxy Teleport (eksperimental)",       mobile: "Android", termux: "no",            termius: "no" },
      { category: "Koneksi",          feature: "Host IPv6 dan tujuan penerusan",                 mobile: "yes",     termux: "yes",           termius: "sebagian" },
      { category: "Terminal",         feature: "Terminal SSH",                                   mobile: "yes",     termux: "melalui OpenSSH",   termius: "yes" },
      { category: "Terminal",         feature: "Emulasi xterm-256color",                         mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "Scrollback dapat dikonfigurasi (1.000–50.000 baris)", mobile: "yes", termux: "dapat dikonfigurasi", termius: "sebagian" },
      { category: "Terminal",         feature: "Pencarian di terminal (scrollback)",             mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",         feature: "Baris tombol tambahan (ESC/TAB/CTRL/…)",         mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "Ukuran teks dengan cubit",                       mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "Ketuk ganda panel ke layar penuh",               mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",         feature: "URL yang dapat diklik di keluaran terminal",     mobile: "yes",     termux: "sebagian",      termius: "yes" },
      { category: "Terminal",         feature: "Seleksi teks: salin / bagikan / pilih semua",   mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "Dukungan keyboard hardware / Bluetooth",         mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",         feature: "Integrasi shell (OSC 133)",                      mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",         feature: "Gambar inline (grafis Kitty)",                   mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",         feature: "Glyph mosaik yang digambar aplikasi (chafa, ANSI art)", mobile: "yes", termux: "tergantung font", termius: "no" },
      { category: "Terminal",         feature: "Ketukan berfungsi sebagai klik di TUI mode mouse", mobile: "yes", termux: "yes",         termius: "no" },
      { category: "Terminal",         feature: "Perenderan glyph Nerd Font / powerline",         mobile: "yes",     termux: "dapat dikonfigurasi", termius: "sebagian" },
      { category: "Sesi",             feature: "Beberapa sesi SSH bersamaan",                    mobile: "hingga 8", termux: "hingga 8",     termius: "yes" },
      { category: "Sesi",             feature: "Tata letak panel kisi",                          mobile: "yes",     termux: "melalui tmux",  termius: "tab" },
      { category: "Sesi",             feature: "Gulir ramah tmux",                               mobile: "yes",     termux: "yes",           termius: "no" },
      { category: "Sesi",             feature: "Petunjuk reattach tmux saat penyambungan ulang", mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sesi",             feature: "Peringatan agen (Claude Code / Codex)",          mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sesi",             feature: "Notifikasi berkelanjutan dengan daftar sesi",    mobile: "Android", termux: "sebagian",      termius: "no" },
      { category: "Sesi",             feature: "Layanan latar depan & wake lock",                mobile: "Android", termux: "yes",           termius: "sebagian" },
      { category: "Sesi",             feature: "Penyambungan ulang otomatis dengan backoff",     mobile: "yes",     termux: "melalui autossh", termius: "yes" },
      { category: "Berkas",           feature: "UI transfer berkas SFTP bawaan",                 mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Berkas",           feature: "Penjelajah dua panel lokal + jarak jauh",        mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Berkas",           feature: "Antrean unggah / unduh",                         mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Berkas",           feature: "Ganti nama / hapus / buat jarak jauh",           mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Berkas",           feature: "Tampilan izin berkas jarak jauh",                mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Berkas",           feature: "Urutkan berdasarkan nama atau tanggal per host", mobile: "yes",     termux: "no",            termius: "sebagian" },
      { category: "Tunnel",           feature: "Penerusan port lokal",                           mobile: "yes",     termux: "melalui CLI",       termius: "yes" },
      { category: "Tunnel",           feature: "Tunnel tersimpan bersama profil server",         mobile: "yes",     termux: "melalui ssh config", termius: "yes" },
      { category: "Tunnel",           feature: "Tambah / hapus tunnel saat runtime",             mobile: "no",      termux: "no",            termius: "yes" },
      { category: "Kunci",            feature: "Autentikasi kata sandi",                         mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Kunci",            feature: "Autentikasi kunci privat",                       mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Kunci",            feature: "Pembuatan kunci di perangkat",                   mobile: "yes",     termux: "melalui ssh-keygen", termius: "yes" },
      { category: "Kunci",            feature: "Bagikan / simpan kunci publik yang dibuat",      mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Cadangan",         feature: "Ekspor / impor cadangan server",                 mobile: "yes",     termux: "melalui termux-backup", termius: "brankas awan Pro" },
      { category: "Cadangan",         feature: "Berkas cadangan lokal terenkripsi",              mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Cadangan",         feature: "Tidak perlu akun",                               mobile: "yes",     termux: "yes",           termius: "sebagian" },
      { category: "Privasi & biaya",  feature: "Tanpa paywall Pro",                              mobile: "yes",     termux: "yes",           termius: "sebagian" },
      { category: "Privasi & biaya",  feature: "Tanpa iklan",                                   mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Privasi & biaya",  feature: "Opsi keluar analitik",                           mobile: "yes", termux: "tanpa analitik", termius: "no" },
      { category: "Privasi & biaya",  feature: "Data hanya lokal (tanpa sinkronisasi awan)",     mobile: "yes",     termux: "yes",           termius: "sebagian" },
      { category: "Privasi & biaya",  feature: "Layar aman (blokir penangkapan layar)",          mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sesi",             feature: "Eternal Terminal (sesi tangguh)",                mobile: "yes",     termux: "melalui CLI",   termius: "no" },
      { category: "Sesi",             feature: "Pasang etserver otomatis melalui SSH",           mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sesi",             feature: "Pengelola sesi tmux",                            mobile: "yes",     termux: "melalui CLI",   termius: "no" },
      { category: "Sesi",             feature: "Pengelola sesi herdr dan Zellij",                mobile: "yes"    , termux: "melalui CLI",   termius: "no" },
      { category: "Sesi",             feature: "Balasan satu ketuk untuk agen yang tertahan",    mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Plugin",           feature: "Dukungan plugin",                                mobile: "yes",     termux: "melalui paket", termius: "no" },
      { category: "Plugin",           feature: "Katalog plugin pasang-sesuai-kebutuhan",         mobile: "yes",     termux: "no",            termius: "no" }
    ],
    agentAppsHeading: "Mobile SSH vs aplikasi agen pemrograman AI",
    agentAppsIntro:
      "Ada kategori aplikasi yang berkembang pesat yang khusus untuk mengendalikan agen pemrograman — Claude Code, Codex, dan sejenisnya — dari ponsel Anda. Beberapa adalah aplikasi SSH atau relay pihak ketiga (Onepilot, Happy, Omnara, Moshi, Orca); OpenAI dan Anthropic kini juga menyediakannya secara native, dengan Codex di dalam aplikasi ChatGPT dan Claude Code di dalam aplikasi Claude, keduanya berjalan di awan milik vendor sendiri. Mobile SSH beririsan dengan semuanya — Anda dapat menjalankan agen tersebut melalui SSH dan mendapat peringatan saat mereka membutuhkan Anda — tetapi ia menghampiri tugas ini dari sisi lain: ia adalah klien SSH langsung yang serbaguna terlebih dahulu, dan pendamping agen setelahnya.",
    agentAppsRows: [
      { feature: "Menjalankan agen pemrograman dari ponsel Anda",         mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes", moshi: "yes", orca: "yes",      chatgpt: "yes",          claude: "yes" },
      { feature: "Bekerja dengan agen pemrograman apa pun (bukan satu vendor)", mobile: "yes", onepilot: "yes", happy: "Claude Code", omnara: "yes", moshi: "yes", orca: "yes",   chatgpt: "Codex saja",   claude: "Claude Code saja" },
      { feature: "Berjalan di mesin Anda sendiri (bukan awan vendor)",     mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes", moshi: "yes", orca: "yes",      chatgpt: "no",           claude: "sebagian" },
      { feature: "SSH langsung — tanpa relay awan",                        mobile: "yes", onepilot: "yes",      happy: "no",         omnara: "no", moshi: "yes", orca: "no",       chatgpt: "no",           claude: "no" },
      { feature: "Terminal SSH umum (jalankan perintah apa pun)",          mobile: "yes", onepilot: "yes",      happy: "no",         omnara: "sebagian", moshi: "yes", orca: "Terminal komputer yang dipasangkan", chatgpt: "no",           claude: "no" },
      { feature: "Transfer berkas SFTP",                                   mobile: "yes", onepilot: "sebagian", happy: "no",         omnara: "no", moshi: "Dokumentasi bertentangan", orca: "Hanya di komputer",       chatgpt: "no",           claude: "no" },
      { feature: "Penerusan port lokal",                                   mobile: "yes", onepilot: "yes",      happy: "no",         omnara: "no", moshi: "Pratinjau pengembangan (Pro)", orca: "Hanya di komputer",       chatgpt: "no",           claude: "no" },
      { feature: "Pengelola sesi tmux",                                    mobile: "yes", onepilot: "sebagian", happy: "no",         omnara: "no", moshi: "Pro", orca: "Tidak didokumentasikan",       chatgpt: "no",           claude: "no" },
      { feature: "Bekerja dengan agen yang Anda pasang sendiri",           mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes", moshi: "yes", orca: "yes",      chatgpt: "no",           claude: "no" },
      { feature: "Peringatan agen (saat agen yang terhubung membutuhkan masukan)",           mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes", moshi: "yes", orca: "yes",      chatgpt: "yes",          claude: "yes" },
      { feature: "Setujui/tolak prompt agen dengan satu ketuk",            mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes", moshi: "Pro setelah masa uji coba", orca: "Agen yang didukung",      chatgpt: "yes",          claude: "yes" },
      { feature: "Tanpa penyiapan server atau SSH",                        mobile: "no",  onepilot: "no",       happy: "sebagian",   omnara: "sebagian", moshi: "no", orca: "Pemasangan dengan komputer", chatgpt: "yes",          claude: "yes" },
      { feature: "Android dan iOS",                                        mobile: "yes", onepilot: "iOS saja", happy: "yes",        omnara: "yes", moshi: "yes", orca: "yes",      chatgpt: "yes",          claude: "yes" },
      { feature: "Tidak perlu akun",                                       mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "no", moshi: "yes", orca: "LAN/Tailscale; Relay memerlukan akun",       chatgpt: "no",           claude: "no" },
      { feature: "Tanpa paywall Pro (semua fitur gratis)",                 mobile: "yes", onepilot: "no",       happy: "no",         omnara: "no", moshi: "no", orca: "yes",       chatgpt: "paket gratis", claude: "no" },
      { feature: "Sumber terbuka",                                         mobile: "Apache 2.0",  onepilot: "no",       happy: "MIT",        omnara: "Apache", moshi: "no", orca: "MIT",   chatgpt: "no",           claude: "no" }
    ],
    agentAppsNote:
      "Aplikasi ChatGPT dan Claude native adalah cara termulus untuk menjalankan agen satu vendor tanpa penyiapan apa pun — tanpa server, cukup sebuah akun — dan keduanya menambahkan layar setuju/tolak satu ketuk yang rapi. Kekurangannya: keduanya hanya menjalankan model mereka sendiri di awan mereka sendiri, tanpa terminal umum, tanpa SFTP atau tunnel, dan tanpa opsi menggunakan mesin Anda sendiri, serta berbayar atau memerlukan akun. Onepilot, Happy, dan Omnara menyimpan agen di perangkat keras yang Anda kendalikan (Onepilot melalui SSH langsung; Happy dan Omnara melalui relay awan, dan Omnara memerlukan akun). Mobile SSH terhubung langsung ke server Anda sendiri tanpa akun atau relay vendor, menjalankan agen apa pun berdampingan dengan terminal lengkap, SFTP, dan penerusan port, dan setiap fitur gratis. Kini ia menjawab prompt agen dengan cara yang sama seperti mereka — daftar Agents yang menampilkan setiap agen di seluruh koneksi, dengan satu tombol untuk tiap pilihan — bedanya, agennya berjalan di mesin Anda dan balasannya melintas melalui koneksi SSH Anda sendiri. Komprominya tetap sama seperti sejak awal: Anda yang menyediakan servernya, dan hook agen harus dipasang di sana sekali.",
    agentAppsSourcesNote: "Diperiksa pada 2026-09-19. Terminal SSH langsung Moshi terpisah dari layanan backend opsionalnya untuk peristiwa dan persetujuan agen. Halaman aplikasi Android-nya mengiklankan SFTP, tetapi dokumentasi terperincinya menjelaskan unggahan SCP dan pratinjau server pengembangan; sel terkait diberi keterangan yang sesuai. Aplikasi seluler Orca dipasangkan dengan Orca di komputer: LAN/Tailscale dapat berfungsi tanpa akun Orca, sedangkan Relay memerlukannya. Fitur yang hanya tersedia di komputer dan fitur yang tidak didokumentasikan ditandai dalam tabel. Sumber resmi:",
  },
  privacy: {
    metaTitle: "Kebijakan Privasi | Mobile SSH",
    metaDescription:
      "Cara Mobile SSH menangani data, identitas, cadangan, trafik SSH/VPN, berkas, analitik dan izin di Android/iOS.",
    eyebrow: "Privasi",
    h1: "Kebijakan Privasi",
    intro:
      "Mobile SSH menyimpan konfigurasi di perangkat dan menghubungi server/layanan pilihan Anda. Tidak perlu akun Mobile SSH atau sinkronisasi awan. VPN opsional Android merutekan trafik perangkat terpilih melalui server yang diatur.",
    sections: [
      {
        heading: "Informasi yang tersimpan di perangkat Anda",
        body: "Data tersimpan mencakup profil server, kredensial, kunci privat, identitas host, host perantara, aturan terowongan, snapshot sesi, riwayat login, jalur berkas, izin akses folder, dan pengaturan aplikasi. Android juga menyimpan konfigurasi VPN/proxy beserta rahasianya. Rahasia iOS memakai Keychain. Android mengenkripsi inventaris dengan kunci yang dilindungi Keystore, tetapi dapat menyimpannya sebagai teks biasa jika enkripsi tidak tersedia; penyimpanan profil WireGuard, Shadowsocks, dan OpenVPN mewajibkan enkripsi. Cadangan awan Android dinonaktifkan. Log debug opsional disimpan secara lokal."
      },
      {
        heading: "Informasi yang dikirim melalui jaringan",
        body: "Autentikasi SSH menuju server/bastion pilihan setelah verifikasi identitas. Trafik terminal, SFTP, VNC dan penerusan menuju titik akhir pilihan. Katalog dan unduhan plugin menghubungi sumbernya. Profil VPN/proxy Android dapat membawa trafik aplikasi lain dan DNS melalui SSH, WireGuard, Shadowsocks atau OpenVPN sesuai rute. Trafik ini tidak dikirim ke analitik atau penyimpanan awan Mobile SSH."
      },
      {
        heading: "Transfer berkas dan akses penyimpanan",
        body: "Transfer memakai berkas/folder pilihan tanpa izin penyimpanan menyeluruh. Android mempertahankan izin folder. iOS memakai folder aplikasi atau mengingat folder Files, serta mengimpor dokumen, foto dan berkas bersama melalui antarmuka sistem. Penyedia berkas dapat memakai awannya sendiri. Membuka atau berbagi mengirim berkas ke aplikasi/tujuan pilihan."
      },
      {
        heading: "Log dan pemecahan masalah",
        body: "Percobaan login dicatat lokal saat menyambung. Perekaman debug opsional: Android memperingatkan diagnostik memuat setiap tombol termasuk sandi, lalu mengekspor arsip. Log iOS mencatat alamat, kegagalan, penyambungan ulang, pergantian jaringan dan diagnostik tmux. Periksa sebelum berbagi karena dapat mengungkap detail server dan rahasia ketikan Android."
      },
      { heading: "Analitik penggunaan", body: "Saat diaktifkan, Mobile SSH mengirim interaksi fitur (termasuk penggunaan VPN/proksi dan jenis multiplekser terminal), diagnostik koneksi, versi aplikasi/OS, model perangkat, bahasa, dan ID sesi sementara melalui HTTPS ke Aptabase untuk meningkatkan aplikasi. Aptabase memproses alamat IP permintaan dan User-Agent untuk memperoleh negara/wilayah dan pengenal pseudonim harian; alamat IP asli atau User-Agent tidak disimpan bersama analitik. Peristiwa tidak mencakup lalu lintas penelusuran, kueri DNS, alamat server, nama pengguna, kredensial, perintah, dan isi berkas. Build Android yang memiliki permintaan persetujuan analitik memerlukan persetujuan aktif; build Android lama dan iOS mengaktifkan analitik secara bawaan. Semua fitur berfungsi tanpa analitik. Pengaturan dapat menghentikan pengumpulan; peristiwa yang sudah mengantre mungkin masih dikirim di iOS. Persetujuan Android disimpan hanya di perangkat dan tidak dipulihkan dari cadangan. Lihat [perjanjian pemrosesan data Aptabase](https://aptabase.com/legal/dpa)." },
      {
        "heading": "Cadangan yang Anda ekspor",
        "body": "Cadangan lengkap memuat inventaris dan pengaturan, ditambah VPN/proxy Android. Frasa sandi mengenkripsi berkas; tanpa itu sandi dan kunci privat berupa teks biasa. Anda memilih lokasi simpan/bagikan. Kepercayaan SSH, sesi aktif dan izin folder sistem dikecualikan. Pratinjau impor menunjukkan bagian dan preferensi keamanan yang diterapkan."
      },
      {
        "heading": "Perutean VPN di Android",
        "body": "VPN perangkat memerlukan persetujuan Android dan berlanjut sampai dihentikan atau diakhiri sistem. Satu VPN perangkat sekaligus; proxy SOCKS lokal dapat bersama VPN lain. SSH membawa TCP/DNS, UDP lain yang ditugaskan diblokir. Berhenti, berganti atau mengakhiri aplikasi mengakhiri perlindungan VPN lama; tanpa jaminan selalu aktif/penguncian."
      }
    ],
    permissionsHeading: "Izin",
    permissions: [
      { label: "Internet", body: "dipakai untuk koneksi SSH, transfer, desktop, VPN, plugin dan analitik yang diaktifkan." },
      { label: "Wake lock dan Wi-Fi lock", body: "digunakan di Android untuk menjaga sesi SSH tetap aktif saat perangkat tidur." },
      { label: "Layanan latar depan dan notifikasi", body: "digunakan di Android untuk menangani koneksi aktif di latar belakang; di iOS, notifikasi digunakan untuk peringatan agen." },
      { label: "Akses berkas", body: "diberikan lewat pemilih folder, dokumen dan foto sistem; iOS dapat mengingat folder Files eksternal. Tidak ada permintaan izin penyimpanan menyeluruh." },
      {
        "label": "Persetujuan VPN (Android)",
        "body": "diperlukan sebelum klien VPN bawaan merutekan trafik perangkat. Proxy SOCKS saja tidak menempati slot VPN."
      },
      {
        "label": "USB dan NFC (Android)",
        "body": "untuk berbicara dengan kunci FIDO2 fisik saat pendaftaran atau tanda tangan SSH, dengan izin USB dan konfirmasi sentuhan/PIN sesuai kebutuhan."
      }
    ],
    securityHeading: "Tanggung jawab keamanan",
    securityBody:
      "Lindungi perangkat dan cadangan ekspor. Bandingkan sidik jari asing melalui saluran tepercaya: matikan penerimaan otomatis Android untuk menyetujui penggunaan pertama; iOS selalu meminta secara bawaan. Periksa perubahan sebelum mengganti identitas. Layar aman memblokir tangkapan/rekaman Android; iOS menyembunyikan pratinjau pengalih serta rekaman/pencerminan, tetapi tidak dapat memblokir tangkapan manual.",
    contactHeading: "Kontak",
    contactBody: "Kontak dukungan: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  },
  docsIndex: {
    metaTitle: "Dokumentasi | Mobile SSH",
    metaDescription: "Dokumentasi pengguna akhir untuk Mobile SSH di Android dan iOS.",
    eyebrow: "Panduan pengguna",
    h1: "Dokumentasi Mobile SSH",
    intro:
      "Panduan identitas SSH, host perantara, terminal/VNC, multiplexer, SFTP, cadangan, terowongan lokal dan VPN Android dengan perbedaan platform.",
    cards: [
      { slug: "getting-started",  title: "Memulai",           text: "Pasang, verifikasi identitas, atur host perantara/kunci dan cadangkan konfigurasi." },
      { slug: "terminal",         title: "Terminal",          text: "Gunakan kontrol terminal, tmux, herdr, Zellij, peringatan agen dan desktop VNC." },
      { slug: "file-transfer",    title: "Transfer berkas",   text: "Transfer berkas, ingat folder dan bagikan ke sesi atau aplikasi lain." },
      { slug: "port-forwarding",  title: "Penerusan port",    text: "Atur terowongan lokal dan SSH VPN, SOCKS5, WireGuard, Shadowsocks, OpenVPN Android." },
      { slug: "troubleshooting",  title: "Pemecahan masalah", text: "Diagnosis masalah identitas, host perantara, terminal, transfer, cadangan dan VPN." }
    ]
  },
  docsNav: {
    home: "Beranda dokumentasi",
    gettingStarted: "Memulai",
    terminal: "Terminal",
    fileTransfer: "Transfer berkas",
    portForwarding: "Penerusan port",
    troubleshooting: "Pemecahan masalah"
  },
  about: {
    metaTitle: "Tentang | Mobile SSH",
    metaDescription: "Tentang Mobile SSH: versi, penulis, lisensi, dan pemberitahuan open-source untuk klien SSH Android dan iOS.",
    eyebrow: "Tentang",
    h1: "Tentang Mobile SSH",
    intro: "SSH, SFTP, VNC dan multiplexer Android/iOS, dengan cadangan lokal, identitas terverifikasi dan host perantara. Android juga memiliki VPN serta kunci keamanan fisik.",
    appHeading: "Tentang aplikasi",
    versionLabel: "Versi",
    authorLabel: "Penulis",
    authorValue: "Dmitry Kozlov",
    licenseLabel: "Lisensi",
    licenseValue: "Apache 2.0",
    websiteLabel: "Situs",
    privacyLabel: "Kebijakan privasi",
    privacyLinkText: "Kebijakan privasi",
    noticesHeading: "Pemberitahuan open source",
    noticesIntro: "Mobile SSH dibangun di atas pustaka open-source berikut. Setiap pustaka digunakan menurut lisensinya masing-masing.",
    notices: [
      { name: "JSch (mwiede fork) — Android",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "JZlib (bundled in JSch) — Android",   license: "BSD 3-clause", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "jBCrypt (bundled in JSch) — Android", license: "ISC", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "Ed25519 / Ed448 Java — Android",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "StringFog — Android",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "SwiftNIO & SwiftNIO SSH — iOS",       license: "Apache 2.0", url: "https://github.com/apple/swift-nio-ssh", licenseUrl: "https://github.com/apple/swift-nio-ssh/blob/main/LICENSE.txt" },
      { name: "Swift Crypto — iOS",                  license: "Apache 2.0", url: "https://github.com/apple/swift-crypto", licenseUrl: "https://github.com/apple/swift-crypto/blob/main/LICENSE.txt" },
      { name: "WireGuard Android — Android", license: "Apache-2.0", url: "https://github.com/WireGuard/wireguard-android", licenseUrl: "/licenses/wireguard-android-APACHE-2.0.txt" },
      { name: "wireguard-go — Android", license: "MIT", url: "https://github.com/WireGuard/wireguard-go", licenseUrl: "/licenses/wireguard-go-MIT.txt" },
      { name: "Go / golang.org/x/crypto / golang.org/x/net / golang.org/x/sys — Android", license: "BSD-3-Clause", licenseUrl: "/licenses/wireguard-third-party-notices.txt" },
      { name: "hev-socks5-tunnel / hev-socks5-core / hev-task-system — Android", license: "MIT", url: "https://github.com/heiher/hev-socks5-tunnel", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "lwIP — Android", license: "BSD-3-Clause", url: "https://savannah.nongnu.org/projects/lwip/", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "shadowsocks-rust — Android", license: "MIT / Apache-2.0 / BSD / ISC / Unicode-3.0", url: "https://github.com/shadowsocks/shadowsocks-rust", licenseUrl: "/licenses/shadowsocks-NOTICES.txt" },
      { name: "OpenVPN 3 Core — Android", license: "MPL-2.0", url: "https://github.com/OpenVPN/openvpn3", licenseUrl: "/licenses/openvpn3-MPL-2.0.txt" },
      { name: "mbed TLS — Android", license: "Apache-2.0", url: "https://github.com/Mbed-TLS/mbedtls", licenseUrl: "/licenses/openvpn-NOTICES.txt" },
      { name: "Asio — Android", license: "BSL-1.0", url: "https://github.com/chriskohlhoff/asio", licenseUrl: "/licenses/openvpn-NOTICES.txt" },
      { name: "LZ4 / xxHash — Android", license: "BSD-2-Clause", licenseUrl: "/licenses/openvpn-NOTICES.txt" },
    ],
    openvpnSourceHeading: "Kode sumber OpenVPN",
    openvpnSourceBody: "OpenVPN 3 Core digunakan dengan lisensi MPL 2.0. Unduh kode sumber yang tercakup dan versi dependensi yang persis digunakan, teks lisensi, serta informasi build native.",
    openvpnSourceLabel: "Unduh arsip kode sumber",
    certificatesHeading: "Sertifikat",
    apkCertificateLabel: "Sertifikat penandatanganan APK yang dipasang langsung (PEM)",
    apkCertificateBody: "Sertifikat publik ini mengidentifikasi penanda tangan APK Mobile SSH yang dipasang langsung. Google Play dapat menandatangani unduhan dengan sertifikat berbeda.",
    serverCertificateBody: "Sertifikat server SSH dan VPN harus berasal dari administrator server atau penyedia VPN Anda. Verifikasi sidik jarinya melalui saluran tepercaya; sertifikat penandatanganan ini bukan CA VPN.",
    signingHelpLabel: "Dokumentasi penandatanganan Android",
    contactHeading: "Kontak",
    contactBody: "Kontak dukungan: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  }
};
