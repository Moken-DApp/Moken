import { useContext, useEffect, useState } from "react";
import { Trash } from "../assets/icons/Trash";
import { Symbol } from "../assets/Symbol";

export const Token = ({
    id,
    category,
    amount,
    address,
    price,

    linkDoc,
    linkImage,
    description,
    type,
    specification,
    acquired,
}) => {
    return (
        <div className="w-full">
            <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row">
                    <div className="mr-5  bg-black rounded-md p-8 w-fit justify-center items-center">
                        <Symbol width={300} className={"w-full"} />
                    </div>
                    <div className="mr-2">
                        <h1 className="text-md font-bold">
                            {category}
                            <br />
                            {specification.rip}
                        </h1>

                        <p className="text-xs text-slate-600 font-bold">
                            {address.street}, {address.number} - {address.city}
                        </p>
                        <h2 className="font-bold">
                            Valor: R$ {parseFloat(price).toFixed(2)}
                        </h2>
                    </div>
                </div>

                {acquired ? null : (
                    <div className="my-auto mx-2">
                        <Trash width={300} className={"w-full"} />
                    </div>
                )}
            </div>
            <br></br>

            <div className="mt-6"></div>
            <hr></hr>
            <div className="mt-6"></div>
        </div>
    );
};
