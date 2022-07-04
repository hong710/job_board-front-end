import React from 'react'
import Logo from './Logo';
import {Link}from 'react-router-dom';
function Navbar() {
  return (
    <div className=''>
        <div className=' py-8 px-12 flex justify-between items-center'>
            <Logo height={48} />
            <div className='flex'>
                <Link to='/' className='text-white text-sm uppercase mr-6 tracking-wide'>Career</Link>
                <Link to='/create'>
                  <p className='text-white text-sm uppercase mr-6 tracking-wide'>Add job</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar