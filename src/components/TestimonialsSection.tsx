import { useState } from "react";
import { Star, CheckCircle, Quote, TrendingDown, Award, Sparkles, ChevronLeft, ChevronRight, Lock } from "lucide-react";
import { TESTIMONIALS } from "../data/productData";
import transformationPhotoWebp from "../assets/transformation-proof.webp";
import transformationPhotoJpg from "../assets/transformation-proof.jpg";
import transformationMalePhoto from "../assets/transformation-proof-male.jpg";

export function TestimonialsSection() {
  const [caseIndex, setCaseIndex] = useState<0 | 1>(0);

  const nextCase = () => setCaseIndex((prev) => (prev === 0 ? 1 : 0));
  const prevCase = () => setCaseIndex((prev) => (prev === 1 ? 0 : 1));

  return (
    <section id="testimonials-section" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#244B41] bg-[#E5EFEA] px-3.5 py-1 rounded-full">
            Resultados Comprovados
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2621] mt-3 tracking-tight">
            Quem Aplicou o Método Já Está Colhendo Resultados
          </h2>
          <p className="text-base sm:text-lg text-[#55645E] mt-3 leading-relaxed">
            Mulheres e homens reais que abandonaram o efeito sanfona seguindo a reprogramação metabólica de 4 fases.
          </p>
        </div>

        {/* Featured Real Transformation Case Study with the official image */}
        <div className="bg-[#141A17] text-white rounded-3xl p-6 sm:p-8 border border-[#2B3B32] shadow-xl mb-16 overflow-hidden">
          
          {/* Top Carousel Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[#23352B]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#A5CDB9]">
                {caseIndex === 0 ? "Transformação Caso 1: Aluna (Feminino)" : "Transformação Caso 2: Aluno (Masculino)"}
              </span>
            </div>

            {/* Side Navigation Buttons ("Ir pro lado") */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevCase}
                className="px-3 py-1.5 rounded-xl bg-[#1C2C23] hover:bg-[#284033] text-white flex items-center gap-1 text-xs font-bold border border-[#2E4A3B] transition-colors cursor-pointer"
                title="Caso anterior"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>
              <span className="text-xs font-extrabold text-[#4ADE80] px-1">
                {caseIndex + 1} / 2
              </span>
              <button
                onClick={nextCase}
                className="px-3 py-1.5 rounded-xl bg-[#22C55E] hover:bg-[#1EAE53] text-white flex items-center gap-1 text-xs font-bold border border-[#33BD68] transition-colors cursor-pointer shadow-sm"
                title="Próximo caso (ir para o lado)"
              >
                <span>Próximo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 flex justify-center relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#2D3F35] shadow-2xl bg-black/60 max-w-[460px] w-full group">
                
                {/* Side Buttons overlaying the image */}
                <button
                  onClick={prevCase}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/75 hover:bg-[#22C55E] text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg"
                  title="Voltar para o caso anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextCase}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/75 hover:bg-[#22C55E] text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg"
                  title="Avançar para o próximo caso"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {caseIndex === 0 ? (
                  <img
                    src={transformationPhotoWebp}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = transformationPhotoJpg;
                    }}
                    alt="Resultado Oficial: 30 Dias de Dieta + Treino - Aluna"
                    className="w-full h-auto object-contain rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <img
                    src={transformationMalePhoto}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/transformation-proof-male.jpg";
                    }}
                    alt="Resultado Oficial: 30 Dias de Dieta + Treino - Aluno"
                    className="w-full h-auto object-contain rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                )}

                <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-bold text-[#4ADE80] border border-[#2B4B38] flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                  <span>{caseIndex === 0 ? "Aluna: Caso Real Auditado" : "Aluno: Caso Real Auditado"}</span>
                </div>
              </div>
            </div>

            {/* Right Story & Pillars */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-[#1B2B22] text-[#4ADE80] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-[#2A4837]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Evolução Comprovada em 30 Dias</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {caseIndex === 0 
                    ? "Aluna (Feminino): Desinchaço Total e -4,8 kg em 30 Dias"
                    : "Aluno (Masculino): Perda de Gordura Visceral e Definição Muscular"}
                </h3>
                <p className="text-sm text-[#A2B6AC] mt-2 leading-relaxed">
                  Veja a transformação corporal obtida através da reprogramação metabólica progressiva de 4 fases, combinando deficit calórico inteligente e treinos diários de 15 minutos:
                </p>
              </div>

              {/* Comparison Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="bg-black/50 border border-rose-500/30 rounded-xl p-3.5">
                  <div className="text-xs font-bold text-[#FF8A80] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>Dia 1 (Antes):</span>
                  </div>
                  <ul className="text-xs text-[#CBD5E1] space-y-1.5">
                    <li className="flex items-center gap-1.5 text-rose-300">
                      <span className="text-rose-500 font-bold">✕</span> Barriga mais aparente
                    </li>
                    <li className="flex items-center gap-1.5 text-rose-300">
                      <span className="text-rose-500 font-bold">✕</span> Menor definição muscular
                    </li>
                    <li className="flex items-center gap-1.5 text-rose-300">
                      <span className="text-rose-500 font-bold">✕</span> Menos disposição diária
                    </li>
                    <li className="flex items-center gap-1.5 text-rose-300">
                      <span className="text-rose-500 font-bold">✕</span> Autoestima mais baixa
                    </li>
                  </ul>
                </div>

                <div className="bg-black/50 border border-[#22C55E]/35 rounded-xl p-3.5">
                  <div className="text-xs font-bold text-[#4ADE80] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                    <span>Dia 30 (Depois):</span>
                  </div>
                  <ul className="text-xs text-[#E2E8F0] space-y-1.5">
                    <li className="flex items-center gap-1.5 text-emerald-300">
                      <span className="text-[#4ADE80] font-bold">✓</span> Cintura visivelmente mais fina
                    </li>
                    <li className="flex items-center gap-1.5 text-emerald-300">
                      <span className="text-[#4ADE80] font-bold">✓</span> Mais definição muscular
                    </li>
                    <li className="flex items-center gap-1.5 text-emerald-300">
                      <span className="text-[#4ADE80] font-bold">✓</span> Mais energia no dia a dia
                    </li>
                    <li className="flex items-center gap-1.5 text-emerald-300">
                      <span className="text-[#4ADE80] font-bold">✓</span> Autoestima nas alturas
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pillars Badges */}
              <div className="border-t border-[#25372E] pt-3 flex flex-wrap gap-2 text-[11px] text-[#A2B5AB]">
                <span className="bg-[#17251E] border border-[#254030] px-3 py-1 rounded-lg">🍽️ Alimentação Controlada</span>
                <span className="bg-[#17251E] border border-[#254030] px-3 py-1 rounded-lg">🏋️ Treino Regular (15 min)</span>
                <span className="bg-[#17251E] border border-[#254030] px-3 py-1 rounded-lg">💧 Água (2,5L a 3L/dia)</span>
                <span className="bg-[#17251E] border border-[#254030] px-3 py-1 rounded-lg">😴 Sono Reparador (7-8h)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E0D8C9] shadow-xs flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-[#E2DACB] absolute top-6 right-6" />

              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Weight Loss Highlight */}
                <div className="inline-flex items-center gap-1.5 bg-[#E8F3EE] text-[#244B41] px-3 py-1 rounded-full text-xs font-bold mb-4">
                  <TrendingDown className="w-3.5 h-3.5 text-[#2E7D59]" />
                  <span>{item.weightLost} em {item.timeframe}</span>
                </div>

                {/* Body Text */}
                <p className="text-sm text-[#4E5C56] italic leading-relaxed mb-6">
                  "{item.text}"
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-[#EDE7DC] pt-4 flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-[#1B2923] text-sm">
                    {item.name}, {item.age} anos
                  </div>
                  <div className="text-[11px] text-[#7A8A83]">
                    {item.city}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-[#2E7D59] font-semibold bg-[#E8F3EE] px-2 py-0.5 rounded-md">
                  <CheckCircle className="w-3 h-3" />
                  <span>{item.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature from Page 19 of PDF: Tabela de Registro de Progresso */}
        <div className="max-w-4xl mx-auto bg-[#F5EFE4] rounded-3xl p-6 sm:p-8 border border-[#DFD6C6]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C85A32]">
                <Award className="w-4 h-4" />
                <span>Cronograma de Resultados</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C2923] mt-1">
                Evolução Real Esperada Durante os 30 Dias
              </h3>
              <p className="text-xs sm:text-sm text-[#57655F] mt-1">
                Acompanhe como seu corpo reage semana a semana à reprogramação metabólica:
              </p>
            </div>

            <span className="text-xs bg-white text-[#244B41] font-bold px-3 py-1.5 rounded-xl border border-[#D8CFBF] self-start sm:self-auto">
              Planilha de acompanhamento inclusa no guia
            </span>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-[#D9D0BF] text-xs">
            <div className="grid grid-cols-4 bg-[#FAF7F2] p-3 font-bold text-[#2A3731] border-b border-[#E3D9C9] text-center sm:text-left">
              <div>Semana</div>
              <div>Peso (kg)</div>
              <div>Cintura (cm)</div>
              <div>Como me sinto</div>
            </div>
            <div className="grid grid-cols-4 p-3 border-b border-[#EFE8DC] text-[#55635C] items-center text-center sm:text-left">
              <div className="font-semibold text-[#1F2C26]">Semana 1 (F1)</div>
              <div className="text-emerald-700 font-semibold">-2 a -3 kg (desinchaço)</div>
              <div>Menos estufamento</div>
              <div className="italic">Leveza e digestão limpa</div>
            </div>
            <div className="grid grid-cols-4 p-3 border-b border-[#EFE8DC] text-[#55635C] items-center text-center sm:text-left">
              <div className="font-semibold text-[#1F2C26]">Semana 2 (F2)</div>
              <div className="text-emerald-700 font-semibold">-1 a -1,5 kg</div>
              <div>Roupas mais folgadas</div>
              <div className="italic">Mais energia e termogênese</div>
            </div>
            <div className="grid grid-cols-4 p-3 border-b border-[#EFE8DC] text-[#55635C] items-center text-center sm:text-left">
              <div className="font-semibold text-[#1F2C26]">Semana 3 (F3)</div>
              <div className="text-emerald-700 font-semibold">-1 a -1,5 kg</div>
              <div>Redução da pochete</div>
              <div className="italic">Zero compulsão por doces</div>
            </div>
            <div className="grid grid-cols-4 p-3 text-[#55635C] items-center text-center sm:text-left">
              <div className="font-semibold text-[#1F2C26]">Semana 4 (F4)</div>
              <div className="text-emerald-700 font-semibold">Peso estabilizado</div>
              <div>Definição visível</div>
              <div className="italic">Autonomia e peso blindado</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
