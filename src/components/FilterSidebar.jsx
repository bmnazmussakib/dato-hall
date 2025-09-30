import React from 'react';

const ChevronUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const FilterSidebar = () => {
  return (
    <aside>
      <h2 className="text-sm font-medium text-gray-500 mb-4">Filter by:</h2>
      <div className="border border-gray-200 rounded-md">
        <div className="p-4 border-b border-gray-200">
          <button className="flex justify-between items-center w-full text-left">
            <span className="font-semibold text-gray-800">Category</span>
            <ChevronUpIcon />
          </button>
        </div>
        <div className="p-4">
          <ul>
            <li className="flex items-center py-2">
              <div className="w-1 h-6 bg-green-600 rounded-full mr-3"></div>
              <a href="#" className="text-gray-800 font-semibold">
                Rack Enclosures
              </a>
            </li>
            <li className="py-2 pl-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Accessories
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
