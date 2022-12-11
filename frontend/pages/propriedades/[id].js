import { Layout } from "../../components/Layout";
import { Property } from "../../components/Property";
import { Coin } from "../../assets/icons/Coin";

import preview from "../../assets/preview.png";
import { useEffect, useState } from "react";
import axios from "../../axios";
import { useRouter } from "next/router";

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

    return (
        <Layout>
            <div className="flex flex-col justify-center items-center w-full md:w-2/5 md:mx-auto pb-8">
                <div className="w-11/12 mt-4">
                    <p className="text-xl font-bold">
                        # {propertyData.specification.rip || propertyData.rip}
                    </p>
                    <p className="text-xs">
                        {`Propriedade da União Federal (RIP: ${
                            propertyData.specification.rip || propertyData.rip
                        }})`}
                    </p>
                </div>
                <div className="w-11/12 mt-8 flex justify-center items-center">
                    <Property
                        imageUri={propertyData.linkImage}
                        category={"Apartamento"}
                        price={propertyData.price || "150.000"}
                        address={`${propertyData.address.street}, ${
                            propertyData.address.neighbourhood ||
                            propertyData.address.neighborhood
                        }, 
                        ${propertyData.address.city}, ${
                            propertyData.address.state
                        }, ${propertyData.address.cep}`}
                        area={propertyData.specification.area}
                        details={[
                            `${propertyData.specification.rooms} quartos`,
                            `${propertyData.specification.parkingPlaces} vagas`,
                        ]}
                        rip={propertyData.specification.rip || propertyData.rip}
                    />
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
                                Jardim Alameda Paulista 432, São Paulo, Brasil
                            </p>
                            <p className="text-xs font-bold text-gray-600">
                                {
                                    (propertyData.specification.area,
                                    propertyData.specification.rooms,
                                    propertyData.specification.parkingPlaces)
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
                                <p className="ml-2 font-bold text-sm">Owner</p>
                                <p className="ml-2 font-bold text-sm">Data</p>
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
                            <button className="bg-black w-4/5 rounded-md text-white h-12">
                                Adicionar ao Carrinho
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export async function getServerSideProps(context) {
    const { id } = context.query;

    let property = await axios
        .get(`/Propertie/getPropertyMetadata/${id}`)
        .then((res) => {
            return res.data;
        });

    return {
        props: {
            property: property,
        },
    };
}

export default PropertyPage;
