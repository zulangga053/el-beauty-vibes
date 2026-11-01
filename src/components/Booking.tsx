import { useEffect, useRef, useState } from "react";
import { business, whatsappUrl } from "../data/business";
import { isValidBookingTime, isValidPhone } from "../utils/bookingValidation";
import { bookingOptions, bookingPackages, bookingServices, type BookingOption } from "../data/bookingOptions";

const getLocalDate = () => {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60_000;
  return new Date(now.getTime() - offset).toISOString().split("T")[0];
};

function getRequestedService() {
  const value = new URLSearchParams(window.location.hash.split("?")[1] ?? "").get("service");
  return bookingOptions.includes(value as BookingOption) ? value as BookingOption : "";
}

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: getRequestedService(),
    date: "",
    time: "",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const statusRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (status !== "idle") statusRef.current?.focus();
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!isValidPhone(form.phone)) {
      setError("Masukkan nomor WhatsApp Indonesia yang valid, contoh 081234567890.");
      setStatus("error");
      return;
    }

    if (!isValidBookingTime(form.time)) {
      setError(`Pilih jam booking antara ${business.openingTime} dan ${business.closingTime} WITA.`);
      setStatus("error");
      return;
    }

    const message =
`🌸 BOOKING EL BEAUTY SALON 🌸

👤 Nama: ${form.name}
📱 No. HP: ${form.phone}
💄 Layanan: ${form.service}
📅 Tanggal: ${form.date}
⏰ Jam: ${form.time}
📝 Catatan: ${form.notes || "-"}

Terima kasih 🙏`;

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setStatus("success");
  };

  return (
    <section
      id="booking"
      className="py-20 lg:py-28 bg-gradient-to-br from-rose-700 via-rose-600 to-rose-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 pattern-dots opacity-10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="text-white">
          <div className="divider-fancy text-gold-light text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Booking Sekarang
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Reservasi Jadwal{" "}
            <span className="text-gradient-gold italic">Cantikmu</span>
          </h2>
          <p className="text-rose-100 leading-relaxed mb-8">
            Isi form berikut atau hubungi kami langsung melalui WhatsApp /
            Instagram untuk membuat reservasi. Tim kami akan segera
            mengkonfirmasi jadwal Anda.
          </p>

          <div className="space-y-4">
            {[
              {
                icon: "📍",
                title: "Lokasi",
                desc: business.shortAddress,
                sub: "(Depan Kampus UNSWA Kec, Punda)",
              },
              {
                icon: "🕐",
                title: "Jam Operasional",
                desc: business.hours,
                sub: business.openDays,
              },
              {
                icon: "📱",
                title: "Hubungi Kami",
                desc: "DM Instagram @salonbeautyvibes__",
                sub: `Owner: ${business.owner}`,
              },
            ].map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-4 bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4"
              >
                <div className="text-3xl">{info.icon}</div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-rose-200">
                    {info.title}
                  </div>
                  <div className="font-semibold">{info.desc}</div>
                  <div className="text-sm text-rose-200 mt-0.5">{info.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl p-7 lg:p-10 shadow-2xl">
          <h3 className="font-display text-2xl font-bold text-gray-900 mb-1">
            Form Booking
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Pesanan Anda akan dikirim via WhatsApp
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="booking-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                Nama Lengkap *
              </label>
              <input
                id="booking-name"
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Nama Anda"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition"
              />
            </div>

            <div>
              <label htmlFor="booking-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                Nomor WhatsApp *
              </label>
              <input
                id="booking-phone"
                type="tel"
                name="phone"
                inputMode="tel"
                autoComplete="tel"
                pattern="(?:\+62|62|0)8[0-9]{8,11}"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="08xxxxxxxxxx"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition"
              />
            </div>

            <div>
              <label htmlFor="booking-service" className="block text-sm font-medium text-gray-700 mb-1.5">
                Pilih Layanan *
              </label>
              <select
                id="booking-service"
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition bg-white"
              >
                <option value="">-- Pilih layanan --</option>
                <optgroup label="Layanan">
                  {bookingServices.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </optgroup>
                <optgroup label="Paket Treatment">
                  {bookingPackages.map((pkg) => (
                    <option key={pkg} value={pkg}>{pkg}</option>
                  ))}
                </optgroup>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="booking-date" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Tanggal *
                </label>
                <input
                  id="booking-date"
                  type="date"
                  name="date"
                  required
                  min={getLocalDate()}
                  value={form.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition"
                />
              </div>
              <div>
                <label htmlFor="booking-time" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Jam *
                </label>
                <input
                  id="booking-time"
                  type="time"
                  name="time"
                  min={business.openingTime}
                  max={business.closingTime}
                  required
                  value={form.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="booking-notes" className="block text-sm font-medium text-gray-700 mb-1.5">
                Catatan
              </label>
              <textarea
                id="booking-notes"
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={3}
                placeholder="Permintaan khusus, dll..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition resize-none"
              />
            </div>

            <p
              ref={statusRef}
              tabIndex={-1}
              role={status === "error" ? "alert" : "status"}
              aria-live="polite"
              className={`text-sm ${status === "error" ? "text-red-600" : "text-green-700"}`}
            >
              {status === "error" ? error : status === "success" ? "Booking siap dikirim via WhatsApp." : ""}
            </p>
            <button
              type="submit"
              className="w-full btn-shine text-white font-semibold py-4 rounded-xl shadow-lg shadow-rose-500/30 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.9-2.1-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.6.2-1.2.2-1.3-.1-.2-.3-.3-.5-.4zM12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.3 1.2 4.7L2 22l5.3-1.2c1.4.7 2.9 1.1 4.5 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
              </svg>
              {status === "success" ? "Terkirim! ✓" : "Kirim Booking via WhatsApp"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
