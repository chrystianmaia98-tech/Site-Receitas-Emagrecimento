import { useState } from "react";
import { X, Lock, CheckCircle2, QrCode, Copy, Check, Download, CreditCard, Sparkles, ShieldCheck } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  price?: number;
}

export function CheckoutModal({ isOpen, onClose, price = 19.90 }: CheckoutModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card">("pix");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [step, setStep] = useState<"form" | "pix_pending" | "success">("form");

  if (!isOpen) return null;

  const formattedPrice = price.toFixed(2).replace(".", ",");
  const installmentText = price <= 15 ? "Até 2x de R$ 7,80" : "Até 2x de R$ 10,40";

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Por favor, preencha seu nome e e-mail para envio do material.");
      return;
    }

    if (paymentMethod === "pix") {
      setStep("pix_pending");
    } else {
      // Simulate quick card approval
      setStep("success");
    }
  };

  const handleSimulatePaymentApproval = () => {
    setStep("success");
  };

  const fakePixCode = `00020126580014br.gov.bcb.pix013694de2963-4d78-4f73-b8fe-7e4c2cf9924a5204000053039865405${price.toFixed(2)}5802BR5924DESAFIO SECA 30 DIAS6009SAO PAULO62070503***6304E8A2`;

  const handleCopyPix = () => {
    navigator.clipboard?.writeText(fakePixCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleSimulateDownload = () => {
    alert("Iniciando o download do Guia Oficial 'Desafio Seca em 30 Dias' + 4 Bônus Exclusivos em PDF.");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-[#FAF8F5] w-full max-w-lg rounded-3xl border border-[#DCD5C5] shadow-2xl overflow-hidden relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 border border-[#DDD4C4] text-[#4F5E57] hover:text-black flex items-center justify-center cursor-pointer transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-[#244B41] text-white p-6 sm:p-7 relative overflow-hidden">
          <div className="flex items-center gap-2 text-[#A4DEC7] text-xs font-bold uppercase tracking-wider mb-1">
            <Lock className="w-3.5 h-3.5" />
            <span>Checkout 100% Seguro · Criptografia SSL</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">
            Desafio Seca em 30 Dias
          </h3>
          <p className="text-xs text-[#CFE5DB] mt-1">
            Guia Completo das 4 Fases + Cardápio + Treinos + 4 Bônus Gratuitos
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          
          {step === "form" && (
            <form onSubmit={handleProceedToPayment} className="space-y-5">
              {/* Order Summary box */}
              <div className="bg-white rounded-2xl p-4 border border-[#E3DBD0] flex items-center justify-between text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-[#1C2923]">Acesso Digital Imediato</div>
                  <div className="text-[11px] text-[#2E7D59] font-medium">+ 4 Bônus Liberados Grátis</div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-[#83938C] line-through">R$ 197,00</div>
                  <div className="font-serif font-bold text-xl text-[#244B41]">R$ {formattedPrice}</div>
                </div>
              </div>

              {/* Personal Data */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#4D5D56]">
                  1. Seus dados para envio do material:
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#5A6862] mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Maria Oliveira"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-[#D9D1C2] focus:border-[#244B41] rounded-xl px-3.5 py-2.5 text-sm text-[#1B2822] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#5A6862] mb-1">
                    Seu Melhor E-mail (para onde enviaremos o PDF) *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Ex: maria@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#D9D1C2] focus:border-[#244B41] rounded-xl px-3.5 py-2.5 text-sm text-[#1B2822] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#5A6862] mb-1">
                    WhatsApp com DDD (para envio do link de acesso)
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-[#D9D1C2] focus:border-[#244B41] rounded-xl px-3.5 py-2.5 text-sm text-[#1B2822] outline-none"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#4D5D56]">
                  2. Escolha como prefere pagar:
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("pix")}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center gap-2.5 ${
                      paymentMethod === "pix"
                        ? "bg-white border-[#244B41] shadow-xs"
                        : "bg-[#EFE9DF] border-[#DDD5C5] text-[#55645E]"
                    }`}
                  >
                    <QrCode className="w-5 h-5 text-[#244B41]" />
                    <div>
                      <div className="font-bold text-xs text-[#1C2923]">PIX Imediato</div>
                      <div className="text-[10px] text-[#2E7D59] font-medium">Liberação instantânea</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center gap-2.5 ${
                      paymentMethod === "card"
                        ? "bg-white border-[#244B41] shadow-xs"
                        : "bg-[#EFE9DF] border-[#DDD5C5] text-[#55645E]"
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-[#244B41]" />
                    <div>
                      <div className="font-bold text-xs text-[#1C2923]">Cartão de Crédito</div>
                      <div className="text-[10px] text-[#6A7872]">{installmentText}</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-[#244B41] hover:bg-[#1A3730] text-white font-bold text-sm sm:text-base py-4 rounded-xl shadow-lg transition-transform active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{paymentMethod === "pix" ? `GERAR CÓDIGO PIX (R$ ${formattedPrice})` : `PAGAR R$ ${formattedPrice} COM CARTÃO`}</span>
                <Sparkles className="w-4 h-4 text-[#F4D06F]" />
              </button>

              <div className="text-center flex items-center justify-center gap-1.5 text-[11px] text-[#697972]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D59]" />
                <span>Garantia de 7 dias ou 100% de reembolso sem perguntas</span>
              </div>
            </form>
          )}

          {step === "pix_pending" && (
            <div className="text-center space-y-5">
              <div className="w-14 h-14 rounded-full bg-[#E8F3EE] border border-[#C5DFD2] flex items-center justify-center text-[#244B41] mx-auto">
                <QrCode className="w-7 h-7" />
              </div>

              <div>
                <h4 className="font-serif font-bold text-xl text-[#1B2923]">
                  Pague com PIX para Liberação Imediata
                </h4>
                <p className="text-xs text-[#52625A] mt-1">
                  Abra o aplicativo do seu banco e escaneie o código ou use o copia e cola.
                </p>
              </div>

              {/* QR Mockup */}
              <div className="bg-white p-4 rounded-2xl border border-[#DDD5C5] inline-block shadow-xs">
                <div className="w-44 h-44 bg-[#F2EDE2] border-2 border-dashed border-[#B8AC98] rounded-xl flex flex-col items-center justify-center p-2 text-center">
                  <QrCode className="w-20 h-20 text-[#244B41] mb-2" />
                  <span className="text-[10px] font-mono text-[#586861]">PIX OFICIAL: R$ {formattedPrice}</span>
                </div>
              </div>

              {/* Copy Paste Code */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold text-[#4D5D56] uppercase">
                  Código Copia e Cola:
                </div>
                <div className="flex items-center gap-2">
                  <input
                    readOnly
                    value={fakePixCode}
                    className="flex-1 bg-white border border-[#D8CFC0] rounded-xl px-3 py-2 text-xs font-mono text-[#4A5751] truncate outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleCopyPix}
                    className="bg-[#244B41] hover:bg-[#1B362F] text-white px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 flex items-center gap-1 cursor-pointer"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? "Copiado!" : "Copiar"}</span>
                  </button>
                </div>
              </div>

              {/* Simulation Helper */}
              <div className="bg-[#FAF7F2] rounded-xl p-3 border border-[#E9E1D3] text-xs text-[#5C6D65] space-y-2">
                <div className="text-[11px] font-semibold text-[#1F2C25]">
                  Aguardando confirmação bancária...
                </div>
                <button
                  onClick={handleSimulatePaymentApproval}
                  className="w-full bg-[#2E7D59] hover:bg-[#256649] text-white font-bold text-xs py-2.5 rounded-lg cursor-pointer transition-colors shadow-xs"
                >
                  Simular Pagamento Aprovado (Testar Fluxo)
                </button>
              </div>
            </div>
          )}

          {step === "success" && (
            <div className="text-center space-y-5 py-4">
              <div className="w-16 h-16 rounded-full bg-[#E8F3EE] border-2 border-[#2E7D59] flex items-center justify-center text-[#2E7D59] mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2E7D59] bg-[#E8F3EE] px-3 py-1 rounded-full">
                  Compra Aprovada com Sucesso
                </span>
                <h4 className="font-serif font-bold text-2xl text-[#1B2923] mt-3">
                  Parabéns pela sua decisão!
                </h4>
                <p className="text-xs sm:text-sm text-[#4F5E57] mt-2 max-w-sm mx-auto leading-relaxed">
                  Os dados de acesso ao <strong>Desafio Seca em 30 Dias</strong> e aos <strong>4 Bônus</strong> foram enviados para:
                </p>
                <div className="font-mono text-sm font-bold text-[#244B41] bg-[#E8F3EE] py-2 px-4 rounded-xl mt-2 inline-block">
                  {email || "seu-email@exemplo.com"}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-[#E0D8C8] text-xs text-[#55645E] space-y-2 text-left">
                <div className="font-bold text-[#1C2923] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#C85A32]" />
                  <span>Próximos passos rápidos:</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-[#244B41]">1.</span>
                  <span>Abra seu e-mail (verifique também a pasta de spam ou promoções).</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-[#244B41]">2.</span>
                  <span>Clique no link para baixar seu Guia Oficial e iniciar pela Fase 1.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-[#244B41]">3.</span>
                  <span>Adicione o suporte oficial no WhatsApp para tirar dúvidas.</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full bg-[#244B41] hover:bg-[#1A3830] text-white font-bold text-sm py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
              >
                Concluir e Ir para o Meu E-mail
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
