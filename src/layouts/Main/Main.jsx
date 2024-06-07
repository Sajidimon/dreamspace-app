import { Outlet } from "react-router-dom";
import Navigation from "../../shared/navigation/Navigation";
import Footer from "../../shared/footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Main = () => {

    const { loading } = useContext(AuthContext)


    if (loading) {
        return <span className="loading mx-auto block my-52 loading-dots loading-lg"></span>;
    }
    return (
        <div>
            <Navigation/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;