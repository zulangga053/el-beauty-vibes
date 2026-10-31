import { business } from "../data/business";
import Logo from "./Logo";

function LogoIcon() {
  return <Logo size={110} className="text-gray-900" />;
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src="/images/hero-salon.jpg"
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 hero-gradient" />

      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-rose-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-gold/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white pt-24">
        {/* Logo above headline */}
        <div className="flex justify-center mb-6 animate-fade-up">
          <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/30">
            <LogoIcon />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs sm:text-sm tracking-wide">
            {business.openDays} · {business.hours}
          </span>
        </div>

        <h1
          className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-6 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Tampil <span className="text-gradient-gold italic">Cantik</span>
          <br />
          Setiap Hari
        </h1>

        <p
          className="text-base sm:text-lg lg:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          El Beauty Salon hadir di Kota Bima sebagai destinasi kecantikan
          terbaik. Nikmati layanan profesional dari ahlinya — mulai dari hair,
          makeup, hingga perawatan wajah.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#booking"
            className="btn-shine text-white font-semibold px-8 py-4 rounded-full shadow-2xl shadow-rose-500/40 inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Booking Sekarang
          </a>
          <a
            href="#services"
            className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all inline-flex items-center justify-center gap-2"
          >
            Lihat Layanan
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mt-16 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { n: "500+", l: "Pelanggan Puas" },
            { n: "20+", l: "Layanan Premium" },
            { n: "5★", l: "Rating Terbaik" },
          ].map((s) => (
            <div
              key={s.l}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6"
            >
              <div className="font-display text-2xl sm:text-4xl font-bold text-gradient-gold">
                {s.n}
              </div>
              <div className="text-xs sm:text-sm text-white/80 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
