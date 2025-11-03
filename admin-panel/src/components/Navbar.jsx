import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      // call logout endpoint (optional — you asked for an API hit)
      await axios.post('http://localhost:5000/api/admin/logout', {}, {
        headers: { Authorization: `Bearer ${token}` }
      }).catch(err => {
        // ignore server errors for logout — we still clear local token
        console.warn('Logout API error:', err?.response?.data || err.message);
      });

      // remove token locally
      localStorage.removeItem('token');
      // optionally clear admin user data
      localStorage.removeItem('admin');

      // redirect to login or homepage
      navigate('/')
    } catch (err) {
      console.error('Logout failed', err);
    }
  }
  return (
    <div className='flex justify-between border-b p-5'>
      <h1 className='text-3xl'>Admin Panel</h1>
      <button className='border px-10 py-2 cursor-pointer text-xl font-semibold bg-blue-800 text-white' onClick={handleLogout} >Log out</button>
    </div>
  )
}

export default Navbar
