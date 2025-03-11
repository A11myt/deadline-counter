
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="mb-8 flex flex-col items-center"
    >
      <h1 className="font-darksouls mb-2 text-4xl font-normal tracking-wider text-[#a89e8c] sm:text-5xl md:text-6xl">
        THE AGE OF FIRE
      </h1>
      <div className="relative mt-2 h-[2px] w-64 bg-[#a89e8c]/20 md:w-96">
        <div
          className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6a00]"
          style={{ boxShadow: "0 0 8px 4px rgba(255, 106, 0, 0.4)" }}
        ></div>
      </div>
      <p className="mt-4 font-serif text-lg italic text-[#a89e8c]/70 sm:text-xl">Fades into darkness</p>
    </motion.div>
  );
}

export default Header;
