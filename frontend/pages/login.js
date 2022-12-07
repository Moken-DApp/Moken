import { useContext } from "react";
import { Context } from "../context";
import { Layout } from "../components/Layout";
import { Moken } from "../assets/Moken";
import Link from "next/link";

import { ethers } from "ethers";
import { HomeIllus } from "../assets/IllustrationHome";

const Login = () => {
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
        } catch (error) {
            console.error("error", error);
        }
    };

    console.log("state.user.wallet", state.user.wallet);

    return (
        <Layout title="Login" navbar={false}>
            <div className="w-full flex flex-row border border-emerald-500 h-screen p-0">
                <div className="flex flex-col my-auto w-full md:w-1/3 md:mx-auto border border-red-500">
                    <Moken />

                    <h1 className="text-2xl my-8">
                        Que bom te ver
                        <br />
                        por aqui
                        {state.user.wallet
                            ? `, ${state.user.wallet.slice(0, 7)}...`
                            : ""}
                        !
                    </h1>

                    <button
                        className="px-4 py-2 text-lg bg-black text-white rounded-md w-fit"
                        onClick={handleLogin}
                    >
                        Entrar
                    </button>

                    {!state.user.wallet ? (
                        <p className="mt-4">
                            Faça login com sua carteira para acessar sua conta!
                        </p>
                    ) : null}

                    <Link className="font-semibold mt-8 mb-2 text-lg" href="/">
                        Entrar com outra conta {">"}
                    </Link>
                    <Link className="font-semibold text-lg" href="/">
                        Iniciar novo cadastro {">"}
                    </Link>
                </div>

                <div className="hidden md:w-2/3 border border-blue-500">
                    <HomeIllus className={"w-[80%] mx-auto h-full"} />
                </div>
            </div>
        </Layout>
    );
};

export default Login;
