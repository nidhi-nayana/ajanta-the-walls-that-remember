export interface ChapterData {
  id: number;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  timePeriod: string;
  location: string;
  narrative: {
    lead: string;
    paragraphs: string[];
    dialogue?: {
      speaker: string;
      quote: string;
      context: string;
    }[];
  };
  historicalContext: {
    title: string;
    caveNumber: string;
    details: string;
    artisticTechnique: string;
  };
  philosophicalTheme: {
    concept: string;
    paliTerm: string;
    explanation: string;
  };
  audioMood: string;
  visualTheme: {
    accentColor: string;
    sceneType: "cave" | "palace" | "ocean" | "storm" | "forest" | "mural";
    bgGradient: string;
  };
  interactiveFeature: {
    type: "stats" | "anatomy" | "dialogue" | "dilemma" | "comparison";
    data: any;
  };
}

export interface StoryboardPanel {
  id: number;
  sceneNumber: string;
  title: string;
  act: "Act I: Heritage & Exile" | "Act II: The Great Trial" | "Act III: Crown & Renunciation";
  narration: string;
  dialogue?: string;
  character: string;
  event: string;
  moralTheme: string;
  visualDescription: string;
  svgSceneType: "palace_exile" | "young_prince" | "merchant_harbor" | "ocean_storm" | "shipwreck" | "seven_days" | "goddess_rescue" | "festal_chariot" | "palace_wedding" | "two_mango_trees" | "great_renunciation" | "timeless_legacy";
}

export interface MuralHotspot {
  id: string;
  title: string;
  locationOnWall: string;
  xPercent: number; // For interactive map
  yPercent: number;
  depiction: string;
  historicalContext: string;
  artisticSignificance: string;
  modernInterpretation: string;
  originalArtworkRef: string;
  frescoPigments: string[];
}

export interface TimelineEvent {
  year: string;
  era: string;
  category: "history" | "narrative";
  title: string;
  description: string;
  importance: string;
}

