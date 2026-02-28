import React from "react";

const slides = [
  {
    id: "assessment",
    bg: "bg-[#8d60ff]",
    label: "Psychometric Assessment",
    title:
      "Engage with yourself. Reflect, resonate, and discover your real, unique, and awesome self.",
    cta: "Start Assessment",
    ctaColor: "text-[#8d60ff]",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/33jQUFKp5R.png",
  },
  {
    id: "affirmation",
    bg: "bg-[#5299db]",
    label: "Daily Affirmation",
    title: "Take a moment to check today’s affirmation",
    cta: "View Affirmation",
    ctaColor: "text-[#407bff]",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/pyanQsW1ff.png",
  },
  {
    id: "wellness",
    bg: "bg-[#899869]",
    label: "Mental Wellness",
    title:
      "Explore your mental wellness and begin a 21-day self-enhancement journey.",
    cta: "Explore Wellness",
    ctaColor: "text-[#728152]",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/Pn5kMsDS2P.png",
  },
] as const;

const tryCards = [
  {
    id: "affirmations",
    title: "Daily Affirmations",
    desc: "Daily positive thoughts curated for your mindset",
    bg: "bg-[#ffe8e3]",
    border: "border-[#ffdcd6]",
    titleColor: "text-[#b35857]",
    actionBg: "bg-[#b35857]",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/6LekyhuK1s.png",
    actionIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/b55WVvkKWv.png",
  },
  {
    id: "gauge",
    title: "Wellness Gauge",
    desc: "Track your mental & emotional balance",
    bg: "bg-[#f5fde4]",
    border: "border-[#d4ef7a]",
    titleColor: "text-[#617c25]",
    actionBg: "bg-[#617c25]",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/Yp0s3XTDXx.png",
    actionIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/3WtuFT3SA7.png",
  },
  {
    id: "psychometric",
    title: "Psychometric Assessment",
    desc: "Daily positive thoughts curated for your mindset",
    bg: "bg-[#f3f6ff]",
    border: "border-[#cddcff]",
    titleColor: "text-[#5c7cc4]",
    actionBg: "bg-[#5c7cc4]",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/m4caofjmeA.png",
    actionIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/yWMXgdHoOd.png",
  },
] as const;

const curatedCards = [
  {
    id: "curated-1",
    imageMain: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/3rY0uGj2s9.png",
    imagePerson: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/m4pzcm8csu.png",
    imageBase: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/dvsDguEE53.png",
  },
  {
    id: "curated-2",
    imageMain: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/9k0fihJqmC.png",
    imagePerson: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/exz8qPoLay.png",
    imageBase: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/4QSy5kZF8e.png",
  },
] as const;

