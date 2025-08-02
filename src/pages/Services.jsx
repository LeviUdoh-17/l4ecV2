import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/Service/HeroSection'
import FeaturedServices from '../components/Service/FeaturedServices'
import ServicesGrid from '../components/Service/ServicesGrid'
import CTA from '../components/Service/CTA'

const Services = () => {
  return (
    <div className='min-h-screen w-screen'>
        <HeroSection/>
        <FeaturedServices/>
        <ServicesGrid/>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default Services