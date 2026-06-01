---
layout: ../../../layouts/DocLayout.astro
title: "Penerusan port"
description: "Sintaks penerusan port lokal Mobile SSH dan pengelolaan tunnel untuk Android."
---

# Penerusan port

Mobile SSH mendukung penerusan port SSH lokal. Sebuah port lokal di perangkat Android mendengarkan di `127.0.0.1` dan meneruskan lalu lintas melalui koneksi SSH ke host dan port jarak jauh.

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

Ini mengikat `127.0.0.1:8080` di perangkat Android dan meneruskannya ke `localhost:8080` dari sudut pandang server.

Bentuk penuh:

```text
3000:localhost:3000
```

Ini mengikat `127.0.0.1:3000` di perangkat Android dan meneruskannya melalui SSH ke `localhost:3000` di sisi jarak jauh.

Beberapa penerusan:

```text
8080, 3000:localhost:3000, 15432:db.internal:5432
```

## Menambah tunnel ke server tersimpan

1. Buka **Server Tersimpan**.
2. Tambah atau edit profil server.
3. Masukkan aturan penerusan di **Penerusan port**.
4. Simpan server.
5. Terhubung ke server.

Aplikasi menerapkan penerusan tersimpan setelah sesi SSH terhubung.

## Mengelola tunnel aktif

Saat terhubung, pilih sesi dan buka tampilan tunnel dari bilah alat terminal. Dari sana Anda dapat memeriksa penerusan lokal aktif, menambah tunnel baru, atau menghapus penerusan lokal.

## Pengikatan alamat

Mobile SSH mengikat penerusan lokal ke `127.0.0.1` di perangkat Android. Ini disengaja: menjaga tunnel tetap lokal di perangkat dan menghindari kejutan loopback khusus IPv6. Aplikasi lain di perangkat Android yang sama mungkin dapat terhubung ke port lokal yang diteruskan jika Android mengizinkan akses jaringannya.

## Contoh umum

Mengakses layanan web yang berjalan di server jarak jauh:

```text
8080
```

Lalu buka `http://127.0.0.1:8080` dari peramban di perangkat Android.

Mengakses server pengembangan:

```text
3000:localhost:3000
```

Mengakses basis data internal yang dapat dijangkau dari server SSH:

```text
15432:db.internal:5432
```

## Pemecahan masalah tunnel

- Pastikan sesi SSH terhubung sebelum menambah tunnel saat berjalan.
- Periksa bahwa port lokal belum dipakai.
- Periksa bahwa host dan port jarak jauh dapat dijangkau dari server SSH.
- Gunakan `localhost` ketika layanan tujuan ada di server SSH itu sendiri.
- Gunakan nama DNS internal server atau IP saat meneruskan ke host lain di belakang server SSH.
