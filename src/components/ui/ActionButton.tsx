import {
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  Pause,
} from "lucide-react";
import type { ControlState } from "@/types/state.type";
import { motion } from "motion/react";

type Props = {
  controlState: ControlState;
  onClick: () => void;
};

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

export const ActionButton = ({ controlState, onClick }: Props) => {
  const isLoading = controlState === "loading";

  return (
    <div className="flex flex-row gap-8 w-full h-14 items-center justify-center">
      {/* Shuffle */}
      <motion.button
        whileHover={{ color: "#ffffff" }}
        whileTap={{ scale: 0.9 }}
        transition={spring}
        className="text-neutral-300"
      >
        <Shuffle size={20} />
      </motion.button>

      {/* Skip Back */}
      <motion.button
        whileHover={{ color: "#ffffff" }}
        whileTap={{ scale: 0.9 }}
        transition={spring}
        className="text-neutral-300"
      >
        <SkipBack size={20} />
      </motion.button>

      {/* Play / Pause */}
      <motion.button
        disabled={isLoading}
        onClick={onClick}
        whileHover={!isLoading ? { scale: 1.05 } : undefined}
        whileTap={!isLoading ? { scale: 0.95 } : undefined}
        transition={spring}
        className={[
          "rounded-full h-14 w-14 flex items-center justify-center",
          isLoading ? "bg-neutral-500 cursor-not-allowed" : "bg-[#8b5cf6]",
        ].join(" ")}
      >
        {controlState === "playing" ? (
          <Pause size={20} className="text-white" />
        ) : (
          <Play size={20} className="text-white" />
        )}
      </motion.button>

      {/* Skip Forward */}
      <motion.button
        whileHover={{ color: "#ffffff" }}
        whileTap={{ scale: 0.9 }}
        transition={spring}
        className="text-neutral-300"
      >
        <SkipForward size={20} />
      </motion.button>

      {/* Repeat */}
      <motion.button
        whileHover={{ color: "#ffffff" }}
        whileTap={{ scale: 0.9 }}
        transition={spring}
        className="text-neutral-300"
      >
        <Repeat size={20} />
      </motion.button>
    </div>
  );
};
