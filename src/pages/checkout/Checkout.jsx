
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { saveOrders } from '../../api/order';

const Checkout = () => {

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

    const handlecheckout = event => {
        event.preventDefault();
        const form = event.target;
        const customerName = form.name.value;
        const customerNumber = form.number.value;
        const customerAddress = form.address.value;
        const cartItems = carts;
        const total = subtotal
        const email = user?.email

        const orderDate = new Date().toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });


        const orderInfo = {
            email,
            customerName,
            customerNumber,
            customerAddress,
            orderDate,
            cartItems,
            total
            
        }

        saveOrders(orderInfo);

        //// reset form fields
        form.reset();
    }


    return (
        <div className='mx-3'>
            <div className="min-h-screen bg-[#C8F3E3] rounded-md md:w-3/5 mx-auto mt-10 pb-5 mb-10">
                <h2 className="text-3xl text-center text-black pt-10">Fillup the form for order</h2>
                <div className='bg-[#E6EEE5] my-10 mx-4'>
                    <div className="card shadow-xl">
                        <form onSubmit={handlecheckout} className="card-body text-black">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Your name *</span>
                                </label>
                                <input type="text" name='name' className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Mobile Number *</span>
                                </label>
                                <input type="text" name='number' className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Your Address *</span>
                                </label>
                                <input type="text" name='address' className="input input-bordered bg-white" required />
                            </div>

                            {
                                Array.isArray(carts) && carts.length > 0 ? <>

                                    <div className='mt-10 bg-white rounded-md p-5 text-black'>
                                        <h2 className='text-2xl'>Your Product</h2>
                                        <div className="overflow-x-auto">
                                            <table className="table">
                                                <thead className='text-black'>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        carts.map(cart => <tr key={cart._id}>
                                                            <td>
                                                                <div className="flex items-center gap-3">
                                                                    <div className="avatar">
                                                                        <div className="mask mask-squircle w-12 h-12">
                                                                            <img src={cart.productImgUrl} alt="product" id='pimage' />
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div id='ptitle' className="font-bold">{cart.title}</div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td id='total'>{cart.price} tk </td>
                                                        </tr>)
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                        <h2 className='text-right mr-10'>Total: {subtotal} tk</h2>
                                    </div>

                                </> : <p className='text-black font-bold text-center'>No item found in your cart. Try adding product to the cart</p>
                            }

                            <div className='mt-10 bg-white rounded-md p-5 text-black'>
                                <div className="font-bold">
                                    <h2>Cash on delivery</h2>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Place Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;