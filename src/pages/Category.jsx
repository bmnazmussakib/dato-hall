import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ProductHero from '../components/ProductHero'
import ProductGrid from '../components/ProductGrid'
import { products } from '../lib/constants'
import HelpSection from '../components/HelpSection'

const Category = () => {


    console.log({ products })
    return (
        <>
            <Breadcrumb />
            <ProductHero />
            <ProductGrid products={products} productsPerPage={12} />
            <HelpSection />
        </>
    )
}

export default Category