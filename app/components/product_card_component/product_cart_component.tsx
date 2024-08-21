import Link from "next/link";
import useCart from "@/app/hooks/use_cart";
import { ProductImageType, ProductType } from "@/app/types/types";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
    product: ProductType;
}

const ProductCardComponent = ({product}: Props) => {
    const {handleAddToCart} = useCart();
    const [selectdImage, setSelectedImage] = useState<ProductImageType | null>(product.images[0]);

    const handleSelectedImage = (img: ProductImageType) => {
        setSelectedImage(img)
    }

    const handleSelectedImageOnMouseLeave = () => {
        setSelectedImage(product.images[0])
    }

    useEffect(() => {
        setSelectedImage(product.images[0])
    }, [product])

    const handleAddToCartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();  // Prevents the click event from bubbling up to the <Link> component
        handleAddToCart(product);
    };

    return (
        <Link href={`/product/${product.id}`} className="bg-white rounded-xl overflow-hidden">
            <div className="h-44 relative">
                <Image
                    className="object-cover"
                    alt="product image"
                    src={selectdImage!.href}
                    fill
                />
            </div>
            <div className="">
                <div className="flex flex-wrap gap-2 p-2">
                    {product.images.map((image, index) => (
                        <div 
                            key={index} 
                            className="w-10 h-10 overflow-hidden rounded-md relative"
                            onMouseEnter={() => handleSelectedImage(image)}
                            onMouseLeave={handleSelectedImageOnMouseLeave}
                        >
                            <Image
                                className="object-cover"
                                alt="product image"
                                src={image.href}
                                fill
                            />
                        </div>
                    ))}
                </div>
                <div className="px-2">{product.name}</div>
                <div className="flex justify-between gap-2 ps-2">
                    <div className="border-t w-full pt-1 font-semibold">2000.00 MT</div>
                    <button 
                        type="button"
                        className="px-3.5 py-1 pb-1.5 text-2xl text-white bg-black bg-opacity-80"
                        onClick={handleAddToCartClick}
                    >+</button>
                </div>
            </div>
        </Link>
    );
}

export default ProductCardComponent;