import { useEffect, useRef, useState } from "react";
import { ArrowLeft, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ChakraMeditationPage() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [breathingPhase, setBreathingPhase] = useState("Ready");
  const totalDuration = 15 * 60;
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPlaying) {
      const animate = (timestamp: number) => {
        if (!startTimeRef.current) {
          startTimeRef.current = timestamp - currentTime * 1000;
        }

        const elapsed = (timestamp - startTimeRef.current) / 1000;

        if (elapsed >= totalDuration) {
          setCurrentTime(totalDuration);
          setIsPlaying(false);
          setBreathingPhase("Complete");
          return;
        }

        setCurrentTime(elapsed);

        const cycleTime = elapsed % 19;
        if (cycleTime < 4) {
          setBreathingPhase("Inhale");
        } else if (cycleTime < 11) {
          setBreathingPhase("Hold");
        } else {
          setBreathingPhase("Exhale");
        }

        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      startTimeRef.current = null;
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, currentTime, totalDuration]);

  const progress = (currentTime / totalDuration) * 100;

  return (
    <div className="h-dvh overflow-hidden bg-[#f7f9fc]">
      <header className="relative z-10 border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto flex h-[73px] w-full max-w-[1440px] items-center px-4 sm:px-8 lg:px-[80px]">
          <button type="button" onClick={() => navigate("/dashboard")} className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5 text-[#4a4a4a]" />
            <span className="font-mulish text-[16px] leading-[24px] text-[#4a4a4a]">Back</span>
          </button>
        </div>
      </header>

      <main className="relative h-[calc(100dvh-73px)] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#a36bc2_0%,#7ea7b6_56%,#dcc8bf_100%)]" />
        <div className="absolute inset-x-0 top-0 h-[70%] overflow-hidden [mask-image:linear-gradient(to_bottom,#000_0%,#000_64%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_64%,transparent_100%)]">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/breathing.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(162,59,206,0.14)_0%,rgba(108,152,169,0.14)_48%,rgba(108,152,169,0)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] px-4">
          <div className="mx-auto flex h-full w-full max-w-[896px] min-h-0 flex-col items-center justify-center gap-[clamp(10px,1.6vh,18px)] py-3 sm:py-4">
            <div className="relative h-[min(34vh,420px)] w-[min(34vh,420px)]">
              <div className="absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(162,59,206,0.16)_0%,rgba(0,0,0,0)_70%)]" />
              <div className="absolute left-1/2 top-1/2 h-[71%] w-[71%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(162,59,206,0.21)_0%,rgba(0,0,0,0)_70%)]" />
              <div className="absolute left-1/2 top-1/2 flex h-[57%] w-[57%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[radial-gradient(circle,rgba(162,59,206,0.21)_0%,rgba(162,59,206,0.19)_50%,rgba(162,59,206,0.10)_100%)] shadow-[0_0_100px_#ffffff30,0_0_60px_#a23bce0d]">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(162,59,206,1)_0%,rgba(0,0,0,0)_60%)] opacity-30" />
                <span className="relative font-mulish text-[30px] font-bold text-white sm:text-[32px] lg:text-[38px] xl:text-[40px]">
                  {breathingPhase}
                </span>
              </div>
            </div>

            <h1 className="font-mulish text-[20px] font-bold leading-[1.25] text-white lg:text-[28px] xl:text-[32px]">
              Body Scan Relaxation
            </h1>

            <div className="w-full max-w-[672px]">
              <div className="relative h-4 rounded-full bg-[#f5ede2]">
                <div className="h-full rounded-full bg-[#4a4e8a]" style={{ width: `${progress}%` }} />
                <button
                  type="button"
                  className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-[#4a4e8a] bg-[#fefefe] shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
                  style={{ left: `calc(${progress}% - 8px)` }}
                  onClick={() => {
                    setCurrentTime((time) => Math.min(totalDuration, time + 10));
                    startTimeRef.current = null;
                  }}
                  aria-label="Adjust progress"
                />
              </div>
              <div className="mt-2 flex justify-between font-inter text-[14px] text-[#fffefecc]">
                <span>
                  {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60)
                    .toString()
                    .padStart(2, "0")}
                </span>
                <span>15:00</span>
              </div>
            </div>

            <div className="flex items-center gap-3 lg:gap-6">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffffff1a] lg:h-12 lg:w-12">
                <SkipBack className="h-5 w-5 text-white" />
              </button>
              <button
                type="button"
                onClick={() => setIsPlaying((v) => !v)}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_25px_50px_-12px_#00000040] lg:h-20 lg:w-20"
              >
                <img
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/bzAyEKxTd8.png"
                  alt="Play"
                  className="h-7 w-7 lg:h-8 lg:w-8"
                />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffffff1a] lg:h-12 lg:w-12">
                <SkipForward className="h-5 w-5 text-white" />
              </button>
            </div>

            <div className="flex h-[42px] w-full max-w-[320px] items-center gap-3 rounded-full bg-[#ffffff30] px-5 lg:h-[52px] lg:px-6">
              <Volume2 className="h-5 w-5 text-white" />
              <div className="relative h-4 flex-1 rounded-full bg-[#f5ede2]">
                <div className="h-full w-[70%] rounded-full bg-[#4e8fa7]" />
                <div className="absolute left-[70%] top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4e8fa7] bg-white" />
              </div>
              <span className="font-inter text-[14px] text-white">70</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
