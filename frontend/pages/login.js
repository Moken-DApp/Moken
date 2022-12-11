import { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import { Layout } from "../components/Layout";
import { Moken } from "../assets/icons/Moken";
import Link from "next/link";
import { Illustration } from "../assets/Illustration1";

import { ethers } from "ethers";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import axios from "../utils/axios";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const router = useRouter();
    const { state, dispatch } = useContext(Context);

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            setMetamask(true);
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            state.user.wallet ? router.push("/") : null;
        }, 1500);
    }, [router, state.user.wallet]);

    const [metamask, setMetamask] = useState(false);
    const [loggingIn, setloggingIn] = useState(false);

    const handleLogin = async (formData) => {
        setloggingIn(true);

        window.sessionStorage.clear();

        if (!isAdmin) {
            if (metamask) {
                try {
                    await window.ethereum.enable();

                    const provider = new ethers.providers.Web3Provider(
                        window.ethereum
                    );

                    const signer = provider.getSigner();
                    const address = await signer.getAddress();

                    axios
                        .post("/User/saveWallet", {
                            wallet: address,
                        })
                        .then((data) => {
                            window.sessionStorage.setItem("token", data.data);

                            dispatch({
                                type: "LOGGED_IN_USER",
                                payload: {
                                    wallet: address,
                                    token: data.token,
                                },
                            });

                            router.push("/");
                        })
                        .catch(() => alert("Requisicao falhou"));

                    setloggingIn(false);
                } catch (error) {
                    console.error("error", error);
                    setloggingIn(false);
                }
            }
        } else {
            const { email, password } = formData;

            try {
                axios
                    .post("/Admin/Login", {
                        email: email,
                        senha: password,
                    })
                    .then((data) => {
                        window.sessionStorage.setItem("token", data.data.token);
                        window.sessionStorage.setItem("isAdmin", true);

                        router.push("/");
                    })
                    .catch((err) => {
                        setloggingIn(false);
                        console.log(err);
                    });
            } catch (err) {
                console.error(err);
            }
        }
    };

    const toggleAdminLoginForm = () => {
        setIsAdmin(!isAdmin);
    };

    if (metamask) {
        return (
            <Layout title="Login" navbar={false} footer={false}>
                <div className="w-full flex flex-row h-screen p-0">
                    <div className="flex flex-col my-auto w-full md:w-1/3 md:mx-auto">
                        <Moken />

                        <h1 className="text-2xl mt-8">
                            {!state.user.isAdmin
                                ? state.user.wallet
                                    ? `Que bom te ver \n por aqui, ${state.user.wallet.slice(
                                          0,
                                          7
                                      )}...!`
                                    : "Seja bem vindo à sua plataforma de gestão imobiliária"
                                : "Seja bem vindo à sua plataforma de gestão imobiliária"}
                        </h1>

                        {isAdmin ? (
                            <div className="mb-4">
                                <p className="text-gray-500 text-lg">
                                    Faça login com sua conta da Secretaria do
                                    Patrimônio da União para acessar a
                                    plataforma
                                </p>
                            </div>
                        ) : null}

                        {isAdmin ? (
                            <form onSubmit={handleSubmit(handleLogin)}>
                                <div className="w-4/5 mb-4">
                                    <input
                                        type={"email"}
                                        placeholder="email@spu.gov.br"
                                        {...register("email", {
                                            required: "Email obrigatório",
                                            // pattern: {
                                            //     value: /^[A-Z0-9._%+-]+@spu.gov.br$/i,
                                            //     message:
                                            //         "invalid email address",
                                            // },
                                        })}
                                        className={`w-full px-4 py-2 text-lg rounded-lg border shadow-lg ${
                                            errors.email
                                                ? "border-red-500"
                                                : "border-[rgba(0,0,0,0.25)]"
                                        }`}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                <div className="w-4/5 mb-4">
                                    <input
                                        type={"password"}
                                        placeholder="Sua senha de acesso"
                                        disabled={loggingIn}
                                        {...register("password", {
                                            required: "Senha obrigatória",
                                        })}
                                        className={`w-full px-4 py-2 text-lg rounded-lg border shadow-lg ${
                                            errors.email
                                                ? "border-red-500"
                                                : "border-[rgba(0,0,0,0.25)]"
                                        }`}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">
                                            Senha obrigatória!
                                        </p>
                                    )}
                                </div>

                                <input
                                    type={"submit"}
                                    value={loggingIn ? "Entrando..." : "Entrar"}
                                    className={`px-4 py-2 text-lg ${
                                        !loggingIn ? "bg-black" : "bg-gray-400"
                                    } text-white rounded-md w-fit`}
                                />
                            </form>
                        ) : (
                            <button
                                className={`px-4 py-2 text-lg ${
                                    !loggingIn ? "bg-black" : "bg-gray-400"
                                } text-white rounded-md w-fit mt-8`}
                                onClick={handleLogin}
                                disabled={loggingIn}
                            >
                                {!loggingIn ? "Entrar" : "Entrando..."}
                            </button>
                        )}

                        <button
                            className="mt-8 mb-2 text-lg text-start"
                            onClick={() =>
                                dispatch({ type: "LOGGED_OUT_USER" })
                            }
                        >
                            Entrar com outra conta {">"}
                        </button>
                        <button
                            className="text-lg text-start"
                            onClick={toggleAdminLoginForm}
                        >
                            {!isAdmin
                                ? "Acesso para funcionários Públicos >"
                                : "Acessar como usuário >"}
                        </button>
                    </div>

                    <div className="hidden md:w-2/3 border border-blue-500">
                        <Illustration className={"w-[80%] mx-auto h-full"} />
                    </div>
                </div>
            </Layout>
        );
    } else {
        return (
            <Layout navbar={false} footer={false}>
                <div className="flex flex-1 flex-col justify-center items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="256"
                        viewBox="0 0 212 189"
                    >
                        <g fill="none" fillRule="evenodd">
                            <polygon
                                fill="#CDBDB2"
                                points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"
                            />
                            <polygon
                                fill="#CDBDB2"
                                points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875"
                                transform="matrix(-1 0 0 1 256.5 0)"
                            />
                            <polygon
                                fill="#393939"
                                points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"
                            />
                            <polygon
                                fill="#F89C35"
                                points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"
                            />
                            <polygon
                                fill="#F89D35"
                                points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
                            />
                            <polygon
                                fill="#D87C30"
                                points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
                            />
                            <polygon
                                fill="#EA8D3A"
                                points="46.125 101.813 65.25 119.813 65.25 137.813"
                            />
                            <polygon
                                fill="#F89D35"
                                points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
                            />
                            <polygon
                                fill="#EB8F35"
                                points="65.25 138.375 60.75 173.25 90.563 152.438"
                            />
                            <polygon
                                fill="#EA8E3A"
                                points="92.25 102.375 95.063 150.188 86.625 125.719"
                            />
                            <polygon
                                fill="#D87C30"
                                points="39.375 138.938 65.25 138.375 60.75 173.25"
                            />
                            <polygon
                                fill="#EB8F35"
                                points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
                            />
                            <polygon
                                fill="#E8821E"
                                points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
                            />
                            <polygon
                                fill="#DFCEC3"
                                points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625"
                            />
                            <polygon
                                fill="#DFCEC3"
                                points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625"
                                transform="matrix(-1 0 0 1 272.25 0)"
                            />
                            <polygon
                                fill="#393939"
                                points="70.313 112.5 64.125 125.438 86.063 119.813"
                                transform="matrix(-1 0 0 1 150.188 0)"
                            />
                            <polygon
                                fill="#E88F35"
                                points="12.375 .563 88.875 58.5 75.938 27"
                            />
                            <path
                                fill="#8E5A30"
                                d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
                            />
                            <g transform="matrix(-1 0 0 1 211.5 0)">
                                <polygon
                                    fill="#F89D35"
                                    points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
                                />
                                <polygon
                                    fill="#D87C30"
                                    points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
                                />
                                <polygon
                                    fill="#EA8D3A"
                                    points="46.125 101.813 65.25 119.813 65.25 137.813"
                                />
                                <polygon
                                    fill="#F89D35"
                                    points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
                                />
                                <polygon
                                    fill="#EB8F35"
                                    points="65.25 138.375 60.75 173.25 90 153"
                                />
                                <polygon
                                    fill="#EA8E3A"
                                    points="92.25 102.375 95.063 150.188 86.625 125.719"
                                />
                                <polygon
                                    fill="#D87C30"
                                    points="39.375 138.938 65.25 138.375 60.75 173.25"
                                />
                                <polygon
                                    fill="#EB8F35"
                                    points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
                                />
                                <polygon
                                    fill="#E8821E"
                                    points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
                                />
                                <polygon
                                    fill="#393939"
                                    points="70.313 112.5 64.125 125.438 86.063 119.813"
                                    transform="matrix(-1 0 0 1 150.188 0)"
                                />
                                <polygon
                                    fill="#E88F35"
                                    points="12.375 .563 88.875 58.5 75.938 27"
                                />
                                <path
                                    fill="#8E5A30"
                                    d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
                                />
                            </g>
                        </g>
                    </svg>
                    <p className="text-2xl font-bold my-4">
                        A extensão da Metamask é obrigatória para o uso da
                        plataforma.
                    </p>
                    <p>
                        Para adquirir essa extensão acesse{" "}
                        <Link
                            href={"https://metamask.io"}
                            className={"text-blue-500 underline"}
                            target="_blank"
                        >
                            https://metamask.io
                        </Link>{" "}
                        e selecione o seu navegador ou sistema operacional!
                    </p>
                </div>
            </Layout>
        );
    }
};

export default Login;
