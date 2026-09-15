---
layout: ../../../layouts/DocLayout.astro
title: "Terminal"
description: "Kontrol terminal Mobile SSH, papan ketik, pengelola tmux, herdr dan Zellij, peringatan agen, papan klip, gambar dan desktop jarak jauh."
---

# Terminal

Terminal Mobile SSH dibuat untuk operasi di ponsel dan tablet. Ia menggabungkan kanvas terminal, baris tombol tambahan, panel multi-sesi, penanganan gulir, dan perilaku penyambungan ulang.

## Dasar terminal

- Terminal memakai perilaku gaya xterm dengan dukungan warna dan penanganan tombol kursor.
- Buffer scrollback menyimpan 5.000 baris secara bawaan, dan dapat disetel ke 1.000, 10.000, atau 50.000 di Settings.
- Ketuk panel untuk memilihnya sebelum mengetik.
- Cubit panel terminal untuk mengubah ukuran teks. Mobile SSH mengubah ukuran PTY jarak jauh setelah gerakan berhenti.
- Ketuk dua kali panel (atau gunakan kontrol perluasnya) untuk masuk mode layar penuh. Gunakan Kembali di Android, atau kontrol ciutkan di iOS, untuk kembali ke kisi.

## Kisi multi-sesi

Mobile SSH dapat menjalankan hingga delapan sesi SSH sekaligus. Setiap sesi tampil sebagai panel di kisi terminal. Ketuk panel untuk memilihnya, atau gunakan **+ Add Session** untuk memulai koneksi lain.

Header panel menyebutkan di mana Anda berada. Di Android ia menampilkan direktori kerja sebenarnya dari panel itu, ditanyakan ke tmux atau dilaporkan shell melalui OSC 7 dan disegarkan selama aplikasi terbuka; di iOS ia menampilkan judul yang disetel sisi jarak jauh, dengan cadangan `user@host:port`.

Menutup panel memutus sesi SSH itu. Kembali ke beranda tetap menyediakan koneksi melalui **Sesi aktif**. Header menandai koneksi macet; Pengaturan menawarkan laju transfer serta peredupan atau getaran opsional saat koneksi tidak merespons.

## Eternal Terminal (ET)

Kedua platform menawarkan transportasi berikut pada pilihan **Transportasi** saat menambah atau menyunting server:

- **SSH** -- koneksi SSH standar (bawaan).
- **Eternal Terminal** -- sesi ET yang bertahan saat koneksi jaringan terputus, perangkat tidur, dan alamat IP berubah, tanpa memulai ulang shell Anda.

ET menjaga sesi tetap hidup di server, jadi saat ponsel Anda berganti jaringan atau bangun dari tidur, Mobile SSH menyambungkan diri kembali ke shell yang sama alih-alih membuka yang baru. Ini cocok untuk data seluler, perpindahan Wi-Fi/seluler, dan perintah yang berjalan lama.

ET memerlukan `etserver` pada host. Jika belum ada, Mobile SSH dapat menawarkan pemasangan dan menjalankannya melalui SSH. Tinjau dan setujui perintahnya, lalu hubungkan dengan **Eternal Terminal**. Rute melalui host perantara memerlukan transportasi **SSH**.

## Baris tombol tambahan

Kedua platform menaruh satu baris berisi tiga belas tombol terminal dalam jangkauan — tombol-tombol yang canggung atau tidak ada pada keyboard sentuh. Di Android ia berupa strip di bagian bawah sesi (yang menyembunyikan diri saat keyboard hardware terpasang); di iOS ia berada di atas keyboard perangkat lunak.

Kedua set bawaan berukuran sama tetapi tidak identik:

| | Android | iOS |
|---|---|---|
| Bawaan | `ESC` `TAB` `CTRL` panah `HOME` `PGUP` `END` `PGDN` `⌫` `⌨` | `ESC` `TAB` `CTRL` `⇧` panah `HOME` `END` `PGUP` `PGDN` `⌨` |
| Perbedaan | punya tombol hapus mundur, tanpa Shift | punya Shift lengket, tanpa tombol hapus mundur |

**Baris ini tidak pernah digulir.** Saat tombol-tombolnya tidak lagi muat selebar layar, mereka membagi ruang secara merata dan membungkus ke baris kedua; sisanya yang masih tertinggal dilipat ke menu luapan `⋯`. Tidak ada yang tersembunyi di balik gesekan atau terpotong di tepi layar, dan pengubah yang sedang aktif tetap berlaku pada tombol yang Anda pilih dari menu luapan.

