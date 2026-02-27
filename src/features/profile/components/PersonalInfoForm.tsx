import { CalendarDays } from "lucide-react";
import type { ProfileFormState } from "../types";

type PersonalInfoFormProps = {
  form: ProfileFormState;
  onChange: (field: keyof ProfileFormState, value: string) => void;
  editable: boolean;
};

export default function PersonalInfoForm({
  form,
  onChange,
  editable,
}: PersonalInfoFormProps) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-mulish text-[34px] font-normal leading-[1.1] text-[#1a1a1a] lg:text-[36px]">
        Personal Information
      </h1>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <FieldShell label="Full Name">
          <input
            value={form.fullName}
            onChange={(event) => onChange("fullName", event.target.value)}
            disabled={!editable}
            className="h-[50px] w-full rounded-[8px] border border-[#d9a1ff] bg-white px-4 font-mulish text-[16px] font-normal leading-[22px] text-[#1a1a1a] disabled:opacity-100"
          />
        </FieldShell>

        <FieldShell label="Phone Number">
          <input
            value={form.phoneNumber}
            onChange={(event) => onChange("phoneNumber", event.target.value)}
            disabled={!editable}
            className="h-[50px] w-full rounded-[8px] border border-[#d9a1ff] bg-white px-4 font-mulish text-[16px] font-normal leading-[22px] text-[#4a5565] disabled:opacity-100"
          />
        </FieldShell>

        <FieldShell label="Email Address">
          <input
            value={form.emailAddress}
            onChange={(event) => onChange("emailAddress", event.target.value)}
            disabled={!editable}
            className="h-[50px] w-full rounded-[8px] border border-[#d9a1ff] bg-white px-4 font-mulish text-[16px] font-normal leading-[22px] text-[#1a1a1a] disabled:opacity-100"
          />
        </FieldShell>

        <FieldShell label="Address">
          <input
            value={form.address}
            onChange={(event) => onChange("address", event.target.value)}
            disabled={!editable}
            className="h-[50px] w-full rounded-[8px] border border-[#d9a1ff] bg-white px-4 font-mulish text-[16px] font-normal leading-[22px] text-[#1a1a1a] disabled:opacity-100"
          />
        </FieldShell>

        <FieldShell label="Gender">
          <input
            value={form.gender}
            onChange={(event) => onChange("gender", event.target.value)}
            disabled={!editable}
            className="h-[50px] w-full rounded-[8px] border border-[#d9a1ff] bg-white px-4 font-mulish text-[16px] font-normal leading-[22px] text-[#1a1a1a] disabled:opacity-100"
          />
        </FieldShell>

        <FieldShell label="Date of Birth">
          <div className="relative">
            <input
              value={form.dateOfBirth}
              onChange={(event) => onChange("dateOfBirth", event.target.value)}
              disabled={!editable}
              className="h-[50px] w-full rounded-[8px] border border-[#d9a1ff] bg-white px-4 pr-10 font-mulish text-[16px] font-normal leading-[22px] text-[#1a1a1a] disabled:opacity-100"
            />
            <CalendarDays className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#b95af9]" />
          </div>
        </FieldShell>
      </div>
    </div>
  );
}

function FieldShell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="relative block w-full">
      <span className="absolute left-3 top-0 z-10 -translate-y-1/2 bg-white px-1 font-arima text-[14px] font-normal leading-[16px] text-[#b95af9]">
        {label}
      </span>
      {children}
    </label>
  );
}
