import Image from "next/image";
import ShoppingBagIcon from "../components/icons/shopping_bag_icon";

const PruductPage = () => {
    return (
        <div className="mx-4 mb-16">

            <div className="mt-4">
                <div className="text-sm">Sapatilha</div>
                <div className="mt-2">Nike Court Visio Low</div>
                <div className="text-lg font-semibold mt-2">17100,00 MT</div>
            </div>

            <div className="mt-4">

                <div className="relative w-full h-96">
                    <Image
                        className="object-cover"
                        alt="image"
                        src={"/images/image_1.png"}
                        fill
                    />
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                    <div className="w-28 h-28 overflow-hidden rounded-md relative">
                        <Image
                            className="object-cover"
                            alt="image"
                            src={"/images/image_1.png"}
                            fill
                        />
                    </div>
                    <div className="w-28 h-28 overflow-hidden rounded-md relative">
                        <Image
                            className="object-cover"
                            alt="image"
                            src={"/images/image_1.png"}
                            fill
                        />
                    </div>
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
                        <button className="flex items-center justify-center gap-4 bg-black text-white py-4 w-full rounded-xl">
                            <ShoppingBagIcon color="white" />
                            {"Adicionar ao carrinho".toUpperCase()}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PruductPage;