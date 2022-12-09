export const Card = ({ width, color, className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || "20"}
            height={width || "20"}
            fill="none"
            viewBox="0 0 20 20"
            className={className + " " + "feather feather-shopping-card"}
        >
            <path
                stroke={"#000" || color}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.5 5.333h-15C1.58 5.333.833 6.08.833 7v10c0 .92.747 1.667 1.667 1.667h15c.92 0 1.667-.747 1.667-1.667V7c0-.92-.746-1.667-1.667-1.667zM.833 10.333h18.334"
            ></path>
        </svg>
        
    );
};
