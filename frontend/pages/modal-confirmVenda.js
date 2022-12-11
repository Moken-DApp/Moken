import { Moken } from "../assets/icons/Moken";

const ConfirmVenda = () => {
    return (
        <div className="min-h-screen h-full w-full flex flex-col justify-center gap-4 moderat">
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
                    placeholder={"000.000.000-00"}
                    className={
                        "border-black border-2 px-4 py-2 rounded-lg w-11/12 mt-2"
                    }
                />
            </div>
            <div className="w-full flex justify-center">
                <div className="flex flex-col gap-2 items-center w-3/5 rounded-lg mt-12 border-2 border-dashed border-black">
                    <u className="text-xl font-bold mt-4">Observação</u>
                    <p className="text-sm w-11/12 text-center mb-4">O dado solicitado acima, têm como objetivo combater crimes como o de falsidade ideológica e lavagem de dinheiro</p>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <button className="bg-black w-4/5 rounded-md text-white h-12 mt-12">Continuar</button>
            </div>
        </div>
    )
}

export default ConfirmVenda;