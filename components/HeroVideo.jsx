"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

// Home-page video with a sound button.
// Browsers only autoplay videos that start muted, so it starts silent
// and the visitor taps the button to hear the audio.
export default function HeroVideo() {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) {
      v.volume = 1;
      v.play().catch(() => {});
    }
    setMuted(v.muted);
  };

  return (
    <div className="gallery-frame shadow-frame max-w-md mx-auto">
      <div className="gallery-frame-inner overflow-hidden relative aspect-[9/16] bg-ink">
        <video
          ref={ref}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/home-hero-video.webm" type="video/webm" />
          <source src="/videos/home-hero-video.mp4" type="video/mp4" />
        </video>
        <button
          type="button"
          onClick={toggle}
          aria-label={muted ? "Turn sound on" : "Turn sound off"}
          className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 rounded-full bg-ink/70 text-cream border border-gold-light/60 px-4 py-2 text-xs tracking-widest2 uppercase backdrop-blur-sm hover:bg-ink/90 transition-colors"
        >
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          {muted ? "Sound on" : "Mute"}
        </button>
      </div>
    </div>
  );
}
