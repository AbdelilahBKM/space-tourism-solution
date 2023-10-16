"use client"
import { ITech } from "@/app/Technology/page"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

interface TechnologyProps {
    technology: ITech[]
}

export default function TechnoInfo({technology} : TechnologyProps){
    const [currentTech, setCurrentTech] = useState(0)

    return(
        <main className="lg:h-[75%] w-full justify-between flex flex-col-reverse lg:flex-row text-primary">
            <motion.div 
            initial={{x: -600}}
            animate={{x: 0}}
            className="absolute flex gap-7 top-[10%] left-[50px] lg:top-[20%] lg:left-[12%] text-[20px] lg:text-[28px] font-barlow-condensed uppercase font-normal tracking-[3.375px] lg:tracking-[6px]">
                <span className="font-bold opacity-25">03</span>
                <h1>Space Launch 101</h1>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center gap-[44px] lg:gap-[80px] w-full">
                <nav className="flex flex-row lg:flex-col lg:h-[470px] items-start gap-[53px]">
                    {technology.map((_, index) => (
                        <div  
                        onClick={() => setCurrentTech(index)}
                        className={"w-[80px] h-[80px] border-white border rounded-full flex items-center justify-center font-bellefair text-[32px] text-center font-normal cursor-pointer border-opacity-25 " + (currentTech === index ? " bg-white text-[#0B0D17]" : " hover:border-opacity-100 transition-colors")}
                        >{index + 1}</div>
                    ))}
                </nav>
                <div className="w-[458px]  lg:h-[470px] flex flex-col items-center lg:items-start">
                    <div 
                    className="text-secondary text-base font-barlow-condensed font-normal tracking-[2.7px]"
                    >THE TERMINOLOGY…</div>
                    <motion.div
                    key={technology[currentTech].name}
                    initial={{y: -50}}
                    animate={{y: 0}}
                    className="text-primary font-bellefair text-[40px] lg:text-[56px] font-normal leading-normal uppercase overflow-hidden"
                    >{technology[currentTech].name}</motion.div>
                    <div
                    className="text-secondary text-base lg:text-paragraph mt-[14px] font-normal leading-[32px] text-center lg:text-start"
                    >{technology[currentTech].description}</div>
                </div>
            </div>
            <motion.div
            key={technology[currentTech].name}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
             className="w-full lg:w-[552px] flex items-start justify-end py-10">
                    <Image src={'/'+ technology[currentTech].images.portrait} width={515} height={527} alt={technology[currentTech].name} className="hidden lg:block w-[675px] h-[527px]" />
                    <Image src={'/'+ technology[currentTech].images.landscape} width={515} height={527} alt={technology[currentTech].name} className="block lg:hidden w-full mt-[112px]" />
            </motion.div>
        </main>
    )
}