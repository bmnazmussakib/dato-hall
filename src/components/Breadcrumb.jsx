import React from 'react';
import Container from './common/Container';

const ChevronRightIcon = () => (
  <svg
    className="h-5 w-5 text-gray-400"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const Breadcrumb = () => {
  const paths = [
    { name: 'Home', href: '#' },
    { name: 'All products', href: '#' },
    { name: 'Critical Power, Cooling and Racks', href: '#' },
    { name: 'Racks and Accessories', href: '#' },
    { name: 'Racks and Enclosures', href: '#' },
    { name: 'APC NetShelter SX Enclosures', href: null },
  ];

  return (
    <>
    <Container>
      <nav className="flex py-6" aria-label="Breadcrumb">
      <ol role="list" className="flex flex-wrap items-center space-x-2 text-sm">
        {paths.map((path, index) => (
          <li key={path.name}>
            <div className="flex items-center">
              {index > 0 && <ChevronRightIcon />}
              {path.href ? (
                <a
                  href={path.href}
                  className={`ml-2 text-gray-500 hover:text-gray-700 ${
                    index > 0 ? '' : 'ml-0'
                  }`}
                >
                  {path.name}
                </a>
              ) : (
                <span className="ml-2 text-gray-700">{path.name}</span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
    </Container>
    </>
  );
};

export default Breadcrumb;
