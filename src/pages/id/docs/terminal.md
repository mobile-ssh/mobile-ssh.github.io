---
layout: ../../../layouts/DocLayout.astro
title: "Terminal"
description: "Kontrol terminal Mobile SSH, tombol tambahan, panel, gulir, tmux, pengelola herdr dan Zellij, peringatan agen, tindakan salin, dan pengaturan keyboard."
---

# Terminal

Terminal Mobile SSH dibuat untuk operasi di ponsel dan tablet. Ia menggabungkan kanvas terminal, baris tombol tambahan, panel multi-sesi, penanganan gulir, dan perilaku koneksi ulang.

## Dasar terminal

- Terminal memakai perilaku gaya xterm dengan dukungan warna dan penanganan tombol kursor.
- Buffer gulir balik menyimpan 5000 baris secara bawaan, dan dapat disetel ke 1.000, 10.000, atau 50.000 di Settings.
- Ketuk panel untuk memilihnya sebelum mengetik.
- Cubit panel terminal untuk mengubah ukuran teks. Mobile SSH mengubah ukuran PTY jarak jauh setelah gerakan berhenti.
- Ketuk dua kali panel (atau gunakan kontrol perluasnya) untuk masuk mode layar penuh. Gunakan Kembali di Android, atau kontrol ciutkan di iOS, untuk kembali ke kisi.

## Kisi multi-sesi

Mobile SSH dapat menjalankan hingga delapan sesi SSH sekaligus. Setiap sesi tampil sebagai panel di kisi terminal. Ketuk panel untuk memilihnya, atau gunakan **+ Add Session** untuk memulai koneksi lain.

Header panel menyebutkan di mana Anda berada. Di Android ia menampilkan direktori kerja sebenarnya dari panel itu, ditanyakan ke tmux atau dilaporkan shell melalui OSC 7 dan disegarkan selama aplikasi terbuka; di iOS ia menampilkan judul yang disetel sisi jarak jauh, dengan cadangan `user@host:port`.

Menutup panel memutus sesi SSH tersebut. Kembali ke layar awal menjaga sesi aktif tetap tersedia melalui **Active Sessions**.

## Eternal Terminal (ET)

Setiap server tersimpan dapat memakai salah satu dari dua transport, dipilih lewat pemilih **Transport** saat Anda menambah atau mengedit server:

- **SSH** -- koneksi SSH standar (bawaan).
- **Eternal Terminal** -- sesi ET yang bertahan saat koneksi jaringan terputus, perangkat tidur, dan alamat IP berubah, tanpa memulai ulang shell Anda.

ET menjaga sesi tetap hidup di server, jadi saat ponsel Anda berganti jaringan atau bangun dari tidur, Mobile SSH menyambungkan diri kembali ke shell yang sama alih-alih membuka yang baru. Ini cocok untuk data seluler, perpindahan Wi-Fi/seluler, dan perintah yang berjalan lama.

ET memerlukan proses `etserver` di host. Jika server belum punya, Mobile SSH dapat memasang dan menjalankannya untuk Anda melalui koneksi SSH yang ada -- tanpa penyiapan server manual. Setelah ET tersedia, sambunglah dengan transport **Eternal Terminal** terpilih.

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

Terminal menggunakan koneksi pass-through native ke keyboard di layar: setiap karakter dikirim ke shell jarak jauh saat Anda mengetik, dengan koreksi otomatis dan saran prediktif dimatikan sehingga keyboard tidak pernah menulis ulang input sebelum mencapai shell. Ini menjaga Vim, tmux, htop, less, shell dengan kord tombol tak biasa, dan prompt kata sandi jarak jauh tetap dapat diprediksi — tidak ada buffer saran yang perlu dinonaktifkan.

- **Tap terminal to show keyboard:** saat aktif, mengetuk terminal meminta sistem menampilkan keyboard di layar.

Dikte suara keyboard di layar tetap berfungsi: teks yang didiktekan langsung dikirim ke shell seperti input yang diketik lainnya.

## Keyboard hardware

Keyboard eksternal dan Bluetooth menggerakkan terminal secara langsung baik di Android maupun iOS. Selain karakter biasa, Mobile SSH memetakan tombol panah, `Home`/`End`, `PgUp`/`PgDn`, `Insert`, `Delete`, `Esc`, tombol fungsi `F1`–`F12`, kord `Ctrl`+tombol dan `Alt`/`Option`-sebagai-Meta, serta `Shift`+`Tab`. Tombol pengubah dapat digabung dengan pengubah lengket pada baris tombol tambahan.

