"use client";
import React from "react";
import { usePathname } from "next/navigation";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";

export default function GlobalHeader() {
  const pathname = usePathname();

  // Hide header on dashboard pages
  if (pathname?.startsWith("/dashboard")) {
    return null;
  }

  return (
    <div className="sticky top-0 z-[1000] w-full bg-white shadow-none border-b border-[#f0f0f0]">
      <TopBar />
      <Navbar />
    </div>
  );
}
