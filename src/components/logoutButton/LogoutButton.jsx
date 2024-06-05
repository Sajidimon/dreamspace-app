import { Link } from "react-router-dom";


const LogoutButton = () => {
    return (
        <>
            <div className="mt-72">
                <Link to=''><button className='w-full py-2 bg-red-600 hover:bg-red-700 rounded'> Logout</button></Link>
            </div>
        </>
    );
};

export default LogoutButton;