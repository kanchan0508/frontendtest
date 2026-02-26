import React, { useCallback, useEffect, useRef, useState } from "react";

type CardData = {
  id: string;
  title: string;
  description: string;
  bgColor: string;
  backgroundImage: string;
  backgroundPattern: string;
  phoneImage1: string;
  phoneImage2: string;
  mobileBgImage: string;
  mobilePhoneStackImage: string;
  mobileBgTop: string;
};

const cardsData: CardData[] = [
  {
    id: "affirmation",
    title: "Daily Affirmations for Inner Balance",
    description:
      "Gentle, meaningful affirmations designed to ground your thoughts, build emotional resilience, and encourage positive self-talk - one moment at a time.",
    bgColor: "#c67002",
    backgroundImage:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/xKtFTtR4R8.png",
    backgroundPattern:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/FHtZLpRtsk.png",
    phoneImage1:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/LqmR7qu9su.png",
    phoneImage2:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/3jV5HLekvf.png",
    mobileBgImage:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/6ckbBB0iOQ.png",
    mobilePhoneStackImage:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/Rq69N4TL41.png",
    mobileBgTop: "0px",
  },
  {
    id: "psychometric",
    title: "Start With a Simple Assessment",
    description:
      "Answer a few simple questions to gain meaningful insights into your emotional wellbeing.",
    bgColor: "#025B65",
    backgroundImage:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/D9LLAEKJ0y.png",
    backgroundPattern:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/nChaF1sM0i.png",
    phoneImage1:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/eBktTsE6Bz.png",
    phoneImage2:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/FJ3hLK9gwW.png",
    mobileBgImage:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/5NEwoOeZSN.png",
    mobilePhoneStackImage:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/Va0a7FjtRZ.png",
    mobileBgTop: "-35px",
  },
  {
    id: "wellness",
    title: "Track Your Emotional Well-being",
    description:
      "A simple visual snapshot of your current wellness state - helping you notice shifts in mood, stress, and balance over time without judgment or pressure.",
    bgColor: "#5d8547",
    backgroundImage:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/rcMCZpRNwk.png",
    backgroundPattern:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/qQbKA3JyZV.png",
    phoneImage1:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/Pz9OsxUW34.png",
    phoneImage2:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/FbUgmpyf8H.png",
    mobileBgImage:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/zYwSED094C.png",
    mobilePhoneStackImage:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/YiEhfM2pZD.png",
    mobileBgTop: "-35px",
  },
];

const DEFAULT_CARD_ID = "psychometric";

const tabWidths: Record<string, string> = {
  affirmation: "w-[123px]",
  psychometric: "w-[173px]",
  wellness: "w-[115px]",
};

