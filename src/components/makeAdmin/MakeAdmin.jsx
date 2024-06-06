

const MakeAdmin = () => {
    return (
        <>
            <div className="my-20 mx-10">
                <div className="md:w-1/3 mx-auto">
                    <div className="card border border-gray-200 rounded">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Email Address</span>
                                </label>
                                <input type="email" name="email" className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Make Admin</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default MakeAdmin;