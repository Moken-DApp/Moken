export const Close = ({ color, width, className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || "16"}
            height={width || "16"}
            fill="none"
            viewBox="0 0 14 14"
            className={className}
        >
            <g
                stroke={color || "#000"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                clipPath="url(#clip0_344_746)"
            >
                <path d="M12.39 1.31l-11 11M1.39 1.31l11 11"></path>
            </g>
            <defs>
                <clipPath id="clip0_344_746">
                    <path fill="#fff" d="M0 0H14V14H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
};
