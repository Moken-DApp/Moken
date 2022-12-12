import { Layout } from "../../components/Layout";

import { useForm } from "react-hook-form";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import axios from "../../utils/axios";

const SuccessModal = ({ modalOpened, link }) => {
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

            {link ? (
                <span className="text-gray-600 mt-2 text-center w-full">
                    Link da sua propriedade:{" "}
                    <Link href={link} target={"_blank"}>
                        {link}
                    </Link>
                </span>
            ) : null}

            <button
                onClick={() => router.push("/propriedades")}
                className="px-4 py-2 bg-black text-white mt-8 rounded-lg"
            >
                Voltar para as Propriedades
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
    const [loading, setLoading] = useState(false);
    const [link, setLink] = useState("");

    const sendFileToIPFS = async (file) => {
        if (file) {
            try {
                const formData = new FormData();
                formData.append("file", file);

                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        pinata_api_key: `${process.env.NEXT_PUBLIC_REACT_APP_PINATA_API_KEY}`,
                        pinata_secret_api_key: `${process.env.NEXT_PUBLIC_REACT_APP_PINATA_API_SECRET}`,
                        "Content-Type": "multipart/form-data",
                    },
                });

                const fileHash = `https://ipfs.io/ipfs/${resFile.data.IpfsHash}`;

                return fileHash;
            } catch (err) {
                console.log("Error sending file to IPFS: ", err);
            }
        }
    };

    const onSubmit = async (data) => {
        setLoading(true);

        const {
            image,
            document,
            price,
            type,
            description,
            street,
            neighborhood,
            city,
            state,
            cep,
            rip,
            area,
            rooms,
            parkingPlaces,
        } = data;

        try {
            const imageHash = await sendFileToIPFS(image[0]);
            const documentHash = await sendFileToIPFS(document[0]);

            const property = {
                linkImage: imageHash,
                linkDoc: documentHash,
                price,
                type,
                description,
                address: {
                    street,
                    neighborhood,
                    city,
                    state,
                    cep,
                },
                specifications: {
                    rip,
                    area,
                    rooms,
                    parkingPlaces,
                },
            };

            await axios
                .post("/Propertie/createPropertie", property)
                .then((data) => {
                    setLink(data.data);
                    setModalOpened(true);
                })
                .catch((err) => console.log(err));

            setLoading(false);
        } catch (err) {
            console.log("Error: ", err);
            alert("Erro ao adicionar propriedade");
            setLoading(false);
        }
    };

    return (
        <>
            <SuccessModal modalOpened={modalOpened} link={link} />
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

                            <div class="flex items-center justify-center w-full">
                                <label
                                    for="dropzone-file"
                                    class="flex flex-col items-center justify-center w-full h-32 border-2 rounded-lg cursor-pointer bg-gray-5 border-black"
                                >
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg
                                            ariaHidden="true"
                                            class="w-10 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                            ></path>
                                        </svg>
                                        <input
                                            id="dropzone-file"
                                            type="file"
                                            className="flex text-sm text-gray-500"
                                            {...register("image", {
                                                required:
                                                    "Imagem do imóvel necessária",
                                            })}
                                        />
                                    </div>
                                </label>
                            </div>
                            {errors.image && (
                                <p className="text-red-500 text-sm">
                                    {errors.image.message}
                                </p>
                            )}
                        </div>

                        <div className={"flex flex-col justify-center w-full"}>
                            <p className="text-lg text-black mt-8">
                                Documento do imóvel{" "}
                                <span className="text-red-500 text-md">*</span>
                            </p>

                            <div class="flex items-center justify-center w-full">
                                <label
                                    for="dropzone-file"
                                    class="flex flex-col items-center justify-center w-full h-32 border-2 rounded-lg cursor-pointer bg-gray-5 border-black"
                                >
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg
                                            ariaHidden="true"
                                            class="w-10 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                            ></path>
                                        </svg>
                                        <input
                                            id="dropzone-file"
                                            type="file"
                                            className="flex text-sm text-gray-500"
                                            {...register("document", {
                                                required:
                                                    "Documento do imóvel necessário",
                                            })}
                                        />
                                    </div>
                                </label>
                            </div>
                            {errors.document && (
                                <p className="text-red-500 text-sm">
                                    {errors.document.message}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col justify-center w-full">
                            <p className="text-lg text-black mt-8">
                                Preço:{" "}
                                <span className="text-red-500 text-md">*</span>
                            </p>
                            <input
                                type={"number"}
                                placeholder={"R$ 156,500.00"}
                                className={
                                    "border-black border-2 px-4 py-2 rounded-lg w-full mt-2"
                                }
                                {...register("price", {
                                    required: "Indique o preço do imóvel",
                                })}
                            />
                            {errors.price && (
                                <p className="text-red-500 text-sm">
                                    {errors.price.message}
                                </p>
                            )}
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
                            {errors.type && (
                                <p className="text-red-500 text-sm">
                                    {errors.type.message}
                                </p>
                            )}
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
                            {errors.description && (
                                <p className="text-red-500 text-sm">
                                    {errors.description.message}
                                </p>
                            )}
                        </div>

                        <div className="w-full">
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
                            {errors.street && (
                                <p className="text-red-500 text-sm">
                                    {errors.street.message}
                                </p>
                            )}

                            <input
                                type={"text"}
                                placeholder={"Bairo"}
                                className={
                                    "border-black border-2 px-4 py-2 rounded-lg w-full mt-2"
                                }
                                {...register("neighborhood", {
                                    required: "Indique o Bairro do imóvel",
                                })}
                            />
                            {errors.neighborhood && (
                                <p className="text-red-500 text-sm">
                                    {errors.neighborhood.message}
                                </p>
                            )}

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
                            {errors.city && (
                                <p className="text-red-500 text-sm">
                                    {errors.city.message}
                                </p>
                            )}

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
                            {errors.state && (
                                <p className="text-red-500 text-sm">
                                    {errors.state.message}
                                </p>
                            )}

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
                            {errors.cep && (
                                <p className="text-red-500 text-sm">
                                    {errors.cep.message}
                                </p>
                            )}
                        </div>

                        <div className="w-full">
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
                            {errors.rip && (
                                <p className="text-red-500 text-sm">
                                    {errors.rip.message}
                                </p>
                            )}

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
                            {errors.area && (
                                <p className="text-red-500 text-sm">
                                    {errors.area.message}
                                </p>
                            )}

                            <input
                                type={"number"}
                                placeholder="Número de quartos / salas"
                                min={1}
                                max={100}
                                className={
                                    "border-black border-2 px-4 py-2 rounded-lg w-full mt-2"
                                }
                                {...register("rooms", {
                                    required:
                                        "Indique o número de quartos / salas",
                                })}
                            />
                            {errors.rooms && (
                                <p className="text-red-500 text-sm">
                                    {errors.rooms.message}
                                </p>
                            )}

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
                            {errors.parkingPlaces && (
                                <p className="text-red-500 text-sm">
                                    {errors.parkingPlaces.message}
                                </p>
                            )}
                        </div>

                        <input
                            type={"submit"}
                            disabled={loading}
                            value={
                                loading ? "Carregando..." : "Adicionar Imóvel"
                            }
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
