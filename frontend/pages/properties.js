import { useContext, useEffect, useState } from "react";
import {Layout} from "../components/Layout";
import { Symbol } from "../assets/Symbol";
import { Token } from "../components/Token";
import Link from "next/link";
import Image from "next/image";

const Properties = () => {

    const [propertie, setPropertie] = useState([
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
                <p className="text-2xl font-bold">Seus Imóveis</p>
                <br className='bg-black'></br>
                <hr></hr>
                <br></br>
                
                
                {propertie.map((propertie, index) => (
                                    <Token
                                    {...propertie}
                                    key={index}
                                    shrink={true}
                                    />
                                ))}
                
                <div className="flex flex-row space-x-40">
                    <div className="">
                        <h1 className="font-bold text-lg mt-3">Patrimônio</h1>
                    </div>
                    
                    <div className="">
                        <h2 className="font-bold ">29,567 Celo</h2>
                        <p className="text-sm text-slate-600 font-bold">R$ 29.126,46</p>
                    </div>
                </div>

                
            <div className=" mt-8 flex justify-center items-center">
                    <div
                    className={`bg-white border-2 border-black rounded-2xl w-full`}
                    >
                        <div className="p-2 flex border-b-2 border-black justify-center items-center">
                            <div className="w-full">
                                <p className="ml-2 font-bold text-md ">Dividendos</p>
                            </div>
                        </div>
                        <div className="p-2 flex border-b-2 border-black justify-center items-center">
                            <div className="w-full flex flex-row items-center justify-around">
                                <p className="ml-2 font-bold text-sm">Propriedade</p>
                                <p className="ml-2 font-bold text-sm">Valor</p>
                                <p className="ml-2 font-bold text-sm">Data</p>
                            </div>
                        </div>
                        <div className="p-2 flex justify-center items-center">
                            <div className="w-full flex flex-row items-center justify-around">
                                <p className="text-sm font-bold text-gray-600">Apartamento #3149</p>
                                <p className="text-xs font-bold text-gray-600">R$ 1500,00</p>
                                <p className="text-xs font-bold text-gray-600">12/04/22</p>
                            </div>
                        </div>
                        <div className="p-2 flex justify-center items-center">
                            <div className="w-full flex flex-row items-center justify-around">
                                <p className="text-sm font-bold text-gray-600">Apartamento #3149</p>
                                <p className="text-xs font-bold text-gray-600">R$ 1500,00</p>
                                <p className="text-xs font-bold text-gray-600">12/04/22</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            

            </div>

            

        </Layout>
    );
};

export default Properties;