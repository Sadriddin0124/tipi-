"use client"
import { TBodyTYpe } from '@/app/types/all.types';
import React from 'react'

const TableComponent = ({THeads, TBodies}: {THeads: string[]; TBodies: TBodyTYpe[]}) => {
  const status = THeads.length === 5 ? true : false
  return (
    <table className='w-full max-w-[1300px]'>
      <thead className='flex justify-between'>
      </thead>
      <tbody>
            <tr className='w-full text-[26px] py-5 border-b-[2px] border-b-[#404B7C]'>
              {
                THeads?.map((item,index)=> (
                  <td key={index} className="py-5">{item}</td>
                ))
              }
            </tr>
          {
            TBodies?.map((item,index)=> (
              <tr className='text-[26px] py-5 text_main border-b-[2px] border-b-[#404B7C]' key={index}>
                <td className='py-5'>{item?.tb1}</td>
                <td className='py-5'>{item?.tb2}</td>
                <td className='py-5'>{item?.tb3}</td>
                {item?.tb5 && <td className='py-5'>{item?.tb4?.map((el,index)=> <a href={el?.link} target='blank' key={index}>{el?.icons}</a>)}</td>}
                <td className='py-5'>{item?.tb5}</td>
              </tr>
            ))
          }
      </tbody>
    </table>
  )
}

export default TableComponent
