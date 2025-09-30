import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ProductHero from '../components/ProductHero'
import ProductGrid from '../components/ProductGrid'
import { products } from '../lib/constants'
import HelpSection from '../components/HelpSection'

const Category = () => {
    return (
        <>
            <div className="font-sans text-gray-800">
                <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb />
                    <ProductHero />
                    <ProductGrid products={products} productsPerPage={12} />
                </main>
                <HelpSection />
            </div>
        </>
    )
}

export default Category