export default function TopicsSection() {
  const [activeCard, setActiveCard] = useState(DEFAULT_CARD_ID);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const centerCard = useCallback((cardId: string, behavior: ScrollBehavior) => {
    const element = cardRefs.current[cardId];
    if (!element) return;

    element.scrollIntoView({
      behavior,
      inline: "center",
      block: "nearest",
    });
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      centerCard(DEFAULT_CARD_ID, "auto");
    });

    return () => cancelAnimationFrame(frame);
  }, [centerCard]);

  const scrollToCard = (cardId: string) => {
    setActiveCard(cardId);
    centerCard(cardId, "smooth");
  };

  return (
    <div className="flex w-full flex-col items-center gap-[32px] px-[10px] py-[50px] mt-20">
      {/* Desktop/Tablet heading (kept original) */}
      <div className="relative z-[84] hidden flex-col items-center gap-[18px] self-stretch md:flex">
        <div className="relative flex items-center justify-center gap-2">
          <h2 className="heading-h2-medium text-text-dark text-center">
            The Mental Health app for{" "}
            <span className="relative inline-block font-arima font-bold text-[#7c7cff]">
              Every Moment
              <div className="absolute -right-4 -top-4 z-[86] h-[25px] w-[33px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/JFk5hHO5Dw.png)] bg-cover bg-no-repeat" />
            </span>
          </h2>
        </div>
      </div>

      {/* Mobile heading (as Figma) */}
      <div className="relative z-[84] flex w-full max-w-[390px] flex-col items-center gap-[6px] md:hidden">
        <h2 className="font-arima text-center uppercase leading-[1.15] text-[#1a1a1a]">
          <span className="block text-[24px] font-normal tracking-[0.2px]">
            THE MENTAL HEALTH APP FOR
          </span>
          <span className="mt-[2px] block text-[24px] font-bold leading-[1.05] text-[#7c7cff]">
            EVERY MOMENT
          </span>
        </h2>
        <div className="h-[12px] w-[120px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-25/Gffe685bLd.png)] bg-cover bg-no-repeat" />
      </div>

      <div className="relative z-[87] flex w-full flex-col items-center gap-[24px] md:gap-[48px]">
        {/* Desktop/Tablet tabs (kept original) */}
        <div className="hidden w-full max-w-[899px] gap-[28px] items-center justify-center px-4 md:flex">
          <button
            onClick={() => scrollToCard("affirmation")}
            className={`flex px-[28px] py-[16px] gap-[10px] justify-center items-center rounded-[44px] transition-all duration-300 ${
              activeCard === "affirmation"
                ? "bg-[#a06bf9] shadow-md scale-105"
                : "bg-[#f3f0f5] hover:bg-[#eaddf7]"
            }`}
          >
            <span
              className={`subheading-md leading-[30px] transition-colors ${
                activeCard === "affirmation"
                  ? "font-bold text-white"
                  : "font-normal text-text-gray"
              }`}
            >
              Affirmation Cards
            </span>
          </button>

          <button
            onClick={() => scrollToCard("psychometric")}
            className={`flex px-[28px] py-[16px] gap-[10px] justify-center items-center rounded-[44px] transition-all duration-300 ${
              activeCard === "psychometric"
                ? "bg-[#a06bf9] shadow-md scale-105"
                : "bg-[#f3f0f5] hover:bg-[#eaddf7]"
            }`}
          >
            <span
              className={`subheading-md leading-[30px] transition-colors ${
                activeCard === "psychometric"
                  ? "font-bold text-white"
                  : "font-normal text-text-gray"
              }`}
            >
              Psychometric Assessment
            </span>
          </button>

          <button
            onClick={() => scrollToCard("wellness")}
            className={`flex px-[28px] py-[16px] gap-[10px] justify-center items-center rounded-[44px] transition-all duration-300 ${
              activeCard === "wellness"
                ? "bg-[#a06bf9] shadow-md scale-105"
                : "bg-[#f3f0f5] hover:bg-[#eaddf7]"
            }`}
          >
            <span
              className={`subheading-md leading-[30px] transition-colors ${
                activeCard === "wellness"
                  ? "font-bold text-white"
                  : "font-normal text-text-gray"
              }`}
            >
              Wellness Gauge
            </span>
          </button>
        </div>

        {/* Mobile tabs */}
        <div className="scrollbar-hide flex w-full max-w-[390px] items-center gap-[8px] overflow-x-auto px-[2px] md:hidden">
          <button
            onClick={() => scrollToCard("affirmation")}
            className={`${tabWidths.affirmation} flex shrink-0 items-center justify-center rounded-[44px] px-[12px] py-[8px] ${
              activeCard === "affirmation" ? "bg-[#b95af9]" : "bg-[#f0e6f3]"
            }`}
          >
            <span
              className={`font-mulish text-[12px] leading-[15px] whitespace-nowrap ${
                activeCard === "affirmation"
                  ? "font-bold text-white"
                  : "font-normal text-[#4a4a4a]"
              }`}
            >
              Affirmation Cards
            </span>
          </button>

          <button
            onClick={() => scrollToCard("psychometric")}
            className={`${tabWidths.psychometric} flex shrink-0 items-center justify-center rounded-[44px] px-[12px] py-[8px] ${
              activeCard === "psychometric" ? "bg-[#b95af9]" : "bg-[#f0e6f3]"
            }`}
          >
            <span
              className={`font-mulish text-[12px] leading-[15px] whitespace-nowrap ${
                activeCard === "psychometric"
                  ? "font-bold text-white"
                  : "font-normal text-[#4a4a4a]"
              }`}
            >
              Psychometric Assessment
            </span>
          </button>

          <button
            onClick={() => scrollToCard("wellness")}
            className={`${tabWidths.wellness} flex shrink-0 items-center justify-center rounded-[44px] px-[12px] py-[8px] ${
              activeCard === "wellness" ? "bg-[#b95af9]" : "bg-[#f0e6f3]"
            }`}
          >
            <span
              className={`font-mulish text-[12px] leading-[15px] whitespace-nowrap ${
                activeCard === "wellness"
                  ? "font-bold text-white"
                  : "font-normal text-[#4a4a4a]"
              }`}
            >
              Wellness Gauge
            </span>
          </button>
        </div>

        {/* Card rail */}
        <div
          className="scrollbar-hide relative z-[95] flex w-full snap-x snap-mandatory items-center gap-[12px] overflow-x-auto overflow-y-hidden md:gap-[32px]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cardsData.map((card) => (
            <div
              key={card.id}
              ref={(el) => {
                cardRefs.current[card.id] = el;
              }}
              className="relative h-[513px] w-[336px] shrink-0 snap-center overflow-hidden rounded-[16px] md:h-[380px] md:w-[1095px] md:rounded-bl-none md:rounded-br-none md:rounded-tl-[24px] md:rounded-tr-[24px]"
              style={{ backgroundColor: card.bgColor }}
            >
              {/* Mobile card (kept as-is) */}
              <div className="absolute inset-0 md:hidden">
                <div
                  className="absolute left-0 h-[549px] w-full bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${card.mobileBgImage})`, top: card.mobileBgTop }}
                />

                <div className="absolute left-1/2 top-[16px] z-[14] flex h-[234px] w-[304px] -translate-x-1/2 flex-col items-start gap-[40px]">
                  <div className="relative z-[15] flex flex-col items-start gap-[16px] self-stretch">
                    <span className="font-arima text-[20px] font-extrabold uppercase leading-[32.66px] text-white">
                      {card.title}
                    </span>
                    <span className="font-inter text-[14px] font-normal leading-[16.943px] text-white">
                      {card.description}
                    </span>
                  </div>

                  <div className="relative z-[18] flex h-[40px] w-[148px] items-center justify-center overflow-hidden rounded-[12px] border border-solid border-[#fff]">
                    <span className="font-overpass text-[16px] font-bold leading-[11px] text-white">
                      Learn More
                    </span>
                  </div>
                </div>

                <div
                  className="absolute left-[42px] top-[257px] z-[13] h-[425.5px] w-[256.374px] bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${card.mobilePhoneStackImage})` }}
                />
              </div>

              {/* Desktop/Tablet card (restored original) */}
              <div className="absolute inset-0 hidden md:block">
                <div
                  className="w-[576px] h-full bg-cover bg-no-repeat absolute top-0 left-[519px]"
                  style={{ backgroundImage: `url(${card.backgroundImage})` }}
                />
                <div
                  className="w-[736px] h-[300px] bg-cover bg-no-repeat absolute top-[40px] left-0 z-[1]"
                  style={{ backgroundImage: `url(${card.backgroundPattern})` }}
                />
                <div
                  className="w-[230px] h-[476px] bg-cover bg-no-repeat absolute top-[30px] left-[813.5px] z-[8]"
                  style={{ backgroundImage: `url(${card.phoneImage2})` }}
                />
                <div className="flex w-[500px] flex-col gap-[28px] items-start flex-nowrap absolute top-[60px] left-[60px] z-[2]">
                  <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[3]">
                    <span className="heading-h4-medium flex w-full justify-start items-center self-stretch shrink-0 text-[#fff] text-left uppercase z-[4]">
                      {card.title}
                    </span>
                    <span className="subheading-medium flex w-full justify-start items-center self-stretch shrink-0 text-[#fff] text-left z-[5]">
                      {card.description}
                    </span>
                  </div>
                  <div className="flex w-[148px] h-[48px] pt-0 pr-[32px] pb-0 pl-[32px] gap-[4px] justify-center items-center shrink-0 flex-nowrap rounded-[12px] border-solid border border-[#fff] relative overflow-hidden z-[6] hover:bg-white/10 transition-colors cursor-pointer">
                    <span className="btn-text-lg flex justify-center items-center shrink-0 basis-auto text-[#fff] text-center whitespace-nowrap z-[7]">
                      Learn More
                    </span>
                  </div>
                </div>
                <div
                  className="w-[210px] h-[430px] bg-cover bg-no-repeat absolute top-[160px] left-[685.5px] z-[9]"
                  style={{ backgroundImage: `url(${card.phoneImage2})` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

