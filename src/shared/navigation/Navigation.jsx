
import { FaCartPlus } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import LogoutButton from "../../components/logoutButton/LogoutButton";



const Navigation = () => {

    const { user } = useContext(AuthContext)
    const [products, setProducts] = useState(null);

    //show all products;

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])


    const navlink =
        <>

            {
                Array.isArray(products) && <>

                    {
                        products.slice(4, 6).map(product => <li key={product._id}>
                            <Link to={`/products/category/${product.category}`}><a>{product.category}</a></Link>
                        </li>)
                    }

                </>
            }

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
                    {
                        user && user.email ? (
                            <LogoutButton />
                        ) : (
                            <Link to='/admin-login'>
                                <button className="btn bg-[#515151] border-none text-white">
                                    <BiLogIn />
                                    Login
                                </button>
                            </Link>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default Navigation;