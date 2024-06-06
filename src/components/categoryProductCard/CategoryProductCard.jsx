/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";


const CategoryProductCard = ({ categories }) => {
    
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const { productImgUrl, title, price, _id } = categories;

    const handleAddToCart = id => {
        if (user && user.email) {
            //data will be sent to db
            const cartItem = {
                email: user.email,
                title,
                productImgUrl,
                price
            }

            fetch(`${import.meta.env.VITE_API_URL}/carts`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${title} is added to the cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })


        } else {
            Swal.fire({
                title: "Please Login before continue",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/admin-login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <>
            <div className="rounded-lg mb-10">
                <Link to={`/products/item/${_id}`}>
                    <figure><img src={productImgUrl} alt="product" /></figure>
                </Link>
                <div className="m-3 text-center text-black text-base">
                    <h2>{ title}</h2>
                    <p className="my-3">Price: <span className="text-red-500 font-bold">{ price}tk</span></p>
                    <button onClick={()=>handleAddToCart(_id)} className="btn btn-info btn-sm">add to cart</button>
                </div>
            </div> 
        </>
    );
};

export default CategoryProductCard;