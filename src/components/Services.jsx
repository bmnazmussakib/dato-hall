"use client";
import React from "react";
import Container from "./common/Container";
import { motion } from "motion/react";

const ServiceCard = ({ number, title, subtitle, imageUrl, index }) => (
  <motion.div
    className="relative rounded-2xl bg-cover bg-center group overflow-hidden"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.03 }}
  >
    <div className="absolute inset-0 bg-black opacity-30 group-hover:bg-opacity-60 transition-all duration-300"></div>

    <motion.div
      className="overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="aspect-[3/2] object-cover w-full h-auto"
      />
    </motion.div>

    <div className="absolute top-0 z-10 p-12 flex flex-col justify-between text-white h-full">
      <p className="text-3xl font-semibold">{number}</p>
      <div className="transform transition-transform duration-300">
        <p className="text-sm opacity-90">{subtitle}</p>
        <h3 className="text-3xl font-bold">{title}</h3>
      </div>
    </div>
  </motion.div>
);

const Services = () => {
  const services = [
    { number: "01.", title: "Panel Cleaning", subtitle: "Consectetur adipiscing", imageUrl: "/assets/images/service-1.jpg" },
    { number: "02.", title: "Maintenance", subtitle: "Consectetur adipiscing", imageUrl: "/assets/images/service-2.jpg" },
    { number: "03.", title: "Calibration", subtitle: "Consectetur adipiscing", imageUrl: "/assets/images/service-3.jpg" },
    { number: "04.", title: "Panel Cleaning", subtitle: "Consectetur adipiscing", imageUrl: "/assets/images/service-1.jpg" },
    { number: "05.", title: "Maintenance", subtitle: "Consectetur adipiscing", imageUrl: "/assets/images/service-2.jpg" },
    { number: "06.", title: "Calibration", subtitle: "Consectetur adipiscing", imageUrl: "/assets/images/service-3.jpg" },
  ];

  return (
    <section className="lg:py-24 md:py-16 py-10 bg-slate-50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.map((service, idx) => (
            <ServiceCard key={service.title} {...service} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
