import React from "react";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BsBuildings } from "react-icons/bs";
import { motion } from "framer-motion";
import Container from "./common/Container";

// Variants for animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between items
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const FeatureItem = ({ icon, title, description }) => (
  <motion.div
    variants={itemVariants}
    className="flex items-start space-x-4"
  >
    <div className="text-orange-500 mt-1 text-5xl">{icon}</div>
    <div>
      <h3 className="font-bold text-xl mb-2 text-slate-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  </motion.div>
);

const Features = () => {
  const features = [
    {
      icon: <MdOutlineEnergySavingsLeaf />,
      title: "Energy Solutions",
      description: "Over two decades of rich experience in the wind energy sector.",
    },
    {
      icon: <AiOutlineGlobal />,
      title: "Global Expertise",
      description: "Over two decades of rich experience in the wind energy sector.",
    },
    {
      icon: <FiSettings />,
      title: "End-To-End Solutions",
      description: "Over two decades of rich experience in the wind energy sector.",
    },
    {
      icon: <BsBuildings />,
      title: "For Commercial",
      description: "Over two decades of rich experience in the wind energy sector.",
    },
  ];

  return (
    <section className="lg:py-24 md:py-16 py-10 bg-white">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Features;
