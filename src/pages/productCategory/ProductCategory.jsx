import { useLoaderData } from "react-router-dom";
import CategoryProductCard from "../../components/categoryProductCard/CategoryProductCard";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const ProductCategory = () => {

    const { loading } = useContext(AuthContext)
    const categories = useLoaderData();


    if (loading) {
        return <span className="loading mx-auto block my-52 loading-dots loading-lg"></span>;
    }

    return (
        <>
            <div className="my-14 mx-5">
                <h2 className="text-center text-2xl text-black font-bold mb-10">{categories.category}</h2>
                <div className="md:grid md:grid-cols-4 gap-4">
                    <CategoryProductCard categories={categories} />
                </div>
            </div>
        </>
    );
};

export default ProductCategory;