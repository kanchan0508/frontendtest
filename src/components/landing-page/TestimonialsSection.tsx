"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

const rotatingTexts = [
  "Career",
  "Expert Support",
  "Leadership",
  "Life",
  "Life-Tools",
  "Programs",
  "Relationship",
];

const testimonials = [
  { id: 291, bg: "bg-card-blue", name: "Alex Smith", role: "CEO", nameColor: "text-text-dark", text: "\" Figma ipsum component variant main layer. Bullet create opacity scrolling star. Layer slice share thumbnail blur subtract editor effect. Shadow move align plugin list scrolling font. Duplicate stroke outline mask polygon ipsum rectangle stroke hand line. Boolean select frame.\"" },
  { id: 296, bg: "bg-card-peach", name: "Sarah Johnson", role: "Marketing Director", nameColor: "text-teal", text: "\" Figma ipsum component variant main layer. Bullet create opacity scrolling star. Layer slice share thumbnail blur subtract editor effect. Shadow move align plugin list scrolling font. Duplicate stroke outline mask polygon ipsum rectangle stroke hand line. Boolean select frame.\"" },
  { id: 306, bg: "bg-card-yellow", name: "Michael Chen", role: "Product Manager", nameColor: "text-teal", text: "\" Figma ipsum component variant main layer. Bullet create opacity scrolling star. Layer slice share thumbnail blur subtract editor effect. Shadow move align plugin list scrolling font. Duplicate stroke outline mask polygon ipsum rectangle stroke hand line. Boolean select frame.\"" },
  { id: 301, bg: "bg-purple-card", name: "Emily Davis", role: "UX Designer", nameColor: "text-teal", text: "\" Figma ipsum component variant main layer. Bullet create opacity scrolling star. Layer slice share thumbnail blur subtract editor effect. Shadow move align plugin list scrolling font. Duplicate stroke outline mask polygon ipsum rectangle stroke hand line. Boolean select frame.\"" },
  { id: 311, bg: "bg-card-blue", name: "James Wilson", role: "Therapist", nameColor: "text-text-dark", text: "\" Figma ipsum component variant main layer. Bullet create opacity scrolling star. Layer slice share thumbnail blur subtract editor effect. Shadow move align plugin list scrolling font. Duplicate stroke outline mask polygon ipsum rectangle stroke hand line. Boolean select frame.\"" },
  { id: 316, bg: "bg-card-peach", name: "Priya Sharma", role: "Life Coach", nameColor: "text-teal", text: "\" Figma ipsum component variant main layer. Bullet create opacity scrolling star. Layer slice share thumbnail blur subtract editor effect. Shadow move align plugin list scrolling font. Duplicate stroke outline mask polygon ipsum rectangle stroke hand line. Boolean select frame.\"" },
];

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  useEffect(() => {
    const textInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        setIsAnimating(false);
      }, 400);
    }, 4000);
    return () => clearInterval(textInterval);
  }, []);

  const scrollNext = useCallback(() => {
    if (!scrollContainerRef.current || isHoveredRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = 430;
    const gap = 32;
    const step = cardWidth + gap;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft >= maxScroll - 10) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: step, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    autoScrollRef.current = setInterval(scrollNext, 3000);
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [scrollNext]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseEnter = () => { isHoveredRef.current = true; };
  const handleMouseLeave = () => { isHoveredRef.current = false; };

  const calculateOffset = (cardIndex: number) => {
    if (!scrollContainerRef.current) return 0;
    
    const cardWidth = 430;
    const gap = 32;
    const padding = 142;
    
    const cardCenter = padding + (cardIndex * (cardWidth + gap)) + (cardWidth / 2);
    const viewportCenter = scrollLeft + (containerWidth / 2);
    
    const distance = Math.abs(viewportCenter - cardCenter);
    const maxDistance = cardWidth;
    
    if (distance > maxDistance) return 0;
    
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
            <span className="h-[105px] shrink-0 basis-auto heading-h1-medium leading-[104.512px] text-black relative text-left whitespace-nowrap z-[281]">
              Platform to Transform
            </span>
            <div className="w-[472px] h-[105px] shrink-0 relative overflow-hidden flex items-center z-[282]">
              <span
                className={`heading-h1-medium leading-[104.512px] text-heading-blue text-left whitespace-nowrap z-[283] transition-all duration-400 ease-in-out ${isAnimating ? 'opacity-0 -translate-y-3' : 'opacity-100 translate-y-0'}`}
              >
                {rotatingTexts[currentTextIndex]}
              </span>
            </div>
          </div>
          <span className="h-[40px] self-stretch shrink-0 basis-auto heading-h3-medium leading-[40px] text-text-gray relative text-center whitespace-nowrap z-[284]">
            Three pillars designed to transform how you learn and evolve.
          </span>
        </div>
      </div>
      <div className="flex w-full py-[50px] flex-col gap-[56px] items-center shrink-0 flex-nowrap relative z-[285]">
        <div className="flex flex-col gap-[20px] items-center self-stretch shrink-0 flex-nowrap relative z-[286]">
          <div className="w-full max-w-[1156px] mx-auto shrink-0 font-arima text-[48px] font-medium leading-[78px] relative text-center whitespace-nowrap z-[287]">
            <span className="heading-h2-medium leading-[78.384px] text-text-dark relative text-center">
              What Our{" "}
            </span>
            <span className="relative inline-block">
              <span className="heading-h2-black leading-[78.384px] gradient-text-purple relative text-center">
                Users
              </span>
              <div className="w-[34.194px] h-[27.796px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/VCtffaHQbn.png)] bg-cover bg-no-repeat absolute top-[-25px] left-1/2 translate-x-[-50%] z-[289]" />
            </span>
            <span className="heading-h2-medium leading-[78.384px] text-text-dark relative text-center">
              {" "}Say
            </span>
          </div>
          <span className="h-[35px] self-stretch shrink-0 basis-auto body-b1 leading-[35px] text-text-gray relative text-center whitespace-nowrap z-[288]">
            Real stories. Real improvement.
          </span>
        </div>
        
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-full overflow-x-auto scrollbar-hide relative z-[290] px-4 md:px-[142px]"
        >
          <div className="flex gap-[32px] min-w-max pb-[80px] pt-4">
            {testimonials.map((card, index) => (
              <div 
                key={card.id}
                className={`flex w-[430px] h-[418px] pt-[24px] pr-[32px] pb-[24px] pl-[32px] flex-col justify-between items-start shrink-0 flex-nowrap ${card.bg} rounded-[12px] shadow-sm relative transition-transform duration-300 ease-out`}
                style={{
                  transform: `translateY(${calculateOffset(index)}px)`,
                  zIndex: card.id
                }}
              >
                <span className="flex w-[366px] h-[232px] justify-start items-center self-stretch shrink-0 body-b1 leading-[29px] text-text-dark relative text-left z-[10]">
                  {card.text}
                </span>
                <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[11]">
                  <span className={`h-[29px] self-stretch shrink-0 basis-auto font-mulish subheading-h2 leading-[28.8px] ${card.nameColor} relative text-left whitespace-nowrap z-[12]`}>
                    {card.name}
                  </span>
                  <span className="h-[19px] self-stretch shrink-0 basis-auto font-mulish body-b2 leading-[19px] text-text-gray relative text-left whitespace-nowrap z-[13]">
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