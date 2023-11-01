"use client"
import IDestination from "@/utils/globalInterface"
import  {motion} from "framer-motion"
import Image from "next/image"
import PlanetDescription from "./PlanetDescription"
import { useState } from "react"


interface destinationsProps {
    destinations: IDestination[]
}
export default function Destinations(
    {
        destinations
    } 
    : destinationsProps
    ){
    const [currentPlanet, setCurrentPlanet] = useState(0)
    return (
        <main className="h-full lg:h-[75%] w-full flex flex-col md:items-center lg:flex-row md:justify-end md:py-[63px] lg:py-0">
            <motion.div 
            initial={{x: -600}}
            animate={{x: 0}}
            className="absolute flex gap-7 top-[12%] left-[50px] lg:top-[20%] lg:left-[12%] text-[20px] lg:text-[28px] font-barlow-condensed uppercase font-normal tracking-[3.375px] lg:tracking-[6px]">
                <span className="font-bold opacity-25">01</span>
                <h1>Pick your destination</h1>
            </motion.div>
            <div className="w-[457px] lg:w-[678px] lg:h-full flex items-center">
                <motion.div 
                    key={destinations[currentPlanet].name}
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    className="w-[445px] h-[445px] md:flex md:items-center md:justify-center">
                    <Image src={destinations[currentPlanet].images.webp} 
                    width={445} height={445} alt="moon"
                    className="hidden lg:flex w-[445px] h-[445px]"
                    />
                    <Image src={destinations[currentPlanet].images.png} 
                    width={445} height={445} alt="moon"
                    className="flex lg:hidden w-[333.75px] h-[333.75px]"
                    />
                </motion.div>
            </div>
            <div className="flex w-[573px] lg:w-[445px] flex-col justify-center items-center lg:items-start text-white gap-[32px] lg:gap-[37px] overflow-hidden">
                <nav className="flex text-secondary font-barlow-condensed h-[34px] 
                gap-[35px]">
                    {destinations.map((dest, index) => (
                        <div onClick={() => setCurrentPlanet(index)}
                        className={"text-[16px] relative h-full w-fit font-normal tracking-[4px] uppercase border-primary cursor-pointer "
                    + (currentPlanet === index ? " border-b-[3px] text-primary" : " hover:border-b-[3px] hover:border-opacity-50")}
                         key={index}>{dest.name}</div>
                    ))}
                </nav>
                <PlanetDescription planet={destinations[currentPlanet]}/>
            </div>
        </main>
    )
}