export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 pattern-dots opacity-50" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Image side */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-rose-200/60">
            <img
              src="/images/owner.jpg"
              alt="Owner El Beauty Salon"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-xs uppercase tracking-[0.3em] text-rose-200 mb-1">
                Founder & Owner
              </div>
              <div className="font-display text-2xl font-bold">Ely Sumpiyati</div>
            </div>
          </div>

          {/* Floating badge */}
          {/* <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-3 animate-float">
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5L18.2 22 12 17.3 5.8 22l2.4-8.1L2 9.4h7.6z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-gray-800">Bersertifikat</div>
              <div className="text-xs text-gray-500">Profesional & Terpercaya</div>
            </div>
          </div> */}

          {/* Decorative circle */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-rose-200 rounded-full -z-10" />
        </div>

        {/* Text side */}
        <div>
          <div className="divider-fancy text-rose-600 text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Tentang Kami
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Tempat Terbaik untuk{" "}
            <span className="text-gradient-rose italic">Merawat Diri</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            <strong>El Beauty Salon</strong> adalah salon kecantikan
            profesional yang berlokasi di Jl. Sadia 1, Kecamatan Mpunda, Kota
            Bima. Kami berkomitmen memberikan pengalaman perawatan terbaik
            dengan suasana nyaman dan staf yang berpengalaman.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Dengan motto "Cantik Itu Wajib", kami hadir untuk membantu setiap
            wanita tampil percaya diri di setiap momen spesialnya — mulai dari
            acara harian hingga pernikahan impian.
          </p>

          {/* Features list */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: "✨", title: "Produk Premium", desc: "Brand berkualitas" },
              { icon: "💆", title: "Staf Ahli", desc: "Berpengalaman" },
              { icon: "🏠", title: "Tempat Nyaman", desc: "Bersih & higienis" },
              { icon: "💖", title: "Harga Bersahabat", desc: "Tetap berkualitas" },
            ].map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-rose-50 transition-colors"
              >
                <div className="text-2xl">{f.icon}</div>
                <div>
                  <div className="font-semibold text-gray-800">{f.title}</div>
                  <div className="text-sm text-gray-500">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#services"
            className="inline-flex items-center gap-2 text-rose-600 font-semibold hover:gap-4 transition-all"
          >
            Jelajahi Layanan Kami
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
