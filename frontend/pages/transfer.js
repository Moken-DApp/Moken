import { useContext, useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { Symbol } from "../assets/Symbol";
import { Token } from "../components/Token";
import { Context } from "../context";
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

const Transfer = () => {
    const { state, dispatch } = useContext(Context);
    const [transfer, setTransfer] = useState([
        {
            category: "Apartamento",
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

    const [success, setSuccess] = useState(false);

    const [cpfSender, setCpfSender] = useState("");
    const [walletSender, setWalletSender] = useState(state.user.wallet);
    const [cpfReceiver, setCpfReceiver] = useState("");
    const [walletReceiver, setWalletReceiver] = useState("");

    return (
        <>
            <SuccessModal modalOpened={success} />
            <Layout navbar={success ? false : true}>
                <div
                    className={`flex flex-col justify-center w-full md:w-2/5 md:mx-auto ${
                        success ? "hidden" : ""
                    }`}
                >
                    <p className="text-2xl font-bold">Transferir Token</p>
                    <br className="bg-black"></br>
                    <hr></hr>
                    <br></br>

                    {transfer.map((transfer, index) => (
                        <Token {...transfer} key={index} shrink={true} />
                    ))}

                    <div className="flex flex-col ">
                        <p className="font-bold mb-6 flex flex-col  justify-center items-center">
                            Colocar à venda
                        </p>
                        <label>Carteira do Remetente</label>
                        <input
                            className="bg-gray-300 border-2 border-gray-400 rounded-md mb-6 px-4 py-2"
                            type="text"
                            disabled={true}
                            value={state.user.wallet}
                            placeholder="0x0000000000000"
                        ></input>
                        <label>CPF/CNPJ do Remetente</label>
                        <input
                            className="bg-white border-2 border-black rounded-md mb-6 px-4 py-2"
                            type="text"
                            value={cpfSender}
                            onChange={(e) => setCpfSender(e.target.value)}
                            placeholder="000.000.000-00"
                        ></input>
                        <label>Carteira do Destinatário</label>
                        <input
                            className="bg-white border-2 border-black rounded-md mb-6 px-4 py-2"
                            type="text"
                            value={walletReceiver}
                            onChange={(e) => setWalletReceiver(e.target.value)}
                            placeholder="0x0000000000000"
                        ></input>
                        <label>CPF/CNPJ do Remetente</label>
                        <input
                            className="bg-white border-2 border-black rounded-md mb-6 px-4 py-2"
                            value={cpfReceiver}
                            onChange={(e) => setCpfReceiver(e.target.value)}
                            type="text"
                            placeholder="000.000.000-00"
                        ></input>
                    </div>

                    <button
                        className="bg-black py-2 px-8 text-white rounded-md mt-4 mb-10 border-2 border-black"
                        onClick={() => {
                            if (
                                cpfSender &&
                                cpfReceiver &&
                                walletReceiver &&
                                state.user.wallet
                            ) {
                                setSuccess(true);
                            } else {
                                alert("Preencha todos os campos");
                            }
                        }}
                    >
                        Transferir Token
                    </button>
                </div>
            </Layout>
        </>
    );
};

export default Transfer;
