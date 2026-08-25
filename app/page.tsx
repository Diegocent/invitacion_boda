"use client";

import { useEffect, useRef, useState } from "react";
import { EnvelopeOverlay } from "@/components/EnvelopeOverlay";
import { Invitation } from "@/components/Invitation";
import { MusicPlayer, type MusicPlayerHandle } from "@/components/MusicPlayer";

export default function HomePage() {
  const [opened, setOpened] = useState(false);
  const musicRef = useRef<MusicPlayerHandle>(null);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (opened) {
      html.style.overflow = "auto";
      body.style.overflow = "auto";
      html.style.touchAction = "manipulation";
      body.style.touchAction = "manipulation";
    } else {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      html.style.touchAction = "none";
      body.style.touchAction = "none";
      window.scrollTo(0, 0);
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
      html.style.touchAction = "";
      body.style.touchAction = "";
    };
  }, [opened]);

  const handleOpened = () => {
    setOpened(true);
    musicRef.current?.play();
  };

  return (
    <main className="min-h-screen">
      <div className="relative mx-auto min-h-screen max-w-md bg-[#FAFAF8] shadow-2xl">
        <Invitation />
        <EnvelopeOverlay onOpened={handleOpened} />
        <MusicPlayer ref={musicRef} />
      </div>
    </main>
  );
}
