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
    <div className="w-full py-10 overflow-hidden">
      {/* DESKTOP */}
      <div className="hidden md:flex px-12 gap-12 justify-between items-center mx-16">
        {logos.map((logo, index) => (
          <Image
            key={`desktop-${index}`}
            src={logo}
            alt="logo"
            width={200}
            height={150}
          />
        ))}
      </div>

      {/* MOBILE */}
      <div className="block md:hidden">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={`mobile-${index}`} className="flex-shrink-0">
                <Image src={logo} alt="logo" width={120} height={80} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
