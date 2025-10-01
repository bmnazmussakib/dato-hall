import React, { useState } from 'react';
import FilterSidebar from './FilterSidebar';
import ProductList from './ProductList';
import Container from './common/Container';

const ProductGrid = ({ products, productsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <>
      <div className=" bg-gray-50">
        <Container>
          <div className='py-12 grid grid-cols-1 lg:grid-cols-4 gap-8'>

          <div className="lg:col-span-1">
            <FilterSidebar />
          </div>
          <div className="lg:col-span-3">
            <ProductList
              products={currentProducts}
              totalProducts={products.length}
              productsPerPage={productsPerPage}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductGrid;
