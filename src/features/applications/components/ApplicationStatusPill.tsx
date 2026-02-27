import { applicationStatusConfig } from "../constants";
import type { ApplicationStatus } from "../types";

type ApplicationStatusPillProps = {
  status: ApplicationStatus;
};

export default function ApplicationStatusPill({
  status,
}: ApplicationStatusPillProps) {
  const config = applicationStatusConfig[status];

  return (
    <div
      className={`flex h-[32px] items-center justify-center rounded-[36px] border px-2 ${config.className}`}
    >
      <span className="font-mulish text-[16px] font-medium leading-[20px]">
        {config.label}
      </span>
    </div>
  );
}
