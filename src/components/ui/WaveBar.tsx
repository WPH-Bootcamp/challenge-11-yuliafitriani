import { motion } from "framer-motion";
import { ControlState } from "@/types/state.type";

type BarProps = {
  index: number;
  state: ControlState;
};

export const WaveBar = ({ index, state }: BarProps) => {
  return (
    <motion.div
      className="w-2 bg-[#8b5cf6] origin-bottom"
      initial={{ height: "10%" }}
      animate={
        state === "playing"
          ? {
              height: ["20%", "100%"],
              opacity: 1,
            }
          : state === "loading"
            ? {
                height: "50%",
                opacity: 0.5,
              }
            : {
                height: "20%",
                opacity: 1,
              }
      }
      transition={
        state === "playing"
          ? {
              duration: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.1, // stagger 100ms
            }
          : {
              duration: 0.3, // state transition
              ease: "easeInOut",
            }
      }
      style={{ willChange: "transform" }}
    />
  );
};
