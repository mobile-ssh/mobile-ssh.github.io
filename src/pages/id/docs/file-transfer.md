---
layout: ../../../layouts/DocLayout.astro
title: "Transfer berkas"
description: "Transfer SFTP Mobile SSH, folder tersimpan, direktori sesi tmux, antrean, izin dan berbagi berkas ke terminal."
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

Layar transfer berkas memiliki dua panel penjelajah:

- **Panel lokal:** penyimpanan ponsel.
- **Panel jarak jauh:** berkas server melalui SFTP.

Aplikasi mengingat jalur jarak jauh terbaru dan urutan per host. Buka melalui header panel jarak jauh di Android atau ikon jam di iOS. Panel lokal menampilkan folder pilihan; iOS memakai Documents aplikasi sampai Anda memilih yang lain.

Layar transfer berkas mengikuti tema terang atau gelap sistem Anda, sehingga selaras dengan bagian lain Mobile SSH.

### Lokasi awal setiap sesi

Pada kedua platform, membuka Transfer Berkas dari tmux memulihkan direktori untuk **sesi dan soket tersebut**. Sesi baru mencoba direktori yang sering dipakai pada host, lalu lokasi tersimpan lainnya atau direktori masuk.

Jika direktori hilang atau tidak dapat diakses, penjelajah mencoba lokasi berikutnya. Kegagalan koneksi dilaporkan, bukan dianggap folder hilang. Memuat ulang tidak dihitung sebagai kunjungan baru.

## Akses penyimpanan

Mobile SSH tidak meminta izin penyimpanan menyeluruh di kedua platform.

Di Android Anda memberikan izin untuk **satu folder** dengan pemilih folder sistem, dan unduhan ditulis ke sana — tempat yang sudah dapat dibaca setiap aplikasi lain. Izin itu bertahan di seluruh peluncuran berikutnya.

Di iOS, **Ponsel saya → Pilih folder lokal** memberi akses ke folder Files, termasuk iCloud Drive dan penyedia yang didukung. Pilihan bertahan setelah aplikasi dibuka ulang. **Gunakan folder aplikasi** kembali ke Documents Mobile SSH. Jika folder tidak tersedia, pilih lagi atau pindah secara eksplisit; unduhan tidak dialihkan diam-diam. Izin folder perangkat tidak disertakan dalam cadangan.

Pemilih dokumen dan foto iOS juga mengimpor beberapa item. Konflik nama menawarkan **Ganti**, **Simpan keduanya** atau **Batal**. Berkas yang sudah berada di tujuan tetap utuh saat diimpor.

Impor kunci privat terpisah dari transfer berkas dan menggunakan pemilih berkas sistem.

## Mengunggah berkas

1. Buka panel lokal.
2. Navigasikan ke berkas yang ingin diunggah.
3. Pilih unggah.
4. Konfirmasi tujuan jarak jauh.
5. Pantau antrean transfer untuk kemajuan dan penyelesaian.

Unggahan mengikuti rute SSH server terpilih, termasuk host perantara tersimpan. Jika koneksi putus, coba lagi setelah tersambung.

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

- **Salin ke ponsel** untuk mengunduh.
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

Transfer ditampilkan menurut status: Antrean / Gagal / Berhasil di Android dan Aktif / Gagal / Selesai di iOS. Kegagalan menyertakan alasan yang tersedia. Di iOS, transfer saat ini tetap di atas Aktif dan dapat dibatalkan.

Di iOS, antrean tetap memakai folder awal walaupun Anda berpindah. Unduhan selesai di penyimpanan sementara sebelum mengganti tujuan; pembatalan atau kegagalan mempertahankan berkas lama. Jika tujuan berubah setelah izin penimpaan, aplikasi berhenti.

## Mengeluarkan berkas dari aplikasi

- **Android:** unduhan mendarat di folder yang Anda berikan izinnya, jadi sudah terlihat oleh setiap aplikasi lain. **Open in another app** tersedia di kedua panel; berkas jarak jauh diunduh lebih dulu, lalu diserahkan.
- **iOS:** **Buka di aplikasi lain** tersedia untuk berkas lokal dan jarak jauh. Berkas jarak jauh diunduh dahulu, lalu lembar berbagi terbuka. Folder aplikasi ada di **Di iPhone Saya → Mobile SSH**; folder eksternal tetap di lokasi Files semula.

## Mengirim berkas ke sesi

Kedua platform menerima berkas yang dibagikan aplikasi lain dan menawarkan 📎 **Lampirkan berkas** di terminal. Berkas diunggah ke `~/.cache/mobile-ssh` pada host terpilih; jalurnya dapat dimasukkan ke prompt tanpa Enter. Beberapa berkas didukung.

Di Android, berbagi menuju sesi berjalan. Di iOS, klip menawarkan **Perpustakaan Foto** atau **Files**. Ekstensi Berbagi iOS juga mengunggah ke server SSH tersimpan ketika Mobile SSH ditutup; profil Eternal Terminal tidak ditawarkan. Verifikasi identitas asing di aplikasi utama dahulu.

Setelah unggahan lewat ekstensi iOS, jalur disalin ke papan klip dan menunggu panel yang terhubung ke server itu. Jalur tidak dimasukkan ke panel host lain.

## Tips praktis

- Gunakan SFTP untuk pemindahan berkas tertentu; gunakan alat baris perintah seperti `rsync` di server untuk sinkronisasi direktori besar.
- Hindari mengedit berkas produksi langsung kecuali Anda memiliki cadangan atau jalur rollback penyebaran.
- Jika berkas tidak muncul setelah diunggah, segarkan panel jarak jauh atau verifikasi jalur tujuan.
- Jika panel lokal Android kosong, gunakan **Pilih folder**. Di iOS pilih **Pilih folder lokal**, **Gunakan folder aplikasi** atau pemilih impor sesuai lokasi yang diinginkan.
