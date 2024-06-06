import { useLoaderData } from "react-router-dom";
import CategoryProductCard from "../../components/categoryProductCard/CategoryProductCard";


const ProductCategory = () => {

    const categories = useLoaderData();

    console.log(categories);

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