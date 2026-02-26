import React from "react";

const footerColumns = [
  {
    title: "Services",
    links: ["Value Gifts", "Module to EAR", "Connect to Coach", "Courses"],
  },
  {
    title: "Products",
    links: [
      "Psychometric Assessment",
      "Wellness Gauge",
      "Affirmations",
      "Sculpt the Future",
      "Career Voyage",
      "Sculpt the Future",
      "Mental Wellness",
      "Online Courses",
      "Live - Webinars",
      "On Premises Sessions",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "FAQs", "For Providers"],
  },
  {
    title: "Support",
    links: ["Contact Us", "Terms & Conditions", "Privacy", "Share your Feedback"],
  },
];

const legalLinks = ["@2025 AMPL Inc.", "Terms & Conditions", "Privacy Policy", "Privacy Choices", "Privacy Notice"];

const socialIcons = [
  { icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/HE3DtcjDCS.png", label: "Facebook" },
  { icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/uoYQmJvHga.png", label: "Instagram" },
  { icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/XLHtEQOemz.png", label: "X" },
  { icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/3NMBXW9OcT.png", label: "YouTube" },
];

export default function Footer({ showCTA = true }: { showCTA?: boolean }) {
  const handlePlaceholderClick = (event?: React.SyntheticEvent) => {
    if (event) {
      event.preventDefault();
    }
  };

  return (
    <div className="relative z-[357] mt-10 flex w-full flex-col items-center gap-[50px]">
      {showCTA && (
        <div className="relative z-[358] w-full">
          <div className="mx-auto flex h-[858px] w-[342px] max-w-[calc(100vw-24px)] flex-col rounded-[24px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/DzxJrb1vyM.png)] bg-cover bg-center bg-no-repeat px-[48px] py-[100px] md:hidden">
            <div className="flex h-full w-full flex-col items-center">
              <div className="relative w-full max-w-[246px] text-left">
                <h2 className="font-arima text-[44px] font-medium leading-[1.18] text-white">
                  Your Growth
                  <br />
                  Deserves
                  <br />
                  Attention
                  <br />- Not Delay
                </h2>
                <div className="absolute left-[84%] top-[56%] h-[18px] w-[24px] -translate-x-1/2 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/9mpdoXTDo2.png)] bg-cover bg-no-repeat" />
              </div>

              <ul className="mt-[26px] flex w-full max-w-[246px] list-disc flex-col gap-[12px] pl-[22px] text-left marker:text-bg-main">
                <li className="font-mulish text-[16px] font-light leading-[1.35] text-bg-main">Build clarity</li>
                <li className="font-mulish text-[16px] font-light leading-[1.35] text-bg-main">Rise with purpose</li>
                <li className="font-mulish text-[16px] font-light leading-[1.35] text-bg-main">Start with awareness</li>
                <li className="font-mulish text-[16px] font-light leading-[1.35] text-bg-main">Create confidence.</li>
                <li className="font-mulish text-[16px] font-light leading-[1.35] text-bg-main">Sustain with dignity .</li>
              </ul>

              <div className="mt-auto flex w-full justify-center">
                <button
                  type="button"
                  onClick={handlePlaceholderClick}
                  className="group flex h-[48px] w-[220px] cursor-pointer items-center justify-center rounded-[12px] border border-solid border-white transition-all hover:bg-white hover:text-footer-bg"
                >
                  <span className="btn-text-lg text-center leading-[11px] text-white group-hover:text-footer-bg">Explore Self</span>
                </button>
              </div>
            </div>
          </div>

          <div className="relative mx-auto hidden w-[calc(100%-24px)] max-w-[930px] flex-col items-center justify-center gap-[40px] overflow-hidden rounded-[30px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/DzxJrb1vyM.png)] bg-cover bg-center bg-no-repeat px-[32px] py-[72px] md:flex lg:max-w-[1180px] lg:gap-[44px] lg:rounded-[36px] lg:px-[48px] lg:py-[84px] xl:max-w-[1320px] xl:px-[56px] xl:py-[90px] 2xl:max-w-[1440px]">
            <div className="relative flex w-full max-w-[820px] flex-col items-center gap-[20px] lg:max-w-[1024px] xl:max-w-[1120px]">
              <h2 className="text-center font-arima text-[44px] font-medium leading-[1.18] text-white lg:text-[48px] xl:text-[52px]">
                Your Growth Deserves{" "}
                <span className="relative inline-block font-black">
                  Attention
                  <span className="absolute -right-[20px] top-[8px] h-[18px] w-[24px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/9mpdoXTDo2.png)] bg-cover bg-no-repeat lg:-right-[24px] lg:top-[10px] lg:h-[22px] lg:w-[30px] xl:-right-[28px] xl:top-[12px]" />
                </span>{" "}
                - Not Delay
              </h2>

              <div className="flex flex-col items-center gap-[12px] lg:gap-[14px]">
                <ul className="flex flex-wrap items-center justify-center gap-x-[26px] gap-y-2 lg:gap-x-[40px]">
                  <li className="flex items-center font-mulish text-[18px] font-light leading-[1.3] text-bg-main lg:text-[24px]">
                    <span className="mr-2">&bull;</span>Build clarity
                  </li>
                  <li className="flex items-center font-mulish text-[18px] font-light leading-[1.3] text-bg-main lg:text-[24px]">
                    <span className="mr-2">&bull;</span>Rise with purpose
                  </li>
                  <li className="flex items-center font-mulish text-[18px] font-light leading-[1.3] text-bg-main lg:text-[24px]">
                    <span className="mr-2">&bull;</span>Start with awareness
                  </li>
                </ul>
                <ul className="flex flex-wrap items-center justify-center gap-x-[28px] gap-y-2 lg:gap-x-[48px]">
                  <li className="flex items-center font-mulish text-[18px] font-light leading-[1.3] text-bg-main lg:text-[24px]">
                    <span className="mr-2">&bull;</span>Create confidence
                  </li>
                  <li className="flex items-center font-mulish text-[18px] font-light leading-[1.3] text-bg-main lg:text-[24px]">
                    <span className="mr-2">&bull;</span>Sustain with dignity
                  </li>
                </ul>
              </div>
            </div>

            <button
              type="button"
              onClick={handlePlaceholderClick}
              className="group relative z-[368] flex h-[52px] w-[236px] cursor-pointer items-center justify-center overflow-hidden rounded-[12px] border border-solid border-white transition-all hover:bg-white hover:text-footer-bg lg:h-[58px] lg:w-[270px] lg:rounded-[14px] xl:h-[60px] xl:w-[280px] xl:rounded-[16px]"
            >
              <span className="btn-text-lg relative z-[369] text-center text-[20px] leading-[1] text-white group-hover:text-footer-bg lg:text-[22px] xl:text-[24px]">
                Explore Self
              </span>
            </button>
          </div>
        </div>
      )}

      <div className="relative z-[370] w-full">
        <div className="mx-auto w-full ">
          <div className="flex w-full flex-col border border-solid border-[#ac46ff] bg-[#8e5593] px-[20px] pb-[28px] pt-[28px] md:px-[32px] md:pt-[34px] lg:hidden">
            <div className="flex flex-col gap-[8px]">
              <span className="font-arima text-[20px] font-extrabold leading-[1.2] text-white uppercase">
                Subscribe to Our Newsletter!
              </span>
              <span className="font-mulish text-[14px] font-medium leading-[19.6px] text-white">
                Get latest updates on your email by subscribing to our newsletter
              </span>
              <span className="font-mulish text-[12px] font-light leading-[16.8px] text-white">
                By signing up, you&apos;re agreeing to receive marketing emails from Headspace. You can unsubscribe at
                any time. For more details, check out our Privacy Policy.
              </span>
            </div>

            <form
              className="mt-[14px] flex flex-col gap-[10px]"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div className="flex w-full items-center rounded-[8px] border border-solid border-[#d9a1ff] bg-white px-[16px] py-[10px]">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border-0 bg-transparent font-mulish text-[16px] font-light leading-[22px] text-[#4a5565] placeholder:text-[#4a5565] outline-none"
                />
              </div>
              <button
                type="submit"
                className="flex h-[52px] w-full items-center justify-center rounded-[24px] border border-solid border-[#bb8dff] bg-[linear-gradient(90deg,#ac46ff_0%,#b95af9_100%)]"
              >
                <span className="font-arima text-[16px] font-bold leading-[1] text-white">Subscribe</span>
              </button>
            </form>

            <div className="mt-[36px] h-px w-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/K3OPS2BWcv.png)] bg-cover bg-no-repeat" />

            <div className="mt-[36px] flex flex-col gap-[28px]">
              <div className="flex flex-col gap-[12px]">
                <span className="font-arima text-[20px] font-medium leading-[1.2] text-white md:text-[24px]">Download the App</span>
                <div className="grid grid-cols-2 gap-[8px]">
                  <a
                    href="#"
                    onClick={handlePlaceholderClick}
                    className="flex h-[48px] items-center gap-[10px] rounded-[8px] bg-[#1a1a1a] px-[10px]"
                  >
                    <div className="h-[24px] w-[24px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/HfNWG7SbAC.png)] bg-cover bg-no-repeat" />
                    <div className="flex min-w-0 flex-1 flex-col justify-center">
                      <span className="font-mulish text-[12px] font-normal leading-[15px] text-white">Download on the</span>
                      <span className="font-arima text-[15px] font-bold leading-[18px] text-white">App Store</span>
                    </div>
                  </a>
                  <a
                    href="#"
                    onClick={handlePlaceholderClick}
                    className="flex h-[48px] items-center gap-[10px] rounded-[8px] bg-[#1a1a1a] px-[10px]"
                  >
                    <div className="h-[27px] w-[24px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/eN5pL6eYWS.png)] bg-cover bg-no-repeat" />
                    <div className="flex min-w-0 flex-1 flex-col justify-center">
                      <span className="font-mulish text-[12px] font-normal leading-[15px] text-white">Get it on</span>
                      <span className="font-arima text-[15px] font-bold leading-[18px] text-white">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-[20px]">
                <div className="flex flex-col gap-[20px]">
                  {footerColumns
                    .filter((column) => ["Services", "Company", "Support"].includes(column.title))
                    .map((column) => (
                      <div key={column.title} className="flex flex-col gap-[8px]">
                        <span className="font-arima text-[20px] font-medium leading-[1.2] text-white md:text-[24px]">{column.title}</span>
                        <div className="flex flex-col gap-[8px]">
                          {column.links.map((link, index) => (
                            <a
                              key={`${column.title}-${link}-${index}`}
                              href="#"
                              onClick={handlePlaceholderClick}
                              className="font-mulish text-[14px] font-light leading-[1.5] text-white"
                            >
                              {link}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
                <div className="flex flex-col gap-[8px]">
                  {footerColumns
                    .filter((column) => column.title === "Products")
                    .map((column) => (
                      <div key={column.title} className="flex flex-col gap-[8px]">
                        <span className="font-arima text-[20px] font-medium leading-[1.2] text-white md:text-[24px]">{column.title}</span>
                        <div className="flex flex-col gap-[8px]">
                          {column.links.map((link, index) => (
                            <a
                              key={`${column.title}-${link}-${index}`}
                              href="#"
                              onClick={handlePlaceholderClick}
                              className="font-mulish text-[14px] font-light leading-[1.5] text-white"
                            >
                              {link}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden w-full flex-col gap-[24px] border border-solid border-[#ac46ff] bg-[#8e5593] px-4 pb-0 pt-[36px] sm:px-6 md:px-10 lg:flex lg:px-16 xl:px-[160px]">
            <div className="flex w-full flex-col gap-[24px] xl:flex-row xl:items-start">
              <div className="mx-auto h-[110.001px] w-[101.342px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/opi7cFiq55.png)] bg-[length:100%_100%] bg-no-repeat xl:mx-0" />

              <div className="flex min-w-0 flex-1 flex-col gap-[24px] xl:flex-row xl:items-start">
                <div className="flex min-w-0 flex-1 flex-col gap-[8px]">
                  <span className="font-arima text-[20px] font-extrabold leading-[32.66px] text-white uppercase">
                    Subscribe to Our Newsletter!
                  </span>
                  <div className="flex flex-col gap-[4px]">
                    <span className="font-mulish text-[14px] font-medium leading-[19.6px] text-white">
                      Get latest updates on your email by subscribing to our newsletter
                    </span>
                    <span className="font-mulish text-[12px] font-light leading-[16.8px] text-white">
                      By signing up, you&apos;re agreeing to receive marketing emails from Headspace. You can unsubscribe
                      at any time. For more details, check out our Privacy Policy.
                    </span>
                  </div>
                </div>

                <form
                  className="flex w-full flex-col gap-[12px] sm:flex-row sm:items-center xl:w-[547px] xl:pt-[8px]"
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <div className="flex w-full pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-center bg-white rounded-[8px] border border-solid border-[#d9a1ff]">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full border-0 bg-transparent font-mulish text-[16px] font-light leading-[22px] text-[#4a5565] placeholder:text-[#4a5565] outline-none"
                    />
                  </div>
                  <button type="submit" className="flex h-[38px] w-[127px] shrink-0 items-center justify-center rounded-[12px] bg-[#ac46ff]">
                    <span className="font-arima text-[16px] font-bold leading-[19.2px] text-white">Subscribe</span>
                  </button>
                </form>
              </div>
            </div>

            <div className="h-px w-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/K3OPS2BWcv.png)] bg-cover bg-no-repeat" />

            <div className="flex w-full flex-col gap-[32px] ">
              <div className="flex w-full flex-col gap-[40px] lg:flex-row lg:items-start lg:gap-[60px] xl:gap-[84px] 2xl:gap-[110px]">
                <div className="mx-auto flex w-[188px] flex-col gap-[36px] overflow-hidden lg:mx-0 lg:h-[460px] xl:h-[470px]">
                  <div className="flex w-[188px] flex-col gap-[24px]">
                    <span className="w-max whitespace-nowrap font-arima text-[18px] font-extrabold leading-[32.66px] text-white uppercase md:text-[20px]">
                      Download the App
                    </span>
                    <div className="flex flex-col gap-[8px]">
                      <a
                        href="#"
                        onClick={handlePlaceholderClick}
                        className="flex h-[48px] w-[160px] items-center gap-[12px] rounded-[8px] bg-[#1a1a1a] px-[12px]"
                      >
                        <div className="h-[24px] w-[24px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/HfNWG7SbAC.png)] bg-cover bg-no-repeat" />
                        <div className="flex min-w-0 flex-1 flex-col justify-center">
                          <span className="font-mulish text-[12px] font-normal leading-[16.56px] text-white">Download on the</span>
                          <span className="font-arima text-[16px] font-bold leading-[19px] text-white">App Store</span>
                        </div>
                      </a>
                      <a
                        href="#"
                        onClick={handlePlaceholderClick}
                        className="flex h-[48px] w-[160px] items-center gap-[12px] rounded-[8px] bg-[#1a1a1a] px-[12px]"
                      >
                        <div className="h-[27px] w-[24px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/eN5pL6eYWS.png)] bg-cover bg-no-repeat" />
                        <div className="flex min-w-0 flex-1 flex-col justify-center">
                          <span className="font-mulish text-[12px] font-normal leading-[16.56px] text-white">Get it on</span>
                          <span className="font-arima text-[16px] font-bold leading-[19px] text-white">Google Play</span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="h-[398px] w-[184px] rounded-[24px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/DE1vB7Ft4E.png)] bg-cover bg-no-repeat p-[4px]" />
                </div>

                <div className="grid flex-1 grid-cols-1 gap-[32px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-[56px] lg:pt-[2px] xl:gap-x-[72px] 2xl:gap-x-[96px]">
                  {footerColumns.map((column) => (
                    <div key={column.title} className="flex flex-col gap-[24px]">
                      <span className="font-arima text-[20px] font-extrabold leading-[32.66px] text-white uppercase">
                        {column.title}
                      </span>
                      <div className="flex flex-col gap-[16px]">
                        {column.links.map((link, index) => (
                          <a
                            key={`${column.title}-${link}-${index}`}
                            href="#"
                            onClick={handlePlaceholderClick}
                            className="font-mulish text-[14px] font-light leading-[17.57px] text-white"
                          >
                            {link}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-[14px] bg-white px-4 py-[12px] sm:px-6 md:px-10 lg:px-16 xl:flex-row xl:items-center xl:justify-between xl:gap-[24px] xl:px-[160px]">
            <div className="flex flex-wrap items-center justify-center gap-x-[18px] gap-y-2 xl:justify-start">
              {legalLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={handlePlaceholderClick}
                  className="font-mulish text-[14px] font-light leading-[17.57px] text-[#8e5593] text-center whitespace-nowrap"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex items-center justify-center gap-[16px]">
              <div className="flex items-center gap-[16px]">
                {socialIcons.map((item) => (
                  <a
                    key={item.icon}
                    href="#"
                    onClick={handlePlaceholderClick}
                    aria-label={item.label}
                    className="h-[24px] w-[24px] shrink-0 bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${item.icon})` }}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handlePlaceholderClick}
                className="flex h-[48px] items-center justify-center gap-[4px] rounded-[12px] border border-solid border-[#8e5593] pl-[24px] pr-[16px]"
              >
                <span className="font-arima text-[16px] font-bold leading-[11px] text-[#8e5593]">English</span>
                <div className="h-[24px] w-[24px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/y8VFvJyMct.png)] bg-cover bg-no-repeat" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
