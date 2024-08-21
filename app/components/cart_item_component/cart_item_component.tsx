import Image from "next/image";
import TrashIcon from "../icons/trash_icon";
import ArrowIcon from "../icons/arrow_icon";
import { ProductImageType, ProductType } from "@/app/types/types";
import { useEffect, useState } from "react";
import useCart from "@/app/hooks/use_cart";

type Props = {
    product: ProductType;
    index: number;
}

const CartItemComponent = ({product, index}: Props) => {
    const {handleRemoveFromCart} = useCart();
    const [selectdImage, setSelectedImage] = useState<ProductImageType | null>(product.images[0]);

    useEffect(() => {
        setSelectedImage(product.images[0])
    }, [product])

    return (
        <div className="bg-white mt-4 rounded-lg flex overflow-hidden">
            <div className="relative h-32 w-36">
                <Image
                    className="object-cover"
                    alt="image"
                    src={selectdImage!.href}
                    fill
                />
            </div>
            <div className="px-2 py-2 w-full grid">
                <div className="flex items-center justify-between">
                    <div className="font-light">{product.name}</div>
                    <button 
                        className="p-2 rounded-full hover:bg-gray-100"
                        onClick={() => handleRemoveFromCart(index)}
                    >
                        <TrashIcon color="#DE3838" />
                    </button>
                </div>
                <p className="text-xs">Aqui vem um texto descritivo do produto</p>
                <div className="flex justify-between items-end">
                    <div>
                        <button
                            type="button" 
                            className="border border-[#D9D9D9] ps-3 pe-1 py-1 rounded-md flex items-center justify-between gap-2"
                        >1 <ArrowIcon /></button>
                    </div>
                    <div className="font-semibold">MT 17.100,00</div>
                </div>
            </div>
        </div>
    );
}
 
export default CartItemComponent;