export const CHAPTERS_DATA: ChapterData[] = [
  {
    id: 1,
    slug: "world-of-ajanta",
    number: "01",
    title: "THE WORLD OF AJANTA",
    subtitle: "Sanctuary of basalt, silence, and immortal pigment",
    timePeriod: "2nd Century BCE – 5th Century CE",
    location: "Waghora River Horseshoe Gorge, Aurangabad (Chhatrapati Sambhajinagar), Maharashtra",
    narrative: {
      lead: "In the dramatic crescent ravine carved by the Waghora River into the volcanic basalt of the Deccan Traps, Buddhist monks and guild artisans hollowed thirty rock-cut sanctuaries out of living mountain stone.",
      paragraphs: [
        "Ajanta flourished across two distinct golden epochs: the early Satavahana phase (c. 2nd–1st century BCE) embodying Hinayana simplicity, and the magnificent Vakataka renaissance under Emperor Harishena (c. 460–480 CE). Here, away from the dust of trade routes, monks meditated while master painters from imperial guilds transformed raw stone into living epics.",
        "Unlike true European fresco (buon fresco) painted into wet plaster, the Ajanta murals are dry tempera on clay-and-straw plaster. Ground basalt, cow dung, pulverized rice husks, and rock dust formed the plaster ground, smoothed with fine lime wash. Master painters sketched under-drawings in red cinnabar, then built luminous forms using natural earth pigments: yellow ochre from nearby hills, burnt sienna, lampblack, green terra-verte, and the priceless blue of lapis lazuli imported across Central Asian silk routes from Badakhshan.",
        "Cave 1, an imperial royal vihara (monastery) commissioned in the late 5th century, contains some of humanity's greatest surviving narrative paintings. On the expansive left wall of its hypostyle hall unfolds the epic of the Mahajanaka Jataka—a tale not just of royal lineage, but of the indomitable soul testing the limits of human perseverance and the supreme wisdom of letting go."
      ],
      dialogue: [
        {
          speaker: "Inscriptional Verse (Cave 17)",
          quote: "A mansion of peerless beauty on earth... to endure as long as the sun and moon shed their rays.",
          context: "Commemorative rock inscription of the Vakataka court."
        }
      ]
    },
    historicalContext: {
      title: "The Architecture of Ajanta Cave 1",
      caveNumber: "Cave 1 (Mahayana Monastery Vihara)",
      details: "Cave 1 is a 12-pillared hall measuring approximately 64 feet square, flanked by monk monastic cells, with an innermost shrine housing a monumental seated Buddha in Dharmachakra mudra. Its porch and interior walls are covered with narrative Jatakas, most prominently the Bodhisattva Padmapani, Vajrapani, and the Mahajanaka cycle.",
      artisticTechnique: "Tempera on ferruginous clay and organic binder; fluid brushwork demonstrating 'kshayavriddhi' (anatomical foreshortening) and subtle highlights creating three-dimensional volume in dim oil-lamp light."
    },
    philosophicalTheme: {
      concept: "Sacred Space & Impermanence",
      paliTerm: "Anicca",
      explanation: "Carving imperishable teachings into perishable rock, capturing the world's beauty precisely to teach detachment from it."
    },
    audioMood: "cave-drone",
    visualTheme: {
      accentColor: "#C5A15A",
      sceneType: "cave",
      bgGradient: "from-[#100D0B] via-[#1F1914] to-[#100D0B]"
    },
    interactiveFeature: {
      type: "stats",
      data: [
        { label: "Caves Carved", value: "30 Rock-cut caves" },
        { label: "River Gorge", value: "Waghora River Horseshoe" },
        { label: "Major Eras", value: "Satavahana & Vakataka" },
        { label: "Cave 1 Date", value: "c. 460–480 CE" }
      ]
    }
  },
  {
    id: 2,
    slug: "prince-of-mithila",
    number: "02",
    title: "THE PRINCE OF MITHILA",
    subtitle: "A royal lineage severed by betrayal, reborn in refuge",
    timePeriod: "Ancient Videha Kingdom",
    location: "Mithila (Ancient Bihar/Nepal border) & City of Champa",
    narrative: {
      lead: "In the prosperous realm of Mithila, King Aritthajanaka was slain in a tragic war engineered by his ambitious brother Polajanaka. The pregnant queen mother, carrying the future Bodhisatta in her womb, fled into the night disguised as a humble merchant woman.",
      paragraphs: [
        "Guided by the divine deity Sakka, the fleeing queen was granted refuge in the distant city of Champa (in Anga). There, a kind Brahmin master treated her as his own sister. Under the shelter of secret identity, she gave birth to a son whose bearing bore the unmistakable radiance of a lion prince: Mahajanaka.",
        "As a boy, Mahajanaka's extraordinary strength and noble spirit bewildered other children, who mockingly called him 'the widow’s boy.' When he demanded the truth from his mother, she revealed his true heritage: 'My son, your father was the crowned King of Mithila. The throne belongs to your bloodline by right.'",
        "Instead of despairing, the young prince forged a resolve as unyielding as steel. He asked: 'Mother, what wealth remains of our royal treasury?' She brought forth jewels she had sewn into her garments. Mahajanaka declared: 'I will take half this treasure, embark on a merchant ship to the golden land of Suvarnabhumi, amass vast trade wealth, and return to claim my rightful kingdom through honor.'"
      ],
      dialogue: [
        {
          speaker: "Queen Mother",
          quote: "The sea is treacherous, my son! Ships founder, monsters roam the deep, and few return with life.",
          context: "Pleading with young Mahajanaka on the riverbank of Champa."
        },
        {
          speaker: "Prince Mahajanaka",
          quote: "He who toils not in the face of doubt is already defeated. A true man strives until his purpose is achieved.",
          context: "Mahajanaka's pledge of heroic effort (Viriya)."
        }
      ]
    },
    historicalContext: {
      title: "Palace and Exile Depiction in Cave 1",
      caveNumber: "Cave 1 (Left Hall, Upper Section)",
      details: "The Ajanta artists painted the palace confrontation with psychological depth: the grief-stricken queen draped in diaphanous garments, the Brahmin tutor conferring blessings, and young Mahajanaka standing tall with the distinctive tiered headdress of Mithila royalty.",
      artisticTechnique: "Expressive hand mudras conveying emotional turmoil; delicate delineation of pearl necklaces and royal crowns using raised white lime droplets (mordant gilding)."
    },
    philosophicalTheme: {
      concept: "Noble Effort & Origin",
      paliTerm: "Viriya-Paramita",
      explanation: "True royalty is not defined by external palace luxury, but by dignity, honesty, and heroic perseverance in exile."
    },
    audioMood: "palace-sitar",
    visualTheme: {
      accentColor: "#C6A77A",
      sceneType: "palace",
      bgGradient: "from-[#15110E] via-[#2A1E17] to-[#100D0B]"
    },
    interactiveFeature: {
      type: "dialogue",
      data: {
        speaker: "Prince Mahajanaka",
        quote: "No enterprise bears fruit without the courage to cross the black water.",
        decision: "Would you risk your remaining inheritance on an uncertain sea voyage?"
      }
    }
  },
  {
    id: 3,
    slug: "the-great-voyage",
    number: "03",
    title: "THE GREAT VOYAGE",
    subtitle: "Into the sapphire abyss towards the Golden Land",
    timePeriod: "Age of Ancient Indian Maritime Trade",
    location: "The Bay of Bengal & Indian Ocean Sea Routes",
    narrative: {
      lead: "At the bustling maritime port of Champa, Mahajanaka loaded his merchandise onto a multi-oared, triple-masted wooden merchant galley bound for Suvarnabhumi (Southeast Asia), carrying seven hundred merchants, navigators, and crew.",
      paragraphs: [
        "For seven days the ocean was like polished lapis lazuli under favourable monsoon breezes. The crew hoisted square cotton sails, while steersmen guided the ship using pole stars and sounding leads. Mahajanaka watched the shoreline of India recede into golden mist, preparing his spirit for the trials ahead.",
        "On the seventh night, the sky bruised purple-black. Fierce squalls tore down from the horizon. Mountainous swells battered the timber hull with volcanic force, splitting the caulked oak planks. Water flooded the lower decks as panicked merchants and passengers screamed, praying frantically to various regional gods and weeping in despair.",
        "While others wept and surrendered to doom, Mahajanaka remained composed. He prepared his body: knowing the ship was doomed, he mixed ghee and sugar for sustained nourishment, wrapped his waist in oiled cloth, and ascended the main mast through the howling tempest. As the timbers shattered into matchwood, he launched himself far out into the roaring surf, clearing the deadly whirlpool of the sinking wreckage."
      ],
      dialogue: [
        {
          speaker: "Panicked Helmsman",
          quote: "The planks have cracked! The sea swallows our wealth! We are dead men!",
          context: "As the merchant galley broke upon the ocean swells."
        },
        {
          speaker: "Prince Mahajanaka",
          quote: "Fear paralyzes the limbs; courage alone sustains the swimmer.",
          context: "Mahajanaka climbing the central mast."
        }
      ]
    },
    historicalContext: {
      title: "The Celebrated Cave 1 Ship Painting",
      caveNumber: "Cave 1 (Left Wall, Center Lower Section)",
      details: "This is one of ancient India's most celebrated historical maritime depictions. It shows a three-masted wooden vessel with an outrigger, steering oars, and jars of fresh provisions, manned by crewmen in conical headgear and waistcloths, surrounded by sea creatures and swirling waves.",
      artisticTechnique: "Dynamic sinuous line work representing surging waves and marine life; rhythmic placement of oars conveying synchronized rowing and impending catastrophe."
    },
    philosophicalTheme: {
      concept: "Presence of Mind in Crisis",
      paliTerm: "Sati & Viriya",
      explanation: "Equanimity and calculated preparation while all around panic: the mind remains clear in the eye of the storm."
    },
    audioMood: "ocean-storm",
    visualTheme: {
      accentColor: "#A34D32",
      sceneType: "storm",
      bgGradient: "from-[#0D151B] via-[#14232C] to-[#100D0B]"
    },
    interactiveFeature: {
      type: "anatomy",
      data: {
        title: "Ancient Indian Maritime Vessel Features",
        items: [
          { name: "Three-Masted Rigging", desc: "Square-rigged sails made of treated organic cotton cloth." },
          { name: "Steering Oars (Karna)", desc: "Heavy quarter rudders mounted on each side of the stern." },
          { name: "Baler & Jars", desc: "Earthenware containers holding potable fresh water and clarified butter." },
          { name: "Double-Ended Hull", desc: "Clinker or sewn-plank construction with vegetable fiber caulking." }
        ]
      }
    }
  },
  {
    id: 4,
    slug: "will-to-survive",
    number: "04",
    title: "THE WILL TO SURVIVE",
    subtitle: "Seven suns upon the boundless sea: the test of perseverance",
    timePeriod: "Seven Days of Solitary Endurance",
    location: "The Open High Seas",
    narrative: {
      lead: "All seven hundred men aboard the galley perished in the storm. Alone in the endless expanse of the ocean, Prince Mahajanaka swam without pause, measuring his breath against the swell of the waves.",
      paragraphs: [
        "Day and night blurred into a continuum of salt, foam, and searing sun. For seven continuous days and seven nights, his arms and legs cut through the water like oars of bronze. Sharks and sea monsters circled his wake, but his calm, fearless aura kept them at bay.",
        "On the seventh night—the day of the Uposatha (observance of moral discipline)—Mahajanaka rinsed his mouth with seawater, resolved his mind in moral purity, and continued to swim, even when no coast or sail broke the horizon. His effort was not fueled by blind hope, but by pure duty: a man must never abandon his supreme effort while breath remains in his chest.",
        "High above the clouds, Goddess Manimekhala, appointed by the Four Guardian Kings to protect virtuous beings who fall into the boundless ocean, gazed down and was astonished. She saw a single human swimming resolutely in the vast emptiness. Descending in a halo of golden light, she tested his spirit."
      ],
      dialogue: [
        {
          speaker: "Goddess Manimekhala",
          quote: "Deep is the boundless water, and no shore can be seen. Why dost thou toil with weary limbs, when death is certain?",
          context: "Floating upon the clouds above the swimming prince."
        },
        {
          speaker: "Prince Mahajanaka",
          quote: "He who strives avoids remorse. Even if I must drown, the world shall know I struggled like a lion, not like a coward.",
          context: "Speaking while treading the great waves."
        },
        {
          speaker: "Goddess Manimekhala",
          quote: "Thou who dost not faint though all is lost: by thy noble perseverance, thou shalt never sink in the deep!",
          context: "Lifting the Bodhisatta gently into the sky."
        }
      ]
    },
    historicalContext: {
      title: "Goddess Manimekhala in Buddhist Iconography",
      caveNumber: "Cave 1 (Left Wall, Central Composition)",
      details: "The goddess is depicted hovering in mid-air with slender proportions, ornate jewel-encrusted crown, and diaphanous floating scarves (uttariya). In her arms she cradles the exhausted but luminous prince, lifting him toward the clouds.",
      artisticTechnique: "Luminous white and lapis lazuli pigments creating a divine luminescence contrasting sharply against the burnt sienna and lampblack tones of the oceanic abyss."
    },
    philosophicalTheme: {
      concept: "Unconditional Duty & Perseverance",
      paliTerm: "Appamada",
      explanation: "Heroic striving without demanding an immediate guarantee of reward. Action performed out of intrinsic virtue."
    },
    audioMood: "divine-ethereal",
    visualTheme: {
      accentColor: "#C5A15A",
      sceneType: "ocean",
      bgGradient: "from-[#10171F] via-[#201C15] to-[#100D0B]"
    },
    interactiveFeature: {
      type: "dilemma",
      data: {
        question: "When no rescue is visible on the horizon, what keeps a person moving forward?",
        options: [
          "Faith in external miracles",
          "Inner self-respect and duty to keep striving",
          "The instinctual fear of death",
          "Desire for future glory"
        ],
        canonicalAnswer: "Inner self-respect and duty: A noble person strives because striving itself is right."
      }
    }
  },
  {
    id: 5,
    slug: "return-to-mithila",
    number: "05",
    title: "RETURN TO MITHILA",
    subtitle: "The festal chariot, the royal tests, and the reclaimed throne",
    timePeriod: "Ascension to the Videha Throne",
    location: "The Royal Mango Park & Imperial Court of Mithila",
    narrative: {
      lead: "Goddess Manimekhala carried the slumbering Mahajanaka across the sky and placed him gently upon the ceremonial stone slab in the royal mango pleasure-grove of Mithila.",
      paragraphs: [
        "In Mithila, King Polajanaka had recently died without a male heir. On his deathbed, he had decreed that the throne should only pass to a man of supreme wisdom and strength who could string his titanic bow, find his sixteen hidden treasures, and win the respect of his brilliant daughter, Princess Sivali.",
        "Unable to decide among the ministers, the royal priest released the sacred Festal Chariot (Phussa-ratha)—four noble horses adorned in gold, unrestrained by reins—to seek the destined ruler. The chariot galloped through the city gates, entered the royal mango grove, and circled three times around the sleeping Mahajanaka, laying its golden shafts at his feet.",
        "Princess Sivali, wise and cautious, put the prince to rigorous trials: stringing the great bow of thousands, reading the enigmatic riddles of the kingdom's buried treasures, and answering deep questions of ethical governance. Mahajanaka accomplished every test with effortless grace and wisdom. Amidst jubilant celebrations, he married Sivali and was consecrated King of Mithila."
      ],
      dialogue: [
        {
          speaker: "Princess Sivali",
          quote: "String the great bow of Videha, which no ordinary man may bend, and interpret the sixteen riddles of the kingdom.",
          context: "Sivali presenting the royal challenges to Mahajanaka."
        },
        {
          speaker: "King Mahajanaka",
          quote: "True sovereignty is not taken by force; it is received as a sacred trust to protect every living being in the realm.",
          context: "At his coronation ceremony in Mithila."
        }
      ]
    },
    historicalContext: {
      title: "The Court of Mithila in Cave 1",
      caveNumber: "Cave 1 (Left Wall, Lower Right Section)",
      details: "This is one of the most sumptuous depictions of ancient Indian courtly life in existence. It shows King Mahajanaka and Queen Sivali seated under an ornate royal pavilion surrounded by female musicians playing flutes, cymbals, and drums, dancers in mid-pirouette, and attendants holding golden fly-whisks.",
      artisticTechnique: "Masterful spatial composition where pillared pavilions define architectural depth; figures overlap with naturalistic intimacy, showing delicate Indian silk textiles and gold jewelry."
    },
    philosophicalTheme: {
      concept: "Righteous Governance",
      paliTerm: "Dhammarajja",
      explanation: "Legitimate leadership earned through wisdom, capability, and moral righteousness rather than mere force or inheritance."
    },
    audioMood: "court-festive",
    visualTheme: {
      accentColor: "#C6A77A",
      sceneType: "palace",
      bgGradient: "from-[#1A130C] via-[#2F1F13] to-[#100D0B]"
    },
    interactiveFeature: {
      type: "stats",
      data: [
        { label: "The Chariot", value: "Phussa-ratha (Festal Chariot)" },
        { label: "The Bow", value: "Videha Bow of 1,000 men" },
        { label: "The Riddles", value: "16 Enigmas of Royal Treasure" },
        { label: "Years Reigned", value: "Years of peace and abundance" }
      ]
    }
  },
  {
    id: 6,
    slug: "the-awakening",
    number: "06",
    title: "THE AWAKENING",
    subtitle: "The parable of the two mango trees: the turn towards renunciation",
    timePeriod: "Mature Reign of Mahajanaka",
    location: "The Royal Mango Grove & Palace of Mithila",
    narrative: {
      lead: "For many years King Mahajanaka ruled Mithila with righteousness and compassion. Yet at the pinnacle of royal pleasure, a single afternoon in the royal orchard changed his destiny forever.",
      paragraphs: [
        "Riding on his royal elephant into the pleasure-grove, the King observed two majestic mango trees growing side by side. One tree was laden with luscious, golden fruit; the other was barren, crowned only with dark green foliage. The King plucked one sweet fruit and rode ahead.",
        "Immediately, the townsfolk and royal attendants rushed at the fruitful tree, breaking its branches with sticks, stripping its leaves, and shattering its bark to seize every fruit. The barren tree, however, stood untouched, serene and majestic in the breeze.",
        "Returning, Mahajanaka witnessed the broken ruin of the fruitful tree and the tranquil beauty of the barren one. A profound realization struck him like lightning: 'Possession brings destruction; the fruit of wealth attracts violence and greed. The barren tree, having nothing that men desire, enjoys unassailable peace. I am like the fruitful tree; the ascetic who possesses nothing is like the serene tree. I shall abandon this crown and seek the forest.'"
      ],
      dialogue: [
        {
          speaker: "King Mahajanaka (Internal Realization)",
          quote: "This fruitful tree is broken because it bore treasure. The barren tree stands in peace because it holds nothing. Possessions are a cage of thorns.",
          context: "Contemplating the shattered mango tree in the royal grove."
        },
        {
          speaker: "Queen Sivali",
          quote: "My Lord! Mithila is burning! The treasury is empty! Do not desert your people, do not abandon me!",
          context: "Sivali staging theatrical illusions and pleading with the King as he departs in ascetic robes."
        },
        {
          speaker: "Ascetic Mahajanaka",
          quote: "We who have no worldly goods live in immense happiness. If Mithila were burned to ashes, nothing of mine would burn.",
          context: "Mahajanaka's celebrated verse of detachment."
        }
      ]
    },
    historicalContext: {
      title: "The Renunciation Scene in Cave 1",
      caveNumber: "Cave 1 (Left Wall, Upper Right Corner)",
      details: "The Ajanta painter captured the poignant farewell with breathtaking psychological nuance. Queen Sivali gazes upward with eyes filled with tragic longing, while Mahajanaka, having shorn his locks and donned the simple saffron robe of an ascetic, steps quietly toward the wild forest with bowl in hand.",
      artisticTechnique: "Use of soft, muted earth greens and warm ochres to signify the transition from courtly luxury to forest tranquility; poignant body language reflecting grief versus transcendent calm."
    },
    philosophicalTheme: {
      concept: "Supreme Renunciation",
      paliTerm: "Nekkhamma-Paramita",
      explanation: "Recognizing that material accumulation breeds conflict, while conscious detachment yields unbreakable peace."
    },
    audioMood: "forest-flute",
    visualTheme: {
      accentColor: "#344638",
      sceneType: "forest",
      bgGradient: "from-[#0F1711] via-[#1A261D] to-[#100D0B]"
    },
    interactiveFeature: {
      type: "comparison",
      data: {
        title: "The Two Mango Trees Parable",
        treeA: {
          name: "The Fruit-Bearing Tree",
          symbol: "Material Wealth & Worldly Attachment",
          fate: "Branches broken, stripped, scarred by greed of crowds."
        },
        treeB: {
          name: "The Barren Tree",
          symbol: "Renunciation & Spiritual Simplicity",
          fate: "Unbroken, majestic, peaceful in the forest breeze."
        }
      }
    }
  },
  {
    id: 7,
    slug: "the-message",
    number: "07",
    title: "THE MESSAGE",
    subtitle: "The eternal voice etched upon ancient stone",
    timePeriod: "Contemporary Reflection & Ancient Legacy",
    location: "Ajanta Cave 1 to the Modern World",
    narrative: {
      lead: "Fifteen centuries have elapsed since an unnamed master painted Mahajanaka's journey on the basalt walls of Ajanta Cave 1. Empires rose and crumbled into dust; the caves lay hidden beneath thick jungle vines until 1819.",
      paragraphs: [
        "Yet when oil lamps or soft modern illumination strike the painted surface, the story breathes again. Mahajanaka speaks across the millennia not as a remote myth, but as an intimate mirror for our own existence.",
        "We too navigate turbulent oceans of uncertainty. We too face moments where all worldly certainty splinters like timber in a storm. And we too face the choice: whether to surrender in despair, or to swim with every fiber of our spirit, knowing that noble striving is its own victory.",
        "And when success, wealth, and worldly kingdoms are finally attained, Mahajanaka reminds us of the greatest triumph of all: the courage to know what is truly essential, to lay down the burden of possession, and to discover the unbounded tranquility of the spirit."
      ],
      dialogue: [
        {
          speaker: "Original Interpretive Closing Line",
          quote: "Greatness is not merely found in the kingdom one conquers, but in the wisdom with which one learns to let go.",
          context: "Philosophical takeaway of the Mahajanaka Jataka."
        }
      ]
    },
    historicalContext: {
      title: "Preservation and UNESCO World Heritage",
      caveNumber: "Ajanta Caves (UNESCO Site No. 242)",
      details: "Inscribed in 1983 as a UNESCO World Heritage Site, Ajanta's paintings represent the fountainhead of Asian art, influencing wall paintings across Sigiriya in Sri Lanka, Bamiyan in Afghanistan, and the Mogao Caves in Dunhuang, China.",
      artisticTechnique: "Conservation works by the Archaeological Survey of India (ASI) use non-invasive cleaning, climate control, and digital documentation to preserve these priceless pigments for posterity."
    },
    philosophicalTheme: {
      concept: "Timeless Wisdom",
      paliTerm: "Panna",
      explanation: "The synthesis of perseverance (Viriya) and detachment (Nekkhamma) culminating in true spiritual enlightenment."
    },
    audioMood: "temple-bells",
    visualTheme: {
      accentColor: "#C5A15A",
      sceneType: "mural",
      bgGradient: "from-[#14100D] via-[#241A12] to-[#100D0B]"
    },
    interactiveFeature: {
      type: "stats",
      data: [
        { label: "UNESCO Inscription", value: "1983 (Criterion i, ii, iii, vi)" },
        { label: "Centuries Preserved", value: "Over 1,500 Years" },
        { label: "Global Influence", value: "Sri Lanka to Dunhuang" },
        { label: "Core Virtue", value: "Viriya & Nekkhamma" }
      ]
    }
  }
];

