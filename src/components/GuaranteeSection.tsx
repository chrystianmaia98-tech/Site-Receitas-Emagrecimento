import { ShieldCheck, ArrowRight } from "lucide-react";

interface GuaranteeSectionProps {
  onCtaClick: () => void;
}

export function GuaranteeSection({ onCtaClick }: GuaranteeSectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#E8E1D5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DDD5C5] shadow-md flex flex-col md:flex-row items-center gap-8">
          
          {/* Badge Icon */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#FAF5EC] border-4 border-[#244B41]/20 flex flex-col items-center justify-center shrink-0 text-center p-2 shadow-inner">
            <ShieldCheck className="w-10 h-10 text-[#244B41] mb-1" />
            <span className="font-serif font-bold text-xs sm:text-sm text-[#1B2923] leading-none">
              7 DIAS DE
            </span>
            <span className="text-[10px] uppercase font-bold text-[#C85A32] tracking-wider">
              GARANTIA
            </span>
          </div>

          {/* Text description */}
          <div className="space-y-3 text-center md:text-left flex-1">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A2621]">
              Teste por 7 Dias com Risco Zero
            </h3>
            <p className="text-sm text-[#505F58] leading-relaxed">
              O compromisso é com o seu resultado real. Se durante os primeiros 7 dias você seguir a Fase 1 (Desinchaço & Detox) e achar que o método não é para você, basta nos enviar um e-mail ou mensagem no WhatsApp. Devolveremos <strong>100% do valor pago</strong> na hora, sem letras miúdas.
            </p>
            <div>
              <button
                onClick={onCtaClick}
                className="text-xs sm:text-sm font-bold text-[#244B41] hover:text-[#18362E] underline underline-offset-4 cursor-pointer inline-flex items-center gap-1"
              >
                <span>Quero começar meu teste seguro de 7 dias</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
