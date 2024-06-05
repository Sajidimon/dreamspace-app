import { Link } from "react-router-dom";
import productimg from '../../assets/tablelamp/tablelamp3.jpg'

const Cart = () => {
    return (
        <div className="md:grid md:grid-cols-3 gap-3 my-20 mx-10 text-black">
            <div className="col-span-2">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="text-black text-lg">
                            <tr>
                                <th>PRODUCT</th>
                                <th>PRICE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={productimg} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Abstract Flowers Vases Wall Frame Decor</div>
                                        </div>
                                    </div>
                                </td>
                                <td>৳6,550.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="border-2 border-black text-black p-3 mt-5">
                <h2 className="text-lg font-bold underline">Cart Totals</h2>
                <div className="flex justify-between my-5">
                    <h2>Subtotal</h2>
                    <h2>৳11,700.00</h2>
                </div>
                <div className="text-center">
                    <Link to='/checkout'><p><button className="btn btn-outline btn-primary btn-sm w-full mt-5">Proceed to checkout</button></p></Link>
                    <Link to='/'><p><button className="btn btn-primary btn-sm w-full mt-3 mb-5">Continue to shopping</button></p></Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;