import { Volume2Icon } from "lucide-react";
import { motion } from "motion/react";

type Props = {
  width: number;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export const VolumeSetting = ({ width, onClick }: Props) => {
  return (
    <motion.div whileHover="hover" className="flex flex-row gap-2 items-center">
      <motion.div
        variants={{
          hover: { color: "#ffffff" },
        }}
        transition={{ duration: 0.2 }}
      >
        <Volume2Icon size={16} className="text-neutral-400" />
      </motion.div>

      <div
        className="bg-neutral-800 w-full h-1 rounded-full cursor-pointer"
        onClick={onClick}
      >
        <motion.div
          className="h-1 rounded-full"
          animate={{ width: `${width}%` }}
          variants={{
            hover: { backgroundColor: "#8b5cf6" },
          }}
          transition={{ duration: 0.2 }}
          style={{ backgroundColor: "#6b7280" }}
        />
      </div>
    </motion.div>
  );
};
