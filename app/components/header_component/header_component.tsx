import Image from "next/image";
import Logo from "@/public/assets/icon_logo.png";
import ShoppingBagIcon from "../icons/shopping_bag_icon";
import SearchLoupeIcon from "../icons/search_loupe_icon";

const HeaderComponent = () => {
    return (
        <div className="bg-white flex justify-between items-center px-4 py-4">
            <div><Image alt="Logo" src={Logo} height={20} /></div>
            <div className="flex gap-4 items-center">
                <div>
                    <SearchLoupeIcon />
                </div>
                <div>
                    <ShoppingBagIcon />
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;