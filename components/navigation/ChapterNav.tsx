"use client";

import React from "react";
import { CHAPTERS_DATA } from "@/lib/story-data";
import { audioManager } from "@/lib/audio";

interface ChapterNavProps {
  activeChapter: number;
  onSelectChapter: (chapterId: number) => void;
}

export function ChapterNav({ activeChapter, onSelectChapter }: ChapterNavProps) {
  return (
    <aside
      aria-label="Chapter Navigation"
      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col items-end gap-3 pointer-events-auto"
    >
      <div className="flex flex-col items-center gap-2.5 p-2 rounded-full bg-obsidian/85 backdrop-blur-md border border-antiqueGold/25 shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
        {CHAPTERS_DATA.map((chapter) => {
          const isActive = chapter.id === activeChapter;
          return (
            <button
              key={chapter.id}
              onClick={() => {
                audioManager.playSfx("click");
                onSelectChapter(chapter.id);
              }}
              className="group relative flex items-center justify-center p-1.5 focus:outline-none"
              title={`${chapter.number}: ${chapter.title}`}
            >
              {/* Tooltip on hover */}
              <div className="absolute right-9 px-2.5 py-1 rounded bg-caveCharcoal border border-antiqueGold/40 text-[11px] font-cinzel text-parchment whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
                <span className="text-antiqueGold font-bold mr-1">{chapter.number}</span>
                {chapter.title}
              </div>

              {/* Indicator Dot */}
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-3 h-3 bg-antiqueGold ring-2 ring-antiqueGold/50 scale-125 shadow-[0_0_10px_#C5A15A]"
                    : "w-2 h-2 bg-stone-600 group-hover:bg-sandstone"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Chapter Number Badge */}
      <div className="text-right pr-1">
        <span className="text-[10px] font-cinzel tracking-widest text-antiqueGold/80 uppercase">
          CH. 0{activeChapter} / 07
        </span>
      </div>
    </aside>
  );
}

