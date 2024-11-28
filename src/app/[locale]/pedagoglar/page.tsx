"use client"
import EducatorsCards from '@/app/components/educators/EducatorsCards'
import Aos from 'aos';
import React, { useEffect, useState } from 'react'
// import 'aos/dist/aos.css';  
 
import { fetchEducators } from '@/app/lib/actions';
import Contact from '@/app/components/home/Contact';

const Educators = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    Aos.init({
        duration: 1000,
        once: true, 
        easing: 'linear',
    });
    const getData = async () => {
      const item = await fetchEducators();
      setTeachers(item);
    };
    getData();
}, []);
useEffect(() => {
}, []);
  return (
    <div className='py-[100px]'>
      <EducatorsCards data={teachers}/>
      <div className='py-[40px]'></div>
      <Contact/>
    </div>
  )
}

export default Educators
