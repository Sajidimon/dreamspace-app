import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import AllProductCard from "../../components/allProductCard/AllProductCard";


const AllProductMenu = () => {

    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState(null);
    console.log(products);

    //show all products;

    useEffect(() => {
        if (user?.email) {
            fetch(`${import.meta.env.VITE_API_URL}/products?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setProducts(data)
                })
        }
    }, [user?.email])

    return (
        <>
            {
                Array.isArray(products) && <>

                    <div className="m-5">
                        <div className="flex gap-4 mb-5">
                            <h2 className="text-black text-2xl font-bold">Product: { products?.length}</h2>
                            <Link to='/admin-dashboard/addProduct'><button className="btn btn-outline btn-primary btn-sm">Add Product</button></Link>
                        </div>
                        <div className="overflow-x-auto border p-3 text-black">
                            <table className="table">
                                <thead className="text-black text-base">
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Category</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {products.map(product => <AllProductCard key={product._id} product={product} products={products} setProducts={setProducts} />)}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            }

        </>
    );
};

export default AllProductMenu;