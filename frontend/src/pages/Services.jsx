import React from 'react'
import assets from '../assets/assets'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const Services = () => {
  const [services,setServices] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/api/service/getService')
    .then((res)=>{
      setServices(res.data)
    })
    .catch((err)=>{
      console.error(err)
    })
  },[])

  const servicesList = [
    {
      title: "Career Advisor",
      description: "The Assistance of career experts to introduce you to the ICOSYS Process how it works and what are the best ways to get the desired outcome.",
      icon: "fa-solid fa-user-tie"
    },
    {
      title: "Resume Optimization",
      description: "Your resume creates the first impact on your interviewer. So our Resume Optimization services team will optimize it in such a way that it meets the perfect US job market standards. Thus your first impression gets the Best!",
      icon: "fa-solid fa-file"
    },
    {
      title: "Resume Marketing & Interview Scheduling",
      description: "Our Resume Marketing & Interview Scheduling Team will connect with you to understand what your expectations are. They will carry on with comprehensive research on how to assist you to get the best outcomes at the earliest.",
      icon: "fa-solid fa-file"
    },
    {
      title: "Technical Training & Guidance",
      description: "Technical Training & Guidance is designed to strengthen your skill and work-related aspects and make you ready to gain the desired job. We offer complete guidance with a set of activities like resume awareness sessions, webinars, and assessments.",
      icon: "fa-solid fa-code"
    },
    {
      title: "Compliance, Onboarding, And Background Checks",
      description: "Once you get a job our experts in this department will assist you with all the required documentation once you get a job. Also, offer convenient background check services as per your requirement.",
      icon: "fa-solid fa-trophy"
    }
  ]


  return (

    <div className='mt-20 bg-gray-50'>

      <div className='text-center w-full md:w-[70%] mx-auto flex flex-col gap-5 md:gap-10 py-5 md:py-10 px-3 md:px-30'>
        <h1 className='text-4xl font-semibold'>Our Services</h1>
        <p className='text-xl'>We specialize in IT staffing and recruitment, helping businesses find the right talent while assisting professionals in securing their ideal roles. Our expertise ensures companies connect with the best candidates in the industry.</p>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 md:p-10'>
        <div className='w-full md:w-[45%] p-5 mt-5'>
          <div className='w-full rounded-xl p-3 shadow-custom bg-white'>
            <img src={assets.ServicesBanner} alt="" />
          </div>
        </div>


        <div className=' w-full md:w-[50%] flex flex-col gap-5 p-3 md:p-5'>
          <h1 className='text-3xl font-semibold '>What We Offer</h1>

          <div className='flex flex-col '>
            {
              servicesList.map((service, index) => (
                <div key={index} className=" flex gap-5 w-full hover:shadow-lg p-2 md:p-5 rounded-2xl">
                  <div className='text-3xl mt-1 text-blue-300'>
                    <i class={`${service.icon}`}></i>
                  </div>
                  <div>
                    <p className='text-2xl font-semibold'>{service.title}</p>
                    <p className='text-lg'>{service.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

      </div>

      <div className='flex flex-col items-center gap-10 py-5 md:py-10 px-3 md:px-0'>
        {
          services.map((item, index) => (
            <div className='w-full md:w-[80%] flex flex-col gap-5 md:gap-0 md:flex-row items-center justify-between py-5 px-4 md:px-10 bg-blue-400 text-white rounded-2xl' key={index}>

              <div className='order-2 md:order-1 flex flex-col gap-3 md:gap-7 w-full md:w-[45%] '>
                <h1 className='text-2xl md:text-4xl font-semibold'>{item.title}</h1>
                <p className='text-xl md:text-2xl'>{item.desc}</p>
                <p className='text-xl md:text-2xl'>{item.desc1}</p>
                <p className='text-xl md:text-2xl'>{item.desc2}</p>
                <p className='text-xl md:text-2xl'>{item.desc3}</p>
                <p className='text-xl md:text-2xl'>{item.desc4}</p>
              </div>
              <div className=' order-1 md:order-2 w-full md:w-[40%] '>
                <img src={`http://localhost:5000/uploads/${item.image}`} alt="" />
              </div>
            </div>
          ))
        }
      </div>


    </div>
  )
}

export default Services
