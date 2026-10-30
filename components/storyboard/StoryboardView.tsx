"use client";

import React, { useState } from "react";
import { STORYBOARD_PANELS, StoryboardPanel } from "@/lib/story-data";
import { StoryboardVisualizer } from "./StoryboardVisualizer";
import { Sparkles, Maximize2, X, MessageSquare, Compass, ShieldAlert, Award } from "lucide-react";
import { audioManager } from "@/lib/audio";

export function StoryboardView() {
  const [selectedAct, setSelectedAct] = useState<string>("ALL");
  const [activeModalPanel, setActiveModalPanel] = useState<StoryboardPanel | null>(null);

  const acts = [
    "ALL",
    "Act I: Heritage & Exile",
    "Act II: The Great Trial",
    "Act III: Crown & Renunciation",
  ];

  const filteredPanels =
    selectedAct === "ALL"
      ? STORYBOARD_PANELS
      : STORYBOARD_PANELS.filter((p) => p.act === selectedAct);

  const handleOpenModal = (panel: StoryboardPanel) => {
    audioManager.playSfx("page");
    setActiveModalPanel(panel);
  };

  const handleCloseModal = () => {
    audioManager.playSfx("click");
    setActiveModalPanel(null);
  };

  return (
    <section
      id="storyboard-section"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20 text-parchment"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-antiqueGold/30 bg-caveCharcoal/60 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-antiqueGold" />
          <span className="font-cinzel text-xs tracking-[0.2em] text-sandstone uppercase">
            Official Academic Assignment Component • CO2
          </span>
        </div>
        <h2 className="font-cinzel text-4xl sm:text-5xl font-bold tracking-[0.15em] mb-4 text-parchment">
          THE VISUAL STORYBOARD
        </h2>
        <p className="font-cormorant text-xl sm:text-2xl text-sandstone italic mb-4">
          12 Graphic Novel Panels of the Mahajanaka Jataka
        </p>
        <p className="font-dmsans text-sm sm:text-base text-parchment/70 leading-relaxed max-w-2xl mx-auto">
          Structured comic-book storyboard illustrating the narrative sequence of Ajanta Cave 1.
          Follow Mahajanaka's transformation through adversity, unwavering willpower, worldly triumph,
          and final spiritual detachment.
        </p>

        {/* Act Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {acts.map((act) => (
            <button
              key={act}
              onClick={() => {
                audioManager.playSfx("click");
                setSelectedAct(act);
              }}
              className={`px-4 py-2 rounded-sm text-xs font-cinzel tracking-wider transition-all ${
                selectedAct === act
                  ? "bg-antiqueGold text-obsidian font-bold shadow-[0_0_20px_rgba(197,161,90,0.4)]"
                  : "bg-caveCharcoal/70 text-parchment/75 border border-antiqueGold/20 hover:border-antiqueGold/50"
              }`}
            >
              {act}
            </button>
          ))}
        </div>
      </div>

      {/* Storyboard Panels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPanels.map((panel) => (
          <div
            key={panel.id}
            className="group fresco-panel rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:border-antiqueGold/60 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.8)]"
          >
            {/* Visual Scene Header */}
            <div className="relative aspect-[16/10] bg-black/60 overflow-hidden border-b border-antiqueGold/20">
              <StoryboardVisualizer panel={panel} />

              {/* Panel Scene Tag */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-obsidian/85 border border-antiqueGold/40 text-[10px] font-cinzel font-bold tracking-widest text-antiqueGold">
                {panel.sceneNumber}
              </div>

              {/* Expand Trigger */}
              <button
                onClick={() => handleOpenModal(panel)}
                title="Inspect Storyboard Panel"
                className="absolute top-3 right-3 p-1.5 rounded bg-obsidian/80 border border-antiqueGold/30 text-parchment/80 opacity-0 group-hover:opacity-100 transition-opacity hover:text-antiqueGold"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>

              {/* Moral Theme Pill */}
              <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-caveCharcoal/90 border border-sandstone/30 text-[10px] font-dmsans text-sandstone tracking-wide">
                {panel.moralTheme}
              </div>
            </div>

            {/* Panel Narrative Body */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-cinzel uppercase tracking-[0.2em] text-antiqueGold/80 mb-1">
                  {panel.act}
                </div>
                <h3 className="font-cinzel text-lg font-bold text-parchment mb-2 group-hover:text-antiqueGold transition-colors">
                  {panel.title}
                </h3>
                <p className="font-dmsans text-xs sm:text-sm text-parchment/80 leading-relaxed mb-4">
                  {panel.narration}
                </p>
              </div>

              {/* Dialogue & Event Snippet */}
              <div className="space-y-3 pt-3 border-t border-antiqueGold/15">
                {panel.dialogue && (
                  <div className="bg-obsidian/60 p-2.5 rounded border-l-2 border-antiqueGold">
                    <p className="font-cormorant text-xs sm:text-sm italic text-sandstone">
                      {panel.dialogue}
                    </p>
                    <span className="text-[10px] font-dmsans text-parchment/50 block mt-1">
                      — {panel.character}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between text-[11px] font-dmsans text-parchment/60">
                  <span className="truncate pr-2">
                    <strong className="text-sandstone">Key Event:</strong> {panel.event}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Panel Inspection Modal */}
      {activeModalPanel && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/95 backdrop-blur-lg animate-fadeIn"
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto fresco-panel rounded-sm border border-antiqueGold/50 p-6 sm:p-8">
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 p-2 rounded-full bg-caveCharcoal border border-antiqueGold/40 text-parchment hover:text-antiqueGold transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded bg-antiqueGold text-obsidian font-cinzel font-bold text-xs tracking-widest">
                {activeModalPanel.sceneNumber}
              </span>
              <span className="font-cinzel text-xs text-sandstone tracking-widest uppercase">
                {activeModalPanel.act}
              </span>
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-parchment mb-4">
              {activeModalPanel.title}
            </h3>

            {/* Large Visual Render */}
            <div className="w-full aspect-[16/9] rounded overflow-hidden mb-6 border border-antiqueGold/30 bg-black">
              <StoryboardVisualizer panel={activeModalPanel} />
            </div>

            {/* Detailed Narrative & Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-parchment/80">
              <div className="space-y-4">
                <div>
                  <h4 className="font-cinzel text-xs uppercase tracking-wider text-antiqueGold mb-1">
                    Narrative Sequence
                  </h4>
                  <p className="font-dmsans leading-relaxed">{activeModalPanel.narration}</p>
                </div>
                {activeModalPanel.dialogue && (
                  <div className="p-3 bg-obsidian/80 rounded border-l-2 border-antiqueGold">
                    <h4 className="font-cinzel text-[10px] uppercase tracking-wider text-sandstone mb-1">
                      Script Dialogue
                    </h4>
                    <p className="font-cormorant text-base italic text-sandstone">
                      {activeModalPanel.dialogue}
                    </p>
                    <span className="text-[10px] text-parchment/50 block mt-1">
                      Speaker: {activeModalPanel.character}
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="p-3 rounded bg-caveCharcoal/50 border border-antiqueGold/20">
                  <h4 className="font-cinzel text-xs uppercase tracking-wider text-antiqueGold mb-1 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-antiqueGold" />
                    Moral & Philosophical Theme
                  </h4>
                  <p className="font-dmsans text-sandstone font-medium mb-1">
                    {activeModalPanel.moralTheme}
                  </p>
                  <p className="font-dmsans text-xs text-parchment/70">
                    Demonstrates the development of Bodhisatta perfections (paramitas) across human crisis.
                  </p>
                </div>

                <div className="p-3 rounded bg-caveCharcoal/50 border border-antiqueGold/20">
                  <h4 className="font-cinzel text-xs uppercase tracking-wider text-antiqueGold mb-1 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-antiqueGold" />
                    Visual Composition Notes
                  </h4>
                  <p className="font-dmsans text-xs text-parchment/70 leading-relaxed">
                    {activeModalPanel.visualDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