export const STORYBOARD_PANELS: StoryboardPanel[] = [
  {
    id: 1,
    sceneNumber: "PANEL 01",
    title: "The Flight from Mithila",
    act: "Act I: Heritage & Exile",
    narration: "War consumes Mithila. King Aritthajanaka falls in battle. The pregnant queen mother conceals her royal jewels in her robes and slips through the burning city gates into the darkness.",
    dialogue: "“Keep safe the seed of Mithila, O gentle night.”",
    character: "Queen Mother of Mithila",
    event: "The fall of Mithila and the Queen's secret escape to Champa.",
    moralTheme: "Resilience in Disaster",
    visualDescription: "Silhouetted palace arches engulfed in smoke; the veiled Queen holding a bundle against her chest beneath a crescent moon.",
    svgSceneType: "palace_exile"
  },
  {
    id: 2,
    sceneNumber: "PANEL 02",
    title: "The Truth of the Bloodline",
    act: "Act I: Heritage & Exile",
    narration: "In Champa, young Mahajanaka confronts his mother after schoolmates taunt him. She unbinds her secret heirloom and reveals his royal lineage.",
    dialogue: "“Mother, do not hide it any longer. Who was my father? Whose blood beats in my veins?”",
    character: "Young Prince Mahajanaka & Queen Mother",
    event: "Mahajanaka learns of his royal identity and resolves to reclaim Mithila.",
    moralTheme: "Self-Discovery & Dignity",
    visualDescription: "Golden lamplight inside a humble Brahmin courtyard; the mother placing a carved royal signet ring into the boy's eager hands.",
    svgSceneType: "young_prince"
  },
  {
    id: 3,
    sceneNumber: "PANEL 03",
    title: "Departure from Champa Harbor",
    act: "Act I: Heritage & Exile",
    narration: "Ignoring all pleas to stay in safety, Mahajanaka buys cargo and boards a massive triple-masted merchant vessel bound for Suvarnabhumi.",
    dialogue: "“Wealth earned through sweat and salt shall forge the army that reclaims my throne.”",
    character: "Mahajanaka & Ship Merchants",
    event: "Embarking on the trans-oceanic voyage to the Golden Land.",
    moralTheme: "Courageous Initiative",
    visualDescription: "A grand wooden galley with carved makara prow; dockworkers loading earthenware amphorae under fluttering merchant pennants.",
    svgSceneType: "merchant_harbor"
  },
  {
    id: 4,
    sceneNumber: "PANEL 04",
    title: "Wrath of the Monsoon Sea",
    act: "Act II: The Great Trial",
    narration: "On the seventh day, dark typhoons blacken the sun. Thunder rattles the ribs of the world as monstrous swells batter the timber hull.",
    dialogue: "“The seams are splitting! Pray to the serpent gods! We are lost!”",
    character: "Sailors & Helpless Merchants",
    event: "The storm breaches the vessel in deep waters.",
    moralTheme: "Uncertainty of Material Fortune",
    visualDescription: "Surging midnight-blue waves with frothing crests crashing over the deck; lightning tearing open a purple-black sky.",
    svgSceneType: "ocean_storm"
  },
  {
    id: 5,
    sceneNumber: "PANEL 05",
    title: "The Leap from the Mast",
    act: "Act II: The Great Trial",
    narration: "While others weep and drown in the whirlpool of sinking wreckage, Mahajanaka climbs to the highest spar, coats himself in butter, and leaps far into the free sea.",
    dialogue: "“A man does not die weeping in the bilge. He meets the deep with open eyes!”",
    character: "Mahajanaka",
    event: "The ship shatters; Mahajanaka leaps clear of the deadly vortex.",
    moralTheme: "Presence of Mind in Calamity",
    visualDescription: "A heroic silhouette suspended in mid-air against a brilliant lightning bolt; shattered ship timbers swirling beneath.",
    svgSceneType: "shipwreck"
  },
  {
    id: 6,
    sceneNumber: "PANEL 06",
    title: "Seven Suns of Solitary Toil",
    act: "Act II: The Great Trial",
    narration: "All companions have perished. For seven days and seven nights, Mahajanaka swims through the vast ocean without sighting land, refusing to yield to exhaustion.",
    dialogue: "“While life endures, effort must endure. I shall swim until the horizon yields.”",
    character: "Mahajanaka & Ocean Denizens",
    event: "Seven days of continuous swimming with unwavering fortitude.",
    moralTheme: "Viriya (Heroic Perseverance)",
    visualDescription: "A vast oceanic panorama under a burning copper sun; a solitary swimmer leaving a ripple across the boundless waters.",
    svgSceneType: "seven_days"
  },
  {
    id: 7,
    sceneNumber: "PANEL 07",
    title: "The Descent of Manimekhala",
    act: "Act II: The Great Trial",
    narration: "Astounded by a mortal who toils when all hope is lost, the Sea Goddess Manimekhala descends in a shower of celestial radiance to question his heart.",
    dialogue: "“Who is this that swims when shore cannot be seen?” — “He who toils avoids remorse, O divine one.”",
    character: "Goddess Manimekhala & Mahajanaka",
    event: "Divine intervention rewards uncompromising human effort.",
    moralTheme: "Grace Meeting Heroic Will",
    visualDescription: "The ethereal goddess hovering above foaming waves, her jewel-studded scarves billowing in golden light as she lifts the prince.",
    svgSceneType: "goddess_rescue"
  },
  {
    id: 8,
    sceneNumber: "PANEL 08",
    title: "The Chariot in the Mango Grove",
    act: "Act III: Crown & Renunciation",
    narration: "Carried across the heavens to Mithila's royal park, the prince sleeps on a stone slab. The riderless Festal Chariot, sent to find a king, halts reverently at his feet.",
    dialogue: "“Behold! The Phussa-ratha has chosen! Awaken, destined sovereign of Videha!”",
    character: "Royal Priest, Ministers & Mahajanaka",
    event: "The sacred chariot identifies Mahajanaka as the destined king.",
    moralTheme: "Destiny Welcoming Righteousness",
    visualDescription: "Four magnificent white horses draped in golden bells bowing their heads before the sleeping hero beneath green banyan foliage.",
    svgSceneType: "festal_chariot"
  },
  {
    id: 9,
    sceneNumber: "PANEL 09",
    title: "The Tests of Sivali & Coronation",
    act: "Act III: Crown & Renunciation",
    narration: "Princess Sivali tests the prince's mind and might. Mahajanaka easily strings the mammoth bow of a thousand warriors and uncovers the sixteen hidden treasures.",
    dialogue: "“Thy mind is as keen as thy arms are mighty. Take my hand, and rule Mithila in righteousness.”",
    character: "Princess Sivali & King Mahajanaka",
    event: "Triumphant coronation and royal marriage in the court of Mithila.",
    moralTheme: "Wisdom Before Power",
    visualDescription: "A majestic pillared assembly; Mahajanaka effortlessly drawing a giant recurve bow while Sivali watches in admiration.",
    svgSceneType: "palace_wedding"
  },
  {
    id: 10,
    sceneNumber: "PANEL 10",
    title: "The Lesson of the Mango Trees",
    act: "Act III: Crown & Renunciation",
    narration: "Years later, riding into the orchard, the King sees one sweet mango tree stripped and smashed by greedy hands, while its barren sister stands intact and serene.",
    dialogue: "“The fruitful tree is ruined because of its fruit. The barren tree stands peaceful because it holds nothing.”",
    character: "King Mahajanaka",
    event: "The visual epiphany that awakens spiritual renunciation.",
    moralTheme: "The Burden of Possession",
    visualDescription: "Split scene: on the left, broken branches and fallen leaves; on the right, a lush, unbroken green canopy swaying peacefully.",
    svgSceneType: "two_mango_trees"
  },
  {
    id: 11,
    sceneNumber: "PANEL 11",
    title: "The Great Renunciation",
    act: "Act III: Crown & Renunciation",
    narration: "Mahajanaka shaves his head and dons coarse bark robes. Queen Sivali stages false fires and weeps to hold him, but his eyes look steadfastly towards the Himalayas.",
    dialogue: "“Happy are we who possess nothing! When Mithila burns in flames, nothing of mine is consumed.”",
    character: "Ascetic Mahajanaka & Queen Sivali",
    event: "Mahajanaka walks away from the throne to enter the ascetic life.",
    moralTheme: "Nekkhamma (Spiritual Liberation)",
    visualDescription: "The crowned Queen kneeling in tears on palace steps, reaching out towards the bare-chested ascetic walking serenely into forest mist.",
    svgSceneType: "great_renunciation"
  },
  {
    id: 12,
    sceneNumber: "PANEL 12",
    title: "The Eternal Murals of Cave 1",
    act: "Act III: Crown & Renunciation",
    narration: "Fifteen hundred years later in Ajanta Cave 1, the brushstrokes of ancient masters still preserve Mahajanaka's lesson: that true victory lies not in taking kingdoms, but in letting go.",
    dialogue: "“Greatness is not merely found in the kingdom one conquers, but in the wisdom with which one learns to let go.”",
    character: "The Ancient Painters & The Modern Seeker",
    event: "The timeless echo of the Jataka mural in the modern world.",
    moralTheme: "Legacy Beyond Time",
    visualDescription: "A seamless transition from warm rock-cut cave paintings illuminated by flickering oil lamps to a museum gallery of contemplative wonder.",
    svgSceneType: "timeless_legacy"
  }
];

