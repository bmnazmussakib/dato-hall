import React, { useState, useRef } from 'react';
import { 
    products, 
    documents, 
    specifications, 
    galleryImages, 
    faqItems,
    PdfIcon, 
    CadIcon,
    ChevronDownIcon,
} from '../lib/constants';
import Breadcrumb from '../components/Breadcrumb';
import ProductHero from '../components/ProductHero';
import HelpSection from '../components/HelpSection';
import ProductCard from '../components/ProductCard';

const Lightbox = ({ imageUrl, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt="Enlarged gallery view" className="max-w-[90vw] max-h-[90vh] rounded-lg" />
        <button 
          onClick={onClose} 
          className="absolute -top-4 -right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold"
          aria-label="Close lightbox"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

const MainDocuments = () => (
    <section aria-labelledby="documents-heading">
        <h2 id="documents-heading" className="text-2xl font-light mb-6">Main documents</h2>
        <div className="border border-gray-200 rounded-lg p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
                {documents.map((doc, index) => (
                    <a href="#" key={index} className="flex items-center text-gray-700 hover:text-green-600 group">
                        {doc.type === 'pdf' ? <PdfIcon /> : <CadIcon />}
                        <span className="ml-3 font-medium text-sm group-hover:underline">{doc.name}</span>
                    </a>
                ))}
            </div>
            <div className="mt-6">
                <a href="#" className="text-sm font-semibold text-green-600 hover:text-green-800 hover:underline">See all documents</a>
            </div>
        </div>
    </section>
);

const Description = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section aria-labelledby="description-heading">
      <h2 id="description-heading" className="text-2xl font-light mb-6">Description</h2>
      <div className={`prose max-w-none text-gray-600 ${!isExpanded ? 'line-clamp-3' : ''}`}>
        <p>Schneider Electric's OffGrid Portable Power Station is designed for outdoor enthusiasts and home users to provide consistent, reliable power whenever you need it - anytime, anywhere. Weighing 5.5 kg (12.1 lb), the Portable Power Station is compact for easy portability without compromising durability. It features 2 pure sine wave AC outlets, 3 USB-A and 1 USB-C PD ports up to PD60W The Portable Power Station comes with three ways to recharge: wall, solar, and car. It takes ~7 hours to fully charge via wall outlet, or 3 hours by connecting it to the optional 200W solar panel accessory. Designed with sustainability in mind, the Portable Power Station has casing made with 60% post-consumer recycled plastic and comes in sustainable packaging. It comes with a 2 year warranty for your peace of mind.</p>
      </div>
      <button onClick={() => setIsExpanded(!isExpanded)} className="text-sm font-semibold text-green-600 hover:text-green-800 mt-2 flex items-center">
        {isExpanded ? 'Read less' : 'Read more'}
        <span className={`ml-1 transition-transform transform ${isExpanded ? 'rotate-180' : ''}`}>
          <ChevronDownIcon />
        </span>
      </button>
    </section>
  );
};

const Specifications = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderSection = (title, items) => (
    <div key={title}>
      <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6 first:mt-0">{title}</h3>
      <dl>
        {items.map(item => (
          <div key={item.key} className="grid grid-cols-1 md:grid-cols-3 gap-2 py-3 border-b border-gray-100">
            <dt className="font-medium text-gray-600">{item.key}</dt>
            <dd className="text-gray-800 md:col-span-2">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );

  return (
    <section aria-labelledby="specs-heading">
        <h2 id="specs-heading" className="text-2xl font-light mb-6">Specifications</h2>
        <div className="border border-gray-200 rounded-lg p-6">
          {renderSection('Overview', specifications.Overview)}
          {renderSection('Main', specifications.Main)}
          <div className={`${isExpanded ? 'block' : 'hidden'}`}>
            {renderSection('Physical', specifications.Physical)}
          </div>
          <button onClick={() => setIsExpanded(!isExpanded)} className="text-sm font-semibold text-green-600 hover:text-green-800 mt-4 flex items-center">
            {isExpanded ? 'Show less specifications' : 'Show more specifications'}
            <span className={`ml-1 transition-transform transform ${isExpanded ? 'rotate-180' : ''}`}>
             <ChevronDownIcon />
            </span>
          </button>
        </div>
    </section>
  );
};

const Gallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openLightbox = (imageUrl) => {
        setSelectedImage(imageUrl);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setSelectedImage(null);
    };

    return (
        <section aria-labelledby="gallery-heading">
            <h2 id="gallery-heading" className="text-2xl font-light mb-6">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((img, index) => (
                    <button key={index} onClick={() => openLightbox(img)} className="aspect-video overflow-hidden rounded-lg group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        <img src={img} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </button>
                ))}
            </div>
            <div className="text-center mt-6">
                <button className="text-sm font-semibold text-green-600 hover:text-green-800 flex items-center mx-auto">
                    Show more <ChevronDownIcon />
                </button>
            </div>
            {lightboxOpen && selectedImage && <Lightbox imageUrl={selectedImage} onClose={closeLightbox} />}
        </section>
    );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-2xl font-light mb-6">FAQ</h2>
        <div className="space-y-4">
            {faqItems.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                    <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex justify-between items-center p-4 text-left font-semibold" aria-expanded={openIndex === index}>
                        {item.q}
                        <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                           <ChevronDownIcon />
                        </span>
                    </button>
                    {openIndex === index && (
                        <div className="px-4 pb-4 text-gray-600">
                            {item.a}
                        </div>
                    )}
                </div>
            ))}
        </div>
         <p className="text-center mt-8 text-sm text-gray-500">
            Still have questions? Check the <a href="#" className="text-green-600 font-semibold hover:underline">help center</a> or email us at <a href="mailto:Support@Example.com" className="text-green-600 font-semibold hover:underline">Support@Example.com</a>
        </p>
    </section>
  );
};

const RelatedProducts = () => {
  const scrollContainer = useRef(null);
  
  const scroll = (direction) => {
    if (scrollContainer.current) {
        const scrollAmount = scrollContainer.current.clientWidth * 0.8;
        scrollContainer.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    }
  };

  return (
    <section aria-labelledby="related-heading">
      <div className="flex justify-between items-center mb-6">
        <h2 id="related-heading" className="text-2xl font-light">Related products</h2>
        <div className="flex space-x-2">
            <button onClick={() => scroll('left')} aria-label="Scroll left" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50">&lt;</button>
            <button onClick={() => scroll('right')} aria-label="Scroll right" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50">&gt;</button>
        </div>
      </div>
      <div ref={scrollContainer} className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
        {products.map(product => (
            <div key={product.id} className="flex-shrink-0 w-60">
              <ProductCard product={product} />
            </div>
        ))}
      </div>
    </section>
  );
};

const ProductDetails = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb />
        <ProductHero />
      </div>

      <div className="border-t border-gray-200 mt-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          <MainDocuments />
          <Description />
          <Specifications />
          <Gallery />
          <FAQ />
          <RelatedProducts />
        </div>
      </div>
      <HelpSection />
    </div>
  );
};

export default ProductDetails;
