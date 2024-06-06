import { useContext, useEffect, useState } from "react";
import ShopProductCard from "../../components/shopProductCard/ShopProductCard";
import { AuthContext } from "../../provider/AuthProvider";


const Shop = () => {

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

                    <div className="my-14 mx-5">
                        <h2 className="text-center text-2xl text-black font-bold mb-10">shop</h2>
                        <div className="md:grid md:grid-cols-4 gap-4">
                            {
                                products.map(product => <ShopProductCard key={product._id} product={product} />)
                            }

                        </div>
                    </div>

                </>
            }
        </>
    );
};

export default Shop;