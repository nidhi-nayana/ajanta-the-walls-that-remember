"use client";

import React, { useState } from "react";
import { REFLECTION_VALUES } from "@/lib/story-data";
import { Heart, Sparkles, Check, Share2, Copy, BookmarkCheck } from "lucide-react";
import { audioManager } from "@/lib/audio";
import confetti from "canvas-confetti";

export function FinalReflection() {
  const [selectedValueId, setSelectedValueId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const selectedValue = REFLECTION_VALUES.find((v) => v.id === selectedValueId);

  const handleSelect = (id: string) => {
    setSelectedValueId(id);
    audioManager.playSfx("bell");

    // Launch delicate golden confetti celebration
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#C5A15A", "#E7D5B5", "#A34D32"],
        disableForReducedMotion: true,
      });
    } catch (e) {}
  };

  const handleCopyBlessing = () => {
    if (selectedValue) {
      const textToCopy = `“${selectedValue.quote}”\n\n— Mahajanaka Jataka (Ajanta Cave 1)\n${selectedValue.blessing}\n\nAJANTA: The Walls That Remember`;
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
      audioManager.playSfx("click");
    }
  };

  return (
    <section
      id="reflection-section"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-20 text-parchment"
    >
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-antiqueGold/30 bg-caveCharcoal/60 mb-4">
          <Heart className="w-3.5 h-3.5 text-antiqueGold" />
          <span className="font-cinzel text-xs tracking-[0.2em] text-sandstone uppercase">
            Personal Contemplation
          </span>
        </div>
        <h2 className="font-cinzel text-4xl sm:text-5xl font-bold tracking-[0.15em] mb-4 text-parchment">
          THE INNER MIRROR
        </h2>
        <p className="font-cormorant text-xl sm:text-2xl text-sandstone italic mb-4">
          Which Virtue of the Mahajanaka Jataka Speaks to Your Journey?
        </p>
        <p className="font-dmsans text-sm sm:text-base text-parchment/70 leading-relaxed max-w-xl mx-auto">
          The wall paintings of Ajanta were not merely decorative; they were painted as mirrors for the
          human soul. Choose the value that resonates most with your present chapter.
        </p>
      </div>

      {/* 5 Virtues Selection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {REFLECTION_VALUES.map((val) => {
          const isSelected = selectedValueId === val.id;
          return (
            <button
              key={val.id}
              onClick={() => handleSelect(val.id)}
              className={`p-5 rounded-sm text-left transition-all duration-300 relative border flex flex-col justify-between ${
                isSelected
                  ? "bg-antiqueGold/20 border-antiqueGold shadow-[0_0_25px_rgba(197,161,90,0.35)] scale-[1.02]"
                  : "bg-caveCharcoal/60 border-antiqueGold/20 hover:border-antiqueGold/50 hover:bg-caveCharcoal/80"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-cormorant text-sm italic text-sandstone">
                    {val.paliName}
                  </span>
                  {isSelected && (
                    <span className="w-5 h-5 rounded-full bg-antiqueGold text-obsidian flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  )}
                </div>
                <h3 className="font-cinzel text-base font-bold text-parchment mb-2">
                  {val.title}
                </h3>
                <p className="font-dmsans text-xs text-parchment/75 leading-relaxed">
                  {val.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-antiqueGold/15 text-[11px] font-cinzel text-antiqueGold uppercase tracking-wider flex items-center gap-1">
                <span>Select Virtue</span>
                <Sparkles className="w-3 h-3" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Virtue Keepsake Display */}
      {selectedValue && (
        <div className="fresco-panel p-8 sm:p-10 rounded-sm border border-antiqueGold/60 shadow-[0_16px_50px_rgba(0,0,0,0.9)] animate-fadeIn text-center">
          <div className="w-12 h-12 rounded-full border border-antiqueGold/50 flex items-center justify-center mx-auto mb-4 bg-obsidian">
            <Sparkles className="w-6 h-6 text-antiqueGold" />
          </div>

          <span className="font-cinzel text-xs text-sandstone uppercase tracking-widest block mb-2">
            Your Chosen Contemplation
          </span>

          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-parchment mb-4">
            {selectedValue.title} ({selectedValue.paliName})
          </h3>

          <blockquote className="max-w-2xl mx-auto mb-6">
            <p className="font-cormorant text-xl sm:text-2xl italic text-antiqueGold mb-2">
              {selectedValue.quote}
            </p>
          </blockquote>

          <div className="max-w-xl mx-auto space-y-4 text-sm font-dmsans text-parchment/80 mb-8 leading-relaxed">
            <p>
              <strong className="text-sandstone">In Today's World:</strong> {selectedValue.modernContext}
            </p>
            <div className="p-4 rounded bg-obsidian/80 border border-sandstone/30">
              <span className="font-cinzel text-xs text-antiqueGold uppercase tracking-wider block mb-1">
                A Keepsake Blessing
              </span>
              <p className="font-cormorant text-lg italic text-parchment">
                {selectedValue.blessing}
              </p>
            </div>
          </div>

          {/* Action to Copy Blessing */}
          <button
            onClick={handleCopyBlessing}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-antiqueGold text-obsidian font-cinzel text-xs font-bold tracking-widest uppercase hover:bg-[#D5B26E] transition-colors shadow-lg"
          >
            {copied ? (
              <>
                <BookmarkCheck className="w-4 h-4" />
                Blessing Copied to Clipboard!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy Contemplation Card
              </>
            )}
          </button>
        </div>
      )}

      {/* Original Interpretive Closing Banner */}
      <div className="mt-16 text-center max-w-3xl mx-auto border-t border-antiqueGold/20 pt-12">
        <p className="font-cormorant text-2xl sm:text-3xl lg:text-4xl italic text-sandstone gold-emboss leading-relaxed mb-4">
          “Greatness is not merely found in the kingdom one conquers, but in the wisdom with which one
          learns to let go.”
        </p>
        <span className="text-[11px] font-cinzel text-parchment/50 uppercase tracking-[0.25em]">
          Original Interpretive Synthesis • The Mahajanaka Jataka
        </span>
      </div>
    </section>
  );
}

