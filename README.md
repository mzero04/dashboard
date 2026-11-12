# Landing page & dashboard (siap Vercel)

Situs statis tanpa build: cukup HTML, CSS, dan JavaScript.

## Isi

- `index.html`: landing page
- `dashboard.html`: halaman dashboard berisi daftar aplikasi/tautan (dibuka di `/dashboard`)
- `config.js`: **satu-satunya file yang perlu kamu edit** (nama, teks, warna, dan link)
- `style.css`, `app.js`: tampilan dan logika
- `vercel.json`: pengaturan Vercel (URL bersih tanpa `.html`)

## Cara memasukkan link aplikasi

Buka `config.js`, lalu ganti:

```js
appUrl: "https://link-aplikasi-kamu.com",
```

Semua tombol "Buka aplikasi" di kedua halaman otomatis memakai link itu.
Untuk dashboard, ubah daftar `apps` (nama, deskripsi, url, kategori).

## Cara deploy ke Vercel

**Lewat GitHub (disarankan)**
1. Upload folder ini ke repository GitHub.
2. Di vercel.com pilih **Add New > Project**, lalu impor repository tadi.
3. Framework Preset: **Other**. Kosongkan Build Command dan Output Directory. Klik **Deploy**.

**Lewat Vercel CLI**
```
npm i -g vercel
vercel        # preview
vercel --prod # produksi
```

Setiap kali kamu mengubah `config.js` dan push ke GitHub, Vercel otomatis deploy ulang.

## Tips

- Mau pakai screenshot asli? Taruh gambar di folder ini (mis. `screenshot.png`), lalu isi `screenshot: "/screenshot.png"` di `config.js`.
- Ganti warna utama lewat `accent` di `config.js`.
