import { ArrowLeft, ChevronDown } from "lucide-react";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { applicationStatusConfig, mockApplications } from "../constants";

function Field({
  label,
  value,
  highlight = false,
  trailingIcon = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  trailingIcon?: boolean;
}) {
  return (
    <div className="relative w-full">
      <div
        className={`flex min-h-[56px] items-center gap-3 rounded-[8px] border bg-white px-4 py-3 ${
          highlight ? "border-[#ac46ff]" : "border-[#d9a1ff]"
        }`}
      >
        <span className="font-mulish text-[16px] leading-[20px] text-[#1a1a1a]">
          {value}
        </span>
        {trailingIcon ? <ChevronDown className="ml-auto h-5 w-5 text-[#1a1a1a]" /> : null}
      </div>
      <div className="absolute -top-[10px] left-3 bg-white px-1">
        <span className="font-arima text-[14px] font-medium leading-[20px] text-[#b95af9]">
          {label}
        </span>
      </div>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h3 className="font-mulish text-[20px] font-semibold leading-[24px] text-[#1a1a1a]">
      {title}
      <span className="text-[#b52614]"> *</span>
    </h3>
  );
}

export default function ApplicationDetailsPage() {
  const navigate = useNavigate();
  const { applicationId } = useParams();
  const application = useMemo(
    () => mockApplications.find((item) => item.id === applicationId) ?? mockApplications[0],
    [applicationId],
  );
  const status = applicationStatusConfig[application.status];

  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      <header className="border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto flex w-full max-w-[1440px] items-center px-4 py-4 sm:px-6 lg:px-[80px]">
          <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 font-mulish text-[16px] leading-[24px] text-[#495565]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
            <div className="hidden h-[24px] w-px bg-[#d1d5dc] sm:block" />
            <span className="font-arima text-[20px] font-bold leading-[28px] text-[#0a0a0a]">
              My Applications
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-[1120px] flex-col gap-6 px-4 pb-14 pt-8 sm:px-6 lg:gap-8 lg:px-0">
        <section className="flex flex-col items-center gap-3">
          <h1 className="text-center font-arima text-[30px] font-black leading-[1.2] text-[#0a0a0a] sm:text-[38px] lg:text-[48px]">
            Apply to become a Coach
          </h1>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <span className="text-center font-mulish text-[18px] font-light leading-[1.4] text-[#4a4a4a] lg:text-[20px]">
              Application Submitted on : {application.signedDate}
            </span>
            <div
              className={`flex h-[32px] items-center justify-center rounded-[36px] border px-2 ${status.className}`}
            >
              <span className="font-mulish text-[16px] font-medium leading-[20px]">
                {status.label}
              </span>
            </div>
          </div>
        </section>

        <section className="rounded-[24px] border border-[#e5e7eb] bg-white p-4 shadow-[0_4px_6px_0_rgba(193,187,187,0.1)] sm:p-6 lg:p-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <SectionTitle title="Required Information" />
              <Field label="Name" value="David" />
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Phone number" value="0192836443242" />
                <Field label="Location" value="Location" />
              </div>
              <Field label="Coach Type" value="Healer" trailingIcon />
            </div>

            <div className="space-y-4 border-t border-[#e5e7eb] pt-6">
              <SectionTitle title="Experience Level" />
              <div className="rounded-[8px] border border-[#d9a1ff] bg-white px-4 py-4 font-mulish text-[16px] text-[#1a1a1a]">
                Entry Level (0-2 years)
              </div>
            </div>

            <div className="space-y-4 border-t border-[#e5e7eb] pt-6">
              <SectionTitle title="Area of Experties" />
              <div className="flex flex-wrap gap-2">
                {[
                  "Career Coaching",
                  "Emotional Wellness",
                  "Mental Wellbeing",
                  "Life Transitions",
                  "Mindfulness",
                  "Stress Management",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-[24px] bg-white px-3 py-2 font-arima text-[14px] font-medium text-[#1a1a1a]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 border-t border-[#e5e7eb] pt-6">
              <SectionTitle title="Current Role / Designation" />
              <div className="rounded-[8px] border border-[#d9a1ff] bg-white px-4 py-4 font-mulish text-[16px] text-[#1a1a1a]">
                Mental Health Advisor
              </div>
            </div>

            <div className="space-y-4 border-t border-[#e5e7eb] pt-6">
              <SectionTitle title="Upload Certificate / Id" />
              <div className="inline-flex rounded-[12px] bg-[rgba(238,214,248,0.37)] px-4 py-4 font-mulish text-[16px] font-semibold text-[#1a1a1a]">
                Document.pdf
              </div>
            </div>

            <div className="space-y-4 border-t border-[#e5e7eb] pt-6">
              <h3 className="font-mulish text-[20px] font-semibold leading-[24px] text-[#1a1a1a]">
                Cover Letter
              </h3>
              <div className="rounded-[8px] border border-[#d9a1ff] bg-white px-4 py-4 font-mulish text-[16px] text-[#1a1a1a]">
                Small collaborative team, fast-paced startup environment, focus on work-life balance.
              </div>
            </div>

            <div className="space-y-4 border-t border-[#e5e7eb] pt-6">
              <SectionTitle title="Are you legally authorized to work in India?" />
              <div className="rounded-[8px] border border-[#d9a1ff] bg-white px-4 py-4 font-mulish text-[16px] text-[#1a1a1a]">
                Yes
              </div>
            </div>

            <div className="space-y-4 border-t border-[#e5e7eb] pt-6">
              <SectionTitle title="Will you now or in the future require sponsorship for employment visa status?" />
              <div className="rounded-[8px] border border-[#d9a1ff] bg-white px-4 py-4 font-mulish text-[16px] text-[#1a1a1a]">
                No
              </div>
            </div>

            <div className="space-y-4 border-t border-[#e5e7eb] pt-6">
              <SectionTitle title="Which Indian state do you reside in?" />
              <div className="rounded-[8px] border border-[#ac46ff] bg-white px-4 py-4 font-mulish text-[16px] text-[#1a1a1a]">
                Uttar Pradesh
              </div>
            </div>

            <div className="space-y-4 border-t border-[#e5e7eb] pt-6">
              <SectionTitle title="Please provide your full perm address/state of residency address." />
              <div className="rounded-[8px] border border-[#deb0fd] bg-white px-4 py-4 font-mulish text-[16px] text-[#1a1a1a]">
                393 Estrella Mountain, Port Lacyfield 21209
              </div>
            </div>

            <div className="space-y-4 border-t border-[#e5e7eb] pt-6">
              <SectionTitle title="What Indian states are you currently licensed in?" />
              <div className="rounded-[8px] border border-[#deb0fd] bg-white px-4 py-4 font-mulish text-[16px] text-[#1a1a1a]">
                Uttarakhand, Uttar Pradesh
              </div>
            </div>

            <div className="space-y-4 border-t border-[#e5e7eb] pt-6">
              <SectionTitle title="Do you currently operate-or do you plan to operate-under a registered business entity (e.g., LLC, S-Corp, Sole Proprietorship) for the purposes of providing services as an independent contractor?" />
              <div className="rounded-[8px] border border-[#deb0fd] bg-white px-4 py-4 font-mulish text-[16px] text-[#1a1a1a]">
                Unsure
              </div>
            </div>

            <div className="space-y-4 border-t border-[#e5e7eb] pt-6">
              <SectionTitle title="What is your availability to deliver care sessions? Please select any/all that apply." />
              <div className="rounded-[8px] border border-[#deb0fd] bg-white px-4 py-4 font-mulish text-[16px] text-[#1a1a1a]">
                Weekdays
              </div>
            </div>

            <div className="space-y-4 border-t border-[#e5e7eb] pt-6">
              <SectionTitle title="Please briefly describe your clinical background including total years of experience in the mental health industry" />
              <div className="rounded-[8px] border border-[#deb0fd] bg-white px-4 py-4 font-mulish text-[16px] text-[#1a1a1a]">
                Small collaborative team, fast-paced startup environment, focus on work-life balance.
              </div>
            </div>

            <div className="space-y-4 border-t border-[#e5e7eb] pt-6">
              <SectionTitle title="Please select the modalities you have experience in and would like to actively offer as a AMPL Provider." />
              <div className="rounded-[8px] border border-[#deb0fd] bg-white px-4 py-4 font-mulish text-[16px] text-[#1a1a1a]">
                Solution focused therapy, Dialectical Behaviour Therapy (DBT)
              </div>
            </div>

            <div className="space-y-4 border-t border-[#e5e7eb] pt-6">
              <SectionTitle title="This role requires the use of a personal laptop (tablets and mobile devices are not supported). Will you be using a laptop for this role?" />
              <div className="rounded-[8px] border border-[#d9a1ff] bg-white px-4 py-4 font-mulish text-[16px] text-[#1a1a1a]">
                Yes
              </div>
            </div>

            <div className="space-y-4 border-t border-[#e5e7eb] pt-6">
              <h3 className="font-mulish text-[20px] font-semibold leading-[24px] text-[#1a1a1a]">Signature</h3>
              <img
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/ox9URe5RkN.png"
                alt="Signature"
                className="h-[72px] w-[108px] object-cover"
              />
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="flex h-[48px] w-full max-w-[264px] items-center justify-center rounded-[12px] bg-[linear-gradient(90deg,#B95AF9_0%,#8F45FF_100%)] px-6"
              >
                <span className="font-arima text-[16px] font-bold leading-[20px] text-white">Go Back</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
