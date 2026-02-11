"use client";
import React from "react";
import Link from "next/link";

export default function Main() {
  return (
    <div className="main-container w-full min-h-screen bg-[#f7f9fc] relative flex overflow-x-hidden">
      {/* Sidebar - Made sticky and fixed width */}
      <aside className="w-[287px] h-screen sticky top-0 flex flex-col gap-[98px] items-start bg-white z-[20] shrink-0 border-r border-[#eaecf0]">
        <div className="flex justify-center items-center w-full pt-6 pb-2">
          <Link href="/">
            <div className="w-[61.927px] h-[64px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/ogLNSxSDnT.png)] bg-contain bg-no-repeat cursor-pointer" />
          </Link>
        </div>
        
        <nav className="flex flex-col items-start w-full pr-4 flex-1">
          <div className="flex w-[271px] h-[48px] px-10 gap-3 items-center bg-[#b95af9] rounded-tr-[36px] rounded-br-[36px] relative cursor-pointer">
            <div className="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/aW22g7a3fG.png)] bg-cover bg-no-repeat filter brightness-0 invert" />
            <span className="font-mulish text-base font-bold text-white">My Dashboard</span>
          </div>
          
          {[
            { label: "Value Gifts", icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/Z82rsN47nT.png" },
            { label: "Module to EAR", icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/TaGCB8kV9x.png" },
            { label: "Connect to Coach", icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/afAv9MExhT.png" },
            { label: "Courses", icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/GpaTEyHnhM.png" },
            { label: "Progress", icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/QyCwhMxfMR.png" },
            { label: "Reports", icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/ZHsruG4Nw2.png" }
          ].map((item, i) => (
            <div key={i} className="flex w-[271px] h-[48px] px-10 gap-3 items-center hover:bg-gray-50 rounded-tr-[36px] rounded-br-[36px] relative cursor-pointer group">
              <div 
                className="w-6 h-6 bg-cover bg-no-repeat opacity-70 group-hover:opacity-100 transition-opacity" 
                style={{ backgroundImage: `url(${item.icon})` }}
              />
              <span className="font-mulish text-base font-medium text-[#4a4a4a] group-hover:text-primary-purple transition-colors">{item.label}</span>
            </div>
          ))}
        </nav>

        {/* Upgrade Card */}
        <div className="w-full px-4 pb-10">
          <div className="bg-[#8e5593] rounded-[20px] p-6 flex flex-col gap-6 relative overflow-hidden group">
            <div className="relative z-10 flex flex-col gap-4">
              <h3 className="font-mulish text-xl font-semibold text-white leading-tight">
                Upgrade Your Plan to Get Access More Features.
              </h3>
              <p className="font-mulish text-sm font-light text-white opacity-90">
                Get more with our Premium Plans!
              </p>
              <button className="w-full bg-white h-12 rounded-xl text-[#ac46ff] font-arima font-bold shadow-inner-white hover:bg-white/95 transition-all">
                Next
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Container - Scrollable Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#f7f9fc]">
        {/* Header - Fixed Height, Sticky */}
        <header className="h-[100px] flex items-center justify-between px-10 bg-white border-b border-[#eaecf0] sticky top-0 z-[19]">
          <div className="flex flex-col">
            <h2 className="font-mulish text-2xl font-bold text-[#101727]">Dashboard</h2>
            <p className="font-mulish text-base font-normal text-[#495565]">Sunday, 05 March 2026</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-9 h-9 bg-gray-50 rounded-lg flex items-center justify-center relative cursor-pointer">
              <div className="w-2 h-2 bg-[#fb2c36] rounded-full absolute top-1 right-1 border-2 border-white" />
              <div className="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/f0HwjudbGw.png)] bg-contain bg-no-repeat opacity-60" />
            </div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-11 h-11 border-2 border-[#eaecf0] rounded-full overflow-hidden group-hover:border-primary-purple transition-all">
                <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/avN2HGDrwk.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/wsOntQL8YY.png)] bg-contain bg-no-repeat" />
            </div>
          </div>
        </header>

        {/* Page Content - Center aligned with max width */}
        <div className="flex-1 overflow-y-auto p-10 flex flex-col items-center">
          <div className="w-full max-w-[1050px] flex flex-col gap-12">
            
            {/* Carousel Banner Area */}
            <section className="w-full flex flex-col gap-6 items-center">
              <div className="w-full flex items-center justify-center gap-6">
                
                {/* Banner Wrapper */}
                <div className="relative flex-1 flex items-center justify-center gap-4">
                  {/* Left Segment */}
                  <div className="w-8 h-[220px] bg-[#dce4ff] rounded-tr-[24px] rounded-br-[24px] opacity-60 hidden md:block" />
                  
                  {/* Main Active Banner (The Blue one) */}
                  <div className="flex-1 h-[260px] bg-[#5299db] rounded-[20px] relative overflow-hidden group shadow-sm">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/54tneC8ExA.png)] bg-cover bg-no-repeat opacity-30 mix-blend-overlay group-hover:scale-110 transition-transform duration-[3s]" />
                    
                    {/* Character Illustration Layer */}
                    <div className="absolute right-0 top-0 h-full w-[45%] pointer-events-none z-10">
                      <div className="absolute inset-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/3scfe4xDVz.png)] bg-contain bg-right bg-no-repeat opacity-60" />
                      <div className="absolute inset-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/Ra36QyhYOc.png)] bg-contain bg-right bg-no-repeat z-20 group-hover:-translate-y-2 transition-transform h-full" />
                    </div>

                    {/* Content */}
                    <div className="relative z-30 flex flex-col items-center justify-center h-full text-center p-8 gap-6 max-w-[60%] mx-auto">
                      <span className="font-mulish text-base font-normal text-white uppercase tracking-wider">Daily Affirmation</span>
                      <h2 className="font-arima text-2xl font-bold text-white uppercase leading-tight drop-shadow-md">
                        Take a moment to check today’s affirmation
                      </h2>
                      <button className="h-10 px-8 bg-white rounded-xl text-[#407bff] font-mulish font-bold hover:shadow-lg transition-all active:scale-95">
                        View Affirmation
                      </button>
                    </div>

                    {/* Decorative Icons */}
                    <div className="w-[44px] h-[44px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/ekogUugVah.png)] bg-contain bg-no-repeat absolute top-6 right-10 opacity-60 animate-bounce" />
                  </div>

                  {/* Right Segment */}
                  <div className="w-8 h-[220px] bg-[#899868] rounded-tl-[24px] rounded-bl-[24px] opacity-60 hidden md:block" />
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-[#e4e8f0]" />
                <div className="w-10 h-3 rounded-full bg-[#b95af9]" />
                <div className="w-3 h-3 rounded-full bg-[#d4e4f4]" />
              </div>
            </section>

            {/* Curated for You */}
            <section className="flex flex-col gap-6 w-full">
              <div className="flex justify-between items-center">
                <h3 className="font-arima text-2xl font-black text-[#1a1a1a]">Curated for You</h3>
                <button className="font-mulish text-lg font-bold text-[#b95af9] hover:underline">See all</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { 
                    title: "Deep breathing exercises", 
                    time: "10 min", 
                    badge: "Beginner", 
                    bg: "#d8e4ff", 
                    accent: "#3a6fe6", 
                    img: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/Rv83iLX9FH.png" 
                  },
                  { 
                    title: "Chakra Meditation", 
                    time: "10 min", 
                    badge: "Intermediate", 
                    bg: "#bddce6", 
                    accent: "#025b65", 
                    img: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/4jOV7WXjps.png" 
                  },
                  { 
                    title: "Sound Bath Meditation", 
                    time: "10 min", 
                    badge: "Beginner", 
                    bg: "#ffebc9", 
                    accent: "#ffa500", 
                    img: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/WLdDEGGFqz.png",
                    complex: true 
                  }
                ].map((card, idx) => (
                  <div key={idx} className="h-[282px] rounded-[12px] relative overflow-hidden p-6 flex flex-col transition-all hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]" style={{ backgroundColor: card.bg }}>
                    {/* Badge */}
                    <div className="absolute top-0 right-0 h-11 px-6 bg-[rgba(0,0,0,0.1)] flex items-center rounded-bl-[16px] text-white font-mulish font-bold text-sm z-20" style={{ backgroundColor: card.accent }}>
                      {card.badge}
                    </div>

                    <div className="flex flex-col gap-2 relative z-10">
                      <h4 className="font-mulish text-xl font-bold leading-tight max-w-[160px]" style={{ color: card.accent }}>{card.title}</h4>
                      <span className="font-mulish text-lg font-semibold opacity-80" style={{ color: card.accent }}>{card.time}</span>
                    </div>

                    <div className="mt-auto relative z-20">
                      <button className="h-10 px-6 bg-white rounded-full font-mulish font-bold text-xs shadow-md hover:shadow-lg transition-all" style={{ color: card.accent }}>
                        Get Started
                      </button>
                    </div>

                    {/* Illustration */}
                    <div className="absolute bottom-0 right-0 w-[60%] h-[70%] z-[5]">
                       {!card.complex ? (
                         <div className="w-full h-full bg-contain bg-bottom bg-no-repeat group-hover:scale-110 transition-transform" style={{ backgroundImage: `url(${card.img})` }} />
                       ) : (
                         <div className="w-full h-full relative group-hover:scale-105 transition-transform">
                            <div className="absolute inset-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/WLdDEGGFqz.png)] bg-contain bg-bottom bg-no-repeat opacity-80" />
                            <div className="absolute inset-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/b0VBmdE2ZX.png)] bg-contain bg-bottom bg-no-repeat" />
                         </div>
                       )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recommendations Section */}
            <section className="flex flex-col gap-6 w-full mb-20">
              <div className="flex justify-between items-center">
                <h3 className="font-arima text-2xl font-black text-[#1a1a1a]">Recommendations</h3>
                <button className="font-mulish text-lg font-bold text-[#b95af9] hover:underline">See all</button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Stress Card */}
                <div className="h-[256px] rounded-[20px] bg-[#add3f7] relative overflow-hidden group p-8 flex shadow-sm hover:shadow-xl transition-all">
                  <div className="relative z-30 flex flex-col gap-3 flex-1 h-full">
                    <span className="w-fit h-[18px] px-3 bg-[#5994fe] rounded-[8px] text-[9px] text-white flex items-center font-inter font-bold uppercase tracking-wider">Soft Skills</span>
                    <h4 className="font-arima text-[32px] font-bold text-[#1a1a1a]">Stress</h4>
                    <p className="font-mulish text-sm text-[#4a4a4a] max-w-[200px] leading-relaxed">
                      Engage with yourself. Reflect, resonate, and discover your real, unique, and awesome self.
                    </p>
                    <button className="w-fit h-11 px-8 rounded-[12px] border-2 border-[#1a1a1a] font-arima font-bold text-[#1a1a1a] hover:bg-black/5 transition-colors mt-auto">
                      Take Test
                    </button>
                  </div>
                  
                  {/* Stacking Vector Layers */}
                  <div className="absolute inset-0 z-[1] pointer-events-none">
                    <div className="absolute inset-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/2aFJWWRxuA.png)] bg-cover bg-center opacity-60 scale-110 group-hover:scale-100 transition-transform duration-[4s]" />
                    <div className="absolute bottom-0 right-0 w-[55%] h-[90%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/gAgbPmFU7u.png)] bg-contain bg-right-bottom bg-no-repeat z-20 group-hover:scale-105 transition-transform" />
                    <div className="w-[60px] h-[60px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/BFxy4W0OcK.png)] bg-contain bg-no-repeat absolute top-6 right-[40%] opacity-40 group-hover:translate-y-2 transition-transform" />
                  </div>
                </div>

                {/* Anxiety Card */}
                <div className="h-[256px] rounded-[20px] bg-[#afbe8d] relative overflow-hidden group p-8 flex shadow-sm hover:shadow-xl transition-all">
                  <div className="relative z-30 flex flex-col gap-3 flex-1 h-full">
                    <span className="w-fit h-[18px] px-3 bg-[#5994fe] rounded-[8px] text-[9px] text-white flex items-center font-inter font-bold uppercase tracking-wider">Soft Skills</span>
                    <h4 className="font-arima text-[32px] font-bold text-[#1a1a1a]">Anxiety</h4>
                    <p className="font-mulish text-sm text-[#4a4a4a] max-w-[200px] leading-relaxed">
                      Engage with yourself. Reflect, resonate, and discover your real, unique, and awesome self.
                    </p>
                    <button className="w-fit h-11 px-8 rounded-[12px] border-2 border-[#1a1a1a] font-arima font-bold text-[#1a1a1a] hover:bg-black/5 transition-colors mt-auto">
                      Take Test
                    </button>
                  </div>

                  {/* Stacking Vector Layers */}
                  <div className="absolute inset-0 z-[1] pointer-events-none">
                    <div className="absolute inset-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/rLurqAnjvi.png)] bg-cover bg-center opacity-60 scale-110 group-hover:scale-100 transition-transform duration-[4s]" />
                    
                    <div className="absolute bottom-0 right-0 w-[55%] h-full z-20 flex items-end justify-end group-hover:scale-105 transition-transform duration-500">
                       <div className="w-full h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/aermKwEsuP.png)] bg-contain bg-right-bottom bg-no-repeat absolute" />
                       <div className="w-[90%] h-[90%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/FyZjcSUgqr.png)] bg-contain bg-right-bottom bg-no-repeat absolute z-10 opacity-80" />
                       <div className="w-[45%] h-[45%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/srhi4K5LXj.png)] bg-contain bg-no-repeat absolute right-[25%] bottom-[40%] z-20" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Outer Floating decorative pattern layer (to match Landing page design) */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-40">
        <div className="w-[200vw] h-[200vh] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/BojSLHGHMd.png)] bg-cover bg-no-repeat absolute top-[-100vh] left-[-50vw] mix-blend-soft-light" />
      </div>
    </div>
  );
}
