import React from 'react';
import {
  ProductSelectorIcon,
  GetQuoteIcon,
  WhereToBuyIcon,
  HelpCentreIcon,
} from '../lib/constants';
import Container from './common/Container';

const HelpCard = ({ icon, title, children }) => {
  return (
    <div className="bg-white p-6 border border-gray-200 rounded-lg flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        {icon}
      </div>
      <p className="text-gray-600 flex-grow">{children}</p>
    </div>
  );
};

const HelpSection = () => {
  return (
    <>
      <div className="py-16">
        <Container>
          <div className="">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Need help?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <HelpCard icon={<ProductSelectorIcon />} title="Product Selector">
                Quickly and easily find the right products and accessories for your
                applications.
              </HelpCard>
              <HelpCard icon={<GetQuoteIcon />} title="Get a Quote">
                Start your sales enquiry online and an expert will connect with you.
              </HelpCard>
              <HelpCard icon={<WhereToBuyIcon />} title="Where to buy?">
                Easily find the nearest Schneider Electric distributor in your
                location.
              </HelpCard>
              <HelpCard icon={<HelpCentreIcon />} title="Help Centre">
                Find support resources for all your needs, in one place.
              </HelpCard>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HelpSection;
