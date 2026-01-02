import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import assets from '../assets/assets';
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  // const [nav, setNav] = useState('home')
  const [extendNav, setExtendNav] = useState(false);
  const handleClick = () => {
    setExtendNav(!extendNav);
  }

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    if (extendNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [extendNav]);

  return (
    <>
      <div className='flex items-center justify-between p-2 px-10 md:px-20 shadow-md fixed top-0 left-0 right-0 bg-white z-11'>
        <div className="w-25 md:w-30">
          <NavLink className='w-full ' to="/"><img src={assets.logo} alt="" /></NavLink>
        </div>
        <div className="md:block hidden">
          <ul className='flex gap-10 text-xl cursor-pointer'>
            <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>Home</NavLink> </li>

            <li><NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>About us</NavLink> </li>

            <li><NavLink to='/service' className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>Services</NavLink> </li>

            <li><NavLink to='/careers' className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>Careers</NavLink> </li>

            <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>Contact us</NavLink> </li>
            <li><NavLink to='/faqs' className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>FAQs</NavLink> </li>
          </ul>
        </div>

        <a href='mailto:info@vercenttechit.com' className='text-xl bg-blue-500 py-2 px-8 text-white hidden md:flex  items-center justify-center rounded-lg'>Contact us</a>

        <FaBars onClick={handleClick} className="flex md:hidden cursor-pointer text-2xl"/>

      </div>
      {
        extendNav &&
        <div className='md:hidden w-[45%] h-screen bg-white fixed top-0 right-0 z-20 shadow-custom'>
          <div className='p-5 text-2xl cursor-pointer '>
            {/* <p onClick={handleClick}>&#10006;</p> */}
            <FaXmark onClick={handleClick} />
          </div>
          <div className="mt-10 flex flex-col justify-between h-[83vh] p-2 md:hidden">
            <ul className='flex flex-col gap-10 mx-auto w-[80%] text-xl cursor-pointer'>

              <li><NavLink to='/' onClick={()=>setExtendNav(!extendNav)} className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>Home</NavLink> </li>

              <li><NavLink to='/about' onClick={()=>setExtendNav(!extendNav)} className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>About us</NavLink> </li>

              <li><NavLink to='/service' onClick={()=>setExtendNav(!extendNav)} className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>Services</NavLink> </li>

              <li><NavLink to='/careers' onClick={()=>setExtendNav(!extendNav)} className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>Careers</NavLink> </li>

              <li><NavLink to='/contact' onClick={()=>setExtendNav(!extendNav)} className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>Contact us</NavLink> </li>
              <li><NavLink to='/faqs' onClick={()=>setExtendNav(!extendNav)} className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>FAQs</NavLink> </li>

            </ul>
            <a href='mailto:info@vercenttechit.com' className='text-xl bg-blue-900 p-2 text-white flex items-center justify-center rounded-lg'>Contact us</a>
          </div>
        </div>
      }
    </>
  )
}

export default Navbar
