import React from 'react';
import PartnerCard from './ParentCard';

const PartnerList = ({ partners }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Headers */}
            <div className="hidden md:grid grid-cols-12 gap-6 pb-2 border-b-2 border-gray-300">
                <div className="md:col-span-3">
                    <h4 className="font-bold text-gray-600 text-sm uppercase tracking-wider">Company</h4>
                </div>
                <div className="md:col-span-4">
                    <h4 className="font-bold text-gray-600 text-sm uppercase tracking-wider">Address</h4>
                </div>
                <div className="md:col-span-2">
                    <h4 className="font-bold text-gray-600 text-sm uppercase tracking-wider">Country</h4>
                </div>
                <div className="md:col-span-3">
                    <h4 className="font-bold text-gray-600 text-sm uppercase tracking-wider">Partner Level</h4>
                </div>
            </div>

            {/* Partner Cards */}
            <div>
                {partners.length > 0 ? (
                    partners.map(partner => <PartnerCard key={partner.id} partner={partner} />)
                ) : (
                    <div className="text-center py-10 text-gray-500">
                        No partners found for the selected country.
                    </div>
                )}
            </div>
        </div>
    );
};

export default PartnerList;
