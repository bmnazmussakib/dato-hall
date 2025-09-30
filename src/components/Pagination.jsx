import React from 'react';

const ChevronLeftIcon = ({ disabled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 ${disabled ? 'text-gray-300' : 'text-gray-500'}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronRightIcon = ({ disabled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 ${disabled ? 'text-gray-300' : 'text-gray-500'}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageSelect = (e) => {
    onPageChange(Number(e.target.value));
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center space-x-4 text-gray-600">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="disabled:opacity-50"
      >
        <ChevronLeftIcon disabled={currentPage === 1} />
      </button>

      <div className="flex items-center space-x-2">
        <span>Page</span>
        <select
          value={currentPage}
          onChange={handlePageSelect}
          className="border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
        >
          {pageNumbers.map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <span>/ {totalPages}</span>
      </div>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="disabled:opacity-50"
      >
        <ChevronRightIcon disabled={currentPage === totalPages} />
      </button>
    </div>
  );
};

export default Pagination;
