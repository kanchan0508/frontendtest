import React from "react";

export default function GrowthCTASection() {
  const handlePlaceholderClick = (event?: React.SyntheticEvent) => {
    if (event) {
      event.preventDefault();
    }
  };

  return (
    <section className="relative z-[358] mt-10 mb-[50px] w-full">
      <div className="mx-auto flex h-[858px] w-[342px] max-w-[calc(100vw-24px)] flex-col rounded-[24px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/DzxJrb1vyM.png)] bg-cover bg-center bg-no-repeat px-[48px] py-[100px] md:hidden">
        <div className="flex h-full w-full flex-col items-center">
          <div className="relative w-full max-w-[246px] text-left">
            <h2 className="font-arima text-[44px] font-medium leading-[1.18] text-white">
              Your Growth
              <br />
              Deserves
              <br />
              Attention
              <br />- Not Delay
            </h2>
            <div className="absolute left-[84%] top-[56%] h-[18px] w-[24px] -translate-x-1/2 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/9mpdoXTDo2.png)] bg-cover bg-no-repeat" />
          </div>

          <ul className="mt-[26px] flex w-full max-w-[246px] list-disc flex-col gap-[12px] pl-[22px] text-left marker:text-bg-main">
            <li className="font-mulish text-[16px] font-light leading-[1.35] text-bg-main">Build clarity</li>
            <li className="font-mulish text-[16px] font-light leading-[1.35] text-bg-main">Rise with purpose</li>
            <li className="font-mulish text-[16px] font-light leading-[1.35] text-bg-main">Start with awareness</li>
            <li className="font-mulish text-[16px] font-light leading-[1.35] text-bg-main">Create confidence.</li>
            <li className="font-mulish text-[16px] font-light leading-[1.35] text-bg-main">Sustain with dignity .</li>
          </ul>

          <div className="mt-auto flex w-full justify-center">
            <button
              type="button"
              onClick={handlePlaceholderClick}
              className="group flex h-[48px] w-[220px] cursor-pointer items-center justify-center rounded-[12px] border border-solid border-white transition-all hover:bg-white hover:text-footer-bg"
            >
              <span className="btn-text-lg text-center leading-[11px] text-white group-hover:text-footer-bg">
                Explore Self
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative mx-auto hidden w-[calc(100%-24px)] max-w-[930px] flex-col items-center justify-center gap-[40px] overflow-hidden rounded-[30px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/DzxJrb1vyM.png)] bg-cover bg-center bg-no-repeat px-[32px] py-[72px] md:flex lg:max-w-[1180px] lg:gap-[44px] lg:rounded-[36px] lg:px-[48px] lg:py-[84px] xl:max-w-[1320px] xl:px-[56px] xl:py-[90px] 2xl:max-w-[1440px]">
        <div className="relative flex w-full max-w-[820px] flex-col items-center gap-[20px] lg:max-w-[1024px] xl:max-w-[1120px]">
          <h2 className="text-center font-arima text-[44px] font-medium leading-[1.18] text-white lg:text-[48px] xl:text-[52px]">
            Your Growth Deserves{" "}
            <span className="relative inline-block font-black">
              Attention
              <span className="absolute -right-[20px] top-[8px] h-[18px] w-[24px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/9mpdoXTDo2.png)] bg-cover bg-no-repeat lg:-right-[24px] lg:top-[10px] lg:h-[22px] lg:w-[30px] xl:-right-[28px] xl:top-[12px]" />
            </span>{" "}
            - Not Delay
          </h2>

          <div className="flex flex-col items-center gap-[12px] lg:gap-[14px]">
            <ul className="flex flex-wrap items-center justify-center gap-x-[26px] gap-y-2 lg:gap-x-[40px]">
              <li className="flex items-center font-mulish text-[18px] font-light leading-[1.3] text-bg-main lg:text-[24px]">
                <span className="mr-2">&bull;</span>Build clarity
              </li>
              <li className="flex items-center font-mulish text-[18px] font-light leading-[1.3] text-bg-main lg:text-[24px]">
                <span className="mr-2">&bull;</span>Rise with purpose
              </li>
              <li className="flex items-center font-mulish text-[18px] font-light leading-[1.3] text-bg-main lg:text-[24px]">
                <span className="mr-2">&bull;</span>Start with awareness
              </li>
            </ul>
            <ul className="flex flex-wrap items-center justify-center gap-x-[28px] gap-y-2 lg:gap-x-[48px]">
              <li className="flex items-center font-mulish text-[18px] font-light leading-[1.3] text-bg-main lg:text-[24px]">
                <span className="mr-2">&bull;</span>Create confidence
              </li>
              <li className="flex items-center font-mulish text-[18px] font-light leading-[1.3] text-bg-main lg:text-[24px]">
                <span className="mr-2">&bull;</span>Sustain with dignity
              </li>
            </ul>
          </div>
        </div>

        <button
          type="button"
          onClick={handlePlaceholderClick}
          className="group relative z-[368] flex h-[52px] w-[236px] cursor-pointer items-center justify-center overflow-hidden rounded-[12px] border border-solid border-white transition-all hover:bg-white hover:text-footer-bg lg:h-[58px] lg:w-[270px] lg:rounded-[14px] xl:h-[60px] xl:w-[280px] xl:rounded-[16px]"
        >
          <span className="btn-text-lg relative z-[369] text-center text-[20px] leading-[1] text-white group-hover:text-footer-bg lg:text-[22px] xl:text-[24px]">
            Explore Self
          </span>
        </button>
      </div>
    </section>
  );
}
