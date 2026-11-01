import { packages } from "./priceList";

export const bookingServices = [
  "Hair Cut & Styling",
  "Hair Coloring",
  "Smoothing",
  "Creambath",
  "Makeup Daily",
  "Makeup Wisuda",
  "Makeup Party",
  "Makeup Wedding",
  "Facial",
  "Spa & Massage",
  "Nail Art",
  "Lainnya",
] as const;

export const bookingPackages = packages.map(({ name }) => name);

export const bookingOptions = [...bookingServices, ...bookingPackages] as const;

export type BookingOption = (typeof bookingOptions)[number];

export function bookingUrl(service: string) {
  const params = new URLSearchParams({ service });
  return `/#booking?${params.toString()}`;
}
