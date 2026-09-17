import { useState, useEffect } from "react";
import { Sparkles, Timer, Users } from "lucide-react";

export function TopAnnouncementBar({ onCtaClick }: { onCtaClick: () => void }) {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 48 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatSec = timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds;

  return (
    <div id="top-announcement-bar" className="bg-[#1C3B32] text-[#F3EFE6] text-xs sm:text-sm py-2 px-3 sticky top-0 z-50 border-b border-[#2D5A4D] shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2 justify-center">
          <span className="inline-flex items-center gap-1 bg-[#C85A32] text-white px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase">
            <Sparkles className="w-3 h-3" />
            Oferta Especial
          </span>
          <span className="font-medium text-[#E4DDD3]">
            Desconto de lançamento de <strong>75%</strong> + <strong>4 Bônus Exclusivos</strong> liberados!
          </span>
        </div>

        <div className="flex items-center gap-3 justify-center text-[12px]">
          <div className="flex items-center gap-1.5 bg-[#142A24] px-2.5 py-1 rounded-md text-[#F4D06F] font-mono font-semibold">
            <Timer className="w-3.5 h-3.5 text-[#F4D06F]" />
            <span>Expira em {timeLeft.minutes}:{formatSec}</span>
          </div>

          <div className="hidden md:flex items-center gap-1 text-[#C7BDB1]">
            <Users className="w-3.5 h-3.5 text-[#88B29C]" />
            <span>Apenas <strong>7 vagas</strong> restantes</span>
          </div>

          <button
            id="bar-cta-btn"
            onClick={onCtaClick}
            className="underline text-white font-semibold hover:text-[#F4D06F] transition-colors cursor-pointer"
          >
            Aproveitar agora &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
