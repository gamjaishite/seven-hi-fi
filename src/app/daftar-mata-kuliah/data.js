const DEFAULT_SUBJECTS = [
    {code: 'IF1210', name: 'Dasar Pemrograman', faculty: 'STEI', study: {code: 135, name: 'Teknik Informatika'}, category: 'wajib'},
    {code: 'IF2110', name: 'Algoritma & Struktur Data', faculty: 'STEI', study: {code: 135, name: 'Teknik Informatika'}, category: 'wajib'},
    {code: 'IF2111', name: 'Algoritma dan Struktur Data STI', faculty: 'STEI', study: {code: 135, name: 'Teknik Informatika'}, category: 'wajib'},
    {code: 'IF2112', name: 'Pemrograman Komputer', faculty: 'STEI', study: {code: 135, name: 'Teknik Informatika'}, category: 'wajib'},
    {code: 'IF2120', name: 'Matematika Diskrit', faculty: 'STEI', study: {code: 135, name: 'Teknik Informatika'}, category: 'wajib'},
    {code: 'IF2121', name: 'Logika Komputasional', faculty: 'STEI', study: {code: 135, name: 'Teknik Informatika'}, category: 'wajib'},
    {code: 'IF2123', name: 'Aljabar Linier dan Geometri', faculty: 'STEI', study: {code: 135, name: 'Teknik Informatika'}, category: 'wajib'},
    {code: 'IF2124', name: 'Teori Bahasa Formal dan Otomata', faculty: 'STEI', study: {code: 135, name: 'Teknik Informatika'}, category: 'wajib'},
    {code: 'IF2130', name: 'Organisasi dan Arsitektur Komputer', faculty: 'STEI', study: {code: 135, name: 'Teknik Informatika'}, category: 'wajib'},
    {code: 'IF2140', name: 'Pemodelan Basis Data', faculty: 'STEI', study: {code: 135, name: 'Teknik Informatika'}, category: 'wajib'},
    {code: 'IF2210', name: 'Pemrograman Berorientasi Objek', faculty: 'STEI', study: {code: 135, name: 'Teknik Informatika'}, category: 'wajib'},
    {code: 'IF3151', name: 'Interaksi Manusia Komputer', faculty: 'STEI', study: {code: 135, name: 'Teknik Informatika'}, category: 'wajib'},
    {code: 'IF3159', name: 'Dasar Pembangunan Perangkat Lunak', faculty: 'STEI', study: {code: 135, name: 'Teknik Informatika'}, category: 'pilihan'},
    {code: 'IF4010', name: 'Pemrograman Unit Pemrosesan Grafis', faculty: 'STEI', study: {code: 135, name: 'Teknik Informatika'}, category: 'pilihan'},
    {code: 'II1101', name: 'Komputasi dan Masyarakat', faculty: 'STEI', study: {code: 182, name: 'Sistem dan Teknologi Informasi'}, category: 'wajib'},
    {code: 'II2110', name: 'Matematika STI', faculty: 'STEI', study: {code: 182, name: 'Sistem dan Teknologi Informasi'}, category: 'wajib'},
    {code: 'II4021', name: 'Sistem Pendukung Pengambilan Keputusan', faculty: 'STEI', study: {code: 182, name: 'Sistem dan Teknologi Informasi'}, category: 'pilihan'},
    {code: 'II4022', name: 'Audit Teknologi Informasi', faculty: 'STEI', study: {code: 182, name: 'Sistem dan Teknologi Informasi'}, category: 'pilihan'},
    {code: 'MA1101', name: 'Matematika IA', faculty: 'FMIPA', study: {code: 101, name: 'Matematika'}, category: 'wajib'},
    {code: 'MA1102', name: 'Matematika IB', faculty: 'FMIPA', study: {code: 101, name: 'Matematika'}, category: 'wajib'},
    {code: 'MA2011', name: 'Topik Wawasan Matematika', faculty: 'FMIPA', study: {code: 101, name: 'Matematika'}, category: 'pilihan'},
    {code: 'MA2022', name: 'Struktur Bilangan Bulat', faculty: 'FMIPA', study: {code: 101, name: 'Matematika'}, category: 'pilihan'},
    {code: 'AK2163', name: 'Mikroekonomi', faculty: 'FMIPA', study: {code: 108, name: 'Aktuaria'}, category: 'wajib'},
    {code: 'AK2263', name: 'Makroekonomi', faculty: 'FMIPA', study: {code: 108, name: 'Aktuaria'}, category: 'wajib'},
    {code: 'AK3081', name: 'Pengantar Model Kesintasan', faculty: 'FMIPA', study: {code: 108, name: 'Aktuaria'}, category: 'pilihan'},
    {code: 'AK3062', name: 'Matematika Investasi dan Kredit', faculty: 'FMIPA', study: {code: 108, name: 'Aktuaria'}, category: 'pilihan'},
    {code: 'MB2107', name: 'Bisnis Terpadu Asia 1', faculty: 'SBM', study: {code: 190, name: 'Manajemen'}, category: 'pilihan'},
    {code: 'MB2004', name: 'Pengantar Bisnis Internasional', faculty: 'SBM', study: {code: 190, name: 'Manajemen'}, category: 'pilihan'},
    {code: 'MK3004', name: 'Berpikir Disain untuk Inovasi (P)', faculty: 'SBM', study: {code: 192, name: 'Kewirausahaan'}, category: 'pilihan'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'wajib'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'wajib'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'wajib'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'wajib'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'wajib'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'wajib'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'wajib'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'wajib'},
]

