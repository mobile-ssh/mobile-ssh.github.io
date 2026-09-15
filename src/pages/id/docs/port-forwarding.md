---
layout: ../../../layouts/DocLayout.astro
title: "Penerusan port"
description: "Atur terowongan SSH dan host perantara di Android/iOS, serta VPN, proxy SOCKS5, perutean dan DNS di Android."
---

# Penerusan port

Mobile SSH mendukung penerusan port SSH lokal di Android maupun iOS. Sebuah port lokal di perangkat mendengarkan di `127.0.0.1` dan meneruskan lalu lintas melalui koneksi SSH ke host dan port jarak jauh.

Android juga memiliki halaman **VPN** untuk SSH VPN, proxy SOCKS5 lokal, WireGuard, Shadowsocks dan OpenVPN. Profil ini terpisah dari penerusan lokal di bawah.

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

Penerusan lokal disimpan dalam profil server dan dijalankan saat terhubung. Untuk mengubahnya, sunting profil dan hubungkan ulang.

Terowongan tersimpan kembali setiap kali tersambung, termasuk saat beralih ke jaringan baru.

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

## Koneksi melalui host perantara

Pada kedua platform, server SSH dapat terhubung melalui daftar bastion tersimpan berurutan. Sunting tujuan, tambahkan di **Hubungkan melalui**, lalu urutkan. Tiap lompatan memakai kredensialnya sendiri; rute yang diperluas maksimal delapan lompatan.

Ponsel mencapai bastion pertama; alamat berikutnya harus terjangkau dari server sebelumnya. Penerusan lokal, terminal dan SFTP memakai rute SSH terverifikasi yang sama. Tujuan penerusan dicapai dari server SSH terakhir. Setiap bastion harus mengizinkan penerusan TCP dan identitas tiap server diperiksa sebelum autentikasi. Rute ini memerlukan SSH, bukan Eternal Terminal.

## Perutean VPN di Android

Buka **VPN** dari beranda, tambah atau impor profil bernama, lalu ketuk **Mulai**. Setujui permintaan VPN Android. Ikon menjadi **Hentikan perutean** selama aktif; pensil menyunting, tempat sampah menghapus. Jenis yang sering dipakai tampil lebih awal.

Android menyediakan satu VPN perangkat pada satu waktu. Memulai profil lain mengganti VPN sebelumnya. Proxy SSH SOCKS5 lokal dapat tetap berjalan melalui VPN non-SSH. Tailscale memakai aplikasi terpisah; memulai VPN Mobile SSH menggantinya. IKEv2/IPsec dikelola lewat pengaturan VPN Android, bukan Mobile SSH.

### SSH VPN dan proxy SOCKS5

- **SSH VPN:** pilih server SSH tersimpan beserta kredensial dan host perantara, lalu semua atau aplikasi/situs tertentu. Server perlu izin TCP tanpa pembantu VPN. SSH membawa TCP dan DNS jarak jauh; UDP lain yang diarahkan ke SSH diblokir sehingga peramban dapat beralih dari QUIC ke TCP.
- **Proxy SOCKS5:** pilih server pada editor terpisah dan atur setiap aplikasi memakai proxy lokal serta DNS jarak jauh. Bawaan `127.0.0.1:1080` dengan sandi yang dibuat otomatis. **Salin URL proxy dengan kredensial** memberi `socks5h://` bagi klien kompatibel. Mode ini dapat memakai VPN aktif, termasuk Tailscale. Hanya satu profil SSH VPN atau SSH SOCKS5 berjalan sekaligus.

Masukkan domain seperti `example.org`, termasuk subdomainnya. Domain teridentifikasi di luar daftar memakai jaringan normal. IP langsung dan alamat dari DNS terenkripsi tidak dapat dicocokkan andal sehingga memakai SSH. SSH VPN menerapkan pilihan aplikasi dan situs sekaligus; klien SOCKS5 dipilih melalui pengaturan kliennya.

DNS jarak jauh memakai `1.1.1.1:53` secara bawaan; tentukan resolver numerik yang dicapai server SSH. Selama menyambung ulang atau autentikasi, trafik SSH tetap diblokir sementara tujuan pintasan yang dikenal berjalan normal. Berhenti, berganti profil, pencabutan izin atau penghentian aplikasi mengakhiri perlindungan. Tidak ada jaminan VPN selalu aktif atau penguncian Android.

### WireGuard, Shadowsocks dan OpenVPN

- **WireGuard:** impor atau tempel `.conf` standar. `AllowedIPs` menentukan rute, `DNS` menentukan resolver. Periksa jabat tangan peer dan penghitung; antarmuka aktif bukan bukti peer terjangkau.
- **Shadowsocks:** impor `ss://` atau isi server, port, sandi, cipher dan DNS. Cipher: AES-128-GCM, AES-256-GCM, ChaCha20-Poly1305. TCP/UDP memakai terowongan; server perlu relai UDP untuk UDP dan DNS. Tautan yang butuh plugin dan AEAD-2022 tidak didukung.
- **OpenVPN:** impor `.ovpn` mandiri dengan sertifikat dan kunci tertanam. Nama pengguna/sandi dan sandi kunci privat terenkripsi didukung. Verifikasi sertifikat wajib. Profil/server menentukan rute dan DNS; terowongan penuh memerlukan DNS VPN. Berkas eksternal, skrip, plugin, TAP dan tantangan interaktif tidak didukung.

Aplikasi menyertakan mesin protokol tersebut. Shadowsocks dan OpenVPN tidak memiliki pemilih aplikasi/situs SSH VPN. VPN juga tidak memberi server akses internet yang dibatasi penyedia atau administrator.

### Ubin Pengaturan Cepat

Jalankan profil VPN sekali untuk memilihnya pada ubin **Mobile SSH VPN**. Ubin menyala selama VPN aktif, termasuk saat menyambung atau menyambung ulang. Ketuk untuk berhenti lalu ketuk lagi untuk menjalankan profil tersimpan. Ubin tidak menjalankan SOCKS5 atau menghentikan VPN aplikasi lain.

Pada Android 13 ke atas, membuka VPN pertama kali meminta izin menambahkan ubin. Jika ditolak atau Android lebih lama, tambahkan melalui **Pengaturan Cepat → Edit**. Profil terhapus atau izin kurang membuka halaman VPN untuk penyiapan.

## Pemecahan masalah tunnel

- Pastikan sesi SSH sudah terhubung — penerusan baru aktif setelah sesinya aktif.
- Periksa bahwa port lokal belum dipakai.
- Periksa bahwa host dan port jarak jauh dapat dijangkau dari server SSH.
- Gunakan `localhost` ketika layanan tujuan ada di server SSH itu sendiri.
- Gunakan nama DNS internal server atau IP saat meneruskan ke host lain di belakang server SSH.
- Untuk bastion, periksa kredensial, identitas dan izin TCP tiap lompatan.
- Untuk VPN, periksa server/konfigurasi, DNS, izin Android dan VPN aktif lain. Lihat [panduan pemecahan masalah](../troubleshooting/) untuk tiap protokol.
