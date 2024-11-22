"use client"
import Contact from '@/app/components/home/Contact'
import SingleFacultyHero from '@/app/components/fakultetlar/SingleFaculty/SingleFacultyHero'
import Statistics from '@/app/components/fakultetlar/SingleFaculty/SingleFacultyTable'
import React from 'react'




interface PageProps {
  params: {
    locale: string;
    id: string;
  };
}

const SingleFaculty = ({ params }: PageProps) => {



  console.log(params.id);



  return (
    <div>
      <SingleFacultyHero />
      <Statistics id={params.id} />
      <Contact />
    </div>
  )
}

export default SingleFaculty
