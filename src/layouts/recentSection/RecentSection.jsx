import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import HomeProductCard from "../../components/homeProductCard/HomeProductCard";
import { Link } from "react-router-dom";


const RecentSection = () => {

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
                
                </>
            }
        </>
    );
};

export default RecentSection;