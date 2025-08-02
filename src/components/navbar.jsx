import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const navLinks = [
    {name: 'Home', link: '/'},
    {name: 'About Us', link: '/about'},
    // {name: 'Capability Statement', link: '/'},
    {name: 'Sectors', link: '/sectors'},
    {name: 'Services', link: '/services'},
  ]
  return (
    <div className='relative z-100 bg-transparent text-white font-semibold rounded-2xl rounded-t-none w-full h-[4rem] flex items-center justify-between px-10'>
      <div className='flex'>
        <img  src="/logo.png" alt="Logo" className='object-contain h-[3.56rem]' />
        <div className='flex flex-col gap-0.1 pt-1'>
          <p className='font-bold'>ENTERPRISE</p>
          <p>CONSULTING LLC</p>
        </div>
      </div>
      <div className='flex gap-8 items-center '>
        {
          navLinks.map((link) => (
            <div>
              <Link to={link.link} className={location.pathname === link.link ? 'border-b-2 pb-1' : ''}>{link.name}</Link>
            </div>
          ))
        }
        <button className='py-[.5rem] px-4 font-bold bg-gradient-to-br from-blue-400 to-blue-200 text-white'
        onClick={()=>{
          navigate('/contact');
        }}>Contact Us</button>
      </div>
    </div>
  )
}

export default Navbar