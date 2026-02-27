import { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DeepBreathingPage() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [breathingPhase, setBreathingPhase] = useState("Ready");
  const totalDuration = 15 * 60;
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const togglePlayPause = async () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * totalDuration;
    setCurrentTime(newTime);
    startTimeRef.current = null;
  };

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

  const progressPercentage = (currentTime / totalDuration) * 100;

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f9fc]">
      <header className="relative z-10 border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto flex h-[73px] w-full max-w-[1440px] items-center px-4 sm:px-8 lg:px-[80px]">
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-5 w-5 text-[#4a4a4a]" />
            <span className="font-mulish text-[16px] font-normal leading-[24px] text-[#4a4a4a]">
              Back
            </span>
          </button>
        </div>
      </header>

      <main className="relative h-[calc(100vh-73px)] min-h-[780px] w-full flex items-center justify-center overflow-hidden">
        {/* background integration only */}
        <video
          loop
          muted
          playsInline
          preload="metadata"
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/breathing.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,122,125,0.28)_0%,rgba(170,136,185,0.75)_50%,rgba(6,122,125,0.59)_100%)]" />

        <div className="relative z-10 flex h-full w-[1120px] max-w-full flex-col items-center justify-center gap-4 px-4">
          <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
            <div
              className="relative w-[448px] h-[448px] max-w-full"
              role="img"
              aria-label="Breathing visualization orb"
            >
              <div className="absolute top-8 left-8 w-96 h-96 rounded-[22369600px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(194,217,145,0.5)_0%,rgba(0,0,0,0)_70%)]" />

              <div className="absolute top-16 left-16 w-80 h-80 rounded-[22369600px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(3,158,162,1)_0%,rgba(0,0,0,0)_70%)]" />

              <div className="absolute top-[calc(50.00%_-_181px)] left-[calc(50.00%_-_181px)] w-[361px] h-[361px]">
                <div className="absolute top-[calc(50.00%_-_192px)] left-[calc(50.00%_-_192px)] w-96 h-96 rounded-[27047200px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(155,215,209,0.13)_0%,rgba(0,0,0,0)_70%)]" />

                <div className="absolute top-[calc(50.00%_-_160px)] left-[calc(50.00%_-_160px)] w-80 h-80 rounded-[27047200px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(155,215,209,0.19)_0%,rgba(0,0,0,0)_70%)]" />

                <div className="flex flex-col w-[308px] h-[308px] items-start absolute top-[calc(50.00%_-_154px)] left-[calc(50.00%_-_154px)] rounded-[27047200px] shadow-[0px_0px_100px_#9bd7d130,0px_0px_60px_#9bd7d160] [background:radial-gradient(50%_50%_at_50%_50%,rgba(155,215,209,1)_0%,rgba(155,215,209,0.5)_50%,rgba(155,215,209,0.25)_100%)]">
                  <div className="relative self-stretch w-full h-[255.99px] rounded-[27047200px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,1)_0%,rgba(0,0,0,0)_60%)] opacity-30" />
                </div>

                <div className="inline-flex h-8 items-start justify-center absolute top-[165px] left-[calc(50.00%_-_61px)]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Mulish-Bold',Helvetica] font-bold text-neutralwhite text-[40px] text-center tracking-[0] leading-8 whitespace-nowrap text-white">
                    {breathingPhase}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[385px] max-w-full items-center gap-2.5 px-5 py-3 relative flex-[0_0_auto] bg-[#ffffffcc] rounded-[27047200px] shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a]">
              <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Mulish-Bold',Helvetica] font-bold text-[#4e8fa7] text-xl text-center tracking-[0] leading-6 whitespace-nowrap">
                  Inhale 4 - Hold 7 - Exhale 8
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[670px] max-w-full h-11 items-center gap-2 relative">
            <div
              className="relative self-stretch w-full h-4 cursor-pointer"
              onClick={handleProgressClick}
              role="slider"
              aria-label="Meditation progress"
              aria-valuemin={0}
              aria-valuemax={totalDuration}
              aria-valuenow={currentTime}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") {
                  setCurrentTime(Math.max(0, currentTime - 10));
                  startTimeRef.current = null;
                } else if (e.key === "ArrowRight") {
                  setCurrentTime(Math.min(totalDuration, currentTime + 10));
                  startTimeRef.current = null;
                }
              }}
            >
              <div className="flex flex-col w-[672px] max-w-full h-4 items-start pl-0 pr-[672px] py-0 absolute top-0 left-0 bg-[#f5ede2] rounded-[22369600px] overflow-hidden">
                <div
                  className="relative h-4 mr-[-1.00px] bg-[#4a4e8a] transition-all duration-100"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>

              <div
                className="absolute top-0 w-4 h-4 bg-[#fefefe] rounded-[22369600px] border-[0.67px] border-solid border-[#4a4e8a] shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] transition-all duration-100"
                style={{ left: `calc(${progressPercentage}% - 8px)` }}
              />
            </div>

            <div className="flex h-5 items-start justify-between pr-[1.91e-05px] pl-0 py-0 relative self-stretch w-full">
              <time className="relative w-[25.68px] h-5">
                <span className="absolute top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#fffefecc] text-sm tracking-[0] leading-5 whitespace-nowrap">
                  {formatTime(currentTime)}
                </span>
              </time>

              <time className="relative w-[33.23px] h-5">
                <span className="absolute top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#fffefecc] text-sm tracking-[0] leading-5 whitespace-nowrap">
                  {formatTime(totalDuration)}
                </span>
              </time>
            </div>
          </div>

          <div className="flex w-56 h-20 items-center justify-center gap-6 relative">
            <button
              className="flex flex-col w-20 h-20 items-start pt-6 pb-0 px-6 relative bg-white rounded-[22369600px] shadow-[0px_25px_50px_-12px_#00000040] aspect-[1] cursor-pointer hover:shadow-[0px_30px_60px_-12px_#00000050] transition-shadow"
              onClick={togglePlayPause}
              aria-label={isPlaying ? "Pause meditation" : "Play meditation"}
              type="button"
            >
              <div className="relative self-stretch w-full h-8">
                {isPlaying ? (
                  <div className="absolute left-[25%] top-[8%] h-[84%] w-[50%] bg-[#4e8fa7]" />
                ) : (
                  <img
                    className="absolute w-[83.33%] h-[91.67%] top-[8.33%] left-[16.67%]"
                    alt="Play"
                    src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/bzAyEKxTd8.png"
                  />
                )}
              </div>
            </button>
          </div>

          <p className="relative self-stretch [font-family:'Arima_Madurai',Helvetica] font-weight-800 text-white text-xl text-center tracking-[0] leading-7">
            Find a comfortable position, close your eyes if you like, and follow
            the breathing pattern. The orb will guide you through each phase.
          </p>
        </div>
      </main>
    </div>
  );
}
