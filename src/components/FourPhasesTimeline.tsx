import { useState } from "react";
import { Sparkles, CheckCircle2, Flame, Lock, ArrowRight, TrendingUp } from "lucide-react";
import { PHASES } from "../data/productData";

interface FourPhasesTimelineProps {
  onCtaClick: () => void;
}

export function FourPhasesTimeline({ onCtaClick }: FourPhasesTimelineProps) {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const activePhase = PHASES[activePhaseIndex];

  return (
    <section id="phases-section" className="py-16 sm:py-24 bg-[#F5F1E8] border-b border-[#E1D9CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#244B41] bg-[#E1ECE6] px-3.5 py-1 rounded-full">
            A Estrutura do Método
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#182520] mt-3 tracking-tight">
            As 4 Fases Metabólicas do Desafio
          </h2>
          <p className="text-base sm:text-lg text-[#55635C] mt-3 leading-relaxed">
            Cada fase foi milimetricamente desenhada para preparar seu corpo para a seguinte. Conheça a jornada de transformação que você vai vivenciar nos próximos 30 dias:
          </p>
        </div>

        {/* Phase Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 max-w-4xl mx-auto mb-8">
          {PHASES.map((phase, idx) => {
            const isSelected = idx === activePhaseIndex;
            return (
              <button
                key={phase.id}
                onClick={() => setActivePhaseIndex(idx)}
                className={`text-left p-3.5 sm:p-4 rounded-2xl transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-white border-[#244B41] shadow-md -translate-y-0.5"
                    : "bg-[#ECE6DA] border-[#DED6C7] hover:bg-white/60 text-[#4D5A54]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                      isSelected ? phase.badgeBg : "bg-[#D8CFBF] text-[#36423C]"
                    }`}
                  >
                    {phase.number}
                  </span>
                  <span className="text-[11px] font-medium text-[#7C8B84]">{phase.duration}</span>
                </div>
                <div className="font-serif font-bold text-sm sm:text-base text-[#19241F] leading-tight">
                  {phase.name.split("&")[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Phase Detail Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#DDD4C4] shadow-xl relative overflow-hidden">
          
          {/* Top banner of phase */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#ECE5D8] pb-6 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${activePhase.badgeBg}`}>
                  {activePhase.number} · {activePhase.days}
                </span>
                <span className="text-xs font-semibold text-[#66756F]">
                  Período: {activePhase.duration}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A2621] mt-2">
                {activePhase.name}
              </h3>
            </div>

            <div className="sm:text-right">
              <span className="text-xs text-[#7B8B84] block font-medium">Transformação Esperada</span>
              <span className="text-sm font-bold text-[#244B41] bg-[#E8F3EE] px-3 py-1 rounded-full inline-block mt-0.5">
                {activePhase.result}
              </span>
            </div>
          </div>

          {/* Grid content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            {/* Objective & Diet Concept */}
            <div className="space-y-5">
              <div className="bg-[#FAF8F5] border border-[#E9E2D5] rounded-2xl p-4 sm:p-5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1F2C26] uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#244B41]" />
                  <span>Objetivo da Fase no Seu Organismo:</span>
                </div>
                <p className="text-sm text-[#4E5C56] leading-relaxed">
                  {activePhase.objective}
                </p>
              </div>

              <div className="bg-[#FAF8F5] border border-[#E9E2D5] rounded-2xl p-4 sm:p-5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1F2C26] uppercase tracking-wider mb-2">
                  <Flame className="w-4 h-4 text-[#C85A32]" />
                  <span>Estratégia Alimentar:</span>
                </div>
                <p className="text-sm text-[#4E5C56] leading-relaxed">
                  {activePhase.dietaryConcept}
                </p>
              </div>
            </div>

            {/* Shot Matinal Teaser Box (Curiosity trigger - does NOT spoil the recipe!) */}
            <div className="bg-linear-to-br from-[#1E3B33] to-[#122620] text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-md relative">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-[#A5DBC6]">
                    Ativação Matinal Diária
                  </span>
                  <Sparkles className="w-4 h-4 text-[#F4D06F]" />
                </div>

                <div className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                  {activePhase.shotTeaser.split(":")[0]}
                </div>

                <p className="text-xs text-[#BED8CD] mb-4 leading-relaxed">
                  {activePhase.shotTeaser.split(":")[1]}
                </p>

                {/* Confidential Lock Notice */}
                <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 flex items-start gap-2.5">
                  <Lock className="w-4 h-4 text-[#F4D06F] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#E1F2EC] leading-relaxed">
                    <strong className="text-white block font-semibold">Conteúdo Exclusivo no Guia</strong>
                    Você receberá a receita exata com proporções, ingredientes e horário de consumo dentro do material oficial.
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 text-[11px] text-[#A6C4B8] flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-[#A5DBC6]" />
                <span>Muda a cada 7 dias para evitar que seu metabolismo acostume!</span>
              </div>
            </div>

          </div>

          {/* Navigation between phases & CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#ECE5D8] pt-6">
            <div className="flex items-center gap-2 text-xs text-[#5D6D66]">
              <span>Navegue pelas 4 fases:</span>
              <div className="flex gap-1">
                {PHASES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhaseIndex(i)}
                    className={`w-6 h-6 rounded-md font-bold text-[11px] cursor-pointer ${
                      i === activePhaseIndex ? "bg-[#244B41] text-white" : "bg-[#EAE4D7] text-[#55635D]"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={onCtaClick}
              className="w-full sm:w-auto bg-[#C85A32] hover:bg-[#B04C27] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-sm transition-transform active:scale-98 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Quero Acessar as 4 Fases no Guia Completo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
