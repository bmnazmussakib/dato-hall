import React from 'react';
import { CheckCircleIcon } from '../icons/Icons';

const WhyChooseUs = () => {
  return (
    <section className="bg-white relative">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-3/5">
          <img
            src="/assets/images/why-choose-1.jpg"
            alt="Engineer with wind turbine models"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-2/5">
          <img
            src="/assets/images/why-choose-2.jpg"
            alt="Engineer with wind turbine models"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 bg-[#57b33e] text-white p-12 shadow-2xl lg:-ml-48 max-w-[550px]">
        <p className="font-semibold mb-2">| why choose us</p>
        <h2 className="text-4xl font-bold mb-6">We are Building a Sustainable Future</h2>
        <ul className="space-y-6">
          <li className="flex">
            <CheckCircleIcon />
            <div className="ml-4">
              <h3 className="font-bold text-lg">Robust Experience</h3>
              <p className="text-sm opacity-90">
                Vast experience in power evacuation, land pro curement, liaisoning and working with state.
              </p>
            </div>
          </li>
          <li className="flex">
            <CheckCircleIcon />
            <div className="ml-4">
              <h3 className="font-bold text-lg">Best Energy Tariffs</h3>
              <p className="text-sm opacity-90">
                A perfect blend of global experience and expertise to further our focus on technology.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
