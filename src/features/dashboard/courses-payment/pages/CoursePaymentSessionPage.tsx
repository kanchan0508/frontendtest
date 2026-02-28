import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ROUTES,
  getCoursePaymentStepFourRoute,
  getCoursePaymentStepTwoRoute,
} from "@/app/routes/paths";
import { getCourseById } from "@/features/dashboard/data/courses";
import {
  getStoredSessionSelection,
  setStoredSessionSelection,
} from "../storage";

const weekdayHeaders = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const calendarColumns = [
  ["", "7", "14", "21", "28"],
  ["1", "8", "15", "22", "29"],
  ["2", "9", "16", "23", "30"],
  ["3", "10", "17", "24", ""],
  ["4", "11", "18", "25", ""],
  ["5", "12", "19", "26", ""],
  ["6", "13", "20", "27", ""],
];
const dayChoices = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const slotRows = Array.from({ length: 7 }, () => [
  "7:00 PM",
  "7:00 PM",
  "7:00 PM",
  "7:00 PM",
  "7:00 PM",
]);
const CALENDAR_MONTH_LABEL = "April 2025";

export default function CoursePaymentSessionPage() {
  const { courseId = "" } = useParams();
  const course = getCourseById(courseId);
  const [selectedDay, setSelectedDay] = useState("Mon");
  const [selectedSlot, setSelectedSlot] = useState("row-0-col-1");
  const [selectedDateDay, setSelectedDateDay] = useState("1");

  const disabledSlots = useMemo(
    () =>
      new Set([
        "row-0-col-2",
        "row-0-col-3",
        "row-0-col-4",
        "row-1-col-3",
        "row-1-col-4",
        "row-2-col-3",
        "row-2-col-4",
        "row-3-col-3",
        "row-3-col-4",
        "row-4-col-3",
        "row-4-col-4",
        "row-5-col-3",
        "row-5-col-4",
        "row-6-col-3",
        "row-6-col-4",
      ]),
    [],
  );

  useEffect(() => {
    if (!course) {
      return;
    }
    const stored = getStoredSessionSelection(courseId);
    if (!stored) {
      return;
    }
    setSelectedDay(stored.day);
    if (stored.dateLabel.startsWith("Apr ")) {
      const day = stored.dateLabel.replace("Apr ", "").replace(", 2025", "");
      if (day) {
        setSelectedDateDay(day);
      }
    }
  }, [course, courseId]);

  useEffect(() => {
    if (!course) {
      return;
    }
    const [rowToken, colToken] = selectedSlot.split("-col-");
    const row = Number(rowToken.replace("row-", ""));
    const col = Number(colToken);
    const slotTime = slotRows[row]?.[col] ?? "7:00 PM";
    setStoredSessionSelection(courseId, {
      dateLabel: `Apr ${selectedDateDay}, 2025`,
      day: selectedDay,
      time: slotTime,
    });
  }, [course, courseId, selectedDateDay, selectedDay, selectedSlot]);

  if (!course) {
    return <Navigate to={ROUTES.courses} replace />;
  }

  return (
    <main className="relative min-h-screen bg-[#f7f9fc]">
      <div className="pointer-events-none absolute left-0 top-[-62px] h-[1024px] w-full overflow-hidden opacity-40">
        <div className="absolute bottom-[-151px] left-[-193px] right-[-90px] top-[-175px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/cTFNQ9UQ3U.png)] bg-cover bg-no-repeat" />
      </div>

      <div className="sm:hidden relative z-10 min-h-screen">
        <div className="mx-auto w-full max-w-[390px]">
          <header className="flex h-[64px] items-center gap-2 px-6 pt-4">
            <Link to={getCoursePaymentStepTwoRoute(course.id)}>
              <span className="block h-6 w-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/3eKjyUnMFU.png)] bg-cover bg-no-repeat" />
            </Link>
            <span className="flex grow justify-center font-mulish text-[14px] font-bold leading-5 tracking-[0.1px] text-[#131313]">
              Courses
            </span>
          </header>

          <div className="flex flex-col items-center gap-6 px-6 pb-8 pt-3">
            <h1 className="font-arima text-[20px] font-extrabold uppercase leading-[32.66px] text-[#1a1a1a]">
              Book a Session
            </h1>

            <section className="w-full">
              <h3 className="font-mulish text-[16px] font-medium leading-7 text-[#0a0a0a]">
                Select Date
              </h3>
              <div className="mt-6 rounded-[8px] bg-white px-3 py-8">
                <div className="mb-4 flex items-center justify-between px-2">
                  <span className="h-6 w-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/dAbJiDJqd4.png)] bg-cover bg-no-repeat" />
                  <span className="font-mulish text-[20px] font-bold leading-6 tracking-[0.15px] text-[#1a1a1a]">
                    {CALENDAR_MONTH_LABEL}
                  </span>
                  <span className="h-6 w-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/Mz6FcS4hMy.png)] bg-cover bg-no-repeat" />
                </div>

                <div className="grid grid-cols-7 gap-[10px]">
                  {calendarColumns.map((col, colIdx) => (
                    <div key={weekdayHeaders[colIdx]} className="flex flex-col items-center gap-2">
                      <span className="font-mulish text-[16px] font-semibold leading-5 tracking-[0.1px] text-[#131313]">
                        {weekdayHeaders[colIdx]}
                      </span>
                      {col.map((day, rowIdx) => {
                        if (!day) {
                          return <span key={`${colIdx}-${rowIdx}`} className="h-[36.86px] w-full" />;
                        }
                        const isSelected = day === selectedDateDay;
                        const isDisabled = day === "8" || day === "2";
                        return (
                          <button
                            type="button"
                            key={`${colIdx}-${rowIdx}`}
                            onClick={() => !isDisabled && setSelectedDateDay(day)}
                            className={`h-[36.86px] w-full rounded-[4px] text-center font-mulish text-[16px] tracking-[0.2px] ${
                              isSelected
                                ? "bg-[#a3aaff] font-bold text-white"
                                : isDisabled
                                  ? "bg-[#e4e4e4] text-[#7d7d7d]"
                                  : "text-[#141619]"
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="w-full">
              <h3 className="font-mulish text-[16px] font-medium leading-7 text-[#0a0a0a]">
                Select Day &amp; Time
              </h3>
              <div className="mt-6 overflow-x-auto">
                <div className="flex min-w-[658px] gap-4">
                  <div className="flex w-[112px] flex-col gap-3">
                    {dayChoices.map((day) => {
                      const active = day === selectedDay;
                      return (
                        <button
                          key={day}
                          type="button"
                          onClick={() => setSelectedDay(day)}
                          className={`h-[44px] rounded-[8px] px-3 font-mulish text-[16px] font-medium leading-5 tracking-[0.1px] ${
                            active ? "bg-[#a3aaff] text-[#f1f9fe]" : "bg-[#ebebeb] text-[#4a4a4a]"
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex grow flex-col gap-3">
                    {slotRows.map((row, rowIdx) => (
                      <div key={`row-${rowIdx}`} className="grid grid-cols-5 gap-2">
                        {row.map((slot, colIdx) => {
                          const slotId = `row-${rowIdx}-col-${colIdx}`;
                          const isDisabled = disabledSlots.has(slotId);
                          const isSelected = selectedSlot === slotId;
                          return (
                            <button
                              type="button"
                              key={slotId}
                              onClick={() => !isDisabled && setSelectedSlot(slotId)}
                              disabled={isDisabled}
                              className={`h-[44px] rounded-[8px] border px-2 font-mulish text-[16px] font-medium leading-5 tracking-[0.1px] ${
                                isSelected
                                  ? "border-transparent bg-[#a3aaff] text-[#f1f9fe] shadow-[0_2px_4px_0_rgba(0,133,198,0.15)]"
                                  : isDisabled
                                    ? "border-transparent bg-[#ebebeb] text-[#4a4a4a]"
                                    : "border-[#ebebeb] text-[#0c0d0f]"
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <Link
              to={getCoursePaymentStepFourRoute(course.id)}
              className="mt-1 flex h-12 w-[233px] items-center justify-center rounded-[36px] bg-[linear-gradient(135deg,rgba(185,90,249,1)_0%,rgba(186,83,255,1)_100%)] font-arima text-[16px] font-bold text-white"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>

      <header className="relative z-10 hidden border-t-[0.67px] border-t-[#e5e7eb] bg-white px-4 py-4 sm:block sm:px-8 lg:px-[80px]">
        <div className="mx-auto flex w-full max-w-[1440px] items-center">
          <Link
            to={getCoursePaymentStepTwoRoute(course.id)}
            className="flex items-center gap-2"
          >
            <span className="h-5 w-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/hzpYdRQcYt.png)] bg-cover bg-no-repeat" />
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
                Step 3 of 5
              </span>
            </div>
            <div className="grid grid-cols-5 gap-1">
              <span className="h-[10px] rounded-[10px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/ACwuZmDngC.png)] bg-cover bg-no-repeat" />
              <span className="h-[10px] rounded-[10px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/cvYp9sLQ5D.png)] bg-cover bg-no-repeat" />
              <span className="h-[10px] rounded-[10px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/6ODMPLaig1.png)] bg-cover bg-no-repeat" />
              <span className="h-[10px] rounded-[10px] bg-[#e4e8f0]" />
              <span className="h-[10px] rounded-[10px] bg-[#e4e8f0]" />
            </div>
          </section>

          <h2 className="font-arima text-[30px] font-bold leading-9 text-[#0a0a0a]">
            Book a Session
          </h2>

          <section className="grid grid-cols-1 gap-8 xl:grid-cols-[461px_minmax(0,1fr)] 2xl:gap-11">
            <div className="flex flex-col gap-6">
              <h3 className="font-mulish text-[20px] font-medium leading-7 text-[#0a0a0a]">
                Select Date
              </h3>
              <div className="rounded-[8px] bg-white px-3 py-8">
                <div className="mb-4 flex items-center justify-between px-2">
                  <span className="h-6 w-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/XF1pbtFJmq.png)] bg-cover bg-no-repeat" />
                  <span className="font-mulish text-[20px] font-bold leading-6 tracking-[0.15px] text-[#1a1a1a]">
                    {CALENDAR_MONTH_LABEL}
                  </span>
                  <span className="h-6 w-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/KqmmFRJVWy.png)] bg-cover bg-no-repeat" />
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {calendarColumns.map((col, colIdx) => (
                    <div key={weekdayHeaders[colIdx]} className="flex flex-col items-center gap-[10px]">
                      <span className="font-mulish text-[16px] font-bold leading-5 tracking-[0.1px] text-[#131313]">
                        {weekdayHeaders[colIdx]}
                      </span>
                      {col.map((day, rowIdx) => {
                        if (!day) {
                          return <span key={`${colIdx}-${rowIdx}`} className="h-11 w-full" />;
                        }
                        const isSelected = day === selectedDateDay;
                        const isDisabled = day === "8" || day === "2";
                        return (
                          <button
                            type="button"
                            key={`${colIdx}-${rowIdx}`}
                            onClick={() => !isDisabled && setSelectedDateDay(day)}
                            className={`h-11 w-full rounded-[4px] text-center font-mulish text-[16px] leading-4 tracking-[0.2px] ${
                              isSelected
                                ? "bg-[#a3aaff] font-bold text-white"
                                : isDisabled
                                  ? "bg-[#e4e4e4] text-[#7d7d7d]"
                                  : "text-[#141619]"
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex h-full min-h-[438px] flex-col gap-6">
              <h3 className="font-mulish text-[20px] font-medium leading-7 text-[#0a0a0a]">
                Select Day &amp; Time
              </h3>
              <div className="flex flex-1 flex-col gap-4 sm:grid sm:grid-cols-[112px_minmax(0,1fr)]">
                <div className="flex gap-2 overflow-x-auto sm:flex-col sm:gap-3">
                  {dayChoices.map((day) => {
                    const active = day === selectedDay;
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setSelectedDay(day)}
                        className={`h-[44px] min-w-[84px] rounded-[8px] px-3 text-center font-mulish text-[14px] font-medium leading-5 tracking-[0.1px] sm:h-[58px] sm:min-w-0 sm:text-[16px] ${
                          active ? "bg-[#a3aaff] text-[#f1f9fe]" : "bg-[#ebebeb] text-[#4a4a4a]"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                <div className="overflow-x-auto">
                  <div className="flex min-w-[520px] flex-col gap-3 sm:min-w-0">
                    {slotRows.map((row, rowIdx) => (
                      <div key={`row-${rowIdx}`} className="grid grid-cols-5 gap-2">
                        {row.map((slot, colIdx) => {
                          const slotId = `row-${rowIdx}-col-${colIdx}`;
                          const isDisabled = disabledSlots.has(slotId);
                          const isSelected = selectedSlot === slotId;
                          return (
                            <button
                              type="button"
                              key={slotId}
                              onClick={() => !isDisabled && setSelectedSlot(slotId)}
                              disabled={isDisabled}
                              className={`h-[44px] rounded-[8px] border px-2 text-center font-mulish text-[13px] font-medium leading-5 tracking-[0.1px] sm:h-[58px] sm:px-3 sm:text-[16px] ${
                                isSelected
                                  ? "border-transparent bg-[#a3aaff] text-[#f1f9fe] shadow-[0_2px_4px_0_rgba(0,133,198,0.15)]"
                                  : isDisabled
                                    ? "border-transparent bg-[#ebebeb] text-[#4a4a4a]"
                                    : "border-[#ebebeb] bg-transparent text-[#0c0d0f]"
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              to={getCoursePaymentStepTwoRoute(course.id)}
              className="flex h-12 items-center justify-center rounded-[12px] border border-[#b95af9] px-6 font-arima text-[16px] font-bold leading-[11px] text-[#b95af9]"
            >
              Cancel
            </Link>
            <Link
              to={getCoursePaymentStepFourRoute(course.id)}
              className="flex h-12 items-center justify-center rounded-[12px] bg-[linear-gradient(135deg,rgba(185,90,249,1)_0%,rgba(186,83,255,1)_100%)] px-6 font-arima text-[16px] font-bold leading-[11px] text-white"
            >
              Continue to Payment
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
