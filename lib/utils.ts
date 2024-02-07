import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function lastDigitsUrl(url: string): string {
  const digitsAfterLastSlash = url.match(/\/(\d+)$/);
  return digitsAfterLastSlash ? digitsAfterLastSlash[1] : "";
}
