import React from 'react'

export default function CTA() {
  return (
    <div className='py-5 px-10 mx-4 rounded-2xl shadow-[0_0_10px_3px_rgba(0,0,0,0.2)] mb-10 md:w-[70%] md:mx-auto md:py-10'>
        <p className='text-[#26c281] fira-sans font-medium text-[32px] leading-[38.4px] mb-3 md:text-[64px] xl:text-[80px] xl:mb-0 xl:leading-[96px]'>Get Started</p>
        <p className='open-sans text-[14px] leading-[21px] md:text-[16px] mt-7 mb-7 xl:text-[18px]'>Interested in our services? Click the button below to get started on your journey to achieve your energy goals. No more waiting in the darkness for Nepa. Get that energy product through us now!</p>
        <a href='https://linktr.ee/green_assist'><button className='text-white font-medium  bg-[#347c18] w-full py-5 rounded-lg '>Get Started</button></a>
    </div>
  )
}
