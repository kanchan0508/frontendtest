"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface LoginFormProps {
  mode: "login" | "signup";
}

export default function LoginForm({ mode }: LoginFormProps) {
  const router = useRouter();
  const isLogin = mode === "login";
  const [agreed, setAgreed] = React.useState(false);

  const handleToggle = () => {
    if (isLogin) {
      router.push("/signup");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="flex w-full max-w-[520px] h-auto min-h-[349px] pt-[44px] pr-[32px] pb-[36px] pl-[32px] flex-col gap-[44px] items-center flex-nowrap bg-[#fff] rounded-[24px] shadow-[0_25px_50px_0_rgba(152,16,250,0.09)] z-[24] relative transition-all duration-300">
      <div className="flex flex-col gap-[48px] items-start self-stretch shrink-0 flex-nowrap relative z-[25]">
        {/* Header */}
        <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[26]">
          <span className="h-[41px] self-stretch shrink-0 basis-auto font-arima text-[32px] font-medium leading-[41px] text-[#272d33] relative text-left whitespace-nowrap z-[27]">
            {isLogin ? "Log In" : "Sign Up to AMPL"}
          </span>
          <span className="h-[29px] self-stretch shrink-0 basis-auto font-mulish text-[20px] font-light leading-[29px] text-[#272d33] relative text-left whitespace-nowrap z-[28]">
            {isLogin ? "Choose a method to log in" : "Choose a method to Sign Up"}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[29]">
          <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-30">
            <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[31]">
              <div className="flex h-[24px] items-center self-stretch shrink-0 flex-nowrap relative z-[32]">
                <div className="flex w-full max-w-[408px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[33]">
                  {/* Functional Checkbox for both modes */}
                  <div 
                    className={`w-[24px] h-[24px] rounded-[6px] border-2 flex items-center justify-center cursor-pointer transition-colors shrink-0 ${agreed ? 'bg-primary-purple border-primary-purple' : 'border-[#b95af9]'}`}
                    onClick={() => setAgreed(!agreed)}
                  >
                    {agreed && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  
                  <div className="flex h-[32px] gap-[4px] justify-center items-center shrink-0 flex-nowrap rounded-[8px] relative overflow-hidden z-[35]">
                    <div className="w-auto shrink-0 font-mulish text-[14px] font-medium leading-[19.6px] relative text-left whitespace-nowrap z-[36]">
                      <span className="font-mulish text-[14px] font-medium leading-[19.6px] text-[#272d33] relative">
                        {isLogin ? "By logging in, I agree to " : "By registering, I agree to "}
                      </span>
                      <span className="font-mulish text-[14px] font-medium leading-[19.6px] text-[#b95af9] relative cursor-pointer hover:underline">
                        Terms and conditions
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[37]">
              <div 
                className={`flex h-[53px] pt-0 pr-[24px] pb-0 pl-[32px] gap-[12px] justify-center items-center self-stretch shrink-0 flex-nowrap rounded-[12px] border-solid border border-[#b95af9] relative overflow-hidden cursor-pointer transition-colors z-[38] ${!agreed ? 'opacity-50 cursor-not-allowed grayscale' : 'hover:bg-[#b95af9]/5'}`}
                onClick={() => {
                  if (agreed) {
                    // Handle Google Auth
                    console.log("Google Auth triggered");
                  }
                }}
              >
                <span className="flex w-auto h-[11px] justify-center items-start shrink-0 basis-auto font-arima text-[16px] font-bold leading-[11px] text-[#b95af9] relative text-center whitespace-nowrap z-[39]">
                  {isLogin ? "Log in with Google" : "Sign Up using Google"}
                </span>
                <div className="w-[24px] h-[24px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/jExfzNHDv0.png)] bg-cover bg-no-repeat relative overflow-hidden z-40" />
              </div>
            </div>
          </div>

          {/* Footer Toggle */}
          <div className="flex h-[53px] pt-0 pr-[32px] pb-0 pl-[32px] gap-[4px] justify-center items-center self-stretch shrink-0 flex-nowrap rounded-[12px] relative overflow-hidden z-[41]">
            <div className="w-auto shrink-0 font-arima text-[16px] font-bold leading-[11px] relative text-center whitespace-nowrap z-[42]">
              <span className="font-overpass text-[16px] font-bold leading-[19.2px] text-[#1a1a1a] relative text-center">
                {isLogin ? "Don’t have an account?" : "Already have an account?"}
              </span>
              <span 
                className="font-overpass text-[16px] font-bold leading-[19.2px] text-[#b95af9] relative text-center cursor-pointer hover:underline ml-1"
                onClick={handleToggle}
              >
                {isLogin ? "Sign Up" : "Log In"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
