import React from 'react';
import { ArrowRightIcon } from '../icons/Icons';

const ProductCard = ({ name, imageUrl, hasBadge = false }) => (
  <div className="bg-white rounded-lg shadow-md p-4 text-center group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="relative mb-4 bg-slate-100 p-4 rounded-lg flex items-center justify-center h-56">
      <img src={imageUrl} alt={name} className="max-h-full max-w-full object-contain" />
      {hasBadge && (
        <div className="absolute bottom-2 right-2 bg-red-600 text-white text-xs font-bold p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM11 16H8V11H11V16ZM16 16H13V11H16V16ZM16 9H8V7H16V9Z"/>
          </svg>
        </div>
      )}
    </div>
    <h3 className="font-bold text-slate-800 group-hover:text-lime-600">{name}</h3>
  </div>
);

const Products = () => {
  const products = [
    { name: "Altivar Easy 310", imageUrl: "https://picsum.photos/seed/product1/300/300" },
    { name: "Back-UPS Pro", imageUrl: "https://picsum.photos/seed/product2/300/300" },
    { name: "Harmony XB5", imageUrl: "https://picsum.photos/seed/product3/300/300" },
    { name: "Easergy T300", imageUrl: "https://picsum.photos/seed/product4/300/300", hasBadge: true },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">New Products</h2>
          <a href="#" className="flex items-center space-x-2 text-slate-600 hover:text-lime-600 font-medium">
            <div className="w-8 h-8 rounded-full border border-slate-400 flex items-center justify-center">
              <ArrowRightIcon />
            </div>
            <span>View All Product</span>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => <ProductCard key={product.name} {...product} />)}
        </div>
        <div className="flex justify-center mt-12 space-x-2">
          <button className="w-3 h-3 bg-slate-300 rounded-full"></button>
          <button className="w-3 h-3 bg-lime-500 rounded-full"></button>
          <button className="w-3 h-3 bg-slate-300 rounded-full"></button>
        </div>
      </div>
    </section>
  );
};

export default Products;
