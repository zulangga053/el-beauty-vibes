const services = [
  {
    icon: "💇‍♀️",
    title: "Hair Treatment",
    desc: "Cuci, potong, creambath, smoothing, coloring & styling rambut profesional.",
    price: "Mulai Rp 25.000",
    image: "/images/service-hair.jpg",
    items: ["Hair Cut", "Hair Coloring", "Smoothing", "Creambath"],
  },
  {
    icon: "💄",
    title: "Makeup Artist",
    desc: "Makeup wisuda, party, pre-wedding, dan bridal dengan hasil flawless tahan lama.",
    price: "Mulai Rp 150.000",
    image: "/images/service-makeup.jpg",
    items: ["Daily Makeup", "Wisuda", "Party", "Wedding"],
  },
  {
    icon: "🧖‍♀️",
    title: "Facial & Spa",
    desc: "Perawatan wajah & relaksasi tubuh untuk kulit sehat dan bercahaya.",
    price: "Mulai Rp 75.000",
    image: "/images/service-spa.jpg",
    items: ["Facial", "Massage", "Body Scrub", "Lulur"],
  },
];

const extras = [
  { icon: "💅", title: "Nail Art" },
  { icon: "👰", title: "Paket Wedding" },
  { icon: "✂️", title: "Hair Extension" },
  { icon: "🌸", title: "Bleaching" },
  { icon: "👁️", title: "Eyelash Extension" },
  { icon: "🎀", title: "Hijab Styling" },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-gradient-to-b from-rose-50 to-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="divider-fancy text-rose-600 text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Layanan Kami
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pelayanan <span className="text-gradient-rose italic">Premium</span>{" "}
            untuk Kecantikan Anda
          </h2>
          <p className="text-gray-600">
            Berbagai pilihan layanan kecantikan profesional yang dirancang
            khusus untuk membuat Anda merasa istimewa.
          </p>
        </div>

        {/* Main services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((s) => (
            <div
              key={s.title}
              className="service-card bg-white rounded-3xl overflow-hidden shadow-lg shadow-rose-100/60 border border-rose-100/50"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 w-14 h-14 bg-white/95 backdrop-blur rounded-full flex items-center justify-center text-3xl shadow-lg">
                  {s.icon}
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {s.items.map((i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-rose-50 text-rose-700 rounded-full font-medium"
                    >
                      {i}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-rose-100">
                  <div>
                    <div className="text-xs text-gray-400">Harga</div>
                    <div className="font-bold text-rose-600">{s.price}</div>
                  </div>
                  <a
                    href="#booking"
                    className="px-4 py-2 bg-gradient-to-r from-rose-500 to-rose-700 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-rose-500/40 transition-shadow"
                  >
                    Booking
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to full price list */}
        <div className="text-center mb-12">
          <a
            href="#pricelist"
            className="inline-flex items-center gap-2 text-rose-600 font-semibold hover:gap-4 transition-all bg-rose-50 px-6 py-3 rounded-full hover:bg-rose-100"
          >
            Lihat Daftar Harga Lengkap
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Extras */}
        <div className="bg-gradient-to-r from-rose-600 to-rose-700 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-2">
              Dan Banyak Lagi...
            </h3>
            <p className="text-rose-100 text-sm">
              Layanan tambahan untuk melengkapi kebutuhan kecantikan Anda
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {extras.map((e) => (
              <div
                key={e.title}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5 text-center hover:bg-white/20 transition-colors cursor-pointer"
              >
                <div className="text-3xl mb-2">{e.icon}</div>
                <div className="text-sm font-medium">{e.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
