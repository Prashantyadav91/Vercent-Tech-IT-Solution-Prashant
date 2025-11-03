import axios from 'axios'
import React, { useState } from 'react'

const Service = () => {

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [desc1, setDesc1] = useState('')
  const [desc2, setDesc2] = useState('')
  const [desc3, setDesc3] = useState('')
  const [desc4, setDesc4] = useState('')
  const [image, setImage] = useState(null)

  const handleSubmit = async () => {
    try {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('desc', desc)
      formData.append('desc1', desc1)
      formData.append('desc2', desc2)
      formData.append('desc3', desc3)
      formData.append('desc4', desc4)
      formData.append('image', image)
      await axios.post('http://localhost:5000/api/service/addService', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      alert('Service added successfully')
      setTitle('')
      setDesc('')
      setDesc1('')
      setDesc2('')
      setDesc3('')
      setDesc4('')
      setImage(null)
    }
    catch (err) {
      console.error(err)
      alert('Error while adding service')

    }
  }

  return (
    <div>
      <form className='ml-10 mt-1 flex gap-2 flex-col w-[50%] ' action="">
        <label className='text-xl font-semibold' htmlFor="title">Title: </label>
        <input onChange={(e) => setTitle(e.target.value)} value={title} className='border w-[70%] p-2' type="text" name="title" id="" placeholder='type title' />

        <label className='text-xl font-semibold' htmlFor="desc">Description1: </label>
        <input onChange={(e) => setDesc(e.target.value)} value={desc} className='border w-[70%] p-2' type="text" name="desc" placeholder='type description' id="" />

        <label className='text-xl font-semibold' htmlFor="desc1">Description 2: </label>
        <input onChange={(e) => setDesc1(e.target.value)} value={desc1} className='border w-[70%] p-2' type="text" name="desc1" placeholder='type description' id="" />

        <label className='text-xl font-semibold' htmlFor="desc2">Description 3: </label>
        <input onChange={(e) => setDesc2(e.target.value)} value={desc2} className='border w-[70%] p-2' type="text" name="desc2" placeholder='type description' id="" />

        <label className='text-xl font-semibold' htmlFor="desc3">Description 4: </label>
        <input onChange={(e) => setDesc3(e.target.value)} value={desc3} className='border w-[70%] p-2' type="text" name="desc3" placeholder='type description' id="" />

        <label className='text-xl font-semibold' htmlFor="desc4">Description 5: </label>
        <input onChange={(e) => setDesc4(e.target.value)} value={desc4} className='border w-[70%] p-2' type="text" name="desc4" placeholder='type description' id="" />

        <label className='text-xl font-semibold' htmlFor="image">Image: </label>
        <input onChange={(e) => setImage(e.target.files[0])} accept='image/*' className='border w-[70%] p-2' type="file" name="image" id="" />

        <button className='cursor-pointer bg-blue-800 text-white p-3 w-40' type='button' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Service
