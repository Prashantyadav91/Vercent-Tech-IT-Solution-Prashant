import React from 'react'

const FAQs = () => {
  const faqs = [

    {
      question2: '2. Are you a Consultancy?',
      answer2: [
        {
          text1: 'No, we are not a consultancy. But how we are different from other consultancies is that we not only provide you with contract jobs, but we also provide you with a full-time/W2 job, which no other consultancy does in the market',
          text2: 'Also, we are an E-Verified Company with more than 400 people staff having an experience of more than10 years and help candidates get full-time jobs with direct clients.',
          text3: 'We aim to place our candidates as fast as possible that is exactly why we not only do C2C but also provide full-time/W2 jobs, which increases the chance of getting a job by 70%.'
        }
      ]
    },
    {
      question3: '3. On whose payroll am i going to work?',
      answer3: [
        {
          text1: 'To maximize the chances of you landing a job, we open up 100% of the job market and provide you not only C2C but also full-time/W2 jobs',
          text2: 'Now, if you get a C2C job, you will be definitely working on DASH Technologies payroll, which is our parent company. But if you get a full-time/W2 job, it could either be working directly on our end-clients payroll or some Implementation Partner/Vendors payroll.'
        }
      ]
    },
    {
      question4: '4. Will the training be one-on-one?',
      answer4: [
        {
          text1: 'We offer one-on-one training sessions depending on the pricing plan which you choose for yourself.',
          text2: 'If you choose our most popular VIP or Ultra Elite Plan, we will offer you one-on-one training or customize our technical training process as per your requirements.',
          text3: 'If you choose our Elite Plan, the sessions will be in groups.',
          text4: 'If you choose our Basic Plan, the sessions will be recorded.',
        }
      ]
    },
    {
      question5: '5. Are you going to add any fake experience to my resume?',
      answer5: 'No, we do not add any fake experience to your resume. But if we show anything in your resume that you dont know, we will make sure to train you on that topic before you are ready to face your interviewer.'
    },
    {
      question6: '6. How can you provice job placement with 90 days?',
      answer6: [
        {
          text1: 'We can provide you a job Placement within 90 days. We have experience of more than a decade.',
          text2: 'We have our proprietary processes, and everything works in sync. Plus, we dont keep you on our payroll by just providing C2C jobs, but we also provide you with full-time/W2 opportunities. So that increases your chance of getting a job faster by 70%. Thus, we can afford to give you a job guarantee of 90 days, because most of our candidates have got placed within 45-60 days.'
        }
      ]
    },
    {
      question7: '7. Would you be providing interview support?',
      answer7: [
        {
          text1: 'We believe in preparing you well enough in advance for interviews.',
          text2: 'But we also have some payment plans, which include interview support for our candidates.'
        }
      ]
    },
    {
      question8: '8. Will you be helping me in getting sponsorship?',
      answer8: [
        {
          text1: 'To provide jobs faster to our candidates, we search for full-time/W2 offers for our candidates.',
          text2: 'In this case on whoevers W2 you will be working, they will take care of your Visa Sponsorship.',
          text3: 'If you are on our C2C, we will be taking care of your Visa Sponsorship.'
        }
      ]
    },
    {
      question9: '9. What if i lose the job after a few months?',
      answer9: [
        {
          text1: 'We do an agreement with you for one year. It keeps you safe in case you lose your job within one year.',
          text2: 'In that case, we will assist you and help you get another job.',
          text3: 'It only applies if you lose your job but does not apply if your contract ends within one year.'
        }
      ]
    },
    {
      question10: '10. Do i need to pay anything upfront?',
      answer10: 'Yes, we do charge an upfront amount. It enables us to invest quality resources in your profile and provide industry-leading services. That is why we can provide you with a job guarantee, and you can hold us responsible if we fail to deliver.'
    },
    {
      question11: '11. Why do you guys charge upfront nobody in the market does?',
      answer11: [
        {
          text1: 'Charging an upfront amount enables us to invest quality resources in your profile and provide industry-leading services.',
          text2: 'Not only we provide C2C jobs, but also full-time/W2 jobs, which no other consultancy does.',
          text3: 'Since we charge an upfront amount you can hold us responsible for not delivering results, which you cannot do if the services are free.',
          text4: 'Nothing in this world is for free, so you have to decide whether to pay a small amount upfront or get the services for free and keep-on paying a huge amount of money to those free consultancies.'
        }
      ]
    },
    {
      question12: '12. How can we get started?',
      answer12: 'You can talk to one of your career advisors today, choose the plan that suits your needs the most, and we will get you started right away after that.'
    }

  ]
  return (
    <div className='mt-25'>
      <div>
        <div className='text-center w-full md:w-[50%] mx-auto p-0 md:p-5 flex flex-col gap-5'>
          <h1 className='text-4xl font-semibold'>Frequent Asked Questions</h1>
          <p className='text-xl'>people asked questions about our company</p>
        </div>

        <div className='w-full md:w-[80%] p-3 md:p-5 mx-auto flex flex-col gap-1'>

          <details >
            <summary className='text-xl font-semibold bg-[#CFFF87] p-5 cursor-pointer'>1. How does the Icosys Tech-IT process work?</summary>
            <p className='text-xl ml-2'>Icosys Tech-IT process works on five crucial areas. Let me take you through each one of them;</p>
            <div className='flex flex-col gap-3 p-3 md:p-5'>

              <ul className='list-disc pl-3 md:pl-5 flex flex-col gap-2 text-xl'>
                <li><b>Career Advice:</b> We assign you a dedicated Career Advisor who gets in touch with you to understand your preferences and expertise. And discuss the plan with you. And streamline the process to help you better.</li>
                <li><b>Resume Understanding & Resume Enhancement:</b> Our Trained technical expert with rich experience of the US IT Jobs Market will your sessions of resume understanding and resume enhancement.</li>
                <li><b>Technical Training & Guidance:</b> Our Experienced Technical Trainers will take your sessions and guide you with real-time projects and frequent assessments.</li>
                <li><b>Resume Marketing & Interview Scheduling:</b> We provide you with a personal recruiter who markets your profile on different job portals, schedules and fills your calendar with interviews, and stays on top of your schedule, so that you dont miss any important calls or emails.</li>
                <li><b>Compliance, Onboarding, and Background Check:</b> This team will assist you with all the required documentation once you get a job. Also, offer convenient background check services as per your requirement.</li>
              </ul>
            </div>
          </details>

          <details >
            <summary className='text-xl font-semibold bg-[#CFFF87] p-5 cursor-pointer'>2. Are you a Consultancy?</summary>

            <div className='flex flex-col gap-3 p-3 md:p-5'>

              <p className='text-xl'>No, we are not a consultancy. But how we are different from other consultancies is that we not only provide you with contract jobs, but we also provide you with a full-time/W2 job, which no other consultancy does in the market.</p>

              <p className='text-xl'>Also, we are an E-Verified Company with more than 400 people staff having an experience of more than10 years and help candidates get full-time jobs with direct clients.</p>

              <p className='text-xl'>We aim to place our candidates as fast as possible that is exactly why we not only do C2C but also provide full-time/W2 jobs, which increases the chance of getting a job by 70%.</p>

            </div>

          </details>

          <details >
            <summary className='text-xl font-semibold bg-[#CFFF87] p-5 cursor-pointer'>3. On whose payroll am i going to work?</summary>

            <div className='flex flex-col gap-3 p-3 md:p-5'>

              <p className='text-xl'>To maximize the chances of you landing a job, we open up 100% of the job market and provide you not only C2C but also full-time/W2 jobs.</p>

              <p className='text-xl'>Now, if you get a C2C job, you will be definitely working on DASH Technologies payroll, which is our parent company. But if you get a full-time/W2 job, it could either be working directly on our end-clients payroll or some Implementation Partner/Vendors payroll.</p>

            </div>

          </details>

          <details >
            <summary className='text-xl font-semibold bg-[#CFFF87] p-5 cursor-pointer'>4. Will the training be one-on-one?</summary>

            <div className='flex flex-col gap-3 p-3 md:p-5'>

              <ul className='list-disc pl-3 md:pl-5 flex flex-col gap-2 text-xl'>

                <li>We offer one-on-one training sessions depending on the pricing plan which you choose for yourself.</li>

                <li>If you choose our most popular VIP or Ultra Elite Plan, we will offer you one-on-one training or customize our technical training process as per your requirements.</li>

                <li>If you choose our Elite Plan, the sessions will be in groups.</li>

                <li>If you choose our Basic Plan, the sessions will be recorded.</li>

              </ul>
            </div>
          </details>

          <details >
            <summary className='text-xl font-semibold bg-[#CFFF87] p-5 cursor-pointer'>5. Are you going to add any fake experience to my resume?</summary>

            <div className='flex flex-col gap-3 p-3 md:p-5'>

              <p className='text-xl'>No, we do not add any fake experience to your resume. But if we show anything in your resume that you dont know, we will make sure to train you on that topic before you are ready to face your interviewer.</p>

            </div>

          </details>

          <details >
            <summary className='text-xl font-semibold bg-[#CFFF87] p-5 cursor-pointer'>6. How can you provice job placement with 90 days?</summary>

            <div className='flex flex-col gap-3 p-3 md:p-5'>

              <p className='text-xl'>We can provide you a job Placement within 90 days. We have experience of more than a decade.</p>

              <p className='text-xl'>We have our proprietary processes, and everything works in sync. Plus, we dont keep you on our payroll by just providing C2C jobs, but we also provide you with full-time/W2 opportunities. So that increases your chance of getting a job faster by 70%. Thus, we can afford to give you a job guarantee of 90 days, because most of our candidates have got placed within 45-60 days.</p>

            </div>

          </details>

          <details >
            <summary className='text-xl font-semibold bg-[#CFFF87] p-5 cursor-pointer'>7. Would you be providing interview support?</summary>

            <div className='flex flex-col gap-3 p-3 md:p-5'>

              <p className='text-xl'>We believe in preparing you well enough in advance for interviews.</p>

              <p className='text-xl'>But we also have some payment plans, which include interview support for our candidates.</p>

            </div>

          </details>

          <details >
            <summary className='text-xl font-semibold bg-[#CFFF87] p-5 cursor-pointer'>8. Will you be helping me in getting sponsorship?</summary>

            <div className='flex flex-col gap-3 p-3 md:p-5'>

              <p className='text-xl'>To provide jobs faster to our candidates, we search for full-time/W2 offers for our candidates.</p>

              <p className='text-xl'>In this case on whoevers W2 you will be working, they will take care of your Visa Sponsorship.</p>

              <p className='text-xl'>If you are on our C2C, we will be taking care of your Visa Sponsorship.</p>

            </div>

          </details>

          <details >
            <summary className='text-xl font-semibold bg-[#CFFF87] p-5 cursor-pointer'>9. What if i lose the job after a few months?</summary>

            <div className='flex flex-col gap-3 p-3 md:p-5'>

              <p className='text-xl'>We do an agreement with you for one year. It keeps you safe in case you lose your job within one year.</p>

              <p className='text-xl'>In that case, we will assist you and help you get another job.</p>

              <p className='text-xl'>It only applies if you lose your job but does not apply if your contract ends within one year.</p>

            </div>

          </details>

          <details >
            <summary className='text-xl font-semibold bg-[#CFFF87] p-5 cursor-pointer'>10. Do i need to pay anything upfront?</summary>

            <div className='flex flex-col gap-3 p-3 md:p-5'>

              <p className='text-xl'>Yes, we do charge an upfront amount. It enables us to invest quality resources in your profile and provide industry-leading services. That is why we can provide you with a job guarantee, and you can hold us responsible if we fail to deliver.</p>

            </div>

          </details>

          <details >
            <summary className='text-xl font-semibold bg-[#CFFF87] p-5 cursor-pointer'>11. Why do you guys charge upfront nobody in the market does?</summary>

            <div className='flex flex-col gap-3 p-3 md:p-5'>

              <p className='text-xl'>Charging an upfront amount enables us to invest quality resources in your profile and provide industry-leading services.</p>

              <p className='text-xl'>Not only we provide C2C jobs, but also full-time/W2 jobs, which no other consultancy does.</p>

              <p className='text-xl'>Since we charge an upfront amount you can hold us responsible for not delivering results, which you cannot do if the services are free.</p>

              <p className='text-xl'>Nothing in this world is for free, so you have to decide whether to pay a small amount upfront or get the services for free and keep-on paying a huge amount of money to those free consultancies.</p>

            </div>

          </details>

          <details >
            <summary className='text-xl font-semibold bg-[#CFFF87] p-5 cursor-pointer'>12. Can you provide me with some references, whom you have helped in past?</summary>

            <div className='flex flex-col gap-3 p-3 md:p-5'>

              <p className='text-xl'>Yes, we will provide you with the references whom we have helped in the past, with their consent.</p>

              <p className='text-xl'>But what you can do right now is go to this link and check out our testimonial videos and see what our candidates say about us. </p>

            </div>

          </details>
          
          <details >
            <summary className='text-xl font-semibold bg-[#CFFF87] p-5 cursor-pointer'>13. How can we get started?</summary>

            <div className='flex flex-col gap-3 p-3 md:p-5'>

              <p className='text-xl'>You can talk to one of your career advisors today, choose the plan that suits your needs the most, and we will get you started right away after that.</p>

            </div>

          </details>
        </div>
      </div>

    </div>
  )
}

export default FAQs
