/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { IoCloseCircleSharp } from "react-icons/io5";
import { deleteCart } from "../../api/carts";

const CartCollection = ({ cart, carts, setCarts }) => {
    
    const { title, productImgUrl, price, _id } = cart;



    //delete single product via id;

    const handleCartDelete = id => {
        deleteCart(id).then(() => {
            setCarts(carts.filter(item => item._id !== id))
        }).catch(error => console.log(error))
    }


    return (
        <>
            <tr>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={productImgUrl} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold leading-relaxed">
                                {title} <button onClick={()=>handleCartDelete(_id)} className="btn btn-sm btn-outline btn-info"> <IoCloseCircleSharp /> Remove</button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>৳{ price}</td>
            </tr> 
        </>
    );
};

export default CartCollection;