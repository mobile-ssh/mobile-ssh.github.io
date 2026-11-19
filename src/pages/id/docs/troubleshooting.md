---
layout: ../../../layouts/DocLayout.astro
title: "Pemecahan masalah"
description: "Atasi masalah koneksi Mobile SSH, identitas, kunci keamanan, terminal, berkas, VPN, cadangan dan desktop jarak jauh."
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

## Identitas server memerlukan perhatian

Kedua platform memeriksa identitas SSH sebelum mengirim kredensial. Di iOS, kunci asing perlu konfirmasi sidik jari dan **Percayai dan hubungkan ulang**. Di Android, **Pengaturan → Umum → Keamanan → Terima identitas SSH baru secara otomatis** aktif secara bawaan: kunci mentah pertama disimpan, koneksi berikutnya harus cocok. Matikan untuk memeriksa sidik jari baru sebelum menyambung.

Bandingkan sidik jari SHA-256 baru atau berubah dengan administrator melalui saluran tepercaya. Perubahan bisa berarti server diganti atau server tak terduga; jangan hapus identitas lama sebelum memastikan alasannya. Tinjau identitas di Pengaturan. Alamat alternatif dan bastion tidak melewati pemeriksaan.

Android juga mendukung otoritas sertifikat host dengan lingkup tertentu dan pencabutan. Otoritas asing, sertifikat kedaluwarsa atau tidak valid, dan kunci yang dicabut tetap diblokir meskipun penerimaan otomatis saat pertama digunakan aktif. Di iOS, **Pengaturan → Identitas server → Impor kunci yang dicabut** menerima entri OpenSSH `@revoked` Ed25519/ECDSA dengan lingkup tertentu. Tempelan yang memuat entri tidak didukung ditolak seluruhnya; entri CA, sertifikat, kunci RSA, dan nama host yang di-hash tidak didukung. Pencabutan mengesampingkan kepercayaan sebelumnya saat koneksi baru dan koneksi ulang, tetapi tidak menutup koneksi yang sudah ada. Identitas dan pencabutan tidak disertakan dalam cadangan. Di iOS, verifikasi server asing di aplikasi utama sebelum mengunggah melalui Ekstensi Berbagi.

## Tidak dapat terhubung melalui host perantara

Periksa alamat/kredensial setiap bastion dan akses ponsel ke yang pertama. Host selanjutnya harus terjangkau dari sebelumnya. Bastion harus mengizinkan TCP termasuk batas `permitopen`. Rute harus SSH, tanpa siklus, maksimal delapan lompatan diperluas.

Bastion terhapus atau tidak ditemukan tidak menyebabkan koneksi langsung. Perbaiki rute lalu hubungkan ulang. Status dan log Android membedakan lompatan gagal dari server tujuan.

## Autentikasi gagal

Periksa:

- Ejaan nama pengguna.
- Kata sandi atau frasa sandi kunci.
- Apakah server mengizinkan login kata sandi, login kunci, atau keduanya.
- Apakah kunci privat cocok dengan kunci publik di `authorized_keys` pengguna server.
- Apakah berkas kunci diimpor sepenuhnya, termasuk baris header dan footer.

Untuk kunci privat terenkripsi, masukkan frasa sandi di kolom kata sandi/frasa sandi.

Di Android, `ssh` atau `git` jarak jauh perlu **Teruskan agen SSH** pada profil dan izin server. Hanya kunci tersimpan yang dapat digunakan ditawarkan. Permintaan Izinkan/Tolak atau kunci fisik dapat menjeda terminal, berkas dan terowongan hingga 30 detik; jawab dari aplikasi atau notifikasinya.

## Impor kunci privat gagal

Impor kunci privat menggunakan pemilih berkas sistem. Jika impor gagal:

- Pastikan file terpilih adalah kunci privat, bukan file publik `.pub`.
- Buka file di editor teks tepercaya dan pastikan blok kuncinya lengkap.
- Di Android, file kunci yang diimpor tidak boleh lebih besar dari 64 KB; pilih kuncinya sendiri, bukan arsip atau file lain.
- Coba tempel kunci secara manual ke kolom kunci privat.
- Pastikan jenis kunci didukung: Ed25519, ECDSA (P-256/384/521), atau RSA di Android; Ed25519 atau ECDSA di iOS. DSA (`ssh-dss`) tidak berfungsi di keduanya, dan iOS tidak mendukung RSA — buat kunci Ed25519 sebagai gantinya.

