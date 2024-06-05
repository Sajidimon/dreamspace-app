

const FeaturedImg = () => {
    return (
        <>
            <div className="form-control mt-6 bg-white p-5 border">
                <label className="label">
                    <span className="label-text text-black text-xl">Product Image</span>
                </label>
                <input type="file" className="file-input bg-white file-input-bordered file-input-info file-input-sm" required />
            </div>
        </>
    );
};

export default FeaturedImg;