export default function ValueGiftsMobileSection() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const touchStartX = React.useRef<number | null>(null);

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
      setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    } else if (delta < -40) {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }
    touchStartX.current = null;
  };

  return (
    <section className="sm:hidden w-full flex flex-col gap-4 pb-6">
      <div className="w-[390px] overflow-hidden -mx-6" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div
          className="flex gap-[8px] items-center transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(calc((390px - 346px) / 2 - ${activeSlide} * (346px + 8px)))`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`flex w-[346px] h-[134px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-center shrink-0 flex-nowrap ${slide.bg} rounded-[12px] relative overflow-hidden`}
            >
              <div className="flex flex-col justify-between items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[2]">
                <div className="flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative">
                  <span className="h-[13px] self-stretch shrink-0 basis-auto font-mulish text-[10px] font-normal leading-[12.55px] text-[#fff] relative text-left whitespace-nowrap">
                    {slide.label}
                  </span>
                  <span className="flex w-[314px] h-[46px] justify-start items-center self-stretch shrink-0 font-arima text-[12px] font-bold leading-[19.596px] text-[#fff] relative text-left uppercase">
                    {slide.title}
                  </span>
                </div>
                <button className="flex w-[127px] h-[32px] pt-0 pr-[32px] pb-0 pl-[32px] gap-[4px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] relative overflow-hidden">
                  <span className={`font-mulish text-[12px] font-bold leading-[15px] ${slide.ctaColor} whitespace-nowrap`}>
                    {slide.cta}
                  </span>
                </button>
              </div>
              <div
                className="w-[127px] h-[135px] shrink-0 bg-cover bg-no-repeat absolute top-[-2px] left-[219px] overflow-hidden z-[1]"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-[69.75px] h-[8px] gap-[8px] items-center shrink-0 flex-nowrap relative mx-auto">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`${index === activeSlide ? "w-[21.75px] bg-[#b95af9]" : "w-[8px] bg-[#e4e8f0]"} self-stretch shrink-0 rounded-[24px] relative overflow-hidden`}
          />
        ))}
      </div>

      <div className="px-0 flex flex-col gap-[16px]">
        <span className="h-[33px] font-arima text-[20px] font-black leading-[32.66px] text-[#1a1a1a] text-left whitespace-nowrap">
          Try this out
        </span>
        <div className="flex flex-col gap-[8px] w-full">
          {tryCards.map((card) => (
            <div
              key={card.id}
              className={`flex w-full max-w-[342px] h-[94px] pt-[12px] pr-[8px] pb-[12px] pl-[8px] items-center ${card.bg} rounded-[12px] border ${card.border}`}
            >
              <div
                className="w-[92px] h-[82px] shrink-0 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              <div className="flex w-[218px] gap-[12px] items-end self-stretch shrink-0">
                <div className="flex flex-col justify-center items-start grow shrink-0 basis-0">
                  <span className={`h-[26px] font-arima text-[16px] font-extrabold leading-[26px] ${card.titleColor} whitespace-nowrap`}>
                    {card.title}
                  </span>
                  <span className="flex w-[182px] h-[30px] items-center font-mulish text-[12px] font-normal leading-[15.06px] text-[#131313] text-left">
                    {card.desc}
                  </span>
                </div>
                <button className={`flex w-[24px] h-[24px] justify-center items-center ${card.actionBg} rounded-[24px]`}>
                  <div
                    className="w-[23px] h-[21px] bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${card.actionIcon})` }}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-0 flex flex-col gap-[16px] w-full">
        <span className="h-[33px] font-arima text-[20px] font-black leading-[32.66px] text-[#1a1a1a] text-left whitespace-nowrap">
          Curated For You
        </span>
        <div className="flex w-full max-w-[342px] gap-[8px] items-center overflow-x-auto pb-1">
          {curatedCards.map((card) => (
            <div
              key={card.id}
              className="flex w-[167px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] gap-[10px] justify-center items-center shrink-0 bg-[#ffcc70] rounded-[16px] relative overflow-hidden"
            >
              <div className="flex flex-col gap-[4px] items-center grow shrink-0 basis-0">
                <span className="h-[29px] self-stretch font-mulish text-[20px] font-medium leading-[25.1px] text-[#1a1a1a] text-center whitespace-nowrap">
                  Meditation
                </span>
                <div className="h-[116px] self-stretch relative">
                  <div
                    className="w-full h-[76.53%] absolute top-0 left-0 bg-[length:100%_100%] bg-no-repeat"
                    style={{ backgroundImage: `url(${card.imageMain})` }}
                  />
                  <div
                    className="w-[56.56%] h-[78.51%] absolute top-[19.23%] left-[22.99%] bg-[length:100%_100%] bg-no-repeat"
                    style={{ backgroundImage: `url(${card.imagePerson})` }}
                  />
                  <div
                    className="w-[84.34%] h-[16.56%] absolute top-[83.44%] left-[7.88%] bg-[length:100%_100%] bg-no-repeat"
                    style={{ backgroundImage: `url(${card.imageBase})` }}
                  />
                </div>
                <div className="flex flex-col items-center self-stretch">
                  <span className="h-[15px] self-stretch font-mulish text-[12px] font-semibold leading-[15px] text-[#4a4a4a] text-center whitespace-nowrap">
                    Good vibes, good life
                  </span>
                  <span className="h-[13px] self-stretch font-mulish text-[10px] font-normal leading-[12.55px] text-[#4a4a4a] text-center whitespace-nowrap">
                    Positive thinking | 27min
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
