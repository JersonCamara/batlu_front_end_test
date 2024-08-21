import DropdownButtonComponent from "./components/dropdown_button_component/dropdown_button_component";
import ProductListComponent from "./components/product_list_component/product_list_component";
import TabComponent from "./components/tabs_component/tabs_component";

export default function Home() {
    return (
        <div>

            <div className="mt-4">
                {/* select filter */}
                <div className="flex justify-end items-center mx-4">
                    <DropdownButtonComponent />
                </div>

                {/* page tabs */}
                <div className="mt-4 text-center border-b border-[#D9D9D9] text-sm">
                    <TabComponent />
                </div>
            </div>

            {/* product cards */}
            <ProductListComponent />

        </div>
    );
}
