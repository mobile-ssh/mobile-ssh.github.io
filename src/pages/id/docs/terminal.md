---
layout: ../../../layouts/DocLayout.astro
title: "Terminal"
description: "Kontrol terminal Mobile SSH, tombol tambahan, panel, gulir, perilaku tmux, tindakan salin, pengaturan keyboard, dan peringatan agen."
---

# Terminal

Terminal Mobile SSH dibuat untuk operasi di ponsel dan tablet. Ia menggabungkan kanvas terminal, baris tombol tambahan, panel multi-sesi, penanganan gulir, dan perilaku koneksi ulang.

## Dasar terminal

- Terminal memakai perilaku gaya xterm dengan dukungan warna dan penanganan tombol kursor.
- Buffer gulir balik menyimpan hingga 5000 baris.
- Ketuk panel untuk memilihnya sebelum mengetik.
- Cubit panel terminal untuk mengubah ukuran teks. Mobile SSH mengubah ukuran PTY jarak jauh setelah gerakan berhenti.
- Ketuk dua kali panel untuk masuk mode layar penuh. Gunakan Kembali untuk kembali ke kisi.

## Kisi multi-sesi

Mobile SSH dapat menjalankan hingga delapan sesi SSH sekaligus. Setiap sesi tampil sebagai panel di kisi terminal. Header panel menampilkan tujuan atau judul saat ini. Ketuk panel untuk memilihnya, atau gunakan **+ Add Session** untuk memulai koneksi lain.

Menutup panel memutus sesi SSH tersebut. Kembali ke layar awal menjaga sesi aktif tetap tersedia melalui **Active Sessions**.

## Baris tombol tambahan

Baris tombol tambahan tampil di atas keyboard Android dan menyediakan tombol terminal yang sulit diakses pada keyboard sentuh:

- `ESC`
- `TAB`
- `CTRL`
- `Shift`
- Tombol panah
- `HOME`
- `END`
- `PGUP`
- `PGDN`
- Pengalih keyboard

`CTRL` dan `Shift` bertindak sebagai pengubah lengket untuk input berikutnya yang kompatibel. Misalnya, ketuk `CTRL`, lalu ketik `C` untuk mengirim Ctrl-C.

## Perilaku keyboard

Mobile SSH memiliki dua pengaturan terkait keyboard:

- **Tap terminal to show keyboard:** saat aktif, mengetuk terminal meminta Android menampilkan metode input.
- **Keyboard suggestions:** saat aktif, keyboard yang kompatibel dapat menampilkan saran di prompt shell. Nonaktifkan ini jika saran mengganggu program terminal.

Saat saran aktif, Mobile SSH menyangga teks yang sedang disusun hingga batas kata sehingga koreksi keyboard dapat mengganti kata saat ini sebelum dikirim ke shell jarak jauh. Tombol kontrol dan kord terminal melewati buffer tersebut, sehingga pintasan seperti perintah prefiks tmux tetap tiba dengan cepat.

Input suara (tombol mikrofon Gboard) dialirkan melalui buffer teks yang sama, jadi teks dikte dikirim setelah selesai dikenali, bukan karakter demi karakter.

## Pilih, salin, bagikan

Tekan lama di dalam terminal untuk masuk mode pemilihan. Bilah pemilihan menawarkan tiga tindakan:

- **Copy** — menaruh teks terpilih ke papan klip Android.
- **Share** — meneruskan teks terpilih ke lembar berbagi Android (surel, catatan, perpesanan, dll.).
- **Select all** — memperluas pemilihan ke seluruh buffer terminal yang terlihat, lalu Copy atau Share.

## Menggulir

Mobile SSH mengarahkan gerakan gulir berdasarkan status terminal:

- Pada keluaran shell biasa, menggesek menggulir buffer gulir balik lokal.
- Pada aplikasi terminal mode mouse, menggulir mengirim urutan escape roda mouse.
- Pada aplikasi layar alternatif tanpa mode mouse, seperti banyak sesi tmux, menggulir masuk mode salin tmux dan mengirim perintah gulir per baris.

Jika Anda mengetik saat menggulir balik, Mobile SSH kembali ke tampilan terminal langsung.

## Perilaku tmux

Mobile SSH mengamati perintah tmux keluar untuk attach dan sesi baru, seperti:

```bash
tmux attach -t work
tmux a -t work
tmux new -A -s work
```

Saat koneksi putus ketika Anda berada di tmux, aplikasi dapat mengingat nama sesi tmux terakhir untuk server itu dan mencoba menyambung ulang setelah terhubung kembali. Jika tidak ada nama sesi eksplisit yang teramati tetapi aplikasi tahu Anda berada dalam sesi mirip tmux layar alternatif, ia dapat mencoba `tmux attach` umum.

Perilaku ini bersifat upaya terbaik. Jika sesi tmux jarak jauh tidak ada lagi, shell jarak jauh tetap tersedia.

## Agent alerts

Mobile SSH dapat memantau keluaran terminal sesi aktif untuk pola yang menandakan agen jarak jauh sedang menunggu input. Ketika kecocokan terdeteksi — misalnya, Claude Code atau Codex berhenti untuk menunggu konfirmasi — aplikasi mengirim notifikasi dengan suara dan getaran opsional.

Untuk mengonfigurasi:

1. Buka **Settings** dari layar awal.
2. Aktifkan **Agent alerts**.
3. Pilih suara notifikasi dan pola getaran.

Peringatan diputar melalui output audio yang sedang aktif, termasuk headphone, sehingga Anda dapat mendengarnya saat menonton video atau saat ponsel terkunci. Notifikasi muncul bahkan ketika Mobile SSH berjalan di latar belakang.

Pola peringatan agen dicocokkan dengan keluaran terminal yang terlihat. Jika alat jarak jauh Anda menampilkan baris prompt yang dapat dikenali (nama pengguna, tanda `?`, pertanyaan dalam tanda kurung), aplikasi mungkin menangkapnya secara otomatis. Jika peringatan terlalu sering muncul atau tidak muncul sama sekali, sesuaikan sensitivitasnya di Settings.

## Program terminal layar penuh

Untuk program seperti Vim, less, htop, alat ncurses, dan panel tmux:

- Nonaktifkan keyboard suggestions jika keyboard mulai menyangga input dengan cara yang tidak diharapkan program.
- Gunakan baris tombol tambahan untuk `ESC`, panah, `PGUP`, dan `PGDN`.
- Gunakan zoom cubit jika teks terlalu kecil, lalu tunggu sebentar agar ukuran terminal jarak jauh stabil.