export const MURAL_HOTSPOTS: MuralHotspot[] = [
  {
    id: "mural-spot-1",
    title: "The Royal Court of Mithila & The Dancer",
    locationOnWall: "Left Hall Wall, Lower Section",
    xPercent: 72,
    yPercent: 65,
    depiction: "A lavish palace pavilion where King Mahajanaka sits attended by Queen Sivali. Before them, a female dancer in a swirl of diaphanous silk performs to an ensemble of seated female musicians playing transverse flutes, mridangam drums, and finger cymbals.",
    historicalContext: "Attributed to the reign of Vakataka Emperor Harishena (c. 475 CE). Demonstrates the pinnacle of classical Indian court culture, musical theory (Gandharva Veda), and sophisticated urban lifestyle.",
    artisticSignificance: "Celebrated for its complex group composition and dynamic 'tribhanga' (triple-bend) posture of the dancer. Highlights on the limbs are achieved through delicate blending of yellow ochre and lime wash.",
    modernInterpretation: "Our storyboard reinterprets this scene in Panel 09 ('The Tests of Sivali & Coronation') to illustrate the intoxicating allure of worldly success that Mahajanaka eventually transcends.",
    originalArtworkRef: "Cave 1, Mahajanaka Jataka — Palace Court & Musical Troupe (UNESCO Archive Ref #AJA-C1-042)",
    frescoPigments: ["Yellow Ochre", "Lampblack", "Lime White", "Burnt Sienna"]
  },
  {
    id: "mural-spot-2",
    title: "The Shipwreck & Ocean Tempest",
    locationOnWall: "Left Hall Wall, Lower Center",
    xPercent: 35,
    yPercent: 78,
    depiction: "A large three-masted wooden merchant vessel pitching violently into foaming waves. Crewmen in panic throw cargo overboard while giant sea monsters (makaras) and fish swim around the splintering hull.",
    historicalContext: "Reflects ancient India's flourishing maritime trade with Suvarnabhumi (Southeast Asia) and the Mediterranean Roman world during the early centuries of the Common Era.",
    artisticSignificance: "One of the earliest and most detailed representations of a seafaring sailing ship in ancient Indian art. Shows triangular sails, steerage oars, and the structural rigging of Indian vessels.",
    modernInterpretation: "Translated in Panel 04 and Chapter 03 into an interactive 3D particle and wave sequence, capturing the exact moment of catastrophe and Mahajanaka's heroic leap.",
    originalArtworkRef: "Cave 1, Mahajanaka Jataka — The Shipwreck (ASI Archaeological Survey Record #1898-AJ1)",
    frescoPigments: ["Terra-verte (Green)", "Charcoal", "Red Ochre", "Lapis Lazuli (traces)"]
  },
  {
    id: "mural-spot-3",
    title: "The Divine Rescue by Goddess Manimekhala",
    locationOnWall: "Left Hall Wall, Central Vertical Field",
    xPercent: 24,
    yPercent: 45,
    depiction: "Goddess Manimekhala, radiant with celestial jewelry and floating heavenly garments, cradles the exhausted Mahajanaka in her arms as she levitates above the dark ocean surf toward the clouds.",
    historicalContext: "Manimekhala is a revered guardian deity of the southern ocean in Buddhist and early Tamil literature (celebrated in the Tamil epic Manimekalai). She aids only those possessing unwavering virtue.",
    artisticSignificance: "Exquisite application of imported lapis lazuli for the sky and celestial drapery. The contrast between the floating weightlessness of the goddess and the limp, relaxed form of the prince is an artistic tour de force.",
    modernInterpretation: "Interpreted in Panel 07 as the philosophical intersection of human effort (Viriya) and grace—where destiny answers only after every drop of human capability has been expended.",
    originalArtworkRef: "Cave 1, Mahajanaka Jataka — Rescue by Manimekhala (IGNCA Multimedia Digital Archive)",
    frescoPigments: ["Badakhshan Lapis Lazuli", "White Gypsum", "Gold Mordant", "Burnt Umber"]
  },
  {
    id: "mural-spot-4",
    title: "The Flight of the Queen Mother",
    locationOnWall: "Left Hall Wall, Upper Left Corner",
    xPercent: 12,
    yPercent: 25,
    depiction: "The veiled Queen of Mithila escaping through the city gate on foot, accompanied by a lone loyal attendant, clutching her jewelry bundle under the cloak of night.",
    historicalContext: "Illustrates the turbulent dynastic warfare of the pre-Mauryan Mahajanapadas and the vulnerability of royal lines when a king dies without a succession plan.",
    artisticSignificance: "Masterful emotional restraint: grief and fear are conveyed entirely through the bowed posture of the head, the clutching of the veil, and downcast eyes (adhomukha).",
    modernInterpretation: "Sets the emotional anchor of our graphic novel in Panel 01, establishing the tragic exile that drives Mahajanaka's lifelong journey of restoration.",
    originalArtworkRef: "Cave 1, Upper Register Mural Fragment (Sahapedia Archive Ref #AJ-C1-018)",
    frescoPigments: ["Red Cinnabar", "Raw Ochre", "Carbon Black"]
  },
  {
    id: "mural-spot-5",
    title: "The Sermon of Renunciation & Sivali's Sorrow",
    locationOnWall: "Left Hall Wall, Upper Right Register",
    xPercent: 88,
    yPercent: 28,
    depiction: "The newly consecrated king, having shorn his hair and taken the ascetic's staff, walks steadily towards the forest. Queen Sivali gazes after him with clasped hands, her face etched with tragic devotion.",
    historicalContext: "The climax of the Mahajanaka Jataka, embodying the Buddhist ideal of Nekkhamma (renunciation) as the highest evolution of kingship—surpassing political conquest with spiritual conquest.",
    artisticSignificance: "Psychological realism unprecedented in 5th-century global art: the tension between worldly love and spiritual duty is rendered without melodrama, through fluid contour lines and subtle kshayavriddhi shading.",
    modernInterpretation: "Forms the emotional centerpiece of Chapter 06 and Panel 11, immortalizing the eternal quote: 'We who possess nothing live in supreme happiness.'",
    originalArtworkRef: "Cave 1, The Departure of Mahajanaka (Dieter Schlingloff Reference Catalog Pl. 14)",
    frescoPigments: ["Burnt Sienna", "Terra-verte", "Kaolin Clay", "Yellow Ochre"]
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "c. 2nd–1st Century BCE",
    era: "Satavahana Dynasty",
    category: "history",
    title: "The First Phase of Ajanta",
    description: "Earliest Hinayana (Theravada) chaityas and viharas carved into the basalt cliff (Caves 9, 10, 12, 13, 15A) under the patronage of Satavahana kings and merchant guilds.",
    importance: "Established Ajanta as a serene monastic trade-route sanctuary."
  },
  {
    year: "Narrative Stage 01",
    era: "Age of the Jatakas",
    category: "narrative",
    title: "Tragedy in Mithila & Flight to Champa",
    description: "King Aritthajanaka of Mithila is slain; the pregnant Queen escapes secretly to Champa where Mahajanaka is born in humble obscurity.",
    importance: "The genesis of the Bodhisatta's heroic determination."
  },
  {
    year: "Narrative Stage 02",
    era: "Age of the Jatakas",
    category: "narrative",
    title: "The Great Ocean Voyage & 7-Day Struggle",
    description: "Mahajanaka departs for Suvarnabhumi. The ship shatters in a monsoon storm; he swims alone for seven days until rescued by Goddess Manimekhala.",
    importance: "The ultimate trial of Viriya-Paramita (heroic perseverance)."
  },
  {
    year: "Narrative Stage 03",
    era: "Age of the Jatakas",
    category: "narrative",
    title: "The Chariot, The Tests & Coronation",
    description: "The riderless Festal Chariot finds him in Mithila's mango grove. He strings the giant bow, solves the 16 riddles, marries Sivali, and is crowned King.",
    importance: "Ascension through wisdom, strength, and ethical legitimacy."
  },
  {
    year: "Narrative Stage 04",
    era: "Age of the Jatakas",
    category: "narrative",
    title: "The Two Mango Trees & Renunciation",
    description: "Observing the stripped fruit-bearing tree versus the tranquil barren tree, Mahajanaka abdicates the throne to pursue ascetic enlightenment in the forest.",
    importance: "The philosophical climax of Nekkhamma (detachment)."
  },
  {
    year: "c. 460–480 CE",
    era: "Vakataka Dynasty",
    category: "history",
    title: "The Golden Vakataka Renaissance",
    description: "Under Emperor Harishena and his visionary minister Varahadeva, Cave 1 is excavated and painted with the magnificent Mahajanaka Jataka cycle.",
    importance: "The creation of humanity's finest surviving ancient tempera frescoes."
  },
  {
    year: "c. 640 CE",
    era: "Tang Dynasty / Harsha Era",
    category: "history",
    title: "Xuanzang's Chronicle of Ajanta",
    description: "The Chinese Buddhist pilgrim monk Xuanzang (Hiuen Tsang) documents the fame of the Maharashtrian cliff-monastery and its towering stone Buddha statues.",
    importance: "First major international travelogue referencing Ajanta's grandeur."
  },
  {
    year: "April 28, 1819",
    era: "Colonial Rediscovery",
    category: "history",
    title: "Rediscovery by Captain John Smith",
    description: "While hunting tigers in the Waghora ravine, British officer John Smith spots the arch of Cave 10 obscured by jungle vines, inscribing his name on a pillar.",
    importance: "Ajanta re-enters modern global consciousness after centuries of silent preservation."
  },
  {
    year: "1983",
    era: "Modern Era",
    category: "history",
    title: "UNESCO World Heritage Inscription",
    description: "Ajanta Caves are designated as UNESCO World Heritage Site #242, recognized as masterpieces of human creative genius and classical Buddhist art.",
    importance: "Global protection and conservation under ASI and international scrutiny."
  }
];

