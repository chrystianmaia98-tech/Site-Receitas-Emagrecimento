import { useState } from "react";
import { 
  Sparkles,
  ShieldCheck,
  Maximize2,
  X as CloseIcon,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Lock
} from "lucide-react";
import transformationPhotoWebp from "../assets/transformation-proof.webp";
import transformationPhotoJpg from "../assets/transformation-proof.jpg";
import transformationMalePhoto from "../assets/transformation-proof-male.jpg";

export function TransformationProofCard() {
  const [currentCase, setCurrentCase] = useState<0 | 1>(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextCase = () => setCurrentCase((prev) => (prev === 0 ? 1 : 0));
  const prevCase = () => setCurrentCase((prev) => (prev === 1 ? 0 : 1));

  return (
    <>
      <div className="bg-[#141A17] text-white rounded-3xl border border-[#2D3B34] shadow-2xl overflow-hidden flex flex-col h-full relative group/card">
        
        {/* Top Header Strip with Case Switcher & Carousel Controls */}
        <div className="bg-[#0D1210] px-3 sm:px-4 py-3 border-b border-[#25322C] flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#A5CDB9] flex items-center gap-1.5">
              <span>Prova Real Oficial</span>
              <span className="bg-[#1A2620] px-2 py-0.5 rounded text-[10px] text-[#4ADE80] font-semibold border border-[#2A3E33] flex items-center gap-1">
                <Lock className="w-3 h-3 text-[#4ADE80]" />
                Autenticado
              </span>
            </span>
          </div>

          {/* Quick Tab Selector: Caso 1 vs Caso 2 */}
          <div className="flex items-center bg-[#18231E] p-0.5 rounded-xl border border-[#2B4034] text-xs">
            <button
              onClick={() => setCurrentCase(0)}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1 text-[11px] ${
                currentCase === 0
                  ? "bg-[#22C55E] text-white shadow-xs"
                  : "text-[#93ABA0] hover:text-white"
              }`}
            >
              <span>Caso 1 (Aluna)</span>
            </button>
            <button
              onClick={() => setCurrentCase(1)}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1 text-[11px] ${
                currentCase === 1
                  ? "bg-[#22C55E] text-white shadow-xs"
                  : "text-[#93ABA0] hover:text-white"
              }`}
            >
              <span>Caso 2 (Aluno)</span>
            </button>
          </div>

          {/* Carousel Navigation Buttons ("Ir pro lado") */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={prevCase}
              className="w-7 h-7 rounded-lg bg-[#1D2B24] hover:bg-[#2A4235] text-white flex items-center justify-center border border-[#2C4839] transition-colors cursor-pointer shadow-xs"
              title="Ver caso anterior (ir para o lado)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-bold text-[#A5CDB9] px-1">
              {currentCase + 1}/2
            </span>
            <button
              onClick={nextCase}
              className="w-7 h-7 rounded-lg bg-[#22C55E] hover:bg-[#1EAE53] text-white flex items-center justify-center border border-[#32C56A] transition-colors cursor-pointer shadow-xs"
              title="Ver próximo caso (ir para o lado)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Carousel Body: Slider between Case 1 (Female) and Case 2 (Male) */}
        <div className="relative p-3 sm:p-4 flex-1 flex flex-col items-center justify-center bg-black/40">
          
          {/* Floating Left Arrow (On-Image Button) */}
          <button
            onClick={prevCase}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/75 hover:bg-[#22C55E] text-white flex items-center justify-center border border-white/20 backdrop-blur-sm transition-all hover:scale-110 cursor-pointer shadow-lg"
            title="Voltar para Caso 1"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Floating Right Arrow (On-Image Button) */}
          <button
            onClick={nextCase}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/75 hover:bg-[#22C55E] text-white flex items-center justify-center border border-white/20 backdrop-blur-sm transition-all hover:scale-110 cursor-pointer shadow-lg"
            title="Avançar para Caso 2"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* CASO 1: Aluna (Feminino) */}
          {currentCase === 0 && (
            <div className="w-full flex flex-col items-center animate-fadeIn">
              <div 
                onClick={() => setIsZoomed(true)} 
                className="cursor-zoom-in relative w-full flex items-center justify-center overflow-hidden rounded-2xl border border-[#2C3B33] shadow-lg"
              >
                <img
                  src={transformationPhotoWebp}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = transformationPhotoJpg;
                  }}
                  alt="Transformação 30 Dias: Aluna (Antes e Depois)"
                  className="w-full h-auto max-h-[600px] object-contain transition-transform duration-300 hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-[11px] font-medium flex items-center gap-1.5 opacity-90">
                  <Maximize2 className="w-3 h-3 text-[#4ADE80]" />
                  <span>Clique para ampliar</span>
                </div>
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs text-[#4ADE80] px-3 py-1 rounded-full text-[11px] font-bold border border-[#2D503C] flex items-center gap-1.5">
                  <span>👩 Aluna: Caso 1 (Feminino)</span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between w-full px-2 text-xs text-[#95ABA0]">
                <span className="flex items-center gap-1.5 text-[#E0EBE4] font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
                  Foto oficial autenticada (Dia 1 vs Dia 30)
                </span>
                <span className="flex items-center gap-1 text-[11px] text-[#55866C] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#4ADE80]" />
                  Bloqueada contra alterações
                </span>
              </div>
            </div>
          )}

          {/* CASO 2: Aluno (Masculino) */}
          {currentCase === 1 && (
            <div className="w-full flex flex-col items-center animate-fadeIn">
              <div 
                onClick={() => setIsZoomed(true)} 
                className="cursor-zoom-in relative w-full flex items-center justify-center overflow-hidden rounded-2xl border border-[#2C3B33] shadow-lg"
              >
                <img
                  src={transformationMalePhoto}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/transformation-proof-male.jpg";
                  }}
                  alt="Transformação 30 Dias: Aluno (Antes e Depois)"
                  className="w-full h-auto max-h-[600px] object-contain transition-transform duration-300 hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-[11px] font-medium flex items-center gap-1.5 opacity-90">
                  <Maximize2 className="w-3 h-3 text-[#4ADE80]" />
                  <span>Clique para ampliar</span>
                </div>
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs text-[#4ADE80] px-3 py-1 rounded-full text-[11px] font-bold border border-[#2D503C] flex items-center gap-1.5">
                  <span>👨 Aluno: Caso 2 (Masculino)</span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between w-full px-2 text-xs text-[#95ABA0]">
                <span className="flex items-center gap-1.5 text-[#E0EBE4] font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
                  Aluno: Transformação masculina comprovada
                </span>
                <span className="flex items-center gap-1 text-[11px] text-[#55866C] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#4ADE80]" />
                  Bloqueada contra alterações
                </span>
              </div>
            </div>
          )}

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 mt-3">
            <button
              onClick={() => setCurrentCase(0)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentCase === 0 ? "w-6 bg-[#22C55E]" : "w-2 bg-[#34483E] hover:bg-[#4E6659]"
              }`}
              title="Ir para Caso 1 (Aluna)"
            />
            <button
              onClick={() => setCurrentCase(1)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentCase === 1 ? "w-6 bg-[#22C55E]" : "w-2 bg-[#34483E] hover:bg-[#4E6659]"
              }`}
              title="Ir para Caso 2 (Aluno)"
            />
          </div>

        </div>

        {/* Bottom Bar with 4 highlights */}
        <div className="bg-[#0D1210] border-t border-[#202D26] px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#93A89E]">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
            Déficit calórico sem passar fome
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
            15 min diários em casa
          </span>
          <button
            onClick={nextCase}
            className="text-[#4ADE80] font-bold hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Ver {currentCase === 0 ? "Caso 2 (Aluno)" : "Caso 1 (Aluna)"}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Lightbox modal for high-res zoom */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute -top-12 right-0 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors cursor-pointer"
              title="Fechar"
            >
              <CloseIcon className="w-6 h-6" />
            </button>
            <img
              src={currentCase === 0 ? transformationPhotoWebp : transformationMalePhoto}
              onError={(e) => {
                (e.target as HTMLImageElement).src = currentCase === 0 ? transformationPhotoJpg : "/transformation-proof-male.jpg";
              }}
              alt="Transformação 30 Dias em Alta Resolução"
              className="max-h-[85vh] w-auto object-contain rounded-xl border border-white/20 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </>
  );
}
