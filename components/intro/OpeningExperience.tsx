"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Volume2, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { audioManager } from "@/lib/audio";

interface OpeningExperienceProps {
  onEnter: () => void;
  onSkip: () => void;
  mousePos: { x: number; y: number };
}

export function OpeningExperience({
  onEnter,
  onSkip,
  mousePos,
}: OpeningExperienceProps) {
  const [isDollyIn, setIsDollyIn] = useState(false);
  const [lampIgnited, setLampIgnited] = useState(false);

  useEffect(() => {
    // Subtle ignition of distance lamp after 800ms
    const timer = setTimeout(() => {
      setLampIgnited(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    setIsDollyIn(true);
    // Start cave drone audio
    audioManager.playSoundscape("cave-drone", 1.8);
    audioManager.playSfx("bell");

    // After camera dolly finishes, trigger parent onEnter
    setTimeout(() => {
      onEnter();
    }, 1800);
  };

  const handleSkip = () => {
    audioManager.playSoundscape("cave-drone", 1.0);
    onSkip();
  };

  // Lamp position moves gently with mouse
  const lampOffsetX = (mousePos.x - 0.5) * 40;
  const lampOffsetY = (mousePos.y - 0.5) * 25;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-obsidian text-parchment select-none overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        {/* Background Cave Silhouette & Deep Rock Glow */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Distant Oil Lamp Warm Hearth */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full blur-[110px]"
            animate={{
              opacity: lampIgnited ? (isDollyIn ? 0.9 : 0.45) : 0,
              scale: isDollyIn ? 2.8 : 1,
              x: lampOffsetX,
              y: lampOffsetY,
            }}
            transition={{ duration: isDollyIn ? 1.8 : 0.6, ease: "easeOut" }}
            style={{
              background:
                "radial-gradient(circle, rgba(240, 168, 82, 0.45) 0%, rgba(163, 77, 50, 0.25) 45%, transparent 70%)",
            }}
          />

          {/* Ancient Rock-Cut Chaitya Cave Entrance Arch Silhouette */}
          <div className="absolute inset-0 flex items-center justify-center opacity-40">
            <svg
              viewBox="0 0 1000 700"
              className="w-full h-full max-w-5xl object-contain drop-shadow-[0_0_35px_rgba(0,0,0,0.9)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Cliff Rock Horizon */}
              <path
                d="M 50 650 L 50 150 Q 250 80 500 75 Q 750 80 950 150 L 950 650"
                stroke="#C6A77A"
                strokeWidth="1.5"
                strokeOpacity="0.3"
                fill="#16120F"
              />
              {/* Chaitya Horseshoe Arch Portal (Famous Ajanta Cave 9/19 Motif) */}
              <path
                d="M 280 650 L 280 420 C 280 260 720 260 720 420 L 720 650 Z"
                fill="#100D0B"
                stroke="#C5A15A"
                strokeWidth="2"
                strokeOpacity="0.45"
              />
              {/* Inner Portal Window Ribs */}
              <path
                d="M 330 650 L 330 430 C 330 310 670 310 670 430 L 670 650"
                stroke="#A34D32"
                strokeWidth="1.5"
                strokeOpacity="0.3"
                fill="none"
              />
              {/* Sacred Sun Disc & Lotus Inscription */}
              <circle
                cx="500"
                cy="370"
                r="42"
                stroke="#C5A15A"
                strokeWidth="1"
                strokeDasharray="4 4"
                strokeOpacity="0.4"
              />
              <circle
                cx="500"
                cy="370"
                r="18"
                fill="#C5A15A"
                fillOpacity="0.25"
              />
            </svg>
          </div>

          {/* Floating Stardust / Dust Motes */}
          <div className="absolute inset-0 bg-[radial-gradient(#C5A15A_1px,transparent_1px)] [background-size:40px_40px] opacity-15" />
        </div>

        {/* Content Container */}
        <motion.div
          className="relative z-10 max-w-3xl px-6 text-center flex flex-col items-center"
          animate={{
            scale: isDollyIn ? 1.15 : 1,
            opacity: isDollyIn ? 0 : 1,
            y: isDollyIn ? -30 : 0,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Assignment & Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-antiqueGold/30 bg-caveCharcoal/80 backdrop-blur-md mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-antiqueGold" />
            <span className="font-cinzel text-xs tracking-[0.2em] text-sandstone uppercase">
              Cave Paintings Storyboard • CO2
            </span>
          </motion.div>

          {/* Master Project Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.0 }}
            className="font-cinzel text-6xl md:text-8xl tracking-[0.25em] font-bold text-parchment drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)] mb-3"
          >
            AJANTA
          </motion.h1>

          {/* Subtitle with Gold Emboss */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="font-cormorant text-2xl md:text-3xl italic tracking-wider text-sandstone mb-4 gold-emboss"
          >
            THE WALLS THAT REMEMBER
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="font-dmsans text-sm md:text-base text-parchment/75 max-w-lg mb-10 tracking-wide font-light leading-relaxed"
          >
            A Story Etched in Stone. A Legacy Beyond Time.
            <br />
            <span className="text-antiqueGold/90 font-medium">
              An Immersive Journey Through the Mahajanaka Jataka
            </span>
          </motion.p>

          {/* CTA Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
          >
            {/* Primary Enter Button */}
            <button
              onClick={handleStart}
              disabled={isDollyIn}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-cinzel text-sm font-semibold tracking-[0.2em] uppercase text-obsidian bg-antiqueGold hover:bg-[#D5B26E] transition-all duration-300 rounded-sm shadow-[0_0_30px_rgba(197,161,90,0.35)] hover:shadow-[0_0_45px_rgba(197,161,90,0.6)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-2">
                [ ENTER THE EXPERIENCE ]
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 border border-white/30 pointer-events-none" />
            </button>

            {/* Skip Intro Button */}
            <button
              onClick={handleSkip}
              className="px-6 py-4 font-cinzel text-xs tracking-[0.15em] uppercase text-sandstone/70 hover:text-sandstone transition-colors border border-transparent hover:border-sandstone/30 rounded-sm"
            >
              Skip Intro
            </button>
          </motion.div>

          {/* Audio & Experience Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="flex items-center gap-2 mt-12 text-xs text-parchment/50 font-dmsans tracking-wider"
          >
            <Volume2 className="w-3.5 h-3.5 text-antiqueGold" />
            <span>Interactive soundscapes and voice narration activate upon entry</span>
          </motion.div>
        </motion.div>

        {/* Bottom Stone Accent */}
        <div className="absolute bottom-6 left-8 right-8 flex justify-between items-center text-[10px] tracking-[0.2em] font-cinzel text-parchment/30 uppercase">
          <span>UNESCO Site #242 • Cave 1 Murals</span>
          <span>Deccan Traps • Maharashtra</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

