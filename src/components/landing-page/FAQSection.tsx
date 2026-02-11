"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "Do I need any prior wellness or meditation experience?",
    answer: "No prior experience is necessary. AMPL is designed to guide you through every step, whether you're a beginner or have years of experience. We provide intuitive tools and expert support to help you evolve at your own pace.",
    id: 1,
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/j17YELEJnT.png"
  },
  {
    question: "Is AMPL free or paid?",
    answer: "AMPL offers both free and premium versions. The free version includes basic tracking and community support, while the premium version provides personalized expert guidance, advanced health analytics, and exclusive content.",
    id: 2,
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/W6f1qvbrTj.png"
  },
  {
    question: "How does the app personalize my wellness plan?",
    answer: "Our AI-driven platform analyzes your health data, specified goals, and ongoing feedback. It then creates a tailored wellness journey that adapts in real-time to your progress and changing needs.",
    id: 3,
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/iMNwO6uVoW.png"
  },
  {
    question: "Can I track my progress?",
    answer: "Yes, AMPL provides a comprehensive dashboard where you can track your health parameters, milestones reached, and overall wellness evolution. You can see your history and trends at any time.",
    id: 4,
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/CwK3mJ2XuC.png"
  },
  {
    question: "Is my data secure and private?",
    answer: "We take your privacy extremely seriously. Your personal health data is encrypted and stored securely. We adhere to strict data protection protocols and never share your information without your consent.",
    id: 5,
    icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/1VmwYmT7si.png"
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="flex pt-[100px] pr-0 pb-[100px] pl-0 flex-col gap-[10px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[311]">
      <div className="flex w-full max-w-[1120px] pt-[24px] pr-0 pb-[24px] pl-0 gap-[36px] items-start lg:items-center shrink-0 flex-wrap lg:flex-nowrap bg-white rounded-[32px] relative z-[312] min-h-[580px]">
        <div className="flex w-full lg:w-1/2 justify-center items-center shrink-0 flex-nowrap relative z-[313]">
          <div className="w-[449.323px] h-[466.999px] shrink-0 relative z-[314]">
            <div className="w-full h-full absolute top-0 left-0 z-[323]">
              <div className="w-[31.54%] h-[26.64%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/YC7jn9bNrT.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[65.66%] z-[322]" />
              <div className="w-[98.39%] h-[83.77%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/URA6wzyi27.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[0.21%] left-[0.77%] z-[315]" />
              <div className="w-full h-[71.54%] absolute top-[3.85%] left-0 z-[316]">
                <div className="w-full h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/9MJNPJ5Fq1.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 z-[317]" />
              </div>
              <div className="w-[6.11%] h-[10.41%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/xnPT6DeVGv.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[5.8%] left-[81.05%] z-[323]" />
              <div className="w-[67.4%] h-[85.85%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/tBV3ntTQoL.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[14.15%] left-[16.3%] z-[320]" />
              <div className="w-[16.19%] h-[29.69%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/ba76ziLiv0.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[62.53%] left-[81.89%] z-[321]" />
            </div>
            <div className="w-[96.18%] h-[0.23%] absolute top-[91.99%] left-[1.91%] z-[318]">
              <div className="w-[432.159px] h-[1.067px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/tc9dDtdhy2.png)] bg-[length:100%_100%] bg-no-repeat relative z-[319] mt-0 mr-0 mb-0 ml-0" />
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 flex-col gap-[16px] items-start shrink-0 flex-nowrap bg-white rounded-[16px] px-8 lg:px-4 relative z-[324]">
          <span className="h-[78px] self-stretch shrink-0 basis-auto font-arima text-[48px] font-medium leading-[78px] text-text-dark relative text-left whitespace-nowrap z-[325]">
            FAQ&apos;s
          </span>
          <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[326]">
            {faqData.map((item) => (
              <div 
                key={item.id}
                onClick={() => toggleFAQ(item.id)}
                className={`flex flex-col items-start self-stretch shrink-0 transition-all duration-300 cursor-pointer rounded-[16px] border-solid border-[0.67px] ${openId === item.id ? 'border-primary-purple bg-[#fbf8ff]' : 'border-border-light bg-white'} relative overflow-hidden z-[327]`}
              >
                <div className="flex w-full pt-[20px] pr-[24px] pb-[20px] pl-[24px] justify-between items-center shrink-0 flex-nowrap relative z-[328]">
                  <span className={`grow font-mulish text-[16px] font-medium leading-[24px] ${openId === item.id ? 'text-text-dark' : 'text-text-gray'} relative text-left z-[330]`}>
                    {item.question}
                  </span>
                  <div 
                    className={`w-[20px] h-[20px] shrink-0 bg-cover bg-no-repeat relative transition-transform duration-300 ${openId === item.id ? 'rotate-180' : ''} z-[331]`} 
                    style={{ backgroundImage: `url(${item.icon})` }}
                  />
                </div>
                <div 
                  className={`self-stretch overflow-hidden transition-all duration-300 ease-in-out ${openId === item.id ? 'max-h-[200px] opacity-100 pb-[24px] px-[24px]' : 'max-h-0 opacity-0 px-[24px]'}`}
                >
                  <span className="font-mulish text-[14px] font-normal leading-[22px] text-text-gray block">
                    {item.answer}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
