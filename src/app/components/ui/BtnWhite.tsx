import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const BtnWhite = ({value}: {value:string}) => {
  return (
    <button className='bg-white px-6 py-7 text-[14px] md:text-[24px] hover:bg-[#404B7C] hover:border-white border-2 hover:text-white ease-linear duration-200 border-transparent rounded-[10px] gap-1 sm:gap-3 text_main'>
        <span className='flex items-center px-2 sm:px-4 py-1 sm:py-3 gap-3'>{value}<FaArrowRightLong /></span>
    </button>
  )
}

export default BtnWhite