`CTRL` bertindak sebagai pengubah lengket: ketuk `CTRL`, lalu ketik `C` untuk mengirim Ctrl-C. `Shift` lebih lengket di iOS daripada di Android — di iOS ia juga membuat huruf berikutnya yang Anda ketik pada keyboard perangkat lunak menjadi kapital, sedangkan di Android ia hanya berlaku untuk tombol milik baris itu sendiri (`Shift`+`Tab`, `Shift`+panah).

Tahan sebuah tombol seperti panah atau `PGDN` dan ia akan berulang.

## Perilaku keyboard

Di Android, ketikan biasa langsung dikirim ke shell jarak jauh dengan koreksi otomatis dan saran prediktif nonaktif secara bawaan. Dikte suara tetap dapat mengirim teks melalui papan ketik.

Di iOS, **Pengaturan → Terminal → Dikte dan saran** aktif secara bawaan untuk dikte, prediksi dan koreksi saat menyusun baris. Untuk mengirim tombol langsung, nonaktifkan pilihan ini, biarkan **Saran papan ketik** nonaktif dan buka panel baru.

**Tampilkan papan ketik saat diketuk** menentukan apakah ketukan membuka papan ketik layar. Bawaannya nonaktif di Android dan aktif di iOS; tombol papan ketik tetap tersedia di bilah alat.

## Keyboard hardware

Keyboard eksternal dan Bluetooth menggerakkan terminal secara langsung baik di Android maupun iOS. Selain karakter biasa, Mobile SSH memetakan tombol panah, `Home`/`End`, `PgUp`/`PgDn`, `Insert`, `Delete`, `Esc`, tombol fungsi `F1`–`F12`, kord `Ctrl`+tombol dan `Alt`/`Option`-sebagai-Meta, serta `Shift`+`Tab`. Tombol pengubah dapat digabung dengan pengubah lengket pada baris tombol tambahan.

## Menempel

Menempel ke program yang memintanya (bash, Vim, dan aplikasi bracketed-paste lain) dibungkus dengan penanda bracketed-paste, sehingga konten clipboard multi-baris disisipkan sebagai teks alih-alih dieksekusi otomatis baris demi baris. Hanya tempel sungguhan yang dibungkus; teks yang diketik dan didiktekan tidak diubah.

## Pilih, salin, bagikan

Tekan lama kata di terminal, lalu geser gagang untuk menyesuaikan pilihan. Bilah pilihan mencakup:

- **Copy** — menaruh teks terpilih ke clipboard sistem. Pemilihan tetap tersorot setelahnya, sehingga Anda dapat membagikannya, menyalin ulang, atau memperluasnya.
- **Share** — meneruskan teks terpilih ke lembar berbagi sistem (surel, catatan, perpesanan, dll.).
- **Select all** — memperluas pemilihan ke seluruh buffer terminal yang terlihat, lalu Copy atau Share.
- **Tempel**: masukkan teks papan klip ke terminal.

## Cari di terminal

Telusuri seluruh buffer terminal — scrollback dan layar yang terlihat — dan lompat antar kecocokan. Buka pencarian dari kontrol terminal, ketik kueri, dan telusuri hasil satu per satu. Ini berfungsi baik di Android maupun iOS.

## Warna, huruf miring, dan clipboard jarak jauh

- Terminal menampilkan **warna sejati 24-bit** dan **huruf miring**, sehingga prompt bertema, penyorotan sintaks, dan TUI tampil seperti di desktop.
- **Papan klip OSC 52:** program jarak jauh dapat menyalin teks ke ponsel. Membaca papan klip ponsel memerlukan izin terpisah yang nonaktif secara bawaan.
- Baik di Android maupun iOS, karakter CJK lebar, emoji, dan karakter penggabung (klaster grafem dan zero-width joiner) diukur dan digambar dengan benar, dan **Nerd Font** bawaan menggambar glyph ikon powerline, starship, devicon, dan Material Design yang jika tidak akan ditampilkan sebagai kotak kosong oleh font sistem.

## Integrasi shell dan gambar inline

