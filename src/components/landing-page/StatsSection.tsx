import React from "react";

export default function StatsSection() {
  const stats = [
    { value: "5,000,000", label: "Therapy sessions" },
    { value: "1,200,000", label: "Members helped" },
    { value: "5,700", label: "Licensed providers" },
  ];

  return (
    <div className="relative z-[173] flex w-full items-center justify-center overflow-hidden bg-[#E1EBF0] px-4 py-[60px] md:px-8 md:py-[80px] lg:px-[142px] lg:py-[100px] 2xl:px-[180px] 2xl:py-[120px] min-[1920px]:px-[220px] min-[1920px]:py-[140px]">
      <div className="relative z-[175] flex w-full max-w-[1156px] flex-col items-center gap-[24px] md:flex-row md:items-center md:justify-between md:gap-[40px] lg:gap-[56px] 2xl:max-w-[1360px] 2xl:gap-[72px] min-[1920px]:max-w-[1560px] min-[1920px]:gap-[96px]">
        {/* Left Content */}
        <div className="relative z-[176] flex flex-col items-center gap-[16px] md:w-[58%] md:items-start md:gap-[24px] 2xl:w-[60%]">
          <h2 className="text-center font-arima text-[48px] font-light leading-[1.18] text-[#1a1a1a] md:text-left md:text-[56px] lg:text-[64px] 2xl:text-[72px] min-[1920px]:text-[84px]">
            Experts In <span className="text-[#a06bf9]">Virtual</span> <br />
            <span className="text-[#a06bf9]">Mental</span> Health Care
          </h2>

          {/* Yoga Figure Image */}
          <div className="relative mt-1 h-[220px] w-[223px] sm:h-[290px] sm:w-[293px] md:mt-2 md:h-[300px] md:w-[304px] lg:mt-4 lg:h-[337px] lg:w-[342px] 2xl:h-[390px] 2xl:w-[396px] min-[1920px]:h-[440px] min-[1920px]:w-[447px]">
            <div className="absolute inset-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/6GU9s2ZJsh.png)] bg-contain bg-no-repeat bg-center" />
          </div>
        </div>

        {/* Right Stats Content */}
        <div className="relative z-[179] flex w-full max-w-[300px] flex-col gap-[12px] md:w-[42%] md:max-w-[360px] md:items-end md:gap-[18px] lg:max-w-[380px] 2xl:w-[40%] 2xl:max-w-[460px] 2xl:gap-[22px] min-[1920px]:max-w-[520px] min-[1920px]:gap-[28px]">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex w-full flex-col items-center gap-[8px] pb-[12px] text-center md:items-end md:text-right 2xl:gap-[10px] 2xl:pb-[16px] min-[1920px]:gap-[12px] min-[1920px]:pb-[20px] ${index < stats.length - 1 ? "border-b border-[#cbd5e1]" : ""}`}
            >
              <span className="font-mulish text-[40px] font-bold leading-[1] text-[#6060b4] 2xl:text-[46px] min-[1920px]:text-[52px]">
                {stat.value}
              </span>
              <span className="font-mulish text-[18px] font-light text-[#4a4a4a] 2xl:text-[22px] min-[1920px]:text-[24px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