export const REFLECTION_VALUES = [
  {
    id: "viriya",
    paliName: "Viriya (Heroic Perseverance)",
    title: "The Swimmer of the Boundless Ocean",
    summary: "The courage to strive relentlessly in the face of impossible odds, even when no shore or rescue is in sight.",
    quote: "“He who toils avoids remorse. A noble person strives because striving itself is right.”",
    modernContext: "In an era of instant gratification and quick discouragement, Viriya teaches that true character is forged in silent, stubborn persistence through long dark waters.",
    blessing: "May you possess the lion-heart of Mahajanaka to swim through life's storms without fear."
  },
  {
    id: "nekkhamma",
    paliName: "Nekkhamma (Renunciation & Detachment)",
    title: "The Wisdom of the Barren Mango Tree",
    summary: "Recognizing that possessing more often leads to conflict and vulnerability; finding freedom by holding things lightly.",
    quote: "“Greatness is not merely found in the kingdom one conquers, but in the wisdom with which one learns to let go.”",
    modernContext: "In our consumer culture where worth is measured by accumulation, Nekkhamma reminds us that peace is found not in more goods, but in fewer attachments.",
    blessing: "May you cultivate the clarity to let go of what weighs your spirit down and discover boundless inner peace."
  },
  {
    id: "panna",
    paliName: "Paññā (Deep Wisdom & Discernment)",
    title: "The Stringer of the Ancient Bow",
    summary: "Insight that penetrates surface illusions to understand the true nature of impermanence, duty, and truth.",
    quote: "“String the bow of truth, for power without discernment is but a blind beast.”",
    modernContext: "When flooded with information and polarized opinions, Paññā offers the quiet discernment to separate fleeting illusions from eternal truth.",
    blessing: "May wisdom guide your every choice, illuminating the path where intellect and compassion meet."
  },
  {
    id: "karuna",
    paliName: "Karuṇā (Active Compassion)",
    title: "The Sovereign as Guardian",
    summary: "Leadership rooted not in dominance or prestige, but in unconditional care for every living being in the realm.",
    quote: "“True sovereignty is received as a sacred trust to protect every living being.”",
    modernContext: "A call for ethical leadership across families, communities, and nations—governing with empathy rather than coercion.",
    blessing: "May your heart remain open and soft, responding to the suffering of the world with courageous kindness."
  },
  {
    id: "sila",
    paliName: "Sīla (Moral Integrity)",
    title: "The Uposatha Pledge in the Waves",
    summary: "Upholding ethical principles and clean conscience even when stranded alone in the deepest abyss with no one watching.",
    quote: "“Even in the salt spray of the abyss, the heart keeps its clean pledge.”",
    modernContext: "Integrity is who you are in the dark when no audience or algorithm is grading you.",
    blessing: "May your actions remain anchored in unshakeable truth, upright and pure in every season."
  }
];

