import React from 'react';

const FilterSection = ({ countries, selectedCountry, onCountryChange, onApply }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row items-end gap-4">
                <div className="w-full sm:w-64">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                    <div className="relative">
                        <select
                            id="country"
                            name="country"
                            value={selectedCountry}
                            onChange={(e) => onCountryChange(e.target.value)}
                            className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm appearance-none"
                        >
                            <option value="Any">- Any -</option>
                            {countries.map(country => (
                                <option key={country} value={country}>{country}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <button
                    onClick={onApply}
                    className="w-full sm:w-auto bg-[#4a6da7] text-white font-semibold py-2 px-10 rounded-md hover:bg-[#3e5a8a] transition-colors duration-300"
                >
                    Apply
                </button>
            </div>
        </div>
    );
};

export default FilterSection;
