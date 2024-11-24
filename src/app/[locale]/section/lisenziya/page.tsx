import React from 'react'
import License1 from "@/assets/license1.webp"
import License2 from "@/assets/license2.webp"
import Image from 'next/image'
const License = () => {
  return (
    <div className='flex flex-col items-center gap-4 justify-center py-16'>
      <Image src={License1} alt='license1' width={1200} height={2000} className='max-w-[1000px]'/>
      <Image src={License2} alt='license1' width={1200} height={2000} className='max-w-[1000px]'/>
    </div>
  )
}

export default License
