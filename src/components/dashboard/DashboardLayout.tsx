import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

export default function DashboardLayout() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState(false);

  React.useEffect(() => {
    const handleOpen = () => setIsMobileSidebarOpen(true);
    window.addEventListener("dashboard:open-sidebar", handleOpen);
    return () => window.removeEventListener("dashboard:open-sidebar", handleOpen);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#f7f9fc] relative flex overflow-x-hidden">
      <DashboardSidebar className="hidden sm:flex" />

      <main className="flex-1 flex flex-col min-w-0 bg-[#f7f9fc]">
        <Outlet />
      </main>

      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-[80] sm:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsMobileSidebarOpen(false)}
            aria-label="Close navigation menu"
          />
          <div className="relative z-[81] h-full w-[82vw] max-w-[320px]">
            <button
              type="button"
              onClick={() => setIsMobileSidebarOpen(false)}
              className="absolute right-3 top-3 z-[82] flex h-8 w-8 items-center justify-center rounded-full bg-[#f3f4f6] text-[#4a4a4a]"
              aria-label="Close menu"
            >
              X
            </button>
            <DashboardSidebar
              className="flex"
              mobile
              onItemClick={() => setIsMobileSidebarOpen(false)}
            />
          </div>
        </div>
      )}

      <div className="fixed inset-0 pointer-events-none z-[1] opacity-40">
        <div className="w-[200vw] h-[200vh] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/BojSLHGHMd.png)] bg-cover bg-no-repeat absolute top-[-100vh] left-[-50vw] mix-blend-soft-light" />
      </div>
    </div>
  );
}
