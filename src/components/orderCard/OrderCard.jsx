/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaTrash } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { Link } from "react-router-dom";
import { deleteOrder } from "../../api/order";


const OrderCard = ({ order, orders, setOrders }) => {

    const { customerName, customerNumber, customerAddress, orderDate, total, cartItems, _id } = order;

    //delete single order via id;

    const handleOrderDelete = id => {
        deleteOrder(id).then(() => {
            setOrders(orders.filter(item => item._id !== id))
        }).catch(error => console.log(error))
    }

    return (
        <>
            <tr>
                <td>
                    {
                        cartItems.map(cartItem => <div key={cartItem._id} className="flex items-center gap-3">
                            <div className="avatar mb-3">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={cartItem.productImgUrl} alt="product" />
                                </div>
                            </div>
                            <div>
                                <span className="text-base">{cartItem.title}</span>
                            </div>
                        </div>)
                    }
                    
                </td>
                <td>
                    <span className="text-base">{ customerName}</span>
                </td>
                <td>
                    <span className="text-base">{customerNumber}</span>
                </td>
                <td>
                    <span className="text-base">{customerAddress}</span>
                </td>
                <td className="text-base">{orderDate}</td>
                <td className="text-base">{total } tk</td>
                <td className="flex gap-2">
                    <button onClick={()=>handleOrderDelete(_id)} className="p-2 rounded bg-red-500 text-white border-none"><FaTrash /></button>
                </td>
            </tr>  
        </>
    );
};

export default OrderCard;