import React from 'react'
import Navbar from './Navbar'
import waves from '../asset/waves.png';
import banner from '../asset/banner.png';
import atos from '../asset/brand/Atos.png';
import google from '../asset/brand/google.png';
import hbo from '../asset/brand/hbo.png';
import hcl from '../asset/brand/HCL.png';
import next from '../asset/brand/next.png';

function Header() {
  return (

    <div>
        <div className='absolute top-0 w-full z-10 '>
            <Navbar />
        </div>
        <div className='h-[calc(100vh-50vh)] relative bg-custom'>
            
            <div className=''>
                <img src={banner} alt='linked' className='w-full h-[calc(100vh-50vh)] object-cover'/>
                <img src={waves} alt="waves" className='w-full absolute bottom-0'/>
            </div>            
        </div>
        <div className='absolute top-0 h-[calc(100vh-50vh)] w-full flex justify-center items-center'>
            <div className='text-center text-white'>
                <h1 className='text-6xl font-bold mb-10 tracking-wide' >Current Openings</h1>
                <h2 className='text-xl tracking-wider'>Let’s create cool stuff together!</h2> 
            </div>            
        </div>

        <div className='w-screen bg-[#F3F4F8] py-8'>
            <div className='sm:flex justify-center items-center hidden space-x-[calc(5vw)]'>
                <img src={google} alt='google' className='h-8 w-24'/>
                <img src={next} alt='next' className='h-6 w-20'/>
                <img src={atos} alt='atos' className='h-6 w-20'/>
                <img src={hcl} alt='hcl' className='h-6 w-20' />
                <img src={hbo} alt='hbo' className='h-6 w-20' />
            </div>
        </div>                     
    </div>
  )
}

export default Header