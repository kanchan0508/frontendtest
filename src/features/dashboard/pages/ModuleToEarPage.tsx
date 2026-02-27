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

const MODULE_CARDS = [
  {
    key: "sculpt",
    title: "Sculpt the Future",
    description: "Where self-awareness becomes transformation.",
    panelBg: "bg-[#cce3f9]",
    titleBarBg: "bg-[#039ea2]",
    artwork: "sculpt",
  },
  {
    key: "career",
    title: "Career Voyage",
    description: "Where self-awareness becomes transformation.",
    panelBg: "bg-[#ecb6cb]",
    titleBarBg: "bg-[#a46980]",
    artwork: "career",
  },
  {
    key: "wellness",
    title: "Mental Wellness",
    description: "Where self-awareness becomes transformation.",
    panelBg: "bg-[#cad8aa]",
    titleBarBg: "bg-[#95a86a]",
    artwork: "wellness",
  },
] as const;

export default function ModuleToEarPage() {
  return (
    <DashboardSectionLayout title="Module to EAR" subtitle={formatDate()}>
      <main className="w-full">
        <div className="mx-auto flex w-full max-w-[1240px] 2xl:max-w-[1700px] flex-col gap-6">
          <section className="flex w-full flex-col gap-6">
            <div className="flex items-center justify-between rounded-[12px]">
              <div className="flex items-center gap-[10px]">
                <h2 className="heading-h5-bold text-[#1a1a1a]">Curated for you</h2>
              </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-5 2xl:gap-8">
              {MODULE_CARDS.map((card) => (
                <article
                  key={card.title}
                  className={`flex min-h-[390px] flex-col justify-between rounded-[24px] p-[8px] pt-[16px] ${card.panelBg} md:min-h-[420px] 2xl:min-h-[480px]`}
                >
                  <div className="flex justify-center px-2">
                    <div className="max-w-full md:scale-100 2xl:scale-[1.12]">
                      <ModuleCardArtwork artwork={card.artwork} />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div
                      className={`flex min-h-[46px] w-[221px] items-center rounded-t-[16px] px-[16px] ${card.titleBarBg}`}
                    >
                      <h3 className="subheading-small text-[#ebebeb]">
                        {card.title}
                      </h3>
                    </div>
                    <div className="rounded-r-[16px] rounded-b-[16px] bg-white px-[24px] py-[16px]">
                      <p className="body-b2 text-[#4a4a4a]">{card.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </DashboardSectionLayout>
  );
}

function ModuleCardArtwork({
  artwork,
}: {
  artwork: (typeof MODULE_CARDS)[number]["artwork"];
}) {
  if (artwork === "sculpt") {
    return (
      <div className="relative h-[226px] w-[225px] shrink-0">
        <div className="absolute left-0 top-0 z-10 h-[80.78%] w-[93.18%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/LjuM0WuyX9.png)] bg-[length:100%_100%] bg-no-repeat" />
        <div className="absolute left-[6.05%] top-[6.16%] z-[8] h-[93.84%] w-[93.95%]">
          <div className="absolute left-0 top-0 z-[9] h-full w-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/iefhY4suBL.png)] bg-[length:100%_100%] bg-no-repeat" />
        </div>
        <div className="absolute left-[1.66%] top-[16.06%] z-[7] h-[79.25%] w-[91.52%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/0q8sXuYb4S.png)] bg-[length:100%_100%] bg-no-repeat" />
      </div>
    );
  }

  if (artwork === "career") {
    return (
      <div className="relative h-[234px] w-[251px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/QSTUyE2cUb.png)] bg-cover bg-no-repeat" />
    );
  }

  return (
    <div className="relative h-[227px] w-[209px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/tyPQSzkEuK.png)] bg-cover bg-no-repeat" />
  );
}
