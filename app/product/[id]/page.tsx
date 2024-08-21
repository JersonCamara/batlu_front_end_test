"use client"
import ShoppingBagIcon from "@/app/components/icons/shopping_bag_icon";
import { productsDB } from "@/app/db/products_db";
import useCart from "@/app/hooks/use_cart";
import { ProductImageType } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
    params: {
        id: string;
    }
}

const ProductDescriptionPage = ({params}: Props) => {
    const {handleAddToCart} = useCart();
    const product = productsDB.find(product => product.id === Number(params.id));
    
    if (!product) {
        return (
            <div className="text-center mt-36">
                <div className="text-9xl">404</div>
                <div>Product Not Found!</div>
                <div className="mt-8">
                    <Link className="border border-gray-300 rounded-lg hover:bg-gray-300 py-2 px-4" href={"/"}>Pagina inicial</Link>
                </div>
            </div>
        )
    }

    const [selectdImage, setSelectedImage] = useState<ProductImageType | undefined>(product.images[0]);

    const handleSelectedImage = (img: ProductImageType) => {
        setSelectedImage(img)
    }

    return (
        <div className="mx-4 mb-16">

            <div className="mt-4">
                <div className="text-sm">{product.category}</div>
                <div className="mt-2">Nike Court Visio Low</div>
                <div className="text-lg font-semibold mt-2">17100,00 MT</div>
            </div>

            <div className="mt-4">

                <div className="relative w-full h-96 rounded-xl overflow-hidden">
                    <Image
                        className="object-cover"
                        alt="image"
                        src={selectdImage!.href}
                        fill
                    />
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                    {product.images.map((image, index) => (
                        <div 
                            key={index} 
                            className="w-28 h-28 overflow-hidden rounded-md relative"
                            onClick={() => handleSelectedImage(image)}
                        >
                            <Image
                                className="object-cover"
                                alt="image"
                                src={image.href}
                                fill
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-8">

                    <div>
                        <div className="font-medium text-lg">{"Tamanho".toUpperCase()}</div>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <button className="bg-white rounded-lg border px-8 py-2">UK 7</button>
                            <button className="bg-white rounded-lg border px-8 py-2">UK 8</button>
                            <button className="bg-white rounded-lg border px-8 py-2">UK 9</button>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="font-medium text-lg">{"Descrição".toUpperCase()}</div>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <p>Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto.</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button 
                            className="flex items-center justify-center gap-4 bg-black text-white py-4 w-full rounded-lg"
                            onClick={() => handleAddToCart(product)}
                        >
                            <ShoppingBagIcon color="white" />
                            {"Adicionar ao carrinho".toUpperCase()}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default ProductDescriptionPage;