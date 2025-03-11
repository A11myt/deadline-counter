
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

export function EmberParticles({ count, interval }: { count: number; interval: number }) {
  const [showEmber, setShowEmber] = useState(false);

  useEffect(() => {
    const toggleEmber = setInterval(() => {
      setShowEmber((prev) => !prev);
    }, interval);

    return () => clearInterval(toggleEmber);
  }, [interval]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <AnimatePresence>
        {showEmber &&
          Array.from({ length: count }).map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: Math.random() * 100 + 400,
                x: Math.random() * window.innerWidth,
              }}
              animate={{
                opacity: [0, Math.random() * 0.8 + 0.2, 0],
                y: Math.random() * -600 - 100,
                x: Math.random() * 200 - 100 + i * 50,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: Math.random() * 8 + 4,
                ease: "easeOut",
              }}
              className="absolute h-1 w-1 rounded-full bg-[#ff6a00]"
              style={{
                boxShadow: "0 0 6px 2px rgba(255, 106, 0, 0.6)",
                filter: "blur(0.5px)",
              }}
            />
          ))}
      </AnimatePresence>
    </div>
  );
}

