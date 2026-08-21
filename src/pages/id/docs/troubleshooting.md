---
layout: ../../../layouts/DocLayout.astro
title: "Pemecahan masalah"
description: "Panduan pemecahan masalah Mobile SSH untuk koneksi, autentikasi, keyboard, tmux, transfer berkas, dan tunnel."
---

# Pemecahan masalah

Halaman ini membahas masalah umum Mobile SSH dan pemeriksaan pertama yang dijalankan sebelum mengubah pengaturan SSH di sisi server.

## Tidak dapat terhubung

Periksa:

- Perangkat memiliki akses jaringan.
- Nama host atau alamat IP server benar.
- Port SSH benar, biasanya `22`.
- Firewall, VPN, jaringan operator, atau jaringan Wi-Fi tidak memblokir port.
- Server SSH berjalan dan menerima koneksi dari jaringan yang Anda gunakan.

Jika host yang sama berfungsi dari perangkat lain, bandingkan secara persis host, port, nama pengguna, kunci, dan jalur jaringan.

## Autentikasi gagal

Periksa:

- Ejaan nama pengguna.
- Kata sandi atau frasa sandi kunci.
- Apakah server mengizinkan login kata sandi, login kunci, atau keduanya.
- Apakah kunci privat cocok dengan kunci publik di `authorized_keys` pengguna server.
- Apakah berkas kunci diimpor sepenuhnya, termasuk baris header dan footer.

Untuk kunci privat terenkripsi, masukkan frasa sandi di kolom kata sandi/frasa sandi.

## Impor kunci privat gagal

Impor kunci privat menggunakan pemilih berkas sistem. Jika impor gagal:

- Pastikan berkas yang dipilih adalah kunci privat, bukan berkas publik `.pub`.
- Buka berkas di editor teks tepercaya dan verifikasi berisi blok kunci lengkap.
- Coba tempel kunci secara manual ke kolom kunci privat.
- Pastikan tipe kunci didukung: Ed25519, ECDSA (P-256/384/521), atau RSA di Android; Ed25519 atau ECDSA di iOS. DSA (`ssh-dss`) tidak berfungsi di keduanya, dan iOS tidak mendukung RSA — buatlah kunci Ed25519 sebagai gantinya.

## Input keyboard tertunda atau berubah

Mobile SSH mengirim ketikan langsung ke shell dengan koreksi otomatis dan saran prediktif dimatikan, sehingga keyboard seharusnya tidak menulis ulang teks sebelum mencapai sisi jarak jauh. Jika keyboard Anda masih mengubah input, pastikan tidak ada alat penggantian atau clipboard tingkat sistem yang mencegatnya, dan gunakan baris tombol tambahan untuk tombol terminal seperti `ESC`, `TAB`, `CTRL`, panah, `HOME`, `END`, `PGUP`, dan `PGDN`.

## Gulir tmux tidak seperti yang diharapkan

Mobile SSH mengubah perilaku gulir berdasarkan status terminal. Di tmux atau program layar alternatif lain, gerakan gulir dapat mengirim perintah mode salin tmux alih-alih menggulir riwayat lokal. Jika mode mouse tmux aktif, aplikasi mengirim urutan escape roda mouse.

Jika gulir terasa salah:

- Coba aktifkan atau nonaktifkan mode mouse tmux di server jarak jauh.
- Gunakan `PGUP` dan `PGDN` dari baris tombol tambahan.
- Ketuk dua kali panel untuk layar penuh sebelum menggulir keluaran padat.
- Lepas dan sambung ulang tmux jika ukuran terminal jarak jauh tampak usang.

## Sesi putus setelah layar terkunci

Di Android, Mobile SSH memakai keepalive, layanan latar depan, wake lock, Wi-Fi lock, dan upaya koneksi ulang untuk mengurangi pemutusan. Kebijakan baterai Android tetap dapat menghentikan kerja latar belakang.

Periksa:

