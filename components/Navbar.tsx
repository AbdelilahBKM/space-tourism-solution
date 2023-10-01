"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar(){
    const pathname = usePathname()
    return (
        <main className="h-[96px] relative mt-[40px] ml-[50px] flex items-center justify-between z-20">
            <Image src={'/assets/shared/logo.svg'} width={48} height={48} alt="Logo" className="cursor-pointer"/>
            <div className="w-[32%] z-10 h-[1px] absolute bg-white top-[48px] left-[112px] bg-opacity-[0.25]"></div>
            <nav className="w-[64.5%] flex items-center justify-start gap-[4%] h-full bg-white bg-opacity-5 font-barlow-condensed pl-[8%] backdrop-blur-2xl font-normal text-primary">
                <Link href={'/'}  className={"flex gap-2 leading-normal tracking-[2.7px] h-full items-center relative after:absolute after:w-full after:bottom-0 after:bg-white after:bg-opacity-75 "  + 
                (pathname === '/' ? " after:h-1" : "hover:after:h-1 hover:after:opacity-50")}>
                    <span className="font-bold">00</span>
                    <p>HOME</p>
                </Link>
                <Link href={'/Destination'} className={"flex gap-2 leading-normal tracking-[2.7px] h-full items-center relative after:absolute after:w-full after:bottom-0 after:bg-white after:bg-opacity-75 " + 
                (pathname === '/Destination' ? " after:h-1" : "hover:after:h-1 hover:after:opacity-50")}>
                    <span className="font-bold">01</span>
                    <p>DESTINATION</p>
                </Link>
                <Link href={'/Crew'} className={"flex gap-2 leading-normal tracking-[2.7px] h-full items-center relative after:absolute after:w-full after:bottom-0 after:bg-white after:bg-opacity-75 " + 
                (pathname === '/Crew' ? " after:h-1" : "hover:after:h-1 hover:after:opacity-50")}>
                    <span className="font-bold">02</span>
                    <p>CREW</p>
                </Link>
                <Link href={'/Technology'} className={"flex gap-2 leading-normal tracking-[2.7px] h-full items-center relative after:absolute after:w-full after:bottom-0 after:bg-white after:bg-opacity-75 " + 
                (pathname === '/Technology' ? " after:h-1" : "hover:after:h-1 hover:after:opacity-50")}>
                    <span className="font-bold">03</span>
                    <p>TECHNOLOGY</p>
                </Link>
            </nav>
        </main>
    )
}