import Head from "next/head";
import Link from "next/link";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Modal } from "./Modal";
import { useState } from "react";

export const Layout = ({ title, children, navbar = true, footer = true }) => {
    const [modalOpened, setModalOpened] = useState(false);

    return (
        <div>
            <Head>
                <title>{title ? `${title} | Moken` : "Moken"}</title>
            </Head>

            <Modal
                closeModal={() => setModalOpened(false)}
                opened={modalOpened}
            />
            <main className="min-h-screen h-full flex flex-col px-4 moderat">
                {navbar ? (
                    <Navbar openModal={() => setModalOpened(true)} />
                ) : null}

                {children}
            </main>

            {footer ? <Footer /> : null}
        </div>
    );
};
