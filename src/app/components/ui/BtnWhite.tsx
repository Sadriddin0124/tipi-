import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const BtnWhite = ({value}: {value:string}) => {
  return (
    <button className='bg-white px-5 py-4 text-[14px] md:text-[24px] hover:bg-[#404B7C] hover:border-white border-2 hover:text-white ease-linear duration-200 border-transparent rounded-[10px] gap-1 sm:gap-3 text_main'>
        <span className='flex items-center gap-3'>{value}<FaArrowRightLong /></span>
    </button>
  )
}

export default BtnWhite