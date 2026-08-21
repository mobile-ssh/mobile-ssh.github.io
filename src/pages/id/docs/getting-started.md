---
layout: ../../../layouts/DocLayout.astro
title: "Memulai"
description: "Langkah pertama untuk memasang Mobile SSH, terhubung ke server, menyimpan profil, kredensial, dan sesi."
---

# Memulai

Mobile SSH adalah klien SSH untuk Android dan iOS untuk terhubung ke server Linux, Unix, jaringan, IoT, atau pengembangan milik Anda sendiri. Anda memberikan alamat server dan kredensial; aplikasi membuka terminal SSH interaktif.

## Persyaratan

- Android 8.0 atau lebih baru, atau iOS 16 atau lebih baru (iPhone atau iPad).
- Akses jaringan dari perangkat ke server SSH Anda.
- Nama host atau alamat IP server SSH, port, nama pengguna, dan kata sandi atau kunci privat.
- Di Android, akses penyimpanan jika Anda ingin menggunakan transfer berkas SFTP dengan peramban berkas lokal ponsel; iOS menggunakan pemilih berkas dan foto sistem sebagai gantinya.

## Memasang aplikasi

- **Android:** Mobile SSH saat ini berupa uji tertutup (closed test) di Google Play. Buka tautan pendaftaran di peramban ponsel pada perangkat — bukan di dalam aplikasi Google Play, karena uji tersebut mungkin tidak terlihat di sana — lalu ikut serta dengan akun Google yang akan Anda pakai. Setelah itu aplikasi terpasang dan diperbarui dari Play seperti aplikasi lain.
- **iOS:** aplikasi iOS hadir sebagai beta publik di TestFlight. Pasang aplikasi TestFlight dari Apple, lalu buka tautan undangan Mobile SSH dari halaman beranda situs untuk memasang dan menerima pembaruan.

## Terhubung ke server

1. Buka Mobile SSH.
2. Ketuk **+ Add Session** dan cari server tersimpan, atau tambahkan server baru dari layar tersebut.
3. Masukkan host, port, nama pengguna, dan detail autentikasi jika menambahkan server baru.
4. Ketuk server untuk membuka sesi terminal.
5. Gunakan **Active Sessions** di layar awal untuk kembali ke sesi yang masih berjalan.

Port SSH default adalah `22`. Jika server Anda memakai port lain, masukkan port itu di profil server.

## Memilih transport

Saat menambah atau mengedit server, pemilih **Transport** menentukan cara Mobile SSH menyambung:

- **SSH** -- koneksi SSH standar (bawaan).
- **Eternal Terminal** -- sesi tangguh yang bertahan saat koneksi jaringan terputus, perangkat tidur, dan IP berubah. Jika host belum punya `etserver`, Mobile SSH dapat memasangnya untuk Anda melalui SSH. Lihat panduan **Terminal** untuk detailnya.

## Menyimpan server

Server tersimpan menyimpan tujuan koneksi dan konfigurasi tunnel opsional. Server tersimpan dapat mencakup:

- Nama host atau alamat IP.
- Port SSH.
- Nama pengguna.
- Detail kata sandi atau kunci privat.
- Aturan penerusan port lokal opsional.
- Alamat tambahan opsional untuk mesin yang sama (lihat di bawah).

Gunakan server tersimpan untuk host yang sering Anda akses. Jika server tersimpan menunjuk ke host yang berbeda dari sesi aktif Anda saat ini, Mobile SSH memulai koneksi baru untuk tujuan yang dipilih.

### Beberapa alamat (roaming LAN/VPN)

Mesin yang sama sering dapat dijangkau di alamat berbeda tergantung lokasi Anda — IP Wi-Fi rumah versus IP VPN. Tambahkan alamat alternatif di dialog edit server, masing-masing dengan portnya sendiri bila perlu. Saat Anda menyambung, Mobile SSH mencoba alamat-alamat itu secara berurutan hingga salah satu merespons, dan mengingat alamat yang terakhir berhasil lalu menghubunginya lebih dulu di lain waktu. Perubahan jaringan (misalnya keluar dari VPN) memicu penyambungan ulang langsung ke alamat mana pun yang kini dapat dijangkau, alih-alih menunggu rute mati kehabisan waktu.

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

Impor kunci privat menggunakan pemilih berkas sistem untuk berkas kunci. Di Android, transfer berkas menggunakan peramban berkas lokal terpisah dan dapat meminta akses penyimpanan yang lebih luas pada versi Android yang lebih baru; di iOS, berkas masuk melalui pemilih dokumen dan foto sistem.

## Layar beranda

Layar beranda dibangun untuk menjawab "apa yang bisa saya lanjutkan?", bukan untuk membuka formulir koneksi kosong:

- **Continue** mencantumkan koneksi yang aktif saat ini, lengkap dengan jumlah panel bila sebuah koneksi punya lebih dari satu. Mengetuk sebuah baris membawa Anda kembali ke sana.
- **Tmux sessions** mencantumkan apa yang sedang berjalan di server tersimpan Anda. Daftar ini diambil dari snapshot yang sudah disimpan aplikasi, jadi muncul seketika bahkan tanpa jaringan sama sekali — setiap baris ditandai umur snapshot-nya, dan mengetuk salah satunya akan menyambung lalu meng-attach sesi itu. Snapshot meredup setelah beberapa jam dan dibuang setelah seminggu.
- Di iOS ada daftar **Recent** di bawah keduanya; aplikasi Android menghapusnya, karena "apa yang bisa saya lanjutkan?" ternyata pertanyaan yang lebih berguna daripada "kapan terakhir saya menyambung?".

