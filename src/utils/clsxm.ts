import clsx, { ClassArray } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge classes with tailwind-merge with clsx full feature */
export default function clsxm(...classes: ClassArray) {
  return twMerge(clsx(...classes));
}
