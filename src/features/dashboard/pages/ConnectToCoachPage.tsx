import DashboardSectionLayout from "../components/DashboardSectionLayout";

function formatDate(): string {
  const parts = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).formatToParts(new Date());

  const weekday = parts.find((part) => part.type === "weekday")?.value ?? "";
  const day = parts.find((part) => part.type === "day")?.value ?? "";
  const month = parts.find((part) => part.type === "month")?.value ?? "";
  const year = parts.find((part) => part.type === "year")?.value ?? "";

  return `${weekday}, ${day} ${month} ${year}`;
}

export default function ConnectToCoachPage() {
  return (
    <DashboardSectionLayout title="Connect to Coach" subtitle={formatDate()}>
      <main className="w-full">
        <div className="mx-auto flex w-full max-w-[1240px] 2xl:max-w-[1700px] flex-col gap-8 md:gap-10">
          <CoachHeroSection />
          <EmptyCoachesSection />
        </div>
      </main>
    </DashboardSectionLayout>
  );
}

function CoachHeroSection() {
  return (
    <>
      <section className="sm:hidden w-full flex justify-center">
        <div className="main-container flex w-[346px] h-[134px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[19px] items-center flex-nowrap bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/qSMd3ehSYh.png)] bg-cover bg-no-repeat rounded-[12px] relative overflow-hidden mx-auto my-0" />
      </section>

      <section className="hidden sm:block relative w-full overflow-hidden rounded-[20px] bg-[#8bc1f4] px-4 py-6 sm:px-6 md:px-10 md:py-8 2xl:min-h-[390px]">
        <div className="absolute inset-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/fLXJQphxNh.png)] bg-cover bg-center opacity-30" />

        <div className="relative z-10 flex w-full flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="mx-auto flex w-full max-w-[500px] flex-col items-center gap-6 text-center md:mx-0 md:items-start md:text-left">
            <div className="flex flex-col gap-3">
              <span className="subheading-md font-normal text-[#1f596f]">
                Connect to Coach
              </span>
              <h2 className="heading-h5-bold text-[22px] uppercase leading-[1.45] text-[#0f6280] sm:text-[24px]">
                Not sure where to begin? We&apos;ll guide you step by step.
              </h2>
            </div>
            <button className="flex h-[36px] items-center justify-center rounded-[8px] bg-white px-4">
              <span className="subheading-xs font-bold text-[#407bff] sm:text-[12px]">
                Find Your Right Coach
              </span>
            </button>
          </div>

          <div className="relative mx-auto h-[300px] w-full max-w-[525px] sm:h-[340px] md:h-[366px]">
            <div className="absolute right-[13%] top-0 z-[1] h-[220px] w-[220px] rounded-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/Ka30EhH7kX.png)] bg-cover bg-no-repeat sm:h-[280px] sm:w-[280px] md:h-[366px] md:w-[366px]" />
            <div className="absolute bottom-[8%] right-[8%] z-[2] h-[200px] w-[198px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/bO4teW5HHi.png)] bg-contain bg-no-repeat sm:h-[248px] sm:w-[244px] md:h-[294px] md:w-[291px]" />

            <CoachPill
              className="left-[6%] top-[14%]"
              text="Personalized Guidance"
              widthClass="w-[178px]"
            />
            <CoachPill
              className="left-0 top-[33%]"
              text="Clarity & Direction"
              widthClass="w-[169px]"
            />
            <CoachPill
              className="right-0 top-[56%]"
              text="Track Progress"
              widthClass="w-[149px]"
            />
            <CoachPill
              className="right-[4%] top-[77%]"
              text="Flexible 1:1 Sessions"
              widthClass="w-[182px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function CoachPill({
  className,
  text,
  widthClass,
}: {
  className: string;
  text: string;
  widthClass: string;
}) {
  return (
    <div
      className={`absolute z-[3] ${widthClass} h-[32px] rounded-[12px] bg-[#0572df] px-4 ${className} hidden items-center justify-center sm:flex`}
    >
      <span className="caption-text text-center font-bold text-white">{text}</span>
    </div>
  );
}

