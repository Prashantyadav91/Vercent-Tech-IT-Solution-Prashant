import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card2 from '../components/Card2'

const Consultation = () => {
  const [consult, setConsult] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/contact/getConsult')
      .then((res) => {
        setConsult(res.data)
      })
      .catch((err) => console.log(err))
  }, [])
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/contact/deleteConsult/${id}`)
      .then(() => { setConsult(prev => prev.filter(msg => msg._id !== id)); })
      .then(() => alert('Message Deleted sucessfully!'))
      .catch(err => console.error(err));
  }

  return (
    <div className='w-full p-5 ' >
      <div className='flex justify-evenly gap-5 flex-wrap'>
        {
          consult.map((item) => (
              <Card2 key={item._id} name={item.name} email={item.email} number={item.number} service={item.service} visaStatus={item.visaStatus} technology={item.technology} handleDelete={() => handleDelete(item._id)} />
          ))
        }
      </div>
    </div>
  )
}

export default Consultation
