import { motion } from "framer-motion";
import type { ControlState } from "@/types/state.type";

type ProgressBarProps = {
  progress: number; // 0 - 100
  controlState: ControlState;
};

export const ProgressBar = ({ progress, controlState }: ProgressBarProps) => {
  return (
    <div className="bg-neutral-800 w-full h-2 rounded-full overflow-hidden">
      <motion.div
        className="h-2 rounded-full"
        animate={{
          width: `${progress}%`,
          backgroundColor: controlState === "playing" ? "#8b5cf6" : "#6b7280", // purple → gray
        }}
        transition={{
          width: { duration: 0.3, ease: "linear" },
          backgroundColor: { duration: 0.3 },
        }}
      />
    </div>
  );
};
