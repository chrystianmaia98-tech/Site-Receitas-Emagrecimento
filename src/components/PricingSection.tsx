import { Check, ShieldCheck, Zap, Lock, CreditCard, Sparkles, ArrowRight } from "lucide-react";
import { TransformationProofCard } from "./TransformationProofCard";

interface PricingSectionProps {
  onOpenCheckout: () => void;
}

export function PricingSection({ onOpenCheckout }: PricingSectionProps) {
  return (
    <section id="pricing-section" className="py-16 sm:py-24 bg-[#F2EDE2] border-b border-[#E0D8C8] relative overflow-hidden">
      
      {/* Background soft ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#244B41]/5 rounded-full filter blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#C85A32] text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Condição Especial por Tempo Limitado</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#19241F] tracking-tight">
            Comece Hoje Por Menos de R$ 0,70 por Dia
          </h2>
          <p className="text-base sm:text-lg text-[#55635D] mt-3 leading-relaxed">
            Veja a transformação que 30 dias de disciplina com o método correto produzem no seu corpo. Garanta sua vaga com 90% de desconto imediato:
          </p>
        </div>

        {/* 2-Column Layout: Transformation Proof Photo on Left + Offer Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: 30-Day Before & After Transformation Card */}
          <div className="lg:col-span-6 flex flex-col">
            <TransformationProofCard />
          </div>

          {/* Right: The Offer Pricing Card */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-white rounded-3xl p-6 sm:p-9 border-2 border-[#244B41] shadow-2xl relative flex flex-col justify-between h-full">
              
              {/* Top Floating Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#244B41] text-white text-xs font-bold uppercase tracking-wider px-5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                <Zap className="w-3.5 h-3.5 text-[#F4D06F]" />
                <span>90% DE DESCONTO APLICADO</span>
              </div>

              <div>
                {/* Product Title */}
                <div className="text-center border-b border-[#EAE3D6] pb-6 mb-6 pt-2">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#7A8A83] font-bold block mb-1">
                    PACOTE COMPLETO DIGITAL
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#182620]">
                    Desafio Seca em 30 Dias
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5D6D67] mt-1">
                    Reprogramação metabólica definitiva com 4 bônus exclusivos
                  </p>
                </div>

                {/* Price Anchor */}
                <div className="text-center mb-6">
                  <div className="text-xs sm:text-sm text-[#82928A] line-through font-medium">
                    De R$ 197,00 por apenas:
                  </div>
                  
                  <div className="flex items-baseline justify-center gap-1 mt-1">
                    <span className="text-lg font-bold text-[#1F2C25]">2x de</span>
                    <span className="font-serif text-5xl sm:text-6xl font-extrabold text-[#244B41] tracking-tight">
                      R$ 10,40
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm font-semibold text-[#1F2D26] mt-1">
                    ou <strong className="text-base text-[#C85A32]">R$ 19,90 à vista</strong> no PIX ou Cartão
                  </div>

                  <div className="text-[11px] text-[#7E8E87] mt-1">
                    Pagamento único · Sem mensalidades recorrentes
                  </div>
                </div>

                {/* Value Checklist */}
                <div className="space-y-3 border-t border-[#ECE5D8] pt-6 mb-6">
                  <div className="text-xs font-bold uppercase text-[#47554E] tracking-wider mb-2">
                    Tudo o que você vai receber agora mesmo:
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2C3B34]">
                    <div className="w-5 h-5 rounded-full bg-[#E8F3EE] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#244B41]" />
                    </div>
                    <span><strong>Guia Oficial Desafio Seca em 30 Dias</strong> (PDF digital de alta resolução)</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2C3B34]">
                    <div className="w-5 h-5 rounded-full bg-[#E8F3EE] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#244B41]" />
                    </div>
                    <span><strong>As 4 Fases Metabólicas explicadas</strong> (da desintoxicação à consolidação anti-sanfona)</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2C3B34]">
                    <div className="w-5 h-5 rounded-full bg-[#E8F3EE] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#244B41]" />
                    </div>
                    <span><strong>Cardápio Completo das 4 Semanas</strong> refeição por refeição sem passar fome</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2C3B34]">
                    <div className="w-5 h-5 rounded-full bg-[#E8F3EE] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#244B41]" />
                    </div>
                    <span><strong>Receitas dos Shots Matinais em jejum</strong> com fórmulas ativadoras para cada fase</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2C3B34]">
                    <div className="w-5 h-5 rounded-full bg-[#E8F3EE] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#244B41]" />
                    </div>
                    <span><strong>Protocolo de Treino de 15 Minutos</strong> em casa, sem aparelhos</span>
                  </div>

                  {/* Bonuses listed */}
                  <div className="bg-[#FAF8F5] rounded-xl p-3 border border-[#EBE3D7] space-y-1.5 mt-2">
                    <span className="text-[11px] font-bold text-[#C85A32] uppercase tracking-wider block">
                      + 4 Bônus Gratuitos Inclusos:
                    </span>
                    <div className="text-xs text-[#4B5A53] flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C85A32] shrink-0" />
                      <span>Bônus 1: Guia Prático de Receitas na Airfryer</span>
                    </div>
                    <div className="text-xs text-[#4B5A53] flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C85A32] shrink-0" />
                      <span>Bônus 2: Manual do Fim de Semana Sem Engordar</span>
                    </div>
                    <div className="text-xs text-[#4B5A53] flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C85A32] shrink-0" />
                      <span>Bônus 3: Protocolo SOS Anti-Compulsão por Doces</span>
                    </div>
                    <div className="text-xs text-[#4B5A53] flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C85A32] shrink-0" />
                      <span>Bônus 4: Lista Mestra de Compras Econômicas</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button & Footers */}
              <div>
                <button
                  id="pricing-cta-button"
                  onClick={onOpenCheckout}
                  className="w-full bg-[#244B41] hover:bg-[#1B3831] text-white text-base sm:text-lg font-bold py-4 px-6 rounded-xl shadow-xl hover:shadow-2xl transition-all transform active:scale-98 cursor-pointer flex items-center justify-center gap-3 group"
                >
                  <span>QUERO SECAR EM 30 DIAS AGORA</span>
                  <ArrowRight className="w-5 h-5 text-[#F4D06F] group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Trust Footnotes */}
                <div className="mt-4 text-center space-y-2">
                  <div className="flex items-center justify-center gap-4 text-xs text-[#5D6E66]">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5 text-[#2E7D59]" />
                      Ambiente 100% Criptografado
                    </span>
                    <span className="flex items-center gap-1">
                      <CreditCard className="w-3.5 h-3.5 text-[#2E7D59]" />
                      PIX & Cartões
                    </span>
                  </div>

                  <div className="text-[11px] text-[#7A8A83] flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#244B41]" />
                    <span>Garantia incondicional de 7 dias ou seu dinheiro de volta</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
