import React from "react";

const comparisonRows = [
  {
    label: "A therapist licensed in your state",
    infoIcon:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/N1yAg6PTxv.png",
    amplIcon:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/dhtx6FXwjL.png",
    inPersonIcon:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/dAUxXnDzrm.png",
  },
  {
    label: "A therapist licensed in your state",
    infoIcon:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/9M5iwLHwgg.png",
    amplIcon:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/D9HE2uBE8R.png",
    inPersonIcon:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/v8NiySpjfk.png",
  },
  {
    label: "A therapist licensed in your state",
    infoIcon:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/A61J4QTSUX.png",
    amplIcon:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/f2eiWu1mSP.png",
    inPersonIcon:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/WurYjS18nL.png",
  },
  {
    label: "A therapist licensed in your state",
    infoIcon:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/2H4W83aVJL.png",
    amplIcon:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/EQGOVNEGGG.png",
    inPersonIcon:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/itJtaGjiw7.png",
  },
  {
    label: "A therapist licensed in your state",
    infoIcon:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/kqX3z054ga.png",
    amplIcon:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/uzbUasJDzg.png",
    inPersonIcon:
      "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/FnDFkwmW0d.png",
  },
];

export default function ComparisonSection() {
  return (
    <section className="relative z-[206] flex w-full flex-col items-center gap-[30px] px-4 py-[50px] md:gap-[42px] md:px-6 lg:gap-[60px] lg:px-10 2xl:gap-[72px] 2xl:px-14">
      <div className="relative z-[207] flex w-full max-w-[1280px] flex-col items-center gap-[8px]">
        <h2 className="w-full text-center font-arima text-[40px] font-medium leading-[1.15] text-text-dark md:text-[44px] lg:text-[48px]">
          <span className="heading-h2-medium">AMPL </span>
          <span className="heading-h2-medium gradient-text-purple">vs </span>
          <span className="heading-h2-black relative inline-block">
            In-person
            <div className="absolute -bottom-[4px] left-[50%] h-[18px] w-[120px] -translate-x-1/2 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-11/LgU93z3Hl5.png)] bg-contain bg-no-repeat md:w-[136px] lg:w-[155px]" />
          </span>
        </h2>

        <p className="body-b2 z-[210] max-w-[1120px] text-center text-[18px] leading-[1.35] text-text-gray md:text-[22px] md:leading-[1.3]">
          We offer practical, easy-to-follow courses designed to help in
          everyday workplace performance.
        </p>
      </div>

      <div className="scrollbar-hide relative z-[211] w-full overflow-x-auto">
        <div className="w-[max(940px,100%)] lg:mx-auto lg:max-w-[1120px] 2xl:max-w-[1360px]">
          <div className="flex items-center">
            <div className="h-[123px] min-w-[468px] flex-1" />
            <div className="relative flex h-[123px] w-[236px] shrink-0 items-center justify-center rounded-t-[12px] bg-[rgba(96,96,180,0.16)]">
              <span className="heading-h3-medium whitespace-nowrap leading-[65px] text-heading-blue">
                AMPL
              </span>
            </div>
            <div className="flex h-[123px] w-[236px] shrink-0 items-center justify-center">
              <span className="heading-h3-medium whitespace-nowrap leading-[65px] text-heading-blue">
                In-person
              </span>
            </div>
          </div>

          {comparisonRows.map((row, index) => (
            <div
              key={`${row.label}-${index}`}
              className="flex items-center border-b border-solid border-b-light-purple-bg"
            >
              <div className="flex min-w-[468px] flex-1 items-center px-[16px] py-[28px] lg:py-[36px]">
                <span className="font-mulish text-[20px] font-normal leading-[26px] text-text-dark">
                  {row.label}
                </span>
                <div
                  className="ml-2 h-[24px] w-[24px] shrink-0 bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${row.infoIcon})` }}
                />
              </div>

              <div
                className={`flex w-[236px] shrink-0 items-center justify-center bg-[rgba(96,96,180,0.16)] py-[18px] lg:py-[22px] ${index === comparisonRows.length - 1 ? "rounded-b-[12px]" : ""}`}
              >
                <div
                  className="h-[64px] w-[64px] shrink-0 bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${row.amplIcon})` }}
                />
              </div>

              <div className="flex w-[236px] shrink-0 items-center justify-center py-[18px] lg:py-[22px]">
                <div
                  className="h-[64px] w-[64px] shrink-0 bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${row.inPersonIcon})` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
