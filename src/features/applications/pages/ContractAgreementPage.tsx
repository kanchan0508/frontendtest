import { ArrowLeft, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type SignatureTab = "draw" | "upload" | "type";

function SignatureModal({
  onClose,
  onAccept,
}: {
  onClose: () => void;
  onAccept: () => void;
}) {
  const [activeTab, setActiveTab] = useState<SignatureTab>("draw");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(15,23,42,0.5)] p-4">
      <div className="relative flex w-full max-w-[748px] flex-col gap-6 overflow-hidden rounded-[24px] border border-[#fffbf5] bg-white px-4 py-8 shadow-[0_25px_50px_0_rgba(9,15,46,0.5)] sm:px-6 sm:py-10 lg:px-8 lg:py-11">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 flex h-12 w-12 items-center justify-center"
          aria-label="Close signature dialog"
        >
          <X className="h-6 w-6 text-[#1a1a1a]" />
        </button>

        <div className="flex flex-col gap-3">
          <h2 className="font-arima text-[24px] font-medium leading-[1.4] text-[#1a1a1a]">Signature</h2>
        </div>

        <div className="flex items-center gap-3 border-b border-[#eee] px-2 sm:gap-6 sm:px-4">
          {[
            { key: "draw" as const, label: "Draw" },
            { key: "upload" as const, label: "Upload" },
            { key: "type" as const, label: "Type" },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`pb-3 pt-2 font-mulish text-[18px] font-medium leading-6 sm:text-[20px] ${
                activeTab === tab.key ? "border-t-2 border-t-[#ac46ff] text-[#1a1a1a]" : "text-[#1a1a1a]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="rounded-[12px] border border-[#ebe2e2] bg-[#fafafa] px-4 py-6">
          <div className="flex min-h-[72px] items-center justify-center">
            <img
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/Xk4xmYqAAB.png"
              alt="Signature preview"
              className="h-[72px] w-[108px] object-cover"
            />
          </div>
        </div>

        <div className="rounded-[8px] bg-[#f1fdfb] px-4 py-2">
          <p className="font-mulish text-[14px] leading-5 text-[#4e8fa7]">
            Your signature is encrypted and stored securely. It will only be used for verification and
            legal purposes related to your coaching agreement.
          </p>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={onAccept}
            className="flex h-[48px] w-full max-w-[200px] items-center justify-center rounded-[12px] bg-[linear-gradient(90deg,#B95AF9_0%,#8F45FF_100%)] px-8"
          >
            <span className="font-arima text-[16px] font-bold leading-[20px] text-white">Accept And Sign</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function TypedSignatureModal({
  onClose,
  onAccept,
}: {
  onClose: () => void;
  onAccept: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(15,23,42,0.5)] p-4">
      <div className="relative flex w-full max-w-[748px] flex-col gap-6 overflow-hidden rounded-[24px] border border-[#fffbf5] bg-white px-4 py-8 shadow-[0_25px_50px_0_rgba(9,15,46,0.5)] sm:px-6 sm:py-10 lg:px-8 lg:py-11">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 flex h-12 w-12 items-center justify-center"
          aria-label="Close signature dialog"
        >
          <X className="h-6 w-6 text-[#1a1a1a]" />
        </button>

        <h2 className="font-arima text-[24px] font-medium leading-[1.4] text-[#1a1a1a]">Signature</h2>

        <div className="flex items-center gap-3 border-b border-[#eee] px-2 sm:gap-6 sm:px-4">
          <button
            type="button"
            className="border-t-2 border-t-[#ac46ff] pb-3 pt-2 font-mulish text-[18px] font-medium leading-6 text-[#1a1a1a] sm:text-[20px]"
          >
            Type
          </button>
          <button
            type="button"
            className="pb-3 pt-2 font-mulish text-[18px] font-medium leading-6 text-[#1a1a1a] sm:text-[20px]"
          >
            Upload
          </button>
          <button
            type="button"
            className="pb-3 pt-2 font-mulish text-[18px] font-medium leading-6 text-[#1a1a1a] sm:text-[20px]"
          >
            Draw
          </button>
        </div>

        <div className="w-full">
          <div className="flex min-h-[56px] items-center rounded-[8px] border border-[#e4e1e5] bg-white px-4 py-3">
            <span className="font-mulish text-[16px] font-light leading-[22px] text-[#1a1a1a]">Sally Bergson</span>
          </div>
        </div>

        <div className="rounded-[8px] bg-[#f1fdfb] px-4 py-2">
          <p className="font-mulish text-[14px] leading-5 text-[#4e8fa7]">
            Your signature is encrypted and stored securely. It will only be used for verification and
            legal purposes related to your coaching agreement.
          </p>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={onAccept}
            className="flex h-[48px] w-full max-w-[200px] items-center justify-center rounded-[12px] bg-[linear-gradient(90deg,#B95AF9_0%,#8F45FF_100%)] px-8"
          >
            <span className="font-arima text-[16px] font-bold leading-[20px] text-white">Accept And Sign</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function SignatureSuccessModal({
  onClose,
  onGoToDashboard,
}: {
  onClose: () => void;
  onGoToDashboard: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(15,23,42,0.5)] p-4">
      <div className="relative flex w-full max-w-[748px] flex-col gap-8 overflow-hidden rounded-[24px] border border-[#fffbf5] bg-white px-4 py-8 shadow-[0_25px_50px_0_rgba(9,15,46,0.5)] sm:px-6 sm:py-10 lg:px-8 lg:py-11">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 flex h-12 w-12 items-center justify-center"
          aria-label="Close success dialog"
        >
          <X className="h-6 w-6 text-[#1a1a1a]" />
        </button>

        <div className="flex flex-col items-center gap-6">
          <img
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/QO2HCkHB0f.png"
            alt="Success"
            className="h-[90px] w-[90px] object-cover"
          />
          <div className="flex w-full max-w-[656px] flex-col items-center gap-2 text-center">
            <h2 className="font-arima text-[26px] font-bold leading-[1.2] text-[#1a1a1a] sm:text-[30px]">
              Application For Approval!
            </h2>
            <p className="font-mulish text-[16px] leading-6 text-[#4a4a4a]">
              Your Thank you for applying. Our team will review your details and get back to you within
              3-5 business days.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-[12px] border border-[#efefef] px-3 py-2">
            <div className="flex items-center gap-4">
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[rgba(131,103,199,0.1)]">
                <img
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/HPgu5VYPkc.png"
                  alt=""
                  className="h-4 w-4 object-cover"
                />
              </div>
              <span className="font-mulish text-[16px] font-semibold leading-7 text-[#1a1a1a]">Email Sent</span>
            </div>
            <p className="mt-1 font-mulish text-[14px] leading-[22px] text-[#4a4a4a]">
              Check your inbox for confirmation and next steps
            </p>
          </div>

          <div className="rounded-[12px] border border-[#efefef] px-3 py-2">
            <div className="flex items-center gap-4">
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[rgba(131,103,199,0.1)]">
                <img
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/qpDRe9WEGs.png"
                  alt=""
                  className="h-[18px] w-[18px] object-cover"
                />
              </div>
              <span className="font-mulish text-[16px] font-semibold leading-7 text-[#1a1a1a]">
                Review Period
              </span>
            </div>
            <p className="mt-1 font-mulish text-[14px] leading-[22px] text-[#4a4a4a]">
              Our team reviews applications within 3-5 business days
            </p>
          </div>
        </div>

        <div className="rounded-[8px] bg-[#faf4ff] px-4 py-3">
          <p className="font-mulish text-[14px] leading-[22px] text-[#4a4a4a]">
            We&apos;ll keep you updated throughout the review process. Please check your spam folder if you
            don&apos;t see our email in your inbox.
          </p>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={onGoToDashboard}
            className="flex h-[48px] w-full max-w-[278px] items-center justify-center rounded-[12px] bg-[linear-gradient(90deg,#B95AF9_0%,#8F45FF_100%)] px-8"
          >
            <span className="font-arima text-[16px] font-bold leading-[20px] text-white">Go To Dashboard</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ContractAgreementPage() {
  const navigate = useNavigate();
  const [signatureModalStep, setSignatureModalStep] = useState<0 | 1 | 2 | 3>(0);

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

      <main className="mx-auto flex w-full max-w-[1120px] flex-col gap-8 px-4 pb-14 pt-8 sm:px-6 lg:gap-9 lg:px-0">
        <section className="text-center font-mulish text-[20px] leading-[1.6] text-black">
          <p className="text-[22px] font-semibold sm:text-[24px]">
            Influencing... Inspiring... and Imprinting ... Minds
          </p>
          <p className="mt-4 text-[28px] font-semibold leading-[1.2] sm:text-[32px]">
            AGREEMENT OF ENGAGEMENT
          </p>
        </section>

        <section className="space-y-6 font-mulish text-[16px] leading-[1.9] text-black sm:text-[18px] lg:text-[20px]">
          <p>
            This agreement is made on XXth Xxxxxxx 202X with{" "}
            <strong>Mr./ Ms. _________________ (Coach or Associate Name)</strong>, will be referred
            as Coach or Associate in this agreement,{" "}
            <strong>_______________________(Address).</strong>
          </p>
          <p className="text-[22px] font-semibold sm:text-[24px]">BETWEEN</p>
          <p>
            AKSHAY MINDS Private Limited, referred as a company in this agreement, has its registered
            office at B - 53, Sector 33, NOIDA, Gautam Budh Nagar, Uttar Pradesh, India-201301, through
            its authorized signatory <strong>Mr. Radha Kant Jaiswal</strong>,{" "}
            <strong>Managing Director.</strong>
          </p>
          <p>
            WHEREAS the company is engaged in the service of inter-alia providing individual or group
            session/s of Coaching, Healing, Therapy, Intervention-Programs, Training-Programs, and other
            HR services. AND that the Coach or Associate has offered his/her services for a consideration.
          </p>
          <p>
            Now, therefore, in consideration of the mutual covenant and agreements hereinafter set forth,
            the parties to this Agreement agree as follows:
          </p>
          <div className="space-y-3">
            <h2 className="text-[22px] font-semibold sm:text-[24px]">
              1.0: Engagements &amp; Scope of Services:
            </h2>
            <p>
              The company hereby engages Coach or Associate and The Coach or Associate hereby accepts such
              engagements to perform the following coaching services:
            </p>
            <p>i. Providing in person coaching, healing, therapy sessions in the designated domains.</p>
            <p>
              ii. Mutually designing with company and conducting Intervention and Training Programs at
              designated place or online.
            </p>
            <p>iii. Any other HR (Human-Resources) Services to be delivered to client/s of company.</p>
          </div>
          <div className="space-y-3">
            <h2 className="text-[22px] font-semibold sm:text-[24px]">2.0: Terms of engagement:</h2>
            <p>
              Coach or Associate&apos;s engagement with the company shall commence on XXnd Xxxxxxxx 202X.
              The Coach or Associate will also be responsible to provide the PAN and AADHAR number for
              purpose of payments and TDS. The duration of the contract will be One year initially from the
              date of commencement and shall be extended after mutual agreement.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-[22px] font-semibold sm:text-[24px]">3.0: Consideration:</h2>
            <p>
              As consideration for the services to be rendered by Associate, the Company shall compensate
              the Coach or Associate on the following terms:
            </p>
            <p>3.1: Payment: The Coach or Associate will raise the invoice for his/her services delivered.</p>
            <p>
              3.2 : Company will pay 80% of invoice amount within 30 working days after the due date of the
              payment.
            </p>
            <p>3.3 : The remaining 20% of all invoiced amounts will be settled every half-yearly.</p>
            <p>
              3.4 : An all-inclusive (applicable GST 18% and any other applicable taxes) invoice-amount
              should be raised for his/her delivered services.
            </p>
            <p>
              3.5 : The delivered session/s time will not include time for preparation, travel, receiving
              training, reporting etc., which is not paid for by the clients.
            </p>
            <p>
              3.6 : The aforesaid invoiced amount shall become due and payable by 10th of succeeding month
              and on receipt of the payment from the client. The payment will be made after deduction of
              income tax as applicable as per the Indian Laws.
            </p>
            <p>
              3.7 : Non-solicitation: The Coach or Associate hereby expressly agrees that he/she shall not
              solicit or attempt to solicit the employment of any client/business partner of the company for
              herself and/or for other associates for a period of twenty-four (24) months from the
              commencement of this Agreement.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-[22px] font-semibold sm:text-[24px]">4.0 : Place of Rendering Services:</h2>
            <p>
              The Coach or Associate will render these services personally at the company&apos;s offices and/or
              its client locations within India or outside, as specified by the company.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-[22px] font-semibold sm:text-[24px]">5.0 Other Terms &amp; conditions:</h2>
            <p>
              5.1 : The Associate is going to render the above services under this agreement as an
              independent contractor for the company.
            </p>
            <p>
              5.2 : The Associate and Coach will not engage or appoint any subcontractor on his/her behalf
              to render the services.
            </p>
            <p>5.3 : It is clearly understood that Associate is neither an employee nor an agent of the company.</p>
            <p>
              5.4 : This agreement shall be governed by the laws of India under the jurisdiction of Gautam
              Budh Nagar Court/s.
            </p>
            <p>
              5.5 : Any Dispute or blame arising out of this contract or breach of the contract shall be
              finally settled in accordance with applicable laws in Gautam Budh Nagar/India.
            </p>
            <p>5.6 : The above agreement is acceptance of Non-Disclosure Agreement.</p>
            <p>
              5.7 : Agreement of Engagement can be terminated in case of breach of trust, unsatisfactory
              performance, or any other disciplinary issues with immediate effect.
            </p>
            <p>
              5.8 : The Coach or Associate agrees to submit consolidated feedback computation, trainer
              report(s) &amp; attendance sheet(s) as applicable.
            </p>
            <p>
              5.9 : The Coach or Associate hereby agrees to attend the Professional/Official Session/s, Boot
              Camp as &amp; when it is organized by the company.
            </p>
          </div>
          <p>In witness whereof this agreement has made and entered as of the date.</p>
          <p>For AKSHAY MINDS Private Limited</p>
          <p>
            <strong>(Radha Kant Jaiswal)</strong> <strong>(Mr./ Ms. ________________)</strong>
          </p>
          <p>Managing Director Coach or Associate</p>
          <p>Date:_________ Witness____________________</p>
          <p>Place:_________ Witness____________________</p>
        </section>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setSignatureModalStep(1)}
            className="flex h-[48px] w-full max-w-[264px] items-center justify-center rounded-[12px] bg-[linear-gradient(90deg,#B95AF9_0%,#8F45FF_100%)] px-6"
          >
            <span className="font-arima text-[16px] font-bold leading-[20px] text-white">
              Agree and Sign Contract
            </span>
          </button>
        </div>
      </main>

      {signatureModalStep === 1 ? (
        <SignatureModal onClose={() => setSignatureModalStep(0)} onAccept={() => setSignatureModalStep(2)} />
      ) : null}
      {signatureModalStep === 2 ? (
        <TypedSignatureModal onClose={() => setSignatureModalStep(0)} onAccept={() => setSignatureModalStep(3)} />
      ) : null}
      {signatureModalStep === 3 ? (
        <SignatureSuccessModal
          onClose={() => setSignatureModalStep(0)}
          onGoToDashboard={() => navigate("/dashboard")}
        />
      ) : null}
    </div>
  );
}
