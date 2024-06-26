
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { saveUser } from '../../api/users';


const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [passworderr, setPassworderr] = useState(null)
    const [emailerr, setEmailerr] = useState(null)
    const navigate = useNavigate();


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        //reset password error;
        setPassworderr(' ');
        setEmailerr(' ');


        //password validation;
        if (password.length < 6) {
            setPassworderr('Password must be minimum 6 character or more')
            return;
        } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
            setPassworderr('Password must contain at least one uppercase and one lowercase letter')
            return;
        }


        // admin registration;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                saveUser(user)
                navigate('/admin-dashboard')
            }).catch(error => {
                if (error?.code === 'auth/email-already-in-use')
                    setEmailerr('Email is already exist')
            })
    }

    return (
        <div className="my-20 mx-10">
            <div className="md:w-1/3 mx-auto">
                <div className="card border border-gray-200 rounded">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email Address</span>
                            </label>
                            <input type="email" name="email" className="input input-bordered bg-white" required />
                            {emailerr && <span className="text-red-500">{emailerr}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Password</span>
                            </label>
                            <input type="password" name="password" className="input input-bordered bg-white" required />
                            {passworderr && <span className="text-red-500">{passworderr}</span>}
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