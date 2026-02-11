import React from "react";

export default function TransformSection() {
  return (
    <div className="flex w-full max-w-[1120px] pt-[41px] pb-[41px] gap-[20px] lg:gap-[84px] justify-between items-center shrink-0 flex-wrap lg:flex-nowrap relative z-[41]">
         {/* Image Section - With decorative vectors */}
         <div className="w-full lg:w-[45%] flex justify-center lg:justify-start pl-8 lg:pl-12 relative z-[40]">
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
      <div className="flex flex-col gap-[48px] items-center lg:items-start shrink-0 flex-nowrap relative z-[36] w-full lg:w-[50%]">
        <div className="flex flex-col gap-[8px] items-center lg:items-start self-stretch shrink-0 flex-nowrap relative z-[37]">
          <div className="w-full self-stretch shrink-0 font-arima text-[32px] lg:text-[48px] font-medium leading-[40px] lg:leading-[78px] relative text-center lg:text-left whitespace-normal z-[146]">
            <span className="font-arima font-bold">
              Transform
            </span>
            <span className="font-arima font-medium text-text-dark">
              {" "}
              Your Self
            </span>
          </div>
          <span className="flex w-full justify-center lg:justify-start items-start self-stretch shrink-0 font-mulish text-[18px] lg:text-[28px] font-light leading-[28px] lg:leading-[35.14px] text-text-gray relative text-center lg:text-left z-[147]">
            Our certified experts are the strength of AKSHAY MINDS, transforming
            lives every day.
          </span>
        </div>
        
        {/* Chips */}
        <div className="flex gap-[12px] items-center justify-center lg:justify-start self-stretch shrink-0 flex-wrap relative z-[148]">
          {[
            "Childhood Trauma", "Careers", "OCD", "Relationships", "Anxiety", "Depression"
          ].map((text) => (
            <div key={text} className="flex h-[44px] px-[20px] gap-[10px] justify-center items-center bg-light-purple-bg rounded-[44px] border border-secondary-purple cursor-pointer hover:bg-secondary-purple hover:text-white transition-all group">
              <span className="font-mulish text-[16px] lg:text-[18px] text-secondary-purple group-hover:text-white">{text}</span>
            </div>
          ))}
          {[
            "Anger Management", "Eating Disorder"
          ].map((text) => (
            <div key={text} className="flex h-[44px] px-[20px] gap-[10px] justify-center items-center bg-chip-purple rounded-[44px] border border-secondary-purple cursor-pointer hover:bg-secondary-purple hover:text-white transition-all group">
              <span className="font-mulish text-[16px] lg:text-[18px] text-secondary-purple group-hover:text-white">{text}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex w-[154px] h-[48px] justify-center items-center shrink-0 flex-nowrap rounded-[12px] bg-primary-purple text-white relative overflow-hidden z-[171] cursor-pointer shadow-md hover:bg-secondary-purple transition-colors">
          <span className="font-arima text-[16px] font-bold">
            Get Started
          </span>
        </div>
      </div>
    </div>
  );
}
