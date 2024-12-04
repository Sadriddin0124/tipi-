import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const BtnWhite = ({value}: {value:string}) => {
  return (
    <button className='bg-[#404B7C] md:bg-white px-5 shadow whitespace-nowrap py-4 text-[14px] md:text-[24px] hover:bg-white md:hover:bg-[#404B7C] hover:border-[#404B7C] md:hover:border-white border-2 hover:text-[#404B7C] md:hover:text-white ease-linear duration-200 border-transparent rounded-[10px] gap-1 sm:gap-3 text-white md:text-[#404B7C]'>
        <span className='flex items-center gap-3'>{value}<FaArrowRightLong /></span>
    </button>
  )
}

export default BtnWhite
