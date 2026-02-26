import React from "react";

interface AuthPageShellProps {
  children: React.ReactNode;
}

export default function AuthPageShell({ children }: AuthPageShellProps) {
  return (
    <section className="main-container relative w-full overflow-x-hidden bg-[#fbfcfe]">
      <div className="relative mx-auto flex min-h-[720px] w-full items-center justify-center px-4 py-14 sm:px-6 sm:py-16 md:min-h-[760px] md:py-20 lg:min-h-[820px] xl:min-h-[860px] 2xl:min-h-[920px]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-[21.4%] z-[22] h-[90.03%] w-[102.07%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/xaE3HssoWz.png)] bg-[length:100%_100%] bg-no-repeat" />
          <div className="absolute left-[57.5%] top-[55.47%] z-[21] h-[44.53%] w-[58.38%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/NNhF3WuVor.png)] bg-[length:100%_100%] bg-no-repeat" />
          <div className="absolute left-[0.35%] top-[56.84%] z-20 h-[44.53%] w-[58.38%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/AFppomP3Fg.png)] bg-[length:100%_100%] bg-no-repeat" />
        </div>

        <div className="pointer-events-none absolute right-[6%] top-[70px] z-[23] hidden h-[101.253px] w-[101.253px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/FBqBtyii2M.png)] bg-[length:100%_100%] bg-no-repeat md:block xl:right-[8%] 2xl:right-[10%]" />

        <div className="relative z-[24] w-full max-w-[520px]">{children}</div>
      </div>
    </section>
  );
}
