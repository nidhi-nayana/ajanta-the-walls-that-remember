"use client";

import React from "react";
import { StoryboardPanel } from "@/lib/story-data";

interface StoryboardVisualizerProps {
  panel: StoryboardPanel;
  className?: string;
}

export function StoryboardVisualizer({ panel, className = "" }: StoryboardVisualizerProps) {
  // Render distinctive, high-craft SVG graphic novel scene based on svgSceneType
  switch (panel.svgSceneType) {
    case "palace_exile":
      return (
        <svg
          viewBox="0 0 600 400"
          className={`w-full h-full object-cover rounded ${className}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="skyExile" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0B0908" />
              <stop offset="60%" stopColor="#251410" />
              <stop offset="100%" stopColor="#4A1C12" />
            </linearGradient>
            <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFE7B3" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFE7B3" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Night Sky & Distant Smoke */}
          <rect width="600" height="400" fill="url(#skyExile)" />
          <circle cx="480" cy="90" r="60" fill="url(#moonGlow)" />
          <circle cx="480" cy="90" r="24" fill="#FDF3DA" />

          {/* Burning City Silhouettes of Mithila */}
          <path d="M 60 400 L 60 220 L 110 190 L 160 220 L 160 400 Z" fill="#18110D" />
          <path d="M 170 400 L 170 160 L 220 120 L 270 160 L 270 400 Z" fill="#140E0A" />
          <path d="M 280 400 L 280 240 L 330 200 L 380 240 L 380 400 Z" fill="#1E130D" />

          {/* Fire embers & smoke sparks */}
          <circle cx="120" cy="180" r="2.5" fill="#E86C3A" opacity="0.8" />
          <circle cx="210" cy="130" r="2" fill="#E86C3A" opacity="0.9" />
          <circle cx="240" cy="150" r="3" fill="#F5A623" opacity="0.7" />
          <circle cx="310" cy="170" r="2" fill="#E86C3A" opacity="0.6" />

          {/* Foreground Ancient Stone Archway */}
          <path
            d="M 360 400 L 360 140 Q 480 80 600 140 L 600 400 Z"
            fill="#100D0B"
            stroke="#C5A15A"
            strokeWidth="2"
            strokeOpacity="0.4"
          />

          {/* Veiled Queen Mother Holding Infant in Arms */}
          <g transform="translate(420, 210)">
            {/* Flowing Veil & Robe */}
            <path
              d="M 50 190 C 30 140 20 80 45 40 C 65 10 95 15 110 40 C 130 80 120 140 100 190 Z"
              fill="#A34D32"
              opacity="0.9"
            />
            {/* Head Contour */}
            <circle cx="75" cy="45" r="16" fill="#C6A77A" />
            <path d="M 60 40 Q 75 25 90 40 Z" fill="#211B17" />
            {/* Secret Royal Bundle (Baby Mahajanaka) */}
            <ellipse cx="65" cy="90" rx="18" ry="24" fill="#C5A15A" />
            <circle cx="62" cy="78" r="8" fill="#E7D5B5" />
          </g>
        </svg>
      );

    case "young_prince":
      return (
        <svg
          viewBox="0 0 600 400"
          className={`w-full h-full object-cover rounded ${className}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="lampHearth" cx="300" cy="220" r="250" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F5B041" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#A34D32" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#100D0B" stopOpacity="0.95" />
            </radialGradient>
          </defs>
          <rect width="600" height="400" fill="#140F0C" />
          <rect width="600" height="400" fill="url(#lampHearth)" />

          {/* Courtyard Pillars & Wooden Balustrade */}
          <path d="M 80 0 L 80 400 M 520 0 L 520 400" stroke="#3D2E24" strokeWidth="24" />
          <path d="M 0 320 L 600 320" stroke="#C5A15A" strokeWidth="2" strokeOpacity="0.3" />

          {/* Mother Seated on Low Stool */}
          <g transform="translate(140, 160)">
            <ellipse cx="60" cy="140" rx="45" ry="18" fill="#1F1712" />
            <path d="M 30 135 C 40 70 80 70 90 135 Z" fill="#A34D32" />
            <circle cx="60" cy="55" r="20" fill="#C6A77A" />
            {/* Jewel Box on Lap */}
            <rect x="75" y="90" width="36" height="22" rx="3" fill="#C5A15A" stroke="#E7D5B5" strokeWidth="1.5" />
          </g>

          {/* Young Lion Prince Mahajanaka Standing Resolute */}
          <g transform="translate(350, 110)">
            {/* Headdress of Mithila Royalty */}
            <path d="M 50 35 L 62 10 L 74 35 Z" fill="#C5A15A" />
            <circle cx="62" cy="48" r="22" fill="#E7D5B5" />
            {/* Torso & Dhoti */}
            <path d="M 42 70 L 82 70 L 76 130 L 48 130 Z" fill="#C6A77A" />
            <path d="M 45 130 L 80 130 L 85 240 L 40 240 Z" fill="#E7D5B5" stroke="#C5A15A" strokeWidth="1" />
            {/* Extended Hand Receiving Ring */}
            <path d="M 42 90 L 0 110" stroke="#C6A77A" strokeWidth="6" strokeLinecap="round" />
            <circle cx="-2" cy="112" r="5" fill="#C5A15A" />
          </g>
        </svg>
      );

    case "merchant_harbor":
      return (
        <svg
          viewBox="0 0 600 400"
          className={`w-full h-full object-cover rounded ${className}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="harborDawn" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2D1B28" />
              <stop offset="50%" stopColor="#8C4A32" />
              <stop offset="100%" stopColor="#C5A15A" />
            </linearGradient>
          </defs>
          <rect width="600" height="240" fill="url(#harborDawn)" />
          <rect y="240" width="600" height="160" fill="#122530" />

          {/* Distant Harbor Hills */}
          <path d="M 0 240 Q 150 180 300 240 Q 450 190 600 240 Z" fill="#201511" opacity="0.6" />

          {/* Grand Ancient Indian Wooden Galley */}
          <g transform="translate(180, 80)">
            {/* Triple Masts */}
            <line x1="80" y1="20" x2="80" y2="170" stroke="#3D2817" strokeWidth="6" />
            <line x1="160" y1="5" x2="160" y2="170" stroke="#3D2817" strokeWidth="8" />
            <line x1="240" y1="30" x2="240" y2="170" stroke="#3D2817" strokeWidth="5" />
            {/* Square Rigged Sails */}
            <rect x="115" y="25" width="90" height="95" rx="4" fill="#E7D5B5" opacity="0.9" />
            <rect x="45" y="45" width="70" height="75" rx="3" fill="#D4AF37" opacity="0.8" />
            <rect x="210" y="55" width="60" height="65" rx="3" fill="#D4AF37" opacity="0.8" />
            {/* Hull with Makara Prow */}
            <path
              d="M 10 160 Q 160 210 320 160 L 300 200 Q 160 225 30 190 Z"
              fill="#26170F"
              stroke="#C5A15A"
              strokeWidth="1.5"
            />
            {/* Prow Dragon/Makara Ornament */}
            <circle cx="20" cy="155" r="10" fill="#C5A15A" />
          </g>

          {/* Dock Pier & Merchant Cargo */}
          <path d="M 0 280 L 190 280 L 170 400 L 0 400 Z" fill="#1C140E" />
          <ellipse cx="60" cy="310" rx="14" ry="18" fill="#A34D32" />
          <ellipse cx="90" cy="305" rx="12" ry="16" fill="#C5A15A" />
          <ellipse cx="125" cy="315" rx="15" ry="19" fill="#8C6228" />
        </svg>
      );

    case "ocean_storm":
      return (
        <svg
          viewBox="0 0 600 400"
          className={`w-full h-full object-cover rounded ${className}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="stormGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#080D12" />
              <stop offset="60%" stopColor="#10202B" />
              <stop offset="100%" stopColor="#0B151D" />
            </linearGradient>
          </defs>
          <rect width="600" height="400" fill="url(#stormGrad)" />

          {/* Jagged Lightning Bolt */}
          <path
            d="M 380 0 L 350 110 L 390 120 L 330 240"
            stroke="#FFF7D6"
            strokeWidth="3"
            fill="none"
            filter="drop-shadow(0 0 10px #C5A15A)"
          />

          {/* Violent Surging Cresting Waves */}
          <path
            d="M 0 320 C 90 260 140 370 240 280 C 330 200 420 380 520 270 C 570 220 600 290 600 400 L 0 400 Z"
            fill="#122E3E"
            opacity="0.9"
          />
          <path
            d="M 0 360 C 120 310 180 390 310 320 C 440 260 510 390 600 330 L 600 400 L 0 400 Z"
            fill="#0A1D27"
          />

          {/* Frothing Wave Crests */}
          <path
            d="M 220 280 Q 240 260 260 285 M 500 270 Q 520 250 540 275"
            stroke="#E7D5B5"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />

          {/* Ship Pitching Wildly at 35 Degree Angle */}
          <g transform="translate(230, 180) rotate(-22)">
            <line x1="80" y1="10" x2="80" y2="130" stroke="#3D2817" strokeWidth="6" />
            <path d="M 40 35 L 120 45 L 80 120 Z" fill="#E7D5B5" opacity="0.6" />
            <path d="M 10 120 Q 80 150 160 120 L 140 150 Q 80 165 20 145 Z" fill="#24150E" />
          </g>
        </svg>
      );

    case "shipwreck":
      return (
        <svg
          viewBox="0 0 600 400"
          className={`w-full h-full object-cover rounded ${className}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="600" height="400" fill="#0A1117" />
          {/* Swirling Oceanic Vortex */}
          <path
            d="M 150 400 C 150 300 450 300 450 400"
            stroke="#1B3A4B"
            strokeWidth="20"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M 210 400 C 210 330 390 330 390 400"
            stroke="#122733"
            strokeWidth="16"
            fill="none"
          />

          {/* Shattered Wooden Hull Planks */}
          <rect x="180" y="320" width="85" height="12" rx="2" fill="#3D2417" transform="rotate(35 180 320)" />
          <rect x="340" y="340" width="70" height="10" rx="2" fill="#4A2F21" transform="rotate(-25 340 340)" />
          <rect x="260" y="370" width="55" height="9" rx="2" fill="#2E1B11" transform="rotate(15 260 370)" />

          {/* Splintered Main Mast */}
          <line x1="290" y1="210" x2="310" y2="330" stroke="#40281A" strokeWidth="8" />

          {/* Heroic Silhouette of Mahajanaka Leaping into Space */}
          <g transform="translate(300, 110)">
            {/* Glowing Golden Aura of Bodhisatta */}
            <circle cx="20" cy="20" r="32" fill="#C5A15A" opacity="0.25" filter="blur(6px)" />
            {/* Head */}
            <circle cx="20" cy="6" r="10" fill="#E7D5B5" />
            {/* Muscular Leaping Torso */}
            <path d="M 15 16 L 30 28 L 22 45 L 8 32 Z" fill="#C6A77A" />
            {/* Outstretched Arms */}
            <line x1="16" y1="20" x2="-8" y2="8" stroke="#E7D5B5" strokeWidth="4" strokeLinecap="round" />
            <line x1="28" y1="25" x2="52" y2="12" stroke="#E7D5B5" strokeWidth="4" strokeLinecap="round" />
            {/* Kicking Legs Clearing Wreckage */}
            <line x1="12" y1="42" x2="-6" y2="65" stroke="#C6A77A" strokeWidth="4" strokeLinecap="round" />
            <line x1="22" y1="44" x2="16" y2="72" stroke="#C6A77A" strokeWidth="4" strokeLinecap="round" />
          </g>
        </svg>
      );

    case "seven_days":
      return (
        <svg
          viewBox="0 0 600 400"
          className={`w-full h-full object-cover rounded ${className}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="oceanSun" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4A1E17" />
              <stop offset="50%" stopColor="#A34D32" />
              <stop offset="100%" stopColor="#C5A15A" />
            </linearGradient>
          </defs>
          <rect width="600" height="250" fill="url(#oceanSun)" />
          <rect y="250" width="600" height="150" fill="#0C202C" />

          {/* Blazing Red/Copper Sun on Horizon */}
          <circle cx="300" cy="250" r="68" fill="#FDF3DA" />
          <circle cx="300" cy="250" r="85" fill="#C5A15A" opacity="0.3" />

          {/* Boundless Calming Horizon Line */}
          <line x1="0" y1="250" x2="600" y2="250" stroke="#FFE9B3" strokeWidth="1.5" />

          {/* Solitary Swimmer Cutting through Golden Waves */}
          <g transform="translate(270, 275)">
            {/* Ripple Wakes */}
            <ellipse cx="25" cy="18" rx="60" ry="8" fill="none" stroke="#C5A15A" strokeWidth="1" opacity="0.6" />
            <ellipse cx="25" cy="18" rx="95" ry="12" fill="none" stroke="#E7D5B5" strokeWidth="0.8" opacity="0.3" />
            {/* Swimmer's Head & Forward Stroking Arm */}
            <circle cx="22" cy="12" r="9" fill="#E7D5B5" />
            <path d="M 12 16 C 25 18 38 10 52 8" stroke="#C6A77A" strokeWidth="5" strokeLinecap="round" fill="none" />
          </g>
        </svg>
      );

    case "goddess_rescue":
      return (
        <svg
          viewBox="0 0 600 400"
          className={`w-full h-full object-cover rounded ${className}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="divineLight" cx="300" cy="160" r="220" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFF4D0" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#C5A15A" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0B151F" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="600" height="400" fill="#0B151F" />
          <circle cx="300" cy="160" r="220" fill="url(#divineLight)" />

          {/* Goddess Manimekhala with Floating Silk Scarves (Ajanta Style) */}
          <g transform="translate(220, 60)">
            {/* Billowing Celestial Scarves (Uttariya) */}
            <path
              d="M -30 90 Q 60 10 160 50 Q 220 100 190 180"
              stroke="#E7D5B5"
              strokeWidth="5"
              fill="none"
              opacity="0.85"
            />
            <path
              d="M 190 60 Q 90 120 -10 160"
              stroke="#C5A15A"
              strokeWidth="4"
              fill="none"
              opacity="0.7"
            />
            {/* Ornate Crown (Mukuta) */}
            <path d="M 65 30 L 78 5 L 91 30 Z" fill="#C5A15A" stroke="#FFF" strokeWidth="0.8" />
            <circle cx="78" cy="42" r="16" fill="#FCEAD0" />
            {/* Radiant Graceful Body */}
            <path d="M 68 58 C 65 100 70 140 76 190" stroke="#E7D5B5" strokeWidth="8" strokeLinecap="round" />
            {/* Arms cradling the hero */}
            <path d="M 60 80 Q 80 115 130 95" stroke="#FCEAD0" strokeWidth="6" strokeLinecap="round" fill="none" />
            {/* Rescued Mahajanaka Cradled in her Arms */}
            <g transform="translate(70, 75)">
              <circle cx="20" cy="10" r="10" fill="#C6A77A" />
              <path d="M 15 20 L 55 24 L 75 40" stroke="#C6A77A" strokeWidth="6" strokeLinecap="round" fill="none" />
            </g>
          </g>
        </svg>
      );

    case "festal_chariot":
      return (
        <svg
          viewBox="0 0 600 400"
          className={`w-full h-full object-cover rounded ${className}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="600" height="400" fill="#141E15" />

          {/* Royal Mango Grove Canopy */}
          <ellipse cx="140" cy="70" rx="120" ry="70" fill="#1E3321" />
          <ellipse cx="380" cy="50" rx="160" ry="80" fill="#253E2A" />
          <ellipse cx="520" cy="80" rx="100" ry="60" fill="#1E3321" />

          {/* Ceremonial Stone Slab where Mahajanaka Sleeps */}
          <rect x="60" y="270" width="180" height="40" rx="4" fill="#3D3025" stroke="#C5A15A" strokeWidth="1" />
          {/* Sleeping Mahajanaka */}
          <path d="M 80 265 L 210 265" stroke="#C6A77A" strokeWidth="12" strokeLinecap="round" />
          <circle cx="85" cy="255" r="10" fill="#E7D5B5" />

          {/* The Riderless Festal Chariot (Phussa-ratha) Halting */}
          <g transform="translate(270, 160)">
            {/* Chariot Body & Gilded Canopy */}
            <path d="M 120 120 L 190 120 L 180 60 L 130 60 Z" fill="#C5A15A" stroke="#E7D5B5" strokeWidth="1.5" />
            {/* Big Spoked Wheels */}
            <circle cx="155" cy="140" r="30" stroke="#C5A15A" strokeWidth="5" fill="none" />
            <circle cx="155" cy="140" r="6" fill="#A34D32" />
            {/* Bowing White Horses */}
            <g transform="translate(0, 40)">
              <path d="M 40 60 Q 20 40 10 70 L 60 70 Z" fill="#F5EFE6" />
              <path d="M 70 50 Q 50 30 35 60 L 90 60 Z" fill="#FFFFFF" />
            </g>
          </g>
        </svg>
      );

    case "palace_wedding":
      return (
        <svg
          viewBox="0 0 600 400"
          className={`w-full h-full object-cover rounded ${className}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="600" height="400" fill="#1A120C" />

          {/* Ornate Indian Royal Court Columns with Lotus Motifs */}
          <path d="M 80 0 L 80 400 M 520 0 L 520 400" stroke="#3D291C" strokeWidth="20" />
          <path d="M 60 80 Q 80 40 100 80 M 500 80 Q 520 40 540 80" stroke="#C5A15A" strokeWidth="3" fill="none" />

          {/* Recurve Bow of Videha Being Strung by Mahajanaka */}
          <g transform="translate(180, 90)">
            {/* Giant Bow */}
            <path
              d="M 50 20 C 10 90 10 160 50 230"
              stroke="#C5A15A"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
            {/* Bow String */}
            <line x1="50" y1="20" x2="50" y2="230" stroke="#E7D5B5" strokeWidth="2" strokeDasharray="3 2" />
            {/* King Mahajanaka */}
            <circle cx="95" cy="80" r="18" fill="#E7D5B5" />
            <path d="M 85 98 L 115 98 L 105 190 L 85 190 Z" fill="#C6A77A" />
            {/* Golden Crown */}
            <path d="M 85 70 L 95 50 L 105 70 Z" fill="#C5A15A" />
          </g>

          {/* Princess Sivali in Admiration */}
          <g transform="translate(370, 110)">
            <circle cx="40" cy="65" r="16" fill="#FCEAD0" />
            <path d="M 25 82 C 25 140 55 140 55 210" stroke="#A34D32" strokeWidth="18" fill="none" />
            {/* Pearl Garlands */}
            <circle cx="40" cy="95" r="5" fill="#FFF" />
            <circle cx="40" cy="110" r="5" fill="#FFF" />
          </g>
        </svg>
      );

    case "two_mango_trees":
      return (
        <svg
          viewBox="0 0 600 400"
          className={`w-full h-full object-cover rounded ${className}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="600" height="400" fill="#131712" />

          {/* Split Orchard Horizon */}
          <line x1="300" y1="40" x2="300" y2="380" stroke="#C5A15A" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.4" />

          {/* Left Tree: The Broken Fruitful Tree */}
          <g transform="translate(60, 80)">
            <text x="70" y="-10" fill="#A34D32" fontSize="11" fontFamily="sans-serif" letterSpacing="2" textAnchor="middle">
              THE FRUITFUL TREE (STRIPPED)
            </text>
            {/* Broken Trunk & Smashed Boughs */}
            <path d="M 60 280 L 70 140 L 40 90 M 70 140 L 110 110" stroke="#3D291D" strokeWidth="14" strokeLinecap="round" />
            <line x1="40" y1="90" x2="20" y2="120" stroke="#3D291D" strokeWidth="8" />
            {/* Fallen Scattered Fruit & Leaves */}
            <circle cx="30" cy="270" r="8" fill="#F5B041" />
            <circle cx="90" cy="275" r="7" fill="#F5B041" />
            <circle cx="120" cy="265" r="6" fill="#F5B041" />
          </g>

          {/* Right Tree: The Serene Barren Tree */}
          <g transform="translate(360, 80)">
            <text x="90" y="-10" fill="#4E8752" fontSize="11" fontFamily="sans-serif" letterSpacing="2" textAnchor="middle">
              THE BARREN TREE (UNTOUCHED)
            </text>
            {/* Sturdy Upright Trunk */}
            <path d="M 80 280 L 85 130" stroke="#2B1E16" strokeWidth="16" strokeLinecap="round" />
            {/* Majestic Symmetrical Foliage Canopy */}
            <ellipse cx="85" cy="80" rx="75" ry="65" fill="#24442B" />
            <ellipse cx="85" cy="75" rx="60" ry="50" fill="#305A39" />
          </g>
        </svg>
      );

    case "great_renunciation":
      return (
        <svg
          viewBox="0 0 600 400"
          className={`w-full h-full object-cover rounded ${className}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="renounceGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2A160F" />
              <stop offset="50%" stopColor="#1B1713" />
              <stop offset="100%" stopColor="#0F1712" />
            </linearGradient>
          </defs>
          <rect width="600" height="400" fill="url(#renounceGrad)" />

          {/* Palace Steps on the Left */}
          <path d="M 0 350 L 160 350 L 160 380 L 0 380 Z" fill="#2E2017" />
          <path d="M 0 310 L 120 310 L 120 350 L 0 350 Z" fill="#251912" />

          {/* Kneeling Queen Sivali Reaching Out in Tears */}
          <g transform="translate(70, 210)">
            <circle cx="30" cy="30" r="14" fill="#FCEAD0" />
            <path d="M 20 45 C 10 90 40 95 60 95" stroke="#A34D32" strokeWidth="16" fill="none" />
            <line x1="35" y1="50" x2="85" y2="40" stroke="#FCEAD0" strokeWidth="4" strokeLinecap="round" />
          </g>

          {/* Mahajanaka in Saffron Bark Robe Walking into Forest */}
          <g transform="translate(380, 140)">
            {/* Shaved Head of Ascetic */}
            <circle cx="35" cy="35" r="16" fill="#C6A77A" />
            {/* Ascetic Robe (Kashaya) */}
            <path d="M 25 52 L 48 52 L 42 190 L 18 190 Z" fill="#D36B34" />
            {/* Wooden Staff & Alms Bowl */}
            <line x1="58" y1="50" x2="58" y2="210" stroke="#5C3B24" strokeWidth="4" />
            <ellipse cx="20" cy="90" rx="9" ry="7" fill="#1C140E" />
          </g>
        </svg>
      );

    case "timeless_legacy":
    default:
      return (
        <svg
          viewBox="0 0 600 400"
          className={`w-full h-full object-cover rounded ${className}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="frescoWall" cx="300" cy="200" r="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C5A15A" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#3D291D" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#100D0B" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="600" height="400" fill="url(#frescoWall)" />

          {/* Ancient Crack Lines in Plaster Wall */}
          <path
            d="M 120 0 L 140 120 L 110 180 L 170 310 L 190 400"
            stroke="#100D0B"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M 440 0 L 410 150 L 460 270 L 430 400"
            stroke="#100D0B"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />

          {/* Bodhisattva Figure Silhouette with Lotus */}
          <g transform="translate(240, 80)">
            <circle cx="60" cy="50" r="30" fill="#E7D5B5" opacity="0.85" />
            <path d="M 45 80 C 35 150 85 150 75 240" stroke="#C5A15A" strokeWidth="26" fill="none" opacity="0.9" />
            {/* Blue Lotus Flower (Nilotpala) in Hand */}
            <circle cx="110" cy="130" r="12" fill="#4A7596" />
            <line x1="85" y1="145" x2="110" y2="130" stroke="#4E8752" strokeWidth="3" />
          </g>
        </svg>
      );
  }
}

