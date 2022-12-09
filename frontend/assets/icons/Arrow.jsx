export const Arrow = ({ color, width, className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || "13"}
            height={width || "14"}
            fill="none"
            viewBox="0 0 13 14"
            className={className}
        >
            <g
                stroke={color || "#000"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                clipPath="url(#clip0_344_784)"
            >
                <path d="M.958 6.904h11.084M6.5 1.122l5.542 5.782L6.5 12.687"></path>
            </g>
            <defs>
                <clipPath id="clip0_344_784">
                    <path fill="#fff" d="M0 0H13V14H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
};
