
import React from 'react';

const PartnerPortalBanner = () => {
    return (
        <div className="bg-gray-50/75 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="md:w-2/3">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Already a partner?</h2>
                        <p className="text-gray-600">
                            Access the partner portal to register an opportunity or additional authorized users, access the pricelist, marketing material, or training materials.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <button className="bg-white border-2 border-gray-800 text-gray-800 font-semibold py-2 px-8 hover:bg-gray-800 hover:text-white transition-colors duration-300">
                            Partner Portal
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerPortalBanner;
