"use client";

import React, { useRef, useState, useEffect } from "react";

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (scrollContainerRef.current) {
        setContainerWidth(scrollContainerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const calculateOffset = (cardIndex: number) => {
    if (!scrollContainerRef.current) return 0;
    
    const cardWidth = 430;
    const gap = 32;
    const padding = 142; // matching px-[142px]
    
    const cardCenter = padding + (cardIndex * (cardWidth + gap)) + (cardWidth / 2);
    const viewportCenter = scrollLeft + (containerWidth / 2);
    
    const distance = Math.abs(viewportCenter - cardCenter);
    const maxDistance = cardWidth; // range of effect
    
    if (distance > maxDistance) return 0;
    
    // Dip down by up to 60px when perfectly centered
    const dip = 60 * (1 - distance / maxDistance);
    return dip;
  };

  return (
    <>
      <div className="w-full max-w-[1440px] h-[444px] shrink-0 bg-purple-banner relative z-[273]">
        <div className="w-[1074.706px] h-[452.176px] absolute top-1/2 left-1/2 translate-x-[-50.05%] translate-y-[-57.5%] z-[274]">
          <div className="w-[58.235px] h-[58.235px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/9wmn6fEXXP.png)] bg-cover bg-no-repeat relative z-[278] mt-0 mr-0 mb-0 ml-[584.47px]" />
          <div className="w-[1074.706px] h-[326.176px] relative z-[277] mt-[67.765px] mr-0 mb-0 ml-0">
            <div className="w-[18.72%] h-[201.176px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/JNq7EBQ8Cq.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[276]" />
            <div className="w-[4.93%] h-[52.941px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/FASH91FOuj.png)] bg-cover bg-no-repeat absolute top-[38px] left-[95.07%] z-[277]" />
            <div className="w-[18.72%] h-[201.176px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/OeSYczKfBp.png)] bg-cover bg-no-repeat absolute top-[125px] left-[57.34%] z-[275]" />
          </div>
        </div>
        <div className="flex w-[1120px] h-[159px] pt-[16px] pr-0 pb-[16px] pl-0 flex-col items-center flex-nowrap absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-49.69%] z-[279]">
          <div className="flex w-[1059px] gap-[16px] justify-center items-center shrink-0 flex-nowrap relative z-[280]">
            <span className="h-[105px] shrink-0 basis-auto font-arima text-[64px] font-medium leading-[104.512px] text-black relative text-left whitespace-nowrap z-[281]">
              Platform to Transform
            </span>
            <div className="w-[472px] h-[81px] shrink-0 relative z-[282]">
              <span className="flex h-[48px] justify-start items-center font-arima text-[64px] font-medium leading-[48px] text-heading-blue absolute top-[calc(50%-23.5px)] left-0 text-left whitespace-nowrap z-[283]">
                Expert Support
              </span>
            </div>
          </div>
          <span className="h-[40px] self-stretch shrink-0 basis-auto font-mulish text-[32px] font-normal leading-[40px] text-text-gray relative text-center whitespace-nowrap z-[284]">
            Three pillars designed to transform how you learn and evolve.
          </span>
        </div>
      </div>
      <div className="flex w-full pt-[100px] flex-col gap-[56px] items-center shrink-0 flex-nowrap relative z-[285]">
        <div className="flex flex-col gap-[20px] items-center self-stretch shrink-0 flex-nowrap relative z-[286]">
          <div className="w-full max-w-[1156px] mx-auto shrink-0 font-arima text-[48px] font-medium leading-[78px] relative text-center whitespace-nowrap z-[287]">
            <span className="font-arima text-[48px] font-medium leading-[78.384px] text-text-dark relative text-center">
              What Our{" "}
            </span>
            <span className="relative inline-block">
              <span className="font-arima text-[48px] font-black leading-[78.384px] relative text-center">
                Users
              </span>
              <div className="w-[34.194px] h-[27.796px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/VCtffaHQbn.png)] bg-cover bg-no-repeat absolute top-[-25px] left-1/2 translate-x-[-50%] z-[289]" />
            </span>
            <span className="font-arima text-[48px] font-medium leading-[78.384px] text-text-dark relative text-center">
              {" "}Say
            </span>
          </div>
          <span className="h-[35px] self-stretch shrink-0 basis-auto font-mulish text-[20px] font-normal leading-[35px] text-text-gray relative text-center whitespace-nowrap z-[288]">
            Real stories. Real improvement.
          </span>
        </div>
        
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="w-full overflow-x-auto scrollbar-hide relative z-[290] px-4 md:px-[142px]"
        >
          <div className="flex gap-[32px] min-w-max pb-[80px] pt-4">
            {[
              { id: 291, bg: "bg-card-blue", name: "Alex Smith", role: "CEO", nameColor: "text-text-dark" },
              { id: 296, bg: "bg-card-peach", name: "Alex Smith", role: "CEO", nameColor: "text-teal" },
              { id: 306, bg: "bg-card-yellow", name: "Alex Smith", role: "CEO", nameColor: "text-teal" },
              { id: 301, bg: "bg-purple-card", name: "Alex Smith", role: "CEO", nameColor: "text-teal" }
            ].map((card, index) => (
              <div 
                key={card.id}
                className={`flex w-[430px] h-[418px] pt-[24px] pr-[32px] pb-[24px] pl-[32px] flex-col justify-between items-start shrink-0 flex-nowrap ${card.bg} rounded-[12px] shadow-sm relative transition-transform duration-300 ease-out`}
                style={{
                  transform: `translateY(${calculateOffset(index)}px)`,
                  zIndex: card.id
                }}
              >
                <span className="flex w-[366px] h-[232px] justify-start items-center self-stretch shrink-0 font-mulish text-[20px] font-light leading-[29px] text-text-dark relative text-left z-[10]">
                  “ Figma ipsum component variant main layer. Bullet create opacity
                  scrolling star. Layer slice share thumbnail blur subtract editor
                  effect. Shadow move align plugin list scrolling font. Duplicate
                  stroke outline mask polygon ipsum rectangle stroke hand line.
                  Boolean select frame.”
                </span>
                <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[11]">
                  <span className={`h-[29px] self-stretch shrink-0 basis-auto ${index === 0 ? 'font-overpass' : 'font-mulish'} text-[24px] font-semibold leading-[28.8px] ${card.nameColor} relative text-left whitespace-nowrap z-[12]`}>
                    {card.name}
                  </span>
                  <span className={`h-[19px] self-stretch shrink-0 basis-auto ${index === 0 ? 'font-inter' : 'font-mulish'} text-[16px] font-normal leading-[19px] text-text-gray relative text-left whitespace-nowrap z-[13]`}>
                    {card.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
