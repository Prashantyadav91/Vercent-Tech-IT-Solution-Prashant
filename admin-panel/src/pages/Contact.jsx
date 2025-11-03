import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'

const Contact = () => {
  const [quiry, setQuiry] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/contact/getQuiry')
      .then((res) => {
        setQuiry(res.data)
      })
      .catch((err) => console.log(err))
  }, [])
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/contact/deleteQuiry/${id}`)
      .then(() => { setQuiry(prev => prev.filter(msg => msg._id !== id)); })
      .then(() => alert('Message Deleted sucessfully!'))
      .catch(err => console.error(err));
  }

  return (
    <div className='w-full p-5 ' >
      <div className='flex justify-evenly gap-5 flex-wrap'>
        {
          quiry.map((item) => (
              <Card key={item._id} name={item.name} email={item.email} number={item.number} enquiryType={item.enquiryType} message={item.message} handleDelete={() => handleDelete(item._id)} />
          ))
        }
      </div>
    </div>
  )
}

export default Contact
