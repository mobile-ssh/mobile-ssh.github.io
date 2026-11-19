---
layout: ../../../layouts/DocLayout.astro
title: "Memulai"
description: "Pasang Mobile SSH, verifikasi identitas, atur host perantara dan kunci, serta cadangkan server, kredensial dan pengaturan."
---

# Memulai

Mobile SSH adalah klien SSH untuk Android dan iOS untuk terhubung ke server Linux, Unix, jaringan, IoT, atau pengembangan milik Anda sendiri. Anda memberikan alamat server dan kredensial; aplikasi membuka terminal SSH interaktif.

## Persyaratan

- Android 8.0 atau lebih baru, atau iOS 16 atau lebih baru (iPhone atau iPad).
- Akses jaringan dari perangkat ke server SSH Anda.
- Nama host atau alamat IP server SSH, port, nama pengguna, dan kata sandi atau kunci privat.
- Pilih folder atau berkas lokal melalui pemilih sistem. Kedua platform tidak memerlukan akses penyimpanan menyeluruh.

## Memasang aplikasi

- **Android:** pasang Mobile SSH dari Google Play melalui tautan di beranda. Ketersediaan bergantung pada jalur rilis. Jika mengikuti pengujian tertutup, buka tautan pendaftarannya di browser dan bergabung dengan akun Google yang digunakan di Play.
- **iOS:** aplikasi iOS tersedia sebagai beta publik di TestFlight. Pasang aplikasi TestFlight Apple, lalu buka tautan undangan Mobile SSH dari beranda situs untuk memasang dan menerima pembaruan.

## Terhubung ke server

1. Buka Mobile SSH.
2. Ketuk **+ Add Session** dan cari server tersimpan, atau tambahkan server baru dari layar tersebut.
3. Masukkan host, port, nama pengguna, dan detail autentikasi jika menambahkan server baru.
4. Ketuk server untuk membuka sesi terminal.
5. Gunakan **Active Sessions** di layar beranda untuk kembali ke sesi yang masih berjalan.

Port SSH default adalah `22`. Jika server Anda memakai port lain, masukkan port itu di profil server.

## Verifikasi identitas server

Kedua aplikasi memeriksa identitas SSH sebelum kredensial. Kunci berubah menghentikan koneksi, termasuk alamat alternatif dan host perantara.

- **Android:** **Terima identitas SSH baru secara otomatis** aktif secara bawaan. Kunci mentah pertama disimpan, berikutnya harus cocok. Matikan di **Pengaturan → Umum → Keamanan** untuk membandingkan sidik jari SHA-256 baru dengan administrator sebelum menerima dan menyambung ulang.
- **iOS:** kunci asing perlu konfirmasi. Bandingkan SHA-256 melalui saluran tepercaya lalu pilih **Percayai dan hubungkan ulang**.

Tinjau identitas tersimpan di Pengaturan. Kedua platform mendukung pencabutan kunci host dari administrator; Android juga mendukung otoritas sertifikat host. Di iOS, gunakan **Pengaturan → Identitas server → Impor kunci yang dicabut** untuk entri OpenSSH `@revoked` Ed25519/ECDSA dengan lingkup tertentu. Kunci yang dicabut diblokir saat koneksi baru dan koneksi ulang, termasuk kunci yang sebelumnya dipercaya; mengimpor pencabutan tidak menutup koneksi yang sudah ada. iOS tidak mendukung sertifikat host atau impor CA. Kepercayaan tetap pada tiap perangkat dan tidak diimpor dari cadangan. Jangan hapus kunci yang berubah atau dicabut sebelum memeriksa alasan pemblokirannya.

## Memilih transport

Saat menambah atau mengedit server, pemilih **Transport** menentukan cara Mobile SSH menyambung:

- **SSH** -- koneksi SSH standar (bawaan).
- **Eternal Terminal** -- sesi tangguh yang bertahan saat koneksi jaringan terputus, perangkat tidur, dan IP berubah. Jika host belum punya `etserver`, Mobile SSH dapat memasangnya untuk Anda melalui SSH. Lihat panduan **Terminal** untuk detailnya.

