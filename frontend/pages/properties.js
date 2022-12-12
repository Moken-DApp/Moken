import { useContext, useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { Symbol } from "../assets/Symbol";
import { Token } from "../components/Token";
import Link from "next/link";
import Image from "next/image";
import { TokenCart } from "../components/TokenCart";

const Properties = () => {
    const [propertie, setPropertie] = useState({
        category: "Apartamento",
        price: 145630.46,
        address:
            "Av. Prof. Almeida Prado, 520 - Butantã, São Paulo - SP, CEP 05508-070",
        area: "342",
        details: ["6 quartos", "2 vagas"],
        amount: 1 / 4,
        id: 3145,

        linkDoc:
            "https://ipfs.io/ipfs/QmUCod4D3uZcyhVa8mnuCY24gpKasLmdnptFd66MmkogBL",
        linkImage:
            "https://ipfs.io/ipfs/QmbSQwkmbd6T2tkexaTemTKCNkfqCiiYUYnE5A3f4AZU4R",
        description:
            "Prédio em Curitiba construído durante a revolução farroupilha",
        type: "Prédio",
        address: {
            street: "Av. Oscar Niemeyer",
            neighborhood: "Poço Verde",
            city: "Curitiba",
            state: "Paraná",
            cep: "01017920",
        },
        specification: {
            rip: "9701.23456.500-2",
            area: "55",
            rooms: "8",
            parkingPlaces: "4",
        },
        price: "20000000",
    });

    return (
        <Layout>
            <div className="flex flex-col justify-center w-full md:w-2/5 md:mx-auto">
                <p className="text-2xl font-bold">Seus Imóveis</p>
                <br className="bg-black"></br>
                <hr></hr>
                <br></br>

                <Link href="/properties/9701.23456.500-2">
                    <TokenCart {...propertie} shrink={true} acquired={true} />
                </Link>

                <div className="flex flex-row space-x-40">
                    <div className="">
                        <h1 className="font-bold text-lg mt-3">Patrimônio</h1>
                    </div>

                    <div className="text-end">
                        <h2 className="font-bold ">
                            {(
                                parseFloat(propertie.price).toFixed(2) / 0.9798
                            ).toFixed(2)}{" "}
                            Celo
                        </h2>
                        <p className="text-sm text-slate-600 font-bold">
                            {parseFloat(propertie.price).toFixed(2)}
                        </p>
                    </div>
                </div>

                <div className=" mt-8 flex justify-center items-center">
                    <div
                        className={`bg-white border-2 border-black rounded-2xl w-full`}
                    >
                        <div className="p-2 flex border-b-2 border-black justify-center items-center">
                            <div className="w-full">
                                <p className="ml-2 font-bold text-md ">
                                    Dividendos
                                </p>
                            </div>
                        </div>
                        <div className="p-2 flex border-b-2 border-black justify-center items-center">
                            <div className="w-full flex flex-row items-center justify-around">
                                <p className="ml-2 font-bold text-sm">
                                    Propriedade
                                </p>
                                <p className="ml-2 font-bold text-sm">Valor</p>
                                <p className="ml-2 font-bold text-sm">Data</p>
                            </div>
                        </div>
                        <div className="p-2 flex justify-center items-center">
                            <div className="w-full flex flex-row items-center justify-around">
                                <p className="text-sm font-bold text-gray-600">
                                    {propertie.specification.rip}
                                </p>
                                <p className="text-xs font-bold text-gray-600">
                                    R$ 1.500,00
                                </p>
                                <p className="text-xs font-bold text-gray-600">
                                    12/12/22
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Properties;
