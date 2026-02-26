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
  const [cardMetrics, setCardMetrics] = useState({
    cardWidth: 430,
    gap: 32,
    padding: 16,
  });
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const updateMeasurements = () => {
      if (!scrollContainerRef.current) return;

      const container = scrollContainerRef.current;
      setContainerWidth(container.offsetWidth);

      const firstCard = container.querySelector<HTMLElement>(
        '[data-testimonial-card="true"]',
      );
      const track = container.firstElementChild as HTMLElement | null;

      const gapValue = track
        ? parseFloat(
            window.getComputedStyle(track).columnGap ||
              window.getComputedStyle(track).gap ||
              "32",
          )
        : 32;

      const paddingValue = parseFloat(
        window.getComputedStyle(container).paddingLeft || "0",
      );

      setCardMetrics({
        cardWidth: firstCard?.offsetWidth || 430,
        gap: Number.isNaN(gapValue) ? 32 : gapValue,
        padding: Number.isNaN(paddingValue) ? 16 : paddingValue,
      });
    };

    updateMeasurements();
    window.addEventListener("resize", updateMeasurements);
    return () => window.removeEventListener("resize", updateMeasurements);
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
    const cardWidth = cardMetrics.cardWidth;
    const gap = cardMetrics.gap;
    const step = cardWidth + gap;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft >= maxScroll - 10) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: step, behavior: "smooth" });
    }
  }, [cardMetrics.cardWidth, cardMetrics.gap]);

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

    const cardWidth = cardMetrics.cardWidth;
    const gap = cardMetrics.gap;
    const padding = cardMetrics.padding;

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
      <div className="relative z-[273] mt-16 h-[420px] w-full shrink-0 overflow-hidden bg-purple-banner sm:h-[460px] md:h-[380px] lg:mt-30 lg:h-[444px] 2xl:h-[500px]">
        {/* Decorative Layer */}
        <div className="absolute inset-0 z-[274]">
          <div className="absolute left-[14%] top-[22%] h-[42px] w-[42px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/9wmn6fEXXP.png)] bg-cover bg-no-repeat opacity-80 md:hidden" />
          <div className="absolute right-[14%] top-[34%] h-[16px] w-[16px] rounded-full bg-white/35 md:hidden" />
          <div className="absolute left-[4%] top-[8%] h-[120px] w-[120px] rounded-full bg-white/10 blur-[1px] md:hidden" />
          <div className="absolute right-[8%] bottom-[8%] h-[80px] w-[80px] rounded-full bg-white/10 blur-[1px] md:hidden" />

          <div className="absolute left-1/2 top-1/2 hidden h-[452.176px] w-[1074.706px] -translate-x-[50.05%] -translate-y-[57.5%] md:block">
            <div className="relative ml-[584.47px] h-[58.235px] w-[58.235px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/9wmn6fEXXP.png)] bg-cover bg-no-repeat" />
            <div className="relative mt-[67.765px] h-[326.176px] w-[1074.706px]">
              <div className="absolute left-0 top-0 h-[201.176px] w-[18.72%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/JNq7EBQ8Cq.png)] bg-cover bg-no-repeat" />
              <div className="absolute left-[95.07%] top-[38px] h-[52.941px] w-[4.93%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/FASH91FOuj.png)] bg-cover bg-no-repeat" />
              <div className="absolute left-[57.34%] top-[125px] h-[201.176px] w-[18.72%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/OeSYczKfBp.png)] bg-cover bg-no-repeat" />
            </div>
          </div>
        </div>

        {/* Content: Mobile */}
        <div className="absolute left-1/2 top-1/2 z-[279] flex w-[92%] max-w-[220px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[8px] text-center md:hidden">
          <span className="font-arima text-[30px] font-medium uppercase leading-[1.45] text-black">
            PLATFORM TO
            <br />
            TRANSFORM
          </span>
          <div className="h-[28px] overflow-hidden">
            <span
              className={`font-arima text-[30px] font-medium uppercase leading-[1] text-heading-blue transition-all duration-400 ease-in-out ${isAnimating ? "opacity-0 -translate-y-3" : "opacity-100 translate-y-0"}`}
            >
              {rotatingTexts[currentTextIndex]}
            </span>
          </div>
          <span className="max-w-[170px] font-mulish text-[20px] font-normal leading-[1.3] text-text-gray">
            Three pillars designed to transform how you learn and evolve.
          </span>
        </div>

        {/* Content: Tablet/Desktop/XL */}
        <div className="absolute left-1/2 top-1/2 z-[279] hidden h-[159px] w-[96%] max-w-[1120px] -translate-x-1/2 -translate-y-[49.69%] flex-col items-center px-4 pt-[16px] md:flex lg:px-0 2xl:max-w-[1320px]">
          <div className="relative z-[280] flex w-full justify-center gap-[16px]">
            <span className="heading-h1-medium relative whitespace-nowrap text-black">
              Platform to Transform
            </span>
            <div className="relative flex h-[105px] w-[472px] items-center overflow-hidden 2xl:w-[560px]">
              <span
                className={`heading-h1-medium whitespace-nowrap text-heading-blue transition-all duration-400 ease-in-out ${isAnimating ? "opacity-0 -translate-y-3" : "opacity-100 translate-y-0"}`}
              >
                {rotatingTexts[currentTextIndex]}
              </span>
            </div>
          </div>
          <span className="heading-h3-medium mt-[-8px] text-center text-text-gray">
            Three pillars designed to transform how you learn and evolve.
          </span>
        </div>
      </div>
      <div className="relative z-[285] flex w-full shrink-0 flex-col items-center gap-[44px] py-[50px] pt-20 sm:gap-[52px] lg:gap-[56px] lg:pt-30">
        <div className="relative z-[286] flex w-full shrink-0 flex-col items-center gap-[14px] self-stretch px-3 sm:px-4 md:hidden">
          <h2 className="relative z-[287] text-center font-arima text-[30px] font-medium uppercase leading-[1.08] tracking-[0.2px] text-[#1a1a1a]">
            WHAT OUR{" "}
            <span className="relative inline-block font-bold text-[#7c7cff]">
              USERS
              <div className="absolute left-1/2 top-[82%] z-[289] h-[13px] w-[54px] -translate-x-1/2 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/VCtffaHQbn.png)] bg-contain bg-no-repeat" />
            </span>{" "}
            SAY
          </h2>
          <span className="relative z-[288] text-center font-mulish text-[14px] font-normal leading-[1.3] text-text-gray">
            Real stories. Real improvement.
          </span>
        </div>

        <div className="relative z-[286] hidden shrink-0 flex-col items-center gap-[14px] self-stretch px-3 sm:px-4 md:flex">
          <div className="relative z-[287] mx-auto w-full max-w-[1156px] text-center font-arima text-[44px] font-medium leading-[1.2] lg:text-[48px]">
            <span className="heading-h2-medium text-text-dark relative text-center">
              What Our{" "}
            </span>
            <span className="relative inline-block">
              <span className="heading-h2-black gradient-text-purple relative text-center">
                Users
              </span>
              <div className="absolute left-1/2 top-[-20px] z-[289] h-[27.796px] w-[34.194px] -translate-x-1/2 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/VCtffaHQbn.png)] bg-cover bg-no-repeat" />
            </span>
            <span className="heading-h2-medium text-text-dark relative text-center">
              {" "}Say
            </span>
          </div>
          <span className="body-b1 relative z-[288] text-center text-[18px] leading-[1.35] text-text-gray md:text-[20px] lg:whitespace-nowrap">
            Real stories. Real improvement.
          </span>
        </div>
        
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="scrollbar-hide relative z-[290] w-full overflow-x-auto px-2 sm:px-4 md:px-8 lg:px-[142px] 2xl:px-[180px]"
        >
          <div className="flex min-w-max gap-[16px] pb-[60px] pt-4 sm:gap-[20px] md:gap-[24px] lg:gap-[32px] lg:pb-[80px]">
            {testimonials.map((card, index) => (
              <div 
                key={card.id}
                data-testimonial-card="true"
                className={`relative flex h-[390px] w-[82vw] min-w-[280px] max-w-[330px] shrink-0 flex-col items-start justify-between rounded-[12px] px-[20px] py-[20px] shadow-sm transition-transform duration-300 ease-out sm:h-[400px] sm:w-[78vw] sm:max-w-[340px] md:h-[410px] md:w-[360px] md:px-[24px] md:py-[24px] lg:h-[418px] lg:w-[430px] lg:px-[32px] ${card.bg}`}
                style={{
                  transform: `translateY(${calculateOffset(index)}px)`,
                  zIndex: card.id
                }}
              >
                <span className="body-b1 relative z-[10] text-left text-[15px] leading-[1.4] text-text-dark sm:text-[16px] sm:leading-[1.45] lg:text-[20px] lg:leading-[29px]">
                  {card.text}
                </span>
                <div className="relative z-[11] flex flex-col items-start self-stretch">
                  <span className={`font-mulish subheading-h2 leading-[1.2] ${card.nameColor} relative text-left z-[12]`}>
                    {card.name}
                  </span>
                  <span className="font-mulish body-b2 leading-[1.2] text-text-gray relative text-left z-[13]">
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
