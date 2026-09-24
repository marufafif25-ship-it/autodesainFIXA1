/* ====================================================================
   KONFIGURASI - edit file ini lalu upload. TIDAK perlu build/coding.
   Baca PANDUAN-SETUP.txt untuk panduan lengkap + aturan tanda kutip.
   ==================================================================== */
window.__AF_CONFIG = {

  /* -- 1. BRANDING --------------------------------------------------- */
  brandName: "Auto Desain",              // nama brandmu (kata terakhir tampil warna aksen)
  tagline:   "AI Design Studio",           // teks kecil di bawah logo
  logoUrl:   "/landing/brand/logo.png",    // timpa file logo di folder ini, atau isi URL gambar

  /* -- 1b. WARNA (opsional) - kosongkan "" = pakai bawaan -------------
     accentColor : warna utama (tombol, link, glow). bgColor : background GELAP. */
  accentColor: "#1D4ED8", // deep cobalt: profesional, tenang, dan tetap kuat
  bgColor:     "#080F1F", // midnight navy: nyaman dibaca tanpa terasa hitam pekat

  /* -- 2. LINK ------------------------------------------------------- */
  paymentUrl:   "http://lynk.id/autodesainai/1xnme4dkymej",   // link pembayaran/checkout kamu
  affiliateUrl: "",                            // link daftar affiliate (Wajib Di isi "")

  // Mode "9 Feed Konsisten" - link ChatGPT untuk tombol setelah Copy & tutorial.
  // chatgptUrl = ChatGPT biasa. gptUrl = Custom GPT kamu sendiri (kosong "" = tombol GPT disembunyikan).
  chatgptUrl: "https://chatgpt.com/",
  gptUrl:     "",

  /* -- 2b. SOCIAL (footer) ------------------------------------------- */
  instagramUrl:    "https://instagram.com/autodesain.ai",
  instagramHandle: "@autodesain.ai",
  facebookUrl:     "https://facebook.com/hubungi kami",
  facebookHandle:  "Hubungi kami",

  /* -- 3. HARGA (tampilan teks) -------------------------------------- */
  price:       "47.000",     // harga tampil
  priceStrike: "990.000",    // harga coret
  affiliatePerSignup: 10000, // komisi affiliate per pendaftaran (angka, tanpa kutip)

  /* -- 3b. TIER LISENSI RESELLER ------------------------------------
     false = sembunyikan kartu "Jual Ulang" (untuk situs jualan biasa). */
  showResellerTier: false,

  /* -- 4. LOGIN ------------------------------------------------------
     Email hanya perlu memakai format email yang valid. Akses ditentukan oleh
     password bersama, jadi daftar Google Spreadsheet tidak lagi diperiksa. */
  sheetCsvUrl: "",

  // Password login (semua pelanggan pakai 1 password ini). JANGAN tulis
  // password apa adanya - buka hash-tool.html, ketik password, salin hash-nya,
  // tempel DI ANTARA kutip (ganti kode lama).
  loginPasswordHash: "325e0f930afcbba24bcaa9327b54b18bd8d1f926acc2c418cd786522e2b54558",
  // ^ password aktif = "123". Untuk mengganti, gunakan hash-tool.html.
};
