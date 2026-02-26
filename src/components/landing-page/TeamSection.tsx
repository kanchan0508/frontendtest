import React from "react";

const teamMembers = [
  {
    name: "Garry Witting",
    role: "Managing Director",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/Lh8Tz1QQaB.png",
    bgColor: "#fce4c4",
    nameColor: "#6060b4",
  },
  {
    name: "Blanca Hoppe-King",
    role: "Career Coach",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/LDb4Lcto5Y.png",
    bgColor: "#dbeafe",
    nameColor: "#6060b4",
  },
  {
    name: "Earl Rempel",
    role: "ACC Coach",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/A6HSfrwauO.png",
    bgColor: "#e0eed5",
    nameColor: "#6060b4",
  },
  {
    name: "Earl Rempel",
    role: "ACC Coach",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/A6HSfrwauO.png",
    bgColor: "#e0eed5",
    nameColor: "#6060b4",
  },
  {
    name: "Earl Rempel",
    role: "ACC Coach",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/A6HSfrwauO.png",
    bgColor: "#e0eed5",
    nameColor: "#6060b4",
  },
  {
    name: "Esther Little",
    role: "ACC Coach",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/Y4OeVBBWr7.png",
    bgColor: "#f3f0f5",
    nameColor: "#6060b4",
  },
  {
    name: "Garry Witting",
    role: "Managing Director",
    image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/Lh8Tz1QQaB.png",
    bgColor: "#fce4c4",
    nameColor: "#6060b4",
  },
];

export default function TeamSection() {
  return (
    <section className="flex w-full justify-center bg-transparent py-[50px] md:py-[60px] lg:py-[70px]">
      <div className="relative flex w-full max-w-[1520px] flex-col items-center gap-[32px] px-4 md:gap-[40px] md:px-[20px] lg:gap-[48px] lg:px-[40px] 2xl:max-w-none 2xl:px-[20px] min-[1920px]:px-[24px]">
        {/* Header Section */}
        <div className="relative z-[1] flex flex-col items-center gap-[8px] self-stretch">
          <div className="w-full text-center leading-[1.2] text-[#1a1a1a]">
            <span className="heading-h2-medium text-[34px] md:text-[42px] lg:text-[48px]">
              Meet Our{" "}
            </span>
            <span className="heading-h2-black gradient-text-purple relative inline-block text-[34px] md:text-[42px] lg:text-[48px]">
              Team
              <div className="absolute -bottom-[4px] left-0 h-[16px] w-[112px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/FHoXr8FVco.png)] bg-contain bg-no-repeat opacity-80 md:w-[150px] lg:w-[191px]" />
            </span>
          </div>
          <p className="subheading-h1 z-[2] max-w-[1120px] text-center text-[16px] leading-[1.25] text-[#4a4a4a] md:text-[22px] lg:text-[28px]">
            Work with certified coaches who support your emotional and personal development.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="scrollbar-hide relative z-[4] flex w-full snap-x snap-mandatory gap-[10px] overflow-x-auto pb-2 md:hidden">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative flex w-[182px] shrink-0 snap-start flex-col gap-[10px] rounded-[16px] p-2"
              style={{ backgroundColor: member.bgColor }}
            >
              <div className="relative h-[156px] w-full overflow-hidden rounded-[14px] bg-white/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/Lh8Tz1QQaB.png";
                  }}
                />
              </div>
              <div className="flex flex-col items-start gap-[3px] px-1 pb-2">
                <span
                  className="font-arima text-[17px] font-bold leading-[1.05] text-left"
                  style={{ color: member.nameColor || "#000" }}
                >
                  {member.name}
                </span>
                <span className="font-mulish text-[18px] leading-[1.1] text-[#4a4a4a] text-left">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet/Laptop/XL: Scrollable row (no wrap) */}
        <div className="scrollbar-hide relative z-[4] hidden w-full snap-x snap-mandatory gap-[16px] overflow-x-auto pb-2 md:flex lg:gap-[20px] 2xl:gap-[20px]">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative flex shrink-0 snap-start flex-col gap-[16px] rounded-[24px] p-2 transition-all hover:shadow-lg md:w-[calc((100%-16px)/2)] lg:w-[calc((100%-60px)/4)] 2xl:w-[calc((100%-100px)/6)]"
              style={{ backgroundColor: member.bgColor }}
            >
              <div className="relative h-[220px] w-full overflow-hidden rounded-[20px] bg-white/10 lg:h-[240px] xl:h-[260px] 2xl:h-[280px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/Lh8Tz1QQaB.png";
                  }}
                />
              </div>

              <div className="flex flex-col items-start gap-[4px] px-2 pb-4">
                <span
                  className="heading-h5-bold leading-[30px] text-left"
                  style={{ color: member.nameColor || "#000" }}
                >
                  {member.name}
                </span>
                <span className="body-b1 leading-[1.2] text-[#4a4a4a] text-left">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
