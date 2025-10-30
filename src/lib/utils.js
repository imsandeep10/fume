import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export async function fetchTeamMembers() {
  const res = await fetch("/api/team", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    console.error("Failed to fetch team members:", res.status);
    throw new Error("Failed to fetch team members");
  }

  return res.json();
}
