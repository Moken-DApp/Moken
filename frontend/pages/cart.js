import { useContext, useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { Trash } from "../assets/icons/Trash";
import { Symbol } from "../assets/Symbol";
import { TokenCart } from "../components/TokenCart";

const Cart = () => {
    const [token, setToken] = useState([
        {
            category: "Apartamento",
            price: 145630.46,
            address:
                "Av. Prof. Almeida Prado, 520 - Butantã, São Paulo - SP, 05508-070",
            area: 342,
            details: ["6 quartos", "2 vagas"],
            amount: 1 / 4,
            id: 3145,
        },
    ]);
    return (
        <Layout>
            <div className="flex flex-col justify-center w-full md:w-2/5 md:mx-auto">
                <p className="text-2xl font-bold">Seus Carrinho</p>
                <br className="bg-black"></br>
                <hr></hr>
                <br></br>
                <div className="flex flex-row justify-between mb-4 w-full">
                    <p className="text-xs text-slate-600 font-bold">2 itens</p>
                    <p className="text-xs text-slate-600 font-bold">
                        Limpar tudo
                    </p>
                </div>

                {token.map((token, index) => (
                    <TokenCart {...token} key={index} shrink={true} />
                ))}

                <div className="flex flex-row justify-between">
                    <div className="">
                        <h1 className="font-bold text-lg mt-3">Patrimônio</h1>
                    </div>

                    <div className="">
                        <h2 className="font-bold ">29,567 Celo</h2>
                        <p className="text-sm text-slate-600 font-bold">
                            R$ 29.126,46
                        </p>
                    </div>
                </div>

                <button
                    className="bg-black py-2 px-8 text-white rounded-md mt-4 border-2 border-black"
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    Finalizar compra
                </button>
                <button
                    className="bg-white py-2 px-8 text-black font-bold rounded-md mt-4 border-2 border-black cursor-pointer"
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    Continuar comprando
                </button>
                <div className="mt-6"></div>
            </div>
        </Layout>
    );
};

export default Cart;
