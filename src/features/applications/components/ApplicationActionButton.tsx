import { ArrowRight } from "lucide-react";

type ApplicationActionButtonProps = {
  label: string;
  onClick?: () => void;
};

export default function ApplicationActionButton({
  label,
  onClick,
}: ApplicationActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[32px] w-full max-w-max cursor-pointer items-center justify-center gap-1 rounded-[8px] border border-[#598e9c] px-3 text-center sm:px-4"
    >
      <span className="font-arima text-[14px] font-medium leading-[20px] text-[#598e9c]">
        {label}
      </span>
      <ArrowRight className="h-4 w-4 text-[#598e9c]" />
    </button>
  );
}
