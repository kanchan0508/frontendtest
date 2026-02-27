import { Check, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/routes/paths";
import { hasIncompleteProfile } from "@/utils/onboarding";
import DashboardSectionLayout from "../components/DashboardSectionLayout";
import DashboardCarouselSection from "../components/DashboardCarouselSection";

function formatDate(): string {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function DashboardPage() {
  return <DashboardContentPage title="Dashboard" />;
}

interface DashboardContentPageProps {
  title: string;
}

export function DashboardContentPage({ title }: DashboardContentPageProps) {
  const profileIncomplete = hasIncompleteProfile();
  const navigate = useNavigate();

  return (
    <DashboardSectionLayout title={title} subtitle={formatDate()}>
      <div className="flex flex-col gap-12">
        <DashboardCarouselSection />
        <CuratedSection
          profileIncomplete={profileIncomplete}
          onFirstCardStart={() => navigate(ROUTES.deepBreathing)}
          onSecondCardStart={() => navigate(ROUTES.chakraMeditation)}
        />
        <RecommendationsSection />
      </div>
    </DashboardSectionLayout>
  );
}

/* ------------------------------------------------------------------ */
/*  Curated for You                                                   */
/* ------------------------------------------------------------------ */

function CuratedSection({
  profileIncomplete,
  onFirstCardStart,
  onSecondCardStart,
}: {
  profileIncomplete: boolean;
  onFirstCardStart: () => void;
  onSecondCardStart: () => void;
}) {
  if (profileIncomplete) {
    return (
      <section className="w-full">
        <div className="flex w-full max-w-[1240px] 2xl:max-w-[1700px] flex-col gap-[24px] items-start relative mx-auto">
          <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 w-full">
            <SectionHeader title="Curated for You" />

            <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_236px]">
              <CuratedCard
                layout="grid"
                bg="bg-[#d8e4ff]"
                badgeBg="bg-[#3a6fe6]"
                badgeText="Beginner"
                titleColor="text-[#3a6fe6]"
                title="Deep breathing exercises"
                duration="10 min"
                buttonTextColor="text-[#407bff]"
                imageUrl="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/qKZXcucCgP.png"
                imageSize="w-[172.757px] h-[196.203px]"
                onGetStarted={onFirstCardStart}
              />
              <CuratedCard
                layout="grid"
                bg="bg-[#bddce6]"
                badgeBg="bg-[#025b65]"
                badgeText="Intermediate"
                titleColor="text-[#025b65]"
                title="Chakra Meditation"
                duration="10 min"
                buttonTextColor="text-[#025b65]"
                imageUrl="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/meBoihhiUf.png"
                imageSize="w-[229.934px] h-[167.307px]"
                onGetStarted={onSecondCardStart}
              />
              <ProfileCompletionCard />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full">
      <div className="flex w-full max-w-[1240px] 2xl:max-w-[1700px] flex-col gap-[24px] items-start relative mx-auto">
        <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 w-full">
          <SectionHeader title="Curated for You" />

          <div className="flex gap-[24px] items-center self-stretch shrink-0 overflow-x-auto pb-2 w-full">
            <CuratedCard
              bg="bg-[#d8e4ff]"
              badgeBg="bg-[#3a6fe6]"
              badgeText="Beginner"
              titleColor="text-[#3a6fe6]"
              title="Deep breathing exercises"
              duration="10 min"
              buttonTextColor="text-[#407bff]"
              imageUrl="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/qKZXcucCgP.png"
              imageSize="w-[172.757px] h-[196.203px]"
              onGetStarted={onFirstCardStart}
            />
            <CuratedCard
              bg="bg-[#bddce6]"
              badgeBg="bg-[#025b65]"
              badgeText="Intermediate"
              titleColor="text-[#025b65]"
              title="Chakra Meditation"
              duration="10 min"
              buttonTextColor="text-[#025b65]"
              imageUrl="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/meBoihhiUf.png"
              imageSize="w-[229.934px] h-[167.307px]"
              onGetStarted={onSecondCardStart}
            />
            <SoundBathCard />
          </div>
        </div>
      </div>
    </section>
  );
}

interface CuratedCardProps {
  layout?: "scroll" | "grid";
  bg: string;
  badgeBg: string;
  badgeText: string;
  titleColor: string;
  title: string;
  duration: string;
  buttonTextColor: string;
  imageUrl: string;
  imageSize: string;
  onGetStarted?: () => void;
}

function CuratedCard({
  layout = "scroll",
  bg,
  badgeBg,
  badgeText,
  titleColor,
  title,
  duration,
  buttonTextColor,
  imageUrl,
  imageSize,
  onGetStarted,
}: CuratedCardProps) {
  const layoutClass =
    layout === "grid"
      ? "w-full"
      : "min-w-[320px] md:min-w-0 grow shrink-0 basis-0";

  return (
    <div
      className={`h-[282px] ${layoutClass} ${bg} rounded-[12px] relative overflow-hidden`}
    >
      <div className="h-[233px] absolute top-0 right-0 flex flex-col items-end justify-between">
        <div
          className={`flex w-[114px] h-[44px] py-[4px] px-[12px] gap-[10px] justify-center items-center ${badgeBg} rounded-bl-[13px]`}
        >
          <span className="font-mulish text-[16px] font-normal leading-[20px] text-[#fff] whitespace-nowrap">
            {badgeText}
          </span>
        </div>
        <button
          type="button"
          onClick={onGetStarted}
          className="flex w-[98px] h-[40px] p-[8px] gap-[10px] justify-center items-center bg-[#fff] rounded-[37px]"
        >
          <span
            className={`font-mulish text-[12px] font-normal leading-[15px] ${buttonTextColor} whitespace-nowrap`}
          >
            Get Started
          </span>
        </button>
      </div>
      <div className="w-[53.26%] h-[104.68%] absolute top-[7.8%] left-[-2.31%]">
        <div className="flex w-[152px] flex-col gap-[10px] items-start ml-[25.711px]">
          <span
            className={`flex w-[152px] h-[50px] justify-start items-start font-mulish text-[20px] font-semibold leading-[25.1px] ${titleColor} text-left`}
          >
            {title}
          </span>
          <span
            className={`font-mulish text-[20px] font-semibold leading-[25px] ${titleColor} whitespace-nowrap`}
          >
            {duration}
          </span>
        </div>
        <div
          className={`${imageSize} bg-[length:100%_100%] bg-no-repeat mt-[14px]`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
    </div>
  );
}

function SoundBathCard() {
  return (
    <div className="h-[282px] min-w-[320px] md:min-w-0 grow shrink-0 basis-0 bg-[#ffebc9] rounded-[12px] relative overflow-hidden">
      <div className="h-[233px] absolute top-0 right-0 flex flex-col items-end justify-between">
        <div className="flex w-[114px] h-[44px] py-[4px] px-[12px] gap-[10px] justify-center items-center bg-[#ffa500] rounded-bl-[13px]">
          <span className="font-mulish text-[16px] font-normal leading-[20px] text-[#fff] whitespace-nowrap">
            Beginner
          </span>
        </div>
        <button className="flex w-[98px] h-[40px] p-[8px] gap-[10px] justify-center items-center bg-[#fff] rounded-[37px]">
          <span className="font-mulish text-[12px] font-normal leading-[15px] text-[#ffa500] whitespace-nowrap">
            Get Started
          </span>
        </button>
      </div>
      <div className="w-[64.52%] h-[101.42%] absolute top-[7.8%] left-[-6.14%]">
        <div className="flex w-[152px] flex-col gap-[10px] items-start ml-[38.5px]">
          <span className="flex w-[152px] h-[50px] justify-start items-start font-mulish text-[20px] font-semibold leading-[25.1px] text-[#ffa500] text-left">
            Sound Bath Meditation
          </span>
          <span className="font-mulish text-[20px] font-semibold leading-[25px] text-[#ffa500] whitespace-nowrap">
            10 min
          </span>
        </div>
        <div className="w-[215.28px] h-[206px] relative overflow-hidden mt-[-5px]">
          <div className="w-[87.49%] h-[57.3%] absolute top-[12.77%] left-[6.35%]">
            <div className="w-[11.113px] h-[11.245px] relative mt-[5.652px] ml-[52.078px]">
              <div className="w-full h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/VKCTwoVGJL.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 overflow-hidden" />
            </div>
            <div className="w-[7.04px] h-[7.124px] relative mt-[-0.65px] ml-[50.094px]">
              <div className="w-full h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/tuOT0ZCCTv.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 overflow-hidden" />
            </div>
            <div className="w-[11.113px] h-[11.245px] relative mt-[-4.907px] ml-[77.078px]">
              <div className="w-full h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/SnCjrLv4Y2.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 overflow-hidden" />
            </div>
            <div className="w-full h-full absolute top-0 left-0">
              <div className="w-full h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/b3X9eLCmuS.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 overflow-hidden" />
            </div>
          </div>
          <div className="w-[77.73%] h-[61.13%] absolute top-[26.52%] left-[11.59%]">
            <div className="w-full h-[96.77%] absolute top-0 left-0">
              <div className="w-full h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/NqQixFKddX.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 overflow-hidden" />
            </div>
            <div className="w-[4.21%] h-[5.66%] absolute top-[0.59%] left-[38.13%]">
              <div className="w-full h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/hLGvQD8p21.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 overflow-hidden" />
            </div>
            <div className="w-[4.69%] h-[6.31%] absolute top-[6.59%] left-[70.45%]">
              <div className="w-full h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/opaTaWEMvZ.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 overflow-hidden" />
            </div>
            <div className="w-[94.92%] h-[20.29%] absolute top-[79.71%] left-[2.12%]">
              <div className="w-full h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/pHmonqHnJ8.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 overflow-hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileCompletionCard() {
  return (
    <div className="h-[282px] w-full rounded-[12px] border border-[#eaecf0] bg-[#f5f6fa] p-4">
      <div className="flex h-full flex-col items-center justify-between">
        <h3 className="w-full text-left font-mulish text-[24px] font-normal leading-[1.2] text-[#1a1a1a]">
          Complete your profile
        </h3>

        <div className="relative flex h-[132px] w-[132px] items-center justify-center rounded-full bg-[conic-gradient(#b95af9_216deg,#e3d1f7_216deg)]">
          <div className="flex h-[102px] w-[102px] items-center justify-center rounded-full bg-[#f5f6fa] font-mulish text-[32px] font-bold leading-[1] text-[#1a1a1a]">
            60%
          </div>
        </div>

        <div className="flex w-full flex-col gap-2">
          <CompletionRow icon="check" label="Account Setup" value="20%" />
          <CompletionRow icon="cross" label="Account Setup" value="20%" />
          <CompletionRow icon="cross" label="Account Setup" value="20%" />
        </div>
      </div>
    </div>
  );
}

function CompletionRow({
  icon,
  label,
  value,
}: {
  icon: "check" | "cross";
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between text-[11px] leading-[1]">
      <div className="flex items-center gap-2">
        {icon === "check" ? (
          <Check className="h-3 w-3 text-[#4a88ff]" strokeWidth={2.5} />
        ) : (
          <X className="h-3 w-3 text-[#8ca0b8]" strokeWidth={2.5} />
        )}
        <span className="font-mulish text-[11px] text-[#4a4a4a]">{label}</span>
      </div>
      <span className="font-mulish text-[11px] text-[#4a4a4a]">{value}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Recommendations                                                   */
/* ------------------------------------------------------------------ */

function RecommendationsSection() {
  return (
    <section className="w-full mb-20">
      <div className="flex w-full max-w-[1240px] 2xl:max-w-[1700px] flex-col gap-[24px] items-start relative mx-auto">
        <div className="flex h-[306px] flex-col justify-between items-start self-stretch shrink-0 w-full">
          <SectionHeader title="Recommendations" />

          <div className="flex h-[256px] gap-[16px] items-center self-stretch shrink-0">
            <RecommendationStressCard />
            <RecommendationAnxietyCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function RecommendationStressCard() {
  return (
    <div className="h-[256px] grow shrink-0 basis-0 bg-[#add3f7] rounded-[20px] relative overflow-hidden">
      <div className="absolute top-[11px] left-[44px] z-[12]">
        <RecommendationCardContent title="Stress" />
      </div>
      <div className="w-[253px] h-[246px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/okaKWRC2Tt.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 right-0 z-[11]" />
      <div className="w-[1336px] h-[950px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/pHO6jdnuTh.png)] bg-cover bg-no-repeat absolute top-0 left-1/2 translate-x-[-50.02%] z-[9]" />
    </div>
  );
}

function RecommendationAnxietyCard() {
  return (
    <div className="h-[256px] grow shrink-0 basis-0 bg-[#afbe8d] rounded-[20px] relative overflow-hidden">
      <div className="absolute top-0 left-[41px] z-[33]">
        <RecommendationCardContent title="Anxiety" />
      </div>
      <div className="w-[263.64px] h-[256px] absolute top-0 right-0 z-[25]">
        <div className="w-[85.98%] h-[18.63%] absolute top-0 left-[3.37%] z-30">
          <div className="w-[21.14%] h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/RPmZBr9ZHc.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[78.86%] z-30" />
          <div className="w-[30.92%] h-[68.91%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/PZHmvXyEQE.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[4.06%] left-0 z-[29]" />
        </div>
        <div className="w-full h-[88.53%] absolute top-[11.47%] left-0 z-[32]">
          <div className="w-[47.71%] h-[82.46%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/QyYiiNmM5z.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[26.24%] z-[32]" />
          <div className="w-[93.07%] h-[40.69%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/X9zU8n0jKu.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[26.75%] left-[4.95%] z-[31]" />
          <div className="w-full h-[66.84%] absolute top-[33.16%] left-0 z-[26]">
            <div className="w-full h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/5LMKttAHnZ.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 z-[27]" />
          </div>
          <div className="w-[41.61%] h-[28.52%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/whVoc4SXeT.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[56.82%] left-[29.88%] z-[28]" />
        </div>
      </div>
      <div className="w-[1336px] h-[950px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-26/mXcXb8xSR0.png)] bg-cover bg-no-repeat absolute top-0 left-1/2 translate-x-[-50.02%] z-[23]" />
    </div>
  );
}

function RecommendationCardContent({ title }: { title: string }) {
  return (
    <div className="flex w-[196px] h-[208px] flex-col gap-[8px] items-start mt-[18px] z-[12]">
      <div className="flex w-[58px] h-[16px] py-[4px] px-[10px] gap-[10px] justify-center items-center bg-[#5994fe] rounded-[8px]">
        <span className="font-inter text-[8px] font-normal leading-[9.682px] text-[#fff] whitespace-nowrap">
          Soft Skills
        </span>
      </div>
      <div className="flex flex-col gap-[17px] justify-center items-start self-stretch shrink-0">
        <div className="flex flex-col items-start self-stretch shrink-0">
          <span className="self-stretch font-arima text-[32px] font-medium leading-[52px] text-[#1a1a1a] whitespace-nowrap">
            {title}
          </span>
          <span className="flex w-[196px] h-[80px] justify-start items-center self-stretch shrink-0 font-mulish text-[16px] font-normal leading-[20.08px] text-[#4a4a4a] text-left">
            Engage with yourself. Reflect, resonate, and discover your real,
            unique, and awesome self.
          </span>
        </div>
        <button className="flex w-[133px] py-[12px] px-[32px] gap-[4px] justify-center items-center shrink-0 rounded-[12px] border border-[#4a4a4a] overflow-hidden">
          <span className="flex w-[69px] h-[11px] justify-center items-start font-arima text-[16px] font-bold leading-[11px] text-[#4a4a4a] text-center whitespace-nowrap">
            Take Test
          </span>
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Shared                                                            */
/* ------------------------------------------------------------------ */

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex justify-between items-center self-stretch shrink-0 rounded-[12px]">
      <div className="flex gap-[10px] justify-center items-center shrink-0">
        <span className="font-arima text-[24px] font-black leading-[39px] text-[#1a1a1a] whitespace-nowrap">
          {title}
        </span>
      </div>
      <button className="flex gap-[10px] justify-center items-center shrink-0">
        <span className="font-mulish text-[18px] font-bold leading-[22.59px] text-[#b95af9] whitespace-nowrap">
          See all
        </span>
      </button>
    </div>
  );
}
