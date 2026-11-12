/*
  ============================================================
  EDIT FILE INI SAJA untuk mengganti isi landing page & dashboard.
  Setelah disimpan dan di-deploy ulang ke Vercel, semuanya ikut berubah.
  ============================================================
*/
window.SITE = {
  // --- Identitas ---
  name: "NamaApp",
  tagline: "Kelola pekerjaan harian tim kamu dari satu tempat",
  description:
    "NamaApp membantu tim mencatat tugas, memantau progres, dan membagikan laporan tanpa pindah-pindah aplikasi.",

  // --- LINK APLIKASI (ganti dengan link aplikasi kamu) ---
  appUrl: "https://example.com",
  ctaLabel: "Buka aplikasi",

  // Warna utama tombol & aksen (hex)
  accent: "#2F5BFF",

  // Opsional: isi dengan path/URL gambar screenshot aplikasi, mis. "/screenshot.png".
  // Kosongkan ("") untuk memakai tampilan dashboard ilustrasi bawaan.
  screenshot: "",

  // Opsional: link kontak di footer (mis. "mailto:halo@namaapp.com" atau link WhatsApp)
  contactUrl: "mailto:halo@example.com",
  contactLabel: "Hubungi kami",

  // --- Angka ringkas (hapus isi array jika tidak dipakai) ---
  stats: [
    { value: "2.400+", label: "tugas selesai tiap minggu" },
    { value: "180", label: "tim yang sudah memakai" },
    { value: "4 menit", label: "rata-rata waktu mulai pakai" },
  ],

  // --- Fitur ---
  featuresTitle: "Yang bisa kamu lakukan",
  features: [
    {
      title: "Catat tugas dengan cepat",
      text: "Tulis, beri tenggat, dan tetapkan penanggung jawab dalam beberapa ketukan.",
    },
    {
      title: "Pantau progres langsung",
      text: "Lihat apa yang selesai, apa yang tertunda, dan siapa yang butuh bantuan.",
    },
    {
      title: "Bagikan laporan",
      text: "Kirim ringkasan mingguan ke atasan atau klien lewat satu tautan.",
    },
    {
      title: "Bekerja dari ponsel",
      text: "Tampilan menyesuaikan layar, jadi tetap nyaman dipakai di lapangan.",
    },
  ],

  // --- Cara mulai (urutan langkah) ---
  stepsTitle: "Mulai dalam tiga langkah",
  steps: [
    { title: "Buka aplikasi", text: "Masuk lewat tombol di halaman ini." },
    { title: "Buat ruang kerja", text: "Beri nama tim dan undang rekan kerja." },
    { title: "Tambahkan tugas pertama", text: "Progres langsung muncul di dashboard." },
  ],

  // --- Penutup ---
  closingTitle: "Siap mencoba NamaApp?",
  closingText: "Buka aplikasinya sekarang, tidak perlu instalasi.",

  // --- Halaman Dashboard (dashboard.html): daftar aplikasi / tautan ---
  dashboardTitle: "Dashboard",
  dashboardText: "Semua aplikasi dan tautan penting di satu halaman.",
  apps: [
    {
      name: "NamaApp",
      description: "Aplikasi utama untuk mengelola tugas tim.",
      url: "https://example.com",
      category: "Utama",
    },
    {
      name: "Laporan Mingguan",
      description: "Ringkasan progres yang bisa dibagikan.",
      url: "https://example.com/laporan",
      category: "Laporan",
    },
    {
      name: "Panduan Pengguna",
      description: "Cara memakai fitur dari awal sampai mahir.",
      url: "https://example.com/panduan",
      category: "Bantuan",
    },
    {
      name: "Status Layanan",
      description: "Cek apakah layanan sedang berjalan normal.",
      url: "https://example.com/status",
      category: "Bantuan",
    },
  ],
};
