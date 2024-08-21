"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/icon_logo.png";
import ShoppingBagIcon from "../icons/shopping_bag_icon";
import SearchLoupeIcon from "../icons/search_loupe_icon";
import IconButtonComponent from "../icon_button_component/icon_button_component";
import useCart from "@/app/hooks/use_cart";

const HeaderComponent = () => {
    const {cart} = useCart()
    return (
        <div className="bg-white flex justify-between items-center px-4 py-4">
            <div>
                <Link href={"/"}>
                    <Image alt="Logo" src={Logo} height={20} />
                </Link>
            </div>
            <div className="flex gap-4 items-center">
                <div>
                    <SearchLoupeIcon />
                </div>
                <IconButtonComponent icon={<ShoppingBagIcon />} count={cart.length} />
            </div>
        </div>
    );
}

export default HeaderComponent;