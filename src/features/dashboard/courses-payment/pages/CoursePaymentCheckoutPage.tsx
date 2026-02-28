import { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  ROUTES,
  getCoursePaymentStepFourRoute,
  getCoursePaymentStepThreeRoute,
} from "@/app/routes/paths";
import { getCourseById } from "@/features/dashboard/data/courses";
import {
  getStoredLearningTrack,
  getStoredSessionSelection,
} from "../storage";

function formatTrackLabel(track: string | null): string {
  if (track === "standard-track") return "Standard Track";
  if (track === "intensive-track") return "Intensive Track";
  return "Self-Paced";
}

export default function CoursePaymentCheckoutPage() {
  const { courseId = "" } = useParams();
  const navigate = useNavigate();
  const course = getCourseById(courseId);
  const selectedTrack = formatTrackLabel(
    course ? getStoredLearningTrack(course.id) : null,
  );
  const session = course ? getStoredSessionSelection(course.id) : null;
  const selectedStartDate = session?.dateLabel ?? "Apr 1, 2025";
  const selectedSessionDay = session?.day ?? "Mon";
  const selectedSessionTime = session?.time ?? "7:00 PM";
  const [paymentStatus, setPaymentStatus] = useState<"success" | "failed" | null>(
    null,
  );

  if (!course) {
    return <Navigate to={ROUTES.courses} replace />;
  }

  return (
    <main className="relative min-h-screen bg-[#f7f9fc]">
      <div className="pointer-events-none absolute left-0 top-[-62px] h-[1024px] w-full overflow-hidden opacity-40">
        <div className="absolute bottom-[-151px] left-[-193px] right-[-90px] top-[-175px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/vYxVvir9bq.png)] bg-cover bg-no-repeat" />
      </div>

      <div className="relative z-10 sm:hidden">
        <div className="mx-auto w-full max-w-[390px]">
          <header className="flex h-[64px] items-center gap-2 px-6 pt-4">
            <Link to={getCoursePaymentStepThreeRoute(course.id)}>
              <span className="block h-6 w-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/PHVjQ7EUba.png)] bg-cover bg-no-repeat" />
            </Link>
            <span className="flex grow justify-center font-mulish text-[14px] font-bold leading-5 tracking-[0.1px] text-[#131313]">
              Courses
            </span>
          </header>

          <div className="flex flex-col gap-6 px-6 pb-8 pt-3">
            <h1 className="text-center font-arima text-[20px] font-extrabold uppercase leading-[32.66px] text-[#1a1a1a]">
              Enrollment Summary
            </h1>

            <section className="rounded-[16px] bg-white p-3">
              <h3 className="font-arima text-[14px] font-medium leading-7 text-[#0a0a0a]">
                Course Details
              </h3>
              <div className="mt-4 rounded-[14px] bg-[rgba(255,255,255,0.7)]">
                <SummaryRowMobile label="Course:" value={course.title} />
                <SummaryRowMobile label="Instructor:" value={course.instructor.name} />
                <SummaryRowMobile label="Duration:" value={course.durationLabel} />
                <SummaryRowMobile label="Learning Pace:" value={selectedTrack} />
                <SummaryRowMobile label="Start Date:" value={selectedStartDate} />
                <SummaryRowMobile label="Session Day:" value={selectedSessionDay} />
                <SummaryRowMobile label="Session Time:" value={selectedSessionTime} />
              </div>
            </section>

            <section className="rounded-[16px] border border-[#f7ebff] bg-white px-6 py-6">
              <h3 className="font-arima text-[20px] font-medium leading-7 text-[#0a0a0a]">
                What You Get
              </h3>
              <div className="mt-4 flex flex-col gap-4">
                <BenefitItem
                  iconBg="bg-[#dcfce7]"
                  icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/NrLWUyUiMQ.png"
                  title="Lifetime Access"
                  subtitle="Learn at your own pace forever"
                />
                <BenefitItem
                  iconBg="bg-[#f3e8ff]"
                  icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/qE1hAMcEgx.png"
                  title="Certificate"
                  subtitle="Upon course completion"
                />
                <BenefitItem
                  iconBg="bg-[#fef9c2]"
                  icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/nQfJmrqOFf.png"
                  title={`${course.lessonsLabel} Video Lessons`}
                  subtitle="HD quality with subtitles"
                />
                <BenefitItem
                  iconBg="bg-[#dbeafe]"
                  icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/OipXFxvunQ.png"
                  title="Resources"
                  subtitle="Downloadable materials"
                />
              </div>
            </section>

            <section className="rounded-[16px] border border-[#f2f4f6] bg-white p-4">
              <h3 className="font-arima text-[16px] font-bold leading-7 text-[#1a1a1a]">
                Price Breakdown
              </h3>

              <div className="mt-4 flex flex-col gap-3">
                <PriceRowMobile label="Course Fee" value={course.priceLabel} />
                <PriceRowMobile label="Platform Fee" value="₹250" />
                <PriceRowMobile label="GST (18%)" value="₹945" />
                <div className="mt-1 flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] pb-3">
                  <span className="font-arima text-[16px] font-medium leading-7 text-[#0a0a0a]">
                    Total Amount
                  </span>
                  <span className="font-arima text-[20px] font-bold leading-8 text-[#0a0a0a]">
                    ₹6194
                  </span>
                </div>
              </div>

              <div className="mt-4 rounded-[8px] border border-[#b8f7cf] bg-[#f0fdf4] p-3">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 h-4 w-4 shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/mkYW49TwKh.png)] bg-cover bg-no-repeat" />
                  <p className="font-mulish text-[12px] leading-5 text-[#008000]">
                    30-day money-back guarantee. Not satisfied? Get a full
                    refund.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setPaymentStatus(Math.random() > 0.35 ? "success" : "failed")
                  }
                  className="flex h-12 items-center justify-center rounded-[36px] bg-[linear-gradient(135deg,rgba(185,90,249,1)_0%,rgba(186,83,255,1)_100%)] px-6 font-arima text-[16px] font-bold text-white"
                >
                  Continue to Schedule
                </button>
                <Link
                  to={getCoursePaymentStepThreeRoute(course.id)}
                  className="flex h-12 items-center justify-center rounded-[36px] border border-[#b95af9] px-6 font-arima text-[16px] font-bold text-[#b95af9]"
                >
                  Back
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>

      <header className="relative z-10 hidden border-t-[0.67px] border-t-[#e5e7eb] bg-white px-4 py-4 sm:block sm:px-8 lg:px-[80px]">
        <div className="mx-auto flex w-full max-w-[1440px] items-center">
          <Link
            to={getCoursePaymentStepThreeRoute(course.id)}
            className="flex items-center gap-2"
          >
            <span className="h-5 w-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/P6Wu1YSjgm.png)] bg-cover bg-no-repeat" />
            <span className="font-mulish text-[16px] leading-6 text-[#4a4a4a]">
              Back
            </span>
          </Link>
        </div>
      </header>

      <div className="relative z-10 mx-auto hidden w-full max-w-[1440px] px-4 pb-8 pt-8 sm:block sm:px-8 lg:px-[80px] 2xl:pb-12 2xl:pt-10">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 2xl:max-w-[1460px] 2xl:gap-10">
          <section className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h1 className="font-arima text-[24px] font-bold leading-8 text-[#0a0a0a]">
                Course Enrollment
              </h1>
              <span className="font-mulish text-[16px] leading-6 text-[#4a4a4a]">
                Step 4 of 5
              </span>
            </div>
            <div className="grid grid-cols-5 gap-1">
              <span className="h-[10px] rounded-[10px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/610rMze8Tb.png)] bg-cover bg-no-repeat" />
              <span className="h-[10px] rounded-[10px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/n9HJg9WEw5.png)] bg-cover bg-no-repeat" />
              <span className="h-[10px] rounded-[10px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/ump25mRYK0.png)] bg-cover bg-no-repeat" />
              <span className="h-[10px] rounded-[10px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/ZyCUD46mkx.png)] bg-cover bg-no-repeat" />
              <span className="h-[10px] rounded-[10px] bg-[#e4e8f0]" />
            </div>
          </section>

          <h2 className="font-arima text-[30px] font-bold leading-9 text-[#0a0a0a]">
            Enrollment Summary
          </h2>

          <section className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_463px]">
            <div className="flex flex-col gap-4">
              <article className="rounded-[16px] bg-white p-6">
                <h3 className="font-arima text-[20px] font-medium leading-7 text-[#0a0a0a]">
                  Course Details
                </h3>
                <div className="mt-4 rounded-[14px] bg-[rgba(255,255,255,0.7)] px-6 py-5">
                  <SummaryRow label="Course:" value={course.title} />
                  <SummaryRow label="Instructor:" value={course.instructor.name} />
                  <SummaryRow label="Duration:" value={course.durationLabel} />
                  <SummaryRow label="Learning Pace:" value={selectedTrack} />
                  <SummaryRow label="Start Date:" value={selectedStartDate} />
                  <SummaryRow label="Session Day:" value={selectedSessionDay} />
                  <SummaryRow label="Session Time:" value={selectedSessionTime} />
                </div>
              </article>

              <article className="rounded-[16px] border border-[#f7ebff] bg-white p-6">
                <h3 className="font-arima text-[20px] font-medium leading-7 text-[#0a0a0a]">
                  What You Get
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <BenefitItem
                    iconBg="bg-[#dcfce7]"
                    icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/YZZ9SGTFge.png"
                    title="Lifetime Access"
                    subtitle="Learn at your own pace forever"
                  />
                  <BenefitItem
                    iconBg="bg-[#f3e8ff]"
                    icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/vWDPUWFA85.png"
                    title="Certificate"
                    subtitle="Upon course completion"
                  />
                  <BenefitItem
                    iconBg="bg-[#fef9c2]"
                    icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/3pQbO4dCmV.png"
                    title={`${course.lessonsLabel} Video Lessons`}
                    subtitle="HD quality with subtitles"
                  />
                  <BenefitItem
                    iconBg="bg-[#dbeafe]"
                    icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/hk2Zcgt09Q.png"
                    title="Resources"
                    subtitle="Downloadable materials"
                  />
                </div>
              </article>
            </div>

            <aside className="rounded-[16px] border border-[#f2f4f6] bg-white px-8 py-6">
              <h3 className="font-arima text-[20px] font-bold leading-7 text-[#1a1a1a]">
                Price Breakdown
              </h3>

              <div className="mt-6 flex flex-col gap-3">
                <PriceRow label="Course Fee" value={course.priceLabel} />
                <PriceRow label="Platform Fee" value="₹250" />
                <PriceRow label="GST (18%)" value="₹945" />
                <div className="mt-1 flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] pb-3">
                  <span className="font-arima text-[18px] font-medium leading-7 text-[#0a0a0a]">
                    Total Amount
                  </span>
                  <span className="font-arima text-[24px] font-bold leading-8 text-[#0a0a0a]">
                    ₹6194
                  </span>
                </div>
              </div>

              <div className="mt-6 rounded-[14px] border border-[#b8f7cf] bg-[#f0fdf4] p-4">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 h-4 w-4 shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/AjHrrhHK2Z.png)] bg-cover bg-no-repeat" />
                  <p className="font-mulish text-[14px] leading-5 text-[#008000]">
                    30-day money-back guarantee. Not satisfied? Get a full
                    refund.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setPaymentStatus(Math.random() > 0.35 ? "success" : "failed")
                  }
                  className="flex h-12 items-center justify-center rounded-[12px] bg-[linear-gradient(135deg,rgba(185,90,249,1)_0%,rgba(186,83,255,1)_100%)] px-6 font-arima text-[16px] font-bold leading-[11px] text-white"
                >
                  Continue to Schedule
                </button>
                <Link
                  to={getCoursePaymentStepThreeRoute(course.id)}
                  className="flex h-12 items-center justify-center rounded-[12px] border border-[#b95af9] px-6 font-arima text-[16px] font-bold leading-[11px] text-[#b95af9]"
                >
                  Back
                </Link>
              </div>
            </aside>
          </section>
        </div>
      </div>

      {paymentStatus && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(7,11,24,0.35)] px-4 backdrop-blur-[6px]">
          {paymentStatus === "success" ? (
            <div className="relative flex w-full max-w-[412px] flex-col items-center gap-6 overflow-hidden rounded-[24px] border border-[#fffbf5] bg-white px-6 pb-10 pt-11 shadow-[0_25px_50px_0_rgba(9,15,46,0.5)] sm:px-8">
              <button
                type="button"
                onClick={() => setPaymentStatus(null)}
                className="absolute right-0 top-0 flex h-[44px] w-[44px] items-center justify-center"
              >
                <span className="h-6 w-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/3CEDm2kqad.png)] bg-cover bg-no-repeat" />
              </button>
              <div className="h-[90px] w-[90px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/o2ta9nBm3P.png)] bg-cover bg-no-repeat" />
              <div className="w-full">
                <h3 className="text-center font-arima text-[24px] font-bold leading-7 text-[#272d33]">
                  Payment Submitted!
                </h3>
                <p className="mt-2 text-center font-mulish text-[16px] leading-5 tracking-[0.25px] text-[#4a4a4a]">
                  Payment of ₹58 has been successfully submitted. You will receive
                  further updates on your dashboard
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate(ROUTES.postPurchaseDashboard)}
                className="flex h-[44px] w-full items-center justify-center rounded-[12px] bg-[linear-gradient(135deg,rgba(185,90,249,1)_0%,rgba(186,83,255,1)_100%)] px-8 font-arima text-[16px] font-bold leading-[11px] text-white"
              >
                Go to Dashboard
              </button>
            </div>
          ) : (
            <div className="relative flex w-full max-w-[412px] flex-col items-center gap-6 overflow-hidden rounded-[16px] border border-[#fffbf5] bg-white px-6 pb-9 pt-11 shadow-[0_25px_50px_0_rgba(9,15,46,0.5)] sm:px-8">
              <button
                type="button"
                onClick={() => setPaymentStatus(null)}
                className="absolute right-0 top-0 flex h-[44px] w-[44px] items-center justify-center"
              >
                <span className="h-6 w-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/TDEZSAABS5.png)] bg-cover bg-no-repeat" />
              </button>
              <div className="h-[100px] w-[100px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/tUqNKz5rwz.png)] bg-cover bg-no-repeat" />
              <div className="w-full">
                <h3 className="text-center font-arima text-[24px] font-bold leading-7 text-[#272d33]">
                  Payment Failed!
                </h3>
                <p className="mt-2 text-center font-mulish text-[16px] leading-5 tracking-[0.25px] text-[#4a4a4a]">
                  Payment of ₹58 was unsuccessful Please try again after some
                  time.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPaymentStatus(null)}
                className="flex h-[44px] w-full items-center justify-center rounded-[12px] bg-[linear-gradient(135deg,rgba(185,90,249,1)_0%,rgba(186,83,255,1)_100%)] px-8 font-arima text-[16px] font-bold leading-[11px] text-white"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      )}
    </main>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className="font-mulish text-[16px] leading-6 text-[#4a4a4a]">
        {label}
      </span>
      <span className="text-right font-mulish text-[16px] font-semibold leading-6 text-[#0a0a0a]">
        {value}
      </span>
    </div>
  );
}

function SummaryRowMobile({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="font-mulish text-[12px] leading-6 text-[#4a4a4a]">
        {label}
      </span>
      <span className="max-w-[190px] text-right font-mulish text-[12px] font-semibold leading-6 text-[#0a0a0a]">
        {value}
      </span>
    </div>
  );
}

function BenefitItem({
  iconBg,
  icon,
  title,
  subtitle,
}: {
  iconBg: string;
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] ${iconBg}`}
      >
        <span
          className="h-5 w-5 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${icon})` }}
        />
      </div>
      <div>
        <h4 className="font-mulish text-[16px] font-semibold leading-6 text-[#0a0a0a]">
          {title}
        </h4>
        <p className="font-mulish text-[14px] leading-5 text-[#495565]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function PriceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-mulish text-[16px] leading-6 text-[#4a4a4a]">
        {label}
      </span>
      <span className="font-mulish text-[16px] font-semibold leading-6 text-[#0a0a0a]">
        {value}
      </span>
    </div>
  );
}

function PriceRowMobile({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-mulish text-[12px] leading-6 text-[#4a4a4a]">
        {label}
      </span>
      <span className="font-mulish text-[14px] font-semibold leading-6 text-[#0a0a0a]">
        {value}
      </span>
    </div>
  );
}
