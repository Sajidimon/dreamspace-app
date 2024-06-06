
import { useLoaderData } from 'react-router-dom';
import ProductDescription from '../../components/productDescription/ProductDescription';

const SingleProduct = () => {

    const singleProduct = useLoaderData();
    

    const { productImgUrl, title, price, shortdescription, description } = singleProduct;


    return (
        <div>
        <div className="md:grid md:grid-cols-3 my-10">
            <div className=" mx-10">
                <img src={productImgUrl} alt="product" />
            </div>
                <div className="col-span-2 m-5 space-x-4">
                    <h2 className="text-3xl text-black font-bold">{ title}</h2>
                    <p className="my-5 font-bold text-xl text-black">Price: <span className='text-red-500'>{ price} tk </span></p>
                <p className="text-black font-sans md:w-1/2">
                        { shortdescription}
                </p>
                <div className="flex gap-3 my-3">
                    <button className="btn btn-primary rounded-md btn-sm">Add to cart</button>
                </div>
            </div>
            </div>
            <ProductDescription description={ description} />
        </div>
    );
};

export default SingleProduct;