import React from 'react';
// import { PhoneIcon, PartnerLevelLogo } from './icons';

const PartnerCard = ({ partner }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center py-6 border-b border-gray-200">
            {/* Company Logo */}
            <div className="md:col-span-3 flex justify-center md:justify-start">
                <img src={partner.logoUrl} alt={`${partner.companyName} logo`} className="max-h-16 max-w-full" />
            </div>

            {/* Address */}
            <div className="md:col-span-4 text-sm text-gray-700">
                <h3 className="font-bold text-base text-black mb-1">{partner.companyName}</h3>
                {partner.addressLines.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
                <p className="mt-2">
                    {/* <PhoneIcon /> */}
                    <span className="font-semibold">Phone:</span>{' '}
                    <a href={`tel:${partner.phone}`} className="text-red-600 hover:underline">{partner.phone}</a>
                </p>
                <a href={partner.website} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline break-all">
                    {partner.website}
                </a>
            </div>

            {/* Country */}
            <div className="md:col-span-2 text-sm text-gray-700 md:text-left">
                {partner.country}
            </div>

            {/* Partner Level */}
            <div className="md:col-span-3 flex justify-center md:justify-start">
                {/* <PartnerLevelLogo /> */}
            </div>
        </div>
    );
};

export default PartnerCard;
