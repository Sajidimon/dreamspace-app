
import productimg from '../../assets/tablelamp/tablelamp2.jpg'
import ProductDescription from '../../components/productDescription/ProductDescription';

const SingleProduct = () => {
    return (
        <div>
        <div className="md:grid md:grid-cols-3 my-10">
            <div className=" mx-10">
                <img src={productimg} alt="product" />
            </div>
                <div className="col-span-2 m-5 space-x-4">
                <h2 className="text-3xl text-black font-bold">Abstract Flowers Vases Wall Frame Decor</h2>
                <p className="my-5 font-bold text-xl text-black">Price: <span className='text-red-500'>2,500 tk </span></p>
                <p className="text-black font-sans">
                        <ul className='list-disc'>
                        <li>Width: 43.5 Inches;</li>
                        <li>Width: 43.5 Inches;</li>
                        <li>Width: 43.5 Inches;</li>
                        <li>Width: 43.5 Inches;</li>
                    </ul>
                </p>
                <div className="flex gap-3 my-3">
                    <button className="btn btn-primary rounded-md btn-sm">Buy now</button>
                    <button className="btn btn-primary rounded-md btn-sm">Add to cart</button>
                </div>
            </div>
            </div>
            <ProductDescription/>
        </div>
    );
};

export default SingleProduct;