function EmptyCoachesSection() {
  return (
    <>
      <section className="sm:hidden relative mb-6 w-full overflow-hidden rounded-[24px] bg-[#f7f9fc] px-0 py-4">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-[-12%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/fLXJQphxNh.png)] bg-cover bg-center" />
        </div>

        <div className="relative z-[1] mx-auto flex w-full max-w-[342px] flex-col items-center gap-6">
          <div className="relative h-[272px] w-full max-w-[342px]">
            <div className="absolute left-[3.13%] top-0 z-[1] h-[99.86%] w-[94.53%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/xubayHXFH3.png)] bg-[length:100%_100%] bg-no-repeat" />
            <div className="absolute left-[7.72%] top-[6.07%] z-[4] h-[63.5%] w-[81.15%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/QM3wSObmGn.png)] bg-[length:100%_100%] bg-no-repeat" />
            <div className="absolute left-[10.01%] top-[8.55%] z-[2] h-[77.66%] w-[81.64%]">
              <div className="absolute inset-0 z-[3] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/hfyG7KhzgP.png)] bg-[length:100%_100%] bg-no-repeat" />
            </div>
            <div className="absolute left-[21.69%] top-[24.39%] z-[5] h-[75.61%] w-[69.06%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/0SfeOmOBQb.png)] bg-[length:100%_100%] bg-no-repeat" />
            <div className="absolute left-[2.84%] top-[72.24%] z-[6] h-[27.35%] w-[47.56%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/zOZHp98nzG.png)] bg-[length:100%_100%] bg-no-repeat" />
          </div>

          <div className="flex w-full flex-col items-center gap-4 text-center">
            <h3 className="heading-h5-bold text-[20px] leading-[30px] uppercase text-[#131313]">
              You Do not have any coaches yet
            </h3>
            <p className="body-b2 text-[14px] leading-[20px] text-[#131313]">
              Take a short questionare to get coach recommendations
            </p>
            <button className="flex items-center justify-center gap-1 rounded-[8px] bg-[#b95af9] px-4 py-3">
              <span className="btn-text-sm text-white">
                Start Your Coaching Journey
              </span>
              <span className="h-4 w-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/gCRHUDBmUX.png)] bg-cover bg-no-repeat" />
            </button>
          </div>
        </div>
      </section>

      <section className="hidden sm:block relative mb-8 w-full overflow-hidden rounded-[24px] bg-[#f7f9fc] px-4 py-8 sm:px-6 md:px-8 md:py-10">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-[-12%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/fLXJQphxNh.png)] bg-cover bg-center" />
        </div>

        <div className="relative z-[1] mx-auto flex max-w-[700px] flex-col items-center gap-8">
          <div className="relative h-[300px] w-full max-w-[495px] sm:h-[360px] md:h-[420px] md:max-w-[560px]">
            <div className="absolute left-[3.13%] top-0 z-[1] h-[99.86%] w-[94.53%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/xubayHXFH3.png)] bg-[length:100%_100%] bg-no-repeat" />
            <div className="absolute left-[7.72%] top-[6.07%] z-[4] h-[63.5%] w-[81.15%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/QM3wSObmGn.png)] bg-[length:100%_100%] bg-no-repeat" />
            <div className="absolute left-[10.01%] top-[8.55%] z-[2] h-[77.66%] w-[81.64%]">
              <div className="absolute inset-0 z-[3] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/hfyG7KhzgP.png)] bg-[length:100%_100%] bg-no-repeat" />
            </div>
            <div className="absolute left-[21.69%] top-[24.39%] z-[5] h-[75.61%] w-[69.06%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/0SfeOmOBQb.png)] bg-[length:100%_100%] bg-no-repeat" />
            <div className="absolute left-[2.84%] top-[72.24%] z-[6] h-[27.35%] w-[47.56%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/zOZHp98nzG.png)] bg-[length:100%_100%] bg-no-repeat" />
            <div className="absolute left-0 top-[99.48%] z-[7] h-[0.13%] w-full">
              <div className="absolute inset-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/F213BEvJnt.png)] bg-[length:100%_100%] bg-no-repeat" />
            </div>
          </div>

          <div className="flex w-full max-w-[541px] flex-col items-center gap-6 text-center">
            <div className="flex flex-col items-center gap-4">
              <h3 className="heading-h5-bold uppercase text-[#131313]">
                You Do not have any coaches yet
              </h3>
              <p className="body-b2 text-[#131313]">
                Take a short questionare to get coach recommendations
              </p>
            </div>

            <button className="flex items-center justify-center gap-1 rounded-[8px] bg-[#b95af9] px-4 py-3">
              <span className="btn-text-sm text-white">
                Start Your Coaching Journey
              </span>
              <span className="h-4 w-4 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/gCRHUDBmUX.png)] bg-cover bg-no-repeat" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