export const SCHOLARLY_REFERENCES = [
  {
    title: "UNESCO World Heritage Centre",
    source: "Ajanta Caves Listing (Site No. 242)",
    link: "https://whc.unesco.org/en/list/242/",
    note: "Official documentation on the architectural and artistic criteria (i, ii, iii, vi) under which Ajanta was inscribed in 1983."
  },
  {
    title: "Ministry of Culture, Government of India",
    source: "Ajanta Caves National Heritage Portal",
    link: "https://culture.gov.in/ajanta-caves",
    note: "Official heritage documentation by the Archaeological Survey of India (ASI) regarding excavation phases, conservation methods, and rock structure."
  },
  {
    title: "Indira Gandhi National Centre for the Arts (IGNCA)",
    source: "Ajanta Interactive Multimedia Project",
    link: "https://ignca.gov.in/ajanta/",
    note: "High-resolution digital mapping of Cave 1 murals, iconographic classification of the Jatakas, and Sanskrit inscriptional studies."
  },
  {
    title: "Sahapedia Overview of Ajanta",
    source: "Ajanta Caves Cultural Archive",
    link: "https://www.sahapedia.org/ajanta-caves-overview",
    note: "Comprehensive scholarly articles analyzing the political patronage of the Vakatakas, mineral pigments, and socio-religious contexts."
  },
  {
    title: "University of Lucknow — Department of Ancient Indian History",
    source: "The Art of Ajanta (Prof. Piyush Bhargava)",
    link: "https://www.lkouniv.ac.in/site/writereaddata/siteContent/202004021930363754piyush_bhargava_ART_OF_AJANTA.pdf",
    note: "In-depth academic monograph discussing tempera methods, kshayavriddhi (foreshortening), and the narrative organization of the Mahajanaka Jataka."
  },
  {
    title: "Studies in the Ajanta Paintings",
    source: "Dieter Schlingloff (1987, 2013)",
    link: "https://brill.com/display/title/3588",
    note: "Authoritative identification and narrative alignment of the Mahajanaka mural segments on the left wall of Cave 1 with classical Pali and Sanskrit Jataka texts."
  },
  {
    title: "The Jātaka or Stories of the Buddha's Former Births",
    source: "Edward B. Cowell (Ed.), Vol. VI, Jātaka No. 539 (Mahājanaka Jātaka)",
    link: "https://www.sacred-texts.com/bud/j6/j6003.htm",
    note: "Pali text translation detailing the canonical dialogues between Mahajanaka, Queen Mother, Manimekhala, and Sivali."
  }
];

