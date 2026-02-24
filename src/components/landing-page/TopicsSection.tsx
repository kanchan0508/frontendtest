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
    bgColor: "#c67002",
    backgroundImage:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/xKtFTtR4R8.png",
    backgroundPattern:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/FHtZLpRtsk.png",
    phoneImage1:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/LqmR7qu9su.png",
    phoneImage2:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/3jV5HLekvf.png",
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
  },
  {
    id: "wellness",
    title: "Track Your Emotional Well-being",
    description:
      "A simple visual snapshot of your current wellness state — helping you notice shifts in mood, stress, and balance over time without judgment or pressure.",
    bgColor: "#5d8547",
    backgroundImage:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/rcMCZpRNwk.png",
    backgroundPattern:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/qQbKA3JyZV.png",
    phoneImage1:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/Pz9OsxUW34.png",
    phoneImage2:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-24/FbUgmpyf8H.png",
  },
];

export default function TopicsSection() {
  const [activeCard, setActiveCard] = useState("psychometric");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const CARD_WIDTH = 1095;
  const GAP = 32;

  useEffect(() => {
    // Scroll to center card on mount
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerWidth = container.offsetWidth;
      const scrollPos = (CARD_WIDTH + GAP) - (containerWidth - CARD_WIDTH) / 2;
      container.scrollLeft = scrollPos;
    }
  }, []);

  const scrollToCard = (cardId: string) => {
    setActiveCard(cardId);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerWidth = container.offsetWidth;
      const cardIndex = cardsData.findIndex((card) => card.id === cardId);
      const scrollPos = cardIndex * (CARD_WIDTH + GAP) - (containerWidth - CARD_WIDTH) / 2;
      container.scrollTo({
        left: scrollPos,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex w-full max-w-[1440px] py-[50px] pr-[0px] pl-[0px] flex-col gap-[48px] items-center shrink-0 flex-nowrap relative z-[82]">
      <div className="flex flex-col gap-[18px] items-center self-stretch shrink-0 flex-nowrap relative z-[84]">
        <div className="flex items-center justify-center gap-2 relative">
          <h2 className="heading-h2-medium text-text-dark text-center">
            The Mental Health app for{" "}
            <span className="font-arima font-bold text-[#7c7cff] relative inline-block">
              Every Moment
              {/* Sparkle Icon */}
              <div className="w-[33px] h-[25px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/JFk5hHO5Dw.png)] bg-cover bg-no-repeat absolute -top-4 -right-4 z-[86]" />
            </span>
          </h2>
        </div>
      </div>
      <div className="flex w-full pt-0 pb-0 flex-col gap-[48px] items-center shrink-0 flex-nowrap relative z-[87]">
        {/* Tab Buttons */}
        <div className="flex w-full max-w-[899px] gap-[28px] items-center shrink-0 flex-wrap md:flex-nowrap justify-center relative z-[88] px-4">
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

        {/* Horizontal Scrollable Card Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-[32px] items-center w-full overflow-x-auto overflow-y-hidden relative z-[95] scrollbar-hide snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="w-[1095px] h-[380px] rounded-tl-[24px] rounded-tr-[24px] rounded-br-none rounded-bl-none relative overflow-hidden flex-shrink-0 snap-center"
              style={{ backgroundColor: card.bgColor }}
            >
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
