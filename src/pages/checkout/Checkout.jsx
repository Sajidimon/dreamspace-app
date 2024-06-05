
import productImg from '../../assets/tablelamp/tablelamp4.jpg'

const Checkout = () => {
    return (
        <div className='mx-3'>
            <div className="min-h-screen bg-[#C8F3E3] rounded-md md:w-3/5 mx-auto mt-10 pb-5 mb-10">
                <h2 className="text-3xl text-center text-black pt-10">Fillup the form for order</h2>
                <div className='bg-[#E6EEE5] my-10 mx-4'>
                    <div className="card shadow-xl">
                        <form className="card-body text-black">
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Order notes (optional)</span>
                                </label>
                                <input type="text" name='note' className="input input-bordered h-20 bg-white" />
                            </div>
                            <div className='mt-10 bg-white rounded-md p-5 text-black'>
                                <h2 className='text-2xl'>Your Product</h2>
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        <thead className='text-black'>
                                            <tr>
                                                <th>Product</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody> <tr> <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={productImg} alt="product" id='pimage' />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div id='ptitle' className="font-bold">product title</div>
                                                </div>
                                            </div>
                                        </td>
                                            <td>
                                                <input type="number" min='1' defaultValue='1' className='input-sm bg-white border-2 rounded' />
                                            </td>
                                            <td id='total'>2,500 ৳ </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
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