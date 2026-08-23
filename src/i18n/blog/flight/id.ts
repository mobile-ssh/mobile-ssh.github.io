import type { FlightPost } from "./types";

// Indonesian translation of "Eleven hours over the Atlantic".
//
// Every figure keeps its value; thousands separators and decimal marks follow
// Indonesian convention (35.786 km, 7,3 ms). The split-flap tiles stay English
// in the component, so masthead.headlineTranslated carries the real headline.

export const id: FlightPost = {
  meta: {
    title: "Sebelas jam di atas Atlantik | Mobile SSH",
    description:
      "Pada jarak 35.786 km, cahaya saja butuh 477 ms pulang pergi. Apa yang sebenarnya rusak ketika Anda bekerja dari pesawat, mengapa penyebabnya bukan yang Anda kira, dan cara menghabiskan penerbangan jarak jauh dengan bekerja alih-alih menonton ulang film. Dari Mobile SSH — klien SSH, SFTP, dan terminal untuk Android, iPhone, dan iPad."
  },

  backLabel: "Blog",

  masthead: {
    eyebrow: "Laporan lapangan",
    boardTitle: "Keberangkatan",
    legend: {
      time: "Waktu",
      flight: "Penerbangan",
      destination: "Tujuan",
      remarks: "Keterangan"
    },
    headline: "Sebelas jam di atas Atlantik",
    headlineTranslated: "Sebelas jam di atas Atlantik",
    deck: `Kursi 24B sedang menonton film yang sudah tiga kali ia tonton. Kursi 24C sedang meninjau
      <span class="hl">empat server</span> lewat Wi-Fi yang sama. Bedanya bukan pada koneksinya —
      melainkan pada apa yang masing-masing letakkan di ujung sana.`,
    byline: [
      { key: "penulis:", value: "Dewan Redaksi Mobile SSH" },
      { key: "tanggal:", value: "10 Agustus 2026" },
      { key: "baca:", value: "8 menit" },
      { key: "jalur:", value: "703 ms, GEO" }
    ]
  },

  sections: {
    twoSeats: {
      heading: "Dua kursi, satu satelit",
      intro: [
        `Sebelas jam, New York ke suatu tempat di timur. Lampu kabin meredup jadi kuning gading. Kursi
          24B membuka layar di sandaran depan, menggulir katalog berisi empat ratus judul, lalu memilih
          film yang sudah tiga kali ia tonton. Ini bukan kritik. Itu justru hal paling masuk akal yang
          bisa dilakukan dengan sebelas jam di dalam tabung aluminium bertekanan, dan hampir kita semua
          pernah melakukannya.`,
        `Kursi 24C mengeluarkan ponsel.`
      ],
      outro: [
        `Kedua kursi memakai Wi-Fi yang sama. Keduanya berada pada ketinggian yang sama dari tanah.
          Saat roda menyentuh landasan, yang satu sudah menonton film yang dialognya pun ia hafal, dan
          yang lain sudah menggabungkan tiga branch, membereskan test suite yang gagal, dan menghidupkan
          ulang job yang macet di mesin berjarak enam ribu kilometer.`,
        `Yang menarik bukan bahwa hal itu mungkin dilakukan, melainkan <em>mengapa</em> hal itu mungkin —
          dan mengapa pendekatan yang paling kentara, yang dicoba kebanyakan orang sekali lalu
          ditinggalkan di suatu titik di atas Greenland, sama sekali tidak berhasil.`
      ]
    },

    aboveYou: {
      heading: "Apa yang sebenarnya ada di atas Anda",
      intro: [
        `Ada dua hal yang sangat berbeda yang bisa dimaksud sebuah maskapai dengan kata "Wi-Fi", dan
          yang mana dari keduanya yang terpasang di badan pesawat Anda menentukan segala hal setelah itu.`,
        `Susunan yang lama memakai satelit geostasioner, diparkir di <strong>35.786 km</strong>.
          Ketinggian itu bukan pilihan desain yang dibuat siapa pun demi kenyamanan Anda; itu jarak persis
          ketika satu orbit memakan waktu dua puluh empat jam, sehingga satelitnya tampak menggantung diam.
          Akibatnya adalah aritmetika yang tak bisa dibantah anggaran rekayasa mana pun: naik lalu turun,
          dua kali, berarti <strong>477 ms pulang pergi untuk cahaya itu sendiri</strong>, sebelum satu
          router pun ikut campur.`,
        `Susunan yang baru memakai konstelasi orbit rendah Bumi di kisaran <strong>550 km</strong>
          — sekitar enam puluh lima kali lebih dekat, dan <strong>7,3 ms</strong> propagasi pulang pergi.`
      ],
      afterDiagram: [
        `Pengukuran dari udara cocok dengan fisikanya. Analisis atas uji kecepatan dalam penerbangan
          milik Ookla pada kuartal pertama 2025 menemukan <strong>median waktu pulang pergi 44 ms di
          Starlink berbanding 703–757 ms di Hughes, Intelsat, dan Viasat</strong> — selisih sekitar enam
          belas kali lipat. Tim lain, yang memasang instrumen pada perangkat sungguhan di
          <strong>25 penerbangan pada 7 maskapai</strong> untuk ACM IMC 2025, mengukur pola yang sama
          secara independen: di bawah 40 ms pada LEO, di atas 550 ms pada GEO.`
      ],
      afterChart: [
        `Untuk penyeberangan samudra jarak jauh, angka jujurnya sedikit lebih buruk daripada angka
          judulnya. Riset yang sama mengukur <strong>median 62 ms di atas Pasifik, dengan rentang
          19–86 ms</strong>. Itulah angka yang perlu Anda simpan di kepala. Tetap saja bagus sekali.
          Tapi bukan 44.`
      ]
    },

    rollout: {
      heading: "Bagian yang mengempiskan harapan",
      intro: [
        `Di sinilah tulisan blog di sebuah situs produk semestinya memberi tahu Anda bahwa masa depan sudah tiba.`,
        `Masa depan itu belum tiba secara merata, dan pesawat yang paling terakhir ia hampiri adalah pesawat <em>Anda</em>.`,
        `Pesawat berbadan sempit diremajakan lebih dulu — jumlahnya banyak, perputarannya cepat, dan
          mereka terbang di rute domestik pendek tempat tak seorang pun berniat melakukan apa pun selama
          sebelas jam. Pesawat berbadan lebar yang benar-benar menyeberangi samudra ada di urutan paling
          belakang. Sampai pertengahan 2026, United sudah punya <strong>lebih dari 400 pesawat
          ber-Starlink</strong> dan memperkirakan angkanya mendekati seribu pada akhir tahun — tetapi
          hanya sekitar <strong>enam puluh di antaranya berbadan lebar</strong>, penerbangan transatlantik
          berbadan lebar pertamanya dengan Starlink (Newark–Heathrow) baru beroperasi pada
          <strong>Juni 2026</strong>, dan seluruh armada berbadan lebarnya baru rampung pada
          <strong>musim panas 2027</strong>. Virgin Atlantic sudah menuntaskan <strong>dua belas
          A350</strong>-nya — sekitar <strong>28% armada berbadan lebarnya</strong> — dengan 787 dijadwalkan
          sepanjang paruh kedua 2026 dan A330neo hingga 2027.`
      ],
      afterFigure: [
        `Jadi: kalau Anda membaca ini di sebuah penerbangan antarbenua pada 2026, peluangnya masih tidak
          berpihak kepada Anda. Kemungkinan besar Anda ada di jalur 700 ms, bukan yang 62 ms.`,
        `Justru itulah yang membuat sisa tulisan ini lebih berguna, bukan sebaliknya.`
      ]
    },

    filmVsShell: {
      heading: "Mengapa filmnya lancar dan terminalnya tidak",
      cmdComment: "satu sesi penuh untuk memindahkan satu karakter",
      prose: [
        `Film dan shell gagal ke arah yang berlawanan, dan Wi-Fi dalam pesawat justru jaringan yang paling
          keliru untuk salah satunya.`,
        `Film adalah persoalan <em>bandwidth</em> yang tidak peduli pada latensi. Ia menyangga di depan.
          Kalau frame pertama datang terlambat 700 ms, tak seorang pun sadar, karena tak ada bagian dari
          pengalaman itu yang bergantung pada film bereaksi terhadap Anda. Tekan play, tunggu, tonton.
          Perjalanan pulang perginya terjadi satu kali.`,
        `Shell interaktif adalah kebalikannya persis. Ia hampir tidak butuh bandwidth — sesi terminal
          diukur dalam kilobit, bukan megabit — tetapi ia membayar ongkos pulang pergi <strong>pada setiap
          ketukan tombol yang Anda harapkan muncul kembali di layar</strong>. Pada 700 ms, itu bukan
          koneksi yang lambat. Itu percakapan dengan jeda dua pertiga detik setelah setiap karakter.`,
        `Inilah yang salah dipahami orang. Mereka melihat "50 Mbps" di portal dalam pesawat, menyimpulkan
          koneksinya baik-baik saja, membuka terminal, lalu menemukan bahwa "baik-baik saja" sama sekali
          tidak ada hubungannya. Bandwidth bukan mata uang di sini. <strong>Perjalanan pulang pergilah
          mata uangnya.</strong>`
      ]
    },

    whatBreaks: {
      heading: "Apa yang sebenarnya rusak (bukan mengetiknya)",
      intro: [
        `Kegagalannya lebih spesifik daripada sekadar "terasa lambat", dan risetnya luar biasa jelas soal
          di mana rasa sakitnya mendarat.`,
        `Dalam studi terkendali atas 31 partisipan yang membandingkan latensi masukan ujung ke ujung 20 ms
          dengan 200 ms, <strong>pengetikan panjang nyaris tidak bergeser</strong>: 290,9 ms per karakter
          berbanding 302,7, selisih yang oleh para penulisnya tidak bisa disebut signifikan. Tingkat
          kesalahannya identik.`
      ],
      afterTable: [
        `Tetapi tugas <em>koreksi</em> — memindahkan kursor dengan tombol panah lalu membetulkan teks, hal
          yang sebenarnya Anda lakukan di dalam editor — melonjak dari <strong>38,9 detik menjadi 46,5
          detik, sekitar 20% lebih lambat, dengan ukuran efek yang sangat besar</strong>
          (p &lt; 0,001, d = 1,673). Para penulisnya menjelaskan mekanismenya dengan gamblang: saat
          bernavigasi, Anda terpaksa terus menunggu layar, karena di mana kursor itu mendarat menentukan
          apa yang Anda lakukan berikutnya.`,
        `Beban subjektifnya memburuk bahkan di tempat kecepatannya tidak. Pada tugas mengetik, yang
          performanya secara statistik tidak berubah, <strong>rasa frustrasi yang dilaporkan sendiri tetap
          naik dari 20,9 ke 31,3</strong>.`,
        `Terjemahkan itu ke terminal dan ia menamai persis apa yang berantakan di ketinggian: bukan
          mengetikkan sebuah perintah. Yang berantakan adalah navigasi <code>vim</code>, tab completion,
          menggulir <code>less</code>, dan irama colek-lalu-lihat sebuah REPL. Setiap satunya adalah
          lingkaran tempat langkah Anda berikutnya bergantung pada apa yang baru saja kembali.`
      ]
    },

    moveTheWork: {
      heading: "Pindahkan pekerjaannya, bukan ketukan tombolnya",
      intro: [
        `Begitu Anda menerima bahwa perjalanan pulang pergi adalah sumber daya yang langka, solusinya
          berhenti menjadi "cari pesawat yang lebih cepat" dan berubah menjadi pertanyaan arsitektur:
          <strong>ambil lebih sedikit perjalanan pulang pergi, dan buat setiap perjalanan membawa lebih
          banyak.</strong>`,
        `Ada satu perkakas terkenal yang menyerang persoalan ini secara langsung. Mosh menebak apa yang
          akan dilakukan ketukan tombol Anda dan menampilkannya secara lokal sebelum server
          mengonfirmasinya. Efek terukurnya dramatis: pada jalur dengan waktu pulang pergi sekitar setengah
          detik, median respons ketukan turun dari <strong>503 ms ke bawah 5 ms</strong>. Pada jalur lintas
          samudra dari MIT ke Singapura, <strong>273 ms ke bawah 5 ms</strong>.`,
        `Tapi bacalah cetakan kecilnya, karena di situlah seluruh intinya. Mosh menebak sekitar
          <strong>70% ketukan tombol</strong>. Sekitar 30% yang tak bisa ia tebak, dalam kata-kata para
          penulisnya sendiri, <em>terutama navigasi</em> — dan untuk yang itu, profil latensinya kembali
          terlihat seperti SSH biasa. Artinya: satu-satunya interaksi yang paling dihukum oleh latensi
          tinggi justru interaksi yang tidak bisa diselamatkan oleh echo lokal.`
      ],
      chartHeading: "tertebak vs tidak",
      afterChart: [
        `Jadi prediksi memang membantu, tapi ia tidak menyelamatkan Anda. Yang benar-benar menyelamatkan
          adalah menolak berada di dalam lingkaran itu sesering itu.`,
        `<strong>Berhentilah mengetik ke dalam latensi. Taruh pekerjaan berdurasi panjang di ujung sana
          lalu tengok sesekali.</strong> Sebuah build, sebuah test suite, sebuah migrasi, sebuah agen
          coding — tak satu pun butuh Anda hadir untuk perjalanan pulang perginya. Mereka butuh Anda di
          awal dan di titik keputusan. Semua yang di antaranya adalah urusan mesin, dan mesin itu ada di
          darat dengan koneksi yang bagus.`,
        `Itu juga alasan <em>paralelisme</em> mengalahkan <em>interaktivitas</em> di ketinggian. Anda tidak
          bisa mengetik cepat menembus 700 ms. Tapi Anda jelas bisa mengawasi empat server sekaligus,
          karena pengawasan tidak dibatasi latensi — ia dibatasi perhatian, dan Anda punya sebelas jam
          perhatian tanpa hal lain untuk membelanjakannya.`
      ]
    },

    seat24c: {
      heading: "Apa yang sebenarnya dikerjakan kursi 24C",
      lead: `Konkretnya, di sebuah ponsel, di jalur yang buruk:`,
      outro: [
        `Tak satu pun dari ini diciptakan untuk pesawat. Ini sekadar rupa kerja jarak jauh di atas jalur
          yang tidak bersahabat, sebagaimana selalu, dan pesawat hanyalah jalur tidak bersahabat yang luar
          biasa jujur.`
      ]
    },

    caveat: {
      heading: "Satu catatan jujur",
      prose: [
        `Dua hal yang tidak bisa kami verifikasi, dan tidak akan kami pura-purakan:`,
        `<strong>Apakah jaringan maskapai Anda mengizinkan SSH keluar sama sekali.</strong> Kami tidak
          menemukan bukti publik yang dapat dipercaya soal pemblokiran port, kebijakan VPN, atau batas
          waktu idle di antara para penyedia Wi-Fi maskapai — dan banyak sekali klaim forum yang percaya
          diri tapi tidak tahan diperiksa. Ini berbeda-beda menurut maskapai, penyedia, dan pesawatnya.
          Ujilah di penerbangan pendek sebelum Anda menyusun rencana penerbangan panjang di atasnya.`,
        `<strong>Bagaimana penumpang sebenarnya menghabiskan waktunya.</strong> Statistik hiburan dalam
          pesawat yang paling sering dikutip ternyata berujung pada kartu tarif iklan tanpa metodologi apa
          pun, dan kami membuangnya. Bukti survei terbaik yang kami temukan — Inmarsat/Censuswide, 11.231
          penumpang di sepuluh negara, meski dikumpulkan pada 2022 dan menanyakan niat alih-alih mengukur
          waktu — menempatkan hiburan jauh di depan pekerjaan: <strong>41% ingin menonton film yang sudah
          diunduh dan 35% ingin streaming, berbanding 26% yang ingin bekerja.</strong>`,
        `Jadi perlakukan kursi 24B sebagai tokoh cerita, bukan statistik. Intinya tidak pernah bahwa
          menonton film itu keliru. Intinya adalah bahwa alternatifnya kini bukan lagi sesuatu yang
          mustahil.`
      ]
    },

    descent: {
      heading: "Mulai turun",
      prose: [
        `Filmnya berakhir di tempat ia berakhir tiga kali sebelumnya. Pesawat mulai turun. Kursi 24B telah
          menjalani penerbangan yang benar-benar menyenangkan, dan akan mendarat dalam keadaan segar, dan
          itu ada nilainya.`,
        `Kursi 24C mendarat dengan pekerjaan yang sudah selesai — karena pekerjaan itu memang tidak pernah
          ada di kursinya. Sepanjang waktu ia ada di sebuah mesin di darat, dan ponselnya tak pernah lebih
          dari sekadar jendela ke arah sana.`,
        `Sebelas jam adalah waktu yang lama untuk dihabiskan pada 700 ms. Tetapi ia waktu yang sangat
          singkat untuk mengawasi empat server yang sama sekali tidak peduli pada satelitnya.`
      ]
    }
  },

  seat24b: {
    tag: "kursi 24b",
    lines: [
      { time: "19:04", verb: "play", text: "— film, 118 menit" },
      { time: "21:02", verb: "play", text: "— film, sekali lagi" },
      { time: "23:10", verb: "idle", text: "— kabin gelap" },
      { time: "05:41", verb: "wake", text: "— mulai turun" }
    ]
  },

  seat24c: {
    tag: "kursi 24c",
    lines: [
      { time: "19:04", verb: "attach", text: "— 4 sesi, 1 kisi" },
      { time: "21:02", verb: "merge", text: "— tiga branch" },
      { time: "23:10", verb: "green", text: "— test suite gagal beres" },
      { time: "05:41", verb: "kick", text: "— job macet dijalankan ulang" }
    ]
  },

  quotes: [
    `Pesawat yang sama, antena yang sama, Wi-Fi buruk yang sama. Bedanya
        sepenuhnya terletak pada apa yang Anda taruh di ujung sana.`,
    `Pesawat yang Anda tumpangi adalah yang paling terakhir mereka
        tingkatkan. Rencanakan untuk 700 ms, lalu bergembiralah kalau dapat 62.`,
    `Latensi tidak memajaki ketikan Anda. Ia memajaki setiap keputusan
        yang menunggu layar.`
  ],

  orbit: {
    alt: "Diagram: satelit geostasioner di 35.786 km memakan 477 ms waktu tempuh cahaya pulang pergi; satelit orbit rendah Bumi di 550 km memakan 7,3 ms.",
    geoLabel: "GEO 35.786 km",
    geoValue: "cahaya 477 ms",
    leoLabel: "LEO 550 km",
    leoValue: "cahaya 7,3 ms",
    aircraft: "kursi 24C, 11.000 m",
    caption: "Tidak sesuai skala — tidak ada gambar memuat 35.786 km yang pernah sesuai skala."
  },

  latencyChart: {
    rows: [
      { label: "GEO — Hughes / Intelsat / Viasat, median", value: "703 ms" },
      { label: "LEO di atas Pasifik — median jarak jauh", value: "62 ms" },
      { label: "LEO — Starlink dalam penerbangan, median keseluruhan", value: "44 ms" }
    ],
    note: "Batang pada satu skala linear yang sama. Sumber 1."
  },

  rolloutFigure: {
    items: [
      {
        name: "United",
        value: "≈60",
        text: `pesawat berbadan lebar terbang dengan Starlink, dari 400+ pesawat yang sudah dipasangi.
            Sisa armada berbadan lebarnya baru rampung pada musim panas 2027.`
      },
      {
        name: "Virgin Atlantic",
        value: "12 dari ~43",
        text: `pesawat berbadan lebar selesai — sekitar 28 persen. 787 berjalan sepanjang H2 2026 dan
            A330neo hingga 2027.`
      }
    ],
    note: `Sumber 5 dan 6. Sisa pesawat berbadan lebar United dijadwalkan rampung pada musim panas 2027;
          787 Virgin sepanjang H2 2026 dan A330neo hingga 2027.`
  },

  latencyTable: {
    caption: "Schmid dkk., MUM '23 — n = 31, latensi masukan 20 ms vs 200 ms",
    head: ["tugas", "20 ms", "200 ms", "putusan"],
    rows: [
      { task: "mengetik / karakter", low: "290,9", high: "302,7", verdict: "tidak sig." },
      { task: "tugas koreksi", low: "38,9 dtk", high: "46,5 dtk", verdict: "+20%" },
      { task: "frustrasi", low: "20,9", high: "31,3", verdict: "p=0,004" }
    ]
  },

  moshChart: {
    rows: [
      { label: "ketukan yang langsung ditampilkan mosh", value: "≈70%" },
      { label: "tak tertebak — “terutama navigasi”", value: "≈30%" }
    ],
    note: "Sumber 4."
  },

  windows: [
    {
      title: "sesi-yang-hidup-lebih-lama-dari-koneksinya",
      body: `Pesawat berpindah sel, portalnya minta autentikasi ulang, koneksinya putus.
            <code>tmux</code> tetap menjaga shell berjalan di server, apa pun yang terjadi; sesinya adalah
            sesuatu di ujung sana, bukan sesuatu di genggaman Anda. Eternal Terminal membawa gagasan yang
            sama lebih jauh dan membuat sesi itu selamat dari koneksi TCP-nya sendiri, menyangga lalu
            memutar ulang apa yang Anda lewatkan. <span style="color:var(--dim)">(Peringatan wajar untuk
            jaringan yang difilter: ET butuh portnya sendiri — 2022 secara bawaan — <em>selain</em> port
            22 milik SSH.)</span>`
    },
    {
      title: "lebih-dari-satu-masalah-sekaligus",
      body: `Beberapa sesi dalam satu kisi, beberapa server tersimpan, masing-masing menjalankan sesuatu
            yang tidak butuh diawasi di antara keputusan.`
    },
    {
      title: "agen-yang-mengetik-untuk-Anda",
      body: `Agen coding berjalan di server <em>Anda sendiri</em>, pada latensi darat, di tempat kodenya
            berada. Mereka tidak membayar pajak satelit; Anda baru membayarnya saat menjawab mereka.`
    },
    {
      title: "push-saat-memang-penting",
      bellLabel: " (bel)",
      body: `Peringatan Agen berbunyi ketika ada sesuatu yang benar-benar butuh manusia — jadi
            penerbangannya dihabiskan untuk meninjau dan memutuskan, bukan menatap prompt menunggu echo.`
    }
  ],

  cta: {
    cmdComment: "gratis · open source · Apache-2.0",
    heading: "Penerbangan jauh Anda berikutnya adalah sebelas jam waktu server.",
    prose: [
      `Mobile SSH adalah klien SSH, SFTP, dan terminal native untuk Android, iPhone, dan iPad. Banyak
          sesi sekaligus, pengelola tmux bawaan, Eternal Terminal, dan notifikasi push saat sebuah agen
          membutuhkan Anda. Gratis, tanpa akun, tanpa iklan, open source.`
    ],
    tags: ["Tanpa iklan", "Tanpa akun", "Data di perangkat", "Apache-2.0"],
    playButton: "Ikut serta di Google Play",
    iosButton: "Ikut beta iOS",
    note: `Android sedang dalam uji tertutup — daftarlah dengan akun Google yang akan Anda pakai
      untuk menguji, dan buka tautannya di peramban ponsel Anda; uji tertutup itu mungkin tidak terlihat
      di dalam aplikasi Google Play.`
  },

  sources: {
    heading: "Sumber",
    items: [
      `Data dalam penerbangan Ookla Q1 2025, dianalisis dalam <em>A First Look at Starlink In-Flight Performance</em> — arXiv:2508.09839, ditinjau sejawat di IEEE Xplore doc 11353148. (44 ms vs 703–757 ms; median Pasifik 62 ms, rentang 19–86 ms.)`,
      `<em>From GEO to LEO: First Look Into Starlink In-Flight Connectivity</em>, ACM IMC 2025 — Jang, Varvello, Raman, Zaki. 25 penerbangan, 7 maskapai. (&lt;40 ms LEO vs 550 ms+ GEO.)`,
      `Schmid dkk., MUM '23, <em>Effects of Text Input Latency</em> — n=31, 20 ms vs 200 ms. (290,9 vs 302,7 ms/karakter, tidak signifikan; koreksi 38,9 dtk → 46,5 dtk, p&lt;0,001, d=1,673; frustrasi 20,9 → 31,3, p=0,004.)`,
      `Winstein &amp; Balakrishnan, <em>Mosh: An Interactive Remote Shell for Mobile Clients</em>, USENIX ATC 2012. (503 ms → &lt;5 ms; 273 ms → &lt;5 ms; ~70% ketukan tombol tertebak; sisanya yang tak tertebak "terutama navigasi".)`,
      `Ruang berita United Airlines, 22 Juni 2026, <em>United Accelerates Starlink Wi-Fi Rollout with First Widebody Transatlantic Flight</em>. (400+ pesawat; ~60 berbadan lebar; seluruh armada berbadan lebar musim panas 2027.)`,
      `Siaran pers Virgin Atlantic, 12 April 2026. (A350 tuntas; 787 H2 2026; A330neo 2027.)`,
      `Dokumentasi Eternal Terminal — eternalterminal.dev/howitworks, github.com/MisterTea/EternalTerminal. (Sangga-dan-putar-ulang; port bawaan 2022 selain port SSH.)`,
      `Inmarsat/Censuswide Passenger Experience Survey 2022, n=11.231 di 10 negara. (Film terunduh 41%, streaming 35%, kerja 26% — niat yang dinyatakan, pilihan ganda, dikumpulkan 2022.)`
    ],
    quitHint: "— tekan q untuk keluar"
  },

  colophon: [
    "Mobile SSH — SSH / SFTP / terminal gratis dan open source untuk Android, iPhone, dan iPad.",
    "Apache-2.0. Tanpa iklan, tanpa akun, tanpa tingkat Pro."
  ]
};