## Kunci keamanan tidak merespons di Android

Android mendukung CTAP2/FIDO2 `ed25519-sk` dan `ecdsa-sk` melalui USB/NFC. Gunakan kunci fisik pembuat berkas impor. USB butuh mode host dan izin; aktifkan NFC dan tahan kunci di ponsel hingga selesai. Masukkan PIN saat diminta lalu sentuh kuncinya.

Server memerlukan OpenSSH 8.2+ dengan algoritme `sk-*` yang diizinkan. Kunci U2F saja dan penemuan kredensial residen tidak didukung. Waktu login bisa habis saat mencari kunci: siapkan dahulu. Untuk permintaan latar belakang, buka notifikasi atau kembali ke aplikasi. iOS tidak mendukung autentikasi kunci keamanan fisik.

## Input keyboard tertunda atau berubah

Android mengirim tombol langsung tanpa koreksi otomatis/prediksi. Di iOS, **Dikte dan saran** aktif secara bawaan untuk suara dan koreksi baris. Jika mengubah masukan shell tak terduga, matikan, tinjau **Saran papan ketik**, lalu buka panel baru.

Gunakan baris tambahan untuk `ESC`, `TAB`, `CTRL`, panah, `HOME`, `END`, `PGUP` dan `PGDN`. Jaringan macet juga menunda masukan. Header Android menunjukkan **tidak ada balasan** atau **tidak terkirim**; ketikan saat menyambung ulang dibuang, tidak diulang di shell baru. Tunggu, periksa prompt dan ketik ulang yang perlu saja.

## Chat hanya-baca di Android

Pastikan server memiliki Python 3.8 atau lebih baru, pilih percakapan Claude Code atau Codex yang dimaksud, lalu pasang hook yang ditawarkan di Chat. Selesaikan persetujuan kepercayaan penyedia atau pemuatan ulang/pelanjutan native yang diperlukan untuk memuatnya. Agen yang sudah berjalan mungkin belum memuat hook yang baru dipasang; Mobile SSH tidak akan memulai ulang agen untuk Anda.

## Gulir tmux tidak seperti yang diharapkan

Mobile SSH mengubah perilaku gulir berdasarkan status terminal. Di tmux atau program layar alternatif lain, gerakan gulir dapat mengirim perintah mode salin tmux alih-alih menggulir riwayat lokal. Jika mode mouse tmux aktif, aplikasi mengirim escape sequence roda mouse.

Jika gulir terasa salah:

- Coba aktifkan atau nonaktifkan mode mouse tmux di server jarak jauh.
- Gunakan `PGUP` dan `PGDN` dari baris tombol tambahan.
- Ketuk dua kali panel untuk layar penuh sebelum menggulir keluaran padat.
- Lepas dan sambung ulang tmux jika ukuran terminal jarak jauh tampak usang.

Di Android, menggulir ke bawah keluar otomatis dari mode salin tmux buatan aplikasi jika indikator standar terlihat. Tata letak khusus atau terbagi tanpa indikator mungkin perlu keluar manual. Saat berpindah sesi, periksa server, soket tmux dan nama sesi di pengelola.

## Sesi putus setelah layar terkunci

Di Android, Mobile SSH memakai keepalive, layanan latar depan, wake lock, Wi-Fi lock, dan upaya penyambungan ulang untuk mengurangi pemutusan. Kebijakan baterai Android tetap dapat menghentikan kerja latar belakang.

Periksa:

- Nonaktifkan optimisasi baterai untuk Mobile SSH jika perangkat Anda agresif menghentikan aplikasi latar belakang.
- Jaga Wi-Fi atau data seluler tetap stabil selama sesi panjang.
- Buka kembali Mobile SSH dan ketuk **Active Sessions** setelah membuka kunci.
- Pastikan **Keep sessions running in background** aktif di Settings jika Anda ingin shell bertahan setelah aplikasi digeser dari daftar terkini.
- Jika server memutus sesi SSH, sambung kembali dari layar beranda — **Continue** mencantumkan apa yang masih aktif, dan **Tmux sessions** mencantumkan apa yang menunggu di server.

