import React from 'react'
import CTA from '../components/CTA'
import { MessageIcon } from '../Images'

export default function Footer({cta}) {
  return ( 
    <div className='bg-[#f1f1f1] pt-16'>
        {cta && <CTA/>} 
        <div className='text-white xl:grid xl:grid-cols-2 bg-black items-center'>
            <div className='bg-[#3d951b] px-sm py-14 md:px-20 xl:px-40 2xl:px-50 h-fit'>
                <p className='text-[32px] fira-sans font-medium mb-3'>Get in Touch</p>
                <p className='open-sans leading-[24px]'>
                   To reach out to us, please use the contact form below 
                </p>
                <p className='font-medium fira-sans text-[20px] my-3'>OR</p>
                <div className='mb-3 flex items-center '>
                    <img className='w-[23px] fill-red-500  text-white' src={MessageIcon}></img>
                    <p className='text-2xl font-medium ml-3'>
                        Email us at
                    </p>
                </div>
            
                <p>goodnews@greenassit.info</p>
            </div>
            <div className='bg-black px-sm py-16 md:px-20 '>
                <p className='font-medium text-[42px] fira-sans mb-5'>Contact Form</p>
                <p className='open-sans leading-6'>Fill out the form below to get in touch about our services</p>
                <form className='open-sans pt-10 grid gap-5'>
                    <div className='grid gap-3'>
                        <label for="name" className=''>Name</label>
                        <input id='name' name='name' className='p-3 bg-black border-[#ffffff32] border-2 rounded-md'   placeholder='Enter your name'></input> 
                    </div>
                    <div className='grid gap-3'>
                        <label for="email" className=''>Email</label>
                        <input id='email' name='email' className='p-3 bg-black border-[#ffffff32] border-2 rounded-md'   placeholder='Enter your email'></input> 
                    </div>
                    <div className='grid gap-3'>
                        <label for="Phone" className=''>Phone</label>
                        <input id='phone' name='phone' className='p-3 bg-black border-[#ffffff32] border-2 rounded-md'   placeholder='Enter your phone number'></input> 
                    </div>
                  
                    <div className='grid gap-3'>
                        <label for="subject" className=''>Subject</label>
                        <input id='subject' name='subject' className='p-3 bg-black border-[#ffffff32] border-2 rounded-md'   placeholder='Email subject'></input> 
                    </div>
                    <div className='grid gap-3'>
                        <label for="message" className=''>Message</label>
                        <textarea id='message' name='message' className='p-3 bg-black border-[#ffffff32] border-2 rounded-md'   placeholder='Write your message'></textarea> 
                    </div>
                    <button className='text-[#347C17] bg-white py-5 rounded-md mb-5'>Submit Your Message</button>
                </form>
            </div>
        </div>
    </div>
  )
}
