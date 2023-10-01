"use client"
import IDestination from "@/interface/globalInterface"
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
        <main className="h-[75%] w-full flex">
            <motion.div 
            initial={{x: -600}}
            animate={{x: 0}}
            className="absolute flex gap-7 top-[25%] left-[12%] text-[28px] font-barlow-condensed uppercase font-normal tracking-[6px]">
                <span className="font-bold opacity-25">01</span>
                <h1>Pick your destination</h1>
            </motion.div>
            <div className="w-[678px] h-full flex items-center gap-[50%]">
                {   destinations[currentPlanet] &&
                    <motion.div 
                    key={destinations[currentPlanet].name}
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    className="w-[445px] h-[445px] overflow-hidden">
                    <Image src={'/' + destinations[currentPlanet].images.webp} width={445} height={445} alt="moon"/>
                </motion.div>}
            </div>
            <div className="flex w-[445px] flex-col justify-center items-start text-white gap-[37px] overflow-hidden">
                <nav className="flex text-secondary font-barlow-condensed h-[34px] 
                gap-[35px]">
                    {destinations.map((dest, index) => (
                        <div onClick={() => setCurrentPlanet(index)}
                        className={"text-[16px] relative h-full w-fit font-normal tracking-[4px] uppercase after:absolute border-primary cursor-pointer hover:text-primary transition-colors"
                    + (currentPlanet === index && " border-b-[3px] text-primary")}
                         key={index}>{dest.name}</div>
                    ))}
                </nav>
                <PlanetDescription planet={destinations[currentPlanet]}/>
            </div>
        </main>
    )
}