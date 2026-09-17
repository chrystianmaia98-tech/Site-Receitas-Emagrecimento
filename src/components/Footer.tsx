import { BookOpen, ShieldCheck, Lock, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#192A24] text-[#E0D9CD] py-14 border-t border-[#2B443B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top brand & security */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2D584C] flex items-center justify-center text-white">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="font-serif font-bold text-lg text-white tracking-tight">
                Desafio Seca em 30 Dias
              </div>
              <div className="text-xs text-[#A2C4B7]">
                Reprogramação Metabólica em 4 Fases · Guia Oficial
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#BED8CD]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#7FC4AB]" />
              <span>Garantia de 7 Dias</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#7FC4AB]" />
              <span>Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-[#7FC4AB]" />
              <span>Suporte ao Aluno</span>
            </div>
          </div>
        </div>

        {/* Educational Disclaimer directly from deliverable page 2 */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10 text-xs text-[#B3C7BF] leading-relaxed max-w-4xl mx-auto text-center md:text-left">
          <p className="font-semibold text-white mb-1">
            Aviso de Responsabilidade e Saúde:
          </p>
          <p>
            Este material tem caráter educativo e de desenvolvimento de hábitos saudáveis e não substitui o acompanhamento individualizado de um médico ou nutricionista, especialmente se você tiver alguma condição de saúde pré-existente, gestação ou lactação. Os resultados individuais podem variar de acordo com o metabolismo, dedicação e histórico biológico de cada organismo.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8BAAA0] text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Desafio Seca em 30 Dias. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Termos de Uso</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Políticas de Privacidade</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Contato de Suporte</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
