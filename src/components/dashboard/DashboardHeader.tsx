import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/routes/paths";

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
}

const NOTIFICATIONS = Array.from({ length: 4 }, () => ({
  title: "Purchase Successful!",
  time: "2hs ago",
  message:
    "Your Premium Package has been successfully purchased. Enjoy Free Scans for the month!",
}));

export default function DashboardHeader({
  title,
  subtitle,
}: DashboardHeaderProps) {
  const navigate = useNavigate();
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const notificationRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setIsNotificationOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="h-[100px] flex items-center justify-between px-10 bg-white border-b border-[#eaecf0] sticky top-0 z-[19]">
      <div className="flex flex-col">
        <h2 className="font-mulish text-2xl font-bold text-[#101727]">
          {title}
        </h2>
        {subtitle && (
          <p className="font-mulish text-base font-normal text-[#495565]">
            {subtitle}
          </p>
        )}
      </div>

      <div className="flex items-center gap-6">
        <div ref={notificationRef} className="relative">
          <button
            type="button"
            onClick={() => setIsNotificationOpen((prev) => !prev)}
            className="w-9 h-9 bg-gray-50 rounded-lg flex items-center justify-center relative cursor-pointer"
            aria-expanded={isNotificationOpen}
            aria-haspopup="dialog"
            aria-label="Open notifications"
          >
            <div className="w-2 h-2 bg-[#fb2c36] rounded-full absolute top-1 right-1 border-2 border-white" />
            <div className="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/f0HwjudbGw.png)] bg-contain bg-no-repeat opacity-60" />
          </button>

          {isNotificationOpen && (
            <div className="absolute right-0 top-[calc(100%+12px)] z-[60] flex w-[calc(100vw-24px)] max-w-[433px] flex-col gap-[10px] rounded-[10px] bg-[#fff] p-[20px] shadow-[0_4px_24px_0_rgba(0,0,0,0.2)]">
              <span className="font-mulish text-[20px] font-bold leading-[25px] text-[#000]">
                Notifications
              </span>

              <div className="flex max-h-[70vh] flex-col overflow-y-auto">
                {NOTIFICATIONS.map((notification, index) => (
                  <div
                    key={`${notification.title}-${index}`}
                    className={`flex gap-[8px] self-stretch bg-[#fff] px-0 py-[12px] ${
                      index < NOTIFICATIONS.length - 1
                        ? "border-t border-solid border-t-[#f0e6f3]"
                        : ""
                    }`}
                  >
                    <div className="flex grow basis-0 gap-[12px]">
                      <div className="flex grow basis-0 flex-col gap-[4px]">
                        <div className="flex items-start gap-[12px]">
                          <span className="grow basis-auto overflow-hidden whitespace-nowrap font-arima text-[14px] font-medium leading-[20px] tracking-[0.1px] text-[#1a1a1a] capitalize">
                            {notification.title}
                          </span>
                          <span className="flex h-[16px] w-[46px] shrink-0 justify-end whitespace-nowrap font-mulish text-[12px] font-normal leading-[16px] tracking-[0.2px] text-right text-[#ac46ff]">
                            {notification.time}
                          </span>
                        </div>
                        <span className="flex w-full justify-start overflow-hidden font-mulish text-[12px] font-normal leading-[16px] tracking-[0.2px] text-left text-[#4a4a4a] sm:w-[393px]">
                          {notification.message}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => navigate(ROUTES.profile)}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 border-2 border-[#eaecf0] rounded-full overflow-hidden group-hover:border-primary-purple transition-all">
            <img
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/avN2HGDrwk.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/wsOntQL8YY.png)] bg-contain bg-no-repeat" />
        </button>
      </div>
    </header>
  );
}
