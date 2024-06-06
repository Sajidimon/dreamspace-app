/* eslint-disable no-unused-vars */

import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import ProductDescription from '../../components/productDescription/ProductDescription';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const SingleProduct = () => {


    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const singleProduct = useLoaderData();
    const { productImgUrl, title, price, shortdescription, description, _id } = singleProduct;

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

    if (loading) {
        return <span className="loading mx-auto block my-52 loading-dots loading-lg"></span>;
    }


    return (
        <div>
        <div className="md:grid md:grid-cols-3 my-10">
            <div className=" mx-10">
                <img src={productImgUrl} alt="product" />
            </div>
                <div className="col-span-2 m-5 space-x-4">
                    <h2 className="text-3xl text-black font-bold">{ title}</h2>
                    <p className="my-5 font-bold text-xl text-black">Price: <span className='text-red-500'>{ price} tk </span></p>
                <p className="text-black font-sans md:w-1/2">
                        { shortdescription}
                </p>
                <div className="flex gap-3 my-3">
                    <button onClick={()=>handleAddToCart(_id)} className="btn btn-primary rounded-md btn-sm">Add to cart</button>
                </div>
            </div>
            </div>
            <ProductDescription description={ description} />
        </div>
    );
};

export default SingleProduct;