Android juga menawarkan koneksi proxy **Teleport** eksperimental. Rute host perantara memerlukan SSH dan tidak dapat digabung Eternal Terminal.

## Menyimpan server

Server tersimpan menyimpan tujuan koneksi dan konfigurasi tunnel opsional. Server tersimpan dapat mencakup:

- Nama host atau alamat IP.
- Port SSH.
- Nama pengguna.
- Detail kata sandi atau kunci privat.
- Aturan penerusan port lokal opsional.
- Alamat tambahan opsional untuk mesin yang sama (lihat di bawah).
- Host perantara opsional dan **Lampirkan saat terhubung**: Otomatis, Tidak ada, tmux, herdr atau Zellij.

Gunakan server tersimpan untuk host yang sering Anda akses. Jika server tersimpan menunjuk ke host yang berbeda dari sesi aktif Anda saat ini, Mobile SSH memulai koneksi baru untuk tujuan yang dipilih.

### Beberapa alamat (roaming LAN/VPN)

Mesin yang sama sering dapat dijangkau di alamat berbeda tergantung lokasi Anda — IP Wi-Fi rumah versus IP VPN. Tambahkan alamat alternatif di dialog edit server, masing-masing dengan portnya sendiri bila perlu. Saat Anda menyambung, Mobile SSH mencoba alamat-alamat itu secara berurutan hingga salah satu merespons, dan mengingat alamat yang terakhir berhasil lalu menghubunginya lebih dulu di lain waktu. Perubahan jaringan (misalnya keluar dari VPN) memicu penyambungan ulang langsung ke alamat mana pun yang kini dapat dijangkau, alih-alih menunggu rute mati kehabisan waktu.

### Host perantara

Simpan bastion dahulu lalu pilih urutannya di server tujuan. Kedua platform mendukung delapan lompatan SSH diperluas. Setiapnya memakai kredensial dan verifikasi sendiri; tujuan cukup terjangkau dari sebelumnya. Server hilang, siklus atau kegagalan menghentikan rute tanpa beralih langsung. Terminal, SFTP, penerusan lokal dan fungsi SSH yang didukung mengikuti rute tersimpan.

## Menyimpan kredensial

Layar **Credentials** menyimpan catatan nama pengguna/kata sandi atau nama pengguna/kunci privat yang dapat digunakan kembali. Kredensial tersimpan dapat dipilih dari dialog penyiapan server, sehingga Anda tidak perlu memasukkan ulang informasi login yang sama untuk setiap host.

Catatan kredensial disimpan secara lokal di perangkat — di iOS, data rahasia disimpan di Keychain sistem. Lindungi perangkat dengan kunci layar jika Anda menyimpan kata sandi, frasa sandi, atau kunci privat.

## Menggunakan kunci privat

Mobile SSH mendukung kunci privat yang ditempel dan impor kunci melalui pemilih berkas sistem. Di Android aplikasi mendukung kunci Ed25519, ECDSA (P-256/384/521), dan RSA; di iOS aplikasi mendukung kunci Ed25519 dan ECDSA (P-256/384/521). DSA (`ssh-dss`) tidak didukung di kedua platform. Kedua platform dapat membuka kunci yang terenkripsi frasa sandi — masukkan frasa sandinya di kolom kata sandi/frasa sandi.

Untuk menggunakan kunci privat:

1. Buka **Credentials** atau dialog edit server.
2. Tempel teks kunci privat, atau pilih **Import from file**.
3. Masukkan frasa sandi kunci di kolom kata sandi/frasa sandi jika kunci terenkripsi.
4. Simpan kredensial atau server.

Impor kunci privat menggunakan pemilih file sistem. Android menolak file kunci yang lebih besar dari 64 KB. Impor tidak memberikan akses ke penyimpanan lainnya; transfer file memiliki pilihan folder dan filenya sendiri.

Android mendukung **kunci FIDO2** lewat USB/NFC: daftarkan atau impor kredensial OpenSSH lalu ikuti sentuhan/PIN. Kunci fisik masih diperlukan setelah ekspor/pemulihan. **Penerusan agen SSH** diaktifkan per server: kredensial tersimpan menjawab permintaan tanda tangan dengan persetujuan opsional tiap penggunaan. Aktifkan hanya bagi server yang dipercaya meminta tanda tangan. iOS tidak mendukung autentikasi kunci fisik atau penerusan agen.

