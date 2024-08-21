type Props = {
    color?: string;
}

const ShoppingBagIcon = ({color = "#737380"}: Props) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M3.3335 5.83325V4.16659C3.3335 3.70635 3.70659 3.33325 4.16683 3.33325H15.8335C16.2937 3.33325 16.6668 3.70635 16.6668 4.16659V5.83325" 
                stroke={color}
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
            />
            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M16.6667 5.83325H3.33333C2.8731 5.83325 2.5 6.20635 2.5 6.66659V15.8333C2.5 16.7537 3.24619 17.4999 4.16667 17.4999H15.8333C16.7538 17.4999 17.5 16.7537 17.5 15.8333V6.66659C17.5 6.20635 17.1269 5.83325 16.6667 5.83325Z" 
                stroke={color}
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
            />
            <path 
                d="M13.3332 9.16675C13.3332 11.0077 11.8408 12.5001 9.99984 12.5001C8.15889 12.5001 6.6665 11.0077 6.6665 9.16675" 
                stroke={color} 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
            />
        </svg>
    );
}

export default ShoppingBagIcon;