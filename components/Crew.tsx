"use client"
import ICrew from "@/interface/globalInterface"
import {motion} from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface CrewProps{
    crew: ICrew[]
}

export default function CrewInfo({crew} : CrewProps){
    const [currentCrew, setCurrentCrew] = useState(0)
    

    useEffect(() => {
        const incrementCrew = () => {
        setCurrentCrew((prevCrew) => (prevCrew + 1) % crew.length);
        };
        const interval = setInterval(incrementCrew, 5000);
        return () => clearInterval(interval);
    }, [crew]);
    
    const handleCrewSelect = (index: number) => {

    }
    return(
        <main className="h-[75%] w-full justify-between flex flex-row-reverse text-primary">
            <motion.div 
            initial={{x: -600}}
            animate={{x: 0}}
            className="absolute flex gap-7 top-[20%] left-[12%] text-[28px] font-barlow-condensed uppercase font-normal tracking-[6px]">
                <span className="font-bold opacity-25">02</span>
                <h1>Meet your Crew</h1>
            </motion.div>

            <motion.div 
            key={crew[currentCrew].name}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className=" h-full w-|[615] flex justify-center items-end">
                <Image src={'/' + crew[currentCrew].images.webp} width={514} height={700} alt={crew[currentCrew].name} className="w-full h-full"/>
            </motion.div>

            <div className="flex flex-col justify-start h-full relative py-[106px]">
                <div className="flex flex-col overflow-hidden">
                    <div 
                    className="text-primary font-bellefair text-[32px] font-normal uppercase opacity-50"
                    >{crew[currentCrew].role} </div>
                    <motion.div 
                    key={crew[currentCrew].name}
                    initial={{y: -50}}
                    animate={{y: 0}}
                    className="text-primary font-bellefair text-[56px] font-normal uppercase overflow-hidden"
                    >{crew[currentCrew].name} </motion.div>
                </div>
                <div className="w-[444px] text-secondary text-paragraph font-normal leading-8 mt-[27px]"
                >{crew[currentCrew].bio}</div>
                <nav className="h-[15px] flex gap-8 absolute left-0 bottom-[94px]">
                    {crew.map((_, index) => (
                        <div 
                        key={index}
                        onClick={() => setCurrentCrew(index)}
                        className={" bg-white w-[15px] h-full rounded-full bg-opacity-25 cursor-pointer hover:bg-opacity-50 hover:duration-150 transition-all " + 
                        (index === currentCrew && " bg-opacity-100")}
                        ></div>
                    ))}
                </nav>
            </div>

        </main>
    )
}