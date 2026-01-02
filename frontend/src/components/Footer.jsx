import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets/assets'
import { FaEnvelope, FaPhone, FaLocationDot, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=' bg-black text-white'>
      <div className='flex-col md:flex-row md:flex justify-between py-5 md:py-8 px-5 md:px-17'>
        <div className='flex flex-col gap-5 w-full md:w-[30%]'>

          <div className="w-50">
            <img src={assets.logo} alt="" />
            <hr className='w-20 mt-5' />
          </div>

          <p>Vercent Tech IT Services is one of the leading Software Development/Staff Augmentation/IT Staffing services providers in the US. We bring together the clients and the suitable candidates, building a community in the IT industry.
          </p>
          <div className='flex flex-col gap-3'>
            <h1 className='text-2xl'>Social Media Links</h1>
            <hr className='w-15' />
            <div className='flex gap-5 text-2xl' >
              <a href='https://www.instagram.com/vercent_tech_it_solution/' target='_blank'><FaInstagram /></a>
              <a href='#'><FaXTwitter/></a>
              <a href='https://www.linkedin.com/company/vercent-tech-it-solution/posts/?feedView=all' target='_blank'><FaLinkedin/></a>
            </div>
          </div>
        </div>

        <div className='flex justify-between md:gap-45 mt-0 md:mt-10 '>
          <div className='mt-8 md:mt-0'>
            <h1 className='text-2xl'>Services <hr className='mt-2 w-22' /></h1>
            <div className='flex flex-col gap-5 mt-3'>
              <Link to='/service' className='text-lg'>Reseume Optimization</Link>
              <Link to='/service' className='text-lg'>Career Advisor</Link>
              <Link to='/service' className='text-lg'>Resume Marketing</Link>
              <Link to='/service' className='text-lg'>Compliance Onboarding</Link>
              <Link to='/service' className='text-lg'>Technical training</Link>
            </div>
          </div>

          <div className='mt-8 md:mt-0'>
            <h1 className='text-2xl'>Company <hr className='mt-2 w-25' /></h1>
            <div className='flex flex-col gap-5 mt-3'>
              <Link to='/about' className='text-lg'>About us</Link>
              <Link to='/service' className='text-lg'>Service</Link>
              <Link to='/careers' className='text-lg'>Careers</Link>
              <Link to='/contact' className='text-lg'>Contact us</Link>
              <Link to='/faqs' className='text-lg'>FAQs</Link>
            </div>
          </div>
        </div>

        <div className='w-full md:w-[20%] mt-8 md:mt-10'>
          <h1 className='text-2xl'>Contact <hr className='mt-2 w-22' /></h1>
          <div className='flex flex-col gap-5 mt-5'>
            <div className='flex items-center gap-3'>
              <FaPhone />
              <p>+1 (201) 839-2986 (USA)</p>
            </div>
            <div className='flex gap-2'>
              <FaLocationDot className='mt-1' />
              <p>257 Cornelison Avenue, Jersey City, New Jersey 07302</p>
            </div>

            <div className='flex  flex-col gap-3'>
              <div className='flex items-center gap-2'>
                <FaEnvelope />
                <p>info@vercenttechit.com</p>
              </div>
              <div className='flex items-center gap-2'>
                <FaEnvelope />
                <p>shashanky@vercenttechit.com</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='md:h-15 w-full md:w-[90%] mx-auto'>
        <hr className='text-white w-[90%] md:w-full mx-auto ' />
        <div className='flex justify-center items-center px-auto py-3 md:py-5'>
          <p className='text-xs md:text-sm'>Copyright © Vercent Tech IT Solution. All rights reserved.</p>
        </div>

      </div>

    </div>

  )
}

export default Footer
