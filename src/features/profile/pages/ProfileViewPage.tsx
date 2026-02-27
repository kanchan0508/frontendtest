import { useNavigate } from "react-router-dom";
import {
  profileChecklistEdit,
} from "../constants";
import ProfileBackBar from "../components/ProfileBackBar";
import ProfileSummary from "../components/ProfileSummary";
import ProfileDetailsList from "../components/ProfileDetailsList";
import ProfileSectionCard from "../components/ProfileSectionCard";
import { useProfileData } from "../hooks/useProfileData";

export default function ProfileViewPage() {
  const navigate = useNavigate();
  const { form, avatarPreview, avatarInitial } = useProfileData();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f7f9fc]">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-[14%] -top-[11%] h-[122%] w-[130%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/P9XjSf7KrX.png)] bg-cover bg-no-repeat" />
      </div>

      <ProfileBackBar onBack={() => navigate("/dashboard")} />

      <main className="relative z-[2] mx-auto flex w-full max-w-[1120px] flex-col gap-4 px-4 pb-14 pt-5 sm:px-6 lg:px-0">
        <section className="rounded-[16px] border border-[#e2e4ed] bg-white px-5 py-6 shadow-[0_4px_12px_0_rgba(200,192,205,0.24)] lg:rounded-[24px] lg:px-[36px] lg:py-[61px]">
          <div className="flex flex-col gap-8">
            <ProfileSummary
              fullName={form.fullName}
              role={form.role}
              location={form.location}
              avatarPreview={avatarPreview}
              avatarInitial={avatarInitial}
              uploadError=""
              progressLabel="100%"
              checklist={profileChecklistEdit}
              showUpload={false}
              showCompletionPanel={false}
            />

            <ProfileDetailsList form={form} />

            <button
              type="button"
              onClick={() => navigate("/dashboard/profile/edit")}
              className="mx-auto flex h-[40px] w-[120px] cursor-pointer items-center justify-center rounded-[10px] border border-[#b95af9] font-arima text-[14px] font-normal leading-[18px] text-[#b95af9]"
            >
              Edit Profile
            </button>
          </div>
        </section>

        <ProfileSectionCard
          title="Current Plan"
          subtitle="Basic - Free"
          badgeLabel="Active"
          note="You have access to essential wellness tools and daily reflections. Ready to deepen your journey?"
          actionLabel="View My Plan"
          actionArrowColor="#4a4a4a"
          onActionClick={() => navigate("/dashboard/profile/plan")}
        />

        <ProfileSectionCard
          title="My Applications"
          subtitle="Check the status of your applications"
          actionLabel="View Applications"
          actionArrowColor="#b95af9"
          onActionClick={() => navigate("/dashboard/applications")}
        />

        <button
          type="button"
          className="mx-auto h-[40px] w-full max-w-[243px] cursor-pointer rounded-[10px] border border-[#b95af9] font-arima text-[14px] font-normal leading-[18px] text-[#b95af9]"
        >
          Apply to Become a Coach
        </button>
      </main>
    </div>
  );
}
