import { useState, useEffect, useRef } from "react";
import { 
  AlertTriangle, 
  X, 
  Check, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Flame, 
  Lock 
} from "lucide-react";

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClaimDiscount: () => void;
}

export function ExitIntentModal({ isOpen, onClose, onClaimDiscount }: ExitIntentModalProps) {
  // Live 10-minute countdown timer for urgency
  const [timeLeft, setTimeLeft] = useState(599); // 9 minutes 59 seconds

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div 
        className="bg-[#151D19] text-white w-full max-w-lg rounded-3xl border-2 border-[#C85A32] shadow-[0_0_50px_rgba(200,90,50,0.35)] overflow-hidden relative my-auto animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close "X" button */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors z-20"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Urgency Strip */}
        <div className="bg-linear-to-r from-[#C85A32] via-[#E26D46] to-[#C85A32] text-white px-4 py-2.5 text-center flex items-center justify-center gap-2 font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md">
          <AlertTriangle className="w-4 h-4 animate-bounce shrink-0" />
          <span>ESPERE! NÃO VÁ EMBORA AINDA!</span>
        </div>

        {/* Content Container */}
        <div className="p-5 sm:p-7 text-center">
          
          {/* Badge & Live Timer */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <span className="bg-[#244B41] text-[#4ADE80] text-[11px] font-extrabold uppercase px-3 py-1 rounded-full border border-[#3E735B] flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-[#F4D06F]" />
              Cupom de Saída Ativado: 92% OFF
            </span>
            <span className="bg-red-500/20 text-[#FFA48B] text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border border-red-500/30 flex items-center gap-1">
              <Clock className="w-3 h-3 text-red-400" />
              Expira em {formattedTime}
            </span>
          </div>

          {/* Heading */}
          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight">
            Não desista de desinchar e secar sua barriga em 30 dias!
          </h3>

          <p className="text-xs sm:text-sm text-[#A9BFB4] mt-2 max-w-md mx-auto leading-relaxed">
            Se o valor foi o motivo da sua saída, nós liberamos agora uma <strong>condição exclusiva e irrecusável</strong> para você começar hoje mesmo:
          </p>

          {/* Price Box with Anchor */}
          <div className="my-5 bg-[#1C2621] border-2 border-[#2F4439] rounded-2xl p-4 sm:p-5 relative shadow-inner">
            <div className="text-xs text-[#87A093] line-through font-medium">
              De R$ 197,00 · Oferta anterior: R$ 19,90
            </div>

            <div className="flex items-baseline justify-center gap-2 mt-1">
              <span className="text-xs uppercase tracking-wider text-[#F4D06F] font-bold">Por apenas</span>
              <span className="font-serif text-5xl sm:text-6xl font-black text-[#4ADE80] tracking-tight">
                R$ 14,90
              </span>
            </div>

            <div className="text-xs sm:text-sm text-[#4ADE80] font-bold mt-1">
              Pagamento único via PIX
            </div>

            <div className="text-[11px] text-[#869E92] mt-1">
              Liberação imediata no seu e-mail e WhatsApp · Sem mensalidades
            </div>
          </div>

          {/* Inclusions Quick Check */}
          <div className="bg-[#121815] rounded-xl p-3 border border-[#23312A] text-left space-y-1.5 mb-5 text-xs text-[#CFDDD5]">
            <div className="text-[10px] uppercase font-bold text-[#A5C3B4] tracking-wider mb-1">
              Você ainda recebe tudo completo:
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
              <span><strong>Guia Oficial Desafio Seca em 30 Dias</strong> (PDF das 4 Fases)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
              <span><strong>Cardápio Completo + Shots Matinais em jejum</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
              <span><strong>Treinos de 15 Minutos para fazer em casa</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#F4D06F] shrink-0" />
              <span><strong>Todos os 4 Bônus Gratuitos Inclusos</strong></span>
            </div>
          </div>

          {/* Big Green/Orange CTA */}
          <button
            onClick={onClaimDiscount}
            className="w-full bg-[#C85A32] hover:bg-[#B54A24] text-white font-extrabold text-base sm:text-lg py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform active:scale-98 cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>QUERO SECAR POR APENAS R$ 14,90</span>
            <ArrowRight className="w-5 h-5 text-[#F4D06F] group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-4 text-[11px] text-[#7A9386] mt-3">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-[#4ADE80]" />
              Acesso Imediato
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#4ADE80]" />
              Garantia de 7 Dias
            </span>
          </div>

          {/* Dismiss button */}
          <div className="mt-4 pt-3 border-t border-[#222E27]">
            <button
              onClick={onClose}
              className="text-[11px] text-[#758A80] hover:text-[#A3B8AE] underline transition-colors cursor-pointer"
            >
              Não quero secar minha barriga e prefiro perder esta oportunidade única.
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
