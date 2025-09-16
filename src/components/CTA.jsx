import React from 'react';

const CTA = () => {
  return (
    <section className="bg-lime-500">
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Got an Incredible Project Right Now?
        </h2>
        <p className="text-slate-800 max-w-2xl mx-auto mb-8">
          This helps ensure quality, schedule and that we're all working toward same goal
        </p>
        <button className="bg-white text-lime-600 border-2 border-lime-600 font-bold py-2.5 px-8 rounded-md hover:bg-lime-600 hover:text-white transition-colors">
          GET IN TOUCH
        </button>
      </div>
    </section>
  );
};

export default CTA;
