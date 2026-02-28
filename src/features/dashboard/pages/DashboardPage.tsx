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
          onCompleteProfile={() => navigate(ROUTES.profile)}
        />
        <RecommendationsSection profileIncomplete={profileIncomplete} />
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
  onCompleteProfile,
}: {
  profileIncomplete: boolean;
  onFirstCardStart: () => void;
  onSecondCardStart: () => void;
  onCompleteProfile: () => void;
}) {
  if (profileIncomplete) {
    return (
      <section className="w-full">
        <div className="flex w-full max-w-[1240px] 2xl:max-w-[1700px] flex-col gap-[24px] items-start relative mx-auto">
          <div className="sm:hidden w-full flex flex-col gap-4">
            <MobileProfilePrompt onClick={onCompleteProfile} />
            <div className="flex flex-col gap-[16px]">
              <SectionHeader title="Curated for You" />
              <div className="flex gap-3 overflow-x-auto pb-2">
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
              </div>
            </div>
          </div>
          <div className="hidden sm:flex flex-col gap-[16px] items-start self-stretch shrink-0 w-full">
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
              <ProfileCompletionCard onClick={onCompleteProfile} />
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
      : "min-w-[310px] md:min-w-0 grow shrink-0 basis-0";

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

function ProfileCompletionCard({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-[282px] w-full rounded-[12px] border border-[#eaecf0] bg-[#f5f6fa] p-4 text-left"
    >
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
    </button>
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

function RecommendationsSection({ profileIncomplete = false }: { profileIncomplete?: boolean }) {
  if (profileIncomplete) {
    return (
      <section className="w-full mb-20">
        <div className="flex w-full max-w-[1240px] 2xl:max-w-[1700px] flex-col gap-[24px] items-start relative mx-auto">
          <div className="sm:hidden w-full flex flex-col gap-[16px]">
            <div className="flex justify-between items-center self-stretch shrink-0 rounded-[12px] relative">
              <span className="h-[33px] shrink-0 basis-auto font-['Arima_Madurai'] text-[20px] font-bold leading-[32.66px] text-[#1a1a1a] relative text-left whitespace-nowrap z-[1]">
                Recommendations
              </span>
              <span className="h-[33px] shrink-0 basis-auto font-['Arima_Madurai'] text-[20px] font-bold leading-[32.66px] text-[#b95af9] relative text-left whitespace-nowrap z-[2]">
                See all
              </span>
            </div>

            <div className="flex w-full flex-col gap-[16px] justify-center items-start shrink-0 flex-nowrap relative z-[3]">
              <MobileRecommendationCard imageUrl="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/mK6V2hVHYN.png" />
              <MobileRecommendationCard imageUrl="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-28/K6Y8D8Roa9.png" />
            </div>
          </div>

          <div className="hidden sm:flex flex-col justify-between items-start self-stretch shrink-0 w-full h-auto gap-4">
            <SectionHeader title="Recommendations" />
            <div className="flex gap-[16px] self-stretch shrink-0 flex-col sm:flex-row h-auto">
              <RecommendationStressCard />
              <RecommendationAnxietyCard />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full mb-20">
      <div className="flex w-full max-w-[1240px] 2xl:max-w-[1700px] flex-col gap-[24px] items-start relative mx-auto">
        <div className="flex flex-col justify-between items-start self-stretch shrink-0 w-full h-[306px]">
          <SectionHeader title="Recommendations" />

          <div className="flex gap-[16px] self-stretch shrink-0 h-[256px] items-center">
            <RecommendationStressCard />
            <RecommendationAnxietyCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileRecommendationCard({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="flex w-full pt-[20px] pr-[16px] pb-[20px] pl-[16px] gap-[10px] items-end shrink-0 flex-nowrap bg-[#afbe8d] rounded-[20px] relative overflow-hidden">
      <div className="flex flex-col gap-[17px] justify-center items-start grow shrink-0 basis-0 flex-nowrap relative">
        <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative">
          <div className="flex w-[76px] h-[16px] pt-[4px] pr-[10px] pb-[4px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#687a40] rounded-[8px] relative">
            <span className="h-[15px] shrink-0 basis-auto font-['Inter'] text-[12px] font-normal leading-[14.523px] text-[#fff] relative text-left whitespace-nowrap">
              Soft Skills
            </span>
          </div>
          <span className="h-[39px] self-stretch shrink-0 basis-auto font-['Arima_Madurai'] text-[24px] font-extrabold leading-[39px] text-[#1a1a1a] relative text-left whitespace-nowrap">
            Anxiety
          </span>
          <span className="flex w-[150px] h-[60px] justify-start items-center self-stretch shrink-0 font-['Mulish'] text-[12px] font-normal leading-[15.06px] text-[#4a4a4a] relative text-left">
            Engage with yourself. Reflect, resonate, and discover your real, unique, and awesome self.
          </span>
        </div>
        <button
          type="button"
          className="flex w-[133px] pt-[12px] pr-[32px] pb-[12px] pl-[32px] gap-[4px] justify-center items-center shrink-0 flex-nowrap rounded-[12px] border-solid border border-[#4a4a4a] relative overflow-hidden"
        >
          <span className="flex w-[69px] h-[11px] justify-center items-start shrink-0 basis-auto font-['Arima_Madurai'] text-[16px] font-bold leading-[11px] text-[#4a4a4a] relative text-center whitespace-nowrap">
            Take Test
          </span>
        </button>
      </div>
      <div
        className="w-[150px] h-[145.654px] shrink-0 bg-[length:100%_100%] bg-no-repeat relative"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </div>
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
        <span className="font-arima text-[20px] sm:text-[24px] font-black leading-[32.66px] sm:leading-[39px] text-[#1a1a1a] whitespace-nowrap">
          {title}
        </span>
      </div>
      <button className="flex gap-[10px] justify-center items-center shrink-0">
        <span className="font-mulish text-[18px] sm:text-[18px] font-bold leading-[22.59px] text-[#b95af9] whitespace-nowrap">
          See all
        </span>
      </button>
    </div>
  );
}

function MobileProfilePrompt({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-[12px] bg-[#f4f4f4] p-4 text-left"
    >
      <span className="font-arima text-[14px] font-bold text-[#101727]">
        Complete your profile!
      </span>
      <p className="mt-1 font-mulish text-[10px] leading-[12.55px] text-[#1a1a1a]">
        Your profile is only 60% completed. Click here to complete your profile now!
      </p>
    </button>
  );
}
