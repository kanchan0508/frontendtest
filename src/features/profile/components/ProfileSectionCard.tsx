import { ArrowRight } from "lucide-react";

type ProfileSectionCardProps = {
  title: string;
  subtitle: string;
  badgeLabel?: string;
  note?: string;
  actionLabel: string;
  actionArrowColor?: string;
  onActionClick?: () => void;
};

export default function ProfileSectionCard({
  title,
  subtitle,
  badgeLabel,
  note,
  actionLabel,
  actionArrowColor = "#4a4a4a",
  onActionClick,
}: ProfileSectionCardProps) {
  return (
    <section className="rounded-[16px] bg-white px-4 py-4 lg:px-6 lg:py-5">
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <h2 className="font-mulish text-[34px] font-normal leading-[1.1] text-[#1a1a1a] lg:text-[36px]">
              {title}
            </h2>
            <span className="font-mulish text-[18px] font-normal leading-[22px] text-[#4a4a4a] lg:text-[20px] lg:leading-[24px]">
              {subtitle}
            </span>
          </div>
          {badgeLabel && (
            <div className="rounded-full border border-[#d699ff] bg-[rgba(255,255,255,0.6)] px-3 py-[2px]">
              <span className="font-mulish text-[12px] font-normal leading-[16px] text-[#bd5dff]">
                {badgeLabel}
              </span>
            </div>
          )}
        </div>

        {note && (
          <div className="rounded-[12px] bg-[#f8edff] px-4 py-3">
            <p className="font-mulish text-[13px] font-normal leading-[18px] text-[#4a4a4a] lg:text-[14px] lg:leading-[20px]">
              {note}
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={onActionClick}
          className="flex h-[50px] w-full cursor-pointer items-center justify-between rounded-[12px] bg-[#f3f3f5] px-4"
        >
          <span className="font-mulish text-[16px] font-normal leading-[24px] text-[#1a1a1a]">
            {actionLabel}
          </span>
          <ArrowRight className="h-4 w-4" style={{ color: actionArrowColor }} />
        </button>
      </div>
    </section>
  );
}
