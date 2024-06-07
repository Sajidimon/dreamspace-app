import { useEffect, useState } from "react";
import ShopProductCard from "../../components/shopProductCard/ShopProductCard";


const Shop = () => {

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

                </> : 
                    <div>
                        <p className="text-black mt-20 mb-10 font-bold text-center">Loading shop.</p>
                        <div className="md:grid md:grid-cols-4 gap-4">
                            <div className="flex flex-col gap-4 m-5">
                                <div className="skeleton h-32 w-full bg-[#E5E6E6]"></div>
                                <div className="skeleton h-4 w-28 bg-[#E5E6E6]"></div>
                                <div className="skeleton h-4 w-full bg-[#E5E6E6]"></div>
                                <div className="skeleton h-4 w-full bg-[#E5E6E6]"></div>
                            </div>
                            <div className="flex flex-col gap-4 m-5">
                                <div className="skeleton h-32 w-full bg-[#E5E6E6]"></div>
                                <div className="skeleton h-4 w-28 bg-[#E5E6E6]"></div>
                                <div className="skeleton h-4 w-full bg-[#E5E6E6]"></div>
                                <div className="skeleton h-4 w-full bg-[#E5E6E6]"></div>
                            </div>
                            <div className="flex flex-col gap-4 m-5">
                                <div className="skeleton h-32 w-full bg-[#E5E6E6]"></div>
                                <div className="skeleton h-4 w-28 bg-[#E5E6E6]"></div>
                                <div className="skeleton h-4 w-full bg-[#E5E6E6]"></div>
                                <div className="skeleton h-4 w-full bg-[#E5E6E6]"></div>
                            </div>
                            <div className="flex flex-col gap-4 m-5">
                                <div className="skeleton h-32 w-full bg-[#E5E6E6]"></div>
                                <div className="skeleton h-4 w-28 bg-[#E5E6E6]"></div>
                                <div className="skeleton h-4 w-full bg-[#E5E6E6]"></div>
                                <div className="skeleton h-4 w-full bg-[#E5E6E6]"></div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Shop;