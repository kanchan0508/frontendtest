interface NotStartedStateProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonIconUrl: string;
  onButtonClick: () => void;
}

export default function NotStartedState({
  imageUrl,
  title,
  description,
  buttonLabel,
  buttonIconUrl,
  onButtonClick,
}: NotStartedStateProps) {
  return (
    <main className="w-full">
      <div className="mx-auto flex w-full max-w-[1240px] 2xl:max-w-[1700px] justify-center">
        <section className="flex w-full max-w-[556px] flex-col items-start gap-[35px]">
          <div
            className="h-[260px] w-full rounded-[20px] bg-contain bg-center bg-no-repeat sm:h-[320px] md:h-[380px] lg:h-[420px] 2xl:h-[449px]"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />

          <div className="flex w-full max-w-[541px] flex-col items-center gap-[24px]">
            <div className="flex w-full flex-col items-center gap-[16px] text-center">
              <h2 className="heading-h5-bold uppercase text-[#131313]">{title}</h2>
              <p className="body-b2 text-[#131313]">{description}</p>
            </div>

            <button
              type="button"
              onClick={onButtonClick}
              className="flex h-[44px] w-full max-w-[226px] items-center justify-center gap-[4px] rounded-[8px] bg-[#b95af9] px-[16px] py-[12px]"
            >
              <span className="btn-text-sm text-white">{buttonLabel}</span>
              <span
                className="h-[16px] w-[16px] bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${buttonIconUrl})` }}
              />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
