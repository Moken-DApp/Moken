import { useContext, useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { Trash } from "../assets/icons/Trash";
import { Symbol } from "../assets/Symbol";
import { TokenCart } from "../components/TokenCart";
import { Moken } from "../assets/icons/Moken";
import { useRouter } from "next/router";

const SuccessModal = ({ modalOpened }) => {
    const router = useRouter();

    return modalOpened ? (
        <div className="min-h-screen h-full w-full flex flex-col justify-center gap-4 moderat absolute items-center">
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
        </div>
    ) : null;
};

const Modal = ({ isOpened, setSuccess }) => {
    const [cpf, setCpf] = useState("");
    const router = useRouter();

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
                        onChange={(e) => setCpf(e.target.value)}
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
                    <button
                        className="bg-black w-4/5 rounded-md text-white h-12 mt-12"
                        onClick={() =>
                            cpf.length == 11
                                ? setSuccess()
                                : alert("CPF Invalido")
                        }
                    >
                        Continuar
                    </button>
                </div>
            </div>
        </div>
    ) : null;
};

const Cart = () => {
    const [token, setToken] = useState([
        {
            category: "Apartamento",
            price: 145630.46,
            address:
                "Av. Prof. Almeida Prado, 520 - Butantã, São Paulo - SP, 05508-070",
            area: 342,
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
        },
    ]);

    const [isOpened, setIsOpened] = useState(false);
    const [success, setSuccess] = useState(false);

    const router = useRouter();

    return (
        <>
            <SuccessModal isOpened={success} modalOpened={success} />
            <Modal
                isOpened={isOpened}
                setSuccess={() => {
                    setSuccess(true);
                    setIsOpened(false);
                }}
            />
            <Layout navbar={isOpened ? false : success ? false : true}>
                <div
                    className={`flex flex-col justify-center w-full md:w-2/5 md:mx-auto ${
                        isOpened ? "hidden" : success ? "hidden" : ""
                    }`}
                >
                    <p className="text-2xl font-bold">Seus Carrinho</p>
                    <br className="bg-black"></br>
                    <hr></hr>
                    <br></br>
                    <div className="flex flex-row justify-between mb-4 w-full">
                        <p className="text-xs text-slate-600 font-bold">
                            1 item
                        </p>
                        <p className="text-xs text-slate-600 font-bold">
                            Limpar tudo
                        </p>
                    </div>

                    {token.map((token, index) => (
                        <TokenCart {...token} key={index} shrink={true} />
                    ))}

                    <div className="flex flex-row justify-between">
                        <div className="">
                            <h1 className="font-bold text-lg mt-3">
                                Patrimônio
                            </h1>
                        </div>

                        <div className=" text-end">
                            <h2 className="font-bold ">
                                {parseFloat(token[0].price).toFixed(2) / 0.9789}{" "}
                                Celo
                            </h2>
                            <p className="text-sm text-slate-600 font-bold">
                                R$ {parseFloat(token[0].price).toFixed(2)}
                            </p>
                        </div>
                    </div>

                    <button
                        className="bg-black py-2 px-8 text-white rounded-md mt-4 border-2 border-black"
                        onClick={() => {
                            setIsOpened(true);
                        }}
                    >
                        Finalizar compra
                    </button>
                    <button
                        className="bg-white py-2 px-8 text-black font-bold rounded-md mt-4 border-2 border-black cursor-pointer"
                        onClick={() => {
                            router.push("/propriedades");
                        }}
                    >
                        Continuar comprando
                    </button>
                    <div className="mt-6"></div>
                </div>
            </Layout>
        </>
    );
};

export default Cart;
