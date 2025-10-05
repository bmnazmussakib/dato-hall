import React, { useState } from 'react';
import {
  ClockIcon,
  MailIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  SearchIcon,
  MenuIcon,
  XIcon
} from '../../icons/Icons';
import Container from './Container';
import { Link } from 'react-router-dom';

const TopBar = () => (
  <div className="bg-[#27ad4c] text-white text-sm">
    <Container>
      <div className="py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <ClockIcon />
            <span>Mon – Fri 8:00 – 18:00 / Sunday 8:00 – 14:00</span>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <MailIcon />
            <a href="mailto:info@" className="hover:underline">info@</a>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-3">
          <a href="#" aria-label="Facebook"><FacebookIcon /></a>
          <a href="#" aria-label="Twitter"><TwitterIcon /></a>
          <a href="#" aria-label="LinkedIn"><LinkedinIcon /></a>
          <a href="#" aria-label="Instagram"><InstagramIcon /></a>
        </div>
      </div>
    </Container>
  </div>
);

const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Reseller", href: "/reseller-partner" },
    { name: "Software", href: "/software" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Homeowner", href: "/homeowner" },
    { name: "Support", href: "/support" },
    { name: "Company", href: "/company" },
  ];

  return (
    <div className="bg-white sticky top-0 z-50 shadow-sm lg:shadow-none">
      <Container>
        <div className="flex justify-between items-center md:py-6 py-3">
          <div className="lg:w-[180px] md:w-[150px] w-[120px]">
            <a href="/">
              <img src="/assets/images/logo.svg" alt="" />
            </a>
          </div>

          <div className="relative w-5/10 hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-400 py-1.5 px-3 w-full focus:outline-none focus:ring-1 focus:ring-[#27ad4c]"
            />
            <button
              className="absolute right-0 top-0 h-full px-2 text-white bg-[#27ad4c] "
              aria-label="Search"
            >
              <SearchIcon />
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-4 ">
            <a href="#" className="font-medium text-slate-700 hover:text-[#27ad4c]">Login</a>
            <a
              href="#"
              className="bg-[#27ad4c] text-white font-bold py-2 px-4 rounded-md hover:bg-[#27ad4c] transition-colors"
            >
              Get a Free Quotation
            </a>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className='text-[#27ad4c]'>
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <nav className="hidden lg:flex items-center space-x-6 text-black font-semibold">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.href}
              className={`pb-2 hover:text-[#27ad4c] ${link.name === "Home" ? "text-[#27ad4c] border-b-2 border-[#27ad4c]" : ""
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </Container>
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-4 px-4 absolute w-full shadow-lg">
          <div className="relative w-full sm:hidden mb-4">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-400 py-1.5 px-3 w-full focus:outline-none focus:ring-1 focus:ring-[#27ad4c]"
            />
            <button
              className="absolute right-0 top-0 h-full px-2 text-white bg-[#27ad4c] "
              aria-label="Search"
            >
              <SearchIcon />
            </button>
          </div>
          <nav className="flex flex-col space-y-4 text-slate-700 font-medium">
            {navLinks.map(link => (
              <a
                key={link}
                href="#"
                className={`pb-2 hover:text-[#27ad4c] ${link === 'Home' ? 'text-[#27ad4c]' : ''}`}
              >
                {link}
              </a>
            ))}
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#" className="font-medium text-slate-700 hover:text-[#27ad4c]">Login</a>
              <a
                href="#"
                className="bg-[#27ad4c] text-white text-center font-bold py-2 px-4 rounded-md hover:bg-[#27ad4c] transition-colors"
              >
                Get a Free Quotation
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

const Header = () => (
  <header>
    <TopBar />
    <MainNav />
  </header>
);

export default Header;
