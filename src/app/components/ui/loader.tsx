"use client"
import React, { useEffect, useState } from 'react'

const Loader = () => {
    const [loader, setLoader] = useState<boolean>(true)
  useEffect(()=> {
    setTimeout(() => {
      setLoader(false)
    }, 2000);
  },[])
  return (
    loader && <div className='fixed w-full min-h-screen flex items-center justify-center bg-white z-50 top-0'>
      <span className="loader"></span>
    </div>
  )
}

export default Loader
