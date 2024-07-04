import React from 'react'
import {  AiOutlineLoading3Quarters } from 'react-icons/ai'
export default function loading() {
  return (
    <div className='flex justify-center items-end mt-16'>
      <AiOutlineLoading3Quarters className='h-52 animate-spin text-amber-600 text-2xl' />
    </div>
  )
}
