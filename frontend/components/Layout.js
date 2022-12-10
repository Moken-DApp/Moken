import Head from "next/head";
import Link from "next/link";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Modal } from "./Modal";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";

import axios from "../axios";

export const Layout = ({
    title,
    children,
    navbar = true,
    footer = true,
    className = "",
}) => {
    const [modalOpened, setModalOpened] = useState(false);

    const router = useRouter();

    const { state, dispatch } = useContext(Context);

    const verifyLoggedIn = async (token, isAdmin) => {
        state.user
            ? isAdmin
                ? await axios
                      .get("/Admin/Infos", {
                          headers: {
                              Authorization: `Bearer ${token}`,
                          },
                      })
                      .then((data) => {
                          dispatch({
                              type: "LOGGED_IN_USER",
                              payload: {
                                  name: data.data.name,
                                  email: data.data.email,
                                  wallet: data.data.wallet,
                                  isAdmin: true,
                              },
                          });

                          console.log(data, token, isAdmin);
                      })
                      .catch((err) => router.push("/login"))
                : await axios
                      .get("/User/verifyWallet", {
                          headers: {
                              Authorization: `Bearer ${token}`,
                          },
                      })
                      .then((data) => {
                          dispatch({
                              type: "LOGGED_IN_USER",
                              payload: {
                                  wallet: data.data,
                              },
                          });
                          console.log(data.data, token);
                      })
                      .catch((err) => router.push("/login"))
            : null;
    };

    let token, isAdmin;

    useEffect(() => {
        token = window.sessionStorage.getItem("token");
        isAdmin = window.sessionStorage.getItem("isAdmin");

        state.user.wallet ?? verifyLoggedIn(token, isAdmin);
    }, []);

    return (
        <div>
            <Head>
                <title>{title ? `${title} | Moken` : "Moken"}</title>
            </Head>

            <Modal
                closeModal={() => setModalOpened(false)}
                opened={modalOpened}
            />
            <main
                className={
                    `flex flex-col px-4 moderat min-h-screen ${
                        modalOpened ? "hidden" : ""
                    } ` + className
                }
            >
                {navbar ? (
                    <Navbar
                        openModal={() => setModalOpened(true)}
                        isAdmin={isAdmin}
                    />
                ) : null}

                {children}
            </main>

            {footer ? <Footer /> : null}
        </div>
    );
};
