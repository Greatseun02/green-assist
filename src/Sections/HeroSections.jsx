import React from 'react'
import Header from '../components/Header'

export default function HeroSections() {
  return (
    <div className='heroSection bg-hero-image pt-7 pb-20 px-sm md:px-md xl:px-lg 2xl:px-xl xl:pb-44 xl:pt-20 ' >
        <Header/>
        <div className='pt-16 px-3 grid items-center mt-20'>
            <p className='text-[18px] font-medium open-sans rounded-md text-white border-2 border-[rgba(255,255,255,0.2)] px-[32px] mx-auto py-[14px] w-fit '>Say no to long fuel queues!</p>
            <p className='my-8 fira-sans font-medium text-[48px] leading-[52.8px] text-center text-white md:text-[80px] md:leading-[88px] xl:text-[96px] xl:leading-[115px]'>
                Your One-Stop Platform for your electricity needs.
            </p>
            <a href='https://linktr.ee/green_assist' className='w-fit mx-auto'><button className='rounded-md py-[13px] px-[17px] mx-auto text-white bg-[#347C17] hover:bg-[#3d951b]  '>Get Started</button></a>
        </div>
    </div>
  )
}
