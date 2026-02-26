import React from "react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";

export default function GlobalHeader() {
  return (
    <div className="sticky top-0 z-[1000] w-full bg-white shadow-none border-b border-[#f0f0f0]">
      <TopBar />
      <Navbar />
    </div>
  );
}
