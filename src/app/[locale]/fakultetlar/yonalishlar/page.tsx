import Contact from '@/app/components/home/Contact'
import AboutFaculty from '@/app/components/fakultetlar/SingleFaculty/AboutFaculty'
import DirectionsHero from '@/app/components/fakultetlar/SingleFaculty/directions/DirectionsHero'
import React from 'react'
import DirectionsBlog from '@/app/components/fakultetlar/SingleFaculty/directions/DirectionsBlog'

const Yonalishlar = () => {
    
  return (
    <section>
        <DirectionsHero/>
        <DirectionsBlog/>
        <Contact/>
    </section>
  )
}

export default Yonalishlar
