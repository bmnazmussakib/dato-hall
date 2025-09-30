import React from 'react';
// import { ApcLogo } from '../constants';

const ProductHero = () => {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-light text-gray-900">
            APC NetShelter SX Enclosures
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Our high-performance IT Rack for data centers, server rooms & wiring
            closets
          </p>
          <p className="mt-8 text-gray-500">
            Part of{' '}
            <a
              href="#"
              className="font-semibold text-gray-700 hover:underline"
            >
              NetShelter
            </a>
          </p>
          <p className="mt-4 text-gray-600">
            Bring your business the power of global scale, sustainable
            leadership and unparalleled quality with APC{' '}
            <span className="font-bold">NetShelter SX</span>: our most versatile
            IT rack for AI applications and everyday excellence.
          </p>
          <div className="mt-6">
            {/* <ApcLogo /> */}
            logo
          </div>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-green-700 transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src="https://picsum.photos/seed/hero/500/300"
            alt="APC NetShelter SX Enclosures"
            className="rounded-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
