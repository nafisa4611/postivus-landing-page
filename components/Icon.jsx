"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/logo/logo-dribble.svg",
  "/logo/logo-hubspot.svg",
  "/logo/logo-netflix.svg",
  "/logo/logo-notion.svg",
  "/logo/logo-zoom.svg",
];

export default function Icon() {
  return (
    <div className="py-10 overflow-hidden bg-white">
      {/* Container for the animation */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-12 pr-12"
          animate={{
            x: ["0%", "-50%"], // Moves halfway because the list is doubled
          }}
          transition={{
            ease: "linear",
            duration: 20, // Adjust speed here (higher = slower)
            repeat: Infinity,
          }}
        >
          {/* Render the logos twice for a seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <Image 
                src={logo} 
                alt="Partner Logo" 
                width={150} 
                height={80} 
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}