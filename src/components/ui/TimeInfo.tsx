type Props = {
  current: number;
  duration: number;
};

export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export const TimeInfo = ({ current, duration }: Props) => {
  return (
    <div className="flex flex-row justify-between">
      <label className="text-xs text-neutral-500">{formatTime(current)}</label>
      <label className="text-xs text-neutral-500">{formatTime(duration)}</label>
    </div>
  );
};
