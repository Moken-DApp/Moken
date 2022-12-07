import { HomeIllus } from "../assets/IllustrationHome";
import { Layout } from "../components/Layout";

const Home = () => {
    return (
        <Layout>
            <div className="w-full mt-4">
                <HomeIllus width={300} className={"w-full"} />
            </div>
        </Layout>
    );
};

export default Home;
