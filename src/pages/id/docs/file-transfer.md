---
layout: ../../../layouts/DocLayout.astro
title: "Transfer berkas"
description: "Panduan transfer berkas SFTP Mobile SSH untuk berkas lokal, berkas jarak jauh, unggah, unduh, pengurutan, dan izin."
---

# Transfer berkas

Mobile SSH menyertakan layar transfer berkas SFTP yang terikat ke koneksi SSH aktif. Ini ditujukan untuk pemeliharaan server cepat dari Android: mengunggah konfigurasi, mengunduh log, mengganti nama berkas jarak jauh, atau memeriksa izin tanpa meninggalkan aplikasi.

## Membuka transfer berkas

1. Terhubung ke server SSH.
2. Pilih panel terminal yang terhubung.
3. Buka **Transfer** dari bilah alat terminal, atau tekan lama header panel bila layar saat ini mendukungnya.
4. Layar transfer berkas terbuka dengan panel lokal dan panel jarak jauh.

Jika tidak ada sesi SSH aktif, transfer berkas tidak dapat dibuka.

## Panel lokal dan jarak jauh

Layar transfer berkas memiliki dua panel peramban:

- **Panel lokal:** penyimpanan ponsel.
- **Panel jarak jauh:** berkas server melalui SFTP.

Aplikasi mengingat jalur lokal dan jarak jauh terbaru per host. Pengaturan pengurutan juga diingat per host untuk kedua panel.

## Izin penyimpanan Android

Pada versi Android yang membatasi penjelajahan berkas langsung, Mobile SSH mungkin meminta akses penyimpanan sebelum panel lokal dapat menjelajahi berkas ponsel. Jika Anda melewati atau menolak izin ini, penjelajahan jarak jauh mungkin tetap berfungsi, tetapi jalur unggah dan unduh lokal bisa terbatas.

Impor kunci privat terpisah dari transfer berkas dan menggunakan pemilih berkas Android.

## Mengunggah berkas

1. Buka panel lokal.
2. Navigasikan ke berkas yang ingin diunggah.
3. Pilih unggah.
4. Konfirmasi tujuan jarak jauh.
5. Pantau antrean transfer untuk kemajuan dan penyelesaian.

Unggahan menggunakan koneksi SSH/SFTP yang ada. Jika koneksi putus, coba lagi setelah terhubung kembali.

## Mengunduh berkas

1. Buka panel jarak jauh.
2. Navigasikan ke berkas yang ingin diunduh.
3. Pilih unduh.
4. Konfirmasi tujuan lokal.
5. Pantau antrean transfer untuk kemajuan dan penyelesaian.

Unduhan besar sebaiknya dilakukan di jaringan stabil bila memungkinkan.

## Tindakan berkas jarak jauh

Bergantung pada item jarak jauh yang dipilih, Mobile SSH dapat menampilkan tindakan seperti:

- Unduh.
- Ganti nama.
- Hapus.
- Buat berkas atau direktori.
- Edit berkas teks.
- Lihat detail berkas.

Detail berkas jarak jauh dapat mencakup bit izin, pemilik, grup, dan nilai izin oktal. Gunakan detail ini sebelum mengubah berkas server yang dikelola oleh proses atau alat penyebaran lain.

## Pengurutan dan jalur terbaru

Setiap panel dapat mengurutkan berdasarkan nama atau tanggal secara naik atau turun. Mobile SSH menyimpan mode pengurutan lokal dan jarak jauh yang dipilih per host, bersama jalur terbaru, sehingga transfer berulang ke server yang sama dimulai dari lokasi yang familier.

## Antrean transfer

Transfer diantrekan dan ditampilkan menurut status. Area log memisahkan transfer yang antre, gagal, dan berhasil. Transfer yang gagal menyertakan alasan bila operasi SFTP yang mendasari menyediakannya.

## Tips praktis

- Gunakan SFTP untuk pemindahan berkas tertentu; gunakan alat baris perintah seperti `rsync` di server untuk sinkronisasi direktori besar.
- Hindari mengedit berkas produksi langsung kecuali Anda punya cadangan atau jalur rollback penyebaran.
- Jika berkas tidak muncul setelah diunggah, segarkan panel jarak jauh atau verifikasi jalur tujuan.
- Jika akses penyimpanan Android memblokir penjelajahan lokal, berikan izin dari Pengaturan Android dan buka kembali transfer berkas.
