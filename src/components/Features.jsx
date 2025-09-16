import React from 'react';
import { LightbulbIcon, GlobeIcon, SettingsIcon, BuildingIcon } from '../icons/Icons';

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="text-orange-500 mt-1">{icon}</div>
    <div>
      <h3 className="font-bold text-xl mb-2 text-slate-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  </div>
);

const Features = () => {
  const features = [
    { icon: <LightbulbIcon />, title: "Energy Solutions", description: "Over two decades of rich experience in the wind energy sector." },
    { icon: <GlobeIcon />, title: "Global Expertise", description: "Over two decades of rich experience in the wind energy sector." },
    { icon: <SettingsIcon />, title: "End-To-End Solutions", description: "Over two decades of rich experience in the wind energy sector." },
    { icon: <BuildingIcon />, title: "For Commercial", description: "Over two decades of rich experience in the wind energy sector." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