## Layar beranda

Layar beranda dibangun untuk menjawab "apa yang bisa saya lanjutkan?", bukan untuk membuka formulir koneksi kosong:

- **Continue** mencantumkan koneksi yang aktif saat ini, lengkap dengan jumlah panel bila sebuah koneksi punya lebih dari satu. Mengetuk sebuah baris membawa Anda kembali ke sana.
- **Tmux sessions** mencantumkan apa yang sedang berjalan di server tersimpan Anda. Daftar ini diambil dari snapshot yang sudah disimpan aplikasi, jadi muncul seketika bahkan tanpa jaringan sama sekali — setiap baris ditandai umur snapshot-nya, dan mengetuk salah satunya akan menyambung lalu meng-attach sesi itu. Snapshot meredup setelah beberapa jam dan dibuang setelah seminggu.
- Di iOS, **Terbaru** berada di **Koneksi baru**; memilih entri mengisi formulir.

Ubin **VPN** Android membuka klien bawaan; **Tentang** berada di Pengaturan. Panduan VPN merupakan bagian **Penerusan port** situs ini.

Jika tidak ada yang aktif dan tidak ada yang tersimpan di cache, layar itu mengatakannya dan mengarahkan Anda ke **Servers**.

## Memberi nama dan mencari server tersimpan

Server tersimpan dapat memiliki nama — "NAS Rumah", "Web Produksi" — dan daftarnya menampilkan nama itu alih-alih alamatnya. Alamatnya muncul kembali dengan sendirinya setiap kali namanya menjadi ambigu: dua baris memakai nama yang sama, atau pencarian sedang berjalan, sehingga Anda selalu dapat membedakan baris.

Ketuk kolom pencarian di halaman **Saved Servers** untuk memfilter. Pencarian mencocokkan nama, pengguna, host, port, kredensial, dan alamat alternatif mana pun. Layar **+ Add Session** juga terbuka dengan pencarian sehingga Anda dapat menemukan dan terhubung ke server tersimpan dalam satu langkah.

Server dapat disusun ke dalam folder. Folder dapat diciutkan, mengingat bahwa ia diciutkan, serta dapat disusun ulang atau diganti namanya; menghapus folder memindahkan server-nya ke **Ungrouped**, bukan menghapusnya.

## Mengekspor sebagian penyiapan Anda

**Export selected…** di layar Servers dan Credentials mengubah daftar menjadi pemilih dengan kotak centang, sehingga Anda dapat menyerahkan tiga server tanpa mengekspor semuanya. Mengetuk header folder mengambil seluruh isi folder. Ekspor terenkripsi jika Anda memberinya frasa sandi — tanpa frasa sandi, berkasnya memuat kata sandi dan kunci privat dalam teks biasa, dan aplikasi menyatakan hal itu sebelum menulisnya.

Untuk cadangan lengkap pilih **Ekspor semua (cadangan)** di Android atau **Cadangkan dan Pulihkan** di iOS. Memuat server, kredensial dan preferensi seperti bahasa, tombol tambahan dan urutan multiplexer. Android menambah profil VPN/SOCKS. Lindungi seluruh berkas dengan frasa sandi.

Keduanya membaca format 2 dan inventaris lama. Tinjau pratinjau: **Gabungkan** menerapkan bagian sambil mempertahankan item; **Ganti** mengganti bagian yang ada dan mereset preferensi yang tidak disebut dalam bagian pengaturan ke bawaan. Bagian yang hilang tetap utuh. Opsi tak didukung ditandai; impor tidak membuat fitur itu tersedia pada aplikasi lain. Impor tidak menjalankan VPN.

Identitas, sesi aktif, izin sistem dan akses folder tidak dipulihkan. Verifikasi host dan beri akses lokal pada perangkat tujuan. Versi lama tidak membaca format lengkap baru.

Cadangan Android juga tidak menyertakan templat prompt beserta draf editornya, model yang diunduh, setelan host suara, kredensial cloud VPN Setup, serta cache Chat atau eksekusi prompt. Atur kembali semua ini di ponsel baru; cadangan tidak memindahkan atau menghapus jadwal yang sudah dipasang di server.

