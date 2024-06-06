/* eslint-disable react/prop-types */


const ProductDescription = ({ description }) => {
    return (
        <div className="m-5">
            <h2 className="text-black text-xl my-5 font-bold">Description</h2>
            <div className="border p-5">
                <p>{ description}</p>
            </div>
        </div>
    );
};

export default ProductDescription;