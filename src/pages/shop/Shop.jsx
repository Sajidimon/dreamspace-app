import { useContext, useEffect, useState } from "react";
import ShopProductCard from "../../components/shopProductCard/ShopProductCard";
import { AuthContext } from "../../provider/AuthProvider";


const Shop = () => {

    const { loading } = useContext(AuthContext)
    const [products, setProducts] = useState(null);
    console.log(products);

    //show all products;

    useEffect(() => {
            fetch(`${import.meta.env.VITE_API_URL}/products`)
                .then(res => res.json())
                .then(data => {
                    setProducts(data)
                })
    }, [])

    if (loading) {
        return <span className="loading mx-auto block my-52 loading-dots loading-lg"></span>;
    }

    return (
        <>
            {
                Array.isArray(products) && products.length > 0 ? <>

                    <div className="my-14 mx-5">
                        <h2 className="text-center text-2xl text-black font-bold mb-10">shop</h2>
                        <div className="md:grid md:grid-cols-4 gap-4">
                            {
                                products.map(product => <ShopProductCard key={product._id} product={product} />)
                            }

                        </div>
                    </div>

                </> : <p className="text-black my-20 font-bold text-center">No Product found. Please add product.</p>
            }
        </>
    );
};

export default Shop;