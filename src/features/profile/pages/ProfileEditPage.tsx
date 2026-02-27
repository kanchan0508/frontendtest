import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileBackBar from "../components/ProfileBackBar";
import ProfileSummary from "../components/ProfileSummary";
import PersonalInfoForm from "../components/PersonalInfoForm";
import { profileChecklistEdit } from "../constants";
import { useProfileData } from "../hooks/useProfileData";

export default function ProfileEditPage() {
  const navigate = useNavigate();
  const {
    form,
    setField,
    persist,
    avatarPreview,
    avatarInitial,
    uploadError,
    handleUpload,
  } = useProfileData();
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleSave = () => {
    persist();
    navigate("/dashboard/profile/completed");
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f7f9fc]">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-[14%] -top-[11%] h-[122%] w-[130%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/P9XjSf7KrX.png)] bg-cover bg-no-repeat" />
      </div>

      <ProfileBackBar onBack={() => navigate("/dashboard/profile")} />

      <main className="relative z-[2] mx-auto flex w-full max-w-[1120px] flex-col gap-4 px-4 pb-14 pt-5 sm:px-6 lg:px-0">
        <section className="rounded-[16px] border border-[#e2e4ed] bg-white px-5 py-6 shadow-[0_4px_12px_0_rgba(200,192,205,0.24)] lg:rounded-[24px] lg:px-[36px] lg:py-[61px]">
          <div className="flex flex-col gap-8">
            <ProfileSummary
              fullName={form.fullName}
              role={form.role}
              location={form.location}
              avatarPreview={avatarPreview}
              avatarInitial={avatarInitial}
              uploadError={uploadError}
              fileInputRef={fileInputRef}
              onUploadChange={handleUpload}
              onUploadClick={() => fileInputRef.current?.click()}
              progressLabel="100%"
              checklist={profileChecklistEdit}
            />

            <PersonalInfoForm form={form} onChange={setField} editable />

            <button
              type="button"
              onClick={handleSave}
              className="mx-auto flex h-[40px] w-full max-w-[420px] cursor-pointer items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#B95AF9_0%,#8F45FF_100%)] px-6 font-arima text-[14px] font-normal leading-[18px] text-white"
            >
              Save
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
