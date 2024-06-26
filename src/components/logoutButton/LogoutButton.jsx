import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const LogoutButton = () => {

    const { logout } = useContext(AuthContext);

    const handleSignout = () => {
        logout()
            .then(() => {
            })
            .catch(error => console.log(error))
    }


    return (
        <>
            <div>
                <Link to='/admin-login'><button onClick={handleSignout} className='w-full p-2 bg-red-600 hover:bg-red-700 rounded'> Logout</button></Link>
            </div>
        </>
    );
};

export default LogoutButton;