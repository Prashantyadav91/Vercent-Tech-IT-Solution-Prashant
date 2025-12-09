import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import assets from '../assets/assets';

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
      <div className='flex items-center justify-between p-3 md:p-5 px-10 md:px-20 shadow-md fixed top-0 left-0 right-0 bg-white z-11'>
        <div className="w-25 md:w-30">
          <img src={assets.logo} alt="" />
        </div>
        <div className="md:block hidden">
          <ul className='flex gap-10 text-2xl cursor-pointer'>
            <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>Home</NavLink> </li>

            <li><NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>About us</NavLink> </li>

            <li><NavLink to='/service' className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>Services</NavLink> </li>

            <li><NavLink to='/careers' className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>Careers</NavLink> </li>

            <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>Contact us</NavLink> </li>
            <li><NavLink to='/faqs' className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>FAQs</NavLink> </li>
          </ul>
        </div>

        <a href='mailto:info@vercenttechit.com' className='text-xl bg-blue-500 py-3 px-10 text-white hidden md:flex  items-center justify-center rounded-lg'>Contact us</a>

        <div onClick={handleClick} className="flex md:hidden cursor-pointer text-2xl">
          &#9776;
        </div>

      </div>
      {
        extendNav &&
        <div className='w-[45%] h-screen bg-white fixed top-0 right-0 z-20 shadow-custom'>
          <div className='p-5 text-2xl cursor-pointer '>
            <p onClick={handleClick}>&#10006;</p>
          </div>
          <div className="mt-10 flex flex-col justify-between h-[83vh] p-2 md:hidden">
            <ul className='flex flex-col gap-10 mx-auto w-[80%] text-2xl cursor-pointer'>
              <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>Home</NavLink> </li>

              <li><NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>About us</NavLink> </li>

              <li><NavLink to='/service' className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>Services</NavLink> </li>

              <li><NavLink to='/careers' className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>Careers</NavLink> </li>

              <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>Contact us</NavLink> </li>
              <li><NavLink to='/faqs' className={({ isActive }) => isActive ? 'text-blue-400' : 'text-black'}>FAQs</NavLink> </li>
            </ul>
            <a href='mailto:info@vercenttechit.com' className='text-xl bg-blue-900 p-2 text-white flex items-center justify-center rounded-lg'>Contact us</a>
          </div>
        </div>
      }
    </>
  )
}

export default Navbar
