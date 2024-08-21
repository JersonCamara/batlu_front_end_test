"use client"
import { createContext, useState } from "react";
import { ProductType } from "../types/types";
import { productsDB } from "../db/products_db";

type Props = {
	cart: ProductType[] | [];
	products: ProductType[] | [];
    setCart: React.Dispatch<React.SetStateAction<ProductType[]>>;
    setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

// create context
export const CartContext = createContext<Props | undefined>(undefined);

export const CartProvider = ({children}: {children: React.ReactNode}) => {
    const [cart, setCart] = useState<ProductType[]>([productsDB[0], productsDB[5]]);
	const [products, setProducts] = useState(productsDB);

    const props = {
		cart, 
        setCart,
		products,
		setProducts
	};

    return (
		<CartContext.Provider value={props}>
			{children}
		</CartContext.Provider>
	);
}