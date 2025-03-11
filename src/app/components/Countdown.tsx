
import { motion } from "framer-motion";

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div>
      <motion.div
        key={value}
        className="group relative flex flex-col items-center justify-center overflow-hidden rounded-none p-4 backdrop-blur-sm"
      >
        <div className="absolute inset-0  transition-opacity duration-700 "></div>
        <motion.div
          key={value}
          initial={{ opacity: 0.8 }}
          animate={{
            opacity: [0.8, 1, 0.8],
            textShadow: [
              "0 0 4px rgba(255, 106, 0, 0.1)",
              "0 0 8px rgba(255, 106, 0, 0.3)",
              "0 0 4px rgba(255, 106, 0, 0.1)",
            ],
          }}
          className="font-darksouls text-4xl font-normal tracking-wider text-[#a89e8c] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {value.toString().padStart(2, "0")}
        </motion.div>

      </motion.div>
      <div className="mt-2 font-serif text-sm uppercase tracking-widest text-[#a89e8c]/50 sm:text-base">{label}</div>
      </div>
      );
}

        export function Countdown({timeLeft}: {timeLeft: {days: number; hours: number; minutes: number; seconds: number } }) {
  return (
        <div className="flex justify-center flex-row">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
        );
}