export const GLOSSARY_TERMS = [
  { term: "Jātaka", definition: "A canonical Buddhist narrative genre chronicling the former lives and moral tests of Gautama Buddha as a Bodhisatta cultivating the perfections (paramitas)." },
  { term: "Bodhisatta / Bodhisattva", definition: "A being dedicated to attaining supreme enlightenment (Bodhi) for the liberation of all sentient beings, striving through lifetimes of virtue." },
  { term: "Tempera", definition: "A painting technique using pigments bound with organic mediums (gum, animal glue, or vegetable resin) applied to a dry plaster surface, distinct from buon fresco." },
  { term: "Kshayavṛddhi", definition: "Classical Indian artistic principle of anatomical foreshortening and visual depth, praised in the ancient treatise Chitrasutra of the Vishnudharmottara Purana." },
  { term: "Vihara", definition: "A rock-cut or structural Buddhist residential monastery containing a central communal hall flanked by monks' meditation cells and an inner shrine." },
  { term: "Chaitya", definition: "A rock-cut Buddhist prayer or congregational sanctuary hall with an apsidal end housing a stupa for circumambulation (pradakshina)." },
  { term: "Nekkhamma", definition: "The Pali perfection of renunciation: relinquishing worldly attachments, sensual cravings, and pride in favor of spiritual equanimity." },
  { term: "Viriya", definition: "Heroic spiritual energy, unwavering effort, and determination to overcome adversity and walk the righteous path regardless of hardship." },
  { term: "Manimekhalā", definition: "The ancient Buddhist and South Indian guardian goddess of the oceans, tasked by the Four Heavenly Kings to rescue virtuous souls from shipwreck." },
  { term: "Phussa-ratha", definition: "The ceremonial Festal Chariot in ancient Indian folklore, released without a driver to miraculously seek out a worthy sovereign when a throne falls vacant." },
  { term: "Tribhaṅga", definition: "The graceful 'triple-bend' aesthetic posture in Indian sculpture and painting where the body bends at the neck, waist, and knee, conveying fluid motion." },
  { term: "Lapis Lazuli", definition: "A prized deep-blue metamorphic rock pigment (ultramarine) imported along the silk routes from Badakhshan (Afghanistan), reserved for divine figures at Ajanta." }
];

