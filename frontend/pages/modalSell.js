import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Moken } from "../assets/icons/Moken";
import { Close } from "../assets/icons/Close";
import { Layout } from "../components/Layout";
import { Symbol } from "../assets/Symbol";
import { Token } from "../components/Token";

const Sell = () => {
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
                <p className="text-2xl font-bold">Colocar à venda</p>
                <br className="bg-black"></br>
                <hr></hr>
                <br></br>

                {token.map((token, index) => (
                    <Token {...token} key={index} shrink={true} />
                ))}
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="font-bold mb-6">Colocar à venda</p>
                <select className="bg-white border-2 border-black rounded-md mb-6 p-12 w-fit py-2 px-24">
                    <option Selected disabled value>
                        Tipo de oferta
                    </option>
                    <option>Oferta pública</option>
                    <option>Oferta privada</option>
                </select>
            </div>

            <button
                className="bg-black py-2 px-8 text-white rounded-md mt-4 border-2 border-black"
                onClick={() => {
                    router.push("/");
                }}
            >
                Anunciar
            </button>
        </Layout>
    );
};

export default Sell;
