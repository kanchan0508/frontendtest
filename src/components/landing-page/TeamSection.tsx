"use client";
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
    <section className="w-full flex justify-center bg-transparent py-[50px]">
      <div className="flex w-full max-w-[1120px] 2xl:max-w-[1440px] px-4 md:px-[20px] lg:px-[40px] 2xl:px-0 flex-col gap-[48px] items-center relative mx-auto">
        {/* Header Section */}
        <div className="flex flex-col gap-[8px] items-center self-stretch relative">
          <div className="w-full heading-h2-medium leading-[1.2] text-center text-[#1a1a1a] z-[1]">
            Meet Our <span className="heading-h2-black gradient-text-purple">Team</span>
          </div>
          <p className="subheading-h1 leading-[1.25] text-[#4a4a4a] text-center max-w-[1120px] z-[2]">
            Work with certified coaches who support your emotional and personal development.
          </p>
          <div 
            className="w-[191px] h-[18px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/FHoXr8FVco.png)] bg-cover absolute top-[53px] left-1/2 -translate-x-[calc(50%-140px)] z-[3] opacity-80" 
          />
        </div>

        {/* Team Cards - Scrollable Row */}
        <div className="flex w-full gap-[20px] overflow-x-auto pb-6 scrollbar-hide relative z-[4] justify-start flex-nowrap pl-4 md:pl-0">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="flex w-[280px] shrink-0 p-2 flex-col gap-[16px] items-start rounded-[24px] border-none relative transition-all hover:shadow-lg snap-start"
              style={{ backgroundColor: member.bgColor }}
            >
              {/* Image Container */}
              <div className="w-full h-[280px] rounded-[20px] overflow-hidden relative bg-white/10">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/Lh8Tz1QQaB.png";
                  }}
                />
              </div>
              
              {/* Name & Role */}
              <div className="flex flex-col gap-[4px] items-start self-stretch px-2 pb-4">
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