## Sesi aktif

Saat sesi berjalan, **Sesi aktif** menampilkan jumlah dan membuka kisi terminal. Di Android, notifikasi tetap juga mencantumkan host dan membuka kontrol koneksi.

Kembali ke layar beranda tidak memutus sesi SSH aktif; menutup panel atau mengakhiri aktivitas terminal akan memutusnya.

## Pengaturan pertama yang berguna

Buka **Settings** dari layar beranda (tersedia di halamannya sendiri):

- Tentukan apakah mengetuk terminal akan membuka keyboard. Kedua platform memiliki bawaan yang berlawanan: di Android keyboard hanya muncul melalui tombol ⌨, sedangkan di iOS ketukan akan membukanya.
- Atur **ukuran teks**, **font**, **skema warna**, dan ukuran **riwayat gulir** terminal, lalu pilih **tema** aplikasi (Sistem, Terang, atau Gelap).
- Aktifkan **Peringatan agen** jika menjalankan tugas latar belakang yang lama (Claude Code, Codex, skrip shell) dan ingin diberi tahu ketika agen memerlukan masukan. Lihat panduan **Terminal** untuk cara agen melaporkan statusnya.
- Di Android, **Pertahankan sesi berjalan di latar belakang** aktif secara bawaan, sehingga shell dan agen tetap berjalan saat aplikasi disingkirkan dari daftar aplikasi terbaru.
- Kedua platform memiliki sakelar analitik penggunaan anonim di Setelan. Menonaktifkannya menghentikan pengumpulan peristiwa baru.
- Di iOS, **Dikte & saran** aktif secara bawaan. Nonaktifkan dan buka panel baru jika menginginkan input terminal langsung tanpa dikte atau koreksi otomatis.
- Notifikasi jarak jauh, peringatan perintah selesai, dan pembacaan papan klip jarak jauh merupakan setelan terpisah yang harus diaktifkan. Aktifkan hanya tindakan jarak jauh yang Anda inginkan.
- Di Android, **Asisten suara**, **Templat prompt**, dan **Browser Dalam Aplikasi** bersifat opsional dan nonaktif secara bawaan. Suara memiliki halaman Setelan sendiri; dua lainnya berada di **Umum**.

## Asisten suara di Android

Asisten suara bersifat eksperimental dan nonaktif secara bawaan. Asisten dapat menggunakan Gemma 4 di ponsel 64-bit yang didukung atau layanan suara di server SSH Linux milik Anda sendiri.

1. Buka **Setelan → Asisten suara** dan aktifkan asisten.
2. Untuk pemrosesan ucapan lokal, aktifkan **Gunakan Gemma di ponsel ini (tanpa server suara)**, pilih model yang ditawarkan, lalu ketuk **Unduh**. Sebagai alternatif, pilih host suara Linux tersimpan dan ikuti penyiapan layanan; layanan memerlukan Python 3.11–3.13, layanan pengguna systemd, dan ruang kosong beberapa GB.
3. Mulai percakapan suara untuk terminal yang ingin dikendalikan. Pilih **Pesan** untuk merekam, meninjau, dan mengirim, atau **Langsung** untuk percakapan tanpa menggunakan tangan dengan balasan bersuara. Alamat server suara khusus menggunakan mode Langsung.
4. Tinjau perintah yang diusulkan sebelum mengonfirmasi. Gemma dapat menjalankan daftar singkat pemeriksaan hanya-baca tanpa konfirmasi; perintah di luar daftar tersebut serta prompt untuk Claude Code atau Codex memerlukan konfirmasi atau **Kirim**.

Model ponsel mengunduh sekitar 2.6–3.7 GB dari Hugging Face hanya setelah Anda mengetuk Unduh. Unduhan melalui koneksi berkuota memerlukan konfirmasi, dan unduhan yang dimulai lewat Wi-Fi dijeda jika koneksi menjadi berkuota. Dengan Gemma, ucapan tetap di ponsel; opsi server mengirim audio ke layanan suara yang dikonfigurasi. Izin mikrofon diminta saat Anda menggunakan fitur suara. Jika suara sintesis offline belum tersedia, aplikasi menawarkan pengunduhannya melalui mesin suara ponsel.

