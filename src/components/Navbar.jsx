import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';

const Navbar = () => {
    const { user, handleSignOut, handleGoogleLogin } = useContext(authContext);
    const links = (
        <>
            <li className='mx-2'><NavLink to='/'>Home</NavLink></li>
            <li className='mx-2'><NavLink to='/blogs'>Blog</NavLink></li>
            <li className='mx-2'><NavLink to='/aboutUs'>About Us</NavLink></li>
            {
                user && <li className='mx-2'><NavLink to='/profile'>Profile</NavLink></li>
            }
        </>
    );

    const handleGoogleClick = () => {
        handleGoogleLogin()
            .then((result) => {
                const user = result.user;
                // setUser(user); // If you need to update local state here
                navigate("/"); // Redirect to the homepage
            })
            .catch((error) => {
                console.error("Google Sign-In Error:", error.message);
            });
    };

    return (
        <div>
            <div className="navbar bg-base-100 md:my-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">Adventurous</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <p>
                        {user?.email}
                    </p> */}
                    {
                        user ?
                            <div className='mt-3'>
                                <div className="tooltip" data-tip={user.displayName}>
                                    <img className='w-6 h-6 md:w-10 md:h-10 rounded-full mx-1 md:mx-4 ' src={user.photoURL} alt="" />
                                </div>
                            </div>
                            : <FaUser className='text-xl mr-2'></FaUser>
                    }
                    {
                        user ? 
                            <button onClick={handleSignOut} className="btn">Logout</button> 
                            : 
                            <div className='flex justify-center items-center'>
                                <Link to='/login' className="btn">Login</Link>
                                <button onClick={handleGoogleClick} className='btn ml-2 text-2xl'>
                                    <FcGoogle />
                                </button>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
