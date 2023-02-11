import React, { ReactNode } from 'react'
import { motion } from "framer-motion";
const InitialTransition = ({children}:{children:ReactNode}) => {
  const blackBox={
    initial:{
      bottom:0,
      height:"100vh",
    },
    animate:{
      height:0,
      transition:{
        duration:1,
        ease:[0.87,0,0.13,1],
      }
    }
  }
  return (
    <div className='absolute'>
      <motion.div
        initial="initial"
        animate="animate"
        variants={blackBox}
        className='relative bg-black p-5'
        onAnimationStart={()=>document.body.classList.add("overflow-hidden")}
        onAnimationComplete={()=>document.body.classList.remove("overflow-hidden")}
        >
          {children}
      </motion.div>
    </div>
  )
}

export default InitialTransition