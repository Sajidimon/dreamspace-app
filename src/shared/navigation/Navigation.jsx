
import { FaCartPlus } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";



const Navigation = () => {

    const navlink = 
        <>
        
            <Link to='/product-category'><li><a>Table Lamp</a></li></Link>
            <Link to='/single-product'> <li><a>single product</a></li></Link>
            <Link to='/shop'> <li><a>Shop</a></li></Link>
           
        
        </>
   
    return (
        <div>
            <div className="navbar bg-[#515151] text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                           {navlink}
                        </ul>
                    </div>
                    <Link to='/'><a className="btn btn-ghost text-xl">DreamSpace</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/cart'><a className="btn bg-[#515151] border-none text-white"><FaCartPlus />cart</a></Link>
                    <Link to='/admin-login'><a className="btn bg-[#515151] border-none text-white"><BiLogIn />Login</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Navigation;