import React from 'react'
import { Money, Refinery, Smoke } from '../Images'


export default function Issues() {
    const issues = [
        {
            id:1, img:Refinery, title:"Fuel Scarcity", text:"This leads to frequent long fuel queues and unavailability of fuels."
        },
        {
            id:2, img:Money, title:"High Cost of Fuel", text:"Fuel prices are expensive and are not sustainable for long periods."
        },
        {
            id:3, img:Smoke, title:"Noise and Air Pollution", text:"Using generators pollute the air and causes a lot noise pollution "
        }
    ]
  return (
    <div className='px-sm bg-[#347c18] py-12 xl:py-20 text-center text-white '>
        <h2 className='fira-sans font-medium text-[40px] leading-[56.7px] mb-7 md:text-[48px] md:leading-[64px]'>ISSUES WITH GENERATORS FOR ELECTRICITY</h2>
        <p className='open-sans leading-[24px] text-[#FFFFFFCC] xl:w-[50%] mx-auto'>In sub-Saharan Africa, these are some common issues faced by the population that relies on fossil fuels for light and electricity.</p>
        <div className='md:flex flex-wrap justify-center'>
            {
                issues.map(
                    issue=>
                        <div key={issue.id} className='px-[12px] pt-10 md:w-[33%] xl:text-left '>
                            <img  className='rounded-xl h-[230px] w-full object-cover' src={issue.img}></img>
                            <div className='pt-5'>
                                <p className='open-sans text-[24px] font-medium mb-3 md:text-[30px]'>{issue.title}</p>
                                <p className='text-[#FFFFFFCC] open-sans md:text-[18px]'>{issue.text}</p>
                            </div>
                        </div>
                    
                )
            }
        </div>
    </div>
  )
}
