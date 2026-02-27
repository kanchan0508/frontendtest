import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

export default function DashboardLayout() {
  return (
    <div className="w-full min-h-screen bg-[#f7f9fc] relative flex overflow-x-hidden">
      <DashboardSidebar />

      <main className="flex-1 flex flex-col min-w-0 bg-[#f7f9fc]">
        <Outlet />
      </main>

      <div className="fixed inset-0 pointer-events-none z-[1] opacity-40">
        <div className="w-[200vw] h-[200vh] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/BojSLHGHMd.png)] bg-cover bg-no-repeat absolute top-[-100vh] left-[-50vw] mix-blend-soft-light" />
      </div>
    </div>
  );
}
