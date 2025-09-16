import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Features from '../components/Features'
import Products from '../components/Products'
import Blog from '../components/Blog'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Features />
      <Products />
      <Blog />
      <CTA />
    </>
  )
}

export default Home