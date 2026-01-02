import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa6';

const ContactCompo = () => {
    const API_URL = import.meta.env.VITE_API_URL; // variable name .env me VITE_API_URL
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [service, setService] = useState('');
    const [visaStatus, setVisaStatus] = useState('');
    const [technology, setTechnology] = useState('');

    const handleClick = async () => {
        await axios.post(`${API_URL}/api/contact/addQuiry`, { name, email, number, service, visaStatus,technology })
        .then(() => {
            alert("Message sent successfully")
        })
    }

    return (
        <div 
        className='bg-gray-900 text-white flex flex-col items-center gap-10 py-10 px-3 md:px-10'>
            <h1 className='text-2xl md:text-3xl'>GET IN TOUCH FOR A FREE CONSULTATION</h1>
            <div className='border py-10 w-full'>
                <form className='flex flex-col gap-8' action="">
                    <div className='flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-10 px-3 md:px-10 '>

                        <div className='rounded bg-black md:w-[40%] pl-2 flex items-center gap-2 border-none outline-none'>
                            <div className='text-xl'>
                                <FaUser/>
                            </div>
                            <input onChange={(e) => setName(e.target.value)} value={name} className='rounded-r bg-white text-black px-2 py-2 w-full' type="text" placeholder='name' />
                        </div>

                        <div className='rounded bg-black md:w-[40%] pl-2 flex items-center gap-2 border-none outline-none'>
                            <div className='text-xl'>
                                <FaEnvelope/>
                            </div>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} className='rounded-r bg-white text-black px-2 py-2 w-full' type="email" placeholder='email' />
                        </div>

                        <div className='rounded bg-black md:w-[40%] pl-2 flex items-center gap-2 border-none outline-none'>
                            <div className='text-xl'>
                                <FaPhone/>
                            </div>
                            <input onChange={(e) => setNumber(e.target.value)} value={number} className='rounded-r bg-white text-black px-2 py-2 w-full' type="phone" placeholder='number' />
                        </div>

                        <div className='rounde w-full md:w-[41%]  flex items-center gap-2 border-none outline-none'>
                            <select onChange={(e) => setService(e.target.value)} value={service} className='rounded bg-white p-2 text-black w-full' name="service" id="service">
                                <option value="Choose service here">Choose service here</option>
                                <option value="software development">software development</option>
                                <option value="staffing solutions">staffing solutions</option>
                                <option value="it trainings">it trainings</option>
                                <option value="quality assurance">quality assurance</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row justify-evenly gap-5 md:gap-0 p-3 md:p-0'>
                        <select onChange={(e) => setVisaStatus(e.target.value)} value={visaStatus} className='text-black bg-white rounded w-full md:w-9/20 p-2' name="" id="">
                            <option value="Choose VisaStatus here">Choose VisaStatus here</option>
                            <option value="F1 OPT">F1 OPT</option>
                            <option value="OPT EAD">OPT EAD</option>
                            <option value="STEM OPT">STEM OPT</option>
                            <option value="CPT FULL TIME">CPT FULL TIME</option>
                            <option value="CPT PART TIME">CPT PART TIME</option>
                            <option value="H1 B">H1 B</option>
                            <option value="H4 EAD">H4 EAD</option>
                            <option value="GC">GC</option>
                            <option value="GC EAD">GC EAD</option>
                            <option value="CITIZEN">CITIZEN</option>
                            <option value="ASSYLUM">ASSYLUM</option>
                        </select>

                        <select onChange={(e) => setTechnology(e.target.value)} value={technology} className='text-black bg-white rounded w-full md:w-9/20 p-2' >
                            <option disabled="" selected="" value="">Choose Technology Here..</option>
                            <option value="ANDROIDAPP DEVELOPMENT">ANDROID APP DEVELOPMENT </option>
                            <option value="FLUTTERAPP DEVELOPMENT">FLUTTER APP DEVELOPMENT </option>
                            <option value="IOSAPP DEVELOPMENT">IOS APP DEVELOPMENT </option>
                            <option value="JAVA FULLSTACK">JAVA FULL STACK </option>
                            <option value="NETCORE FULLSTACK">.NET CORE FULL STACK </option>
                            <option value="NODE JS">NODEJS </option>
                            <option value="PYTHON WEB">PYTHON WEB </option>
                            <option value="DEVOPS">DEVOPS </option>
                            <option value="CYBER SECURITY">CYBER SECURITY </option>
                            <option value="BUSINESS ANALYST">BUSINESS ANALYST </option>
                            <option value="PROJECT MANAGER">PROJECT MANAGER </option>
                            <option value="SCRUMMASTER">SCRUM MASTER </option>
                            <option value="PRODUCT MANAGEMENT">PRODUCT MANAGEMENT </option>
                            <option value="MANUAL TESTING(QA)">MANUAL TESTING (QA) </option>
                            <option value="AUTOMATION TESTING">AUTOMATION TESTING </option>
                            <option value="DATA ANALYST">DATA ANALYST </option>
                            <option value="DATA BASE ADMINISTRATOR">DATABASE ADMINISTRATOR </option>
                            <option value="DATA SCIENCE">DATA SCIENCE </option>
                            <option value="MACHINE LEARNING">MACHINE LEARNING </option>
                            <option value="DATA ENGINEER">DATA ENGINEER </option>
                            <option value="TABLEAU">TABLEAU </option>
                            <option value="POWERBI">POWERBI </option>
                            <option value="UI/UX">UI/UX </option>
                            <option value="MEAN STACK">MEAN STACK </option>
                            <option value="MERN STACK">MERN STACK </option>
                            <option value="REACTJS">REACT JS </option>
                            <option value="ANGULAR">ANGULAR </option>
                        </select>
                    </div>

                    <button className='bg-white p-2 w-50 text-black text-xl rounded mx-auto cursor-pointer' onClick={handleClick} type='button'>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default ContactCompo
