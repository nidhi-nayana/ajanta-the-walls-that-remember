"use client";

import React, { useState } from "react";
import { TIMELINE_EVENTS, TimelineEvent } from "@/lib/story-data";
import { Clock, Sparkles, Filter, Bookmark, Landmark, ChevronRight } from "lucide-react";
import { audioManager } from "@/lib/audio";

export function InteractiveTimeline() {
  const [filterCategory, setFilterCategory] = useState<"all" | "history" | "narrative">("all");
  const [activeEvent, setActiveEvent] = useState<TimelineEvent | null>(null);

  const filtered =
    filterCategory === "all"
      ? TIMELINE_EVENTS
      : TIMELINE_EVENTS.filter((e) => e.category === filterCategory);

  const handleSelectEvent = (event: TimelineEvent) => {
    audioManager.playSfx("page");
    setActiveEvent(event);
  };

  return (
    <section
      id="timeline-section"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20 text-parchment"
    >
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-antiqueGold/30 bg-caveCharcoal/60 mb-4">
          <Clock className="w-3.5 h-3.5 text-antiqueGold" />
          <span className="font-cinzel text-xs tracking-[0.2em] text-sandstone uppercase">
            Chronological Journey
          </span>
        </div>
        <h2 className="font-cinzel text-4xl sm:text-5xl font-bold tracking-[0.15em] mb-4 text-parchment">
          THE DUAL TIMELINE
        </h2>
        <p className="font-cormorant text-xl sm:text-2xl text-sandstone italic mb-4">
          Ajanta Archaeological History & Mahajanaka’s Epic Journey
        </p>
        <p className="font-dmsans text-sm sm:text-base text-parchment/70 leading-relaxed max-w-2xl mx-auto">
          Traverse two parallel currents of time: the two-thousand-year architectural saga of the
          Ajanta caves and the legendary lifetime of the Bodhisatta Mahajanaka.
        </p>

        {/* Filter Switcher */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setFilterCategory("all")}
            className={`px-4 py-1.5 rounded-sm text-xs font-cinzel tracking-wider uppercase transition-colors ${
              filterCategory === "all"
                ? "bg-antiqueGold text-obsidian font-bold"
                : "bg-caveCharcoal text-parchment/75 border border-antiqueGold/20"
            }`}
          >
            All Milestones
          </button>
          <button
            onClick={() => setFilterCategory("history")}
            className={`px-4 py-1.5 rounded-sm text-xs font-cinzel tracking-wider uppercase transition-colors ${
              filterCategory === "history"
                ? "bg-antiqueGold text-obsidian font-bold"
                : "bg-caveCharcoal text-parchment/75 border border-antiqueGold/20"
            }`}
          >
            Ajanta History (BCE–Modern)
          </button>
          <button
            onClick={() => setFilterCategory("narrative")}
            className={`px-4 py-1.5 rounded-sm text-xs font-cinzel tracking-wider uppercase transition-colors ${
              filterCategory === "narrative"
                ? "bg-antiqueGold text-obsidian font-bold"
                : "bg-caveCharcoal text-parchment/75 border border-antiqueGold/20"
            }`}
          >
            Mahajanaka Epic Stages
          </button>
        </div>
      </div>

      {/* Vertical Connected Timeline Track */}
      <div className="relative border-l-2 border-antiqueGold/30 ml-4 md:ml-32 pl-6 md:pl-10 space-y-12">
        {filtered.map((item, idx) => {
          const isHistory = item.category === "history";
          return (
            <div
              key={idx}
              onClick={() => handleSelectEvent(item)}
              className="relative group cursor-pointer transition-all"
            >
              {/* Timeline Marker Pin */}
              <div
                className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  isHistory
                    ? "bg-obsidian border-antiqueGold text-antiqueGold group-hover:scale-125 group-hover:shadow-[0_0_15px_#C5A15A]"
                    : "bg-obsidian border-sienna text-sienna group-hover:scale-125 group-hover:shadow-[0_0_15px_#A34D32]"
                }`}
              >
                {isHistory ? (
                  <Landmark className="w-3 h-3" />
                ) : (
                  <Bookmark className="w-3 h-3" />
                )}
              </div>

              {/* Event Content Box */}
              <div className="fresco-panel p-5 sm:p-6 rounded-sm border border-antiqueGold/20 group-hover:border-antiqueGold/60 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-cinzel text-xs font-bold text-antiqueGold tracking-widest">
                    {item.year}
                  </span>
                  <span className="text-[10px] font-cinzel uppercase tracking-wider text-sandstone px-2 py-0.5 rounded bg-obsidian border border-sandstone/25">
                    {item.era}
                  </span>
                </div>

                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-parchment mb-2 group-hover:text-antiqueGold transition-colors">
                  {item.title}
                </h3>

                <p className="font-dmsans text-xs sm:text-sm text-parchment/80 leading-relaxed mb-3">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-antiqueGold/15 text-xs font-dmsans text-sandstone flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-antiqueGold shrink-0" />
                  <span>
                    <strong>Significance:</strong> {item.importance}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

