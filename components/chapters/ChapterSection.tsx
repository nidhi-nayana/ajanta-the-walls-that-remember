"use client";

import React from "react";
import { ChapterData } from "@/lib/story-data";
import {
  Volume2,
  Play,
  Square,
  BookOpen,
  Compass,
  MapPin,
  Calendar,
  Layers,
  Sparkles,
  ChevronRight,
  Anchor,
  HelpCircle,
} from "lucide-react";
import { audioManager, narrationEngine } from "@/lib/audio";

interface ChapterSectionProps {
  chapter: ChapterData;
  isActive: boolean;
  readingMode: boolean;
  onNarrationTrigger: (text: string) => void;
}

export function ChapterSection({
  chapter,
  isActive,
  readingMode,
  onNarrationTrigger,
}: ChapterSectionProps) {
  const handlePlayChapterAudio = () => {
    audioManager.playSoundscape(chapter.audioMood as any, 1.2);
    audioManager.playSfx("bell");
  };

  const handleReadAloud = () => {
    const fullText = `${chapter.number}. ${chapter.title}. ${chapter.subtitle}. ${chapter.narrative.lead} ${chapter.narrative.paragraphs.join(" ")}`;
    onNarrationTrigger(fullText);
  };

  return (
    <article
      id={`chapter-${chapter.id}`}
      className={`min-h-screen py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center relative transition-opacity duration-700 ${
        isActive ? "opacity-100" : "opacity-90"
      }`}
    >
      {/* Chapter Marker Header */}
      <div className="flex flex-wrap items-center gap-4 text-xs font-cinzel tracking-[0.2em] text-sandstone uppercase mb-4">
        <span className="px-3 py-1 rounded bg-antiqueGold/15 border border-antiqueGold/40 text-antiqueGold font-bold">
          CHAPTER {chapter.number}
        </span>
        <span className="flex items-center gap-1.5 text-parchment/60">
          <Calendar className="w-3.5 h-3.5 text-antiqueGold" />
          {chapter.timePeriod}
        </span>
        <span className="flex items-center gap-1.5 text-parchment/60">
          <MapPin className="w-3.5 h-3.5 text-antiqueGold" />
          {chapter.location}
        </span>
      </div>

      {/* Main Chapter Titles */}
      <h2 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[0.1em] text-parchment mb-3 gold-emboss">
        {chapter.title}
      </h2>
      <p className="font-cormorant text-2xl sm:text-3xl italic text-sandstone max-w-3xl mb-8">
        {chapter.subtitle}
      </p>

      {/* Content Layout: Main Narrative + Interactive Context Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Rich Literary Narrative */}
        <div className="lg:col-span-7 space-y-6">
          {/* Lead Paragraph */}
          <div className="p-6 rounded-sm bg-caveCharcoal/60 border-l-4 border-antiqueGold backdrop-blur-sm">
            <p className="font-dmsans text-base sm:text-lg text-parchment font-normal leading-relaxed">
              {chapter.narrative.lead}
            </p>
          </div>

          {/* Narrative Body Paragraphs */}
          <div className="space-y-4 font-dmsans text-sm sm:text-base text-parchment/80 leading-relaxed font-light">
            {chapter.narrative.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Historical Dialogue / Verses */}
          {chapter.narrative.dialogue && chapter.narrative.dialogue.length > 0 && (
            <div className="space-y-3 pt-4">
              {chapter.narrative.dialogue.map((d, idx) => (
                <blockquote
                  key={idx}
                  className="p-4 rounded-sm bg-obsidian/75 border border-sandstone/25 shadow-md"
                >
                  <p className="font-cormorant text-lg sm:text-xl italic text-sandstone mb-2">
                    “{d.quote}”
                  </p>
                  <footer className="flex items-center justify-between text-xs font-dmsans text-parchment/50">
                    <span className="font-cinzel text-antiqueGold font-bold">
                      {d.speaker}
                    </span>
                    <span>{d.context}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          )}

          {/* Chapter Audio & Speech Controls */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-antiqueGold/20">
            <button
              onClick={handleReadAloud}
              className="flex items-center gap-2 px-4 py-2 rounded-sm bg-antiqueGold/15 border border-antiqueGold/40 text-antiqueGold hover:bg-antiqueGold/25 transition-colors font-cinzel text-xs tracking-wider"
            >
              <Play className="w-3.5 h-3.5 fill-antiqueGold" />
              Listen to Narration
            </button>

            <button
              onClick={handlePlayChapterAudio}
              className="flex items-center gap-2 px-4 py-2 rounded-sm bg-caveCharcoal/80 border border-sandstone/30 text-parchment/80 hover:text-antiqueGold transition-colors font-cinzel text-xs tracking-wider"
            >
              <Volume2 className="w-3.5 h-3.5 text-sandstone" />
              Trigger Soundscape
            </button>
          </div>
        </div>

        {/* Right Column: Historical Context & Interactive Feature */}
        <div className="lg:col-span-5 space-y-6">
          {/* Historical Context Card */}
          <div className="fresco-panel p-6 rounded-sm">
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-4 h-4 text-antiqueGold" />
              <h3 className="font-cinzel text-xs tracking-[0.2em] text-antiqueGold uppercase font-bold">
                Mural Archeology & Context
              </h3>
            </div>
            <h4 className="font-cinzel text-base font-bold text-parchment mb-2">
              {chapter.historicalContext.title}
            </h4>
            <div className="text-xs font-dmsans text-sandstone mb-3">
              {chapter.historicalContext.caveNumber}
            </div>
            <p className="font-dmsans text-xs sm:text-sm text-parchment/75 leading-relaxed mb-4">
              {chapter.historicalContext.details}
            </p>

            <div className="pt-3 border-t border-antiqueGold/15">
              <span className="text-[11px] font-cinzel text-antiqueGold uppercase tracking-wider block mb-1">
                Artistic Technique:
              </span>
              <p className="font-dmsans text-xs text-parchment/65 leading-relaxed">
                {chapter.historicalContext.artisticTechnique}
              </p>
            </div>
          </div>

          {/* Philosophical Concept Box */}
          <div className="p-5 rounded-sm bg-gradient-to-br from-caveCharcoal to-obsidian border border-sandstone/25">
            <div className="flex items-center justify-between mb-2">
              <span className="font-cinzel text-xs text-antiqueGold tracking-widest uppercase">
                Buddhist Virtue
              </span>
              <span className="font-cormorant text-sm italic text-sandstone">
                {chapter.philosophicalTheme.paliTerm}
              </span>
            </div>
            <h4 className="font-cinzel text-sm font-bold text-parchment mb-1">
              {chapter.philosophicalTheme.concept}
            </h4>
            <p className="font-dmsans text-xs text-parchment/70 leading-relaxed">
              {chapter.philosophicalTheme.explanation}
            </p>
          </div>

          {/* Chapter-Specific Interactive Widget */}
          {chapter.interactiveFeature.type === "stats" && (
            <div className="grid grid-cols-2 gap-3">
              {chapter.interactiveFeature.data.map((stat: any, idx: number) => (
                <div
                  key={idx}
                  className="p-3.5 rounded bg-obsidian/80 border border-antiqueGold/20"
                >
                  <div className="text-[10px] font-cinzel text-sandstone uppercase tracking-wider mb-1">
                    {stat.label}
                  </div>
                  <div className="font-cinzel text-xs sm:text-sm font-bold text-parchment">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {chapter.interactiveFeature.type === "anatomy" && (
            <div className="p-5 rounded bg-obsidian/80 border border-antiqueGold/25">
              <h4 className="font-cinzel text-xs text-antiqueGold uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Anchor className="w-3.5 h-3.5 text-antiqueGold" />
                {chapter.interactiveFeature.data.title}
              </h4>
              <div className="space-y-2.5">
                {chapter.interactiveFeature.data.items.map((item: any, i: number) => (
                  <div key={i} className="text-xs">
                    <span className="font-cinzel font-semibold text-sandstone block">
                      {item.name}
                    </span>
                    <span className="text-parchment/70">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {chapter.interactiveFeature.type === "comparison" && (
            <div className="p-5 rounded bg-obsidian/80 border border-antiqueGold/25 space-y-3">
              <h4 className="font-cinzel text-xs text-antiqueGold uppercase tracking-wider">
                {chapter.interactiveFeature.data.title}
              </h4>
              <div className="p-3 rounded bg-sienna/10 border border-sienna/30">
                <div className="font-cinzel text-xs text-sandstone font-bold mb-1">
                  {chapter.interactiveFeature.data.treeA.name}
                </div>
                <div className="text-[11px] text-parchment/80 mb-1">
                  <strong>Symbol:</strong> {chapter.interactiveFeature.data.treeA.symbol}
                </div>
                <div className="text-[11px] text-parchment/60">
                  {chapter.interactiveFeature.data.treeA.fate}
                </div>
              </div>
              <div className="p-3 rounded bg-forestGreen/20 border border-forestGreen/40">
                <div className="font-cinzel text-xs text-emerald-300 font-bold mb-1">
                  {chapter.interactiveFeature.data.treeB.name}
                </div>
                <div className="text-[11px] text-parchment/80 mb-1">
                  <strong>Symbol:</strong> {chapter.interactiveFeature.data.treeB.symbol}
                </div>
                <div className="text-[11px] text-parchment/60">
                  {chapter.interactiveFeature.data.treeB.fate}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

