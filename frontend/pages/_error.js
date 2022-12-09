import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Layout } from "../components/Layout";

import image from "../assets/404.png";

const FourOhFour = () => {
    return (
        <Layout navbar={false} footer={false}>
            <div className="flex flex-col flex-1 justify-center items-center">
                <Image src={image} width={256} alt="404" />

                <p className="text-black text-2xl mb-8">
                    Essa página não existe!
                </p>

                <Link
                    className="bg-black text-white p-2 rounded-md text-lg"
                    href={"/"}
                >
                    Go back to home
                </Link>
            </div>
        </Layout>
    );
};

export default FourOhFour;
