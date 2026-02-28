import React from "react";
import { CalendarDays, ChevronDown, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  setIncompleteProfile,
  setProfileStepOneCompleted,
  setProfileStepTwoCompleted,
} from "@/utils/onboarding";

type ProfileFormData = {
  userType: string;
  fullName: string;
  mobileNumber: string;
  address: string;
  country: string;
  state: string;
  dateOfBirth: string;
  gender: string;
};

const initialFormData: ProfileFormData = {
  userType: "Student",
  fullName: "Sally Bergson",
  mobileNumber: "0192836443242",
  address: "701 Maggio Viaduct, Rancho Cucamonga 38131",
  country: "India",
  state: "India",
  dateOfBirth: "2002-01-05",
  gender: "Female",
};

export default function CreateProfileStepOnePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState<ProfileFormData>(initialFormData);
  const [photoPreview, setPhotoPreview] = React.useState<string | null>(null);
  const [uploadError, setUploadError] = React.useState<string>("");
  const [formError, setFormError] = React.useState<string>("");
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const previewUrlRef = React.useRef<string | null>(null);

  React.useEffect(() => {
    return () => {
      if (previewUrlRef.current) {
        URL.revokeObjectURL(previewUrlRef.current);
      }
    };
  }, []);

  const avatarInitial = formData.fullName.trim().charAt(0).toUpperCase() || "S";

  const updateField = (field: keyof ProfileFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const isSupportedType = ["image/jpeg", "image/png", "image/gif"].includes(file.type);
    const isValidSize = file.size <= 2 * 1024 * 1024;

    if (!isSupportedType || !isValidSize) {
      setUploadError("Please upload JPG, PNG, or GIF under 2MB.");
      return;
    }

    if (previewUrlRef.current) {
      URL.revokeObjectURL(previewUrlRef.current);
    }

    const objectUrl = URL.createObjectURL(file);
    previewUrlRef.current = objectUrl;
    setUploadError("");
    setPhotoPreview(objectUrl);
  };

  const continueToStepTwo = (isIncomplete: boolean) => {
    setProfileStepOneCompleted(true);
    setProfileStepTwoCompleted(false);
    setIncompleteProfile(isIncomplete);
    navigate("/dashboard/create-profile/feeling");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fullName = formData.fullName.trim();
    const mobileNumber = formData.mobileNumber.trim();
    const hasRequiredFields = Boolean(formData.userType && fullName && mobileNumber);

    if (!hasRequiredFields) {
      setFormError("Please fill User Type, Full Name, and Mobile Number.");
      return;
    }

    setFormError("");
    continueToStepTwo(false);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f7f9fc]">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-[14%] -top-[11%] h-[122%] w-[130%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/MqxvUSTQHL.png)] bg-cover bg-no-repeat" />
      </div>

      <div className="relative z-[2] mx-auto flex w-full max-w-[1120px] flex-col items-center gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:gap-[56px]">
        <div className="flex w-full flex-col items-end gap-2">
          <span className="font-mulish text-[18px] font-normal leading-[24px] text-[#0a0a0a] sm:text-[20px]">
            0%
          </span>
          <div className="flex h-[10px] w-full gap-1">
            <div className="h-full flex-1 rounded-[10px] bg-[#e4e8f0]" />
            <div className="h-full flex-1 rounded-[10px] bg-[#e4e8f0]" />
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-1 text-center">
          <h1 className="font-arima text-[26px] font-black leading-[1.25] text-[#0a0a0a] sm:text-[20px] lg:text-[48px]">
            Let&apos;s Set Up Your Profile
          </h1>
          <p className="font-mulish text-[16px] font-light leading-[1.4] text-[#4a4a4a] sm:text-[20px]">
            This helps us personalize your Mental Wellness Journey
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center gap-6 rounded-[24px] border border-[#e5e7eb] bg-white p-5 shadow-[0_4px_6px_0_rgba(193,187,187,0.1)] sm:p-8 lg:p-11"
        >
          <div className="flex w-full justify-end">
            <button
              type="button"
              onClick={() => continueToStepTwo(true)}
              className="h-[48px] rounded-[12px] px-6 font-arima text-[16px] font-bold text-[#b95af9] transition-colors hover:bg-[#f8f0ff]"
            >
              Skip For Now
            </button>
          </div>

          <div className="flex w-full max-w-[272px] flex-col items-center gap-4">
            <div className="flex h-[119px] w-[119px] items-center justify-center overflow-hidden rounded-full bg-[#b95af9]">
              {photoPreview ? (
                <img src={photoPreview} alt="Profile preview" className="h-full w-full object-cover" />
              ) : (
                <span className="font-inter text-[64px] leading-[1] text-white">{avatarInitial}</span>
              )}
            </div>

            <div className="flex w-full flex-col items-center gap-3">
              <input
                ref={fileInputRef}
                type="file"
                accept=".jpg,.jpeg,.png,.gif,image/jpeg,image/png,image/gif"
                className="hidden"
                onChange={handlePhotoUpload}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex w-full items-center justify-center gap-3 rounded-[8px] bg-[#e6e6e6] px-4 py-2 text-[#0a0a0a] transition-colors hover:bg-[#dcdcdc]"
              >
                <Upload className="h-4 w-4" />
                <span className="font-mulish text-[16px] font-medium leading-[24px]">Upload Photo</span>
              </button>
              <p className="w-full text-left font-mulish text-[12px] leading-[15px] text-[#697282]">
                JPG, PNG or GIF. Max size 2MB.
              </p>
              {uploadError && (
                <p className="w-full text-left font-mulish text-[12px] leading-[15px] text-[#b52614]">
                  {uploadError}
                </p>
              )}
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-7">
            <div className="flex items-center">
              <span className="font-mulish text-[16px] font-semibold leading-[24px] text-[#1a1a1a]">
                Required Information <span className="text-[#b52614]">*</span>
              </span>
            </div>

            <FieldShell label="User Type">
              <select
                value={formData.userType}
                onChange={(event) => updateField("userType", event.target.value)}
                className="h-[56px] w-full appearance-none rounded-[8px] border border-[#d9a1ff] bg-white px-4 pr-10 font-mulish text-[16px] font-light leading-[22px] text-[#1a1a1a]"
              >
                <option>Student</option>
                <option>Working Professional</option>
                <option>Teacher</option>
                <option>Parent</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#697282]" />
            </FieldShell>

            <FieldShell label="Full Name">
              <input
                value={formData.fullName}
                onChange={(event) => updateField("fullName", event.target.value)}
                className="h-[56px] w-full rounded-[8px] border border-[#d9a1ff] bg-white px-4 font-mulish text-[16px] font-light leading-[22px] text-[#1a1a1a]"
              />
            </FieldShell>

            <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-stretch">
              <div className="flex-1">
                <FieldShell label="Mobile Number">
                  <input
                    value={formData.mobileNumber}
                    onChange={(event) => updateField("mobileNumber", event.target.value)}
                    className="h-[56px] w-full rounded-[8px] border border-[#d9a1ff] bg-white px-4 font-mulish text-[16px] font-light leading-[22px] text-[#1a1a1a]"
                  />
                </FieldShell>
              </div>

              <button
                type="button"
                className="h-[56px] rounded-[12px] bg-[#b95af9] px-8 font-arima text-[16px] font-bold text-white transition-opacity hover:opacity-95 sm:self-end"
              >
                Verify
              </button>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-4 border-b border-[#e5e7eb] py-6">
            <h2 className="font-mulish text-[16px] font-semibold leading-[24px] text-[#1a1a1a]">Optional Details</h2>

            <div className="flex w-full flex-col gap-4">
              <FieldShell label="Address">
                <input
                  value={formData.address}
                  onChange={(event) => updateField("address", event.target.value)}
                  className="h-[56px] w-full rounded-[8px] border border-[#d9a1ff] bg-white px-4 font-mulish text-[16px] font-light leading-[22px] text-[#1a1a1a]"
                />
              </FieldShell>

              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                <FieldShell label="Country">
                  <select
                    value={formData.country}
                    onChange={(event) => updateField("country", event.target.value)}
                    className="h-[56px] w-full appearance-none rounded-[8px] border border-[#d9a1ff] bg-white px-4 pr-10 font-mulish text-[16px] font-light leading-[22px] text-[#1a1a1a]"
                  >
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#697282]" />
                </FieldShell>

                <FieldShell label="State">
                  <select
                    value={formData.state}
                    onChange={(event) => updateField("state", event.target.value)}
                    className="h-[56px] w-full appearance-none rounded-[8px] border border-[#d9a1ff] bg-white px-4 pr-10 font-mulish text-[16px] font-light leading-[22px] text-[#1a1a1a]"
                  >
                    <option>India</option>
                    <option>California</option>
                    <option>Texas</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#697282]" />
                </FieldShell>
              </div>

              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                <FieldShell label="Date of birth">
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(event) => updateField("dateOfBirth", event.target.value)}
                    className="h-[56px] w-full rounded-[8px] border border-[#d9a1ff] bg-white px-4 pr-10 font-mulish text-[16px] font-light leading-[22px] text-[#4a5565]"
                  />
                  <CalendarDays className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#697282]" />
                </FieldShell>

                <FieldShell label="Gender">
                  <select
                    value={formData.gender}
                    onChange={(event) => updateField("gender", event.target.value)}
                    className="h-[56px] w-full appearance-none rounded-[8px] border border-[#d9a1ff] bg-white px-4 pr-10 font-mulish text-[16px] font-light leading-[22px] text-[#1a1a1a]"
                  >
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#697282]" />
                </FieldShell>
              </div>
            </div>
          </div>

          {formError && (
            <p className="w-full text-left font-mulish text-[14px] font-medium text-[#b52614]">
              {formError}
            </p>
          )}

          <button
            type="submit"
            className="h-[48px] w-full max-w-[264px] rounded-[12px] bg-[#b95af9] px-6 font-arima text-[16px] font-bold text-white transition-opacity hover:opacity-95"
          >
            Complete Profile
          </button>
        </form>
      </div>
    </div>
  );
}

function FieldShell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="relative w-full">
      <div className="absolute left-3 top-0 z-10 -translate-y-1/2 bg-white px-1">
        <span className="font-arima text-[14px] font-medium leading-[20px] text-[#b95af9]">{label}</span>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
