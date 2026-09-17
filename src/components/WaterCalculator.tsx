import { useState } from "react";
import { Droplets, Sun, CheckCircle2, ArrowRight } from "lucide-react";

interface WaterCalculatorProps {
  onCtaClick: () => void;
}

export function WaterCalculator({ onCtaClick }: WaterCalculatorProps) {
  const [weight, setWeight] = useState<number>(70);

  // Regra 1: peso corporal * 35 ml
  const totalWaterMl = Math.round(weight * 35);
  const totalWaterLiters = (totalWaterMl / 1000).toFixed(2);
  const wakeUpMl = 500;
  const restOfDayMl = totalWaterMl - wakeUpMl;

  // Potential water weight release estimate in Phase 1 (typically 1.5 to 3.0 kg depending on weight)
  const estimatedRetentionLoss = Math.min(3.0, Math.max(1.5, Number((weight * 0.035).toFixed(1))));

  const presetWeights = [60, 68, 75, 82, 90, 100];

  return (
    <section id="calculator-section" className="py-16 sm:py-20 bg-[#F4EFE6] border-b border-[#E3DDD1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#E2DACB] text-[#4A5550] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Droplets className="w-3.5 h-3.5 text-[#244B41]" />
            <span>Ferramenta Interativa Oficial</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A2520] tracking-tight">
            Descubra sua Meta de Água (Regra de Ouro #01)
          </h2>
          <p className="text-sm sm:text-base text-[#56635D] mt-2">
            O primeiro passo para destravar o metabolismo e eliminar a retenção de líquidos é a hidratação milimetricamente calculada.
          </p>
        </div>

        {/* Interactive Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DDD5C5] shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Input Side */}
            <div className="md:col-span-6 space-y-6">
              <div>
                <label htmlFor="weight-input" className="block text-xs font-bold text-[#4B5751] uppercase tracking-wider mb-2">
                  Qual é o seu peso atual aproximado?
                </label>
                
                <div className="flex items-center gap-3">
                  <div className="relative flex-1">
                    <input
                      id="weight-input"
                      type="number"
                      min="40"
                      max="180"
                      value={weight}
                      onChange={(e) => setWeight(Math.max(30, Math.min(200, Number(e.target.value) || 70)))}
                      className="w-full text-3xl font-bold font-serif text-[#1C2C24] bg-[#FAF8F5] border-2 border-[#D9D1C1] focus:border-[#244B41] rounded-2xl px-4 py-3 outline-none transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 font-semibold text-[#7A8882]">
                      kg
                    </span>
                  </div>
                </div>

                {/* Range Slider */}
                <input
                  type="range"
                  min="45"
                  max="140"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full mt-4 accent-[#244B41] cursor-pointer"
                />

                {/* Preset Chips */}
                <div className="flex flex-wrap gap-2 mt-3 items-center">
                  <span className="text-[11px] text-[#7A8882] font-medium mr-1">Exemplos rápidos:</span>
                  {presetWeights.map((w) => (
                    <button
                      key={w}
                      type="button"
                      onClick={() => setWeight(w)}
                      className={`text-xs px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        weight === w
                          ? "bg-[#244B41] text-white font-bold"
                          : "bg-[#EFEBE3] text-[#55635C] hover:bg-[#E2DDD3]"
                      }`}
                    >
                      {w} kg
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-[#FAF8F5] border border-[#E4DDD0] rounded-2xl p-4 text-xs text-[#525F59] space-y-2">
                <div className="font-bold text-[#1E2D25] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#244B41]" />
                  <span>Como funciona a fórmula oficial:</span>
                </div>
                <p>
                  Multiplicamos o seu peso corporal por <strong>35 ml</strong> (conforme página 03 do Guia Oficial). É a quantidade exata para ativar as enzimas e filtrar os rins sem sobrecarregar o organismo.
                </p>
              </div>
            </div>

            {/* Results Side */}
            <div className="md:col-span-6 bg-linear-to-br from-[#1E3E36] to-[#142C26] text-white rounded-2xl p-6 sm:p-8 space-y-5 shadow-lg relative overflow-hidden">
              
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-[#A3D9C3] uppercase">
                    Meta Diária Calculada
                  </span>
                  <div className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight mt-1">
                    {totalWaterLiters} <span className="text-2xl font-sans font-normal text-[#C3E4D6]">Litros</span>
                  </div>
                  <div className="text-xs text-[#BED8CD] mt-0.5 font-mono">
                    ({totalWaterMl.toLocaleString("pt-BR")} ml por dia)
                  </div>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xs flex items-center justify-center text-[#A3D9C3]">
                  <Droplets className="w-8 h-8" />
                </div>
              </div>

              {/* Step breakdown */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5 bg-white/10 rounded-xl p-3">
                  <Sun className="w-5 h-5 text-[#F4D06F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Passo 1: Ao acordar em jejum</strong>
                    <span className="text-[#D3E5DC]">
                      Beba <strong>{wakeUpMl} ml</strong> de água morna ou natural assim que pular da cama para lavar o trato gastrointestinal antes do seu Shot Matinal.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white/10 rounded-xl p-3">
                  <Droplets className="w-5 h-5 text-[#91CFC0] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Passo 2: Distribuído no dia</strong>
                    <span className="text-[#D3E5DC]">
                      Divida os <strong>{restOfDayMl.toLocaleString("pt-BR")} ml</strong> restantes em garrafinhas até as 19h (encerrando antes da Janela Noturna).
                    </span>
                  </div>
                </div>
              </div>

              {/* Potential result banner */}
              <div className="bg-[#C85A32] text-white rounded-xl p-3.5 text-xs flex items-center justify-between gap-2 shadow-sm">
                <div>
                  <div className="font-bold text-[13px]">Estimativa da Fase 1 (Dias 1–7):</div>
                  <div className="text-white/90">Eliminação de até <strong>{estimatedRetentionLoss} kg</strong> de inchaço inflamatório!</div>
                </div>
                <button
                  onClick={onCtaClick}
                  className="bg-white text-[#C85A32] hover:bg-[#FAF8F5] px-3 py-1.5 rounded-lg font-bold text-xs shrink-0 transition-transform active:scale-95 cursor-pointer flex items-center gap-1"
                >
                  <span>Iniciar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
