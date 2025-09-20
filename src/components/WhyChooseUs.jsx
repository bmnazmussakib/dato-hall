"use client";
import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { motion } from "motion/react";

const WhyChooseUs = () => {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="flex flex-wrap">
        {/* Left Image */}
        <motion.div
          className="w-full lg:w-3/5"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/images/why-choose-1.jpg"
            alt="Engineer with wind turbine models"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full lg:w-2/5"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/images/why-choose-2.jpg"
            alt="Engineer with wind turbine models"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Floating Content Box */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:translate-x-0 bg-[#27ad4c] text-white md:p-12 p-8 shadow-2xl lg:-ml-48 md:max-w-[550px] w-4/5"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="font-semibold mb-2 capitalize"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          why choose us
        </motion.p>

        <motion.h2
          className="md:text-4xl text-3xl font-bold md:mb-6 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          We are Building a Sustainable Future
        </motion.h2>

        {/* List with stagger animation */}
        <motion.ul
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          {[
            {
              title: "Robust Experience",
              desc: "Vast experience in power evacuation, land pro curement, liaisoning and working with state.",
            },
            {
              title: "Best Energy Tariffs",
              desc: "A perfect blend of global experience and expertise to further our focus on technology.",
            },
          ].map((item, idx) => (
            <motion.li
              key={idx}
              className="flex"
              initial={{ opacity: 0, y: 30 }}
              variants={{ visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-2xl mt-1">
                <IoIosCheckmarkCircle />
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm opacity-90">{item.desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
