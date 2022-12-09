import Link from "next/link";
import { useRouter } from "next/router";
import { Cart } from "../assets/icons/Cart";
import { Menu } from "../assets/icons/Menu";

import { Moken } from "../assets/icons/Moken";

export const Navbar = ({ openModal }) => {
    const router = useRouter();

    return (
        <div className="flex flex-row h-fit mx-auto justify-between m-4 p-4 md:px-8 w-full border-[rgb(0,0,0,0.25)] bg-white shadow rounded-md items-center">
            <button onClick={() => router.push("/")}>
                <Moken />
            </button>

            <div className="flex flex-row">
                <button
                    className="m-0 mr-4"
                    onClick={() => {
                        router.push("/cart");
                    }}
                >
                    <Cart />
                </button>
                <button className="m-0" onClick={openModal}>
                    <Menu />
                </button>
            </div>
        </div>
    );
};
