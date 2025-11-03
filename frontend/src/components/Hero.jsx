import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets/assets'


const Hero = () => {

  

  return (
    <div className={` flex items-center justify-center h-screen bg-[url(/src/assets/background.png)]`}>

      <div className="h-screen absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-evenly text-white px-6  mt-10 md:mt-20">

        <div className="flex flex-col gap-10 md:gap-15 w-full font-bold mt-5 md:mt-20 pb-10 text-center md:text-left">
          <div className='w-full flex flex-col gap-3'>
            <h1 className="text-3xl font-bold md:text-5xl leading-snug text-blue-400">
              Welcome to Vercent Tech IT Solution
            </h1>
            <p className="text-md md:text-xl font-light">
              Connect with the top of your industry with Vercent Tech IT's staffing services.
            </p>
          </div>

          <p className="text-lg md:text-2xl font-semibold">
            Connecting top tech talent with leading innovations.
          </p>

          <div className='font-light flex flex-col md:flex-row gap-3 md:gap-5'><p> <span className='text-yellow-200'>★ ★ ★ ★ ★</span> 4.9/5-2500+ Reviews</p><p>Trustes by 500+ hring partners</p></div>
          <Link
            to="/about"
            className="border border-white text-white py-4 px-11 w-fit mx-auto md:mx-0 rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Explore more
          </Link>

        </div>

      </div>


    </div>
  )
}

export default Hero
