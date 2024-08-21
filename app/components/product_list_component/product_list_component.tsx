"use client"
import ProductCardComponent from "../product_card_component/product_card_component";
import useCart from "@/app/hooks/use_cart";

const ProductListComponent = () => {
    const {products} = useCart();

    return (
        <div className="mt-8 mx-4 lg:mx-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16 lg:mb-0">
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