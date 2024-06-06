import { useEffect, useState } from "react";
import HomeProductCard from "../../components/homeProductCard/HomeProductCard";
import { Link } from "react-router-dom";


const RecentSection = () => {

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
                        <h2 className="text-center text-2xl text-black font-bold mb-10">Recent Arrival</h2>
                        <div className="md:grid md:grid-cols-4 gap-4">
                            {
                                products.slice(0, 12).map(product => <HomeProductCard key={product._id} product={ product } /> )
                            }
                            
                        </div>
                        <div className="text-center my-10">
                            <Link to='/shop'><button className="btn btn-primary">Load Product</button></Link>
                        </div>
                    </div>
                
                </> : <p className="text-black my-20 font-bold text-center">No Product found. Please add product.</p>
            }
        </>
    );
};

export default RecentSection;