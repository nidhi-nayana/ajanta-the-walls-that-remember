# AJANTA — THE WALLS THAT REMEMBER
### An Immersive Journey Through the Mahajanaka Jataka
**Assignment:** Cave Paintings Storyboard — CO2  
**Subject:** Indian Art Forms & Digital Narrative Experience  
**Team Size:** 5 Members  

### 👥 Team Members Roster
| # | Name | Registration Number | Core Area of Responsibility |
|---|------|---------------------|-----------------------------|
| 1 | **Ganta Sai Prakash Reddy** | `RA2411003010004` | Historical Research & Documentation |
| 2 | **Nishant Ranjan** | `RA2411003010008` | Story Development & Scriptwriting |
| 3 | **G Vishal** | `RA2411003010010` | Visual Illustration & Storyboarding |
| 4 | **Nidhi Nayana** | `RA2411003010018` | 3D Environment & Animation |
| 5 | **Nithin Chakravarthy** | `RA2411003010033` | Frontend Development, Audio & Integration |  

---

## 🏛️ Executive Summary & Concept
**AJANTA — THE WALLS THAT REMEMBER** is a museum-grade, interactive 3D digital graphic novel experience that brings to life the celebrated 5th-century Mahajanaka Jataka tempera murals of **Ajanta Cave 1** (Maharashtra, India).

Rather than presenting a static report or typical college slideshow, this application places the visitor directly inside an ancient rock-cut Buddhist sanctuary. Through warm oil-lamp illumination, procedural WebGL environments, dynamic Web Audio soundscapes, and an authentic 12-panel visual storyboard, users discover the timeless philosophical journey of Prince Mahajanaka:
> *"Greatness is not merely found in the kingdom one conquers, but in the wisdom with which one learns to let go."*

---

## 🎨 Visual Identity & Palette
- **Deep Obsidian (`#100D0B`)**: Evokes the volcanic basalt cliff and silent interior of the Deccan caves.
- **Ancient Sandstone (`#C6A77A`)**: Warm tones of natural rock, carvings, and lime wash.
- **Burnt Sienna (`#A34D32`)**: Classical Indian red mineral earth pigment used for preparatory mural outlines.
- **Antique Gold (`#C5A15A`)**: The luster of royal ornaments, sacred crowns, and divine nimbuses.
- **Cave Charcoal (`#211B17`)**: Lampblack pigment derived from burning mustard-oil lamps.
- **Muted Parchment (`#E7D5B5`)**: The organic ground of ancient cloth, manuscripts, and highlights.
- **Deep Forest Green (`#344638`)**: Natural terra-verte pigment symbolizing the serene banyan grove of renunciation.

### Editorial Typography
- **Headings & Epigraphs**: *Cinzel* & *Cormorant Garamond* (Google Fonts)
- **Interface & Metrics**: *Inter*
- **Narrative Prose**: *DM Sans*

---

## 📖 The 7 Story Chapters
1. **Chapter 01 — THE WORLD OF AJANTA**: The Waghora river horseshoe gorge, Satavahana & Vakataka phases, rock-cut vihara architecture, and the ground-breaking tempera method of Cave 1.
2. **Chapter 02 — THE PRINCE OF MITHILA**: The tragic death of King Aritthajanaka, Queen Mother's flight to Champa in disguise, secret youth, and Mahajanaka's oath to reclaim his heritage through trade.
3. **Chapter 03 — THE GREAT VOYAGE**: Boarding a triple-masted wooden galley with 700 merchants, the monsoon tempest, ship destruction, and Mahajanaka's strategic leap from the mast.
4. **Chapter 04 — THE WILL TO SURVIVE**: Seven continuous days of swimming across the boundless ocean, the test of perseverance (*Viriya-Paramita*), and divine rescue by Goddess Manimekhala.
5. **Chapter 05 — RETURN TO MITHILA**: The sacred Festal Chariot (*Phussa-ratha*), tests of Princess Sivali (stringing the giant bow, 16 riddles), coronation, and righteous governance (*Dhammarajja*).
6. **Chapter 06 — THE AWAKENING**: The parable of the two mango trees (fruit-bearing stripped by greed vs barren peaceful), Queen Sivali's plea, and Mahajanaka's supreme renunciation (*Nekkhamma*).
7. **Chapter 07 — THE MESSAGE**: The synthesis of courage, duty, and detachment—bridging ancient 5th-century murals with modern human resilience.

