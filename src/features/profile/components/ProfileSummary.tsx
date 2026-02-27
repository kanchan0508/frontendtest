import { Check, Upload, X } from "lucide-react";
import type { ProfileChecklistItem } from "../types";

type ProfileSummaryProps = {
  fullName: string;
  role: string;
  location: string;
  avatarPreview: string | null;
  avatarInitial: string;
  uploadError: string;
  onUploadClick?: () => void;
  onUploadChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fileInputRef?: React.RefObject<HTMLInputElement | null>;
  progressLabel: string;
  checklist: ProfileChecklistItem[];
  showUpload?: boolean;
  showCompletionPanel?: boolean;
};

export default function ProfileSummary({
  fullName,
  role,
  location,
  avatarPreview,
  avatarInitial,
  uploadError,
  onUploadClick,
  onUploadChange,
  fileInputRef,
  progressLabel,
  checklist,
  showUpload = true,
  showCompletionPanel = true,
}: ProfileSummaryProps) {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
      <div className="min-w-0 flex-1">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex h-[120px] w-[120px] items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(135deg,#919097_0%,#4f4d55_100%)] lg:h-[192px] lg:w-[192px]">
            {avatarPreview ? (
              <img src={avatarPreview} alt="Profile preview" className="h-full w-full object-cover" />
            ) : (
              <span className="font-inter text-[52px] leading-[1] text-white lg:text-[64px]">{avatarInitial}</span>
            )}
          </div>

          {showUpload && (
            <div className="flex w-full max-w-[260px] flex-col gap-2">
              <input
                ref={fileInputRef}
                type="file"
                accept=".jpg,.jpeg,.png,.gif,image/jpeg,image/png,image/gif"
                className="hidden"
                onChange={onUploadChange}
              />
              <button
                type="button"
                onClick={onUploadClick}
                className="flex h-[42px] w-full cursor-pointer items-center justify-center gap-2 rounded-[8px] bg-[#e6e6e6] px-4"
              >
                <Upload className="h-4 w-4 text-[#0a0a0a]" />
                <span className="font-mulish text-[16px] font-medium leading-[20px] text-[#0a0a0a]">
                  Upload Photo
                </span>
              </button>
              <span className="font-mulish text-[12px] font-normal leading-[15px] text-[#697282]">
                JPG, PNG or GIF. Max size 2MB.
              </span>
              {uploadError && (
                <span className="font-mulish text-[12px] font-normal leading-[15px] text-[#b52614]">
                  {uploadError}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="mt-3 flex flex-col gap-1">
          <span className="font-arima text-[30px] font-bold leading-[1.05] text-[#101828] lg:text-[32px]">
            {fullName}
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mulish text-[18px] font-light leading-[24px] text-[#495565] lg:text-[20px]">
              {role}
            </span>
            <span className="h-[6px] w-[6px] rounded-full bg-[#b0b0b0]" />
            <span className="font-mulish text-[18px] font-light leading-[24px] text-[#495565] lg:text-[20px]">
              {location}
            </span>
          </div>
        </div>
      </div>

      {showCompletionPanel && (
        <aside className="w-full rounded-[16px] bg-[#f4f4f4] p-4 sm:max-w-[300px]">
          <div className="flex flex-col items-center gap-3">
            <span className="font-arima text-[18px] font-bold leading-[22px] text-[#101828] lg:text-[20px]">
              Complete your profile
            </span>
            <div className="relative flex h-[82px] w-[82px] items-center justify-center rounded-full bg-[conic-gradient(#b95af9_216deg,#d7d0e2_216deg)]">
              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#f4f4f4] font-arima text-[16px] font-bold leading-[1] text-[#000]">
                {progressLabel}
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-col gap-1">
            {checklist.map((item, idx) => (
              <div key={`${item.label}-${idx}`} className="flex items-center gap-2">
                {item.done ? (
                  <Check className="h-4 w-4 text-[#71b8ff]" strokeWidth={2.2} />
                ) : (
                  <X className="h-4 w-4 text-[#f44336]" strokeWidth={2.2} />
                )}
                <span className="font-mulish text-[12px] font-normal leading-[16px] text-[#1a1a1a]">
                  {item.label}
                </span>
                <span className="ml-auto font-mulish text-[12px] font-normal leading-[16px] text-[#4a4a4a]">
                  {item.progress}
                </span>
              </div>
            ))}
          </div>
        </aside>
      )}
    </div>
  );
}
