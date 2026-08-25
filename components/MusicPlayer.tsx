"use client";

import { Disc3 } from "lucide-react";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { AUDIO_SRC } from "@/lib/constants";

export type MusicPlayerHandle = {
  play: () => void;
};

export const MusicPlayer = forwardRef<MusicPlayerHandle>(function MusicPlayer(
  _,
  ref,
) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const node = audioRef.current;
    if (!node) return;
    node
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  };

  const toggle = () => {
    const node = audioRef.current;
    if (!node) return;
    if (playing) {
      node.pause();
      setPlaying(false);
      return;
    }
    play();
  };

  useImperativeHandle(ref, () => ({ play }));

  return (
    <>
      <audio ref={audioRef} src={AUDIO_SRC} loop preload="auto" className="hidden" />
      <div className="pointer-events-none fixed bottom-5 left-1/2 z-[70] w-full max-w-md -translate-x-1/2">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pausar música" : "Reproducir música"}
          className="pointer-events-auto ml-auto mr-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#3d3d3d] text-white shadow-lg"
        >
          <Disc3
            className={`h-5 w-5 ${playing ? "animate-spin" : ""}`}
            strokeWidth={1.6}
          />
        </button>
      </div>
    </>
  );
});
