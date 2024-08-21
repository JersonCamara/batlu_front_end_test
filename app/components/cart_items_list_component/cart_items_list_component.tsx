"use client";
import useCart from "@/app/hooks/use_cart";
import CartItemComponent from "../cart_item_component/cart_item_component";

const CartItemsListComponent = () => {
    const {cart} = useCart();

    return (
        <div className="mt-8">
            {cart.map((product, index) => (
                <CartItemComponent key={index} product={product} index={index}  />
            ))}
        </div>
    );
}
 
export default CartItemsListComponent;