import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets/assets'

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
              <a href='https://www.instagram.com/rudrayadav91_18/' target='_blank'><i class="fa-brands fa-instagram"></i></a>
              <a href='#'><i class="fa-brands fa-x-twitter"></i></a>
              <a href='https://www.linkedin.com/in/shashankyadavumanist/' target='_blank'><i class="fa-brands fa-linkedin"></i></a>
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
              <span >&#128222;</span>
              <p>+1 (236) 305-8514</p>
            </div>
            <div className='flex gap-2'>
              <p>&#x1F4CC;</p>
              <p>257 Cornelison Avenue, Jersey City, New Jersey 07302</p>
            </div>

            <div className='flex flex-col gap-3'>
              <div className='flex gap-2'>
                <span>&#128232;</span>
                <p>info@vercenttechit.com</p>
              </div>
              <div className='flex gap-2'>
                <span>&#128232;</span>
                <p>shashanky@vercenttechit.com</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='md:h-15 w-full md:w-[90%] mx-auto'>
        <hr className='text-white w-[90%] md:w-full mx-auto ' />
        <div className='flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center md:mt-5 px-5 py-2 md:py-0'>
          <p className='text-sm'>Copyright © Vercent Tech IT Solution. All rights reserved.</p>
          <p className='text-sm'><a target='_blank' href="https://www.linkedin.com/in/prashant-yadav-a524b1243/">Web Dev by Prashant</a> </p>
        </div>

      </div>

    </div>

  )
}

export default Footer
