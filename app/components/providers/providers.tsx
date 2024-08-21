"use client"
import { CartProvider } from "@/app/context/cart_context"

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <CartProvider>
            {children}
        </CartProvider>
    )
}

export default Providers