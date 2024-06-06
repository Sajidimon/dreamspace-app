import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategorySection = () => {

    const [products, setProducts] = useState(null);

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
                </> : <p className="text-black mt-20 font-bold text-center">No Category found.</p>
            }

        </>
    );
};

export default CategorySection;
