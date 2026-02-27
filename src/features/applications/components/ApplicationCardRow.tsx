import type { ApplicationItem } from "../types";
import ApplicationActionButton from "./ApplicationActionButton";
import ApplicationStatusPill from "./ApplicationStatusPill";
import { useNavigate } from "react-router-dom";

type ApplicationCardRowProps = {
  item: ApplicationItem;
};

export default function ApplicationCardRow({ item }: ApplicationCardRowProps) {
  const navigate = useNavigate();

  return (
    <article className="flex flex-col gap-4 rounded-[14px] bg-[#fdfefe] px-4 py-4 md:min-h-[76px] md:flex-row md:items-center md:justify-between md:py-3">
      <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[10px] bg-[#e8faff]">
          <div
            className="h-[24px] w-[24px] bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${item.iconUrl})` }}
          />
        </div>

        <div className="flex min-w-0 flex-col gap-1">
          <span className="font-mulish text-[16px] font-semibold leading-[24px] text-[#0a0a0a]">
            {item.title}
          </span>
          <span className="font-mulish text-[14px] font-normal leading-[20px] text-[#7d7d7d]">
            Signed {"\u2022"} {item.signedDate}
          </span>
        </div>

        <div className="sm:ml-3 sm:shrink-0">
          <ApplicationStatusPill status={item.status} />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:justify-end">
        {item.actions.map((action) => (
          <ApplicationActionButton
            key={action.label}
            label={action.label}
            onClick={() => {
              if (action.label === "View Application") {
                navigate(`/dashboard/applications/${item.id}`);
                return;
              }

              if (action.label.toLowerCase().includes("contract")) {
                navigate(`/dashboard/applications/${item.id}/contract`);
              }
            }}
          />
        ))}
      </div>
    </article>
  );
}
