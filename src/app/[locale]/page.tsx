"use client"
import Campus from '@/app/components/Campus'
import Contact from '@/app/components/Contact'
import Events from '@/app/components/Events'
import Footer from '@/app/components/Footer'
import Hero from '@/app/components/Hero'
import News from '@/app/components/News'
import Pedagogue from '@/app/components/Pedagogue'
import Statistics from '@/app/components/Statistics'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [loader, setLoader] = useState<boolean>(true)
  useEffect(()=> {
    setTimeout(() => {
      setLoader(false)
    }, 500);
  },[])
  return (
    <div className=' overflow-hidden'>
      {loader && <div className='fixed w-full min-h-screen flex items-center justify-center bg-black z-50 top-0'>
        <span className="loader"></span>
      </div>}
      <Hero/>
      <Statistics/>
      <Campus/>
      <News/>
      <Pedagogue/>
      <Events/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
