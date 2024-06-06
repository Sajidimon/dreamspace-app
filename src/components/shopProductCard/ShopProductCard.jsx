/* eslint-disable react/prop-types */


const ShopProductCard = ({ product }) => {
    
    const { productImgUrl, title, price } = product;

    
    return (
        <>
            <div className="rounded-lg mb-10">
                <figure><img src={productImgUrl} alt="product" /></figure>
                <div className="m-3 text-center text-black text-base">
                    <h2>{title}</h2>
                    <p className="my-3">Price: <span className="text-red-500 font-bold">{price}tk</span></p>
                    <button className="btn btn-info btn-sm">add to cart</button>
                </div>
            </div>
        </>
    );
};

export default ShopProductCard;