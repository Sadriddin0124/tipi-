import Contact from '@/app/components/home/Contact'
import AboutFaculty from '@/app/components/fakultetlar/SingleFaculty/AboutFaculty'
import SingleFacultyHero from '@/app/components/fakultetlar/SingleFaculty/SingleFacultyHero'
import Statistics from '@/app/components/fakultetlar/SingleFaculty/SingleFacultyTable'
import React from 'react'

const Check = () => {
  return (
    <div>
      <SingleFacultyHero/>
      <Statistics/>
      <AboutFaculty/>
      <Contact/>
    </div>
  )
}

export default Check
