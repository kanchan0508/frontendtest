import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ROUTES,
  getCoursePaymentStepOneRoute,
  getCoursePaymentStepThreeRoute,
} from "@/app/routes/paths";
import { getCourseById } from "@/features/dashboard/data/courses";
import {
  type CourseLearningTrack,
  getStoredLearningTrack,
  setStoredLearningTrack,
} from "../storage";

type LearningPaceId = CourseLearningTrack;

export default function CoursePaymentSchedulePage() {
  const { courseId = "" } = useParams();
  const course = getCourseById(courseId);
  const [selectedPace, setSelectedPace] =
    useState<LearningPaceId>("standard-track");

  useEffect(() => {
    if (!course) {
      return;
    }
    const savedTrack = getStoredLearningTrack(course.id);
    if (savedTrack) {
      setSelectedPace(savedTrack);
    }
  }, [course]);

  useEffect(() => {
    if (!course) {
      return;
    }
    setStoredLearningTrack(course.id, selectedPace);
  }, [course, selectedPace]);

  if (!course) {
    return <Navigate to={ROUTES.courses} replace />;
  }

  return (
    <main className="relative min-h-screen w-full bg-[#f7f9fc]">
      <div className="pointer-events-none absolute left-0 top-[-62px] h-[1024px] w-full overflow-hidden opacity-40">
        <div className="absolute bottom-[-151px] left-[-193px] right-[-90px] top-[-175px] z-[1] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/hvziFdathG.png)] bg-cover bg-no-repeat" />
      </div>

      <div className="sm:hidden relative z-10 min-h-screen">
        <header className="bg-white px-6">
          <div className="flex h-[64px] items-center gap-2 pt-4">
            <Link
              to={getCoursePaymentStepOneRoute(course.id)}
              className="flex items-center gap-2"
            >
              <span className="h-5 w-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/1bo2vwbW6f.png)] bg-cover bg-no-repeat" />
            </Link>
            <span className="flex grow justify-center font-mulish text-[14px] font-bold leading-5 tracking-[0.1px] text-[#131313]">
              Courses
            </span>
          </div>
        </header>

        <div className="mx-auto flex w-full max-w-[390px] flex-col gap-6 px-6 pb-8 pt-2">
          <h2 className="text-center font-arima text-[20px] font-extrabold uppercase leading-[32.66px] text-[#1a1a1a]">
            Select a learning pace that fits your lifestyle
          </h2>

          <section className="flex flex-col gap-4">
            <PaceCard
              title="Self-Paced"
              description="Learn at your own speed with lifetime access"
              icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/3kNsxcQZWt.png"
              rowIcon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/6fyLTmJUvD.png"
              iconWrapperClass="bg-[#ffa500]"
              cardClass="bg-[#fff7ea] border border-[rgba(255,165,0,0.1)]"
              selected={selectedPace === "self-paced"}
              onClick={() => setSelectedPace("self-paced")}
            />

            <PaceCard
              title="Standard Track"
              description="Structured 8-week program with milestones."
              icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/oWekD9LP48.png"
              rowIcon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/owSm4hvwxT.png"
              iconWrapperClass="bg-[linear-gradient(135deg,rgba(185,90,249,1)_0%,rgba(186,83,255,1)_100%)]"
              cardClass="bg-[#f5e7ff]"
              selected={selectedPace === "standard-track"}
              onClick={() => setSelectedPace("standard-track")}
            />

            <PaceCard
              title="Intensive Track"
              description="Fast-paced learning with guided support."
              icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/1WDCtgMsjZ.png"
              rowIcon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/sH9XhTHGVe.png"
              iconWrapperClass="bg-[#4e8fa7]"
              cardClass="bg-[#f6fdff] border border-[#d8f4ff]"
              selected={selectedPace === "intensive-track"}
              onClick={() => setSelectedPace("intensive-track")}
            />
          </section>

          <Link
            to={getCoursePaymentStepThreeRoute(course.id)}
            className="mt-1 flex h-12 w-full items-center justify-center rounded-[36px] bg-[linear-gradient(135deg,rgba(185,90,249,1)_0%,rgba(186,83,255,1)_100%)] font-arima text-[16px] font-bold text-white"
          >
            Continue to Payment
          </Link>
        </div>
      </div>

      <div className="hidden sm:block main-container relative mx-auto my-0 min-h-[900px] w-full bg-[#f7f9fc] 2xl:min-h-[980px]">
        <div className="relative z-[3] ml-0 mr-0 mt-0 flex h-[73px] w-full flex-col items-start border-t-[0.67px] border-t-[#e5e7eb] bg-[#fff] px-[80px] pb-[0.67px] pt-[16px] 2xl:h-[84px] 2xl:px-[110px] 2xl:pt-[22px]">
          <div className="relative z-[4] flex h-[40px] w-full items-center justify-between self-stretch">
            <Link
              to={getCoursePaymentStepOneRoute(course.id)}
              className="relative z-[5] flex w-[65px] items-center gap-[8px]"
            >
              <div className="relative z-[6] h-[20px] w-[20px] shrink-0 overflow-hidden bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/1bo2vwbW6f.png)] bg-cover bg-no-repeat" />
              <span className="relative z-[7] flex h-[24px] w-[37px] shrink-0 items-start justify-center whitespace-nowrap text-center font-mulish text-[16px] font-normal leading-[24px] text-[#4a4a4a]">
                Back
              </span>
            </Link>
          </div>
        </div>

        <div className="relative z-[8] mx-auto mt-0 flex h-[526px] w-full max-w-[1280px] flex-col items-start justify-center gap-[32px] px-[24px] pb-0 pt-[32px] 2xl:h-[620px] 2xl:max-w-[1460px] 2xl:gap-[40px] 2xl:px-[30px] 2xl:pt-[40px]">
          <div className="relative z-[9] flex w-full shrink-0 flex-col items-start gap-[16px] self-stretch">
            <div className="relative z-10 flex h-[32px] w-full shrink-0 items-center justify-between self-stretch">
              <div className="relative z-[11] flex w-[203px] shrink-0 items-center justify-center gap-[10px]">
                <span className="relative z-[12] h-[32px] shrink-0 basis-auto whitespace-nowrap text-left font-arima text-[24px] font-bold leading-[32px] text-[#0a0a0a]">
                  Course Enrollment
                </span>
              </div>
              <div className="relative z-[13] flex w-[88px] shrink-0 items-center justify-end gap-[10px]">
                <span className="relative z-[14] flex h-[24px] w-[88px] shrink-0 items-start justify-start whitespace-nowrap text-left font-mulish text-[16px] font-normal leading-[24px] text-[#4a4a4a]">
                  Step 2 of 5
                </span>
              </div>
            </div>
            <div className="relative z-[15] flex w-full shrink-0 items-center gap-[4px] self-stretch">
              <div className="relative z-[16] h-[10px] grow shrink-0 basis-0 rounded-[10px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/oeVbEF8jbS.png)] bg-cover bg-no-repeat" />
              <div className="relative z-[17] h-[10px] grow shrink-0 basis-0 rounded-[10px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/ouSxvr4wc4.png)] bg-cover bg-no-repeat" />
              <div className="relative z-[18] h-[10px] grow shrink-0 basis-0 rounded-[10px] bg-[#e4e8f0]" />
              <div className="relative z-[19] h-[10px] grow shrink-0 basis-0 rounded-[10px] bg-[#e4e8f0]" />
              <div className="relative z-20 h-[10px] grow shrink-0 basis-0 rounded-[10px] bg-[#e4e8f0]" />
            </div>
          </div>

          <div className="relative z-[21] flex grow shrink-0 basis-0 flex-col items-start justify-between self-stretch">
            <div className="relative z-[22] flex w-full shrink-0 flex-col items-start gap-[4px] self-stretch">
              <span className="relative z-[23] h-[36px] shrink-0 basis-auto self-stretch whitespace-nowrap text-left font-arima text-[30px] font-bold leading-[36px] text-[#0a0a0a]">
                Select a learning pace that fits your lifestyle
              </span>
            </div>

            <div className="relative z-[24] flex w-full shrink-0 items-center gap-[16px] 2xl:gap-[24px]">
              <DesktopPaceCard
                title="Self Paced"
                description="Learn at your own speed with lifetime access"
                icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/3kNsxcQZWt.png"
                iconWrapperClass="bg-[#ffa500]"
                cardClass="bg-[#fff7ea]"
                selected={selectedPace === "self-paced"}
                onClick={() => setSelectedPace("self-paced")}
              />

              <DesktopPaceCard
                title="Standard Track"
                description="Structured 8-week program with milestones."
                icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/oWekD9LP48.png"
                iconWrapperClass="bg-[linear-gradient(135deg,rgba(185,90,249,1)_0%,rgba(186,83,255,1)_100%)]"
                cardClass="bg-[#f5e7ff]"
                selected={selectedPace === "standard-track"}
                onClick={() => setSelectedPace("standard-track")}
              />

              <DesktopPaceCard
                title="Intensive Track"
                description="Fast-paced learning with guided support."
                icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/1WDCtgMsjZ.png"
                iconWrapperClass="bg-[#317a96]"
                cardClass="bg-[#f6fdff]"
                selected={selectedPace === "intensive-track"}
                onClick={() => setSelectedPace("intensive-track")}
              />
            </div>

            <div className="relative z-[43] flex w-full shrink-0 items-center justify-center self-stretch">
              <Link
                to={getCoursePaymentStepThreeRoute(course.id)}
                className="relative z-[44] flex h-[48px] w-[416px] shrink-0 items-center justify-center gap-[4px] overflow-hidden rounded-[12px] bg-[linear-gradient(135deg,rgba(185,90,249,1)_0%,rgba(186,83,255,1)_100%)] px-[24px] pb-[14px] pt-[14px] shadow-[inset_0px_2px_6px_0_#ffffff] 2xl:h-[56px] 2xl:w-[500px]"
              >
                <span className="relative z-[45] flex h-[11px] w-[150px] shrink-0 basis-auto items-start justify-center whitespace-nowrap text-center font-arima text-[16px] font-bold leading-[11px] text-[#fff]">
                  Continue to Payment
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function PaceCard({
  title,
  description,
  icon,
  rowIcon,
  iconWrapperClass,
  cardClass,
  selected,
  onClick,
}: {
  title: string;
  description: string;
  icon: string;
  rowIcon: string;
  iconWrapperClass: string;
  cardClass: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full flex-col items-start gap-2 rounded-[16px] px-3 pb-3 pt-3 ${cardClass} ${
        selected ? "border border-[#b95af9] shadow-[4px_4px_4px_0_#f1dcff]" : ""
      }`}
    >
      <div className={`flex h-[56px] w-[56px] items-center justify-center rounded-[14px] ${iconWrapperClass}`}>
        <div
          className="h-[28px] w-[28px] bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${icon})` }}
        />
      </div>
      <div className="flex w-full flex-col items-start">
        <span className="font-arima text-[16px] font-medium leading-7 text-[#0a0a0a]">
          {title}
        </span>
        <span className="font-mulish text-[12px] leading-6 text-[#4a4a4a] text-left">
          {description}
        </span>
      </div>
      <div className="flex h-[28px] items-center self-stretch">
        <div className="flex items-center gap-2">
          <span
            className="h-4 w-4 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${rowIcon})` }}
          />
          <span className="whitespace-nowrap font-mulish text-[12px] leading-6 text-[#4a4a4a]">
            Flexible Timeline
          </span>
        </div>
      </div>
    </button>
  );
}

