import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {

    const [showpassword, setShowpassword] = useState(false);



    return (
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
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-black">Password</span>
                            </label>
                            <input
                                type={showpassword ? "text" : "password"}
                                className="textarea textarea-bordered bg-white" name="password" required />
                            <span onClick={() => setShowpassword(!showpassword)} className="absolute top-[50px] right-3">
                                {showpassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        {/* {passworderr && <span className="text-red-500">{passworderr}</span>} */}
                    </form>
                </div>
                <p className="mt-5">
                    <Link to='/admin-register'><span>Register</span></Link> | <Link><span>Lost your password?</span></Link></p>
            </div>
        </div>
    );
};

export default Login;