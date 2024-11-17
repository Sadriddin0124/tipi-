"use client"
import Contact from '@/app/components/home/Contact'
import AboutFaculty from '@/app/components/fakultetlar/SingleFaculty/AboutFaculty'
import SingleFacultyHero from '@/app/components/fakultetlar/SingleFaculty/SingleFacultyHero'
import Statistics from '@/app/components/fakultetlar/SingleFaculty/SingleFacultyTable'
import React from 'react'
import { useRouter } from 'next/router'

const SingleFaculty = () => {
  // const router = useRouter()
  // console.log(router);
  return (
    <div>
      <SingleFacultyHero/>
      <Statistics/>
      <AboutFaculty/>
      <Contact/>
    </div>
  )
}

export default SingleFaculty
