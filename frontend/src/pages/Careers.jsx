import React from 'react'
import assets from '../assets/assets'

const Careers = () => {
  const openings = [
    {
      icon: 'fa-solid fa-code',
      title: 'Software Engineer',
      text: 'Looking for experienced developers skilled in JavaScript, Reactjs and Node.js. Remote and on-site position available.'
    },
    {
      icon: 'fa-solid fa-headphones',
      title: 'IT Support Specialist',
      text: 'Provide technical support and troubleshooting for enterprise-level clients.Hybrid work model.'
    },
    {
      icon: 'fa-regular fa-hard-drive ',
      title: 'DevOps Engineer',
      text: 'Seeking experts in cloud platforms, CI/CD, and Kubernetes for a dynamic DevOps team.'
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Cybersecurity Analyst',
      text: 'Protect systems from security threats and ensure data integrity for enterprise clients.'
    },


  ]
  return (

    <div className='mt-15 md:mt-20 bg-gray-100'>
      <div className='pt-10 flex flex-col gap-5 text-center w-ful md:w-[50%] mx-auto'>
        <h1 className='text-4xl font-semibold'>Join Our Team</h1>
        <p className='text-xl'>Discover exciting opportunities in the IT industry,We connect top talent with leading companies accross various domains.</p>
      </div>

      <div className='flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-evenly w-full p-3 md:p-7'>

        <div className='order-2 md:order-1 flex flex-col gap-5 w-full md:w-[45%]'>
          <h1 className='text-2xl font-semibold'>Current Openings</h1>
          <div className='flex flex-col gap-7'>
            {
              openings.map((item, index) => (
                <div key={index} className='flex gap-3 shadow-custom p-3 md:p-5 rounded-lg'>
                  <div className='text-3xl text-blue-400'>
                    <i class={item.icon}></i>
                  </div>
                  <div className='flex flex-col'>
                    <h1 className='text-2xl font-semibold'>{item.title}</h1>
                    <p className='text-xl'>{item.text}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className='order-1 md:order-2 w-full md:w-[45%] mt-10'>
          <img className='w-full' src={assets.team} alt="" />
        </div>
      </div>

      <div className='w-full p-3'>
        <div className='my-10 bg-blue-400 text-white p-10 flex items-center flex-col gap-7 w-ful md:w-[80%] mx-auto rounded-xl'>
          <h1 className='text-xl md:text-3xl font-semibold'>Start Your Journey With Us</h1>
          <p className='text-center text-xl'>Send your resume and portfolio to <u><b>info@vercenttechit.com</b></u> and take the next step in your IT career.</p>
          <a className='bg-white text-blue-700 py-3 px-5 rounded-lg text-xl font-semibold' href="mailto:info@vercenttechit.com">Apply Today</a>
        </div>
      </div>

    </div>
  )
}

export default Careers
