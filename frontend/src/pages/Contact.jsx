import {  useState } from "react"
import axios from 'axios'


const Contact = () => {
  const API_URL = import.meta.env.VITE_API_URL; // variable name .env me VITE_API_URL
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [number,setNumber] = useState('');
  const [enquiryType,setEnquiryType] = useState('');
  const [message,setMessage] = useState('');

  const handleSubmit = async () =>{
    
    await axios.post(`${API_URL}/api/contact/addQuiry`,{name,email,number,enquiryType,message})
    .then(()=>{
      alert("Message sent successfully")
    })
  }
  

  return (
    <div className="mt-17 md:mt-25 bg-gray-100">

      <div className="flex flex-col">
        <div className="flex mx-auto flex-col gap-5 text-center p-5">
          <h1 className="text-4xl font-semibold">Get in Touch</h1>
          <p className="text-xl">Have questions? We'd love to hear from you!</p>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-10 p-5 md:p-15">
          <div className="overflow flex flex-col gap-5 md:gap-10 w-full md:w-[45%]">
            <h1 className="text-3xl font-bold ">Address</h1>

            <div className="flex flex-col gap-5 md:gap-10">
              <p className="text-xl md:text-2xl">257 Cornelison Avenue, Jersey City, New Jersey 07302</p>
              <p className="text-xl md:text-2xl">Block-Y, Kidwai Nagar, Uttar Pradesh(IND) - 208011</p>
            </div>

            <div className="flex items-center gap-5">
              <div className="text-xl md:text-2xl">
                <span >&#128222;</span>
              </div>
              <p className="text-xl md:text-2xl">+1 (201) 839-2986 (USA)</p>
            </div>

            <div className="flex items-center gap-5">
              <div className="text-xl md:text-2xl">
                <span>&#128232;</span>
              </div>
              <p className="text-xl md:text-2xl break-word md:break-normal overflow-hidden text-wrap">
                Info@vercenttechit.com
              </p>

            </div>

            <div className="flex items-center gap-5">
              <div className="text-xl md:text-2xl">
                
                <span>&#128232;</span>

              </div>
              <p className="text-xl md:text-2xl break-word md:break-normal overflow-hidden text-wrap">
                shashanky@vercenttechit.com
              </p>
            </div>

          </div>

          <div className="flex flex-col gap-2 w-full md:w-[40%] px-auto">
            <h1 className="text-3xl font-bold ">Enquiry</h1>
            <form className="flex flex-col gap-5 w-full md:w-[90%] mt-2" action="">

              <div className="flex flex-col gap-2">
                <label className="text-xl font-semibold" htmlFor="name">Your Name:</label>
                <input onChange={(e)=>setName(e.target.value)} value={name} className="border p-3 text-xl" name="name" type="text" placeholder="type name here" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xl font-semibold" htmlFor="email">Your Email:</label>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} className="border p-3 text-xl" name="email" type="email" placeholder="type email here" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xl font-semibold" htmlFor="number">Your Phone No.</label>
                <input onChange={(e)=>setNumber(e.target.value)} value={number} className="border p-3 text-xl" name="number" type="phone" placeholder="type your number" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xl font-semibold" htmlFor="enquiryType">Enquiry Type:</label>
                <select onChange={(e)=>setEnquiryType(e.target.value)} value={enquiryType} className="border p-3 text-xl" name="enquiryType" id="">
                  <option value="Select">Select</option>
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Employer Enquiry">Employer Enquiry</option>
                  <option value="Referral Program Question">Referral Program Question</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Resume Crafting">Resume Crafting</option>
                  <option value="Job Marketing">Job Marketing</option>
                  <option value="Job Support">Job Support</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xl font-semibold" htmlFor="message">Your Message</label>
                <textarea onChange={(e)=>setMessage(e.target.value)} value={message} className="border p-3 text-xl" name="message" placeholder="type your message" id=""></textarea>
              </div>

              <button className=" border-2 font-bold text-xl bg-blue-400 text-white w-50 p-2 cursor-pointer" onClick={handleSubmit} type="button">Submit</button>

            </form>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contact
