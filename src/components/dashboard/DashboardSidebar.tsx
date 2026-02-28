import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "@/app/routes/paths";
import { DASHBOARD_NAV_ITEMS } from "@/features/dashboard/navigation";

interface DashboardSidebarProps {
  className?: string;
  onItemClick?: () => void;
  mobile?: boolean;
}

export default function DashboardSidebar({
  className = "",
  onItemClick,
  mobile = false,
}: DashboardSidebarProps) {
  const { pathname } = useLocation();

  return (
    <aside
      className={`${
        mobile
          ? "w-full h-full flex flex-col gap-4 items-start"
          : "w-[287px] h-screen sticky top-0 flex flex-col gap-[98px] items-start"
      } bg-white z-[20] shrink-0 border-r border-[#eaecf0] ${className}`}
    >
      <div
        className={`flex justify-center items-center w-full ${
          mobile ? "pt-4 pb-1" : "pt-6 pb-2"
        }`}
      >
        <Link to={ROUTES.root}>
          <div className="w-[61.927px] h-[64px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/ogLNSxSDnT.png)] bg-contain bg-no-repeat cursor-pointer" />
        </Link>
      </div>

      <nav
        className={`flex flex-col items-start w-full ${
          mobile ? "px-2" : "pr-4"
        } flex-1`}
      >
        {DASHBOARD_NAV_ITEMS.map((item) => {
          const isActive =
            item.path === ROUTES.dashboard
              ? pathname === ROUTES.dashboard ||
                pathname.startsWith(ROUTES.postPurchaseDashboard)
              : pathname.startsWith(item.path);

          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onItemClick}
              className={`flex ${
                mobile ? "w-full h-[46px] px-5" : "w-[271px] h-[48px] px-10"
              } gap-3 items-center rounded-tr-[36px] rounded-br-[36px] relative cursor-pointer group transition-colors ${
                isActive ? "bg-[#b95af9]" : "hover:bg-gray-50"
              }`}
            >
              <div
                className={`w-6 h-6 bg-cover bg-no-repeat transition-opacity ${
                  isActive
                    ? "filter brightness-0 invert"
                    : "opacity-100"
                }`}
                style={{ backgroundImage: `url(${item.icon})` }}
              />
              <span
                className={`font-mulish text-base transition-colors ${
                  isActive
                    ? "font-bold text-white"
                    : "font-medium text-[#4a4a4a] group-hover:text-primary-purple"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className={`w-full ${mobile ? "px-3 pb-4" : "px-4 pb-10"}`}>
        <div className="bg-[#8e5593] rounded-[20px] p-6 flex flex-col gap-6 relative overflow-hidden">
          <div className="relative z-10 flex flex-col gap-4">
            <h3 className="font-mulish text-xl font-semibold text-white leading-tight">
              Upgrade Your Plan to Get Access More Features.
            </h3>
            <p className="font-mulish text-sm font-light text-white opacity-90">
              Get more with our Premium Plans!
            </p>
            <Link
              to={ROUTES.profilePlan}
              onClick={onItemClick}
              className="w-full h-12 rounded-xl bg-white text-[#ac46ff] font-arima font-bold shadow-inner-white hover:bg-white/95 transition-all flex items-center justify-center"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
