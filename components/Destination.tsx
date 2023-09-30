import IDestination from "@/interface/globalInterface";

interface destinationsProps {
    destinations: IDestination[]
}
export default function Destinations({destinations} : destinationsProps){
    console.log(destinations[0])
    return (
        <main></main>
    )
}