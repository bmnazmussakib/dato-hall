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

const TopBar = () => (
  <div className="bg-lime-500 text-white text-sm">
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
  const navLinks = ["Home", "Products", "Software", "Services", "Solutions", "Homeowner", "Support", "Company"];

  return (
    <div className="bg-white sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center py-6">
          <div className="text-3xl font-bold text-lime-600">
            <span className="bg-lime-600 text-white px-2 rounded-md">Dato</span>Hall
          </div>

          <div className="relative w-5/10">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-400 py-1.5 px-3 w-full focus:outline-none focus:ring-1 focus:ring-lime-500"
            />
            <button
              className="absolute right-0 top-0 h-full px-2 text-white bg-lime-500 "
              aria-label="Search"
            >
              <SearchIcon />
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-4 ">
            <a href="#" className="font-medium text-slate-700 hover:text-lime-600">Login</a>
            <a
              href="#"
              className="bg-lime-500 text-white font-bold py-2 px-4 rounded-md hover:bg-lime-600 transition-colors"
            >
              Get a Free Quotation
            </a>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        <nav className="hidden lg:flex items-center space-x-6 text-black font-semibold ">
          {navLinks.map(link => (
            <a
              key={link}
              href="#"
              className={`pb-2 hover:text-lime-600 ${link === 'Home' ? 'text-lime-600 border-b-2 border-lime-600' : ''}`}
            >
              {link}
            </a>
          ))}
        </nav>
      </Container>
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-4 px-4 absolute w-full shadow-lg">
          <nav className="flex flex-col space-y-4 text-slate-700 font-medium">
            {navLinks.map(link => (
              <a
                key={link}
                href="#"
                className={`pb-2 hover:text-lime-600 ${link === 'Home' ? 'text-lime-600' : ''}`}
              >
                {link}
              </a>
            ))}
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#" className="font-medium text-slate-700 hover:text-lime-600">Login</a>
              <a
                href="#"
                className="bg-lime-500 text-white text-center font-bold py-2 px-4 rounded-md hover:bg-lime-600 transition-colors"
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
