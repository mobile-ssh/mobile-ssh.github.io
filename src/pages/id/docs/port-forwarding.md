---
layout: ../../../layouts/DocLayout.astro
title: "Penerusan port"
description: "Sintaks penerusan port lokal Mobile SSH, tujuan IPv6, dan cara tunnel tersimpan aktif di Android dan iOS."
---

# Penerusan port

Mobile SSH mendukung penerusan port SSH lokal di Android maupun iOS. Sebuah port lokal di perangkat mendengarkan di `127.0.0.1` dan meneruskan lalu lintas melalui koneksi SSH ke host dan port jarak jauh.

## Sintaks tunnel tersimpan

Aturan penerusan port dipisahkan koma. Setiap entri memakai salah satu dari dua bentuk:

```text
PORT
LOCAL:REMOTEHOST:REMOTE
```

Bentuk singkat:

```text
8080
```

Ini mengikat `127.0.0.1:8080` di perangkat dan meneruskannya ke `localhost:8080` dari sudut pandang server.

Bentuk penuh:

```text
3000:localhost:3000
```

Ini mengikat `127.0.0.1:3000` di perangkat dan meneruskannya melalui SSH ke `localhost:3000` di sisi jarak jauh.

Beberapa penerusan sekaligus:

```text
8080, 3000:localhost:3000, 15432:db.internal:5432
```

## Menambah tunnel ke server tersimpan

1. Buka **Saved Servers**.
2. Tambah atau edit profil server.
3. Masukkan aturan penerusan di **Port forwards**.
4. Simpan server.
5. Terhubung ke server.

Aplikasi menerapkan penerusan tersimpan setelah sesi SSH terhubung.

## Tunnel adalah bagian dari profil server

Penerusan dideklarasikan pada server tersimpan dan diaktifkan saat server itu tersambung. Tidak ada layar terpisah untuk menambah atau menghapus tunnel di tengah sesi, baik di Android maupun iOS: untuk mengubah penerusan Anda, edit profil server lalu sambung ulang.

Ini adalah pertukaran yang disengaja — tunnel yang tinggal di dalam profil akan kembali setiap kali Anda menyambung, termasuk setelah penyambungan ulang di jaringan baru, tanpa perlu Anda bangun ulang secara manual.

## Tujuan IPv6

Tujuan IPv6 harus ditulis dalam kurung siku agar titik duanya tidak tertukar dengan pemisah port:

```text
8080:[2001:db8::1]:80
```

Alamat IPv6 telanjang tanpa kurung siku ditolak karena ambigu, alih-alih diam-diam salah dibaca. Bentuk kurung siku yang sama berlaku di kolom alamat sebuah server, dengan port opsional setelahnya (`[fe80::1]:22`).

## Pengikatan alamat

Mobile SSH mengikat penerusan lokal ke `127.0.0.1` di perangkat. Ini disengaja: menjaga tunnel tetap lokal di perangkat dan menghindari kejutan loopback khusus IPv6. Aplikasi lain di perangkat yang sama mungkin dapat terhubung ke port lokal yang diteruskan jika sistem operasi mengizinkan akses jaringannya.

## Contoh umum

Mengakses layanan web yang berjalan di server jarak jauh:

```text
8080
```

Lalu buka `http://127.0.0.1:8080` dari peramban di perangkat yang sama.

Mengakses server pengembangan:

```text
3000:localhost:3000
```

Mengakses basis data internal yang dapat dijangkau dari server SSH:

```text
15432:db.internal:5432
```

## Pemecahan masalah tunnel

- Pastikan sesi SSH sudah terhubung — penerusan baru aktif setelah sesinya aktif.
- Periksa bahwa port lokal belum dipakai.
- Periksa bahwa host dan port jarak jauh dapat dijangkau dari server SSH.
- Gunakan `localhost` ketika layanan tujuan ada di server SSH itu sendiri.
- Gunakan nama DNS internal server atau IP saat meneruskan ke host lain di belakang server SSH.
