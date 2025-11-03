import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='w-[30%] h-screen '>
            <div className='h-screen pl-10 bg-blue-300 '>
                <div className='flex flex-col gap-10 items-center '>
                    <div className='w-[50%]'>
                        <img src={Logo} alt="" />
                    </div>
                    <div className='w-full '>
                        <ul className='flex flex-col gap-5 w-full cursor-pointer'>
                            <li className='shadow-custom bg-blue-900 p-3 text-white font-semibold text-lg'><Link to='/admin/service' >Add Services</Link> </li>
                            <li className='shadow-custom bg-blue-900 p-3 text-white font-semibold text-lg'><Link to='/admin/contact' >See All Contacts</Link></li>
                            <li className='shadow-custom bg-blue-900 p-3 text-white font-semibold text-lg'><Link to='/admin/consultation' >See All Consultations</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
