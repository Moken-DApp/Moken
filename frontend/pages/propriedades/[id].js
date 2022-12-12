import { Layout } from "../../components/Layout";
import { Property } from "../../components/Property";
import { Coin } from "../../assets/icons/Coin";

import preview from "../../assets/preview.png";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { useRouter } from "next/router";
import { Moken } from "../../assets/icons/Moken";

const Modal = ({ isOpened }) => {
    return isOpened ? (
        <div className="min-h-screen h-full w-full flex flex-col justify-center gap-4 moderat absolute items-center">
            <div className="w-full md:w-2/5">
                <div className="ml-6">
                    <Moken />
                </div>
                <div className="flex flex-col ml-6">
                    <p className="text-xl font-semibold">Insira abaixo o seu</p>
                    <p className="text-xl font-semibold">CPF/CNPJ</p>
                </div>
                <div className="ml-6">
                    <input
                        type={"text"}
                        placeholder={"000.000.000-00"}
                        className={
                            "border-black border-2 px-4 py-2 rounded-lg w-11/12 mt-2"
                        }
                    />
                </div>
                <div className="w-full flex justify-center">
                    <div className="flex flex-col gap-2 items-center w-3/5 rounded-lg mt-12 border-2 border-dashed border-black">
                        <u className="text-xl font-bold mt-4">Observação</u>
                        <p className="text-sm w-11/12 text-center mb-4">
                            O dado solicitado acima, têm como objetivo combater
                            crimes como o de falsidade ideológica e lavagem de
                            dinheiro
                        </p>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <button className="bg-black w-4/5 rounded-md text-white h-12 mt-12">
                        Continuar
                    </button>
                </div>
            </div>
        </div>
    ) : null;
};