---

## 🖼️ The 12 Illustrated Storyboard Panels
- **Panel 01:** The Flight from Mithila (*Resilience in Disaster*)
- **Panel 02:** The Truth of the Bloodline (*Self-Discovery & Dignity*)
- **Panel 03:** Departure from Champa Harbor (*Courageous Initiative*)
- **Panel 04:** Wrath of the Monsoon Sea (*Uncertainty of Material Fortune*)
- **Panel 05:** The Leap from the Mast (*Presence of Mind in Calamity*)
- **Panel 06:** Seven Suns of Solitary Toil (*Viriya / Heroic Perseverance*)
- **Panel 07:** The Descent of Manimekhala (*Grace Meeting Heroic Will*)
- **Panel 08:** The Chariot in the Mango Grove (*Destiny Welcoming Righteousness*)
- **Panel 09:** The Tests of Sivali & Coronation (*Wisdom Before Power*)
- **Panel 10:** The Lesson of the Mango Trees (*The Burden of Possession*)
- **Panel 11:** The Great Renunciation (*Nekkhamma / Spiritual Liberation*)
- **Panel 12:** The Eternal Murals of Cave 1 (*Legacy Beyond Time*)

---

## 🔍 Signature Features
1. **Interactive Mural Explorer (Ajanta Cave 1 Left Wall)**:
   - High-fidelity visual canvas with 5 illuminated archaeological hotspots.
   - Zoom (up to 220%) and smooth panning.
   - Detailed breakdown: Depiction, Historical Context, Pigments (Lapis Lazuli, Terra-verte, Cinnabar, Ochre), and Modern Graphic Interpretation.
   - Side-by-side comparative viewer distinguishing authentic historical frescoes from modern storyboard adaptations.
2. **Dual-Track Timeline**:
   - Track A: Archaeological history of Ajanta (2nd Century BCE to 1983 UNESCO inscription).
   - Track B: Mahajanaka's epic life milestones.
3. **Procedural 3D WebGL Canvas (Three.js & React Three Fiber)**:
   - Ancient basalt rock-cut cave entrance with chaitya arch and carved pillars.
   - Natural flickering oil-lamp lighting with realistic falloff.
   - Floating dust particles in light shafts.
   - Dynamic ocean wave mesh with animated 3D merchant vessel.
   - Sacred forest grove with mist for the renunciation sequence.
   - Graceful WebGL fallback for low-power devices.
4. **Interactive Soundscape & Narration Engine**:
   - Web Audio API procedural synthesis for cave reverberation, flickering oil-lamp flame crackle, ocean storm waves, tanpura drone, bansuri flute, and temple bells.
   - Web Speech API narration engine with live subtitle captions and pause/play controls.
5. **The Inner Mirror (Final Reflection)**:
   - Interactive reflection on Buddhist virtues (*Viriya, Nekkhamma, Paññā, Karuṇā, Sīla*).
   - Animated celebratory keepsake card with export/clipboard copy.
6. **Editable Team Credits**:
   - 5 dedicated academic contribution areas with in-place editable student names and roll numbers, persisted to local storage.

---

## 🛠️ Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS Variables
- **3D Graphics:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Audio Engine:** Native Web Audio API + Web Speech API (Text-to-Speech)
- **Animation & Transitions:** Framer Motion, GSAP
- **Icons:** Lucide React

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000

# 4. Or build and run production server
npm run build
npm run start
```

