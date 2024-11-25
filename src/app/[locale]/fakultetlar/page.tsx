"use client"
import Contact from '@/app/components/home/Contact'
import FacultiesHero from '@/app/components/fakultetlar/FacultiesHero'
import FakultetlarStatistics from '@/app/components/fakultetlar/FacultiesStatistics'
import IT from '@/app/components/fakultetlar/IT'
import News from '@/app/components/home/News'
import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'; 
const Fakultetlar = () => {
  useEffect(() => {
    Aos.init({
        duration: 1000,
        once: true, 
        easing: 'linear',
    });
}, []);
  return (
    <div>
      <FacultiesHero/>
      {/* <FakultetlarStatistics/> */}
      <div className='pt-[30px]'>
        <IT/>
      </div>
      <News/>
      <Contact/>
    </div>
  )
}

export default Fakultetlar
