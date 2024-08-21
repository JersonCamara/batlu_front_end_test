export type ProductType = {
    id: number;
    name: string;
    category: string;
    price: number;
    unit: number;
    description: string;
    sizes: ProductSizeType[]
    images: ProductImageType[]
}

type ProductSizeType = {
    id: string,
    name: string,
}

export type ProductImageType = {
    id: string,
    href: string,
}