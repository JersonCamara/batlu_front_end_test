type Props = {
    color?: string;
}

const SearchLoupeIcon = ({color = "#737380"}: Props) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle 
                cx="9.21552" 
                cy="9.21552" 
                r="5.88495" 
                stroke={color} 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
            />
            <path 
                d="M16.669 16.6695L13.376 13.3765" 
                stroke={color} 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
            />
        </svg>
    );
}

export default SearchLoupeIcon;