import React from 'react'
import PartnerPortalBanner from '../components/ParentPortalBanner';
import FilterSection from '../components/FilterSection';
import { useState } from 'react';
import { useMemo } from 'react';
import PartnerList from '../components/PartnerList';

const allPartnersData = [
    {
        id: 1,
        companyName: 'AKTEA',
        logoUrl: 'https://i.imgur.com/2s9Vp1X.png',
        addressLines: ['58 rue Jean Duvert', '33290 Blanquefort', 'France'],
        phone: '0524077530',
        website: 'http://www.aktea.fr',
        country: 'France',
    },
    {
        id: 2,
        companyName: 'Applications2U, LLC DBA A2U',
        logoUrl: 'https://i.imgur.com/R3aG5r5.png',
        addressLines: ['6400 Brooktree Court Suite 120', 'Wexford, PA 15090', 'United States'],
        phone: '(888) 631-2231',
        website: 'https://www.a2u.net/',
        country: 'United States',
    },
    {
        id: 3,
        companyName: 'Aricoma Systems a.s.',
        logoUrl: 'https://i.imgur.com/8FkO7V7.png',
        addressLines: ['Hornopolní 3322/34', '702 00 Ostrava', 'Czechia'],
        phone: '+420 910 971 111',
        website: 'https://www.aricoma.com/home',
        country: 'Czechia',
    },
    {
        id: 4,
        companyName: 'Arolen, Colombia',
        logoUrl: 'https://i.imgur.com/tHqgQ3J.png',
        addressLines: ['Bogotá D.C.', 'Colombia'],
        phone: '(571) 635-0122',
        website: 'http://www.arolen.com',
        country: 'Colombia',
    },
    {
        id: 5,
        companyName: 'Tech Solutions GmbH',
        logoUrl: 'https://via.placeholder.com/150x50/cccccc/000000?text=TechGmbH',
        addressLines: ['Musterstraße 1', '10115 Berlin', 'Germany'],
        phone: '+49 30 12345678',
        website: 'https://www.techgmbh.de',
        country: 'Germany',
    },
    {
        id: 6,
        companyName: 'Innovate UK Ltd',
        logoUrl: 'https://via.placeholder.com/150x50/cccccc/000000?text=InnovateUK',
        addressLines: ['123 Innovation Drive', 'London, SW1A 0AA', 'United Kingdom'],
        phone: '+44 20 7946 0958',
        website: 'https://www.innovateuk.com',
        country: 'United Kingdom',
    },
    {
        id: 7,
        companyName: 'France Cyber Tech',
        logoUrl: 'https://via.placeholder.com/150x50/cccccc/000000?text=CyberTech',
        addressLines: ['101 Rue de Rivoli', '75001 Paris', 'France'],
        phone: '+33 1 23 45 67 89',
        website: 'https://www.cybertech.fr',
        country: 'France',
    },
    {
        id: 8,
        companyName: 'US Secure Networks',
        logoUrl: 'https://via.placeholder.com/150x50/cccccc/000000?text=SecureNet',
        addressLines: ['456 Security Blvd', 'Austin, TX 78701', 'United States'],
        phone: '(512) 555-0199',
        website: 'https://www.ussecure.net',
        country: 'United States',
    },
];

const ITEMS_PER_PAGE = 4;

const ResellerPartner = () => {
    const [selectedCountry, setSelectedCountry] = useState('Any');
    const [currentPage, setCurrentPage] = useState(1);

    const countries = useMemo(() => {
        const uniqueCountries = new Set(allPartnersData.map(p => p.country));
        return Array.from(uniqueCountries).sort();
    }, []);

    const filteredPartners = useMemo(() => {
        if (selectedCountry === 'Any') {
            return allPartnersData;
        }
        return allPartnersData.filter(partner => partner.country === selectedCountry);
    }, [selectedCountry]);
    
    const totalPages = Math.ceil(filteredPartners.length / ITEMS_PER_PAGE);

    const paginatedPartners = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return filteredPartners.slice(startIndex, endIndex);
    }, [currentPage, filteredPartners]);
    
    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        setCurrentPage(1); // Reset to first page on filter change
    };

    return (
        <div className="font-sans">
            {/* <Header /> */}
            <main>
                <PartnerPortalBanner />
                <FilterSection 
                    countries={countries}
                    selectedCountry={selectedCountry}
                    onCountryChange={handleCountryChange}
                    onApply={() => {}} // Apply is implicit on change for this design
                />
                <PartnerList partners={paginatedPartners} />
                {/* {totalPages > 1 && (
                    <Pagination 
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                )} */}
            </main>
        </div>
    );
};


export default ResellerPartner