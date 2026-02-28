import { Link, Navigate, useParams } from "react-router-dom";
import {
  ROUTES,
  getCourseDetailsRoute,
  getCoursePaymentStepOneRoute,
  getCoursePaymentStepTwoRoute,
} from "@/app/routes/paths";
import { getCourseById } from "@/features/dashboard/data/courses";

export default function CoursePaymentReviewPage() {
  const { courseId = "" } = useParams();
  const course = getCourseById(courseId);

  if (!course) {
    return <Navigate to={ROUTES.courses} replace />;
  }

  return (
    <>
      <main className="sm:hidden min-h-screen w-full bg-[#f7f9fc] pb-8">
        <div className="mx-auto w-full max-w-[390px]">
          <header className="flex h-[64px] items-center px-6">
            <Link to={getCourseDetailsRoute(course.id)} className="flex items-center gap-2">
              <span className="h-6 w-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/VpzOLVU9MR.png)] bg-cover bg-no-repeat" />
              <span className="font-mulish text-[14px] font-bold leading-5 tracking-[0.1px] text-[#131313]">
                Courses
              </span>
            </Link>
          </header>

          <div className="px-6">
            <h1 className="text-center font-arima text-[20px] font-extrabold uppercase leading-[32.66px] text-[#1a1a1a]">
              review course details
            </h1>

            <div className="mt-6 flex flex-col gap-4">
              <section className="rounded-[12px] border border-[#f1f1f1] bg-white p-4">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[8px]">
                      <span
                        className="h-[26px] w-[26px] bg-cover bg-no-repeat"
                        style={{ backgroundImage: `url(${course.icon})` }}
                      />
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-arima text-[16px] font-bold leading-6 text-[#0a0a0a]">
                        {course.title}
                      </h2>
                      <p className="font-mulish text-[14px] leading-5 text-[#9810fa]">
                        by {course.instructor.name}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    <InfoTile
                      icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/NKVZUdmRAD.png"
                      label="Duration"
                      value={course.durationLabel}
                      mobile
                    />
                    <InfoTile
                      icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/5zAFASkAhh.png"
                      label="Modules"
                      value={course.lessonsLabel}
                      mobile
                    />
                    <InfoTile
                      icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/TMei6kDhrd.png"
                      label="Students"
                      value={course.studentsCount}
                      mobile
                    />
                    <InfoTile
                      icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/C2WfckyCrp.png"
                      label="Rating"
                      value={course.ratingLabel}
                      mobile
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-arima text-[14px] font-medium leading-7 text-[#0a0a0a]">
                      What&apos;s Included
                    </h3>
                    {[
                      "24 video lessons with lifetime access",
                      "Downloadable resources and worksheets",
                      "Certificate of completion",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="h-4 w-4 rounded-full bg-[#f0daff] text-center text-[10px] leading-4 text-[#8200db]">
                          ✓
                        </span>
                        <span className="font-mulish text-[12px] leading-5 text-[#4a4a4a]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <aside className="rounded-[16px] border border-[#f2f4f6] bg-white px-8 py-6">
                <div className="text-center">
                  <p className="font-mulish text-[14px] leading-6 text-[#4a4a4a]">Course Price</p>
                  <p className="mt-1 font-arima text-[32px] font-bold leading-10 text-[#53808c]">
                    {course.priceLabel}
                  </p>
                  <p className="mt-1 font-mulish text-[14px] leading-5 text-[#4a4a4a]">
                    One-time payment • Lifetime access
                  </p>
                </div>

                <div className="mt-5 rounded-[14px] bg-[#fefefe] p-4">
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/VSnWzYdeiy.png)] bg-cover bg-no-repeat" />
                    <span className="font-mulish text-[12px] font-medium leading-6 text-[#4a4a4a]">
                      30-day money-back guarantee
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="h-5 w-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/Bs71stgbCm.png)] bg-cover bg-no-repeat" />
                    <span className="font-mulish text-[12px] font-medium leading-6 text-[#4a4a4a]">
                      Instant access after payment
                    </span>
                  </div>
                </div>

                <Link
                  to={getCoursePaymentStepTwoRoute(course.id)}
                  className="mt-6 flex h-12 w-full items-center justify-center rounded-[36px] bg-[#b95af9] font-arima text-[16px] font-bold text-white"
                >
                  Continue to Schedule
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </main>

      <main className="hidden sm:block min-h-screen bg-[#f7f9fc]">
        <header className="border-t border-[#e5e7eb] bg-white px-4 py-4 sm:px-8 lg:px-14 2xl:px-20">
          <div className="mx-auto flex w-full max-w-[1280px] items-center">
            <Link to={getCourseDetailsRoute(course.id)} className="flex items-center gap-2">
              <span className="h-5 w-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/Ow1h9cwipn.png)] bg-cover bg-no-repeat" />
              <span className="body-b2 text-[#4a4a4a]">Back</span>
            </Link>
          </div>
        </header>

        <div className="px-4 pb-10 pt-8 sm:px-8 lg:px-14 2xl:px-20">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8">
            <section className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="heading-h5-bold text-[#0a0a0a]">Course Enrollment</h1>
                <span className="body-b2 text-[#4a4a4a]">Step 1 of 5</span>
              </div>
              <div className="grid grid-cols-5 gap-1">
                <span className="h-[10px] rounded-[10px] bg-[#b95af9]" />
                <span className="h-[10px] rounded-[10px] bg-[#e4e8f0]" />
                <span className="h-[10px] rounded-[10px] bg-[#e4e8f0]" />
                <span className="h-[10px] rounded-[10px] bg-[#e4e8f0]" />
                <span className="h-[10px] rounded-[10px] bg-[#e4e8f0]" />
              </div>
            </section>

            <section>
              <h2 className="heading-h4-bold text-[30px] text-[#0a0a0a]">
                Review Course Details
              </h2>
            </section>

            <section className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,2fr)_396px]">
              <article className="rounded-[24px] border border-[#f1f1f1] bg-white p-5 sm:p-7">
                <div className="rounded-[14px] bg-white p-4 sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[14px] bg-[#f3e8ff]">
                      <span
                        className="h-8 w-8 bg-cover bg-no-repeat"
                        style={{ backgroundImage: `url(${course.icon})` }}
                      />
                    </div>
                    <div>
                      <h3 className="heading-h5-bold text-[#0a0a0a]">{course.title}</h3>
                      <p className="body-b2 text-[#9810fa]">
                        by {course.instructor.name}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <InfoTile
                      icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/NKVZUdmRAD.png"
                      label="Duration"
                      value={course.durationLabel}
                    />
                    <InfoTile
                      icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/5zAFASkAhh.png"
                      label="Modules"
                      value={course.lessonsLabel}
                    />
                    <InfoTile
                      icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/TMei6kDhrd.png"
                      label="Students"
                      value={course.studentsCount}
                    />
                    <InfoTile
                      icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/C2WfckyCrp.png"
                      label="Rating"
                      value={course.ratingLabel}
                    />
                  </div>
                </div>

                <h4 className="mt-4 subheading-small text-[#0a0a0a]">What&apos;s Included</h4>
                <div className="mt-3 grid grid-cols-1 gap-x-10 gap-y-2 md:grid-cols-2">
                  {[
                    "24 video lessons with lifetime access",
                    "Downloadable resources and worksheets",
                    "Certificate of completion",
                    "Mobile and desktop access",
                    "Direct Q&A with instructor",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="h-5 w-5 rounded-full bg-[#f0daff] text-center text-[12px] leading-5 text-[#8200db]">
                        ✓
                      </span>
                      <span className="body-b2 text-[#354152]">{item}</span>
                    </div>
                  ))}
                </div>
              </article>

              <aside className="h-fit rounded-[16px] border border-[#f2f4f6] bg-white p-6">
                <div className="text-center">
                  <p className="body-b2 text-[#4a4a4a]">Course Price</p>
                  <p className="heading-h4-bold mt-1 text-[40px] text-[#53808c]">
                    {course.priceLabel}
                  </p>
                  <p className="caption-text mt-1 text-[#4a4a4a]">
                    One-time payment • Lifetime access
                  </p>
                </div>

                <div className="mt-5 rounded-[14px] bg-[#fefefe] p-4">
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/VSnWzYdeiy.png)] bg-cover bg-no-repeat" />
                    <span className="body-b2 font-medium text-[#4a4a4a]">
                      30-day money-back guarantee
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-5 w-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/Bs71stgbCm.png)] bg-cover bg-no-repeat" />
                    <span className="body-b2 font-medium text-[#4a4a4a]">
                      Instant access after payment
                    </span>
                  </div>
                </div>

                <Link
                  to={getCoursePaymentStepTwoRoute(course.id)}
                  className="btn-text-lg mt-6 flex h-12 w-full items-center justify-center rounded-[12px] bg-[#b95af9] text-white"
                >
                  Continue to Schedule
                </Link>
              </aside>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

function InfoTile({
  icon,
  label,
  value,
  mobile = false,
}: {
  icon: string;
  label: string;
  value: string;
  mobile?: boolean;
}) {
  return (
    <div className={`rounded-[10px] bg-[#faf5ff] ${mobile ? "px-3 py-2" : "p-3"}`}>
      <div className="flex items-center gap-2">
        <span
          className={`${mobile ? "h-3 w-3" : "h-4 w-4"} bg-cover bg-no-repeat`}
          style={{ backgroundImage: `url(${icon})` }}
        />
        <span className="font-mulish text-[12px] leading-5 text-[#495565]">{label}</span>
      </div>
      <div className={`mt-1 font-mulish ${mobile ? "text-[14px]" : "body-b2"} font-semibold text-[#0a0a0a]`}>
        {value}
      </div>
    </div>
  );
}

export function getCoursePaymentRouteFromId(courseId: string): string {
  return getCoursePaymentStepOneRoute(courseId);
}
