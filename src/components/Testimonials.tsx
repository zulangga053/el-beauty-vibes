const testi = [
  {
    name: "Nurul Aisyah",
    role: "Pelanggan Setia",
    text: "Pelayanannya ramah banget, hasil makeup wisudaku flawless dan tahan seharian! Recommended banget untuk warga Bima.",
    rating: 5,
    avatar: "NA",
  },
  {
    name: "Siti Fatimah",
    role: "Bride",
    text: "Makeup pengantinku hasilnya cantik banget, sesuai request. Tim El Beauty Salon profesional & sabar. Terima kasih banyak!",
    rating: 5,
    avatar: "SF",
  },
  {
    name: "Lala Putri",
    role: "Mahasiswi",
    text: "Sering creambath di sini, rambutku jadi lembut & wangi. Harga juga ramah di kantong mahasiswa. Tempatnya nyaman!",
    rating: 5,
    avatar: "LP",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-gradient-to-br from-rose-50 via-white to-rose-50 relative overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-rose-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="divider-fancy text-rose-600 text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Testimoni
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Kata <span className="text-gradient-rose italic">Mereka</span>{" "}
            Tentang Kami
          </h2>
          <p className="text-gray-600">
            Kepuasan pelanggan adalah prioritas utama kami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testi.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-7 shadow-xl shadow-rose-100/50 border border-rose-100/50 relative hover:-translate-y-2 transition-transform"
            >
              {/* Quote icon */}
              <svg
                className="absolute top-6 right-6 w-12 h-12 text-rose-100"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.13 9C7.4 11.32 6 14.32 6 17c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3c0-1.5 1.34-3.5 3-5l-2.87-1zm9 0c-1.73 2.32-3.13 5.32-3.13 8 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3c0-1.5 1.34-3.5 3-5l-2.87-1z" />
              </svg>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <svg
                    key={idx}
                    className="w-5 h-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5L18.2 22 12 17.3 5.8 22l2.4-8.1L2 9.4h7.6z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-rose-50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 text-white font-bold flex items-center justify-center">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