## Menempel

Menempel ke program yang memintanya (bash, Vim, dan aplikasi bracketed-paste lain) dibungkus dengan penanda bracketed-paste, sehingga konten clipboard multi-baris disisipkan sebagai teks alih-alih dieksekusi otomatis baris demi baris. Hanya tempel sungguhan yang dibungkus; teks yang diketik dan didiktekan tidak diubah.

## Pilih, salin, bagikan

Tekan lama di dalam terminal untuk memilih kata di bawah jari Anda, lalu seret pegangan untuk menyesuaikan. Bilah pemilihan menawarkan tiga tindakan:

- **Copy** — menaruh teks terpilih ke papan klip sistem. Pemilihan tetap tersorot setelahnya, sehingga Anda dapat membagikannya, menyalin ulang, atau memperluasnya.
- **Share** — meneruskan teks terpilih ke lembar berbagi sistem (surel, catatan, perpesanan, dll.).
- **Select all** — memperluas pemilihan ke seluruh buffer terminal yang terlihat, lalu Copy atau Share.

## Cari di terminal

Telusuri seluruh buffer terminal — scrollback dan layar yang terlihat — dan lompat antar kecocokan. Buka pencarian dari kontrol terminal, ketik kueri, dan telusuri hasil satu per satu. Ini berfungsi baik di Android maupun iOS.

## Warna, huruf miring, dan clipboard jarak jauh

- Terminal menampilkan **warna sejati 24-bit** dan **huruf miring**, sehingga prompt bertema, penyorotan sintaks, dan TUI tampil seperti di desktop.
- **Clipboard OSC 52:** saat program jarak jauh menyalin teks (tmux `set-clipboard`, yank OSC 52 Vim/Neovim), teks itu mendarat di clipboard ponsel Anda — sehingga Anda dapat menyalin dari server dan menempel ke aplikasi lokal.
- Baik di Android maupun iOS, karakter CJK lebar, emoji, dan karakter penggabung (klaster grafem dan zero-width joiner) diukur dan digambar dengan benar, dan **Nerd Font** bawaan menggambar glyph ikon powerline, starship, devicon, dan Material Design yang jika tidak akan ditampilkan sebagai kotak kosong oleh font sistem.

## Integrasi shell dan gambar inline

- **Integrasi shell (OSC 133):** saat shell Anda memancarkan penanda prompt OSC 133, Mobile SSH dapat melangkah antar prompt dan memberi peringatan saat perintah yang berjalan lama selesai. Berfungsi di Android dan iOS. Kedua aplikasi tidak menyuntikkan penandanya — shell Anda yang harus memancarkannya (hook `PROMPT_COMMAND`/`precmd`, atau starship). Di Android, navigasi prompt mati sampai Anda mengaktifkannya di **Settings → Shell integration**; di iOS menunya muncul sendiri begitu penanda mulai berdatangan.
- **Pilih output:** sentuh di mana saja di dalam output sebuah perintah dan pilih seluruh blok itu — galat build dari 300 baris yang lalu, bukan hanya perintah terakhir — lalu salin, bagikan, atau perluas.
- **Gambar inline:** program yang memakai protokol grafis Kitty menggambar gambar langsung di terminal, di Android dan iOS. Gambar bertahan saat zoom cubit dan pembungkusan ulang: ia diukur dalam sel dan mengikuti barisnya, alih-alih dibuang dan meninggalkan celah kosong. Gambar merupakan fitur layar utama dan dibersihkan saat TUI layar penuh mengambil alih.
- **Glyph mosaik (Android):** karakter blok, braille, sekstan, dan oktan digambar sendiri oleh aplikasi alih-alih diminta dari font, sehingga `chafa`, `timg`, dan ANSI art menyusun kisi dengan persis — tanpa sambungan, tanpa kotak kosong, apa pun font yang Anda pilih.
- **Direktori kerja sebenarnya (Android):** header panel menampilkan di mana panel itu benar-benar berada, ditanyakan ke tmux atau dilaporkan shell melalui OSC 7, bukan apa pun yang kebetulan dicetak prompt terakhir.

## Tampilan dan tombol

Baik di Android maupun iOS, Settings memungkinkan Anda menyesuaikan terminal:

