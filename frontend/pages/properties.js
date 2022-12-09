import { useContext, useEffect, useState } from "react";
import { Layout } from "../components/Layout";

import preview from "../assets/preview.png";
import { Property } from "../components/Property";
import { Close } from "../assets/icons/Close";
import { Moken } from "../assets/icons/Moken";
import Link from "next/link";
import { Context } from "../context";

import { useForm } from "react-hook-form";

export const Modal = ({ opened, closeModal, setFilter }) => {
    const { state } = useContext(Context);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { minValue, maxValue } = data;

        if (minValue < maxValue) {
            console.log(data);
        } else {
            alert("Valor mínimo nao pode ser maior que o valor máximo!");
        }
    };

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

                <form
                    className="w-11/12 flex flex-row"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        className="border border-gray-500 p-2 rounded-l-xl w-1/2"
                        min={0}
                        max={9999999}
                        placeholder="Valor minimo"
                        type={"number"}
                        {...register("minValue")}
                    />
                    <input
                        className="border border-gray-500 p-2 rounded-r-xl w-1/2"
                        min={0}
                        max={9999999}
                        placeholder="Valor minimo"
                        type={"number"}
                        {...register("maxValue")}
                    />

                    <input type={"submit"} value="Filtrar" />
                </form>
            </div>
        </div>
    ) : null;
};

const Properties = () => {
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

    const [filter, setFilter] = useState({
        maxValue: 0,
        minValue: 0,
    });
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        let newArray = [];

        properties.forEach((property) => {
            if (
                property.price >= filter.minValue &&
                property.price <= filter.maxValue
            ) {
                newArray.push(property);
            }
        });

        setFilteredList(newArray);
        console.log(filteredList);
    }, [filter]);

    const [modalOpened, setModalOpened] = useState(true);

    return (
        <>
            <Modal
                opened={modalOpened}
                closeModal={() => setModalOpened(false)}
                filter={filter}
                setFilter={setFilter}
            />
            <Layout title={"Propriedade"}>
                <div className="flex flex-col justify-center w-full md:w-2/5 md:mx-auto">
                    <div className="w-full">
                        <p className="text-gray-500 text-sm">
                            {properties ? properties.length : "0"} imóveis à
                            venda
                        </p>
                        <button
                            className="bg-black text-white text-lg flex flex-row justify-center items-center px-6 py-1 mt-2 rounded-xl"
                            onClick={() => setModalOpened(true)}
                        >
                            Filtrar
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="none"
                                viewBox="0 0 12 12"
                                className="ml-2"
                            >
                                <path
                                    fill="#fff"
                                    d="M1.875 2.625h1.913c.15.638.75 1.125 1.462 1.125.713 0 1.275-.487 1.463-1.125h4.162c.225 0 .375-.15.375-.375s-.15-.375-.375-.375H6.713C6.563 1.238 5.963.75 5.25.75c-.713 0-1.275.488-1.462 1.125H1.875c-.225 0-.375.15-.375.375s.15.375.375.375zM10.5 5.625H8.963C8.813 4.987 8.213 4.5 7.5 4.5c-.713 0-1.275.487-1.463 1.125H1.5c-.225 0-.375.15-.375.375s.15.375.375.375h4.537c.15.638.75 1.125 1.463 1.125.713 0 1.275-.487 1.463-1.125H10.5c.225 0 .375-.15.375-.375s-.15-.375-.375-.375zM10.5 9.375H6.338c-.15-.637-.75-1.125-1.463-1.125-.713 0-1.275.488-1.462 1.125H1.5c-.225 0-.375.15-.375.375s.15.375.375.375h1.913c.15.637.75 1.125 1.462 1.125.713 0 1.275-.488 1.463-1.125H10.5c.225 0 .375-.15.375-.375s-.15-.375-.375-.375z"
                                ></path>
                            </svg>
                        </button>

                        <div className="h-[0.5px] w-full bg-gray-400 lg:w-1/3 my-4" />

                        <div className="flex flex-row w-full">
                            <p className="text-sm text-black mr-2">
                                Ordenar por:
                            </p>
                            <select className="bg-[#f5f5f5] border-none text-gray-500 text-sm font-semibold">
                                <option defaultValue={true}>
                                    Mais relevante
                                </option>
                                <option>Mais recente</option>
                                <option>Maior valor</option>
                                <option>Menor valor</option>
                            </select>
                        </div>
                    </div>

                    {properties ? (
                        <div className="flex flex-1 flex-col items-center w-full mb-4">
                            {filter && filter.maxValue > 0
                                ? properties
                                      .filter(() => {})
                                      .map((property, index) => (
                                          <div
                                              key={index}
                                              className="w-11/12 flex mt-4 shadow-xl"
                                          >
                                              <Property {...property} />
                                          </div>
                                      ))
                                : properties.length > 0 &&
                                  properties.map((property, index) => (
                                      <div
                                          key={index}
                                          className="w-11/12 flex mt-4 shadow-xl"
                                      >
                                          <Property {...property} />
                                      </div>
                                  ))}
                        </div>
                    ) : (
                        <div className="flex flex-1 flex-col items-center justify-center w-full py-8 mb-4">
                            <p className="text-3xl text-gray-600 text-center">
                                Nenhuma propriedade foi encontrada!
                            </p>
                        </div>
                    )}
                </div>
            </Layout>
        </>
    );
};

export default Properties;
