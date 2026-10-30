"use client";

import React, { useState, useEffect } from "react";
import {
  TEAM_MEMBERS_DEFAULT,
  SCHOLARLY_REFERENCES,
  GLOSSARY_TERMS,
} from "@/lib/story-data";
import {
  Users,
  BookOpen,
  ExternalLink,
  Edit2,
  Check,
  ShieldCheck,
  Sparkles,
  Award,
  GraduationCap,
} from "lucide-react";
import { audioManager } from "@/lib/audio";

export function TeamAndSources() {
  const [teamMembers, setTeamMembers] = useState(TEAM_MEMBERS_DEFAULT);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"team" | "sources" | "glossary">("team");

  // Load persisted member names from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem("ajanta_team_credits");
      if (saved) {
        const parsed = JSON.parse(saved);
        // If saved contains generic placeholder, overwrite with official roster
        if (parsed && parsed.length > 0 && !parsed[0].namePlaceholder.includes("Team Member")) {
          setTeamMembers(parsed);
        } else {
          setTeamMembers(TEAM_MEMBERS_DEFAULT);
          localStorage.setItem("ajanta_team_credits", JSON.stringify(TEAM_MEMBERS_DEFAULT));
        }
      } else {
        localStorage.setItem("ajanta_team_credits", JSON.stringify(TEAM_MEMBERS_DEFAULT));
      }
    } catch (e) {}
  }, []);

  const handleResetRoster = () => {
    setTeamMembers(TEAM_MEMBERS_DEFAULT);
    try {
      localStorage.setItem("ajanta_team_credits", JSON.stringify(TEAM_MEMBERS_DEFAULT));
    } catch (e) {}
    audioManager.playSfx("bell");
  };

  const handleUpdateName = (id: number, newName: string, newRoll: string) => {
    const updated = teamMembers.map((m) =>
      m.id === id ? { ...m, namePlaceholder: newName, rollPlaceholder: newRoll } : m
    );
    setTeamMembers(updated);
    try {
      localStorage.setItem("ajanta_team_credits", JSON.stringify(updated));
    } catch (e) {}
  };

  const handleSaveEdit = () => {
    setEditingId(null);
    audioManager.playSfx("click");
  };

  return (
    <footer
      id="team-credits-section"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20 text-parchment border-t border-antiqueGold/25"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-antiqueGold/30 bg-caveCharcoal/60 mb-4">
          <GraduationCap className="w-3.5 h-3.5 text-antiqueGold" />
          <span className="font-cinzel text-xs tracking-[0.2em] text-sandstone uppercase">
            Academic Attribution • Cave Paintings Storyboard CO2
          </span>
        </div>
        <h2 className="font-cinzel text-4xl sm:text-5xl font-bold tracking-[0.15em] mb-4 text-parchment">
          SCHOLARSHIP & TEAM CREDITS
        </h2>
        <p className="font-cormorant text-xl sm:text-2xl text-sandstone italic mb-4">
          Research, Creative Direction, and Academic Foundation
        </p>

        {/* View Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setActiveTab("team")}
            className={`px-4 py-2 rounded-sm text-xs font-cinzel tracking-wider uppercase transition-colors flex items-center gap-1.5 ${
              activeTab === "team"
                ? "bg-antiqueGold text-obsidian font-bold"
                : "bg-caveCharcoal text-parchment/75 border border-antiqueGold/20"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            Team of Five (Editable)
          </button>
          <button
            onClick={() => setActiveTab("sources")}
            className={`px-4 py-2 rounded-sm text-xs font-cinzel tracking-wider uppercase transition-colors flex items-center gap-1.5 ${
              activeTab === "sources"
                ? "bg-antiqueGold text-obsidian font-bold"
                : "bg-caveCharcoal text-parchment/75 border border-antiqueGold/20"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Scholarly Sources & References
          </button>
          <button
            onClick={() => setActiveTab("glossary")}
            className={`px-4 py-2 rounded-sm text-xs font-cinzel tracking-wider uppercase transition-colors flex items-center gap-1.5 ${
              activeTab === "glossary"
                ? "bg-antiqueGold text-obsidian font-bold"
                : "bg-caveCharcoal text-parchment/75 border border-antiqueGold/20"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Glossary of Ancient Terms
          </button>
        </div>
      </div>

      {/* 1. TEAM CREDITS VIEW (5 MEMBERS WITH IN-PLACE EDITING) */}
      {activeTab === "team" && (
        <div className="space-y-6">
          <div className="p-4 rounded bg-caveCharcoal/60 border border-antiqueGold/25 text-xs text-parchment/75 flex flex-wrap items-center justify-between gap-3">
            <span>
              <strong>Academic Team Roster:</strong> Official university project evaluation roster (CO2 — Cave Paintings Storyboard). Click the edit icon to customize if required.
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleResetRoster}
                className="px-2.5 py-1 rounded bg-obsidian border border-antiqueGold/40 text-[10px] font-cinzel text-antiqueGold hover:bg-antiqueGold/20 transition-colors uppercase tracking-wider"
              >
                Reset to Official Roster
              </button>
              <span className="font-cinzel text-antiqueGold text-[11px] tracking-wider uppercase hidden sm:inline">
                Autosaved
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => {
              const isEditing = editingId === member.id;
              return (
                <div
                  key={member.id}
                  className="fresco-panel p-6 rounded-sm border border-antiqueGold/30 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-cinzel font-bold text-antiqueGold uppercase tracking-wider">
                        Area {member.id} of 5
                      </span>
                      <button
                        onClick={() => {
                          if (isEditing) {
                            handleSaveEdit();
                          } else {
                            setEditingId(member.id);
                          }
                        }}
                        title={isEditing ? "Save Name" : "Edit Name"}
                        className="p-1.5 rounded hover:bg-caveCharcoal text-sandstone hover:text-antiqueGold transition-colors"
                      >
                        {isEditing ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Edit2 className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <h3 className="font-cinzel text-sm sm:text-base font-bold text-parchment mb-3">
                      {member.roleTitle}
                    </h3>

                    {/* Member Name Field */}
                    <div className="mb-4">
                      {isEditing ? (
                        <div className="space-y-2">
                          <label className="text-[10px] font-cinzel text-sandstone uppercase block">
                            Student / Member Name
                          </label>
                          <input
                            type="text"
                            value={member.namePlaceholder}
                            onChange={(e) =>
                              handleUpdateName(member.id, e.target.value, member.rollPlaceholder)
                            }
                            className="w-full bg-obsidian border border-antiqueGold/60 rounded px-3 py-1.5 text-xs font-dmsans text-parchment focus:outline-none focus:ring-1 focus:ring-antiqueGold"
                          />
                          <label className="text-[10px] font-cinzel text-sandstone uppercase block">
                            Roll Number / ID
                          </label>
                          <input
                            type="text"
                            value={member.rollPlaceholder}
                            onChange={(e) =>
                              handleUpdateName(member.id, member.namePlaceholder, e.target.value)
                            }
                            className="w-full bg-obsidian border border-antiqueGold/60 rounded px-3 py-1.5 text-xs font-dmsans text-parchment focus:outline-none focus:ring-1 focus:ring-antiqueGold"
                          />
                        </div>
                      ) : (
                        <div className="p-3 rounded bg-obsidian/80 border border-sandstone/25">
                          <div className="font-dmsans text-sm font-semibold text-sandstone">
                            {member.namePlaceholder}
                          </div>
                          <div className="font-dmsans text-xs text-parchment/50">
                            {member.rollPlaceholder}
                          </div>
                        </div>
                      )}
                    </div>

                    <p className="font-dmsans text-xs text-parchment/70 leading-relaxed">
                      {member.responsibilities}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. SCHOLARLY REFERENCES VIEW */}
      {activeTab === "sources" && (
        <div className="space-y-4">
          <div className="p-4 rounded bg-caveCharcoal/60 border border-antiqueGold/25 text-xs text-parchment/75">
            <strong>Bibliographical Standards:</strong> All narrative reconstructions, inscriptional
            quotes, and iconographic alignments strictly follow peer-reviewed historical monographs
            and governmental heritage repositories.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SCHOLARLY_REFERENCES.map((ref, idx) => (
              <div
                key={idx}
                className="fresco-panel p-5 rounded-sm border border-antiqueGold/25 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-cinzel text-sm sm:text-base font-bold text-parchment">
                      {ref.title}
                    </h3>
                    <a
                      href={ref.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-antiqueGold hover:text-white transition-colors"
                      title="Open Official Citation Link"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="text-xs font-dmsans text-sandstone font-medium mb-2">
                    {ref.source}
                  </div>
                  <p className="text-xs font-dmsans text-parchment/70 leading-relaxed">
                    {ref.note}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-antiqueGold/15 text-[11px] font-mono text-sandstone/60 truncate">
                  {ref.link}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. GLOSSARY VIEW */}
      {activeTab === "glossary" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {GLOSSARY_TERMS.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded bg-caveCharcoal/60 border border-antiqueGold/20"
            >
              <h4 className="font-cinzel text-sm font-bold text-antiqueGold mb-1">
                {item.term}
              </h4>
              <p className="font-dmsans text-xs text-parchment/75 leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Final Academic Copyright & Colophon */}
      <div className="mt-16 pt-8 border-t border-antiqueGold/20 text-center text-xs font-dmsans text-parchment/50 space-y-2">
        <p className="font-cinzel tracking-widest text-sandstone uppercase">
          Project: AJANTA — THE WALLS THAT REMEMBER • Assignment CO2: Cave Paintings Storyboard
        </p>
        <p>
          Created for university evaluation • Built with Next.js, Three.js, React Three Fiber, GSAP,
          Lenis, and Web Audio API.
        </p>
      </div>
    </footer>
  );
}

