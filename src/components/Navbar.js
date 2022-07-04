import React from 'react'
import Logo from './Logo';
import {Link}from 'react-router-dom';
function Navbar() {
  return (
    <div className=''>
        <div className=' py-8 px-4 sm:px-8 flex justify-between items-center'>
            <Logo className="w-[150px] sm:w-[250px] "/>
            <div className='flex'>
                <Link to='/' className='text-white text-xs sm:text-sm uppercase mr-6 tracking-wide'>Career</Link>
                <Link to='/create'>
                  <p className='text-white text-xs sm:text-sm uppercase mr-6 tracking-wide'>Add job</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar