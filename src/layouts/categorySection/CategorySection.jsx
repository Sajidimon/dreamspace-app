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
                </> :
                    <div>
                        <p className="text-black mt-20 mb-10 font-bold text-center">Loading Category.</p>
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
                        </div>
                    </div>

            }

        </>
    );
};

export default CategorySection;