const PropertyPage = ({ property }) => {
    //get property from the getServerSideProps
    const [propertyData, setPropertyData] = useState(property);

    const router = useRouter();

    useEffect(() => {
        if (propertyData === null) {
            router.push("/404");
        }

        console.log(propertyData);
    }, [propertyData]);

    console.log(console.log(property));

    const [isOpened, setIsOpened] = useState(false);

    return (
        <>
            <Modal isOpened={isOpened} />
            <Layout
                title={`Propriedade ${propertyData.specification.rip}`}
                navbar={!isOpened}
            >
                <div
                    className={`flex flex-col justify-center items-center w-full md:w-2/5 md:mx-auto pb-8 ${
                        isOpened ? "hidden" : ""
                    }`}
                >
                    <div className="w-11/12 mt-4">
                        <p className="text-xl font-bold">
                            # {propertyData.specification.rip}
                        </p>
                        <p className="text-xs">
                            {`Propriedade da União Federal (RIP: ${propertyData.specification.rip}})`}
                        </p>
                    </div>
                    <div className="w-11/12 mt-8 flex justify-center items-center">
                        <Property {...propertyData} />
                    </div>
                    <div className="w-11/12 mt-8 flex justify-center items-center">
                        <div
                            className={`bg-white border-2 border-black rounded-2xl w-full`}
                        >
                            <div className="p-2 flex border-b-2 border-black justify-center items-center">
                                <div className="w-full">
                                    <p className="ml-2 font-bold text-md ">
                                        Descrição
                                    </p>
                                </div>
                            </div>
                            <div className="p-2 flex flex-col gap-2 ml-2">
                                <p className="text-sm font-bold text-gray-600">
                                    Jardim Alameda Paulista 432, São Paulo,
                                    Brasil
                                </p>
                                <p className="text-xs font-bold text-gray-600">
                                    {
                                        (propertyData.specification.area,
                                        propertyData.specification.rooms,
                                        propertyData.specification
                                            .parkingPlaces)
                                    }
                                </p>
                            </div>
                            <div className="p-2 flex flex-col gap-2 ml-2 mt-4 mb-2">
                                <p className="text-xs font-bold">
                                    {propertyData.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-11/12 mt-8 flex justify-center items-center">
                        <div
                            className={`bg-white border-2 border-black rounded-2xl w-full`}
                        >
                            <div className="p-2 flex border-b-2 border-black justify-center items-center">
                                <div className="w-full">
                                    <p className="ml-2 font-bold text-md ">
                                        Detalhes
                                    </p>
                                </div>
                            </div>
                            <div className="p-2 flex flex-row justify-between items-center ml-2 mt-2">
                                <p className="text-sm font-bold text-gray-600">
                                    Endereço do Contrato
                                </p>
                                <p className="text-xs font-bold truncate text-gray-600">
                                    0x00000000000
                                </p>
                            </div>
                            <div className="p-2 flex flex-row justify-between items-center ml-2">
                                <p className="text-sm font-bold text-gray-600">
                                    Padrão do Contrato
                                </p>
                                <p className="text-xs font-bold text-gray-600">
                                    ERC-721
                                </p>
                            </div>
                            <div className="p-2 flex flex-row justify-between items-center ml-2">
                                <p className="text-sm font-bold text-gray-600">
                                    Blockchain
                                </p>
                                <p className="text-xs font-bold text-gray-600">
                                    Celo
                                </p>
                            </div>
                            <div className="p-2 flex flex-row justify-between items-center ml-2 mb-2">
                                <p className="text-sm font-bold text-gray-600">
                                    Imposto
                                </p>
                                <p className="text-xs font-bold text-gray-600">
                                    0.5%
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-11/12 mt-8 flex justify-center items-center">
                        <div
                            className={`bg-white border-2 border-black rounded-2xl w-full`}
                        >
                            <div className="p-2 flex border-b-2 border-black justify-center items-center">
                                <div className="w-full">
                                    <p className="ml-2 font-bold text-md ">
                                        Cadeia Dominal
                                    </p>
                                </div>
                            </div>
                            <div className="p-2 flex border-b-2 border-black justify-center items-center">
                                <div className="w-full flex flex-row items-center justify-around">
                                    <p className="ml-2 font-bold text-sm">
                                        Owner
                                    </p>
                                    <p className="ml-2 font-bold text-sm">
                                        Data
                                    </p>
                                </div>
                            </div>
                            <div className="p-2 flex justify-center items-center">
                                <div className="w-full flex flex-row items-center justify-around">
                                    <p className="text-sm font-bold text-gray-600">
                                        Pedro Hagge Baptista
                                    </p>
                                    <p className="text-xs font-bold text-gray-600">
                                        12/04/22
                                    </p>
                                </div>
                            </div>
                            <div className="p-2 flex justify-center items-center">
                                <div className="w-full flex flex-row items-center justify-around">
                                    <p className="text-sm font-bold text-gray-600">
                                        Marcelo Feitoza
                                    </p>
                                    <p className="text-xs font-bold text-gray-600">
                                        13/04/22
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-11/12 mt-8 flex justify-center items-center">
                        <div
                            className={`bg-white border-2 border-black rounded-2xl w-full`}
                        >
                            <div className="p-2 flex flex-row items-center ml-8 mt-6">
                                <p className="text-xs font-bold">Preço Atual</p>
                            </div>
                            <div className="pl-2 flex flex-row items-center ml-8">
                                <p className="text-md font-bold">
                                    29,567 ETH por 1/4 do imóvel
                                </p>
                            </div>
                            <div className="pl-2 w-full items-center ml-8 mt-4 mb-6">
                                <button
                                    className="bg-black w-4/5 rounded-md text-white h-12"
                                    onClick={() => {
                                        setIsOpened(true);
                                    }}
                                >
                                    Adicionar ao Carrinho
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export async function getServerSideProps(context) {
    const { id } = context.query;

    console.log(id);

    let property = await axios
        .get(`http://127.0.0.1:3001/Propertie/getPropertyMetadata/${id}`)
        .then((res) => {
            console.log(res);
            return res.data;
        });

    return {
        props: {
            property: property,
        },
    };
}

export default PropertyPage;
