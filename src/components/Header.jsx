import React, { useEffect } from 'react'
import { Hamburger, Logo } from '../Images'

import { useRef } from 'react'


export default function Header() {
    const button = useRef(null)
    const toggle = useRef(null)
    


    
    function toggleButton(){
        toggle.current.classList.toggle("h-fit")
        toggle.current.classList.toggle("pt-8")
    }
  return (
    <div className='flex flex-wrap bg-[#eff4ed] rounded-xl border-0 p-4 md:p-7 items-center'>
        <div className=''>
            <img className=' w-[100px]' src={Logo}></img>
        </div>
        <div className='mx-auto hidden xl:block'>
            <a href='/community-funding' className='hover:text-[#2f392d] open-sans  '>Commmunity Funding</a>
        </div>
        <div className='hidden xl:block'>
            <a className=' font-medium open-sans text-[#3E951C]' href='https://linktr.ee/green_assist'>Get Started</a>
        </div>
        <div onClick={toggleButton} className=' xl:hidden ms-auto border-2 border-[#1f1f1f] p-2 rounded-md'>
            <img ref={button} className='w-[20px] h-[15px]' src={Hamburger}></img>
        </div>
        <div ref={toggle}  className='xl:hidden overflow-hidden grid h-0 gap-3 w-full justify-center text-center'>
            <a href='/community-funding' className='hover:text-[#2f392d] open-sans  '>Commmunity Funding</a>
            <a className=' font-medium open-sans text-[#3E951C]' href='https://linktr.ee/green_assist'>Get Started</a>
        </div>
    </div>
  )
}
