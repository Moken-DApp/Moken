import { Layout } from "../../components/Layout";

import { useForm } from "react-hook-form";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const SuccessModal = ({ modalOpened }) => {
    const router = useRouter();

    return modalOpened ? (
        <div className="z-100 absolute bg-white flex flex-1 flex-col items-center w-full min-h-screen h-full py-8 px-4 justify-center">
            <svg
                width="73"
                height="73"
                viewBox="0 0 73 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M36.4998 7.30005C20.3741 7.30005 7.2998 20.3743 7.2998 36.5C7.2998 52.6257 20.3741 65.7001 36.4998 65.7001C52.6255 65.7001 65.6998 52.6257 65.6998 36.5C65.6998 31.1969 64.2641 26.239 61.7932 21.9523L34.4229 49.3178C33.9679 49.7729 33.3497 50.0307 32.7025 50.0307C32.0576 50.0307 31.4371 49.7753 30.982 49.3178L20.1461 38.4819C19.1947 37.5305 19.1947 35.9924 20.1461 35.041C21.0975 34.0896 22.6355 34.0896 23.587 35.041L32.7025 44.1565L58.9844 17.8746C53.6286 11.4141 45.5469 7.30005 36.4998 7.30005ZM58.9844 17.8746C60.0347 19.1413 60.9639 20.5132 61.7932 21.9476L67.4202 16.3205C68.3717 15.3666 68.3717 13.831 67.4202 12.8796C66.4688 11.9282 64.9308 11.9282 63.9794 12.8796L58.9844 17.8746Z"
                    fill="black"
                />
            </svg>

            <p className="text-2xl mt-4 w-3/5 mx-auto text-center">
                Operação realizada com sucesso
            </p>

            <button
                onClick={() => router.push("/propriedades")}
                className="px-4 py-2 bg-black text-white mt-8 rounded-lg"
            >
                Voltar para as Propriedades
            </button>
            <button
                onClick={() => router.push("/")}
                className="px-4 py-2 bg-black text-white mt-2 rounded-lg"
            >
                Voltar para a Tela incial
            </button>
        </div>
    ) : null;
};

