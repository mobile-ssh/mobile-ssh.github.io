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

- **Android:** Mobile SSH saat ini berupa uji tertutup (closed test) di Google Play. Buka tautan pendaftaran di peramban ponsel pada perangkat — bukan di dalam aplikasi Google Play, karena uji tersebut mungkin tidak terlihat di sana — lalu ikut serta dengan akun Google yang akan Anda pakai. Setelah itu aplikasi terpasang dan diperbarui dari Play seperti aplikasi lain.
- **iOS:** aplikasi iOS hadir sebagai beta publik di TestFlight. Pasang aplikasi TestFlight dari Apple, lalu buka tautan undangan Mobile SSH dari halaman beranda situs untuk memasang dan menerima pembaruan.

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

Impor kunci menggunakan pemilih sistem, tanpa memberi akses ke penyimpanan lainnya. Transfer berkas memiliki pilihan folder dan berkas sendiri.

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

## Sesi aktif

Saat sesi berjalan, **Sesi aktif** menampilkan jumlah dan membuka kisi terminal. Di Android, notifikasi tetap juga mencantumkan host dan membuka kontrol koneksi.

Kembali ke layar beranda tidak memutus sesi SSH aktif; menutup panel atau mengakhiri aktivitas terminal akan memutusnya.

## Pengaturan pertama yang berguna

Buka **Settings** dari layar beranda (tersedia di halamannya sendiri):

- Tentukan apakah mengetuk terminal memunculkan keyboard. Kedua platform datang dengan bawaan yang berlawanan: di Android keyboard hanya muncul dari tombol ⌨, di iOS satu ketukan memunculkannya.
- Atur **ukuran teks**, **font**, **skema warna**, dan ukuran **scrollback** terminal, lalu pilih **tema** aplikasi (Sistem, Terang, atau Gelap).
- Aktifkan **Agent alerts** jika Anda menjalankan tugas latar belakang yang lama (Claude Code, Codex, skrip shell) dan ingin diberi tahu saat agen membutuhkan input Anda. Lihat panduan **Terminal** untuk cara agen melaporkan dirinya.
- Di Android, **Keep sessions running in background** aktif secara bawaan, sehingga shell dan agen tetap bertahan setelah Anda menggeser aplikasi dari daftar terkini.
- Kedua platform memiliki sakelar analitik anonim. Mematikannya menghentikan pengumpulan peristiwa baru.
- Di iOS, **Dikte dan saran** aktif secara bawaan. Matikan dan buka panel baru untuk masukan langsung tanpa dikte/koreksi.
- Notifikasi jarak jauh, perintah selesai dan pembacaan papan klip jarak jauh memerlukan izin terpisah. Aktifkan hanya yang diinginkan.

## Plugin

Plugin memperluas Mobile SSH dengan alur kerja tambahan. Buka **Plugins** dari layar beranda untuk:

- Jelajahi katalog menurut kategori dan cari plugin.
- Memasang yang Anda inginkan -- setiap plugin diunduh sesuai kebutuhan dan diverifikasi dengan checksum SHA-256 ke penyimpanan privat aplikasi.
- Menjalankan plugin terpasang dari layar yang sama.

Secara bawaan plugin diambil dari katalog publik. Jika Anda mengelola katalog sendiri, Anda dapat mengarahkan Mobile SSH ke sumber katalog khusus atau privat. Hanya pasang plugin dari sumber yang Anda percayai.

## Bahasa

Mobile SSH mengikuti bahasa sistem secara bawaan. Kedua aplikasi memiliki dua puluh bahasa: Arab, Arab Mesir, Bengali, Mandarin Sederhana dan Tradisional, Inggris, Prancis, Jerman, Hindi, Indonesia, Jepang, Marathi, Pidgin Nigeria, Portugis, Rusia, Spanyol, Tamil, Telugu, Turki dan Urdu.

Jika Anda ingin aplikasi dalam bahasa selain bahasa ponsel, **Settings → Language** menyediakan pemilih dengan opsi "System default". Anda juga tetap dapat mengubahnya dari **Settings → System → Languages** di Android atau **Settings → General → Language & Region** di iOS.

## Catatan keamanan

Hubungkan hanya ke server tepercaya. Data tetap di perangkat kecuali diekspor/dibagikan; tidak ada brankas awan atau sinkronisasi otomatis. Lindungi perangkat/cadangan, verifikasi sidik jari asing dan periksa perubahan kunci sebelum menyambung ulang.
