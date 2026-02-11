"use client";
import React, { useState, useRef, useEffect } from "react";

type CardData = {
  id: string;
  title: string;
  description: string;
  bgColor: string;
  backgroundImage: string;
  backgroundPattern: string;
  phoneImage1: string;
  phoneImage2: string;
};

const cardsData: CardData[] = [
  {
    id: "affirmation",
    title: "Daily Affirmations for Inner Balance",
    description:
      "Gentle, meaningful affirmations designed to ground your thoughts, build emotional resilience, and encourage positive self-talk — one moment at a time.",
    bgColor: "#e07a5f",
    backgroundImage:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/bdpCcbGsFb.png",
    backgroundPattern:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/i24NyxTyne.png",
    phoneImage1:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/xg6hpULTSb.png",
    phoneImage2:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/Eah79j3cND.png",
  },
  {
    id: "psychometric",
    title: "Start With a Simple Assessment",
    description:
      "Answer a few simple questions to gain meaningful insights into your emotional wellbeing.",
    bgColor: "#025b65",
    backgroundImage:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/fcx8B5xtMo.png",
    backgroundPattern:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/NfSgvYoCOh.png",
    phoneImage1:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/xg6hpULTSb.png",
    phoneImage2:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/Eah79j3cND.png",
  },
  {
    id: "wellness",
    title: "Track Your Emotional Well-being",
    description:
      "A simple visual snapshot of your current wellness state — helping you notice shifts in mood, stress, and balance over time without judgment or pressure.",
    bgColor: "#3d5a33",
    backgroundImage:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/0YMBUS3m2k.png",
    backgroundPattern:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/JhmRKtjXZz.png",
    phoneImage1:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/xg6hpULTSb.png",
    phoneImage2:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/Eah79j3cND.png",
  },
];

