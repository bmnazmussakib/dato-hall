import React from 'react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
        { name: 'Press', href: '/press' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Community', href: '/community' },
        { name: 'Guides', href: '/guides' },
        { name: 'API Docs', href: '/docs' },
        { name: 'Status', href: '/status' },
      ],
    },
    {
      title: 'Products',
      links: [
        { name: 'Pricing', href: '/pricing' },
        { name: 'Features', href: '/features' },
        { name: 'Integrations', href: '/integrations' },
        { name: 'Security', href: '/security' },
        { name: 'Demo', href: '/demo' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'License', href: '/license' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container mx-auto px-4 lg:py-24 md:py-16 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-bold text-white text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="hover:text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-700 lg:pt-8 pt-4 text-center text-sm">
          <p>DatoHall © 2025. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
