"use client";

import React, { useState, useEffect, useRef } from "react";
import { CHAPTERS_DATA } from "@/lib/story-data";
import { Cave3DCanvas } from "@/components/environment/Cave3DCanvas";
import { OpeningExperience } from "@/components/intro/OpeningExperience";
import { Navbar } from "@/components/navigation/Navbar";
import { ChapterNav } from "@/components/navigation/ChapterNav";
import { ChapterSection } from "@/components/chapters/ChapterSection";
import { StoryboardView } from "@/components/storyboard/StoryboardView";
import { MuralExplorer } from "@/components/mural-gallery/MuralExplorer";
import { InteractiveTimeline } from "@/components/timeline/InteractiveTimeline";
import { FinalReflection } from "@/components/reflection/FinalReflection";
import { TeamAndSources } from "@/components/footer/TeamAndSources";
import { CustomCursor } from "@/components/navigation/CustomCursor";
import { audioManager, narrationEngine, NarrationState } from "@/lib/audio";
import { Volume2, Sparkles, Square, ArrowDown } from "lucide-react";

export default function Home() {
  const [introActive, setIntroActive] = useState(true);
  const [isIntroDolly, setIsIntroDolly] = useState(false);
  const [activeChapter, setActiveChapter] = useState(1);
  const [readingMode, setReadingMode] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [narrationState, setNarrationState] = useState<NarrationState>({
    isSpeaking: false,
    isPaused: false,
    currentText: "",
    charIndex: 0,
  });

  // Track mouse coordinates for 3D parallax & light tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Track Scroll Progress & Active Chapter
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (currentScroll / totalScroll) * 100)));
      }

      // Check which chapter section is closest to viewport center
      for (const chapter of CHAPTERS_DATA) {
        const el = document.getElementById(`chapter-${chapter.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveChapter(chapter.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen to narration updates
  useEffect(() => {
    narrationEngine.registerListener((state) => {
      setNarrationState(state);
    });
  }, []);

  const handleEnterIntro = () => {
    setIsIntroDolly(true);
    setTimeout(() => {
      setIntroActive(false);
      setIsIntroDolly(false);
      // Smooth scroll to Chapter 1
      const ch1 = document.getElementById("chapter-1");
      if (ch1) ch1.scrollIntoView({ behavior: "smooth" });
    }, 1800);
  };

  const handleSkipIntro = () => {
    setIntroActive(false);
    setIsIntroDolly(false);
    const ch1 = document.getElementById("chapter-1");
    if (ch1) ch1.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectChapter = (chapterId: number) => {
    setActiveChapter(chapterId);
    const el = document.getElementById(`chapter-${chapterId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigateToSection = (sectionId: string) => {
    audioManager.playSfx("click");
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNarrationTrigger = (text: string) => {
    if (narrationState.isSpeaking) {
      narrationEngine.stop();
    } else {
      narrationEngine.speak(text, 0.92, 0.98);
    }
  };

  return (
    <main className="relative min-h-screen bg-obsidian text-parchment overflow-x-hidden">
      {/* Custom Desktop Interactive Cursor */}
      <CustomCursor />

      {/* Top Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-antiqueGold via-parchment to-sienna z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* 3D WebGL Canvas Viewport */}
      <Cave3DCanvas
        activeChapter={activeChapter}
        isIntroDolly={isIntroDolly}
        mousePos={mousePos}
        readingMode={readingMode}
      />

      {/* Opening Cave Entrance Cinematic Overlay */}
      {introActive && (
        <OpeningExperience
          onEnter={handleEnterIntro}
          onSkip={handleSkipIntro}
          mousePos={mousePos}
        />
      )}

      {/* Global Navigation Header */}
      <Navbar
        activeChapter={activeChapter}
        readingMode={readingMode}
        onToggleReadingMode={() => {
          audioManager.playSfx("click");
          setReadingMode((prev) => !prev);
        }}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Vertical Fixed Chapter Navigator */}
      <ChapterNav
        activeChapter={activeChapter}
        onSelectChapter={handleSelectChapter}
      />

      {/* Main Experience Body */}
      <div id="story-experience" className="relative z-10">
        {/* CHAPTERS 01 TO 07 */}
        {CHAPTERS_DATA.map((chapter) => (
          <ChapterSection
            key={chapter.id}
            chapter={chapter}
            isActive={activeChapter === chapter.id}
            readingMode={readingMode}
            onNarrationTrigger={handleNarrationTrigger}
          />
        ))}

        {/* SIGNATURE 12-PANEL GRAPHIC NOVEL STORYBOARD */}
        <div className="border-t border-antiqueGold/20 bg-gradient-to-b from-transparent via-obsidian/70 to-obsidian">
          <StoryboardView />
        </div>

        {/* INTERACTIVE MURAL WALL (CAVE 1 LEFT WALL) */}
        <div className="border-t border-antiqueGold/20 bg-gradient-to-b from-obsidian via-[#140F0C] to-obsidian">
          <MuralExplorer />
        </div>

        {/* DUAL CHRONOLOGICAL TIMELINE */}
        <div className="border-t border-antiqueGold/20 bg-gradient-to-b from-obsidian via-[#15120E] to-obsidian">
          <InteractiveTimeline />
        </div>

        {/* FINAL REFLECTION: THE INNER MIRROR */}
        <div className="border-t border-antiqueGold/20 bg-gradient-to-b from-obsidian via-[#1F1712] to-obsidian">
          <FinalReflection />
        </div>

        {/* TEAM CREDITS (EDITABLE 5 MEMBERS) & SCHOLARLY CITATIONS */}
        <TeamAndSources />
      </div>

      {/* Live Audio Narration Transcript Ticker (when speaking) */}
      {narrationState.isSpeaking && (
        <aside
          aria-label="Audio Narration Captions"
          className="fixed bottom-4 left-4 right-4 sm:left-12 sm:right-12 lg:left-auto lg:right-12 lg:max-w-xl z-50 p-4 rounded-sm bg-obsidian/95 backdrop-blur-md border border-antiqueGold/60 shadow-[0_8px_32px_rgba(0,0,0,0.9)] flex items-center justify-between gap-4 animate-fadeIn"
        >
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-antiqueGold animate-ping shrink-0" />
            <div>
              <span className="font-cinzel text-[10px] tracking-widest text-antiqueGold uppercase block">
                Live Spoken Narration
              </span>
              <p className="font-cormorant text-sm italic text-sandstone line-clamp-2">
                {narrationState.currentText}
              </p>
            </div>
          </div>
          <button
            onClick={() => narrationEngine.stop()}
            title="Stop Spoken Narration"
            className="p-1.5 rounded hover:bg-caveCharcoal text-parchment/70 hover:text-antiqueGold transition-colors shrink-0"
          >
            <Square className="w-4 h-4 fill-sienna text-sienna" />
          </button>
        </aside>
      )}
    </main>
  );
}

