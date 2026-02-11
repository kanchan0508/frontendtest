import React from "react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing-page/Hero";
import HowItWorks from "@/components/landing-page/HowItWorks";
import TopicsSection from "@/components/landing-page/TopicsSection";
import TransformSection from "@/components/landing-page/TransformSection";
import StatsSection from "@/components/landing-page/StatsSection";
import ComparisonSection from "@/components/landing-page/ComparisonSection";
import TestimonialsSection from "@/components/landing-page/TestimonialsSection";
import FAQSection from "@/components/landing-page/FAQSection";
import Footer from "@/components/landing-page/Footer";

export default function Main() {
  return (
    <div className="main-container w-full max-w-[1440px] bg-[#f7f9fc] relative overflow-x-hidden mx-auto my-0">
      <div className="flex w-full max-w-[1440px] pt-0 pr-0 pb-[10px] pl-0 flex-col gap-[10px] justify-end items-center flex-nowrap bg-white relative z-[431] mt-0 mr-0 mb-0 ml-0">
        <TopBar />
        <Navbar />
      </div>
      <div className="flex w-full max-w-[1440px] pt-[50px] flex-col gap-[80px] items-center flex-nowrap relative z-[5]">
        <Hero />
        <HowItWorks />
        <TopicsSection />
        <TransformSection />
        <StatsSection />
        <ComparisonSection />
        <TestimonialsSection />
        <FAQSection />
        <Footer />
      </div>
      <div className="w-[47.08%] h-[678px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/mNxVmbpwVU.png)] bg-cover bg-no-repeat absolute top-[860px] left-[78.61%] z-[4]" />
      <div className="w-[47.08%] h-[678px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/mNxVmbpwVU.png)] bg-cover bg-no-repeat absolute top-[860px] left-[78.61%] z-[4]" />
      <div className="w-[7.71%] h-[111px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/Q6B9Pr9kNV.png)] bg-cover bg-no-repeat absolute top-[2505px] left-[-0.28%] z-[2]" />
      <div className="w-[78.89%] h-[1136px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/y7F3MrjRGO.png)] bg-cover bg-no-repeat absolute top-[3197px] left-[-45.14%] z-[3]" />
    </div>
  );
}
