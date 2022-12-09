import React from "react";

export const Dropdown = ({ question, answer }) => {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    return (
        <div className="shadow-md w-full mb-4">
            <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex flex-row bg-white items-center px-4 py-4 w-full justify-between cursor-pointer shadow-md ${
                    dropdownOpen ? "rounded-t-lg" : "rounded-lg"
                }`}
            >
                <div className="flex flex-row">
                    <div className="w-8 h-8 bg-black rounded-[50%] border border-gray-400" />

                    <p className="font-bold text-xl ml-4">{question}</p>
                </div>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="9"
                    fill="none"
                    viewBox="0 0 13 9"
                    className={`${dropdownOpen ? "rotate-180" : ""}`}
                >
                    <path
                        stroke="#000"
                        strokeWidth="2"
                        d="M12 1L6.5 7 1 1"
                    ></path>
                </svg>
            </div>
            <div
                className={`${
                    dropdownOpen
                        ? `top-full opacity-100 visible flex transition ease-in-out duration-300`
                        : "top-[110%] invisible hidden opacity-0"
                } bg-white px-4 py-2 rounded-b-lg`}
            >
                <p>{answer}</p>
            </div>
        </div>
    );
};
