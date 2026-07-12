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
- Pastikan tipe kunci didukung: Ed25519, RSA, ECDSA, atau DSA di Android; Ed25519 atau ECDSA (P-256/384/521) di iOS.

## Input keyboard tertunda atau berubah

Jika keyboard di layar Anda mengubah teks sebelum mencapai shell, nonaktifkan saran keyboard di pengaturan Mobile SSH. Ini berguna untuk Vim, tmux, htop, less, shell dengan kord tombol tak lazim, dan prompt kata sandi jarak jauh.

Gunakan baris tombol tambahan untuk tombol terminal seperti `ESC`, `TAB`, `CTRL`, panah, `HOME`, `END`, `PGUP`, dan `PGDN`.

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
- Jika server memutus sesi SSH, sambung kembali dari sesi terbaru.

Di iOS, sistem menangguhkan aplikasi di latar belakang, sehingga koneksi SSH mentah tidak dapat dibiarkan terbuka tanpa batas begitu Anda berpindah aplikasi atau mengunci layar. Masa tenggang singkat mencakup perpindahan aplikasi yang cepat; untuk durasi yang lebih lama, aktifkan **Auto-attach tmux session** pada profil server (atau gunakan transport **Eternal Terminal**) sehingga saat tersambung kembali Anda langsung berada di shell yang sama tempat Anda meninggalkannya.

## Transfer berkas tidak dapat menjelajahi berkas ponsel

Pada versi Android yang lebih baru, penjelajahan berkas lokal mungkin memerlukan akses penyimpanan. Berikan akses penyimpanan di Pengaturan Android untuk Mobile SSH, lalu buka kembali layar transfer berkas.

Jika berkas jarak jauh dimuat tetapi berkas lokal tidak, koneksi SSH kemungkinan baik-baik saja dan masalahnya pada akses penyimpanan lokal Android.

Di iOS tidak ada izin penyimpanan: panel lokal menampilkan area dokumen aplikasi, dan Anda menambahkan berkas melalui pemilih dokumen dan foto sistem.

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

Layar awal menyertakan tombol **Debug**. Saat aktif, Mobile SSH merekam informasi diagnostik untuk peristiwa terminal, ukuran data SSH, input sentuh, perilaku ubah ukuran, dan siklus hidup tunnel. Hentikan perekaman untuk menyimpan arsip debug secara lokal.

Tinjau arsip debug sebelum membagikannya. Arsip ini ditujukan untuk pemecahan masalah dan dapat mengungkap nama server, waktu, perilaku terminal, atau detail lingkungan lain.
