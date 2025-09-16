import React from 'react';
import { CheckIcon } from '../icons/Icons';

const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 justify-center items-center w-full">
          <div className="pr-0 lg:pr-12 ">
            <p className="text-lime-600 font-semibold tracking-wider mb-2">HYDROPOWER PLANT</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Taming the Elemental Power</h2>
            <p className="text-slate-600 mb-6">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.
            </p>
            <ul className="space-y-3 text-slate-700 mb-8">
              <li className="flex items-center">
                <CheckIcon />
                <span className="ml-3">Adipiscing eli sed eiusmod</span>
              </li>
              <li className="flex items-center">
                <CheckIcon />
                <span className="ml-3">Tempor incididunt</span>
              </li>
            </ul>
            <button className="bg-slate-900 text-white font-bold py-3 px-8 rounded-full hover:bg-slate-800 transition-colors">
              About Us
            </button>
          </div>
          <div className="relative mx-auto">
            <img
              src="https://picsum.photos/seed/dam/500/600"
              alt="Hydropower Dam"
              className="rounded-2xl shadow-xl h-auto "
            />
            <div className="absolute bottom-8 sm:-left-12 left-8 flex lg:flex-col xl:flex-row flex-col w-full gap-4">
              <div className="bg-[#a4cc1c] text-white p-8 p-4 rounded-2xl shadow-lg w-64 ">
                <p className="font-semibold">Experts</p>
                <p className="md:text-6xl text-4xl font-bold">90+</p>
                <p className="text-sm mt-2">Adipiscing elit, do eiusm.</p>
              </div>
              <div className="bg-[#002134] text-white p-8 p-4 rounded-2xl shadow-lg w-64">
                <p className="font-semibold">Stations</p>
                <p className="md:text-6xl text-4xl font-bold">16</p>
                <p className="text-sm mt-2">Sed do eius mod tempor.</p>
              </div>
            </div>
            {/* <div className="absolute top-8 -right-12 hidden xl:block">
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
