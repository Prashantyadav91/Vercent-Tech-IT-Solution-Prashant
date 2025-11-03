import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const handleLogin = async () =>{
        await axios.post('http://localhost:5000/api/admin/login',{email,password})
        .then((res)=>{
            alert(res.data.message)
            navigate('/admin/service')
        })
        .catch((err)=>{
            console.error(err)
        })
    }

    return (

        <div className='flex items-center justify-center '>
            <form className='flex flex-col gap-5 p-5 shadow-2xl w-[30%]  my-[12%] ' action="">
                <h1 className='text-2xl font-semibold'>Login Admin</h1>
                <label className='text-xl font-semibold' htmlFor="email">Admin Email: </label>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border p-2 text-xl' name='email' type="email" placeholder='type your email' />
                <label className='text-xl font-semibold' htmlFor="password">Admin Password: </label>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} className='border p-2 text-xl' name='password' type="password" placeholder='type your password' />
                <button onClick={handleLogin} className='border bg-blue-800 text-white cursor-pointer p-2 text-xl font-semibold' type='button'>Login</button>
            </form>
        </div>

    )
}

export default AdminLogin
