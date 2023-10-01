import ITechnology from "@/interface/globalInterface"

const url = process.env.API_URL

async function getTechnology() : Promise<ITechnology[]> {
    const data = await fetch(url + 'technology')
    if(!data.ok){
        throw new Error('fetch failed: ' + data.status)
    }
    return await data.json()
}

export default async function Crew(){
    const technology  = await getTechnology()
    console.log(technology)
    return(
        <main className="bg-technology-sm md:bg-technology-md lg:bg-technology-lg bg-cover bg-center h-screen w-full absolute top-0 flex items-center pl-[11.45%]">

        </main>
    )
}