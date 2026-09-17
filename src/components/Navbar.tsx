import { BookOpen, ShieldCheck, Award } from "lucide-react";

interface NavbarProps {
  onScrollTo: (elementId: string) => void;
  onOpenCheckout: () => void;
}

export function Navbar({ onScrollTo, onOpenCheckout }: NavbarProps) {
  return (
    <header id="main-navigation" className="bg-[#FAF8F5]/90 backdrop-blur-md sticky top-[37px] z-40 border-b border-[#E8E2D7] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => onScrollTo("hero-section")}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-[#244B41] flex items-center justify-center text-white shadow-sm group-hover:bg-[#1C3B32] transition-colors">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="font-serif font-bold text-lg text-[#1F2923] tracking-tight leading-none">
              Desafio Seca
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#C85A32] mt-0.5">
              Método Oficial 30 Dias
            </div>
          </div>
        </div>

        {/* Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#4A5550]">
          <button 
            onClick={() => onScrollTo("pricing-section")} 
            className="text-[#C85A32] font-bold hover:text-[#A04523] transition-colors cursor-pointer flex items-center gap-1"
          >
            <span>Oferta</span>
            <span className="bg-[#C85A32]/10 text-[#C85A32] text-[10px] px-1.5 py-0.2 rounded-md uppercase font-black">90% OFF</span>
          </button>
          <button 
            onClick={() => onScrollTo("rules-section")} 
            className="hover:text-[#244B41] transition-colors cursor-pointer"
          >
            As 4 Regras
          </button>
          <button 
            onClick={() => onScrollTo("phases-section")} 
            className="hover:text-[#244B41] transition-colors cursor-pointer"
          >
            As 4 Fases
          </button>
          <button 
            onClick={() => onScrollTo("calculator-section")} 
            className="hover:text-[#244B41] transition-colors cursor-pointer"
          >
            Calculadora de Água
          </button>
          <button 
            onClick={() => onScrollTo("bonuses-section")} 
            className="hover:text-[#244B41] transition-colors cursor-pointer"
          >
            4 Bônus Grátis
          </button>
          <button 
            onClick={() => onScrollTo("testimonials-section")} 
            className="hover:text-[#244B41] transition-colors cursor-pointer"
          >
            Resultados
          </button>
          <button 
            onClick={() => onScrollTo("faq-section")} 
            className="hover:text-[#244B41] transition-colors cursor-pointer"
          >
            Dúvidas
          </button>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1 text-[11px] font-medium text-[#5F6B65] bg-[#EFEBE4] px-2.5 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-[#244B41]" />
            <span>Garantia de 7 dias</span>
          </div>

          <button
            id="nav-cta-btn"
            onClick={onOpenCheckout}
            className="bg-[#244B41] hover:bg-[#1B3831] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer flex items-center gap-1.5"
          >
            <Award className="w-4 h-4 text-[#F4D06F]" />
            <span>Garantir Vaga</span>
          </button>
        </div>
      </div>
    </header>
  );
}