export const TEAM_MEMBERS_DEFAULT = [
  {
    id: 1,
    roleTitle: "1. Historical Research & Documentation",
    namePlaceholder: "Ganta Sai Prakash Reddy",
    rollPlaceholder: "RA2411003010004",
    responsibilities: "Canonical Mahajanaka Jataka textual research, Ajanta Cave 1 Vakataka dynasty historical chronology, UNESCO documentation, and scholarly citations verification."
  },
  {
    id: 2,
    roleTitle: "2. Story Development & Scriptwriting",
    namePlaceholder: "Nishant Ranjan",
    rollPlaceholder: "RA2411003010008",
    responsibilities: "Narrative pacing across 7 cinematic chapters, dialogue adaptation from Cowell's translation, philosophical theme structuring (Viriya, Nekkhamma), and closing interpretive message."
  },
  {
    id: 3,
    roleTitle: "3. Visual Illustration & Storyboarding",
    namePlaceholder: "G Vishal",
    rollPlaceholder: "RA2411003010010",
    responsibilities: "12-panel graphic novel design, character consistency (Mahajanaka, Queen Mother, Sivali, Manimekhala), Ajanta fresco color palette adaptation, and mural hotspot comparative art."
  },
  {
    id: 4,
    roleTitle: "4. 3D Environment & Animation",
    namePlaceholder: "Nidhi Nayana",
    rollPlaceholder: "RA2411003010018",
    responsibilities: "React Three Fiber cave entrance geometry, volumetric oil-lamp illumination, atmospheric dust particle physics, procedural 3D ocean/storm system, and camera dolly transitions."
  },
  {
    id: 5,
    roleTitle: "5. Frontend Development, Audio & Integration",
    namePlaceholder: "Nithin Chakravarthy",
    rollPlaceholder: "RA2411003010033",
    responsibilities: "Next.js App Router architecture, Web Audio API soundscape synthesis, Web Speech API narration engine, GSAP/Lenis smooth scroll orchestration, and responsive accessibility."
  }
];

