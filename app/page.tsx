"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <main className="absolute w-full h-screen bg-slate-600 top-0 flex flex-col lg:flex-row items-center lg:justify-between md:justify-start bg-home-sm md:bg-home-md lg:bg-home-lg bg-cover bg-center text-primary px-[11.45%]">
      <motion.div className="flex flex-col items-center lg:items-start lg:gap-6 md:gap-0 text-secondary w-[450px] md:mt-[202px] ">
        <motion.div 
        initial={{x: -675}}
        animate={{x: 0}}
        transition={{delay: .1}}
        className="text-[20px] lg:text-[28px] font-barlow-condensed tracking-[4.72px] uppercase font-normal">
          so, you want to travel to
        </motion.div>
        <motion.div 
        initial={{x: -675}}
        animate={{x: 0}}
        className="text-[150px] font-normal font-bellefair text-primary uppercase">Space</motion.div>
        <motion.div 
        initial={{x: -675}}
        animate={{x: 0}}
        transition={{"delay": .2}}
        className="text-[16px] lg:text-paragraph text-center lg:text-start leading-[177.778%]">Let’s face it; if you want to go to space, you might as well genuinely go to outer space   and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a  truly out of this world experience!</motion.div>
      </motion.div>
      <div 
      className="w-[450px] h-[450px] flex items-center justify-center lg:absolute lg:right-[5%]
      lg:bottom-[20%] ">
        <motion.div 
        initial={{scale: 0}}
        animate={{scale: 1}}
        whileHover={{width: 450, height: 450}}
        className="bg-white bg-opacity-25 rounded-full flex items-center justify-center cursor-pointer">
          <Link href={'/Destination'}
          className="bg-white z-10 text-[#0B0D17] font-bellefair text-[32px] uppercase font-normal tracking-[2px] flex items-center justify-center rounded-full w-[274px] h-[274px]">
            <p>
            explore
            </p>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