- **Font:** pilih font monospace sistem, JetBrains Mono, atau Source Code Pro.
- **Skema warna:** Default, Solarized Dark atau Light, Gruvbox, Dracula, atau Nord — diterapkan secara langsung ke panel yang terbuka.
- **Baris tombol tambahan:** tambah, hapus, susun ulang, dan sembunyikan tombol, tentukan tombol escape-sequence Anda sendiri, dan reset ke default, dengan pratinjau langsung yang memperlihatkan persis pembagian baris yang akan Anda dapatkan. Android menaruhnya di tab **Keys**; iOS di bawah **Extra keys → Customize keys**.
- **Tambah dari preset:** palet berisi sekitar 45 tombol dalam enam grup — `F1`–`F12`, kombinasi Ctrl seperti `^C` `^D` `^Z` `^R` `^L`, simbol seperti `|` `~` `/` `_` `:`, dan pengubah. `F1`–`F12` dikirim sebagai escape sequence biasa, jadi tidak perlu kord `FN`. Android juga menyediakan tombol 📎 **Attach a file** yang membuka pemilih berkas dan mengunggah ke sesi yang sedang berjalan; iOS menyediakan `INS`, `DEL`, dan tombol `FN` yang memunculkan baris angka.
- **Ukuran scrollback:** 1.000, 5.000, 10.000, atau 50.000 baris (5.000 secara bawaan). Berlaku untuk panel baru.
- **Ukuran teks:** sebuah penggeser, berdampingan dengan zoom cubit.
- **Tema:** Sistem, Terang, atau Gelap untuk seluruh aplikasi.

Reset mengembalikan bawaan yang dikirim bersama aplikasi alih-alih membekukan daftar hari ini, sehingga peningkatan pada rilis berikutnya tetap sampai kepada Anda. Perubahan diterapkan secara langsung ke panel yang sudah terbuka.

## Menggulir

Mobile SSH mengarahkan gerakan gulir berdasarkan status terminal:

- Pada keluaran shell biasa, menggesek menggulir buffer gulir balik lokal.
- Pada aplikasi terminal mode mouse, menggulir mengirim urutan escape roda mouse.
- Pada aplikasi layar alternatif tanpa mode mouse, seperti banyak sesi tmux, menggulir masuk mode salin tmux dan mengirim perintah gulir per baris.

Di Android, ketukan di dalam program yang melacak mouse dikirim sebagai klik kiri pada sel tersebut, sehingga htop, vim, dan panel klik-untuk-fokus merespons sentuhan. Di iOS, ketukan pada program yang sama memunculkan keyboard alih-alih mengeklik; hanya gulir roda yang dilaporkan.

Jika Anda mengetik saat menggulir balik, Mobile SSH kembali ke tampilan terminal langsung.

## Perilaku tmux

Mobile SSH mengamati perintah tmux keluar untuk attach dan sesi baru, seperti:

```bash
tmux attach -t work
tmux a -t work
tmux new -A -s work
```

Saat koneksi putus ketika Anda berada di tmux, aplikasi dapat mengingat nama sesi tmux terakhir untuk server itu dan mencoba menyambung ulang setelah terhubung kembali. Jika tidak ada nama sesi eksplisit yang teramati tetapi aplikasi tahu Anda berada dalam sesi mirip tmux layar alternatif, ia dapat mencoba `tmux attach` umum.

Perilaku ini bersifat upaya terbaik. Jika sesi tmux jarak jauh tidak ada lagi, shell jarak jauh tetap tersedia.

## Pengelola tmux

Mobile SSH menyertakan pengelola tmux agar Anda dapat menelusuri dan mengendalikan tmux tanpa mengetik kord prefix. Buka dengan tombol **Tmux** dari sesi yang tersambung. Ia menampilkan tiga bagian:

- **Sessions** -- setiap sesi tmux di server.
- **Windows** -- jendela dalam sesi yang dipilih.
- **Panes** -- panel dalam jendela yang dipilih.

Dari pengelola ini Anda dapat:

- **Attach** sebuah sesi ke terminal saat ini.
- **Create** sesi atau jendela baru, dan **rename** keduanya.
- **Split** sebuah panel secara horizontal atau vertikal, **zoom** sebuah panel, dan **kill** sesi, jendela, atau panel.
- **Sort** sesi berdasarkan nama atau tanggal pembuatan.

