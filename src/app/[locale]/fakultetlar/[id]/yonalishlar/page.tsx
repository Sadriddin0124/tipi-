import Contact from '@/app/components/home/Contact'
import AboutFaculty from '@/app/components/fakultetlar/SingleFaculty/AboutFaculty'
import DirectionsHero from '@/app/components/fakultetlar/SingleFaculty/directions/DirectionsHero'
import React from 'react'

const Yonalishlar = () => {
    
  return (
    <section>
        <DirectionsHero/>
        {/* <AboutFaculty title="Yo'nalish haqida"/> */}
        <Contact/>
    </section>
  )
}

export default Yonalishlar
