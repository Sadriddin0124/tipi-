"use client"
import EducatorsCards from '@/app/components/educators/EducatorsCards'
import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css'; 
import { fetchEducators } from '@/app/lib/actions';

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
    <div>
      <EducatorsCards data={teachers}/>
    </div>
  )
}

export default Educators
