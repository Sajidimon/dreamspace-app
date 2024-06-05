import { BiCategory } from 'react-icons/bi';
import { FaExternalLinkAlt, FaHome, FaProductHunt } from 'react-icons/fa';
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
                                <Link to=''> <button>All product</button></Link>
                            </li>
                            <li>
                                <Link to='/dashboard/addProduct'> <button>Add new product</button></Link>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary><BiCategory />Product Category</summary>
                        <ul>
                            <li>
                                <Link to='/dashboard/allCategory'> <button>All Category</button></Link>
                            </li>
                            <li>
                                <Link to='/dashboard/addCategory'> <button>Add new category</button></Link>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
        </>
    );
};

export default DashboardMenu;