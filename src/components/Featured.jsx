import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';
// import { Power4 } from "gsap/all"

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index)=>{
      cards[index].start({y: "0"})
  }
  const handleHoverEnd = (index)=>{
	    cards[index].start({y: "100%"})
	}

  return (
    <div data-scroll data-section data-scroll-speed="-0.1" className='w-full py-28'>
        <div className='w-full px-16 border-b-[1px] border-zinc-800 pb-20'>
            <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
        </div>
        <div className='px-16'>
            <div className="cards w-full flex gap-2">
                <motion.div 
                  	onHoverStart={()=>handleHover(0)}
					          onHoverEnd={()=>handleHoverEnd(0)}
                  	className='cardcontainer relative w-1/2 h-[34vw] rounded-2xl mt-32'>
                    <h1 className='absolute flex overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none -right-40 tracking-tight font-semibold text-8xl text-[#cdea68]'>
                    {"FYDE".split('').map((item, index)=>(
                      	<motion.span
							                initial={{y: "100%"}}
							                animate={cards[0]}
							                transition={{ease: [.22, 1, .36, 1], delay: index*0.03}}
					 	 	                className='inline-block translate-y-full'>{item}
                        </motion.span>
                      ))}
                    </h1>
                  	<div className='card w-[45vw] h-[34vw] rounded-2xl'>
                      <img className='w-full h-full bg-cover rounded-2xl' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png'></img>
                    </div>
                </motion.div>
                <motion.div
					                onHoverStart={()=>handleHover(1)}
					                onHoverEnd={()=>handleHoverEnd(1)}
					                className='cardcontainer relative w-1/2 h-[34vw] rounded-2xl mt-32'>
                    <h1 className='card absolute flex overflow-hidden -left-44 translate-x-1/2 top-52 translate-y-1/2 z-[9] leading-none tracking-tight font-semibold text-8xl text-[#cdea68]'>
                      {"VISE".split('').map((item, index)=>(
                        <motion.span 
						                initial={{y: "100%"}}
						                animate={cards[1]}
						                transition={{ease: [.22, 1, .36, 1], delay: index*0.03}}
						                className='inline-block translate-y-full text-align-start'>{item}</motion.span>
                    ))}
                    </h1>
                	  <div className='card w-[45vw] h-[34vw] rounded-2xl overflow-hidden'>
                      <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg'></img>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Featured;