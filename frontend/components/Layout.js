import Head from "next/head";
import Link from "next/link";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Modal } from "./Modal";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";

import axios from "../axios";

export const Layout = ({ title, children, navbar = true, footer = true }) => {
    const [modalOpened, setModalOpened] = useState(false);

    const router = useRouter();

    const { state, dispatch } = useContext(Context);

    const verifyLoggedIn = async () => {
        let token = window.sessionStorage.getItem("token");

        console.log(token);

        state.user
            ? state.user.isAdmin
                ? await axios
                      .get("/Admin/Infos", {
                          headers: {
                              Authorization: `Bearer ${token}`,
                          },
                      })
                      .then((data) => {
                          console.log(data);
                          dispatch({
                              type: "LOGGED_IN_USER",
                              payload: {
                                  name: data.data.name,
                                  email: data.data.email,
                                  wallet: data.data.wallet,
                                  isAdmin: true,
                              },
                          });
                      })
                      .catch((err) => router.push("/login"))
                : console.log(state.user) &&
                  (await axios
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
                      })
                      .catch((err) => router.push("/login")))
            : null;
    };

    useEffect(() => {
        state.user.wallet ?? verifyLoggedIn();
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
                className={`flex flex-col px-4 moderat ${
                    modalOpened ? "hidden" : ""
                }`}
            >
                {navbar ? (
                    <Navbar openModal={() => setModalOpened(true)} />
                ) : null}

                {children}
            </main>

            {footer ? <Footer /> : null}
        </div>
    );
};
