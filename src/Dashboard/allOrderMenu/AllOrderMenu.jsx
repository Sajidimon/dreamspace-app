import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import OrderCard from "../../components/orderCard/OrderCard";



const AllOrderMenu = () => {

    const { user, loading } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    //show all products;

    useEffect(() => {
        if (user?.email) {
            fetch(`${import.meta.env.VITE_API_URL}/orders?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setOrders(data)
                })
        }
    }, [user?.email])


    if (loading) {
        return <span className="loading mx-auto block mt-52 loading-dots loading-lg"></span>;
    }

    return (
        <>
        
            {
                Array.isArray(orders) && orders.length > 0 ? <>
                
                    <div className="m-5">
                        <div className="flex gap-4 mb-5">
                            <h2 className="text-black text-2xl font-bold">Total Orders: {orders.length}</h2>
                        </div>
                        <div className="overflow-x-auto border p-3 text-black">
                            <table className="table">
                                <thead className="text-black text-base">
                                    <tr>
                                        <th>Product</th>
                                        <th>Customer Name</th>
                                        <th>Number</th>
                                        <th>Address</th>
                                        <th>Date</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        orders.map(order => <OrderCard key={order._id} order={ order} orders={orders} setOrders={setOrders} />)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                
                </> : <p className="my-16 text-black font-bold text-center">No item found in Your order.</p>
        }
        
        </>
    );
};

export default AllOrderMenu;