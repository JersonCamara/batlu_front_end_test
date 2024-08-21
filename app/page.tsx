import DropdownButtonComponent from "./components/dropdown_button_component/dropdown_button_component";
import ArrowIcon from "./components/icons/arrow_icon";
import ProductListComponent from "./components/product_list_component/product_list_component";
import TabComponent from "./components/tabs_component/tabs_component";

export default function Home() {
    return (
        <div className="max-w-[1119px] mx-auto">

            <div className="mt-4 lg:flex lg:flex-row-reverse lg:justify-between lg:items-start">
                {/* select filter */}
                <div className="grid justify-end items-center mx-4 lg:mt-6">
                    <DropdownButtonComponent />
                    <div className="hidden lg:flex mt-4">
                        {/* map 5 elements */}
                        {[1,2,3,4,5].map((item) => (
                            <div key={item} className="bg-[#E9E9F0] rounded-md mx-1 w-8 h-8 flex items-center justify-center">{item}</div>
                        ))}
                        <div className="bg-[#E9E9F0] rounded-md mx-1 w-8 h-8 flex items-center justify-center rotate-90"><ArrowIcon /></div>
                        <div className="bg-[#E9E9F0] rounded-md mx-1 w-8 h-8 flex items-center justify-center -rotate-90"><ArrowIcon /></div>
                    </div>
                </div>

                {/* page tabs */}
                <div className="mt-4 text-center border-b border-[#D9D9D9] lg:border-0 text-sm">
                    <TabComponent />
                </div>
            </div>

            {/* product cards */}
            <ProductListComponent />

            <div className="hidden mt-6 mb-12 lg:flex justify-end">
                <div className="hidden lg:flex mt-4">
                        {/* map 5 elements */}
                        {[1,2,3,4,5].map((item) => (
                            <div key={item} className="bg-[#E9E9F0] rounded-md mx-1 w-8 h-8 flex items-center justify-center">{item}</div>
                        ))}
                        <div className="bg-[#E9E9F0] rounded-md mx-1 w-8 h-8 flex items-center justify-center rotate-90"><ArrowIcon /></div>
                        <div className="bg-[#E9E9F0] rounded-md mx-1 w-8 h-8 flex items-center justify-center -rotate-90"><ArrowIcon /></div>
                    </div>
            </div>

        </div>
    );
}
