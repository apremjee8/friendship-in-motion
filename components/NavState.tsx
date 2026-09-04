"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";

export function NavState() {
  const pathname = usePathname();
  return <Header pathname={pathname} />;
}
