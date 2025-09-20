import React from 'react';

const Footer = () => {
  const footerLinks = {
    'Office': ['Home', 'Services', 'About Us', 'Features', 'Contacts'],
    'Links': ['Home', 'Services', 'About Us', 'Features', 'Contacts'],
    'Get in Touch': ['Legal Information', 'Privacy Policy', 'Terms of use', 'Cookie Notice'],
  };

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container mx-auto px-4 lg:py-24 md:py-16 py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
          {/* Office Column 1 */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">Office</h3>
            <ul className="space-y-2">
              {footerLinks['Office'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-white">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Office Column 2 */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">Office</h3>
            <ul className="space-y-2">
              {footerLinks['Office'].map(link => (
                <li key={link + '2'}>
                  <a href="#" className="hover:text-white">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">Links</h3>
            <ul className="space-y-2">
              {footerLinks['Links'].map(link => (
                <li key={link + '3'}>
                  <a href="#" className="hover:text-white">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Get in Touch */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">Get in Touch</h3>
            <ul className="space-y-2">
              {footerLinks['Get in Touch'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-white">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 lg:pt-8 pt-4 text-center text-sm">
          <p>DatoHall © 2025. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