- **Integrasi shell (OSC 133):** saat shell Anda memancarkan penanda prompt OSC 133, Mobile SSH dapat melangkah antar prompt dan memberi peringatan saat perintah yang berjalan lama selesai. Berfungsi di Android dan iOS. Kedua aplikasi tidak menyuntikkan penandanya — shell Anda yang harus memancarkannya (hook `PROMPT_COMMAND`/`precmd`, atau starship). Di Android, navigasi prompt mati sampai Anda mengaktifkannya di **Settings → Shell integration**; di iOS menunya muncul sendiri begitu penanda mulai berdatangan.
- **Pilih keluaran:** sentuh di mana saja di dalam keluaran sebuah perintah dan pilih seluruh blok itu — galat build dari 300 baris yang lalu, bukan hanya perintah terakhir — lalu salin, bagikan, atau perluas.
- **Gambar sebaris:** program Kitty menampilkan gambar di terminal Android dan iOS. Ukurannya mengikuti sel dan baris sehingga bertahan saat diperbesar atau baris ditata ulang. Gambar juga tampil di aplikasi layar penuh dengan penempatan terpisah dari riwayat biasa.
- **Glif mosaik:** aplikasi menggambar blok, braille, sekstan dan oktan sendiri; `chafa`, `timg` dan seni ANSI pas pada kisi tanpa celah atau kotak kosong, apa pun fontnya.
- **Resolusi gambar:** pengaturan Gambar dapat melaporkan resolusi penuh, setengah atau sepertiga kepada program untuk mengurangi piksel yang dikirim melalui jaringan seluler.
- **Direktori kerja sebenarnya (Android):** header panel menampilkan di mana panel itu benar-benar berada, ditanyakan ke tmux atau dilaporkan shell melalui OSC 7, bukan apa pun yang kebetulan dicetak prompt terakhir.

## Tampilan dan tombol

Baik di Android maupun iOS, Settings memungkinkan Anda menyesuaikan terminal:

- **Font:** pilih font monospace sistem, JetBrains Mono, atau Source Code Pro.
- **Skema warna:** Default, Solarized Dark atau Light, Gruvbox, Dracula, atau Nord — diterapkan secara langsung ke panel yang terbuka.
- **Baris tombol tambahan:** tambah, hapus, susun ulang, dan sembunyikan tombol, tentukan tombol escape sequence Anda sendiri, dan reset ke bawaan, dengan pratinjau langsung yang memperlihatkan persis pembagian baris yang akan Anda dapatkan. Android menaruhnya di tab **Keys**; iOS di bawah **Extra keys → Customize keys**.
- **Tambah dari preset:** palet berisi sekitar 45 tombol dalam enam grup — `F1`–`F12`, kombinasi Ctrl seperti `^C` `^D` `^Z` `^R` `^L`, simbol seperti `|` `~` `/` `_` `:`, dan pengubah. `F1`–`F12` dikirim sebagai escape sequence biasa, jadi tidak perlu kord `FN`. Android juga menyediakan tombol 📎 **Attach a file** yang membuka pemilih berkas dan mengunggah ke sesi yang sedang berjalan; iOS menyediakan `INS`, `DEL`, dan tombol `FN` yang memunculkan baris angka.
- **Ukuran scrollback:** 1.000, 5.000, 10.000, atau 50.000 baris (5.000 secara bawaan). Berlaku untuk panel baru.
- **Ukuran teks:** sebuah penggeser, berdampingan dengan zoom cubit.
- **Tema:** Sistem, Terang, atau Gelap untuk seluruh aplikasi.

Reset mengembalikan bawaan yang dikirim bersama aplikasi alih-alih membekukan daftar hari ini, sehingga peningkatan pada rilis berikutnya tetap sampai kepada Anda. Perubahan diterapkan secara langsung ke panel yang sudah terbuka.

## Menggulir

Mobile SSH mengarahkan gerakan gulir berdasarkan status terminal:

- Pada keluaran shell biasa, menggesek menggulir buffer scrollback lokal.
- Pada aplikasi terminal mode mouse, menggulir mengirim escape sequence roda mouse.
- Pada aplikasi layar alternatif tanpa mode mouse, seperti banyak sesi tmux, menggulir masuk mode salin tmux dan mengirim perintah gulir per baris.

Di kedua platform, mengetuk program pelacak tetikus biasanya mengirim klik kiri. Di iOS, **Ketuk menempatkan kursor** menukarnya dengan gerakan kursor; Shift-ketuk menjalankan tindakan satunya. Masukan tetikus tekan-lalu-seret nonaktif secara bawaan sehingga gesekan biasa menggulir.

Jika Anda mengetik saat sedang menelusuri scrollback, Mobile SSH kembali ke tampilan terminal langsung.

## Perilaku tmux

Mobile SSH mengamati perintah tmux keluar untuk attach dan sesi baru, seperti:

```bash
tmux attach -t work
tmux a -t work
tmux new -A -s work
```

Saat koneksi terputus, aplikasi mengingat sesi tmux dan soketnya untuk kembali ke tujuan yang sama. Setiap panel pada host yang sama mempertahankan lampirannya sendiri. Jika sesi sudah hilang, shell tetap tersedia.

