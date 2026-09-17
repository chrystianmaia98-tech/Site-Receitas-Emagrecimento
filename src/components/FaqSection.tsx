import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { FAQ_ITEMS } from "../data/productData";

interface FaqSectionProps {
  onCtaClick: () => void;
}

export function FaqSection({ onCtaClick }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-16 sm:py-24 bg-[#F5F0E6] border-b border-[#E0D8CA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#E4DCCE] text-[#4F5D56] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#244B41]" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#192620] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-[#56655F] mt-2">
            Tudo o que você precisa saber antes de iniciar sua transformação de 30 dias.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#DFD6C6] overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-[#1C2923] hover:text-[#244B41] transition-colors cursor-pointer"
                >
                  <span>{item.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E8E0D2] flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 bg-[#244B41] text-white border-transparent" : "text-[#75847D]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-[#4E5D57] leading-relaxed border-t border-[#F2ECE1] pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center bg-white/70 backdrop-blur-xs border border-[#DFD6C6] rounded-2xl p-6">
          <div className="font-serif font-bold text-[#1B2923] text-base sm:text-lg">
            Ainda tem alguma dúvida?
          </div>
          <p className="text-xs sm:text-sm text-[#5C6C65] mt-1 mb-4">
            Você tem 7 dias de garantia incondicional para experimentar o método por dentro sem compromisso.
          </p>
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 bg-[#244B41] hover:bg-[#1C3A33] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all cursor-pointer"
          >
            <span>Quero Testar Sem Riscos Por 7 Dias</span>
            <ArrowRight className="w-4 h-4 text-[#F4D06F]" />
          </button>
        </div>

      </div>
    </section>
  );
}
