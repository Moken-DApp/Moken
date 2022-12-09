import { useContext, useEffect, useState } from "react";
import { Layout } from "../components/Layout";

import preview from "../assets/preview.png";
import { Property } from "../components/Property";
import { Close } from "../assets/icons/Close";
import { Moken } from "../assets/icons/Moken";
import Link from "next/link";
import { Context } from "../context";

import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export const Modal = ({ opened, closeModal, filter, setFilter }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { minValue, maxValue } = data;

        console.log(minValue, maxValue);

        if (minValue <= maxValue) {
            setFilter({ maxValue: maxValue, minValue: minValue });
            closeModal();
        } else {
            alert("Valor mínimo nao pode ser maior que o valor máximo!");
        }
    };

    return opened ? (
        <div className="z-100 absolute bg-white flex flex-1 flex-col items-center w-full py-8 px-4 h-screen">
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
                <div className="w-11/12 flex flex-row justify-between mb-16">
                    <Link href={"/"}>
                        <Moken />
                    </Link>

                    <button onClick={closeModal}>
                        <Close />
                    </button>
                </div>

                <form
                    className="w-11/12 h-full flex flex-col justify-between"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex flex-row">
                        <div className="w-1/2">
                            <input
                                className="border border-gray-500 p-2 rounded-l-xl w-full"
                                min={0}
                                max={9999999999}
                                placeholder="Valor minimo"
                                type={"number"}
                                {...register("minValue")}
                            />
                            <p className="text-start text-sm font-semibold">
                                Valor min.
                            </p>
                        </div>

                        <div className="w-1/2">
                            <input
                                className="border border-gray-500 p-2 rounded-r-xl w-full"
                                min={0}
                                max={9999999999}
                                placeholder="Valor minimo"
                                type={"number"}
                                {...register("maxValue")}
                            />
                            <p className="text-end text-sm font-semibold">
                                Valor max.
                            </p>
                        </div>
                    </div>

                    <input
                        className="bg-black p-2 text-white rounded-xl text-lg mt-4 cursor-pointer"
                        type={"submit"}
                        value="Filtrar"
                    />
                </form>
            </div>
        </div>
    ) : null;
};

const Properties = () => {
    const { state, dispatch } = useContext(Context);
    const router = useRouter();

    useEffect(() => {
        state.user.wallet ?? router.push("/login");
    }, []);

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
            price: 245630.46,
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
            price: 345630.46,
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
            price: 445630.46,
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
            price: 545630.46,
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
            price: 645630.46,
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

    const filterList = (newFilter) => {
        setFilter(newFilter);

        console.log("Filter:" + newFilter.minValue + " " + newFilter.maxValue);

        const filtered = properties.filter((property) => {
            return (
                property.price >= newFilter.minValue &&
                property.price <= newFilter.maxValue
            );
        });

        if (
            (newFilter.minValue === 0 && newFilter.maxValue === 0) ||
            filtered.length === 0
        ) {
            setFilteredList([]);
        } else {
            setFilteredList(filtered);
        }
    };

    const [modalOpened, setModalOpened] = useState(false);

    return (
        <>
            <Modal
                opened={modalOpened}
                closeModal={() => setModalOpened(false)}
                filter={filter}
                setFilter={(filter) => filterList(filter)}
            />
            <Layout title={"Propriedade"}>
                <div
                    className={`flex flex-col justify-center w-full md:w-2/5 md:mx-auto ${
                        modalOpened ? "hidden" : ""
                    }`}
                >
                    <div className="w-full">
                        <p className="text-gray-500 text-sm">
                            {filteredList.length > 0
                                ? filteredList.length
                                : properties
                                ? properties.length
                                : 0}{" "}
                            imóveis à venda
                        </p>

                        <div className="flex flex-row justify-between items-center">
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

                            {filter.maxValue > 0 && filteredList.length > 0 ? (
                                <button
                                    className="text-red-500 flex flex-row items-center"
                                    onClick={() =>
                                        setFilteredList([]) &&
                                        setFilter({ minValue: 0, maxValue: 0 })
                                    }
                                >
                                    <Close
                                        width={12}
                                        className={"mr-2"}
                                        color={"rgb(239 68 68)"}
                                    />
                                    Limpar filtros
                                </button>
                            ) : null}
                        </div>

                        <div className="h-[0.5px] w-full bg-gray-400 my-4" />

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

                    <div className="flex flex-1 flex-col items-center w-full mb-4">
                        {filteredList.length > 0 ? (
                            filteredList.map((property, index) => (
                                <div
                                    key={index}
                                    className="w-11/12 lg:w-4/5 flex mt-4 shadow-xl"
                                >
                                    <Property {...property} />
                                </div>
                            ))
                        ) : properties ? (
                            properties.map((property, index) => (
                                <div
                                    key={index}
                                    className="w-11/12 lg:w-4/5 flex mt-4 shadow-xl"
                                >
                                    <Property {...property} />
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-1 flex-col items-center justify-center w-full py-8 mb-4">
                                <p className="text-3xl text-gray-600 text-center">
                                    Nenhuma propriedade foi encontrada!
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Properties;
