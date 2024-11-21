import ConstructorSlider from '@/app/components/contstructor/Slider'
import AboutFaculty from '@/app/components/fakultetlar/SingleFaculty/AboutFaculty'
import { fetchBlog, fetchVideoSlider } from '@/app/lib/actions'
import React, { useEffect, useState } from 'react'

const Constructor = () => {
  const [slider, setSlider] = useState([])
  const [blog, setBlog] = useState([])
  useEffect(()=> {
    const getData = async() => {
      const slider = await fetchVideoSlider()
      setSlider(slider)
      const blog = await fetchBlog()
      setBlog(blog)
    }
    getData()
  },[])
  return (
    <div>
      <ConstructorSlider/>
      <AboutFaculty title='title'/>
    </div>
  )
}

export default Constructor
