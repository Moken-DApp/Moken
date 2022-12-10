import { Layout } from "../../components/Layout";

import { useForm } from "react-hook-form";

const Adicionar = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => console.log(data);

    return (
        <Layout>
            <div className="flex flex-col w-full md:w-2/5 md:mx-auto pb-4">
                <div className="py-2">
                    <p className={"text-2xl "}>Adicionar propriedade</p>
                </div>

                <div className="h-[1px] my-4 w-full bg-gray-300 mx-auto"></div>

                <form
                    className="flex flex-col w-full justify-center items-center"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex flex-col justify-center w-full">
                        <p className="text-lg text-black mt-4">
                            Imagem do imóvel{" "}
                            <span className="text-red-500 text-md">*</span>
                        </p>

                        <input
                            className="block w-full text-sm border-2 p-8 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none border-black"
                            id="file_input"
                            type="file"
                            {...register("image", {
                                required: "Imagem do imóvel necessária",
                            })}
                        />
                    </div>

                    <div className="flex flex-col justify-center w-full">
                        <p className="text-lg text-black mt-8">
                            Documento do imóvel{" "}
                            <span className="text-red-500 text-md">*</span>
                        </p>

                        <input
                            className="block w-full text-sm border-2 p-8 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none border-black"
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
    );
};

export default Adicionar;
