import { useContext } from "react";
import { Context } from "../context";
import { Layout } from "../components/Layout";
import { Moken } from "../assets/Moken";
import Link from "next/link";

import { ethers } from "ethers";
import { Illustration } from "../assets/Illustration1";
import { useRouter } from "next/router";

const Login = () => {
    const router = useRouter();
    const { state, dispatch } = useContext(Context);

    const handleLogin = async () => {
        try {
            await window.ethereum.enable();

            const provider = new ethers.providers.Web3Provider(window.ethereum);

            const signer = provider.getSigner();
            const address = await signer.getAddress();

            const user = {
                wallet: address,
            };

            dispatch({
                type: "LOGGED_IN_USER",
                payload: user,
            });

            console.log("Logged and redirecting");
            router.push("/");
        } catch (error) {
            console.error("error", error);
        }
    };

    return (
        <Layout title="Login" navbar={false} footer={false}>
            <div className="w-full flex flex-row h-screen p-0">
                <div className="flex flex-col my-auto w-full md:w-1/3 md:mx-auto">
                    <Moken />

                    <h1 className="text-2xl my-8">
                        {state.user.wallet
                            ? `Que bom te ver \n por aqui, ${state.user.wallet.slice(
                                  0,
                                  7
                              )}...!`
                            : "Seja bem vindo à sua plataforma de gestão imobiliária"}
                    </h1>

                    <button
                        className="px-4 py-2 text-lg bg-black text-white rounded-md w-fit"
                        onClick={handleLogin}
                    >
                        Entrar
                    </button>

                    <Link className="mt-8 mb-2 text-lg" href="/">
                        Entrar com outra conta {">"}
                    </Link>
                    <Link className="text-lg" href="/">
                        Acesso para funcionários Públicos {">"}
                    </Link>
                </div>

                <div className="hidden md:w-2/3 border border-blue-500">
                    <Illustration className={"w-[80%] mx-auto h-full"} />
                </div>
            </div>
        </Layout>
    );
};

export default Login;
