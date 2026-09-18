import { X, Lock, CheckCircle2, QrCode, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  price?: number;
}

export const CHECKOUT_URL_1990 = "https://pay.lowify.com.br/checkout?product_id=bbysng";
export const CHECKOUT_URL_1490 = "https://pay.lowify.com.br/go.php?offer=069a8da2";

export function redirectToCheckout(url: string) {
  try {
    if (window.self !== window.top) {
      try {
        if (window.top) {
          window.top.location.href = url;
          return;
        }
      } catch {
        window.open(url, "_blank", "noopener,noreferrer");
        return;
      }
    }
  } catch {
    // ignore
  }
  window.location.href = url;
}

export function CheckoutModal({ isOpen, onClose, price = 19.90 }: CheckoutModalProps) {
  if (!isOpen) return null;

  const formattedPrice = price.toFixed(2).replace(".", ",");
  const checkoutUrl = price <= 15 ? CHECKOUT_URL_1490 : CHECKOUT_URL_1990;

  const handleGoToCheckout = () => {
    redirectToCheckout(checkoutUrl);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs overflow-y-auto">
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
            <span>Checkout Seguro · Pagamento via PIX</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">
            Desafio Seca em 30 Dias
          </h3>
          <p className="text-xs text-[#CFE5DB] mt-1">
            Guia Oficial 4 Fases + Cardápio + Treinos + 4 Bônus Exclusivos
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-6">
          {/* Order Summary box */}
          <div className="bg-white rounded-2xl p-4 border border-[#E3DBD0] flex items-center justify-between text-xs sm:text-sm shadow-xs">
            <div>
              <div className="font-bold text-[#1C2923]">Acesso Digital Completo</div>
              <div className="text-[11px] text-[#2E7D59] font-medium">+ 4 Bônus Liberados Grátis</div>
            </div>
            <div className="text-right">
              <div className="text-[11px] text-[#83938C] line-through">De R$ 197,00</div>
              <div className="font-serif font-bold text-2xl text-[#244B41]">R$ {formattedPrice}</div>
            </div>
          </div>

          {/* PIX Payment Highlight */}
          <div className="bg-[#E8F3EE] border border-[#B8DCCE] rounded-2xl p-4 flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#244B41] text-[#A4DEC7] flex items-center justify-center shrink-0">
              <QrCode className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-sm text-[#19322B]">Pagamento Exclusivo via PIX</div>
              <div className="text-xs text-[#486358] mt-0.5">
                Liberação imediata no seu e-mail e WhatsApp logo após a confirmação.
              </div>
            </div>
          </div>

          {/* Checklist */}
          <div className="space-y-2 text-xs text-[#4D5D56] bg-white rounded-xl p-3.5 border border-[#E8E2D6]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D59] shrink-0" />
              <span>Acesso imediato no celular, computador ou tablet</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D59] shrink-0" />
              <span>4 Livros Bônus Exclusivos inclusos sem custo extra</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D59] shrink-0" />
              <span>Garantia incondicional de 7 dias ou seu dinheiro de volta</span>
            </div>
          </div>

          {/* Submit CTA button */}
          <button
            onClick={handleGoToCheckout}
            className="w-full bg-[#C85A32] hover:bg-[#B04C27] text-white font-extrabold text-base py-4 rounded-xl shadow-xl transition-all transform active:scale-98 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>PAGAR R$ {formattedPrice} NO PIX (CHECKOUT OFICIAL)</span>
            <ArrowRight className="w-5 h-5 text-[#F4D06F]" />
          </button>

          <div className="text-center flex items-center justify-center gap-1.5 text-[11px] text-[#697972]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D59]" />
            <span>Ambiente 100% Criptografado & Seguro</span>
          </div>
        </div>
      </div>
    </div>
  );
}
