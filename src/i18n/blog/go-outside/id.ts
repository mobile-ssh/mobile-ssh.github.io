import { defineGoOutside } from "./define";

export const id = defineGoOutside({
  metaTitle: "Pergilah keluar. Agennya tetap bekerja. | Mobile SSH",
  metaDescription:
    "Agen coding Anda berjalan di server Anda, bukan di ponsel. Jalankan di bawah tmux, melangkahlah keluar, dan biarkan peringatan menemukan Anda saat pekerjaan itu benar-benar butuh manusia.",
  back: "Blog",
  eyebrow: "Catatan lapangan",
  title: "Pergilah keluar. Agennya tetap bekerja.",
  standfirst:
    "Ponsel tidak pernah menjadi hal yang membuat agen Anda tetap hidup. Servernyalah. Begitu Anda memercayai itu, satu sore di luar ruangan tidak menelan biaya apa pun — Anda pergi, pekerjaan berlanjut, dan satu-satunya yang mengganggu Anda adalah pertanyaan yang memang butuh dijawab.",
  author: "Dewan Redaksi Mobile SSH",
  date: "7 September 2026",
  readingTime: "Baca 7 mnt",

  board: {
    ariaLabel:
      "Papan kondisi yang membaca empat sesi berjalan seperti titik ombak: tiga bekerja stabil dan satu, bernama claude, menunggu seseorang.",
    heading: "KONDISI",
    timeLabel: "06:14 HST",
    breakHeading: "Titik ombak",
    swellHeading: "Tinggi ombak",
    stateHeading: "Keadaan",
    rows: [
      { name: "api-prod", swell: "2-3 ft", state: "naik", needsYou: false },
      { name: "nightly-tests", swell: "6-8 ft", state: "stabil", needsYou: false },
      { name: "claude", swell: "10+ ft", state: "butuh Anda", needsYou: true },
      { name: "web-api", swell: "1-2 ft", state: "stabil", needsYou: false }
    ],
    statusLine: "4 sesi · 1 menunggu · pemeriksaan terakhir 06:14",
    caption:
      "Empat sesi di mesin milik Anda sendiri. Tiga di antaranya tidak peduli Anda sedang berada di mana. Yang keempat adalah satu-satunya alasan untuk mengeluarkan ponsel dari saku."
  },

  body: [
    `Pekerjaan berakhir entah build-nya sudah selesai atau belum. <em>Pau hana</em> — akhir hari kerja — datang menurut jadwalnya sendiri, dan jawaban yang biasa adalah mengabaikannya: laptop dibiarkan terbuka di meja, mata setengah mengawasi bilah kemajuan, dan malam Anda diserahkan kepada proses yang sama sekali tidak membutuhkan Anda.`,
    `Pertukaran itu hanya masuk akal jika pekerjaannya berlangsung di mesin yang Anda bawa. Biasanya tidak. Agen adalah sebuah proses di server, mengedit berkas pada disk server itu, menjalankan pengujian server itu. Ponsel Anda hanyalah jendela ke sana. Tutup jendelanya, ruangannya tetap ada.`,
    `Server adalah lapisan yang bertahan`,
    `Jalankan Claude Code atau Codex di dalam <code>tmux</code>, <code>herdr</code>, atau Zellij dan sesinya menjadi milik server, bukan milik koneksi Anda. Turun ke satu bar sinyal, masuk ke gua lava, simpan ponsel selama dua jam — agen tetap membaca, mengedit, dan menjalankan pengujian, karena tidak ada satu pun bagiannya yang pernah terikat pada Anda.`,
    `Inilah seluruh triknya, dan layak disebut dengan tepat, karena mudah sekali memuji komponen yang keliru. Bukan aplikasi yang menahan proses itu tetap hidup, melainkan multiplexer di ujung sana. Tugas Mobile SSH adalah pergi lalu kembali dengan rapi.`,
    `Anda bukan catu dayanya. Berhentilah bersikap seolah begitu.`,
    `Periksa sesekali, jangan menunggui`,
    `Agen yang berjalan satu jam hanya membutuhkan manusia sekitar sembilan puluh detik saja. Masalahnya tidak pernah terletak pada menunggu; masalahnya adalah tidak tahu <em>kapan</em> sembilan puluh detik itu tiba, dan itulah yang membuat orang terus menatap layar yang tidak punya apa pun untuk dikatakan.`,
    `Agent Alerts menjawab hal itu. Deteksinya sengaja dibuat sederhana dan justru karena itu bisa dipercaya: bel terminal, notifikasi <code>OSC 9</code> atau <code>OSC 777</code>, serta hook agen yang Anda pasang sekali di server. Ia tidak membaca keluaran Anda lalu menebak maksudnya, dan tidak ada tombol sensitivitas untuk disetel — ia melaporkan apa yang benar-benar diumumkan oleh program di ujung sana.`,
    `Jadi ponsel tetap di saku sampai benar-benar ada pertanyaan. Lalu ia bergetar, Anda membaca promptnya, mengetuk jawaban, dan menyimpannya kembali. Hanya itu seluruh interaksinya, dan itu berfungsi dari pantai, dari awal jalur pendakian, atau dari antrean es serut.`,
    `Yang tidak bisa diperbaiki oleh pulau ini`,
    `Dua batasan yang jujur, karena tulisan yang hanya mendaftar kelebihan itu namanya iklan.`,
    `Perbedaan platform ini nyata dan layak diperhitungkan. Di Android, sebuah foreground service menahan koneksi selama aplikasi berada di latar belakang — notifikasi yang menetap itu <em>adalah</em> sesinya. iOS sama sekali tidak punya eksekusi di latar belakang; ia menyambung ulang dan menempel kembali ke multiplexer Anda saat Anda kembali. Bagaimanapun juga, agen di server tidak pernah berhenti, dan itulah intinya. Hanya jendelanya yang tertutup.`,
    `Aloha bukan alasan untuk ceroboh`,
    `Pergi dengan baik adalah disiplin kecil. Apa pun yang tidak ingin Anda biarkan berjalan tanpa pengawasan selama dua jam sebaiknya jangan dimulai tepat saat Anda melangkah keluar pintu — agen yang sedang di tengah migrasi tidak menjadi lebih baik karena jarak. Berikan tugas dengan titik henti yang wajar, minta ia memeriksa sebelum mengedit, dan biarkan diff menjadi hal yang Anda tinjau ketika pulang.`,
    `Dan perlakukan notifikasi dengan kehati-hatian yang sama seperti pager. Kalau semuanya memicu peringatan, tidak ada satu pun yang berarti. Hook itu menyala pada keadaan yang memang layak mengganggu seseorang; biarkan tetap begitu dan getarannya akan tetap bermakna.`,
    `Build tidak butuh penonton. Pergilah, dan beradalah di suatu tempat.`
  ],

  checklist: {
    heading: "Sebelum Anda melangkah keluar",
    steps: [
      {
        heading: "Jalankan di bawah multiplexer",
        body: "Jalankan agen di dalam <code>tmux</code>, <code>herdr</code>, atau Zellij agar sesinya bertahan melewati koneksi Anda, bukan bergantung padanya."
      },
      {
        heading: "Pasang hook agen",
        body: "Sekali saja per server, dari dalam aplikasi. Ini skrip shell kecil yang bisa dipanggil agen mana pun — bukan integrasi vendor, dan tidak terikat pada satu CLI."
      },
      {
        heading: "Buktikan satu peringatan benar-benar tiba",
        body: "Picu sebuah prompt dan pastikan ponsel bergetar sebelum Anda mengandalkannya. Peringatan yang belum pernah Anda lihat bekerja bukanlah rencana."
      },
      {
        heading: "Beri titik henti",
        body: "Tugas yang berakhir di tempat masuk akal lebih baik daripada tugas terbuka, karena Anda memang memilih untuk tidak menungguinya."
      }
    ],
    promptLabel: "Tugas yang layak ditinggal sendiri",
    prompt:
      "Baca AGENTS.md, lalu perbaiki pengujian handler yang gagal. Periksa diff sebelum mengedit, jalankan pengujian terfokus, dan berhenti setelah semuanya lulus — jangan commit."
  },

  truth: {
    heading: "Yang bertahan saat Anda pergi",
    itemHeading: "Ketika ponsel masuk ke saku",
    resultHeading: "Tetap jalan?",
    yes: "Ya",
    no: "Tidak",
    rows: [
      { item: "Proses agen di server", value: "Dimiliki tmux, herdr, atau Zellij", survives: true },
      { item: "Berkas, diff, dan keluaran pengujian", value: "Ada di disk server", survives: true },
      { item: "Posisi Anda dalam sesi", value: "Ditempelkan kembali saat Anda kembali", survives: true },
      { item: "Koneksi, di Android", value: "Ditahan oleh foreground service", survives: true },
      { item: "Koneksi, di iOS", value: "Tanpa eksekusi latar belakang — ia menyambung ulang", survives: false },
      { item: "Peringatan tanpa sinyal untuk mengirimkannya", value: "Tiba saat ponsel terjangkau lagi", survives: false }
    ],
    note: "Agen tetap berjalan di setiap baris. Yang berbeda hanyalah apakah ponsel Anda masih menahan jendelanya tetap terbuka."
  },

  cta: {
    ariaLabel: "Dapatkan Mobile SSH",
    heading: "Tinggalkan laptopnya. Bawa terminalnya.",
    body: "Terhubung langsung ke mesin Anda sendiri, jalankan agen apa pun yang Anda suka di dalam tmux, herdr, atau Zellij, dan biarkan Agent Alerts memberi tahu saat pekerjaan itu butuh manusia — lengkap dengan SFTP, tunnel, dan terminal sungguhan dalam satu aplikasi.",
    tags: ["Agen apa pun", "SSH langsung", "Agent Alerts", "Apache-2.0"],
    playButton: "Ikut serta di Google Play",
    iosButton: "Gabung beta iOS",
    note: `Android sedang dalam pengujian tertutup: ikut serta dengan akun Google yang akan Anda pakai menguji, lalu buka
tautan pendaftaran di peramban seluler. Sudah ikut serta? Buka langsung <a href="{playUrl}" rel="noopener">halaman Play</a>.`
  }
});
