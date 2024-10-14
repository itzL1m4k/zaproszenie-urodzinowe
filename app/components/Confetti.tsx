"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Confetti = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [windowHeight, setWindowHeight] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }
  }, []);

  if (windowWidth === null || windowHeight === null) return null; // Renderuj komponent tylko po stronie klienta

  const confettiColors = ["#FFC700", "#FF5733", "#C70039", "#900C3F", "#581845"];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * -100}vh`, // Spodka powyżej ekranu
          }}
          initial={{ y: 0 }}
          animate={{
            y: windowHeight,
          }}
          transition={{
            duration: Math.random() * 3 + 2, // Czas spadania
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
