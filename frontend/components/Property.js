import Image from "next/image";
import Link from "next/link";
import { Coin } from "../assets/Coin";

export const Property = ({
    image,
    category,
    price,
    address,
    area,
    details,
    amount,
    id,
}) => {
    return (
        <Link
            className="bg-white border-2 border-black rounded-2xl flex-shrink-0 w-2/3"
            href={`/property/${id}`}
        >
            <div className="p-2 flex flex-row justify-between items-center">
                <Coin width={16} />

                <p>#{id}</p>
            </div>

            <Image src={image} alt="property" />

            <div className="p-4">
                <p className="text-sm text-gray-600">{category}</p>
                <p className="text-xl mb-4">
                    A partir de:{" "}
                    <span className="text-2xl font-bold">R$ {price}</span>
                </p>

                <p className="text-gray-700 font-bold mb-4">{address}</p>

                <p className="text-md mb-2">
                    <span>{area}m² </span>
                    {details.map((detail) => `${detail} `)}
                </p>
                <p className="italic font-bold text-sm">
                    Esse token representa {amount * 100}% da propriedade total.
                </p>
            </div>
        </Link>
    );
};
