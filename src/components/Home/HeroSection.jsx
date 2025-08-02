import React from 'react'
import Navbar from '../navbar'

const HeroSection = () => {
  return (
    <section id='Hero section' className='relative h-[130vh] bg-[#1A1787]'>
        <Navbar/> 
        <div id='Container' className='relative z-10 flex '>
            <div id='Left' className='mt-30 ml-15 flex flex-col text-white'>
                <p className='text-xs font-bold font-sans'>WELCOME TO L4EC</p>
                <h3 className='text-5xl mt-5 mb-10 font-bold'>Transforming Organizations Through Smart Solutions</h3>
                <p className='text-xl '>We deliver tailored consulting, digital transformation, and technology services to elevate business outcomes.</p>
                <div className='mt-10'>
                    <button className='px-15 py-3 mr-10 bg-blue-400 font-bold hover:bg-white text-[#1A1787]'>About</button>
                    <button className='border border-white px-15 py-3 hover:bg-white hover:text-[#1A1787] font-semibold'>Capability Statement</button>
                </div>
            </div>
            <div id='Right' className='relative w-full h-full'>
                <img src="/bgPattern.png" alt="Background pattern" className='absolute object-contain w-[38rem] right-10 top-0' />
                <img src="/humanHero.png" alt="human in the hero section" className='object-contain h-[35rem] absolute z-30 top-[3.72rem] right-15 ' />
            </div>
        </div>
    </section>
  )
}

export default HeroSection