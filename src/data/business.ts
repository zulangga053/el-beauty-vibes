export const business = {
  name: "El Beauty Salon",
  owner: "Ely Sumpiyati",
  whatsappNumber: "6285333240210",
  instagramUrl: "https://instagram.com/salonbeautyvibes__",
  mapsUrl: "https://maps.app.goo.gl/LGhJopYvY8Wznhe87",
  websiteUrl: "https://elbeautyvibes.vercel.app/",
  email: "salonbeautyvibes@gmail.com",
  address: "Jl. Mande 2, Kec. Mpunda, Kota Bima, NTB",
  shortAddress: "Jl. Mande 2, Kec. Mpunda, Kota Bima",
  hours: "09:00 – 22:00 WITA",
  openingTime: "09:00",
  closingTime: "22:00",
  openDays: "Buka Setiap Hari",
};

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${business.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
