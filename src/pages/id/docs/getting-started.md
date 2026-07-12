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

- **Android:** pasang Mobile SSH dari Google Play.
- **iOS:** aplikasi iOS hadir sebagai beta publik di TestFlight. Pasang aplikasi TestFlight dari Apple, lalu buka tautan undangan Mobile SSH dari halaman beranda situs untuk memasang dan menerima pembaruan.

## Terhubung ke server

1. Buka Mobile SSH.
2. Ketuk **+ Add Session** dan cari server tersimpan, atau tambahkan server baru dari layar tersebut.
3. Masukkan host, port, nama pengguna, dan detail autentikasi jika menambahkan server baru.
4. Ketuk server untuk membuka sesi terminal.
5. Gunakan **Active Sessions** di layar awal untuk kembali ke sesi yang masih berjalan.

Port SSH default adalah `22`. Jika server Anda memakai port lain, masukkan port itu di profil server.

## Menyimpan server

Server tersimpan menyimpan tujuan koneksi dan konfigurasi tunnel opsional. Server tersimpan dapat mencakup:

- Nama host atau alamat IP.
- Port SSH.
- Nama pengguna.
- Detail kata sandi atau kunci privat.
- Aturan penerusan port lokal opsional.

Gunakan server tersimpan untuk host yang sering Anda akses. Jika server tersimpan menunjuk ke host yang berbeda dari sesi aktif Anda saat ini, Mobile SSH memulai koneksi baru untuk tujuan yang dipilih.

## Menyimpan kredensial

Layar **Credentials** menyimpan catatan nama pengguna/kata sandi atau nama pengguna/kunci privat yang dapat digunakan kembali. Kredensial tersimpan dapat dipilih dari dialog penyiapan server, sehingga Anda tidak perlu memasukkan ulang informasi login yang sama untuk setiap host.

Catatan kredensial disimpan secara lokal di perangkat — di iOS, data rahasia disimpan di Keychain sistem. Lindungi perangkat dengan kunci layar jika Anda menyimpan kata sandi, frasa sandi, atau kunci privat.

## Menggunakan kunci privat

Mobile SSH mendukung kunci privat yang ditempel dan impor kunci melalui pemilih berkas sistem. Di Android aplikasi mendukung kunci Ed25519, RSA, ECDSA, dan DSA; di iOS aplikasi mendukung kunci Ed25519 dan ECDSA (P-256/384/521).

Untuk menggunakan kunci privat:

1. Buka **Credentials** atau dialog edit server.
2. Tempel teks kunci privat, atau pilih **Import from file**.
3. Masukkan frasa sandi kunci di kolom kata sandi/frasa sandi jika kunci terenkripsi.
4. Simpan kredensial atau server.

Impor kunci privat menggunakan pemilih berkas sistem untuk berkas kunci. Di Android, transfer berkas menggunakan peramban berkas lokal terpisah dan dapat meminta akses penyimpanan yang lebih luas pada versi Android yang lebih baru; di iOS, berkas masuk melalui pemilih dokumen dan foto sistem.

## Sesi terbaru

Layar awal menampilkan sesi terbaru. Sesi terbaru dapat terhubung kembali ke kumpulan server yang sama. Jika sesi sebelumnya masih aktif, Mobile SSH kembali ke sesi itu alih-alih memulai koneksi ganda.

## Mencari server tersimpan

Ketuk kolom pencarian di halaman **Saved Servers** untuk memfilter berdasarkan nama atau host. Layar **+ Add Session** juga terbuka dengan pencarian sehingga Anda dapat menemukan dan terhubung ke server tersimpan dalam satu langkah.

## Sesi aktif

Saat ada sesi berjalan, layar awal menampilkan **Active Sessions** beserta jumlahnya. Ketuk untuk kembali ke kisi terminal. Notifikasi yang sedang berjalan juga mencantumkan host aktif — ketuk host di notifikasi untuk langsung beralih ke terminal tersebut.

Kembali ke layar awal tidak memutus sesi SSH aktif; menutup panel atau mengakhiri aktivitas terminal akan memutusnya.

## Pengaturan pertama yang berguna

Buka **Settings** dari layar awal (tersedia di halamannya sendiri):

- Aktifkan ketuk untuk menampilkan keyboard jika Anda ingin keyboard muncul saat mengetuk terminal.
- Nonaktifkan saran IME jika saran keyboard mengganggu program terminal seperti Vim, less, htop, atau aplikasi tmux layar penuh.
- Aktifkan **Agent alerts** jika Anda menjalankan tugas latar belakang yang lama (Claude Code, Codex, skrip shell) dan ingin mendapat notifikasi suara atau getaran saat agen membutuhkan masukan Anda.
- Matikan analitik penggunaan anonim jika Anda tidak ingin data apa pun dikirimkan.

## Bahasa

Mobile SSH mengikuti bahasa sistem. Aplikasi disertai terjemahan untuk bahasa Arab, Bengali, Tionghoa (Sederhana dan Tradisional), Inggris, Prancis, Jerman, Hindi, Indonesia, Jepang, Marathi, Pidgin Nigeria, Portugis, Rusia, Spanyol, Tamil, Telugu, Turki, dan Urdu. Ubah bahasa di **Settings → System → Languages** Android, atau di iOS di **Settings → General → Language & Region**, bukan dari dalam aplikasi.

## Catatan keamanan

Hanya terhubung ke server yang Anda percayai. Aplikasi saat ini menyimpan data koneksi secara lokal dan tidak menyediakan brankas cloud atau sinkronisasi lintas perangkat. Implementasi saat ini juga tidak menampilkan konfirmasi host yang dikenal, jadi hindari terhubung melalui jaringan yang tidak tepercaya ketika identitas host penting.
