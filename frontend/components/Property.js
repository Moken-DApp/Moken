import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Coin } from "../assets/icons/Coin";

import preview from "../assets/preview.png";

export const Property = ({
    linkImage,
    description,
    type,
    address,
    specification,
    shrink,
    price,
}) => {
    const router = useRouter();

    return (
        <button
            className={`bg-white border-2 border-black rounded-2xl ${
                shrink ? "flex-shrink-0 w-2/3" : "w-full"
            }`}
            onClick={() => router.push(`/propriedades/${specification.rip}`)}
        >
            <div className="p-2 flex flex-row justify-between items-center">
                <Coin wripth={20} />

                <p># {specification.rip}</p>
            </div>

            {linkImage ? (
                <Image
                    src={linkImage}
                    loader={() => linkImage}
                    alt="Picture of the author"
                    width={300}
                    height={200}
                    layout="responsive"
                />
            ) : (
                <Image
                    src={preview}
                    alt="Picture of the author"
                    width={300}
                    height={200}
                    layout="responsive"
                />
            )}

            <div className="p-4">
                <p className="text-sm text-gray-600">{type}</p>
                <p className="text-xl mb-4">
                    A partir de:{" "}
                    <span className="text-2xl font-bold">R$ {price}</span>
                </p>

                <p className="text-gray-700 font-bold mb-4">
                    {address.street}, {address.neighborhood}, {address.city},{" "}
                    {address.state}
                </p>

                <p className="text-md mb-2">
                    <span>{specification.area}m²</span>, {specification.rooms} ,{" "}
                    {specification.parkingPlaces}
                </p>
                <p className="italic font-bold text-sm">{description}</p>
            </div>
        </button>
    );
};
