"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <main className="absolute w-full h-screen bg-slate-600 top-0 flex items-center justify-between bg-home-sm md:bg-home-md lg:bg-home-lg bg-cover bg-center text-primary px-[11.45%]">
      <motion.div className="flex flex-col gap-6 text-secondary w-[450px]">
        <motion.div 
        initial={{x: -675}}
        animate={{x: 0}}
        transition={{delay: .1}}
        className="text-[28px] font-barlow-condensed tracking-[4.72px] uppercase font-normal">
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
        className="text-paragraph leading-[177.778%]">Let’s face it; if you want to go to space, you might as well genuinely go to outer space   and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a  truly out of this world experience!</motion.div>
      </motion.div>
      <motion.div 
      className="w-[450px] h-[428px] flex items-end justify-center">
        <motion.div 
        whileHover={{scale: 1.2}}
        initial={{scale: 0}}
        animate={{scale: 1}}
        className="bg-white w-[274px] h-[274px] rounded-full flex items-center justify-center cursor-pointer">
          <Link href={'/Destination'}
          className="text-[#0B0D17] font-bellefair text-[32px] uppercase font-normal tracking-[2px] w-full text-center">
            <motion.p
            whileHover={{scale: 1.2}}
             transition={{delay:  .1}}>
            explore
            </motion.p>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}
