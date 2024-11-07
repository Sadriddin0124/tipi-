import Contact from '@/app/components/Contact'
import FacultiesHero from '@/app/components/fakultetlar/FacultiesHero'
import FakultetlarStatistics from '@/app/components/fakultetlar/FacultiesStatistics'
import IT from '@/app/components/fakultetlar/IT'
import News from '@/app/components/News'
import React from 'react'

const Fakultetlar = () => {
  return (
    <div>
      <FacultiesHero/>
      <FakultetlarStatistics/>
      <IT/>
      <News/>
      <Contact/>
    </div>
  )
}

export default Fakultetlar