const Adicionar = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [modalOpened, setModalOpened] = useState(false);

    const onSubmit = async (data) => {
        console.log(data);
        
        
    };

    return (
        <>
            <SuccessModal
                modalOpened={modalOpened}
                setModalOpened={setModalOpened}
            />
            <Layout>
                <div
                    className={`flex flex-col w-full md:w-2/5 md:mx-auto pb-4 ${
                        modalOpened ? "hidden" : ""
                    }`}
                >
                    <div className={"py-2"}>
                        <p className={"text-2xl "}>Adicionar propriedade</p>
                    </div>

                    <div
                        className={"h-[1px] my-4 w-full bg-gray-300 mx-auto"}
                    ></div>

                    <form
                        className={
                            "flex flex-col w-full justify-center items-center"
                        }
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="flex flex-col justify-center w-full">
                            <p className="text-lg text-black mt-4">
                                Imagem do imóvel{" "}
                                <span className="text-red-500 text-md">*</span>
                            </p>

                            <input
                                className={
                                    "block w-full text-sm border-2 p-8 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none border-black"
                                }
                                id="file_input"
                                type="file"
                                {...register("image", {
                                    required: "Imagem do imóvel necessária",
                                })}
                            />
                        </div>

                        <div className={"flex flex-col justify-center w-full"}>
                            <p className="text-lg text-black mt-8">
                                Documento do imóvel{" "}
                                <span className="text-red-500 text-md">*</span>
                            </p>

                            <input
                                className={
                                    "block w-full text-sm border-2 p-8 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none border-black"
                                }
                                id="file_input"
                                type="file"
                                {...register("document", {
                                    required: "Documento do imóvel necessária",
                                })}
                            />
                        </div>

                        <div className="flex flex-col justify-center w-full">
                            <p className="text-lg text-black mt-8">
                                Tipo:{" "}
                                <span className="text-red-500 text-md">*</span>
                            </p>
                            <input
                                type={"text"}
                                placeholder={"Ex.: Apartamento"}
                                className={
                                    "border-black border-2 px-4 py-2 rounded-lg w-full mt-2"
                                }
                                {...register("type", {
                                    required: "Indique o tipo de imóvel",
                                })}
                            />
                        </div>

                        <div className="flex flex-col justify-center w-full">
                            <p className="text-lg text-black mt-8">
                                Descrição:{" "}
                                <span className="text-red-500 text-md">*</span>
                            </p>
                            <textarea
                                placeholder={"Descrição do imóvel"}
                                className={
                                    "border-black border-2 px-4 py-2 rounded-lg w-full mt-2 h-32"
                                }
                                {...register("description", {
                                    required: "Descrição necessária",
                                })}
                            />
                        </div>

                        <div>
                            <p className="text-lg text-black mt-8">
                                Endereço do imovel:{" "}
                                <span className="text-red-500 text-md">*</span>
                            </p>

                            <input
                                type={"text"}
                                placeholder={"Rua"}
                                className={
                                    "border-black border-2 px-4 py-2 rounded-lg w-full mt-2"
                                }
                                {...register("street", {
                                    required: "Indique a rua do imóvel",
                                })}
                            />

                            <input
                                type={"text"}
                                placeholder={"Bairo"}
                                className={
                                    "border-black border-2 px-4 py-2 rounded-lg w-full mt-2"
                                }
                                {...register("neighbourhood", {
                                    required: "Indique o Bairro do imóvel",
                                })}
                            />

                            <input
                                type={"text"}
                                placeholder={"Cidade"}
                                className={
                                    "border-black border-2 px-4 py-2 rounded-lg w-full mt-2"
                                }
                                {...register("city", {
                                    required: "Indique a Cidade do imóvel",
                                })}
                            />

                            <input
                                type={"text"}
                                placeholder={"Estado"}
                                className={
                                    "border-black border-2 px-4 py-2 rounded-lg w-full mt-2"
                                }
                                {...register("state", {
                                    required: "Indique o Estado do imóvel",
                                })}
                            />

                            <input
                                type={"text"}
                                placeholder={"CEP"}
                                className={
                                    "border-black border-2 px-4 py-2 rounded-lg w-full mt-2"
                                }
                                {...register("cep", {
                                    required: "Indique o CEP do imóvel",
                                })}
                            />
                        </div>

                        <div>
                            <p className="text-lg text-black mt-8">
                                Especificações:{" "}
                                <span className="text-red-500 text-md">*</span>
                            </p>

                            <input
                                type={"text"}
                                placeholder="RIP ( Registro Imobiliário Patrimonial )"
                                className={
                                    "border-black border-2 px-4 py-2 rounded-lg w-full mt-2"
                                }
                                {...register("rip", {
                                    required:
                                        "Indique o Registro Imobiliário Patrimonial",
                                })}
                            />

                            <input
                                type={"number"}
                                min={1}
                                max={100000000}
                                placeholder="Área construída ( m² )"
                                className={
                                    "border-black border-2 px-4 py-2 rounded-lg w-full mt-2"
                                }
                                {...register("area", {
                                    required: "Indique a Área da propriedade",
                                })}
                            />

                            <input
                                type={"number"}
                                placeholder="Número de quartos"
                                min={1}
                                max={100}
                                className={
                                    "border-black border-2 px-4 py-2 rounded-lg w-full mt-2"
                                }
                                {...register("rooms", {
                                    required: "Indique o número de quartos",
                                })}
                            />

                            <input
                                type={"number"}
                                min={0}
                                max={100000}
                                placeholder="Número de vagas"
                                className={
                                    "border-black border-2 px-4 py-2 rounded-lg w-full mt-2"
                                }
                                {...register("parkingPlaces", {
                                    required: "Indique o número de vagas",
                                })}
                            />
                        </div>

                        <input
                            type={"submit"}
                            value="Adicionar propriedade"
                            className={
                                "border-black border-2 px-4 py-2 bg-black text-white w-4/5 rounded-lg my-8 cursor-pointer"
                            }
                        />
                    </form>
                </div>
            </Layout>
        </>
    );
};

export default Adicionar;
