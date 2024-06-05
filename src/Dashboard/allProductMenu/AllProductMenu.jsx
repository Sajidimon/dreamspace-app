import { Link } from "react-router-dom";


const AllProductMenu = () => {
    return (
        <div className="m-5">
            <div className="flex gap-4 mb-5">
                <h2 className="text-black text-2xl font-bold">Product</h2>
                <Link to='/admin-dashboard/addProduct'><button className="btn btn-outline btn-primary btn-sm">Add Product</button></Link>
            </div>
            <div className="overflow-x-auto border p-3 text-black">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="text-black text-base">
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="product" />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-base">Hart Hagerty</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="text-base">Hart Hagerty</span>
                            </td>
                            <td className="text-base">Purple</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProductMenu;