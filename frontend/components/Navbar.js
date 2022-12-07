import Link from "next/link";
import { Cart } from "../assets/Cart";
import { Menu } from "../assets/Menu";

import { Moken } from "../assets/Moken";

export const Navbar = () => {
    return (
        <div className="flex flex-row h-fit mx-auto justify-between m-4 p-4 md:px-8 w-full border-[rgb(0,0,0,0.25)] bg-white shadow rounded-md items-center">
            <Link href={"/"} className="p-0">
                <Moken />
            </Link>

            <div className="flex flex-row">
                <button className="m-0 mr-4">
                    <Cart />
                </button>
                <button className="m-0">
                    <Menu />
                </button>
            </div>
        </div>
    );
};
