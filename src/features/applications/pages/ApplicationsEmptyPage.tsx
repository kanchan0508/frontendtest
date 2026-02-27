import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProfileBackBar from "@/features/profile/components/ProfileBackBar";

export default function ApplicationsEmptyPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f7f9fc]">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-[14%] top-0 h-[122%] w-[130%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/dYneFqCTH4.png)] bg-cover bg-no-repeat" />
      </div>

      <ProfileBackBar onBack={() => navigate(-1)} />

      <main className="relative z-[2] mx-auto flex w-full max-w-[1120px] flex-col items-center gap-8 px-4 pb-14 pt-8 sm:px-6 lg:gap-10 lg:px-0">
        <header className="flex w-full flex-col items-center">
          <h1 className="text-center font-arima text-[38px] font-black leading-[1.15] text-[#0a0a0a] lg:text-[48px]">
            My Applications
          </h1>
          <p className="mt-1 text-center font-mulish text-[18px] font-light leading-[1.4] text-[#4a4a4a] lg:text-[20px]">
            Check the status of your applications
          </p>
        </header>

        <section className="flex w-full max-w-[556px] flex-col items-center gap-8">
          <div className="h-[300px] w-full rounded-[16px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/mpUaSnxsRt.png)] bg-contain bg-center bg-no-repeat sm:h-[380px] lg:h-[449px]" />

          <div className="flex w-full max-w-[541px] flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-3">
              <p className="text-center font-arima text-[24px] font-bold uppercase leading-[1.2] text-[#131313]">
                You haven’t started yet
              </p>
              <p className="max-w-[520px] text-center font-mulish text-[15px] font-normal leading-[1.4] text-[#131313] lg:text-[16px]">
                Your Applications will show here after you complete your first application.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="flex h-[44px] w-full max-w-[226px] cursor-pointer items-center justify-center gap-2 rounded-[8px] bg-[linear-gradient(90deg,#B95AF9_0%,#8F45FF_100%)] px-4"
            >
              <span className="font-arima text-[14px] font-medium leading-[20px] text-white">
                Go to Dashboard
              </span>
              <ArrowRight className="h-4 w-4 text-white" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
