import React from "react";

const SLIDES = [
  {
    key: "assessment",
  },
  {
    key: "affirmation",
  },
  {
    key: "wellness",
  },
] as const;

export default function DashboardCarouselSection() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const touchStartX = React.useRef<number | null>(null);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return;
    }
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    if (delta > 40) {
      setActiveSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    } else if (delta < -40) {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }
    touchStartX.current = null;
  };

  return (
    <section className="w-full">
      <div className="sm:hidden flex w-[390px] pt-0 pr-0 pb-[16px] pl-0 flex-col gap-[16px] items-center flex-nowrap relative -mx-6 my-0">
        <div
          className="w-[390px] overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex gap-[8px] items-center transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(calc((390px - 346px) / 2 - ${activeSlide} * (346px + 8px)))`,
            }}
          >
          <div>
            <div className="flex w-[346px] h-[134px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-center shrink-0 flex-nowrap bg-[#8d60ff] rounded-[12px] relative overflow-hidden z-[1]">
              <div className="flex flex-col justify-between items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[3]">
                <div className="flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[4]">
                  <span className="h-[13px] self-stretch shrink-0 basis-auto font-mulish text-[10px] font-normal leading-[12.55px] text-[#fff] relative text-left whitespace-nowrap z-[5]">
                    Psychometric Assessment
                  </span>
                  <span className="flex w-[314px] h-[40px] justify-start items-center self-stretch shrink-0 font-arima text-[14px] font-bold leading-normal text-[#fff] relative text-left uppercase z-[6]">
                    Reflect and discover your real, unique, and awesome self.
                  </span>
                </div>
                <div className="flex w-[127px] h-[32px] pt-0 pr-[32px] pb-0 pl-[32px] gap-[4px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] relative overflow-hidden z-[7]">
                  <div className="w-[102px] shrink-0 font-mulish text-[12px] font-normal leading-[15px] relative text-center whitespace-nowrap z-[8]">
                    <span className="font-mulish text-[12px] font-bold leading-[15.06px] text-[#8d60ff] relative text-center">
                      Start Assessment
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[127px] h-[135px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/58WHTHSVN8.png)] bg-cover bg-no-repeat absolute top-[-2px] left-[219px] overflow-hidden z-[2]" />
            </div>
          </div>
          <div>
            <div className="flex w-[346px] h-[134px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[19px] items-center shrink-0 flex-nowrap bg-[#5299db] rounded-[12px] relative overflow-hidden z-[9]">
              <div className="flex flex-col justify-between items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-10">
                <div className="flex flex-col gap-[4px] items-center self-stretch shrink-0 flex-nowrap relative z-[11]">
                  <div className="w-[56.11%] h-[191.215px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/MkZaLO96Cb.png)] bg-cover bg-no-repeat absolute top-[-16px] left-[72.61%] z-[12]" />
                  <span className="h-[13px] self-stretch shrink-0 basis-auto font-mulish text-[10px] font-normal leading-[12.55px] text-[#fff] relative text-left whitespace-nowrap z-[13]">
                    Daily Affirmation{" "}
                  </span>
                  <span className="flex w-[314px] h-[46px] justify-start items-center self-stretch shrink-0 font-arima text-[14px] font-bold leading-normal text-[#fff] relative text-left uppercase z-[14]">
                    Take a moment to check today’s affirmation
                  </span>
                </div>
                <div className="flex w-[127px] h-[32px] pt-0 pr-[32px] pb-0 pl-[32px] gap-[4px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] relative overflow-hidden z-[15]">
                  <span className="flex w-[94px] h-[15px] justify-center items-start shrink-0 basis-auto font-mulish text-[12px] font-normal leading-[15px] text-[#407bff] relative text-center whitespace-nowrap z-[16]">
                    View Affirmation
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex w-[346px] h-[134px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[19px] items-center shrink-0 flex-nowrap bg-[#899869] rounded-[12px] relative overflow-hidden z-[17]">
              <div className="flex flex-col justify-between items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[19]">
                <div className="flex flex-col gap-[4px] items-center self-stretch shrink-0 flex-nowrap relative z-20">
                  <span className="h-[13px] self-stretch shrink-0 basis-auto font-mulish text-[10px] font-normal leading-[12.55px] text-[#fff] relative text-left whitespace-nowrap z-[21]">
                    Mental Wellness
                  </span>
                  <span className="flex w-[314px] h-[46px] justify-start items-center self-stretch shrink-0 font-arima text-[14px] font-bold leading-normal text-[#fff] relative text-left uppercase z-[22]">
                    Explore your mental wellness and begin a 21-day self-enhancement
                    journey.
                  </span>
                </div>
                <div className="flex w-[127px] h-[32px] pt-0 pr-[32px] pb-0 pl-[32px] gap-[4px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] relative overflow-hidden z-[23]">
                  <span className="flex w-[95px] h-[15px] justify-center items-start shrink-0 basis-auto font-mulish text-[12px] font-normal leading-[15px] text-[#728152] relative text-center whitespace-nowrap z-[24]">
                    Explore Wellness
                  </span>
                </div>
              </div>
              <div className="w-[57.26%] h-[115.77%] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/9MUrPLBODj.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[-18.66%] left-[48.55%] z-[18]" />
            </div>
          </div>
          </div>
        </div>

        <div className="flex w-[69.75px] h-[8px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[25]">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.key}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setActiveSlide(idx)}
              className={`self-stretch shrink-0 rounded-[24px] relative overflow-hidden ${
                idx === activeSlide ? "w-[21.75px] bg-[#b95af9]" : "w-[8px] bg-[#e4e8f0]"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="hidden sm:flex w-full max-w-[1240px] 2xl:max-w-[1700px] flex-col gap-[24px] items-center relative mx-auto">
        <div className="relative w-full overflow-hidden">
          <div
            className="[--slide-w:calc(100%_-_96px)] 2xl:[--slide-w:calc(100%_-_72px)] flex gap-[24px] items-center transition-transform duration-500"
            style={{
              transform: `translateX(calc(50% - (var(--slide-w) / 2) - ${activeSlide} * (var(--slide-w) + 24px)))`,
            }}
          >
            <SlideAssessment />
            <SlideAffirmation />
            <SlideWellness />
          </div>
        </div>

        <div className="flex gap-2 items-center">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.key}
              onClick={() => setActiveSlide(idx)}
              className={`${
                idx === activeSlide
                  ? "w-10 h-3 bg-[#b95af9]"
                  : "w-3 h-3 bg-[#e4e8f0] hover:bg-[#d4e4f4]"
              } rounded-full transition-all`}
              aria-label={`Go to slide ${idx + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SlideAssessment() {
  return (
    <div className="w-[var(--slide-w)] h-[260px] 2xl:h-[300px] shrink-0 bg-[#e1e4ff] rounded-[20px] relative overflow-hidden z-[1]">
      <div className="w-[283px] 2xl:w-[330px] h-[301px] 2xl:h-[350px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/6CGEBEoCJi.png)] bg-cover bg-no-repeat absolute top-[-12px] 2xl:top-[-20px] left-[648px] 2xl:left-[960px] overflow-hidden z-[8]" />
      <div className="flex w-[553px] 2xl:w-[640px] h-[209px] 2xl:h-[230px] flex-col gap-[24px] items-center absolute top-1/2 left-[36px] 2xl:left-[48px] translate-y-[-47.85%] z-[2]">
        <div className="flex flex-col gap-[16px] items-center self-stretch shrink-0">
          <span className="h-[20px] self-stretch shrink-0 font-mulish text-[16px] 2xl:text-[18px] font-normal leading-[20px] text-[#000] text-center whitespace-nowrap">
            Psychometric Assessment
          </span>
          <span className="flex w-[553px] 2xl:w-[640px] h-[117px] 2xl:h-[130px] justify-center items-center self-stretch shrink-0 font-arima text-[24px] 2xl:text-[28px] font-bold leading-[39.192px] 2xl:leading-[45px] text-[#000] text-center uppercase">
            Engage with yourself. Reflect, resonate, and discover your real,
            unique, and awesome self.
          </span>
        </div>
        <button className="flex w-[166px] h-[32px] 2xl:h-[40px] px-[32px] gap-[4px] justify-center items-center shrink-0 bg-[#824ff1] rounded-[12px] overflow-hidden">
          <span className="font-mulish text-[12px] 2xl:text-[14px] font-bold leading-[15.06px] text-[#fff] text-center whitespace-nowrap">
            Start Assessment
          </span>
        </button>
      </div>
    </div>
  );
}

function SlideAffirmation() {
  return (
    <div className="w-[var(--slide-w)] h-[260px] 2xl:h-[300px] shrink-0 bg-[#5299db] rounded-[20px] relative overflow-hidden z-[9]">
      <div className="w-[56.37%] h-[536.66px] 2xl:h-[620px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/veQOBLKsK0.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-1/2 left-[56.97%] translate-y-[-44.22%] z-10" />
      <div className="w-[17.18%] h-[315.221px] 2xl:h-[360px] absolute top-1/2 left-[69.17%] translate-y-[-33.31%] z-[11]">
        <div className="w-full h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/VFWtv0ZgwQ.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 z-[12]" />
      </div>
      <div className="w-[4.79%] h-[44.69px] 2xl:h-[52px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/1mENTiueJO.png)] bg-cover bg-no-repeat absolute top-1/2 left-[86.5%] translate-y-[-205.86%] overflow-hidden z-[14]" />
      <div className="w-[5.87%] h-[52.969px] 2xl:h-[62px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/nsEYQEVMiH.png)] bg-cover bg-no-repeat absolute top-1/2 left-[89.34%] translate-y-[-147.26%] overflow-hidden z-[13]" />
      <div className="flex w-[414px] 2xl:w-[500px] h-[170px] 2xl:h-[190px] flex-col gap-[24px] items-center absolute top-1/2 left-[23.5px] 2xl:left-[36px] translate-y-[-44.71%] z-[16]">
        <div className="flex flex-col gap-[16px] items-center self-stretch shrink-0">
          <span className="h-[20px] self-stretch shrink-0 font-mulish text-[16px] 2xl:text-[18px] font-normal leading-[20px] text-[#fff] text-center whitespace-nowrap">
            Daily Affirmation{" "}
          </span>
          <span className="flex w-[414px] 2xl:w-[500px] h-[78px] 2xl:h-[95px] justify-center items-center self-stretch shrink-0 font-arima text-[24px] 2xl:text-[28px] font-bold leading-[39.192px] 2xl:leading-[45px] text-[#fff] text-center uppercase">
            Take a moment to check today&apos;s affirmation
          </span>
        </div>
        <button className="flex w-[158px] h-[32px] 2xl:h-[40px] px-[32px] gap-[4px] justify-center items-center shrink-0 bg-[#fff] rounded-[12px] overflow-hidden">
          <span className="font-mulish text-[12px] 2xl:text-[14px] font-bold leading-[15.06px] text-[#407bff] text-center whitespace-nowrap">
            View Affirmation
          </span>
        </button>
      </div>
      <div className="w-[4.79%] h-[44.69px] 2xl:h-[52px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/zO9jsVQQ4F.png)] bg-cover bg-no-repeat absolute top-1/2 left-[86.08%] translate-y-[-116.36%] overflow-hidden z-[15]" />
    </div>
  );
}

function SlideWellness() {
  return (
    <div className="w-[var(--slide-w)] h-[260px] 2xl:h-[300px] shrink-0 bg-[#899868] rounded-[20px] relative overflow-hidden z-[22]">
      <div className="flex h-[256px] 2xl:h-[292px] items-center justify-between relative z-[26] mt-[4px] ml-[28px] mr-[28px] 2xl:ml-[36px] 2xl:mr-[36px]">
        <div className="flex w-[487px] 2xl:w-[560px] flex-col gap-[20px] justify-center items-center shrink-0">
          <div className="flex flex-col gap-[8px] items-center self-stretch shrink-0">
            <span className="flex w-[487px] 2xl:w-[560px] h-[138px] 2xl:h-[150px] justify-center items-center self-stretch shrink-0 font-arima text-[28px] 2xl:text-[32px] font-medium leading-[45.724px] 2xl:leading-[52px] text-[#fff] text-center">
              Explore your mental wellness and begin a 21-day self-enhancement
              journey.
            </span>
          </div>
          <button className="flex w-[154px] h-[32px] 2xl:h-[40px] px-[32px] gap-[4px] justify-center items-center shrink-0 bg-[#fff] rounded-[12px] overflow-hidden">
            <span className="font-mulish text-[12px] 2xl:text-[14px] font-bold leading-[15.06px] text-[#728152] text-center whitespace-nowrap">
              Explore Wellness
            </span>
          </button>
        </div>
        <div className="w-[385.014px] 2xl:w-[450px] h-[262px] 2xl:h-[300px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/4WggNxfqWE.png)] bg-[length:100%_100%] bg-no-repeat bg-right z-[32]" />
      </div>
      <div className="w-[1336px] h-[950px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/HxDAC6eBjG.png)] bg-cover bg-no-repeat absolute top-0 left-1/2 translate-x-[-50%] z-[24]" />
    </div>
  );
}