Jika aplikasi lain mengambil alih fokus audio atau headset mengirim Hentikan, percakapan dijeda dengan mode dan konteks tetap tersimpan. Gunakan **Lanjutkan percakapan** di halaman Suara atau notifikasi, atau tekan Putar pada headset. Jeda yang disebabkan audio aplikasi lain berakhir saat audio tersebut selesai.

## Templat prompt di Android

Templat prompt bersifat eksperimental dan nonaktif secara bawaan. Fitur ini menjadwalkan eksekusi hanya-baca Claude Code atau Codex di server Anda sendiri. Server memerlukan Python 3.8 atau lebih baru, cron, serta agen pemrograman yang sudah masuk ke akun.

1. Aktifkan **Setelan → Umum → Templat prompt**.
2. Buka **Prompt** di Beranda atau entri templat prompt dalam menu server tersimpan.
3. Buat templat dengan prompt, server, folder proyek, dan Claude Code atau Codex. Pilih zona waktu dan jadwalkan eksekusi setiap hari, hari kerja, hari pilihan, atau setiap 1–12 jam.
4. Simpan templat, lalu hubungkan ke servernya untuk menyinkronkan. Mobile SSH memasang helper kecil dan satu entri crontab; jadwal berjalan di server meskipun ponsel terputus.
5. Tinjau keluaran dan status setiap eksekusi, atau pilih **Jalankan sekarang**, **Jeda**, atau **Hapus dari server**.

Templat dan draf editor dienkripsi di ponsel dan tidak disertakan dalam cadangan. Model Gemma yang sudah diunduh dapat membantu membuat dan merevisi prompt. Menonaktifkan fitur menyembunyikan kontrolnya dan menghentikan sinkronisasi di sisi ponsel; tindakan ini tidak menghentikan atau menghapus jadwal yang sudah dipasang di server. Jeda atau hapus jadwal tersebut terlebih dahulu di Templat prompt.

## Plugin

Plugin memperluas Mobile SSH dengan alur kerja tambahan. Buka **Plugins** dari layar beranda untuk:

- Jelajahi katalog menurut kategori dan cari plugin.
- Memasang yang Anda inginkan -- setiap plugin diunduh sesuai kebutuhan dan diverifikasi dengan checksum SHA-256 ke penyimpanan privat aplikasi.
- Menjalankan plugin terpasang dari layar yang sama.

Secara bawaan plugin diambil dari katalog publik. Jika Anda mengelola katalog sendiri, Anda dapat mengarahkan Mobile SSH ke sumber katalog khusus atau privat. Hanya pasang plugin dari sumber yang Anda percayai.

Di Android, plugin katalog menampilkan **Perbarui ke** saat versi lebih baru tersedia. Pembaruan menggunakan katalog asal, mempertahankan pengaturan dan data plugin, serta meminta persetujuan jika memerlukan akses tambahan. Pembaruan tidak menurunkan versi yang sudah terpasang.

## Bahasa

Mobile SSH mengikuti bahasa sistem secara bawaan. Kedua aplikasi memiliki dua puluh bahasa: Arab, Arab Mesir, Bengali, Mandarin Sederhana dan Tradisional, Inggris, Prancis, Jerman, Hindi, Indonesia, Jepang, Marathi, Pidgin Nigeria, Portugis, Rusia, Spanyol, Tamil, Telugu, Turki dan Urdu.

Jika Anda ingin aplikasi dalam bahasa selain bahasa ponsel, **Settings → Language** menyediakan pemilih dengan opsi "System default". Anda juga tetap dapat mengubahnya dari **Settings → System → Languages** di Android atau **Settings → General → Language & Region** di iOS.

## Catatan keamanan

Hubungkan hanya ke server tepercaya. Data tetap di perangkat kecuali diekspor/dibagikan; tidak ada brankas awan atau sinkronisasi otomatis. Lindungi perangkat/cadangan, verifikasi sidik jari asing dan periksa perubahan kunci sebelum menyambung ulang.
