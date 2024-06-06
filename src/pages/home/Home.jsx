import { useContext } from "react";
import Carousel from "../../components/carousel/Carousel";
import CategorySection from "../../layouts/categorySection/CategorySection";
import RecentSection from "../../layouts/recentSection/RecentSection";
import { AuthContext } from "../../provider/AuthProvider";


const Home = () => {

    const { loading } = useContext(AuthContext)


    if (loading) {
        return <span className="loading mx-auto block my-52 loading-dots loading-lg"></span>;
    }

    return (
        <div>
            <Carousel />
            <CategorySection />
            <RecentSection/>
        </div>
    );
};

export default Home;