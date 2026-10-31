import { business } from "../data/business";

const items = [
  { src: "/images/service-makeup.jpg", title: "Bridal Makeup", cat: "Makeup" },
  { src: "/images/service-hair.jpg", title: "Hair Styling", cat: "Hair" },
  { src: "/images/service-spa.jpg", title: "Facial Treatment", cat: "Spa" },
  { src: "/images/hero-salon.jpg", title: "Salon Interior", cat: "Tempat" },
  { src: "/images/service-makeup.jpg", title: "Party Makeup", cat: "Makeup" },
  { src: "/images/service-hair.jpg", title: "Hair Coloring", cat: "Hair" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="divider-fancy text-rose-600 text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Galeri
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Hasil <span className="text-gradient-rose italic">Karya</span> Kami
          </h2>
          <p className="text-gray-600">
            Lihat hasil transformasi cantik dari para klien kami yang puas
            dengan layanan El Beauty Salon.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {items.map((it, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                i === 0 ? "md:row-span-2 md:col-span-1" : ""
              }`}
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                decoding="async"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  i === 0 ? "h-full min-h-[400px]" : "h-56 lg:h-64"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-rose-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="text-xs uppercase tracking-widest text-rose-200">
                    {it.cat}
                  </div>
                  <div className="font-display text-xl font-bold">{it.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-rose-500 text-rose-600 font-semibold rounded-full hover:bg-rose-500 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 5.68A4.16 4.16 0 1012 16.16 4.16 4.16 0 0012 7.84zm0 6.86a2.7 2.7 0 110-5.4 2.7 2.7 0 010 5.4zm5.3-7.02a.97.97 0 11-1.94 0 .97.97 0 011.94 0z" />
            </svg>
            Lihat Lebih Banyak di Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