Di iOS, pergantian soket membaca prefiks tmux saat ini, bukan menganggap Ctrl+B. Prefiks tak didukung atau pencarian gagal menghentikan proses dengan pesan. Mengetik, menutup panel atau memutus koneksi membatalkan langkah pelampiran tertunda; program layar penuh yang belum dikenal tidak menerima perintah pelampiran.

## Pengelola tmux

Pengelola tmux memungkinkan penelusuran dan kontrol tanpa kombinasi prefiks. Buka dari kontrol multiplexer pada sesi terhubung; tekan lama untuk memilih tmux jika ada beberapa pengelola. Ada tiga bagian:

- **Sessions** -- setiap sesi tmux di server.
- **Windows** -- jendela dalam sesi yang dipilih.
- **Panes** -- panel dalam jendela yang dipilih.

Dari pengelola ini Anda dapat:

- **Attach** sebuah sesi ke terminal saat ini.
- **Create** sesi atau jendela baru, dan **rename** keduanya.
- **Split** sebuah panel secara horizontal atau vertikal, **zoom** sebuah panel, dan **kill** sesi, jendela, atau panel.
- **Urutkan** sesi menurut Terbaru (bawaan), nama atau tanggal pembuatan.

Ikon 🔔 menandai setiap sesi yang agennya sedang menunggu input, sehingga Anda dapat langsung melihat proses Claude Code atau Codex yang berhenti dan meng-attach ke sana. Ini melengkapi petunjuk reattach di atas: logika reattach memulihkan sesi terakhir Anda secara otomatis saat tersambung ulang, sementara pengelola memberi Anda kendali manual penuh.

Kedua platform mengelola beberapa server tmux (soket) pada host yang sama. Indikator pelampiran menunjukkan terminal yang Anda gunakan, bukan klien lain di server.

## Herdr dan Zellij

Android dan iOS juga mengelola Herdr dan Zellij. Satu kontrol membuka multiplexer utama yang terdeteksi; tekan lama untuk memilih yang lain. Hanya program yang ditemukan di server ditawarkan. Di dalam pengelola, judul server mengganti server dan pemilih multiplexer mengganti pengelola.

- **Herdr** menampilkan sesi, ruang kerja, tab dan panel beserta status agen. Pratinjau atau jawab dari daftar. Balasan tetap menuju panel dan sesi yang dipilih; **Kirim** mengirim teks dan **Hanya Enter** konfirmasi kosong. Fokus panel tepat tersedia jika didukung; jika tidak, gunakan Fokus pada tab induk. Herdr memberi status tanpa hook tambahan.
- **Zellij** menampilkan sesi, tab, dan panel dengan attach, ganti nama, kill, dan split. Sesi yang di-kill tetap terdaftar sehingga meng-attach akan menghidupkannya kembali, sedangkan delete melupakannya untuk selamanya. Detail tab dan panel memerlukan Zellij 0.44 atau lebih baru; pada versi lama halamannya menampilkan nama tab dan menjelaskan alasannya. Split memerlukan klien yang ter-attach ke sesi, dan halaman itu menjelaskannya alih-alih menawarkan tombol yang pasti gagal.

Jika herdr atau Zellij terpasang tetapi tidak ada di `PATH` shell login, halaman itu menawarkan untuk menambahkannya.

Setiap server memiliki **Lampirkan saat terhubung**: **Otomatis (deteksi)**, **Tidak ada**, **tmux**, **herdr** atau **Zellij**. Otomatis menggunakan deteksi dan riwayat: yang pernah dipakai, lalu yang memiliki sesi aktif, lalu yang terpasang. Tanpa deteksi tersimpan, shell biasa dibuka. Deteksi berikutnya hanya memengaruhi koneksi mendatang, bukan ketikan Anda saat ini.

## Agent alerts

Mobile SSH memberi tahu Anda saat agen pemrograman AI jarak jauh — Claude Code, Codex, Gemini — tertahan menunggu Anda. Ia tidak menebak dengan membaca keluaran terminal Anda. Ada dua jalur, dan keduanya bekerja pada tingkat detail yang berbeda.

### Bel

Bel terminal dapat memicu peringatan agen. Bel tepat setelah mengetik diabaikan secara bawaan. Notifikasi jarak jauh OSC 9/OSC 777 dan peringatan perintah selesai OSC 133 memiliki pengaturan tersendiri; keduanya nonaktif secara bawaan di iOS.

Ini tidak memerlukan penyiapan, tetapi aplikasi hanya tahu bahwa *sesuatu* berbunyi.

### Hook agen

Agar aplikasi tahu agen *mana* yang menunggu dan *apa* yang sedang dikerjakannya, pasang hook agen di server:

