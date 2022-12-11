import { useContext, useEffect, useState } from "react";
import { Trash } from "../assets/icons/Trash";
import { Symbol } from "../assets/Symbol";

export const TokenCart = ({
    id,
    category,
    amount,
    address,
    price
}) => {
    return (
        <div>
            <div className="flex flex-row ">
                <div className="mr-5 object-right bg-black rounded-md p-8 w-fit">
                    <Symbol width={300} className={"w-full"} />
                </div>
                <div className="mr-2">
                    <h1 className="text-lg font-bold">{category}{id}</h1>
                    <h2 className="font-bold">{amount * 100}% do imóvel</h2>
                    <p className="text-xs text-slate-600 font-bold">{address}</p>
                    <h2 className="font-bold">Valor: R$ {price}</h2>
                </div>
                <div className="mt-10">
                    <Trash width={300} className={"w-full"} />
                </div>
                
            </div>
            <br></br>
            <h2 className="font-bold">Aviso: Este token representa {amount * 100}% do imóvel</h2>
            <div className="mt-6"></div>
            <hr></hr>
            <div className="mt-6"></div>
        </div>
    );
};