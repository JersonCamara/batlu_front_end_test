"use client"
import ProductCardComponent from "../product_card_component/product_cart_component";
import useCart from "@/app/hooks/use_cart";

const ProductListComponent = () => {
    const {products} = useCart();

    return (
        <div className="mt-8 mx-4 grid grid-cols-2 gap-4 mb-16">
            {products.map((product, index) => (
                <ProductCardComponent 
                    key={index}
                    product={product} 
                />
            ))}
        </div>
    );
}
 
export default ProductListComponent;