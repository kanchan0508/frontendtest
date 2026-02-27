import { ArrowLeft } from "lucide-react";

type ProfileBackBarProps = {
  onBack: () => void;
};

export default function ProfileBackBar({ onBack }: ProfileBackBarProps) {
  return (
    <header className="sticky top-0 z-[117] border-b border-[#e5e7eb] bg-white">
      <div className="mx-auto flex h-[48px] w-full max-w-[1440px] items-center px-4 sm:px-8 lg:px-[80px]">
        <button
          type="button"
          onClick={onBack}
          className="flex cursor-pointer items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4 text-[#4a4a4a]" strokeWidth={1.8} />
          <span className="font-mulish text-[14px] font-normal leading-[18px] text-[#4a4a4a]">
            Back
          </span>
        </button>
      </div>
    </header>
  );
}
