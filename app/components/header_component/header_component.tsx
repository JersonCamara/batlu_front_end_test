"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/icon_logo.png";
import ShoppingBagIcon from "../icons/shopping_bag_icon";
import SearchLoupeIcon from "../icons/search_loupe_icon";
import IconButtonComponent from "../icon_button_component/icon_button_component";
import useCart from "@/app/hooks/use_cart";

const HeaderComponent = () => {
    const { cart } = useCart()
    return (
        <div className="bg-white  px-4 py-3 md:py-4 ">
            <div className="mx-auto flex justify-between items-center max-w-[1119px]">
                <div>
                    <Link href={"/"}>
                        <Image className="md:hidden" alt="Logo" src={Logo} height={20} />
                        <Image className="hidden md:block" alt="Logo" src={Logo} height={32} />
                    </Link>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="md:relative">
                        <input 
                            type="text" 
                            className="hidden md:block bg-[#F3F5F6] text-sm py-2.5 px-4 pr-9 w-96 rounded-md"
                            placeholder="Procurando por algo específico?"
                        />
                        <div className="md:absolute md:right-0 md:bottom-0 md:p-2.5"><SearchLoupeIcon /></div>
                    </div>
                    <IconButtonComponent icon={<ShoppingBagIcon />} count={cart.length} />
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;