const PAGE_SIZE = 10;

const FACULTIES = ['FMIPA', 'SITH', 'SF', 'FTTM', 'FITB', 'FTI', 'STEI', 'FTMD', 'FTSL', 'SAPPK', 'FSRD', 'SBM', 'SPS', 'NONFS'];

const STUDIES = {
    'FMIPA': {
        'sarjana': [
            {code: 101, name: 'Matematika'},
            {code: 102, name: 'Fisika'},
            {code: 103, name: 'Astronomi'},
            {code: 105, name: 'Kimia'},
            {code: 108, name: 'Aktuaria'},
            {code: 160, name: 'Tahan Tahun Pertama FMIPA'},
        ],
        'magister': [
            {code: 201, name: 'Matematika'},
            {code: 202, name: 'Fisika'},
            {code: 203, name: 'Astronomi'},
            {code: 205, name: 'Kimia'},
            {code: 208, name: 'Aktuaria'},
            {code: 209, name: 'Sains Komputasi'},
            {code: 246, name: 'Pengajaran Matematika'},
            {code: 247, name: 'Pengajaran Fisika'},
            {code: 248, name: 'Pengajaran Kimia'},
            {code: 249, name: 'Ilmu dan Rekayasa Nuklir'},
        ],
        'doktor': [
            {code: 301, name: 'Matematika'},
            {code: 302, name: 'Fisika'},
            {code: 303, name: 'Astronomi'},
            {code: 305, name: 'Kimia'},
            {code: 349, name: 'Rekayasa Nuklir'},
        ]
    },
    'SITH': {}, 
    'SF': {}, 
    'FTTM': {}, 
    'FITB': {}, 
    'FTI': {}, 
    'STEI': {
        'sarjana': [
            {code: 132, name: 'Teknik Elektro'},
            {code: 135, name: 'Teknik Informatika'},
            {code: 165, name: 'Tahap Tahun Pertama STEI - Rekayasa'},
            {code: 180, name: 'Teknik Tenaga Listrik'},
            {code: 181, name: 'Teknik Telekomunikasi'},
            {code: 182, name: 'Sistem dan Teknologi Informasi'},
            {code: 183, name: 'Teknik Biomedis'},
            {code: 196, name: 'Tahap Tahun Pertama STEI - Komputasi'},
        ],
        'magister': [
            {code: 232, name: 'Teknik Elektro'},
            {code: 235, name: 'Informatika'},
        ],
        'doktor': [
            {code: 332, name: 'Teknik Elektro dan Informatika'},
        ]
    }, 
    'FTMD': {}, 
    'FTSL': {}, 
    'SAPPK': {}, 
    'FSRD': {}, 
    'SBM': {
        'sarjana': [
            {code: 190, name: 'Manajemen'},
            {code: 192, name: 'Kewirausahaan'},
        ],
    }, 
    'SPS': {}, 
    'NONFS': {}
}

export {DEFAULT_SUBJECTS, PAGE_SIZE, FACULTIES, STUDIES}