"use client"
import useCart from "@/app/hooks/use_cart";

const TabComponent = () => {
    const {activeFilter, filterByCategory} = useCart();

    return (
        <div className="mx-4 grid grid-cols-3 gap-4">
            <div 
                className="hover:bg-gray-300 rounded-t-md"
                onClick={() => filterByCategory("")}
            >
                <div className="font-semibold px-2 py-3">Todos</div>
                <div className={`${!activeFilter ? "bg-black" : "" } h-1 rounded-ss-full rounded-se-full`}></div>
            </div>
            <div 
                className=" hover:bg-gray-300 rounded-t-md"
                onClick={() => filterByCategory("camisetas")}
            >
                <div className="font-semibold px-2 py-3">Camisetas</div>
                <div className={`${activeFilter == "camisetas" ? "bg-black" : "" } h-1 rounded-ss-full rounded-se-full`}></div>
            </div>
            <div 
                className=" hover:bg-gray-300 rounded-t-md" 
                onClick={() => filterByCategory("sapatilhas")}
            >
                <div className="font-semibold px-2 py-3">Sapatilhas</div>
                <div className={`${activeFilter == "sapatilhas" ? "bg-black" : "" } h-1 rounded-ss-full rounded-se-full`}></div>
            </div>
        </div>
    );
};

export default TabComponent;
