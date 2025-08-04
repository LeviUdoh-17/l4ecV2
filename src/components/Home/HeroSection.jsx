import React from 'react'
import Navbar from '../navbar'

const HeroSection = () => {
  return (
    <section id='Hero section' className='relative pt-30 h-screen lg:h-[130vh] bg-[#1A1787]'>
        <Navbar/> 
        {/* DESKTOP VIEW */}
        <div id='Container' className='hidden relative z-10 lg:flex '>
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
                <img src="/2.png" alt="human in the hero section" className='object-contain w-[30rem] absolute z-30 top-[1rem] lg:top-[-0.2rem] right-20 xl:right-10 xl:w-[40rem]' />
            </div>
        </div>
        {/* MOBILE VIEW */}
        <div className='lg:hidden h-screen'>
            <img src="/heroBg.png" className='object-cover h-full absolute top-0' alt="" />
            <div className='relative z-10 px-4 sm:px-10 text-center text-white pt-9'>
                <p className='text-xs font-semibold font-sans'>WELCOME TO L4EC</p>
                <h3 className='text-4xl md:text-5xl mt-4 mb-10 font-bold'>Transforming Organizations Through Smart Solutions</h3>
                <p className='text-lg md:text-xl '>We deliver tailored consulting, digital transformation, and technology services to elevate business outcomes.</p>
                <div className='mt-10 flex flex-col justify-center items-center gap-3'>
                    <button className='px-15 py-3 bg-blue-400 font-bold hover:bg-white text-[#1A1787]'>About</button>
                    <button className='border border-white px-15 py-3 hover:bg-white hover:text-[#1A1787] font-semibold'>Capability Statement</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection