import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import CartCollection from "../../components/cartCollection/CartCollection";

const Cart = () => {

    const { user, loading } = useContext(AuthContext);
    const [carts, setCarts] = useState([]);


    //show all cart item;

    useEffect(() => {
        if (user?.email) {
            fetch(`${import.meta.env.VITE_API_URL}/carts?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setCarts(data)
                })
        }
    }, [user?.email])

    // Calculate subtotal
    const calculateSubtotal = () => {
        return carts.reduce((acc, cart) => acc + (parseFloat(cart.price) || 0), 0);
    };

    const subtotal = calculateSubtotal();

    if (loading) {
        return <span className="loading mx-auto block mt-32 loading-dots loading-lg"></span>;
    }

    return (
        <>
        
            {
                Array.isArray(carts) && carts.length > 0 ? <>
                    <div className="md:grid md:grid-cols-3 gap-3 my-20 mx-10 text-black">
                        <div className="col-span-2">
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead className="text-black text-lg">
                                        <tr>
                                            <th>PRODUCT</th>
                                            <th>PRICE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {carts.map(cart => <CartCollection key={cart._id} cart={cart} carts={carts} setCarts={setCarts} />)}      
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="border-2 border-black text-black p-3 mt-5">
                            <h2 className="text-lg font-bold underline">Total Cart item: {carts.length} </h2>
                            <div className="flex justify-between my-5">
                                <h2>Subtotal</h2>
                                <h2>{ subtotal} tk</h2>
                            </div>
                            <div className="text-center">
                                <Link to='/checkout'><p><button className="btn btn-outline btn-primary btn-sm w-full mt-5">Proceed to checkout</button></p></Link>
                                <Link to='/'><p><button className="btn btn-primary btn-sm w-full mt-3 mb-5">Continue to shopping</button></p></Link>
                            </div>
                        </div>
                    </div>
                
                </> : <p className="my-16 text-black font-bold text-center">No item found in Your cart.</p>
            }
        
        
        </>
    );
};

export default Cart;