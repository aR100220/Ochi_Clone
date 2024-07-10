import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUp } from "react-icons/fa6";

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.02" className='w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black overflow-hidden'>
        <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[3.5vw] tracking-tight">
            Ochi is a strategic partner for fast-growing tech businesses that need to <span className='wordLinks relative'>raise funds</span>, <span className='wordLinks relative'>sell products</span>, <span className='wordLinks relative'>explain complex ideas</span>, and <span className='wordLinks relative'>hire great peo­ple</span>.
        </h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-8 border-[#212b03] mt-[3vw]'>
            <div className='w-1/3'>
                <h1 className='text-[1.1vw] font-["Neue_Montreal"] tracking-tight -mt-5'>
                    What you can expect : 
                </h1>
            </div>
            <div className='w-1/3'>
            <p className='ml-44 font-["Neue_Montreal"] text-[1.1vw] tracking-tight -mt-5'>
                We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
            </p>
            <p className='ml-44 font-["Neue_Montreal"] text-[1.1vw] tracking-tight mt-10'>
                We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
            </p>
            </div>
            <div className='w-1/4'>
                <h1 className='ml-60 font-["Neue_Montreal"] text-[1.1vw] tracking-tight mt-20 mb-10'>
                    S : 
                </h1>
                <p className='-mt-5'><a href='url' className='socialLinks ml-60 font-["Neue_Montreal"] text-[1.1vw] tracking-tight relative'>Instagram</a></p>
                <p><a href='url' className='socialLinks ml-60 font-["Neue_Montreal"] text-[1.1vw] tracking-tight relative'>Behance</a></p>
                <p><a href='url' className='socialLinks ml-60 font-["Neue_Montreal"] text-[1.1vw] tracking-tight relative'>Facebook</a></p>
                <p><a href='url' className='socialLinks ml-60 font-["Neue_Montreal"] text-[1.1vw] tracking-tight relative'>LinkedIn</a></p>
            </div>
        </div>
        <div className='w-full flex gap-5 border-t-[1px] pt-2 border-[#212b03] mt-[6vw]'>
            <div className='w-1/2'>
                <h1 className='text-[4.5vw] font-["Neue_Montreal"] tracking-tighter'>Our approach :</h1>
                <div>
                    <a href='' className='btn btn--primary font-["Neue_Montreal"]' data-zoom-target>
                    <span className='btn_text'>Read More</span>
                    <span className='btn_icon btn_icon--append icon-arrow-right-up'><FaArrowUp /></span>
                    </a>
                </div>
            </div>
            <div className="w-1/2 h-[70vh] bg-[#8c9a5b] rounded-3xl mt-3"></div>
        </div>
    </div>
  )
}
export default About;