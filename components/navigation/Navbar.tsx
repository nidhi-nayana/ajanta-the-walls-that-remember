"use client";

import React, { useState, useEffect } from "react";
import {
  Volume2,
  VolumeX,
  BookOpen,
  Eye,
  Sliders,
  Sparkles,
  Layers,
  Image as ImageIcon,
  Clock,
  Heart,
  Users,
  Play,
  Square,
  Compass,
} from "lucide-react";
import { audioManager, narrationEngine, SoundscapeType } from "@/lib/audio";
import { CHAPTERS_DATA } from "@/lib/story-data";

interface NavbarProps {
  activeChapter: number;
  readingMode: boolean;
  onToggleReadingMode: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export function Navbar({
  activeChapter,
  readingMode,
  onToggleReadingMode,
  onNavigateToSection,
}: NavbarProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.65);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentSoundscape, setCurrentSoundscape] = useState<SoundscapeType>("cave-drone");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);

    // Register narration state listener
    narrationEngine.registerListener((state) => {
      setIsSpeaking(state.isSpeaking && !state.isPaused);
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleMute = () => {
    const muted = audioManager.toggleMute();
    setIsMuted(muted);
    audioManager.playSfx("click");
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    audioManager.setMasterVolume(newVol);
  };

  // Toggle narration for currently active chapter
  const handleToggleNarration = () => {
    if (isSpeaking) {
      narrationEngine.stop();
      setIsSpeaking(false);
    } else {
      const chapter = CHAPTERS_DATA.find((c) => c.id === activeChapter) || CHAPTERS_DATA[0];
      const speechText = `${chapter.number}. ${chapter.title}. ${chapter.subtitle}. ${chapter.narrative.lead} ${chapter.narrative.paragraphs.join(" ")}`;
      narrationEngine.speak(speechText, 0.92, 0.98);
      setIsSpeaking(true);
    }
    audioManager.playSfx("click");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-obsidian/90 backdrop-blur-md border-b border-antiqueGold/20 py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => onNavigateToSection("chapter-1")}
          className="flex items-center gap-3 text-left group"
        >
          <div className="w-8 h-8 rounded border border-antiqueGold/50 flex items-center justify-center bg-caveCharcoal/60 group-hover:border-antiqueGold transition-colors">
            <span className="font-cinzel text-xs font-bold text-antiqueGold">अ</span>
          </div>
          <div>
            <div className="font-cinzel text-sm sm:text-base font-bold tracking-[0.2em] text-parchment group-hover:text-antiqueGold transition-colors">
              AJANTA
            </div>
            <div className="font-cormorant text-xs italic text-sandstone tracking-wider hidden sm:block">
              The Walls That Remember
            </div>
          </div>
        </button>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <button
            onClick={() => onNavigateToSection("story-experience")}
            className="px-3 py-1.5 rounded text-xs font-cinzel tracking-wider text-parchment/80 hover:text-antiqueGold hover:bg-caveCharcoal/40 transition-colors flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5 text-sandstone" />
            Chapters
          </button>

          <button
            onClick={() => onNavigateToSection("storyboard-section")}
            className="px-3 py-1.5 rounded text-xs font-cinzel tracking-wider text-antiqueGold bg-antiqueGold/10 border border-antiqueGold/30 hover:bg-antiqueGold/20 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Storyboard (12 Panels)
          </button>

          <button
            onClick={() => onNavigateToSection("mural-gallery-section")}
            className="px-3 py-1.5 rounded text-xs font-cinzel tracking-wider text-parchment/80 hover:text-antiqueGold hover:bg-caveCharcoal/40 transition-colors flex items-center gap-1.5"
          >
            <ImageIcon className="w-3.5 h-3.5 text-sandstone" />
            Mural Explorer
          </button>

          <button
            onClick={() => onNavigateToSection("timeline-section")}
            className="px-3 py-1.5 rounded text-xs font-cinzel tracking-wider text-parchment/80 hover:text-antiqueGold hover:bg-caveCharcoal/40 transition-colors flex items-center gap-1.5"
          >
            <Clock className="w-3.5 h-3.5 text-sandstone" />
            Timeline
          </button>

          <button
            onClick={() => onNavigateToSection("reflection-section")}
            className="px-3 py-1.5 rounded text-xs font-cinzel tracking-wider text-parchment/80 hover:text-antiqueGold hover:bg-caveCharcoal/40 transition-colors flex items-center gap-1.5"
          >
            <Heart className="w-3.5 h-3.5 text-sandstone" />
            Reflection
          </button>

          <button
            onClick={() => onNavigateToSection("team-credits-section")}
            className="px-3 py-1.5 rounded text-xs font-cinzel tracking-wider text-parchment/80 hover:text-antiqueGold hover:bg-caveCharcoal/40 transition-colors flex items-center gap-1.5"
          >
            <Users className="w-3.5 h-3.5 text-sandstone" />
            Team & Sources
          </button>
        </nav>

        {/* Right Action Controls: Audio, Narration & Reading Mode */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* TTS Narration Button */}
          <button
            onClick={handleToggleNarration}
            title={isSpeaking ? "Stop Spoken Narration" : "Listen to Chapter Narration (TTS)"}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-cinzel tracking-wider border transition-all ${
              isSpeaking
                ? "bg-sienna/30 text-sandstone border-sienna animate-pulse"
                : "bg-caveCharcoal/70 text-parchment/80 border-antiqueGold/20 hover:border-antiqueGold/60"
            }`}
          >
            {isSpeaking ? (
              <>
                <Square className="w-3 h-3 text-sienna fill-sienna" />
                <span className="hidden sm:inline">Pause Voice</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-antiqueGold fill-antiqueGold" />
                <span className="hidden sm:inline">Narrate</span>
              </>
            )}
          </button>

          {/* Persistent Web Audio Soundscape Control */}
          <div className="relative flex items-center">
            <button
              onClick={handleToggleMute}
              onMouseEnter={() => setShowVolumeSlider(true)}
              title={isMuted ? "Unmute Ambient Soundscape" : "Mute Soundscape"}
              className={`p-2 rounded border transition-colors ${
                isMuted
                  ? "bg-caveCharcoal/50 text-parchment/40 border-stone-800"
                  : "bg-caveCharcoal/80 text-antiqueGold border-antiqueGold/40 hover:border-antiqueGold"
              }`}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>

            {/* Quick Hover Volume Slider */}
            {showVolumeSlider && (
              <div
                onMouseLeave={() => setShowVolumeSlider(false)}
                className="absolute right-0 top-full mt-2 p-2.5 rounded bg-caveCharcoal border border-antiqueGold/30 shadow-xl flex items-center gap-2 w-36 z-50"
              >
                <Sliders className="w-3 h-3 text-antiqueGold" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full accent-antiqueGold h-1 bg-stone-700 rounded cursor-pointer"
                />
              </div>
            )}
          </div>

          {/* Reading Mode Switcher (Full 3D Graphic Novel vs Minimal Museum Monograph) */}
          <button
            onClick={onToggleReadingMode}
            title={readingMode ? "Switch to 3D Graphic Novel Mode" : "Switch to Clean Reading Mode"}
            className={`p-2 rounded border transition-colors flex items-center gap-1.5 ${
              readingMode
                ? "bg-antiqueGold text-obsidian border-antiqueGold font-semibold"
                : "bg-caveCharcoal/70 text-parchment/80 border-antiqueGold/20 hover:border-antiqueGold/50"
            }`}
          >
            {readingMode ? (
              <>
                <Eye className="w-4 h-4" />
                <span className="text-[10px] font-cinzel font-bold tracking-wider hidden md:inline">
                  3D NOVEL
                </span>
              </>
            ) : (
              <>
                <BookOpen className="w-4 h-4 text-sandstone" />
                <span className="text-[10px] font-cinzel tracking-wider hidden md:inline">
                  READING MODE
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

