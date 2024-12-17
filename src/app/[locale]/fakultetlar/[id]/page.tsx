"use client"
import Contact from '@/app/components/home/Contact'
import SingleFacultyHero from '@/app/components/fakultetlar/SingleFaculty/SingleFacultyHero'
import Statistics from '@/app/components/fakultetlar/SingleFaculty/SingleFacultyTable'
import React, { useEffect } from 'react'
import Aos from 'aos'




interface PageProps {
  params: {
    locale: string;
    id: string;
  };
}

const SingleFaculty = ({ params }: PageProps) => {


  useEffect(() => {
    Aos.init({
        duration: 10000,
        easing: 'linear',
    });
}, []);

  return (
    <div>
      <SingleFacultyHero />
      <Statistics id={params.id} />
      <Contact />
    </div>
  )
}

export default SingleFaculty
