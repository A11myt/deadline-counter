"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import {Countdown} from "./Countdown";
import {Footer} from "./Footer";
import {EmberParticles} from "./EmberParticle";

export default function DeadlineCounter() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const targetDate = new Date("August 31, 2025 23:59:59").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsExpired(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-[#a89e8c]">
      <EmberParticles count={20} interval={3000} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0a0a0a] to-[#1a1a1a]">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-radial from-[#3c3c3c]/10 to-transparent"
          
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <Header />
        {isExpired ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3 }}
            className="font-darksouls text-5xl font-normal tracking-widest text-[#ff6a00] sm:text-6xl md:text-7xl"
          >
            HUMANITY RESTORED
          </motion.div>
        ) : (
          <div className="relative">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center md:h-20 md:w-20">
              <div className="relative h-full w-full">
                <div className="absolute left-1/2 top-1/2 h-8 w-[1px] -translate-x-1/2 translate-y-0 bg-[#a89e8c]/40"></div>
                <div className="absolute left-1/2 top-1/2 h-[1px] w-8 -translate-x-1/2 translate-y-4 bg-[#a89e8c]/40"></div>
              </div>
            </div>
            <Countdown timeLeft={timeLeft} />
          </div>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="mt-12 font-serif text-xl font-normal text-[#a89e8c]/60"
        >
          <span className="text-[#ff6a00]/80">The Fire Fades:</span> August 31, 2025
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