export default function TopicsSection() {
  const [activeCard, setActiveCard] = useState("psychometric");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to center card on mount
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 1095;
      const gap = 36;
      // Scroll to center card (index 1)
      container.scrollLeft = cardWidth + gap;
    }
  }, []);

  const scrollToCard = (cardId: string) => {
    setActiveCard(cardId);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 1095;
      const gap = 36;
      const cardIndex = cardsData.findIndex((card) => card.id === cardId);
      container.scrollTo({
        left: cardIndex * (cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex w-full max-w-[1440px] pt-[40px] pr-[0px] pb-[40px] pl-[0px] flex-col gap-[48px] items-center shrink-0 flex-nowrap relative z-[82]">
      <div className="flex flex-col gap-[61px] items-center self-stretch shrink-0 flex-nowrap relative z-[83]">
        <div className="flex flex-col gap-[18px] items-center self-stretch shrink-0 flex-nowrap relative z-[84]">
          <div className="w-full max-w-[1120px] shrink-0 font-overpass text-[48px] font-bold leading-[60.768px] relative text-center whitespace-nowrap z-[85]">
            <span className="font-arima text-[48px] font-medium leading-[78.384px] text-text-dark relative text-center">
              The Mental Health app for
            </span>
            <span className="font-overpass text-[48px] font-semibold leading-[60.768px] text-text-dark relative text-center capitalize">
              {" "}
            </span>
            <span className="font-arima text-[48px] font-black leading-[78.384px] relative text-center">
              Every Moment
            </span>
          </div>
          <div className="w-[33.266px] h-[25.382px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/JFk5hHO5Dw.png)] bg-cover bg-no-repeat absolute top-[-0.95px] left-[50%] translate-x-[-50%] z-[86]" />
        </div>
      </div>
      <div className="flex w-full pt-0 pb-0 flex-col gap-[48px] items-center shrink-0 flex-nowrap relative z-[87]">
        {/* Tab Buttons */}
        <div className="flex w-full max-w-[899px] gap-[28px] items-center shrink-0 flex-wrap md:flex-nowrap justify-center relative z-[88] px-4">
          <button
            onClick={() => scrollToCard("affirmation")}
            className={`flex pt-[16px] pr-[28px] pb-[16px] pl-[28px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[44px] transition-all ${
              activeCard === "affirmation"
                ? "bg-primary-purple"
                : "bg-light-purple-bg hover:bg-primary-purple/70"
            } relative z-[89]`}
          >
            <span
              className={`shrink-0 basis-auto font-mulish text-[24px] leading-[30px] relative text-left whitespace-nowrap transition-all ${
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
            className={`flex pt-[16px] pr-[28px] pb-[16px] pl-[28px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[44px] transition-all ${
              activeCard === "psychometric"
                ? "bg-primary-purple"
                : "bg-light-purple-bg hover:bg-primary-purple/70"
            } relative z-[91]`}
          >
            <span
              className={`shrink-0 basis-auto font-mulish text-[24px] leading-[30px] relative text-left whitespace-nowrap transition-all ${
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
            className={`flex pt-[16px] pr-[28px] pb-[16px] pl-[28px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[44px] transition-all ${
              activeCard === "wellness"
                ? "bg-primary-purple"
                : "bg-light-purple-bg hover:bg-primary-purple/70"
            } relative z-[93]`}
          >
            <span
              className={`shrink-0 basis-auto font-mulish text-[24px] leading-[30px] relative text-left whitespace-nowrap transition-all ${
                activeCard === "wellness"
                  ? "font-bold text-white"
                  : "font-normal text-text-gray"
              }`}
            >
              Wellness Gauge
            </span>
          </button>
        </div>

        {/* Horizontal Scrollable Card Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-[36px] items-center w-full overflow-x-auto overflow-y-hidden relative z-[95] scrollbar-hide pl-[calc((100vw-1095px)/2)] pr-[calc((100vw-1095px)/2)]"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="w-[1095px] h-[460px] rounded-tl-[24px] rounded-tr-[24px] rounded-br-none rounded-bl-none relative overflow-hidden flex-shrink-0"
              style={{ backgroundColor: card.bgColor }}
            >
              <div
                className="w-[576px] h-[459.5px] bg-cover bg-no-repeat absolute top-0 left-[519px]"
                style={{ backgroundImage: `url(${card.backgroundImage})` }}
              />
              <div
                className="w-[736px] h-[361px] bg-cover bg-no-repeat absolute top-[49px] left-0 z-[1]"
                style={{ backgroundImage: `url(${card.backgroundPattern})` }}
              />
              <div
                className="w-[254px] h-[526px] bg-cover bg-no-repeat absolute top-[71.5px] left-[813.5px] z-[8]"
                style={{ backgroundImage: `url(${card.phoneImage1})` }}
              />
              <div className="flex w-[530px] h-[309px] flex-col gap-[40px] items-start flex-nowrap absolute top-[102.5px] left-[80.5px] z-[2]">
                <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[3]">
                  <span className="flex w-[530px] h-[118px] justify-start items-center self-stretch shrink-0 font-arima text-[36px] font-medium leading-[58.788px] text-[#fff] relative text-left uppercase z-[4]">
                    {card.title}
                  </span>
                  <span className="flex w-[530px] h-[87px] justify-start items-center self-stretch shrink-0 font-inter text-[24px] font-normal leading-[29.045px] text-[#fff] relative text-left z-[5]">
                    {card.description}
                  </span>
                </div>
                <div className="flex w-[148px] h-[48px] pt-0 pr-[32px] pb-0 pl-[32px] gap-[4px] justify-center items-center shrink-0 flex-nowrap rounded-[12px] border-solid border border-[#fff] relative overflow-hidden cursor-pointer hover:bg-white/10 transition-colors z-[6]">
                  <span className="flex w-[84px] h-[11px] justify-center items-start shrink-0 basis-auto font-overpass text-[16px] font-bold leading-[11px] text-[#fff] relative text-center whitespace-nowrap z-[7]">
                    Learn More
                  </span>
                </div>
              </div>
              <div
                className="w-[230px] h-[476px] bg-cover bg-no-repeat absolute top-[229.5px] left-[685.5px] z-[9]"
                style={{ backgroundImage: `url(${card.phoneImage2})` }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
