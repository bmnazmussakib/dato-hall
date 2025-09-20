"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckIcon } from "../icons/Icons";

const About = () => {
  return (
    <section className="lg:py-24 md:py-16 py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 justify-center items-center w-full">
          {/* Left Content */}
          <motion.div
            className="pr-0 lg:pr-12"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p
              className="text-lime-600 font-semibold tracking-wider mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              HYDROPOWER PLANT
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Taming the Elemental Power
            </motion.h2>
            <motion.p
              className="text-slate-600 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit sed quia.
            </motion.p>

            <motion.ul
              className="space-y-3 text-slate-700 mb-8"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.2 },
                },
              }}
              viewport={{ once: true }}
            >
              {[
                "Adipiscing eli sed eiusmod",
                "Tempor incididunt",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  variants={{ visible: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckIcon />
                  <span className="ml-3">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.button
              className="bg-slate-900 text-white font-bold py-3 px-8 rounded-full hover:bg-slate-800 transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About Us
            </motion.button>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="relative mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="https://picsum.photos/seed/dam/500/600"
              alt="Hydropower Dam"
              className="rounded-2xl shadow-xl h-auto"
            />

            {/* Stats Cards */}
            <motion.div
              className="absolute bottom-8 sm:-left-12 left-8 flex lg:flex-col xl:flex-row flex-col w-full gap-4"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.3 } },
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-[#a4cc1c] text-white p-8 rounded-2xl shadow-lg w-64"
                initial={{ opacity: 0, y: 30 }}
                variants={{ visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-semibold">Experts</p>
                <p className="md:text-6xl text-4xl font-bold">90+</p>
                <p className="text-sm mt-2">Adipiscing elit, do eiusm.</p>
              </motion.div>

              <motion.div
                className="bg-[#002134] text-white p-8 rounded-2xl shadow-lg w-64"
                initial={{ opacity: 0, y: 30 }}
                variants={{ visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-semibold">Stations</p>
                <p className="md:text-6xl text-4xl font-bold">16</p>
                <p className="text-sm mt-2">Sed do eius mod tempor.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
