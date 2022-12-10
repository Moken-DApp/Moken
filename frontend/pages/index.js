import { useContext, useEffect, useState } from "react";

import { Illustration } from "../assets/Illustration1";
import { Illustration2 } from "../assets/Illustration2";
import { Layout } from "../components/Layout";
import { Context } from "../context";
import { useRouter } from "next/router";
import { Dropdown } from "../components/Dropdown";

import preview from "../assets/preview.png";
import { Property } from "../components/Property";
import { Modal } from "../components/Modal";

const Home = () => {
    const router = useRouter();
    const { state, dispatch } = useContext(Context);

    const [properties, setProperties] = useState([
        {
            image: preview,
            category: "Apartamento",
            price: 145630.46,
            address:
                "Av. Prof. Almeida Prado, 520 - Butantã, São Paulo - SP, 05508-070",
            area: 342,
            details: ["6 quartos", "2 vagas"],
            amount: 1 / 4,
            id: 3145,
        },
        {
            image: preview,
            category: "Apartamento",
            price: 145630.46,
            address:
                "Av. Prof. Almeida Prado, 520 - Butantã, São Paulo - SP, 05508-070",
            area: 342,
            details: ["6 quartos", "2 vagas"],
            amount: 1 / 4,
            id: 3145,
        },
        {
            image: preview,
            category: "Apartamento",
            price: 145630.46,
            address:
                "Av. Prof. Almeida Prado, 520 - Butantã, São Paulo - SP, 05508-070",
            area: 342,
            details: ["6 quartos", "2 vagas"],
            amount: 1 / 4,
            id: 3145,
        },
        {
            image: preview,
            category: "Apartamento",
            price: 145630.46,
            address:
                "Av. Prof. Almeida Prado, 520 - Butantã, São Paulo - SP, 05508-070",
            area: 342,
            details: ["6 quartos", "2 vagas"],
            amount: 1 / 4,
            id: 3145,
        },
        {
            image: preview,
            category: "Apartamento",
            price: 145630.46,
            address:
                "Av. Prof. Almeida Prado, 520 - Butantã, São Paulo - SP, 05508-070",
            area: 342,
            details: ["6 quartos", "2 vagas"],
            amount: 1 / 4,
            id: 3145,
        },
        {
            image: preview,
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
        <Layout openModal={() => setModalOpened(!modalOpened)}>
            <div className="flex flex-col justify-center items-center w-full md:w-2/5 md:mx-auto">
                <div className="w-full mt-4">
                    <Illustration width={300} className={"w-full"} />
                </div>

                <div className="flex flex-col justify-center items-center mt-8">
                    <p className="text-3xl font-bold">Escolha o seu imóvel</p>

                    <div className="flex flex-1 flex-row w-5/6 my-4">
                        <input
                            className="bg-white px-4 py-3 rounded-l-full text-sm shadow-md w-4/5"
                            placeholder="Busque por avenida"
                        />
                        <button
                            className="bg-black text-white rounded-r-full text-sm py-3 shadow-md w-1/5 text-center"
                            onClick={() => router.push("/properties")}
                        >
                            Buscar
                        </button>
                    </div>

                    <p className="w-2/3 text-center text-md">
                        Propriedades da União tokenizadas em{" "}
                        <span className="font-bold">120 bairros</span> de 10
                        cidades do Brasil
                    </p>
                </div>

                <div className="flex flex-col items-center flex-1 w-full mt-16">
                    {properties ? (
                        <>
                            <p className="text-2xl font-bold">
                                Recomendamos para você
                            </p>

                            <div
                                className="flex overflow-x-auto space-x-8 w-full my-4"
                                id="image-slider"
                            >
                                {properties.map((property, index) => (
                                    <Property
                                        {...property}
                                        key={index}
                                        shrink={true}
                                    />
                                ))}
                            </div>
                        </>
                    ) : null}

                    <button
                        className="bg-black py-2 px-8 text-white rounded-md"
                        onClick={() => {
                            router.push("/properties");
                        }}
                    >
                        Ver {properties ? "mais" : ""} propriedades
                    </button>
                </div>

                <div className="flex flex-col items-center flex-1 w-full mt-16">
                    <div className="w-full flex justify-center mt-4">
                        <Illustration2 width={300} className={"w-full"} />
                    </div>

                    <p className="text-2xl font-bold w-2/3 text-center">
                        Por que investir com a Moken?
                    </p>
                    {/* <p className="font-bold text-sm">
                        Conheça os serviços que você encontra na Moken:
                    </p>

                    <div className="my-8">Slider</div> */}

                    <div className="flex flex-col items-center text-center mt-4">
                        <p className="text-xs font-bold uppercase">
                            Passo a passo
                        </p>
                        <p className="text-xl font-bold">
                            Como é viver esse momento
                        </p>

                        <div className="mt-8 flex flex-col justify-center w-4/5">
                            <p className="font-bold mb-2">
                                Escolha o imóvel ideal
                            </p>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-col justify-center w-4/5">
                            <p className="font-bold mb-2">
                                Confiança na decisão
                            </p>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-col justify-center w-4/5">
                            <p className="font-bold mb-2">Menos burocracia</p>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-col justify-center w-4/5">
                            <p className="font-bold mb-2">Tudo digital</p>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit.
                            </p>
                        </div>

                        <button
                            className="bg-black py-2 px-8 text-white rounded-md mt-8"
                            onClick={() => {
                                router.push("/properties");
                            }}
                        >
                            Ver mais propriedades
                        </button>
                    </div>
                </div>

                <div className="flex flex-col items-center flex-1 w-full my-16">
                    <p className="text-2xl font-bold mb-8">
                        Perguntas frequentes
                    </p>

                    <Dropdown
                        question={"O que é um Token?"}
                        answer={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
                        }
                    />

                    <Dropdown
                        question={"O que é Blockchain?"}
                        answer={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
                        }
                    />

                    <Dropdown
                        question={"Como a Moken funciona?"}
                        answer={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
                        }
                    />
                </div>
            </div>
        </Layout>
    );
};

export default Home;
