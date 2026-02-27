import type { ProfileFormState } from "../types";

type ProfileDetailsListProps = {
  form: ProfileFormState;
};

export default function ProfileDetailsList({ form }: ProfileDetailsListProps) {
  const rows = [
    { label: "Full Name :", value: form.fullName },
    { label: "Phone Number :", value: form.phoneNumber },
    { label: "Email :", value: form.emailAddress },
    { label: "Date Of Birth:", value: form.dateOfBirth },
    { label: "Gender:", value: form.gender },
    { label: "Address:", value: form.address },
  ];

  return (
    <div className="rounded-[8px] border border-[#dedede] bg-white px-3 sm:px-4">
      {rows.map((row, idx) => (
        <div
          key={row.label}
          className={`grid grid-cols-[140px_1fr] gap-3 py-2 ${
            idx < rows.length - 1 ? "border-b border-[#efefef]" : ""
          }`}
        >
          <span className="font-mulish text-[16px] font-normal leading-[22px] text-[#1a1a1a]">
            {row.label}
          </span>
          <span className="font-mulish text-[16px] font-normal leading-[22px] text-[#5a5a5a]">
            {row.value}
          </span>
        </div>
      ))}
    </div>
  );
}
