import Link from "next/link";
import { Arrow } from "../assets/icons/Arrow";
import { Card } from "../assets/icons/Card";
import { Cart } from "../assets/icons/Cart";
import { Close } from "../assets/icons/Close";
import { Coin } from "../assets/icons/Coin";
import { House } from "../assets/icons/House";
import { Moken } from "../assets/icons/Moken";
import { MetamaskIcon } from "../assets/icons/Metamask";

import { useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";

export const Modal = ({ opened, closeModal }) => {
    const { state, dispatch } = useContext(Context);
    const router = useRouter();

    return opened ? (
        <div className="z-100 absolute bg-white flex flex-1 flex-col items-center w-full h-screen py-8 px-4">
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
                <div className="w-11/12 flex flex-row justify-between mb-24">
                    <Link href={"/"}>
                        <Moken />
                    </Link>

                    <button onClick={closeModal}>
                        <Close />
                    </button>
                </div>

                <div className="flex flex-col w-7/12 transform hover:scale-105 transition duration-300 ease-in-out px-4">
                    <div className="py-2 px-4 flex flex-row justify-between items-center rounded-t-2xl border-2 border-black border-b-0 w-full shadow-xl">
                        <Coin />

                        <MetamaskIcon />
                    </div>
                    <div className="border-t-none border-2 border-black rounded-b-2xl flex flex-col flex-1 justify-center items-center px-4 py-8 shadow-xl">
                        <div className="w-16 h-16 bg-black rounded-full shadow-lg mb-8"></div>

                        <p
                            className="overflow-hidden truncate w-3/4 underline font-semibold"
                            onClick={navigator.clipboard.writeText(
                                state.user.wallet
                            )}
                        >
                            {state.user.wallet}
                        </p>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center">
                    <Link
                        href={"/"}
                        className="w-4/5 border-2 border-black rounded-3xl px-4 py-2 flex flex-row justify-between mt-16 items-center shadow-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-200"
                    >
                        <div className="flex flex-row items-center">
                            <div className="w-8 h-8 flex flex-col justify-center items-center">
                                <House />
                            </div>
                            <p className="font-semibold text-xl ml-2">Início</p>
                        </div>

                        <Arrow width={20} />
                    </Link>

                    <Link
                        href={"/cart"}
                        className="w-4/5 border-2 border-black rounded-3xl px-4 py-2 flex flex-row justify-between mt-8 items-center shadow-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-200"
                    >
                        <div className="flex flex-row items-center">
                            <div className="w-8 h-8 flex flex-col justify-center items-center">
                                <Cart />
                            </div>
                            <p className="font-semibold text-xl ml-2">
                                Carrinho
                            </p>
                        </div>

                        <Arrow width={20} />
                    </Link>

                    <Link
                        href={"/profile"}
                        className="w-4/5 border-2 border-black rounded-3xl px-4 py-2 flex flex-row justify-between mt-8 items-center shadow-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-200"
                    >
                        <div className="flex flex-row items-center">
                            <div className="w-8 h-8 flex flex-col justify-center items-center">
                                <Card />
                            </div>
                            <p className="font-semibold text-xl ml-2">
                                Seus imóveis
                            </p>
                        </div>

                        <Arrow width={20} />
                    </Link>

                    <button
                        onClick={() => {
                            dispatch({
                                type: "LOGGED_OUT_USER",
                            });
                            router.push("/login");
                        }}
                        className="w-4/5 border-2 border-white bg-black text-white rounded-3xl px-4 py-2 flex flex-row justify-center mt-8 items-center shadow-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-200"
                    >
                        <Arrow
                            width={20}
                            color={"#fff"}
                            className={"rotate-180"}
                        />
                        <div className="flex flex-row justify-center items-center">
                            <p className="font-semibold text-xl ml-2">Sair</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    ) : null;
};
