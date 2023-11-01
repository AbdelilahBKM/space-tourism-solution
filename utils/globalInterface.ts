export default interface IDestination {
    name: string,
    images: {
        png: string,
        webp: string
    },
    description: string,
    distance: string,
    travel: string
}

export default interface ICrew {
    name: string,
    images: {
        png: string,
        webp: string
    },
    role: string,
    bio: string
}
