import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { mockApplications } from "../constants";
import ApplicationCardRow from "../components/ApplicationCardRow";

export default function ApplicationsListPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      <header className="border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto flex w-full max-w-[1440px] items-center px-4 py-4 sm:px-6 lg:px-[80px]">
          <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 font-mulish text-[16px] font-normal leading-[24px] text-[#495565]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
            <div className="hidden h-[24px] w-px bg-[#d1d5dc] sm:block" />
            <span className="font-arima text-[20px] font-bold leading-[28px] text-[#0a0a0a]">
              My Applications
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-[1120px] flex-col gap-6 px-4 pb-14 pt-8 sm:px-6 lg:gap-8 lg:px-0">
        <section className="flex flex-col items-center">
          <h1 className="text-center font-arima text-[38px] font-black leading-[1.15] text-[#0a0a0a] lg:text-[48px]">
            My Applications
          </h1>
          <p className="mt-1 text-center font-mulish text-[18px] font-light leading-[1.4] text-[#4a4a4a] lg:text-[20px]">
            Check the status of your applications
          </p>
        </section>

        <section className="flex flex-col gap-4">
          {mockApplications.map((item) => (
            <ApplicationCardRow key={item.id} item={item} />
          ))}
        </section>
      </main>
    </div>
  );
}
