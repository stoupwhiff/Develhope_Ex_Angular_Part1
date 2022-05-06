export interface location {
    address: string,
    city?: string,
    cap?: string
}

export interface orders {
    id: string,
    date: string,
    product: product,
    quantity: number
}

export interface product {
    name: string,
    price: number
}

export interface User {
    id: string,
    name: string,
    surname?: string,
    mail: string,
    imageUrl?: string,
    location: location,
    orders: orders[]
}
