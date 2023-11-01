"use client"
import ICrew from '@/utils/globalInterface'
import {motion} from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"


interface CrewProps{
    crew: ICrew[]
}

export default function CrewInfo({crew} : CrewProps){
    const [currentCrew, setCurrentCrew] = useState(0)
    

    useEffect(() => {
        const incrementCrew = () => {
        setCurrentCrew((prevCrew) => (prevCrew + 1) % crew.length)
        }
        const interval = setInterval(incrementCrew, 5000)
        return () => clearInterval(interval);
    }, [crew])
    return(
        <main className="h-full lg:h-[75%] w-full justify-between flex flex-col-reverse lg:flex-row-reverse text-primary">
            <motion.div 
            initial={{x: -600}}
            animate={{x: 0}}
            className="absolute flex gap-7 top-[12%] left-[50px] lg:top-[20%] lg:left-[12%] text-[20px] lg:text-[28px] font-barlow-condensed uppercase font-normal tracking-[3.375px] lg:tracking-[6px]">
                <span className="font-bold opacity-25">02</span>
                <h1>Meet your Crew</h1>
            </motion.div>

            <motion.div 
            key={crew[currentCrew].name}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className=" h-full w-[615] flex justify-center items-end">
                {/* large screen */}
                <Image src={crew[currentCrew].images.webp} width={514} height={700} alt={crew[currentCrew].name} className="w-full h-full hidden lg:flex"/>
                {/* medium screen */}
                <Image src={crew[currentCrew].images.png} width={456} height={700} alt={crew[currentCrew].name} className="w-[456.372px] h-auto hidden md:flex lg:hidden"/>
            </motion.div>

            <div className="flex flex-col items-center lg:justify-start h-full relative md:mt-[200px] lg:mt-auto lg:py-[106px]">
                <div className="flex flex-col items-center overflow-hidden">
                    <div 
                    className="text-primary font-bellefair text-[24px] lg:text-[32px] font-normal uppercase opacity-50 w-fit"
                    >{crew[currentCrew].role}</div>
                    <motion.div 
                    key={crew[currentCrew].name}
                    initial={{y: -50}}
                    animate={{y: 0}}
                    className="text-primary font-bellefair text-[40px] lg:text-[56px] font-normal uppercase overflow-hidden w-fit"
                    >{crew[currentCrew].name}</motion.div>
                </div>
                <div className="w-full flex justify-center lg:w-[444px] text-secondary text-[16px] lg:text-paragraph font-normal leading-7 lg:leading-8 lg:mt-[27px] text-center lg:text-start"
                >
                    <div className="w-[458px] lg:w-full">
                        {crew[currentCrew].bio}
                    </div>
                </div>
                <nav className="h-[10px] lg:h-[15px] w-full flex justify-center lg:justify-start relative mt-10 lg:absolute lg:left-0 lg:bottom-[94px]">
                    <div className="flex gap-4 lg:gap-8">
                        {crew.map((_, index) => (
                            <div 
                            key={index}
                            onClick={() => setCurrentCrew(index)}
                            className={" bg-white w-[10px] lg:w-[15px] h-full rounded-full cursor-pointer " + 
                            (index === currentCrew ? " bg-opacity-100"  : " bg-opacity-25 hover:bg-opacity-50 hover:duration-150 transition-all")}
                            ></div>
                        ))}
                    </div>
                </nav>
            </div>

        </main>
    )
}