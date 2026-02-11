"use client";
import React, { useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isLoginPage = pathname === "/login";
  const isSignUpPage = pathname === "/signup";

  const getAuthButtonProps = () => {
    if (isSignUpPage) return { label: "Log In", href: "/login" };
    if (isLoginPage) return { label: "Sign Up", href: "/signup" };
    return { label: "Log In", href: "/login" };
  };

  const { label, href } = getAuthButtonProps();

  return (
    <div className="flex w-full max-w-[1120px] mx-auto h-[64px] pt-0 pr-0 pb-0 pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[435]">
      {/* Logo */}
      <Link href="/" className="flex w-[61.927px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/6zw7Csmgbv.png)] bg-contain bg-no-repeat relative cursor-pointer z-[436]" />

      {/* Nav Links */}
      <div className="flex w-[681px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[437]">
        {/* For You Dropdown Trigger */}
        <div
          className="relative h-full flex items-center"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <div
            className={`flex w-[140px] h-[48px] pt-0 pr-[24px] pb-0 pl-[32px] gap-[4px] justify-center items-center shrink-0 flex-nowrap rounded-[32px] relative overflow-visible cursor-pointer transition-all z-[438] ${
              isDropdownOpen ? "bg-light-purple-bg" : "hover:bg-light-purple-bg"
            }`}
          >
            <span className="flex w-[56px] h-[11px] justify-center items-start shrink-0 basis-auto font-arima text-[16px] font-bold leading-[11px] text-primary-purple relative text-center whitespace-nowrap z-[439]">
              For You
            </span>
            <div
              className={`w-[24px] h-[24px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/o65tajpwS2.png)] bg-cover bg-no-repeat transition-transform duration-300 z-[440] ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
            {/* Active Underline */}
            {isDropdownOpen && (
              <div className="absolute bottom-[-8px] left-[10%] w-[80%] h-[2px] bg-primary-purple rounded-full z-[454]" />
            )}
          </div>

          {/* Combined Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-[56px] left-0 w-[585px] bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.1)] rounded-[24px] flex p-8 gap-8 border border-[#F2F2F2] z-[1000] animate-in fade-in slide-in-from-top-2 duration-300">
              {/* Left Column */}
              <div className="flex flex-col gap-6 w-[260px]">
                <div className="flex px-4 py-3 bg-[#F0F9FA] rounded-[16px] cursor-pointer hover:bg-[#E0F3F5] transition-colors group">
                  <span className="font-mulish text-[16px] font-medium text-[#025B65]">Value Gifts</span>
                </div>
                <div className="flex px-4 py-3 justify-between items-center cursor-pointer hover:bg-[#F0F9FA] rounded-[16px] transition-colors group">
                  <span className="font-mulish text-[16px] font-medium text-[#025B65]">Module to EAR</span>
                  <ChevronRight />
                </div>
                <div className="flex px-4 py-3 justify-between items-center cursor-pointer hover:bg-[#F0F9FA] rounded-[16px] transition-colors group">
                  <span className="font-mulish text-[16px] font-medium text-[#025B65]">Softskill Course Bouquet</span>
                  <ChevronRight />
                </div>
                <div className="flex px-4 py-3 cursor-pointer hover:bg-[#F0F9FA] rounded-[16px] transition-colors group">
                  <span className="font-mulish text-[16px] font-medium text-[#025B65]">Connect to Coach</span>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="w-[1px] bg-[#E5E5E5] self-stretch" />

              {/* Right Column */}
              <div className="flex flex-col gap-6 pt-2">
                <div className="flex px-4 py-2 cursor-pointer hover:text-primary-purple transition-colors">
                  <span className="font-mulish text-[16px] font-medium text-[#025B65] hover:text-[#025B65]/80">Affirmation Cards</span>
                </div>
                <div className="flex px-4 py-2 cursor-pointer hover:text-primary-purple transition-colors">
                  <span className="font-mulish text-[16px] font-medium text-[#025B65] hover:text-[#025B65]/80">Wellness Gauge</span>
                </div>
                <div className="flex px-4 py-2 cursor-pointer hover:text-primary-purple transition-colors">
                  <span className="font-mulish text-[16px] font-medium text-[#025B65] hover:text-[#025B65]/80">Psychometric Assessment</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex w-[156px] h-[48px] pt-0 pr-[24px] pb-0 pl-[24px] gap-[4px] justify-center items-center shrink-0 flex-nowrap rounded-[32px] relative overflow-hidden cursor-pointer hover:bg-light-purple-bg transition-colors z-[441]">
          <span className="flex w-[108px] h-[11px] justify-center items-start shrink-0 basis-auto font-arima text-[16px] font-bold leading-[11px] text-primary-purple relative text-center whitespace-nowrap z-[442]">
            For Businesses{" "}
          </span>
        </div>
        <div className="flex w-[147px] h-[48px] pt-0 pr-[24px] pb-0 pl-[24px] gap-[4px] justify-center items-center shrink-0 flex-nowrap rounded-[32px] relative overflow-hidden cursor-pointer hover:bg-light-purple-bg transition-colors z-[443]">
          <span className="flex w-[99px] h-[11px] justify-center items-start shrink-0 basis-auto font-arima text-[16px] font-bold leading-[11px] text-primary-purple relative text-center whitespace-nowrap z-[444]">
            For Providers
          </span>
        </div>
        <div className="flex w-[124px] h-[48px] pt-0 pr-[24px] pb-0 pl-[24px] gap-[4px] justify-center items-center shrink-0 flex-nowrap rounded-[32px] relative overflow-hidden cursor-pointer hover:bg-light-purple-bg transition-colors z-[445]">
          <span className="flex w-[76px] h-[11px] justify-center items-start shrink-0 basis-auto font-arima text-[16px] font-bold leading-[11px] text-primary-purple relative text-center whitespace-nowrap z-[446]">
            Resources
          </span>
        </div>
        <div className="flex w-[112px] h-[48px] pt-0 pr-[24px] pb-0 pl-[24px] gap-[4px] justify-center items-center shrink-0 flex-nowrap rounded-[32px] relative overflow-hidden cursor-pointer hover:bg-light-purple-bg transition-colors z-[447]">
          <span className="flex w-[64px] h-[11px] justify-center items-start shrink-0 basis-auto font-arima text-[16px] font-bold leading-[11px] text-primary-purple relative text-center whitespace-nowrap z-[448]">
            About Us
          </span>
        </div>
      </div>

      {/* Auth Buttons */}
      <div className="flex w-[261px] justify-end items-center shrink-0 flex-nowrap relative z-[449]">
        <Link
          href={href}
          className="flex w-[107px] h-[48px] pt-0 pr-[32px] pb-0 pl-[32px] gap-[4px] justify-center items-center shrink-0 flex-nowrap rounded-[12px] relative overflow-hidden cursor-pointer hover:bg-light-purple-bg transition-colors z-[450]"
        >
          <span className="flex w-auto h-[11px] justify-center items-start shrink-0 basis-auto font-arima text-[16px] font-bold leading-[11px] text-primary-purple relative text-center whitespace-nowrap z-[451]">
            {label}
          </span>
        </Link>
        <Link
          href="/signup"
          className="flex w-[154px] h-[48px] pt-0 pr-[32px] pb-0 pl-[32px] gap-[4px] justify-center items-center shrink-0 flex-nowrap bg-primary-purple rounded-[12px] relative overflow-hidden cursor-pointer hover:bg-secondary-purple transition-colors z-[452]"
        >
          <span className="flex w-[89px] h-[11px] justify-center items-start shrink-0 basis-auto font-arima text-[16px] font-bold leading-[11px] text-white relative text-center whitespace-nowrap z-[453]">
            Try For Free
          </span>
        </Link>
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#025B65]"
    >
      <path
        d="M6 12L10 8L6 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
