import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { authContext } from '../provider/AuthProvider';

const Register = () => {
    const { handleRegister, setUser, userUpdatedData } = useContext(authContext);
    const [error, setError] = useState({})
    const [passErr, setPassErr] = useState({});
    const navigate = useNavigate();
    const handleSubmitRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photoUrl = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if(name.length < 5){
            setError({...error, name:"Must me more than 5 character or long"});
            return;
        }

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if(!regex.test(password)){
            setPassErr({...passErr, pass:"Must have at least one uppercase, one lowercase letter and length might be 6 character"});
            return;
            
        }
        handleRegister(email, password)
            .then((res) => {
                const user = res.user;
            
                
                user.displayName = name;
                user.photoURL = photoUrl;

                setUser(user);
                userUpdatedData({
                    displayName:name, photoURL:photoUrl
                })
                .then(() =>{
                    navigate('/');
                })
                .catch(error =>{
                    
                })
            
                
                
            })
            .catch((error) => {
                console.error('Registration Error:', error.message);
            });
    };

    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
                <form onSubmit={handleSubmitRegister} className="card-body">
                <h2 className='text-4xl font-bold my-3 mx-auto'>Registration</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered"
                            required
                        />
                        {
                            error.name && (<label className="label text-xs text-red-600">
                                {error.name}
                            </label>)
                        }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Enter your photo URL"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered"
                            required
                        />
                        {
                            passErr.pass && (<label className="label text-xs text-red-600">
                                {passErr.pass}
                            </label>)
                        }
                    </div>
                    
                    <p className="text-sm font-semibold ms-2 mt-2">
                        Already have an account?{' '}
                        <Link to="/login" className="text-red-600 underline">
                            Login Now
                        </Link>
                    </p>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
