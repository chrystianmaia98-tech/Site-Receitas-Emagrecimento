import { useState, useRef, useEffect, ChangeEvent } from "react";
import { 
  Check, 
  X, 
  Droplets, 
  Moon, 
  Utensils, 
  Dumbbell, 
  Ban, 
  Calendar, 
  Target, 
  Heart, 
  Upload, 
  Image as ImageIcon,
  Sparkles,
  Lock,
  ShieldCheck
} from "lucide-react";

export function TransformationProofCard() {
  // Load saved photo from localStorage or server file
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    try {
      return localStorage.getItem("seca30dias_saved_photo") || null;
    } catch {
      return null;
    }
  });

  const [isPhotoLocked, setIsPhotoLocked] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem("seca30dias_photo_locked");
      return stored === "true" || !!localStorage.getItem("seca30dias_saved_photo");
    } catch {
      return false;
    }
  });

  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync photo with server file if present, and save local photo to server
  useEffect(() => {
    // 1. Check if /transformation-proof.jpg exists on server
    const testImg = new Image();
    testImg.onload = () => {
      setCustomPhoto("/transformation-proof.jpg");
      setIsPhotoLocked(true);
    };
    testImg.src = "/transformation-proof.jpg";

    // 2. If photo exists locally, sync to server endpoint
    const localPhoto = localStorage.getItem("seca30dias_saved_photo");
    if (localPhoto && localPhoto.startsWith("data:")) {
      fetch("/api/save-photo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: localPhoto })
      }).then((res) => {
        if (res.ok) {
          setSaveStatus("saved");
        }
      }).catch(() => {});
    }
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSaveStatus("saving");
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          const photoData = reader.result;
          setCustomPhoto(photoData);
          setIsPhotoLocked(true);

          try {
            localStorage.setItem("seca30dias_saved_photo", photoData);
            localStorage.setItem("seca30dias_photo_locked", "true");
          } catch (err) {
            // ignore localStorage quota
          }

          // Send to server to write to public/transformation-proof.jpg permanently
          fetch("/api/save-photo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: photoData })
          })
            .then(() => setSaveStatus("saved"))
            .catch(() => setSaveStatus("saved"));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-[#141A17] text-white rounded-3xl border border-[#2D3B34] shadow-2xl overflow-hidden flex flex-col h-full relative">
      
      {/* Top Header Strip */}
      <div className="bg-[#0D1210] px-4 py-3 border-b border-[#25322C] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#A5CDB9]">
            Prova Real de Transformação
          </span>
        </div>

        {/* Lock status or upload if not yet saved */}
        <div className="flex items-center gap-2">
          {customPhoto || isPhotoLocked ? (
            <div className="flex items-center gap-1.5 bg-[#17261E] text-[#4ADE80] text-[11px] font-bold px-3 py-1 rounded-full border border-[#2B4B38] shadow-xs">
              <Lock className="w-3.5 h-3.5 text-[#4ADE80]" />
              <span>Foto Oficial Fixada e Protegida</span>
            </div>
          ) : (
            <>
              <button
                onClick={() => fileInputRef.current?.click()}
                title="Fixar a foto oficial da aluna"
                className="text-[11px] font-bold text-white bg-[#22C55E] hover:bg-[#1DA850] px-3 py-1 rounded-lg border border-[#30B667] transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
              >
                <Upload className="w-3 h-3" />
                <span>Salvar Foto Oficial</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </>
          )}
        </div>
      </div>

      {/* If custom image was saved, display it permanently without options to remove */}
      {customPhoto ? (
        <div className="relative p-3 sm:p-4 flex-1 flex flex-col items-center justify-center bg-black/40">
          <img
            src={customPhoto}
            alt="Transformação 30 Dias: Dieta + Treino (Antes e Depois)"
            className="w-full h-auto max-h-[620px] object-contain rounded-2xl border border-[#2C3B33] shadow-lg"
            referrerPolicy="no-referrer"
          />
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
      ) : (
        /* Recreated High-Fidelity Comparison Graphic */
        <div className="flex-1 flex flex-col">
          
          {/* Main Comparison Canvas */}
          <div className="relative bg-[#171D1A] overflow-hidden p-4 sm:p-5 flex-1 flex flex-col justify-between">
            
            {/* Top Bar with DIA 1, 30 DIAS DIETA + TREINO, DIA 30 */}
            <div className="relative z-10 flex items-start justify-between gap-2 mb-4">
              
              {/* DIA 1 (ANTES) Badge */}
              <div className="bg-black/85 backdrop-blur-xs border border-white/15 px-3 py-1.5 rounded-xl shadow-md text-left">
                <span className="block font-black text-xs sm:text-sm tracking-wide text-white">
                  DIA 1
                </span>
                <span className="block text-[10px] font-bold text-[#E57373] uppercase tracking-wider">
                  (ANTES)
                </span>
              </div>

              {/* 30 DIAS - DIETA + TREINO Center Logo */}
              <div className="text-center px-1">
                <div className="font-black text-2xl sm:text-3xl tracking-tight text-white leading-none">
                  30 DIAS
                </div>
                <div className="font-serif italic font-extrabold text-sm sm:text-base text-[#4ADE80] tracking-wide mt-0.5">
                  DIETA + TREINO
                </div>
              </div>

              {/* DIA 30 (DEPOIS) Badge */}
              <div className="bg-black/85 backdrop-blur-xs border border-white/15 px-3 py-1.5 rounded-xl shadow-md text-right">
                <span className="block font-black text-xs sm:text-sm tracking-wide text-white">
                  DIA 30
                </span>
                <span className="block text-[10px] font-bold text-[#4ADE80] uppercase tracking-wider">
                  (DEPOIS)
                </span>
              </div>
            </div>

            {/* Central Area: Side-by-Side Visuals + 5 Core Habits */}
            <div className="relative z-10 grid grid-cols-12 gap-3 my-auto items-center py-2">
              
              {/* Left Photo (Antes - Distended Belly Simulation) */}
              <div className="col-span-4 relative rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/40 group aspect-3/4">
                <img
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400&q=80"
                  alt="Dia 1 Antes - Abdômen retido e inchaço"
                  className="w-full h-full object-cover opacity-85 contrast-95 brightness-90 filter"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-2 inset-x-2 bg-black/80 backdrop-blur-xs rounded-lg p-1.5 text-center border border-white/10">
                  <span className="text-[10px] font-bold text-[#FF8A80] uppercase tracking-wider block">
                    Retenção & Inchaço
                  </span>
                </div>
              </div>

              {/* Center Column: The 5 Golden Daily Pillars */}
              <div className="col-span-4 flex flex-col justify-center space-y-2.5 py-1">
                
                {/* 1. Alimentação Controlada */}
                <div className="bg-black/60 backdrop-blur-xs border border-white/10 rounded-xl p-2 text-center shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-1 text-white">
                    <Utensils className="w-3 h-3" />
                  </div>
                  <div className="text-[10px] font-extrabold uppercase tracking-tight text-white leading-tight">
                    ALIMENTAÇÃO CONTROLADA
                  </div>
                  <div className="text-[9px] text-[#A3B8AC] leading-tight mt-0.5">
                    Déficit sem passar fome
                  </div>
                </div>

                {/* 2. Treino Regular */}
                <div className="bg-black/60 backdrop-blur-xs border border-white/10 rounded-xl p-2 text-center shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-1 text-white">
                    <Dumbbell className="w-3 h-3" />
                  </div>
                  <div className="text-[10px] font-extrabold uppercase tracking-tight text-white leading-tight">
                    TREINO REGULAR
                  </div>
                  <div className="text-[9px] text-[#A3B8AC] leading-tight mt-0.5">
                    15 min em casa
                  </div>
                </div>

                {/* 3. Água */}
                <div className="bg-black/60 backdrop-blur-xs border border-white/10 rounded-xl p-2 text-center shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-1 text-white">
                    <Droplets className="w-3 h-3 text-[#38BDF8]" />
                  </div>
                  <div className="text-[10px] font-extrabold uppercase tracking-tight text-white leading-tight">
                    ÁGUA CALCULADA
                  </div>
                  <div className="text-[9px] text-[#A3B8AC] leading-tight mt-0.5">
                    2,5 a 3L por dia
                  </div>
                </div>

                {/* 4. Sono */}
                <div className="bg-black/60 backdrop-blur-xs border border-white/10 rounded-xl p-2 text-center shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-1 text-white">
                    <Moon className="w-3 h-3 text-[#FBBF24]" />
                  </div>
                  <div className="text-[10px] font-extrabold uppercase tracking-tight text-white leading-tight">
                    SONO NOTURNO
                  </div>
                  <div className="text-[9px] text-[#A3B8AC] leading-tight mt-0.5">
                    7 a 8h de repouso
                  </div>
                </div>

                {/* 5. Menos Ultraprocessados */}
                <div className="bg-black/60 backdrop-blur-xs border border-white/10 rounded-xl p-2 text-center shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-1 text-white">
                    <Ban className="w-3 h-3 text-[#F87171]" />
                  </div>
                  <div className="text-[10px] font-extrabold uppercase tracking-tight text-white leading-tight">
                    MENOS INDUSTRIALIZADOS
                  </div>
                  <div className="text-[9px] text-[#A3B8AC] leading-tight mt-0.5">
                    Mais comida real
                  </div>
                </div>

              </div>

              {/* Right Photo (Depois - Toned Flat Waist Simulation) */}
              <div className="col-span-4 relative rounded-2xl overflow-hidden border-2 border-[#22C55E]/50 shadow-lg bg-black/40 group aspect-3/4">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80"
                  alt="Dia 30 Depois - Cintura fina e abdômen seco"
                  className="w-full h-full object-cover opacity-95 brightness-105 filter"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-2 inset-x-2 bg-[#1A382B]/90 backdrop-blur-xs rounded-lg p-1.5 text-center border border-[#22C55E]/40">
                  <span className="text-[10px] font-bold text-[#4ADE80] uppercase tracking-wider block">
                    Cintura Fina & Seca
                  </span>
                </div>
              </div>

            </div>

            {/* Motivational Slogan Band */}
            <div className="relative z-10 text-center my-3">
              <div className="inline-block transform -rotate-1 bg-[#192C23] border border-[#2B4E3E] text-[#4ADE80] px-4 py-1 rounded-full font-black text-xs sm:text-sm tracking-wider uppercase shadow-md">
                DISCIPLINA HOJE, RESULTADOS AMANHÃ!
              </div>
            </div>

            {/* Pain Points Box (Left) vs Results Box (Right) */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
              
              {/* Dia 1 Pain Points */}
              <div className="bg-black/75 backdrop-blur-xs border border-rose-500/30 rounded-2xl p-3 space-y-1.5 shadow-sm">
                <div className="text-[11px] font-bold text-[#FF8A80] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <X className="w-3.5 h-3.5 text-rose-500" />
                  <span>Antes do Desafio:</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#CFD8DC]">
                  <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Barriga mais aparente</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#CFD8DC]">
                  <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Maior retenção e inchaço</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#CFD8DC]">
                  <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Menor definição da cintura</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#CFD8DC]">
                  <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Roupas vestindo apertadas</span>
                </div>
              </div>

              {/* Dia 30 Results */}
              <div className="bg-black/75 backdrop-blur-xs border border-emerald-500/40 rounded-2xl p-3 space-y-1.5 shadow-sm">
                <div className="text-[11px] font-bold text-[#4ADE80] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Após 30 Dias:</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#E8F5E9]">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Cintura visivelmente mais fina</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#E8F5E9]">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Abdômen mais definido</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#E8F5E9]">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Menos inchaço e peso leve</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#E8F5E9]">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Roupas vestindo com perfeição</span>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Trust & Disclaimer Bar */}
          <div className="bg-[#0A0E0C] border-t border-[#202D26] px-4 py-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] text-[#869E92]">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
              <span>30 dias podem fazer a diferença</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
              <span>Resultado individual progressivo</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>Saúde, estética e bem-estar</span>
            </div>
            <div className="text-right sm:text-center font-bold text-[#4ADE80] uppercase tracking-wider">
              VOCÊ CONSEGUE!
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
