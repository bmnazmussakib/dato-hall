import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="bg-[#27ad4c]">
      <div className="container mx-auto px-4 lg:py-24 md:py-16 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-start gap-8">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Got an Incredible Project Right Now?
            </h2>
            <p className="text-white max-w-2xl mx-auto lg:mx-0 mb-8">
              This helps ensure quality, schedule and that we're all working toward same goal
            </p>
          </motion.div>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#27ad4c] text-white border-2 border-white font-bold py-2.5 px-8 rounded-md hover:bg-white hover:border-white hover:text-[#27ad4c] transition-colors"
          >
            GET IN TOUCH
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
