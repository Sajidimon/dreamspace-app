import { FaExternalLinkAlt, FaFirstOrder, FaHome, FaProductHunt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const DashboardMenu = () => {
    return (
        <>

            <ul className="menu rounded-box">
                <li>
                    <Link to='/'><FaExternalLinkAlt /><button className="text-left">Visit site</button></Link>
                </li>
                <li>
                    <Link to=''><FaHome /><button className="text-left">Admin home</button></Link>
                </li>
                <li>
                    <details>
                        <summary><FaProductHunt />Products</summary>
                        <ul>
                            <li>
                                <Link to='/admin-dashboard/allProduct'> <button>All product</button></Link>
                            </li>
                            <li>
                                <Link to='/admin-dashboard/addProduct'> <button>Add product</button></Link>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary><FaFirstOrder />Orders</summary>
                        <ul>
                            <li>
                                <Link to='/admin-dashboard/allOrder'> <button>All order</button></Link>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <Link to='/admin-dashboard/make-admin'><FaUser /><button className="text-left">Make admin</button></Link>
                </li>
            </ul>
        </>
    );
};

export default DashboardMenu;