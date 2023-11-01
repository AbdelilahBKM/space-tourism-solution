import TechnoInfo from "@/components/technology"

const url = process.env.API_URL
export interface ITech {
    name: string,
    images: {
        portrait: string,
        landscape: string
    },
    description: string
}

async function getTechnology() : Promise<ITech[]> {
    const data = await fetch(url + 'technology')
    if(!data.ok){
        throw new Error('fetch failed: ' + data.status)
    }
    return data.json()
}

export default async function Crew(){
    const technology  = await getTechnology()
    console.log()
    return(
        <main className="bg-technology-sm md:bg-technology-md lg:bg-technology-lg bg-cover bg-center h-screen w-full absolute top-0 flex items-center lg:items-end lg:pl-[11.45%]">
            <TechnoInfo technology={technology} />
        </main>
    )
}