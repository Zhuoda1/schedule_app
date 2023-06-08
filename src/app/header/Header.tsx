import React from 'react'

function Header() {
  return (
    <div className='flex h-10 justify-start min-w-max'>
        <a href='/' className='font-bold px-5 py-3 hover:text-indigo-500'>Welcome</a>
        <a href='/schedule' className='font-bold px-5 py-3 hover:text-indigo-500'>Schedule</a>
        <a href='/addEvent' className='font-bold px-5 py-3 hover:text-indigo-500'>Add Event</a>
    </div>
  )
}

export default Header