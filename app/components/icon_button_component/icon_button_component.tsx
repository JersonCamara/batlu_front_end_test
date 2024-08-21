import Link from "next/link";

type Props = {
    icon: JSX.Element;
    count: number
}

const IconButtonComponent = ({icon, count}: Props) => {
    
    return (
        <Link 
            href={"/cart"}
            type="button"
            className="p-2 rounded-full hover:bg-gray-100 relative"
        >
            {icon}
            {count > 0 && <div className="absolute bottom-0 left-5 bg-[#DE3838] flex items-center justify-center text-sm text-white px-1.5 h-4 rounded-full">{count}</div>}
        </Link>
    );
}

export default IconButtonComponent;