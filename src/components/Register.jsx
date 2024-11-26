import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../provider/AuthProvider';

const Register = () => {
    const { handleRegister, setUser } = useContext(authContext);

    const handleSubmitRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photoUrl = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

     
        handleRegister(email, password)
            .then((res) => {
                const user = res.user;
                
                
                user.displayName = name;
                user.photoURL = photoUrl;

                setUser(user);
                console.log('Registered User:', user.email);
            })
            .catch((error) => {
                console.error('Registration Error:', error.message);
            });
    };

    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
                <form onSubmit={handleSubmitRegister} className="card-body">
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
