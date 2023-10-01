import CrewInfo from "@/components/Crew"
import ICrew from "@/interface/globalInterface"

const url = process.env.API_URL

async function getCrew() : Promise<ICrew[]> {
    const data = await fetch(url + 'crew')
    if(!data.ok){
        throw new Error('fetch failed: ' + data.status)
    }
    return await data.json()
}

export default async function Crew(){
    const crew  = await getCrew()
    console.log(crew)
    return(
        <main className="bg-crew-sm md:bg-crew-md lg:bg-crew-lg bg-cover bg-center h-screen w-full absolute flex items-end px-[11.45%] top-0">
            <CrewInfo crew={crew}/>
        </main>
    )
}