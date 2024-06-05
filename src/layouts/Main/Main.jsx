import { Outlet } from "react-router-dom";
import Navigation from "../../shared/navigation/Navigation";
import Footer from "../../shared/footer/Footer";


const Main = () => {
    return (
        <div>
            <Navigation/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;