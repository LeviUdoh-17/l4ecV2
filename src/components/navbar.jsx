import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LuAlignJustify, LuX } from 'react-icons/lu';

const Navbar = () => {
  const navigate = useNavigate();
  const navLinks = [
    {name: 'Home', link: '/'},
    {name: 'About Us', link: '/about'},
    // {name: 'Capability Statement', link: '/'},
    {name: 'Sectors', link: '/sectors'},
    {name: 'Services', link: '/services'},
  ]
  const [toggle, setToggle] = useState(false)
  const handleClick = () => setToggle(!toggle);
  return (
    <div className={` z-100 bg-transparent text-white font-semibold rounded-2xl rounded-t-none w-full h-[4rem] flex items-center px-4 md:px-10 ${toggle ? ('pt-4 h-[20rem] bg-white/10 backdrop-blur-lg flex-col gap-5 absolute'): 'justify-between relative'}`}>
      <div className='flex justify-between w-full items-center'>
        <div className='flex'>
          <img  src="/logo.png" alt="Logo" className='object-contain h-[3.56rem]' />
          <div className='flex flex-col gap-0.1 pt-1'>
            <p className='font-sans'>ENTERPRISE</p>
            <p className='font-sans font-semibold'>CONSULTING LLC</p>
          </div>
        </div>
        <button className='md:hidden border border-white/40 p-2 rounded-lg bg-white/10' onClick={handleClick}>
          {
            toggle ? (<LuX/>) : (<LuAlignJustify/>)
          }
        </button>
      </div>
      <div className={`items-center w-full font-sans ${toggle ? 'flex flex-col gap-4 ' : 'gap-8 hidden'}`}>
        {
          navLinks.map((link) => (
            <div>
              <Link to={link.link} className={`${location.pathname === link.link ? 'border-b-2 pb-1' : ''} truncate`}>{link.name}</Link>
            </div>
          ))
        }
        <button className='py-[.5rem] truncate w-fit px-4 font-bold bg-gradient-to-br from-blue-400 to-blue-200 text-white'
        onClick={()=>{
          navigate('/contact');
        }}>Contact Us</button>
      </div>
      <div className={`gap-8 hidden md:flex items-center font-sans`}>
        {
          navLinks.map((link) => (
            <div>
              <Link to={link.link} className={`${location.pathname === link.link ? 'border-b-2 pb-1' : ''} truncate`}>{link.name}</Link>
            </div>
          ))
        }
        <button className='py-[.5rem] truncate w-fit px-4 font-bold bg-gradient-to-br from-blue-400 to-blue-200 text-white'
        onClick={()=>{
          navigate('/contact');
        }}>Contact Us</button>
      </div>
    </div>
  )
}

export default Navbar