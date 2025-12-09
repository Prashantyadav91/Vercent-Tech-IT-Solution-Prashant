import React from 'react'
import Hero from '../components/Hero'
import assets from '../assets/assets'
import ContactCompo from '../components/ContactCompo'

const Home = () => {

  const services = [
    {
      title: "Career Advisor",
      description: "This Assistance of career experts to intoduce you to the vercent Process how it works and...",
      icon: 'fa-user-tie'
    },
    {
      title: "Resume Optmization",
      description: "Your resume creates the first impact on your interview. So our resume optimization...",
      icon: 'fa-file'
    },
    {
      title: "Resume Marketing",
      description: "Our Resume Marketing & Interview Scheduling Team will connect with you to understand what…",
      icon: 'fa-file'
    },
    {
      title: "Compliance Onboarding",
      description: "Once you get a job our experts in this department will assist you with all the required…",
      icon: 'fa-trophy'
    }
  ]

  const process = [
    {
      title: "Assessment",
      description: "We start by assessing the candidate's skills, interests, and career goals. This gives us an understanding of their strengths and weaknesses and identifies the best opportunities for them for successful training & placement."
    },
    {
      title: "IT Training",
      description: "We provide customized IT training courses to our candidates that are designed to cater to their specific needs and career goals. Our IT training & placement programs include a wide range of topics, from programming languages to mobile/ web app development to cyber security."
    },
    {
      title: "Resume Building",
      description: "We help our candidates build and enhance their resumes to make them stand out in the job market. We also develop our candidate’s LinkedIn profile to highlight their USPs. Our in-house experts provide coaching on how to highlight their top-notch skills and experience effectively."
    },
    {
      title: "Interview Preparation",
      description: "We offer interview preparation services to our candidates to help them ace their job interviews. Our in-house team of experts provides guidance on how to crack common interview questions, how to put their best foot-forward, and how to negotiate job offers."
    },
    {
      title: "Placement",
      description: "Once our candidates have completed their IT training and are ready for placement, we work closely with our network of clients to identify the best staffing opportunities for them. We provide guidance on job applications, interview scheduling, and negotiation of job offers. We also guarantee successful employment placements within 90 days of the candidate registering with us."
    },
    {
      title: "Ongoing Support and Relationship Management",
      description: "A reputable IT staffing agency continues to provide support even after the placement is made. They serve as a point of contact for any issues or concerns that may arise during the engagement. Additionally, the agency maintains regular communication to ensure both you and the IT professional are satisfied with the partnership, facilitating long-term success."
    }
  ]
  const testimonials = [
    {
      name: "John Doe",
      position: "CEO",
      feedback: "Thanks to ZYROO Tech IT's USA IT Staffing Services, I found the perfect IT job quickly. Their expertise in the IT industry is unparalleled."
    },
    {
      name: "Jane Smith",
      position: "CTO",
      feedback: "ZYROO Tech IT made my job search stress-free. Their customized staffing solutions matched me with an ideal IT position."
    },
    {
      name: "Mike Johnson",
      position: "CFO",
      feedback: "The team at ZYROO Tech IT provided exceptional support throughout my job search. Their industry knowledge and personalized approach helped me secure a great IT role."
    },
    {
      name: "Emily Davis",
      position: "COO",
      feedback: "I highly recommend ZYROO Tech IT for anyone seeking IT staffing services. Their professionalism and dedication to finding the right fit are unmatched."
    }
  ]

  return (
    <div>
      <Hero />

      <section className='flex flex-col gap-7 md:gap-0'>

        {/* first half */}
        <div className='flex flex-col md:flex-row items-start justify-center gap-0 md:gap-10 pt-10'>

          <div className='order-2 md:order-1 flex flex-col gap-5 md:gap-10 w-full md:w-[40%] px-3 md:px-0'>

            <div className='flex flex-col gap-5'>
              <h2 className='text-3xl'>Our goal is to attain your expectations</h2>
              <hr className='w-20' />
            </div>

            <p className='text-xl md:text-2xl font-light'>With Vercent Tech IT Services, you get to experience a unique journey that starts along with learning and upgrading your skills through staffing solutions which will start with resume building and will end up with you landing a job at your dream company.</p>

            <p className='text-xl md:text-2xl font-light'>Keeping in mind current market needs and your knowledge, we will help you to get whole detailed IT training through which you can get hold of all the current trends which will help you to keep up with knowledge regarding that and can make you the best candidate for the recruiter.</p>
          </div>

          <div className='order-1 md:order-2 mb-20 px-5 md:px-0 w-full md:w-[40%]'>
            <img className='w-150' src={assets.office} alt="" />
          </div>
        </div>

        {/* second-half */}
        <div className='w-full md:w-7/10 mx-auto'>

          <div className='flex flex-col gap-5 px-2 md:px-0'>
            <p className='text-3xl text-center'>OUR SERVICES</p>
            <hr className='w-15 mx-auto' />
            <p className='text-center md:text-lg'>To make your business versatile our software development services can provide your business with cutting edge technologies and open you up to get high end opportunities.</p>
          </div>

          <div className='flex flex-col md:flex-row md:flex-wrap gap-5 justify-evenly mt-10 pb-10'>
            {
              services.map((item, index) => (
                <div key={index} className='flex gap-2 w-full md:w-[49%] px-3 md:px-0'>
                  <div className='mt-1 text-2xl text-blue-300'>
                    <i class={`fa-solid ${item.icon}`}></i>
                  </div>
                  <div className=''>
                    <h2 className='text-2xl font-semibold'>{item.title}</h2>
                    <p className='text-lg'>{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>

        </div>

      </section>

      <section className='text-white bg-black p-8'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>

          <div className='flex flex-col items-center gap-4 w-full md:w-[20%]'>
            <div className='text-4xl'>
              <i class="fa-solid fa-clock"></i>
            </div>
            <p className='text-3xl'>7+</p>
            <p className='text-xl'>YEARS OF EXPERIENCE</p>
            <p className='text-center text-lg'>Over 7+ years of experience in the industry, revolutionising digital solutions globally.</p>
          </div>

          <div className='flex flex-col items-center gap-4 w-full md:w-[20%]'>
            <div className='text-4xl'>
              <i class="fa-solid fa-diagram-project"></i>
            </div>
            <p className='text-3xl'>50+</p>
            <p className='text-xl'>PROJECTS COMPLETED</p>
            <p className='text-center text-lg'>Igniting innovation through delivering to 500+ ventures and surpassing client expectations.</p>
          </div>

          <div className='flex flex-col items-center gap-4 w-full md:w-[20%]'>
            <div className='text-4xl'>
              <i class="fa-solid fa-user"></i>
            </div>
            <p className='text-3xl'>700+</p>
            <p className='text-xl'>PLACEMENT DONE</p>
            <p className='text-center text-lg'>Fuelling career growth 200+ number of placements, connecting dreams with opportunities.</p>
          </div>

          <div className='flex flex-col items-center gap-4 w-full md:w-[20%]'>
            <div className='text-4xl'>
              <i class="fa-solid fa-graduation-cap"></i>
            </div>
            <p className='text-3xl'>400+</p>
            <p className='text-xl'>STUDENTS TRAINED</p>
            <p className='text-center text-lg'>Trained 100+ students which cultivates tomorrow's tech leaders, empowering them with advanced skills and knowledge.</p>
          </div>

        </div>
      </section>

      <section className='bg-blue-50 text-black py-5'>
        <div className='flex flex-col items-center gap-5 md:w-3/5 mx-auto text-center px-3 md:px-0'>
          <h1 className='text-xl md:text-3xl'>SIMPLIFIED CANDIDATE PLACEMENT PROCESS FROM RESUME BUILDING , IT TRAININGS TO PLACEMENT</h1>
          <p className='text-md md:text-xl'>At Helix Tech, we follow a step-by-step process to place our candidates with relevant organizations. IT training & placements is one of our USP offerings to aspirant job seekers.</p>
          <p className='text-lg md:text-xl'>Here's how we do it</p>
        </div>

        <div className='flex flex-wrap  gap-10 py-5 mt-10 px-3 md:px-25'>
          {
            process.map((item, index) => (
              <div key={index} className="flex flex-col gap-5 w-full md:w-[40%] border border-black mx-auto p-6">
                <h1 className='text-xl md:text-2xl font-semibold'>{item.title}</h1>
                <p className='text-md md:text-lg'>{item.description}</p>
              </div>
            ))
          }
        </div>

      </section>

      <section className='py-5'>
        <div className='flex flex-col items-center gap-5 mb-5 px-3 md:px-100'>
          <h1 className='text-3xl'>TESTIMONIAL</h1>
          <hr className='w-20 text-black' />
          <p className='text-xl text-center'>Read what our valued clients have shared about their experiences with our services in our client testimonials.</p>
        </div>

        <div className='flex flex-col md:flex-row flex-wrap gap-10 p-5 justify-evenly items-center'>

          {
            testimonials.map((item, index) => (
              <div key={index} className='w-full md:w-[40%] flex gap-3 shadow-custom p-5'>
                <div className='text-4xl'>
                  <i class="fa-solid fa-user"></i>
                </div>
                <div>
                  <div className='flex flex-col'>
                    <p className='text-xl md:text-2xl'>{item.name}</p>
                    <p className='text-md md:text-lg font-light'>{item.position}</p>
                  </div>
                  <div className='mt-3'>
                    <p className='text-lg md:text-2xl font-light'>{item.feedback}</p>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </section>
      <ContactCompo />

    </div>
  )
}

export default Home
