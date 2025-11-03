
import React from 'react'

const Card = ({ name, email, number, enquiryType, message, handleDelete }) => {

    return (
        <div className='w-[40%] flex flex-col gap-2 p-5 border'>
            <p className='text-xl font-semibold'>Name: {name} </p>
            <p className='text-xl font-semibold'>Email: {email}</p>
            <p className='text-xl font-semibold'>Phone No.: {number} </p>
            <p className='text-xl font-semibold'>Enquiry Type: {enquiryType}</p>
            <p className='text-xl font-semibold'>Message: {message}</p>
            <button className='w-[33%] cursor-pointer py-1 bg-blue-800 text-white text-xl' onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Card
