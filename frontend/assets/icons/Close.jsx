export const Close = ({ color, width, className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={"16" || width}
            height={"16" || width}
            fill="none"
            viewBox="0 0 14 14"
            className={className}
        >
            <g
                stroke={"#000" || color}
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
