import { useContext, useState } from "react";
import { CartContext } from "../context/cart_context";
import { ProductType } from "../types/types";
import { productsDB } from "../db/products_db";

const useCart = () => {
	const context = useContext(CartContext);
	if (!context) throw new Error("useCart must be used within a CartContextProvider");

    const {cart, setCart, products, setProducts} = context;
    const [activeFilter, setActiveFilter] = useState("");
    

    // function getProdutobyId(id: number): ProductType | undefined {
    //     return products.find(product => product.id === id);
    // }

    const handleAddToCart = (product: ProductType) => {
        setCart([...cart, product]);
    } 

    const handleRemoveFromCart = (index: number) => {
        const newItems = cart.filter((_, itemIndex) => itemIndex !== index);
        setCart(newItems);
    } 

    function filterByCategory(category: string) {
        setActiveFilter(category);
        if (category) {
            setProducts(productsDB.filter(product => product.category.toLowerCase() === category.toLowerCase()));
        } else {
            setProducts(productsDB);
        }
    }

	return {
        cart,
        products,
        handleAddToCart,
        handleRemoveFromCart,
        filterByCategory,
        activeFilter,
        // getProdutobyId,
    };
};

export default useCart;