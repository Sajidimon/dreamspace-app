import Carousel from "../../components/carousel/Carousel";
import CategorySection from "../../layouts/categorySection/CategorySection";
import RecentSection from "../../layouts/recentSection/RecentSection";


const Home = () => {
    return (
        <div>
            <Carousel />
            <CategorySection />
            <RecentSection/>
        </div>
    );
};

export default Home;