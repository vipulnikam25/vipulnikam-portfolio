import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { Mic2, Volume2 } from "lucide-react";
import { profile } from "@/data/portfolio";
import type { PointerEvent } from "react";

type InteractiveAvatarProps = {
  hasSpoken: boolean;
  isSpeaking: boolean;
  onSpeak: () => void;
};

const voiceBars = [0.6, 1, 0.72, 1.15, 0.82, 1.05, 0.66, 0.92];

export function InteractiveAvatar({ hasSpoken, isSpeaking, onSpeak }: InteractiveAvatarProps) {
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
    rotateY.set(horizontal * 8);
    rotateX.set(vertical * -6);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      className="avatar-console relative min-h-[34rem] overflow-hidden border border-border/70 bg-card/70 shadow-2xl backdrop-blur-xl sm:min-h-[38rem]"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <div className="absolute left-5 top-5 z-30 flex items-center gap-2 border border-border/70 bg-background/85 px-3 py-2 text-xs font-semibold uppercase text-primary backdrop-blur">
        <Mic2 className="h-4 w-4" />
        Interactive avatar
      </div>

      <div className="absolute inset-x-0 bottom-36 top-16 grid place-items-center sm:bottom-32">
        <div className={`avatar-signal ${isSpeaking ? "is-speaking" : ""}`} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <motion.div
          className="avatar-portrait relative z-10 aspect-square w-[78%] max-w-[24rem] overflow-hidden border border-primary/35 bg-background shadow-[0_32px_90px_hsl(var(--primary)/0.2)]"
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
        >
          <img
            src={profile.avatarUrl}
            alt="Stylized portrait of Vipul Nikam"
            className="h-full w-full object-cover"
            width="900"
            height="900"
            fetchPriority="high"
          />
          <div className="avatar-scan" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-background/90 px-4 py-3 backdrop-blur">
            <div>
              <p className="font-display text-sm font-semibold text-foreground">Vipul Nikam</p>
              <p className="mt-0.5 text-xs text-muted-foreground">Data Engineer · Pune, India</p>
            </div>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-primary">
              <span className={`h-2 w-2 bg-primary ${isSpeaking ? "animate-pulse" : ""}`} />
              {isSpeaking ? "Speaking" : "Ready"}
            </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-4 bottom-4 z-30 border border-border/70 bg-background/90 p-4 backdrop-blur sm:inset-x-5 sm:p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase text-primary">Resume introduction</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {isSpeaking ? "Playing Vipul's professional summary" : "A short spoken overview of skills and experience"}
            </p>
          </div>
          <div className={`voice-meter hidden h-8 items-center gap-1 sm:flex ${isSpeaking ? "is-active" : ""}`} aria-hidden="true">
            {voiceBars.map((height, index) => (
              <span key={index} style={{ "--bar-height": height } as React.CSSProperties} />
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={onSpeak}
          aria-pressed={isSpeaking}
          className="mt-4 inline-flex w-full items-center justify-center bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
        >
          <Volume2 className="mr-2 h-4 w-4" />
          {isSpeaking ? "Restart Introduction" : hasSpoken ? "Replay Introduction" : "Hear My Introduction"}
        </button>
      </div>
    </div>
  );
}