function DesktopPaceCard({
  title,
  description,
  icon,
  iconWrapperClass,
  cardClass,
  selected,
  onClick,
}: {
  title: string;
  description: string;
  icon: string;
  iconWrapperClass: string;
  cardClass: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex w-[400px] shrink-0 flex-col items-start gap-[20px] rounded-[16px] px-[32px] pb-[24px] pt-[24px] 2xl:h-[214px] 2xl:w-[470px] 2xl:gap-[24px] 2xl:px-[36px] ${
        selected ? "border border-[#b95af9] shadow-[4px_4px_4px_0_#f1dcff]" : ""
      } ${cardClass}`}
    >
      <div className={`flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[14px] ${iconWrapperClass}`}>
        <div
          className="h-[28px] w-[28px] shrink-0 overflow-hidden bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${icon})` }}
        />
      </div>
      <div className="flex w-full shrink-0 flex-col items-start gap-[8px] self-stretch">
        <span className="h-[28px] shrink-0 basis-auto self-stretch whitespace-nowrap text-left font-arima text-[20px] font-medium leading-[28px] text-[#0a0a0a]">
          {title}
        </span>
        <span className="h-[24px] shrink-0 basis-auto self-stretch whitespace-nowrap text-left font-mulish text-[16px] font-normal leading-[24px] text-[#4a4a4a]">
          {description}
        </span>
      </div>
    </button>
  );
}
