import React from 'react';

export const mainProduct = {
    name: 'APC NetShelter SX, Server Rack Enclosure, 18U, Black, 925H x 600W x 900D mm',
    sku: 'AR3006',
    images: [
        'https://i.ibb.co/L5Sgqg8/ar3006-main.png',
        'https://i.ibb.co/hH7s92s/ar3006-thumb1.png',
        'https://i.ibb.co/8Yj0zW8/ar3006-thumb2.png',
    ],
    features: [
        'Compact design fits tight spaces, ideal for small offices and remote deployments',
        'Vendor-neutral EIA-310 19” rack mounting compatibility with adjustable rails',
        'Ready for low to medium density edge computing',
        'Two zero-U accessory mounting channels to maximize equipment space',
    ],
};

export const documents = [
    { name: 'Product Datasheet', type: 'pdf' },
    { name: 'User guide', type: 'pdf' },
    { name: 'Instruction sheet', type: 'pdf' },
    { name: 'CAD', type: 'cad' },
    { name: 'Environmental Disclosure', type: 'pdf' },
    { name: 'Instruction sheet', type: 'pdf' },
];

export const specifications = {
    Overview: [
        { key: 'Presentation', value: 'An industry-standard rack with the most standard features for speed of installation and integration. Ready for low to medium density edge computing applications that require rack spaces for a secure and discrete solution for IT devices.' },
    ],
    Main: [
        { key: 'Lead time', value: 'Usually in Stock' },
        { key: 'Product or component type', value: 'Rack enclosure' },
        { key: 'Number of rack unit', value: '18U' },
        { key: 'Provided equipment', value: 'Casters, Doors, Key(s), Leveling feet, Roof, Side panels' },
    ],
    Physical: [
        { key: 'Height', value: '925 mm' },
        { key: 'Width', value: '600 mm' },
        { key: 'Depth', value: '900 mm' },
        { key: 'Net weight', value: '67.13 kg' },
        { key: 'Colour', value: 'Black' },
        { key: 'Mounting preference', value: 'No preference' },
    ],
};

export const galleryImages = [
    'https://i.ibb.co/5cQ3Nnk/gallery1.jpg',
    'https://i.ibb.co/SJVzL0s/gallery2.jpg',
    'https://i.ibb.co/mBDvYfG/gallery3.jpg',
    'https://i.ibb.co/rfnf2M8/gallery4.jpg',
    'https://i.ibb.co/K79fB95/gallery5.jpg',
    'https://i.ibb.co/Wc63M9d/gallery6.jpg',
];

export const faqItems = [
    { q: 'Can I trial Webflow before paying?', a: 'Yes, you can. We offer a free trial period for you to explore our features and see if Webflow is the right fit for your needs. No credit card required.' },
    { q: 'What is a project?', a: 'A project is a complete website or application you build with Webflow. Each project has its own set of pages, assets, and settings.' },
    { q: 'What can I white label?', a: 'With our premium plans, you can remove Webflow branding from your projects and use your own custom domain, giving you a fully white-labeled experience.' },
    { q: 'How much traffic can the hosting handle?', a: 'Our hosting is built on a global CDN (Content Delivery Network) and is designed to handle high traffic volumes with fast loading speeds and reliable uptime.' },
    { q: 'What kind of support does Webflow provide?', a: 'We offer comprehensive support through our help center, community forums, and email support for paid plans. Our team is ready to assist you with any questions.' },
    { q: 'How long does it take to learn Webflow?', a: 'Learning time varies, but with our tutorials and intuitive interface, many users start building impressive websites within a few hours to a few days.' },
];


export const products = [
    { id: '3', sku: 'AR3003', name: 'APC NetShelter SX, Server Rack Enclosure, 12U, Black, 658H x 600W x 900D mm', imageUrl: '/assets/images/server-rack.png' },
    { id: '4', sku: 'AR3105', name: 'APC NetShelter SX, Server Rack Enclosure, 45U, Black, 2124H x 600W x 1070D mm', imageUrl: '/assets/images/server-rack.png' },
    { id: '8', sku: 'AR3300', name: 'APC NetShelter SX, Server Rack Enclosure, 42U, Black, 1991H x 600W x 1200D mm', imageUrl: '/assets/images/server-rack.png' },
    { id: '9', sku: 'AR3140', name: 'APC NetShelter SX, Networking Rack Enclosure, 42U, Black, 1991H x 750W x 1070D mm', imageUrl: '/assets/images/server-rack.png' },
    { id: '5', sku: 'AR3350', name: 'APC NetShelter SX, Server Rack Enclosure, 42U, Black, 1991H x 750W x 1200D mm', imageUrl: '/assets/images/server-rack.png' },
    { id: '2', sku: 'AR3006', name: 'APC NetShelter SX, Server Rack Enclosure, 18U, Black, 925H x 600W x 900D mm', imageUrl: '/assets/images/server-rack.png' },
];

export const ApcLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="25" viewBox="0 0 115.63 47.24">
        <path d="M23.62 47.24L0 0h10.23l18.51 37.49L25.29 0h10.22L11.89 47.24zM81.5 28.18H54.02v19.06H43.8V0h37.7v10.22H54.02v7.74h27.48zM115.63 28.32c0 10.9-7.39 18.92-18.86 18.92s-18.86-8.02-18.86-18.92V0h10.22v28.32c0 5.4 3.4 8.7 8.64 8.7s8.64-3.3 8.64-8.7V0h10.22z" fill="#00a34d"></path>
    </svg>
);

export const ProductSelectorIcon = () => (
    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);

export const GetQuoteIcon = () => (
    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
);

export const WhereToBuyIcon = () => (
    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);

export const HelpCentreIcon = () => (
    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

export const CheckIcon = () => (
    <svg className="w-5 h-5 text-green-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);

export const StarIcon = () => (
    <svg className="w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.539 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
);

export const LocationIcon = () => (
    <svg className="w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const ContactIcon = () => (
    <svg className="w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export const PdfIcon = () => (
    <svg className="w-6 h-6 text-red-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

export const CadIcon = () => (
    <svg className="w-6 h-6 text-gray-700 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
    </svg>
);

export const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

export const ChevronUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
    </svg>
);