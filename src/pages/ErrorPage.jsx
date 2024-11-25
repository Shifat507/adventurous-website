import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../assets/Oops.jpg'
const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center max-h-screen mt-10'>
            <img src={errorImg} alt="" />
            <div className='flex justify-center'>
                <Link to='/' className="btn btn-wide bg-blue-600 text-white font-semibold mt-8">Go To Homepage</Link>
            </div>
        </div>
    );
};

export default ErrorPage;