- **iOS:** Settings → **Agent alerts** → **Install Agent Hook**. Jika lebih dari satu server tersambung, ia menanyakan yang mana.
- **Android:** tekan lama header panel sebuah sesi dan pilih **Install agent hooks**.

Ini menulis skrip shell kecil ke `~/.mobile-ssh/agent-hook.sh` di server tersebut. Skrip ini tidak terikat agen tertentu — ia menerima argumen baris perintah alih-alih mengurai format milik satu vendor — sehingga apa pun yang bisa menjalankan perintah dapat melapor melaluinya. Menghapus berkas itu adalah cara pencopotan yang bersih.

Setelah sebuah agen melapor lewat hook:

- Header panel berbunyi `claude · needs you`, atau menyebut alat yang sedang dijalankannya.
- Panel yang agennya tertahan mendapat batas kuning amber. Panel yang sedang Anda lihat dibiarkan apa adanya — pertanyaannya sudah ada di depan mata.
- Lencana di bilah alat menghitung jumlah agen yang menunggu di seluruh koneksi, dibatasi hingga `9+`.
- Layar **Agents** menampilkan setiap agen di setiap koneksi, beserta apa yang sedang dikerjakannya dan sudah berapa lama menunggu.

### Menjawab tanpa mengetik

Saat sebuah agen mengajukan pertanyaan dengan sekumpulan jawaban tetap, aplikasi menampilkan satu tombol per pilihan — hingga enam — di daftar Agents. Di Android Anda juga dapat mengetuk chip agen di header panel.

Jawaban Anda tidak diketikkan ke dalam sesi. Ia ditulis ke sebuah berkas melalui kanal terpisah lalu diambil oleh hook, sehingga membalas tidak dapat merusak apa pun yang sedang tampil di layar. Aplikasi menolak mengirim pilihan yang sebenarnya tidak ditawarkan, dan memberi tahu Anda dengan jelas bila koneksinya sudah terputus alih-alih gagal diam-diam.

### Pengaturan

Peringatan agen aktif secara bawaan pada kedua platform, dengan kontrol notifikasi, suara, getaran dan panel aktif. Di iOS peringatan panel aktif juga aktif dan tersedia pilihan hanya di latar belakang. Peringatan hanya terkirim selama iOS mengizinkan aplikasi berjalan; penangguhan lama memutus peringatan SSH langsung.

Satu bawaan yang perlu diketahui: **suara dibatasi pada headphone**. Bila tidak ada yang tercolok atau terhubung, peringatan tetap memberi notifikasi dan bergetar tetapi tidak membunyikan nada. Matikan opsi itu jika Anda ingin peringatan terdengar di pengeras suara ponsel.

Tidak ada pengaturan sensitivitas dan tidak ada pemilih suara — kontrolnya hanya hidup/mati.

## Program terminal layar penuh

Untuk program seperti Vim, less, htop, alat ncurses, dan panel tmux:

- Untuk masukan langsung di iOS, matikan **Dikte dan saran** serta **Saran papan ketik**, lalu buka panel baru.
- Gunakan baris tombol tambahan untuk `ESC`, panah, `PGUP`, dan `PGDN`.
- Gunakan zoom cubit jika teks terlalu kecil, lalu tunggu sebentar agar ukuran terminal jarak jauh stabil.

## Desktop jarak jauh

Kedua platform membuka desktop jarak jauh melalui VNC di dalam SSH. Gunakan layar bersama yang ada, termasuk Berbagi Layar macOS, atau setujui penyiapan desktop Linux yang didukung. Server harus menyediakan desktop; akses SSH saja tidak membuat sesi grafis. Pencerminan Linux memerlukan X11, bukan Wayland; macOS memakai layar bersama yang sudah ada, bukan membuat desktop pribadi.

Gunakan sentuhan untuk klik, seret dan perbesar, serta papan ketik layar atau fisik untuk mengetik. Kontrol papan klip menempel teks ponsel ke desktop; desktop juga dapat menyalin teks ke ponsel.

**Ukuran layar** menawarkan ukuran siap pakai atau khusus yang diingat per server. Di iOS tiap sisi harus 320–5120 piksel. Pengubahan ukuran langsung mempertahankan aplikasi jika didukung server. Alternatif mulai ulang memerlukan persetujuan dan hanya untuk desktop pribadi yang dibuat aplikasi. Desktop yang dipakai ulang dan konsol bersama tidak dimulai ulang untuk mengubah ukuran; atur resolusi Mac di pengaturan Layar jika pengubahan langsung tidak tersedia.
