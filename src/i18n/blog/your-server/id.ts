import { defineYourServer } from "./define";

export const id = defineYourServer({
  "metaTitle": "Agen Anda. Server Anda. Aturan Anda. | Mobile SSH",
  "metaDescription": "Pilih tempat agen pemrograman Anda berjalan: ruang kerja terkelola, akun awan sendiri, atau perangkat keras milik Anda. Tetap kendalikan akses, cadangan, dan cara berpindah.",
  "back": "Blog",
  "eyebrow": "Kepemilikan",
  "title": "Agen Anda. Server Anda. Aturan Anda.",
  "standfirst": "Ruang kerja agen yang siap pakai menghemat waktu penyiapan. Sebelum menyerahkan repositori, tentukan siapa yang harus memegang mesin, kredensial, dan jalan keluarnya. Mobile SSH memungkinkan Anda membawa host sendiri, dari komputer di bawah meja hingga mesin virtual di akun awan Anda.",
  "author": "Dewan Redaksi Mobile SSH",
  "date": "5 Oktober 2026",
  "readingTime": "7 menit baca",
  "figure": {
    "heading": "Pilih host. Periksa jalur ke model.",
    "phone": "Ponsel Anda · Mobile SSH",
    "connection": "SSH ke host pilihan Anda",
    "hosts": [
      {
        "id": "owned",
        "title": "Mesin fisik Anda",
        "detail": "Di rumah, kantor, atau ruang server sendiri"
      },
      {
        "id": "cloud",
        "title": "Mesin virtual di akun awan Anda",
        "detail": "Anda mengelola sistem tamu; penyedia mengoperasikan perangkat keras"
      }
    ],
    "workspace": "Berkas, alat, dan proses agen berada pada host yang dipilih",
    "modelConnection": "Jika memakai model awan, instruksi dan konteks terpilih meninggalkan host",
    "model": "Layanan model pilihan Anda",
    "caption": "Tiga keputusan terpisah: cara terhubung, tempat kode berjalan, dan tempat model memprosesnya. Menguasai dua yang pertama tidak menjadikan yang ketiga lokal."
  },
  "body": [
    "Tawarannya menarik: buka ruang kerja dan temukan Codex, Claude Code, atau Gemini CLI sudah siap. Tak perlu menyiapkan mesin atau memasang paket. Hubungkan repositori, jelaskan tugas, lalu biarkan mesin virtual di awan bekerja. Untuk eksperimen atau proyek sekali pakai, kemudahan itu mungkin tepat seperti yang Anda inginkan.",
    "Lalu eksperimen itu menjadi ruang kerja sehari-hari. Kode privat masuk. Begitu pula data pengujian, dokumentasi internal, dan kredensial apa pun yang Anda berikan. Sebelum penyerahan itu menjadi kebiasaan, ajukan pertanyaan yang lebih mendasar: siapa yang mengendalikan tempat pekerjaan ini berada?",
    "Ruang kerja siap pakai memiliki operator",
    "Dalam lingkungan agen yang dikelola penyedia, pihak lain mengoperasikan host eksekusinya. Repositori Anda mungkin dikloning di sana, data diunggah, dan izin diberikan untuk menjangkau sistem lain. Isolasi, akses administrator, retensi, dan pilihan ekspor bergantung pada layanan tersebut. Alat yang sudah terpasang menunjukkan seberapa cepat Anda bisa mulai; itu tidak banyak menjelaskan pengaturan tadi.",
    "Pilihan itu dapat Anda ambil dengan sadar. Lingkungan terkelola dapat mengurangi pemeliharaan dan menyediakan isolasi yang berguna. Baca apa yang terjadi pada disk ruang kerja, transkrip, snapshot, dan kredensial, termasuk setelah sesi berakhir atau akun ditutup. Anda tidak perlu menduga niat buruk untuk menginginkan jawaban jelas tentang pekerjaan privat.",
    "Simpan kuncinya. Simpan cadangan. Pertahankan kemampuan untuk pergi.",
    "Tiga tempat untuk menjalankan agen yang sama",
    "Mesin virtual di akun awan sendiri memberikan pembagian lain. Anda memilih sistem operasi tamu, memasang alat, memberikan akses, dan mengelola siklus hidup instans. Perusahaan awan tetap mengoperasikan infrastruktur fisiknya. Menyebutnya server Anda menjelaskan kendali administratif, bukan kepemilikan perangkat keras di bawahnya. <a href=\"#source-cloud\">[1]</a>",
    "Mesin fisik milik sendiri melangkah lebih jauh: Anda memilih perangkat keras dan menentukan tempatnya. Komputer yang sudah ada, server rumah kecil, atau mesin kantor dapat menampung ruang kerja. Anda juga mewarisi pekerjaan praktisnya: listrik, konektivitas, perbaikan, pembaruan, dan pemulihan. Kepemilikan memberi Anda keputusan untuk diambil; kepemilikan tidak mengambilnya untuk Anda.",
    "Bawa server Anda ke ponsel",
    "Mobile SSH bekerja dengan kedua pilihan yang Anda operasikan sendiri. Hubungkan ke host SSH yang dapat dijangkau di jaringan lokal, melalui jalur jaringan yang Anda atur, atau di akun awan Anda. Sesi SSH biasa tidak memerlukan perantara sesi yang dioperasikan Mobile SSH ataupun akun Mobile SSH. Anda memilih tujuan dan menyediakan kredensialnya.",
    "Pasang agen pilihan Anda pada host itu. Buka direktori kerjanya, jalankan Codex, Claude Code, atau Gemini CLI, lalu gunakan terminal yang sudah Anda pahami. Anda dapat mempertahankan sesi di tmux, herdr, atau Zellij dan kembali dari ponsel selama host dan prosesnya tetap berjalan. Pekerjaan itu melekat pada lingkungan tersebut; mengganti ponsel tidak mengharuskan pemindahan repositori.",
    "Dengan begitu, pilihan penting tetap di tangan Anda. Simpan data pengujian sensitif di mesin lokal. Gunakan mesin virtual awan jika sumber dayanya sesuai dengan tugas. Ganti agen tanpa membangun ulang alur kerja seluler. Mobile SSH menyediakan akses terminal, SFTP, dan terowongan; aplikasi ini tidak mengharuskan Anda menyewa ruang kerja agen tertentu.",
    "Server dan model Anda adalah pilihan terpisah",
    "Perbedaan ini paling penting saat membahas data privat. Menjalankan agen pada perangkat keras sendiri belum tentu menjalankan modelnya di sana. Agen yang memakai layanan awan dapat mengirim instruksi, konteks repositori terpilih, dan hasil alat ke layanan model. Proses agen dan pohon kerja dapat tetap di server Anda sementara inferensi berlangsung di tempat lain. <a href=\"#source-claude\">[2]</a> <a href=\"#source-gemini\">[3]</a>",
    "SSH mengenkripsi koneksi antara ponsel dan titik tujuannya. SSH tidak mencegah perangkat lunak pada host membaca berkas yang diizinkan atau membuat permintaan jaringan sendiri. Tentukan layanan model yang dipakai agen, apa yang boleh dibacanya, serta alat atau integrasi mana yang boleh mengirim data keluar. Periksa kebijakan untuk akun dan konfigurasi yang benar-benar Anda gunakan.",
    "Jika pekerjaan membutuhkan inferensi lokal, pilih susunan agen dan model yang kompatibel dan verifikasi perilaku jaringannya. Jangan menganggap kata lokal pada pemasang sebagai jaminan. Analitik opsional dan unduhan plugin Mobile SSH juga memiliki aliran data sendiri; pengaturan dan kebijakan privasi aplikasi menjelaskannya.",
    "Jadikan kendali sesuatu yang dapat Anda gunakan",
    "Kata sandi root baru permulaan. Kendali praktis berarti Anda dapat membatasi akses, pulih dari kesalahan, memeriksa perubahan, dan memindahkan ruang kerja tanpa meminta platform agen menjaganya untuk Anda. Berikan perhatian yang sama pada kemampuan tersebut seperti pada pemilihan model.",
    "Semua ini tidak otomatis membuat server rumah lebih aman daripada layanan terkelola. Mesin yang terabaikan dengan kredensial berizin luas bisa menjadi tempat buruk bagi data privat. Pilih tingkat tanggung jawab yang mampu Anda pertahankan. Keuntungannya adalah kemampuan membuat pilihan itu, memeriksanya, dan mengubahnya ketika kebutuhan berubah.",
    "Miliki mesinnya jika memungkinkan. Tetap kendalikan ruang kerja di mana pun ia berjalan.",
    "Lain kali ruang kerja agen siap pakai meminta repositori Anda, luangkan waktu sebelum menghubungkannya. Tentukan tempat berkas harus berada, siapa yang harus mengelola host, dan bagaimana Anda akan membawa pekerjaan itu. Lalu ambil ponsel. Mobile SSH dapat menghubungkan Anda ke server yang Anda pilih."
  ],
  "comparison": {
    "heading": "Siapa mengendalikan apa?",
    "dimension": "Keputusan",
    "models": [
      {
        "id": "managed",
        "title": "Ruang kerja agen terkelola"
      },
      {
        "id": "cloud",
        "title": "Mesin virtual di akun awan Anda"
      },
      {
        "id": "owned",
        "title": "Perangkat keras milik Anda"
      }
    ],
    "rows": [
      {
        "id": "hardware",
        "label": "Perangkat keras fisik",
        "managed": "Penyedia layanan atau infrastruktur",
        "cloud": "Penyedia awan",
        "owned": "Anda memiliki mesin"
      },
      {
        "id": "admin",
        "label": "Kendali administratif",
        "managed": "Ditentukan oleh layanan",
        "cloud": "Anda mengelola sistem operasi tamu",
        "owned": "Anda mengelola host"
      },
      {
        "id": "storage",
        "label": "Ruang kerja dan penyimpanan",
        "managed": "Disk dan retensi dikelola layanan",
        "cloud": "Volume dan siklus hidup yang Anda atur",
        "owned": "Penyimpanan yang Anda pilih dan pelihara"
      },
      {
        "id": "access",
        "label": "Kredensial dan kebijakan jaringan",
        "managed": "Kendali layanan serta izin yang Anda berikan",
        "cloud": "Konfigurasi sistem, identitas, dan jaringan Anda",
        "owned": "Konfigurasi sistem, identitas, dan jaringan Anda"
      },
      {
        "id": "portability",
        "label": "Cadangan dan jalan keluar",
        "managed": "Periksa pilihan ekspor dan penghapusan",
        "cloud": "Kelola salinan di luar instans",
        "owned": "Kelola salinan di luar mesin"
      },
      {
        "id": "maintenance",
        "label": "Pekerjaan operasional",
        "managed": "Penyedia menjalankan lingkungan; Anda mengatur penggunaannya",
        "cloud": "Anda memelihara sistem tamu; penyedia memelihara infrastruktur",
        "owned": "Anda memelihara perangkat keras, sistem operasi, dan konektivitas"
      }
    ],
    "note": "Ini pengaturan umum, bukan jaminan untuk setiap layanan. Pada setiap kolom, aliran data ke penyedia model bergantung pada agen dan konfigurasi yang Anda pilih."
  },
  "checklist": {
    "heading": "Enam cara mempertahankan kendali",
    "steps": [
      {
        "heading": "Beri kredensial tugas kecil",
        "body": "Gunakan kredensial terpisah yang dapat dicabut untuk ruang kerja. Berikan hanya izin repositori dan layanan yang dibutuhkan tugas."
      },
      {
        "heading": "Batasi ruang kerja",
        "body": "Jika memungkinkan, jalankan agen sebagai pengguna khusus tanpa hak istimewa. Jauhkan berkas privat yang tidak terkait dan rahasia produksi dari jangkauannya."
      },
      {
        "heading": "Verifikasi tujuan SSH",
        "body": "Periksa sidik jari host yang belum dikenal melalui saluran tepercaya. Selidiki kunci yang berubah sebelum mengganti identitas tersimpan."
      },
      {
        "heading": "Simpan cadangan independen",
        "body": "Simpan salinan terenkripsi pada akun yang Anda kendalikan, terpisah dari host kerja. Uji pemulihan, termasuk pekerjaan yang belum di-commit dan perlu dipertahankan."
      },
      {
        "heading": "Tinjau apa yang meninggalkan host",
        "body": "Periksa titik tujuan model, plugin, alat eksternal, dan pengaturan telemetri. Bagikan konteks minimum yang diperlukan dan tinjau perubahan hasilnya."
      },
      {
        "heading": "Latih perpindahan",
        "body": "Pulihkan ruang kerja pada host lain, hubungkan kembali, dan jalankan pengujiannya. Kemampuan untuk pergi seharusnya sudah pernah Anda coba."
      }
    ]
  },
  "sources": {
    "heading": "Sumber dan batasan",
    "aws": "AWS: tanggung jawab bersama atas infrastruktur awan dan sistem tamu",
    "anthropic": "Claude Code: eksekusi lokal, koneksi awan, dan penggunaan data",
    "google": "Gemini CLI: layanan model dan pemberitahuan privasi yang berlaku",
    "checked": "Dokumentasi sumber diperiksa pada 5 Oktober 2026. Ketentuan akun dan kemampuan layanan dapat berubah."
  },
  "cta": {
    "heading": "Hubungkan ke server pilihan Anda.",
    "body": "Gunakan Mobile SSH di Android atau iOS untuk menjangkau mesin sendiri, menjalankan alat Anda, dan menjaga ruang kerja tetap mudah diakses.",
    "playButton": "Dapatkan di Google Play",
    "iosButton": "Ikuti beta iOS",
    "docsLink": "Siapkan koneksi pertama Anda",
    "privacyLink": "Baca kebijakan privasi"
  }
});
