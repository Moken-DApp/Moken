import { useContext, useEffect, useState } from "react";

import { Illustration } from "../assets/Illustration1";
import { Illustration2 } from "../assets/Illustration2";
import { Layout } from "../components/Layout";
import { Context } from "../context";
import { useRouter } from "next/router";
import { Dropdown } from "../components/Dropdown";

import preview from "../assets/preview.png";
import { Property } from "../components/Property";
import { Modal } from "../components/Modal";

const Home = () => {
    const router = useRouter();
    const { state, dispatch } = useContext(Context);

    const [propertiesData, setPropertiesData] = useState([
        {
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
            price: "200.000,00",
        },
        {
            linkDoc:
                "https://ipfs.io/ipfs/QmUCod4D3uZcyhVa8mnuCY24gpKasLmdnptFd66MmkogBL",
            linkImage:
                "https://ipfs.io/ipfs/QmXQLFBZPi1XyDnTTP8WFQurRYFGfN1sKt8NV7HYCuVwkw",
            description:
                "Casa construída por Dom Pedro III após a independência do Brasil",
            type: "Casa",
            address: {
                street: "Rua Pd. Chico 654",
                neighborhood: "Centro",
                city: "Sorocaba",
                state: "São Paulo",
                cep: "05510920",
            },
            specification: {
                rip: "9701.23456.500-1",
                area: "214",
                rooms: "5",
                parkingPlaces: "2",
            },
            price: "35.000,00",
        },
    ]);

    return (
        <Layout openModal={() => setModalOpened(!modalOpened)}>
            <div className="flex flex-col justify-center items-center w-full md:w-2/5 md:mx-auto">
                <div className="w-full mt-4">
                    <Illustration width={300} className={"w-full"} />
                </div>

                <div className="flex flex-col justify-center items-center mt-8">
                    <p className="text-3xl font-bold">Escolha o seu imóvel</p>

                    <div className="flex flex-1 flex-row w-5/6 my-4">
                        <input
                            className="bg-white px-4 py-3 rounded-l-full text-sm shadow-md w-4/5"
                            placeholder="Busque por avenida"
                        />
                        <button
                            className="bg-black text-white rounded-r-full text-sm py-3 shadow-md w-1/5 text-center"
                            onClick={() => router.push("/propriedades")}
                        >
                            Buscar
                        </button>
                    </div>

                    <p className="w-2/3 text-center text-md">
                        Propriedades da União tokenizadas em{" "}
                        <span className="font-bold">diversas cidades</span> de todo o Brasil
                    </p>
                </div>

                <div className="flex flex-col items-center flex-1 w-full mt-16">
                    {propertiesData ? (
                        <>
                            <p className="text-2xl font-bold">
                                Recomendamos para você
                            </p>

                            <div
                                className="flex overflow-x-auto space-x-8 w-full my-4"
                                id="image-slider"
                            >
                                {propertiesData.map((property, index) => (
                                    <Property
                                        {...property}
                                        key={index}
                                        shrink={true}
                                    />
                                ))}
                            </div>
                        </>
                    ) : null}

                    <button
                        className="bg-black py-2 px-8 text-white rounded-md"
                        onClick={() => {
                            router.push("/propriedades");
                        }}
                    >
                        Ver {propertiesData ? "mais" : ""} propriedades
                    </button>
                </div>

                <div className="flex flex-col items-center flex-1 w-full mt-16">
                    <div className="w-full flex justify-center mt-4">
                        <Illustration2 width={300} className={"w-full"} />
                    </div>

                    <p className="text-2xl font-bold w-2/3 text-center">
                        Por que investir com a Moken?
                    </p>
                    {/* <p className="font-bold text-sm">
                        Conheça os serviços que você encontra na Moken:
                    </p>

                    <div className="my-8">Slider</div> */}

                    <div className="flex flex-col items-center text-center mt-4">
                        <p className="text-xs font-bold uppercase">
                            Passo a passo
                        </p>
                        <p className="text-xl font-bold">
                            Como é viver esse momento
                        </p>

                        <div className="mt-8 flex flex-col justify-center w-4/5">
                            <p className="font-bold mb-2">
                                Escolha o imóvel ideal
                            </p>
                            <p className="text-sm">
                            Fazemos a combinação perfeita de preço, localização e comodidades. Cada informação dos imóveis anunciados é conferida previamente para você. A visita pode ser presencial ou à distância por videochamada com o suporte de corretores parceiros.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-col justify-center w-4/5">
                            <p className="font-bold mb-2">
                                Confiança na decisão
                            </p>
                            <p className="text-sm">
                            Receba uma análise completa de preços para você fazer uma decisão mais segura. Tenha à disposição atendimento personalizado para facilitar a papelada, o processo de financiamento e a reforma do imóvel. É mais informação e transparência para sua compra.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-col justify-center w-4/5">
                            <p className="font-bold mb-2">Menos burocracia</p>
                            <p className="text-sm">
                                Com a Moken você pode gerenciar o seus imóveis na palma da sua, com a confiabilidade que so blockchain tem. Além da segurança ta tecnologia, os imóveis ofertados são custodiados pela União.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-col justify-center w-4/5">
                            <p className="font-bold mb-2">Tudo digital</p>
                            <p className="text-sm">
                            Comodidade é poder ter toda a emissão e análise de documentação pelo celular. Além disso, a elaboração do contrato e escritura também conta com assinatura pela telinha sem sair de casa. E se precisar de uma assessoria, estamos sempre à disposição por telefone.
                            </p>
                        </div>

                        <button
                            className="bg-black py-2 px-8 text-white rounded-md mt-8"
                            onClick={() => {
                                router.push("/propriedades");
                            }}
                        >
                            Ver mais propriedades
                        </button>
                    </div>
                </div>

                <div className="flex flex-col items-center flex-1 w-full my-16">
                    <p className="text-2xl font-bold mb-8">
                        Perguntas frequentes
                    </p>

                    <Dropdown
                        question={"O que é um Token?"}
                        answer={
                            "O token é um código numérico criado para garantir maior segurança na hora de fazer transações bancárias na internet. Ele assegura a autenticação de acessos online e foi originalmente criado para serviços de internet banking. Ele é disponibilizado por meio de um dispositivo físico que lembra um pendrive."
                        }
                    />

                    <Dropdown
                        question={"O que é Blockchain?"}
                        answer={
                            "O conceito de Blockchain está associado a um livro-razão, que registra as transações e o rastreamento de ativos em uma rede. É compartilhado e imutável, desta forma, facilita o processo de registro dessas transações."
                        }
                    />

                    <Dropdown
                        question={"Como a Moken funciona?"}
                        answer={
                            "A plataforma foi desenvolvida para transformar a gestão patrimonial da união, com o objetivo de se tornar um meio para a própria Secretaria do Patrimônio da União (SPU) ofertar seus imóveis ao público em forma de tokens. Os imóveis pertencentes a SPU serão cadastrados na plataforma e nesse momento são tokenizados, criando tokens que terão seus valores lastreados no respectivo imóvel. Os tokens serão vendidos de forma que, ao comprar um token, a pessoa tem direito à fração da posse do imóvel que ele representa."
                        }
                    />
                </div>
            </div>
        </Layout>
    );
};

export default Home;
