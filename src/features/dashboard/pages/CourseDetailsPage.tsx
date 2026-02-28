import { Link, Navigate, useParams } from "react-router-dom";
import {
  ROUTES,
  getCourseDetailsRoute,
  getCoursePaymentStepOneRoute,
} from "@/app/routes/paths";
import { COURSE_CARDS, getCourseById } from "../data/courses";

export default function CourseDetailsPage() {
  const { courseId = "" } = useParams();
  const course = getCourseById(courseId);

  if (!course) {
    return <Navigate to={ROUTES.courses} replace />;
  }

  const recommendations = COURSE_CARDS.filter((item) => item.id !== course.id).slice(
    0,
    3,
  );

  return (
    <>
      <main className="sm:hidden min-h-screen w-full bg-[#f7f9fc] pb-8">
        <div className="mx-auto w-full max-w-[390px]">
          <header className="flex h-[64px] items-center justify-between px-6 pt-6">
            <Link to={ROUTES.courses} className="flex h-8 w-8 items-center justify-center rounded-[16px]">
              <span
                className="h-6 w-6 bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${course.headerBackIcon})` }}
              />
            </Link>
            <span className="font-mulish text-[14px] font-bold leading-5 tracking-[0.1px] text-[#131313]">
              Courses
            </span>
            <span className="h-8 w-8" />
          </header>

          <div className="px-6">
            <section className="flex flex-col gap-6 rounded-[16px] bg-white p-5">
              <div className="inline-flex h-[36px] items-center rounded-full bg-[#dcfce7] px-4">
                <span className="font-mulish text-[16px] leading-6 text-[#008235]">
                  ✓ {course.statusBadge}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="font-arima text-[20px] font-bold leading-10 text-[#0a0a0a]">
                  {course.title}
                </h1>
                <p className="line-clamp-3 font-mulish text-[14px] leading-[26px] text-[#4a4a4a]">
                  {course.longDescription}
                </p>
              </div>

              <div className="flex items-center gap-10">
                <div className="flex items-start gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-[4px] bg-[#fef9c2]">
                    <span
                      className="h-[15px] w-[15px] bg-cover bg-no-repeat"
                      style={{ backgroundImage: `url(${course.statsStudentIcon})` }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-mulish text-[16px] leading-4 text-[#0a0a0a]">
                      {course.studentsCount}
                    </span>
                    <span className="font-mulish text-[12px] leading-[14px] text-[#697282]">
                      Students
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-[4px] bg-[#f5e6ff]">
                    <span
                      className="h-[15px] w-[15px] bg-cover bg-no-repeat"
                      style={{ backgroundImage: `url(${course.statsDurationIcon})` }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-mulish text-[16px] leading-4 text-[#0a0a0a]">
                      {course.durationLabel}
                    </span>
                    <span className="font-mulish text-[12px] leading-[14px] text-[#697282]">
                      Duration
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[1fr_69px] gap-3">
                <Link
                  to={getCoursePaymentStepOneRoute(course.id)}
                  className="flex h-[44px] items-center justify-center rounded-[36px] bg-[#b95af9] font-arima text-[16px] font-bold text-white"
                >
                  Buy Now
                </Link>
                <button className="flex h-[44px] items-center justify-center rounded-[14px] border border-[#b95af9]">
                  <span className="h-5 w-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/m4qg02cUSJ.png)] bg-cover bg-no-repeat" />
                </button>
              </div>
            </section>

            <section className="relative mt-4 overflow-hidden rounded-[16px] bg-white p-5">
              <div
                className="pointer-events-none absolute right-0 top-0 h-[44%] w-[40%] bg-contain bg-no-repeat opacity-90"
                style={{ backgroundImage: `url(${course.highlightsTopDecoration})` }}
              />
              <div className="relative z-[1] flex flex-col gap-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#b95af9]">
                  <span
                    className="h-8 w-8 bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${course.highlightsCardIcon})` }}
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <h3 className="font-arima text-[20px] font-bold leading-8 text-[#1a1a1a]">
                    Course Highlights
                  </h3>
                  <div className="flex flex-col gap-3">
                    {course.highlights.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="h-6 w-6 rounded-full bg-[#f0daff] text-center text-[12px] leading-6 text-[#8200db]">
                          ✓
                        </span>
                        <span className="font-mulish text-[14px] leading-[17.57px] text-[#4a4a4a]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-4 rounded-[16px] bg-white p-5">
              <div className="flex flex-col gap-3">
                <h3 className="font-arima text-[20px] font-bold leading-5 text-[#0a0a0a]">
                  What You&apos;ll Learn
                </h3>
                <p className="font-mulish text-[14px] leading-[17.57px] text-[#4a4a4a]">
                  {course.learnIntro}
                </p>
              </div>
              <div className="mt-3 flex flex-col gap-3">
                <span className="font-mulish text-[16px] font-medium leading-6 text-[#0a0a0a]">
                  Key Learning Objectives
                </span>
                <div className="flex flex-col gap-2.5">
                  {course.objectives.slice(0, 3).map((objective) => (
                    <div key={objective} className="flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full bg-[#f0daff] text-center text-[10px] leading-4 text-[#8200db]">
                        ✓
                      </span>
                      <span className="font-mulish text-[12px] leading-[15px] text-[#4a4a4a]">
                        {objective}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-4 rounded-[16px] bg-white p-3">
              <h3 className="font-arima text-[20px] font-bold leading-5 text-[#0a0a0a]">
                Courses Curriculum
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                {course.curriculum.map((item) => (
                  <div
                    key={item.index}
                    className="flex items-center gap-4 rounded-[12px] border border-[#f1f1f1] p-3"
                  >
                    <div
                      className={`flex h-[23px] w-6 items-center justify-center rounded-[4px] text-[16px] font-semibold ${
                        item.tone === "yellow"
                          ? "bg-[#fef9c2] text-[#a65f00]"
                          : item.tone === "green"
                          ? "bg-[#dcfce7] text-[#008235]"
                          : "bg-[#f3e8ff] text-[#b95af9]"
                      }`}
                    >
                      {item.index}
                    </div>
                    <div className="grow">
                      <p className="font-mulish text-[14px] font-medium leading-[21px] text-[#4a4a4a]">
                        {item.title}
                      </p>
                      <div className="mt-1 flex items-center gap-3">
                        <span className="font-mulish text-[12px] leading-[14px] text-[#7d7d7d]">
                          {item.lessons}
                        </span>
                        <span className="font-mulish text-[12px] leading-[14px] text-[#7d7d7d]">
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-4 rounded-[16px] bg-white p-3">
              <h3 className="font-arima text-[20px] font-bold leading-5 text-[#0a0a0a]">
                Meet Your Instructor
              </h3>
              <div className="mt-6 flex flex-col items-center gap-5">
                <div className="flex flex-col items-center gap-4">
                  <span
                    className="h-[72px] w-[72px] rounded-full bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${course.instructor.avatar})` }}
                  />
                  <span className="rounded-full bg-[#f3f4f6] px-[13px] py-[5px] font-mulish text-[14px] leading-[22px] text-[#354152]">
                    {course.instructor.years}
                  </span>
                </div>
                <div className="w-full">
                  <h4 className="font-arima text-[20px] font-bold leading-8 text-[#0a0a0a]">
                    {course.instructor.name}
                  </h4>
                  <p className="font-mulish text-[14px] leading-6 text-[#9810fa]">
                    {course.instructor.role}
                  </p>
                  <p className="mt-4 font-mulish text-[14px] leading-[26px] text-[#4a4a4a]">
                    {course.instructor.bio}
                  </p>
                  <div className="mt-4 flex flex-col gap-3">
                    {course.instructor.credentials.map((credential) => (
                      <div key={credential} className="flex items-center gap-2">
                        <span className="h-5 w-5 rounded-full bg-[#f0daff] text-center text-[12px] leading-5 text-[#8200db]">
                          ✓
                        </span>
                        <span className="font-mulish text-[14px] leading-6 text-[#354152]">
                          {credential}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-4">
              <h3 className="font-arima text-[20px] font-bold leading-9 text-[#0a0a0a]">
                Explore Other Courses
              </h3>
              <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
                {recommendations.map((item) => (
                  <div
                    key={item.id}
                    className="relative w-[305px] shrink-0 overflow-hidden rounded-[20px] border border-[#f1d1fe] bg-white p-4"
                  >
                    <div className="absolute right-0 top-0 flex h-[31px] w-[132px] items-center justify-center rounded-bl-[20px] bg-[#ece4ff]">
                      <span className="font-mulish text-[12px] font-bold leading-[15px] text-[#ac46ff]">
                        {item.badgeLabel}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-[40px] bg-[#f4e5ff]">
                        <span
                          className="h-6 w-6 bg-cover bg-no-repeat"
                          style={{ backgroundImage: `url(${item.icon})` }}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h4 className="font-mulish text-[20px] font-bold leading-[25px] text-[#1a1a1a]">
                          {item.title}
                        </h4>
                        <p className="line-clamp-1 font-mulish text-[14px] font-light leading-[30px] text-[#4a4a4a]">
                          {item.shortDescription}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className="h-6 w-6 bg-cover bg-no-repeat"
                            style={{ backgroundImage: `url(${item.seatsIcon})` }}
                          />
                          <span className="font-mulish text-[14px] leading-[17.57px] text-[#4a4a4a]">
                            {item.seatsLabel}
                          </span>
                        </div>
                        <div className="flex -space-x-[19px]">
                          {item.avatars.map((avatar) => (
                            <span
                              key={avatar}
                              className="h-[44px] w-[44px] rounded-full bg-cover bg-no-repeat ring-2 ring-white"
                              style={{ backgroundImage: `url(${avatar})` }}
                            />
                          ))}
                          <span className="z-[1] flex h-[44px] w-[44px] items-center justify-center rounded-[40px] bg-[#4e8fa7] text-[16px] font-bold text-white ring-2 ring-white">
                            20+
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          to={getCourseDetailsRoute(item.id)}
                          className="flex h-[44px] items-center justify-center rounded-[12px] border border-[#b95af9] font-arima text-[16px] font-bold text-[#b95af9]"
                        >
                          Check Details
                        </Link>
                        <Link
                          to={getCoursePaymentStepOneRoute(item.id)}
                          className="flex h-[44px] items-center justify-center rounded-[12px] bg-[#b95af9] font-arima text-[16px] font-bold text-white"
                        >
                          Resume
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <main className="hidden sm:block min-h-screen w-full bg-[#f7f9fc] px-4 py-6 sm:px-6 lg:px-8 2xl:px-10">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8">
        <section className="rounded-[16px] bg-white px-4 py-5 sm:px-6">
          <div className="flex items-start gap-4">
            <Link to={ROUTES.courses} className="mt-0.5 shrink-0">
              <span
                className="block h-8 w-8 bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${course.headerBackIcon})` }}
              />
            </Link>
            <div className="min-w-0">
              <p className="body-b2 text-[#495565]">{course.moduleLabel}</p>
              <div className="mt-1 flex flex-wrap items-center gap-3">
                <h2 className="subheading-medium font-bold text-[#101727]">
                  {course.title}
                </h2>
                <span className="caption-text text-[#101727]">
                  {course.courseStatus}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 xl:grid-cols-5">
          <article className="xl:col-span-3 rounded-[16px] bg-white p-5 sm:p-8">
            <div className="inline-flex h-[36px] items-center rounded-full bg-[#dcfce7] px-4">
              <span className="body-b2 text-[#008235]">✓ {course.statusBadge}</span>
            </div>

            <h1 className="mt-6 heading-h4-bold text-[28px] leading-[1.2] text-[#0a0a0a] sm:text-[36px]">
              {course.title}
            </h1>
            <p className="mt-3 body-b2 leading-[1.65] text-[#4a4a4a]">
              {course.longDescription}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <StatCard
                icon={course.statsStudentIcon}
                value={course.studentsCount}
                label="Students"
                bg="bg-[#fef9c2]"
              />
              <StatCard
                icon={course.statsDurationIcon}
                value={course.durationLabel}
                label="Duration"
                bg="bg-[#f3e8ff]"
              />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
              <Link
                to={getCoursePaymentStepOneRoute(course.id)}
                className="btn-text-lg flex h-12 items-center justify-center rounded-[12px] bg-[#b95af9] text-white"
              >
                Buy Now
              </Link>
              <button className="h-12 rounded-[14px] border border-[#b95af9] px-6">
                <span className="block h-5 w-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/Yyi6737yE1.png)] bg-cover bg-no-repeat" />
              </button>
            </div>
          </article>

          <aside className="relative overflow-hidden rounded-[16px] bg-white p-5 sm:p-8 xl:col-span-2">
            <div
              className="absolute right-4 top-4 h-[110px] w-[150px] bg-contain bg-no-repeat opacity-80"
              style={{ backgroundImage: `url(${course.highlightsTopDecoration})` }}
            />
            <div className="relative">
              <div className="flex h-20 w-20 items-center justify-center rounded-[16px] bg-[#b95af9]">
                <span
                  className="h-10 w-10 bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${course.highlightsCardIcon})` }}
                />
              </div>
              <h3 className="mt-8 heading-h5-bold text-[#1a1a1a]">
                Course Highlights
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {course.highlights.map((item) => (
                  <li key={item} className="body-b2 flex items-start gap-2 text-[#4a4a4a]">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#b95af9]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        <section className="rounded-[16px] bg-white p-5 sm:p-8">
          <h3 className="heading-h4-bold text-[30px] text-[#0a0a0a]">
            What You&apos;ll Learn
          </h3>
          <p className="mt-4 body-b1 text-[18px] font-light leading-[1.55] text-[#4a4a4a]">
            {course.learnIntro}
          </p>

          <h4 className="mt-6 subheading-small text-[#0a0a0a]">
            Key Learning Objectives
          </h4>
          <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-x-10">
            {course.objectives.map((objective) => (
              <div key={objective} className="body-b2 flex items-center gap-3 text-[#4a4a4a]">
                <span className="h-5 w-5 rounded-full bg-[#f0daff] text-center text-[12px] leading-5 text-[#8200db]">
                  ✓
                </span>
                <span>{objective}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[16px] bg-white p-5 sm:p-8">
          <h3 className="heading-h4-bold text-[30px] text-[#1a1a1a]">
            Course Curriculum
          </h3>
          <div className="mt-6 flex flex-col gap-3">
            {course.curriculum.map((item) => (
              <div
                key={item.index}
                className="flex flex-col gap-3 rounded-[14px] border border-[#f7f9fc] p-4 sm:flex-row sm:items-center"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] text-[16px] font-semibold ${
                    item.tone === "yellow"
                      ? "bg-[#fef9c2] text-[#a65f00]"
                      : item.tone === "green"
                      ? "bg-[#dcfce7] text-[#008235]"
                      : "bg-[#f3e8ff] text-[#8200db]"
                  }`}
                >
                  {item.index}
                </div>
                <div className="grow">
                  <p className="subheading-md text-[#1a1a1a]">{item.title}</p>
                  <div className="caption-text mt-1 flex items-center gap-4 text-[#4a4a4a]">
                    <span>{item.lessons}</span>
                    <span>{item.duration}</span>
                  </div>
                </div>
                <button className="btn-text-sm self-start text-[#9810fa] sm:self-center">
                  Start -&gt;
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[16px] bg-white p-5 sm:p-8">
          <h3 className="heading-h4-bold text-[30px] text-[#0a0a0a]">
            Meet Your Instructor
          </h3>
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end">
            <div className="flex shrink-0 flex-col items-center gap-4">
              <span
                className="h-32 w-32 rounded-full bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${course.instructor.avatar})` }}
              />
              <span className="body-b2 rounded-full bg-[#f3f4f6] px-4 py-1 text-[#354152]">
                {course.instructor.years}
              </span>
            </div>
            <div className="grow">
              <h4 className="subheading-medium font-bold text-[#0a0a0a]">
                {course.instructor.name}
              </h4>
              <p className="body-b2 text-[#9810fa]">{course.instructor.role}</p>
              <p className="mt-4 body-b2 leading-[1.6] text-[#495565]">
                {course.instructor.bio}
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {course.instructor.credentials.map((credential) => (
                  <div key={credential} className="body-b2 flex items-center gap-2 text-[#354152]">
                    <span className="h-5 w-5 rounded-full bg-[#f0daff] text-center text-[12px] leading-5 text-[#8200db]">
                      ✓
                    </span>
                    <span>{credential}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h3 className="heading-h4-bold text-[30px] text-[#0a0a0a]">
            Some other Recommendations
          </h3>
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
            {recommendations.map((item) => (
              <RecommendationCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
      </main>
    </>
  );
}

function StatCard({
  icon,
  value,
  label,
  bg,
}: {
  icon: string;
  value: string;
  label: string;
  bg: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className={`flex h-12 w-12 items-center justify-center rounded-[14px] ${bg}`}>
        <span
          className="h-6 w-6 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${icon})` }}
        />
      </span>
      <div>
        <p className="subheading-medium text-[#0a0a0a]">{value}</p>
        <p className="body-b2 text-[#697282]">{label}</p>
      </div>
    </div>
  );
}

function RecommendationCard({
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
        <div className="flex flex-col gap-2">
          <h4 className="subheading-medium font-bold text-[#1a1a1a]">{title}</h4>
          <p className="body-b2 font-light text-[#4a4a4a]">{shortDescription}</p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span
              className="h-6 w-6 bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${seatsIcon})` }}
            />
            <span className="caption-text text-[#4a4a4a]">{seatsLabel}</span>
          </div>
          <div className="flex -space-x-[19px]">
            {avatars.map((avatar) => (
              <span
                key={avatar}
                className="h-[44px] w-[44px] rounded-full bg-cover bg-no-repeat ring-2 ring-white"
                style={{ backgroundImage: `url(${avatar})` }}
              />
            ))}
            <span className="z-[1] flex h-[44px] w-[44px] items-center justify-center rounded-[40px] bg-[#4e8fa7] text-[16px] font-bold text-white ring-2 ring-white">
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
    </article>
  );
}
