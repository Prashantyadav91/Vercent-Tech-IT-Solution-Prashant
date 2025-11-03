import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminLogin from './pages/AdminLogin'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Consultation from './pages/Consultation'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar />
      <div className='flex flex-col w-full'>
        <Navbar/>
        <div className='flex-1 overflow-y-auto'>
          <Routes>
            <Route path='/' element={<AdminLogin />} />
            <Route path='/admin/service' element={<Service />} />
            <Route path='/admin/contact' element={<Contact />} />
            <Route path='/admin/consultation' element={<Consultation />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
