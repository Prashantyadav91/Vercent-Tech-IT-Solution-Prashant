import React from 'react'

const Card2 = ({ name, email, number, service,visaStatus,technology, handleDelete }) => {

    return (
        <div className='w-[40%] flex flex-col gap-2 p-5 border'>
            <p className='text-xl font-semibold'>Name: {name} </p>
            <p className='text-xl font-semibold'>Email: {email}</p>
            <p className='text-xl font-semibold'>Phone No.: {number} </p>
            <p className='text-xl font-semibold'>Service: {service}</p>
            <p className='text-xl font-semibold'>Visa Status: {visaStatus}</p>
            <p className='text-xl font-semibold'>Technology: {technology}</p>
            <button className='w-[33%] cursor-pointer py-1 bg-blue-800 text-white text-xl' onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Card2
