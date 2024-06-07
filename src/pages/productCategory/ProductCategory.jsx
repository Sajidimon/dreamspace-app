import { useLoaderData } from "react-router-dom";
import CategoryProductCard from "../../components/categoryProductCard/CategoryProductCard";


const ProductCategory = () => {

    const categories = useLoaderData();

    return (
        <>
            <div className="my-14 mx-5">
                <div className="md:grid md:grid-cols-4 gap-4">
                    <CategoryProductCard categories={categories} />
                </div>
            </div>
        </>
    );
};

export default ProductCategory;