import { useContext, useEffect, useState } from "react";
import {Layout} from "../components/Layout";
import { Symbol } from "../assets/Symbol";
import { Token } from "../components/Token";

const Transfer = () => {
    const [transfer, setTransfer] = useState([
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
                <p className="text-2xl font-bold">Transferir Token</p>
                <br className='bg-black'></br>
                <hr></hr>
                <br></br>
                
                {transfer.map((transfer, index) => (
                                    <Token
                                    {...transfer}
                                    key={index}
                                    shrink={true}
                                    />
                                ))}
                
                <div className="flex flex-col ">
                    <p className="font-bold mb-6 flex flex-col  justify-center items-center">Colocar à venda</p>
                    <label>Carteira do Remetente</label>
                    <input className="bg-white border-2 border-black rounded-md mb-6 p-12 py-2" type="text" placeholder="0x0000000000000"></input>
                    <label>CPF/CNPJ do Remetente</label>
                    <input className="bg-white border-2 border-black rounded-md mb-6 p-12 py-2" type="text" placeholder="000.000.000-00"></input>
                    <label>Carteira do Destinatário</label>
                    <input className="bg-white border-2 border-black rounded-md mb-6 p-12 py-2" type="text" placeholder="0x0000000000000"></input>
                    <label>CPF/CNPJ do Remetente</label>
                    <input className="bg-white border-2 border-black rounded-md mb-6 p-12 py-2" type="text" placeholder="000.000.000-00"></input>
                </div>

                <button
                        className="bg-black py-2 px-8 text-white rounded-md mt-4 mb-10 border-2 border-black"
                        onClick={() => {
                            router.push("/");
                        }}>
                            Transferir Token
                </button>

            </div>

        </Layout>
    );
};

export default Transfer;