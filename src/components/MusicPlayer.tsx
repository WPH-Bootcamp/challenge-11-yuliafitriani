"use client";

// TODO: Import dependencies yang diperlukan
// import { motion } from "motion/react";
// import { ... } from "lucide-react";

import { SongDetail } from "./ui/SongDetail";
import { ProgressBar } from "./ui/Progressbar";
import { TimeInfo } from "./ui/TimeInfo";
import { ActionButton } from "./ui/ActionButton";
import { VolumeSetting } from "./ui/VolumeSetting";
import { useState, useEffect, useRef } from "react";
import type { ControlState } from "@/types/state.type";
import { motion } from "motion/react";

export function MusicPlayer() {
  // TODO: Implementasikan state management untuk playing, paused, loading
  const [controlState, setControlState] = useState<ControlState>("paused");
  const [currentTime, setCurrentTime] = useState(0);
  const durationTime = 20;
  const [volume, setVolume] = useState(70);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // TODO: Implementasikan handler untuk play/pause
  const handleAction = () => {
    if (controlState == "paused") {
      setControlState("loading");

      setTimeout(() => {
        setControlState("playing");
      }, 300);
    }

    if (controlState == "playing") {
      setControlState("paused");
    }
  };

  useEffect(() => {
    if (controlState === "playing") {
      intervalRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= durationTime) {
            setControlState("paused");
            setCurrentTime(0);
            return durationTime;
          }
          return prev + 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [controlState, durationTime]);

  const progress = (currentTime / durationTime) * 100;

  const handleVolumeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = Math.round((clickX / rect.width) * 100);
    setVolume(Math.min(100, Math.max(0, percent)));
  };

  return (
    <motion.div
      animate={{
        filter:
          controlState == "playing"
            ? "drop-shadow(0px 0px 40px rgba(139, 92, 246, 0.3))"
            : "drop-shadow(0px 4px 20px rgba(0,0,0,0.5))",
      }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="w-full max-w-lg bg-black p-4 flex flex-col gap-4 border rounded-2xl"
    >
      <SongDetail
        title="Awesome Song Title"
        artist="Amazing Artist"
        controlState={controlState}
      />
      <ProgressBar progress={progress} controlState={controlState} />
      <TimeInfo current={currentTime} duration={durationTime} />
      <ActionButton controlState={controlState} onClick={handleAction} />
      <VolumeSetting width={volume} onClick={handleVolumeClick} />
    </motion.div>
  );
}
