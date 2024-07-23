import React from 'react'
import { CartIcon, MoneyIcon, PeopleIcon } from '../Images'

export default function Solution() {
    const cards = [
        {
            id:1,img:CartIcon, title:"Energy Vendors with different payment options", text:"Get access to various energy vendors that provide different energy products for your needs with varying payment options.", 
        },
        {
            id:2, img:PeopleIcon, title:"Crowdfunding for community energy projects", text:"Get access to a platform where as a community you can raise money for energy projects."
        },
        {
            id:3, img:MoneyIcon, title:"Governmental Incentives", text:"As a user on our platform, we provide you updates and access to governmental incentives, grants, and subsidies to make purchases on reliable green energy products."
        }
    ]
  return (
    <div className='text-center bg-[#f1f1f1] py-12 px-sm md:px-md xl:px-lg 2xl:px-xl'>
        <p className='text-[24px] font-semibold open-sans pb-5'>Our Solution</p>
        <h2 className='fira-sans font-medium text-[32px] leading-[43.2px] md:text-[40px] md:leading-[51.3px] mb-3'>Inclusive Sustainable Approach</h2>
        <p>We provide energy solutions tailored to every individual and community.</p>
        <div className='mt-7 grid gap-8 md:flex '>
            {
                cards.map(
                    card=> 
                    <div key={card.id} className='gap-4 p-3 xl:py-8 border-[1px] border-[#1f1f1f] rounded-md w-[80%] mx-auto grid items-center' >
                        <p className='fira-sans font-medium text-[20px] leading-[24px] xl:text-[27px] xl:leading-[33.6px]'>{card.title}</p>
                        <img src={card.img} className='mx-auto w-[40px] text-green-500'></img>
                        <p className='open-sans text-sm leading-[18px] xl:text-base xl:leading-[24px]'>{card.text}</p>
                    </div>
                )
            }
        </div>
    </div>
  )
}
