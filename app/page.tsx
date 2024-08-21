// import Image from "next/image";
import ProductCardComponent from "./components/product_card_component/product_cart_component";

export default function Home() {
    return (
        <div>

            <div className="mt-4">
                {/* select filter */}
                <div className="flex justify-end items-center mx-4">
                    <select name="" id="" className="border border-[#D9D9D9] rounded-full px-5 py-2 text-sm">
                        <option value="">Ordenar por</option>
                    </select>
                </div>

                {/* page tabs */}
                <div className="mt-4 text-center border-b border-[#D9D9D9] text-sm">
                    <div className="mx-4 grid grid-cols-3 gap-4">
                        <div>
                            <div className="font-semibold px-2 py-2 border-b-4">Todos</div>
                            <div className="h-1 bg-black rounded-ss-full rounded-se-full"></div>
                        </div>
                        <div>
                            <div className="font-semibold px-2 py-2 border-b-4">Camisetas</div>
                            <div className="h-1 bg-black rounded-ss-full rounded-se-full"></div>
                        </div>
                        <div>
                            <div className="font-semibold px-2 py-2 border-b-4">Sapatilhas</div>
                            <div className="h-1 bg-black rounded-ss-full rounded-se-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* product cards */}
            <div className="mt-8 mx-4 grid grid-cols-2 gap-4 mb-16">
                <ProductCardComponent />
                <ProductCardComponent />
                <ProductCardComponent />
                <ProductCardComponent />
                <ProductCardComponent />
                <ProductCardComponent />
            </div>

        </div>
    );
}
