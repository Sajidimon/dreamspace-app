import { Outlet } from "react-router-dom";
import Navigation from "../../shared/navigation/Navigation";


const Main = () => {
    return (
        <div>
            <Navigation/>
            <Outlet/>
        </div>
    );
};

export default Main;