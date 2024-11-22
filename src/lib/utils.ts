import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isNonEmptyObject = (obj: Record<string, unknown>): boolean => {
  if (!obj) return false;
  return Object.values(obj).some((value) => {
    if (typeof value === "object" && value !== null) {
      return isNonEmptyObject(value as Record<string, unknown>);
    }
    return value !== null && value !== "" && value !== undefined;
  });
};

export const isNonEmptyArray = <T>(arr: T[]): boolean => {
  if (!arr) return false;
  return arr.length > 0;
};

export const toTitleCase = (str: string): string => {
  return str
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const toHumanReadable = (str: string) => {
  return str
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
