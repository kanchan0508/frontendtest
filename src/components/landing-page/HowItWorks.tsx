import React from "react";

export default function HowItWorks() {
  return (
    <div className="flex w-full pt-[60px] md:pt-[100px] px-6 md:px-10 lg:px-20 pb-[50px] flex-col gap-[48px] items-center shrink-0 flex-nowrap relative z-[36]">
      
      {/* Header Section */}
      <div className="flex flex-col gap-[20px] items-center self-stretch shrink-0 flex-nowrap relative z-[37]">
        <div className="w-full shrink-0 font-overpass text-[36px] md:text-[48px] font-bold leading-tight relative text-center z-[38]">
          <span className="heading-h2-medium text-text-dark relative text-center">
            How AMPL{" "}
          </span>
          <span className="relative inline-block">
            <span className="heading-h2-black gradient-text-purple relative text-center">
              Works
            </span>
            <img src="/vector-4.svg" alt="" className="absolute -bottom-[6px] left-0 w-full pointer-events-none" />
          </span>
          <span className="heading-h2-medium text-text-dark relative text-center">
            ?
          </span>
        </div>
        <span className="flex w-full max-w-[800px] mx-auto justify-center items-center self-stretch shrink-0 text-base md:body-b1 font-normal leading-relaxed text-text-gray tracking-[0.2px] relative text-center z-[39]">
          We help you address life's toughest questions and find the answers
          within yourself.
        </span>
      </div>

      {/* Row 1 */}
      <div className="flex w-full container pt-10 gap-10 lg:gap-[84px] items-center flex-col lg:flex-row relative z-[41]">
        <div className="flex w-[300px] sm:w-[412px] gap-[12px] items-center shrink-0 relative z-[42]">
          <div className="flex w-[140px] sm:w-[190px] flex-col gap-[12px] items-start opacity-50 relative z-[43]">
            <div className="w-[140px] h-[120px] sm:w-[190px] sm:h-[170px] bg-accent-green rounded-tl-[88px] rounded-tr-[8px] rounded-br-[24px] rounded-bl-[24px]" />
            <div className="w-[140px] h-[120px] sm:w-[190px] sm:h-[170px] bg-accent-blue rounded-tl-[4px] rounded-tr-[88px] rounded-br-[24px] rounded-bl-[24px]" />
          </div>
          <div className="w-[160px] h-[220px] sm:w-[219px] sm:h-[298px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/H3sVsY59q0.png)] bg-contain bg-no-repeat absolute top-[8%] left-[23%] z-[47]" />
          <div className="w-[160px] h-[140px] sm:w-[210px] sm:h-[187px] bg-accent-orange rounded-tl-[8px] rounded-tr-[24px] rounded-br-[44px] rounded-bl-[8px] opacity-50 relative overflow-hidden z-[46]" />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center lg:items-start grow flex-1 text-center lg:text-left z-[48]">
          <span className="text-2xl md:text-[32px] font-bold text-heading-blue whitespace-nowrap z-50">
            PSYCHOMETRIC ASSESSMENT
          </span>
          <span className="text-sm md:text-lg text-text-gray leading-relaxed max-w-[624px] z-[52]">
            Answer a few simple questions to gain clear, science-backed
            insights into your emotions, strengths, and personal patterns.
          </span>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex w-full container pt-10 gap-10 lg:gap-[84px] items-center flex-col-reverse lg:flex-row relative z-[53]">
        <div className="flex flex-col gap-4 justify-center items-center lg:items-end grow flex-1 text-center lg:text-right z-[54]">
          <span className="text-2xl md:text-[32px] font-bold text-heading-blue whitespace-nowrap z-[56]">
            GUIDED TOOLS AND MODULES
          </span>
          <span className="text-sm md:text-lg text-text-gray leading-relaxed max-w-[624px] z-[58]">
            Engage with short, guided exercises, reflections, and learning
            modules designed to build balance, clarity, and resilience.
          </span>
        </div>
        <div className="flex w-[300px] sm:w-[412px] gap-[12px] items-center shrink-0 relative z-[59]">
          <div className="w-[160px] h-[140px] sm:w-[210px] sm:h-[187px] bg-accent-orange rounded-tl-[8px] rounded-tr-[24px] rounded-br-[44px] rounded-bl-[8px] opacity-50 relative rotate-180 z-[60]" />
          <div className="w-[200px] h-[220px] sm:w-[266px] sm:h-[298px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[62]">
            <div className="w-full h-full relative">
              <div className="w-full h-[81%] absolute top-0 left-0">
                <div className="w-[26px] h-[45px] sm:w-[35px] sm:h-[60px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/tCzLO2XTyw.png)] bg-contain bg-no-repeat relative ml-[40%] sm:ml-[127px] z-[67]" />
                <div className="w-full h-[50px] relative mt-[80px] sm:mt-[131px]">
                  <div className="w-[15%] h-[95%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/cvMNAqE9eU.png)] bg-contain bg-no-repeat absolute right-0 top-0 z-[69]" />
                  <div className="w-[11%] h-[82%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/fRLHKdFfJW.png)] bg-contain bg-no-repeat absolute left-0 top-[17%] z-[68]" />
                </div>
              </div>
              <div className="w-[48%] h-[40%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/KAPzUbUVVW.png)] bg-contain bg-no-repeat absolute top-[59%] left-[27%] z-[63]" />
            </div>
            <div className="flex w-full justify-between items-center absolute top-[23%] left-0 px-2 z-[65]">
              <div className="w-[88px] h-[84px] sm:w-[118px] sm:h-[112px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/ZTh1Gh0nKL.png)] bg-contain bg-no-repeat z-[64]" />
              <div className="w-[88px] h-[84px] sm:w-[118px] sm:h-[112px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/5PGvsvqZLL.png)] bg-contain bg-no-repeat z-[65]" />
            </div>
          </div>
          <div className="w-[140px] h-[260px] sm:w-[190px] sm:h-[352px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/7ePEDpydXw.png)] bg-contain bg-no-repeat relative z-[61]" />
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex w-full container pt-10 gap-10 lg:gap-[84px] items-center flex-col lg:flex-row relative z-[70]">
        <div className="flex w-[300px] sm:w-[412px] gap-[12px] items-center shrink-0 relative z-[71]">
          <div className="flex w-[140px] sm:w-[190px] flex-col gap-[12px] items-start opacity-50 relative z-[72]">
            <div className="w-[140px] h-[120px] sm:w-[190px] sm:h-[170px] bg-accent-green rounded-tl-[88px] rounded-tr-[8px] rounded-br-[24px] rounded-bl-[24px]" />
            <div className="w-[140px] h-[120px] sm:w-[190px] sm:h-[170px] bg-accent-blue rounded-tl-[4px] rounded-tr-[88px] rounded-br-[24px] rounded-bl-[24px]" />
          </div>
          <div className="w-[200px] h-[220px] sm:w-[277px] sm:h-[298px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/M6S26vYfrp.png)] bg-contain bg-no-repeat absolute top-[8%] left-[16%] z-[76]" />
          <div className="w-[160px] h-[140px] sm:w-[210px] sm:h-[187px] bg-accent-orange rounded-tl-[8px] rounded-tr-[24px] rounded-br-[44px] rounded-bl-[8px] opacity-50 relative z-[75]" />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center lg:items-start grow flex-1 text-center lg:text-left z-[77]">
          <span className="text-2xl md:text-[32px] font-bold text-heading-blue whitespace-nowrap z-[79]">
            COACHING AND VALUE GIFTS
          </span>
          <span className="text-sm md:text-lg text-text-gray leading-relaxed max-w-[624px] z-[81]">
            Connect with expert coaches for ongoing support and unlock
            value-driven rewards as you progress on your journey.
          </span>
        </div>
      </div>
    </div>
  );
}
