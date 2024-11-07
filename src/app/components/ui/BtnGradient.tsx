import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const BtnGradient = ({value}: {value: string}) => {
  return <button className='btn_gradient mt-6 text-[14px] md:text-[24px] rounded-[10px] gap-1 sm:gap-3 text-white'>
        <span className='flex items-center px-2 sm:px-4 py-1 sm:py-3 gap-3'>{value}<FaArrowRightLong /></span>
    </button>

}

export default BtnGradient
