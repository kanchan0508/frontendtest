import { Link } from "react-router-dom";
import { getCourseDetailsRoute, getCoursePaymentStepOneRoute } from "@/app/routes/paths";
import { COURSE_CARDS } from "../data/courses";
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

export default function CoursesPage() {
  return (
    <DashboardSectionLayout title="Courses" subtitle={formatDate()}>
      <main className="w-full">
        <div className="mx-auto flex w-full max-w-[1240px] 2xl:max-w-[1700px] flex-col gap-8">
          <LiveSessionHero />

          <section className="flex w-full flex-col gap-6">
            <div className="flex items-center rounded-[12px]">
              <h2 className="heading-h5-bold text-[#1a1a1a]">
                Recommended Courses
              </h2>
            </div>

            <div className="sm:hidden grid grid-cols-1 gap-3">
              {COURSE_CARDS.map((course) => (
                <MobileCourseCard key={course.id} {...course} />
              ))}
            </div>

            <div className="hidden sm:grid grid-cols-1 gap-4 xl:grid-cols-2 2xl:gap-6">
              {COURSE_CARDS.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </DashboardSectionLayout>
  );
}

function MobileCourseCard({
  id,
  title,
  shortDescription,
  icon,
  seatsIcon,
  avatars,
  seatsLabel,
  badgeLabel,
}: {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  seatsIcon: string;
  avatars: string[];
  seatsLabel: string;
  badgeLabel: string;
}) {
  return (
    <article className="relative overflow-hidden rounded-[16px] border border-[#f1d1fe] bg-white p-4">
      <div className="absolute right-0 top-0 flex h-[26px] min-w-[108px] items-center justify-center rounded-bl-[16px] bg-[#ece4ff] px-3">
        <span className="font-mulish text-[11px] font-bold leading-[14px] text-[#ac46ff]">
          {badgeLabel}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#f4e5ff]">
          <span
            className="h-5 w-5 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${icon})` }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-arima text-[18px] font-bold leading-[24px] text-[#1a1a1a]">
            {title}
          </h3>
          <p className="font-mulish text-[13px] font-normal leading-[18px] text-[#4a4a4a]">
            {shortDescription}
          </p>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span
              className="h-5 w-5 bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${seatsIcon})` }}
            />
            <span className="font-mulish text-[12px] text-[#4a4a4a]">
              {seatsLabel}
            </span>
          </div>

          <div className="flex -space-x-3">
            {avatars.slice(0, 3).map((avatar) => (
              <span
                key={avatar}
                className="h-8 w-8 rounded-full bg-cover bg-no-repeat ring-2 ring-white"
                style={{ backgroundImage: `url(${avatar})` }}
              />
            ))}
            <span className="z-[1] flex h-8 w-8 items-center justify-center rounded-full bg-[#4e8fa7] font-mulish text-[11px] font-bold text-white ring-2 ring-white">
              20+
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link
            to={getCourseDetailsRoute(id)}
            className="flex h-[42px] items-center justify-center rounded-[10px] border border-[#b95af9] font-arima text-[14px] font-bold text-[#b95af9]"
          >
            Check Details
          </Link>
          <Link
            to={getCoursePaymentStepOneRoute(id)}
            className="flex h-[42px] items-center justify-center rounded-[10px] bg-[#b95af9] font-arima text-[14px] font-bold text-white"
          >
            Book Now
          </Link>
        </div>
      </div>
    </article>
  );
}

function LiveSessionHero() {
  return (
    <>
      <section className="sm:hidden relative w-full max-w-[346px] h-[134px] overflow-hidden rounded-[12px] bg-[#cda4d0] mx-auto">
        <div className="absolute inset-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/56T0Dvu3nn.png)] bg-cover bg-no-repeat opacity-70" />
        <div className="relative z-[2] flex h-full w-full flex-col justify-between p-[16px]">
          <div className="flex flex-col gap-[4px]">
            <h2 className="font-arima text-[14px] font-bold leading-[19.596px] uppercase text-white">
              Join the Live Session
            </h2>
            <p className="font-mulish text-[10px] font-normal leading-[12.55px] text-white">
              A safe, guided space to learn, reflect, and grow - live with an expert.
            </p>
          </div>
          <button className="flex h-[32px] w-[96px] items-center justify-center rounded-[10px] border border-[#ffcc70] bg-[#ffa500] text-white font-mulish text-[12px] font-bold leading-[15px] shadow-[0_2px_6px_0_#ffffff_inset]">
            Join Now
          </button>
        </div>
      </section>

      <section className="hidden sm:block relative min-h-[320px] w-full overflow-hidden rounded-[20px] bg-[#cda4d0] sm:min-h-[360px] lg:min-h-[391px]">
        <div className="absolute left-0 top-[11%] z-[1] h-[79%] w-[58.5%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/56T0Dvu3nn.png)] bg-cover bg-no-repeat" />

        <div className="relative z-[2] flex h-full w-full flex-col justify-center gap-8 px-5 py-20 sm:px-8 lg:px-[64px]">
          <div className="flex w-full max-w-[460px] flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="heading-h5-bold uppercase text-white">
                Join the Live Session
              </h2>
              <p className="body-b1 text-[18px] font-normal leading-[1.35] text-white sm:text-[20px]">
                A safe, guided space to learn, reflect, and grow - live with an
                expert.
              </p>
            </div>
            <button className="btn-text-lg flex h-[48px] w-[154px] items-center justify-center rounded-[12px] border border-[#ffcc70] bg-[#ffa500] text-white shadow-[0_2px_6px_0_#ffffff_inset]">
              Join Now
            </button>
          </div>
        </div>

        <div className="absolute right-[-6%] top-[-37%] z-[3] hidden h-[94%] w-[42.2%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/zGJX1Sm6H0.png)] bg-cover bg-no-repeat md:block" />
        <div className="absolute right-[5%] top-[2%] z-[4] hidden h-[104%] w-[40.1%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/VDZ6rkvgXy.png)] bg-cover bg-no-repeat md:block" />
        <div className="absolute right-[-16%] top-[30%] z-[5] hidden h-[77.4%] w-[34.8%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/E4iwzf3xt9.png)] bg-cover bg-no-repeat lg:block" />
        <div className="absolute right-[11%] top-[41%] z-[6] hidden h-[100.5%] w-[43%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/7PGqNgPp78.png)] bg-cover bg-no-repeat lg:block" />
      </section>
    </>
  );
}

function CourseCard({
  id,
  title,
  shortDescription,
  icon,
  seatsIcon,
  avatars,
  seatsLabel,
  badgeLabel,
}: {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  seatsIcon: string;
  avatars: string[];
  seatsLabel: string;
  badgeLabel: string;
}) {
  return (
    <article className="relative overflow-hidden rounded-[20px] border border-[#f1d1fe] bg-white p-5 pb-4">
      <div className="absolute right-0 top-0 flex h-[31px] w-[132px] items-center justify-center rounded-bl-[20px] bg-[#ece4ff]">
        <span className="caption-text font-bold text-[#ac46ff]">{badgeLabel}</span>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex h-[44px] w-[44px] items-center justify-center rounded-[40px] bg-[#f4e5ff]">
          <span
            className="h-6 w-6 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${icon})` }}
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h3 className="subheading-medium font-bold text-[#1a1a1a]">{title}</h3>
            <p className="body-b2 text-[16px] font-light leading-[1.45] text-[#4a4a4a]">
              {shortDescription}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span
                className="h-6 w-6 bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${seatsIcon})` }}
              />
              <span className="body-b2 text-[#4a4a4a]">{seatsLabel}</span>
            </div>

            <div className="flex -space-x-[19px]">
              {avatars.map((avatar) => (
                <span
                  key={avatar}
                  className="h-[44px] w-[44px] rounded-full bg-cover bg-no-repeat ring-2 ring-white"
                  style={{ backgroundImage: `url(${avatar})` }}
                />
              ))}
              <span className="z-[1] flex h-[44px] w-[44px] items-center justify-center rounded-[40px] bg-[#4e8fa7] text-[16px] font-bold leading-[20px] text-white ring-2 ring-white">
                20+
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Link
              to={getCourseDetailsRoute(id)}
              className="btn-text-lg flex h-[48px] items-center justify-center rounded-[12px] border border-[#b95af9] text-[#b95af9]"
            >
              Check Details
            </Link>
            <Link
              to={getCoursePaymentStepOneRoute(id)}
              className="btn-text-lg flex h-[48px] items-center justify-center rounded-[12px] bg-[#b95af9] text-white"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
