import Head from "next/head";
import { Navbar } from "./Navbar";

export const Layout = ({ title, children, navbar = true }) => {
    return (
        <div>
            <Head>
                <title>{title ? `${title} | Moken` : "Moken"}</title>
            </Head>

            <main className="min-h-screen h-full flex flex-col px-4 moderat bg-[#F5F5F5]">
                {navbar ? <Navbar /> : null}

                {children}
            </main>
        </div>
    );
};
