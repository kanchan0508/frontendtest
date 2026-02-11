import React from "react";

export default function TopBar() {
  return (
    <div className="flex w-full max-w-[1440px] mx-auto pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-accent-orange relative cursor-pointer hover:opacity-90 transition-opacity z-[432]">
      <span className="h-[26px] shrink-0 basis-auto font-arima text-[16px] font-extrabold leading-[26px] text-white relative text-left whitespace-nowrap z-[433]">
        Try Value-Gifts from AKSHAY MINDS
      </span>
      <div className="w-[24px] h-[24px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/eaFk635ikq.png)] bg-cover bg-no-repeat relative z-[434]" />
    </div>
  );
}
