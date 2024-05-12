import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNowStrict } from "date-fns";
import { UserResource } from "@clerk/types";
import { User } from "@clerk/nextjs/server";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMoney(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function relativeDate(form: Date) {
  return formatDistanceToNowStrict(form, { addSuffix: true });
}

export const toSlug = (str: string) =>
  str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

export const isAdmin = (user: UserResource | User) => {
  return user.publicMetadata?.role === "admin";
};
