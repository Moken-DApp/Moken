import Link from "next/link";
import { useRouter } from "next/router";
import { Cart } from "../assets/icons/Cart";
import { Menu } from "../assets/icons/Menu";

import { Moken } from "../assets/icons/Moken";

export const Navbar = ({ openModal }) => {
    const router = useRouter();

    return (
        <div className="h-fit mx-auto m-4 p-4 w-full border-[rgb(0,0,0,0.25)] bg-white shadow rounded-md flex justify-center">
            <div className="w-full md:w-1/3 flex flex-row justify-between">
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
        </div>
    );
};
