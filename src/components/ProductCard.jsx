import React from 'react';
import { Link } from 'react-router-dom';
// import { ApcLogo } from '../constants';

const ProductCard = ({ product, view }) => {

  if (view === 'list') {
    return (
      <div className="bg-white p-4 flex items-center w-full">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-24 h-24 object-contain mr-4"
        />
        <div className="flex-grow">
          <p className="text-sm text-gray-500 mb-1">{product.sku}</p>
          <h3 className="text-base text-gray-800 font-medium leading-snug">
            {product.name}
          </h3>
        </div>
        <div className="ml-4 flex-shrink-0">
            <Link
                to="/product-details"
                className="inline-block border border-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
            >
                View Details
            </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 flex flex-col items-center text-center h-full">
      <div className="mb-4">
        {/* <ApcLogo /> */}
      </div>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-40 h-40 object-contain my-4"
      />
      <div className="flex-grow">
        <p className="text-sm text-gray-500 mb-2">{product.sku}</p>
        <h3 className="text-base text-gray-800 font-medium leading-snug">
          {product.name}
        </h3>
      </div>
      <Link
        to="/product-details"
        className="mt-6 w-full inline-block border border-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
