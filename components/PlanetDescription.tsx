"use client"
import IDestination from "@/interface/globalInterface";
import {AnimatePresence, motion} from "framer-motion"
interface PlanetProps {
    planet: IDestination
}
export default function PlanetDescription ({planet}: PlanetProps) {
    return (
      <main className="overflow-hidden">
        <AnimatePresence>
          {planet && (
            <>
            <motion.div
              key={planet.name} // Use a unique key for each planet
              initial={{ y: -375 }}
              animate={{ y: 0 }}
              exit={{ y: -375 }} // Exit animation when a new planet is selected
              transition={{ delay: 0.02 }}
              className="text-primary font-bellefair text-[100px] font-normal uppercase h-[115px] w-fit py-0"
              >
              {planet.name}
            </motion.div>
            <motion.div 
            className="text-secondary text-[18px] leading-8 mt-2">
                {planet.description}
            </motion.div>
            <div className="w-full h-[1px] bg-[#383B4B] mt-[75px] "></div>
            <div className="flex items-center gap-[79px] w-full text-secondary mt-[28px]">
                <div className="flex flex-col gap-3">
                    <p className="font-barlow-condensed text-[14px] uppercase   leading-normal tracking-[2.5px]"
                    >AVG. DISTANCE</p>
                    <motion.p 
                    key={planet.name} // Use a unique key for each planet
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    exit={{ y: -50 }} // Exit animation when a new planet is selected
                    className="text-primary text-[28px] font-bellefair font-normal uppercase overflow-hidden"
                    >{planet.distance}</motion.p>
                </div>
                <div className="flex flex-col gap-3 overflow-hidden">
                    <p className="font-barlow-condensed text-[14px] uppercase   leading-normal tracking-[2.5px]"
                    >Est. travel time</p>
                    <motion.p 
                    key={planet.name} // Use a unique key for each planet
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    exit={{ y: -50 }} // Exit animation when a new planet is selected
                    className="text-primary text-[28px] font-bellefair   font-normal uppercase overflow-hidden"
                    >{planet.travel}</motion.p>
                </div>
            </div>
            </>
          )}
        </AnimatePresence>
      </main>
    );
  }