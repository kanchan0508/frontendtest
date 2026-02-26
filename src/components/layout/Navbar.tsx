import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";
  const isSignUpPage = location.pathname === "/signup";

  const getAuthButtonProps = () => {
    if (isSignUpPage) return { label: "Log In", href: "/login" };
    if (isLoginPage) return { label: "Sign Up", href: "/signup" };
    return { label: "Log In", href: "/login" };
  };

  const { label, href } = getAuthButtonProps();

  const navItems = [
    { label: "For Businesses", href: "#" },
    { label: "For Providers", href: "#" },
    { label: "Resources", href: "#" },
    { label: "About Us", href: "#" },
  ];

  return (
    <div className="w-full bg-white relative z-[435]">
      <div className="flex w-full  mx-auto h-[70px] md:h-[80px] py-2 px-4 md:px-10 justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex w-[50px] md:w-[61.927px] h-[52px] md:h-[64px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/6zw7Csmgbv.png)] bg-contain bg-center bg-no-repeat cursor-pointer" />

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-x-4 xl:gap-x-8">
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className={`flex px-3 h-[40px] gap-1 justify-center items-center rounded-[32px] cursor-pointer transition-all ${isDropdownOpen ? "bg-light-purple-bg" : "hover:bg-light-purple-bg"}`}>
              <span className="nav-text text-primary-purple text-sm xl:text-base">For You</span>
              <div className={`w-4 h-4 md:w-5 md:h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/o65tajpwS2.png)] bg-cover transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
            </div>

            {isDropdownOpen && (
              <div className="absolute top-[50px] left-0 w-[500px] xl:w-[585px] bg-white shadow-xl rounded-[24px] flex p-6 xl:p-8 gap-6 xl:gap-8 border border-[#F2F2F2] z-[1000] animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex flex-col gap-5 w-[220px] xl:w-[260px]">
                  <div className="flex px-4 py-2 bg-[#F0F9FA] rounded-[16px] cursor-pointer hover:bg-[#E0F3F5]"><span className="text-sm xl:subheading-md text-[#025B65]">Value Gifts</span></div>
                  <div className="flex px-4 py-2 justify-between items-center cursor-pointer hover:bg-[#F0F9FA] rounded-[16px] transition-colors group"><span className="text-sm xl:subheading-md text-[#025B65]">Module to EAR</span><ChevronRight /></div>
                  <div className="flex px-4 py-2 justify-between items-center cursor-pointer hover:bg-[#F0F9FA] rounded-[16px] transition-colors group"><span className="text-sm xl:subheading-md text-[#025B65]">Softskill Course Bouquet</span><ChevronRight /></div>
                  <div className="flex px-4 py-2 cursor-pointer hover:bg-[#F0F9FA] rounded-[16px] transition-colors group"><span className="text-sm xl:subheading-md text-[#025B65]">Connect to Coach</span></div>
                </div>
                <div className="w-[1px] bg-[#E5E5E5] self-stretch" />
                <div className="flex flex-col gap-5 pt-1">
                  {["Affirmation Cards", "Wellness Gauge", "Psychometric Assessment"].map(item => (
                    <div key={item} className="px-4 py-1 cursor-pointer hover:text-primary-purple transition-colors"><span className="text-sm xl:subheading-md text-[#025B65]">{item}</span></div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navItems.map((item) => (
            <div key={item.label} className="px-3 h-[40px] flex justify-center items-center rounded-[32px] cursor-pointer hover:bg-light-purple-bg transition-colors">
              <span className="nav-text text-primary-purple text-sm xl:text-base whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-x-2 xl:gap-x-4">
          <Link to={href} className="px-4 xl:px-6 h-[40px] xl:h-[48px] flex justify-center items-center rounded-[12px] hover:bg-light-purple-bg transition-colors">
            <span className="nav-text text-primary-purple text-sm xl:text-base">{label}</span>
          </Link>
          <Link to="/signup" className="px-5 xl:px-8 h-[40px] xl:h-[48px] flex justify-center items-center bg-primary-purple rounded-[12px] hover:bg-secondary-purple shadow-sm transition-all">
            <span className="text-xs xl:btn-text-lg text-white font-bold whitespace-nowrap">Try For Free</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-primary-purple focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[2000]">
          <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 w-[280px] bg-white shadow-2xl flex flex-col p-6 animate-in slide-in-from-right duration-300">
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-primary-purple"><HiX size={32} /></button>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Navigation</span>
                <div className="flex flex-col gap-2">
                  <div className="p-3 bg-light-purple-bg rounded-xl text-primary-purple font-bold">For You</div>
                  {navItems.map(item => (
                    <div key={item.label} className="p-3 hover:bg-gray-50 rounded-xl transition-colors text-text-gray font-medium">{item.label}</div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Account</span>
                <div className="flex flex-col gap-3">
                  <Link to={href} className="w-full h-12 flex items-center justify-center rounded-xl border-2 border-primary-purple text-primary-purple font-bold" onClick={() => setIsMobileMenuOpen(false)}>{label}</Link>
                  <Link to="/signup" className="w-full h-12 flex items-center justify-center rounded-xl bg-primary-purple text-white font-bold shadow-lg" onClick={() => setIsMobileMenuOpen(false)}>Try For Free</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