- Nonaktifkan optimisasi baterai untuk Mobile SSH jika perangkat Anda agresif menghentikan aplikasi latar belakang.
- Jaga Wi-Fi atau data seluler tetap stabil selama sesi panjang.
- Buka kembali Mobile SSH dan ketuk **Active Sessions** setelah membuka kunci.
- Pastikan **Keep sessions running in background** aktif di Settings jika Anda ingin shell bertahan setelah aplikasi digeser dari daftar terkini.
- Jika server memutus sesi SSH, sambung kembali dari layar beranda — **Continue** mencantumkan apa yang masih aktif, dan **Tmux sessions** mencantumkan apa yang menunggu di server.

Di iOS, sistem menangguhkan aplikasi di latar belakang, sehingga koneksi SSH mentah tidak dapat dibiarkan terbuka tanpa batas begitu Anda berpindah aplikasi atau mengunci layar. Masa tenggang singkat mencakup perpindahan aplikasi yang cepat; untuk durasi yang lebih lama, aktifkan **Auto-attach tmux session** pada profil server (atau gunakan transport **Eternal Terminal**) sehingga saat tersambung kembali Anda langsung berada di shell yang sama tempat Anda meninggalkannya.

## Transfer berkas tidak dapat menjelajahi berkas ponsel

Mobile SSH tidak meminta izin penyimpanan apa pun di Android. Sebagai gantinya, panel lokal menampilkan satu folder yang Anda berikan izinnya melalui pemilih folder sistem — jika kosong, gunakan **Pick folder** untuk memilih satu. Izin itu bertahan, jadi ini hanya perlu dilakukan sekali.

Jika berkas jarak jauh dimuat tetapi berkas lokal tidak, koneksi SSH baik-baik saja dan Anda memang belum memberikan izin folder apa pun.

Di iOS panel lokal menampilkan area dokumen aplikasi, dan Anda menambahkan berkas melalui pemilih dokumen dan foto sistem. Unduhan di sana juga terlihat di aplikasi Files di bawah **On My iPhone**.

## Unggah atau unduh gagal

Periksa:

- Sesi SSH masih terhubung.
- Direktori jarak jauh ada.
- Pengguna jarak jauh punya izin membaca atau menulis jalur tersebut.
- Tujuan lokal dapat ditulisi.
- Ada cukup ruang kosong di perangkat.
- Jaringan stabil untuk transfer besar.

## Penerusan port gagal

Periksa:

- Port lokal antara `1` dan `65535`.
- Port lokal belum dipakai.
- String tunnel berupa `PORT` atau `LOCAL:REMOTEHOST:REMOTE`.
- Host jarak jauh dan port jarak jauh dapat dijangkau dari server SSH.
- Server SSH mengizinkan penerusan TCP.

## Log debug

Kedua platform merekam hal yang berbeda, jadi pilih yang sesuai dengan masalah Anda.

**Android — terminal dan perenderan.** Aktifkan **Settings → Debugging → Show Debug and Logs buttons**, lalu gunakan tombol **Debug** yang muncul di layar awal. Ia merekam peristiwa terminal, ukuran data SSH, input sentuh, perilaku ubah ukuran, dan siklus hidup tunnel. Memulai perekaman lebih dulu memperingatkan Anda bahwa ia menangkap setiap tombol yang Anda ketik, termasuk kata sandi. Menghentikannya akan menulis arsip ke folder Downloads Anda.

**iOS — koneksi dan penyambungan ulang.** Aktifkan **Settings → Diagnostics → Record debug log**. Ia merekam setiap alamat yang dihubungi dan alasan kegagalannya, upaya penyambungan ulang beserta backoff-nya, koneksi yang putus, "peer stopped answering keepalives", perubahan jaringan, serta perintah tmux beserta galatnya. Settings menampilkan jumlah baris secara langsung sehingga Anda dapat memastikan ia sedang merekam, dan **Export Debug Log** membagikannya sebagai berkas teks. Log ini disimpan di memori dan hanya mencakup sesi aplikasi saat ini.

Tinjau setiap log atau arsip debug sebelum membagikannya. Keduanya ditujukan untuk pemecahan masalah dan dapat mengungkap nama server, alamat, waktu, atau detail lingkungan lain — dan di Android, apa pun yang Anda ketik.
