// Audio Engine using Web Audio API for atmospheric soundscapes & procedural generation

export type SoundscapeType = 
  | "cave-drone" 
  | "palace-sitar" 
  | "ocean-storm" 
  | "divine-ethereal" 
  | "court-festive" 
  | "forest-flute" 
  | "temple-bells"
  | "silence";

class AudioManager {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private masterGain: GainNode | null = null;
  private currentSoundscape: SoundscapeType = "silence";
  private activeNodes: { [key: string]: any } = {};
  private currentVolume: number = 0.65;
  private userHasInteracted: boolean = false;

  private initContext() {
    if (typeof window === "undefined") return;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.currentVolume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    this.userHasInteracted = true;
  }

  public setMasterVolume(vol: number) {
    this.currentVolume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(
        this.isMuted ? 0 : this.currentVolume,
        this.ctx.currentTime,
        0.05
      );
    }
  }

  public getMasterVolume(): number {
    return this.currentVolume;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(
        this.isMuted ? 0 : this.currentVolume,
        this.ctx.currentTime,
        0.05
      );
    }
    return this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public getCurrentSoundscape(): SoundscapeType {
    return this.currentSoundscape;
  }

  // Stop currently active synthesizers with graceful fadeout
  private stopActiveSoundscape(fadeTime = 1.0) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    
    // Smoothly ramp down gains
    Object.values(this.activeNodes).forEach((node: any) => {
      try {
        if (node.gain && node.gain.setTargetAtTime) {
          node.gain.setTargetAtTime(0, now, fadeTime / 3);
        }
        if (node.stop) {
          setTimeout(() => {
            try { node.stop(); } catch (e) {}
          }, fadeTime * 1000);
        }
      } catch (e) {
        // Node already stopped
      }
    });

    this.activeNodes = {};
  }

  // Crossfade into a new soundscape
  public playSoundscape(type: SoundscapeType, crossfadeSec = 1.2) {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    if (this.currentSoundscape === type && Object.keys(this.activeNodes).length > 0) {
      return; // Already playing
    }

    this.stopActiveSoundscape(crossfadeSec);
    this.currentSoundscape = type;

    const ctx = this.ctx;
    const now = ctx.currentTime;
    const sceneGain = ctx.createGain();
    sceneGain.gain.setValueAtTime(0, now);
    sceneGain.gain.setTargetAtTime(0.7, now, crossfadeSec / 2);
    sceneGain.connect(this.masterGain);
    this.activeNodes["sceneGain"] = sceneGain;

    switch (type) {
      case "cave-drone":
        this.buildCaveDrone(sceneGain);
        break;
      case "palace-sitar":
        this.buildPalaceSitarDrone(sceneGain);
        break;
      case "ocean-storm":
        this.buildOceanStorm(sceneGain);
        break;
      case "divine-ethereal":
        this.buildDivineEthereal(sceneGain);
        break;
      case "court-festive":
        this.buildCourtFestive(sceneGain);
        break;
      case "forest-flute":
        this.buildForestFluteDrone(sceneGain);
        break;
      case "temple-bells":
        this.buildTempleBells(sceneGain);
        break;
      case "silence":
      default:
        break;
    }
  }

  // CAVE DRONE: Deep resonant sub-bass drone + subtle wind resonance + distant oil lamp crackle
  private buildCaveDrone(destination: GainNode) {
    if (!this.ctx) return;
    const ctx = this.ctx;

    // Sub-bass fundamental (55Hz - A1)
    const osc1 = ctx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(55, ctx.currentTime);

    // Warm fifth harmonic (82.5Hz - E2)
    const osc2 = ctx.createOscillator();
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(82.4, ctx.currentTime);

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(160, ctx.currentTime);

    // Low frequency modulation (LFO) for breathing cave atmosphere
    const lfo = ctx.createOscillator();
    lfo.frequency.setValueAtTime(0.12, ctx.currentTime);
    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(40, ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    const droneGain = ctx.createGain();
    droneGain.gain.setValueAtTime(0.45, ctx.currentTime);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(droneGain);
    droneGain.connect(destination);

    osc1.start();
    osc2.start();
    lfo.start();

    this.activeNodes["cave_osc1"] = osc1;
    this.activeNodes["cave_osc2"] = osc2;
    this.activeNodes["cave_lfo"] = lfo;

    // Oil lamp crackle simulation (filtered pink noise bursts)
    this.createFlameCrackle(destination, 0.15);
  }

  // OCEAN STORM: Brown noise wave wash + wind bandpass sweep + periodic distant thunder
  private buildOceanStorm(destination: GainNode) {
    if (!this.ctx) return;
    const ctx = this.ctx;

    // Pink/Brown noise buffer for crashing sea waves
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      output[i] = (lastOut + 0.02 * white) / 1.02; // Brown noise algorithm
      lastOut = output[i];
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Dynamic wave filter sweeping up and down
    const waveFilter = ctx.createBiquadFilter();
    waveFilter.type = "lowpass";
    waveFilter.frequency.setValueAtTime(320, ctx.currentTime);

    const waveLfo = ctx.createOscillator();
    waveLfo.type = "sine";
    waveLfo.frequency.setValueAtTime(0.18, ctx.currentTime); // 5.5 sec wave cycle
    const waveLfoGain = ctx.createGain();
    waveLfoGain.gain.setValueAtTime(260, ctx.currentTime);
    waveLfo.connect(waveLfoGain);
    waveLfoGain.connect(waveFilter.frequency);

    const waveGain = ctx.createGain();
    waveGain.gain.setValueAtTime(0.55, ctx.currentTime);

    whiteNoise.connect(waveFilter);
    waveFilter.connect(waveGain);
    waveGain.connect(destination);

    whiteNoise.start();
    waveLfo.start();

    this.activeNodes["storm_noise"] = whiteNoise;
    this.activeNodes["storm_lfo"] = waveLfo;

    // Wind howl
    const windOsc = ctx.createOscillator();
    windOsc.type = "triangle";
    windOsc.frequency.setValueAtTime(140, ctx.currentTime);
    const windFilter = ctx.createBiquadFilter();
    windFilter.type = "bandpass";
    windFilter.frequency.setValueAtTime(450, ctx.currentTime);
    windFilter.Q.setValueAtTime(3.0, ctx.currentTime);

    const windGain = ctx.createGain();
    windGain.gain.setValueAtTime(0.2, ctx.currentTime);

    windOsc.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(destination);
    windOsc.start();
    this.activeNodes["storm_wind"] = windOsc;
  }

  // PALACE SITAR / COURT DRONE: Rich Indian classical Tanpura drone (Sa - Pa - Sa)
  private buildPalaceSitarDrone(destination: GainNode) {
    if (!this.ctx) return;
    const ctx = this.ctx;

    // Base pitch C# (138.6 Hz), Pa (207.6 Hz), High Sa (277.2 Hz)
    const freqs = [138.6, 207.65, 277.2, 415.3];
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      osc.type = idx % 2 === 0 ? "sawtooth" : "triangle";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(600 + idx * 100, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.08 / (idx + 1), ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(destination);
      osc.start();
      this.activeNodes[`palace_osc_${idx}`] = osc;
    });
  }

  // DIVINE ETHEREAL: High crystalline shimmer and serene oceanic swell for Goddess Manimekhala
  private buildDivineEthereal(destination: GainNode) {
    if (!this.ctx) return;
    const ctx = this.ctx;

    // Celestial chord (D minor 9 / peaceful pentatonic shimmer)
    const tones = [293.66, 369.99, 440.0, 587.33, 880.0];
    tones.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.3 + i * 0.1, ctx.currentTime);
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(2.5, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.05, ctx.currentTime);

      osc.connect(gain);
      gain.connect(destination);
      osc.start();
      lfo.start();

      this.activeNodes[`divine_osc_${i}`] = osc;
      this.activeNodes[`divine_lfo_${i}`] = lfo;
    });
  }

  // COURT FESTIVE: Joyous modal drone with rhythmic chime elements
  private buildCourtFestive(destination: GainNode) {
    if (!this.ctx) return;
    const ctx = this.ctx;

    const fundamental = ctx.createOscillator();
    fundamental.type = "triangle";
    fundamental.frequency.setValueAtTime(146.8, ctx.currentTime); // D3

    const droneFilter = ctx.createBiquadFilter();
    droneFilter.type = "lowpass";
    droneFilter.frequency.setValueAtTime(450, ctx.currentTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.25, ctx.currentTime);

    fundamental.connect(droneFilter);
    droneFilter.connect(gain);
    gain.connect(destination);
    fundamental.start();
    this.activeNodes["court_fund"] = fundamental;
  }

  // FOREST FLUTE DRONE: Bamboo flute harmonic tone with woodland air breeze
  private buildForestFluteDrone(destination: GainNode) {
    if (!this.ctx) return;
    const ctx = this.ctx;

    // Deep wooden flute fundamental (Bansuri tone)
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(220, ctx.currentTime); // A3

    // Vibrato LFO
    const vib = ctx.createOscillator();
    vib.frequency.setValueAtTime(4.8, ctx.currentTime);
    const vibGain = ctx.createGain();
    vibGain.gain.setValueAtTime(3.2, ctx.currentTime);
    vib.connect(vibGain);
    vibGain.connect(osc.frequency);

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(440, ctx.currentTime);
    filter.Q.setValueAtTime(2.5, ctx.currentTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.2, ctx.currentTime);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(destination);

    osc.start();
    vib.start();
    this.activeNodes["forest_flute"] = osc;
    this.activeNodes["forest_vib"] = vib;
  }

  // TEMPLE BELLS: Resonant Tibetan singing bowl / Indian temple bell timbre
  private buildTempleBells(destination: GainNode) {
    if (!this.ctx) return;
    const ctx = this.ctx;

    const bellFreqs = [216, 432, 864, 1296];
    bellFreqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.1 / (idx + 1), ctx.currentTime);

      osc.connect(gain);
      gain.connect(destination);
      osc.start();
      this.activeNodes[`bell_osc_${idx}`] = osc;
    });
  }

  // Organic flame crackle generator using filtered noise bursts
  private createFlameCrackle(destination: GainNode, volume = 0.1) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const bufferSize = ctx.sampleRate;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() > 0.985 ? (Math.random() * 2 - 1) : 0;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.setValueAtTime(1800, ctx.currentTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(volume, ctx.currentTime);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(destination);
    noise.start();
    this.activeNodes["flame_crackle"] = noise;
  }

  // Trigger interactive UI sound effects (click, transition, bell ping)
  public playSfx(type: "click" | "page" | "bell" | "water") {
    this.initContext();
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    gain.connect(this.masterGain);

    if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.04);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.connect(gain);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === "page") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.12);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      osc.start(now);
      osc.stop(now + 0.13);
    } else if (type === "bell") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(528, now); // Solfeggio 528Hz frequency
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);
      osc.connect(gain);
      osc.start(now);
      osc.stop(now + 1.9);
    }
  }
}

