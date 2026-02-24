import React from "react";

export default function StatsSection() {
  return (
    <div className="flex w-full py-[100px] px-4 lg:px-[142px] justify-center items-center shrink-0 bg-[#E1EBF0] relative overflow-hidden z-[173]">
      <div className="flex w-full max-w-[1156px] justify-between items-center flex-wrap lg:flex-nowrap relative z-[175]">
        
        {/* Left Content */}
        <div className="flex flex-col gap-[24px] relative z-[176]">
          <h2 className="font-arima text-[48px] lg:text-[64px] font-light leading-[1.2] text-[#1a1a1a]">
            Experts In <span className="text-[#a06bf9]">Virtual</span> <br />
            <span className="text-[#a06bf9]">Mental</span> Health Care
          </h2>
          {/* Yoga Figure Image */}
          <div className="w-[342px] h-[337px] relative mt-4">
            <div className="absolute inset-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/6GU9s2ZJsh.png)] bg-contain bg-no-repeat bg-center" />
          </div>
        </div>

        {/* Right Stats Content */}
        <div className="flex flex-col items-end gap-[40px] relative z-[179] min-w-[300px]">
          {/* Stat 1 */}
          <div className="flex flex-col items-end gap-[8px] pb-[32px] border-b border-[#cbd5e1] w-full">
            <span className="font-mulish text-[40px] font-bold text-[#6060b4] leading-[1]">
              5,000,000
            </span>
            <span className="font-mulish text-[18px] text-[#4a4a4a] font-light">
              Therapy sessions
            </span>
          </div>
          
          {/* Stat 2 */}
          <div className="flex flex-col items-end gap-[8px] pb-[32px] border-b border-[#cbd5e1] w-full">
            <span className="font-mulish text-[40px] font-bold text-[#6060b4] leading-[1]">
              1,200,000
            </span>
            <span className="font-mulish text-[18px] text-[#4a4a4a] font-light">
              Members helped
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-end gap-[8px] w-full">
            <span className="font-mulish text-[40px] font-bold text-[#6060b4] leading-[1]">
              5,700
            </span>
            <span className="font-mulish text-[18px] text-[#4a4a4a] font-light">
              Licensed providers
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
