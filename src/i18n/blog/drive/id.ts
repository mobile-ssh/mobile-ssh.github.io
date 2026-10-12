import { defineDrive } from "./define";

export const id = defineDrive({
  "metaTitle": "Tulisan blog yang bermula dalam perjalanan pulang | Mobile SSH",
  "metaDescription": "Sesi menulis lewat suara yang dibayangkan membandingkan T3 Code, Moshi, Mobile SSH, dan paseo.sh: membuat draf, mengedit berkas, menulis kode, menyiapkan perubahan, dan menghadapi kebisingan.",
  "back": "Blog",
  "eyebrow": "Alur kerja suara",
  "title": "Tulisan blog yang bermula dalam perjalanan pulang",
  "standfirst": "Sebuah ide muncul sebelum perjalanan berakhir. Bisakah Anda mengubahnya menjadi draf, perubahan kode sumber, dan diff yang disiapkan dengan cermat tanpa terus menatap layar sentuh? Empat produk menawarkan bagian yang berbeda dari percakapan itu.",
  "author": "Dewan Redaksi Mobile SSH",
  "date": "11 Oktober 2026",
  "readingTime": "7 menit baca",
  "evidence": "Perjalanan yang dibayangkan, bukan pengujian saat mengemudi. Kemampuan diperiksa berdasarkan dokumentasi resmi dan kode sumber terkini pada 11 Oktober 2026. Tidak ada pengujian perbandingan mikrofon atau kebisingan jalan. Lakukan pengaturan saat parkir; mengemudi tetap menjadi prioritas, dan pemeriksaan layar maupun persetujuan menunggu sampai berhenti di tempat aman.",
  "body": [
    "Tulisan ini bermula di mobil yang sedang parkir. Anda memiliki repositori di komputer yang dapat dijangkau, agen pemrograman yang siap, serta ide yang mungkin hilang jika Anda berjanji akan mengingatnya setelah makan malam. Sebelum berangkat, Anda memilih proyek dan membuat koneksi. Permintaan pertama disampaikan dengan ucapan biasa.",
    "Buat draf tulisan blog tentang fitur pencarian baru kita. Mulai dari masalah pembaca. Simpan draf di direktori blog dan jangan buat commit.",
    "Perjalanan menjadi latarnya, tetapi pertanyaan yang berguna adalah apa yang terjadi setelah mikrofon mendengar Anda. Apakah ucapan hanya mengisi kotak teks? Apakah seseorang masih harus menekan Kirim? Bisakah Anda mendengar jawaban lalu bertanya lagi? T3 Code, Moshi, Mobile SSH, dan paseo.sh memberikan jawaban yang berbeda.",
    "Satu permintaan, empat percakapan berbeda",
    "T3 Code menempatkan agen pemrograman dan pekerjaannya pada repositori dalam antarmuka seluler. Masukan suara bawaan yang didokumentasikan mentranskripsikan secara lokal pada iPhone yang didukung dengan iOS 26 atau lebih baru. Hal yang menentukan: transkripsi mengubah draf di kotak penyusunan pesan; transkripsi tidak mengirim permintaan kepada agen. Ini cocok untuk mengucapkan arahan penulisan yang panjang saat parkir, memeriksanya, lalu mengirimkannya. Ini tidak membuktikan adanya percakapan berkelanjutan dengan jawaban lisan. Pekerjaan dapat berlanjut di host setelah dikirim, tetapi dikte saja belum melengkapi alur tanpa penggunaan tangan. <a href=\"#source-t3-voice\">[1]</a>",
    "Moshi memilih jalur terminal. Dokumentasi suaranya menjelaskan ucapan yang diubah menjadi masukan terminal, dengan pengiriman melalui Enter sebagai pilihan, atau menjadi teks yang dapat diedit dalam kotak pesan. Perbandingannya sendiri dengan Paseo menyebutnya dikte satu arah, bukan percakapan dengan jawaban lisan. Agen pemrograman yang sudah berjalan di terminal itu dapat menerima arahan penulisan. Langkah yang belum ada dalam perjalanan bayangan kita adalah mendengar dan mendiskusikan penyesuaian hasil melalui mode suara dua arah yang terdokumentasi. Tombol mikrofon dan Enter otomatis memang berguna, tetapi keduanya tidak membuktikan adanya umpan balik lisan atau persetujuan lewat suara. <a href=\"#source-moshi-voice\">[3]</a> <a href=\"#source-moshi-conversation\">[4]</a>",
    "paseo.sh mendokumentasikan dikte sekaligus percakapan suara: pengenalan ucapan membawa permintaan Anda kepada agen, dan sintesis suara memberikan jawaban. Alur suaranya dapat memulai dan mengendalikan agen pemrograman, sehingga menjadi kandidat langsung untuk percakapan yang dibayangkan. Itu adalah rancangan interaksi yang terdokumentasi, bukan hasil dari perjalanan ini. Ada pula batasan siklus hidup aplikasi: implementasi Android yang ditinjau menjeda audio saat masuk ke latar belakang. Jangan menganggap percakapan suara berarti sesi yang tidak terputus ketika ponsel terkunci. <a href=\"#source-paseo-voice\">[5]</a> <a href=\"#source-paseo-background\">[7]</a>",
    "Asisten Android eksperimental Mobile SSH memberi daya tarik berbeda: suara dapat bekerja dengan sesi SSH yang sudah Anda gunakan. Mode Live mendukung interaksi lisan; kontrolnya dapat menemukan host dan sumber daya multiplexer, membaca keluaran terminal yang dipilih dan, setelah izin terpisah diaktifkan, mengirim masukan terminal atau menjalankan perintah yang didukung. Bagi orang yang berganti antara editor, agen pemrograman, dan panel pengujian, menyebut target yang sudah ada berguna. Inilah keunggulan yang didukung bukti: suara yang terintegrasi dengan pekerjaan SSH umum, dengan izin kendali yang tetap eksplisit. Ini bukan bukti bahwa pengenalan ucapannya lebih baik daripada tiga produk lain. <a href=\"#source-mobile-voice\">[8]</a>",
    "Keterangan platform itu penting. Implementasi suara baru Mobile SSH untuk iOS adalah dikte di latar depan, peninjauan, dan Kirim secara eksplisit, dengan jawaban lisan serta akses baca saja ke terminal yang dipilih. Catatan rilisnya menjelaskan build pengujian privat. Implementasi ini tidak menyediakan kendali penulisan terminal milik asisten Android atau pendengaran terus-menerus. Adaptor pengembangan Android Auto juga bukan integrasi mobil yang sudah dirilis. Cerita harus sesuai dengan build yang benar-benar Anda miliki. <a href=\"#source-mobile-ios\">[11]</a> <a href=\"#source-mobile-car\">[12]</a>",
    "Draf menjadi berkas, lalu perubahan kode sumber",
    "Bayangkan kerangkanya sudah siap saat Anda berhenti di tempat aman berikutnya. Kini tugasnya menjadi lebih spesifik. Anda ingin memendekkan pendahuluan, memperbaiki contoh, dan membuat perubahan kecil pada kode sumber situs. Perubahan itu masih dapat Anda sampaikan lewat suara; tidak perlu mendikte setiap kurung kurawal dan titik koma.",
    "Pendekkan pendahuluan draf. Lalu tambahkan label waktu baca pada komponen artikel, mengikuti konvensi proyek ini. Jalankan pengujian yang relevan dan beri tahu saya berkas mana yang berubah.",
    "Di sini agen pemrogramanlah yang menulis. Antarmuka suara membawa instruksi; akses repositori, alat yang tersedia, dan izin menentukan apakah agen dapat mengedit berkas serta mengimplementasikan komponen. Menerapkan kemampuan tersebut pada blog ini merupakan usulan alur kerja, bukan demonstrasi terverifikasi bahwa keempat produk berhasil melakukannya. T3 Code menyediakan pengeditan oleh agen dan tindakan Git; Moshi menyediakan terminal sungguhan; Paseo mendokumentasikan alur pengembangan dengan agen; Mobile SSH di Android dapat mengarah ke terminal atau target perintah yang diizinkan. Agen yang dipilih tetap harus memahami tugasnya.",
    "Mobile SSH tetap berguna setelah sesi suara berakhir: aplikasi yang sama memiliki terminal SSH, pengeditan teks SFTP, dan akses ke lazygit jarak jauh. Ini memberi tempat praktis untuk memeriksa berkas sebenarnya dan diff saat parkir. Semuanya merupakan alat peninjauan interaktif, bukan bukti bahwa setiap tombolnya dapat dioperasikan lewat suara. <a href=\"#source-mobile-voice\">[8]</a>",
    "Staging layak mendapat kalimat tersendiri",
    "Masukkan hanya draf blog dan komponen artikel yang baru kita tinjau ke staging. Biarkan semua perubahan lain tetap seperti semula. Jangan lakukan commit atau push.",
    "Staging memilih konten untuk commit Git berikutnya; ini terpisah dari menyimpan, melakukan commit, dan menerbitkan. Alur commit seluler T3 Code memilih berkas dan memasukkannya ke staging sebagai bagian dari commit. Itu tidak sama dengan dokumentasi tindakan staging lisan yang berdiri sendiri. Di Moshi, Paseo, atau sesi Mobile SSH Android dengan izin tulis, meminta agen yang mampu untuk memasukkan berkas tertentu ke staging adalah penggunaan alat shell yang masuk akal, sesuai izin. Tidak satu pun membuktikan persetujuan yang andal untuk sembarang diff hanya melalui suara. Periksa diff yang sudah masuk staging saat berhenti di tempat aman. <a href=\"#source-t3-git\">[2]</a> <a href=\"#source-paseo-work\">[6]</a>",
    "Lalu jalan menjadi lebih bising",
    "Dalam perjalanan bayangan kita, hujan turun, kipas bertambah kencang, dan penumpang mulai bicara. Di sinilah demo yang rapi berhenti menjawab pertanyaan penting. Kami tidak menemukan hasil kebisingan jalan yang terkontrol dan dapat dibandingkan untuk keempat produk ini. Tidak ada bukti di sini untuk menentukan pemenang pengenalan ucapan, jarak yang andal dari mikrofon, atau janji bahwa percakapan di latar belakang tidak akan pernah menjadi perintah.",
    "Transkripsi pada perangkat T3 Code menjelaskan tempat pengenalan dilakukan, bukan akurasinya di kabin bising. Moshi menawarkan beberapa mesin pengenalan di iOS dan menyarankan transkripsi pada layanan jarak jauh ketika pengenalan lokal kesulitan menghadapi kebisingan; saran itu bukan tolok ukur perbandingan. Paseo menawarkan layanan suara lokal dan alternatif cloud yang dapat dikonfigurasi, tetapi pilihan penyedia saja tidak membuktikan kinerja di mobil Anda. Kebisingan jalan, ucapan lain, posisi mikrofon, dan model pengenalan yang dipilih semuanya perlu dievaluasi pada pengaturan sebenarnya. <a href=\"#source-t3-voice\">[1]</a> <a href=\"#source-moshi-voice\">[3]</a> <a href=\"#source-paseo-voice\">[5]</a>",
    "Mobile SSH menawarkan kontrol yang berguna untuk dievaluasi di Android: jalur audio ponsel mengaktifkan peredam bising dan pembatalan gema platform bila tersedia, dan host suara menyediakan penyaringan RNNoise opsional serta penyaring pembicara yang telah didaftarkan. Ini merupakan pilihan implementasi yang terverifikasi, bukan keunggulan yang terverifikasi. Perlindungan masukan mati secara bawaan, memerlukan pengaturan, dan dapat menolak pembicara yang diinginkan atau menerima ucapan yang tidak diinginkan. Dokumentasinya secara tegas menyatakan bahwa pemeriksaan sintetis yang dicatat tidak mengukur akurasi manusia yang memakai headset atau akurasi dalam kebisingan mobil. <a href=\"#source-mobile-noise\">[10]</a>",
    "Untuk jalur pengenalan pada server Mobile SSH Android, kontrol headset yang didokumentasikan dapat memulai atau melanjutkan percakapan yang dikonfigurasi serta mengendalikan sesi aktif di latar belakang, dengan mengikuti perutean Android dan prioritas aplikasi lain. Ini relevan untuk mengurangi interaksi layar. Tetap perlu diuji dengan ponsel dan headset Anda saat parkir; ini bukan jaminan tentang tombol setir, kata pemicu, atau semua mobil. Jika percakapan menuntut koreksi atau perhatian, jeda percakapannya. <a href=\"#source-mobile-headset\">[9]</a>",
    "Tiba dengan sesuatu yang layak ditinjau",
    "Hasil yang berguna adalah draf dan perubahan kecil yang mudah diperiksa, menunggu ketika perjalanan berakhir. T3 Code dan Moshi menawarkan cara berbeda untuk mengucapkan instruksi dalam alur pemrograman yang sudah ada. Paseo menawarkan alternatif percakapan yang terdokumentasi. Mobile SSH sangat layak dievaluasi oleh pengguna Android yang menginginkan suara bersama terminal SSH dan sesi multiplexer yang sudah ada, kemudian alat terminal dan berkas lengkap untuk peninjauan. Penilaian itu mengikuti kemampuan, bukan perlombaan menghadapi kebisingan yang belum kami lakukan.",
    "Keempatnya layak masuk dalam perbandingan. Pilih interaksi yang sesuai dengan perangkat dan pekerjaan Anda, buat permintaan yang spesifik, dan berikan perhatian pada jalan. Draf bisa menunggu. Diff akhir layak mendapat perhatian Anda."
  ],
  "comparison": {
    "heading": "Apa yang wajar diminta dari tiap produk dalam perjalanan bayangan ini",
    "productHeading": "Produk",
    "voiceHeading": "Jalur suara terverifikasi",
    "fitHeading": "Kegunaan dan batasan",
    "rows": [
      {
        "id": "t3",
        "voice": "Perangkat iOS yang didukung: dikte ke draf; pengiriman terpisah.",
        "fit": "Pengeditan oleh agen dan tindakan Git seluler; dialog lisan berkelanjutan belum terbukti."
      },
      {
        "id": "moshi",
        "voice": "Dikte ke terminal atau kotak pesan; Enter opsional.",
        "fit": "Gunakan agen terminal yang sudah ada; suara yang didokumentasikan bersifat satu arah."
      },
      {
        "id": "mobile",
        "voice": "Percakapan Live eksperimental di Android dan kendali terminal dengan izin eksplisit.",
        "fit": "Target SSH dan multiplexer yang sudah ada; asisten iOS baru hanya bisa membaca dan memerlukan Kirim."
      },
      {
        "id": "paseo",
        "voice": "Dikte ditambah pengenalan ucapan dan jawaban lisan dalam mode suara.",
        "fit": "Kendali agen melalui percakapan; perilaku audio latar belakang bergantung pada platform dan build."
      }
    ],
    "note": "Dokumentasi dan kode sumber membuktikan mekanisme, bukan keberhasilan menyelesaikan skenario ini. Belum ada kinerja perbandingan dalam kebisingan jalan yang terbukti untuk satu pun dari keempatnya."
  },
  "sources": {
    "heading": "Sumber untuk perbandingan ini",
    "t3Voice": "T3 Code: masukan suara dan batas pengiriman dari draf",
    "t3Ios": "T3 Code: ketersediaan suara di iOS",
    "t3Git": "T3 Code: pemilihan berkas untuk commit dari perangkat seluler",
    "t3Stage": "T3 Code: staging berkas yang dipilih pada server",
    "moshiVoice": "Moshi: mesin suara, masukan terminal, dan perilaku kotak pesan",
    "moshiConversation": "Moshi: penjelasannya tentang dikte dibandingkan percakapan",
    "paseoVoice": "paseo.sh: dikte dan percakapan suara",
    "paseoWork": "paseo.sh: alur pengembangan repositori",
    "paseoBackground": "Paseo: siklus hidup audio Android pada v0.11.2",
    "mobileVoice": "Mobile SSH: kontrol suara Android serta alur terminal dan berkas biasa",
    "mobileHeadset": "Mobile SSH: kontrol headset dan batasannya",
    "mobileNoise": "Mobile SSH: perlindungan masukan opsional dan implementasi audio",
    "mobileAudio": "Mobile SSH: pemrosesan audio platform",
    "mobileIos": "Mobile SSH: implementasi suara iOS dan batasan build privat",
    "mobileCar": "Mobile SSH: adaptor Android Auto khusus pengembangan",
    "mobileAudit": "Referensi Mobile SSH mencatat peninjauan kami atas repositori privat Android dan iOS pada revisi yang ditampilkan. Ini adalah temuan dari kode sumber, bukan konfirmasi rilis publik atau hasil pengujian di dalam mobil."
  },
  "cta": {
    "heading": "Dekatkan percakapan dengan pekerjaan.",
    "body": "Jelajahi alur kerja Mobile SSH yang didokumentasikan dan periksa kemampuan platform serta build Anda sebelum menyiapkan sesi suara.",
    "docsLink": "Baca dokumentasi",
    "featuresLink": "Periksa fitur platform"
  }
});
