
import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

const Contact = () => {
  return (
    <div className="bg-white max-w-6xl w-full mx-auto p-8 sm:p-10 lg:p-12">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          Contact our team
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600">
          Got any questions about the product or scaling on our platform? We're here to help. Chat to our friendly team 24/7 and get onboard in less than 5 minutes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;
