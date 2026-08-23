import type { LaptopsPost } from "./types";

// Indonesian translation of /blog/laptops-are-dead/.
// Mirrors en.ts key for key and block for block; the inline markup
// (<strong>, <em>, <code>, <a>, &nbsp;, curly quotes) is preserved verbatim.

export const id: LaptopsPost = {
  metaTitle: "Laptop sudah mati, tetapi SSH dan TCP/IP selamat | Mobile SSH",
  metaDescription:
    "Obituari penuh sayang untuk laptop (1981–2026). TCP/IP dirancang pada 1974 dan SSH ditulis pada 1995; keduanya hidup lebih lama daripada perangkat kerasnya dan berpindah ke perangkat yang sudah ada di genggaman Anda. Alasan memakai Mobile SSH — klien SSH, SFTP, dan terminal untuk Android, iPhone, dan iPad. Gratis, native, dan open source.",

  back: "Blog",
  eyebrow: "Opini",
  titleLead: "Laptop sudah mati.",
  titleSoft: "Hiduplah saku Anda.",
  standfirst: `<b>Tetapi SSH dan TCP/IP selamat.</b> Obituari penuh sayang untuk seorang kawan berbadan berat dan berperut hangat —
sekaligus pembelaan bagi terminal yang diam-diam pindah ke perangkat yang sudah ada di genggaman Anda.`,
  author: "Dewan Redaksi Mobile SSH",
  date: "27 Juli 2026",
  readingTime: "7 menit baca",

  leadFigure: {
    terminal: {
      title: "ssh · prod-01 · tmux",
      prompt: "you@prod-01",
      path: "~/app",
      command: `claude "perbaiki tes yang gagal"`,
      reading: "membaca src/api/auth.ts",
      patching: "menambal refresh token …",
      result: "3 berkas berubah, tes hijau",
      needsInput: "agen butuh masukan",
      push: "git push origin main"
    },
    toast: {
      title: "Peringatan Agen",
      host: "prod-01",
      body: "Claude Code sedang menunggu tinjauan Anda"
    },
    caption:
      "Barang bukti A: sesi SSH sungguhan, sebuah agen coding, dan sebuah Peringatan Agen — berjalan di benda yang ada di saku Anda, tanpa charger di mana pun."
  },

  body: [
    {
      kind: "lead",
      html: `Laptop — kawan tercinta para pengembang, penulis, dan pelancong di seluruh dunia — berpulang
dengan tenang pekan ini dalam usia 45 tahun, di sebuah kafe, dengan baterai 6% dan tanpa charger di
mana pun. Sampai akhir, ia dikelilingi tab-tab yang selalu ia janjikan akan dibaca.`
    },
    {
      kind: "p",
      html: `Tidak ada drama. Ia hanya meredup, mengembuskan satu keluhan terakhir lewat kipasnya, lalu bertanya —
untuk terakhir kalinya, pada saat paling tidak tepat — apakah sekarang waktu yang baik untuk memasang pembaruan.`
    },
    {
      kind: "pull",
      html: `“Ia menuntut restart firmware tepat pada detik Anda akhirnya punya ide. Selalu begitu.”`
    },
    { kind: "h2", html: `Hidup yang berat, dipanggul dengan setia` },
    {
      kind: "p",
      html: `Lahir pada 1981 dari Osborne&nbsp;1 — sebelas kilogram ambisi yang “bisa dijinjing”, tanpa baterai, layar
lima inci — Laptop menghabiskan empat puluh lima tahun untuk terus menjadi lebih ringan tanpa pernah
benar-benar menjadi ringan. Ia wafat pada bobot sekitar satu setengah kilogram, angka yang bagi orang
tuanya pasti terdengar seperti ilmu sihir. Kita mengenang papan ketiknya. Bagian bawahnya yang hangat.
Kipas yang berdengung mengumumkan setiap upaya berpikir. Tas yang selalu sedikit terlalu penuh, adaptor
sebesar novel saku, dan pencarian — abadi, penuh harap — akan satu colokan listrik kosong di dekat jendela.`
    },
    {
      kind: "p",
      html: `Ia banyak menuntut dari kita, dan kita tetap memanggulnya, dari meja kerja ke ruang tunggu sampai kursi 24B,
karena untuk waktu yang lama hanya dialah yang sanggup menampung terminal sungguhan. Itu tidak berlaku lagi.`
    },
    { kind: "h2", html: `Ditinggalkan oleh para sesepuhnya` },
    {
      kind: "p",
      html: `Laptop tidak meninggalkan keturunan. Para penerus yang dijanjikan kepadanya — tablet, Chromebook, benda
dengan papan ketik yang bisa dilepas — memang datang, duduk di barisan belakang, dan ternyata cuma laptop
dengan port lebih sedikit. Sebagai gantinya, ia ditinggalkan
oleh dua kerabat yang sudah bekerja jauh sebelum ia lahir, dan yang pagi ini pun masih bekerja.`
    },
    {
      kind: "p",
      html: `<strong>TCP/IP</strong> adalah yang tertua. Vint Cerf, Bob Kahn, dan sederet panjang kolaborator menerbitkan
rancangannya pada Mei 1974; RFC&nbsp;675 menjabarkannya pada Desember tahun itu sekaligus mencetuskan kata
“internet”. ARPANET mulai bermigrasi ke sana pada 1 Januari 1983 dan menuntaskannya pada Juni tahun yang
sama — saat itu Laptop masih balita yang menggendong floppy drive.`
    },
    {
      kind: "p",
      html: `<strong>SSH</strong> adalah sang keponakan, berusia tiga puluh satu tahun dan yang termuda di antara para
pengusung keranda. Tatu Ylönen menulisnya di Helsinki University of Technology pada musim semi 1995,
setelah sebuah sniffer di jaringan kampus diam-diam memanen ribuan kata sandi. Ia merilis
<code>ssh-1.0.0</code> pada Juli, dan ia sendiri yang memilih port 22: satu-satunya angka kosong di antara
FTP di 21 dan telnet di 23, dengan alasan bahwa duduk di antara dua protokol yang hendak ia gantikan
“mungkin termasuk hal-hal kecil yang memberi sedikit aura kredibilitas.” Ia bertanya kepada IANA pada hari
Senin. Mereka mengiyakan pada hari Selasa. Ia merilisnya pada hari Rabu.`
    },
    { kind: "ledger" },
    { kind: "h2", html: `Yang tidak pernah diasumsikan kedua protokol itu` },
    {
      kind: "p",
      html: `Umur panjang mereka bukan misteri. Mereka bertahan karena nyaris tidak mengasumsikan apa pun. TCP
mengasumsikan paket, yang sebagian akan hilang, terduplikasi, atau tiba dalam urutan yang keliru. SSH
mengasumsikan aliran byte yang andal dan sepasang kunci. Yang tidak ada di kedua daftar itu: ukuran layar,
tata letak papan ketik, sasis, engsel, colokan listrik, dan vendor yang masih berdiri.`
    },
    {
      kind: "p",
      html: `SSH bahkan tidak mengasumsikan seberapa besar terminal Anda. Ia bertanya — dan ia bersedia menerima jawaban
yang berbeda di kemudian waktu. Itu adalah tata krama yang diciptakan untuk orang-orang yang menyeret sudut
jendela di layar desktop. Itu pula alasan memutar ponsel tidak mengakhiri sebuah sesi.`
    },
    {
      kind: "pull",
      html: `“Perangkat keras adalah tubuh. Protokol adalah kebiasaan. Hanya satu di antaranya yang bisa jatuh di lubang tangga.”`
    },
    {
      kind: "p",
      html: `Semua yang terikat pada sasis pergi lebih dulu, dan tak satu pun mati karena rekayasa yang buruk. Floppy
drive, slot PC Card, konektor dock — masing-masing dibuat dengan baik untuk sekumpulan kondisi tertentu, dan
kondisi itulah bagian yang fana. Protokol bahkan tidak terikat pada pemiliknya. Ketika lisensi pada rilis-rilis
Ylönen berikutnya mengetat, proyek OpenBSD kembali ke <code>ssh 1.2.12</code>, versi terakhir yang cukup bebas
untuk dipakai ulang, lalu merilis OpenSSH bersama OpenBSD&nbsp;2.6 pada 1 Desember 1999. Protokolnya jalan
terus tanpa peduli. Ia memang tidak pernah menjadi milik siapa pun secara khusus, dan justru karena itulah ia
masih ada sampai hari ini.`
    },
    { kind: "h2", html: `Satu asumsi yang terpaksa ditambal` },
    {
      kind: "p",
      html: `Kejujuran menuntut satu koreksi. TCP memang membuat satu asumsi, dan asumsi itu keliru: ia menganggap mesinnya
diam di tempat. Sebuah koneksi diberi nama oleh empat angka — dua alamat, dua port — dan itu cara yang sangat
masuk akal untuk menamai sesuatu pada 1981, ketika benda itu dibaut ke ruangan berlantai angkat. Melangkahlah
keluar dari kafe sambil menggenggam ponsel, dan satu dari keempat angka itu diam-diam berubah menjadi dusta.`
    },
    {
      kind: "p",
      html: `Tidak ada pemakaman kedua. Protokolnya dipertahankan dan asumsinya ditambal dari luar. Pekerjaannya
dipindahkan ke ujung sana, di luar jangkauan klien yang sedang melangkah keluar pintu: <code>screen</code>, lalu
<code>tmux</code>, menahan shell tetap terbuka sementara terminalnya datang dan pergi. Eternal Terminal melangkah
lebih jauh dan menamai sesinya, bukan alamatnya, sehingga sesi itu selamat meski alamat di bawahnya berganti.`
    },
    {
      kind: "pull",
      html: `“Server Anda tidak pernah setia kepada laptop. Mereka setia kepada port.”`
    },
    {
      kind: "p",
      html: `Tak satu pun dari itu diciptakan untuk ponsel. Ponsel hanya mewarisinya. Klien yang membawa transport Eternal
Terminal, pengelola tmux, keepalive yang menyambung ulang dengan jeda eksponensial, dan beberapa alamat untuk
tiap server tersimpan bisa dibawa keluar gedung di tengah sebuah perintah lalu meneruskan benangnya di trotoar.
Ujung sana diberi tahu string versi klien Anda dan ukuran terminal Anda. Ia tidak pernah diberi tahu apakah di
sana ada engsel.`
    },
    { kind: "h2", html: `Pekerjaannya diam-diam pindah ke saku` },
    {
      kind: "p",
      html: `Di tahun-tahun terakhirnya, Laptop mulai cemas soal relevansinya. Ada alasannya. Pekerjaan yang dulu ia klaim
sebagai miliknya — terminal sungguhan, transfer berkas sungguhan, kunci sungguhan, tunnel sungguhan — diam-diam
sudah berpindah ke perangkat yang sudah ada di tangan Anda.`
    },
    {
      kind: "p",
      html: `Perangkat itu menjalankan <strong>Mobile SSH</strong>: klien SSH, SFTP, dan terminal native untuk Android,
iPhone, dan iPad. Bukan shell mainan. Bukan remote desktop yang berlagak jadi shell. Terminal
<span class="nowrap">xterm-256color</span> yang utuh — yang sungguhan — dan muat di ruang yang dulu ditempati
charger Laptop.`
    },
    {
      kind: "pull",
      html: `“Pekerjaan yang dulu ia sebut miliknya kini pindah ke saku — dan tak sekali pun minta colokan.”`
    },
    { kind: "h2", html: `Yang ditinggalkan: ponsel Anda — dan Mobile SSH` },
    {
      kind: "p",
      html: `Harta warisannya, dirinci. Sebagai ganti karangan bunga, keluarga hanya meminta Anda membaca obituari di bawah
ini dan mencatat bahwa setiap barisnya adalah perangkat lunak nyata yang bisa Anda pasang hari ini.`
    },
    { kind: "estate" },
    {
      kind: "pull",
      html: `“‘Laptop sudah mati’ adalah obituari, bukan laporan otopsi. Laptop tetap disambut di rumah duka.”`
    },
    {
      kind: "p",
      html: `Kami mengatakannya dengan sayang. Laptop mengabdi dengan terhormat, dan ia disambut di rumah duka — terbuka di
atas meja samping, kipasnya berputar pelan, akhirnya tercolok ke listrik. Tetapi pekerjaan hari ini sudah
berkemas lebih ringan dan meninggalkan gedung. Kini ia muat di saku. Ia menjawab pada dering pertama.`
    },
    {
      kind: "p",
      html: `SSH dan TCP/IP tidak mengirim karangan bunga. Mereka sedang bekerja.`
    }
  ],

  ledger: {
    entries: [
      {
        year: "1974",
        event: "Cerf, Kahn, dan rekan-rekannya menerbitkan rancangan yang kelak menjadi TCP/IP",
        status: "masih berjalan",
        on: true
      },
      {
        year: "1978",
        event: "DEC merilis VT100, terminal pertamanya yang kompatibel dengan ANSI",
        status: "sekuensnya masih dipakai",
        on: true
      },
      {
        year: "1981",
        event: "Osborne&nbsp;1 mulai dijual: 11&nbsp;kg, $1.795, hanya dari colokan listrik",
        status: "dihentikan 1983",
        on: false
      },
      {
        year: "1983",
        event: "ARPANET menuntaskan perpindahan dari NCP ke TCP/IP",
        status: "masih berjalan",
        on: true
      },
      {
        year: "1995",
        event: "SSH ditulis di Helsinki; IANA memberikan port 22 pada 11 Juli",
        status: "masih berjalan",
        on: true
      },
      {
        year: "2026",
        event: "Laptop, usia 45, di sebuah kafe, baterai 6% tanpa charger",
        status: "yang di atas masih hidup",
        on: false
      }
    ],
    caption: "Urutan penghormatan, sebagaimana dibacakan dalam upacara. Pelayat tertua berusia lima puluh dua tahun."
  },

  estate: [
    {
      heading: "Terminal sungguhan, di saku Anda",
      body: "Emulasi <code>xterm-256color</code> yang utuh, hingga delapan sesi sekaligus dalam kisi yang bisa diubah ukurannya, pengelola sesi tmux bawaan, dan Eternal Terminal untuk koneksi yang bertahan saat jaringan putus, perangkat tidur, dan IP berubah."
    },
    {
      heading: "Berkas dan tunnel, sudah termasuk",
      body: "Penjelajah SFTP dua panel untuk memindahkan berkas antara ponsel dan server, dengan penerusan port lokal dan tunnel yang tersimpan berdampingan dengan tiap host — otomatis aktif begitu Anda tersambung."
    },
    {
      heading: "Kunci dibuat di perangkat",
      body: "Pembuatan kunci SSH langsung di perangkat — Ed25519 dan ECDSA — dengan autentikasi kata sandi atau kunci pribadi. Tidak ada yang keluar dari ponsel."
    },
    {
      heading: "Agen coding, lengkap dengan Peringatan Agen",
      body: "Jalankan Claude Code, Codex, dan agen lain di server <em>Anda sendiri</em>, langsung dari ponsel. Peringatan Agen mengirim notifikasi push — bersuara dan bergetar — begitu sebuah agen membutuhkan masukan Anda, jadi Anda bisa beranjak pergi tanpa kehilangan kabar."
    },
    {
      heading: "Berbusana untuk acaranya",
      body: "Font dan skema warna yang bisa diatur, glyph powerline dan ikon Nerd Font, serta sistem plugin untuk memperluasnya lebih jauh — setel terminalnya sampai terasa milik Anda sendiri."
    },
    {
      heading: "Benar-benar gratis, sejujurnya",
      body: "Tanpa iklan. Tanpa paywall Pro. Tanpa akun. Data Anda tetap di perangkat, dan keseluruhannya open source di bawah lisensi Apache-2.0."
    }
  ],

  cta: {
    ariaLabel: "Dapatkan Mobile SSH",
    heading: "Sebagai ganti karangan bunga, tutuplah beberapa tab.",
    body: "Pasang Mobile SSH, beri laptop Anda istirahat yang memang layak ia terima, dan bawa terminal sungguhan di saku — gratis, native, dan open source.",
    tags: ["Tanpa iklan", "Tanpa akun", "Data di perangkat", "Apache-2.0"],
    playButton: "Ikut serta di Google Play",
    iosButton: "Ikut beta iOS",
    note: `Android sedang dalam uji tertutup: daftarlah dengan akun Google yang akan Anda pakai untuk menguji, dan buka
tautan pendaftarannya di peramban ponsel Anda — uji tertutup itu mungkin tidak terlihat di dalam aplikasi
Google Play. Sudah terdaftar? Langsung saja ke <a href="{playUrl}" rel="noopener">halaman Play</a>.`
  }
};
