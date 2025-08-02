import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import Services from '../components/Home/Services'
import PartnerSection from '../components/Home/PartnerSection'
import About from '../components/Home/About'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        <HeroSection/>
        <Services/>
        <PartnerSection />
        <About />
        <Footer/>
    </div>
  )
}

export default Home