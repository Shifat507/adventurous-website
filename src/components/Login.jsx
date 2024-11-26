import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../provider/AuthProvider';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { handleLogin, setUser } = useContext(authContext);
    const [error, setError] = useState({})
    const handleSubmitLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log(email, password);
        handleLogin(email, password)
            .then(res => {
                const user = res.user;
                setUser(user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {

                setError({ ...error, login: err.code })

            })
    }
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-24">
                <form onSubmit={handleSubmitLogin} className="card-body">
                    <h2 className='text-4xl font-bold my-3 mx-auto'>Login</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        {
                            error.login && (
                                <label className="label text-red-600">
                                    {error.login}
                                </label>
                            )
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        {/* <div className="divider">OR</div>
                        <button className="btn btn-wide">Signin With Google</button> */}
                    </div>
                    <p className='text-sm font-semibold'>Do not have account? <Link to='/register' className='text-red-600 underline'> Register Now</Link></p>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;