Jika tidak ada yang aktif dan tidak ada yang tersimpan di cache, layar itu mengatakannya dan mengarahkan Anda ke **Servers**.

## Memberi nama dan mencari server tersimpan

Server tersimpan dapat memiliki nama — "NAS Rumah", "Web Produksi" — dan daftarnya menampilkan nama itu alih-alih alamatnya. Alamatnya muncul kembali dengan sendirinya setiap kali namanya menjadi ambigu: dua baris memakai nama yang sama, atau pencarian sedang berjalan, sehingga Anda selalu dapat membedakan baris.

Ketuk kolom pencarian di halaman **Saved Servers** untuk memfilter. Pencarian mencocokkan nama, pengguna, host, port, kredensial, dan alamat alternatif mana pun. Layar **+ Add Session** juga terbuka dengan pencarian sehingga Anda dapat menemukan dan terhubung ke server tersimpan dalam satu langkah.

Server dapat disusun ke dalam folder. Folder dapat diciutkan, mengingat bahwa ia diciutkan, serta dapat disusun ulang atau diganti namanya; menghapus folder memindahkan server-nya ke **Ungrouped**, bukan menghapusnya.

## Mengekspor sebagian penyiapan Anda

**Export selected…** di layar Servers dan Credentials mengubah daftar menjadi pemilih dengan kotak centang, sehingga Anda dapat menyerahkan tiga server tanpa mengekspor semuanya. Mengetuk header folder mengambil seluruh isi folder. Ekspor terenkripsi jika Anda memberinya frasa sandi — tanpa frasa sandi, berkasnya memuat kata sandi dan kunci privat dalam teks biasa, dan aplikasi menyatakan hal itu sebelum menulisnya.

## Sesi aktif

Saat ada sesi berjalan, layar awal menampilkan **Active Sessions** beserta jumlahnya. Ketuk untuk kembali ke kisi terminal. Notifikasi yang sedang berjalan juga mencantumkan host aktif — ketuk host di notifikasi untuk langsung beralih ke terminal tersebut.

Kembali ke layar awal tidak memutus sesi SSH aktif; menutup panel atau mengakhiri aktivitas terminal akan memutusnya.

## Pengaturan pertama yang berguna

Buka **Settings** dari layar awal (tersedia di halamannya sendiri):

- Tentukan apakah mengetuk terminal memunculkan keyboard. Kedua platform datang dengan bawaan yang berlawanan: di Android keyboard hanya muncul dari tombol ⌨, di iOS satu ketukan memunculkannya.
- Atur **ukuran teks**, **font**, **skema warna**, dan ukuran **scrollback** terminal, lalu pilih **tema** aplikasi (Sistem, Terang, atau Gelap).
- Aktifkan **Agent alerts** jika Anda menjalankan tugas latar belakang yang lama (Claude Code, Codex, skrip shell) dan ingin diberi tahu saat agen membutuhkan masukan Anda. Lihat panduan **Terminal** untuk cara agen melaporkan dirinya.
- Di Android, **Keep sessions running in background** aktif secara bawaan, sehingga shell dan agen tetap bertahan setelah Anda menggeser aplikasi dari daftar terkini.
- Di Android, matikan analitik penggunaan anonim jika Anda tidak ingin data apa pun dikirimkan. Aplikasi iOS belum memiliki sakelar itu.

## Plugin

Plugin memperluas Mobile SSH dengan alur kerja tambahan. Buka **Plugins** dari layar awal untuk:

- Menelusuri katalog plugin yang tersedia.
- Memasang yang Anda inginkan -- setiap plugin diunduh sesuai kebutuhan dan diverifikasi dengan checksum SHA-256 ke penyimpanan privat aplikasi.
- Menjalankan plugin terpasang dari layar yang sama.

Secara bawaan plugin diambil dari katalog publik. Jika Anda mengelola katalog sendiri, Anda dapat mengarahkan Mobile SSH ke sumber katalog khusus atau privat. Hanya pasang plugin dari sumber yang Anda percayai.

## Bahasa

Mobile SSH mengikuti bahasa sistem secara bawaan. Aplikasi disertai terjemahan untuk bahasa Arab, Bengali, Tionghoa (Sederhana dan Tradisional), Inggris, Prancis, Jerman, Hindi, Indonesia, Jepang, Marathi, Portugis, Rusia, Spanyol, Tamil, Telugu, Turki, dan Urdu — dua puluh bahasa di Android, yang menambahkan Pidgin Nigeria dan Arab Mesir, serta delapan belas di iOS.

Jika Anda ingin aplikasi dalam bahasa selain bahasa ponsel, **Settings → Language** menyediakan pemilih dengan opsi "System default". Anda juga tetap dapat mengubahnya dari **Settings → System → Languages** di Android atau **Settings → General → Language & Region** di iOS.

## Catatan keamanan

Hanya terhubung ke server yang Anda percayai. Aplikasi saat ini menyimpan data koneksi secara lokal dan tidak menyediakan brankas cloud atau sinkronisasi lintas perangkat. Implementasi saat ini juga tidak menampilkan konfirmasi host yang dikenal, jadi hindari terhubung melalui jaringan yang tidak tepercaya ketika identitas host penting.
