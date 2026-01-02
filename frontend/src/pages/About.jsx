import React from 'react'
import assets from '../assets/assets'
import { motion } from 'framer-motion'
import { FaBriefcase, FaUsers, FaArrowTrendUp,FaMedal, FaQuoteRight } from "react-icons/fa6";

const About = () => {
  const choices = [
    {
      icon: FaBriefcase,
      text: "Extensive Network of IT Professionals"
    },
    {
      icon: FaUsers,
      text: "Personalized & Efficient Hiring Process"
    },
    {
      icon: FaArrowTrendUp,
      text: "Industry Expertise and Insight"
    },
    {
      icon: FaMedal,
      text: "Commitment to Quality and Satisfaction"
    }

  ]
  return (
    <div className='h-auto mt-16 md:mt-19'>
      <div className='w-full bg-gray-100'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }}
          className='flex flex-col items-center gap-8 p-3 md:p-5 w-full md:w-[80%] mx-auto'>
          <h1 className='mt-5 text-4xl font-semibold'>About VERCENT</h1>
          <p className='text-xl text-center text-gray-600'>Our motto is to empower international students by ensuring their efforts and investments in education truly pay off. When they choose to stay and work in Canada or the US, it not only benefits them personally but also strengthens the local economy. Their contributions help reduce the skill gap and drive sustainable economic growth. In fact, our collective efforts have positively reflected on the national GDP, which witnessed a remarkable 5.7% growth in 2021.</p>
        </motion.div>
      </div>


      <div className='flex flex-col md:flex-row items-center justify-center gap-15 p-3 md:p-10 bg-gray-100'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }}
          className='w-full md:w-[37%] p-2 '>
          <img className='w-full h-auto shadow-custom' src={assets.AboutBanner} alt="" />
        </motion.div>

        <div className='flex flex-col gap-5'>
          <h1 className='text-3xl font-semibold mb-2'>Why Choose Us?</h1>
          {
            choices.map((choice, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.2 }}
                key={index} className='flex gap-3 items-center'>
                <div className='text-3xl text-blue-400'>
                  <choice.icon />
                </div>
                <p className='text-2xl'>{choice.text}</p>
              </motion.div>
            ))
          }
        </div>
      </div>

      <div className='p-5'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }}
          className='w-full md:w-[77%] flex flex-col gap-7 mx-auto text-center bg-blue-100 px-2 md:px-30 py-10 md:py-15 rounded-3xl shadow-custom  md:my-20'>
          <h1 className='text-4xl font-semibold'>Our Moto</h1>
          <p className='text-2xl'>To bridge the gap between businesses and top IT talent by delivering efficient, reliable, and high-quality recruitment solutions. We empower professionals with career opportunities that align with their skills and aspirations.</p>
        </motion.div>
      </div>

      <div className='flex flex-col items-center mt-10 md:mt-0 bg-gray-100 py-5'>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }}
          className='text-4xl font-semibold px-3 text-center'>What Our Clients Says</motion.h1>
        <div className='my-10 w-full md:w-[80%] px-3 flex flex-col gap-10 md:gap-0 md:flex-row justify-between'>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            className='w-full md:w-[45%] shadow-custom p-3 md:p-5 rounded-2xl flex flex-col gap-3 bg-white'>
            <div className='text-4xl text-blue-300'>
              <FaQuoteRight />
            </div>
            <p className='text-xl ml-2'>"TalentBridge truly understood our hiring needs. The team was proactive, and we were able to find the right IT talent in record time. Their attention to detail and market knowledge set them apart from other agencies."</p>
            <p className='text-lg font-bold ml-2'>-John Doe, HR Director, Tech Innovations</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            className='w-full md:w-[45%] shadow-custom p-3 md:p-5 rounded-2xl flex flex-col gap-3 bg-white'>
            <div className='text-4xl text-blue-300'>
              <FaQuoteRight />
            </div>
            <p className='text-xl ml-2'>Working with TalentBridge was a seamless experience. They quickly grasped our company culture and provided us with highly qualified candidates that aligned perfectly with our requirements. We couldn't be happier with the results!"</p>
            <p className='text-lg font-bold ml-2'>-Emily Green, CEO, DigitalPioneers</p>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default About
