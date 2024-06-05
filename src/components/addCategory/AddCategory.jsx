

const AddCategory = () => {
    return (
        <>
            <div className="form-control mt-6 bg-white p-5 border">
                <label className="label">
                    <span className="label-text text-black text-xl">Add Category</span>
                </label>
                <input type="text" placeholder='Enter category' className="input input-bordered bg-white text-black" required />
            </div>
        </>
    );
};

export default AddCategory;