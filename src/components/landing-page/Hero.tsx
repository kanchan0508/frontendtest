"use client";
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
    <div className="flex w-full max-w-[1336px] overflow-hidden relative flex-col items-center gap-[36px]">
      {/* Aspect Ratio Box to contain the absolute content faithfully */}
      <div className="w-full aspect-[1336/824] relative rounded-[64px] overflow-hidden bg-[#f0e6f3] shadow-md">
        
        {/* Horizontal Slide Strip */}
        <div 
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Slide 1 */}
          <div className="w-full h-full relative shrink-0 overflow-hidden">
            <div className="w-[1336px] h-[950px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/UxfhJsyNPO.png)] bg-cover bg-no-repeat absolute top-0 left-1/2 -translate-x-1/2 z-[3]" />
            <div className="w-[61.75%] h-[99.39%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/Zus30MCxXs.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[0.61%] left-[38.77%] z-[15]" />
            <div className="w-[8.23%] h-[110px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/rwdceixGoq.png)] bg-cover bg-no-repeat absolute top-[125px] left-[92.81%] z-[23]" />
            <div className="flex w-[599px] h-[423px] flex-col gap-[48px] justify-center items-start absolute top-1/2 left-[123px] -translate-y-1/2 z-[4]">
              <div className="flex flex-col gap-[12px] items-start self-stretch relative z-[5]">
                <div className="w-[118.587px] h-[17.543px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/sKaLEzE2Uy.png)] bg-cover absolute top-[210px] left-[227px] z-[6]" />
                <h1 className="font-arima text-[48px] font-extrabold leading-[1.2] tracking-[0.48px] text-[#1a1a1a]">
                  <span className="font-normal">Awaken your</span> Mind. <br />
                  <span className="font-normal">Transform your</span> Life. <br />
                  <span className="font-normal">Empower</span> Self.
                </h1>
                <p className="font-mulish text-[20px] font-light leading-[27.4px] text-[#4a4a4a] tracking-[0.2px] z-[8]">
                  A global coaching, wellness & growth ecosystem helping individuals rise with clarity, confidence, and commitment — in life, career, and relationships.
                </p>
              </div>
              <div className="w-[31px] h-[17px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/pOq78AAys4.png)] bg-cover absolute top-[-0.5px] left-[393px] z-[9]" />
              <div className="flex w-[374px] gap-[20px] items-center z-10">
                <button className="flex h-[48px] px-8 justify-center items-center grow rounded-xl border border-[#4e8fa7] text-[#4e8fa7] font-arima font-bold hover:bg-[#4e8fa7]/5 transition-all">Talk with Expert</button>
                <button className="flex h-[48px] px-8 justify-center items-center grow rounded-xl bg-[#b95af9] text-white font-arima font-bold shadow-[0_2px_6px_0_#ffffff_inset] hover:bg-[#a64de0] transition-all">Explore</button>
              </div>
            </div>
            <div className="w-[4.87%] h-[65px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/kmcjwPGFBn.png)] bg-cover absolute top-[238px] left-[56.21%] z-20" />
            <div className="w-[536px] h-[473px] absolute top-[246px] left-[738px] z-[16]">
              <div className="w-[482px] h-[436px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/mEre8tygWS.png)] bg-cover absolute top-0 left-[28px] overflow-hidden z-[19]" />
              <div className="w-[536px] h-[48px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/ByQC9MY47T.png)] bg-[length:100%_100%] absolute top-[89.72%] left-0 z-[18]" />
            </div>
            <div className="w-[140px] h-[259px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/f6NRZmAd97.png)] bg-cover absolute top-[596px] left-[1240px] z-[21]" />
            <div className="w-[105px] h-[233px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/AUzdzouCZJ.png)] bg-cover absolute top-[615px] left-[589px] z-[22]" />
            <div className="w-[8.23%] h-[110px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/uhSqpPkyv6.png)] bg-cover absolute top-[730px] left-[73.58%] z-[24]" />
          </div>

          {/* Slide 2 */}
          <div className="w-full h-full relative shrink-0 overflow-hidden">
            <div className="w-[1336px] h-[950px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/rfKbpEAOOf.png)] bg-cover absolute top-0 left-1/2 -translate-x-1/2 z-[33]" />
            <div className="w-[61.75%] h-[99.39%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/nYUQoMz7Vf.png)] bg-[length:100%_100%] absolute top-[0.61%] left-[38.77%] z-[34]" />
            <div className="w-[8.23%] h-[110px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/8XDrMDEj6O.png)] bg-cover absolute top-[125px] left-[92.81%] z-[45]" />
            <div className="w-[630px] h-[501px] absolute top-1/2 right-[34px] -translate-y-1/2 z-[35]">
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
                <h1 className="font-arima text-[48px] font-medium leading-[1.2] tracking-[0.48px] text-[#1a1a1a]">
                  Who this is <span className="font-extrabold text-[#1a1a1a]">For?.</span>
                </h1>
                <p className="font-mulish text-[20px] font-light leading-[27px] text-[#4a4a4a] tracking-[0.2px] z-50">
                  A global For Every Individual Who Wants More from Life
                </p>
                <div className="flex flex-col gap-[12px] opacity-80 z-[51]">
                  {["A student shaping your future", "A working professional seeking clarity or growth", "A leader navigating pressure and responsibility", "An individual healing, evolving, and rediscovering purpose"].map((t) => (
                    <span key={t} className="font-mulish text-[16px] font-light leading-[1.4] text-[#4a4a4a]">• {t}</span>
                  ))}
                </div>
              </div>
              <div className="w-[32px] h-[17px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/Sf3KfLcqDE.png)] bg-cover absolute top-[-2px] left-[-20px] z-[56]" />
              <p className="font-mulish text-[20px] font-light leading-[27px] text-[#4a4a4a] z-[57]">AKSHAY MINDS meets you exactly where you are — and helps you move forward.</p>
            </div>
            <div className="w-[4.87%] h-[65px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/4rbA49PVcR.png)] bg-cover absolute top-[238px] left-[56.21%] z-[44]" />
            <div className="w-[8.23%] h-[110px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/HazRXMVVut.png)] bg-cover absolute top-[730px] left-[73.58%] z-[46]" />
          </div>

          {/* Slide 3 */}
          <div className="w-full h-full relative shrink-0 overflow-hidden">
            <div className="w-[1336px] h-[950px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/vDRVgrD7UO.png)] bg-cover absolute top-0 left-1/2 -translate-x-1/2 z-[66]" />
            <div className="w-[61.75%] h-[99.39%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/gzrvYafqYe.png)] bg-[length:100%_100%] absolute top-[0.61%] left-[38.77%] z-[67]" />
            <div className="w-[8.23%] h-[110px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/CBQBywWbzZ.png)] bg-cover absolute top-[125px] left-[92.81%] z-[79]" />
            <div className="w-[491px] h-[537px] absolute top-1/2 left-[784px] -translate-y-1/2 z-[68]">
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
                <h1 className="font-arima text-[48px] font-medium leading-[1.2] tracking-[0.48px] text-[#1a1a1a]">
                  Why <span className="font-extrabold text-white">AKSHAY MINDS?.</span>
                </h1>
                {["Evidence-based mentoring, counselling, coaching", "NLP & hypnotherapy for deep mindset shifts", "Structured goal & career frameworks", "Holistic well-being and emotional resilience", "Digital convenience with human connection"].map((t) => (
                  <span key={t} className="font-mulish text-[16px] font-light leading-[1.4] text-[#4a4a4a]">• {t}</span>
                ))}
              </div>
              <p className="font-mulish text-[20px] font-light leading-[27px] text-[#4a4a4a] z-[89]">This is growth that is scientific, soulful, and sustainable.</p>
            </div>
            <div className="w-[4.87%] h-[65px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/LH733Nv9xz.png)] bg-cover absolute top-[238px] left-[56.21%] z-[78]" />
            <div className="w-[8.23%] h-[110px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/cGoObBgz2r.png)] bg-cover absolute top-[730px] left-[73.58%] z-[80]" />
          </div>

          {/* Slide 4 */}
          <div className="w-full h-full relative shrink-0 overflow-hidden">
            <div className="w-[1336px] h-[950px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/pE9z4W4L2g.png)] bg-cover absolute top-0 left-1/2 -translate-x-1/2 z-[98]" />
            <div className="w-[61.75%] h-[99.39%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/9PmDhhzScu.png)] bg-[length:100%_100%] absolute top-[0.61%] left-[38.77%] z-[99]" />
            <div className="w-[8.23%] h-[110px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/jsrPF5Ur4j.png)] bg-cover absolute top-[125px] left-[92.81%] z-[112]" />
            <div className="flex w-[599px] h-[366px] flex-col gap-[48px] items-start absolute top-[196px] left-[106px] z-[114]">
              <div className="flex flex-col gap-[12px] items-start self-stretch z-[115]">
                <h1 className="font-arima text-[48px] font-medium leading-[1.2] tracking-[0.48px] text-[#1a1a1a]">
                  Our <span className="font-extrabold text-white">Ecosystem</span>
                </h1>
                {["Personal & career mentoring, counselling, coaching", "Emotional healing & mental wellness", "Skill & confidence development", "Career clarity & transitions", "Daily growth tools via mobile Web-App"].map((t) => (
                  <span key={t} className="font-mulish text-[16px] font-light leading-[1.4] text-[#4a4a4a]">• {t}</span>
                ))}
              </div>
              <div className="flex flex-col gap-[16px] z-[122]">
                <p className="font-mulish text-[20px] font-light text-[#4a4a4a]">You don’t need multiple solutions.</p>
                <p className="font-mulish text-[20px] font-bold text-[#4a4a4a]">You need one aligned ecosystem.</p>
              </div>
            </div>
            <div className="w-[46.23%] h-[45.28%] absolute top-[24.39%] left-[51.5%] z-[100]">
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
            <div className="w-[8.23%] h-[110px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/DqxcYdnaYC.png)] bg-cover absolute top-[730px] left-[73.58%] z-[113]" />
          </div>
        </div>
      </div>

      {/* Modern Dot Indicators */}
      <div className="flex gap-2 items-center z-[400]">
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
