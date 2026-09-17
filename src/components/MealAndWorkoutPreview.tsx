import { Check, X, BookOpen, Utensils, Zap, Dumbbell, ShieldCheck, ArrowRight, Heart } from "lucide-react";
import { WHAT_IS_INSIDE } from "../data/productData";

interface MealAndWorkoutPreviewProps {
  onCtaClick: () => void;
}

export function MealAndWorkoutPreview({ onCtaClick }: MealAndWorkoutPreviewProps) {
  return (
    <section id="inside-section" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C85A32] bg-[#F7EAE5] px-3.5 py-1 rounded-full">
            Conteúdo do Material
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#19241E] mt-3 tracking-tight">
            Tudo o Que Você Recebe Dentro do Guia Oficial
          </h2>
          <p className="text-base sm:text-lg text-[#55635C] mt-3 leading-relaxed">
            Um material 100% prático, direto ao ponto e sem enrolação teórica. Você só precisa abrir o celular e seguir o passo a passo diário:
          </p>
        </div>

        {/* 6 Core Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHAT_IS_INSIDE.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#E2DDD3] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-[#244B41] bg-[#E8F3EE] px-2.5 py-1 rounded-md">
                    {item.tag}
                  </span>
                  <span className="font-mono text-xs text-[#9DAFA6] font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-[#1B2923] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#506059] leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F0EBE0] flex items-center gap-1.5 text-xs font-semibold text-[#244B41]">
                <Check className="w-3.5 h-3.5 text-[#2E7D59]" />
                <span>Incluso no acesso digital imediato</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison: Why this works when others failed */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#DDD4C4] shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#C85A32] uppercase tracking-wider">
              A Diferença Que Faz Você Ter Resultado
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A2621] mt-1">
              Dietas Restritivas Comuns vs. Desafio Seca 30 Dias
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* The Old Way (Frustrating) */}
            <div className="bg-[#FAF5F5] border border-[#ECDCDC] rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm mb-2">
                <X className="w-5 h-5" />
                <span>O Jeito Tradicional (Que Gera Efeito Sanfona)</span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-[#614D4D]">
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Passar fome e viver contando calorias desesperadamente</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Cortar carboidratos a zero e ficar sem energia o dia inteiro</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Horas intermináveis na esteira da academia sem ver a pochete sumir</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Ingredientes caros e suplementos milagrosos que não funcionam</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Basta um fim de semana para recuperar todo o peso perdido</span>
                </div>
              </div>
            </div>

            {/* The Desafio Seca Way */}
            <div className="bg-[#F0F7F4] border-2 border-[#244B41] rounded-2xl p-6 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-[#244B41] font-bold text-sm mb-2">
                <Check className="w-5 h-5 text-[#244B41]" />
                <span>O Método Desafio Seca em 30 Dias</span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-[#263D34]">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#244B41] shrink-0 mt-0.5" />
                  <span><strong>Sem passar fome:</strong> Refeições densas e saciantes que controlam a insulina</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#244B41] shrink-0 mt-0.5" />
                  <span><strong>Shots matinais específicos:</strong> Destravam a queima e a digestão em jejum</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#244B41] shrink-0 mt-0.5" />
                  <span><strong>Treinos de 15 minutos em casa:</strong> Praticidade total sem precisar de academia</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#244B41] shrink-0 mt-0.5" />
                  <span><strong>Comida simples e barata:</strong> Alimentos normais que você compra na feira</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#244B41] shrink-0 mt-0.5" />
                  <span><strong>Fase de Consolidação:</strong> Blinda o peso para evitar o temido efeito sanfona</span>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onCtaClick}
              className="bg-[#244B41] hover:bg-[#1B3831] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-md transition-all active:scale-98 cursor-pointer inline-flex items-center gap-2"
            >
              <span>Quero Acessar o Método e Secar Com Saúde</span>
              <ArrowRight className="w-4 h-4 text-[#F4D06F]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
