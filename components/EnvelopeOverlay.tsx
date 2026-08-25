"use client";

import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { COUPLE } from "@/lib/constants";

type EnvelopeOverlayProps = {
  onOpened: () => void;
};

export function EnvelopeOverlay({ onOpened }: EnvelopeOverlayProps) {
  const [visible, setVisible] = useState(true);
  const [opening, setOpening] = useState(false);
  const [split, setSplit] = useState(0);
  const busy = useRef(false);

  const open = useCallback(() => {
    if (busy.current) return;
    busy.current = true;
    setOpening(true);
    onOpened();
    window.setTimeout(() => setVisible(false), 920);
  }, [onOpened]);

  const onDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (opening) return;
    setSplit(Math.abs(info.offset.y));
  };

  const onDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (opening) return;
    if (Math.abs(info.offset.y) > 70 || Math.abs(info.velocity.y) > 500) {
      open();
      return;
    }
    setSplit(0);
  };

  const ease = [0.4, 0, 0.2, 1] as const;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="envelope"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`fixed inset-x-0 top-0 z-50 mx-auto h-[100dvh] w-full max-w-md overflow-hidden ${
            opening ? "pointer-events-none" : ""
          }`}
        >
          {/* Mitad superior: se va hacia arriba */}
          <motion.div
            className="absolute inset-x-0 top-0 z-20 h-1/2 overflow-visible bg-[#FAFAF8]"
            animate={opening ? { y: "-110%" } : { y: -split }}
            transition={
              opening
                ? { duration: 0.85, ease }
                : { type: "spring", stiffness: 380, damping: 36 }
            }
          >
            <div className="absolute inset-x-0 top-[18%] z-20 flex flex-col items-center">
              <p className="font-script text-[3.1rem] leading-none text-[#8A9690]">
                {COUPLE.first}
              </p>
              <p className="font-script text-[2.1rem] leading-none text-[#8A9690]">&</p>
              <p className="font-script text-[3.1rem] leading-none text-[#8A9690]">
                {COUPLE.second}
              </p>
            </div>

            <div
              className="absolute inset-0"
              style={{
                filter:
                  "drop-shadow(0 8px 10px rgba(70, 64, 56, 0.16)) drop-shadow(0 2px 3px rgba(70, 64, 56, 0.08))",
              }}
            >
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 50"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 34 H100 L52 49.2 Q50 50.4 48 49.2 Z"
                  fill="#FAFAF8"
                />
              </svg>
            </div>

            <div className="absolute left-1/2 top-full z-30 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/cera.png"
                alt="Sello de cera"
                draggable={false}
                className="pointer-events-none h-[100px] w-[100px] object-contain drop-shadow-[0_10px_14px_rgba(40,10,10,0.3)]"
              />
            </div>
          </motion.div>

          {/* Mitad inferior: se va hacia abajo */}
          <motion.div
            className="absolute inset-x-0 bottom-0 z-10 h-1/2 overflow-hidden bg-[#FAFAF8]"
            animate={opening ? { y: "110%" } : { y: split }}
            transition={
              opening
                ? { duration: 0.85, ease }
                : { type: "spring", stiffness: 380, damping: 36 }
            }
          >
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 50"
              preserveAspectRatio="none"
            >
              <path
                d="M0 16 L50 0 L100 16"
                fill="none"
                stroke="rgba(140,134,126,0.32)"
                strokeWidth="0.4"
              />
            </svg>

            <div className="absolute inset-x-0 bottom-[18%] px-8 text-center">
              <p className="font-serif text-[1.25rem] text-[#2A2A2A]">
                Tenemos una noticia...
              </p>
              <p className="mt-2 animate-pulse font-serif text-[1.02rem] font-bold uppercase tracking-wide text-[#1A1A1A]">
                ¡Toca aquí y desliza!
              </p>
            </div>
          </motion.div>

          <motion.div
            className={`absolute inset-0 z-40 cursor-grab touch-pan-y active:cursor-grabbing ${
              opening ? "pointer-events-none" : ""
            }`}
            drag={opening ? false : "y"}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.72}
            dragMomentum={false}
            onDrag={onDrag}
            onDragEnd={onDragEnd}
            onTap={open}
            aria-label="Abrir invitación. Toca y desliza."
            role="button"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
