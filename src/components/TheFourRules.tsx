import { Droplets, Sparkles, Moon, Activity, Check, ArrowRight } from "lucide-react";
import { GOLDEN_RULES } from "../data/productData";

interface TheFourRulesProps {
  onCtaClick: () => void;
}

export function TheFourRules({ onCtaClick }: TheFourRulesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Droplets":
        return <Droplets className="w-6 h-6 text-[#244B41]" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-[#D97736]" />;
      case "Moon":
        return <Moon className="w-6 h-6 text-[#C85A32]" />;
      case "Activity":
        return <Activity className="w-6 h-6 text-[#2C496A]" />;
      default:
        return <Check className="w-6 h-6 text-[#244B41]" />;
    }
  };

  const getBorderColor = (idx: number) => {
    switch (idx) {
      case 0:
        return "hover:border-[#244B41]/50";
      case 1:
        return "hover:border-[#D97736]/50";
      case 2:
        return "hover:border-[#C85A32]/50";
      case 3:
        return "hover:border-[#2C496A]/50";
      default:
        return "hover:border-[#244B41]/50";
    }
  };

  return (
    <section id="rules-section" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C85A32] bg-[#F7EAE5] px-3.5 py-1 rounded-full">
            Capítulo 01 do Guia
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18231E] mt-3 tracking-tight">
            As 4 Regras de Ouro
          </h2>
          <p className="text-base sm:text-lg text-[#55635D] mt-3 leading-relaxed">
            O Método Seca em 30 Dias <strong>não é uma dieta restritiva de passar fome</strong>, e sim uma reprogramação metabólica baseada em densidade nutricional, eliminação de toxinas e controle de picos de insulina. Estas quatro regras valem para os 30 dias inteiros.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {GOLDEN_RULES.map((rule, idx) => (
            <div
              key={rule.number}
              className={`bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DDD3] shadow-xs transition-all duration-200 flex flex-col justify-between ${getBorderColor(idx)}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E6E0D5] flex items-center justify-center">
                    {getIcon(rule.icon)}
                  </div>
                  <span className="text-3xl font-serif font-bold text-[#D0C7B7]">
                    {rule.number}
                  </span>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#798881] mb-1">
                  Regra {rule.number}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C2822] mb-1">
                  {rule.title}
                </h3>
                <div className="text-xs font-medium text-[#C85A32] mb-3">
                  {rule.subtitle}
                </div>

                <p className="text-sm text-[#4E5C55] leading-relaxed mb-6">
                  {rule.description}
                </p>
              </div>

              {/* Benefit footer */}
              <div className="bg-[#FAF7F2] border border-[#E9E3D8] rounded-xl p-3 flex items-start gap-2.5 text-xs text-[#3E4D46]">
                <Check className="w-4 h-4 text-[#2E7D59] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1E2C25]">Impacto no corpo: </span>
                  {rule.benefit}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 bg-[#244B41] hover:bg-[#1B3831] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-md transition-transform active:scale-98 cursor-pointer"
          >
            <span>Quero Aplicar as 4 Regras e Secar</span>
            <ArrowRight className="w-4 h-4 text-[#F4D06F]" />
          </button>
        </div>

      </div>
    </section>
  );
}
