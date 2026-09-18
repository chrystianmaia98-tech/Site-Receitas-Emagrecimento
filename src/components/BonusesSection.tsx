import { Gift, Flame, Calendar, ShieldAlert, ShoppingCart, Check, ArrowRight } from "lucide-react";
import { BONUSES } from "../data/productData";

interface BonusesSectionProps {
  onCtaClick: () => void;
}

export function BonusesSection({ onCtaClick }: BonusesSectionProps) {
  const getBonusIcon = (iconName: string) => {
    switch (iconName) {
      case "Flame":
        return <Flame className="w-6 h-6 text-[#C85A32]" />;
      case "Calendar":
        return <Calendar className="w-6 h-6 text-[#244B41]" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-6 h-6 text-[#D97736]" />;
      case "ShoppingCart":
        return <ShoppingCart className="w-6 h-6 text-[#2C496A]" />;
      default:
        return <Gift className="w-6 h-6 text-[#244B41]" />;
    }
  };

  return (
    <section id="bonuses-section" className="py-16 sm:py-24 bg-[#F6F2E9] border-b border-[#E1D9CD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#C85A32] text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Gift className="w-3.5 h-3.5" />
            <span>Presentes Especiais de Lançamento</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#19241F] tracking-tight">
            Leve 4 Bônus Exclusivos de Graça
          </h2>
          <p className="text-base sm:text-lg text-[#52605A] mt-3 leading-relaxed">
            Se fossem vendidos separadamente, estes 4 guias complementares custariam <strong>R$ 158,00</strong>. Mas hoje, garantindo o Desafio Seca em 30 Dias, você recebe todos sem pagar um centavo a mais.
          </p>
        </div>

        {/* 4 Bonuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DFD7C7] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Top Badge and Value Anchor */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E7E0D3] flex items-center justify-center">
                    {getBonusIcon(bonus.iconName)}
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] text-[#7A8A83] block line-through">
                      Preço normal: {bonus.realValue}
                    </span>
                    <span className="inline-block bg-[#E8F3EE] text-[#244B41] font-bold text-xs px-2.5 py-0.5 rounded-full">
                      HOJE: GRÁTIS
                    </span>
                  </div>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-1">
                  {bonus.subtitle}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A2620] mb-2">
                  {bonus.title}
                </h3>
                <p className="text-sm text-[#505F58] leading-relaxed mb-5">
                  {bonus.description}
                </p>

                {/* Highlights from PDF */}
                <div className="space-y-2 border-t border-[#ECE5D8] pt-4 mb-6">
                  <span className="text-[11px] font-bold uppercase text-[#73827B] tracking-wider block mb-2">
                    O que você vai encontrar dentro:
                  </span>
                  {bonus.benefits.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#3D4C45]">
                      <Check className="w-4 h-4 text-[#244B41] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#FAF8F5] rounded-xl p-3 text-center text-xs font-medium text-[#56655F] border border-[#ECE5D8]">
                Incluso no pacote digital para download instantâneo
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-[#244B41] text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left space-y-1">
            <div className="text-xs uppercase tracking-wider font-bold text-[#A7DFC9]">
              Economia Total Confirmada
            </div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Guia Completo + 4 Bônus = Apenas R$ 19,90 no PIX
            </div>
            <p className="text-xs sm:text-sm text-[#D1E6DC]">
              Tudo o que você precisa para os próximos 30 dias na palma da sua mão.
            </p>
          </div>

          <button
            onClick={onCtaClick}
            className="w-full md:w-auto bg-[#F4D06F] hover:bg-[#F2C750] text-[#1D352E] font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg transition-transform active:scale-98 cursor-pointer flex items-center justify-center gap-2 shrink-0"
          >
            <span>QUERO GARANTIR COM OS 4 BÔNUS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
