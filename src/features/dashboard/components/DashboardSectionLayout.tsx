import type { ReactNode } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

interface DashboardSectionLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function DashboardSectionLayout({
  title,
  subtitle,
  children,
}: DashboardSectionLayoutProps) {
  return (
    <>
      <DashboardHeader title={title} subtitle={subtitle} />
      <div className="flex-1 overflow-y-auto px-6 py-10 xl:px-8 2xl:px-10 flex flex-col items-center">
        <div className="w-full max-w-[1150px] 2xl:max-w-[1680px]">{children}</div>
      </div>
    </>
  );
}
