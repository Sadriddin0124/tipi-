"use client"
import EducatorsCards from '@/app/components/educators/EducatorsCards'
import Aos from 'aos';
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'; 

const Educators = () => {
  useEffect(() => {
    Aos.init({
        duration: 1000,
        once: true, 
        easing: 'linear',
    });
}, []);
  return (
    <div>
      <EducatorsCards/>
    </div>
  )
}

export default Educators
