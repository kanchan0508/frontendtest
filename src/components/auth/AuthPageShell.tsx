import React from "react";

interface AuthPageShellProps {
  children: React.ReactNode;
}

export default function AuthPageShell({ children }: AuthPageShellProps) {
  return (
    <section className="main-container relative w-full overflow-x-hidden bg-[#f7f9fc]">
      {/* ===== MOBILE LAYOUT (< 640px) ===== */}
      <div className="block sm:hidden w-full overflow-hidden">
        {/* Card area wrapper */}
        <div className="w-[373.967px] min-h-[279px] relative z-[22] mt-[142px] mr-0 mb-0 ml-[19.956px]">
          <div className="w-[342px] absolute top-1/2 left-1/2 translate-x-[-53.49%] translate-y-[-50%] z-[22]">
            {children}
          </div>
          <div className="w-full h-[35.56%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/VZUqcTiEq5.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[50.54%] left-0 z-[13]" />
        </div>

        {/* Nature landscape */}
        <div className="w-[521px] h-[318.276px] relative z-[21] mt-[55.724px] mr-0 mb-0 ml-[-65px]">
          <div className="w-[50.38%] h-[79.57%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/B174PLqpTs.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[49.62%] z-[11]">
            <div className="w-[72.929px] h-[147.496px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/rMCHP3gNFY.png)] bg-[length:100%_100%] bg-no-repeat relative z-[16] mt-[62.755px] mr-0 mb-0 ml-[91.968px]" />
          </div>
          <div className="w-[12.57%] h-[89.97%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/md3PKrz8gA.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[2.27%] left-[73.89%] z-[19]" />
          <div className="w-[50.38%] h-[79.57%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/EnpzuuV9KO.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[2.44%] left-[0.3%] z-10">
            <div className="w-[57.075px] h-[115.433px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/6tqwpbRsSB.png)] bg-[length:100%_100%] bg-no-repeat relative z-[17] mt-[108.67px] mr-0 mb-0 ml-[54.952px]" />
          </div>
          <div className="w-[12.57%] h-[95.29%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/b7xzJNJuH5.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[4.71%] left-0 z-20" />
          <div className="w-[9.06%] h-[38.61%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/38XDqZCb6A.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[45.35%] left-[8.45%] z-[21]" />
          <div className="w-[6.93%] h-[19.55%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/v33J6qzj1H.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[66.66%] left-[72.77%] z-[18]" />
        </div>
      </div>

      {/* ===== DESKTOP / TABLET LAYOUT (>= 640px) ===== */}
      <div className="hidden sm:flex relative mx-auto min-h-[760px] w-full items-center justify-center px-6 py-16 md:py-20 lg:min-h-[820px] xl:min-h-[860px] 2xl:min-h-[920px]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-[21.4%] z-[22] h-[90.03%] w-[102.07%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/xaE3HssoWz.png)] bg-[length:100%_100%] bg-no-repeat" />
          <div className="absolute left-[57.5%] top-[55.47%] z-[21] h-[44.53%] w-[58.38%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/NNhF3WuVor.png)] bg-[length:100%_100%] bg-no-repeat" />
          <div className="absolute left-[0.35%] top-[56.84%] z-20 h-[44.53%] w-[58.38%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/AFppomP3Fg.png)] bg-[length:100%_100%] bg-no-repeat" />
        </div>

        <div className="pointer-events-none absolute right-[6%] top-[70px] z-[23] hidden h-[101.253px] w-[101.253px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/FBqBtyii2M.png)] bg-[length:100%_100%] bg-no-repeat md:block xl:right-[8%] 2xl:right-[10%]" />

        <div className="relative z-[24] flex w-full justify-center">{children}</div>
      </div>
    </section>
  );
}
