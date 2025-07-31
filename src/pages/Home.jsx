import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import Services from '../components/Home/Services'
import PartnerSection from '../components/Home/PartnerSection'
import About from '../components/Home/About'
import Footer from '../components/Home/Footer'

const Home = () => {
  return (
    <div className='overflow-x-hidden w-screen'>
        <HeroSection/>
        <PartnerSection />
        <About />
        <Services/>
        <Footer/>
    </div>
  )
}

export default Home