import Image from "next/image";

const ProductCardComponent = () => {
    return (
        <div className="bg-white rounded-xl overflow-hidden">
            <div className="h-44 relative">
                <Image
                    className="object-cover"
                    alt="product image"
                    src={"/images/image_1.png"}
                    fill
                />
            </div>
            <div className="">
                <div className="flex flex-wrap gap-2 p-2">
                    <div className="w-10 h-10 overflow-hidden rounded-md relative">
                        <Image
                            className="object-cover"
                            alt="product image"
                            src={"/images/image_1.png"}
                            fill
                        />
                    </div>
                    <div className="w-10 h-10 overflow-hidden rounded-md relative">
                        <Image
                            className="object-cover"
                            alt="image"
                            src={"/images/image_1.png"}
                            fill
                        />
                    </div>
                </div>
                <div className="px-2">Nike Court Vision</div>
                <div className="flex justify-between gap-2 ps-2">
                    <div className="border-t w-full pt-1 font-semibold">2000.00 MT</div>
                    <button className="px-3.5 py-1 pb-1.5 text-2xl text-white bg-black bg-opacity-80">+</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCardComponent;