# Development Tasks

> Updated: booking preselection plan. Full implementation plan: `/Users/macbookpro/.opencode/plan/el-beauty-booking-preselect.md`

## Feature: Preselect Layanan/Paket pada Booking

### Task 1 — Centralize booking options ✅
- [x] Buat data opsi booking terpusat.
- [x] Reuse layanan yang sudah ada.
- [x] Reuse `packages` dari `src/data/priceList.ts`.
- [x] Hindari duplikasi daftar layanan/paket di `Booking.tsx`.

**Acceptance criteria:**
- [x] Dropdown mengambil layanan dan paket dari sumber terpusat.
- [x] Nama opsi sama dengan label CTA.
- [x] Tidak ada opsi duplikat.

**Verification:**
- [x] `npm run typecheck`.
- [x] `npm run build`.

### Task 2 — Add booking deep-link helper
- [ ] Buat helper URL booking.
- [ ] Encode nilai service menggunakan `URLSearchParams`.
- [ ] Terapkan pada CTA layanan.
- [ ] Terapkan pada CTA paket.

**Acceptance criteria:**
- [ ] CTA layanan menghasilkan parameter `service` valid.
- [ ] CTA paket menghasilkan parameter `service` valid.
- [ ] Anchor tetap mengarah ke `#booking`.

**Verification:**
- [ ] Inspeksi href hasil render.
- [ ] Uji karakter spasi dan simbol.

### Task 3 — Read and validate deep-link in Booking
- [ ] Baca query `service` saat komponen mount.
- [ ] Validasi terhadap allowlist.
- [ ] Query invalid kembali ke pilihan kosong.
- [ ] Jangan menimpa pilihan setelah user memilih manual.

**Acceptance criteria:**
- [ ] Deep-link layanan memilih layanan otomatis.
- [ ] Deep-link paket memilih paket otomatis.
- [ ] Query invalid tidak merusak form.
- [ ] Reload mempertahankan pilihan.
- [ ] Pilihan manual tetap dipertahankan.

### Task 4 — Improve dropdown UX
- [ ] Tambahkan `<optgroup label="Layanan">`.
- [ ] Tambahkan `<optgroup label="Paket Treatment">`.
- [ ] Pertahankan required validation.
- [ ] Pastikan keyboard/focus tetap aksesibel.

### Checkpoint — Booking preselection
- [ ] `npm run typecheck` lulus.
- [ ] `npm run build` lulus.
- [ ] CTA layanan teruji.
- [ ] CTA paket teruji.
- [ ] Invalid query teruji.
- [ ] Manual override teruji.
- [ ] Console bersih.

## Prior release tasks

- [ ] Task 6 content: testimoni terverifikasi.
- [ ] Lighthouse aktual desktop/mobile.
- [ ] Final Vercel Preview review.
- [ ] Approval eksplisit sebelum merge `main`.
