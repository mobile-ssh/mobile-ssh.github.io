---
layout: ../../../layouts/DocLayout.astro
title: "Transfer berkas"
description: "Panduan transfer berkas SFTP Mobile SSH untuk berkas lokal, berkas jarak jauh, unggah, unduh, pengurutan, dan izin."
---

# Transfer berkas

Mobile SSH menyertakan layar transfer berkas SFTP yang terikat ke koneksi SSH aktif. Ini ditujukan untuk pemeliharaan server cepat dari ponsel atau tablet Anda: mengunggah konfigurasi, mengunduh log, mengganti nama berkas jarak jauh, atau memeriksa izin tanpa meninggalkan aplikasi.

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

Aplikasi mengingat sepuluh jalur jarak jauh terakhir per host — buka dari header panel jarak jauh di Android, atau ikon jam di iOS. Pengaturan pengurutan diingat per host untuk kedua panel. Tidak ada riwayat jalur lokal: di Android panel lokal adalah folder yang Anda berikan izinnya, dan di iOS ia adalah area dokumen milik aplikasi sendiri.

Layar transfer berkas mengikuti tema terang atau gelap sistem Anda, sehingga selaras dengan bagian lain Mobile SSH.

### Di mana setiap sesi terbuka (Android)

Membuka File Transfer dari panel yang ter-attach ke sesi tmux mengembalikan panel jarak jauh ke tempat **sesi itu** terakhir bekerja, dengan nama sesinya tertera di header panel. Sesi yang belum pernah Anda gunakan untuk membukanya dimulai dari direktori yang paling sering Anda pakai di host itu, lalu direktori terakhir host tersebut, lalu direktori home Anda.

Jika direktori yang diingat ternyata sudah dihapus, aplikasi menuruni daftar itu sampai ada yang benar-benar dapat ditampilkan, alih-alih meninggalkan Anda pada pesan galat — dan ia tidak menuliskan kembali jalur yang rusak itu. Di iOS satu direktori jarak jauh diingat per host.

## Akses penyimpanan

Mobile SSH tidak meminta izin penyimpanan menyeluruh di kedua platform.

Di Android Anda memberikan izin untuk **satu folder** dengan pemilih folder sistem, dan unduhan ditulis ke sana — tempat yang sudah dapat dibaca setiap aplikasi lain. Izin itu bertahan di seluruh peluncuran berikutnya.

Di iOS panel lokal adalah area dokumen milik aplikasi, dan berkas masuk melalui pemilih dokumen dan foto sistem.

Di iOS, panel lokal bekerja dengan area dokumen milik aplikasi sendiri, dan Anda memasukkan berkas melalui pemilih dokumen dan foto sistem — termasuk impor multi-pilih untuk foto dan dokumen. Tidak diperlukan izin penyimpanan terpisah.

Impor kunci privat terpisah dari transfer berkas dan menggunakan pemilih berkas sistem.

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

Unduhan berukuran besar sebaiknya dilakukan di jaringan yang stabil bila memungkinkan.

## Menyalin seluruh folder

Unggahan dan unduhan tidak terbatas pada satu berkas. Pilih sebuah folder dan Mobile SSH menyalin seluruh subpohon ke kedua arah — dari ponsel ke jarak jauh dan dari jarak jauh ke ponsel — membuat direktori tujuan terlebih dahulu lalu mengantrekan setiap berkas. Subdirektori yang tidak dapat dibaca tidak menghentikan sisa penyalinan; di Android ia dilaporkan sebagai baris gagal bertuliskan "Can't list directory", sedangkan iOS melanjutkan tanpa mencantumkan apa yang dilewatinya.

## Tindakan berkas jarak jauh

Bergantung pada item jarak jauh yang dipilih, Mobile SSH dapat menampilkan tindakan seperti:

- Unduh, atau **Copy to phone** di Android.
- Salin atau pindahkan **di server** — `cp -r` / `mv` dijalankan di host tanpa datanya melewati ponsel Anda.
- Ganti nama.
- Hapus.
- Buat berkas atau direktori.
- Edit berkas teks.
- Kompres ke `.tar.gz`.
- Izin — ubah mode dan pemilik, dengan opsi untuk menerapkannya ke seluruh folder.
- Buka di aplikasi lain.
- Lihat detail berkas.

Detail berkas jarak jauh dapat mencakup bit izin, pemilik, grup, dan nilai izin oktal. Gunakan detail ini sebelum mengubah berkas server yang dikelola oleh proses atau alat penyebaran lain.

Ukuran berkas ditampilkan dalam satuan biner, sehingga sesuai dengan yang dicetak `ls -h` di terminal satu tab di sebelahnya.

## Pengurutan dan jalur terbaru

Setiap panel dapat mengurutkan berdasarkan nama atau tanggal secara naik atau turun. Mobile SSH menyimpan mode pengurutan lokal dan jarak jauh yang dipilih per host, bersama jalur terbaru, sehingga transfer berulang ke server yang sama dimulai dari lokasi yang familier.

## Antrean transfer

Transfer diantrekan dan ditampilkan menurut status, dan lognya menampilkan setiap transfer serta dapat digulir — Android membaginya dalam tab Queued / Failed / Successful, iOS dalam Active / Failed / Done. Transfer yang gagal menyertakan alasan bila operasi SFTP yang mendasari menyediakannya. Di iOS, berkas yang sedang ditransfer tetap berada di puncak tab Active, dan sebuah baris dapat dibatalkan di tengah jalan.

## Mengeluarkan berkas dari aplikasi

- **Android:** unduhan mendarat di folder yang Anda berikan izinnya, jadi sudah terlihat oleh setiap aplikasi lain. **Open in another app** tersedia di kedua panel; berkas jarak jauh diunduh lebih dulu, lalu diserahkan.
- **iOS:** Mobile SSH muncul di aplikasi Files di bawah **On My iPhone**, sehingga apa pun di panel My Phone dapat dijangkau dari Mail, pemilih berkas, dan aplikasi lain. Tekan lama berkas yang sudah diunduh lalu pilih **Open in another app** untuk menyerahkannya, meng-AirDrop-kannya, atau menyimpannya di tempat lain.

## Mengirim berkas ke dalam sesi (Android)

Android menerima berkas yang dibagikan ke dalamnya dari aplikasi mana pun: bagikan ke Mobile SSH dan berkasnya diunggah ke `~/.cache/mobile-ssh` di host panel tersebut, dengan jalur jarak jauhnya diketikkan di prompt sehingga Anda bisa langsung memakainya. Tombol 📎 di bilah alat terminal melakukan hal yang sama dari pemilih berkas sistem, dan keduanya menerima beberapa berkas sekaligus.

Di iOS, masukkan berkas ke panel lokal dengan tombol ＋ lalu unggah dari sana.

## Tips praktis

- Gunakan SFTP untuk pemindahan berkas tertentu; gunakan alat baris perintah seperti `rsync` di server untuk sinkronisasi direktori besar.
- Hindari mengedit berkas produksi langsung kecuali Anda memiliki cadangan atau jalur rollback penyebaran.
- Jika berkas tidak muncul setelah diunggah, segarkan panel jarak jauh atau verifikasi jalur tujuan.
- Jika panel lokal Android kosong, pilih sebuah folder dengan **Pick folder** — aplikasi hanya punya akses ke folder yang Anda berikan. Di iOS, gunakan pemilih sistem untuk menambahkan berkas ke panel lokal.
