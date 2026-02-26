import React, { useState, useEffect, useCallback } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % 4);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="flex w-full overflow-hidden relative flex-col items-center gap-[36px] px-4 md:px-[20px] mt-[30px] mx-auto ">
      
      {/* =========================================
          DESKTOP & TABLET VIEW (Hidden on Mobile)
          ========================================= */}
      <div className="hidden md:block w-full max-w-[1336px] 2xl:max-w-[1500px] aspect-[1336/824] relative rounded-[32px] md:rounded-[64px] overflow-hidden bg-[#f0e6f3] shadow-md ">
        {/* Horizontal Slide Strip */}
        <div className="h-full w-full origin-top md:scale-[0.55] lg:scale-[0.74] xl:scale-100 2xl:scale-100">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Desktop Slide 1 */}
          <div className="w-full h-full relative shrink-0 overflow-hidden">
            <div className="w-[1336px] h-[950px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/UxfhJsyNPO.png)] bg-cover bg-no-repeat absolute top-0 left-1/2 -translate-x-1/2 z-[3]" />
            <div className="w-[61.75%] h-[99.39%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/Zus30MCxXs.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[0.61%] left-[38.77%] 2xl:left-[40.8%] z-[15]" />
            <div className="w-[8.23%] h-[110px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/rwdceixGoq.png)] bg-cover bg-no-repeat absolute top-[125px] left-[92.81%] 2xl:left-[94.6%] z-[23]" />
            <div className="flex w-[599px] h-[423px] flex-col gap-[48px] justify-center items-start absolute top-1/2 left-[123px] -translate-y-1/2 z-[4]">
              <div className="flex flex-col gap-[12px] items-start self-stretch relative z-[5]">
                <h1 className="heading-h2-extrabold leading-[1.2] tracking-[0.48px] text-[#1a1a1a]">
                  <span className="font-normal">Awaken your</span> <span className="gradient-text-purple">Mind.</span> <br />
                  <span className="font-normal">Transform your</span> <span className="gradient-text-purple">Life.</span> <br />
                  <span className="font-normal">Empower</span> <span className="gradient-text-purple relative inline-block">Self.<img src="/vector-4.svg" alt="" className="absolute -bottom-[6px] left-0 w-full pointer-events-none" /></span>
                </h1>
                <p className="body-b1 leading-[27.4px] text-[#4a4a4a] tracking-[0.2px] z-[8]">
                  A global coaching, wellness & growth ecosystem helping individuals rise with clarity, confidence, and commitment — in life, career, and relationships.
                </p>
              </div>
              <div className="w-[31px] h-[17px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/pOq78AAys4.png)] bg-cover absolute top-[-0.5px] left-[393px]  z-[9]" />
              <div className="flex w-[374px] gap-[20px] items-center z-10">
                <button className="flex h-[48px] px-8 justify-center items-center grow rounded-xl border border-[#4e8fa7] text-[#4e8fa7] btn-text-lg hover:bg-[#4e8fa7]/5 transition-all">Talk with Expert</button>
                <button className="flex h-[48px] px-8 justify-center items-center grow rounded-xl bg-[#b95af9] text-white btn-text-lg shadow-[0_2px_6px_0_#ffffff_inset] hover:bg-[#a64de0] transition-all">Explore</button>
              </div>
            </div>
            <div className="w-[4.87%] h-[65px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/kmcjwPGFBn.png)] bg-cover absolute top-[238px] left-[56.21%]  z-20" />
            <div className="w-[536px] h-[473px] absolute top-[246px] left-[738px] 2xl:left-[880px] z-[16]">
              <div className="w-[482px] h-[436px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/mEre8tygWS.png)] bg-cover absolute top-0 left-[28px] overflow-hidden z-[19]" />
              <div className="w-[536px] h-[48px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/ByQC9MY47T.png)] bg-[length:100%_100%] absolute top-[89.72%] left-0 z-[18]" />
            </div>
            <div className="w-[140px] h-[259px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/f6NRZmAd97.png)] bg-cover absolute top-[596px] left-[1240px] 2xl:left-[1394px] z-[21]" />
            <div className="w-[105px] h-[233px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/AUzdzouCZJ.png)] bg-cover absolute top-[615px] left-[789px] z-[22]" />
            <div className="w-[8.23%] h-[110px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/uhSqpPkyv6.png)] bg-cover absolute top-[730px] left-[73.58%] 2xl:left-[76%] z-[24]" />
          </div>

          {/* Desktop Slide 2 */}
          <div className="w-full h-full relative shrink-0 overflow-hidden">
            <div className="w-[1336px] h-[950px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/rfKbpEAOOf.png)] bg-cover absolute top-0 left-1/2 -translate-x-1/2 z-[33]" />
            <div className="w-[61.75%] h-[99.39%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/nYUQoMz7Vf.png)] bg-[length:100%_100%] absolute top-[0.61%] left-[38.77%] 2xl:left-[40.8%] z-[34]" />
            <div className="w-[8.23%] h-[110px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/8XDrMDEj6O.png)] bg-cover absolute top-[125px] left-[92.81%] 2xl:left-[94.6%] z-[45]" />
            <div className="w-[630px] h-[501px] absolute top-1/2 right-[34px] 2xl:right-[0px] -translate-y-1/2 z-[35]">
              <div className="w-[498px] h-[501px] absolute top-1/2 left-0 -translate-y-1/2 z-[36]">
                <div className="w-[48.63%] h-[58.09%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/EXm0djFchP.png)] bg-[length:100%_100%] absolute top-[31.49%] left-[45.61%] z-[39]" />
                <div className="w-[46.93%] h-[18.76%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/9WjaJsFDsA.png)] bg-[length:100%_100%] absolute top-[74.79%] left-[14.55%] z-[41]" />
                <div className="w-[10.2%] h-[16.82%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/tJZcRhtfPW.png)] bg-[length:100%_100%] absolute top-[75.55%] left-[82.59%] z-[42]" />
                <div className="w-[100.2%] h-[150px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/dYUzpGOgoW.png)] bg-[length:100%_100%] absolute top-0 -translate-y-1/2 left-[-0.1%] z-[38]" />
              </div>
              <div className="w-[31.47%] h-[64.62%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/FqdNTS67sG.png)] bg-[length:100%_100%] absolute top-[24.75%] left-[68.53%] z-[43]" />
            </div>
            <div className="flex w-[515px] h-[382px] flex-col gap-[48px] justify-center items-start absolute top-1/2 left-[117px] -translate-y-1/2 z-[47]">
              <div className="flex flex-col gap-[12px] items-start self-stretch z-[48]">
                <h1 className="heading-h2-medium leading-[1.2] tracking-[0.48px] text-[#1a1a1a]">
                  <span className="font-extrabold gradient-text-purple">Who</span> this is <span className="font-extrabold text-[#1a1a1a]">For?.</span>
                </h1>
                <p className="body-b1 leading-[27px] text-[#4a4a4a] tracking-[0.2px] z-50">
                  A global For Every Individual Who Wants More from Life
                </p>
                <div className="flex flex-col gap-[12px] opacity-80 z-[51]">
                  {["A student shaping your future", "A working professional seeking clarity or growth", "A leader navigating pressure and responsibility", "An individual healing, evolving, and rediscovering purpose"].map((t) => (
                    <span key={t} className="body-b2 font-light leading-[1.4] text-[#4a4a4a]">• {t}</span>
                  ))}
                </div>
              </div>
              <div className="w-[32px] h-[17px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/Sf3KfLcqDE.png)] bg-cover absolute top-[-2px] left-[-20px] z-[56]" />
              <p className="body-b1 leading-[27px] text-[#4a4a4a] z-[57]">AKSHAY MINDS meets you exactly where you are — and helps you move forward.</p>
            </div>
            <div className="w-[4.87%] h-[65px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/4rbA49PVcR.png)] bg-cover absolute top-[238px] left-[56.21%] z-[44]" />
            <div className="w-[8.23%] h-[110px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/HazRXMVVut.png)] bg-cover absolute top-[730px] left-[73.58%] 2xl:left-[76%] z-[46]" />
          </div>

          {/* Desktop Slide 3 */}
          <div className="w-full h-full relative shrink-0 overflow-hidden">
            <div className="w-[1336px] h-[950px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/vDRVgrD7UO.png)] bg-cover absolute top-0 left-1/2 -translate-x-1/2 z-[66]" />
            <div className="w-[61.75%] h-[99.39%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/gzrvYafqYe.png)] bg-[length:100%_100%] absolute top-[0.61%] left-[38.77%] 2xl:left-[40.8%] z-[67]" />
            <div className="w-[8.23%] h-[110px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/CBQBywWbzZ.png)] bg-cover absolute top-[125px] left-[92.81%] 2xl:left-[97.6%] z-[79]" />
            <div className="w-[491px] h-[537px] absolute top-1/2 left-[784px] 2xl:left-[920px] -translate-y-1/2 z-[68]">
              <div className="w-[99.98%] h-[63.22%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/ciH2NUkAfv.png)] bg-[length:100%_100%] absolute top-0 left-[0.02%] z-[73]" />
              <div className="w-[99.32%] h-[84.29%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/LBMdc1TrcU.png)] bg-[length:100%_100%] absolute top-[0.01%] left-[0.35%] z-[71]" />
              <div className="w-[96.85%] h-[48.62%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/jDL6tyt27b.png)] bg-[length:100%_100%] absolute top-[4.86%] left-[1.58%] z-[69]" />
              <div className="w-[16.39%] h-[16.63%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/OMou016FCm.png)] bg-[length:100%_100%] absolute top-[5.6%] left-[59.34%] z-[77]" />
              <div className="w-[85.76%] h-[84.11%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/xbaQ9HaFSh.png)] bg-[length:100%_100%] absolute top-[15.89%] left-[14.01%] z-[76]" />
              <div className="w-[99.96%] h-[73.66%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/KTL9vK0xTM.png)] bg-[length:100%_100%] absolute top-[19.46%] left-[0.02%] z-[72]" />
              <div className="w-full h-[0.25%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/3eq7epXtLx.png)] bg-[length:100%_100%] absolute top-[92.99%] left-0 z-[75]" />
            </div>
            <div className="flex w-[599px] h-[323px] flex-col gap-[48px] items-start absolute top-[196px] left-[106px] z-[81]">
              <div className="flex flex-col gap-[12px] items-start self-stretch z-[82]">
                <h1 className="heading-h2-medium leading-[1.2] tracking-[0.48px] text-[#1a1a1a]">
                  Why <span className="font-extrabold gradient-text-purple">AKSHAY MINDS?.</span>
                </h1>
                {["Evidence-based mentoring, counselling, coaching", "NLP & hypnotherapy for deep mindset shifts", "Structured goal & career frameworks", "Holistic well-being and emotional resilience", "Digital convenience with human connection"].map((t) => (
                  <span key={t} className="body-b2 font-light leading-[1.4] text-[#4a4a4a]">• {t}</span>
                ))}
              </div>
              <p className="body-b1 leading-[27px] text-[#4a4a4a] z-[89]">This is growth that is scientific, soulful, and sustainable.</p>
            </div>
            <div className="w-[4.87%] h-[65px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/LH733Nv9xz.png)] bg-cover absolute top-[238px] left-[56.21%] z-[78]" />
            <div className="w-[8.23%] h-[110px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/cGoObBgz2r.png)] bg-cover absolute top-[730px] left-[73.58%] 2xl:left-[86%] z-[80]" />
          </div>

          {/* Desktop Slide 4 */}
          <div className="w-full h-full relative shrink-0 overflow-hidden">
            <div className="w-[1336px] h-[950px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/pE9z4W4L2g.png)] bg-cover absolute top-0 left-1/2 -translate-x-1/2 z-[98]" />
            <div className="w-[61.75%] h-[99.39%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/9PmDhhzScu.png)] bg-[length:100%_100%] absolute top-[0.61%] left-[38.77%] 2xl:left-[40.8%] z-[99]" />
            <div className="w-[8.23%] h-[110px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/jsrPF5Ur4j.png)] bg-cover absolute top-[125px] left-[92.81%] 2xl:left-[94.6%] z-[112]" />
            <div className="flex w-[599px] h-[366px] flex-col gap-[48px] items-start absolute top-[196px] left-[106px] z-[114]">
              <div className="flex flex-col gap-[12px] items-start self-stretch z-[115]">
                <h1 className="heading-h2-medium leading-[1.2] tracking-[0.48px] text-[#1a1a1a]">
                  Our <span className="font-extrabold gradient-text-purple">Ecosystem</span>
                </h1>
                {["Personal & career mentoring, counselling, coaching", "Emotional healing & mental wellness", "Skill & confidence development", "Career clarity & transitions", "Daily growth tools via mobile Web-App"].map((t) => (
                  <span key={t} className="body-b2 font-light leading-[1.4] text-[#4a4a4a]">• {t}</span>
                ))}
              </div>
              <div className="flex flex-col gap-[16px] z-[122]">
                <p className="body-b1 text-[#4a4a4a]">You don't need multiple solutions.</p>
                <p className="body-b1 font-bold text-[#4a4a4a]">You need one aligned ecosystem.</p>
              </div>
            </div>
            <div className="w-[46.23%] h-[45.28%] absolute top-[24.39%] left-[51.5%] 2xl:left-[54.2%] z-[100]">
              <div className="w-[90.4%] h-[98.48%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/ocO9H94mqf.png)] bg-[length:100%_100%] absolute top-0 left-0 z-[101]" />
              <div className="w-[66.83%] h-[60.17%] absolute top-[8.39%] left-[17.37%] z-[102]">
                <div className="w-[66.43%] h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/uDqyY2Yx97.png)] bg-[length:100%_100%] absolute top-0 left-[33.57%] z-[103]" />
                <div className="w-[24.34%] h-[43.03%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/1p2PZRFvA9.png)] bg-[length:100%_100%] absolute top-[6.54%] left-0 z-[104]" />
              </div>
              <div className="w-[26.48%] h-[71.11%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/Tm0VvfXY3s.png)] bg-[length:100%_100%] absolute top-[27.84%] left-[71.57%] z-[109]" />
              <div className="w-[26.76%] h-[69.24%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/ZemdoWFXEU.png)] bg-[length:100%_100%] absolute top-[30.76%] left-[36.59%] z-[110]" />
              <div className="w-[90.45%] h-[47.92%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/giYjeVhHgm.png)] bg-[length:100%_100%] absolute top-[50.71%] left-[7.6%] z-[105]" />
              <div className="w-[98.05%] h-[1px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/VHRHiczhb4.png)] absolute top-[98.42%] left-[1.95%] z-[107]" />
            </div>
            <div className="w-[4.87%] h-[65px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/N8HcTE4KkR.png)] bg-cover absolute top-[238px] left-[56.21%] z-[111]" />
            <div className="w-[8.23%] h-[110px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/DqxcYdnaYC.png)] bg-cover absolute top-[730px] left-[73.58%] 2xl:left-[76%] z-[113]" />
          </div>
        </div>
        </div>
      </div>

      {/* =========================================
          MOBILE VIEW (Hidden on Desktop)
          ========================================= */}
      <div className="block md:hidden w-full overflow-hidden relative">
        <div 
          className="flex transition-transform duration-1000 ease-in-out w-[400%]"
          style={{ transform: `translateX(-${currentSlide * 25}%)` }}
        >
          {/* Mobile Slide 1 */}
          <div className="w-1/4 flex justify-center px-2">
            <div className="flex w-full max-w-[342px] h-[629px] pt-[32px] pr-[16px] pb-[32px] pl-[16px] flex-col gap-[24px] items-center shrink-0 flex-nowrap bg-[#f0e6f3] rounded-[16px] relative">
              <div className="flex flex-col gap-[16px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[3]">
                <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[4]">
                  <div className="w-[70.999px] h-[9.718px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/OfZ8fTFtx6.png)] bg-cover bg-no-repeat absolute top-[122.798px] left-[204.043px] z-[5]" />
                  <div className="self-stretch shrink-0 font-['Arima_Madurai'] text-[28px] font-extrabold leading-[45.683px] tracking-[0.28px] relative text-center z-[6]">
                    <span className="font-['Arima_Madurai'] font-normal text-[#1a1a1a]">Awaken </span>
                    <span className="font-['Arima_Madurai'] font-normal text-[#1a1a1a]">your </span>
                    <span className="font-['Arima_Madurai'] font-extrabold text-[#b95af9]">Mind. </span>
                    <span className="font-['Arima_Madurai'] font-normal text-[#1a1a1a]">Transform </span>
                    <span className="font-['Arima_Madurai'] font-normal text-[#1a1a1a]">your </span>
                    <span className="font-['Arima_Madurai'] font-extrabold text-[#b95af9]">Life. </span>
                    <span className="font-['Arima_Madurai'] font-normal text-[#1a1a1a]">Empower </span>
                    <span className="font-['Arima_Madurai'] font-extrabold text-[#b95af9]">Self.</span>
                  </div>
                  <span className="flex w-[310px] h-[76px] justify-center items-center self-stretch shrink-0 font-['Mulish'] text-[14px] font-light leading-[19.18px] text-[#4a4a4a] tracking-[0.14px] relative text-center z-[7]">
                    A global coaching, wellness & growth ecosystem helping individuals rise with clarity, confidence, and commitment — in life, career, and relationships.
                  </span>
                </div>
                <div className="h-[218.678px] self-stretch shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/mtacBXymUD.png)] bg-cover bg-no-repeat relative z-[8]" />
                <div className="flex flex-col gap-[12px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[9]">
                  <div className="flex h-[44px] pt-[10px] pr-[32px] pb-[10px] pl-[32px] gap-[4px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#b95af9] rounded-[36px] border-solid border border-[#b95af9] relative overflow-hidden shadow-[0_2px_6px_0_#ffffff_inset] z-10">
                    <span className="flex w-[56px] h-[11px] justify-center items-start shrink-0 basis-auto font-['Arima_Madurai'] text-[16px] font-bold leading-[11px] text-[#fff] relative text-center whitespace-nowrap z-[11]">
                      Explore
                    </span>
                  </div>
                  <div className="flex h-[44px] pt-[10px] pr-[32px] pb-[10px] pl-[32px] gap-[4px] justify-center items-center self-stretch shrink-0 flex-nowrap rounded-[36px] border-solid border border-[#4e8fa7] relative overflow-hidden z-[12]">
                    <span className="flex w-[117px] h-[11px] justify-center items-start shrink-0 basis-auto font-['Arima_Madurai'] text-[16px] font-bold leading-[11px] text-[#4e8fa7] relative text-center whitespace-nowrap z-[13]">
                      Talk with Expert
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Slide 2 */}
          <div className="w-1/4 flex justify-center px-2">
            <div className="flex w-full max-w-[342px] h-[629px] pt-[32px] pr-[16px] pb-[32px] pl-[16px] flex-col justify-between items-center shrink-0 flex-nowrap bg-[#f0e6f3] rounded-[16px] relative z-[22]">
              <div className="flex flex-col justify-between items-center self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[23]">
                <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[24]">
                  <div className="w-[310px] self-stretch shrink-0 font-['Arima_Madurai'] text-[28px] font-normal leading-[45.683px] tracking-[0.28px] relative text-center whitespace-nowrap z-[25]">
                    <span className="font-['Arima_Madurai'] text-[28px] font-extrabold text-[#b95af9]">Who</span>
                    <span className="font-['Arima_Madurai'] text-[28px] font-normal text-[#1a1a1a]"> this is For?. </span>
                  </div>
                  <span className="flex w-[310px] h-[38px] justify-center items-center self-stretch shrink-0 font-['Mulish'] text-[14px] font-light leading-[19.18px] text-[#4a4a4a] tracking-[0.14px] relative text-center z-[26]">
                    A global For Every Individual Who Wants More from Life
                  </span>
                  <span className="flex w-[310px] h-[38px] justify-center items-center self-stretch shrink-0 font-['Mulish'] text-[14px] font-light leading-[19.18px] text-[#4a4a4a] tracking-[0.14px] relative text-center z-[27]">
                    AKSHAY MINDS meets you exactly where you are — and helps you move forward.
                  </span>
                </div>
                <div className="h-[189.346px] self-stretch shrink-0 relative z-[28]">
                  <div className="w-[35.15%] h-[93.92%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/6Z1n71dSW4.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[64.85%] z-[34]" />
                  <div className="w-[42.91%] h-[84.43%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/2N2WaWyNZg.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[9.79%] left-[28.55%] z-[31]" />
                  <div className="w-[41.42%] h-[27.27%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/WKviSAXpda.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[72.73%] left-[1.14%] z-[32]" />
                  <div className="w-[9%] h-[24.45%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/3pPPntZi3w.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[73.83%] left-[61.19%] z-[33]" />
                  <div className="w-[88.24%] absolute top-[93.9%] left-0 z-[29]">
                    <div className="w-[274.554px] h-px bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/ZAFqgRDQKN.png)] bg-[length:100%_100%] bg-no-repeat relative z-30 mt-[-0.5px] mr-0 mb-0 ml-[-0.5px]" />
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[35]">
                  <div className="flex h-[44px] pt-[10px] pr-[32px] pb-[10px] pl-[32px] gap-[4px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#b95af9] rounded-[36px] border-solid border border-[#b95af9] relative overflow-hidden shadow-[0_2px_6px_0_#ffffff_inset] z-[36]">
                    <span className="flex w-[56px] h-[11px] justify-center items-start shrink-0 basis-auto font-['Arima_Madurai'] text-[16px] font-bold leading-[11px] text-[#fff] relative text-center whitespace-nowrap z-[37]">
                      Explore
                    </span>
                  </div>
                  <div className="flex h-[44px] pt-[10px] pr-[32px] pb-[10px] pl-[32px] gap-[4px] justify-center items-center self-stretch shrink-0 flex-nowrap rounded-[36px] border-solid border border-[#4e8fa7] relative overflow-hidden z-[38]">
                    <span className="flex w-[117px] h-[11px] justify-center items-start shrink-0 basis-auto font-['Arima_Madurai'] text-[16px] font-bold leading-[11px] text-[#4e8fa7] relative text-center whitespace-nowrap z-[39]">
                      Talk with Expert
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Slide 3 */}
          <div className="w-1/4 flex justify-center px-2">
            <div className="flex w-full max-w-[342px] h-[629px] pt-[32px] pr-[16px] pb-[32px] pl-[16px] flex-col justify-between items-center shrink-0 flex-nowrap bg-[#f0e6f3] rounded-[16px] relative z-[48]">
              <div className="flex flex-col justify-between items-center self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[49]">
                <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-50">
                  <div className="w-[310px] self-stretch shrink-0 font-['Arima_Madurai'] text-[28px] font-extrabold leading-[45.683px] tracking-[0.28px] relative text-center whitespace-nowrap z-[51]">
                    <span className="font-['Arima_Madurai'] font-normal text-[#1a1a1a]">Why </span>
                    <span className="font-['Arima_Madurai'] font-extrabold text-[#b95af9]">AKSHAY MINDS?</span>
                  </div>
                  <span className="flex w-[310px] h-[38px] justify-center items-center self-stretch shrink-0 font-['Mulish'] text-[14px] font-light leading-[19.18px] text-[#4a4a4a] tracking-[0.14px] relative text-center z-[52]">
                    This is growth that is scientific, soulful, and sustainable.
                  </span>
                </div>
                <div className="h-[338.539px] self-stretch shrink-0 relative z-[53]">
                  <div className="w-[99.98%] h-[63.22%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/NbdfZ8Lmfj.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[0.02%] z-[58]" />
                  <div className="w-[99.32%] h-[84.29%] absolute top-[0.01%] left-[0.35%] z-[55]">
                    <div className="w-full h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/zhfjN2M9gs.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 z-[56]" />
                  </div>
                  <div className="w-[96.85%] h-[48.62%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/YcFJ5f5AEs.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[4.86%] left-[1.58%] z-[54]" />
                  <div className="w-[16.39%] h-[16.63%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/OJtCFM2AxZ.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[5.6%] left-[59.34%] z-[62]" />
                  <div className="w-[85.76%] h-[84.11%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/OKvm0OW8ay.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[15.89%] left-[14.01%] z-[61]" />
                  <div className="w-[99.96%] h-[73.66%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/QCmUdyJXNO.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[19.46%] left-[0.02%] z-[57]" />
                  <div className="w-full h-[0.25%] absolute top-[92.99%] left-0 z-[59]">
                    <div className="w-[310px] h-[0.85px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/XbBDW8OjPK.png)] bg-[length:100%_100%] bg-no-repeat relative z-[60] mt-0 mr-0 mb-0 ml-0" />
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[63]">
                  <div className="flex h-[44px] pt-[10px] pr-[32px] pb-[10px] pl-[32px] gap-[4px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#b95af9] rounded-[36px] border-solid border border-[#b95af9] relative overflow-hidden shadow-[0_2px_6px_0_#ffffff_inset] z-[64]">
                    <span className="flex w-[56px] h-[11px] justify-center items-start shrink-0 basis-auto font-['Arima_Madurai'] text-[16px] font-bold leading-[11px] text-[#fff] relative text-center whitespace-nowrap z-[65]">
                      Explore
                    </span>
                  </div>
                  <div className="flex h-[44px] pt-[10px] pr-[32px] pb-[10px] pl-[32px] gap-[4px] justify-center items-center self-stretch shrink-0 flex-nowrap rounded-[36px] border-solid border border-[#4e8fa7] relative overflow-hidden z-[66]">
                    <span className="flex w-[117px] h-[11px] justify-center items-start shrink-0 basis-auto font-['Arima_Madurai'] text-[16px] font-bold leading-[11px] text-[#4e8fa7] relative text-center whitespace-nowrap z-[67]">
                      Talk with Expert
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Slide 4 */}
          <div className="w-1/4 flex justify-center px-2">
            <div className="flex w-full max-w-[342px] h-[629px] pt-[32px] pr-[16px] pb-[32px] pl-[16px] flex-col justify-between items-center shrink-0 flex-nowrap bg-[#f0e6f3] rounded-[16px] relative z-[76]">
              <div className="flex flex-col justify-between items-center self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[77]">
                <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[78]">
                  <div className="w-[310px] self-stretch shrink-0 font-['Arima_Madurai'] text-[28px] font-extrabold leading-[45.683px] tracking-[0.28px] relative text-center whitespace-nowrap z-[79]">
                    <span className="font-['Arima_Madurai'] font-normal text-[#1a1a1a]">Our </span>
                    <span className="font-['Arima_Madurai'] font-extrabold text-[#b95af9]">Ecosystem</span>
                  </div>
                  <span className="flex w-[310px] h-[38px] justify-center items-center self-stretch shrink-0 font-['Mulish'] text-[14px] font-light leading-[19.18px] text-[#4a4a4a] tracking-[0.14px] relative text-center z-[80]">
                    You don’t need multiple solutions. You need one aligned ecosystem.
                  </span>
                </div>
                <div className="h-[187.249px] self-stretch shrink-0 relative z-[81]">
                  <div className="w-[90.4%] h-[98.48%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/hmx6dcDfkx.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[0%] left-0 z-[82]" />
                  <div className="w-[66.83%] h-[60.17%] absolute top-[8.39%] left-[17.37%] z-[83]">
                    <div className="w-[66.43%] h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/DsXPwvfHDz.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[0%] left-[33.57%] z-[84]" />
                    <div className="w-[24.34%] h-[43.03%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/TkQvOpfJDQ.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[6.54%] left-0 z-[85]" />
                  </div>
                  <div className="w-[26.48%] h-[71.11%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/uGu75rUK8o.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[27.84%] left-[71.57%] z-[90]" />
                  <div className="w-[7.37%] h-[11.4%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/TFPT7caLSp.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[30.45%] left-[54.66%] z-[89]" />
                  <div className="w-[26.76%] h-[69.24%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/OCgxMYAJeJ.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[30.76%] left-[36.59%] z-[91]" />
                  <div className="w-[90.45%] h-[47.92%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/kYrR2G7XSV.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[50.71%] left-[7.6%] z-[86]" />
                  <div className="w-[98.05%] h-[0.12%] absolute top-[98.42%] left-[1.95%] z-[87]">
                    <div className="w-[303.944px] h-[0.22px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/J4TUAaSGyD.png)] bg-[length:100%_100%] bg-no-repeat relative z-[88] mt-0 mr-0 mb-0 ml-0" />
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[92]">
                  <div className="flex h-[44px] pt-[10px] pr-[32px] pb-[10px] pl-[32px] gap-[4px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#b95af9] rounded-[36px] border-solid border border-[#b95af9] relative overflow-hidden shadow-[0_2px_6px_0_#ffffff_inset] z-[93]">
                    <span className="flex w-[56px] h-[11px] justify-center items-start shrink-0 basis-auto font-['Arima_Madurai'] text-[16px] font-bold leading-[11px] text-[#fff] relative text-center whitespace-nowrap z-[94]">
                      Explore
                    </span>
                  </div>
                  <div className="flex h-[44px] pt-[10px] pr-[32px] pb-[10px] pl-[32px] gap-[4px] justify-center items-center self-stretch shrink-0 flex-nowrap rounded-[36px] border-solid border border-[#4e8fa7] relative overflow-hidden z-[95]">
                    <span className="flex w-[117px] h-[11px] justify-center items-start shrink-0 basis-auto font-['Arima_Madurai'] text-[16px] font-bold leading-[11px] text-[#4e8fa7] relative text-center whitespace-nowrap z-[96]">
                      Talk with Expert
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Dot Indicators */}
      <div className="flex gap-2 items-center z-[400] mt-4">
        {[0, 1, 2, 3].map((i) => (
          <div 
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`cursor-pointer transition-all duration-500 rounded-full h-3 border-2 ${currentSlide === i ? 'w-10 bg-[#b95af9] border-[#b95af9]' : 'w-3 bg-white border-[#e4e8f0]'}`}
          />
        ))}
      </div>
    </div>
  );
}
