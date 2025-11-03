import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import FAQs from './pages/FAQs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Careers from './pages/Careers'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Services/>} />
        <Route path='/careers' element={<Careers/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/faqs' element={<FAQs/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
