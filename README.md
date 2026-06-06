## Struktur Project

src/
│
├── components/
│   ├── Navbar.jsx
│   ├── UserCard.jsx
│   └── Footer.jsx
│
├── context/
│   └── UserContext.jsx
│
├── App.jsx
├── main.jsx
└── index.css

## Penjelasan Component

### Navbar.jsx
Digunakan untuk menampilkan judul website.

### UserCard.jsx
Digunakan untuk menampilkan data user seperti:
- Nama
- Email
- Username

Pada component ini terdapat:
- Tombol Like
- Tombol Follow

### Footer.jsx
Digunakan untuk menampilkan bagian bawah website.

## Penjelasan React Hook

### useState
Digunakan untuk:
- Menyimpan data user
- Menyimpan nilai pencarian
- Menyimpan jumlah like
- Menyimpan status follow

### useEffect
Digunakan untuk mengambil data dari API saat website pertama kali dibuka.

### useContext
Digunakan untuk berbagi data antar component tanpa harus mengirim props berulang kali.

### useRef
Digunakan untuk fokus otomatis ke input pencarian.

## Cara Menjalankan Project

1. Buat project React

bash
npm create vite@latest


2. Install dependency

bash
npm install


3. Jalankan project

bash
npm run dev


## API yang Digunakan

https://jsonplaceholder.typicode.com/users

## Kesimpulan

Project ini berhasil menerapkan:
- Fetch API
- Component React
- useState
- useEffect
- useContext
- useRef

serta menampilkan data user dengan fitur Like, Follow, dan Search User.