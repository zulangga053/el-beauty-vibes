import { business } from "../data/business";

export function normalizePhone(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.startsWith("08")) return `62${digits.slice(1)}`;
  if (digits.startsWith("8")) return `62${digits}`;
  if (digits.startsWith("6208")) return `62${digits.slice(3)}`;
  return digits;
}

export function isValidPhone(value: string) {
  return /^628\d{8,11}$/.test(normalizePhone(value));
}

export function isValidBookingTime(value: string) {
  return value >= business.openingTime && value <= business.closingTime;
}

export function runBookingValidationSelfCheck() {
  const cases = [
    ["085333242342", true],
    ["+62 853-3324-2342", true],
    ["6285333242342", true],
    ["123456", false],
  ] as const;

  for (const [phone, expected] of cases) {
    console.assert(isValidPhone(phone) === expected, `Phone case failed: ${phone}`);
  }

  console.assert(isValidBookingTime("09:00"), "Opening time must be valid");
  console.assert(isValidBookingTime("22:00"), "Closing time must be valid");
  console.assert(!isValidBookingTime("03:37"), "Outside hours must be invalid");
}
