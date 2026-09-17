import { Star, CheckCircle, Quote, TrendingDown, Award } from "lucide-react";
import { TESTIMONIALS } from "../data/productData";

export function TestimonialsSection() {
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
