"use client";

import { motion } from "framer-motion";

type OliveSprigProps = {
  className?: string;
  flip?: boolean;
  delay?: number;
};

export function OliveSprig({ className = "", flip, delay = 0 }: OliveSprigProps) {
  return (
    <motion.svg
      viewBox="0 0 180 260"
      fill="none"
      className={`pointer-events-none origin-bottom will-change-transform ${className}`}
      style={{ scaleX: flip ? -1 : 1 }}
      animate={{ rotate: [-3, 3, -3] }}
      transition={{
        duration: 4.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <path
        d="M92 252 C88 190 96 140 90 88 C86 52 78 28 70 8"
        stroke="#7d8a7a"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <ellipse cx="108" cy="70" rx="22" ry="11" fill="#9aa892" transform="rotate(28 108 70)" />
      <ellipse cx="64" cy="96" rx="20" ry="10" fill="#b7c2ae" transform="rotate(-32 64 96)" />
      <ellipse cx="118" cy="118" rx="24" ry="12" fill="#87967f" transform="rotate(22 118 118)" />
      <ellipse cx="58" cy="146" rx="22" ry="11" fill="#a3ae9a" transform="rotate(-26 58 146)" />
      <ellipse cx="112" cy="168" rx="20" ry="10" fill="#9aa892" transform="rotate(18 112 168)" />
      <ellipse cx="68" cy="198" rx="18" ry="9" fill="#b7c2ae" transform="rotate(-20 68 198)" />
      <ellipse cx="104" cy="42" rx="16" ry="8" fill="#c5cebd" transform="rotate(36 104 42)" />
    </motion.svg>
  );
}

export function FloatingLeaf({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 80 120"
      className={`pointer-events-none ${className}`}
      animate={{ y: [0, -14, 0], rotate: [-8, 10, -8] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M40 112 C38 80 44 52 40 18"
        stroke="#7d8a7a"
        strokeWidth="1.6"
        fill="none"
      />
      <ellipse cx="52" cy="48" rx="18" ry="9" fill="#9aa892" transform="rotate(30 52 48)" />
      <ellipse cx="26" cy="70" rx="16" ry="8" fill="#b7c2ae" transform="rotate(-28 26 70)" />
    </motion.svg>
  );
}

export function VineDivider({ invert = false }: { invert?: boolean }) {
  const stroke = invert ? "#FAFAF8" : "#87967f";
  const fill = invert ? "#9aa5a5" : "#FAFAF8";

  return (
    <div className="pointer-events-none relative z-10 -my-[2px] w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 600 72"
        preserveAspectRatio="none"
        className="block h-[52px] w-full"
      >
        <path d="M0 36 C80 8 140 64 220 32 C300 4 340 68 420 30 C500 2 540 58 600 28 L600 72 L0 72 Z" fill={fill} />
        <path
          d="M20 40 C90 18 150 54 230 34 C310 14 360 58 440 36 C510 18 560 48 590 34"
          stroke={stroke}
          strokeWidth="1.4"
          fill="none"
          opacity="0.85"
        />
        <ellipse cx="150" cy="28" rx="10" ry="4.5" fill={stroke} opacity="0.7" transform="rotate(-18 150 28)" />
        <ellipse cx="300" cy="44" rx="11" ry="5" fill={stroke} opacity="0.65" transform="rotate(16 300 44)" />
        <ellipse cx="450" cy="30" rx="10" ry="4.5" fill={stroke} opacity="0.7" transform="rotate(-12 450 30)" />
      </svg>
    </div>
  );
}

export function WavyEdge({
  fill,
  flip,
  className = "",
}: {
  fill: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 600 48"
      preserveAspectRatio="none"
      className={`block w-full ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <path
        d="M0 24 C40 4 80 44 120 24 C160 4 200 44 240 24 C280 4 320 44 360 24 C400 4 440 44 480 24 C520 4 560 44 600 24 L600 48 L0 48 Z"
        fill={fill}
      />
    </svg>
  );
}

export function GoldenRing({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 240" className={`pointer-events-none ${className}`} fill="none">
      <circle cx="120" cy="120" r="110" stroke="#E6DFD0" strokeWidth="1.2" />
      <circle cx="120" cy="120" r="98" stroke="#E6DFD0" strokeWidth="1" opacity="0.85" />
      <circle cx="120" cy="120" r="86" stroke="#DDD4C2" strokeWidth="1.4" opacity="0.7" />
      <circle cx="120" cy="120" r="74" stroke="#E6DFD0" strokeWidth="0.8" opacity="0.55" />
    </svg>
  );
}
