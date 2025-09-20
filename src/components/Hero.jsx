"use client";
import React from "react";
import { motion } from "motion/react";
import Container from "./common/Container";

const Hero = () => {
  return (
    <div className="lg:pt-8 pt-4 bg-white">
      <Container>
        <section
          className="relative bg-white lg:h-[660px] md:h-[600px] h-[480px] bg-cover bg-center text-white flex items-center rounded-2xl overflow-hidden"
          style={{
            backgroundImage: "url('/assets/images/hero.jpg')",
          }}
        >
          {/* Overlay fade-in */}
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          ></motion.div>

          <div className="h-full b-0 z-10">
            <div className="flex lg:flex-row flex-col gap-8 lg:justify-between lg:items-end absolute left-0 bottom-14 w-full md:p-14 p-5">
              {/* Text Section */}
              <motion.div
                className="max-w-3xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <motion.p
                  className="text-lg md:text-xl mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  It's a new day for solar power
                </motion.p>
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 1 }}
                >
                  Soleil. Powerful Shop of{" "}
                  <span className="underline decoration-4 decoration-white">
                    Green E
                  </span>
                </motion.h1>
              </motion.div>

              {/* Button */}
              <motion.button
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-colors text-md inline-block max-w-[200px]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                More About Us
              </motion.button>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Hero;
