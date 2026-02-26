import React from "react";

export default function TopBar() {
  return (
    <div className="w-full bg-accent-orange z-[432]">
      <div className="flex w-full max-w-[1440px] mx-auto py-[8px] md:py-[10px] px-4 md:px-10 justify-center items-center gap-2 md:gap-3 cursor-pointer hover:opacity-90 transition-opacity">
        <span className="text-[14px] md:btn-text-lg-bold leading-tight md:leading-[26px] text-white text-center whitespace-normal md:whitespace-nowrap z-[433]">
          Try Value-Gifts from AKSHAY MINDS
        </span>
        <div className="w-4 h-4 md:w-6 md:h-6 shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/eaFk635ikq.png)] bg-contain bg-center bg-no-repeat relative z-[434]" />
      </div>
    </div>
  );
}
