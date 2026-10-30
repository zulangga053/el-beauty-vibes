# Development Tasks

## Task 1: Harden booking input constraints ✅

**Description:** Tambahkan constraint HTML dan validasi terpusat pada field booking agar browser membantu pengguna sebelum submit.

**Acceptance criteria:**
- [x] Nomor memakai `inputMode="tel"`, pattern yang kompatibel, dan pesan validasi jelas.
- [x] Tanggal memiliki `min` berbasis tanggal lokal, bukan UTC.
- [x] Jam memiliki `min="09:00"` dan `max="22:00"`.
- [x] Validasi submit tetap menangani bypass HTML/browser.

**Verification:**
- [ ] Uji valid/invalid melalui browser.
- [x] `npm run typecheck`.
- [x] `npm run build`.

**Dependencies:** None
**Files likely touched:** `src/components/Booking.tsx`, `src/data/business.ts`
**Estimated scope:** Small

## Task 2: Add focused validation self-checks ✅

**Description:** Pisahkan fungsi normalisasi/validasi booking yang murni dari komponen, lalu tinggalkan self-check kecil untuk format nomor dan jam.

**Acceptance criteria:**
- [x] Validator menerima `08`, `62`, `+62`, spasi, dan tanda hubung.
- [x] Validator menolak prefix/length yang tidak valid.
- [x] Check dapat dijalankan tanpa framework test tambahan.

**Verification:**
- [x] Jalankan self-check.
- [x] `npm run typecheck`.
- [x] `npm run build`.

**Dependencies:** Task 1
**Files likely touched:** `src/utils/bookingValidation.ts`, `src/components/Booking.tsx`
**Estimated scope:** Medium

## Task 3: Verify WhatsApp submission flow in browser ✅

**Description:** Verifikasi alur submit nyata pada local preview dan Vercel Preview, termasuk popup diblokir dan fallback.

**Acceptance criteria:**
- [x] `085333242342` dapat submit.
- [ ] `+6285333242342` dapat submit.
- [ ] `03:37` ditolak dengan pesan jam operasional.
- [x] Popup sukses membuka URL WhatsApp dengan payload encoded.
- [x] Fallback manual tersedia saat popup benar-benar diblokir.
- [x] `npm run typecheck`.
- [x] `npm run build`.

**Verification:**
- [ ] Browser smoke test pada desktop dan mobile viewport.
- [ ] Tidak ada console error/warning.

**Dependencies:** Task 1, Task 2
**Files likely touched:** `src/components/Booking.tsx`
**Estimated scope:** Small

## Checkpoint: Booking

- [ ] `npm run typecheck` lulus.
- [ ] `npm run build` lulus.
- [ ] Semua acceptance criteria Task 1–3 lulus.
- [ ] Review perubahan sebelum lanjut.

## Task 4: Run responsive browser smoke test ✅

**Description:** Uji navigasi, menu mobile, anchor, form, logo, dan layout pada breakpoint utama.

**Acceptance criteria:**
- [x] Tidak ada horizontal overflow.
- [x] Menu mobile dapat dibuka, ditutup, dan ditutup dengan `Escape`.
- [x] Form dapat dinavigasi keyboard.
- [x] Logo/fav icon terlihat jelas.

**Verification:**
- [x] Uji 320px, 768px, 1024px, 1440px.
- [x] Console bersih.

**Dependencies:** Checkpoint Booking
**Files likely touched:** Browser verification only; source changes jika ditemukan bug.
**Estimated scope:** Medium

## Task 5: Run Lighthouse/performance audit

**Description:** Ukur performa, accessibility, SEO, dan best practices pada Vercel Preview.

**Acceptance criteria:**
- [ ] Tidak ada critical accessibility issue.
- [ ] Hero image menjadi LCP candidate yang wajar.
- [ ] Asset image compression issue dicatat.
- [ ] Findings diberi prioritas P0/P1/P2.

**Verification:**
- [ ] Lighthouse desktop/mobile.
- [ ] Catat baseline dan hasil sesudah perbaikan.

**Dependencies:** Task 4
**Files likely touched:** `public/images/*`, `index.html`, `src/index.css` jika diperlukan.
**Estimated scope:** Medium

## Task 6: Review business content and production metadata

**Description:** Finalisasi data bisnis, canonical/OG absolute URL, alamat, jam, Instagram, dan CTA Maps.

**Acceptance criteria:**
- [ ] Owner menyetujui nama/alamat/jam/nomor.
- [ ] Canonical dan OG URL memakai domain production.
- [ ] Tidak ada testimoni atau klaim yang belum terverifikasi.
- [ ] Google Maps CTA memakai URL resmi jika tersedia.

**Verification:**
- [ ] Review manual content.
- [ ] Preview metadata dengan social debugger/Lighthouse.

**Dependencies:** Task 5
**Files likely touched:** `src/data/business.ts`, `index.html`, `src/components/Booking.tsx`, `src/components/Footer.tsx`.
**Estimated scope:** Medium

## Checkpoint: Release candidate

- [ ] Vercel Preview reviewed.
- [ ] Build/typecheck lulus.
- [ ] Browser smoke test lulus.
- [ ] Lighthouse findings resolved or accepted.
- [ ] Approval eksplisit sebelum merge ke `main`.
