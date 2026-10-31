export interface PriceItem {
  name: string;
  price: string;
  note?: string;
}

export interface PriceCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  items: PriceItem[];
}

export const priceCategories: PriceCategory[] = [
  {
    id: "body",
    title: "Body Treatment",
    icon: "💆‍♀️",
    color: "from-rose-400 to-pink-500",
    items: [
      { name: "Ratus", price: "30.000" },
      { name: "Waxing", price: "50.000" },
      { name: "Body Scrub", price: "50.000" },
      { name: "Body Massage", price: "100.000" },
      { name: "Bleaching Full Body", price: "160.000" },
      { name: "Cantik Body Spa", price: "170.000", note: "Scrub, Massage, Masker Body" },
    ],
  },
  {
    id: "facial",
    title: "Facial Treatment",
    icon: "✨",
    color: "from-pink-400 to-rose-500",
    items: [
      { name: "Totok Wajah", price: "40.000" },
      { name: "Facial Viva", price: "50.000" },
      { name: "Facial Sari Ayu", price: "50.000" },
      { name: "Facial Treatment", price: "80.000" },
    ],
  },
  {
    id: "hand",
    title: "Hand & Foot Treatment",
    icon: "💅",
    color: "from-fuchsia-400 to-pink-500",
    items: [
      { name: "Nail Art", price: "50.000" },
      { name: "Extension Kuku", price: "100.000" },
      { name: "Manicure", price: "70.000" },
      { name: "Pedicure", price: "90.000" },
    ],
  },
  {
    id: "dental",
    title: "Perawatan Gigi",
    icon: "🦷",
    color: "from-rose-500 to-red-500",
    items: [
      { name: "Bersih Karang Gigi", price: "100.000" },
      { name: "Bleaching Gigi (Pemutih)", price: "100.000" },
      { name: "Kikir Gigi", price: "40.000", note: "Mulai harga" },
      { name: "Tambal Gigi", price: "50.000", note: "Mulai dari" },
      { name: "Behel Atas Bawah", price: "300.000" },
      { name: "Behel Atas atau Bawah", price: "160.000" },
      { name: "Gingsul / Biji", price: "80.000" },
      { name: "Gigi Kelinci", price: "150.000" },
      { name: "Diamond Gigi / Biji", price: "15.000" },
      { name: "Ganti Karet Behel", price: "25.000" },
    ],
  },
  {
    id: "hair",
    title: "Hair Styling",
    icon: "💇‍♀️",
    color: "from-pink-500 to-rose-600",
    items: [
      { name: "Extension Rambut / Helai", price: "6.000" },
      { name: "Cuci Vitamin", price: "20.000" },
      { name: "Catok", price: "30.000" },
      { name: "Curly", price: "35.000" },
      { name: "Gunting", price: "40.000" },
      { name: "Cuci Gunting", price: "50.000" },
      { name: "Cuci Catok", price: "50.000" },
      { name: "Cuci Curly", price: "60.000" },
      { name: "Cuci Gunting Catok", price: "70.000" },
      { name: "Ombre", price: "200.000" },
      { name: "Warna", price: "200.000" },
      { name: "Smoothing", price: "250.000" },
      { name: "Highlight", price: "250.000" },
      { name: "Keratin / Treatment", price: "300.000" },
      { name: "Creambath Buah", price: "50.000" },
      { name: "Creambath Makarizo", price: "70.000" },
      { name: "Creambath NR", price: "70.000" },
      { name: "Creambath Matrix", price: "70.000" },
      { name: "Hair Spa Silky", price: "80.000" },
      { name: "Hair Spa Loreal", price: "90.000" },
      { name: "Hair Mask", price: "100.000" },
    ],
  },
  {
    id: "other",
    title: "Perawatan Lainnya",
    icon: "🌸",
    color: "from-rose-400 to-fuchsia-500",
    items: [
      { name: "Eyelash Extension", price: "70.000 - 100.000" },
      { name: "Henna Alis", price: "50.000" },
      { name: "Rapiin Alis", price: "10.000" },
      { name: "Tindik Hidung", price: "25.000" },
      { name: "Tindik Telinga", price: "40.000" },
      { name: "Tindik Pusar", price: "50.000" },
      { name: "Sulam Tahi Lalat / Titik", price: "50.000" },
      { name: "Make Up Kondangan", price: "50.000" },
      { name: "Make Up Wisuda", price: "100.000 - 150.000" },
      { name: "Rias Pengantin & Pelaminan Paketan", price: "Mulai 12 Juta" },
    ],
  },
];

export interface PackageItem {
  name: string;
  price: string;
  items: string[];
  highlight?: boolean;
}

export const packages: PackageItem[] = [
  {
    name: "Paket 120K",
    price: "120.000",
    items: ["Facial", "Masker Wajah", "Creambath", "Catok"],
  },
  {
    name: "Paket 130K",
    price: "130.000",
    items: ["Facial", "Masker Wajah", "Totok Wajah", "Creambath"],
  },
  {
    name: "Paket 150K",
    price: "150.000",
    items: ["Massage", "Totok Wajah", "Cuci Vitamin", "Masker Wajah"],
  },
  {
    name: "Paket 180K",
    price: "180.000",
    items: ["Facial", "Masker Wajah", "Totok Wajah", "Creambath", "Catok"],
  },
  {
    name: "Paket 200K",
    price: "200.000",
    items: ["Body Scrub", "Facial", "Masker Wajah", "Ratus"],
  },
  {
    name: "Paket 230K",
    price: "230.000",
    items: ["Massage", "Body Scrub", "Totok Wajah", "Masker Wajah", "Creambath"],
  },
  {
    name: "Paket 320K",
    price: "320.000",
    items: ["Massage", "Body Scrub", "Masker Badan", "Ratus", "Jamu Virgin", "Creambath Catok"],
    highlight: true,
  },
  {
    name: "Paket 350K",
    price: "350.000",
    items: ["Massage", "Body Scrub", "Body Mask", "Facial", "Masker Wajah", "Ratus", "Creambath", "Jamu Virgin"],
    highlight: true,
  },
];

export const foodMenu = [
  { name: "Mie Goreng Telur", price: "10.000" },
  { name: "Mie Goreng Kuah", price: "10.000" },
  { name: "Sosis", price: "10.000" },
  { name: "Kentang Goreng", price: "15.000" },
];
