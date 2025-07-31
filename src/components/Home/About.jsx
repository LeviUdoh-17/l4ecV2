import React from 'react'

const About = () => {
  return (
    <div className='bg-[#1A1787] px-20 py-10'>
        <div class="flex ml-10 items-center">
          <div
            class="w-10 flex rounded-full h-[.2rem] mt-[.3rem] items-center bg-blue-200"
          ></div>
          <span class="ml-2 text-blue-200 text-2xl font-bold"
            >About Company</span
          >
        </div>
        <div>
          <h3
            class="text-4xl font-bold text-sky-200 flex flex-col items-start mb-10"
          >
            <span>Consulting with clarity. </span
            ><span>Delivering with purpose.</span>
          </h3>
          <p class="text-lg font-semibold text-sky-100 my-10 text-left">
            At L4 Enterprise Consulting, we’re not just consultants — we’re
            strategic partners. With over 15 years of cross-industry experience,
            we specialize in guiding businesses and government organizations
            through complex digital transformations, operational challenges, and
            strategic shifts. Our approach is rooted in purpose, driven by
            outcomes, and backed by proven technical expertise. Whether it’s
            modernizing workflows, delivering tailored tech solutions, or
            optimizing performance — we deliver results that move the needle. We
            believe in human-first transformation powered by technology —
            because when purpose leads, success follows.
          </p>
        </div>
    </div>
  )
}

export default About