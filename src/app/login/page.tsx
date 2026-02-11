"use client";
import React from "react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/landing-page/Footer";
import LoginForm from "@/components/auth/LoginForm";

export default function Login() {
  return (
    <div className="main-container w-full max-w-[1440px] bg-[#fbfcfe] relative overflow-x-hidden mx-auto my-0">
      {/* Header Section */}
      <div className="flex w-full pt-0 pr-0 pb-[10px] pl-0 flex-col gap-[10px] justify-end items-center flex-nowrap bg-white relative z-[100] mt-0 mr-0 mb-0 ml-0 border-b border-[#F2F2F2]">
        <TopBar />
        <Navbar />
      </div>

      <div className="min-h-[800px] flex items-center justify-center relative">
        {/* Decorative Background Elements from User code */}
        <div className="w-[101.253px] h-[101.253px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/QQDwXbM6Jv.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[50px] right-[15%] z-[10]" />
        
        <div className="w-[100%] h-[100%] absolute inset-0 pointer-events-none overflow-hidden">
           <div className="w-[102.07%] h-[90.03%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/ZeYJVYC4TV.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[21.4%] left-0 z-[1] opacity-50" />
           <div className="w-[58.38%] h-[44.53%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/Zu9rbUGytO.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[55.47%] left-[57.5%] z-[2] opacity-50" />
           <div className="w-[58.38%] h-[44.53%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/HwANg5uY9w.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[56.84%] left-[0.35%] z-[3] opacity-50" />
        </div>

        {/* Login Form Container */}
        <div className="z-50 py-20 px-4">
          <LoginForm mode="login" />
        </div>
      </div>

      <Footer showCTA={false} />
    </div>
  );
}
