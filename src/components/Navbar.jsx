import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user, handleSignOut} = useContext(authContext)
    const links = <>
       
            <li className='mx-2'><NavLink to='/'>Home</NavLink></li>
            <li className='mx-2'><NavLink to='/blogs'>Blog</NavLink></li>
            <li className='mx-2'><NavLink to='/aboutUs'>About Us</NavLink></li>
            <li className='mx-2'><NavLink to='/profile'>Profile</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
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
                    <p>
                        {
                            user?.email
                        }
                    </p>
                    <FaUser className='text-xl mr-2'></FaUser>
                    {
                        user ? <button onClick={handleSignOut} className="btn">Logout</button> : <Link to='/login' className="btn">Login</Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;