# syauqqii.github.io

Situs pribadi statis: HTML, CSS, dan sedikit JavaScript. Tanpa build step.

## Struktur

- `index.html`: kerangka halaman saja.
- `js/content.js`: semua teks dan link. Edit di sini untuk mengubah isi.
- `css/tokens.css`: warna, font, ukuran, jarak, lebar, durasi gerak. Edit di sini untuk mengubah tampilan.
- `css/style.css`: aturan tata letak, hanya memakai variabel dari `tokens.css`.
- `js/theme.js`: memilih tema terang atau gelap sebelum halaman tampil.
- `js/main.js`: membangun halaman dari `content.js`.
- `img/foto.png`: foto. Untuk menyembunyikannya, set `photo.show` ke `false` di `content.js`.
- `files/CV-Dimas-Syauqi-Syafa.docx`: file yang diunduh lewat tombol Unduh CV. Timpa file ini saat CV diperbarui.

## Mengganti tema

Palet terang ada di `:root`, palet gelap di `:root[data-theme="dark"]`, keduanya di `css/tokens.css`.
Warna aksen ada di `--c-accent`. Untuk foto hitam putih, isi `--photo-filter: grayscale(1);`.
Font dimuat dari Google Fonts di `index.html`. Kalau diganti, ubah juga `--font-display` dan `--font-body`.

## Mencoba di komputer

Buka `index.html` langsung di browser, atau jalankan `python -m http.server` di folder ini.
