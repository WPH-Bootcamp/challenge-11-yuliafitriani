import AlbumArt from "@/assets/album-art.png";
import Image from "next/image";
import type { ControlState } from "@/types/state.type";
import { motion, Variants } from "motion/react";
import { WaveBar } from "./WaveBar";

type Props = {
  title: string;
  artist: string;
  controlState: ControlState;
};

export const SongDetail = ({ title, artist, controlState }: Props) => {
  const scaleVariant: Variants = {
    playing: {
      scale: 1,
      opacity: 1,
    },
    paused: {
      scale: 0.95,
      opacity: 0.5, // 👈 opacity 50%
    },
    loading: {
      scale: 0.9,
      opacity: 0.7,
    },
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-center gap-5">
        <motion.div
          className="rounded-md bg-linear-to-br from-[#7C3AED] to-[#DB2777] w-30 h-30 flex items-center justify-center"
          variants={scaleVariant}
          animate={controlState}
          transition={{ type: "spring" }}
        >
          <motion.div
            animate={
              controlState === "playing" ? { rotate: 360 } : { rotate: 0 }
            }
            transition={
              controlState === "playing"
                ? { repeat: Infinity, duration: 20, ease: "linear" }
                : { duration: 0.3 }
            }
          >
            <Image
              src={AlbumArt}
              alt="Album Art"
              width={48}
              height={60}
            ></Image>
          </motion.div>
        </motion.div>
        <div className="flex flex-col gap-2 w-81 h-17">
          <h1 className="text-lg font-semibold text-neutral-100">{title}</h1>
          <label className="text-sm text-neutral-400">{artist}</label>
        </div>
      </div>

      <div className="flex flex-row gap-1 -mt-3 ml-36 h-9 items-end">
        {Array.from({ length: 5 }).map((_, i) => (
          <WaveBar key={i} index={i} state={controlState} />
        ))}
      </div>
    </div>
  );
};
