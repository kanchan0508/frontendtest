import { Fragment } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

type PlanCard = {
  name: string;
  price: string;
  active?: boolean;
  popular?: boolean;
  highlight?: boolean;
};

const bulletIconUrl =
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/rFyh4apzb0.png";
const arrowLightUrl =
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/3yxe4svujA.png";
const arrowWhiteUrl =
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/KNu5UqXZ9t.png";
const matrixCheckUrl =
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/31D7D5ZAek.png";
const matrixCrossUrl =
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/dAK0haHPPa.png";

const cards: PlanCard[] = [
  { name: "Basic", price: "Free", active: true },
  { name: "Advance", price: "₹499/month" },
  { name: "Premium", price: "₹999/month", popular: true, highlight: true },
  { name: "Gold", price: "₹1499/month" },
  { name: "Diamond", price: "₹1999/month" },
];

const features = [
  "Wellness Gauge",
  "Daily Reflection",
  "Meditation",
  "Meditation",
  "Meditation",
  "Meditation",
];

const planColumns = ["Basic", "Advance", "Premium", "Gold", "Diamond"] as const;
const availability: Record<(typeof planColumns)[number], string[]> = {
  Basic: ["Basic detail", "check", "cross", "cross", "cross", "cross"],
  Advance: ["check", "check", "cross", "check", "cross", "cross"],
  Premium: ["check", "check", "check", "check", "check", "check"],
  Gold: ["check", "check", "check", "cross", "check", "check"],
  Diamond: ["check", "check", "check", "check", "check", "check"],
};

function PlanCardItem({ card }: { card: PlanCard }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-[20px] border p-6 ${
        card.highlight
          ? "border-[#ac46ff] bg-white shadow-[0_8px_24px_rgba(185,90,249,0.16)]"
          : "border-[#dee4eb] bg-white"
      }`}
    >
      {card.popular ? (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#f1d2fe] px-4 py-2">
          <span className="font-arima text-[12px] font-extrabold text-[#ac46ff]">Most Popular</span>
        </div>
      ) : null}

      <div className="mb-6">
        <p className="font-mulish text-[20px] font-semibold text-[#4a4a4a]">{card.name}</p>
        <p className="font-arima text-[32px] font-medium text-[#1a1a1a]">{card.price}</p>
      </div>

      <div className="mb-8 space-y-2">
        {[
          "Wellness Gauge (basic insights)",
          "Daily reflection (last 24 hours)",
          "Limited breathing exercises",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3">
            <span className="mt-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#b957fb]">
              <img src={bulletIconUrl} alt="" className="h-[14px] w-[14px] object-cover" />
            </span>
            <span className="font-mulish text-[14px] text-[#272d33]">{item}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className={`mt-auto flex h-[48px] w-full items-center justify-center gap-1 rounded-[12px] border font-arima text-[16px] font-bold ${
          card.active
            ? "border-[#b95af9] text-[#b95af9]"
            : "border-transparent bg-[#b95af9] text-white"
        }`}
      >
        <span>See all Features</span>
        <img
          src={card.active ? arrowLightUrl : arrowWhiteUrl}
          alt=""
          className="h-[16px] w-[16px] object-cover"
        />
      </button>
    </div>
  );
}

export default function ProfilePlansPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f7f9fc]">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-[14%] -top-[11%] h-[122%] w-[130%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/yKDp2hnZZh.png)] bg-cover bg-no-repeat" />
      </div>

      <header className="relative z-[2] border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto flex w-full max-w-[1440px] items-center px-4 py-4 sm:px-6 lg:px-[80px]">
          <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 font-mulish text-[16px] leading-[24px] text-[#495565]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
            <div className="hidden h-[24px] w-px bg-[#d1d5dc] sm:block" />
            <span className="font-arima text-[20px] font-bold leading-[28px] text-[#0a0a0a]">My Reports</span>
          </div>
        </div>
      </header>

      <main className="relative z-[2] mx-auto flex w-full max-w-[1120px] flex-col gap-8 px-4 pb-14 pt-8 sm:px-6 lg:px-0">
        <section className="rounded-[24px] bg-white px-4 py-6 sm:px-6 lg:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="font-mulish text-[32px] leading-[1.1] text-[#1a1a1a] sm:text-[36px]">
                Current Plan
              </h1>
              <p className="mt-2 font-mulish text-[20px] text-[#4a4a4a]">Basic - Free</p>
            </div>
            <div className="self-start rounded-full border border-[#ac46ff] bg-[#f8e8ff] px-3 py-1">
              <span className="font-mulish text-[12px] text-[#ac46ff]">Active</span>
            </div>
          </div>
          <div className="mt-4 rounded-[12px] border border-[rgba(231,234,233,0.5)] bg-[#f7edff] p-4">
            <p className="font-mulish text-[14px] text-[#4a4a4a]">
              You have access to essential wellness tools and daily reflections. Ready to deepen your
              journey?
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <PlanCardItem key={card.name} card={card} />
          ))}
        </section>

        <section className="overflow-x-auto rounded-[20px] bg-white p-3 sm:p-4">
          <div className="min-w-[900px]">
            <div className="grid grid-cols-6 gap-3">
              <div className="rounded-[16px] bg-[rgba(230,175,253,0.12)] p-6 font-mulish text-[24px] font-bold text-black">
                Features
              </div>
              {planColumns.map((plan) => (
                <div
                  key={plan}
                  className="rounded-[16px] bg-[rgba(230,175,253,0.12)] p-6 text-center font-mulish text-[20px] font-bold text-[#ac46ff]"
                >
                  {plan}
                </div>
              ))}

              {features.map((feature, rowIndex) => (
                <Fragment key={`row-${feature}-${rowIndex}`}>
                  <div className="rounded-[16px] bg-[rgba(230,175,253,0.12)] p-6 font-mulish text-[20px] font-medium">
                    {feature}
                  </div>
                  {planColumns.map((plan) => (
                    <div
                      key={`${feature}-${plan}-${rowIndex}`}
                      className="flex items-center justify-center rounded-[16px] bg-[rgba(230,175,253,0.12)] p-6"
                    >
                      {availability[plan][rowIndex] === "check" ? (
                        <img src={matrixCheckUrl} alt="" className="h-[28px] w-[28px] object-cover" />
                      ) : availability[plan][rowIndex] === "cross" ? (
                        <img src={matrixCrossUrl} alt="" className="h-[28px] w-[28px] object-cover" />
                      ) : (
                        <span className="font-mulish text-[20px] text-black">{availability[plan][rowIndex]}</span>
                      )}
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
