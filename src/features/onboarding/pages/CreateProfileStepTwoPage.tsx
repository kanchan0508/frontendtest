import React from "react";
import { useNavigate } from "react-router-dom";
import {
  hasIncompleteProfile,
  setIncompleteProfile,
  setProfileStepTwoCompleted,
} from "@/utils/onboarding";

const FEELINGS = [
  "Anxious",
  "Fearful",
  "Curious",
  "Happy",
  "Edgy",
  "Sad",
  "Neutral",
  "Zealous",
  "Cheated On",
];

const CONCERNS = [
  "Feeling Stuck",
  "Career",
  "Personal Growth",
  "Dilemma",
  "No Clarity about future",
  "Everyday living Challenges",
  "Mental Health",
  "Relationships",
  "Finances",
  "Health",
];

const ASPIRATIONS = [
  "Move Forward in life",
  "Growth at Full Potential",
  "Succeed in Life",
  "Want to be Happy",
  "Neutral",
];

export default function CreateProfileStepTwoPage() {
  const navigate = useNavigate();
  const [selectedFeelings, setSelectedFeelings] = React.useState<string[]>(["Anxious"]);
  const [selectedConcerns, setSelectedConcerns] = React.useState<string[]>(["Feeling Stuck"]);
  const [selectedAspirations, setSelectedAspirations] = React.useState<string[]>(["Move Forward in life"]);

  const toggleSelection = (
    value: string,
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelected((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
  };

  const completeOnboarding = (isSkip: boolean) => {
    setProfileStepTwoCompleted(true);
    if (isSkip) {
      setIncompleteProfile(true);
    } else {
      setIncompleteProfile(hasIncompleteProfile());
    }
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f7f9fc]">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-[14%] -top-[11%] h-[122%] w-[130%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/VooMyMxsUJ.png)] bg-cover bg-no-repeat" />
      </div>

      <div className="relative z-[2] mx-auto flex w-full max-w-[1120px] flex-col items-center gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:gap-[48px]">
        <div className="flex w-full flex-col items-end gap-2">
          <span className="font-mulish text-[18px] font-normal leading-[24px] text-[#0a0a0a] sm:text-[20px]">
            50% Completed
          </span>
          <div className="flex h-[10px] w-full gap-1">
            <div className="h-full flex-1 rounded-[10px] bg-[linear-gradient(90deg,#b95af9_0%,#d9a1ff_100%)]" />
            <div className="h-full flex-1 rounded-[10px] bg-[#e4e8f0]" />
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-6">
          <div className="flex w-full justify-end">
            <button
              type="button"
              onClick={() => completeOnboarding(true)}
              className="h-[48px] rounded-[12px] px-6 font-arima text-[16px] font-bold text-[#b95af9] transition-colors hover:bg-[#f8f0ff]"
            >
              Skip For Now
            </button>
          </div>

          <div className="flex w-full flex-col items-center gap-1 text-center">
            <h1 className="font-arima text-[34px] font-black leading-[1.25] text-[#0a0a0a] sm:text-[42px] lg:text-[48px]">
              Let&apos;s Capture Your Current Feeling
            </h1>
            <p className="font-mulish text-[16px] font-light leading-[1.4] text-[#4a4a4a] sm:text-[20px]">
              There are no right or wrong answers, just you.
            </p>
          </div>

          <div className="flex w-full flex-col gap-8 px-0 sm:px-4 lg:px-11">
            <QuestionGroup
              index={1}
              title="How are you currently feeling?"
              options={FEELINGS}
              selected={selectedFeelings}
              onToggle={(option) => toggleSelection(option, setSelectedFeelings)}
            />

            <QuestionGroup
              index={2}
              title="What are your current concerns?"
              options={CONCERNS}
              selected={selectedConcerns}
              onToggle={(option) => toggleSelection(option, setSelectedConcerns)}
            />

            <QuestionGroup
              index={3}
              title="What are your aspirations?"
              options={ASPIRATIONS}
              selected={selectedAspirations}
              onToggle={(option) => toggleSelection(option, setSelectedAspirations)}
            />
          </div>

          <button
            type="button"
            onClick={() => completeOnboarding(false)}
            className="h-[48px] w-full max-w-[264px] rounded-[12px] bg-[#b95af9] px-6 font-arima text-[16px] font-bold text-white transition-opacity hover:opacity-95"
          >
            Complete Profile
          </button>
        </div>
      </div>
    </div>
  );
}

interface QuestionGroupProps {
  index: number;
  title: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
}

function QuestionGroup({ index, title, options, selected, onToggle }: QuestionGroupProps) {
  return (
    <section className="flex w-full flex-col gap-6">
      <div className="flex items-start gap-3">
        <span className="font-mulish text-[20px] font-normal leading-[1.3] text-[#1a1a1a] sm:text-[24px]">{index}.</span>
        <h2 className="font-mulish text-[20px] font-normal leading-[1.3] text-[#1a1a1a] sm:text-[24px]">{title}</h2>
      </div>

      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        {options.map((option) => {
          const isSelected = selected.includes(option);

          return (
            <button
              key={option}
              type="button"
              onClick={() => onToggle(option)}
              className={`h-8 rounded-[36px] px-4 font-arima text-[16px] font-normal leading-[1] transition-colors ${
                isSelected ? "bg-[rgba(162,59,206,0.2)] text-[#1a1a1a]" : "bg-transparent text-[#1a1a1a] hover:bg-[#f2ebfa]"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </section>
  );
}
