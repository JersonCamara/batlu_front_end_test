import BackButtonComponent from "../components/back_button_component/back_button_component";
import CartItemsListComponent from "../components/cart_items_list_component/cart_items_list_component";

const CartPage = () => {
    return (
        <div className="mx-4 mb-8 max-w-[1119px] lg:mx-auto">

            <div className="mt-4">
                <BackButtonComponent />
            </div>

            <div className="lg:grid lg:gap-8 lg:grid-cols-[auto_400px]">

                <div className="bg-white mt-4 px-2 py-4 rounded-lg myitem1">
                    <div className="font-semibold text-lg">{"Resumo do pedido".toUpperCase()}</div>
                    <div className="mt-4">
                        <div className="flex justify-between items-center mt-2">
                            <div>Subtotal de produtos</div>
                            <div>MT 33.900,00</div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <div>Entrega</div>
                            <div>MT 0,00</div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-8">
                        <div className="font-semibold">Total</div>
                        <div className="font-semibold">MT 33.900,00</div>
                    </div>
                    <div className="mt-8">
                        <button className="flex items-center justify-center gap-4 bg-black text-white py-4 w-full rounded-lg font-semibold">
                            {"Finalizar a compra".toUpperCase()}
                        </button>
                    </div>
                </div>

                <div className="myitem1">
                    <div className="hidden lg:block">{"MEU carrinho".toUpperCase()}</div>
                    <CartItemsListComponent />
                </div>

            </div>

        </div>
    );
}

export default CartPage;