import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#home", label: "Beranda" },
  { href: "#about", label: "Tentang" },
  { href: "#services", label: "Layanan" },
  { href: "#pricelist", label: "Harga" },
  { href: "#gallery", label: "Galeri" },
  { href: "#testimonials", label: "Testimoni" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = open ? "hidden" : "";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              scrolled
                ? "bg-white border-2 border-gray-900 text-gray-900"
                : "bg-white text-gray-900 shadow-xl ring-2 ring-white/50"
            } group-hover:scale-105`}
          >
            <Logo size={47} className="text-gray-900" />
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className={`font-display font-bold text-base sm:text-lg ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              EL BEAUTY SALON
            </span>
            <span
              className={`text-[9px] sm:text-[10px] tracking-[0.25em] uppercase italic ${
                scrolled ? "text-rose-600" : "text-rose-200"
              }`}
            >
              by Ely Sumpiyati
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link text-sm font-medium transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-rose-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            className="btn-shine text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-rose-500/30"
          >
            Booking Sekarang
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          className={`xl:hidden p-2 rounded-lg ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden bg-white shadow-xl border-t border-rose-100 mt-2 max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-gray-700 font-medium hover:text-rose-600 border-b border-rose-50"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="btn-shine text-white text-center font-semibold py-3 rounded-full mt-3"
            >
              Booking Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