iOS menangguhkan aplikasi latar belakang sehingga SSH tidak dapat terus aktif setelah berpindah atau mengunci layar. Ada waktu singkat untuk perpindahan cepat. Pilih tmux, Herdr atau Zellij pada **Lampirkan saat terhubung**, atau **Eternal Terminal**, untuk melanjutkan setelah tersambung ulang. Multiplexer harus tetap berjalan di server; Eternal Terminal tidak memakai bastion.

## Transfer berkas tidak dapat menjelajahi berkas ponsel

Mobile SSH tidak meminta izin penyimpanan apa pun di Android. Sebagai gantinya, panel lokal menampilkan satu folder yang Anda berikan izinnya melalui pemilih folder sistem — jika kosong, gunakan **Pick folder** untuk memilih satu. Izin itu bertahan, jadi ini hanya perlu dilakukan sekali.

Jika berkas jarak jauh dimuat tetapi berkas lokal tidak, koneksi SSH baik-baik saja dan Anda memang belum memberikan izin folder apa pun.

Di iOS, panel lokal dimulai di Documents aplikasi. **Ponsel saya → Pilih folder lokal** mengingat folder Files lain. Jika penyedia atau izin tidak tersedia, pilih lagi atau kembali ke folder aplikasi. Unduhan aplikasi muncul di **Di iPhone Saya**; folder eksternal tetap di penyedia aslinya. Izin folder tidak dipindahkan lewat cadangan.

## Unggah atau unduh gagal

Periksa:

- Sesi SSH masih terhubung.
- Direktori jarak jauh ada.
- Pengguna jarak jauh punya izin membaca atau menulis jalur tersebut.
- Tujuan lokal dapat ditulisi.
- Ada cukup ruang kosong di perangkat.
- Jaringan stabil untuk transfer besar.

Di Android, gunakan **Lanjutkan**, **Coba lagi**, **Mulai ulang**, atau **Coba semua lagi** pada antrean transfer setelah memperbaiki penyebabnya. Lanjutkan memeriksa apakah file parsial masih cocok; gunakan Mulai ulang jika tidak dapat dilanjutkan dengan aman. Indikator unggahan terminal menunjukkan status menunggu atau macet dan menawarkan **Hentikan**.

## Penerusan port gagal

Periksa:

- Port lokal antara `1` dan `65535`.
- Port lokal belum dipakai.
- String tunnel berupa `PORT` atau `LOCAL:REMOTEHOST:REMOTE`.
- Host jarak jauh dan port jarak jauh dapat dijangkau dari server SSH.
- Server SSH mengizinkan penerusan TCP.

## VPN atau proxy tidak membawa trafik di Android

- Mulai profil dari **VPN** dan izinkan Android. VPN perangkat mengganti sebelumnya; gunakan SOCKS5 lokal jika VPN lain harus tetap berjalan.
- Untuk SSH VPN, periksa server, bastion, identitas, izin TCP serta pilihan aplikasi/situs. SSH membawa TCP/DNS, bukan UDP umum.
- Untuk SOCKS5, atur alamat lokal, port, sandi dan DNS jarak jauh pada klien. Proxy aktif tidak mengalihkan semua aplikasi.
- Untuk WireGuard, periksa jabat tangan, kunci, `AllowedIPs` dan DNS. Untuk Shadowsocks, cocokkan cipher/sandi dan relai UDP untuk DNS.
- Untuk OpenVPN, gunakan profil mandiri kompatibel, verifikasi CA/identitas serta kredensial, sediakan DNS VPN bagi terowongan penuh. Perbaiki kesalahan autentikasi/sertifikat lalu mulai ulang profil.

SSH VPN, Shadowsocks dan OpenVPN dapat menahan trafik selama menyambung ulang tanpa beralih langsung. Menghentikan mengakhiri perlindungan. VPN tidak melewati batas internet dari penyedia atau administrator server.

