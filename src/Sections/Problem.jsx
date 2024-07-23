import React from 'react'
import { Mobil } from '../Images'

export default function Problem() {
  return (
    <div className='py-16 bg-[#f1f1f1] md:flex items-center'>
        <div className='mb-10 px-sm md:w-[45%] xl:pl-20'>
            <h2 className='fira-sans font-bold text-[31px] mb-3'>Problem Statement</h2>
            <p className='leading-[24px] open-sans text-[#1E251C]'>
                Millions of households in Sub-Saharan Africa lack access to reliable and affordable electricity. They often depend on expensive and polluting fossil fuels, leading to long wait times, high costs, and air and noise pollution. This hinders economic development and disproportionately affects low-income households.
            </p>
        </div>
        <img src={Mobil} className='md:w-[55%]'></img>
    </div>
  )
}
