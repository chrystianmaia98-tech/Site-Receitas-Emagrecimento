import { ArrowRight, CheckCircle2, Star, Zap, Shield, Sparkles, Droplets, Moon, Activity } from "lucide-react";

interface HeroSectionProps {
  onCtaClick: () => void;
  onExploreClick: () => void;
}

export function HeroSection({ onCtaClick, onExploreClick }: HeroSectionProps) {
  return (
    <section id="hero-section" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-[#EAE4D9]">
      {/* Subtle organic gradient backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E8ECE7] via-[#FAF8F5] to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Sales Copy & Call to Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Category Badge */}
            <div className="inline-flex items-center gap-2 bg-[#E9F0EC] border border-[#C5DCD1] text-[#244B41] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-4 h-4 text-[#C85A32]" />
              <span>GUIA OFICIAL · REPROGRAMAÇÃO METABÓLICA COMPROVADA</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.15] text-[#19221D] font-bold tracking-tight">
              Reprograme seu metabolismo em 4 fases e <span className="text-[#C85A32] underline decoration-[#C85A32]/30 decoration-wavy underline-offset-8">seque sem passar fome</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl text-[#4A5550] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              O método definitivo de 30 dias baseado em <strong>densidade nutricional</strong>, <strong>controle de insulina</strong> e <strong>eliminação profunda de toxinas</strong>. Com cardápio completo, shots matinais ativadores e apenas 15 minutos de treino diário em casa.
            </p>

            {/* 4 Phases Micro Strip */}
            <div className="bg-white/80 backdrop-blur-xs border border-[#E3DDD1] rounded-2xl p-3 sm:p-4 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-[#68756F] mb-2.5">
                Progresso Semanal Estruturado — Sem Efeito Sanfona:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left">
                <div className="bg-[#FAF8F5] border border-[#244B41]/20 rounded-xl p-2.5">
                  <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#244B41] text-white">F1 · Dias 1–7</div>
                  <div className="font-semibold text-xs text-[#1F2923] mt-1">Desinchaço & Detox</div>
                  <div className="text-[11px] text-[#63726B]">Até -3kg retidos</div>
                </div>
                <div className="bg-[#FAF8F5] border border-[#D97736]/20 rounded-xl p-2.5">
                  <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#D97736] text-white">F2 · Dias 8–14</div>
                  <div className="font-semibold text-xs text-[#1F2923] mt-1">Ativação Metabólica</div>
                  <div className="text-[11px] text-[#63726B]">Gasto calórico em alta</div>
                </div>
                <div className="bg-[#FAF8F5] border border-[#C85A32]/20 rounded-xl p-2.5">
                  <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#C85A32] text-white">F3 · Dias 15–22</div>
                  <div className="font-semibold text-xs text-[#1F2923] mt-1">Queima Acelerada</div>
                  <div className="text-[11px] text-[#63726B]">Gordura visceral</div>
                </div>
                <div className="bg-[#FAF8F5] border border-[#2C496A]/20 rounded-xl p-2.5">
                  <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#2C496A] text-white">F4 · Dias 23–30</div>
                  <div className="font-semibold text-xs text-[#1F2923] mt-1">Consolidação</div>
                  <div className="text-[11px] text-[#63726B]">Blindagem definitiva</div>
                </div>
              </div>
            </div>

            {/* CTA & Pricing Trigger */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  id="hero-main-cta"
                  onClick={onCtaClick}
                  className="w-full sm:w-auto bg-[#244B41] hover:bg-[#1B3831] text-white text-base sm:text-lg font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-98 cursor-pointer flex items-center justify-center gap-3 group border border-[#326356]"
                >
                  <span>QUERO SECAR EM 30 DIAS</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#F4D06F]" />
                </button>

                <button
                  id="hero-explore-btn"
                  onClick={onExploreClick}
                  className="w-full sm:w-auto bg-transparent hover:bg-black/5 text-[#244B41] border border-[#C5DCD1] text-sm font-semibold px-5 py-3.5 rounded-xl transition-colors cursor-pointer"
                >
                  Conhecer o Método por Dentro
                </button>
              </div>

              {/* Security & Price Pill */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-[#526059]">
                <div className="flex items-center gap-1.5 font-medium text-[#1E3028]">
                  <span className="text-[#C85A32] line-through">De R$ 197</span>
                  <span className="bg-[#244B41]/10 text-[#244B41] px-2 py-0.5 rounded font-bold text-sm">
                    Por apenas R$ 19,90
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D59]" />
                  <span>Acesso Imediato no Celular</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-[#2E7D59]" />
                  <span>Garantia Total 7 Dias</span>
                </div>
              </div>
            </div>

            {/* Social Proof Mini */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#E5D7C7] border-2 border-white flex items-center justify-center text-xs font-bold text-[#564332]">MS</div>
                <div className="w-8 h-8 rounded-full bg-[#C8DACF] border-2 border-white flex items-center justify-center text-xs font-bold text-[#1F4235]">CM</div>
                <div className="w-8 h-8 rounded-full bg-[#E8C2B3] border-2 border-white flex items-center justify-center text-xs font-bold text-[#6D2F1B]">PD</div>
                <div className="w-8 h-8 rounded-full bg-[#D1DFEC] border-2 border-white flex items-center justify-center text-xs font-bold text-[#23476B]">+4k</div>
              </div>
              <div className="text-left text-xs text-[#53615A]">
                <div className="flex items-center text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-[#1F2923] font-bold ml-1.5">4.9/5</span>
                </div>
                <div>Mais de 4.850 pessoas já iniciaram o desafio</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Product Representation (Photo + Ebook Toggle) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-[#244B41]/10 rounded-3xl filter blur-2xl -z-10" />

            {/* Digital Guide Card Mockup - Exact original look */}
            <div className="w-full max-w-[360px] sm:max-w-[400px] bg-[#FAF7F2] rounded-2xl p-5 sm:p-7 border border-[#E0D8C8] shadow-2xl relative transition-transform hover:-translate-y-1 duration-300">
              {/* Header inside cover */}
              <div className="flex justify-between items-start border-b border-[#E3DCD0] pb-4 mb-5">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#7D7365]">
                    GUIA OFICIAL
                  </span>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1B2B23] tracking-tight leading-tight mt-1">
                    Desafio<br/>
                    <span className="text-[#C85A32]">Seca</span> em 30 Dias
                  </div>
                </div>

                <div className="w-14 h-14 relative flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#EAE2D2] border border-[#DDD3C0] flex items-center justify-center">
                    <div className="w-6 h-6 rounded-tl-2xl rounded-br-2xl bg-[#2A5C4E] rotate-45 transform" />
                  </div>
                  <div className="absolute bottom-0 right-1 w-4 h-4 rounded-tr-xl rounded-bl-xl bg-[#C85A32]" />
                </div>
              </div>

              <p className="text-xs text-[#5D6B64] italic leading-relaxed mb-5">
                Reprogramação metabólica em 4 fases — densidade nutricional, controle de insulina e eliminação de toxinas, sem passar fome.
              </p>

              {/* 4 Pillars Icons inside cover */}
              <div className="grid grid-cols-4 gap-2 text-center border-t border-b border-[#E3DCD0] py-4 my-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-[#EAE5D9] flex items-center justify-center text-[#244B41]">
                    <Droplets className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-medium text-[#4D5A54] mt-1 leading-tight">Água calculada</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-[#EAE5D9] flex items-center justify-center text-[#D97736]">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-medium text-[#4D5A54] mt-1 leading-tight">Shot matinal</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-[#EAE5D9] flex items-center justify-center text-[#C85A32]">
                    <Moon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-medium text-[#4D5A54] mt-1 leading-tight">Janela noturna</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-[#EAE5D9] flex items-center justify-center text-[#2C496A]">
                    <Activity className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-medium text-[#4D5A54] mt-1 leading-tight">Movimento diário</span>
                </div>
              </div>

              {/* Phase progress strip inside cover */}
              <div className="flex items-center rounded-lg overflow-hidden text-[10px] font-bold text-white shadow-xs">
                <div className="flex-1 bg-[#244B41] py-1.5 text-center">F1</div>
                <div className="flex-1 bg-[#D97736] py-1.5 text-center">F2</div>
                <div className="flex-1 bg-[#C85A32] py-1.5 text-center">F3</div>
                <div className="flex-1 bg-[#2C496A] py-1.5 text-center">F4</div>
              </div>
              <div className="flex justify-between text-[9px] text-[#7A8882] px-1 mt-1">
                <span>Dias 1–7</span>
                <span>Dias 8–14</span>
                <span>Dias 15–22</span>
                <span>Dias 23–30</span>
              </div>

              {/* Bottom footer badge inside cover */}
              <div className="mt-5 pt-3 border-t border-[#E3DCD0] flex items-center justify-between text-[11px] text-[#47554E] font-medium">
                <span>30 DIAS · 15 MIN DE TREINO</span>
                <span className="bg-[#244B41] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  +4 BÔNUS INCLUSOS
                </span>
              </div>

              <div className="absolute -top-3 -right-3 bg-[#C85A32] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1 animate-pulse">
                <span>DOWNLOAD IMEDIATO</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
