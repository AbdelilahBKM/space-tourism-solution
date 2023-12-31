import IDestination from "@/utils/globalInterface"
import Destinations from "@/components/Destination"

const url = process.env.API_URL

async function getDestinations() : Promise<IDestination[]> {
        const data = await fetch(url + 'destinations')
        if(!data.ok){
            throw new Error('fetch faild: ' + data.status)
        }
        return data.json()
}

export default async function DestinationsPage(){
    const destinations = await getDestinations()
    return(
        <main className="bg-destination-sm md:bg-destination-md lg:bg-destination-lg absolute w-full h-screen flex items-end justify-start top-0 bg-cover bg-center  text-primary px-[11.45%]">
            <Destinations destinations={destinations} />
        </main>
    )
}