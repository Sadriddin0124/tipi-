"use client"
import Contact from '@/app/components/home/Contact'
import SingleFacultyHero from '@/app/components/fakultetlar/SingleFaculty/SingleFacultyHero'
import Statistics from '@/app/components/fakultetlar/SingleFaculty/SingleFacultyTable'
import React from 'react'

const SingleFaculty = () => {
  return (
    <div>
      <SingleFacultyHero/>
      <Statistics/>
      <Contact/>
    </div>
  )
}

export default SingleFaculty
