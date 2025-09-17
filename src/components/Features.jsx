import React from 'react';
import { LightbulbIcon, GlobeIcon, SettingsIcon, BuildingIcon } from '../icons/Icons';
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { AiOutlineGlobal } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { BsBuildings } from 'react-icons/bs';
import Container from './common/Container';

const FeatureItem = ({ icon, title, description }) => (
  <>
  
  <div className="flex items-start space-x-4">
    <div className="text-orange-500 mt-1 text-5xl">{icon}</div>
    <div>
      <h3 className="font-bold text-xl mb-2 text-slate-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  </div>
  </>
);

const Features = () => {
  const features = [
    { icon: <MdOutlineEnergySavingsLeaf />, title: "Energy Solutions", description: "Over two decades of rich experience in the wind energy sector." },
    { icon: <AiOutlineGlobal />, title: "Global Expertise", description: "Over two decades of rich experience in the wind energy sector." },
    { icon: <FiSettings />, title: "End-To-End Solutions", description: "Over two decades of rich experience in the wind energy sector." },
    { icon: <BsBuildings />, title: "For Commercial", description: "Over two decades of rich experience in the wind energy sector." },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
