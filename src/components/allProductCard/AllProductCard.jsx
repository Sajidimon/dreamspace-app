/* eslint-disable react/prop-types */

import { FaEdit, FaTrash } from 'react-icons/fa';
import { IoIosEye } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../api/products';

const AllProductCard = ({ product, products, setProducts }) => {

    const { productImgUrl, title, price, category, _id } = product;


    //delete single product via id;

    const handleProductDelete = id => {
        deleteProduct(id).then(() => {
            setProducts(products.filter(item => item._id !== id))
        }).catch(error => console.log(error))
    }
    

    return (
        <>
            <tr >
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={productImgUrl} alt="product" />
                            </div>
                        </div>
                        <div>
                            <span className="text-base">{title}</span>
                        </div>
                    </div>
                </td>
                <td>
                    <span className="text-base">{price}</span>
                </td>
                <td className="text-base">{category}</td>
                <td className="flex gap-2">
                    <Link to={`/products/item/${_id}`}> <button className="p-2 rounded bg-blue-500 text-white border-none"> <IoIosEye /> </button></Link>
                    <Link to={`/admin-dashboard/update-product/${_id}`}> <button className="p-2 rounded bg-green-500 text-white border-none"><FaEdit /> </button></Link>
                    <button onClick={()=>handleProductDelete(_id)} className="p-2 rounded bg-red-500 text-white border-none"><FaTrash /></button>
                </td>
            </tr>
        </>
    );
};

export default AllProductCard;