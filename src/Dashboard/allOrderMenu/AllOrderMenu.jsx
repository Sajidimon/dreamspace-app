import { FaEdit, FaTrash } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { Link } from "react-router-dom";



const AllOrderMenu = () => {
    return (
        <div className="m-5">
            <div className="flex gap-4 mb-5">
                <h2 className="text-black text-2xl font-bold">Orders</h2>
            </div>
            <div className="overflow-x-auto border p-3 text-black">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="text-black text-base">
                        <tr>
                            <th>Sr</th>
                            <th>Product</th>
                            <th>Customer Name</th>
                            <th>date</th>
                            <th>price</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>1</td>
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
                            <td className="text-base">19/3/2023</td>
                            <td className="text-base">2,900</td>
                            <td className="flex gap-2">
                                <Link to=''> <button className="p-2 rounded bg-blue-500 text-white border-none"> <IoIosEye /> </button></Link>
                                <Link to=''> <button className="p-2 rounded bg-green-500 text-white border-none"><FaEdit /> </button></Link>
                                <button className="p-2 rounded bg-red-500 text-white border-none"><FaTrash /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrderMenu;