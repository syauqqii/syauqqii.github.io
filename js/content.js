/* Semua teks dan link situs ada di file ini. Ubah di sini, HTML tidak perlu disentuh. */
window.SITE = {
  name: "Dimas Syauqi Syafa",
  email: "dimas.syauqi007@gmail.com",

  ui: {
    themeToDark: "Mode gelap",
    themeToLight: "Mode terang",
    emailCta: "Kirim email",
    navLabel: "Navigasi utama",
    menuOpen: "Buka menu",
    menuClose: "Tutup menu"
  },

  photo: {
    show: true,
    src: "img/foto.png",
    alt: "Dimas Syauqi Syafa"
  },

  cv: {
    label: "Unduh CV",
    href: "files/CV-Dimas-Syauqi-Syafa.docx",
    filename: "CV Dimas Syauqi Syafa.docx"
  },

  nav: [
    { id: "pengalaman", label: "Pengalaman" },
    { id: "klien", label: "Proyek klien" },
    { id: "buatan-sendiri", label: "Buatan sendiri" },
    { id: "portofolio", label: "Portofolio" },
    { id: "keahlian", label: "Keahlian" },
    { id: "pendidikan", label: "Pendidikan" },
    { id: "kontak", label: "Kontak" }
  ],

  hero: {
    title: [
      { text: "Technical Consultant " },
      { text: "Dynamics 365 F&O", em: true },
      { text: " & Software Engineering Enthusiast." }
    ],
    lead: [
      "Nama lengkap saya Dimas Syauqi Syafa. Sehari-hari saya di PT WCS Abysena, Surabaya, mengerjakan sisi teknis proyek ERP: menulis X++, membuat report, dan menelusuri error langsung di environment klien.",
      "Di luar itu saya mengerjakan backend, integrasi data, aplikasi Android, dan ekstensi browser. Dua ekstensi buatan saya sudah terbit di Chrome Web Store dan Firefox Add-ons."
    ]
  },

  sections: {
    pengalaman: "Pengalaman",
    klien: "Proyek klien",
    buatanSendiri: "Buatan sendiri",
    portofolio: "Portofolio",
    keahlian: "Keahlian",
    pendidikan: "Pendidikan",
    kontak: "Kontak"
  },

  experience: [
    {
      role: "Technical Consultant",
      org: "PT WCS Abysena, Surabaya",
      period: "Mei 2025 sampai sekarang",
      points: [
        "Mengerjakan custom process dan change request di D365 F&O dengan X++. Saya juga membuat report SSRS dan menelusuri error langsung di environment klien.",
        "Di Business Central, bagian saya custom report.",
        "Membantu functional consultant menyusun Functional Design Document (FDD), lalu memperbaiki kode yang dibutuhkan.",
        "Membuat middleware dan aplikasi pendukung di luar ERP dengan Golang, JavaScript, dan Kotlin, supaya klien tidak perlu lagi mengerjakannya manual."
      ]
    },
    {
      role: "Back-End Engineer",
      org: "Digital Fast, Malang",
      period: "Januari 2024 sampai Maret 2025",
      points: [
        "Merancang database dan membuat API backend untuk beberapa klien, termasuk integrasi payment gateway.",
        "Mengurus deployment dan keamanan dasar (autentikasi dan proteksi data) di server Linux. Untuk containerization saya pakai Docker.",
        "Membuat aplikasi Android dengan Kotlin untuk klien dari luar negeri: aplikasi terminal yang terhubung ke server lewat SSH.",
        "Mengerjakan e-commerce, company profile, undangan digital, dan dashboard monitoring."
      ]
    }
  ],

  clientIntro: "Semuanya dikerjakan di WCS Abysena. Nama klien saya rahasiakan, tapi detail teknisnya bisa kita bahas langsung.",
  clientWork: [
    { title: "Custom business process di D365 F&O", text: "Fungsi standar saya perluas dengan X++ supaya sesuai alur operasional klien." },
    { title: "Middleware sinkronisasi data", text: "Layanan Golang yang menyalin data SQL Cloud D365 F&O ke SQL lokal lewat OData dan X++. Kode lamanya saya refaktor." },
    { title: "Sinkronisasi OneDrive ke server Linux", text: "File berpindah otomatis, jadi tidak ada lagi transfer manual." },
    { title: "Aplikasi driver dan gudang", text: "Aplikasi Android native dengan Kotlin untuk pencatatan di lapangan." },
    { title: "Aplikasi HRIS", text: "Saya rancang ERD, UI, dan business logic dari nol untuk sebuah perusahaan utilitas." },
    { title: "Sinkronisasi fingerprint ke Business Central", text: "Aplikasi .NET Windows Service saya pindahkan ke service JavaScript di Linux. Data absensi sekarang masuk langsung ke Business Central." },
    { title: "Penutupan celah RCE", text: "Apache2 dan PHP saya upgrade dari 7.4.33 ke 8.5.12." },
    { title: "Report operasional di Business Central", text: "Custom report untuk dua klien." }
  ],

  productsIntro: "Tiga proyek yang saya kerjakan sendiri. Dua ekstensi browser sudah terbit di Chrome Web Store dan Firefox Add-ons, dan satu aplikasi web dipakai internal di kantor.",
  products: [
    {
      name: "D365 Dev Tools",
      text: "Panel di halaman Dynamics 365 F&O dan Business Central. Isinya table browser, class runner, navigasi menu item, ganti bahasa dan company, OData query dengan ekspor CSV dan XLSX, opsi debug, dan RecId. Tersedia dalam lima bahasa. Izin akses situs hanya diminta per domain, saat dipakai.",
      tech: "WXT, JavaScript, Manifest V3",
      links: [
        { label: "Chrome Web Store", href: "https://chromewebstore.google.com/detail/d365-dev-tools/kmcbedkfjdjaidaigcklfcihmbikkhdi" },
        { label: "Firefox Add-ons", href: "https://addons.mozilla.org/en-US/firefox/addon/d365-dev-tools/" }
      ]
    },
    {
      name: "wacsapp",
      text: "Kustomisasi WhatsApp Web. Nama, foto, dan pesan di daftar chat bisa diburamkan. Ada juga tema bubble, background sendiri, balasan cepat, dan pesan terjadwal. Semua data tersimpan lokal di browser, dan ekstensi tidak mengirim apa pun lewat jaringan. Kodenya open source (MIT).",
      tech: "WXT, TypeScript, Manifest V3",
      links: [
        { label: "Chrome Web Store", href: "https://chromewebstore.google.com/detail/wacsapp/pfanaeeekleoekndlomjgpfpihjlcabg" },
        { label: "Firefox Add-ons", href: "https://addons.mozilla.org/en-US/firefox/addon/wacsapp/" }
      ]
    },
    {
      name: "PesanMakanan",
      text: "Web app untuk memesan makan siang dan sore lewat OB di kantor. Isinya order harian, titipan grup, patungan, dashboard admin, chat, dan pelacakan OB. Backend-nya Supabase (Postgres, Auth, Realtime) dengan row level security. Aplikasinya berbentuk PWA dan tersedia dalam dua bahasa. Saya buat atas inisiatif dengan tujuan dipakai internal kantor saya.",
      tech: "HTML, CSS, JavaScript, Supabase",
      links: []
    }
  ],

  portfolioIntro: "Proyek di Digital Fast, 2024 sampai 2025. Yang bertanda panah punya halaman publik.",
  portfolio: [
    { name: "Life Changer", href: "", note: "E-commerce dengan katalog produk dan WhatsApp" },
    { name: "Hotto Purto", href: "", note: "E-commerce: checkout, up-selling, SEO" },
    { name: "Flimty Fiber", href: "", note: "E-commerce: checkout, analytics" },
    { name: "PPT-PRO Template", href: "https://pptpro-template.com/", note: "Toko template PowerPoint dengan payment gateway dan member" },
    { name: "ProPresenta", href: "https://pptpro-template.com/proprasenta", note: "Toko template dengan download produk" },
    { name: "Peduli Gizi Diabetes", href: "", note: "Pemantauan pola makan dan kalkulator IMT" },
    { name: "Teduh Kuesioner", href: "", note: "Kuesioner kepribadian dengan dashboard admin" },
    { name: "Supreme Sealers", href: "https://www.supremesealers.ca/", note: "Company profile untuk klien internasional" },
    { name: "Wedding Invitation", href: "", note: "Undangan digital: RSVP, QR code, WhatsApp blast" },
  ],

  skills: [
    { label: "ERP", value: "Dynamics 365 F&O (X++, Chain of Command, SSRS), Business Central (report), OData" },
    { label: "Bahasa", value: "X++, Golang, JavaScript, TypeScript, Kotlin, Python, PHP, Java" },
    { label: "Backend", value: "Node.js, Express.js, REST API, middleware, payment gateway" },
    { label: "Database", value: "MS SQL Server, PostgreSQL, MySQL, MongoDB, Supabase" },
    { label: "Lainnya", value: "Git, Linux, Apache2, Docker (dasar), ekstensi browser" }
  ],

  education: [
    { title: "BINUS University, Malang", detail: "S1 Computer Science, IPK 3,63", period: "2021 sampai 2025" },
    { title: "SMA Negeri 1 Jombang", detail: "Ilmu Pengetahuan Alam", period: "2018 sampai 2021" }
  ],

  contact: {
    text: "Punya pekerjaan atau pertanyaan soal D365, integrasi, atau ekstensi browser? Kirim email saja. CV lengkap bisa diunduh lewat tombol di bawah.",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/in/syauqqii" },
      { label: "GitHub", href: "https://github.com/syauqqii" }
    ]
  },

  footer: {
    quote: "Otomatisasi itu seni, manual itu derita. Kalau bisa BOT yang kerja, kenapa harus saya? (bercanda ya guys 😆)"
  }
};
