import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const CategorySection = () => {

    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState(null);

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
                        <h2 className="text-center text-2xl text-black font-bold mb-10">Top Category</h2>
                        <div className="md:grid md:grid-cols-4 gap-4">

                            {
                                products.slice(0, 4).map(product => <div key={product._id} className="card mb-5">
                                    <Link to={`/products/category/${product.category}`}><figure><img src={product.productImgUrl} alt="table lamp" /></figure></Link>
                                    <h2 className="m-4 text-black font-bold text-center">{product.category}</h2>
                                </div>)
                            }

                        </div>
                    </div>
                </>
            }

        </>
    );
};

export default CategorySection;