Ikon 🔔 menandai setiap sesi yang agennya sedang menunggu masukan, sehingga Anda dapat langsung melihat proses Claude Code atau Codex yang berhenti dan meng-attach ke sana. Ini melengkapi petunjuk reattach di atas: logika reattach memulihkan sesi terakhir Anda secara otomatis saat tersambung ulang, sementara pengelola memberi Anda kendali manual penuh.

Kedua platform juga dapat mengelola lebih dari satu server tmux (socket) di host yang sama, serta mengurutkan sesi berdasarkan nama atau tanggal pembuatan.

## Herdr dan Zellij (Android)

Android menghadirkan gagasan yang sama untuk dua multiplexer lain. Masing-masing punya ikon sendiri di bilah alat, dan **sebuah ikon baru muncul setelah aplikasi benar-benar menemukan program itu di server** — jadi bilah alat memberi tahu Anda apa yang terpasang di sana tanpa perlu menjalankan `which`.

- **Herdr** memakai kosakatanya sendiri: sesi, workspace, tab, panel. Setiap panel menampilkan status agennya — sedang bekerja, membutuhkan Anda, menganggur — dan agen yang tertahan dapat dijawab langsung dari daftarnya. Status milik herdr sendiri mengisi lencana agen aplikasi, jadi ini bekerja tanpa hook terpasang di server.
- **Zellij** menampilkan sesi, tab, dan panel dengan attach, ganti nama, kill, dan split. Sesi yang di-kill tetap terdaftar sehingga meng-attach akan menghidupkannya kembali, sedangkan delete melupakannya untuk selamanya. Detail tab dan panel memerlukan Zellij 0.44 atau lebih baru; pada versi lama halamannya menampilkan nama tab dan menjelaskan alasannya. Split memerlukan klien yang ter-attach ke sesi, dan halaman itu menjelaskannya alih-alih menawarkan tombol yang pasti gagal.

Jika herdr atau Zellij terpasang tetapi tidak ada di `PATH` shell login, halaman itu menawarkan untuk menambahkannya.

Setiap server tersimpan punya pengaturan **Attach on connect**: **Auto (detect)**, **Nothing**, **tmux**, **herdr**, atau **Zellij**. Auto memilih yang terakhir Anda pakai di server itu, lalu yang punya sesi aktif, lalu yang terpasang — dan tidak meng-attach apa pun alih-alih menebak bila ia belum memeriksa servernya.

Aplikasi iOS saat ini hanya mendukung tmux.

## Agent alerts

Mobile SSH memberi tahu Anda saat agen pemrograman AI jarak jauh — Claude Code, Codex, Gemini — tertahan menunggu Anda. Ia tidak menebak dengan membaca keluaran terminal Anda. Ada dua jalur, dan keduanya bekerja pada tingkat detail yang berbeda.

### Bel

Tanpa penyiapan apa pun, bel terminal dari sesi yang tidak sedang Anda lihat akan memunculkan peringatan, begitu pula escape sequence notifikasi desktop (OSC 9, OSC 777) yang sudah dipancarkan banyak alat. Bel yang datang tepat setelah Anda mengetik diabaikan, sehingga bunyi pelengkapan shell biasa tidak mengganggu Anda.

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

Peringatan aktif secara bawaan di kedua platform, dengan sakelar terpisah untuk notifikasi, suara, getaran, dan apakah sesi yang sedang Anda lihat juga perlu memberi peringatan.

Satu bawaan yang perlu diketahui: **suara dibatasi pada headphone**. Bila tidak ada yang tercolok atau terhubung, peringatan tetap memberi notifikasi dan bergetar tetapi tidak membunyikan nada. Matikan opsi itu jika Anda ingin peringatan terdengar di pengeras suara ponsel.

Tidak ada pengaturan sensitivitas dan tidak ada pemilih suara — kontrolnya hanya hidup/mati.

## Program terminal layar penuh

Untuk program seperti Vim, less, htop, alat ncurses, dan panel tmux:

- Input diteruskan langsung ke program — tidak ada koreksi otomatis atau buffer saran yang mengganggu.
- Gunakan baris tombol tambahan untuk `ESC`, panah, `PGUP`, dan `PGDN`.
- Gunakan zoom cubit jika teks terlalu kecil, lalu tunggu sebentar agar ukuran terminal jarak jauh stabil.
