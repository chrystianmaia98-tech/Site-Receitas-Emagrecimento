import { ArrowRight, Check, ShieldCheck, Zap, Lock, CreditCard, Sparkles } from "lucide-react";

interface BottomOfferCtaProps {
  onOpenCheckout: () => void;
}

export function BottomOfferCta({ onOpenCheckout }: BottomOfferCtaProps) {
  return (
    <section className="py-14 bg-[#1E2B25] text-white border-b border-[#2B3C34] relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2D453B]/50 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#24352D] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left Text */}
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-1.5 bg-[#C85A32] text-white px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-[#F4D06F]" />
              <span>Oportunidade Única</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Pronta para secar e desinchar nos próximos 30 dias?
            </h3>

            <p className="text-xs sm:text-sm text-[#B4CAC0] leading-relaxed">
              Receba o <strong>Guia Oficial</strong> com as 4 Fases Metabólicas, cardápio completo, shots em jejum, treinos de 15 minutos e todos os <strong>4 Bônus Exclusivos</strong>.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-[#95AEA2] pt-1">
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#4ADE80]" />
                Acesso imediato no e-mail
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4ADE80]" />
                Garantia de 7 dias
              </span>
            </div>
          </div>

          {/* Right Price & Button */}
          <div className="bg-[#19251F] border border-white/10 rounded-2xl p-6 text-center w-full md:w-auto shrink-0 shadow-lg">
            <div className="text-xs text-[#8BA498] line-through font-medium">
              De R$ 197,00 por apenas
            </div>
            <div className="font-serif text-4xl sm:text-5xl font-black text-[#4ADE80] my-1">
              R$ 19,90
            </div>
            <div className="text-xs text-[#B4CAC0] mb-4">
              ou 2x de <strong className="text-white">R$ 10,40</strong>
            </div>

            <button
              onClick={onOpenCheckout}
              className="w-full bg-[#C85A32] hover:bg-[#B04C27] text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Garantir Minha Vaga Agora</span>
              <ArrowRight className="w-4 h-4 text-[#F4D06F]" />
            </button>
            <div className="text-[10px] text-[#7A9185] mt-2 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3" />
              <span>Compra segura e criptografada</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
