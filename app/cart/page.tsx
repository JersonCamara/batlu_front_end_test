import CartItemsListComponent from "../components/cart_items_list_component/cart_items_list_component";
import BackIcon from "../components/icons/back_icon";

const CartPage = () => {
    return (
        <div className="mx-4 mb-8">

            <div className="mt-4">
                <button
                    type="button"
                    className="flex gap-2 py-2"
                >
                    <BackIcon />
                    Voltar
                </button>
            </div>

            <div className="bg-white mt-4 px-2 py-4 rounded-lg">
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

            <CartItemsListComponent />
            
        </div>
    );
}
 
export default CartPage;