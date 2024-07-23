import React from 'react'
import Header from '../components/Header'


export default function Community() {
  return (
    <div>
        <div className='px-sm md:px-md xl:px-xl 2xl:px-2xl py-10 bg-[#b7c8b5]'>
                <Header></Header>
                <div className='pt-20 text-center'>
                    <a href='https://forms.gle/VPGRzP44NNf52f4M6' className='mx-auto w-fit'><button className='p-4 rounded-md bg-[#26c281] text-white text-lg'>
                        Fund your community solar project
                    </button></a>
                    <p className='mt-5'>Become your community hero by finding funds to implement solar projects for your community.</p>
                </div>
              
        </div>
        <div className='px-sm md:px-md xl:px-xl 2xl:px-2xl pt-5'>
            <p className='text-[24px]'>
                No community projects yet for funding.
            </p>
        </div>
    </div>
  )
}