## Cadangan tidak memulihkan semuanya

Tinjau pratinjau dan pilihan **Gabungkan** atau **Ganti**. Bagian yang tidak ada pada cadangan lama/parsial tetap tak berubah. Cadangan lengkap memuat preferensi yang didukung; Android juga menyertakan VPN/proxy. Tidak semua fitur platform dapat dibawa ke iOS; versi lama dapat menolak format cadangan baru.

Identitas, izin sistem dan akses folder tetap lokal. Verifikasi host dan beri izin folder/VPN pada perangkat baru. Kredensial perangkat keras tetap memerlukan kunci fisik. Impor tidak menjalankan VPN; tinjau profil sebelum memulainya.

Android juga tidak menyertakan templat prompt dan draf editor, model yang diunduh, setelan host suara, kredensial cloud VPN Setup, serta cache Chat atau eksekusi prompt. Atur kembali semua ini di perangkat tujuan. Jadwal server terpisah: menonaktifkan templat prompt di ponsel tidak menghentikan eksekusi yang sudah dijadwalkan di server.

## Desktop jarak jauh tidak tersedia atau tidak dapat diubah ukurannya

Buka dari sesi SSH terhubung dan periksa izin penerusan TCP lokal. Di Linux, ikuti pesan paket yang kurang untuk memasang desktop/VNC. Android tidak mencerminkan konsol Wayland; gunakan desktop virtual yang didukung.

Di macOS, aktifkan Berbagi Layar di pengaturan Mac. Android mendukung autentikasi akun Mac; iOS memerlukan akses kata sandi VNC klasik yang diaktifkan dalam Berbagi Layar, menggunakan kata sandi berbagi layar, bukan kata sandi akun Mac. Penampil menunjukkan layar Mac yang sudah ada. Resolusinya mungkin perlu diubah pada Mac. Desktop virtual hanya dapat diubah ukurannya langsung jika server mendukung; memulai ulang desktop buatan aplikasi memerlukan konfirmasi dan menutup programnya. Keluar dari penampil membiarkan desktop jarak jauh tetap berjalan.

## Log debug

Kedua platform merekam hal yang berbeda, jadi pilih yang sesuai dengan masalah Anda.

**Android — terminal, suara, dan perenderan.** Aktifkan **Setelan → Debugging → Tampilkan tombol Debug dan Log**, lalu gunakan tombol **Debug** yang muncul di layar awal. Fitur ini merekam peristiwa terminal, ukuran data SSH, input sentuhan, perilaku perubahan ukuran, dan siklus hidup tunnel. Dialog persetujuan memperingatkan bahwa tombol yang diketik, termasuk kata sandi, dan isi layar ikut direkam. Rekaman suara mencakup transkripsi input dan teks balasan; sampel audio hanya disertakan jika Anda mengaktifkan opsi tersebut secara terpisah di Setelan.

Pilih folder arsip yang dapat ditulis saat memulai rekaman pertama. Mobile SSH mengingatnya; ubah melalui **Setelan → Debugging → Folder arsip debug**. Jika ekspor gagal, arsip tetap berada di ponsel sehingga Anda dapat memilih folder lain dan mencoba lagi.

**iOS — koneksi dan penyambungan ulang.** Aktifkan **Settings → Diagnostics → Record debug log**. Ia merekam setiap alamat yang dihubungi dan alasan kegagalannya, upaya penyambungan ulang beserta backoff-nya, koneksi yang putus, "peer stopped answering keepalives", perubahan jaringan, serta perintah tmux beserta galatnya. Settings menampilkan jumlah baris secara langsung sehingga Anda dapat memastikan ia sedang merekam, dan **Export Debug Log** membagikannya sebagai berkas teks. Log ini disimpan di memori dan hanya mencakup sesi aplikasi saat ini.

Tinjau setiap log atau arsip debug sebelum membagikannya. Isinya dapat mengungkap nama server, alamat, informasi waktu, dan rincian lingkungan lain — serta di Android, rahasia yang diketik, isi layar, transkrip suara, dan audio yang Anda pilih untuk direkam.
