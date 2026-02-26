import React from "react";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  mode: "login" | "signup";
}

export default function LoginForm({ mode }: LoginFormProps) {
  const navigate = useNavigate();
  const isLogin = mode === "login";
  const [agreed, setAgreed] = React.useState(false);

  const handleToggle = () => {
    if (isLogin) {
      navigate("/signup");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="relative z-[24] flex w-full max-w-[520px] flex-col items-center gap-[32px] rounded-[24px] bg-white px-5 py-8 shadow-[0_25px_50px_0_rgba(152,16,250,0.09)] sm:gap-[40px] sm:px-8 sm:py-10 md:gap-[44px] md:px-[32px] md:pt-[44px] md:pb-[36px]">
      <div className="relative z-[25] flex w-full flex-col items-start gap-[34px] sm:gap-[40px] md:gap-[48px]">
        <div className="relative z-[26] flex w-full flex-col items-start gap-[8px]">
          <span className="font-arima text-[28px] font-medium leading-[1.25] text-[#272d33] sm:text-[32px] sm:leading-[41px]">
            {isLogin ? "Log In" : "Sign Up to AMPL"}
          </span>
          <span className="font-mulish text-[16px] font-light leading-[1.45] text-[#272d33] sm:text-[20px] sm:leading-[29px]">
            {isLogin ? "Choose a method to log in" : "Choose a method to Sign Up"}
          </span>
        </div>

        <div className="relative z-[29] flex w-full flex-col items-start">
          <div className="relative z-30 flex w-full flex-col items-start gap-[16px]">
            <div className="relative z-[31] flex w-full flex-col items-start gap-[8px]">
              <div className="relative z-[32] flex w-full items-start sm:items-center">
                <div className="relative z-[33] flex w-full max-w-[408px] items-start gap-[10px] sm:items-center">
                  <button
                    type="button"
                    onClick={() => setAgreed(!agreed)}
                    className="relative h-[24px] w-[24px] shrink-0 rounded-[4px]"
                    aria-label="Agree to terms"
                  >
                    <span
                      className={`absolute inset-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/muFko92WGb.png)] bg-cover bg-no-repeat transition-opacity ${
                        agreed ? "opacity-100" : "opacity-45"
                      }`}
                    />
                    {agreed && (
                      <span className="absolute inset-0 flex items-center justify-center rounded-[4px] bg-[#b95af9]">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path
                            d="M11.667 3.5L5.25 9.917 2.333 7"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    )}
                  </button>

                  <div className="relative z-[35] flex min-h-[32px] items-center overflow-hidden rounded-[8px]">
                    <div className="font-mulish text-[13px] font-medium leading-[19.6px] text-left sm:text-[14px]">
                      <span className="text-[#272d33]">
                        {isLogin ? "By logging in, I agree to " : "By registering, I agree to "}
                      </span>
                      <span className="cursor-pointer text-[#b95af9] hover:underline">
                        Terms and conditions
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-[37] flex w-full flex-col items-start gap-[24px]">
              <button
                type="button"
                className={`relative z-[38] flex h-[53px] w-full items-center justify-center gap-[12px] overflow-hidden rounded-[12px] border border-solid border-[#b95af9] pl-[32px] pr-[24px] transition-colors ${
                  !agreed ? "cursor-not-allowed opacity-50 grayscale" : "cursor-pointer hover:bg-[#b95af9]/5"
                }`}
                onClick={() => {
                  if (agreed) navigate("/dashboard");
                }}
              >
                <span className="relative z-[39] text-center font-arima text-[16px] font-bold leading-[11px] whitespace-nowrap text-[#b95af9]">
                  {isLogin ? "Log in with Google" : "Sign Up using Google"}
                </span>
                <div className="relative z-40 h-[24px] w-[24px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/D9DfMsbUHk.png)] bg-cover bg-no-repeat" />
              </button>
            </div>
          </div>

          <div className="relative z-[41] flex min-h-[53px] w-full items-center justify-center gap-[4px] overflow-hidden rounded-[12px] px-2 sm:px-[32px]">
            <div className="relative z-[42] text-center font-arima text-[16px] font-bold leading-[1.2]">
              <span className="font-overpass text-[15px] font-bold leading-[19.2px] text-[#1a1a1a] sm:text-[16px]">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
              </span>
              <span
                className="ml-1 cursor-pointer font-overpass text-[15px] font-bold leading-[19.2px] text-[#b95af9] hover:underline sm:text-[16px]"
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
