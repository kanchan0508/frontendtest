import React from "react";
import { Outlet } from "react-router-dom";
import GlobalHeader from "@/components/layout/GlobalHeader";
import Footer from "@/components/landing-page/Footer";

export default function AppLayout() {
  return (
    <div className="font-mulish antialiased">
      <GlobalHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
