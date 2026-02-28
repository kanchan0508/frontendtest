const moodFaces = [
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/wYHTpe934y.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/T8cTS1BUjc.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/Ks0oCcedHy.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/gYzmxg7KX6.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/9T6kpO7sU7.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/bfNMt9Omwa.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/53ZqJsCOoh.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/eG4gW8ucF7.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/gKJOzgsL8o.png",
];

const moodDots = [
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/BaX7BjHfQB.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/k0tNVuGPL1.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/UvF4wY7gTr.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/YvzVz1H6z2.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/zUXUoqJAVy.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/EnRbyDR5Xs.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/qac6zafqoe.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/U06FgARUxQ.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/iWdLzWY0c4.png",
];

const upcomingSessionImages = [
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/g1umPisBUy.png",
  "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/39oy7nDtiB.png",
];

const upcomingCoach = [
  {
    avatar: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/1YHMi3fqkm.png",
    star: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/X2fQktQJwW.png",
  },
  {
    avatar: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/CPKki7nj9d.png",
    star: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/KMWDXc95sc.png",
  },
  {
    avatar: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/us4vypDAix.png",
    star: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/3wCMGoWWLT.png",
  },
];

import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/routes/paths";
import { hasIncompleteProfile } from "@/utils/onboarding";

export default function PostPurchaseCenterSection() {
  const navigate = useNavigate();
  const profileIncomplete = hasIncompleteProfile();

  return (
    <section className="flex w-full flex-col gap-6">
      <div className="rounded-[20px] bg-white px-6 py-5">
        <h3 className="font-arima text-[20px] font-bold leading-[32.66px] text-[#1a1a1a]">
          How Are You Doing Today?
        </h3>
        <p className="font-mulish text-[16px] leading-5 text-[#4a4a4a]">
          Track your mood by clicking on the right mood for today!
        </p>
        <div className="mt-4 flex flex-col gap-3">
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9">
            {moodFaces.map((img) => (
              <button
                key={img}
                className="mx-auto h-12 w-12 bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3 px-2 sm:grid-cols-5 lg:grid-cols-9">
            {moodDots.map((img) => (
              <span
                key={img}
                className="mx-auto h-5 w-5 rounded-full bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="rounded-[20px] border border-[#e0f0ff] bg-white px-6 py-5">
          <div className="mx-auto h-[100px] w-[100px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/HBjjP5WwrY.png)] bg-cover bg-no-repeat" />
          <h3 className="mt-4 text-center font-arima text-[20px] font-bold leading-[30px] text-[#242424]">
            21- Day Streak
          </h3>
          <p className="text-center font-mulish text-[16px] leading-[18px] text-[#4a4a4a]">
            Log in daily , keep streak up
          </p>
          <div className="mt-4 flex items-center justify-between gap-2">
            <CircleIcon image="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/ccWLVCyzqD.png" />
            <CircleIcon image="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/PYK9CwcFfB.png" />
            <CircleIcon image="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/tjQh4TYwvP.png" />
            <LetterDot letter="T" active />
            <LetterDot letter="F" />
            <LetterDot letter="S" />
            <LetterDot letter="S" />
          </div>
        </div>

        <div className="rounded-[20px] border border-[#e0f0ff] bg-white px-6 py-5">
          <h3 className="text-center font-arima text-[20px] font-bold leading-[32.66px] text-[#1a1a1a]">
            Your Overall Progress
          </h3>
          <div className="mx-auto mt-2 h-[152px] w-[152px] rounded-full bg-[#ffebc9] p-[6px]">
            <div className="relative h-full w-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/RqtYGUq52Y.png)] bg-cover bg-no-repeat">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mulish text-[24px] font-bold leading-[30px] text-[#202125]">
                  85%
                </span>
              </div>
            </div>
          </div>
          <p className="mt-3 text-center font-mulish text-[16px] leading-[20.08px] text-[#4a4a4a]">
            Based on your activities, reflections, and sessions.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate(ROUTES.profile)}
          className={`rounded-[20px] border border-[#e0f0ff] bg-white px-6 py-5 text-left ${
            profileIncomplete ? "" : "hidden sm:block"
          }`}
        >
          <h3 className="text-center font-arima text-[20px] font-bold leading-[22px] text-[#101727]">
            Complete your profile
          </h3>
          <div className="relative mx-auto mt-4 h-[148px] w-[148px]">
            <div className="absolute inset-0 rounded-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/8pA5TSBoOW.png)] bg-cover bg-no-repeat" />
            <div className="absolute inset-0 rounded-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/8FrnEU7zfm.png)] bg-cover bg-no-repeat" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-arima text-[32px] font-bold text-black">
              60%
            </span>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <ProfileRow
              icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/GBYptsa9t2.png"
              labelColor="text-[#1a1a1a]"
            />
            <ProfileRow
              icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/AuCHQ2rBdU.png"
              labelColor="text-[#1a1a1a]"
            />
            <ProfileRow
              icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/O7CPgM3NG5.png"
              labelColor="text-[#4a4a4a]"
            />
          </div>
        </button>
      </div>

      <SectionTitle title="Upcoming Sessions" />
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {upcomingSessionImages.map((img, idx) => (
          <div
            key={img}
            className="rounded-[20px] border border-[#f1d1fe] bg-white px-4 pb-3 pt-5"
          >
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="h-[127px] w-[150px] shrink-0 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${img})` }} />
              <div className="flex flex-1 flex-col justify-between gap-3">
                <div>
                  <p className="font-mulish text-[12px] font-bold text-[#4a4a4a]">Module AM1</p>
                  <h4 className="font-arima text-[20px] font-extrabold uppercase leading-[32.66px] text-[#1a1a1a]">
                    Connect to self
                  </h4>
                  <p className="font-mulish text-[16px] leading-[20.08px] text-[#4a4a4a]">
                    A guided psychometric journey to understand your personality, strengths, and inner drivers.
                  </p>
                </div>
                <p className="font-mulish text-[16px] font-semibold text-[#4a4a4a]">Starts in: 24 mins</p>
              </div>
            </div>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end">
              <div className="flex-1">
                <div className="h-3 overflow-hidden rounded-[10px] bg-[#f8eeff]">
                  <div
                    className="h-3 w-[75%] rounded-[10px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/goidfzMsov.png)] bg-cover bg-no-repeat"
                    style={
                      idx === 1
                        ? {
                            backgroundImage:
                              "url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/ou7BrYZtA3.png)",
                          }
                        : undefined
                    }
                  />
                </div>
                <p className="mt-1 font-mulish text-[16px] text-[#6f6f6f]">75% Complete</p>
              </div>
              <button className="flex h-12 w-[151px] items-center justify-center gap-1 rounded-[12px]">
                <span className="font-arima text-[16px] font-bold text-[#b95af9]">Join Now</span>
                <span className="h-6 w-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/TshgeZ1itv.png)] bg-cover bg-no-repeat" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <SectionTitle title="Upcoming Coach Sessions" />
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        {upcomingCoach.map((coach) => (
          <div
            key={coach.avatar}
            className="flex min-h-[315px] flex-col justify-between rounded-[16px] border border-[#f1d1ff] bg-white px-5 py-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div
                  className="h-[83px] w-[83px] rounded-full bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${coach.avatar})` }}
                />
                <div className="rounded-full bg-[#f3f4f6] px-3 py-1.5 font-mulish text-[16px] text-[#0a0a0a]">
                  15+ Yrs
                </div>
              </div>
              <div>
                <h4 className="font-arima text-[20px] font-medium text-[#0a0a0a]">Dr. Meera Patel</h4>
                <p className="font-mulish text-[16px] text-[#598e9c]">Family Therapist</p>
              </div>
              <div className="flex items-center gap-1">
                <span
                  className="h-4 w-4 bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${coach.star})` }}
                />
                <span className="font-mulish text-[16px] text-[#0a0a0a]">4.8</span>
                <span className="font-mulish text-[16px] text-[#4a4a4a]">(200+ reviews)</span>
              </div>
            </div>
            <button className="mt-4 flex h-[47px] items-center justify-center rounded-[12px] bg-[linear-gradient(135deg,rgba(185,90,249,1)_0%,rgba(186,83,255,1)_100%)]">
              <span className="font-arima text-[16px] font-bold text-white">Join Now</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between rounded-[12px]">
      <h3 className="font-arima text-[24px] font-black leading-[39px] text-[#1a1a1a]">
        {title}
      </h3>
      <button className="font-mulish text-[18px] font-bold leading-[22.59px] text-[#b95af9]">
        See all
      </button>
    </div>
  );
}

function CircleIcon({ image }: { image: string }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-[50px] border-2 border-[#4d8fa7] bg-[#4d8fa7]">
      <span className="h-6 w-6 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${image})` }} />
    </div>
  );
}

function LetterDot({ letter, active = false }: { letter: string; active?: boolean }) {
  return (
    <div
      className={`flex h-11 w-11 items-center justify-center rounded-[50px] border-2 ${
        active
          ? "border-[#4d8fa7] bg-white text-[#4d8fa7]"
          : "border-[#bebebe] bg-white text-[#bebebe]"
      }`}
    >
      <span className="font-arima text-[20px] font-extrabold tracking-[-1.75px]">{letter}</span>
    </div>
  );
}

function ProfileRow({ icon, labelColor }: { icon: string; labelColor: string }) {
  return (
    <div className="flex items-center gap-1">
      <span className="h-4 w-4 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${icon})` }} />
      <div className="flex flex-1 items-center justify-between">
        <span className={`font-mulish text-[12px] ${labelColor}`}>Account Setup</span>
        <span className={`font-mulish text-[12px] ${labelColor}`}>20%</span>
      </div>
    </div>
  );
}
