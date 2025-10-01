import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import { PiGridFourLight, PiListBullets } from 'react-icons/pi';


const ProductList = ({
  products,
  totalProducts,
  productsPerPage,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const startItem = (currentPage - 1) * productsPerPage + 1;
  const endItem = Math.min(startItem + productsPerPage - 1, totalProducts);
  const [view, setView] = useState('grid');

  return (
    <div>
      <div className="flex justify-end items-center gap-3 mb-6 pb-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <button onClick={() => setView('list')} className={`p-1 text-2xl ${view === 'list' ? 'text-[#27ad4c]' : 'text-black'}`}>
            <PiListBullets />
          </button>
          <button onClick={() => setView('grid')} className={`p-1 text-2xl ${view === 'grid' ? 'text-[#27ad4c]' : 'text-black'}`}>
            <PiGridFourLight />
          </button>
        </div>
        <p className="text-sm text-gray-500">
          {startItem} - {endItem} of {totalProducts} products
        </p>
      </div>

      <div className={view === 'grid' 
        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200" 
        : "flex flex-col gap-px bg-gray-200 border border-gray-200"
      }>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} view={view} />
        ))}
      </div>

      <div className="mt-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default ProductList;
