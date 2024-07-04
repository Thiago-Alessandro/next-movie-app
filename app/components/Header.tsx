import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex p-3 items-center justify-between max-w-6xl mx-auto '>
      <div className='flex gap-4'>
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="about" Icon={BsFillInfoCircleFill} />
      </div>

      <Link href={"/"} className='flex gap-1 items-center'>
        <span className='text-2xl bg-amber-500 font-bold py-1 px-2 rounded-lg'>Movie</span>
        <span className='text-xl hidden sm:inline'>App</span>
      </Link>
    </div>
  )
}
