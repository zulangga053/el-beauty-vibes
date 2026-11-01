import { useState } from "react";
import { priceCategories, packages, foodMenu } from "../data/priceList";
import { bookingUrl } from "../data/bookingOptions";

export default function PriceList() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const visibleCategories =
    activeCategory === "all"
      ? priceCategories
      : priceCategories.filter((c) => c.id === activeCategory);

  return (
    <section
      id="pricelist"
      className="py-20 lg:py-28 bg-gradient-to-b from-white via-rose-50/40 to-white relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-20 -left-32 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="divider-fancy text-rose-600 text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Daftar Harga
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Daftar <span className="text-gradient-rose italic">Perawatan</span>{" "}
            & Harga
          </h2>
          <p className="text-gray-600">
            Berbagai pilihan layanan kecantikan profesional dengan harga
            transparan dan bersahabat.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-rose-500 to-rose-700 text-white shadow-lg shadow-rose-500/30"
                : "bg-white text-gray-600 border border-rose-100 hover:border-rose-300"
            }`}
          >
            🌹 Semua Layanan
          </button>
          {priceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-rose-500 to-rose-700 text-white shadow-lg shadow-rose-500/30"
                  : "bg-white text-gray-600 border border-rose-100 hover:border-rose-300"
              }`}
            >
              {cat.icon} {cat.title}
            </button>
          ))}
        </div>

        {/* Categories grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {visibleCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-rose-100/50 border border-rose-100/50 hover:shadow-2xl hover:shadow-rose-200/60 transition-shadow"
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${cat.color} p-6 text-white relative overflow-hidden`}
              >
                <div className="absolute -right-6 -bottom-6 text-9xl opacity-20">
                  {cat.icon}
                </div>
                <div className="relative flex items-center gap-3">
                  <div className="text-4xl">{cat.icon}</div>
                  <div>
                    <h3 className="font-display text-2xl font-bold">
                      {cat.title}
                    </h3>
                    <p className="text-xs opacity-90 mt-0.5">
                      {cat.items.length} layanan tersedia
                    </p>
                  </div>
                </div>
              </div>

              {/* Items */}
              <ul className="divide-y divide-rose-50">
                {cat.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between gap-4 px-6 py-3.5 hover:bg-rose-50/50 transition-colors group"
                  >
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-rose-400 flex-shrink-0 group-hover:bg-rose-600 transition-colors" />
                      <div className="min-w-0">
                        <div className="text-sm sm:text-base text-gray-800 font-medium">
                          {item.name}
                        </div>
                        {item.note && (
                          <div className="text-xs text-gray-500 italic mt-0.5">
                            {item.note}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <span className="font-bold text-rose-600 text-sm sm:text-base whitespace-nowrap">
                        {item.price.includes("Juta") || item.price.includes("-")
                          ? item.price
                          : `Rp ${item.price}`}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Paket Treatment */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="divider-fancy text-rose-600 text-sm font-semibold uppercase tracking-[0.3em] mb-3">
              Paket Hemat
            </div>
            <h3 className="font-display text-3xl lg:text-4xl font-bold text-gray-900">
              Paket <span className="text-gradient-rose italic">Treatment</span>{" "}
              Spesial
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Hemat lebih banyak dengan paket perawatan lengkap kami!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-3xl overflow-hidden border transition-all hover:-translate-y-2 ${
                  pkg.highlight
                    ? "bg-gradient-to-br from-rose-600 to-rose-800 text-white border-rose-700 shadow-2xl shadow-rose-500/40"
                    : "bg-white border-rose-100 shadow-lg shadow-rose-100/50 hover:shadow-xl"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-4 right-4 bg-gold text-rose-900 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Best Value
                  </div>
                )}

                <div className="p-6">
                  <div
                    className={`text-xs uppercase tracking-wider font-semibold mb-1 ${
                      pkg.highlight ? "text-rose-200" : "text-rose-500"
                    }`}
                  >
                    {pkg.name}
                  </div>
                  <div
                    className={`font-display text-3xl font-bold mb-4 ${
                      pkg.highlight ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Rp {pkg.price}
                  </div>

                  <ul className="space-y-2 mb-5">
                    {pkg.items.map((it) => (
                      <li
                        key={it}
                        className={`flex items-start gap-2 text-sm ${
                          pkg.highlight ? "text-rose-100" : "text-gray-600"
                        }`}
                      >
                        <svg
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            pkg.highlight ? "text-gold-light" : "text-rose-500"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={bookingUrl(pkg.name)}
                    className={`block text-center text-sm font-semibold py-2.5 rounded-full transition-all ${
                      pkg.highlight
                        ? "bg-white text-rose-700 hover:bg-rose-50"
                        : "bg-rose-50 text-rose-700 hover:bg-rose-100"
                    }`}
                  >
                    Pesan Paket
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Food Menu */}
        <div className="bg-gradient-to-r from-amber-50 via-rose-50 to-amber-50 rounded-3xl p-7 lg:p-10 border border-amber-100">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
            <div>
              <div className="flex items-center gap-2 text-amber-600 text-sm font-semibold uppercase tracking-wider mb-1">
                <span>🍽️</span> Menu Makanan
              </div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-gray-900">
                Nikmati Camilan Saat <em className="text-rose-600">Treatment</em>
              </h3>
            </div>
            <span className="text-xs text-gray-500 italic">
              Tersedia di salon untuk kenyamanan Anda
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {foodMenu.map((f) => (
              <div
                key={f.name}
                className="bg-white rounded-2xl p-4 text-center border border-amber-100 hover:border-amber-300 transition-colors"
              >
                <div className="text-3xl mb-2">
                  {f.name.includes("Mie")
                    ? "🍜"
                    : f.name.includes("Sosis")
                    ? "🌭"
                    : "🍟"}
                </div>
                <div className="font-semibold text-gray-800 text-sm">
                  {f.name}
                </div>
                <div className="text-rose-600 font-bold text-sm mt-1">
                  Rp {f.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-10 text-center text-sm text-gray-500 italic">
          * Harga sewaktu-waktu dapat berubah. Hubungi kami untuk informasi
          terbaru atau konsultasi gratis.
        </div>
      </div>
    </section>
  );
}
