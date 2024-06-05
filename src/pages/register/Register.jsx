
import { Link } from 'react-router-dom';


const Register = () => {


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
                            {/* {emailerr && <span className="text-red-500">{emailerr}</span>} */}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Password</span>
                            </label>
                            <input type="password" name="password" className="input input-bordered bg-white" required />
                            {/* {passworderr && <span className="text-red-500">{passworderr}</span>} */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Registration</button>
                        </div>
                    </form>
                </div>
                <p className="mt-5"><Link to='/admin-login'><span>Login</span></Link> | <Link to='/'><span>Back to the site ?</span></Link></p>
            </div>
        </div>
    );
};

export default Register;