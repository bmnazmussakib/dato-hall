import React from 'react';
import { ChatIcon, PaperPlaneIcon, XIcon, PhoneIcon, MapPinIcon } from '../icons/Icons';

const ContactLink = ({ icon, text, href }) => (
  <a href={href} className="flex items-center gap-3 text-gray-800 hover:text-gray-900 group">
    <div className="flex-shrink-0">{icon}</div>
    <span className="font-medium underline underline-offset-2 decoration-gray-400 group-hover:decoration-gray-800 transition">
      {text}
    </span>
  </a>
);

const InfoBlock = ({ title, description, children }) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="mt-1 text-gray-600">{description}</p>
    <div className="mt-4 space-y-3">
      {children}
    </div>
  </div>
);

const ContactInfo = () => {
  return (
    <div className="mt-16 lg:mt-0 space-y-10">
      <InfoBlock title="Chat with us" description="Speak to our friendly team via live chat.">
        <ContactLink icon={<ChatIcon />} text="Start a live chat" href="#" />
        <ContactLink icon={<PaperPlaneIcon />} text="Shoot us an email" href="mailto:hello@example.com" />
        <ContactLink icon={<XIcon />} text="Message us on X" href="#" />
      </InfoBlock>

      <InfoBlock title="Call us" description="Call our team Mon-Fri from 8am to 5pm.">
        <a href="tel:+15550000000" className="flex items-center gap-3 text-gray-800 hover:text-gray-900 group">
          <div className="flex-shrink-0"><PhoneIcon /></div>
          <span className="font-medium underline underline-offset-2 decoration-gray-400 group-hover:decoration-gray-800 transition">
            +1 (555) 000-0000
          </span>
        </a>
      </InfoBlock>

      <InfoBlock title="Visit us" description="Chat to us in person at our Melbourne HQ.">
        <a href="#" className="flex items-start gap-3 text-gray-800 hover:text-gray-900 group">
          <div className="flex-shrink-0 mt-1"><MapPinIcon /></div>
          <span className="font-medium underline underline-offset-2 decoration-gray-400 group-hover:decoration-gray-800 transition">
            100 Smith Street, Collingwood VIC 3066
          </span>
        </a>
      </InfoBlock>
    </div>
  );
};

export default ContactInfo;