// Global Singleton Instance
export const audioManager = new AudioManager();

// Web Speech API Narration Engine with transcript feedback
export interface NarrationState {
  isSpeaking: boolean;
  isPaused: boolean;
  currentText: string;
  charIndex: number;
}

export class NarrationEngine {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private onStateChangeCallback: ((state: NarrationState) => void) | null = null;

  constructor() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      this.synth = window.speechSynthesis;
    }
  }

  public registerListener(callback: (state: NarrationState) => void) {
    this.onStateChangeCallback = callback;
  }

  public speak(text: string, rate: number = 0.9, pitch: number = 0.95) {
    if (!this.synth) return;
    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate; // Slightly measured, cinematic cadence
    utterance.pitch = pitch;

    // Pick best available English voice (prefer UK or Indian English for historical warmth)
    const voices = this.synth.getVoices();
    const preferredVoice = voices.find(
      (v) =>
        v.lang.includes("en-IN") ||
        v.lang.includes("en-GB") ||
        v.name.includes("Serif") ||
        v.name.includes("Natural")
    ) || voices.find((v) => v.lang.startsWith("en"));

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => {
      this.notify(true, false, text, 0);
    };

    utterance.onboundary = (event) => {
      this.notify(true, false, text, event.charIndex);
    };

    utterance.onend = () => {
      this.notify(false, false, "", 0);
      this.currentUtterance = null;
    };

    utterance.onerror = () => {
      this.notify(false, false, "", 0);
      this.currentUtterance = null;
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public pause() {
    if (this.synth && this.synth.speaking && !this.synth.paused) {
      this.synth.pause();
      this.notify(true, true, this.currentUtterance?.text || "", 0);
    }
  }

  public resume() {
    if (this.synth && this.synth.paused) {
      this.synth.resume();
      this.notify(true, false, this.currentUtterance?.text || "", 0);
    }
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
      this.notify(false, false, "", 0);
    }
  }

  private notify(isSpeaking: boolean, isPaused: boolean, currentText: string, charIndex: number) {
    if (this.onStateChangeCallback) {
      this.onStateChangeCallback({ isSpeaking, isPaused, currentText, charIndex });
    }
  }
}

export const narrationEngine = new NarrationEngine();

