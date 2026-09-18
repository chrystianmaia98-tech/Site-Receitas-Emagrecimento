import { useState, useEffect, useRef } from "react";
import { TopAnnouncementBar } from "./components/TopAnnouncementBar";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { PricingSection } from "./components/PricingSection";
import { WaterCalculator } from "./components/WaterCalculator";
import { TheFourRules } from "./components/TheFourRules";
import { FourPhasesTimeline } from "./components/FourPhasesTimeline";
import { MealAndWorkoutPreview } from "./components/MealAndWorkoutPreview";
import { BonusesSection } from "./components/BonusesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { BottomOfferCta } from "./components/BottomOfferCta";
import { GuaranteeSection } from "./components/GuaranteeSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { ExitIntentModal } from "./components/ExitIntentModal";
import { ArrowUp, Sparkles, ShoppingBag } from "lucide-react";

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

export default function App() {
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  
  const hasTriggeredExitRef = useRef(false);

  // Scroll listener for sticky footer
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 550) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Multi-device Exit Intent & Back Button Intercept
  useEffect(() => {
    // 1. Mobile & Desktop Back Button Intercept (Popstate)
    if (typeof window !== "undefined" && window.history) {
      // Seed a history entry so going back triggers popstate instead of immediately leaving
      try {
        window.history.pushState({ page: "landing" }, "", window.location.href);
      } catch {
        // Safe fallback
      }

      const handlePopState = () => {
        if (!hasTriggeredExitRef.current) {
          // Keep user on the page and open the 14,90 offer
          try {
            window.history.pushState({ page: "exit-offer" }, "", window.location.href);
          } catch {
            // ignore
          }
          setIsExitModalOpen(true);
          hasTriggeredExitRef.current = true;
        }
      };

      window.addEventListener("popstate", handlePopState);

      // 2. Desktop Mouse Leave (Cursor moving to close tab/window)
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 8 && !hasTriggeredExitRef.current) {
          setIsExitModalOpen(true);
          hasTriggeredExitRef.current = true;
        }
      };

      document.addEventListener("mouseleave", handleMouseLeave);

      // 3. Mobile tab switch
      const handleVisibilityChange = () => {
        if (document.visibilityState === "hidden" && !hasTriggeredExitRef.current) {
          setIsExitModalOpen(true);
          hasTriggeredExitRef.current = true;
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);

      return () => {
        window.removeEventListener("popstate", handlePopState);
        document.removeEventListener("mouseleave", handleMouseLeave);
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      };
    }
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenCheckout = () => {
    redirectToCheckout(CHECKOUT_URL_1990);
  };

  const handleClaimExitDiscount = () => {
    setIsExitModalOpen(false);
    redirectToCheckout(CHECKOUT_URL_1490);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#242A27] flex flex-col font-sans">
      {/* 1. Urgency Countdown Top Bar */}
      <TopAnnouncementBar onCtaClick={handleOpenCheckout} />

      {/* 2. Main Navigation */}
      <Navbar 
        onScrollTo={scrollToSection} 
        onOpenCheckout={handleOpenCheckout} 
      />

      {/* 3. Hero Section with Mockup & 4 Phases Tags */}
      <HeroSection 
        onCtaClick={handleOpenCheckout}
        onExploreClick={() => scrollToSection("pricing-section")}
      />

      {/* 4. Top Offer & Transformation Proof (Positioned right below Hero so visitors see it immediately when scrolling down) */}
      <PricingSection onOpenCheckout={handleOpenCheckout} />

      {/* 5. Interactive Water & Target Calculator (Rule 1) */}
      <WaterCalculator onCtaClick={handleOpenCheckout} />

      {/* 6. The 4 Golden Rules */}
      <TheFourRules onCtaClick={handleOpenCheckout} />

      {/* 7. The 4 Progressive Metabolic Phases */}
      <FourPhasesTimeline onCtaClick={handleOpenCheckout} />

      {/* 8. Meal Plan & 15-Min Workout Preview */}
      <MealAndWorkoutPreview onCtaClick={handleOpenCheckout} />

      {/* 9. 4 Exclusive Free Bonuses */}
      <BonusesSection onCtaClick={handleOpenCheckout} />

      {/* 10. Testimonials & Progress Tracking Table */}
      <TestimonialsSection />

      {/* 11. Bottom Direct Offer Call to Action */}
      <BottomOfferCta onOpenCheckout={handleOpenCheckout} />

      {/* 12. 7-Day Unconditional Guarantee */}
      <GuaranteeSection onCtaClick={handleOpenCheckout} />

      {/* 13. Frequently Asked Questions */}
      <FaqSection onCtaClick={handleOpenCheckout} />

      {/* 14. Footer with Disclaimer */}
      <Footer />

      {/* 15. Exit Intent Downsell Modal (R$ 14,90 Offer on Leave / Back / Abandon) */}
      <ExitIntentModal
        isOpen={isExitModalOpen}
        onClose={() => setIsExitModalOpen(false)}
        onClaimDiscount={handleClaimExitDiscount}
      />

      {/* Floating Bottom Sticky Bar for High Conversion (Mobile & Desktop) */}
      {showStickyBar && (
        <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-[#DFD6C7] p-3 sm:py-3.5 z-40 shadow-2xl transition-all animate-fade-in">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 px-2 sm:px-4">
            <div className="hidden sm:block">
              <div className="font-serif font-bold text-sm text-[#1B2822] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>Desafio Seca em 30 Dias + 4 Bônus Gratuitos</span>
              </div>
              <div className="text-xs text-[#5D6C65]">
                De <span className="line-through">R$ 197</span> por apenas{" "}
                <strong className="text-[#244B41]">
                  R$ 19,90 no PIX
                </strong>
              </div>
            </div>

            <div className="sm:hidden text-left">
              <div className="text-xs font-serif font-bold text-[#1B2822] flex items-center gap-1">
                <span>Desafio Seca 30 Dias</span>
              </div>
              <div className="text-xs font-extrabold text-[#244B41]">
                R$ 19,90 no PIX
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleOpenCheckout}
                className="bg-[#244B41] hover:bg-[#1A3830] text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-xl shadow-md transition-transform active:scale-95 cursor-pointer flex items-center gap-2 whitespace-nowrap"
              >
                <ShoppingBag className="w-4 h-4 text-[#F4D06F]" />
                <span>Garantir Vaga</span>
              </button>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                title="Voltar ao topo"
                className="w-9 h-9 rounded-xl bg-[#EFE9DE] hover:bg-[#E3DCCE] text-[#4F5E57] flex items-center justify-center cursor-pointer transition-colors shrink-0"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
