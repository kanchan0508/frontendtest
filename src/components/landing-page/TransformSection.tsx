import React from "react";

export default function TransformSection() {
  const chipRows = [
    ["Childhood Trauma", "Depression", "Anxiety", "Eating Disorder"],
    ["Careers", "Anxiety", "Anger Management", "Anxiety"],
    ["OCD", "Relationships", "Anger Management"],
  ];

  return (
    <div className="w-full py-[80px] relative z-[41]">
      <div className="flex w-full max-w-[1120px] gap-[20px] lg:gap-[40px] justify-center items-center shrink-0 flex-wrap lg:flex-nowrap mx-auto px-4">
      {/* Image Section */}
      <div className="w-full lg:w-[40%] flex justify-center lg:justify-start relative z-[40]">
        <div className="w-[354px] h-[355px] shrink-0 relative z-[130]">
          <div className="w-full h-[39.89%] absolute top-0 left-0 z-[132]">
            <div className="w-[46.73px] h-[12.41px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/71TSdAWWks.png)] bg-[length:100%_100%] bg-no-repeat relative z-[135] mt-[-0.5px] mr-0 mb-0 ml-[93.809px]" />
            <div className="w-[68.06px] h-[17.684px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/FEyBPTzvGX.png)] bg-[length:100%_100%] bg-no-repeat relative z-[133] mt-[38.636px] mr-0 mb-0 ml-[286.44px]" />
            <div className="w-[59.219px] h-[15.502px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/iXOjxvwm42.png)] bg-[length:100%_100%] bg-no-repeat relative z-[134] mt-[58.378px] mr-0 mb-0 ml-[-0.5px]" />
          </div>
          <div className="w-[53.27%] h-[39.62%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/sR7CEqXQqM.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[1.44%] left-[9.15%] z-[137]" />
          <div className="w-[45.94%] h-[21.46%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/26Xr8dXZs2.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[4.54%] left-[14.21%] z-[136]" />
          <div className="w-[43.66%] h-[37.38%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/t2spYA9mKQ.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[4.55%] left-[17.6%] z-[138]" />
          <div className="w-[98.14%] h-[87.13%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/JGJQAHAb3f.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[8.05%] left-[0.7%] z-[131]" />
          <div className="w-[68.54%] h-[88.64%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/Xq4q6k0thZ.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[11.36%] left-[19.51%] z-[139]" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-[40px] items-center lg:items-start shrink-0 flex-nowrap relative z-[36] w-full lg:w-[55%]">
        {/* Heading + Subheading */}
        <div className="flex flex-col gap-[8px] items-center lg:items-start self-stretch shrink-0 flex-nowrap relative z-[37]">
          <div className="w-full self-stretch shrink-0 relative text-center lg:text-left z-[146]">
            <span className="heading-h2-bold gradient-text-purple relative inline-block">
              Transform
              <img src="/vector-4.svg" alt="" className="absolute -bottom-[6px] left-0 w-full pointer-events-none" />
            </span>
            <span className="heading-h2-medium text-text-dark">
              {" "}Your Self
            </span>
          </div>
          <span className="subheading-h1 text-text-gray relative text-center lg:text-left z-[147]">
            Our certified experts are the strength of AKSHAY MINDS,
            transforming lives every day.
          </span>
        </div>

        {/* Chips - 3 rows */}
        <div className="flex flex-col gap-[10px] items-center lg:items-start self-stretch shrink-0 relative z-[148]">
          {chipRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-[10px] items-center justify-center lg:justify-start flex-wrap">
              {row.map((text, i) => (
                <div
                  key={`${text}-${rowIndex}-${i}`}
                  className="flex h-[36px] px-[16px] gap-[8px] justify-center items-center bg-light-purple-bg rounded-[44px] border border-secondary-purple cursor-pointer hover:bg-secondary-purple hover:text-white transition-all group"
                >
                  <span className="label-text text-secondary-purple group-hover:text-white">{text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex w-[154px] h-[48px] justify-center items-center shrink-0 flex-nowrap rounded-[12px] bg-primary-purple text-white relative overflow-hidden z-[171] cursor-pointer shadow-md hover:bg-secondary-purple transition-colors mx-auto lg:mx-0">
          <span className="btn-text-lg">Get Started</span>
        </div>
      </div>
      </div>
    </div>
  );
}
