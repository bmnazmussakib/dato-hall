import React from 'react';
import Container from './common/Container';
// import { ApcLogo } from '../constants';

const ProductHero = () => {
  return (
    <>
      <Container>
        <div className="py-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className='md:basis-2/3 basis-full'>
              <h1 className="text-4xl font-light text-gray-900">
                APC <a
                  href="#"
                  className="font-semibold "
                >
                  NetShelter
                </a> SX Enclosures
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
                  className="inline-block bg-[#27ad4c] text-white font-semibold py-3 px-8 rounded-md hover:bg-green-700 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
            <div className="hidden md:block md:basis-1/3 basis-full">
              <img
                src="/assets/images/server-rack-hero.png"
                alt="APC NetShelter SX Enclosures"
                className="rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductHero;
