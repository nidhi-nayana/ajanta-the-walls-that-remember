"use client";

import React, { useState } from "react";
import { MURAL_HOTSPOTS, MuralHotspot } from "@/lib/story-data";
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  Sparkles,
  Info,
  Layers,
  Palette,
  Eye,
  X,
  Compass,
  ArrowRightLeft,
} from "lucide-react";
import { audioManager } from "@/lib/audio";

export function MuralExplorer() {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [selectedHotspot, setSelectedHotspot] = useState<MuralHotspot | null>(null);
  const [comparisonMode, setComparisonMode] = useState<"side-by-side" | "authentic" | "modern">("side-by-side");

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => Math.min(2.2, Math.max(0.9, prev + delta)));
    audioManager.playSfx("click");
  };

  const handleSelectHotspot = (spot: MuralHotspot) => {
    audioManager.playSfx("bell");
    setSelectedHotspot(spot);
  };

  return (
    <section
      id="mural-gallery-section"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20 text-parchment"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-antiqueGold/30 bg-caveCharcoal/60 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-antiqueGold" />
          <span className="font-cinzel text-xs tracking-[0.2em] text-sandstone uppercase">
            Signature Feature • Ajanta Cave 1 Left Wall
          </span>
        </div>
        <h2 className="font-cinzel text-4xl sm:text-5xl font-bold tracking-[0.15em] mb-4 text-parchment">
          THE MURAL COMES ALIVE
        </h2>
        <p className="font-cormorant text-xl sm:text-2xl text-sandstone italic mb-4">
          Interactive Archaeological Exploration of the Mahajanaka Jataka
        </p>
        <p className="font-dmsans text-sm sm:text-base text-parchment/70 leading-relaxed max-w-2xl mx-auto">
          Explore the painted basalt wall of Cave 1. Click on illuminated hotspots to discover
          canonical scene depictions, ancient mineral pigments, and our modern graphic novel
          reconstruction.
        </p>

        {/* Scholarly Integrity Disclaimer Badge */}
        <div className="mt-6 p-3 rounded bg-caveCharcoal/80 border border-antiqueGold/30 text-xs text-parchment/75 max-w-xl mx-auto flex items-start gap-2.5 text-left">
          <Info className="w-4 h-4 text-antiqueGold shrink-0 mt-0.5" />
          <span>
            <strong>Academic Integrity Notice:</strong> All historical details are grounded in ASI,
            IGNCA, and Schlingloff documentation. Reconstructions and graphic interpretations are
            clearly labeled distinct from authentic 5th-century Vakataka wall paintings.
          </span>
        </div>
      </div>

      {/* Main Interactive Mural Container */}
      <div className="relative rounded-sm fresco-border overflow-hidden bg-black/80 shadow-[0_12px_45px_rgba(0,0,0,0.95)]">
        {/* Floating Zoom & Control Toolbar */}
        <div className="absolute top-4 right-4 z-30 flex items-center gap-2 bg-obsidian/90 backdrop-blur-md p-1.5 rounded border border-antiqueGold/40 shadow-lg">
          <button
            onClick={() => handleZoom(0.2)}
            title="Zoom In"
            className="p-1.5 rounded hover:bg-caveCharcoal text-parchment/80 hover:text-antiqueGold transition-colors"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <span className="text-xs font-cinzel text-sandstone px-1">
            {Math.round(zoomLevel * 100)}%
          </span>
          <button
            onClick={() => handleZoom(-0.2)}
            title="Zoom Out"
            className="p-1.5 rounded hover:bg-caveCharcoal text-parchment/80 hover:text-antiqueGold transition-colors"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel(1)}
            title="Reset Zoom"
            className="px-2 py-1 text-[10px] font-cinzel rounded bg-caveCharcoal text-sandstone hover:text-antiqueGold"
          >
            Reset
          </button>
        </div>

        {/* Viewport with Zoom & Pan */}
        <div className="w-full h-[540px] sm:h-[620px] overflow-auto relative cursor-grab active:cursor-grabbing flex items-center justify-center p-4">
          <div
            className="relative transition-transform duration-300 ease-out origin-center"
            style={{
              transform: `scale(${zoomLevel})`,
              width: "100%",
              maxWidth: "1050px",
              aspectRatio: "16/9",
            }}
          >
            {/* The Great Mural Canvas Graphic */}
            <svg
              viewBox="0 0 1050 590"
              className="w-full h-full object-cover rounded shadow-inner"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="caveWallGlow" cx="50%" cy="50%" r="70%">
                  <stop offset="0%" stopColor="#2E2219" />
                  <stop offset="65%" stopColor="#1B130E" />
                  <stop offset="100%" stopColor="#100D0B" />
                </radialGradient>
                <pattern id="frescoCracks" width="200" height="200" patternUnits="userSpaceOnUse">
                  <path d="M 10 10 L 40 70 L 90 80 L 130 160" stroke="#0D0907" strokeWidth="1" fill="none" opacity="0.4" />
                  <path d="M 180 20 L 150 90 L 170 140" stroke="#0D0907" strokeWidth="0.8" fill="none" opacity="0.3" />
                </pattern>
              </defs>

              {/* Plaster Ground with Ochre and Earth Tones */}
              <rect width="1050" height="590" fill="url(#caveWallGlow)" />
              <rect width="1050" height="590" fill="url(#frescoCracks)" />

              {/* Upper Section: Palace & Queen's Escape */}
              <path d="M 30 140 Q 150 90 280 140" stroke="#C5A15A" strokeWidth="2" strokeOpacity="0.4" fill="none" />
              <g transform="translate(60, 40)" opacity="0.85">
                <rect x="0" y="0" width="180" height="110" rx="4" fill="#241812" stroke="#A34D32" strokeWidth="1" strokeDasharray="3 3" />
                <text x="90" y="60" fill="#E7D5B5" fontSize="11" fontFamily="serif" textAnchor="middle">
                  The Exile from Mithila
                </text>
              </g>

              {/* Center Vertical: Goddess Manimekhala */}
              <g transform="translate(210, 190)" opacity="0.9">
                <ellipse cx="60" cy="80" rx="70" ry="90" fill="#1A2D3C" stroke="#C5A15A" strokeWidth="1.5" strokeDasharray="4 2" />
                <text x="60" y="85" fill="#FFE7B3" fontSize="12" fontFamily="serif" textAnchor="middle">
                  Descent of Manimekhala
                </text>
              </g>

              {/* Center Lower: The Celebrated Shipwreck Scene */}
              <g transform="translate(320, 360)" opacity="0.9">
                <rect x="0" y="0" width="240" height="140" rx="4" fill="#13232F" stroke="#4A7596" strokeWidth="1" />
                <path d="M 20 80 Q 120 130 220 70" stroke="#E7D5B5" strokeWidth="2" fill="none" />
                <text x="120" y="75" fill="#E7D5B5" fontSize="12" fontFamily="serif" textAnchor="middle">
                  The Three-Masted Merchant Ship
                </text>
              </g>

              {/* Right Lower: The Court of Mithila & The Dancer */}
              <g transform="translate(660, 290)" opacity="0.9">
                <rect x="0" y="0" width="290" height="190" rx="4" fill="#2D1C13" stroke="#C5A15A" strokeWidth="1.5" />
                <text x="145" y="100" fill="#FFE7B3" fontSize="13" fontFamily="serif" textAnchor="middle">
                  Court of Mithila & Female Orchestra
                </text>
              </g>

              {/* Upper Right: The Renunciation into the Forest */}
              <g transform="translate(740, 40)" opacity="0.85">
                <rect x="0" y="0" width="220" height="120" rx="4" fill="#172419" stroke="#344638" strokeWidth="1" strokeDasharray="4 2" />
                <text x="110" y="65" fill="#E7D5B5" fontSize="11" fontFamily="serif" textAnchor="middle">
                  Departure to the Forest (Nekkhamma)
                </text>
              </g>
            </svg>

            {/* Interactive Hotspot Pins */}
            {MURAL_HOTSPOTS.map((spot) => (
              <button
                key={spot.id}
                onClick={() => handleSelectHotspot(spot)}
                style={{
                  left: `${spot.xPercent}%`,
                  top: `${spot.yPercent}%`,
                }}
                className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none z-20"
              >
                {/* Pulsing Outer Radar Ring */}
                <span className="absolute -inset-2 rounded-full bg-antiqueGold/30 animate-ping group-hover:bg-antiqueGold/50" />
                {/* Main Glowing Target Dot */}
                <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-obsidian border-2 border-antiqueGold shadow-[0_0_15px_#C5A15A] group-hover:scale-125 transition-transform">
                  <Sparkles className="w-3.5 h-3.5 text-antiqueGold" />
                </span>

                {/* Hotspot Floating Label */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-8 px-2.5 py-1 rounded bg-obsidian/90 border border-antiqueGold/40 text-[10px] font-cinzel text-parchment whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
                  {spot.title}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Wall Guide */}
        <div className="p-4 bg-caveCharcoal/90 border-t border-antiqueGold/20 flex flex-wrap items-center justify-between text-xs font-dmsans text-parchment/60">
          <span>Click any illuminated marker to inspect historical fresco data</span>
          <span className="font-cinzel text-antiqueGold text-[11px] tracking-wider">
            5 Registered Archaeological Hotspots
          </span>
        </div>
      </div>

      {/* Selected Hotspot Modal Detail Viewer */}
      {selectedHotspot && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/95 backdrop-blur-lg animate-fadeIn"
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto fresco-panel rounded-sm border border-antiqueGold/50 p-6 sm:p-8">
            <button
              onClick={() => setSelectedHotspot(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-caveCharcoal border border-antiqueGold/40 text-parchment hover:text-antiqueGold transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Info */}
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded bg-antiqueGold/20 border border-antiqueGold/40 font-cinzel text-xs text-antiqueGold uppercase tracking-widest font-bold">
                {selectedHotspot.locationOnWall}
              </span>
              <span className="text-xs font-dmsans text-parchment/60">
                {selectedHotspot.originalArtworkRef}
              </span>
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-parchment mb-6">
              {selectedHotspot.title}
            </h3>

            {/* Visual Comparison Mode Switcher */}
            <div className="mb-6 p-4 rounded bg-obsidian/80 border border-antiqueGold/30">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                <span className="text-xs font-cinzel text-antiqueGold uppercase tracking-wider flex items-center gap-1.5">
                  <ArrowRightLeft className="w-3.5 h-3.5" />
                  Visual Comparison: Historical Mural vs Modern Graphic Adaptation
                </span>
                <div className="flex gap-1.5">
                  {(["side-by-side", "authentic", "modern"] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setComparisonMode(mode)}
                      className={`px-2.5 py-1 rounded text-[11px] font-cinzel tracking-wider uppercase transition-colors ${
                        comparisonMode === mode
                          ? "bg-antiqueGold text-obsidian font-bold"
                          : "bg-caveCharcoal text-parchment/70 hover:text-sandstone"
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              {/* Comparative Visual Panels */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(comparisonMode === "side-by-side" || comparisonMode === "authentic") && (
                  <div className="p-4 rounded bg-caveCharcoal/70 border border-stone-800">
                    <span className="text-[10px] font-cinzel tracking-widest text-sandstone uppercase block mb-2 font-bold">
                      [ AUTHENTIC 5TH CENTURY MURAL RECORD ]
                    </span>
                    <div className="aspect-[16/10] bg-[#1F1712] rounded flex items-center justify-center p-4 border border-sandstone/20 text-center">
                      <p className="font-cormorant text-base italic text-sandstone">
                        “Ancient tempera fresco preserved on Cave 1 left wall under the patronage of the Vakatakas.”
                      </p>
                    </div>
                    <p className="text-xs font-dmsans text-parchment/60 mt-2">
                      Earth pigments applied onto clay, cow dung, and rice-husk plaster.
                    </p>
                  </div>
                )}

                {(comparisonMode === "side-by-side" || comparisonMode === "modern") && (
                  <div className="p-4 rounded bg-caveCharcoal/70 border border-stone-800">
                    <span className="text-[10px] font-cinzel tracking-widest text-antiqueGold uppercase block mb-2 font-bold">
                      [ CONTEMPORARY STORYBOARD INTERPRETATION ]
                    </span>
                    <div className="aspect-[16/10] bg-[#121A20] rounded flex items-center justify-center p-4 border border-antiqueGold/30 text-center">
                      <p className="font-cormorant text-base italic text-antiqueGold">
                        “Dynamic 2D graphic novel adaptation translating classical iconography into cinematic panels.”
                      </p>
                    </div>
                    <p className="text-xs font-dmsans text-parchment/60 mt-2">
                      {selectedHotspot.modernInterpretation}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Detailed Context Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-parchment/80">
              <div className="space-y-4">
                <div>
                  <h4 className="font-cinzel text-xs uppercase tracking-wider text-antiqueGold mb-1 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    What is Depicted
                  </h4>
                  <p className="font-dmsans leading-relaxed">{selectedHotspot.depiction}</p>
                </div>

                <div>
                  <h4 className="font-cinzel text-xs uppercase tracking-wider text-antiqueGold mb-1 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    Historical & Narrative Context
                  </h4>
                  <p className="font-dmsans leading-relaxed">{selectedHotspot.historicalContext}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-cinzel text-xs uppercase tracking-wider text-antiqueGold mb-1 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    Artistic & Technical Significance
                  </h4>
                  <p className="font-dmsans leading-relaxed">{selectedHotspot.artisticSignificance}</p>
                </div>

                <div>
                  <h4 className="font-cinzel text-xs uppercase tracking-wider text-antiqueGold mb-1.5 flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5" />
                    Identified Mineral Fresco Pigments
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedHotspot.frescoPigments.map((pigment, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-sm bg-obsidian border border-sandstone/30 text-xs font-dmsans text-sandstone"
                      >
                        {pigment}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

