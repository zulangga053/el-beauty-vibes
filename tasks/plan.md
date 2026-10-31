# Implementation Plan: Production Readiness

## Overview
Menutup gap prioritas tinggi sebelum merge ke `main`: validasi booking end-to-end, verifikasi Vercel Preview, dan quality gate manual/otomatis.

## Architecture Decisions
- Pertahankan booking client-side ke WhatsApp; backend/calendar bukan scope fase ini.
- Validasi nomor memakai normalisasi lokal; validasi browser tetap menjadi lapisan pertama.
- Validasi jam memakai batas operasional terpusat dari `src/data/business.ts`.
- Semua perubahan dikerjakan di `dev/website-improvements`; production hanya melalui merge setelah approval.
- Perubahan user yang belum committed tidak boleh ditimpa.

## Task List

### Phase 1: Booking correctness
- [ ] Task 1: Harden booking input constraints
- [ ] Task 2: Add focused validation self-checks
- [ ] Task 3: Verify WhatsApp submission flow in browser

### Checkpoint: Booking
- [ ] `npm run typecheck` lulus
- [ ] `npm run build` lulus
- [ ] Nomor `085333242342` diterima
- [ ] Nomor `+6285333242342` diterima
- [ ] Jam `03:37` ditolak dengan pesan jam operasional
- [ ] Jam `09:00` dan `22:00` diterima
- [ ] Popup WhatsApp/fallback terverifikasi

### Phase 2: Preview and release quality
- [ ] Task 4: Run responsive browser smoke test
- [ ] Task 5: Run Lighthouse/performance audit
- [ ] Task 6: Review business content and production metadata

### Checkpoint: Release candidate
- [ ] Vercel Preview reviewed
- [ ] Tidak ada console error
- [ ] Layout diuji pada 320px, 768px, 1024px, 1440px
- [ ] SEO metadata/logo tampil benar
- [ ] Tidak ada perubahan user yang tertinggal tanpa keputusan

## Risks and Mitigations
| Risk | Impact | Mitigation |
|---|---:|---|
| Format nomor lokal beragam | High | Normalisasi digit, dukung `08`, `62`, `+62`, spasi, tanda hubung |
| Jam browser memakai format lokal | High | Bandingkan nilai input `HH:mm`, verifikasi langsung di browser |
| Popup diblokir | Medium | Cek return `window.open`, tampilkan instruksi fallback |
| Gambar besar memperlambat LCP | Medium | Lighthouse, kompres asset, pertahankan lazy loading non-hero |
| Data bisnis berubah saat pengerjaan | High | Review `src/data/business.ts` sebelum release, jangan overwrite perubahan lokal |

## Open Questions
- Domain production final untuk `canonical` dan absolute Open Graph URL.
- Apakah alamat bisnis terbaru sudah final sebelum merge?
- Apakah Google Maps URL resmi tersedia?
