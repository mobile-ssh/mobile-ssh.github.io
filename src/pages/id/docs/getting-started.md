---
layout: ../../../layouts/DocLayout.astro
title: "Memulai"
description: "Langkah pertama untuk memasang Mobile SSH, terhubung ke server, dan menyimpan profil, kredensial, serta sesi."
---

# Memulai

Mobile SSH adalah klien SSH Android untuk terhubung ke server Linux, Unix, jaringan, IoT, atau pengembangan milik Anda sendiri. Anda memberikan alamat server dan kredensial; aplikasi membuka terminal SSH interaktif.

## Persyaratan

- Android 8.0 atau lebih baru.
- Akses jaringan dari perangkat Android ke server SSH Anda.
- Nama host atau alamat IP server SSH, port, nama pengguna, dan kata sandi atau kunci privat.
- Akses penyimpanan jika Anda ingin menggunakan transfer berkas SFTP dengan peramban berkas lokal ponsel.

## Terhubung ke server

1. Buka Mobile SSH.
2. Ketuk **Server Tersimpan** jika Anda sudah membuat profil, atau tambahkan server dari alur koneksi.
3. Masukkan host, port, nama pengguna, dan detail autentikasi.
4. Ketuk server untuk membuka sesi terminal.
5. Gunakan **Sesi Aktif** di layar awal untuk kembali ke sesi yang masih berjalan.

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

Layar **Kredensial** menyimpan catatan nama pengguna/kata sandi atau nama pengguna/kunci privat yang dapat digunakan kembali. Kredensial tersimpan dapat dipilih dari dialog penyiapan server, sehingga Anda tidak perlu memasukkan ulang informasi login yang sama untuk setiap host.

Catatan kredensial disimpan secara lokal di perangkat Android. Lindungi perangkat dengan kunci layar jika Anda menyimpan kata sandi, frasa sandi, atau kunci privat.

## Menggunakan kunci privat

Mobile SSH mendukung kunci privat yang ditempel dan impor kunci melalui pemilih berkas Android. Implementasi aplikasi mendukung kunci Ed25519, RSA, ECDSA, dan DSA.

Untuk menggunakan kunci privat:

1. Buka **Kredensial** atau dialog edit server.
2. Tempel teks kunci privat, atau pilih **Impor dari berkas**.
3. Masukkan frasa sandi kunci di kolom kata sandi/frasa sandi jika kunci terenkripsi.
4. Simpan kredensial atau server.

Impor kunci privat menggunakan pemilih berkas Android untuk berkas kunci. Transfer berkas menggunakan peramban berkas lokal terpisah dan dapat meminta akses penyimpanan yang lebih luas pada versi Android yang lebih baru.

## Sesi terbaru

Layar awal menampilkan sesi terbaru. Sesi terbaru dapat terhubung kembali ke kumpulan server yang sama. Jika sesi sebelumnya masih aktif, Mobile SSH kembali ke sesi itu alih-alih memulai koneksi ganda.

## Sesi aktif

Saat ada sesi berjalan, layar awal menampilkan **Sesi Aktif** dengan jumlahnya. Ketuk untuk kembali ke kisi terminal. Kembali ke layar awal tidak selalu memutus sesi SSH aktif; menutup panel atau mengakhiri aktivitas terminal akan memutusnya.

## Pengaturan pertama yang berguna

Buka **Pengaturan** dari layar awal:

- Aktifkan ketuk untuk menampilkan keyboard jika Anda ingin keyboard muncul saat mengetuk terminal.
- Nonaktifkan saran IME jika saran keyboard mengganggu program terminal seperti Vim, less, htop, atau aplikasi tmux layar penuh.

## Bahasa

Mobile SSH mengikuti bahasa sistem Android. Aplikasi disertai terjemahan untuk bahasa Arab, Bengali, Tionghoa (Sederhana dan Tradisional), Inggris, Prancis, Jerman, Hindi, Indonesia, Jepang, Marathi, Pidgin Nigeria, Portugis, Rusia, Spanyol, Tamil, Telugu, Turki, dan Urdu. Ubah bahasa di **Pengaturan → Sistem → Bahasa** Android, bukan dari dalam aplikasi.

## Catatan keamanan

Hanya terhubung ke server yang Anda percayai. Aplikasi saat ini menyimpan data koneksi secara lokal dan tidak menyediakan brankas cloud atau sinkronisasi lintas perangkat. Implementasi saat ini juga tidak menampilkan konfirmasi host yang dikenal, jadi hindari terhubung melalui jaringan tepercaya rendah ketika identitas host penting.
