import React from "react";

export default function TransformSection() {
  const chipRows = [
    ["Childhood Trauma", "Depression", "Anxiety", "Eating Disorder"],
    ["Careers", "Anxiety", "Anger Management", "Anxiety"],
    ["OCD", "Relationships", "Anger Management"],
  ];

  return (
    <div className="relative z-[41] w-full py-[60px] md:py-[80px]">
      <div className="container mx-auto flex w-full max-w-[1120px] flex-col items-center gap-[24px] px-4 sm:px-6 md:flex-row md:items-center md:gap-[44px]">
        {/* Content Section */}
        <div className="order-1 flex w-full flex-col items-center gap-[22px] md:order-2 md:w-[60%] md:items-start md:gap-[32px]">
          <div className="flex flex-col items-center gap-[6px] self-stretch md:items-start md:gap-[8px]">
            <div className="w-full text-center md:text-left">
              <span className="heading-h2-bold gradient-text-purple relative inline-block text-[44px] leading-[1.12] md:text-[48px]">
                Transform
                <img
                  src="/vector-4.svg"
                  alt=""
                  className="pointer-events-none absolute -bottom-[4px] left-0 w-full md:-bottom-[6px]"
                />
              </span>
              <span className="heading-h2-medium text-text-dark text-[44px] leading-[1.12] md:text-[48px]">
                {" "}Your Self
              </span>
            </div>
            <span className="text-text-gray text-center font-mulish text-[22px] font-light leading-[1.32] md:text-left md:text-[36px] md:leading-[1.2]">
              Our certified experts are the strength of AKSHAY MINDS,
              transforming lives every day.
            </span>
          </div>

          <div className="flex w-full flex-col items-center gap-[10px] md:items-start">
            {chipRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-wrap items-center justify-center gap-[10px] md:justify-start"
              >
                {row.map((text, i) => (
                  <div
                    key={`${text}-${rowIndex}-${i}`}
                    className="group flex h-[36px] items-center justify-center gap-[8px] rounded-[44px] border border-secondary-purple bg-light-purple-bg px-[16px] transition-all hover:bg-secondary-purple hover:text-white"
                  >
                    <span className="label-text text-secondary-purple group-hover:text-white">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="hidden h-[48px] w-[154px] cursor-pointer items-center justify-center rounded-[12px] bg-primary-purple text-white shadow-md transition-colors hover:bg-secondary-purple md:flex">
            <span className="btn-text-lg">Get Started</span>
          </div>
        </div>

        {/* Image Section */}
        <div className="order-2 flex w-full flex-col items-center md:order-1 md:w-[40%] md:items-start">
          <div className="w-[300px] h-[301px] shrink-0 relative z-[130] sm:w-[340px] sm:h-[341px] md:w-[354px] md:h-[355px]">
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

          <div className="mt-[8px] w-full max-w-[390px] border-b border-[#8f949e] md:hidden" />
        </div>

        {/* Mobile Button */}
        <div className="order-3 flex h-[48px] w-[154px] cursor-pointer items-center justify-center rounded-[12px] bg-primary-purple text-white shadow-md transition-colors hover:bg-secondary-purple md:hidden">
          <span className="btn-text-lg">Get Started</span>
        </div>
      </div>
    </div>
  );
}
